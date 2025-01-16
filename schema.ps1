# 載入SQL Server模組
Import-Module SqlServer

# 讀取 params.txt 檔案內容，存放資料庫參數位置
$paramsContent = Get-Content -Path "params.txt" -Raw

# 將內容轉換為可操作的powershell物件
$servers = $paramsContent | ConvertFrom-Json


# 查詢所有表格及其欄位資訊的SQL語句
$query = @"
SELECT 
	ROW_NUMBER() OVER (PARTITION BY t.name ORDER BY c.column_id) AS Sequence,
    t.name AS TABLE_NAME,
    c.name AS ColumnName,
    ep.name AS ColumnNameChinese,
    tp.name AS DataType,
    CASE 
        WHEN tp.name IN ('nvarchar', 'nchar') THEN c.max_length / 2
        ELSE c.max_length
    END AS Length,
    CASE 
        WHEN pk.index_id IS NOT NULL THEN 'V'
        ELSE NULL
    END AS IsPK,
    CASE c.is_nullable
        WHEN 0 THEN NULL
        WHEN 1 THEN 'V'
    END AS IsNull,
	ep.value AS Note,
    tbl_desc.name AS TableDescription    
FROM 
    (SELECT object_id, name FROM sys.tables WITH (NOLOCK)
     UNION ALL
     SELECT object_id, name FROM sys.views WITH (NOLOCK)) t
    INNER JOIN sys.columns  c WITH (NOLOCK)ON t.object_id = c.object_id
    INNER JOIN sys.types tp WITH (NOLOCK) ON c.user_type_id = tp.user_type_id
    LEFT JOIN sys.extended_properties ep WITH (NOLOCK) ON t.object_id = ep.major_id AND c.column_id = ep.minor_id AND ep.class = 1
    LEFT JOIN sys.extended_properties tbl_desc WITH (NOLOCK) ON t.object_id = tbl_desc.major_id AND tbl_desc.minor_id = 0 AND tbl_desc.class = 1
    LEFT JOIN (
        SELECT 
            idx_col.object_id,
            idx_col.column_id,
            idx.index_id
        FROM 
            sys.indexes idx WITH (NOLOCK)
            INNER JOIN sys.index_columns idx_col WITH (NOLOCK) ON idx.object_id = idx_col.object_id AND idx.index_id = idx_col.index_id
        WHERE 
            idx.is_primary_key = 1
    ) pk  ON c.object_id = pk.object_id AND c.column_id = pk.column_id
WHERE t.name IN (
'CEmpFlowShare',
'CEmpShare',
'Company',
'COrgFlowShare',
'COrgShare',
'Daily_EmpShareLog',
'EmpAddition',
'EmpFlowShare',
'EmpPosition',
'EmpShare',
'EmpWorkType',
'OrgFlowShare',
'OrgShare',
'Position',
'vw_EmpShare',
'WorkType',
'WorkSite',
'PS_UserProxy',
'PU_CodeMap',
'SE_Company',
'SE_Dept',
'SE_EmpAddition',
'SE_NonHRSysUser',
'SE_Organ',
'SE_Property',
'SE_User',
'SE_WorkType',
'DocUser',
'OCProxy',
'WorkDay'
)
ORDER BY 
    t.name, 
    c.column_id;
"@


$count = 1
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

    # 初始化Markdown內容
    $markdownContent = ""

    # 取得所有表格名稱及其描述
    $tableInfos = $tables | Select-Object -Property TABLE_NAME, TableDescription -Unique	

    # 取得當前日期和時間
    $currentDate = Get-Date

    # 格式化日期為 "yyyy/MM/dd HH:mm"
    $formattedDate = $currentDate.ToString("yyyy/MM/dd HH:mm")

    $markdownContent += "---`nsidebar_position: $count`ntitle: $databaseName`n---`n`n#### 修改日期：$formattedDate`n`n"
    $count += 1

    # 迭代每個表格
    foreach ($tableInfo in $tableInfos) {
        $tableName = $tableInfo.TABLE_NAME
        $tableDescription = $tableInfo.TableDescription
        $markdownContent += "### $tableName - $tableDescription`n"
        $markdownContent += "序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | `n"
        $markdownContent += "|-----------|-----------|------------|------------|------------|------------|------------|-----------|`n"
        
        # 取得該表格的欄位資訊
        $columns = $tables | Where-Object { $_.TABLE_NAME -eq $tableName }
        
        # 迭代每個欄位
        foreach ($column in $columns) {
			$sequence = $column.Sequence
            $columnName = $column.ColumnName
            $columnNameChinese = $column.ColumnNameChinese
            $dataType = $column.DataType
            $maxLength = $column.Length
            $isPK = $column.isPK
            $isNull = $column.isNull
			$note = $column.Note
            
            $markdownContent += "| $sequence | $columnName | $columnNameChinese | $dataType | $maxLength | $isPK | $isNull | $note |`n"
        }
        
        $markdownContent += "`n"
    }

    # 將Markdown內容寫入檔案
    # $outputFilePath = "D:\$databaseName.md"
    $outputFilePath = "./docs/data-dictionary/tableschema/$databaseName.md"
    [System.IO.File]::WriteAllText($outputFilePath, $markdownContent, [System.Text.Encoding]::UTF8)

    Write-Output "Markdown file has been generated at $outputFilePath"
}