---
sidebar_position: 39
title: 核心網銀(NBYM)
---

### VW_ODS_D_NBAPLIDG

#### 行動保鏢客戶申請檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NBIDG_ID_CODE           | VARCHAR2(11 char) | 統一編號             |    |
| PK  | NBIDG_SEQ               | VARCHAR2(8 char)  | 裝置序號             |    |
|     | NBIDG_NAME              | VARCHAR2(40 char) | 裝置暱稱             |    |
|     | NBIDG_NOW_STAT          | VARCHAR2(2 char)  | 目前狀態             |    |
|     | NBIDG_APPLY_BR_CODE     | VARCHAR2(4 char)  | 申請單位             |    |
|     | NBIDG_CHG_BR_CODE       | VARCHAR2(4 char)  | 異動單位             |    |
|     | NBIDG_IDENT_DATE        | DATE              | 申請日期             |    |
|     | NBIDG_CHG_DATE          | DATE              | 異動日期             |    |
|     | NBIDG_CHG_TIME          | NUMBER(6, 0)       | 異動時間             |    |
|     | NBIDG_CHG_TLR           | VARCHAR2(6 char)  | 異動櫃員             |    |
|     | NBIDG_TXN_ID_CODE       | VARCHAR2(5 char)  | 異動交易             |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間           |    |

### VW_ODS_D_NBGEBCST

#### 全球金融網客戶管理檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NBGST_ID_CODE           | VARCHAR2(11 char) | 統一編號             |    |
|     | NBGST_NOW_STAT          | VARCHAR2(2 char)  | 目前狀態             |    |
|     | NBGST_LAST_STAT         | VARCHAR2(2 char)  | 前次狀態             |    |
|     | NBGST_USER_TYPE         | VARCHAR2(1 char)  | 客戶類別             |    |
|     | NBGST_DOUBLE_LOGIN      | VARCHAR2(1 char)  | 雙重認證登入           |    |
|     | NBGST_RETRY             | VARCHAR2(1 char)  | 餘額不足重試           |    |
|     | NBGST_USE_TRA           | VARCHAR2(1 char)  | 客戶轉帳帳號均須事先約定     |    |
|     | NBGST_SERVICE_ITEM      | VARCHAR2(20 char) | 申請項目             |    |
|     | NBGST_USER_ADMIN        | VARCHAR2(20 char) | ADMIN用戶代號        |    |
|     | NBGST_USER_ROOT1        | VARCHAR2(20 char) | ROOT1用戶代號        |    |
|     | NBGST_USER_ROOT2        | VARCHAR2(20 char) | ROOT2用戶代號        |    |
|     | NBGST_PASSWD_ADMIN      | VARCHAR2(40 char) | ADMIN密碼          |    |
|     | NBGST_PASSWD_ROOT1      | VARCHAR2(40 char) | ROOT1密碼          |    |
|     | NBGST_PASSWD_ROOT2      | VARCHAR2(40 char) | ROOT2密碼          |    |
|     | NBGST_PWD_ERR_TIMES_ADM | NUMBER(1, 0)       | ADMIN密碼錯誤次數      |    |
|     | NBGST_PWD_ERR_TIMES_RT1 | NUMBER(1, 0)       | ROOT1密碼錯誤次數      |    |
|     | NBGST_PWD_ERR_TIMES_RT2 | NUMBER(1, 0)       | ROOT2密碼錯誤次數      |    |
|     | NBGST_APPLY_BR_CODE     | VARCHAR2(4 char)  | 申請單位             |    |
|     | NBGST_CHG_BR_CODE       | VARCHAR2(4 char)  | 異動單位             |    |
|     | NBGST_IDENT_DATE        | DATE              | 申請日期             |    |
|     | NBGST_CHG_DATE          | DATE              | 異動日期             |    |
|     | NBGST_USE_DATE          | DATE              | 註冊日期             |    |
|     | NBGST_CHG_TIME          | NUMBER(6, 0)       | 異動時間             |    |
|     | NBGST_CHG_TLR           | VARCHAR2(6 char)  | 異動櫃員             |    |
|     | NBGST_L_APP_DATE_ADM    | DATE              | ADMIN密碼申請/重置日    |    |
|     | NBGST_L_APP_DATE_RT1    | DATE              | ROOT1密碼申請/重置日    |    |
|     | NBGST_L_APP_DATE_RT2    | DATE              | ROOT2密碼申請/重置日    |    |
|     | NBGST_L_CHG_DATE_ADM    | DATE              | ADMIN密碼最後異動日     |    |
|     | NBGST_L_CHG_DATE_RT1    | DATE              | ROOT1密碼最後異動日     |    |
|     | NBGST_L_CHG_DATE_RT2    | DATE              | ROOT2密碼最後異動日     |    |
|     | NBGST_IDENTITY          | VARCHAR2(1 char)  | 身份別              |    |
|     | NBGST_OBU_DBU           | VARCHAR2(3 char)  | OBU/DBU          |    |
|     | NBGST_PWD_ADM           | VARCHAR2(6 char)  | ADMIN金鑰          |    |
|     | NBGST_PWD_RT1           | VARCHAR2(6 char)  | ROOT1金鑰          |    |
|     | NBGST_PWD_RT2           | VARCHAR2(6 char)  | ROOT2金鑰          |    |
|     | NBGST_TR_STATUS         | VARCHAR2(2 char)  | 轉換狀態             |    |
|     | NBGST_FX_TRA            | VARCHAR2(1 char)  | 同意外幣付款收款人帳戶視同已約定 |    |
|     | NBGST_FILLER            | VARCHAR2(45 char) | 空白               |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間           |    |

### VW_ODS_D_NBOTP

#### 交易OTP主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NBOTP_ID_CODE           | VARCHAR2(11 char) | 統一編號             |    |
|     | NBOTP_STATUS            | VARCHAR2(2 char)  | 狀態               |    |
|     | NBOTP_APPLY_BR_CODE     | VARCHAR2(4 char)  | 申請單位             |    |
|     | NBOTP_APL_DATE          | DATE              | 申請日期             |    |
|     | NBOTP_CHG_BR_CODE       | VARCHAR2(4 char)  | 異動單位             |    |
|     | NBOTP_CHG_DATE          | DATE              |                  |    |
|     | NBOTP_CHG_TIME          | NUMBER(6, 0)       | 異動時間             |    |
|     | NBOTP_CHG_TLR           | VARCHAR2(6 char)  | 異動櫃員             |    |
|     | NBOTP_MOBILE            | VARCHAR2(10 char) | 交易OTP電話          |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間           |    |

### VW_ODS_D_NBSTAMNT

#### 電子月結單申請檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NBSTM_ID_CODE           | VARCHAR2(11 char) | 統一編號             |    |
|     | NBSTM_STATUS            | VARCHAR2(1 char)  | 申請狀態             |    |
|     | NBSTM_APP_DATE          | DATE              | 申請日期             |    |
|     | NBSTM_APP_TIME          | NUMBER(6, 0)       | 申請時間             |    |
|     | NBSTM_CHG_DATE          | DATE              | 異動日期             |    |
|     | NBSTM_CHG_TIME          | NUMBER(6, 0)       | 異動時間             |    |
|     | NBSTM_CHG_TLR           | VARCHAR2(6 char)  | 異動櫃員             |    |
|     | NBSTM_CHG_BR_CODE       | VARCHAR2(4 char)  | 異動單位             |    |
|     | NBSTM_TXN_ID_CODE       | VARCHAR2(5 char)  | 異動交易             |    |
|     | NBSTM_ALIAS             | VARCHAR2(60 char) | 別名(難字戶)          |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間           |
