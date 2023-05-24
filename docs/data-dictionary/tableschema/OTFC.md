---
sidebar_position: 42
title: 應收帳款系統(OTFC)
---

### VW_ODS_D_FACTDATA

#### 應收帳款明細(依日曆日)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BRANCH_ID       | VARCHAR2(4 char)  | 分行代碼   |    |
|     | PRIMARY_ID      | VARCHAR2(11 char) | 賣方客戶ID |    |
|     | AO_ID           | VARCHAR2(7 char)  | 經管AO   |    |
|     | BUSS_TYPE       | VARCHAR2(60 char) | 業務類別   |    |
|     | APPROVE_NO      | VARCHAR2(12 char) | 核准編號   |    |
|     | TRANS_NO        | VARCHAR2(30 char) | 交易編號   |    |
|     | CURRENCY        | VARCHAR2(3 char)  | 幣別     |    |
|     | DOC_AMT         | NUMBER(15, 2)      | 憑單金額   |    |
|     | DOC_REMG_AMT    | NUMBER(15, 2)      | 憑單餘額   |    |
|     | INIT_PRE_AMT    | NUMBER(15, 2)      | 預支金額   |    |
|     | OUTSTANDING_AMT | NUMBER(15, 2)      | 現欠餘額   |    |
|     | REC_CHARGE      | NUMBER(15, 2)      | 應收管理費  |    |
|     | CHARGE          | NUMBER(15, 2)      | 實收管理費  |    |
|     | REC_INT         | NUMBER(15, 2)      | 應收利息   |    |
|     | INT             | NUMBER(15, 2)      | 實收利息   |    |
|     | BUYER_ID        | VARCHAR2(11 char) | 買方客戶ID |    |
|     | BUYER_NAME      | VARCHAR2(50 char) | 買方客戶名稱 |    |
|     | RATE            | NUMBER(10, 6)      | 利率     |    |
|     | APRV_DATE       | DATE              | 核准日    |    |
|     | LN_BAL          | DATE              | 貸放日    |    |
|     | DUE_DATE        | DATE              | 到期日    |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間 |
