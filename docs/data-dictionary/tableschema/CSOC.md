---
sidebar_position: 15
title: 台幣核心系統-櫃員(CSOC)
---

### VW_ODS_D_OCDWBRH
#### 分行檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | OCBRH_BR_CODE      | VARCHAR2(4 char)   | 單位代號        |    |
| PK  | OCBRH_BR_KIND      | VARCHAR2(1 char)   | 單位類別        |    |
|     | OCBRH_TXN_STAT     | VARCHAR2(1 char)   | 結帳狀態        |    |
|     | OCBRH_OPT_STAT     | VARCHAR2(1 char)   | 營業狀態        |    |
|     | OCBRH_BANK_BR_CODE | VARCHAR2(4 char)   | 央行字軌        |    |
|     | OCBRH_TM_CNT       | NUMBER(2,0)        | 工作站數        |    |
|     | OCBRH_MICR_FLAG    | VARCHAR2(1 char)   | 參加MICR旗標    |    |
|     | OCBRH_ASS_OTH      | VARCHAR2(7 char)   | 交換票委同業代號    |    |
|     | OCBRH_BR_NAME      | VARCHAR2(40 char)  | 單位名稱        |    |
|     | OCBRH_ENG_NAME     | VARCHAR2(70 char)  | 單位英文名稱      |    |
|     | OCBRH_ALIAS_NAME   | VARCHAR2(10 char)  | 單位簡稱        |    |
|     | OCBRH_OPEN_DATE    | DATE               | 開業日期        |    |
|     | OCBRH_AREA_CODE    | VARCHAR2(2 char)   | 區域代碼        |    |
|     | OCBRH_AREA_CODE_2  | VARCHAR2(6 char)   | 內部區域別       |    |
|     | OCBRH_FX_AREA_CODE | VARCHAR2(2 char)   | 簡易外匯區域別     |    |
|     | OCBRH_ZIP_CODE     | VARCHAR2(5 char)   | 郵遞區號        |    |
|     | OCBRH_ADDR_CITY    | VARCHAR2(14 char)  | 縣市區域        |    |
|     | OCBRH_ADDR_STREET  | VARCHAR2(56 char)  | 路名地址        |    |
|     | OCBRH_ENG_ADDR     | VARCHAR2(105 char) | 英文地址        |    |
|     | OCBRH_TAX_AREA     | VARCHAR2(3 char)   | 稽徵機關代號      |    |
|     | OCBRH_TAX_NO       | VARCHAR2(9 char)   | 扣繳單位稅籍編號    |    |
|     | OCBRH_TAX_ID_CODE  | VARCHAR2(8 char)   | 營利事業統一編號    |    |
|     | OCBRH_TEL          | VARCHAR2(13 char)  | 電話          |    |
|     | OCBRH_FAX          | VARCHAR2(13 char)  | 傳真電話        |    |
|     | OCBRH_HOUSE_TAX_ID | VARCHAR2(12 char)  | 房屋稅單管理代號    |    |
|     | OCBRH_MANAGER_NO   | VARCHAR2(6 char)   | 負責人員工編號     |    |
|     | OCBRH_MANAGER      | VARCHAR2(10 char)  | 負責人姓名       |    |
|     | OCBRH_EMP_DATE     | DATE               | 就職日期        |    |
|     | OCBRH_CHG_DATE     | DATE               | 異動日期        |    |
|     | OCBRH_CHG_TIME     | VARCHAR2(6 char)   | 異動時間        |    |
|     | OCBRH_CHG_TLR      | VARCHAR2(6 char)   | 異動櫃員        |    |
|     | OCBRH_REC_STAT     | VARCHAR2(1 char)   | 資料記錄狀態      |    |
|     | OCBRH_STAT_1       | VARCHAR2(1 char)   | 假日營業TYPE    |    |
|     | OCBRH_STAT_2       | VARCHAR2(1 char)   | 全功能分行flag   |    |
|     | OCBRH_STAT_3       | VARCHAR2(1 char)   | 財管分行flag    |    |
|     | OCBRH_STAT_4       | VARCHAR2(1 char)   | 簡易分行FLAG    |    |
|     | OCBRH_STAT_5       | VARCHAR2(1 char)   | 外匯權限類別      |    |
|     | OCBRH_STAT_6       | VARCHAR2(1 char)   | filler6     |    |
|     | OCBRH_STAT_7       | VARCHAR2(1 char)   | filler7     |    |
|     | OCBRH_STAT_8       | VARCHAR2(1 char)   | filler8     |    |
|     | OCBRH_STAT_9       | VARCHAR2(1 char)   | filler9     |    |
|     | OCBRH_STAT_10      | VARCHAR2(1 char)   | filler      |    |
|     | OCBRH_FSBRCODE     | VARCHAR2(4 char)   | 外幣帳務所屬存款代理行 |    |
|     | OCBRH_EXBRCODE     | VARCHAR2(4 char)   | 外幣帳務所屬匯兌代理行 |    |
|     | OCBRH_IPBRCODE     | VARCHAR2(4 char)   | 外幣帳務所屬進口代理行 |    |
|     | OCBRH_EPBRCODE     | VARCHAR2(4 char)   | 外幣帳務其他出口代理行 |    |
|     | OCBRH_INBRCODE     | VARCHAR2(4 char)   | 外幣帳務其他放款代理行 |    |
|     | TBL_UPD_TIM        | TIMESTAMP          | 表格更新時間      |    |
### VW_ODS_D_OCDWTXC
#### 交易代碼檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | OCTXC_TXN_ID       | VARCHAR2(5 char)   | 交易代號        |    |
|     | OCTXC_TXN_NAME     | VARCHAR2(40 char)  | 交易名稱        |    |
|     | OCTXC_BUSI_CODE    | VARCHAR2(2 char)   | 業務代號        |    |
|     | OCTXC_TXN_TYPE     | VARCHAR2(1 char)   | 交易類別        |    |
|     | OCTXC_EFFECT_DATE  | DATE               | 生效日期        |    |
|     | OCTXC_SERVICE_STAT | VARCHAR2(1 char)   | 服務狀態        |    |
|     | OCTXC_STOP_REASON  | VARCHAR2(40 char)  | 暫停服務原因      |    |
|     | OCTXC_OTS_FLAG     | VARCHAR2(1 char)   | 延時服務設定      |    |
|     | OCTXC_CRT_DATE     | NUMBER(8,0)        | 建檔日期        |    |
|     | OCTXC_CRT_TIME     | NUMBER(6,0)        | 建檔時間        |    |
|     | OCTXC_CRT_TLR      | VARCHAR2(6 char)   | 建檔櫃員        |    |
|     | OCTXC_CHG_DATE     | NUMBER(8,0)        | 異動日期        |    |
|     | OCTXC_CHG_TIME     | NUMBER(6,0)        | 異動時間        |    |
|     | OCTXC_CHG_TLR      | VARCHAR2(6 char)   | 異動櫃員        |    |
|     | OCTXC_REC_STAT     | VARCHAR2(1 char)   | 資料記錄狀態      |    |
|     | OCTXC_HOL_TABLE_1  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_1   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_1   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_2  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_2   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_2   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_3  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_3   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_3   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_4  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_4   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_4   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_5  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_5   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_5   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_6  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_6   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_6   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_7  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_7   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_7   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_8  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_8   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_8   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_9  | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_9   | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_9   | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_HOL_TABLE_10 | VARCHAR2(1 char)   | 假日交易TYPE    |    |
|     | OCTXC_END_TIME_10  | NUMBER(4,0)        | 假日交易結束時間    |    |
|     | OCTXC_BEG_TIME_10  | VARCHAR2(4 char)   | 假日交易起始時間    |    |
|     | OCTXC_DISPLAY      | VARCHAR2(1 char)   | displaytype |    |
|     | TBL_UPD_TIM        | TIMESTAMP          | 表格更新時間      |