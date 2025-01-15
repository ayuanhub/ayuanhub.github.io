export default function getAPI(name) {  
  const getJobStatus = async () => {
    try {
      const response = await fetch('https://hrisdb-uat.test/api/express/getSQLJobStatus', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }


      var result = await response.json();
      // alert(result);

      // 創建 table 元素
      var table = document.createElement('table');
      
      // 創建 thead 元素
      var thead = document.createElement('thead');
      var headerRow = document.createElement('tr');

      // 創建並添加表頭
      var headers = ['SQL Job', '名稱', '上次執行時間', '執行時間(秒)', '狀態'];
      headers.forEach(function (headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // 創建 tbody 元素
      var tbody = document.createElement('tbody');
      
      // 創建並添加表格內容
      result.forEach(rowData => {           
        var row = document.createElement('tr');
        if (rowData.JobStatus == '成功')
          row.className = "success";
        else if (rowData.JobStatus == '失敗')
          row.className = 'failure';
        else
          row.className = 'nothing';

        var jobNameCell = document.createElement('td');
        jobNameCell.textContent = rowData.JobName;
        row.appendChild(jobNameCell);

        var jobNameChineseCell = document.createElement('td');
        jobNameChineseCell.textContent = rowData.JobNameChinese;
        row.appendChild(jobNameChineseCell);

        var runDateTimeCell = document.createElement('td');
        runDateTimeCell.textContent = rowData.RunDateTime;
        row.appendChild(runDateTimeCell);

        var runDurationCell = document.createElement('td');
        runDurationCell.textContent = rowData.run_duration;
        row.appendChild(runDurationCell);

        var jobStatusCell = document.createElement('td');
        jobStatusCell.textContent = rowData.JobStatus;
        row.appendChild(jobStatusCell);

        tbody.appendChild(row);
      });

      table.appendChild(tbody);
  
      document.getElementById(name).appendChild(table);    
    }
    catch (error) {
      console.error('Fetch error:', error);
    }
  };

  if (name == 'jobStatus')  
    getJobStatus();
  
  // const runPowerShell = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3001/run-powershell', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ scriptPath: 'D://test.ps1' }), // 指定 PowerShell 腳本的相對路徑
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.text();
  //     console.log(result);
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //   }
  // };
}