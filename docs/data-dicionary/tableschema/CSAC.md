---
sidebar_position: 7
title: 台幣核心系統-會計(CSAC)
---

### VW_ODS_D_ACDWBAL2
#### 海外分行會計傳輸檔_MIS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACOU2_BR_CODE           | VARCHAR2(4 char)  | 分行別           |   |
| PK | ACOU2_DIV_CODE          | VARCHAR2(1 char)  | 部別            |   |
| PK | ACOU2_CENT_CODE         | VARCHAR2(4 char)  | 利潤中心          |   |
| PK | ACOU2_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACOU2_ACC_CODE          | VARCHAR2(10 char) | 科子目           |   |
|    | ACOU2_TXN_DATE          | DATE              | 資料日期          |   |
|    | ACOU2_LAST_ACC_BAL      | NUMBER(15,2)      | 昨日餘額          |   |
|    | ACOU2_CURR_TR_DB_CNT    | NUMBER(7,0)       | 本日轉帳借方筆數      |   |
|    | ACOU2_CURR_TR_DB_AMT    | NUMBER(15,2)      | 本日轉帳借方金額      |   |
|    | ACOU2_CURR_TR_CR_CNT    | NUMBER(7,0)       | 本日轉帳貸方筆數      |   |
|    | ACOU2_CURR_TR_CR_AMT    | NUMBER(15,2)      | 本日轉帳貸方金額      |   |
|    | ACOU2_MIS_CENT_CODE     | VARCHAR2(4 char)  | MIS利潤中心       |   |
|    | ACOU2_MIS_BR_CODE       | VARCHAR2(4 char)  | MIS單位別        |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWBALH
#### 海外分行會計傳輸檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACOUT_BR_CODE           | VARCHAR2(4 char)  | 分行別           |   |
| PK | ACOUT_DIV_CODE          | VARCHAR2(1 char)  | 部別            |   |
| PK | ACOUT_CENT_CODE         | VARCHAR2(4 char)  | 利潤中心          |   |
| PK | ACOUT_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACOUT_ACC_CODE          | VARCHAR2(10 char) | 科子目           |   |
|    | ACOUT_TXN_DATE          | DATE              | 資料日期          |   |
|    | ACOUT_LAST_ACC_BAL      | NUMBER(15,2)      | 昨日餘額          |   |
|    | ACOUT_CURR_TR_DB_CNT    | NUMBER(7,0)       |               |   |
|    | ACOUT_CURR_TR_DB_AMT    | NUMBER(15,2)      | 本日轉帳借方金額      |   |
|    | ACOUT_CURR_TR_CR_CNT    | NUMBER(7,0)       | 本日轉帳貸方筆數      |   |
|    | ACOUT_CURR_TR_CR_AMT    | NUMBER(15,2)      | 本日轉帳貸方金額      |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWCASH
#### 櫃員交易明細資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACCAS_TXN_DATE          | DATE              | 交易營業日期        |   |
| PK | ACCAS_BR_CODE           | VARCHAR2(4 char)  | 分行別           |   |
| PK | ACCAS_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACCAS_CURR_KIND         | VARCHAR2(2 char)  | 外幣種類          |   |
| PK | ACCAS_TLR_CODE          | VARCHAR2(6 char)  | 櫃員代號          |   |
| PK | ACCAS_ACC_CODE          | VARCHAR2(10 char) | 科目代號          |   |
| PK | ACCAS_CASH_SEQ_NO       | VARCHAR2(7 char)  | 櫃員檔序號         |   |
| PK | ACCAS_DB_CR_FLAG        | VARCHAR2(1 char)  | 借貸旗標          |   |
|    | ACCAS_TXN_TYPE          | VARCHAR2(1 char)  | 帳務別           |   |
|    | ACCAS_DATA_KIND         | VARCHAR2(2 char)  | 票據種類          |   |
|    | ACCAS_SEQ_NO            | VARCHAR2(13 char) | 交易序號          |   |
|    | ACCAS_SYS_DATE          | DATE              | 交易曆日日期        |   |
|    | ACCAS_TXN_TIME          | VARCHAR2(6 char)  | 交易時間          |   |
|    | ACCAS_DIV_CODE          | VARCHAR2(1 char)  | 部別            |   |
|    | ACCAS_CENT_CODE         | VARCHAR2(4 char)  | 成本中心          |   |
|    | ACCAS_TXN_STAT          | VARCHAR2(2 char)  | 交易狀況          |   |
|    | ACCAS_TXN_AMT           | NUMBER(15,2)      | 交易金額          |   |
|    | ACCAS_SUP_CODE_1        | VARCHAR2(6 char)  | 主管代號-1        |   |
|    | ACCAS_SUP_CODE_2        | VARCHAR2(6 char)  | 主管代號-2        |   |
|    | ACCAS_TXN_TED           | VARCHAR2(4 char)  | 終端代號          |   |
|    | ACCAS_ACC_ID_NO         | VARCHAR2(18 char) | 帳號            |   |
|    | ACCAS_BUSI_CODE         | VARCHAR2(2 char)  | 業務代號          |   |
|    | ACCAS_TXN_ID_CODE       | VARCHAR2(5 char)  | 原交易代號         |   |
|    | ACCAS_MEMO_NAME         | VARCHAR2(20 char) | 備註            |   |
|    | ACCAS_CHNS_MEMO         | VARCHAR2(80 char) | 中文摘要          |   |
|    | ACCAS_RCV_BR_CODE       | VARCHAR2(4 char)  | 對方行代號         |   |
|    | ACCAS_RCV_SEQ_NO        | VARCHAR2(7 char)  | 對方行櫃員檔序號      |   |
|    | ACCAS_1101_SEQ_NO       | VARCHAR2(7 char)  | 庫存現金櫃員檔序號     |   |
|    | ACCAS_PCS_CNT           | NUMBER(5,0)       | 憑證張數          |   |
|    | ACCAS_CHK_CNT           | NUMBER(5,0)       | 票據張數          |   |
|    | ACCAS_TXN_KIND          | VARCHAR2(1 char)  | 交易種類          |   |
|    | ACCAS_OLD_TXN_CODE      | VARCHAR2(5 char)  | 實際交易代號        |   |
|    | ACCAS_BANK_CODE         | VARCHAR2(7 char)  | 行庫代號          |   |
|    | ACCAS_BANK_SEQ_NO       | VARCHAR2(7 char)  | 存同存提序號        |   |
|    | ACCAS_HELP_CODE         | VARCHAR2(20 char) | 輔助號碼          |   |
|    | ACCAS_TXN_ODM_FLAG      | VARCHAR2(1 char)  | 是否為透支項目       |   |
|    | ACCAS_VOU_FLAG          | VARCHAR2(1 char)  | 延時旗標          |   |
|    | ACCAS_ACC_FLAG          | VARCHAR2(1 char)  | 過帳旗標          |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWCHK
#### 存放同業餘額累計檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACCHK_BANK_CODE         | VARCHAR2(7 char)  | 行庫代號          |   |
| PK | ACCHK_ACC_ID            | VARCHAR2(14 char) | 帳號            |   |
| PK | ACCHK_YM                | VARCHAR2(6 char)  | 年月            |   |
|    | ACCHK_LAST_SAV_BAL      | NUMBER(15,2)      | 上月餘額          |   |
|    | ACCHK_IN_BAL1           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL1          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL1        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL1           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL2           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL2          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL2        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL2           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL3           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL3          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL3        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL3           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL4           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL4          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL4        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL4           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL5           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL5          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL5        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL5           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL6           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL6          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL6        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL6           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL7           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL7          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL7        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL7           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL8           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL8          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL8        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL8           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL9           | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL9          | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL9        | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL9           | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL10          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL10         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL10       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL10          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL11          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL11         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL11       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL11          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL12          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL12         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL12       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL12          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL13          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL13         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL13       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL13          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL14          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL14         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL14       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL14          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL15          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL15         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL15       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL15          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL16          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL16         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL16       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL16          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL17          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL17         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL17       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL17          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL18          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL18         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL18       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL18          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL19          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL19         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL19       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL19          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL20          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL20         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL20       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL20          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL21          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL21         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL21       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL21          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL22          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL22         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL22       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL22          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL23          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL23         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL23       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL23          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL24          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL24         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL24       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL24          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL25          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL25         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL25       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL25          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL26          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL26         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL26       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL26          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL27          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL27         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL27       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL27          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL28          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL28         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL28       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL28          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL29          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL29         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL29       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL29          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL30          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL30         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL30       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL30          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_IN_BAL31          | NUMBER(15,2)      | 本日存入金額        |   |
|    | ACCHK_OUT_BAL31         | NUMBER(15,2)      | 本日支出金額        |   |
|    | ACCHK_UNABT_BAL31       | NUMBER(15,2)      | 本日簽發金額        |   |
|    | ACCHK_AC_BAL31          | NUMBER(15,2)      | 會計餘額          |   |
|    | ACCHK_TXN_DATE          | DATE              | 最後交易日         |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWCON
#### 會計科目累計檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACCON_BR_CODE           | VARCHAR2(4 char)  | 單位別           |   |
| PK | ACCON_DIV_CODE          | VARCHAR2(1 char)  | 部別            |   |
| PK | ACCON_CENT_CODE         | VARCHAR2(4 char)  | 利潤中心          |   |
| PK | ACCON_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACCON_ACC_CODE          | VARCHAR2(10 char) | 科目代號          |   |
| PK | ACCON_YYMM              | VARCHAR2(6 char)  | 年月            |   |
|    | ACCON_MON_DB_AMT        | NUMBER(15,2)      | 上月借           |   |
|    | ACCON_MON_CR_AMT        | NUMBER(15,2)      | 上月貸           |   |
|    | ACCON_DB_CNT1           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT1           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT1           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT1           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT1          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT2           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT2           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT2           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT2           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT2          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT3           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT3           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT3           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT3           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT3          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT4           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT4           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT4           | NUMBER(7,0)       | 外匯活存幣別主檔      |   |
|    | ACCON_CR_AMT4           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT4          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT5           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT5           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT5           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT5           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT5          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT6           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT6           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT6           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT6           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT6          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT7           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT7           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT7           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT7           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT7          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT8           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT8           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT8           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT8           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT8          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT9           | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT9           | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT9           | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT9           | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT9          | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT10          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT10          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT10          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT10          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT10         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT11          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT11          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT11          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT11          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT11         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT12          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT12          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT12          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT12          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT12         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT13          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT13          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT13          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT13          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT13         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT14          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT14          | NUMBER(15,2)      | 外匯活存幣別主檔異常資料  |   |
|    | ACCON_CR_CNT14          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT14          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT14         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT15          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT15          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT15          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT15          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT15         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT16          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT16          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT16          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT16          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT16         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT17          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT17          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT17          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT17          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT17         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT18          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT18          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT18          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT18          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT18         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT19          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT19          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT19          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT19          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT19         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT20          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT20          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT20          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT20          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT20         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT21          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT21          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT21          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT21          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT21         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT22          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT22          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT22          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT22          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT22         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT23          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT23          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT23          | NUMBER(7,0)       | 外匯活存幣別主檔歷史資料  |   |
|    | ACCON_CR_AMT23          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT23         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT24          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT24          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT24          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT24          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT24         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT25          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT25          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT25          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT25          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT25         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT26          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT26          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT26          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT26          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT26         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT27          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT27          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT27          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT27          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT27         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT28          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT28          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT28          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT28          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT28         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT29          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT29          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT29          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT29          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT29         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT30          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT30          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT30          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT30          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT30         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_DB_CNT31          | NUMBER(7,0)       | 日借方筆數         |   |
|    | ACCON_DB_AMT31          | NUMBER(15,2)      | 日借方金額         |   |
|    | ACCON_CR_CNT31          | NUMBER(7,0)       | 日貸方筆數         |   |
|    | ACCON_CR_AMT31          | NUMBER(15,2)      | 日貸方金額         |   |
|    | ACCON_BAL_AMT31         | NUMBER(15,2)      | 日餘額           |   |
|    | ACCON_LAST_TWD_AMT      | NUMBER(15,2)      | 上月外幣折台幣金額     |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWFCOT
#### 簡易外匯水單記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | ACCOT_TXN_DATE          | DATE              | 交易日期          |   |
|    | ACCOT_BR_CODE           | VARCHAR2(4 char)  | 分行別           |   |
|    | ACCOT_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
|    | ACCOT_CURR_KIND         | VARCHAR2(2 char)  | 外幣種類          |   |
|    | ACCOT_RM_CODE           | VARCHAR2(13 char) | 匯款編號          |   |
|    | ACCOT_PAG_KIND          | VARCHAR2(1 char)  | 水單種類          |   |
|    | ACCOT_AMT_TWD           | NUMBER(15,2)      | 台幣金額          |   |
|    | ACCOT_AMT_OTH           | NUMBER(15,2)      | 外幣金額          |   |
|    | ACCOT_COST_RATE         | NUMBER(12,7)      | 成本匯率          |   |
|    | ACCOT_DEL_RATE          | NUMBER(12,7)      | 成交匯率          |   |
|    | ACCOT_RM_KIND           | VARCHAR2(3 char)  | 匯款分類          |   |
|    | ACCOT_RM_NAME           | VARCHAR2(30 char) | 匯款分類中文        |   |
|    | ACCOT_RM_COUNTRY        | VARCHAR2(10 char) | 匯款國別          |   |
|    | ACCOT_PERSON_KIND       | VARCHAR2(1 char)  | 身份別           |   |
|    | ACCOT_GIVE_KIND         | VARCHAR2(1 char)  | 匯款方式          |   |
|    | ACCOT_PAY_KIND          | VARCHAR2(1 char)  | 解(繳)款方式       |   |
|    | ACCOT_CHN_NAME          | VARCHAR2(20 char) | 客戶中文姓名        |   |
|    | ACCOT_ENG_NAME          | VARCHAR2(20 char) | 客戶英文姓名        |   |
|    | ACCOT_ID_NO             | VARCHAR2(10 char) | 證件號碼          |   |
|    | ACCOT_TEL_NO            | VARCHAR2(14 char) | 電話            |   |
|    | ACCOT_ADDR              | VARCHAR2(70 char) | 住址            |   |
|    | ACCOT_SC_AMT            | NUMBER(15,2)      | 手續費           |   |
|    | ACCOT_POST_AMT          | NUMBER(15,2)      | 郵費            |   |
|    | ACCOT_OTH_AMT           | NUMBER(15,2)      | 電報費           |   |
|    | ACCOT_BUY_RATE_AMT      | NUMBER(15,2)      | 買匯息           |   |
|    | ACCOT_DIFF_AMT          | NUMBER(15,2)      | 匯差            |   |
|    | ACCOT_10000_PCS_CNT     | NUMBER(5,0)       | 外幣面額10000     |   |
|    | ACCOT_5000_PCS_CNT      | NUMBER(5,0)       | 外幣面額5000      |   |
|    | ACCOT_2000_PCS_CNT      | NUMBER(5,0)       | 外幣面額2000      |   |
|    | ACCOT_1000_PCS_CNT      | NUMBER(5,0)       | 外幣面額1000      |   |
|    | ACCOT_500_PCS_CNT       | NUMBER(5,0)       | 外幣面額500       |   |
|    | ACCOT_200_PCS_CNT       | NUMBER(5,0)       | 外幣面額200       |   |
|    | ACCOT_100_PCS_CNT       | NUMBER(5,0)       | 外幣面額100       |   |
|    | ACCOT_50_PCS_CNT        | NUMBER(5,0)       | 外幣面額50        |   |
|    | ACCOT_20_PCS_CNT        | NUMBER(5,0)       | 外幣面額20        |   |
|    | ACCOT_10_PCS_CNT        | NUMBER(5,0)       | 外幣面額10        |   |
|    | ACCOT_5_PCS_CNT         | NUMBER(5,0)       | 外幣面額5         |   |
|    | ACCOT_2_PCS_CNT         | NUMBER(5,0)       | 外幣面額2         |   |
|    | ACCOT_1_PCS_CNT         | NUMBER(5,0)       | 外幣面額1         |   |
|    | ACCOT_BIRTHDAY          | DATE              | 生日            |   |
|    | ACCOT_TXN_ID_CODE       | VARCHAR2(5 char)  | 交易代號          |   |
|    | ACCOT_TXN_STAT          | VARCHAR2(1 char)  | 交易狀態          |   |
|    | ACCOT_A_CURR            | VARCHAR2(3 char)  | 其他幣別(87170)   |   |
|    | ACCOT_A_OTH_AMT         | NUMBER(15,2)      | 其他金額(87170)   |   |
|    | ACCOT_A_RM_NO           | VARCHAR2(13 char) | 其他水單號碼(87170) |   |
|    | ACCOT_TR_ACC_NO         | VARCHAR2(13 char) | 轉帳帳號          |   |
|    | ACCOT_DOCU_NO           | VARCHAR2(7 char)  | 送件編號/持護照者之國家別 |   |
|    | ACCOT_TXN_SEQ           | VARCHAR2(13 char) | 交易序號          |   |
|    | ACCOT_FOD_FLG           | VARCHAR2(1 char)  | 旅行平安險         |   |
|    | ACCOT_CHE_PRO           | NUMBER(6,0)       | 旅支-手續費        |   |
|    | ACCOT_CHE_INT           | NUMBER(6,0)       |               |   |
|    | ACCOT_FIN_NO            | VARCHAR2(6 char)  | 理專員編          |   |
|    | ACCOT_BARG_NO           | VARCHAR2(6 char)  | 議價編號          |   |
|    | ACCOT_OTH_MEMO          | VARCHAR2(30 char) | 其他說明          |   |
|    | ACCOT_RM_COUNTRY_2      | VARCHAR2(40 char) | 匯款國別2(英文全名)   |   |
|    | ACCOT_ID_NO_11          | VARCHAR2(11 char) | 證件號碼-11       |   |
|    | ACCOT_COUNTRY           | VARCHAR2(2 char)  | 結匯人國籍         |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWINT
#### 準備金及利率檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACINT_TXN_DATE          | DATE              | 調整日期          |   |
| PK | ACINT_KIND_CODE         | VARCHAR2(2 char)  | 利率代碼          |   |
|    | ACINT_RATE              | NUMBER(6,4)       | 利率            |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWMST
#### 會計主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACMST_BR_CODE           | VARCHAR2(4 char)  | 分行別           |   |
| PK | ACMST_DIV_CODE          | VARCHAR2(1 char)  | 部別            |   |
| PK | ACMST_CENT_CODE         | VARCHAR2(4 char)  | 利潤中心          |   |
| PK | ACMST_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACMST_ACC_CODE          | VARCHAR2(10 char) | 科目代號          |   |
|    | ACMST_ACC_STAT          | VARCHAR2(1 char)  | 結帳旗標          |   |
|    | ACMST_LAST_YEAR_BAL     | NUMBER(15,2)      | 去年度餘額         |   |
|    | ACMST_SIX_DB_AMT        | NUMBER(15,2)      | 上半年度借方金額      |   |
|    | ACMST_SIX_CR_AMT        | NUMBER(15,2)      | 上半年度貸方金額      |   |
|    | ACMST_LAST_SIX_DB_AMT   | NUMBER(15,2)      | 下半年度借方金額      |   |
|    | ACMST_LAST_SIX_CR_AMT   | NUMBER(15,2)      | 下半年度貸方金額      |   |
|    | ACMST_LAST_TXN_DATE     | DATE              | 上次交易日         |   |
|    | ACMST_LAST_CNT          | NUMBER(7,0)       | 前日筆數          |   |
|    | ACMST_LAST_ACC_BAL      | NUMBER(15,2)      | 前日餘額          |   |
|    | ACMST_CURR_CASH_DB_CNT  | NUMBER(7,0)       | 當日借方現金筆數      |   |
|    | ACMST_CURR_CASH_DB_AMT  | NUMBER(15,2)      | 當日借方現金金額      |   |
|    | ACMST_CURR_CASH_CR_CNT  | NUMBER(7,0)       | 當日貸方現金筆數      |   |
|    | ACMST_CURR_CASH_CR_AMT  | NUMBER(15,2)      | 當日貸方現金金額      |   |
|    | ACMST_CURR_TR_DB_CNT    | NUMBER(7,0)       | 當日借方轉帳筆數      |   |
|    | ACMST_CURR_TR_DB_AMT    | NUMBER(15,2)      | 當日借方轉帳金額      |   |
|    | ACMST_CURR_TR_CR_CNT    | NUMBER(7,0)       | 當日貸方轉帳筆數      |   |
|    | ACMST_CURR_TR_CR_AMT    | NUMBER(15,2)      | 當日貸方轉帳金額      |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWMST2
#### 會計主檔_MIS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACMST2_BR_CODE          | VARCHAR2(4 char)  | 分行別           |   |
| PK | ACMST2_DIV_CODE         | VARCHAR2(1 char)  | 部別            |   |
| PK | ACMST2_CENT_CODE        | VARCHAR2(4 char)  | 利潤中心          |   |
| PK | ACMST2_CURR_CODE        | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACMST2_ACC_CODE         | VARCHAR2(10 char) | 科目代號          |   |
|    | ACMST2_ACC_STAT         | VARCHAR2(1 char)  | 結帳旗標          |   |
|    | ACMST2_LAST_YEAR_BAL    | NUMBER(15,2)      | 去年度餘額         |   |
|    | ACMST2_SIX_DB_AMT       | NUMBER(15,2)      | 上半年度借方金額      |   |
|    | ACMST2_SIX_CR_AMT       | NUMBER(15,2)      | 上半年度貸方金額      |   |
|    | ACMST2_LAST_SIX_DB_AMT  | NUMBER(15,2)      | 下半年度借方金額      |   |
|    | ACMST2_LAST_SIX_CR_AMT  | NUMBER(15,2)      | 下半年度貸方金額      |   |
|    | ACMST2_LAST_TXN_DATE    | VARCHAR2(8 char)  | 上次交易日         |   |
|    | ACMST2_LAST_CNT         | NUMBER(7,0)       | 前日筆數          |   |
|    | ACMST2_LAST_ACC_BAL     | NUMBER(15,2)      | 前日餘額          |   |
|    | ACMST2_CURR_CASH_DB_CNT | NUMBER(7,0)       | 當日借方現金筆數      |   |
|    | ACMST2_CURR_CASH_DB_AMT | NUMBER(15,2)      | 當日借方現金金額      |   |
|    | ACMST2_CURR_CASH_CR_CNT | NUMBER(7,0)       | 當日貸方現金筆數      |   |
|    | ACMST2_CURR_CASH_CR_AMT | NUMBER(15,2)      | 當日貸方現金金額      |   |
|    | ACMST2_CURR_TR_DB_CNT   | NUMBER(7,0)       | 當日借方轉帳筆數      |   |
|    | ACMST2_CURR_TR_DB_AMT   | NUMBER(15,2)      | 當日借方轉帳金額      |   |
|    | ACMST2_CURR_TR_CR_CNT   | NUMBER(7,0)       | 當日貸方轉帳筆數      |   |
|    | ACMST2_CURR_TR_CR_AMT   | NUMBER(15,2)      | 當日貸方轉帳金額      |   |
|    | ACMST2_MIS_CENT_CODE    | VARCHAR2(4 char)  | MIS利潤中心       |   |
|    | ACMST2_MIS_BR_CODE      | VARCHAR2(4 char)  | MIS單位別        |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWNAM
#### 會計科目性質檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACNAM_ACC_CODE          | VARCHAR2(10 char) | 科目代號          |   |
|    | ACNAM_SAVE_FLAG         | VARCHAR2(1 char)  | 統制科目          |   |
|    | ACNAM_BAL_FLAG          | VARCHAR2(1 char)  | 餘額別           |   |
|    | ACNAM_ABATE_FLAG        | VARCHAR2(1 char)  | 銷帳別           |   |
|    | ACNAM_DET_FLAG          | VARCHAR2(1 char)  | 明細帳           |   |
|    | ACNAM_CHK_CURR_CODE     | VARCHAR2(3 char)  | 適用幣別          |   |
|    | ACNAM_BANK_CODE_1       | VARCHAR2(4 char)  | 金檢處科目代號       |   |
|    | ACNAM_BANK_CODE_2       | VARCHAR2(4 char)  | 金融局科目代號       |   |
|    | ACNAM_CASH_CODE         | VARCHAR2(4 char)  | 財政部科目代號       |   |
|    | ACNAM_BUDG_CODE         | VARCHAR2(10 char) | 預算對照科目        |   |
|    | ACNAM_OTHER_CODE        | VARCHAR2(10 char) | 外幣對照科目        |   |
|    | ACNAM_CHNS_NAME         | VARCHAR2(40 char) | 中文名稱          |   |
|    | ACNAM_CHNS_MEMO         | VARCHAR2(80 char) | 中文摘要          |   |
|    | ACNAM_CHG_TLR_CODE      | VARCHAR2(6 char)  | 異動櫃員代號        |   |
|    | ACNAM_CHG_DATE          | DATE              | 最終異動日期        |   |
|    | ACNAM_DEL_FLAG          | VARCHAR2(1 char)  | 刪除旗標          |   |
|    | ACNAM_SAVE_UPD          | NUMBER(1,0)       | 修改統制旗標        |   |
|    | ACNAM_BAL_UPD           | NUMBER(1,0)       | 修改餘額旗標        |   |
|    | ACNAM_ABATE_UPD         | NUMBER(1,0)       | 修改銷帳旗標        |   |
|    | ACNAM_DET_UPD           | NUMBER(1,0)       | 修改明細旗標        |   |
|    | ACNAM_CHK_CURR_UPD      | VARCHAR2(3 char)  | 修改幣別          |   |
|    | ACNAM_ONLN_FLAG         | VARCHAR2(1 char)  | 連線旗標          |   |
|    | ACNAM_VAPI_FLAG         | VARCHAR2(1 char)  | 即時過帳旗標        |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWTBI
#### 台幣櫃員餘額檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACTBI_BR_CODE           | VARCHAR2(4 char)  | 單位別           |   |
| PK | ACTBI_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
| PK | ACTBI_CURR_KIND         | VARCHAR2(2 char)  | 外幣種類          |   |
| PK | ACTBI_TLR_CODE          | VARCHAR2(6 char)  | 櫃員代號          |   |
| PK | ACTBI_TXN_TYPE          | VARCHAR2(1 char)  | 帳務別           |   |
| PK | ACTBI_DATA_KIND         | VARCHAR2(2 char)  | 資料種類          |   |
|    | ACTBI_CLOSE_STAT        | VARCHAR2(1 char)  | 結帳狀態          |   |
|    | ACTBI_LAST_BAL          | NUMBER(15,2)      | 前日餘額          |   |
|    | ACTBI_LAST_IN_CNT       | NUMBER(5,0)       | 昨日領用筆數        |   |
|    | ACTBI_LAST_IN_AMT       | NUMBER(15,2)      | 昨日領用金額        |   |
|    | ACTBI_LAST_OUT_CNT      | NUMBER(5,0)       | 昨日繳回筆數        |   |
|    | ACTBI_LAST_OUT_AMT      | NUMBER(15,2)      | 昨日繳回金額        |   |
|    | ACTBI_LAST_DB_CNT       | NUMBER(5,0)       | 昨日借方筆數        |   |
|    | ACTBI_LAST_DB_AMT       | NUMBER(15,2)      | 昨日借方金額        |   |
|    | ACTBI_LAST_CR_CNT       | NUMBER(5,0)       | 昨日貸方筆數        |   |
|    | ACTBI_LAST_CR_AMT       | NUMBER(15,2)      | 昨日貸方金額        |   |
|    | ACTBI_TODAY_IN_CNT      | NUMBER(5,0)       | 本日領用筆數        |   |
|    | ACTBI_TODAY_IN_AMT      | NUMBER(15,2)      | 本日領用金額        |   |
|    | ACTBI_TODAY_OUT_CNT     | NUMBER(5,0)       | 本日繳回筆數        |   |
|    | ACTBI_TODAY_OUT_AMT     | NUMBER(15,2)      | 本日繳回金額        |   |
|    | ACTBI_TODAY_DB_CNT      | NUMBER(5,0)       | 本日借方筆數        |   |
|    | ACTBI_TODAY_DB_AMT      | NUMBER(15,2)      | 本日借方金額        |   |
|    | ACTBI_TODAY_CR_CNT      | NUMBER(5,0)       | 本日貸方筆數        |   |
|    | ACTBI_TODAY_CR_AMT      | NUMBER(15,2)      | 本日貸方金額        |   |
|    | ACTBI_TXN_DATE          | DATE              | 最終交易日         |   |
|    | ACTBI_DEL_FLAG          | VARCHAR2(1 char)  |               |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |   |
### VW_ODS_D_ACDWTOS
#### 存放同業檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | ACTOS_BANK_CODE         | VARCHAR2(7 char)  | 行庫代號          |   |
| PK | ACTOS_ACC_ID            | VARCHAR2(14 char) | 帳號            |   |
| PK | ACTOS_ACC_CODE          | VARCHAR2(10 char) | 科子目代號         |   |
| PK | ACTOS_CURR_CODE         | VARCHAR2(3 char)  | 幣別            |   |
|    | ACTOS_SA_KIND           | VARCHAR2(1 char)  | 存款種類          |   |
|    | ACTOS_ABATE_BR_CODE     | VARCHAR2(4 char)  | 主辦行           |   |
|    | ACTOS_DIV_CODE          | VARCHAR2(1 char)  | 適用部別          |   |
|    | ACTOS_CENT_CODE         | VARCHAR2(4 char)  | 適用利潤中心        |   |
|    | ACTOS_IN_DATE           | DATE              | 建檔日期          |   |
|    | ACTOS_IN_TLR            | VARCHAR2(6 char)  | 建檔櫃員          |   |
|    | ACTOS_OLD_ACC           | VARCHAR2(8 char)  |               |   |
|    | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間        |