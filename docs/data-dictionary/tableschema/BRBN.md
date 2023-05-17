---
sidebar_position: 2
title: 分行系統(BRBN)
---

### VW_ODS_D_BRBNEJF
#### 端末電子序時記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TXDAY     | VARCHAR2(8 char)    | 交易日       |  [連結](/docs/data-dicionary/basic-setting#samst_wash_nochk_mark)   |
| PK  | BRNO      | VARCHAR2(4 char)    | 分行代號     |      |
| PK  | EJFNO     | VARCHAR2(6 char)    | 端末流水序號 |      |
|     | WSNO      | VARCHAR2(20 char)   | 工作站號     |      |
|     | TLRNO     | VARCHAR2(6 char)    | 櫃員代號     |      |
|     | TCNT      | VARCHAR2(7 char)    | 中心交易序號 |      |
|     | TXCD      | VARCHAR2(5 char)    | 交易代號     |      |
|     | ACTNO     | VARCHAR2(20 char)   | 帳號         |      |
|     | TXAMT     | NUMBER(13,2)        | 交易金額     |      |
|     | SUPCD     | VARCHAR2(6 char)    | 主管代號 1   |      |
|     | TXTIME    | VARCHAR2(6 char)    | 交易時間     |      |
|     | MSGID     | VARCHAR2(4 char)    | 訊息代號     |      |
|     | TXFLAG    | VARCHAR2(1 char)    | 交易狀態     |      |
|     | TIMHDR    | VARCHAR2(51 char)   | inputheader  |      |
|     | TIMLBL    | VARCHAR2(147 char)  | inputlabel   |      |
|     | TIMTEXT   | VARCHAR2(2048 char) | inputtext    |      |
|     | RESULT    | VARCHAR2(1 char)    | 交易結果     |      |
|     | BEFOREIMG | VARCHAR2(4 char)    | 未知         |      |
|     | AFTERIMG  | VARCHAR2(4 char)    | 未知         |      |
|     | APSERVER  | VARCHAR2(12 char)   | 未知         |      |