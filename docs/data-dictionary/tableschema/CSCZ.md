---
sidebar_position: 11
title: 台幣核心系統 -共用(CSCZ)
---

### VW_ODS_D_CZINT
#### 帳戶利率
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CZINT_BR_CODE           | VARCHAR2(4 char)   |               |    |
|     | CZINT_BOARD_CODE        | VARCHAR2(2 char)   | 牌告別           |    |
|     | CZINT_CURR_CODE         | VARCHAR2(3 char)   |               |    |
|     | CZINT_RATE_TYPE         | VARCHAR2(3 char)   | 利率代碼          |    |
|     | CZINT_INT_RATE_TYPE     | VARCHAR2(1 char)   | 利率型態          |    |
|     | CZINT_AMT_TYPE          | VARCHAR2(1 char)   | 一般/大額         |    |
|     | CZINT_TERM_CODE         | VARCHAR2(2 char)   |               |    |
|     | CZINT_EFFEC_DATE        | DATE               |               |    |
|     | CZINT_KEY_FILLER        | VARCHAR2(10 char)  | 預留空白          |    |
|     | CZINT_INT_RATE          | NUMBER(7,5)        |               |    |
|     | CZINT_CHG_DATE          | DATE               |               |    |
|     | CZINT_CHG_TIME          | VARCHAR2(6 char)   |               |    |
|     | CZINT_CHG_TLR           | VARCHAR2(6 char)   |               |    |
|     | CZINT_MEMO              | VARCHAR2(1 char)   | 註記(是否為正常牌告)   |    |
|     | CZINT_FILLER            | VARCHAR2(2 char)   |               |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間        |    |
### VW_ODS_D_CZLARGE
#### 大額通貨交易記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CZLRG_TXN_DATE          | DATE               | 交易日期          |    |
|     | CZLRG_BR_CODE           | VARCHAR2(4 char)   | 交易行           |    |
|     | CZLRG_ACC_ID_NO         | VARCHAR2(16 char)  | 帳號/ID         |    |
|     | CZLRG_SEQ_NO            | VARCHAR2(4 char)   | 登錄序號          |    |
|     | CZLRG_BR_CONFIRM        | VARCHAR2(1 char)   | 單位確認          |    |
|     | CZLRG_BR_CONF_SUP_CODE  | VARCHAR2(6 char)   | 單位確認主管        |    |
|     | CZLRG_BR_CONF_DATE      | DATE               | 單位確認日期        |    |
|     | CZLRG_BDD_CONFIRM       | VARCHAR2(1 char)   | 業務部確認         |    |
|     | CZLRG_BDD_CONF_SUP_CODE | VARCHAR2(6 char)   | 業務部確認主管       |    |
|     | CZLRG_BDD_CONF_DATE     | DATE               | 業務部確認日期       |    |
|     | CZLRG_SEND_STAT         | VARCHAR2(1 char)   | 資料外送狀態        |    |
|     | CZLRG_SEND_DATE         | DATE               | 資料外送日期        |    |
|     | CZLRG_CUST_STAT_1       | VARCHAR2(1 char)   | 客戶狀態          |    |
|     | CZLRG_CUST_NAME         | VARCHAR2(40 char)  | 戶名            |    |
|     | CZLRG_OPEN_DATE         | DATE               | 開戶日期          |    |
|     | CZLRG_ID_CODE           | VARCHAR2(11 char)  | 統一編號          |    |
|     | CZLRG_BIRTHDAY          | DATE               | 出生日期          |    |
|     | CZLRG_TEL               | VARCHAR2(20 char)  | 電話            |    |
|     | CZLRG_COUNTRY           | VARCHAR2(20 char)  | 國籍            |    |
|     | CZLRG_ADDRESS           | VARCHAR2(80 char)  | 地址            |    |
|     | CZLRG_CUST_STAT_2       | VARCHAR2(1 char)   | 客戶狀態          |    |
|     | CZLRG_TP_NAME           | VARCHAR2(40 char)  | 交易人姓名         |    |
|     | CZLRG_TP_BIRTHDAY       | DATE               | 交易人出生日期       |    |
|     | CZLRG_TP_ID_CODE        | VARCHAR2(11 char)  | 交易人統一編號       |    |
|     | CZLRG_TP_TEL            | VARCHAR2(20 char)  | 交易人電話         |    |
|     | CZLRG_TP_ADDRESS        | VARCHAR2(80 char)  | 交易人地址         |    |
|     | CZLRG_TXN_TIME          | VARCHAR2(4 char)   | 交易時間          |    |
|     | CZLRG_TXN_AMT           | NUMBER(14,2)       | 交易金額          |    |
|     | CZLRG_TXN_TYPE          | VARCHAR2(2 char)   | 交易種類          |    |
|     | CZLRG_RT_IN_NAME        | VARCHAR2(40 char)  | 受款人(現金匯款交易用)  |    |
|     | CZLRG_RT_IN_BANK_CODE   | VARCHAR2(7 char)   | 受款銀行(現金匯款交易用) |    |
|     | CZLRG_RT_IN_ACC_ID_NO   | VARCHAR2(16 char)  | 受款帳戶(現金匯款交易用) |    |
|     | CZLRG_MEMO              | VARCHAR2(200 char) | 備註            |    |
|     | CZLRG_REC_STAT          | VARCHAR2(1 char)   | 記錄狀況          |    |
|     | CZLRG_TLR_CODE          | VARCHAR2(6 char)   | 櫃員代號          |    |
|     | CZLRG_TXN_SEQ_NO        | NUMBER(7,0)        | 交易序號          |    |
|     | CZLRG_PASSPORT_1        | VARCHAR2(1 char)   | 護照1(交易之統編)    |    |
|     | CZLRG_PASSPORT_2        | VARCHAR2(1 char)   | 護照2(客戶統編)     |    |
|     | CZLRG_PASSPORT_3        | VARCHAR2(1 char)   | 護照3(交易人統編)    |    |
|     | CZLRG_APPLY_SEQ_NO      | VARCHAR2(32 char)  | 補申報序號         |    |
|     | CZLRG_CURR_CODE         | VARCHAR2(3 char)   | 幣別            |    |
|     | CZLRG_RATE              | NUMBER(12,7)       | 匯率            |    |
|     | CZLRG_ORG_AMT           | NUMBER(14,2)       | 原幣金額          |    |
|     | CZLRG_AC_SEQ_NO         | VARCHAR2(16 char)  | 水單編號          |    |
|     | CZLRG_FREE_ITEM         | VARCHAR2(1 char)   | 免申報細項         |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間        |    |
### VW_ODS_D_CZRATE
#### 外匯匯率檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CZRAT_CURR_CODE         | VARCHAR2(3 char)   | 幣別            |    |
| PK  | CZRAT_CLOSING_FLG       | VARCHAR2(1 char)   | 匯率別           |    |
| PK  | CZRAT_TXN_DATE          | DATE               | 掛牌日期          |    |
| PK  | CZRAT_TXN_TIME          | VARCHAR2(8 char)   | 掛牌時間          |    |
|     | CZRAT_SPOT_BUY_RATE     | NUMBER(12,7)       | 即期買入匯率        |    |
|     | CZRAT_SPOT_SELL_RATE    | NUMBER(12,7)       | 即期賣出匯率        |    |
|     | CZRAT_SPOT_MID_RATE     | NUMBER(12,7)       | 即期中價匯率        |    |
|     | CZRAT_SPOT_MID_RATE     | NUMBER(12,7)       | 現鈔買入匯率        |    |
|     | CZRAT_CASH_SELL_RATE    | NUMBER(12,7)       | 現鈔賣出匯率        |    |
|     | CZRAT_CLOSING_RATE      | NUMBER(12,7)       | 關帳對台幣中價       |    |
|     | CZRAT_BOOKING_RATE      | NUMBER(12,7)       | 台幣額度使用之記帳匯率   |    |
|     | CZRAT_USD_BUY_RATE      | NUMBER(12,7)       | 對美金買入匯率       |    |
|     | CZRAT_USD_SELL_RATE     | NUMBER(12,7)       | 對美金賣出匯率       |    |
|     | CZRAT_USD_CLOSING_RATE  | NUMBER(12,7)       | 對美金中價匯率       |    |
|     | CZRAT_DATA_STAT         | VARCHAR2(1 char)   | 資料狀態          |    |
|     | CZRAT_INPUT_COUNT       | VARCHAR2(3 char)   | 掛牌盤次          |    |
|     | CZRAT_CURR_CODE_ID      | VARCHAR2(2 char)   | 幣別代碼          |    |
|     | CZRAT_MANUAL_FLG        | VARCHAR2(1 char)   | 原匯率別註記        |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間        |    |
### VW_ODS_D_CZSTOCK
#### 帳戶關聯
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CZSTK_STK_NO            | VARCHAR2(6 char)   |               |    |
|     | CZSTK_TAX_ID_CODE       | VARCHAR2(8 char)   |               |    |
|     | CZSTK_MARKET            | VARCHAR2(1 char)   | 掛牌別           |    |
|     | CZSTK_KIND              | VARCHAR2(1 char)   | 股票種類          |    |
|     | CZSTK_STK_NAME          | VARCHAR2(40 char)  |               |    |
|     | CZSTK_LAST_PRICE        | NUMBER(6,2)        |               |    |
|     | CZSTK_NET_VALUE         | NUMBER(6,2)        |               |    |
|     | CZSTK_NET_VALUE_YEAR    | NUMBER(4,0)        |               |    |
|     | CZSTK_CHG_DATE          | DATE               |               |    |
|     | CZSTK_CHG_TIME          | VARCHAR2(6 char)   |               |    |
|     | CZSTK_CHG_TLR           | VARCHAR2(6 char)   |               |    |
|     | CZSTK_REC_STAT          | VARCHAR2(1 char)   |               |    |
|     | CZSTK_SELL_NUM          | NUMBER(15,0)       |               |    |
|     | CZSTK_FACE_VALUE        | NUMBER(6,2)        |               |    |
|     | CZSTK_FILLER            | VARCHAR2(14 char)  |               |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間        |