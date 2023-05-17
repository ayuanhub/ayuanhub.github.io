---
sidebar_position: 9
title: 台幣核心系統-自動化(CSAT)
---

### VW_ODS_D_ATALAPL
#### 悠遊卡帳戶連結設定檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATALA_CARD_NO                  | VARCHAR2(20 char) | 悠遊卡卡號                                          |    |
|     | ATALA_ACC_ID_NO                | VARCHAR2(13 char) | 存款帳號                                           |    |
|     | ATALA_ID_CODE                  | VARCHAR2(11 char) | 持卡人統編                                          |    |
|     | ATALA_NOW_STAT                 | VARCHAR2(2 char)  | 目前狀態                                           |    |
|     | ATALA_SELF_FLAG                | VARCHAR2(1 char)  | 是否為本人                                          |    |
|     | ATALA_APPLY_BR_CODE            | VARCHAR2(4 char)  | 申請分行                                           |    |
|     | ATALA_APPLY_DATE               | DATE              | 申請日期                                           |    |
|     | ATALA_USED_DATE                | DATE              | 啟用日期                                           |    |
|     | ATALA_CHG_DATE                 | DATE              | 異動日期                                           |    |
|     | ATALA_CHG_TIME                 | VARCHAR2(6 char)  | 異動時間                                           |    |
|     | ATALA_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATALA_CARD_NAME                | VARCHAR2(16 char) | 悠遊卡暱稱                                          |    |
|     | ATALA_CHANNEL                  | VARCHAR2(2 char)  | 通路                                             |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATCREDIT
#### 信用卡戶ID檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATCRE_ID_CODE                  | VARCHAR2(19 char) | 稅籍號碼                                           |    |
|     | ATCRE_OPEN_DATE                | DATE              | 開戶日期                                           |    |
|     | ATCRE_REVOLVE_AMT              | NUMBER(4,0)       | 額度                                             |    |
|     | ATCRE_BAL_SIGN                 | VARCHAR2(1 char)  | 帳上欠款符號                                         |    |
|     | ATCRE_BAL                      | NUMBER(10,0)      | 帳上欠款                                           |    |
|     | ATCRE_AUTOTRAN_DD              | VARCHAR2(2 char)  | 自動扣繳帳號建檔日期,DD                                  |    |
|     | ATCRE_RELATED_FLAG             | VARCHAR2(1 char)  | 關係戶註記                                          |    |
|     | ATCRE_ISSUE_DATE               | DATE              | 歸戶建檔日                                          |    |
|     | ATCRE_SHOP_FLAG                | VARCHAR2(1 char)  | 是否有申請消費性貸款                                     |    |
|     | ATCRE_ACTIVE_FLAG              | VARCHAR2(1 char)  | 活卡註記                                           |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATCUSTER
#### 自動化客戶管理檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATCST_ID_CODE                  | VARCHAR2(11 char) | 統編                                             |    |
|     | ATCST_NOW_STAT                 | VARCHAR2(2 char)  | 目前狀態                                           |    |
|     | ATCST_LAST_STAT                | VARCHAR2(2 char)  | 前次狀態                                           |    |
|     | ATCST_APPLY_ITEM               | VARCHAR2(20 char) | 申請項目                                           |    |
|     | ATCST_APPLY_BR_CODE            | VARCHAR2(4 char)  | 申請單位                                           |    |
|     | ATCST_CHG_BR_CODE              | VARCHAR2(4 char)  | 異動單位                                           |    |
|     | ATCST_PASSWD                   | VARCHAR2(8 char)  | 理財密碼                                           |    |
|     | ATCST_PASSWD_ERR_TIMES         | NUMBER(1,0)       | 密碼錯誤次數                                         |    |
|     | ATCST_IDENT_DATE               | DATE              | 申請日期                                           |    |
|     | ATCST_CHG_DATE                 | DATE              | 異動日期                                           |    |
|     | ATCST_PWD_DATE                 | VARCHAR2(32 char) | 保留日期                                           |    |
|     | ATCST_CHG_TIME                 | VARCHAR2(6 char)  | 異動時間                                           |    |
|     | ATCST_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATCST_CA_USE                   | NUMBER(1,0)       | 首次登入成功                                         |    |
|     | ATCST_CHG_PWD                  | VARCHAR2(1 char)  | 新戶重設戶已改密碼否                                     |    |
|     | ATCST_APPLY_PHONE              | VARCHAR2(1 char)  | 是否已申請行動網銀                                      |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATFEESET
#### 手續費優惠檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATSET_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                                             |    |
|     | ATSET_TXN_KIND                 | VARCHAR2(2 char)  | 優惠來源                                           |    |
|     | ATSET_NOW_STAT                 | NUMBER(1,0)       | 狀態                                             |    |
|     | ATSET_BEG_DATE                 | DATE              | 生效日期                                           |    |
|     | ATSET_END_DATE                 | DATE              | 失效日期                                           |    |
|     | ATSET_BUIL_DATE                | DATE              | 建檔日期_第一次產生日期                                   |    |
|     | ATSET_CHG_DATE                 | DATE              | 最近更新日                                          |    |
|     | ATSET_FEE_STANDARD             | NUMBER(1,0)       | 優惠類別                                           |    |
|     | ATSET_WDW_FEE_FREE_CNT         | NUMBER(4,0)       | 提款手續費優惠次數                                      |    |
|     | ATSET_TRAN_FEE_FREE_CNT        | NUMBER(4,0)       | 轉帳手續費優惠次數                                      |    |
|     | ATSET_WDW_FEE_FREE_TIME        | NUMBER(4,0)       | 提款手續費已優惠次數                                     |    |
|     | ATSET_TRAN_FEE_FREE_TIME       | NUMBER(4,0)       | 轉帳手續費已優惠次數                                     |    |
|     | ATSET_CUST_ID                  | VARCHAR2(7 char)  | 委託單位代號                                         |    |
|     | ATSET_LAST_DATE                | DATE              | 最後優惠日                                          |    |
|     | ATSET_WDW_FEE_FREE_P1          | NUMBER(4,0)       | 提款手續費優惠次數_優惠活動1                                |    |
|     | ATSET_TRAN_FEE_FREE_P1         | NUMBER(4,0)       | 轉帳手續費優惠次數_優惠活動1                                |    |
|     | ATSET_WDW_FEE_FREE_TIP1        | NUMBER(4,0)       | 提款手續費已優惠次數_優惠活動1                               |    |
|     | ATSET_TRAN_FEE_FREE_TIP1       | NUMBER(4,0)       | 轉帳手續費已優惠次數_優惠活動1                               |    |
|     | ATSET_P_BEGIN_DATE_1           | DATE              | 活動開始日_1                                        |    |
|     | ATSET_P_END_DATE_1             | DATE              | 活動到期日1                                         |    |
|     | ATSET_WDW_FEE_FREE_P2          | NUMBER(4,0)       | 提款手續費優惠次數_優惠活動2                                |    |
|     | ATSET_TRAN_FEE_FREE_P2         | NUMBER(4,0)       | 轉帳手續費優惠次數_優惠活動2                                |    |
|     | ATSET_WDW_FEE_FREE_TIP2        | NUMBER(4,0)       | 提款手續費已優惠次數_優惠活動2                               |    |
|     | ATSET_TRAN_FEE_FREE_TIP2       | NUMBER(4,0)       | 轉帳手續費已優惠次數_優惠活動2                               |    |
|     | ATSET_P_BEGIN_DATE_2           | DATE              | 活動開始日_2                                        |    |
|     | ATSET_P_END_DATE_2             | DATE              | 活動到期日2                                         |    |
|     | ATSET_WDW_FEE_FREE_P3          | NUMBER(4,0)       | 提款手續費優惠次數_優惠活動3                                |    |
|     | ATSET_TRAN_FEE_FREE_P3         | NUMBER(4,0)       | 轉帳手續費優惠次數_優惠活動3                                |    |
|     | ATSET_WDW_FEE_FREE_TIP3        | NUMBER(4,0)       | 提款手續費已優惠次數_優惠活動3                               |    |
|     | ATSET_TRAN_FEE_FREE_TIP3       | NUMBER(4,0)       | 轉帳手續費已優惠次數_優惠活動3                               |    |
|     | ATSET_P_BEGIN_DATE_3           | DATE              | 活動開始日_3                                        |    |
|     | ATSET_P_END_DATE_3             | DATE              | 活動到期日3                                         |    |
|     | ATSET_WDW_FEE_FREE_P4          | NUMBER(4,0)       | 提款手續費優惠次數_優惠活動4                                |    |
|     | ATSET_TRAN_FEE_FREE_P4         | NUMBER(4,0)       | 轉帳手續費優惠次數_優惠活動4                                |    |
|     | ATSET_WDW_FEE_FREE_TIP4        | NUMBER(4,0)       | 提款手續費已優惠次數_優惠活動4                               |    |
|     | ATSET_TRAN_FEE_FREE_TIP4       | NUMBER(4,0)       | 轉帳手續費已優惠次數_優惠活動4                               |    |
|     | ATSET_P_BEGIN_DATE_4           | DATE              | 活動開始日_4                                        |    |
|     | ATSET_P_END_DATE_4             | DATE              | 活動到期日4                                         |    |
|     | ATSET_WDW_FEE_FREE_P5          | NUMBER(4,0)       | 提款手續費優惠次數_優惠活動5                                |    |
|     | ATSET_TRAN_FEE_FREE_P5         | NUMBER(4,0)       | 轉帳手續費優惠次數_優惠活動5                                |    |
|     | ATSET_WDW_FEE_FREE_TIP5        | NUMBER(4,0)       | 提款手續費已優惠次數_優惠活動5                               |    |
|     | ATSET_TRAN_FEE_FREE_TIP5       | NUMBER(4,0)       | 轉帳手續費已優惠次數_優惠活動5                               |    |
|     | ATSET_P_BEGIN_DATE_5           | DATE              | 活動開始日_5                                        |    |
|     | ATSET_P_END_DATE_5             | DATE              | 活動到期日5                                         |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATMASTER
#### 自動化管理檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATMST_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                                             |    |
| PK  | ATMST_IDENT_KIND               | VARCHAR2(2 char)  | 申請類別                                           |    |
| PK  | ATMST_CARD_CODE                | VARCHAR2(1 char)  | 卡別                                             |    |
|     | ATMST_IVR_PWD_FLAG             | NUMBER(1,0)       | 語音密碼註記                                         |    |
|     | ATMST_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬分行                                         |    |
|     | ATMST_CARD_FORMAT              | VARCHAR2(2 char)  | 卡片版本                                           |    |
|     | ATMST_BUSI_CODE                | VARCHAR2(2 char)  | 業務別                                            |    |
|     | ATMST_CARD_SEQ_NO              | VARCHAR2(7 char)  | 優惠類別                                           |    |
|     | ATMST_ID_CODE                  | VARCHAR2(11 char) | 統一編號                                           |    |
|     | ATMST_IDENT_DATE               | DATE              | 申請日期                                           |    |
|     | ATMST_MAKE_DATE                | DATE              | 製卡日期or憑証申請日期                                   |    |
|     | ATMST_USE_DATE                 | DATE              | 優惠類別                                           |    |
|     | ATMST_CHG_DATE                 | DATE              | 異動日期                                           |    |
|     | ATMST_CHG_TIME                 | VARCHAR2(6 char)  | 異動時間                                           |    |
|     | ATMST_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATMST_NOW_STAT                 | VARCHAR2(2 char)  | 目前狀態                                           |    |
|     | ATMST_LAST_STAT                | VARCHAR2(2 char)  | 前次狀態                                           |    |
|     | ATMST_ATM_APPLY_ITEM           | VARCHAR2(10 char) | 優惠類別                                           |    |
|     | ATMST_FEE_STANDARD             | VARCHAR2(1 char)  | 手續費收取標準                                        |    |
|     | ATMST_WDW_FEE                  | NUMBER(6,2)       | 優惠類別                                           |    |
|     | ATMST_TRAN_FEE                 | NUMBER(6,2)       | 優惠類別                                           |    |
|     | ATMST_WDW_FEE_FREE_TIME_LIMIT  | NUMBER(2,0)       | 提款手續費優惠次數                                      |    |
|     | ATMST_TRAN_FEE_FREE_TIME_LIMIT | NUMBER(2,0)       | 轉帳手續費優惠次數                                      |    |
|     | ATMST_WDW_FEE_FREE_TIME        | NUMBER(2,0)       | 提款手續費已優惠次數                                     |    |
|     | ATMST_TRAN_FEE_FREE_TIME       | NUMBER(2,0)       | 轉帳手續費已優惠次數                                     |    |
|     | ATMST_WDW_AMT_LIMIT            | NUMBER(15,2)      | 約定提款限額                                         |    |
|     | ATMST_TRAN_AMT_LIMIT           | NUMBER(15,2)      | 約定轉帳限額                                         |    |
|     | ATMST_WDW_AMT_TTL              | NUMBER(15,2)      | 當日提款累計金額                                       |    |
|     | ATMST_TRAN_AMT_TTL             | NUMBER(15,2)      | 當日約定轉帳累計金額                                     |    |
|     | ATMST_NOT_CON_TRAN_AMT_TTL     | NUMBER(15,2)      | 當日未約定轉帳累計金額                                    |    |
|     | ATMST_ND_WDW_AMT_TTL           | VARCHAR2(15 char) | 優惠類別                                           |    |
|     | ATMST_ND_TRAN_AMT_TTL          | VARCHAR2(15 char) | 優惠類別                                           |    |
|     | ATMST_ND_NOT_CON_TRAN_AMT_TTL  | NUMBER(15,2)      | 優惠類別                                           |    |
|     | ATMST_PASSWD                   | VARCHAR2(8 char)  | 優惠類別                                           |    |
|     | ATMST_PASSWD_ERR_TIMES         | NUMBER(1,0)       | 密碼錯誤次數                                         |    |
|     | ATMST_PASSWD_ERR_TIME          | NUMBER(1,0)       | 國際提款密碼錯誤次數                                     |    |
|     | ATMST_FILLER                   | VARCHAR2(4 char)  | 空白                                             |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATRECORD
#### 自動化交易記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATREC_TXN_SEQ_NO               | VARCHAR2(17 char) | 中心交易序號                                         |    |
|     | ATREC_CHANNEL_CODE             | VARCHAR2(2 char)  | 交易通路                                           |    |
|     | ATREC_HOST_SEQ_NO              | VARCHAR2(7 char)  | 啟動主機交易序號                                       |    |
|     | ATREC_FISC_STAN_NO             | VARCHAR2(10 char) | 金資交易序號                                         |    |
| PK  | ATREC_BUSI_DATE                | DATE              | 記帳日期                                           |    |
|     | ATREC_TXN_DATE                 | DATE              | 交易日期                                           |    |
|     | ATREC_FISC_DATE                | DATE              | 金資記帳日                                          |    |
|     | ATREC_TXN_TIME                 | VARCHAR2(6 char)  | 交易時間                                           |    |
|     | ATREC_FISC_MODE                | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATREC_TXN_ID_CODE              | VARCHAR2(5 char)  | 中心交易代號                                         |    |
|     | ATREC_ATMP_TXN_CODE            | VARCHAR2(3 char)  | ATMP交易代號                                       |    |
|     | ATREC_TM_CODE                  | VARCHAR2(8 char)  | 端末機代號                                          |    |
|     | ATREC_TXN_KIND                 | VARCHAR2(4 char)  | 交易類別                                           |    |
|     | ATREC_TXN_STAT                 | NUMBER(1,0)       | 優惠類別                                           |    |
|     | ATREC_DBCR_CODE                | VARCHAR2(1 char)  | 借貸別                                            |    |
|     | ATREC_TXN_TYPE                 | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATREC_ATM_BANK_CODE            | VARCHAR2(4 char)  | 優惠類別                                           |    |
|     | ATREC_SEND_BANK_INFO           | VARCHAR2(7 char)  | 交易發送行                                          |    |
|     | ATREC_RCV_BANK_INFO            | VARCHAR2(7 char)  | 接收發送行                                          |    |
|     | ATREC_CARD_ACC_ID_NO           | VARCHAR2(19 char) | 持卡帳號                                           |    |
|     | ATREC_TFO_BR_CODE              | VARCHAR2(4 char)  | 出帳帳號所屬行                                        |    |
|     | ATREC_TFO_ACC_ID_NO            | VARCHAR2(19 char) | 出帳帳號                                           |    |
|     | ATREC_TFI_BR_CODE              | VARCHAR2(4 char)  | 入帳帳號所屬行                                        |    |
|     | ATREC_TFI_ACC_ID_NO            | VARCHAR2(19 char) | 優惠類別                                           |    |
|     | ATREC_CARD_CODE                | VARCHAR2(1 char)  | 卡別                                             |    |
|     | ATREC_CARD_NO                  | VARCHAR2(1 char)  | 卡號                                             |    |
|     | ATREC_FEE_FLAG                 | VARCHAR2(1 char)  | 手續費收取旗標                                        |    |
|     | ATREC_TXN_AMT                  | NUMBER(13,2)      | 交易金額                                           |    |
|     | ATREC_CHARGE_AMT               | NUMBER(6,2)       | 優惠類別                                           |    |
|     | ATREC_FEE                      | NUMBER(6,2)       | 優惠類別                                           |    |
|     | ATREC_A_AVAILABLE_BAL          | NUMBER(15,2)      | 交易後帳戶餘額                                        |    |
|     | ATREC_A_CURRENT_BAL            | NUMBER(15,2)      | 交易後可用餘額                                        |    |
|     | ATREC_CUST_TYPE                | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATREC_PRD_CODE                 | VARCHAR2(7 char)  | 產品別                                            |    |
|     | ATREC_IC_TXN_SEQ_NO            | VARCHAR2(8 char)  | 晶片卡交易序號                                        |    |
|     | ATREC_IC_MEMO                  | VARCHAR2(60 char) | 晶片卡備註欄                                         |    |
|     | ATREC_DEVICE_DT                | VARCHAR2(14 char) | 交易日期時間                                         |    |
|     | ATREC_DEVICE_TYPE              | VARCHAR2(4 char)  | 優惠類別                                           |    |
|     | ATREC_DEVICE_CHKCD             | VARCHAR2(8 char)  | 端末設備查核碼                                        |    |
|     | ATREC_FISC_PCODE               | VARCHAR2(4 char)  | 財金交易PCODE                                      |    |
|     | ATREC_DESC_DATA                | VARCHAR2(50 char) | 優惠類別                                           |    |
|     | ATREC_FXML_STL_NO              | VARCHAR2(20 char) | FXML金資交易序號                                     |    |
|     | ATREC_FEE_KIND                 | VARCHAR2(2 char)  | 優惠來源                                           |    |
|     | ATREC_FEE_TYPE                 | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATREC_FEE_WDR                  | NUMBER(2,0)       | 優惠跨提次數                                         |    |
|     | ATREC_FEE_TRAN                 | NUMBER(2,0)       | 優惠跨轉次數                                         |    |
|     | ATREC_WDR_TIME                 | NUMBER(2,0)       | 已優惠跨提次數                                        |    |
|     | ATREC_TRAN_TIME                | NUMBER(2,0)       | 已優惠跨轉次數                                        |    |
|     | ATREC_FILLER                   | VARCHAR2(30 char) | 保留位                                            |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATSKBACT
#### 16位全方位代收帳號對照檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATBAC_KEY_NO                   | VARCHAR2(4 char)  | 全方位代收帳號                                        |    |
|     | ATBAC_ACC_ID_NO                | VARCHAR2(13 char) | 實質帳號                                           |    |
|     | ATBAC_CUST_NAME                | VARCHAR2(40 char) | 戶名                                             |    |
|     | ATBAC_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬分行別                                        |    |
|     | ATBAC_BUSI_CODE                | VARCHAR2(2 char)  | 業務別                                            |    |
|     | ATBAC_ID_CODE                  | VARCHAR2(11 char) | 統一編號                                           |    |
|     | ATBAC_APPLY_DATE               | DATE              | 申請日期                                           |    |
|     | ATBAC_CHG_DATE                 | DATE              | 最後異動日期                                         |    |
|     | ATBAC_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATBAC_STAT                     | VARCHAR2(1 char)  | 申請狀態(0:申請,1:暫停,9:終止)_正常取0,1                    |    |
|     | ATBAC_APP_BR_CODE              | VARCHAR2(4 char)  | 申請單位                                           |    |
|     | ATBAC_CREATE_TLR               | VARCHAR2(6 char)  | 建檔人員                                           |    |
|     | ATBAC_CREATE_DATE              | DATE              | 建檔日期                                           |    |
|     | ATBAC_FEE                      | NUMBER(3,0)       | 手續費                                            |    |
|     | ATBAC_LINK_SKL                 | VARCHAR2(1 char)  | 是否連線其他主機                                       |    |
|     | ATBAC_CHK_FLAG                 | VARCHAR2(1 char)  | 有檢號否                                           |    |
|     | ATBAC_CHANNEL_FLAG             | VARCHAR2(1 char)  | 可繳款通路                                          |    |
|     | ATBAC_CHK_AMT                  | NUMBER(1,0)       | 是否檢核金額                                         |    |
|     | ATBAC_ACT_FEE                  | NUMBER(2,0)       | 超商清算手續費                                        |    |
|     | ATBAC_RECV_STORE1              | VARCHAR2(1 char)  | 代收超商(7_11)                                     |    |
|     | ATBAC_RECV_STORE2              | VARCHAR2(1 char)  | 代收超商(FAMILY)                                   |    |
|     | ATBAC_RECV_STORE3              | VARCHAR2(1 char)  | 代收超商(OK)                                       |    |
|     | ATBAC_RECV_STORE4              | VARCHAR2(1 char)  | 代收超商(LIFE)                                     |    |
|     | ATBAC_MART_FEE1                | NUMBER(2,0)       | 分擔超商代收手續費1                                     |    |
|     | ATBAC_MART_FEE2                | NUMBER(2,0)       | 分擔超商代收手續費2                                     |    |
|     | ATBAC_ACT_FEE_PT               | NUMBER(2,0)       | 郵局清算手續費                                        |    |
|     | ATBAC_POST_FEE                 | NUMBER(2,0)       | 分擔郵局代收手續費                                      |    |
|     | ATBAC_HI_FLAG                  | VARCHAR2(1 char)  | 網路平台申請項目(0:否)                                  |    |
|     | ATBAC_HI_FARE                  | NUMBER(3,0)       | 使用網路平台手續費                                      |    |
|     | ATBAC_POST_FLAG                | VARCHAR2(1 char)  | 郵局申請狀態(1:是0:否)                                 |    |
|     | ATBAC_DUE_FLAG                 | VARCHAR2(1 char)  | 是否檢核繳款期限(1:是0:否)                               |    |
|     | ATBAC_TIME_FLAG                | VARCHAR2(1 char)  | 檢核生效期間(1:是0:否)                                 |    |
|     | ATBAC_BEG_DATE                 | DATE              | 生效日期                                           |    |
|     | ATBAC_BEG_TIME                 | VARCHAR2(4 char)  | 生效時間(HHMM)                                     |    |
|     | ATBAC_DUE_DATE                 | DATE              | 失效日期                                           |    |
|     | ATBAC_DUE_TIME                 | VARCHAR2(4 char)  | 失效時間(HHMM)                                     |    |
|     | ATBAC_FUNCTION                 | VARCHAR2(1 char)  | 用途(0一般_1期貨或信託_2代收網_3發送Mail_5代收網及發送Mail_6第三方支付) |    |
|     | ATBAC_ITEM                     | VARCHAR2(15 char) | 代收項目                                           |    |
|     | ATBAC_MART_FEE3                | NUMBER(2,0)       | 分擔超商手續費3                                       |    |
|     | ATBAC_NNET_DATE                | DATE              | 代收網啟用日期                                        |    |
|     | ATBAC_AUTO_FLAG                | VARCHAR2(1 char)  | 自動約定扣款                                         |    |
|     | ATBAC_CUSTID                   | VARCHAR2(7 char)  | 委託單位代號                                         |    |
|     | ATBAC_EB_FLAG                  | VARCHAR2(1 char)  | 全國ｅ繳費                                          |    |
|     | ATBAC_EB_DATE                  | DATE              | 全國ｅ繳費日期                                        |    |
|     | ATBAC_EBFEE_FLAG               | VARCHAR2(1 char)  | 手續費負擔方式                                        |    |
|     | ATBAC_EB_FEE                   | NUMBER(3,0)       | 手續費負擔                                          |    |
|     | ATBAC_ACT_TYPE_EB              | VARCHAR2(1 char)  | 手續費結算方式(1.直接月結2.人工月結3.每筆結)                     |    |
|     | ATBAC_CHK_DUP_FLAG             | VARCHAR2(1 char)  | 是否檢核重覆繳款(1:是0:否)                               |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATSKLIFE
#### 14位全方位代收資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATSKL_KEY_NO                   | VARCHAR2(5 char)  | 全方位代收帳號                                        |    |
|     | ATSKL_ACC_ID_NO                | VARCHAR2(13 char) | 實質帳號                                           |    |
|     | ATSKL_CUST_NAME                | VARCHAR2(40 char) | 戶名                                             |    |
|     | ATSKL_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬分行別                                        |    |
|     | ATSKL_BUSI_CODE                | VARCHAR2(2 char)  | 業務別                                            |    |
|     | ATSKL_ID_CODE                  | VARCHAR2(11 char) | 統一編號                                           |    |
|     | ATSKL_APPLY_DATE               | DATE              | 申請日期                                           |    |
|     | ATSKL_CHG_DATE                 | DATE              | 最後異動日期                                         |    |
|     | ATSKL_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATSKL_STAT                     | VARCHAR2(1 char)  | 申請狀態(0:申請,1:暫停,9:終止)_正常取0,1                    |    |
|     | ATSKL_APP_BR_CODE              | VARCHAR2(4 char)  | 申請單位                                           |    |
|     | ATSKL_CREATE_TLR               | VARCHAR2(6 char)  | 建檔人員                                           |    |
|     | ATSKL_CREATE_DATE              | DATE              | 建檔日期                                           |    |
|     | ATSKL_FEE                      | NUMBER(3,0)       | 手續費                                            |    |
|     | ATSKL_LINK_SKL                 | VARCHAR2(1 char)  | 是否連線其他主機                                       |    |
|     | ATSKL_SEQ_FLAG                 | VARCHAR2(1 char)  | 是否採用序號                                         |    |
|     | ATSKL_CHK_FLAG                 | VARCHAR2(1 char)  | 有檢號否                                           |    |
|     | ATSKL_CHANNEL_FLAG             | VARCHAR2(1 char)  | 可繳款通路                                          |    |
|     | ATSKL_CHK_FILE_FLAG            | VARCHAR2(1 char)  | 是否檢核檔案(AGWAFE___增資檔)                           |    |
|     | ATSKL_CHK_AMT                  | VARCHAR2(1 char)  | 是否檢核金額                                         |    |
|     | ATSKL_CHK_RT                   | VARCHAR2(1 char)  | 是否檢核收款人姓名                                      |    |
|     | ATSKL_ITEM1                    | VARCHAR2(3 char)  | 代收項目1                                          |    |
|     | ATSKL_ITEM2                    | VARCHAR2(3 char)  | 代收項目2                                          |    |
|     | ATSKL_ACT_FEE                  | NUMBER(2,0)       | 超商清算手續費                                        |    |
|     | ATSKL_RECV_STORE1              | VARCHAR2(1 char)  | 代收超收(7_11)                                     |    |
|     | ATSKL_RECV_STORE2              | VARCHAR2(1 char)  | 代收超收(FAMILY)                                   |    |
|     | ATSKL_RECV_STORE3              | VARCHAR2(1 char)  | 代收超收(OK)                                       |    |
|     | ATSKL_RECV_STORE4              | VARCHAR2(1 char)  | 代收超收(LIFE)                                     |    |
|     | ATSKL_MART_FEE1                | NUMBER(2,0)       | 分擔超商代收手續費1                                     |    |
|     | ATSKL_MART_FEE2                | NUMBER(2,0)       | 分擔超商代收手續費2                                     |    |
|     | ATSKL_ACT_FEE_PT               | NUMBER(2,0)       | 郵局清算手續費                                        |    |
|     | ATSKL_POST_FEE                 | NUMBER(2,0)       | 分擔郵局代收手續費                                      |    |
|     | ATSKL_HI_FLAG                  | VARCHAR2(1 char)  | 網路平台申請項目(0:否)                                  |    |
|     | ATSKL_HI_FARE                  | NUMBER(3,0)       | 使用手續費                                          |    |
|     | ATSKL_POST_FLAG                | VARCHAR2(1 char)  | 郵局申請狀態(1:是0:否)                                 |    |
|     | ATSKL_DUE_FLAG                 | VARCHAR2(1 char)  | 是否檢核繳款期限(1:是0:否)                               |    |
|     | ATSKL_TIME_FLAG                | VARCHAR2(1 char)  | 檢核生效期間(1:是0:否)                                 |    |
|     | ATSKL_BEG_DATE                 | DATE              | 生效日期                                           |    |
|     | ATSKL_BEG_TIME                 | VARCHAR2(4 char)  | 生效時間(HHMM)                                     |    |
|     | ATSKL_DUE_DATE                 | DATE              | 失效日期                                           |    |
|     | ATSKL_DUE_TIME                 | VARCHAR2(4 char)  | 失效時間(HHMM)                                     |    |
|     | ATSKL_DEPOSIT_FLAG             | VARCHAR2(1 char)  | 存入零錢                                           |    |
|     | ATSKL_FUNCTION                 | VARCHAR2(1 char)  | 用途(0一般_1期貨或信託_2代收網_3發送Mail_45代收網及發送Mail)       |    |
|     | ATSKL_ITEM3                    | VARCHAR2(3 char)  | 代收項目3                                          |    |
|     | ATSKL_ITEM4                    | VARCHAR2(3 char)  | 代收項目4                                          |    |
|     | ATSKL_ITEM5                    | VARCHAR2(3 char)  | 代收項目5                                          |    |
|     | ATSKL_MART_FEE3                | NUMBER(2,0)       | 分擔超商手續費3                                       |    |
|     | ATSKL_NNET_DATE                | DATE              | 代收網啟用日期                                        |    |
|     | ATSKL_AUTO_FLAG                | VARCHAR2(1 char)  | 自動約定扣款                                         |    |
|     | ATSKL_CUSTID                   | VARCHAR2(7 char)  | 委託單位代號                                         |    |
|     | ATSKL_EB_FLAG                  | VARCHAR2(1 char)  | 全國e繳費                                          |    |
|     | ATSKL_EB_DATE                  | DATE              | 全國e繳費日期                                        |    |
|     | ATSKL_EBFEE_FLAG               | VARCHAR2(1 char)  | 手續費負擔方式                                        |    |
|     | ATSKL_EB_FEE                   | NUMBER(3,0)       | 手續費負擔                                          |    |
|     | ATSKL_ACT_TYPE_EB              | VARCHAR2(1 char)  | 手續費結算方式(1.直接月結2.人工月結3.每筆結)                     |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATTRACT
#### 約定轉帳帳號檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | ATTRA_ACC_ID_NO                | NUMBER(13,0)      | 帳號                                             |    |
|     | ATTRA_ACC_FLAG                 | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATTRA_TRAN_BANK_NO             | VARCHAR2(3 char)  | 約定轉入銀行別                                        |    |
|     | ATTRA_TRAN_ACC_ID_NO           | VARCHAR2(16 char) | 約定轉入帳號                                         |    |
|     | ATTRA_CHIP_FLAG                | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATTRA_CARD_CODE                | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATTRA_ORG_TXN_DATE             | DATE              | 異動日期                                           |    |
|     | ATTRA_CHG_TLR                  | VARCHAR2(6 char)  | 異動櫃員                                           |    |
|     | ATTRA_IV_SEQ                   | NUMBER(3,0)       | 語音播報順序                                         |    |
|     | ATTRA_BRANCH                   | VARCHAR2(4 char)  | 轉入帳號銀行單位別                                      |    |
|     | ATTRA_CHG_BR_CODE              | VARCHAR2(4 char)  | 異動單位                                           |    |
|     | ATTRA_TXN_ID_CODE              | VARCHAR2(5 char)  | 異動交易                                           |    |
|     | ATTRA_RT_FLAG                  | VARCHAR2(1 char)  | 優惠類別                                           |    |
|     | ATTRA_EFF_DATE                 | DATE              | 生效日期                                           |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_ATTXNCAL
#### 自動化交易試算檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ATTXN_BR_CODE                  | VARCHAR2(4 char)  | 單位別                                            |    |
| PK  | ATTXN_ATM_CODE                 | VARCHAR2(6 char)  | 櫃員機代號                                          |    |
|     | ATTXN_CASH_SELF_DB_CNT         | NUMBER(5,0)       | 借方筆數_現金_本行                                     |    |
|     | ATTXN_CASH_SELF_DB_AMT         | NUMBER(15,2)      | 借方金額_現金_本行                                     |    |
|     | ATTXN_CASH_SELF_CR_CNT         | NUMBER(5,0)       | 貸方筆數_現金_本行                                     |    |
|     | ATTXN_CASH_SELF_CR_AMT         | NUMBER(15,2)      | 貸方金額_現金_本行                                     |    |
|     | ATTXN_CASH_SELF_FEE_CNT        | NUMBER(5,0)       | 手續費筆數_現金_本行                                    |    |
|     | ATTXN_CASH_SELF_FEE_AMT        | NUMBER(15,2)      | 手續費金額_現金_本行                                    |    |
|     | ATTXN_CASH_UNION_DB_CNT        | NUMBER(5,0)       | 借方筆數_現金_聯行                                     |    |
|     | ATTXN_CASH_UNION_DB_AMT        | NUMBER(15,2)      | 借方金額_現金_聯行                                     |    |
|     | ATTXN_CASH_UNION_CR_CNT        | NUMBER(5,0)       | 貸方筆數_現金_聯行                                     |    |
|     | ATTXN_CASH_UNION_CR_AMT        | NUMBER(15,2)      | 貸方金額_現金_聯行                                     |    |
|     | ATTXN_CASH_UNION_FEE_CNT       | NUMBER(5,0)       | 手續費筆數_現金_聯行                                    |    |
|     | ATTXN_CASH_UNION_FEE_AMT       | NUMBER(15,2)      | 手續費金額_現金_聯行                                    |    |
|     | ATTXN_CASH_OTHER_DB_CNT        | NUMBER(5,0)       | 借方筆數_現金_他行                                     |    |
|     | ATTXN_CASH_OTHER_DB_AMT        | NUMBER(15,2)      | 借方金額_現金_他行                                     |    |
|     | ATTXN_CASH_OTHER_CR_CNT        | NUMBER(5,0)       | 貸方筆數_現金_他行                                     |    |
|     | ATTXN_CASH_OTHER_CR_AMT        | NUMBER(15,2)      | 貸方金額_現金_他行                                     |    |
|     | ATTXN_CASH_OTHER_FEE_CNT       | NUMBER(5,0)       | 手續費筆數_現金_他行                                    |    |
|     | ATTXN_CASH_OTHER_FEE_AMT       | NUMBER(15,2)      | 手續費金額_現金_他行                                    |    |
|     | ATTXN_TRAN_SELF_DB_CNT         | NUMBER(5,0)       | 借方筆數_轉帳_本行                                     |    |
|     | ATTXN_TRAN_SELF_DB_AMT         | NUMBER(15,2)      | 借方金額_轉帳_本行                                     |    |
|     | ATTXN_TRAN_SELF_CR_CNT         | NUMBER(5,0)       | 貸方筆數_轉帳_本行                                     |    |
|     | ATTXN_TRAN_SELF_CR_AMT         | NUMBER(15,2)      | 貸方金額_轉帳_本行                                     |    |
|     | ATTXN_TRAN_SELF_FEE_CNT        | NUMBER(5,0)       | 手續費筆數_轉帳_本行                                    |    |
|     | ATTXN_TRAN_SELF_FEE_AMT        | NUMBER(15,2)      | 手續費金額_轉帳_本行                                    |    |
|     | ATTXN_TRAN_UNION_DB_CNT        | NUMBER(5,0)       | 借方筆數_轉帳_聯行                                     |    |
|     | ATTXN_TRAN_UNION_DB_AMT        | NUMBER(15,2)      | 借方金額_轉帳_聯行                                     |    |
|     | ATTXN_TRAN_UNION_CR_CNT        | NUMBER(5,0)       | 貸方筆數_轉帳_聯行                                     |    |
|     | ATTXN_TRAN_UNION_CR_AMT        | NUMBER(15,2)      | 貸方金額_轉帳_聯行                                     |    |
|     | ATTXN_TRAN_UNION_FEE_CNT       | NUMBER(5,0)       | 手續費筆數_轉帳_聯行                                    |    |
|     | ATTXN_TRAN_UNION_FEE_AMT       | NUMBER(15,2)      | 手續費金額_轉帳_聯行                                    |    |
|     | ATTXN_TRAN_OTHER_DB_CNT        | NUMBER(5,0)       | 借方筆數_轉帳_他行                                     |    |
|     | ATTXN_TRAN_OTHER_DB_AMT        | NUMBER(15,2)      | 借方金額_轉帳_他行                                     |    |
|     | ATTXN_TRAN_OTHER_CR_CNT        | NUMBER(5,0)       | 貸方筆數_轉帳_他行                                     |    |
|     | ATTXN_TRAN_OTHER_CR_AMT        | NUMBER(15,2)      | 貸方金額_轉帳_他行                                     |    |
|     | ATTXN_TRAN_OTHER_FEE_CNT       | NUMBER(5,0)       | 手續費筆數_轉帳_他行                                    |    |
|     | ATTXN_TRAN_OTHER_FEE_AMT       | NUMBER(15,2)      | 手續費金額_轉帳_他行                                    |    |
|     | ATTXN_FUN_CODE                 | VARCHAR2(1 char)  | ATM功能                                          |    |
|     | ATTXN_FACTORY                  | VARCHAR2(1 char)  | ATM廠牌                                          |    |
|     | ATTXN_KIND_CODE                | VARCHAR2(2 char)  | ATM類別                                          |    |
|     | ATTXN_BRANCH_NAME              | VARCHAR2(20 char) | 置放地點                                           |    |
|     | ATTXN_LOCATION_ADD             | VARCHAR2(40 char) | 置放位置                                           |    |
|     | ATTXN_FILLER                   | VARCHAR2(14 char) | 保留位                                            |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |    |
### VW_ODS_D_SASPEACT
#### 13位全方位代收帳號對照檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SASPE_KEY_NO                   | VARCHAR2(6 char)  |                                                |    |
| PK  | SASPE_ACC_ID_NO                | NUMBER(13,0)      |                                                |    |
|     | SASPE_CUST_NAME                | VARCHAR2(40 char) |                                                |    |
|     | SASPE_BR_CODE                  | VARCHAR2(4 char)  |                                                |    |
|     | SASPE_BUSI_CODE                | VARCHAR2(2 char)  |                                                |    |
|     | SASPE_ID_CODE                  | VARCHAR2(11 char) |                                                |    |
|     | SASPE_APPLY_DATE               | DATE              | 申請日期                                           |    |
|     | SASPE_CHG_DATE                 | DATE              |                                                |    |
|     | SASPE_CHG_TLR                  | VARCHAR2(6 char)  |                                                |    |
|     | SASPE_STAT                     | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_APP_BR_CODE              | VARCHAR2(4 char)  |                                                |    |
|     | SASPE_CREATE_TLR               | VARCHAR2(6 char)  |                                                |    |
|     | SASPE_CREATE_DATE              | DATE              |                                                |    |
|     | SASPE_FEE                      | NUMBER(3,0)       |                                                |    |
|     | SASPE_CHANNEL_FLG              | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_CHK_FILE_FLAG            | VARCHAR2(1 char)  | 檢核檔案否(0:否,1:是)                                 |    |
|     | SASPE_CHK_RT_NAME_FLAG         | VARCHAR2(1 char)  | 匯款戶名檢核                                         |    |
|     | SASPE_RECV_ITEM1               | VARCHAR2(3 char)  |                                                |    |
|     | SASPE_RECV_ITEM2               | VARCHAR2(3 char)  |                                                |    |
|     | SASPE_ACT_FEE                  | NUMBER(2,0)       |                                                |    |
|     | SASPE_R_STORE_1                | NUMBER(1,0)       |                                                |    |
|     | SASPE_R_STORE_2                | NUMBER(1,0)       |                                                |    |
|     | SASPE_R_STORE_3                | NUMBER(1,0)       |                                                |    |
|     | SASPE_R_STORE_4                | NUMBER(1,0)       |                                                |    |
|     | SASPE_MART_FEE1                | NUMBER(2,0)       |                                                |    |
|     | SASPE_MART_FEE2                | NUMBER(2,0)       |                                                |    |
|     | SASPE_ACT_FEE_PT               | NUMBER(2,0)       |                                                |    |
|     | SASPE_POST_FEE                 | NUMBER(2,0)       |                                                |    |
|     | SASPE_HI_FLAG                  | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_HI_FARE                  | NUMBER(3,0)       |                                                |    |
|     | SASPE_CHK_AMT                  | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_POST_FLAG                | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_TIME_FLAG                | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_BEG_DATE                 | DATE              |                                                |    |
|     | SASPE_BEG_TIME                 | VARCHAR2(4 char)  |                                                |    |
|     | SASPE_DUE_DATE                 | DATE              |                                                |    |
|     | SASPE_DUE_TIME                 | VARCHAR2(4 char)  |                                                |    |
|     | SASPE_DEPOSIT_FLAG             | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_FUNCTION                 | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_RECV_ITEM3               | VARCHAR2(3 char)  |                                                |    |
|     | SASPE_RECV_ITEM4               | VARCHAR2(3 char)  |                                                |    |
|     | SASPE_RECV_ITEM5               | VARCHAR2(3 char)  |                                                |    |
|     | SASPE_MART_FEE3                | VARCHAR2(2 char)  |                                                |    |
|     | SASPE_NNET_DATE                | DATE              |                                                |    |
|     | SASPE_AUTO_FLAG                | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_CUSTID                   | VARCHAR2(7 char)  |                                                |    |
|     | SASPE_EB_FLAG                  | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_EB_DATE                  | DATE              |                                                |    |
|     | SASPE_EBFEE_FLAG               | VARCHAR2(1 char)  |                                                |    |
|     | SASPE_EB_FEE                   | NUMBER(3,0)       |                                                |    |
|     | SASPE_ACT_TYPE_EB              | VARCHAR2(1 char)  |                                                |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間                                         |