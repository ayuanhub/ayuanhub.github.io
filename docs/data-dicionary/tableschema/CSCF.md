---
sidebar_position: 10
title: 台幣核心系統-客戶管理(CSCF)
---

### VW_ODS_D_CFACCONT
#### 客戶帳戶資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFACC_ACC_ID_NO           | VARCHAR2(14 char)  | 優惠類別                          |    |
|     | CFACC_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFACC_BR_CODE             | VARCHAR2(4 char)   | 所屬單位                          |    |
|     | CFACC_BUSI_CODE           | VARCHAR2(2 char)   | 優惠類別                          |    |
|     | CFACC_PROD_ID             | VARCHAR2(7 char)   | 產品代號                          |    |
|     | CFACC_CURR_CODE           | VARCHAR2(3 char)   | 幣別                            |    |
|     | CFACC_OPEN_DATE           | DATE               | 開戶日期                          |    |
|     | CFACC_CLS_DATE            | DATE               | 優惠類別                          |    |
|     | CFACC_CUST_STAT           | VARCHAR2(2 char)   | 優惠類別                          |    |
|     | CFACC_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFACC_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFACC_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFACC_JOIN_FLAG           | VARCHAR2(1 char)   | 優惠類別                          |    |
|     | CFACC_ALIAS_FLAG          | VARCHAR2(1 char)   | 優惠類別                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFAGENT
#### 交易代理人資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFAGT_TXN_DATE            | DATE               | 交易日期                          |    |
| PK  | CFAGT_TLR_CODE            | VARCHAR2(6 char)   | 交易櫃員                          |    |
| PK  | CFAGT_TXN_SEQ             | NUMBER(6,0)        | 交易序號                          |    |
|     | CFAGT_TXN_BR              | NUMBER(4,0)        | 記錄狀態                          |    |
|     | CFAGT_TXN_ID              | VARCHAR2(5 char)   | 交易代號                          |    |
| PK  | CFAGT_ACC_ID_NO           | NUMBER(13,0)       | 交易帳號                          |    |
|     | CFAGT_ID_CODE             | VARCHAR2(11 char)  | 交易統編                          |    |
|     | CFAGT_AG_ID               | VARCHAR2(11 char)  | 代理人統一編號                       |    |
|     | CFAGT_AG_NAME             | VARCHAR2(40 char)  | 代理人姓名                         |    |
|     | CFAGT_AG_BD               | DATE               | 代理人出生日期                       |    |
|     | CFAGT_AG_COUNTRY          | VARCHAR2(2 char)   | 代理人國別代碼                       |    |
|     | CFAGT_AG_PRO              | VARCHAR2(1 char)   | 代理人為專業中間人(N:否Y:是)             |    |
|     | CFAGT_AML_LIST            | VARCHAR2(1 char)   | 是否與名單相似                       |    |
|     | CFAGT_STAT                | NUMBER(1,0)        | 資料狀態                          |    |
|     | CFAGT_TXN_TYPE            | NUMBER(1,0)        | 交易型態(0:開戶1:帳務)                |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFAMLHLM
#### 客戶高階管理人員檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFHLM_ID_CODE             | VARCHAR2(18 char)  | 統一編號                          |    |
| PK  | CFHLM_SEQ_NO              | VARCHAR2(3 char)   | 序號                            |    |
|     | CFHLM_TITLE               | VARCHAR2(50 char)  | 職稱                            |    |
|     | CFHLM_ID_TYPE             | VARCHAR2(2 char)   | 身分證件類型                        |    |
|     | CFHLM_ID                  | VARCHAR2(20 char)  | 身分證件號碼                        |    |
|     | CFHLM_ID_NAME             | VARCHAR2(50 char)  | 姓名                            |    |
|     | CFHLM_BIRTHDAY            | DATE               | 出生日期                          |    |
|     | CFHLM_COUNTRY_CODE        | VARCHAR2(4 char)   | 國籍                            |    |
|     | CFHLM_LIST_CHK            | VARCHAR2(2 char)   | 是否與名單相似                       |    |
|     | CFHLM_SCORE               | NUMBER(3,0)        | 分數                            |    |
|     | CFHLM_CRT_BR              | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFHLM_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFHLM_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFHLM_CHG_BR              | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFHLM_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFHLM_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFHLM_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFAMLMS
#### 客戶實質受益人檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFAMS_ID_CODE             | VARCHAR2(18 char)  | 統一編號                          |    |
| PK  | CFAMS_SEQ_NO              | VARCHAR2(3 char)   | 序號                            |    |
|     | CFAMS_ID_TYPE             | VARCHAR2(1 char)   | 身分證件類型                        |    |
|     | CFAMS_ID                  | VARCHAR2(20 char)  | 身分證件號碼                        |    |
|     | CFAMS_ID_NAME             | VARCHAR2(70 char)  | 姓名                            |    |
|     | CFAMS_BIRTHDAY            | DATE               | 出生日期                          |    |
|     | CFAMS_CY_CODE             | VARCHAR2(2 char)   | 國籍                            |    |
|     | CFAMS_LIST_CHK            | VARCHAR2(1 char)   | 是否與名單相似                       |    |
|     | CFAMS_SCORE               | NUMBER(3,0)        | 分數                            |    |
|     | CFAMS_CRT_BR              | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFAMS_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFAMS_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFAMS_CHG_BR              | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFAMS_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFAMS_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFAMS_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFAMLRP
#### 客戶反洗錢相關資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFAML_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
| PK  | CFAML_REL_PARTIES_TYPE    | VARCHAR2(3 char)   | 關聯方類型                         |    |
|     | CFAML_BOSS_ID_TYPE        | VARCHAR2(1 char)   | 負責人身分證件類型                     |    |
|     | CFAML_BOSS_ID_NO          | VARCHAR2(11 char)  | 負責人統一編號                       |    |
|     | CFAML_BOSS_NAME           | VARCHAR2(40 char)  | 負責人姓名                         |    |
|     | CFAML_BOSS_BIRTHDAY       | DATE               | 負責人出生日期                       |    |
|     | CFAML_BOSS_COUNTRY_CODE   | VARCHAR2(2 char)   | 負責人國籍                         |    |
|     | CFAML_AVG_MONTH_TURNOVER  | VARCHAR2(1 char)   | 月平均營業額                        |    |
|     | CFAML_MS_KYC              | VARCHAR2(3 char)   | 法人實際受益人KYC                    |    |
|     | CFAML_KYC_LAST_DATE       | DATE               | 最近一次KYC日期                     |    |
|     | CFAML_MS_1_ID_TYPE        | VARCHAR2(1 char)   | 第1法人實際受益人身分證件類型/第一法定代理人身分證件類型 |    |
|     | CFAML_MS_1_ID_NO          | VARCHAR2(20 char)  | 第1法人實際受益人身分證件號碼/第一法定代理人身分證件號碼 |    |
|     | CFAML_MS_1_ID_NAME        | VARCHAR2(70 char)  | 第1法人實際受益人姓名/第一法定代理人姓名         |    |
|     | CFAML_MS_1_BIRTHDAY       | DATE               | 第1法人實際受益人出生日期/第一法定代理人出生日期     |    |
|     | CFAML_MS_1_COUNTRY_CODE   | VARCHAR2(2 char)   | 第1法人實際受益人國籍/第一法定代理人姓名國籍       |    |
|     | CFAML_MS_2_ID_TYPE        | VARCHAR2(1 char)   | 第2法人實際受益人身分證件類型/第二法定代理人身分證件類型 |    |
|     | CFAML_MS_2_ID_NO          | VARCHAR2(20 char)  | 第2法人實際受益人身分證件號碼/第二法定代理人身分證件號碼 |    |
|     | CFAML_MS_2_ID_NAME        | VARCHAR2(70 char)  | 第2法人實際受益人姓名/第二法定代理人姓名         |    |
|     | CFAML_MS_2_BIRTHDAY       | DATE               | 第2法人實際受益人出生日期/第二法定代理人出生日期     |    |
|     | CFAML_MS_2_COUNTRY_CODE   | VARCHAR2(2 char)   | 第2法人實際受益人國籍/第二法定代理人國籍         |    |
|     | CFAML_MS_3_ID_TYPE        | VARCHAR2(1 char)   | 第3法人實際受益人身分證件類型               |    |
|     | CFAML_MS_3_ID_NO          | VARCHAR2(20 char)  | 第3法人實際受益人身分證件號碼               |    |
|     | CFAML_MS_3_ID_NAME        | VARCHAR2(70 char)  | 第3法人實際受益人姓名                   |    |
|     | CFAML_MS_3_BIRTHDAY       | DATE               | 第3法人實際受益人出生日期                 |    |
|     | CFAML_MS_3_COUNTRY_CODE   | VARCHAR2(2 char)   | 第3法人實際受益人國籍                   |    |
|     | CFAML_MS_4_ID_TYPE        | VARCHAR2(1 char)   | 第4法人實際受益人身分證件類型               |    |
|     | CFAML_MS_4_ID_NO          | VARCHAR2(20 char)  | 第4法人實際受益人身分證件號碼               |    |
|     | CFAML_MS_4_ID_NAME        | VARCHAR2(70 char)  | 第4法人實際受益人姓名                   |    |
|     | CFAML_MS_4_BIRTHDAY       | DATE               | 第4法人實際受益人出生日期                 |    |
|     | CFAML_MS_4_COUNTRY_CODE   | VARCHAR2(2 char)   | 第4法人實際受益人國籍                   |    |
|     | CFAML_APP_1_ID_TYPE       | VARCHAR2(1 char)   | 第1被授權人身分證件類型                  |    |
|     | CFAML_APP_1_ID_NO         | VARCHAR2(20 char)  | 第1被授權人身分證件號碼                  |    |
|     | CFAML_APP_1_ID_NAME       | VARCHAR2(70 char)  | 第1被授權人姓名                      |    |
|     | CFAML_APP_1_BIRTHDAY      | DATE               | 第1被授權人出生日期                    |    |
|     | CFAML_APP_1_COUNTRY_CODE  | VARCHAR2(2 char)   | 第1被授權人國籍                      |    |
|     | CFAML_APP_2_ID_TYPE       | VARCHAR2(1 char)   | 第2被授權人身分證件類型                  |    |
|     | CFAML_APP_2_ID_NO         | VARCHAR2(20 char)  | 第2被授權人身分證件號碼                  |    |
|     | CFAML_APP_2_ID_NAME       | VARCHAR2(70 char)  | 第2被授權人姓名                      |    |
|     | CFAML_APP_2_BIRTHDAY      | DATE               | 第2被授權人出生日期                    |    |
|     | CFAML_APP_2_COUNTRY_CODE  | VARCHAR2(2 char)   | 第2被授權人國籍                      |    |
|     | CFAML_APP_3_ID_TYPE       | VARCHAR2(1 char)   | 第3被授權人身分證件類型                  |    |
|     | CFAML_APP_3_ID_NO         | VARCHAR2(20 char)  | 第3被授權人身分證件號碼                  |    |
|     | CFAML_APP_3_ID_NAME       | VARCHAR2(70 char)  | 第3被授權人姓名                      |    |
|     | CFAML_APP_3_BIRTHDAY      | DATE               | 第3被授權人出生日期                    |    |
|     | CFAML_APP_3_COUNTRY_CODE  | VARCHAR2(2 char)   | 第3被授權人國籍                      |    |
|     | CFAML_APP_4_ID_TYPE       | VARCHAR2(1 char)   | 第4被授權人身分證件類型                  |    |
|     | CFAML_APP_4_ID_NO         | VARCHAR2(20 char)  | 第4被授權人身分證件號碼                  |    |
|     | CFAML_APP_4_ID_NAME       | VARCHAR2(70 char)  | 第4被授權人姓名                      |    |
|     | CFAML_APP_4_BIRTHDAY      | DATE               | 第4被授權人出生日期                    |    |
|     | CFAML_APP_4_COUNTRY_CODE  | VARCHAR2(2 char)   | 第4被授權人國籍                      |    |
|     | CFAML_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFAML_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFAML_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFAML_CHG_BR              | VARCHAR2(4 char)   | 最後資料維護單位                      |    |
|     | CFAML_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFAML_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFAML_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFAML_CHK_FLAG            | VARCHAR2(1 char)   | 建檔或維護旗標                       |    |
|     | CFAML_B_STK_FLAG_1        | VARCHAR2(1 char)   | 法人是否可發行無記名股票                  |    |
|     | CFAML_B_STK_FLAG_2        | VARCHAR2(1 char)   | 法人是否已發行無記名股票                  |    |
|     | CFAML_BOSS_LIST_CHK       | VARCHAR2(9 char)   | 負責人是否與名單相似                    |    |
|     | CFAML_STOCK_RS            | VARCHAR2(1 char)   | 股權結構複雜(含本身達四層以上)              |    |
|     | CFAML_UM_AMT              | VARCHAR2(1 char)   | 預估每月交易金額(新臺幣)                 |    |
|     | CFAML_INCOME_ITEM         | VARCHAR2(10 char)  | 財富或主要收入來源(10項)                |    |
|     | CFAML_INCOME_7_KEYIN      | VARCHAR2(12 char)  | 財富或主要收入來源7:外國資金來源             |    |
|     | CFAML_INCOME_Z_KEYIN      | VARCHAR2(12 char)  | 財富或主要收入來源Z:其他                 |    |
|     | CFAML_ADD_FAR             | VARCHAR2(1 char)   | 留存地址與分行相距過遠而無法提出合理說明          |    |
|     | CFAML_BUSI_CHAR           | VARCHAR2(1 char)   | 公司營業特性、主要業務活動                 |    |
|     | CFAML_BUSI_CHAR_Z         | VARCHAR2(30 char)  | 公司營業特性、主要業務活動Z:其他             |    |
|     | CFAML_EXP_CY_1            | VARCHAR2(2 char)   | 預期匯出國家1                       |    |
|     | CFAML_EXP_CY_2            | VARCHAR2(2 char)   | 預期匯出國家2                       |    |
|     | CFAML_EXP_CY_3            | VARCHAR2(2 char)   | 預期匯出國家3                       |    |
|     | CFAML_EXP_TIMES           | VARCHAR2(1 char)   | 預期每年匯出次數                      |    |
|     | CFAML_EXP_AMT             | VARCHAR2(1 char)   | 預期每年匯出金額(USD)                 |    |
|     | CFAML_IMP_CY_1            | VARCHAR2(2 char)   | 預期匯入國家1                       |    |
|     | CFAML_IMP_CY_2            | VARCHAR2(2 char)   | 預期匯入國家2                       |    |
|     | CFAML_IMP_CY_3            | VARCHAR2(2 char)   | 預期匯入國家3                       |    |
|     | CFAML_IMP_TIMES           | VARCHAR2(1 char)   | 預期每年匯入次數                      |    |
|     | CFAML_IMP_AMT             | VARCHAR2(1 char)   | 預期每年匯入金額(USD)                 |    |
|     | CFAML_YEAR_TURNOVER       | VARCHAR2(10 char)  | 年營業額                          |    |
|     | CFAML_FIRST_TXNAMT        | VARCHAR2(1 char)   | 首次往來金額                        |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFCHANGE
#### 非帳務資料異動檔(客戶異動基本資料記錄)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFCHG_ID_CODE             | VARCHAR2(18 char)  | 統一編號                          |    |
| PK  | CFCHG_CHG_DATE            | DATE               | 異動日期                          |    |
| PK  | CFCHG_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFCHG_CHG_BR_CODE         | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFCHG_CHG_TLR_CODE        | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFCHG_TXN_SER_NO          | VARCHAR2(7 char)   | 交易序號                          |    |
|     | CFCHG_TXN_ID_CODE         | VARCHAR2(5 char)   | 交易代號                          |    |
|     | CFCHG_SUP_CODE            | VARCHAR2(6 char)   | 准核主管                          |    |
| PK  | CFCHG_ITEM                | VARCHAR2(2 char)   | 異動項目                          |    |
|     | CFCHG_BEF_DATA            | VARCHAR2(70 char)  | 異動前資料                         |    |
|     | CFCHG_AFT_DATA            | VARCHAR2(70 char)  | 異動後資料                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFCONTAC
#### 客戶往來資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFCON_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFCON_TTL_CNT             | NUMBER(2,0)        | 開戶總戶數                         |    |
|     | CFCON_FUND_OPEN_STAT      | VARCHAR2(2 char)   | 信託開戶狀態                        |    |
|     | CFCON_LN_ACT              | NUMBER(2,0)        | 授信戶數                          |    |
|     | CFCON_FX_STAT             | VARCHAR2(1 char)   | 外匯往來狀態                        |    |
|     | CFCON_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFCON_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFCON_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFCON_BOX_STAT            | VARCHAR2(1 char)   | 保管箱往來狀態                       |    |
|     | CFCON_TRUST_ZIP_CODE      | VARCHAR2(5 char)   | 信託寄送地址之郵遞區號                   |    |
|     | CFCON_TRUST_ADDR          | VARCHAR2(70 char)  | 信託寄送地址                        |    |
|     | CFCON_FILLER              | VARCHAR2(78 char)  | 保留位                           |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFCPI
#### 客戶控制人資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFCPI_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
| PK  | CFCPI_SEQ_NO              | VARCHAR2(3 char)   | 序號                            |    |
|     | CFCPI_CP_TAX              | VARCHAR2(1 char)   | 稅籍類別                          |    |
|     | CFCPI_TW_TIN              | VARCHAR2(11 char)  | 臺灣稅籍編號(TIN)                   |    |
|     | CFCPI_US_TIN              | VARCHAR2(9 char)   | 美國稅籍編號(TIN)                   |    |
|     | CFCPI_TIN_1               | VARCHAR2(20 char)  | 1稅籍編號(TIN)                    |    |
|     | CFCPI_TIN_1_CY            | VARCHAR2(2 char)   | 1稅籍國家                         |    |
|     | CFCPI_TIN_1_RS            | VARCHAR2(1 char)   | 1無法提供TIN原因                    |    |
|     | CFCPI_TIN_2               | VARCHAR2(20 char)  | 2稅籍編號(TIN)                    |    |
|     | CFCPI_TIN_2_CY            | VARCHAR2(2 char)   | 2稅籍國家                         |    |
|     | CFCPI_TIN_2_RS            | VARCHAR2(1 char)   | 2無法提供TIN原因                    |    |
|     | CFCPI_TIN_3               | VARCHAR2(20 char)  | 3稅籍編號(TIN)                    |    |
|     | CFCPI_TIN_3_CY            | VARCHAR2(2 char)   | 3稅籍國家                         |    |
|     | CFCPI_TIN_3_RS            | VARCHAR2(1 char)   | 3無法提供TIN原因                    |    |
|     | CFCPI_CP_NAME             | VARCHAR2(60 char)  | 控制人中文姓名                       |    |
|     | CFCPI_ENG_NAME            | VARCHAR2(70 char)  | 控制人英文姓名                       |    |
|     | CFCPI_CP_ADDR_1           | VARCHAR2(70 char)  | 中文居住地址/戶籍地址                   |    |
|     | CFCPI_CP_ADDR_2           | VARCHAR2(2 char)   | 中文居住地址/戶籍地址                   |    |
|     | CFCPI_ENG_ADDR_1          | VARCHAR2(60 char)  | 英文地址1(Number,street)          |    |
|     | CFCPI_ENG_ADDR_2          | VARCHAR2(30 char)  | 英文地址2(City                    |    |
|     | CFCPI_ENG_ADDR_3          | VARCHAR2(30 char)  | 英文地址3(State)                  |    |
|     | CFCPI_ENG_ADDR_4          | VARCHAR2(2 char)   | 英文地址4(Country)                |    |
|     | CFCPI_BIRTH               | DATE               | 出生日期                          |    |
|     | CFCPI_BIRTH_CY            | VARCHAR2(2 char)   | 出生地-國家                        |    |
|     | CFCPI_BIRTH_CITY          | VARCHAR2(20 char)  | 出生地-城市                        |    |
|     | CFCPI_A070_KIND           | VARCHAR2(1 char)   | A070控制人類別                     |    |
|     | CFCPI_A060_KIND           | VARCHAR2(1 char)   | A060控制人類別                     |    |
|     | CFCPI_CRT_BRCD            | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFCPI_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFCPI_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFCPI_CHG_BRCD            | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFCPI_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFCPI_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFCPI_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFCRF
#### 客戶FATCA及CRS檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFCRF_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFCRF_ACC_FLAG            | VARCHAR2(1 char)   | 是否為保管帳戶                       |    |
|     | CFCRF_OWNER_ID            | VARCHAR2(11 char)  | 受益人統一編號                       |    |
|     | CFCRF_OWNER_NAME          | VARCHAR2(60 char)  | 受益人戶名                         |    |
|     | CFCRF_BIRTH               | DATE               | 出生日期                          |    |
|     | CFCRF_BIRTH_CY            | VARCHAR2(2 char)   | 出生地-國家                        |    |
|     | CFCRF_BIRTH_CITY          | VARCHAR2(20 char)  | 出生地-城市                        |    |
|     | CFCRF_TAX_TYPE            | VARCHAR2(1 char)   | 稅籍類別                          |    |
|     | CFCRF_FATCA_TYPE          | VARCHAR2(1 char)   | 身分別                           |    |
|     | CFCRF_DOCU_KIND           | VARCHAR2(1 char)   | 應徵取文件種類                       |    |
|     | CFCRF_DOCU_DATE           | DATE               | 簽署文件日期                        |    |
|     | CFCRF_CHK_DATE            | DATE               | FATCA及CRS檢核表建檔日期              |    |
|     | CFCRF_ENG_NAME            | VARCHAR2(70 char)  | 個人/公司戶之英文戶名                   |    |
|     | CFCRF_ENG_ADDR_1          | VARCHAR2(60 char)  | 英文地址1                         |    |
|     | CFCRF_ENG_ADDR_2          | VARCHAR2(30 char)  | 英文地址2                         |    |
|     | CFCRF_ENG_ADDR_3          | VARCHAR2(30 char)  | 英文地址3                         |    |
|     | CFCRF_ENG_ADDR_4          | VARCHAR2(2 char)   | 英文地址4                         |    |
|     | CFCRF_POM_ADDR_1          | VARCHAR2(35 char)  | 實際管理處所地址(英文)1                 |    |
|     | CFCRF_POM_ADDR_2          | VARCHAR2(35 char)  | 實際管理處所地址(英文)2                 |    |
|     | CFCRF_POM_ADDR_3          | VARCHAR2(35 char)  | 實際管理處所地址(英文)3                 |    |
|     | CFCRF_POM_ADDR_4          | VARCHAR2(2 char)   | 實際管理處所國家                      |    |
|     | CFCRF_TAX_TIN             | VARCHAR2(9 char)   | 美國稅籍編號(TIN)                   |    |
|     | CFCRF_TIN_1               | VARCHAR2(20 char)  | 1稅籍編號(TIN)                    |    |
|     | CFCRF_TIN_1_CY            | VARCHAR2(2 char)   | 1稅籍國家                         |    |
|     | CFCRF_TIN_1_RS            | VARCHAR2(1 char)   | 3無法提供TIN原因                    |    |
|     | CFCRF_TIN_2               | VARCHAR2(20 char)  | 2稅籍編號(TIN)                    |    |
|     | CFCRF_TIN_2_CY            | VARCHAR2(2 char)   | 2稅籍國家                         |    |
|     | CFCRF_TIN_2_RS            | VARCHAR2(1 char)   | 2無法提供TIN原因                    |    |
|     | CFCRF_TIN_3               | VARCHAR2(20 char)  | 3稅籍編號(TIN)                    |    |
|     | CFCRF_TIN_3_CY            | VARCHAR2(2 char)   | 3稅籍國家                         |    |
|     | CFCRF_TIN_3_RS            | VARCHAR2(1 char)   | 3無法提供TIN原因                    |    |
|     | CFCRF_CPNY_KIND           | VARCHAR2(4 char)   | 公司戶類別選項                       |    |
|     | CFCRF_A030_KIND           | VARCHAR2(1 char)   | A030帳戶持有人為積極非金融機構實體           |    |
|     | CFCRF_FATCA_CODE          | VARCHAR2(1 char)   | 金融機構之FATCA識別碼                 |    |
|     | CFCRF_GIIN_1              | VARCHAR2(6 char)   | 金融機構之GIIN-1                   |    |
|     | CFCRF_GIIN_2              | VARCHAR2(5 char)   | 金融機構之GIIN-2                   |    |
|     | CFCRF_GIIN_3              | VARCHAR2(2 char)   | 金融機構之GIIN-3                   |    |
|     | CFCRF_GIIN_4              | VARCHAR2(3 char)   | 金融機構之GIIN-4                   |    |
|     | CFCRF_IRS_DATE            | DATE               | 最近一次至IRS網站檢查日期                |    |
|     | CFCRF_OTH_CODE            | VARCHAR2(9 char)   | 其他識別碼                         |    |
|     | CFCRF_FATCA_DATE          | DATE               | 金融機構之FATCA識別碼取得日期/異動日期        |    |
|     | CFCRF_SPE_FATCA           | VARCHAR2(4 char)   | 特殊FATCA身分別                    |    |
|     | CFCRF_UNC_TYPE            | VARCHAR2(1 char)   | 身分別為不合作客戶選項                   |    |
|     | CFCRF_UNC_DATE            | DATE               | 不合作客戶建檔日期                     |    |
|     | CFCRF_CRT_BRCD            | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFCRF_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFCRF_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFCRF_CHG_BRCD            | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFCRF_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFCRF_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFCRF_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFCRF_STATEMEMT           | VARCHAR2(1 char)   | FATCA及CRS聲明方式                 |    |
|     | CFCRF_BOSS_ID             | VARCHAR2(11 char)  | 獨資負責人統編                       |    |
|     | CFCRF_BOSS_NAME           | VARCHAR2(10 char)  | 獨資負責人姓名                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFCROSS
#### 交叉行銷設定檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFCRS_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFCRS_AGREE_STAT          | VARCHAR2(1 char)   | 共同行銷同意狀況                      |    |
|     | CFCRS_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFCRS_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFCRS_AGREE_DATE          | DATE               | 同意日期                          |    |
|     | CFCRS_DISAGREE_DATE       | DATE               | 不同意日期                         |    |
|     | CFCRS_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFCRS_CHG_BR_CODE         | VARCHAR2(4 char)   | 設定單位                          |    |
|     | CFCRS_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFCRS_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
| PK  | CFCRS_CUST_TYPE           | VARCHAR2(1 char)   | 客戶類別                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFENG
#### 客戶英文資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFENG_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFENG_BOSS_ID_CODE        | VARCHAR2(11 char)  | 負責人統一編號                       |    |
|     | CFENG_CUST_NAME_1         | VARCHAR2(35 char)  | 個人/公司英文名稱                     |    |
|     | CFENG_CUST_NAME_2         | VARCHAR2(35 char)  | 個人/公司英文名稱                     |    |
|     | CFENG_BOSS_NAME           | VARCHAR2(40 char)  | 公司負責人名稱                       |    |
|     | CFENG_ADDR_1              | VARCHAR2(105 char) | 英文地址                          |    |
|     | CFENG_ADDR_2              | VARCHAR2(35 char)  | 英文地址                          |    |
|     | CFENG_ADDR_3              | VARCHAR2(35 char)  | 英文地址                          |    |
|     | CFENG_COUNTRY_CODE        | VARCHAR2(2 char)   | 國別代碼                          |    |
|     | CFENG_COUNTRY             | VARCHAR2(35 char)  | 國別英文名稱                        |    |
|     | CFENG_RESIDENCE_ID        | VARCHAR2(20 char)  | 居留證號/大陸居民證號                   |    |
|     | CFENG_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFENG_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFENG_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFENG_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFENG_PASSBOOK_NO         | VARCHAR2(20 char)  | 護照號碼                          |    |
|     | CFENG_RESIDENCE_S_DATE    | DATE               | 居留證起日                         |    |
|     | CFENG_RESIDENCE_E_DATE    | DATE               | 居留證迄日                         |    |
|     | CFENG_TAIWAN_ADD          | VARCHAR2(1 char)   | 在台有無住所                        |    |
|     | CFENG_JURIDICAL_PERSON_CN | VARCHAR2(1 char)   | 大陸地區法人                        |    |
|     | CFENG_BRANCH_CN           | VARCHAR2(1 char)   | 大陸人民、法人在第三地區設立之分支機構           |    |
|     | CFENG_COMM_ADDR_1         | VARCHAR2(35 char)  | 英文通訊地址_1                      |    |
|     | CFENG_COMM_ADDR_2         | VARCHAR2(35 char)  | 英文通訊地址_2                      |    |
|     | CFENG_COMM_ADDR_3         | VARCHAR2(35 char)  | 英文通訊地址_3                      |    |
|     | CFENG_SEND_ADD_CY_CODE    | VARCHAR2(2 char)   | 寄送地址國別                        |    |
|     | CFENG_DMCL_ADD_CY         | VARCHAR2(2 char)   | 戶籍地址/公司登記地址國家別                |    |
|     | CFENG_COMM_ADD_CY         | VARCHAR2(2 char)   | 現居地址/主要營業處所國家別                |    |
|     | CFENG_CPNY_ADD_CY         | VARCHAR2(2 char)   | 公司地址國家別                       |    |
|     | CFENG_OTHE_ADD_CY         | VARCHAR2(2 char)   | 其他地址國家別                       |    |
|     | CFENG_ENGL_ADD_CY         | VARCHAR2(2 char)   | 英文地址國家別                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFIDCHG
#### 統一編號變更檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFIDC_CHG_DATE            | DATE               | 變更日期_營業日                      |    |
| PK  | CFIDC_ORG_ID_CODE         | VARCHAR2(11 char)  | 原統一編號                         |    |
|     | CFIDC_NEW_ID_CODE         | VARCHAR2(11 char)  | 新統一編號                         |    |
|     | CFIDC_CHG_STAT            | VARCHAR2(1 char)   | 變更狀態                          |    |
|     | CFIDC_APL_BR_CODE         | VARCHAR2(4 char)   | 申請單位                          |    |
|     | CFIDC_APPLY_DATE          | DATE               | 申請日期_交易日                      |    |
|     | CFIDC_APPLY_TIME          | VARCHAR2(6 char)   | 申請時間                          |    |
|     | CFIDC_CANCEL_DATE         | DATE               | 取消日期_交易日                      |    |
|     | CFIDC_CANCEL_TIME         | VARCHAR2(6 char)   | 取消時間                          |    |
|     | CFIDC_EXEC_DATE           | DATE               | 執行日期_交易日                      |    |
|     | CFIDC_EXEC_TIME           | VARCHAR2(6 char)   | 執行時間                          |    |
| PK  | CFIDC_ACC_ID_NO           | VARCHAR2(13 char)  | 帳號                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFIDP
#### 個資法設定檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFIDP_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFIDP_AGREE_STAT          | VARCHAR2(1 char)   | 同意狀況                          |    |
|     | CFIDP_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFIDP_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFIDP_AGREE_DATE          | DATE               | 同意日期                          |    |
|     | CFIDP_DISAGREE_DATE       | DATE               | 不同意日期                         |    |
|     | CFIDP_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFIDP_CHG_BR_CODE         | VARCHAR2(4 char)   | 設定單位(異動單位)                    |    |
|     | CFIDP_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFIDP_FILLER              | VARCHAR2(6 char)   | 保留位                           |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFINSMRG
#### 中央存保存款歸戶檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFMRG_ID_CODE             | VARCHAR2(11 char)  | 父層統編                          |    |
| PK  | CFMRG_ITEM                | VARCHAR2(1 char)   | 項目                            |    |
| PK  | CFMRG_CHILD_ID_CODE       | VARCHAR2(13 char)  | 子層統編/信託專戶                     |    |
|     | CFMRG_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFMRG_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
| PK  | CFMRG_TRUSTNO             | VARCHAR2(15 char)  | 信託編號                          |    |
|     | CFMRG_BAL                 | NUMBER(15,2)       | 金額                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFJONAME
#### 聯名相關戶資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFJON_ACC_ID_NO           | VARCHAR2(13 char)  | 帳號                            |    |
|     | CFJON_REC_STAT            | NUMBER(1,0)        | 記錄狀態(0：正常戶1：刪除)               |    |
|     | CFJON_MAIN_ID_CODE        | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFJON_BR_CODE             | NUMBER(4,0)        | 所屬分行                          |    |
| PK  | CFJON_ID_CODE             | VARCHAR2(11 char)  | 聯名第二人統一編號                     |    |
|     | CFJON_JOIN_NAME           | VARCHAR2(40 char)  | 聯名第二人姓名                       |    |
|     | CFJON_INT_PERCENT_1       | NUMBER(3,0)        | 聯名第一人利息所得分配比例                 |    |
|     | CFJON_INT_PERCENT_2       | NUMBER(3,0)        | 聯名第二人利息所得分配比例                 |    |
|     | CFJON_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFJON_CRT_BR_CODE         | NUMBER(4,0)        | 建檔單位                          |    |
|     | CFJON_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFJON_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFJON_CHG_TIME            | NUMBER(6,0)        | 最後異動時間                        |    |
|     | CFJON_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFKYC
#### 客戶KYC資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFKYC_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFKYC_CHILD               | VARCHAR2(2 char)   | 子女人數                          |    |
|     | CFKYC_DEBT_ITEM           | VARCHAR2(7 char)   | 個人負債                          |    |
|     | CFKYC_DEBT_Z_KEYIN        | VARCHAR2(12 char)  | 個人負債Z:其他                      |    |
|     | CFKYC_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFKYC_CHG_TIME            | NUMBER(6,0)        | 異動時間                          |    |
|     | CFKYC_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFKYC_YEAR_SAL_RG         | VARCHAR2(1 char)   | 年收入                           |    |
|     | CFKYC_FIRST_TXNAMT        | VARCHAR2(1 char)   | 首次往來金額                        |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFMASTER1
#### 客戶基本資料檔(一)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFMST_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFMST_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFMST_OPEN_TYPE           | VARCHAR2(1 char)   | 開戶型態                          |    |
|     | CFMST_CUST_NAME           | VARCHAR2(60 char)  | 戶名                            |    |
|     | CFMST_BOSS_NAME           | VARCHAR2(40 char)  | 負責人姓名                         |    |
|     | CFMST_SEX                 | VARCHAR2(1 char)   | 性別                            |    |
|     | CFMST_BIRTHDAY            | DATE               | 出生日期/負責人出生日期                  |    |
|     | CFMST_BOSS_ID_CODE        | VARCHAR2(11 char)  | 負責人統一編號                       |    |
|     | CFMST_AGREE_VER           | VARCHAR2(5 char)   | 總約定書版本                        |    |
|     | CFMST_TAX_RATE            | VARCHAR2(1 char)   | 扣稅別                           |    |
|     | CFMST_MARITAL_STAT        | VARCHAR2(1 char)   | 婚姻狀況                          |    |
|     | CFMST_CUST_KIND           | VARCHAR2(2 char)   | 客戶類別                          |    |
|     | CFMST_TLR_CODE            | VARCHAR2(6 char)   | 行員代號                          |    |
|     | CFMST_BINS_CODE           | VARCHAR2(6 char)   | 行業別(央行)                       |    |
|     | CFMST_CUST_TYPE           | VARCHAR2(2 char)   | 客戶型態                          |    |
|     | CFMST_RGB_SEND_FLAG       | VARCHAR2(1 char)   | 扣繳憑單旗標                        |    |
|     | CFMST_CUST_VIP            | VARCHAR2(2 char)   | VIP等級                         |    |
|     | CFMST_TOUT_CODE           | VARCHAR2(2 char)   | 招攬方式                          |    |
|     | CFMST_BUSI_CRT_DATE       | DATE               | 公司成立日期                        |    |
|     | CFMST_CPNY_CAPITAL        | NUMBER(13,0)       | 公司資本額                         |    |
|     | CFMST_DMCL_ZIP_CODE       | VARCHAR2(5 char)   | 戶籍/公司登記地址之郵遞區號                |    |
|     | CFMST_DMCL_ADDR_1         | VARCHAR2(20 char)  | 戶籍/公司登記地址-1                   |    |
|     | CFMST_DMCL_ADDR_2         | VARCHAR2(60 char)  | 戶籍/公司登記地址-2                   |    |
|     | CFMST_COMM_ZIP_CODE       | VARCHAR2(5 char)   | 通訊地址之郵遞區號                     |    |
|     | CFMST_COMM_ADDR_1         | VARCHAR2(20 char)  | 通訊地址-1                        |    |
|     | CFMST_COMM_ADDR_2         | VARCHAR2(60 char)  | 通訊地址-2                        |    |
|     | CFMST_EMAIL_ADDR          | VARCHAR2(40 char)  | 電子郵件信箱                        |    |
|     | CFMST_URL                 | VARCHAR2(40 char)  | 網址                            |    |
|     | CFMST_SEND_ADD_CODE       | VARCHAR2(1 char)   | 寄送地址別                         |    |
|     | CFMST_NOTICE_TEL_FLAG     | VARCHAR2(1 char)   | 聯絡電話旗標                        |    |
|     | CFMST_HOUSE_TEL           | VARCHAR2(13 char)  | 住家電話                          |    |
|     | CFMST_CPNY_TEL            | VARCHAR2(18 char)  | 公司電話                          |    |
|     | CFMST_FAX                 | VARCHAR2(13 char)  | 傳真號碼                          |    |
|     | CFMST_MOBILE              | VARCHAR2(10 char)  | 行動電話                          |    |
|     | CFMST_OTHER_TEL           | VARCHAR2(18 char)  | 其他電話號碼                        |    |
|     | CFMST_SEND_DM_CODE        | VARCHAR2(1 char)   | 是否寄送DM                        |    |
|     | CFMST_NOTICE_NAME         | VARCHAR2(20 char)  | 聯絡人姓名/公司聯絡人                   |    |
|     | CFMST_NOTICE_TITLE        | VARCHAR2(20 char)  | 聯絡人稱謂/公司聯絡人職稱                 |    |
|     | CFMST_NOTICE_TEL          | VARCHAR2(18 char)  | 聯絡人/公司聯絡人電話                   |    |
|     | CFMST_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFMST_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFMST_CHG_BR              | VARCHAR2(4 char)   | 最後資料維護單位                      |    |
|     | CFMST_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFMST_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFMST_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFMST_ALTER_MEMO          | VARCHAR2(20 char)  | 備註                            |    |
|     | CFMST_AGREE_BR            | VARCHAR2(4 char)   | 總約定書建檔單位                      |    |
|     | CFMST_AGREE_DATE          | DATE               | 總約定書建檔日                       |    |
|     | CFMST_CPNY_ZIP_CODE       | VARCHAR2(5 char)   | 公司地址之郵遞區號                     |    |
|     | CFMST_CPNY_ADDR_1         | VARCHAR2(20 char)  | 公司地址-1                        |    |
|     | CFMST_CPNY_ADDR_2         | VARCHAR2(60 char)  | 公司地址-2                        |    |
|     | CFMST_MSG_TEL             | VARCHAR2(10 char)  | 簡訊電話                          |    |
|     | CFMST_SEND_AT_CODE        | VARCHAR2(1 char)   | 自動化交易是否以E-mail通知              |    |
|     | CFMST_AO_BR               | VARCHAR2(4 char)   | AO所屬行                         |    |
|     | CFMST_AO_NO               | VARCHAR2(6 char)   | AO員編                          |    |
|     | CFMST_RT_TIMES            | NUMBER(1,0)        | 匯款優惠次數                        |    |
|     | CFMST_RT_LAST_DATE        | DATE               | 最後匯款優惠日期                      |    |
|     | CFMST_OTHER_ZIP_CODE      | VARCHAR2(5 char)   | 其他地址之郵遞區號                     |    |
|     | CFMST_OTHER_ADDR_1        | VARCHAR2(20 char)  | 其他地址-1                        |    |
|     | CFMST_OTHER_ADDR_2        | VARCHAR2(60 char)  | 其他地址-2                        |    |
|     | CFMST_SEND_AT_CSH         | VARCHAR2(1 char)   | 是否寄送自動化交易對帳單                  |    |
|     | CFMST_BINS_CODE_JCIC      | VARCHAR2(6 char)   | 行業別(主計處)                      |    |
|     | CFMST_MEGA_CONS_NO        | VARCHAR2(6 char)   | 理顧編號                          |    |
|     | CFMST_MEGA_SET_DATE       | DATE               | 理顧設定日                         |    |
|     | CFMST_OBU_FLAG            | VARCHAR2(1 char)   | OBU聯貸戶                        |    |
|     | CFMST_CARD_SYS_MOBILE     | VARCHAR2(1 char)   | 是否同時異動信用卡行動電話                 |    |
|     | CFMST_OD_FLAG             | VARCHAR2(1 char)   | OBU/DBU註記                     |    |
|     | CFMST_SPECIAL_STATUS      | VARCHAR2(1 char)   | 特殊身份別                         |    |
|     | CFMST_SPECIAL_STATUS_DATE | DATE               | 特殊身份證件日期                      |    |
|     | CFMST_LIST_CHK            | VARCHAR2(1 char)   | 是否與名單相似                       |    |
|     | CFMST_PUSH_FLAG           | VARCHAR2(1 char)   | 是否需推撥                         |    |
|     | CFMST_COPR_CUST           | VARCHAR2(1 char)   | 企金客群                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFMASTER2
#### 客戶基本資料檔(二)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFMST_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFMST_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFMST_OPEN_TYPE           | VARCHAR2(1 char)   | 開戶型態                          |    |
|     | CFMST_CUST_NAME           | VARCHAR2(60 char)  | 戶名                            |    |
|     | CFMST_BOSS_NAME           | VARCHAR2(40 char)  | 負責人姓名                         |    |
|     | CFMST_SEX                 | VARCHAR2(1 char)   | 性別                            |    |
|     | CFMST_BIRTHDAY            | DATE               | 出生日期/負責人出生日期                  |    |
|     | CFMST_BOSS_ID_CODE        | VARCHAR2(11 char)  | 負責人統一編號                       |    |
|     | CFMST_AGREE_VER           | VARCHAR2(5 char)   | 總約定書版本                        |    |
|     | CFMST_TAX_RATE            | VARCHAR2(1 char)   | 扣稅別                           |    |
|     | CFMST_MARITAL_STAT        | VARCHAR2(1 char)   | 婚姻狀況                          |    |
|     | CFMST_CUST_KIND           | VARCHAR2(2 char)   | 客戶類別                          |    |
|     | CFMST_TLR_CODE            | VARCHAR2(6 char)   | 行員代號                          |    |
|     | CFMST_BINS_CODE           | VARCHAR2(6 char)   | 行業別(央行)                       |    |
|     | CFMST_CUST_TYPE           | VARCHAR2(2 char)   | 客戶型態                          |    |
|     | CFMST_RGB_SEND_FLAG       | VARCHAR2(1 char)   | 扣繳憑單旗標                        |    |
|     | CFMST_CUST_VIP            | VARCHAR2(2 char)   | VIP等級                         |    |
|     | CFMST_TOUT_CODE           | VARCHAR2(2 char)   | 招攬方式                          |    |
|     | CFMST_BUSI_CRT_DATE       | DATE               | 公司成立日期                        |    |
|     | CFMST_CPNY_CAPITAL        | NUMBER(13,0)       | 公司資本額                         |    |
|     | CFMST_DMCL_ZIP_CODE       | VARCHAR2(5 char)   | 戶籍/公司登記地址之郵遞區號                |    |
|     | CFMST_DMCL_ADDR_1         | VARCHAR2(20 char)  | 戶籍/公司登記地址-1                   |    |
|     | CFMST_DMCL_ADDR_2         | VARCHAR2(60 char)  | 戶籍/公司登記地址-2                   |    |
|     | CFMST_COMM_ZIP_CODE       | VARCHAR2(5 char)   | 通訊地址之郵遞區號                     |    |
|     | CFMST_COMM_ADDR_1         | VARCHAR2(20 char)  | 通訊地址-1                        |    |
|     | CFMST_COMM_ADDR_2         | VARCHAR2(60 char)  | 通訊地址-2                        |    |
|     | CFMST_EMAIL_ADDR          | VARCHAR2(40 char)  | 電子郵件信箱                        |    |
|     | CFMST_URL                 | VARCHAR2(40 char)  | 網址                            |    |
|     | CFMST_SEND_ADD_CODE       | VARCHAR2(1 char)   | 寄送地址別                         |    |
|     | CFMST_NOTICE_TEL_FLAG     | VARCHAR2(1 char)   | 聯絡電話旗標                        |    |
|     | CFMST_HOUSE_TEL           | VARCHAR2(13 char)  | 住家電話                          |    |
|     | CFMST_CPNY_TEL            | VARCHAR2(18 char)  | 公司電話                          |    |
|     | CFMST_FAX                 | VARCHAR2(13 char)  | 傳真號碼                          |    |
|     | CFMST_MOBILE              | VARCHAR2(10 char)  | 行動電話                          |    |
|     | CFMST_OTHER_TEL           | VARCHAR2(18 char)  | 其他電話號碼                        |    |
|     | CFMST_SEND_DM_CODE        | VARCHAR2(1 char)   | 是否寄送DM                        |    |
|     | CFMST_NOTICE_NAME         | VARCHAR2(20 char)  | 聯絡人姓名/公司聯絡人                   |    |
|     | CFMST_NOTICE_TITLE        | VARCHAR2(20 char)  | 聯絡人稱謂/公司聯絡人職稱                 |    |
|     | CFMST_NOTICE_TEL          | VARCHAR2(18 char)  | 聯絡人/公司聯絡人電話                   |    |
|     | CFMST_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFMST_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFMST_CHG_BR              | VARCHAR2(4 char)   | 最後資料維護單位                      |    |
|     | CFMST_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFMST_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFMST_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFMST_ALTER_MEMO          | VARCHAR2(20 char)  | 備註                            |    |
|     | CFMST_AGREE_BR            | VARCHAR2(4 char)   | 總約定書建檔單位                      |    |
|     | CFMST_AGREE_DATE          | DATE               | 總約定書建檔日                       |    |
|     | CFMST_CPNY_ZIP_CODE       | VARCHAR2(5 char)   | 公司地址之郵遞區號                     |    |
|     | CFMST_CPNY_ADDR_1         | VARCHAR2(20 char)  | 公司地址-1                        |    |
|     | CFMST_CPNY_ADDR_2         | VARCHAR2(60 char)  | 公司地址-2                        |    |
|     | CFMST_MSG_TEL             | VARCHAR2(10 char)  | 簡訊電話                          |    |
|     | CFMST_SEND_AT_CODE        | VARCHAR2(1 char)   | 自動化交易是否以E-mail通知              |    |
|     | CFMST_AO_BR               | VARCHAR2(4 char)   | AO所屬行                         |    |
|     | CFMST_AO_NO               | VARCHAR2(6 char)   | AO員編                          |    |
|     | CFMST_RT_TIMES            | NUMBER(1,0)        | 匯款優惠次數                        |    |
|     | CFMST_RT_LAST_DATE        | DATE               | 最後匯款優惠日期                      |    |
|     | CFMST_OTHER_ZIP_CODE      | VARCHAR2(5 char)   | 其他地址之郵遞區號                     |    |
|     | CFMST_OTHER_ADDR_1        | VARCHAR2(20 char)  | 其他地址-1                        |    |
|     | CFMST_OTHER_ADDR_2        | VARCHAR2(60 char)  | 其他地址-2                        |    |
|     | CFMST_SEND_AT_CSH         | VARCHAR2(1 char)   | 是否寄送自動化交易對帳單                  |    |
|     | CFMST_BINS_CODE_JCIC      | VARCHAR2(6 char)   | 行業別(主計處)                      |    |
|     | CFMST_MEGA_CONS_NO        | VARCHAR2(6 char)   | 理顧編號                          |    |
|     | CFMST_MEGA_SET_DATE       | DATE               | 理顧設定日                         |    |
|     | CFMST_OBU_FLAG            | VARCHAR2(1 char)   | OBU聯貸戶                        |    |
|     | CFMST_CARD_SYS_MOBILE     | VARCHAR2(1 char)   | 是否同時異動信用卡行動電話                 |    |
|     | CFMST_OD_FLAG             | VARCHAR2(1 char)   | OBU/DBU註記                     |    |
|     | CFMST_SPECIAL_STATUS      | VARCHAR2(1 char)   | 特殊身份別                         |    |
|     | CFMST_SPECIAL_STATUS_DATE | DATE               | 特殊身份證件日期                      |    |
|     | CFMST_LIST_CHK            | VARCHAR2(1 char)   | 是否與名單相似                       |    |
|     | CFMST_PUSH_FLAG           | VARCHAR2(1 char)   | 是否需推撥                         |    |
|     | CFMST_COPR_CUST           | VARCHAR2(1 char)   | 企金客群                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFMASTER3
#### 客戶基本資料檔(三)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFMST_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFMST_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFMST_OPEN_TYPE           | VARCHAR2(1 char)   | 開戶型態                          |    |
|     | CFMST_CUST_NAME           | VARCHAR2(60 char)  | 戶名                            |    |
|     | CFMST_BOSS_NAME           | VARCHAR2(40 char)  | 負責人姓名                         |    |
|     | CFMST_SEX                 | VARCHAR2(1 char)   | 性別                            |    |
|     | CFMST_BIRTHDAY            | DATE               | 出生日期/負責人出生日期                  |    |
|     | CFMST_BOSS_ID_CODE        | VARCHAR2(11 char)  | 負責人統一編號                       |    |
|     | CFMST_AGREE_VER           | VARCHAR2(5 char)   | 總約定書版本                        |    |
|     | CFMST_TAX_RATE            | VARCHAR2(1 char)   | 扣稅別                           |    |
|     | CFMST_MARITAL_STAT        | VARCHAR2(1 char)   | 婚姻狀況                          |    |
|     | CFMST_CUST_KIND           | VARCHAR2(2 char)   | 客戶類別                          |    |
|     | CFMST_TLR_CODE            | VARCHAR2(6 char)   | 行員代號                          |    |
|     | CFMST_BINS_CODE           | VARCHAR2(6 char)   | 行業別(央行)                       |    |
|     | CFMST_CUST_TYPE           | VARCHAR2(2 char)   | 客戶型態                          |    |
|     | CFMST_RGB_SEND_FLAG       | VARCHAR2(1 char)   | 扣繳憑單旗標                        |    |
|     | CFMST_CUST_VIP            | VARCHAR2(2 char)   | VIP等級                         |    |
|     | CFMST_TOUT_CODE           | VARCHAR2(2 char)   | 招攬方式                          |    |
|     | CFMST_BUSI_CRT_DATE       | DATE               | 公司成立日期                        |    |
|     | CFMST_CPNY_CAPITAL        | NUMBER(13,0)       | 公司資本額                         |    |
|     | CFMST_DMCL_ZIP_CODE       | VARCHAR2(5 char)   | 戶籍/公司登記地址之郵遞區號                |    |
|     | CFMST_DMCL_ADDR_1         | VARCHAR2(20 char)  | 戶籍/公司登記地址-1                   |    |
|     | CFMST_DMCL_ADDR_2         | VARCHAR2(60 char)  | 戶籍/公司登記地址-2                   |    |
|     | CFMST_COMM_ZIP_CODE       | VARCHAR2(5 char)   | 通訊地址之郵遞區號                     |    |
|     | CFMST_COMM_ADDR_1         | VARCHAR2(20 char)  | 通訊地址-1                        |    |
|     | CFMST_COMM_ADDR_2         | VARCHAR2(60 char)  | 通訊地址-2                        |    |
|     | CFMST_EMAIL_ADDR          | VARCHAR2(40 char)  | 電子郵件信箱                        |    |
|     | CFMST_URL                 | VARCHAR2(40 char)  | 網址                            |    |
|     | CFMST_SEND_ADD_CODE       | VARCHAR2(1 char)   | 寄送地址別                         |    |
|     | CFMST_NOTICE_TEL_FLAG     | VARCHAR2(1 char)   | 聯絡電話旗標                        |    |
|     | CFMST_HOUSE_TEL           | VARCHAR2(13 char)  | 住家電話                          |    |
|     | CFMST_CPNY_TEL            | VARCHAR2(18 char)  | 公司電話                          |    |
|     | CFMST_FAX                 | VARCHAR2(13 char)  | 傳真號碼                          |    |
|     | CFMST_MOBILE              | VARCHAR2(10 char)  | 行動電話                          |    |
|     | CFMST_OTHER_TEL           | VARCHAR2(18 char)  | 其他電話號碼                        |    |
|     | CFMST_SEND_DM_CODE        | VARCHAR2(1 char)   | 是否寄送DM                        |    |
|     | CFMST_NOTICE_NAME         | VARCHAR2(20 char)  | 聯絡人姓名/公司聯絡人                   |    |
|     | CFMST_NOTICE_TITLE        | VARCHAR2(20 char)  | 聯絡人稱謂/公司聯絡人職稱                 |    |
|     | CFMST_NOTICE_TEL          | VARCHAR2(18 char)  | 聯絡人/公司聯絡人電話                   |    |
|     | CFMST_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFMST_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFMST_CHG_BR              | VARCHAR2(4 char)   | 最後資料維護單位                      |    |
|     | CFMST_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFMST_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFMST_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFMST_ALTER_MEMO          | VARCHAR2(20 char)  | 備註                            |    |
|     | CFMST_AGREE_BR            | VARCHAR2(4 char)   | 總約定書建檔單位                      |    |
|     | CFMST_AGREE_DATE          | DATE               | 總約定書建檔日                       |    |
|     | CFMST_CPNY_ZIP_CODE       | VARCHAR2(5 char)   | 公司地址之郵遞區號                     |    |
|     | CFMST_CPNY_ADDR_1         | VARCHAR2(20 char)  | 公司地址-1                        |    |
|     | CFMST_CPNY_ADDR_2         | VARCHAR2(60 char)  | 公司地址-2                        |    |
|     | CFMST_MSG_TEL             | VARCHAR2(10 char)  | 簡訊電話                          |    |
|     | CFMST_SEND_AT_CODE        | VARCHAR2(1 char)   | 自動化交易是否以E-mail通知              |    |
|     | CFMST_AO_BR               | VARCHAR2(4 char)   | AO所屬行                         |    |
|     | CFMST_AO_NO               | VARCHAR2(6 char)   | AO員編                          |    |
|     | CFMST_RT_TIMES            | NUMBER(1,0)        | 匯款優惠次數                        |    |
|     | CFMST_RT_LAST_DATE        | DATE               | 最後匯款優惠日期                      |    |
|     | CFMST_OTHER_ZIP_CODE      | VARCHAR2(5 char)   | 其他地址之郵遞區號                     |    |
|     | CFMST_OTHER_ADDR_1        | VARCHAR2(20 char)  | 其他地址-1                        |    |
|     | CFMST_OTHER_ADDR_2        | VARCHAR2(60 char)  | 其他地址-2                        |    |
|     | CFMST_SEND_AT_CSH         | VARCHAR2(1 char)   | 是否寄送自動化交易對帳單                  |    |
|     | CFMST_BINS_CODE_JCIC      | VARCHAR2(6 char)   | 行業別(主計處)                      |    |
|     | CFMST_MEGA_CONS_NO        | VARCHAR2(6 char)   | 理顧編號                          |    |
|     | CFMST_MEGA_SET_DATE       | DATE               | 理顧設定日                         |    |
|     | CFMST_OBU_FLAG            | VARCHAR2(1 char)   | OBU聯貸戶                        |    |
|     | CFMST_CARD_SYS_MOBILE     | VARCHAR2(1 char)   | 是否同時異動信用卡行動電話                 |    |
|     | CFMST_OD_FLAG             | VARCHAR2(1 char)   | OBU/DBU註記                     |    |
|     | CFMST_SPECIAL_STATUS      | VARCHAR2(1 char)   | 特殊身份別                         |    |
|     | CFMST_SPECIAL_STATUS_DATE | DATE               | 特殊身份證件日期                      |    |
|     | CFMST_LIST_CHK            | VARCHAR2(1 char)   | 是否與名單相似                       |    |
|     | CFMST_PUSH_FLAG           | VARCHAR2(1 char)   | 是否需推撥                         |    |
|     | CFMST_COPR_CUST           | VARCHAR2(1 char)   | 企金客群                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFNONAGE
#### 未成年客戶資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CFNAG_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFNAG_CUST_NAME           | VARCHAR2(40 char)  | 客戶姓名                          |    |
|     | CFNAG_BIRTHDAY            | DATE               | 出生年月日                         |    |
|     | CFNAG_AGE_ID_CODE_1       | VARCHAR2(11 char)  | 第一法定代理人統一編號                   |    |
|     | CFNAG_AGE_NAME_1          | VARCHAR2(30 char)  | 第一法定代理人姓名                     |    |
|     | CFNAG_AGE_ID_CODE_2       | VARCHAR2(11 char)  | 第二法定代理人統一編號                   |    |
|     | CFNAG_AGE_NAME_2          | VARCHAR2(30 char)  | 第二法定代理人姓名                     |    |
|     | CFNAG_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFNAG_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFNAG_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFNAG_GUARD_FLAG          | VARCHAR2(1 char)   | 監護類別旗標                        |    |
|     | CFNAG_FILLER              | VARCHAR2(30 char)  | 保留位                           |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFPINFST
#### 客戶個資註記記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFPIS_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
| PK  | CFPIS_APPL_DATE           | DATE               | 申請日期                          |    |
| PK  | CFPIS_APPL_NO             | VARCHAR2(20 char)  | 申請書編號                         |    |
|     | CFPIS_APPL_TIME           | VARCHAR2(6 char)   | 申請時間                          |    |
| PK  | CFPIS_REQ_ITEM            | VARCHAR2(2 char)   | 個資註記請求事項                      |    |
|     | CFPIS_REQ_ITEM_STAT       | VARCHAR2(1 char)   | 請求事項狀態                        |    |
|     | CFPIS_RESP_DATE           | DATE               | 回覆日期                          |    |
|     | CFPIS_RLS_DATE            | DATE               | 解除日期                          |    |
|     | CFPIS_CUST_NAME           | VARCHAR2(40 char)  | 客戶姓名                          |    |
|     | CFPIS_RLS_TIME            | VARCHAR2(6 char)   | 解除時間                          |    |
|     | CFPIS_CHG_BR_CODE         | VARCHAR2(4 char)   | 設定單位                          |    |
|     | CFPIS_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFPIS_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFPIS_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFPIS_CHG_SUP             | VARCHAR2(6 char)   | 異動主管                          |    |
|     | CFPIS_RLS_TLR             | VARCHAR2(6 char)   | 解除櫃員                          |    |
|     | CFPIS_RLS_SUP_CODE        | VARCHAR2(6 char)   | 解除主管代號                        |    |
|     | CFPIS_MEMO                | VARCHAR2(50 char)  | 備註                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRATING
#### 客戶信用評等資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRAT_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFRAT_LN_RATING           | VARCHAR2(1 char)   | 內部授信評等(綜合風險指標)                |    |
|     | CFRAT_RATING_CPNY1        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LON1         | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT1       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE1        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_RATING_CPNY2        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LONG2        | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT2       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE2        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_RATING_CPNY3        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LONG3        | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT3       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE3        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_RATING_CPNY4        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LONG4        | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT4       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE4        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_RATING_CPNY5        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LONG5        | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT5       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE5        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_RATING_CPNY6        | VARCHAR2(2 char)   | 信用評等公司                        |    |
|     | CFRAT_RATING_LONG6        | VARCHAR2(12 char)  | 信用評等_長期                       |    |
|     | CFRAT_RATING_SHORT6       | VARCHAR2(12 char)  | 信用評等_短期                       |    |
|     | CFRAT_RATING_DATE6        | DATE               | 信用評等_日期                       |    |
|     | CFRAT_CRT_BR              | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFRAT_CRT_TLR             | VARCHAR2(6 char)   | 建檔櫃員                          |    |
|     | CFRAT_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFRAT_CHG_BR              | VARCHAR2(4 char)   | 最後資料維護單位                      |    |
|     | CFRAT_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFRAT_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFRAT_HONOR_RATING        | VARCHAR2(1 char)   | 內部信用評等(財務風險指標)                |    |
|     | CFRAT_INDUSTRY_CODE       | VARCHAR2(2 char)   | 產業別                           |    |
|     | CFRAT_TCRI_CODE           | VARCHAR2(1 char)   | 經濟新報評等                        |    |
|     | CFRAT_CUST_KIND           | VARCHAR2(2 char)   | 衍生性商品客戶屬性                     |    |
|     | CFRAT_INVEST_KIND         | VARCHAR2(2 char)   | 衍生性商品投資屬性                     |    |
|     | CFRAT_DATA_DATE           | DATE               | 衍生性商品資料日期                     |    |
|     | CFRAT_CORP_REP_ID         | VARCHAR2(11 char)  | 法人代行職務之自然人統編                  |    |
|     | CFRAT_CORP_REP_NAME       | VARCHAR2(20 char)  | 法人代行職務之自然人姓名                  |    |
|     | CFRAT_CORP_REP_BIRTHDAY   | DATE               | 法人代行職務之自然人出生日期                |    |
|     | CFRAT_INVEST_KIND_1       | VARCHAR2(2 char)   | 組合式商品投資屬性                     |    |
|     | CFRAT_DATA_DATE_1         | DATE               | 組合式商品資料日期                     |    |
|     | CFRAT_FILLER              | VARCHAR2(3 char)   | 保留欄位                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFREFUSE
#### 客戶個資利用-業務行銷通記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRFS_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
| PK  | CFRFS_CUST_TYPE           | VARCHAR2(1 char)   | 客戶類別                          |    |
|     | CFRFS_AGREE_STAT          | VARCHAR2(1 char)   | 客戶個資利用_業務行銷狀況                 |    |
|     | CFRFS_TEL_REFUSE_FLAG     | VARCHAR2(1 char)   | 電話_業務行銷狀態                     |    |
|     | CFRFS_FAX_REFUSE_FLAG     | VARCHAR2(1 char)   | 傳真_業務行銷狀態                     |    |
|     | CFRFS_MSG_REFUSE_FLAG     | VARCHAR2(1 char)   | 簡訊_業務行銷狀態                     |    |
|     | CFRFS_MAIL_REFUSE_FLAG    | VARCHAR2(1 char)   | 電子郵件_業務行銷狀態                   |    |
|     | CFRFS_ADV_REFUSE_FLAG     | VARCHAR2(1 char)   | 廣告_業務行銷狀態                     |    |
|     | CFRFS_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFRFS_CRT_TIME            | VARCHAR2(6 char)   | 建檔時間                          |    |
|     | CFRFS_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔單位                          |    |
|     | CFRFS_CHG_BR_CODE         | VARCHAR2(4 char)   | 異動單位                          |    |
|     | CFRFS_AGREE_DATE          | DATE               | 同意日期                          |    |
|     | CFRFS_DISAGREE_DATE       | DATE               | 不同意日期                         |    |
|     | CFRFS_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFRFS_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFRFS_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFRFS_CHG_SUP             | VARCHAR2(6 char)   | 異動主管                          |    |
|     | CFRFS_APPL_ROUTE          | VARCHAR2(1 char)   | 受理方式                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRELATE
#### 客戶相關資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFREL_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
|     | CFREL_EDUCATION_LEVEL     | VARCHAR2(1 char)   | 教育程度                          |    |
|     | CFREL_JOB_CODE            | VARCHAR2(2 char)   | 職業別                           |    |
|     | CFREL_BUSI_TITLE          | VARCHAR2(20 char)  | 職稱                            |    |
|     | CFREL_IN_CPNY_DATE        | DATE               | 到職日                           |    |
|     | CFREL_YEAR_SAL            | NUMBER(5,0)        | 年薪                            |    |
|     | CFREL_CPNY_TAX_ID         | VARCHAR2(11 char)  | 服務公司統編                        |    |
|     | CFREL_SERVICE_CPNY        | VARCHAR2(20 char)  | 服務公司                          |    |
|     | CFREL_MAJOR_BANK          | VARCHAR2(3 char)   | 主要往來銀行                        |    |
|     | CFREL_OTHER_BANK_BAL      | NUMBER(5,0)        | 其他銀行存款                        |    |
|     | CFREL_REALTY_PRICE        | NUMBER(5,0)        | 擁有不動產市值                       |    |
|     | CFREL_INVEST_KIND         | VARCHAR2(1 char)   | 投資屬性                          |    |
|     | CFREL_STK_BAL             | NUMBER(5,0)        | 投資股票價值                        |    |
|     | CFREL_FUND_BAL            | NUMBER(5,0)        | 投資基金價值                        |    |
|     | CFREL_LIVE_STAT           | VARCHAR2(1 char)   | 居住狀況                          |    |
|     | CFREL_MOVE_IN_YEAR        | NUMBER(4,0)        | 住屋資料(遷入年)                     |    |
|     | CFREL_OWNER_CODE          | VARCHAR2(1 char)   | 住屋資料(所有人)                     |    |
|     | CFREL_HOUSE_LEND_BANK     | VARCHAR2(3 char)   | 房屋貸款銀行                        |    |
|     | CFREL_EACH_PAY_BAL        | NUMBER(5,0)        | 每期還款金額                        |    |
|     | CFREL_LEND_BAL            | NUMBER(5,0)        | 其他借款融資                        |    |
|     | CFREL_LEND_BANK           | VARCHAR2(3 char)   | 借款往來銀行                        |    |
|     | CFREL_INSUR_TYPE          | VARCHAR2(1 char)   | 壽險類別                          |    |
|     | CFREL_SAFE_YEAR_PAY       | NUMBER(5,0)        | 保險年繳保費                        |    |
|     | CFREL_SEND_DM_ROUTE       | VARCHAR2(1 char)   | DM寄送註記                        |    |
|     | CFREL_FAITH               | VARCHAR2(1 char)   | 宗教信仰                          |    |
|     | CFREL_FAMILY_TTL          | NUMBER(2,0)        | 家庭人數                          |    |
|     | CFREL_YEAR_INCOME         | NUMBER(5,0)        | 家庭總收入                         |    |
|     | CFREL_FAMILY_NAME_1       | VARCHAR2(20 char)  | 家人姓名1                         |    |
|     | CFREL_FAMILY_TITLE_1      | VARCHAR2(6 char)   | 稱謂1                           |    |
|     | CFREL_FAMILY_BIRTH_1      | DATE               | 出生日期1                         |    |
|     | CFREL_FAMILY_NAME_2       | VARCHAR2(20 char)  | 家人姓名2                         |    |
|     | CFREL_FAMILY_TITLE_2      | VARCHAR2(6 char)   | 稱謂2                           |    |
|     | CFREL_FAMILY_BIRTH_2      | DATE               | 出生日期2                         |    |
|     | CFREL_FAMILY_NAME_3       | VARCHAR2(20 char)  | 家人姓名3                         |    |
|     | CFREL_FAMILY_TITLE_3      | VARCHAR2(6 char)   | 稱謂3                           |    |
|     | CFREL_FAMILY_BIRTH_3      | DATE               | 出生日期3                         |    |
|     | CFREL_FAMILY_NAME_4       | VARCHAR2(20 char)  | 家人姓名4                         |    |
|     | CFREL_FAMILY_TITLE_4      | VARCHAR2(6 char)   | 稱謂4                           |    |
|     | CFREL_FAMILY_BIRTH_4      | DATE               | 出生日期4                         |    |
|     | CFREL_CHG_DATE            | DATE               | 最後異動日期                        |    |
|     | CFREL_CHG_TIME            | VARCHAR2(6 char)   | 最後異動時間                        |    |
|     | CFREL_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFREL_BINS_CODE           | VARCHAR2(6 char)   | 服務公司行業別                       |    |
|     | CFREL_JOB_FLAG            | VARCHAR2(1 char)   | 特殊職業註記                        |    |
|     | CFREL_CHK_FLAG            | VARCHAR2(1 char)   | 建檔或維護旗標                       |    |
|     | CFREL_JUNIOR_HIGH_SCHOOL  | VARCHAR2(20 char)  | 國小畢業學校名稱                      |    |
|     | CFREL_JOB_OTHER           | VARCHAR2(14 char)  | 其他_職業別                        |    |
|     | CFREL_UM_AMT              | VARCHAR2(1 char)   | 預估每月交易金額(新臺幣)                 |    |
|     | CFREL_FR_PPS              | VARCHAR2(1 char)   | 外國人士居留目的                      |    |
|     | CFREL_FR_PPS_Z_KEYIN      | VARCHAR2(10 char)  | 外國人士居留目的                      |    |
|     | CFREL_INCOME_ITEM         | VARCHAR2(7 char)   | 財富或主要收入來源(7項)(0否_1是)          |    |
|     | CFREL_INCOME_Z_KEYIN      | VARCHAR2(12 char)  | 財富或主要收入來源Z:其他                 |    |
|     | CFREL_ADD_FAR             | VARCHAR2(1 char)   | 留存地址與分行相距過遠而無法提出合理說明          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRISK1
#### 風管資料檔(一)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRSK_ID                  | VARCHAR2(20 char)  | 風管ID(身分證號、任職公司統編、電話號碼)        |    |
| PK  | CFRSK_RISK_DATE           | VARCHAR2(8 char)   | 風管日期                          |    |
| PK  | CFRSK_SEQ_NO              | NUMBER(7,0)        | 流水序號                          |    |
|     | CFRSK_REC_TYPE            | VARCHAR2(1 char)   | 記錄類別                          |    |
|     | CFRSK_RISK_TYPE           | VARCHAR2(2 char)   | 風管／通報類別                       |    |
|     | CFRSK_ERR_REASON          | VARCHAR2(2 char)   | 異常原因                          |    |
|     | CFRSK_NUM_TYPE            | VARCHAR2(1 char)   | 事故號碼類別                        |    |
|     | CFRSK_RISK_NUMBER         | VARCHAR2(20 char)  | 事故號碼                          |    |
|     | CFRSK_DATA_SOURCE         | VARCHAR2(2 char)   | 資料來源                          |    |
|     | CFRSK_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔部別                          |    |
|     | CFRSK_CUST_NAME           | VARCHAR2(20 char)  | 客戶姓名                          |    |
|     | CFRSK_MEMO                | VARCHAR2(100 char) | 風管原因(異常理由、退件原因)               |    |
|     | CFRSK_REC_STAT            | VARCHAR2(1 char)   | 記錄狀況                          |    |
|     | CFRSK_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFRSK_CLS_DATE            | DATE               | 解除日期                          |    |
|     | CFRSK_CLS_BR_CODE         | VARCHAR2(4 char)   | 解除單位                          |    |
|     | CFRSK_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFRSK_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFRSK_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFRSK_BANK_CODE           | VARCHAR2(3 char)   | 通報金融機構                        |    |
|     | CFRSK_FILLER              | VARCHAR2(25 char)  | 保留                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRISK2
#### 風管資料檔(二)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRSK_ID                  | VARCHAR2(20 char)  | 風管ID(身分證號、任職公司統編、電話號碼)        |    |
| PK  | CFRSK_RISK_DATE           | VARCHAR2(8 char)   | 風管日期                          |    |
| PK  | CFRSK_SEQ_NO              | NUMBER(7,0)        | 流水序號                          |    |
|     | CFRSK_REC_TYPE            | VARCHAR2(1 char)   | 記錄類別                          |    |
|     | CFRSK_RISK_TYPE           | VARCHAR2(2 char)   | 風管／通報類別                       |    |
|     | CFRSK_ERR_REASON          | VARCHAR2(2 char)   | 異常原因                          |    |
|     | CFRSK_NUM_TYPE            | VARCHAR2(1 char)   | 事故號碼類別                        |    |
|     | CFRSK_RISK_NUMBER         | VARCHAR2(20 char)  | 事故號碼                          |    |
|     | CFRSK_DATA_SOURCE         | VARCHAR2(2 char)   | 資料來源                          |    |
|     | CFRSK_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔部別                          |    |
|     | CFRSK_CUST_NAME           | VARCHAR2(20 char)  | 客戶姓名                          |    |
|     | CFRSK_MEMO                | VARCHAR2(100 char) | 風管原因(異常理由、退件原因)               |    |
|     | CFRSK_REC_STAT            | VARCHAR2(1 char)   | 記錄狀況                          |    |
|     | CFRSK_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFRSK_CLS_DATE            | DATE               | 解除日期                          |    |
|     | CFRSK_CLS_BR_CODE         | VARCHAR2(4 char)   | 解除單位                          |    |
|     | CFRSK_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFRSK_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFRSK_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFRSK_BANK_CODE           | VARCHAR2(3 char)   | 通報金融機構                        |    |
|     | CFRSK_FILLER              | VARCHAR2(25 char)  | 保留                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRISK3
#### 風管資料檔(三)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRSK_ID                  | VARCHAR2(20 char)  | 風管ID(身分證號、任職公司統編、電話號碼)        |    |
| PK  | CFRSK_RISK_DATE           | VARCHAR2(8 char)   | 風管日期                          |    |
| PK  | CFRSK_SEQ_NO              | NUMBER(7,0)        | 流水序號                          |    |
|     | CFRSK_REC_TYPE            | VARCHAR2(1 char)   | 記錄類別                          |    |
|     | CFRSK_RISK_TYPE           | VARCHAR2(2 char)   | 風管／通報類別                       |    |
|     | CFRSK_ERR_REASON          | VARCHAR2(2 char)   | 異常原因                          |    |
|     | CFRSK_NUM_TYPE            | VARCHAR2(1 char)   | 事故號碼類別                        |    |
|     | CFRSK_RISK_NUMBER         | VARCHAR2(20 char)  | 台外幣新舊帳號比對                     |    |
|     | CFRSK_DATA_SOURCE         | VARCHAR2(2 char)   | 資料來源                          |    |
|     | CFRSK_CRT_BR_CODE         | VARCHAR2(4 char)   | 建檔部別                          |    |
|     | CFRSK_CUST_NAME           | VARCHAR2(20 char)  | 客戶姓名                          |    |
|     | CFRSK_MEMO                | VARCHAR2(100 char) | 風管原因(異常理由、退件原因)               |    |
|     | CFRSK_REC_STAT            | VARCHAR2(1 char)   | 記錄狀況                          |    |
|     | CFRSK_CRT_DATE            | DATE               | 建檔日期                          |    |
|     | CFRSK_CLS_DATE            | DATE               | 解除日期                          |    |
|     | CFRSK_CLS_BR_CODE         | VARCHAR2(4 char)   | 解除單位                          |    |
|     | CFRSK_CHG_DATE            | DATE               | 異動日期                          |    |
|     | CFRSK_CHG_TIME            | VARCHAR2(6 char)   | 異動時間                          |    |
|     | CFRSK_CHG_TLR             | VARCHAR2(6 char)   | 異動櫃員                          |    |
|     | CFRSK_BANK_CODE           | VARCHAR2(3 char)   | 通報金融機構                        |    |
|     | CFRSK_FILLER              | VARCHAR2(25 char)  | 保留                            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |    |
### VW_ODS_D_CFRPC
#### 客戶關係人失效檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CFRPC_ID_CODE             | VARCHAR2(11 char)  | 統一編號                          |    |
| PK  | CFRPC_REL_TYPE            | VARCHAR2(3 char)   | 關係人類型                         |    |
| PK  | CFRPC_SEQ_NO              | VARCHAR2(3 char)   | 序號                            |    |
|     | CFRPC_ID_TYPE             | VARCHAR2(1 char)   | 證件類型                          |    |
| PK  | CFRPC_ID_NO               | VARCHAR2(20 char)  | 證件號碼                          |    |
|     | CFRPC_ID_NAME             | VARCHAR2(70 char)  | 姓名                            |    |
|     | CFRPC_BIRTHDAY            | DATE               | 出生日期                          |    |
|     | CFRPC_CY_CODE             | VARCHAR2(2 char)   | 國籍                            |    |
|     | CFRPC_STATUS              | VARCHAR2(1 char)   | 狀態                            |    |
| PK  | CFRPC_OPEN_DATE           | DATE               | 建檔日期                          |    |
|     | CFRPC_CLS_DATE            | DATE               | 失效日期                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                        |