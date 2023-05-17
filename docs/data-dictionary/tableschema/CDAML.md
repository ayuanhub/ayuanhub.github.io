---
sidebar_position: 3
title: 信用卡提供的 AML 資料(CDAML)
---

### VW_ODS_D_EP002_01_AML_CDRP
#### 反洗錢_信用卡附卡客戶主檔(每日_異動)
| Key | 欄位名稱                     | 欄位資料型態        | 欄位說明       | 備註 |
| --- | ---------------------------- | ------------------- | -------------- | ---- |
|     | CUSTOMER_ID_NUMBER           | VARCHAR2(24 char)   | 正卡人 ID      |      |
|     | RELATED_PARTIES_TYPE         | VARCHAR2(5 char)    |                |      |
|     | RELATED_PARTIES_ID           | VARCHAR2(50 char)   | 附卡人 ID      |      |
|     | OTHER_RELATED_PARTY_TYPE     | VARCHAR2(5 char)    |                |      |
|     | OTHER_RELATED_PARTY_DESC     | VARCHAR2(50 char)   |                |      |
|     | NAME                         | VARCHAR2(350 char)  | 附卡人姓名     |      |
|     | ALIASES                      | VARCHAR2(350 char)  |                |      |
|     | TYPE                         | VARCHAR2(1 char)    |                |      |
|     | DATE_OF_BIRTH                | VARCHAR2(8 char)    | 附卡人出生日期 |      |
|     | NATIONALITY                  | VARCHAR2(4 char)    | 附卡人國籍     |      |
|     | PERMANENT_ADDRESS_LINE_1     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_2     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_3     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_COUNTRY            | VARCHAR2(4 char)    |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_1 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_2 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_3 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_COUNTRY        | VARCHAR2(4 char)    |                |      |
|     | CONTACT_PHONE_NUMBER         | VARCHAR2(14 char)   |                |      |
|     | EMAIL_ADDRESS                | VARCHAR2(100 char)  |                |      |
|     | ID_TYPE                      | VARCHAR2(50 char)   |                |      |
|     | ID_NUMBER                    | VARCHAR2(30 char)   | 附卡人 ID      |      |
|     | ID_ISSUE_DATE                | VARCHAR2(8 char)    |                |      |
|     | ID_EXPIRY_DATE               | VARCHAR2(8 char)    |                |      |
|     | ID_ISSUING_COUNTRY           | VARCHAR2(4 char)    |                |      |
|     | REMARK                       | VARCHAR2(1000 char) |                |      |
|     | STATUS                       | VARCHAR2(2 char)    |                |      |
|     | OPENING_DATE                 | VARCHAR2(8 char)    |                |      |
|     | CLOSED_DATE                  | VARCHAR2(8 char)    | 最後剪卡日     |      |
|     | CORESYSTEM                   | VARCHAR2(50 char)   |                |      |
|     | PROCESSING_DATE              | DATE                | 資料日期       |      |
|     | NATIVE_NAME                  | VARCHAR2(350 char)  | 附卡人姓名     |      |
|     | TBL_UPD_TIM                  | TIMESTAMP           | 表格更新時間   |      |
### VW_ODS_D_EP013_AML_CCD
#### 反洗錢_信用卡帳號檔(每日_異動)
| Key | 欄位名稱               | 欄位資料型態       | 欄位說明       | 備註 |
| --- | ---------------------- | ------------------ | -------------- | ---- |
|     | ACCOUNT_NBR            | VARCHAR2(50 char)  | 帳戶號碼       |      |
|     | APPLICATION_CODE       | VARCHAR2(5 char)   | CCD            |      |
|     | CUSTOMER_ID            | VARCHAR2(24 char)  | 統一編號       |      |
|     | BRANCH_NBR             | VARCHAR2(50 char)  | 分行別         |      |
|     | BRANCH_NAME            | VARCHAR2(100 char) | 分行別名稱     |      |
|     | ACCOUNT_TYPE_CODE      | VARCHAR2(50 char)  | 內部帳戶類別   |      |
|     | ACCOUNT_TYPE_DESC      | VARCHAR2(100 char) | 內部帳戶名稱   |      |
|     | OFFICER_NBR            | VARCHAR2(50 char)  | 行員編號       |      |
|     | OFFICER_NAME           | VARCHAR2(100 char) | 行員名稱       |      |
|     | CURRENT_BALANCE        | VARCHAR2(24 char)  |                |      |
|     | AVAILABLE_BALANCE      | VARCHAR2(24 char)  |                |      |
|     | OPENING_DATE           | VARCHAR2(8 char)   | 最早核卡日     |      |
|     | CLOSED_DATE            | VARCHAR2(8 char)   |                |      |
|     | ACCOUNT_STATUS         | VARCHAR2(1 char)   | 記錄狀態       |      |
|     | DATE_OF_LAST_ACTIVITY  | VARCHAR2(8 char)   | 最近交易日期   |      |
|     | OVERPAYMENT_AMT        | VARCHAR2(24 char)  | 溢付款         |      |
|     | CURRENT_CYCLE_DUE_AMT  | VARCHAR2(24 char)  | 本期應繳款     |      |
|     | PREVIOUS_CYCLE_DUE_AMT | VARCHAR2(24 char)  | 上期應繳款     |      |
|     | OPENING_METHOD_CODE    | VARCHAR2(50 char)  | 帳戶方式       |      |
|     | OPENING_METHOD_DESC    | VARCHAR2(100 char) | 開戶方式說明   |      |
|     | PRODUCT_CODE           | VARCHAR2(50 char)  | 產品與服務代碼 |      |
|     | PRODUCT_DESC           | VARCHAR2(100 char) | 產品與服務說明 |      |
|     | ACCOUNT_PURPOSE_CODE   | VARCHAR2(50 char)  | 開戶目的代碼   |      |
|     | ACCOUNT_PURPOSE_DESC   | VARCHAR2(100 char) |                |      |
|     | DELINQUENT_ACC_FLAG    | VARCHAR2(1 char)   | 催收放 Y       |      |
|     | CORE_SYSTEM            | VARCHAR2(50 char)  | 資料系統來源   |      |
|     | PROCESSING_DATE        | DATE               | 資料產生日期   |      |
|     | SAR_EXCLUDE_FLAG       | VARCHAR2(1 char)   |                |      |
|     | TRANSFER_FLAG          | VARCHAR2(1 char)   |                |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間   |      |

