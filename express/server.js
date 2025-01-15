// server.js
const express = require('express');
const sql = require('mssql');
const { exec } = require('child_process');
const path = require('path');

const app = express();

// 解析 JSON 請求
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

// SQL Server 連接配置
const dbConfig = {
    user: 'DataDictionary_User',
    password: '1qaz!QAZ',
    server: '10.11.42.34',
    database: 'HRISDB',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        // enableArithAbort: true
    }
  };

// 定義一個 POST 路由來處理 PowerShell 腳本執行
app.post('/run-powershell', (req, res) => {
  const scriptPath = path.resolve(__dirname, req.body.scriptPath);

  // 使用 child_process 模組來執行 PowerShell 命令
  exec(`powershell -File "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(error.message);
    }
    res.send(stdout ? stdout : stderr);
  });
});

app.get('/api/express/getSQLJobStatus', async (req, res) => {
  try {
      await sql.connect(dbConfig);
      const result = await sql.query`use msdb; SELECT
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
    sysjobs j
LEFT JOIN
    sysjobhistory h ON j.job_id = h.job_id
WHERE
    h.step_id = 0 -- 只查詢 Job 的最終狀態
    --j.name = 'JOB-109081-Batch_InsertToHRISDB'
ORDER BY
    h.run_date DESC, h.run_time DESC;`;
      res.json(result.recordset);
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
});


app.listen(process.env.PORT);