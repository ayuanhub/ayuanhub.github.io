---
sidebar_position: 4
title: 貸款
---

### Web API
- Method : Get
- 測試url : https://tiumcanner01/api/data_engineering_63116/loan?cust_id={id}
- 正式url : https://piuxhoddvd01/api/data_engineering_80320/loan?cust_id={id}

### Input

| 上行服務參數        | Type   | 長度 | 備註             | 參數說明      |
|---------------|--------|----|----------------|-----------|
| Authorization | string | -  | 位於 HTTP Header |           |
| cust_id    | string | 10 | `必填`             | 顧客ID  |
### Output