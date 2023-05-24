---
sidebar_position: 35
title: 雲端服務台(IBANK)
---

### VW_ODS_D_TB_AGREEACCOUNT_LOG

#### 約定轉入帳戶維護(維護)LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | TXN_ID_CODE             | VARCHAR2(10 char)   | 電文類型                      |    |
|     | SEQ_NO                  | VARCHAR2(20 char)   | 交易序號                      |    |
|     | TR_OUT_ACC              | VARCHAR2(20 char)   | 帳號                        |    |
|     | TR_KIND                 | VARCHAR2(2 char)    | 維護類型                      |    |
|     | TR_IN_BANK_CODE         | VARCHAR2(6 char)    | 約定帳號行庫                    |    |
|     | TR_IN_ACC               | VARCHAR2(20 char)   | 約定帳號                      |    |
|     | SEQ_NO_RTN              | VARCHAR2(100 char)  | 主機交易序號(A6063電文方會回覆本資料)    |    |
|     | SEND_TIME               | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME               | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(2000 char) | 交易訊息                      |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_CLOSEACCOUNT_LOG

#### 結清銷戶LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | ACC_ID_NO               | VARCHAR2(20 char)   | 結清帳號                      |    |
|     | INT                     | NUMBER(19, 3)        | 應付利息                      |    |
|     | TAX_RATE                | NUMBER(11, 6)        | 稅率                        |    |
|     | PAY_TAX                 | NUMBER(19, 3)        | 代扣所得稅額                    |    |
|     | PURE_AMT                | NUMBER(19, 3)        | 淨息                        |    |
|     | BAL                     | NUMBER(19, 3)        | 存款餘額                      |    |
|     | CLS_AMT                 | NUMBER(19, 3)        | 結清金額                      |    |
|     | INS_FEE                 | NUMBER(19, 3)        | 代扣健保補充保費                  |    |
|     | TRI_BANK_NO             | VARCHAR2(6 char)    | 轉入帳號行庫                    |    |
|     | TR_ACC_ID_NO            | VARCHAR2(20 char)   | 轉入帳號                      |    |
|     | TEL                     | VARCHAR2(50 char)   | 連絡電話                      |    |
|     | AGREE1                  | VARCHAR2(2 char)    | 勾選約定事項                    |    |
|     | AGREE1_VERSION          | VARCHAR2(10 char)   | 約定事項版本                    |    |
|     | AGREE2                  | VARCHAR2(2 char)    | 勾選存戶聲明                    |    |
|     | AGREE2_VERSION          | VARCHAR2(10 char)   | 存戶聲明版本                    |    |
|     | ACH_KEY                 | VARCHAR2(50 char)   | ACHKey                    |    |
|     | SEQ_NO                  | VARCHAR2(20 char)   | 交易序號                      |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | SEND_TIME               | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME               | TIMESTAMP           | 接收電文時間                    |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 更新時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_CRE_LOG

#### 數位存款開戶基本資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | CUSTOMNAME              | VARCHAR2(100 char)  | 中文姓名                      |    |
|     | AFNO                    | VARCHAR2(20 char)   | 申請書編號                     |    |
|     | BILLNO                  | VARCHAR2(100 char)  | 約定條款版本號碼                  |    |
|     | AGREEYN                 | VARCHAR2(2 char)    | Y: 申請/N: 終止                 |    |
|     | SEQ_NO                  | VARCHAR2(20 char)   | 交易序號                      |    |
|     | SEND_TIME               | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME               | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_CRE_ORDER_LOG

