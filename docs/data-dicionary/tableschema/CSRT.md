---
sidebar_position: 18
title: 台幣核心系統-匯款(CSRT)
---
### VW_ODS_D_RTMST
#### 匯款主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | RTMST_TXN_DATE         | DATE              | 交易日期                          |    |
|     | RTMST_CATEGORY         | VARCHAR2(2 char)  | 匯款類別                          |    |
|     | RTMST_OUR_BANK_CODE    | VARCHAR2(4 char)  | 本行通匯代號(分行別)                   |    |
|     | RTMST_OPP_BANK         | VARCHAR2(3 char)  | 他行通匯之銀行別                      |    |
|     | RTMST_OPP_BR           | VARCHAR2(4 char)  | 他行通匯之分行別                      |    |
|     | RTMST_REG_NO           | VARCHAR2(7 char)  | 匯出/入登錄序號                      |    |
|     | RTMST_CHANNEL          | VARCHAR2(2 char)  | 交易通路                          |    |
|     | RTMST_INQ_NO           | VARCHAR2(7 char)  | 主機查詢序號                        |    |
|     | RTMST_BANK_NO          | VARCHAR2(7 char)  | 跨行通匯序號                        |    |
|     | RTMST_STAT             | VARCHAR2(2 char)  | 匯款狀態                          |    |
|     | RTMST_DISK_NO          | VARCHAR2(9 char)  | 媒體批號/重登重匯媒體批號                 |    |
|     | RTMST_FISC_NO          | VARCHAR2(7 char)  | 財金電文序號                        |    |
|     | RTMST_STAN_NO          | VARCHAR2(7 char)  | 財金STAN序號                      |    |
|     | RTMST_TIME             | VARCHAR2(8 char)  | 交易時間                          |    |
|     | RTMST_REG_DATE         | DATE              | 登錄日期(帳務日期)                    |    |
|     | RTMST_REG_TIME         | VARCHAR2(6 char)  | 登錄時間                          |    |
|     | RTMST_RLS_DATE         | DATE              | 撤銷日期(當匯出被退時註記被退之日期於撤銷日期)      |    |
|     | RTMST_RLS_TIME         | VARCHAR2(6 char)  | 撤銷時間                          |    |
|     | RTMST_ORDER_DATE       | DATE              | 預定匯出日期                        |    |
|     | RTMST_SEND_DATE        | DATE              | 匯出日期                          |    |
|     | RTMST_SEND_TIME        | VARCHAR2(8 char)  | 匯出時間                          |    |
|     | RTMST_ORG_BANK_NO      | VARCHAR2(7 char)  | 原通匯序號                         |    |
|     | RTMST_ORG_DATE         | DATE              | 原匯款日期                         |    |
|     | RTMST_ORG_REG_NO       | VARCHAR2(7 char)  | 匯入款予以退匯之原匯入登錄序號或被退匯匯入之原匯出登錄序號 |    |
|     | RTMST_ORG_STAT         | VARCHAR2(2 char)  | 退匯登錄之前的狀態:退匯登錄被撤銷時還原用         |    |
|     | RTMST_KIND             | VARCHAR2(1 char)  | 匯款對象(匯款型態)                    |    |
|     | RTMST_BACK_REASON      | VARCHAR2(2 char)  | 退匯理由                          |    |
|     | RTMST_ATMP_RTN_CODE    | VARCHAR2(4 char)  | 跨行主機回覆狀態碼                     |    |
|     | RTMST_RTN_STAT_MSG     | VARCHAR2(8 char)  | 匯款狀態訊息                        |    |
|     | RTMST_RTN_AID_MSG      | VARCHAR2(12 char) | 匯款狀態訊息之輔助訊息                   |    |
|     | RTMST_ATMP_RTN_MSG     | VARCHAR2(20 char) | ATMP回覆訊息                      |    |
|     | RTMST_TXN_AMT          | NUMBER(17,4)      | 交易金額                          |    |
|     | RTMST_POST_AMT         | NUMBER(8,2)       | 財金郵電費(其他應付款)                  |    |
|     | RTMST_SERV_AMT         | NUMBER(8,2)       | 手續費                           |    |
|     | RTMST_AMT_TYPE         | VARCHAR2(1 char)  | 匯款金額帳目別                       |    |
|     | RTMST_FEE_TYPE         | VARCHAR2(1 char)  | 匯款手續費帳目別                      |    |
|     | RTMST_OUT_NAME         | VARCHAR2(80 char) | 匯款人姓名/一般通訊附言1(中文)             |    |
|     | RTMST_IN_NAME          | VARCHAR2(80 char) | 收款人姓名/一般通訊附言2(英文)             |    |
|     | RTMST_MEMO             | VARCHAR2(80 char) | 電匯附言                          |    |
|     | RTMST_IN_ORG_ACC_ID_NO | VARCHAR2(14 char) | 原收款人帳號                        |    |
|     | RTMST_IN_ACC_ID_NO     | VARCHAR2(14 char) | 收款人帳號                         |    |
|     | RTMST_OPP_BANK_NAME    | VARCHAR2(10 char) | 對方行庫簡稱                        |    |
|     | RTMST_TXN_SEQ_NO       | VARCHAR2(17 char) | 交易序號                          |    |
|     | RTMST_SUP_SEND         | VARCHAR2(6 char)  | 放行主管代號(若為8898IN時,為自動掛帳之櫃員代碼)  |    |
|     | RTMST_SUP_CHECK        | VARCHAR2(6 char)  | 會同主管代號                        |    |
|     | RTMST_ACCEPT_TLR       | VARCHAR2(6 char)  | 中心櫃員代號                        |    |
|     | RTMST_REG_TLR          | VARCHAR2(6 char)  | 匯款登錄櫃員代號                      |    |
|     | RTMST_FISC_SND_CODE    | VARCHAR2(4 char)  | 財金匯入代碼                        |    |
|     | RTMST_ABATE_NO         | VARCHAR2(7 char)  | 應付解匯款之銷帳序號                    |    |
|     | RTMST_LABOR_TYPE       | VARCHAR2(1 char)  | 待解人工入帳之入帳方式                   |    |
|     | RTMST_MRG_BR_CODE      | VARCHAR2(4 char)  | 原消滅行(被合併行)                    |    |
|     | RTMST_CENT_BR_CODE     | VARCHAR2(4 char)  | 作業中心                          |    |
|     | RTMST_SEQ_NO           | VARCHAR2(4 char)  | 新壽媒體流水序號                      |    |
|     | RTMST_CST_AREA         | VARCHAR2(15 char) | 新壽媒體客戶使用區                     |    |
|     | RTMST_SSD_UNIT         | VARCHAR2(5 char)  | 新壽媒體單位別                       |    |
|     | RTMST_SSD_TXNDATE      | DATE              | 新壽媒體日期                        |    |
|     | RTMST_SSD_NO           | VARCHAR2(2 char)  | 新壽媒體批號                        |    |
|     | RTMST_SSD_STAT         | VARCHAR2(2 char)  | 新壽媒體匯款狀況                      |    |
|     | RTMST_RT_FORT          | VARCHAR2(1 char)  | 媒體匯款檔案格式                      |    |
|     | RTMST_OC_SCAN_NO       | VARCHAR2(13 char) | 集中中心匯款序號                      |    |
|     | RTMST_FILLER           | VARCHAR2(14 char) | 尊榮客戶ID或會計科目                   |    |
|     | RTMST_OUT_ID_CODE      | VARCHAR2(11 char) | 匯款人統一編號                       |    |
|     | RTMST_AGENT_ID_CODE    | VARCHAR2(11 char) | 代理人身份字號                       |    |
|     | RTMST_AGENT_NAME       | VARCHAR2(40 char) | 代理人姓名                         |    |
|     | RTMST_PAY_ACC_ID_NO    | VARCHAR2(16 char) | 扣帳帳號                          |    |
|     | RTMST_FEE_SHARE_TYPE   | VARCHAR2(2 char)  | 手續費分攤類別(網銀前端使用)               |    |
|     | RTMST_XL_IN_RESERVE    | VARCHAR2(6 char)  | 企金網備用區(新壽銷帳6位)                |    |
|     | RTMST_SKL_SEND_FLAG    | VARCHAR2(1 char)  | 新壽使用企金網匯款，產生回饋檔，是否已回饋         |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間                        |