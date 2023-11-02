---
sidebar_position: 7
title: 行為洞察
---

### Web API
- Method : `Get`
- 測試url : https://tiumcanner01/api/data_engineering_63116/behavior?cust_id={id}
- 正式url : https://piuxhoddvd01/api/data_engineering_80320/behavior?cust_id={id}

### Input

| 上行服務參數        | Type   | 長度 | 備註             | 參數說明      |
|---------------|--------|----|----------------|-----------|
| Authorization | string | -  | 位於 HTTP Header |           |
| cust_id    | string | 10 | `必填`             | 顧客ID  |
### Output