#### 預約開戶基本資料LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | AFNO                    | VARCHAR2(20 char)   | 申請書編號                     |    |
|     | AMOUNT                  | NUMBER(19, 3)        | 申請金額                      |    |
|     | PERIOD                  | INTEGER             | 期數，單位：月（期）0~999           |    |
|     | TRANS_CODE              | VARCHAR2(6 char)    | 處理碼                       |    |
|     | SEQ_NO                  | VARCHAR2(20 char)   | 交易序號                      |    |
|     | PROJECT_CODE            | VARCHAR2(20 char)   | 專案代碼                      |    |
|     | PROJECT_RATE            | NUMBER(11, 6)        | 適用專案利率                    |    |
|     | EACH_AMT                | NUMBER(19, 3)        | 首期應付金額(尾期金額會不同)           |    |
|     | AGREE                   | VARCHAR2(2 char)    | 勾選約定條款(1:true/0:false)    |    |
|     | AGREE_VERSION           | VARCHAR2(50 char)   | 約定條款版本                    |    |
|     | SEND_TIME               | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME               | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_CREDITCARDAGREE_LOG

#### 信用卡消費分期約定書LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRE_NO                  | NUMBER(19, 0)        | 客戶建檔編號                    |    |
|     | PERSONAL_ID             | VARCHAR2(100 char)  | 身分證號                      |    |
|     | CRE_STATUS              | VARCHAR2(2 char)    | 交易狀態                      |    |
|     | CRE_STATUS_UPD_DATE     | TIMESTAMP           | 交易狀態修改日期                  |    |
|     | BRANCH_ID               | VARCHAR2(10 char)   | 開戶分行                      |    |
|     | EMP_ID                  | VARCHAR2(10 char)   | 核驗行員                      |    |
|     | BANK_ID                 | VARCHAR2(10 char)   | 銀行代碼(預留7位, 可傳3位就好)         |    |
|     | ACNO                    | VARCHAR2(20 char)   | 銀行帳號(空白補0)                |    |
|     | CARD_STATUS             | VARCHAR2(2 char)    | 金融卡啟用狀態                   |    |
|     | CARD_KIND               | VARCHAR2(2 char)    | 金融卡卡別                     |    |
|     | CARD_STATUS_UPD_DATE    | TIMESTAMP           |                           |    |
|     | CUST_NAME               | VARCHAR2(100 char)  | 客戶姓名                      |    |
|     | CUST_INPUT_DATA         | VARCHAR2(8000 char) | 戶名                        |    |
|     | CRE_DATE                | TIMESTAMP           | 開戶日期                      |    |
|     | CHECK_USER              | VARCHAR2(100 char)  |                           |    |
|     | CHECK_DATE              | TIMESTAMP           |                           |    |
|     | CRE_CHECK_TYPE          | VARCHAR2(2 char)    | 舊戶證件核對方式                  |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_CREDITCARDTRANSFER_LOG

#### 信用卡長期循環轉分期LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRE_NO                  | NUMBER(19, 0)        | 客戶建檔編號                    |    |
|     | AGREE1_VERSION          | VARCHAR2(10 char)   | 同意書版本                     |    |
|     | AGREE2_VERSION          | VARCHAR2(10 char)   |                           |    |
|     | SALE_AGREEMENT          | VARCHAR2(2 char)    | 共同行銷                      |    |
|     | BRANCH_ID               | VARCHAR2(6 char)    | 預定開戶分行                    |    |
|     | ORDER_DATE              | TIMESTAMP           | 預定開戶日期                    |    |
|     | AGREE_NOT_AMERICAN      | VARCHAR2(2 char)    | 立約人聲明未具有美國公民或稅務居民身分       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證字號                     |    |
|     | CUSTOM_NAME             | VARCHAR2(100 char)  | 中文戶名                      |    |
|     | ENGLISH_NAME            | VARCHAR2(100 char)  | 英文戶名                      |    |
|     | SEX                     | VARCHAR2(2 char)    | 性別                        |    |
|     | BIRTHDAY                | DATE                | 出生日期                      |    |
|     | MARRIAGE                | VARCHAR2(2 char)    | 婚姻狀況                      |    |
|     | WORK_STATUS             | VARCHAR2(10 char)   | 行業別(主計)                   |    |
|     | HOMEADDR_ZIP            | VARCHAR2(6 char)    | 戶籍地址_郵遞區號                 |    |
|     | HOMEADDR_AREA           | VARCHAR2(100 char)  | 戶籍地址_市(縣)(市)區(鄉)鎮         |    |
|     | HOMEADDR_ADDRESS        | VARCHAR2(200 char)  | 戶籍地址                      |    |
|     | CRADDR_ZIP              | VARCHAR2(6 char)    | 現居地址_郵遞區號                 |    |
|     | CRADDR_AREA             | VARCHAR2(100 char)  | 現居地址_市(縣)(市)區(鄉)鎮         |    |
|     | CRADDR_ADDRESS          | VARCHAR2(200 char)  | 現居地址                      |    |
|     | COMPANYADDR_ZIP         | VARCHAR2(6 char)    | 公司局號                      |    |
|     | COMPANYADDR_AREA        | VARCHAR2(100 char)  | 公司縣市別                     |    |
|     | COMPANYADDR_ADDRESS     | VARCHAR2(200 char)  | 公司地址                      |    |
|     | MAILING_STATUS          | VARCHAR2(2 char)    | 寄送地址                      |    |
|     | PHONE_STATUS            | VARCHAR2(2 char)    | 聯絡電話                      |    |
|     | HOMETEL_TELAREA         | VARCHAR2(10 char)   | 住家電話(前3碼)                 |    |
|     | HOMETEL_TEL             | VARCHAR2(50 char)   | 住家電話(後8碼)                 |    |
|     | COMPANYTEL_TELAREA      | VARCHAR2(10 char)   | 公司電話(前3碼)                 |    |
|     | COMPANYTEL_TEL          | VARCHAR2(50 char)   | 公司電話(後8碼)                 |    |
|     | COMPANYTEL_TELEXT       | VARCHAR2(50 char)   |                           |    |
|     | MOBILE                  | VARCHAR2(50 char)   | 行動電話                      |    |
|     | EMAIL_ADDRESS           | VARCHAR2(256 char)  | 電子郵件信箱                    |    |
|     | SEND_EMAIL              | VARCHAR2(2 char)    | 自動化交易是否以E-mail通知          |    |
|     | SEND_EILL               | VARCHAR2(2 char)    | 是否寄送電子綜合月結單               |    |
|     | EDUCATION               | VARCHAR2(2 char)    | 教育程度                      |    |
|     | COMPANY_INCOME          | NUMBER(19, 3)        | 年收入                       |    |
|     | COMPANY_NAME            | VARCHAR2(200 char)  | 服務公司名稱                    |    |
|     | COMPANY_PROFESSION      | VARCHAR2(100 char)  | 職稱                        |    |
|     | CREATE_ACCOUNT_GOAL     | VARCHAR2(2 char)    | 開戶目的                      |    |
|     | GET_CASH_ALL_BANK       | VARCHAR2(2 char)    | 全行提款服務                    |    |
|     | GET_CASH_SET_PW         | VARCHAR2(2 char)    | 設定提款密碼                    |    |
|     | BORROW_DEAL             | VARCHAR2(2 char)    | 綜存質借約定                    |    |
|     | TITRANS_DATE            | VARCHAR2(2 char)    | 定存轉存約定                    |    |
|     | CARD                    | VARCHAR2(2 char)    | 金融卡                       |    |
|     | CARD_STRATUS            | VARCHAR2(2 char)    | Debit卡                    |    |
|     | CARD_TRANSFER           | VARCHAR2(2 char)    | 1: 約定+非約定2: 約定3: 非約定4: 不申請    |    |
|     | CARD_SMART_PAY          | VARCHAR2(2 char)    | 消費扣款功能                    |    |
|     | CARD_INTERNATIONAL      | VARCHAR2(2 char)    | 國際卡功能                     |    |
|     | PHONE_BANK              | VARCHAR2(2 char)    | 電話銀行                      |    |
|     | PHONE_BANK_TRANSFER     | VARCHAR2(2 char)    | 臺幣轉帳功能                    |    |
|     | NET_BANK                | VARCHAR2(2 char)    | 網路銀行暨行動銀行                 |    |
|     | NET_BANK_TRANSFER       | VARCHAR2(2 char)    | 申請轉帳功能                    |    |
|     | MOBILE_OTP              | VARCHAR2(2 char)    | 行動保鏢                      |    |
|     | ONLINE_SET_IN_ACCOUNT   | VARCHAR2(2 char)    | 雲端服務台線上約定轉入帳號功能           |    |
|     | INACCOUNT1_BANKID       | VARCHAR2(6 char)    | 轉入金融機構代號1                 |    |
|     | INACCOUNT1_ACCOUNT      | VARCHAR2(20 char)   | 轉入帳號1                     |    |
|     | INACCOUNT2_BANKID       | VARCHAR2(6 char)    | 轉入金融機構代號2                 |    |
|     | INACCOUNT2_ACCOUNT      | VARCHAR2(20 char)   | 轉入帳號2                     |    |
|     | INACCOUNT3_BANKID       | VARCHAR2(6 char)    | 轉入金融機構代號3                 |    |
|     | INACCOUNT3_ACCOUNT      | VARCHAR2(20 char)   | 轉入帳號3                     |    |
|     | INACCOUNT4_BANKID       | VARCHAR2(6 char)    | 轉入金融機構代號4                 |    |
|     | INACCOUNT4_ACCOUNT      | VARCHAR2(20 char)   | 轉入帳號4                     |    |
|     | INACCOUNT5_BANKID       | VARCHAR2(6 char)    | 轉入金融機構代號5                 |    |
|     | INACCOUNT5_ACCOUNT      | VARCHAR2(20 char)   | 轉入帳號5                     |    |
|     | IS_INSERT_BS            | VARCHAR2(2 char)    | 是否上傳至分行系統                 |    |
|     | CREATE_DATE             | TIMESTAMP           | 產生日期                      |    |
|     | UPDATE_DATE             | TIMESTAMP           | 更新日期                      |    |
|     | UPDATE_USER             | VARCHAR2(10 char)   | 更新人員                      |    |
|     | ACNO                    | VARCHAR2(20 char)   | 銀行帳號(空白補0)                |    |
|     | EASYCARD_SALE_AGREEMENT | VARCHAR2(2 char)    | 是否上傳至分行系統                 |    |
|     | SEQ_NO                  | VARCHAR2(20 char)   |                           |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_NONECARD_MAIN

#### 無卡提款主檔LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NCT_NO                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | AUTH_TYPE               | VARCHAR2(30 char)   | 身分驗證方式                    |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | TRANS_TYPE              | VARCHAR2(2 char)    | 交易類別(0: 提款/1: 存款)           |    |
|     | SERVICE_ID              | VARCHAR2(8 char)    | 業務類別                      |    |
|     | TIFA_VERSION            | VARCHAR2(10 char)   | 無卡約定書版本                   |    |
|     | IS_OK                   | VARCHAR2(2 char)    | 執行結果                      |    |
|     | CHANNEL                 | VARCHAR2(10 char)   | 通路                        |    |
|     | IP_ADDR                 | VARCHAR2(50 char)   | 登入者IP                     |    |
|     | USER_AGENT              | VARCHAR2(1000 char) | 登入者UserAgent              |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_OPENTRUSTACCOUNT_LOG

#### 信託開戶LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | CUSTOMNAME              | VARCHAR2(200 char)  | 中文姓名                      |    |
|     | BIRTHDAY                | DATE                | 生日                        |    |
|     | BINS_CODE_JCIC          | VARCHAR2(10 char)   | 行業別(聯徵)                   |    |
|     | BINS_CODE               | VARCHAR2(10 char)   | 行業別(央行)                   |    |
|     | SUPER_VIP               | VARCHAR2(10 char)   | VIP等級                     |    |
|     | AO_BR                   | VARCHAR2(6 char)    | AO所屬行                     |    |
|     | AO_NO                   | VARCHAR2(10 char)   | AO所屬員編                    |    |
|     | MEGA_CONS_NO            | VARCHAR2(10 char)   | 理財顧問(理顧編號)                |    |
|     | FATCA_1                 | VARCHAR2(2 char)    | 身分別                       |    |
|     | FATCA_2                 | VARCHAR2(2 char)    | 徵提文件種類                    |    |
|     | FATCA_3                 | VARCHAR2(2 char)    | 不合作客戶種類                   |    |
|     | FATCA_4                 | DATE                | W-8BEN簽署日期                |    |
|     | FATCA_5                 | VARCHAR2(2 char)    | W-8BENE24b                |    |
|     | FATCA_6                 | VARCHAR2(2 char)    | W-8BENE24c                |    |
|     | FATCA_7                 | VARCHAR2(2 char)    | W-8BENE40c                |    |
|     | ACTNO_N                 | VARCHAR2(20 char)   | 台幣扣款帳號                    |    |
|     | ACTNO_N_BR              | VARCHAR2(6 char)    | 台幣扣款帳號分行                  |    |
|     | ACTNO_Y                 | VARCHAR2(20 char)   | 外幣扣款帳號                    |    |
|     | ACTNO_Y_BR              | VARCHAR2(6 char)    | 外幣扣款帳號分行                  |    |
|     | HOUSE_TEL_ZONE          | VARCHAR2(6 char)    | 住家電話區域碼                   |    |
|     | HOUSE_TEL_NO            | VARCHAR2(50 char)   | 住家電話                      |    |
|     | CPNY_TEL_ZONE           | VARCHAR2(6 char)    | 公司電話區域碼                   |    |
|     | CPNY_TEL_NO             | VARCHAR2(50 char)   | 公司電話                      |    |
|     | CPNY_TEL_EXT            | VARCHAR2(50 char)   | 公司電話分機電話                  |    |
|     | MOBILE                  | VARCHAR2(50 char)   | 行動電話                      |    |
|     | TAX_RATE                | VARCHAR2(2 char)    | 扣稅別                       |    |
|     | CUST_TYPE               | VARCHAR2(2 char)    | 客戶型態                      |    |
|     | CUST_KIND               | VARCHAR2(10 char)   | 客戶類別                      |    |
|     | COUNTRY_CODE            | VARCHAR2(10 char)   | 國別代碼                      |    |
|     | NOTICE_TEL_ZONE         | VARCHAR2(6 char)    | 聯絡人電話區域碼                  |    |
|     | NOTICE_TEL_NO           | VARCHAR2(50 char)   | 聯絡人電話                     |    |
|     | NOTICE_TEL_EXT          | VARCHAR2(50 char)   | 聯絡人電話分機                   |    |
|     | ENG_CUST_NAME           | VARCHAR2(100 char)  | 個人/公司英文名稱                 |    |
|     | DMCL_ZIP_CODE           | VARCHAR2(6 char)    | 戶籍/公司登記地址之郵遞區號            |    |
|     | TRUST_ZIP_CODE          | VARCHAR2(6 char)    | 信託地址之郵遞區號                 |    |
|     | DMCL_ADDR               | VARCHAR2(200 char)  | 戶籍/公司登記地址                 |    |
|     | TRUST_ADDR              | VARCHAR2(200 char)  | 信託寄送地址                    |    |
|     | NOTICE_NAME             | VARCHAR2(100 char)  | 聯絡人姓名/公司聯絡人               |    |
|     | NOTICE_TITLE            | VARCHAR2(100 char)  | 聯絡人稱謂/公司聯絡人職稱             |    |
|     | AGREE1                  | VARCHAR2(2 char)    | 存款、信託業務總約定書               |    |
|     | AGREE1_VERSION          | VARCHAR2(100 char)  | 存款、信託業務總約定書版本             |    |
|     | AGREE2                  | VARCHAR2(2 char)    | 本人已詳閱「聲明書」並同意「聲明書」內容      |    |
|     | SEQ_NO_96605            | VARCHAR2(20 char)   | 交易序號                      |    |
|     | RTN_CODE_96605          | VARCHAR2(20 char)   | 交易結果                      |    |
|     | SEND_TIME_96605         | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME_96605         | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_MESSAGE_SIGN        | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | SEND_TIME_SIGN          | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME_SIGN          | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_SALEAGREE_LOG

#### 共同行銷同意書
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | AGREE                   | VARCHAR2(2 char)    | 是否勾選同意書                   |    |
|     | AGREE_VERSION           | VARCHAR2(50 char)   | 同意書版本                     |    |
|     | SEQ_NO_NET33            | VARCHAR2(20 char)   | 交易序號NET33                 |    |
|     | RTN_CODE_NET33          | VARCHAR2(20 char)   | 交易結果NET33                 |    |
|     | SEND_TIME_NET33         | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME_NET33         | TIMESTAMP           | 接收電文時間                    |    |
|     | SEQ_NO_9600B            | VARCHAR2(20 char)   | 交易序號9660B                 |    |
|     | RTN_CODE_9600B          | VARCHAR2(20 char)   | 交易結果9660B                 |    |
|     | SEND_TIME_9600B         | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME_9600B         | TIMESTAMP           | 接收電文時間                    |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(2000 char) | 交易訊息                      |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |    |

### VW_ODS_D_TB_TRUSTAGREE_LOG

#### 信託推介同意書LOG
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOG_ID                  | NUMBER(19, 0)        | 識別碼                       |    |
|     | PERSONAL_ID             | VARCHAR2(11 char)   | 身分證號/統編                   |    |
|     | SESSION_ID              | VARCHAR2(50 char)   | 登入認證SessionGUID           |    |
|     | DODATE                  | TIMESTAMP           | 申請時間                      |    |
|     | CUSTOMNAME              | VARCHAR2(100 char)  | 中文姓名                      |    |
|     | AGREEYN                 | VARCHAR2(2 char)    | Y: 申請/N: 終止                 |    |
|     | AGREE_VERSION           | VARCHAR2(100 char)  | 信託推介同意書版本                 |    |
|     | CP                      | VARCHAR2(2 char)    | P自然人/C法人                  |    |
|     | RETCODE                 | VARCHAR2(2 char)    | 回覆訊息代碼                    |    |
|     | RETMSG                  | VARCHAR2(1000 char) | 回覆訊息內容                    |    |
|     | SHWTXMSG                | VARCHAR2(2 char)    | 是否顯示檢核訊息                  |    |
|     | TXN6                    | VARCHAR2(200 char)  | 近一年內以信託方式進行投資交易筆數達六筆(含)以上 |    |
|     | AGE70                   | VARCHAR2(200 char)  | 年齡未達七十歲                   |    |
|     | EDUCATION               | VARCHAR2(200 char)  | 教育程度為國中畢業(不含)以上           |    |
|     | SICK                    | VARCHAR2(200 char)  | 未領有全民健康保險重大傷病證明           |    |
|     | RTN_CODE                | VARCHAR2(20 char)   | 交易結果                      |    |
|     | RTN_MESSAGE             | VARCHAR2(1000 char) | 交易訊息                      |    |
|     | SEND_TIME               | TIMESTAMP           | 傳送電文時間                    |    |
|     | RECV_TIME               | TIMESTAMP           | 接收電文時間                    |    |
|     | CREATE_TIME_STAMP       | TIMESTAMP           | 建立時間                      |    |
|     | UPDATE_TIME_STAMP       | TIMESTAMP           | 修改時間                      |    |
|     | DEL_COL                 | VARCHAR2(8 char)    | 資料刪除條件使用                  |    |
|     | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                    |