### VW_ODS_D_EP023_01_AML_KYC
#### 反洗錢_信用卡客戶主檔_KYC資訊(每日_異動)
| Key | 欄位名稱               | 欄位資料型態 | 欄位說明 | 備註 |
| --- | -------------------------- | ----------------- | ------------ | ---- |
|     | CUSTOMER_ID                | VARCHAR2(24 char) |              |      |
|     | RISK_FACTOR_FLAG_1         | VARCHAR2(1 char)  |              |      |
|     | RISK_FACTOR_FLAG_2         | VARCHAR2(1 char)  |              |      |
|     | RISK_FACTOR_FLAG_3         | VARCHAR2(1 char)  |              |      |
|     | RISK_FACTOR_FLAG_4         | VARCHAR2(1 char)  |              |      |
|     | RISK_FACTOR_FLAG_6         | VARCHAR2(1 char)  |              |      |
|     | ASSET_UNDER_MGNT           | VARCHAR2(24 char) |              |      |
|     | INSURANCE_PAYMENT          | VARCHAR2(1 char)  |              |      |
|     | CCD_AMOUNT_LEVEL           | VARCHAR2(50 char) |              |      |
|     | FAR_DISTANCE_FLAG          | VARCHAR2(1 char)  |              |      |
|     | THIGH_RISK_BUSINESS_ENTITY | VARCHAR2(50 char) |              |      |
|     | FOREIGN_AFFAIR_FLAG        | VARCHAR2(1 char)  |              |      |
|     | CCD_CHANNEL                | VARCHAR2(50 char) |              |      |
|     | TRUST_PRODUCT              | VARCHAR2(50 char) |              |      |
|     | PERSONAL_INS_FLAG          | VARCHAR2(1 char)  |              |      |
|     | E_BANKING_PRODUCT          | VARCHAR2(50 char) |              |      |
|     | CROSS_BORDER_EPAY          | VARCHAR2(1 char)  |              |      |
|     | DERIVATIVE_PRODUCT         | VARCHAR2(1 char)  |              |      |
|     | FOREIGN_EX_PRODUCT         | VARCHAR2(50 char) |              |      |
|     | OBU_CDD_UNFINISHED         | VARCHAR2(1 char)  |              |      |
|     | NO_PHYSICAL_BUS_LOC        | VARCHAR2(1 char)  |              |      |
|     | OVERSEA_BUS_LOCATION       | VARCHAR2(50 char) |              |      |
|     | MULTI_CCD_FLAG             | VARCHAR2(1 char)  |              |      |
|     | MULTI_SAFE_BOX_FLAG        | VARCHAR2(1 char)  |              |      |
|     | ACQUIRING_BUSINESS_FLAG    | VARCHAR2(1 char)  |              |      |
|     | MOBIL_CCD_INTPAY_FLAG      | VARCHAR2(1 char)  |              |      |
|     | REFUSE_BNF_OWNER           | VARCHAR2(1 char)  |              |      |
|     | PROCESSING_DATE            | DATE              | 資料產生日期 |      |
|     | TBL_UPD_TIM                | TIMESTAMP         | 表格更新時間 |      |
|     | TBL_UPD_TIM                | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_D_EP023_AML_CUST_CD
#### 反洗錢_信用卡客戶主檔(每日_新增)
| Key | 欄位名稱                | 欄位資料型態 | 欄位說明      | 備註 |
| --- | --------------------------- | ------------------ | ----------------- | ---- |
|     | CUSTOMER_ID                 | VARCHAR2(24 char)  | 統一編號      |      |
|     | CUSTOMER_TYPE               | VARCHAR2(4 char)   | 統一編號      |      |
|     | CUSTOMER_ENG_NAME           | VARCHAR2(350 char) | 個人/公司英文名稱 |      |
|     | CORR_ADDRESS_LINE1          | VARCHAR2(200 char) | 中英文地址   |      |
|     | CORR_ADDRESS_LINE2          | VARCHAR2(200 char) |                   |      |
|     | CORR_ADDRESS_LINE3          | VARCHAR2(200 char) |                   |      |
|     | CORR_ADDRESS_LINE4          | VARCHAR2(200 char) |                   |      |
|     | CORR_COUNTRY                | VARCHAR2(4 char)   | 寄送地址國別 |      |
|     | NATIONALITY                 | VARCHAR2(4 char)   | 國別代碼      |      |
|     | BRANCH_NBR                  | VARCHAR2(100 char) | 客戶歸屬分行 |      |
|     | UNIQUE_ID_NAME              | VARCHAR2(100 char) |                   |      |
|     | UNIQUE_ID_VALUE             | VARCHAR2(100 char) | 統一編號/身分證號 |      |
|     | IDENT_OTH                   | VARCHAR2(100 char) |                   |      |
|     | CIF_STATUS                  | VARCHAR2(4 char)   |                   |      |
|     | CUSTOMER_CHI_NAME           | VARCHAR2(350 char) | (戶名)          |      |
|     | INDUSTRY_CODE               | VARCHAR2(50 char)  | 行業別(主計處) |      |
|     | HOME_PHONE                  | VARCHAR2(14 char)  | 住家電話      |      |
|     | OFFICE_PHONE                | VARCHAR2(14 char)  | 公司電話      |      |
|     | MOBILE_PHONE                | VARCHAR2(14 char)  | 行動電話      |      |
|     | FAX                         | VARCHAR2(14 char)  | 傳真            |      |
|     | DATE_OF_BIRTH               | DATE               | 出生日期      |      |
|     | INCORP_DATE                 | DATE               | 公司成立日期 |      |
|     | OPENING_DATE                | DATE               | 建檔日期      |      |
|     | CLOSED_DATE                 | DATE               | 關戶日期      |      |
|     | IS_EMPLOYEE_IND             | VARCHAR2(4 char)   | 是否為員工   |      |
|     | IS_HIGH_RISK_IND            | VARCHAR2(4 char)   | 是否為高風險客戶 |      |
|     | CUSTOMER_SEGMENT            | VARCHAR2(10 char)  |                   |      |
|     | OCCUPATION_CODE             | VARCHAR2(15 char)  | 特殊職業註記 |      |
|     | OWNERSHIP_CODE              | VARCHAR2(50 char)  | 客戶型態      |      |
|     | RM_CODE                     | VARCHAR2(50 char)  | RM代碼          |      |
|     | PER_ADDRESS_LINE1           | VARCHAR2(200 char) | 戶籍/公司登記地址 |      |
|     | PER_ADDRESS_LINE2           | VARCHAR2(200 char) |                   |      |
|     | PER_ADDRESS_LINE3           | VARCHAR2(200 char) |                   |      |
|     | PER_ADDRESS_LINE4           | VARCHAR2(200 char) |                   |      |
|     | PER_COUNTRY                 | VARCHAR2(4 char)   |                   |      |
|     | CORE_SYSTEM                 | VARCHAR2(50 char)  |                   |      |
|     | PROCESSING_DATE             | DATE               | 資料日期      |      |
|     | RM_NAME                     | VARCHAR2(50 char)  |                   |      |
|     | ALIAS_NAME                  | VARCHAR2(350 char) |                   |      |
|     | PLACE_OF_BIRTH              | VARCHAR2(4 char)   |                   |      |
|     | IS_SEND_EMAIL_ACCOUNT       | VARCHAR2(4 char)   |                   |      |
|     | IS_MULTI_ACC_WITH_DIFF_NAME | VARCHAR2(4 char)   |                   |      |
|     | IS_COMPLEX_STRUCTURE        | VARCHAR2(4 char)   |                   |      |
|     | IS_LISTED_COM_DIRECTOR      | VARCHAR2(4 char)   |                   |      |
|     | MAIN_BUSINESS_ADDRESS       | VARCHAR2(200 char) |                   |      |
|     | MAIN_BUSINESS_COUNTRY       | VARCHAR2(4 char)   | 主要營業國家 |      |
|     | CUST_PRODUCT_SERVICES       | VARCHAR2(50 char)  |                   |      |
|     | CUST_METHOD_OF_OPENING      | VARCHAR2(50 char)  |                   |      |
|     | CUST_ACCOUNT_PURPOSE        | VARCHAR2(50 char)  |                   |      |
|     | SOURCE_OF_FUND              | VARCHAR2(50 char)  |                   |      |
|     | SOURCE_OF_WEALTH            | VARCHAR2(50 char)  |                   |      |
|     | BUSINESS_OPERATION_STAT     | VARCHAR2(4 char)   |                   |      |
|     | FIRST_TRXN_AMT              | NUMBER(24,0)       |                   |      |
|     | SERVING_ENTITY              | VARCHAR2(350 char) |                   |      |
|     | JOB_TITLE                   | VARCHAR2(50 char)  |                   |      |
|     | CUST_WITH_BEARER_SHARES     | VARCHAR2(4 char)   |                   |      |
|     | UNCOOPERATIVE_FLAG          | VARCHAR2(4 char)   |                   |      |
|     | TRUSTEE_FLAG                | VARCHAR2(4 char)   |                   |      |
|     | SPEC_PRODUCT_RISK_CODE      | VARCHAR2(50 char)  |                   |      |
|     | OBU_FLAG                    | VARCHAR2(4 char)   |                   |      |
|     | OBU_TYPE                    | VARCHAR2(15 char)  |                   |      |
|     | CUSTOMER_SCALE              | VARCHAR2(15 char)  |                   |      |
|     | CUSTOMER_LEVEL              | VARCHAR2(15 char)  |                   |      |
|     | ANNUAL_INCOME               | VARCHAR2(15 char)  |                   |      |
|     | EDUCATION                   | VARCHAR2(15 char)  |                   |      |
|     | CORR_ADDR_CHANGE_FLAG       | VARCHAR2(4 char)   |                   |      |
|     | MAIL_REJECT_CODE            | VARCHAR2(15 char)  |                   |      |
|     | SAR_EXCLUDE_FLAG            | VARCHAR2(4 char)   |                   |      |
|     | IS_PEP                      | VARCHAR2(4 char)   |                   |      |
|     | IS_FOREIGN_PEP              | VARCHAR2(4 char)   |                   |      |
|     | IS_DOMESTIC_PEP             | VARCHAR2(4 char)   |                   |      |
|     | IS_FOREIGN_ORG_PEP          | VARCHAR2(4 char)   |                   |      |
|     | IS_EX_PEP                   | VARCHAR2(4 char)   |                   |      |
|     | CUST_RP_IS_PEP              | VARCHAR2(4 char)   |                   |      |
|     | IS_NN                       | VARCHAR2(4 char)   |                   |      |
|     | IS_BLACKLIST                | VARCHAR2(4 char)   |                   |      |
|     | IS_HIGH_RISK_REMARK         | VARCHAR2(50 char)  |                   |      |
|     | WARN_RESTRICT_ACCOUNT       | VARCHAR2(4 char)   |                   |      |
|     | GENDER                      | VARCHAR2(4 char)   |                   |      |
|     | NATIONALITY2                | VARCHAR2(4 char)   |                   |      |
|     | UNIQUE_ID_ISSUING_CTRY      | VARCHAR2(4 char)   |                   |      |
|     | TBL_UPD_TIM                 | TIMESTAMP          | 表格更新時間 |      |
### VW_ODS_W_EP002_01_AML_CDRP_FULL
#### 反洗錢_信用卡附卡客戶主檔(每週_全檔)
| Key | 欄位名稱                 | 欄位資料型態  | 欄位說明   | 備註 |
| --- | ---------------------------- | ------------------- | -------------- | ---- |
|     | CUSTOMER_ID_NUMBER           | VARCHAR2(24 char)   | 正卡人ID    |      |
|     | RELATED_PARTIES_TYPE         | VARCHAR2(5 char)    |                |      |
|     | RELATED_PARTIES_ID           | VARCHAR2(50 char)   | 附卡人ID    |      |
|     | OTHER_RELATED_PARTY_TYPE     | VARCHAR2(5 char)    |                |      |
|     | OTHER_RELATED_PARTY_DESC     | VARCHAR2(50 char)   |                |      |
|     | NAME                         | VARCHAR2(350 char)  | 附卡人姓名 |      |
|     | ALIASES                      | VARCHAR2(350 char)  |                |      |
|     | TYPE                         | VARCHAR2(1 char)    |                |      |
|     | DATE_OF_BIRTH                | VARCHAR2(8 char)    | 附卡人出生日期 |      |
|     | NATIONALITY                  | VARCHAR2(4 char)    | 附卡人國籍 |      |
|     | PERMANENT_ADDRESS_LINE_1     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_2     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_3     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_COUNTRY            | VARCHAR2(4 char)    |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_1 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_2 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_3 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_COUNTRY        | VARCHAR2(4 char)    |                |      |
|     | CONTACT_PHONE_NUMBER         | VARCHAR2(14 char)   |                |      |
|     | EMAIL_ADDRESS                | VARCHAR2(100 char)  |                |      |
|     | ID_TYPE                      | VARCHAR2(50 char)   |                |      |
|     | ID_NUMBER                    | VARCHAR2(30 char)   | 附卡人ID    |      |
|     | ID_ISSUE_DATE                | VARCHAR2(8 char)    |                |      |
|     | ID_EXPIRY_DATE               | VARCHAR2(8 char)    |                |      |
|     | ID_ISSUING_COUNTRY           | VARCHAR2(4 char)    |                |      |
|     | REMARK                       | VARCHAR2(1000 char) |                |      |
|     | STATUS                       | VARCHAR2(2 char)    |                |      |
|     | OPENING_DATE                 | VARCHAR2(8 char)    |                |      |
|     | CLOSED_DATE                  | VARCHAR2(8 char)    | 最後剪卡日 |      |
|     | CORESYSTEM                   | VARCHAR2(50 char)   |                |      |
|     | PROCESSING_DATE              | DATE                | 資料日期   |      |
|     | NATIVE_NAME                  | VARCHAR2(350 char)  | 附卡人姓名 |      |
|     | TBL_UPD_TIM                  | TIMESTAMP           | 表格更新時間 |      |
|     | PER_ADDRESS_LINE4            | VARCHAR2(200 char)  |                |      |
|     | PER_COUNTRY                  | VARCHAR2(4 char)    |                |      |
|     | CORE_SYSTEM                  | VARCHAR2(50 char)   |                |      |
|     | PROCESSING_DATE              | DATE                | 資料日期   |      |
|     | RM_NAME                      | VARCHAR2(50 char)   |                |      |
|     | ALIAS_NAME                   | VARCHAR2(350 char)  |                |      |
|     | PLACE_OF_BIRTH               | VARCHAR2(4 char)    |                |      |
|     | IS_SEND_EMAIL_ACCOUNT        | VARCHAR2(4 char)    |                |      |
|     | IS_MULTI_ACC_WITH_DIFF_NAME  | VARCHAR2(4 char)    |                |      |
|     | IS_COMPLEX_STRUCTURE         | VARCHAR2(4 char)    |                |      |
|     | IS_LISTED_COM_DIRECTOR       | VARCHAR2(4 char)    |                |      |
|     | MAIN_BUSINESS_ADDRESS        | VARCHAR2(200 char)  |                |      |
|     | MAIN_BUSINESS_COUNTRY        | VARCHAR2(4 char)    | 主要營業國家 |      |
|     | CUST_PRODUCT_SERVICES        | VARCHAR2(50 char)   |                |      |
|     | CUST_METHOD_OF_OPENING       | VARCHAR2(50 char)   |                |      |
|     | CUST_ACCOUNT_PURPOSE         | VARCHAR2(50 char)   |                |      |
|     | SOURCE_OF_FUND               | VARCHAR2(50 char)   |                |      |
|     | SOURCE_OF_WEALTH             | VARCHAR2(50 char)   |                |      |
|     | BUSINESS_OPERATION_STAT      | VARCHAR2(4 char)    |                |      |
|     | FIRST_TRXN_AMT               | NUMBER(24,0)        |                |      |
|     | SERVING_ENTITY               | VARCHAR2(350 char)  |                |      |
|     | JOB_TITLE                    | VARCHAR2(50 char)   |                |      |
|     | CUST_WITH_BEARER_SHARES      | VARCHAR2(4 char)    |                |      |
|     | UNCOOPERATIVE_FLAG           | VARCHAR2(4 char)    |                |      |
|     | TRUSTEE_FLAG                 | VARCHAR2(4 char)    |                |      |
|     | SPEC_PRODUCT_RISK_CODE       | VARCHAR2(50 char)   |                |      |
|     | OBU_FLAG                     | VARCHAR2(4 char)    |                |      |
|     | OBU_TYPE                     | VARCHAR2(15 char)   |                |      |
|     | CUSTOMER_SCALE               | VARCHAR2(15 char)   |                |      |
|     | CUSTOMER_LEVEL               | VARCHAR2(15 char)   |                |      |
|     | ANNUAL_INCOME                | VARCHAR2(15 char)   |                |      |
|     | EDUCATION                    | VARCHAR2(15 char)   |                |      |
|     | CORR_ADDR_CHANGE_FLAG        | VARCHAR2(4 char)    |                |      |
|     | MAIL_REJECT_CODE             | VARCHAR2(15 char)   |                |      |
|     | SAR_EXCLUDE_FLAG             | VARCHAR2(4 char)    |                |      |
|     | IS_PEP                       | VARCHAR2(4 char)    |                |      |
|     | IS_FOREIGN_PEP               | VARCHAR2(4 char)    |                |      |
|     | IS_DOMESTIC_PEP              | VARCHAR2(4 char)    |                |      |
|     | IS_FOREIGN_ORG_PEP           | VARCHAR2(4 char)    |                |      |
|     | IS_EX_PEP                    | VARCHAR2(4 char)    |                |      |
|     | CUST_RP_IS_PEP               | VARCHAR2(4 char)    |                |      |
|     | IS_NN                        | VARCHAR2(4 char)    |                |      |
|     | IS_BLACKLIST                 | VARCHAR2(4 char)    |                |      |
|     | IS_HIGH_RISK_REMARK          | VARCHAR2(50 char)   |                |      |
|     | WARN_RESTRICT_ACCOUNT        | VARCHAR2(4 char)    |                |      |
|     | GENDER                       | VARCHAR2(4 char)    |                |      |
|     | NATIONALITY2                 | VARCHAR2(4 char)    |                |      |
|     | UNIQUE_ID_ISSUING_CTRY       | VARCHAR2(4 char)    |                |      |
|     | TBL_UPD_TIM                  | TIMESTAMP           | 表格更新時間 |      |
### VW_ODS_W_EP023_01_AML_KYC_FULL
#### 反洗錢_信用卡客戶主檔_KYC資訊(每週_全檔)
| Key | 欄位名稱                | 欄位資料型態 | 欄位說明 | 備註 |
| --- | --------------------------- | ------------------ | ------------ | ---- |
|     | CUSTOMER_ID                 | VARCHAR2(24 char)  |              |      |
|     | RISK_FACTOR_FLAG_1          | VARCHAR2(1 char)   |              |      |
|     | RISK_FACTOR_FLAG_2          | VARCHAR2(1 char)   |              |      |
|     | RISK_FACTOR_FLAG_3          | VARCHAR2(1 char)   |              |      |
|     | RISK_FACTOR_FLAG_4          | VARCHAR2(1 char)   |              |      |
|     | RISK_FACTOR_FLAG_6          | VARCHAR2(1 char)   |              |      |
|     | ASSET_UNDER_MGNT            | VARCHAR2(24 char)  |              |      |
|     | INSURANCE_PAYMENT           | VARCHAR2(1 char)   |              |      |
|     | CCD_AMOUNT_LEVEL            | VARCHAR2(50 char)  |              |      |
|     | FAR_DISTANCE_FLAG           | VARCHAR2(1 char)   |              |      |
|     | THIGH_RISK_BUSINESS_ENTITY  | VARCHAR2(50 char)  |              |      |
|     | FOREIGN_AFFAIR_FLAG         | VARCHAR2(1 char)   |              |      |
|     | CCD_CHANNEL                 | VARCHAR2(50 char)  |              |      |
|     | TRUST_PRODUCT               | VARCHAR2(50 char)  |              |      |
|     | PERSONAL_INS_FLAG           | VARCHAR2(1 char)   |              |      |
|     | E_BANKING_PRODUCT           | VARCHAR2(50 char)  |              |      |
|     | CROSS_BORDER_EPAY           | VARCHAR2(1 char)   |              |      |
|     | DERIVATIVE_PRODUCT          | VARCHAR2(1 char)   |              |      |
|     | FOREIGN_EX_PRODUCT          | VARCHAR2(50 char)  |              |      |
|     | OBU_CDD_UNFINISHED          | VARCHAR2(1 char)   |              |      |
|     | NO_PHYSICAL_BUS_LOC         | VARCHAR2(1 char)   |              |      |
|     | OVERSEA_BUS_LOCATION        | VARCHAR2(50 char)  |              |      |
|     | MULTI_CCD_FLAG              | VARCHAR2(1 char)   |              |      |
|     | MULTI_SAFE_BOX_FLAG         | VARCHAR2(1 char)   |              |      |
|     | ACQUIRING_BUSINESS_FLAG     | VARCHAR2(1 char)   |              |      |
|     | MOBIL_CCD_INTPAY_FLAG       | VARCHAR2(1 char)   |              |      |
|     | REFUSE_BNF_OWNER            | VARCHAR2(1 char)   |              |      |
|     | PROCESSING_DATE             | DATE               | 資料產生日期 |      |
|     | TBL_UPD_TIM                 | TIMESTAMP          | 表格更新時間 |      |
|     | CORESYSTEM                  | VARCHAR2(50 char)  |              |      |
|     | PROCESSING_DATE             | DATE               | 資料日期 |      |
|     | NATIVE_NAME                 | VARCHAR2(350 char) | 附卡人姓名 |      |
|     | TBL_UPD_TIM                 | TIMESTAMP          | 表格更新時間 |      |
|     | PER_ADDRESS_LINE4           | VARCHAR2(200 char) |              |      |
|     | PER_COUNTRY                 | VARCHAR2(4 char)   |              |      |
|     | CORE_SYSTEM                 | VARCHAR2(50 char)  |              |      |
|     | PROCESSING_DATE             | DATE               | 資料日期 |      |
|     | RM_NAME                     | VARCHAR2(50 char)  |              |      |
|     | ALIAS_NAME                  | VARCHAR2(350 char) |              |      |
|     | PLACE_OF_BIRTH              | VARCHAR2(4 char)   |              |      |
|     | IS_SEND_EMAIL_ACCOUNT       | VARCHAR2(4 char)   |              |      |
|     | IS_MULTI_ACC_WITH_DIFF_NAME | VARCHAR2(4 char)   |              |      |
|     | IS_COMPLEX_STRUCTURE        | VARCHAR2(4 char)   |              |      |
|     | IS_LISTED_COM_DIRECTOR      | VARCHAR2(4 char)   |              |      |
|     | MAIN_BUSINESS_ADDRESS       | VARCHAR2(200 char) |              |      |
|     | MAIN_BUSINESS_COUNTRY       | VARCHAR2(4 char)   | 主要營業國家 |      |
|     | CUST_PRODUCT_SERVICES       | VARCHAR2(50 char)  |              |      |
|     | CUST_METHOD_OF_OPENING      | VARCHAR2(50 char)  |              |      |
|     | CUST_ACCOUNT_PURPOSE        | VARCHAR2(50 char)  |              |      |
|     | SOURCE_OF_FUND              | VARCHAR2(50 char)  |              |      |
|     | SOURCE_OF_WEALTH            | VARCHAR2(50 char)  |              |      |
|     | BUSINESS_OPERATION_STAT     | VARCHAR2(4 char)   |              |      |
|     | FIRST_TRXN_AMT              | NUMBER(24,0)       |              |      |
|     | SERVING_ENTITY              | VARCHAR2(350 char) |              |      |
|     | JOB_TITLE                   | VARCHAR2(50 char)  |              |      |
|     | CUST_WITH_BEARER_SHARES     | VARCHAR2(4 char)   |              |      |
|     | UNCOOPERATIVE_FLAG          | VARCHAR2(4 char)   |              |      |
|     | TRUSTEE_FLAG                | VARCHAR2(4 char)   |              |      |
|     | SPEC_PRODUCT_RISK_CODE      | VARCHAR2(50 char)  |              |      |
|     | OBU_FLAG                    | VARCHAR2(4 char)   |              |      |
|     | OBU_TYPE                    | VARCHAR2(15 char)  |              |      |
|     | CUSTOMER_SCALE              | VARCHAR2(15 char)  |              |      |
|     | CUSTOMER_LEVEL              | VARCHAR2(15 char)  |              |      |
|     | ANNUAL_INCOME               | VARCHAR2(15 char)  |              |      |
|     | EDUCATION                   | VARCHAR2(15 char)  |              |      |
|     | CORR_ADDR_CHANGE_FLAG       | VARCHAR2(4 char)   |              |      |
|     | MAIL_REJECT_CODE            | VARCHAR2(15 char)  |              |      |
|     | SAR_EXCLUDE_FLAG            | VARCHAR2(4 char)   |              |      |
|     | IS_PEP                      | VARCHAR2(4 char)   |              |      |
|     | IS_FOREIGN_PEP              | VARCHAR2(4 char)   |              |      |
|     | IS_DOMESTIC_PEP             | VARCHAR2(4 char)   |              |      |
|     | IS_FOREIGN_ORG_PEP          | VARCHAR2(4 char)   |              |      |
|     | IS_EX_PEP                   | VARCHAR2(4 char)   |              |      |
|     | CUST_RP_IS_PEP              | VARCHAR2(4 char)   |              |      |
|     | IS_NN                       | VARCHAR2(4 char)   |              |      |
|     | IS_BLACKLIST                | VARCHAR2(4 char)   |              |      |
|     | IS_HIGH_RISK_REMARK         | VARCHAR2(50 char)  |              |      |
|     | WARN_RESTRICT_ACCOUNT       | VARCHAR2(4 char)   |              |      |
|     | GENDER                      | VARCHAR2(4 char)   |              |      |
|     | NATIONALITY2                | VARCHAR2(4 char)   |              |      |
|     | UNIQUE_ID_ISSUING_CTRY      | VARCHAR2(4 char)   |              |      |
|     | TBL_UPD_TIM                 | TIMESTAMP          | 表格更新時間 |      |