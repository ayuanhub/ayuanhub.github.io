---
sidebar_position: 46
title: EBILL(總行手動提供)(SKFH)
---

### VW_ODS_M_CSCIN

#### 統計
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SNAP_DATE         | DATE               | 資料日期        |    |
|     | CSCIN_CNT         | NUMBER(15, 0)       | 客服系統進線次數    |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |    |

### VW_ODS_M_DSB_OT_SRC

#### 外部資料(人工mail提供)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SNAP_DATE         | DATE               | 資料日期        |    |
| PK  | ITEM_NO           | VARCHAR2(10 char)  | 項目代號        |    |
|     | ITEM_NAME         | VARCHAR2(200 char) | 項目說明        |    |
|     | ITEM_VAL          | NUMBER(15, 0)       | 項目value     |    |
|     | ITEM_MEMO         | VARCHAR2(200 char) | 項目來源/提供者註記  |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |    |

### VW_ODS_M_EBILL1

#### 電子綜合月結單統計
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SNAP_DATE         | DATE               | 資料日期        |    |
|     | EBILL_DP_CNT      | NUMBER(15, 0)       | 電子綜合月結單份數   |    |
|     | EBILL_CRD_CNT     | NUMBER(15, 0)       | 信用卡電子帳單份數   |    |
|     | EBILL_AT_CNT      | NUMBER(15, 0)       | 自動化業務帳單份數   |    |
|     | EBILL_TR_CNT      | NUMBER(15, 0)       | 信託帳單份數      |    |
|     | EBILL_CRD_REL_CNT | NUMBER(15, 0)       | 信用卡實體帳單份數   |    |
|     | EBILL_DP_APLY_CNT | NUMBER(15, 0)       | 申請電子綜合月結單戶數 |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |
