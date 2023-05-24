---
sidebar_position: 48
title: 信託系統提供的 AML 資料(WMAML)
---

### VW_ODS_D_EP015_AML_TR

#### 反洗錢_信託契約主檔(每日_新增)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | ACCOUNT_NBR                    | VARCHAR2(50 char)   | AccountNumber帳號                                                                                      |    |
|     | APPLICATION_CODE               | VARCHAR2(5 char)    | e.g., DDA–DemandDeposit, SAV–Savings, COD–CertificatesofDepositandLNA–LoanAccount                       |    |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | CustomerUniquenumber客戶編號，須跟CIF勾稽                                                                     |    |
|     | BRANCH_NBR                     | VARCHAR2(50 char)   | Accountopeningbranchnumber分行代號                                                                       |    |
|     | BRANCH_NAME                    | VARCHAR2(100 char)  | Accountopeningbranchname分行名                                                                          |    |
|     | ACCOUNT_TYPE_CODE              | VARCHAR2(50 char)   | Codeofaccounttype                                                                                    |    |
|     | ACCOUNT_TYPE_DESC              | VARCHAR2(100 char)  | Descriptionofaccounttype                                                                             |    |
|     | OFFICER_NBR                    | VARCHAR2(50 char)   | Bankofficernumber                                                                                    |    |
|     | OFFICER_NAME                   | VARCHAR2(100 char)  | bankofficername                                                                                      |    |
|     | CURRENT_BALANCE                | VARCHAR2(24 char)   |                                                                                                      |    |
|     | AVAILABLE_BALANCE              | VARCHAR2(24 char)   | AvailableBalance=CurrentBalance–(HoldAmount+FloatAmount)                                             |    |
|     | OPENING_DATE                   | VARCHAR2(8 char)    |                                                                                                      |    |
|     | CLOSED_DATE                    | VARCHAR2(8 char)    |                                                                                                      |    |
|     | ACCOUNT_STATUS                 | VARCHAR2(1 char)    | e.g., 0–Active, 1–Closed                                                                               |    |
|     | OVERDRAFT_LIMIT                | VARCHAR2(24 char)   |                                                                                                      |    |
|     | DATE_OF_LAST_ACTIVITY          | VARCHAR2(8 char)    | 最後帳務異動日                                                                                              |    |
|     | OPENING_METHOD_CODE            | VARCHAR2(50 char)   | 固定為_01_                                                                                              |    |
|     | OPENING_METHOD_DESC            | VARCHAR2(100 char)  | 目前無此資料                                                                                               |    |
|     | PRODUCT_CODE                   | VARCHAR2(50 char)   | 待確認對照表                                                                                               |    |
|     | PRODUCT_DESC                   | VARCHAR2(100 char)  | 待確認NO                                                                                                |    |
|     | ACCOUNT_PURPOSE_CODE           | VARCHAR2(50 char)   | 待確認10                                                                                                |    |
|     | ACCOUNT_PURPOSE_DESC           | VARCHAR2(100 char)  | 目前無此資料                                                                                               |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   | 待確認TMS                                                                                               |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TRANSFER_FLAG                  | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_D_EP016_01_AML_KYC

#### 反洗錢_信託客戶主檔CDD(每日_新增)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_1             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_2             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_3             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_4             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_6             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | ASSET_UNDER_MGNT               | NUMBER(24, 2)        |                                                                                                      |    |
|     | INSURANCE_PAYMENT              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CCD_AMOUNT_LEVEL               | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FAR_DISTANCE_FLAG              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | THIGH_RISK_BUSINESS_ENTITY     | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FOREIGN_AFFAIR_FLAG            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CCD_CHANNEL                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | TRUST_PRODUCT                  | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PERSONAL_INS_FLAG              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | E_BANKING_PRODUCT              | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CROSS_BORDER_EPAY              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | DERIVATIVE_PRODUCT             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | FOREIGN_EX_PRODUCT             | VARCHAR2(50 char)   |                                                                                                      |    |
|     | OBU_CDD_UNFINISHED             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | NO_PHYSICAL_BUS_LOC            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | OVERSEA_BUS_LOCATION           | VARCHAR2(50 char)   |                                                                                                      |    |
|     | MULTI_CCD_FLAG                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MULTI_SAFE_BOX_FLAG            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | ACQUIRING_BUSINESS_FLAG        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MOBIL_CCD_INTPAY_FLAG          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | REFUSE_BNF_OWNER               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_D_EP016_AML_CUST_TR

#### 反洗錢_信託客戶主檔(每日_新增)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | 統一編號                                                                                                 |    |
|     | CUSTOMER_TYPE                  | VARCHAR2(1 char)    | 統一編號                                                                                                 |    |
|     | CUSTOMER_ENG_NAME              | VARCHAR2(350 char)  | 個人/公司英文名稱                                                                                            |    |
|     | CORR_ADDRESS_LINE1             | VARCHAR2(200 char)  | 中英文地址                                                                                                |    |
|     | CORR_ADDRESS_LINE2             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_ADDRESS_LINE3             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_ADDRESS_LINE4             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_COUNTRY                   | VARCHAR2(2 char)    | 寄送地址國別                                                                                               |    |
|     | NATIONALITY                    | VARCHAR2(2 char)    | 國別代碼                                                                                                 |    |
|     | BRANCH_NBR                     | VARCHAR2(100 char)  | 客戶歸屬分行                                                                                               |    |
|     | UNIQUE_ID_NAME                 | VARCHAR2(100 char)  |                                                                                                      |    |
|     | UNIQUE_ID_VALUE                | VARCHAR2(100 char)  | 統一編號/身分證號                                                                                            |    |
|     | IDENT_OTH                      | VARCHAR2(100 char)  |                                                                                                      |    |
|     | CIF_STATUS                     | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CUSTOMER_CHI_NAME              | VARCHAR2(350 char)  | 戶名                                                                                                   |    |
|     | INDUSTRY_CODE                  | VARCHAR2(50 char)   | 行業別(主計處)                                                                                             |    |
|     | HOME_PHONE                     | VARCHAR2(14 char)   | 住家電話                                                                                                 |    |
|     | OFFICE_PHONE                   | VARCHAR2(14 char)   | 公司電話                                                                                                 |    |
|     | MOBILE_PHONE                   | VARCHAR2(14 char)   | 行動電話                                                                                                 |    |
|     | FAX                            | VARCHAR2(14 char)   | 傳真                                                                                                   |    |
|     | DATE_OF_BIRTH                  | DATE                | 出生日期                                                                                                 |    |
|     | INCORP_DATE                    | DATE                | 公司成立日期                                                                                               |    |
|     | OPENING_DATE                   | DATE                | 建檔日期                                                                                                 |    |
|     | CLOSED_DATE                    | DATE                | 關戶日期                                                                                                 |    |
|     | IS_EMPLOYEE_IND                | VARCHAR2(1 char)    | 是否為員工                                                                                                |    |
|     | IS_HIGH_RISK_IND               | VARCHAR2(1 char)    | 是否為高風險客戶                                                                                             |    |
|     | CUSTOMER_SEGMENT               | VARCHAR2(10 char)   |                                                                                                      |    |
|     | OCCUPATION_CODE                | VARCHAR2(15 char)   | 特殊職業註記                                                                                               |    |
|     | OWNERSHIP_CODE                 | VARCHAR2(50 char)   | 客戶型態                                                                                                 |    |
|     | RM_CODE                        | VARCHAR2(50 char)   | RM代碼                                                                                                 |    |
|     | PER_ADDRESS_LINE1              | VARCHAR2(200 char)  | 戶籍/公司登記地址                                                                                            |    |
|     | PER_ADDRESS_LINE2              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_ADDRESS_LINE3              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_ADDRESS_LINE4              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_COUNTRY                    | VARCHAR2(2 char)    |                                                                                                      |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | RM_NAME                        | VARCHAR2(50 char)   |                                                                                                      |    |
|     | ALIAS_NAME                     | VARCHAR2(350 char)  |                                                                                                      |    |
|     | PLACE_OF_BIRTH                 | VARCHAR2(2 char)    |                                                                                                      |    |
|     | IS_SEND_EMAIL_ACCOUNT          | VARCHAR2(1 char)    | 帳戶持有人是否有郵件帳戶                                                                                         |    |
|     | IS_MULTI_ACC_WITH_DIFF_NAME    | VARCHAR2(1 char)    | 客戶是否擁有多個不同名的帳戶                                                                                       |    |
|     | IS_COMPLEX_STRUCTURE           | VARCHAR2(1 char)    | 帳戶持有人是否具有複雜的結構情境                                                                                     |    |
|     | IS_LISTED_COM_DIRECTOR         | VARCHAR2(1 char)    | 帳戶持有人/UBO負責人是否為上市公司的(主席, 董事或首席執行官)                                                                    |    |
|     | MAIN_BUSINESS_ADDRESS          | VARCHAR2(200 char)  | 主要營業地址                                                                                               |    |
|     | MAIN_BUSINESS_COUNTRY          | VARCHAR2(2 char)    | 主要營業國家                                                                                               |    |
|     | CUST_PRODUCT_SERVICES          | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_METHOD_OF_OPENING         | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_ACCOUNT_PURPOSE           | VARCHAR2(50 char)   |                                                                                                      |    |
|     | SOURCE_OF_FUND                 | VARCHAR2(50 char)   |                                                                                                      |    |
|     | SOURCE_OF_WEALTH               | VARCHAR2(50 char)   |                                                                                                      |    |
|     | BUSINESS_OPERATION_STAT        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | FIRST_TRXN_AMT                 | NUMBER(24, 2)        |                                                                                                      |    |
|     | SERVING_ENTITY                 | VARCHAR2(350 char)  |                                                                                                      |    |
|     | JOB_TITLE                      | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_WITH_BEARER_SHARES        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | UNCOOPERATIVE_FLAG             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TRUSTEE_FLAG                   | VARCHAR2(1 char)    |                                                                                                      |    |
|     | SPEC_PRODUCT_RISK_CODE         | VARCHAR2(50 char)   |                                                                                                      |    |
|     | OBU_FLAG                       | VARCHAR2(1 char)    |                                                                                                      |    |
|     | OBU_TYPE                       | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CUSTOMER_SCALE                 | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CUSTOMER_LEVEL                 | VARCHAR2(15 char)   |                                                                                                      |    |
|     | ANNUAL_INCOME                  | VARCHAR2(15 char)   |                                                                                                      |    |
|     | EDUCATION                      | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CORR_ADDR_CHANGE_FLAG          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MAIL_REJECT_CODE               | VARCHAR2(15 char)   |                                                                                                      |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_PEP                         | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_FOREIGN_PEP                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_DOMESTIC_PEP                | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_FOREIGN_ORG_PEP             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_EX_PEP                      | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CUST_RP_IS_PEP                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_NN                          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_BLACKLIST                   | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_HIGH_RISK_REMARK            | VARCHAR2(50 char)   |                                                                                                      |    |
|     | WARN_RESTRICT_ACCOUNT          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | GENDER                         | VARCHAR2(1 char)    |                                                                                                      |    |
|     | NATIONALITY2                   | VARCHAR2(2 char)    |                                                                                                      |    |
|     | UNIQUE_ID_ISSUING_CTRY         | VARCHAR2(2 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_D_EP017_AML_TXNTR_TI

#### 反洗錢_信託交易主檔 --定存資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TRANSACTION_ID                 | VARCHAR2(50 char)   | 交易序號(櫃員代號+交易流水號)                                                                                     |    |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | 統一編號                                                                                                 |    |
|     | ACCOUNT_NBR                    | VARCHAR2(50 char)   | 帳號                                                                                                   |    |
|     | APPLICATION_CODE               | VARCHAR2(5 char)    |                                                                                                      |    |
|     | AMOUNT_IN                      | NUMBER(24, 2)        | 交易金額                                                                                                 |    |
|     | AMOUNT_OUT                     | NUMBER(24, 2)        | 交易金額                                                                                                 |    |
|     | TRANSACTION_CODE               | VARCHAR2(50 char)   | 交易代號                                                                                                 |    |
|     | TRANSACTION_DESC               | VARCHAR2(100 char)  | 交易代號名稱                                                                                               |    |
|     | TELLER_ID                      | VARCHAR2(50 char)   | 櫃員代號                                                                                                 |    |
|     | TELLER_TYPE                    | VARCHAR2(50 char)   | 通路別                                                                                                  |    |
|     | TELLER_TYPE_DESC               | VARCHAR2(100 char)  | 通路別說明                                                                                                |    |
|     | TRANSACTION_DATE               | VARCHAR2(8 char)    | 交易日期                                                                                                 |    |
|     | CURRENCY_CODE                  | VARCHAR2(3 char)    | 原幣別                                                                                                  |    |
|     | ORI_AMOUNT_IN                  | NUMBER(24, 2)        | 進原始金額                                                                                                |    |
|     | ORI_AMOUNT_OUT                 | NUMBER(24, 2)        | 出原始金額                                                                                                |    |
|     | BRANCH_OF_TRXN                 | VARCHAR2(50 char)   | 交易分行別                                                                                                |    |
|     | BANK_NBR                       | VARCHAR2(10 char)   | 交易銀行代碼                                                                                               |    |
|     | APPLICATION_CODE_FROM          | VARCHAR2(5 char)    | 與其他資料串接（From）                                                                                        |    |
|     | ACCOUNT_NBR_FROM               | VARCHAR2(50 char)   | 與其他資料串接（From）                                                                                        |    |
|     | APPLICATION_CODE_TO            | VARCHAR2(5 char)    |                                                                                                      |    |
|     | ACCOUNT_NBR_TO                 | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | CONDUCTOR_ID                   | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FOREIGN_CURRENCY_EXCHANGE_FLAG | VARCHAR2(1 char)    |                                                                                                      |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_D_EP018_AML_TXNTR_SA

#### 反洗錢_信託交易主檔 --活存資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TRANSACTION_ID                 | VARCHAR2(50 char)   | 交易序號                                                                                                 |    |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | 統一編號                                                                                                 |    |
|     | ACCOUNT_NBR                    | VARCHAR2(50 char)   | 帳號                                                                                                   |    |
|     | APPLICATION_CODE               | VARCHAR2(5 char)    |                                                                                                      |    |
|     | AMOUNT_IN                      | NUMBER(24, 2)        | 交易金額                                                                                                 |    |
|     | AMOUNT_OUT                     | NUMBER(24, 2)        | 交易金額                                                                                                 |    |
|     | TRANSACTION_CODE               | VARCHAR2(50 char)   | 交易代號                                                                                                 |    |
|     | TRANSACTION_DESC               | VARCHAR2(100 char)  | 交易名稱                                                                                                 |    |
|     | TELLER_ID                      | VARCHAR2(50 char)   | 櫃員代號                                                                                                 |    |
|     | TELLER_TYPE                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | TELLER_TYPE_DESC               | VARCHAR2(100 char)  |                                                                                                      |    |
|     | TRANSACTION_DATE               | VARCHAR2(8 char)    | 交易日期                                                                                                 |    |
|     | CURRENCY_CODE                  | VARCHAR2(3 char)    |                                                                                                      |    |
|     | ORI_AMOUNT_IN                  | NUMBER(24, 2)        |                                                                                                      |    |
|     | ORI_AMOUNT_OUT                 | NUMBER(24, 2)        |                                                                                                      |    |
|     | BRANCH_OF_TRXN                 | VARCHAR2(50 char)   | 代收付單位                                                                                                |    |
|     | BANK_NBR                       | VARCHAR2(10 char)   |                                                                                                      |    |
|     | APPLICATION_CODE_FROM          | VARCHAR2(5 char)    |                                                                                                      |    |
|     | ACCOUNT_NBR_FROM               | VARCHAR2(50 char)   |                                                                                                      |    |
|     | APPLICATION_CODE_TO            | VARCHAR2(5 char)    |                                                                                                      |    |
|     | ACCOUNT_NBR_TO                 | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | CONDUCTOR_ID                   | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FOREIGN_CURRENCY_EXCHANGE_FLAG | VARCHAR2(1 char)    |                                                                                                      |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_D_EP020_AML_TRRP

#### 反洗錢_信託RP主檔(每日_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID_NUMBER             | VARCHAR2(24 char)   | 統一編號                                                                                                 |    |
|     | RELATED_PARTIES_TYPE           | VARCHAR2(5 char)    | 1. 監護類別旗標__2法人實際受益人身分證件類型__3被授權人身分證件類型__4.2017/08/30：增加客戶高階管理人員檔                                      |    |
|     | RELATED_PARTIES_ID             | VARCHAR2(50 char)   | 1. 第一法定代理人統一編號__2. 法人實際受益人身分證件號碼__3. 被授權人身分證件號碼__4.2017/08/30：增加客戶高階管理人員檔__高階管理人員之身分證件號碼                |    |
|     | OTHER_RELATED_PARTY_TYPE       | VARCHAR2(5 char)    |                                                                                                      |    |
|     | OTHER_RELATED_PARTY_DESC       | VARCHAR2(50 char)   |                                                                                                      |    |
|     | NAME                           | VARCHAR2(350 char)  | 1. 第一法定代理人姓名__2法人實際受益人姓名__3被授權人姓名__4.2017/08/30：增加客戶高階管理人員檔姓名                                         |    |
|     | ALIASES                        | VARCHAR2(350 char)  |                                                                                                      |    |
|     | TYPE                           | VARCHAR2(1 char)    | 相關關係人類別                                                                                              |    |
|     | DATE_OF_BIRTH                  | VARCHAR2(8 char)    |                                                                                                      |    |
|     | NATIONALITY                    | VARCHAR2(4 char)    | 1. 法人實際受益人國籍__2. 被授權人國籍__3.2017/08/30：增加客戶高階管理人員檔__高階管理人國籍                                             |    |
|     | PERMANENT_ADDRESS_LINE_1       | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PERMANENT_ADDRESS_LINE_2       | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PERMANENT_ADDRESS_LINE_3       | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PERMANENT_COUNTRY              | VARCHAR2(4 char)    |                                                                                                      |    |
|     | CORRESPONDENT_ADDRESS_LINE_1   | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORRESPONDENT_ADDRESS_LINE_2   | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORRESPONDENT_ADDRESS_LINE_3   | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORRESPONDENT_COUNTRY          | VARCHAR2(4 char)    |                                                                                                      |    |
|     | CONTACT_PHONE_NUMBER           | VARCHAR2(14 char)   |                                                                                                      |    |
|     | EMAIL_ADDRESS                  | VARCHAR2(100 char)  |                                                                                                      |    |
|     | ID_TYPE                        | VARCHAR2(50 char)   | 2017/08/30更新__1. 負責人身分證件類型，第一__2. 法人實際受益人身分證件類型__3. 被授權人身分證件類型__4.2017/08/30：增加客戶高階管理人員檔__高階管理人員之身分證件類型 |    |
|     | ID_NUMBER                      | VARCHAR2(30 char)   | 1. 第一法定代理人統一編號__2. 法人實際受益人身分證件號碼__3. 被授權人身分證件號碼__4.2017/08/30：增加客戶高階管理人員檔__高階管理人員之身分證件號碼                |    |
|     | ID_ISSUE_DATE                  | VARCHAR2(8 char)    |                                                                                                      |    |
|     | ID_EXPIRY_DATE                 | VARCHAR2(8 char)    |                                                                                                      |    |
|     | ID_ISSUING_COUNTRY             | VARCHAR2(4 char)    |                                                                                                      |    |
|     | REMARK                         | VARCHAR2(1000 char) |                                                                                                      |    |
|     | STATUS                         | VARCHAR2(2 char)    |                                                                                                      |    |
|     | OPENING_DATE                   | VARCHAR2(8 char)    | 建檔日期                                                                                                 |    |
|     | CLOSED_DATE                    | VARCHAR2(8 char)    |                                                                                                      |    |
|     | CORESYSTEM                     | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | NATIVE_NAME                    | VARCHAR2(350 char)  | RelatedPartiesnativename                                                                             |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_W_EP015_AML_TR_FULL

#### 反洗錢_信託契約主檔(每週_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | ACCOUNT_NBR                    | VARCHAR2(50 char)   | AccountNumber帳號                                                                                      |    |
|     | APPLICATION_CODE               | VARCHAR2(5 char)    | e.g., DDA–DemandDeposit, SAV–Savings, COD–CertificatesofDepositandLNA–LoanAccount                       |    |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | CustomerUniquenumber客戶編號，須跟CIF勾稽                                                                     |    |
|     | BRANCH_NBR                     | VARCHAR2(50 char)   | Accountopeningbranchnumber分行代號                                                                       |    |
|     | BRANCH_NAME                    | VARCHAR2(100 char)  | Accountopeningbranchname分行名                                                                          |    |
|     | ACCOUNT_TYPE_CODE              | VARCHAR2(50 char)   | Codeofaccounttype                                                                                    |    |
|     | ACCOUNT_TYPE_DESC              | VARCHAR2(100 char)  | Descriptionofaccounttype                                                                             |    |
|     | OFFICER_NBR                    | VARCHAR2(50 char)   | Bankofficernumber                                                                                    |    |
|     | OFFICER_NAME                   | VARCHAR2(100 char)  | bankofficername                                                                                      |    |
|     | CURRENT_BALANCE                | VARCHAR2(24 char)   |                                                                                                      |    |
|     | AVAILABLE_BALANCE              | VARCHAR2(24 char)   | AvailableBalance=CurrentBalance–(HoldAmount+FloatAmount)                                             |    |
|     | OPENING_DATE                   | VARCHAR2(8 char)    |                                                                                                      |    |
|     | CLOSED_DATE                    | VARCHAR2(8 char)    |                                                                                                      |    |
|     | ACCOUNT_STATUS                 | VARCHAR2(1 char)    | e.g., 0–Active, 1–Closed                                                                               |    |
|     | OVERDRAFT_LIMIT                | VARCHAR2(24 char)   |                                                                                                      |    |
|     | DATE_OF_LAST_ACTIVITY          | VARCHAR2(8 char)    | 最後帳務異動日                                                                                              |    |
|     | OPENING_METHOD_CODE            | VARCHAR2(50 char)   | 固定為_01_                                                                                              |    |
|     | OPENING_METHOD_DESC            | VARCHAR2(100 char)  | 目前無此資料                                                                                               |    |
|     | PRODUCT_CODE                   | VARCHAR2(50 char)   | 待確認對照表                                                                                               |    |
|     | PRODUCT_DESC                   | VARCHAR2(100 char)  | 待確認NO                                                                                                |    |
|     | ACCOUNT_PURPOSE_CODE           | VARCHAR2(50 char)   | 待確認10                                                                                                |    |
|     | ACCOUNT_PURPOSE_DESC           | VARCHAR2(100 char)  | 目前無此資料                                                                                               |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   | 待確認TMS                                                                                               |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TRANSFER_FLAG                  | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_W_EP016_01_AML_KYC_FULL

#### 反洗錢_信託客戶主檔CDD(每週_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_1             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_2             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_3             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_4             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | RISK_FACTOR_FLAG_6             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | ASSET_UNDER_MGNT               | NUMBER(24, 2)        |                                                                                                      |    |
|     | INSURANCE_PAYMENT              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CCD_AMOUNT_LEVEL               | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FAR_DISTANCE_FLAG              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | THIGH_RISK_BUSINESS_ENTITY     | VARCHAR2(50 char)   |                                                                                                      |    |
|     | FOREIGN_AFFAIR_FLAG            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CCD_CHANNEL                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | TRUST_PRODUCT                  | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PERSONAL_INS_FLAG              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | E_BANKING_PRODUCT              | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CROSS_BORDER_EPAY              | VARCHAR2(1 char)    |                                                                                                      |    |
|     | DERIVATIVE_PRODUCT             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | FOREIGN_EX_PRODUCT             | VARCHAR2(50 char)   |                                                                                                      |    |
|     | OBU_CDD_UNFINISHED             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | NO_PHYSICAL_BUS_LOC            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | OVERSEA_BUS_LOCATION           | VARCHAR2(50 char)   |                                                                                                      |    |
|     | MULTI_CCD_FLAG                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MULTI_SAFE_BOX_FLAG            | VARCHAR2(1 char)    |                                                                                                      |    |
|     | ACQUIRING_BUSINESS_FLAG        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MOBIL_CCD_INTPAY_FLAG          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | REFUSE_BNF_OWNER               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |    |

### VW_ODS_W_EP016_AML_CUST_TR_FULL

#### 反洗錢_信託客戶主檔(每週_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID                    | VARCHAR2(24 char)   | 統一編號                                                                                                 |    |
|     | CUSTOMER_TYPE                  | VARCHAR2(1 char)    | 統一編號                                                                                                 |    |
|     | CUSTOMER_ENG_NAME              | VARCHAR2(350 char)  | 個人/公司英文名稱                                                                                            |    |
|     | CORR_ADDRESS_LINE1             | VARCHAR2(200 char)  | 中英文地址                                                                                                |    |
|     | CORR_ADDRESS_LINE2             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_ADDRESS_LINE3             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_ADDRESS_LINE4             | VARCHAR2(200 char)  |                                                                                                      |    |
|     | CORR_COUNTRY                   | VARCHAR2(2 char)    | 寄送地址國別                                                                                               |    |
|     | NATIONALITY                    | VARCHAR2(2 char)    | 國別代碼                                                                                                 |    |
|     | BRANCH_NBR                     | VARCHAR2(100 char)  | 客戶歸屬分行                                                                                               |    |
|     | UNIQUE_ID_NAME                 | VARCHAR2(100 char)  |                                                                                                      |    |
|     | UNIQUE_ID_VALUE                | VARCHAR2(100 char)  | 統一編號/身分證號                                                                                            |    |
|     | IDENT_OTH                      | VARCHAR2(100 char)  |                                                                                                      |    |
|     | CIF_STATUS                     | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CUSTOMER_CHI_NAME              | VARCHAR2(350 char)  | (戶名)                                                                                                 |    |
|     | INDUSTRY_CODE                  | VARCHAR2(50 char)   | 行業別(主計處)                                                                                             |    |
|     | HOME_PHONE                     | VARCHAR2(14 char)   | 住家電話                                                                                                 |    |
|     | OFFICE_PHONE                   | VARCHAR2(14 char)   | 公司電話                                                                                                 |    |
|     | MOBILE_PHONE                   | VARCHAR2(14 char)   | 行動電話                                                                                                 |    |
|     | FAX                            | VARCHAR2(14 char)   | 傳真                                                                                                   |    |
|     | DATE_OF_BIRTH                  | DATE                | 出生日期                                                                                                 |    |
|     | INCORP_DATE                    | DATE                | 公司成立日期                                                                                               |    |
|     | OPENING_DATE                   | DATE                | 建檔日期                                                                                                 |    |
|     | CLOSED_DATE                    | DATE                | 關戶日期                                                                                                 |    |
|     | IS_EMPLOYEE_IND                | VARCHAR2(1 char)    | 是否為員工                                                                                                |    |
|     | IS_HIGH_RISK_IND               | VARCHAR2(1 char)    | 是否為高風險客戶                                                                                             |    |
|     | CUSTOMER_SEGMENT               | VARCHAR2(10 char)   |                                                                                                      |    |
|     | OCCUPATION_CODE                | VARCHAR2(15 char)   | 特殊職業註記                                                                                               |    |
|     | OWNERSHIP_CODE                 | VARCHAR2(50 char)   | 客戶型態                                                                                                 |    |
|     | RM_CODE                        | VARCHAR2(50 char)   | RM代碼                                                                                                 |    |
|     | PER_ADDRESS_LINE1              | VARCHAR2(200 char)  | 戶籍/公司登記地址                                                                                            |    |
|     | PER_ADDRESS_LINE2              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_ADDRESS_LINE3              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_ADDRESS_LINE4              | VARCHAR2(200 char)  |                                                                                                      |    |
|     | PER_COUNTRY                    | VARCHAR2(2 char)    |                                                                                                      |    |
|     | CORE_SYSTEM                    | VARCHAR2(50 char)   |                                                                                                      |    |
|     | PROCESSING_DATE                | DATE                | 資料日期                                                                                                 |    |
|     | RM_NAME                        | VARCHAR2(50 char)   | Relationship Manager Name                                                                            |    |
|     | ALIAS_NAME                     | VARCHAR2(350 char)  | Alias name of the customer                                                                           |    |
|     | PLACE_OF_BIRTH                 | VARCHAR2(2 char)    | Place of birth                                                                                       |    |
|     | IS_SEND_EMAIL_ACCOUNT          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_MULTI_ACC_WITH_DIFF_NAME    | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_COMPLEX_STRUCTURE           | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_LISTED_COM_DIRECTOR         | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MAIN_BUSINESS_ADDRESS          | VARCHAR2(200 char)  |                                                                                                      |    |
|     | MAIN_BUSINESS_COUNTRY          | VARCHAR2(2 char)    | 主要營業國家                                                                                               |    |
|     | CUST_PRODUCT_SERVICES          | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_METHOD_OF_OPENING         | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_ACCOUNT_PURPOSE           | VARCHAR2(50 char)   |                                                                                                      |    |
|     | SOURCE_OF_FUND                 | VARCHAR2(50 char)   |                                                                                                      |    |
|     | SOURCE_OF_WEALTH               | VARCHAR2(50 char)   |                                                                                                      |    |
|     | BUSINESS_OPERATION_STAT        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | FIRST_TRXN_AMT                 | NUMBER(24, 2)        |                                                                                                      |    |
|     | SERVING_ENTITY                 | VARCHAR2(350 char)  |                                                                                                      |    |
|     | JOB_TITLE                      | VARCHAR2(50 char)   |                                                                                                      |    |
|     | CUST_WITH_BEARER_SHARES        | VARCHAR2(1 char)    |                                                                                                      |    |
|     | UNCOOPERATIVE_FLAG             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | TRUSTEE_FLAG                   | VARCHAR2(1 char)    |                                                                                                      |    |
|     | SPEC_PRODUCT_RISK_CODE         | VARCHAR2(50 char)   |                                                                                                      |    |
|     | OBU_FLAG                       | VARCHAR2(1 char)    |                                                                                                      |    |
|     | OBU_TYPE                       | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CUSTOMER_SCALE                 | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CUSTOMER_LEVEL                 | VARCHAR2(15 char)   |                                                                                                      |    |
|     | ANNUAL_INCOME                  | VARCHAR2(15 char)   |                                                                                                      |    |
|     | EDUCATION                      | VARCHAR2(15 char)   |                                                                                                      |    |
|     | CORR_ADDR_CHANGE_FLAG          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | MAIL_REJECT_CODE               | VARCHAR2(15 char)   |                                                                                                      |    |
|     | SAR_EXCLUDE_FLAG               | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_PEP                         | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_FOREIGN_PEP                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_DOMESTIC_PEP                | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_FOREIGN_ORG_PEP             | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_EX_PEP                      | VARCHAR2(1 char)    |                                                                                                      |    |
|     | CUST_RP_IS_PEP                 | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_NN                          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_BLACKLIST                   | VARCHAR2(1 char)    |                                                                                                      |    |
|     | IS_HIGH_RISK_REMARK            | VARCHAR2(50 char)   |                                                                                                      |    |
|     | WARN_RESTRICT_ACCOUNT          | VARCHAR2(1 char)    |                                                                                                      |    |
|     | GENDER                         | VARCHAR2(1 char)    |                                                                                                      |    |
|     | NATIONALITY2                   | VARCHAR2(2 char)    |                                                                                                      |    |
|     | UNIQUE_ID_ISSUING_CTRY         | VARCHAR2(2 char)    |                                                                                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP           | 表格更新時間                                                                                               |
