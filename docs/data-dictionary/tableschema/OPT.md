---
sidebar_position: 40
title: 外匯選擇權系統(OPT)
---

### VW_ODS_D_QUOSTAOPT

#### 額度統計表_by國別
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | SNAP_DATE      | DATE             | 資料日期       |    |
|     | CNTRY          | VARCHAR2(2 char) | 保證人/交易對手國別 |    |
|     | CUR            | VARCHAR2(3 char) | 額度幣別       |    |
|     | LMT            | NUMBER(18, 2)     | 佔用總額度      |    |
|     | NET_REV        | NUMBER(18, 2)     | 美金總正數損益    |    |
|     | OWNR_CNTRY     | VARCHAR2(2 char) | 公司負責人國別    |    |
|     | TBL_UPD_TIM    | TIMESTAMP        | 表格更新時間     |    |

### VW_ODS_D_RECSTAOPT

#### 債權明細
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATADATE       | DATE             | 資料日期       |    |
|     | STATENAME      | VARCHAR2(2 char) | 保證人/交易對手國別 |    |
|     | CCY            | VARCHAR2(3 char) | 幣別         |    |
|     | RECEIVABLE     | NUMBER(18, 2)     | 應收款原幣金額    |    |
|     | RECEIVABLE_USD | NUMBER(18, 2)     | 應收款折美金額    |    |
|     | OWNR_CNTRY     | VARCHAR2(2 char) | 公司負責人國別    |    |
|     | TBL_UPD_TIM    | TIMESTAMP        | 表格更新時間     |
