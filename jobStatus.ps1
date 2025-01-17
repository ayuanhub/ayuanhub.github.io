# 載入SQL Server模組
Import-Module SqlServer

# 讀取 params.txt 檔案內容，存放資料庫參數位置
$paramsContent = Get-Content -Path "params.txt" -Raw

# 將內容轉換為可操作的powershell物件
$servers = $paramsContent | ConvertFrom-Json


# 查詢所有表格及其欄位資訊的SQL語句
$query = @"
use msdb; SELECT
    j.name AS JobName,
    CASE
        WHEN j.name = 'JOB-109081-Batch_InsertToHRISDB' THEN '將組織員工等資料由HRISDB暫存檔更新到HRISDB主檔'
    END AS JobNameChinese,
    --h.run_date AS RunDate,
    --h.run_time AS RunTime,
    FORMAT(
        CONVERT(DATETIME,
            STUFF(STUFF(STUFF(CAST(h.run_date AS CHAR(8)) + RIGHT('000000' + CAST(h.run_time AS VARCHAR(6)), 6), 13, 0, ':'), 11, 0, ':'), 9, 0, ' ')
        ), 'yyyy-MM-dd HH:mm:ss'
    ) AS RunDateTime,
    h.run_duration,
    CASE
        WHEN h.run_status = 0 THEN '失敗'
        WHEN h.run_status = 1 THEN '成功'
        WHEN h.run_status = 2 THEN '重試'
        WHEN h.run_status = 3 THEN '取消'
        WHEN h.run_status = 4 THEN '進行中'        
    END AS JobStatus
FROM
    sysjobs j WITH(nolock)
LEFT JOIN
    sysjobhistory h WITH(nolock) ON j.job_id = h.job_id
WHERE
    h.step_id = 0 -- 只查詢 Job 的最終狀態
    --j.name = 'JOB-109081-Batch_InsertToHRISDB'
ORDER BY
    h.run_date DESC, h.run_time DESC;
"@

# 初始化Markdown內容
$markdownContent = ""

# 取得當前日期和時間
$currentDate = Get-Date

# 格式化日期為 "yyyy/MM/dd HH:mm"
$formattedDate = $currentDate.ToString("yyyy/MM/dd HH:mm")

$markdownContent += "---`nsidebar_position: 2`ntitle: SQL Job執行狀況`n---`n`n#### 修改日期：$formattedDate`n`n"

$markdownContent += "SQL Job | 名稱 | 上次執行時間 | 執行時間(秒) | 狀態 | `n"
$markdownContent += "|-----------|-----------|------------|------------|------------|`n"

foreach ($server in $servers) {
    $serverName = $server.serverName
    $databaseName = $server.databaseName
    $uid = $server.uid

    $encryptedPassword = Get-Content ".\$databaseName.txt"   
    $securePassword = ConvertTo-SecureString $encryptedPassword
    $pwd = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword))

    # $connectionString = "Data Source="+$DBip+";Initial Catalog=HRISDB;User ID=DataDictionary_User;Password="+$originalString+";" 

    $connectionString = "Server=$serverName;Database=$databaseName;uid=$uid;pwd=$pwd;"

    # 執行查詢並取得結果
    $tables = Invoke-Sqlcmd -ConnectionString $connectionString -Query $query

    
    foreach ($column in $tables){
        $jobName = $column.JobName
        $jobNameChinese = $column.JobNameChinese
        $runDateTime = $column.RunDateTime
        $run_duration = $column.run_duration
        # $jobStatus = $column.run_duration

        if ($column.JobStatus -eq "成功"){
            $jobStatus = '<span class="success">成功</span>'
        }
        elseif ($column.JobStatus -eq "失敗"){
            $jobStatus = '<span class="failure">失敗</span>'
        }
        else {
            $jobStatus = $column.run_duration
        }

        $markdownContent += "| $jobName | $jobNameChinese | $runDateTime | $run_duration | $jobStatus |`n"
    }

    $markdownContent += "`n"
}

    # 將Markdown內容寫入檔案
    # $outputFilePath = "D:\$databaseName.md"
    $outputFilePath = "./docs/jobStatus.md"
    [System.IO.File]::WriteAllText($outputFilePath, $markdownContent, [System.Text.Encoding]::UTF8)

    Write-Output "Markdown file has been generated at $outputFilePath"