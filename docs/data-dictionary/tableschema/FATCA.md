---
sidebar_position: 23
title: 手動上傳(FATCAFDINT)(FATCA)
---

### VW_ODS_Y_FATCADPINT

#### FATCA台幣存款利息
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IP_ID       | VARCHAR2(11 char) | 客戶ID       |    |
|     | ACCT_NO     | VARCHAR2(20 char) | 帳號         |    |
|     | INT_AMT     | NUMBER(16, 2)      | 金額         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間     |    |

### VW_ODS_Y_FATCAFDINT

#### FATCA外幣存款利息
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IP_ID       | VARCHAR2(11 char) | 客戶ID       |    |
|     | ACCT_NO     | VARCHAR2(20 char) | 帳號         |    |
|     | CUR         | VARCHAR2(3 char)  | 幣別         |    |
|     | INT_AMT     | NUMBER(16, 2)      | 金額         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間     |    |

### VW_ODS_Y_FATCAPMS

#### FATCA保管資產FATCAMS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IP_ID       | VARCHAR2(11 char) | 客戶ID       |    |
|     | CUR         | VARCHAR2(3 char)  | 幣別         |    |
|     | ACCT_AMT    | NUMBER(20, 2)      | 金額         |    |
|     | BRCH        | VARCHAR2(4 char)  | 分行代號       |    |
|     | CUST_NO     | VARCHAR2(12 char) | 客戶編號       |    |
|     | KIND        | VARCHAR2(5 char)  | 類別         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間     |    |

### VW_ODS_Y_FATCATMS

#### FATCA他自益信託資產FATCATMS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IP_ID       | VARCHAR2(11 char) | 客戶ID       |    |
|     | CUR         | VARCHAR2(3 char)  | 幣別         |    |
|     | ACCT_AMT    | NUMBER(20, 2)      | 金額         |    |
|     | BRCH        | VARCHAR2(4 char)  | 分行代號       |    |
|     | KIND        | VARCHAR2(5 char)  | 類別         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間     |    |

### VW_ODS_Y_FATCATRUST

#### FATCA特金信託資產FATCATRUST
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IP_ID       | VARCHAR2(11 char) | 客戶ID       |    |
|     | PROD_NO     | VARCHAR2(15 char) | 憑證號碼(取代帳號) |    |
|     | PROD_KIND   | VARCHAR2(12 char) | 產品編號       |    |
|     | CUR         | VARCHAR2(3 char)  | 幣別         |    |
|     | ACCT_AMT    | NUMBER(21, 6)      | 金額/淨值      |    |
|     | PROD_UNIT   | NUMBER(21, 6)      | 面額/單位數     |    |
|     | KIND        | VARCHAR2(5 char)  | 類別         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間     |
