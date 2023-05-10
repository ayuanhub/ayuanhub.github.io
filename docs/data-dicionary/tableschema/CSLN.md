---
sidebar_position: 14
title: 台幣核心系統-放款(CSLN)
---

### VW_ODS_D_LN_CANUSE
#### 尚可動用額度資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRM_APRV_NO     | VARCHAR2(12 char) | 核准號碼   |    |
|     | CRM_CURR_CODE   | VARCHAR2(3 char)  | 幣別     |    |
|     | CRM_CAN_USE_AMT | NUMBER(15,2)      | 尚可動用額度 |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間 |
### VW_ODS_D_LN_NETVAL
#### 本行結算淨值資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRM_NET_DATE  | DATE         | 本行淨值結算日期 |    |
|     | CRM_NET_VALUE | NUMBER(13,0) | 本行結算淨值   |    |
|     | TBL_UPD_TIM   | TIMESTAMP    | 表格更新時間   |
### VW_ODS_D_LN_RATETYPE
#### 訂價利率型態資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRM_LN_ID_NO       | VARCHAR2(18 char) | 貸放帳號       |    |
|     | CRM_INT_RATE_BASIC | NUMBER(3,0)       | 放款訂價利率     |    |
|     | CRM_RATE_TYPE      | VARCHAR2(1 char)  | 利率調整型態     |    |
|     | CRM_RATE_ADJ_INTVL | VARCHAR2(2 char)  | 外部牌告利率調整週期 |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間     |
### VW_ODS_D_LNAPPLY
#### 申請資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNAPL_ID_CODE         | VARCHAR2(11 char)  | 申請者ID(案件申請核准後稱為借款人ID) |    |
| PK  | LNAPL_APL_NO          | VARCHAR2(12 char)  | 申請號碼(案件申請核准後稱為核准號碼)   |    |
|     | LNAPL_CRT_DATE        | DATE               | 建檔日期                  |    |
|     | LNAPL_REC_STAT        | VARCHAR2(1 char)   | 記錄狀態                  |    |
|     | LNAPL_RCV_BR_CODE     | VARCHAR2(4 char)   | 申請單位代號                |    |
|     | LNAPL_ACC_BR_CODE     | VARCHAR2(4 char)   | 記帳單位代號                |    |
|     | LNAPL_RISK_SEQ        | VARCHAR2(7 char)   | 風管紀錄流水序號              |    |
|     | LNAPL_PROD_ID         | VARCHAR2(7 char)   | 產品代號                  |    |
|     | LNAPL_PROJ_CODE       | VARCHAR2(5 char)   | 專案代號                  |    |
|     | LNAPL_AMT_CODE        | VARCHAR2(1 char)   | 額度類別                  |    |
|     | LNAPL_LN_KIND         | VARCHAR2(2 char)   | 授信種類                  |    |
|     | LNAPL_CURR_CODE       | VARCHAR2(3 char)   | 幣別                    |    |
|     | LNAPL_INT_RATE        | NUMBER(6,4)        | 申請利(費)率(綜合額度時不寫入)     |    |
|     | LNAPL_AMT             | NUMBER(15,2)       | 申請額度                  |    |
|     | LNAPL_APRV_AMT        | NUMBER(15,2)       | 實際核准額度                |    |
|     | LNAPL_TYPE            | VARCHAR2(1 char)   | 申請類別                  |    |
|     | LNAPL_RUN_CODE        | VARCHAR2(2 char)   | 案件進度代號                |    |
|     | LNAPL_DATE            | DATE               | 受理日期                  |    |
|     | LNAPL_INVE_DATE       | DATE               | 送審日期                  |    |
|     | LNAPL_GENERAL_DATE    | DATE               | 送總行日期                 |    |
|     | LNAPL_GENERAL_R_DATE  | DATE               | 總行收件日期                |    |
|     | LNAPL_RETURN_DATE     | DATE               | 准駁日期                  |    |
|     | LNAPL_FST_LN_DATE     | DATE               | 首筆撥貸日                 |    |
|     | LNAPL_CLS_DATE        | DATE               | 塗銷完成日(代償日)            |    |
|     | LNAPL_RETURN_LEVEL    | VARCHAR2(1 char)   | 准駁層級                  |    |
|     | LNAPL_RETURN_FLAG     | VARCHAR2(1 char)   | 准駁旗標                  |    |
|     | LNAPL_REJECT_REASON_1 | VARCHAR2(2 char)   | 駁回原因-1                |    |
|     | LNAPL_REJECT_REASON_2 | VARCHAR2(2 char)   | 駁回原因-2(合法值同駁回原因-1)    |    |
|     | LNAPL_REJECT_REASON_3 | VARCHAR2(2 char)   | 駁回原因-3(合法值同駁回原因-1)    |    |
|     | LNAPL_REJECT_OTHER    | VARCHAR2(12 char)  | 其他之駁回原因               |    |
|     | LNAPL_STAT            | VARCHAR2(1 char)   | 核准資料建立狀態              |    |
|     | LNAPL_CAPTL_MAINLAND  | VARCHAR2(1 char)   | 財簽是否註記投資大陸            |    |
|     | LNAPL_EXT_APRV_NO     | VARCHAR2(12 char)  | 延展時使用之核准號碼            |    |
|     | LNAPL_KNOW_CODE       | VARCHAR2(2 char)   | 得知管道                  |    |
|     | LNAPL_RCV_AO          | VARCHAR2(6 char)   | 承作A/O代號               |    |
|     | LNAPL_SALESMAN        | VARCHAR2(11 char)  | 推廣人員ID                |    |
|     | LNAPL_MEMO            | VARCHAR2(100 char) | 案件補充說明                |    |
|     | LNAPL_CENT_CODE       | VARCHAR2(4 char)   | 業務類別                  |    |
|     | LNAPL_ZIP_CODE        | VARCHAR2(5 char)   | 擔保物座落區域               |    |
|     | LNAPL_CAR_CODE        | VARCHAR2(4 char)   | 車商代碼                  |    |
|     | LNAPL_VERIFIER        | VARCHAR2(6 char)   | 審核人員                  |    |
|     | LNAPL_EL_CASE_MARK    | VARCHAR2(1 char)   | eLoan案件註記             |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間                |
### VW_ODS_D_LNAPPROV
#### 核准資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNLNP_ID_CODE                | VARCHAR2(11 char) | 借款人ID             |    |
| PK  | LNLNP_APRV_NO                | VARCHAR2(12 char) | 核准號碼              |    |
|     | LNLNP_BR_CODE                | VARCHAR2(4 char)  | 單位別               |    |
|     | LNLNP_ACC_TITLE_CODE         | VARCHAR2(3 char)  | 科目                |    |
|     | LNLNP_CUST_NO                | VARCHAR2(6 char)  | 戶號                |    |
|     | LNLNP_CHK_CODE               | VARCHAR2(1 char)  | 檢查碼               |    |
|     | LNLNP_PROD_ID                | VARCHAR2(7 char)  | 產品代號              |    |
|     | LNLNP_PROJ_CODE              | VARCHAR2(5 char)  | 專案代號              |    |
|     | LNLNP_REC_CODE               | VARCHAR2(2 char)  | 額度類別              |    |
|     | LNLNP_REC_STAT               | VARCHAR2(1 char)  | 記錄狀態              |    |
|     | LNLNP_FREEZE_STAT            | VARCHAR2(1 char)  | 凍結記錄狀態            |    |
|     | LNLNP_CRT_DATE               | DATE              | 批覆書資料建檔日期         |    |
|     | LNLNP_CURR_CODE              | VARCHAR2(3 char)  | 幣別                |    |
|     | LNLNP_AMT_HI                 | NUMBER(15,2)      | 最高透支額度            |    |
|     | LNLNP_AMT                    | NUMBER(15,2)      | 核准額度/透支額度         |    |
|     | LNLNP_UNUSED_BAL             | NUMBER(15,2)      | 核准未貸額度            |    |
|     | LNLNP_HOLD_AMT               | NUMBER(15,2)      | 圈存金額              |    |
|     | LNLNP_LN_BAL                 | NUMBER(15,2)      | 現貸餘額              |    |
|     | LNLNP_APRV_DATE              | DATE              | 核准日期              |    |
|     | LNLNP_REPLY_INTVL            | DATE              | 批覆書有效止日           |    |
|     | LNLNP_USE_TYPE               | VARCHAR2(1 char)  | 動用方式              |    |
|     | LNLNP_FST_LN_INTVL           | DATE              | 首次動撥期限            |    |
|     | LNLNP_NON_CIRCU_FST_DUE_DATE | DATE              | 非循環-首次動撥到期日       |    |
|     | LNLNP_PER_LN_INTVL           | VARCHAR2(8 char)  | 授信期間              |    |
|     | LNLNP_PER_LN_KIND            | VARCHAR2(1 char)  | 授信期間單位            |    |
|     | LNLNP_FST_LN_DATE            | DATE              | 首筆貸放日             |    |
|     | LNLNP_REC_DATE               | DATE              | 狀態日期              |    |
|     | LNLNP_FST_APRV_RATE          | NUMBER(6,4)       | 初准利率              |    |
|     | LNLNP_ADJ_TYPE               | VARCHAR2(1 char)  | 利率調整方式            |    |
|     | LNLNP_INT_RATE_BASIC         | VARCHAR2(3 char)  | 利率─引用標準           |    |
|     | LNLNP_RTRN_TYPE              | VARCHAR2(1 char)  | 還款方式/週期           |    |
|     | LNLNP_INT_INTVL              | VARCHAR2(2 char)  | 繳息週期              |    |
|     | LNLNP_PRI_INTVL              | VARCHAR2(2 char)  | 還本週期              |    |
|     | LNLNP_INT_UNIT               | VARCHAR2(2 char)  | 繳息/還本週期           |    |
|     | LNLNP_CHAR_CODE              | VARCHAR2(3 char)  | 授信用途別             |    |
|     | LNLNP_COLA_MARK              | VARCHAR2(1 char)  | 擔保註記              |    |
|     | LNLNP_GURN_NUMBER            | NUMBER(2,0)       | 應徵提從債務人數          |    |
|     | LNLNP_GURN_CNT               | NUMBER(2,0)       | 目前從債務人已建檔人數       |    |
|     | LNLNP_MERGE_CTRL_STAT        | VARCHAR2(1 char)  | 合併控管狀態            |    |
|     | LNLNP_CVM                    | VARCHAR2(1 char)  | 可調額度註記            |    |
|     | LNLNP_CVM_INTVL              | DATE              | 可調額度修改週期          |    |
|     | LNLNP_CVM_UNIT               | VARCHAR2(1 char)  | 可調額度修改週期單位        |    |
|     | LNLNP_L_CV_DATE              | DATE              | 上次額度調整日           |    |
|     | LNLNP_CR_ACC_ID_NO           | VARCHAR2(13 char) | 撥款帳號              |    |
|     | LNLNP_DB_ACC_ID_NO           | VARCHAR2(13 char) | 自動扣繳帳號            |    |
|     | LNLNP_RCV_AO                 | VARCHAR2(6 char)  | 承作A/O代號           |    |
|     | LNLNP_MTN_AO                 | VARCHAR2(6 char)  | 經管A/O代號           |    |
|     | LNLNP_DECIDE_LEVEL           | VARCHAR2(2 char)  | 核定層級              |    |
|     | LNLNP_APRV_EMP_NO            | VARCHAR2(6 char)  | 核准人員代號            |    |
|     | LNLNP_PACK_HOUSE_NO          | VARCHAR2(5 char)  | 整批房貸編號            |    |
|     | LNLNP_TYPE                   | VARCHAR2(1 char)  | 申請類別              |    |
|     | LNLNP_ADD_LOAN_MARK          | VARCHAR2(1 char)  | 增貸註記              |    |
|     | LNLNP_COMMUTE_MARK           | VARCHAR2(1 char)  | 不動產代償註記           |    |
|     | LNLNP_ALLY_LN_MARK           | VARCHAR2(1 char)  | 聯貸註記              |    |
|     | LNLNP_CAPITAL_MAINLAND       | VARCHAR2(1 char)  | 財簽註記投資大陸          |    |
|     | LNLNP_SEND_BILL              | VARCHAR2(1 char)  | 寄送對帳單             |    |
|     | LNLNP_BOOK_REVIEW_MARK       | VARCHAR2(1 char)  | 需書面覆審註記           |    |
|     | LNLNP_LIVE_REVIEW_MARK       | VARCHAR2(1 char)  | 重大案件需實地覆審註記       |    |
|     | LNLNP_BOOK_REVIEW_DATE       | DATE              | 書面覆審止日(送件止日)      |    |
|     | LNLNP_LIVE_REVIEW_DATE       | DATE              | 書面覆審止日(送件止日)      |    |
|     | LNLNP_L_LIVE_REVIEW_DATE     | DATE              | 上次實地覆審止日          |    |
|     | LNLNP_REVIEW_FLAG            | VARCHAR2(3 char)  | 覆審註記              |    |
|     | LNLNP_BOOK_RCV_DATE          | DATE              |                   |    |
|     | LNLNP_LIVE_RCV_DATE          | DATE              | 實地收件日期            |    |
|     | LNLNP_SALES_EMP_NO           | VARCHAR2(6 char)  | 推廣人員代號            |    |
|     | LNLNP_SALESMAN               | VARCHAR2(12 char) | 推廣人員ID            |    |
|     | LNLNP_PROMO_PAY              | VARCHAR2(1 char)  | 推廣費支付註記           |    |
|     | LNLNP_CENT_CODE              | VARCHAR2(4 char)  | 利潤中心              |    |
|     | LNLNP_RENEW_ORG_APRV_NO      | VARCHAR2(12 char) | 含現欠核准號碼-參考        |    |
|     | LNLNP_RENEW_NEW_APRV_NO      | VARCHAR2(12 char) | 含現欠核准號碼-被參考       |    |
|     | LNLNP_MOVE_STAT              | VARCHAR2(1 char)  | 轉籍狀態              |    |
|     | LNLNP_MOVE_DATE              | DATE              | 轉籍日期              |    |
|     | LNLNP_MOVE_BR                | VARCHAR2(4 char)  | 轉籍對方行             |    |
|     | LNLNP_MV_ORG_LN_NO           | VARCHAR2(14 char) | 轉籍前原授信號碼          |    |
|     | LNLNP_MV_NEW_LN_NO           | VARCHAR2(14 char) | 轉籍後新授信號碼          |    |
|     | LNLNP_MEMO                   | VARCHAR2(2 char)  | 備註(凍結額度事故原因)      |    |
|     | LNLNP_VIRTUAL_BR             | VARCHAR2(4 char)  | 虛擬分行代號            |    |
|     | LNLNP_WAIT_OLD               | VARCHAR2(1 char)  | 備償舊案              |    |
|     | LNLNP_FREEZE_BR              | VARCHAR2(4 char)  | 額度凍結執行單位          |    |
|     | LNLNP_PRJ_TYPE               | VARCHAR2(1 char)  | 專案類型              |    |
|     | LNLNP_PRJ_ADJ_CODE           | VARCHAR2(1 char)  | 專案調整代碼            |    |
|     | LNLNP_BPN_FLAG               | VARCHAR2(1 char)  | 限制提前清償旗標          |    |
|     | LNLNP_MUTI_NO                | NUMBER(5,2)       | 額度佔用折算倍數          |    |
|     | LNLNP_UNUSED_BAL_SIGN        | NUMBER(1,0)       | 核准未貸額度正負旗標        |    |
|     | LNLNP_OV_BAL                 | NUMBER(15,2)      | 催收餘額              |    |
|     | LNLNP_PROMO_BR               | VARCHAR2(4 char)  | 推廣部室/分行           |    |
|     | LNLNP_CO_EMP_ID              | VARCHAR2(11 char) | 行銷公司人員統編          |    |
|     | LNLNP_BUSI_NO_RESERVE        | VARCHAR2(2 char)  | 授信業務分類號碼-保留位數     |    |
|     | LNLNP_BUSI_NO_TYPE           | VARCHAR2(1 char)  | 業務類別              |    |
|     | LNLNP_BUSI_NO_SEQNO          | VARCHAR2(5 char)  | 業務編號              |    |
|     | LNLNP_HOLD_RATE              | NUMBER(3,0)       | 約定股票維持率           |    |
|     | LNLNP_BR_MANAGER             | VARCHAR2(6 char)  | 分行經理              |    |
|     | LNLNP_ALLY_LN_DATE           | DATE              | 聯貸合約簽訂日           |    |
|     | LNLNP_ALLY_LN_RATE           | NUMBER(10,4)      | 聯貸參貸比例            |    |
|     | LNLNP_OLD_CASE_APRV_NO       | VARCHAR2(12 char) | 舊件核號              |    |
|     | LNLNP_ALLY_MAIN_MARK         | VARCHAR2(1 char)  | 聯貸主辦行註計           |    |
|     | LNLNP_ALLY_COLA_MARK         | VARCHAR2(1 char)  | 聯貸擔保品管理行註計        |    |
|     | LNLNP_ALLY_CTL_MARK          | VARCHAR2(1 char)  | 聯貸額度管理行註計         |    |
|     | LNLNP_SIGN_DATE              | DATE              | 訂約日期              |    |
|     | LNLNP_OVER_REPLY_MARK        | VARCHAR2(1 char)  | 貸放可否超逾批覆書有效止日註記   |    |
|     | LNLNP_CHARITY_BUSI_MARK      | VARCHAR2(1 char)  | 愛心企業註記            |    |
|     | LNLNP_CRINS_RATIO            | NUMBER(3,0)       | 信保保證成數            |    |
|     | LNLNP_CRINS_MARK             | VARCHAR2(1 char)  | 信保案件註記            |    |
|     | LNLNP_OBU_TWD_MARK           | NUMBER(1,0)       | 在臺無住所外國人辦理新臺幣放款註記 |    |
|     | LNLNP_NEG_FLAG               | VARCHAR2(1 char)  | 反面承諾註記            |    |
|     | LNLNP_KH_YOUTH_MARK          | VARCHAR2(1 char)  | 高雄市青年首購補貼註記       |    |
|     | LNLNP_TI_HOLD_RATE           | NUMBER(3,0)       | 存單/存款維持率(%)       |    |
|     | LNLNP_NO_REJECT_MARK         | VARCHAR2(1 char)  | 額度不可撤銷註記          |    |
|     | TBL_UPD_TIM                  | TIMESTAMP         | 表格更新時間            |
### VW_ODS_D_LNBAD
#### 呆帳記錄資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNBAD_ID_CODE      | VARCHAR2(11 char) | 借款人ID          |    |
| PK  | LNBAD_LN_ID_NO     | VARCHAR2(18 char) | 授信帳號           |    |
| PK  | LNBAD_TXN_DATE     | DATE              | 交易日期           |    |
| PK  | LNBAD_TXN_TIME     | VARCHAR2(6 char)  | 交易時間           |    |
| PK  | LNBAD_REC_CODE     | NUMBER(1,0)       | 交易摘要           |    |
|     | LNBAD_TXN_AMT      | NUMBER(15,2)      | 交易金額           |    |
|     | LNBAD_TXN_BAL      | NUMBER(15,2)      | 交易金額(呆帳本金部份)   |    |
|     | LNBAD_TXN_INT      | NUMBER(15,2)      | 交易金額(呆帳利息部份)   |    |
|     | LNBAD_TXN_FEE      | NUMBER(15,2)      | 交易金額(呆帳代墊費用部份) |    |
|     | LNBAD_BAD_BAL      | NUMBER(15,2)      | 呆帳餘額           |    |
|     | LNBAD_OVERDUE_BAL  | NUMBER(15,2)      | 催收餘額(本金部份)     |    |
|     | LNBAD_OVERDUE_INT  | NUMBER(15,2)      | 催收餘額(利息部份)     |    |
|     | LNBAD_OTH_BAL      | NUMBER(15,2)      | 代墊費用餘額         |    |
|     | LNBAD_REC_STAT     | VARCHAR2(1 char)  | 檔案狀態           |    |
|     | LNBAD_APRV_BOOK_NO | VARCHAR2(11 char) | 核准文號           |    |
|     | LNBAD_RTRN_BAD_INT | NUMBER(15,2)      | 收回催收息          |    |
|     | LNBAD_END_DATE     | DATE              | 結息日期           |    |
|     | LNBAD_TXN_SEQ_NO   | VARCHAR2(13 char) | 交易序號           |    |
|     | LNBAD_PAYOFF_AMT   | NUMBER(15,2)      | 賣斷/免責金額        |    |
|     | LNBAD_PAYOFF_CAUSE | VARCHAR2(2 char)  | 賣斷/免責原因        |    |
|     | LNBAD_RTN_ORIGIN   | VARCHAR2(2 char)  | 呆帳收回來源         |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間         |
### VW_ODS_D_LNCHANGE
#### 非帳務資料異動檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNCHG_DATA_KIND   | VARCHAR2(2 char)  | 資料類別       |    |
|     | LNCHG_MAIN_NO     | VARCHAR2(18 char) | 主要編號       |    |
|     | LNCHG_DATE        | DATE              | 異動日期       |    |
|     | LNCHG_CHG_TIME    | VARCHAR2(6 char)  | 異動時間       |    |
|     | LNCHG_BR_CODE     | VARCHAR2(4 char)  | 異動單位       |    |
|     | LNCHG_TXN_SER_NO  | VARCHAR2(13 char) | 交易序號       |    |
|     | LNCHG_TXN_ID_CODE | VARCHAR2(5 char)  | 交易代號       |    |
|     | LNCHG_SUP_CODE    | VARCHAR2(6 char)  | 准核主管       |    |
|     | LNCHG_CHG_FIELD   | VARCHAR2(2 char)  | 異動項目       |    |
|     | LNCHG_BEFORE      | VARCHAR2(40 char) | 異動前資料      |    |
|     | LNCHG_AFTER       | VARCHAR2(40 char) | 異動後資料      |    |
|     | LNCHG_MEMO        | VARCHAR2(30 char) | 備註(其他相關資料) |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間     |

### VW_ODS_D_LNCOLAOT
#### 擔保品－其他資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNCOT_COLA_NO             | VARCHAR2(10 char) | 擔保品編號           |    |
|     | LNCOT_COLA_CODE           | VARCHAR2(3 char)  | 擔保品類別代號         |    |
|     | LNCOT_GET_DATE            | DATE              | 建檔日期            |    |
|     | LNCOT_REC_STAT            | VARCHAR2(1 char)  | 記錄狀態            |    |
|     | LNCOT_APLRAISE_CURR_VALUE | NUMBER(11,0)      | 估值／現值           |    |
|     | LNCOT_CNT                 | NUMBER(2,0)       | 共用件數            |    |
|     | LNCOT_SET_DATE            | DATE              | 設定日期            |    |
|     | LNCOT_SET_AMT             | NUMBER(11,0)      | 設定金額            |    |
|     | LNCOT_COLA_AMT            | NUMBER(11,0)      | 擔保金額            |    |
|     | LNCOT_HYPOTHEC_DUE_DATE   | DATE              | 擔保債權確定期日(物權到期日) |    |
|     | LNCOT_CERTIFICATE_NO      | VARCHAR2(30 char) | 憑證編號            |    |
|     | LNCOT_INSUR_MARK          | VARCHAR2(1 char)  | 保險單建檔註記         |    |
|     | LNCOT_INSUR_CNT           | NUMBER(2,0)       | 保險單已建張數         |    |
|     | LNCOT_OWNER_ID            | VARCHAR2(11 char) | 擔保品所有權人ID       |    |
|     | LNCOT_APPR_DATE           | DATE              | 鑑估日期            |    |
|     | LNCOT_ORG_BAN             | VARCHAR2(11 char) | 發行機構BAN         |    |
|     | LNCOT_ORG_NATION          | VARCHAR2(2 char)  | 發行機構所在國別        |    |
|     | LNCOT_OTH_AMT             | NUMBER(11,0)      | 其他債權人前已設定金額     |    |
|     | LNCOT_SALE_AMT            | NUMBER(11,0)      | 處分價格            |    |
|     | LNCOT_SALE_DATE           | DATE              | 處分日期            |    |
|     | LNCOT_CURR_CODE           | VARCHAR2(3 char)  | 幣別              |    |
|     | LNCOT_COLA_RATIO          | NUMBER(3,0)       | 外幣存單質借成數        |    |
|     | LNCOT_CURR_RATE           | NUMBER(12,7)      | 外幣存單質借日匯率       |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |
### VW_ODS_D_LNCOLARE
#### 擔保品－設定關聯檔-book
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNCOL_APRV_NO   | VARCHAR2(12 char) | 核准號碼    |    |
| PK  | LNCOL_COLA_NO   | VARCHAR2(10 char) | 擔保品編號   |    |
|     | LNCOL_CRT_DATE  | DATE              | 建檔日期    |    |
|     | LNCOL_REC_STAT  | VARCHAR2(1 char)  | 記錄狀態    |    |
|     | LNCOL_COLA_CODE | VARCHAR2(3 char)  | 擔保品類別代號 |    |
| PK  | LNCOL_SET_SEQ   | NUMBER(1,0)       | 設定順位    |    |
|     | LNCOL_COLA_AMT  | NUMBER(11,0)      | 擔保使用金額  |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間  |

### VW_ODS_D_LNCTCFD
#### LZ一般放款資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CFD_REC_CODE           | VARCHAR2(1 char)  | 貸放類別(額度別)         |    |
| PK  | CFD_LN_BR_CODE         | VARCHAR2(4 char)  | 授信帳號-分行別          |    |
| PK  | CFD_ACC_TITLE_CODE     | VARCHAR2(3 char)  | 授信帳號-科目           |    |
| PK  | CFD_CUST_NO            | VARCHAR2(6 char)  | 授信帳號-戶號           |    |
| PK  | CFD_CHK_CODE           | VARCHAR2(1 char)  | 授信帳號-檢號           |    |
| PK  | CFD_LN_SER_NO          | VARCHAR2(4 char)  | 授信帳號-貸放分號         |    |
|     | CFD_LOA_REC_STAT       | VARCHAR2(1 char)  | 貸放狀態              |    |
|     | CFD_APRV_NO            | VARCHAR2(12 char) | 核准號碼              |    |
|     | CFD_ACC_CODE           | VARCHAR2(5 char)  | 放款科子目             |    |
|     | CFD_FST_LN_DATE        | DATE              | 初貸日期              |    |
|     | CFD_LN_DATE            | DATE              | 建檔日/貸放日           |    |
|     | CFD_DUE_DATE           | DATE              | 到期日               |    |
|     | CFD_FST_AMT            | NUMBER(13,0)      | 初貸金額              |    |
|     | CFD_LN_BAL             | NUMBER(13,0)      | 貸放餘額[LOA]         |    |
|     | CFD_RTRN_TYPE          | NUMBER(1,0)       | 還款方式/週期[LNLOAN]   |    |
|     | CFD_INT_UNIT           | NUMBER(2,0)       | 繳息/還本週期單位[LNLOAN] |    |
|     | CFD_INT_RATE_BASIC     | NUMBER(3,0)       | 放款訂價利率            |    |
|     | CFD_FST_APRV_RATE      | NUMBER(6,4)       | 初准利率[LNP]         |    |
|     | CFD_INT_RATE_REAL      | NUMBER(6,4)       | 實收利率              |    |
|     | CFD_INDE_RATE_SIGN     | VARCHAR2(1 char)  | 利率差幅之正負號          |    |
|     | CFD_ALLOW_DATE         | DATE              | 還本寬限期             |    |
|     | CFD_EXT_TIMES          | NUMBER(3,0)       | 展期次數              |    |
|     | CFD_CHAR_CODE_1        | VARCHAR2(1 char)  | 授信用途別第一碼[資金用途]    |    |
|     | CFD_CLOSE_REASON       | VARCHAR2(2 char)  | 結清原因              |    |
|     | CFD_TEL_NO             | VARCHAR2(17 char) | 聯絡電話              |    |
|     | CFD_CR_ACC_ID_NO       | VARCHAR2(13 char) | 撥款帳號              |    |
|     | CFD_ID_CODE            | VARCHAR2(11 char) | 借款人ID             |    |
|     | CFD_APRV_AMT           | NUMBER(13,0)      | 核准金額              |    |
|     | CFD_LN_BAL_TOTAL       | NUMBER(13,0)      | 核准額度現貸            |    |
|     | CFD_UNUSED_BAL_TOTAL   | NUMBER(13,0)      | 改為核准未貸餘額          |    |
|     | CFD_REPLY_INTVL        | DATE              | 批覆書有效止日           |    |
|     | CFD_LNP_REC_STAT       | VARCHAR2(1 char)  | 核准狀況              |    |
|     | CFD_L_Y_AUM            | NUMBER(13,0)      | 去年累計積數            |    |
|     | CFD_T_Y_AUM            | NUMBER(13,0)      | 本年累計積數            |    |
|     | CFD_BOSS_ID_CODE       | VARCHAR2(11 char) | 公司統編              |    |
|     | CFD_CHAR_CODE          | VARCHAR2(3 char)  | 授信用途別             |    |
|     | CFD_PROJ_CODE          | VARCHAR2(5 char)  | 專案代號              |    |
|     | CFD_COLA_CODE          | VARCHAR2(3 char)  | 擔保品類別代號           |    |
|     | CFD_COLA_NO            | VARCHAR2(10 char) | 擔保品編號             |    |
|     | CFD_INS_DUE_DATE       | DATE              | 保險到期日[LNINSUR]    |    |
|     | CFD_INS_AMT            | NUMBER(13,0)      | 保險金額              |    |
|     | CFD_HYPO_DUE_DATE      | DATE              | 抵押權到期日[LNREALTY]  |    |
|     | CFD_APRV_DATE          | DATE              | 核准日期              |    |
|     | CFD_CENT_CODE          | VARCHAR2(4 char)  | 利潤中心              |    |
|     | CFD_RCV_AO             | VARCHAR2(6 char)  | 承作AO代號            |    |
|     | CFD_CUST_NAME          | VARCHAR2(60 char) | 姓名                |    |
|     | CFD_ADDR               | VARCHAR2(71 char) | 地址                |    |
|     | CFD_L_RTRN_DATE        | DATE              | 上次還本日             |    |
|     | CFD_N_RTRN_DATE        | DATE              | 下次攤還日             |    |
|     | CFD_INT_DAY            | VARCHAR2(2 char)  | 繳息日               |    |
|     | CFD_L_INT_DATE         | DATE              | 上次繳息日             |    |
|     | CFD_N_INT_DATE         | DATE              | 下次繳息日             |    |
|     | CFD_DIS_CRT_DATE       | DATE              | 貸放日/建檔日           |    |
|     | CFD_DIS_DUE_DATE       | DATE              | 到期日               |    |
|     | CFD_RTRN_INT_TOT       | NUMBER(14,0)      | 已繳利息總額            |    |
|     | CFD_RTRN_TERM          | NUMBER(3,0)       | 分期應攤還期數           |    |
|     | CFD_RTRNED_TERM        | NUMBER(3,0)       | 已攤還期數             |    |
|     | CFD_EACH_AMT           | NUMBER(13,0)      | 每期應攤還額            |    |
|     | CFD_DB_ACC_ID_NO       | VARCHAR2(13 char) | 連動扣繳帳號            |    |
|     | CFD_ORG_LN_ID_NO       | VARCHAR2(18 char) | 原貸放帳號             |    |
|     | CFD_INDE_RATE          | NUMBER(6,4)       | 利率差幅              |    |
|     | CFD_OVERDUE_AMT        | NUMBER(13,0)      | 催收款項              |    |
|     | CFD_OVERDUE_RTRN_AMT   | NUMBER(13,0)      | 催收收回金額            |    |
|     | CFD_BINS_CODE          | VARCHAR2(6 char)  | 央行-行業代號           |    |
|     | CFD_IND_NO             | VARCHAR2(12 char) | 間接授信編號            |    |
|     | CFD_FEE_AMT            | NUMBER(13,0)      | 手續費               |    |
|     | CFD_AVOID_LIST_MARK    | VARCHAR2(1 char)  | 免列逾放註記            |    |
|     | CFD_DECIDE_LEVEL       | VARCHAR2(2 char)  | 核定層級              |    |
|     | CFD_APRV_EMP_NO        | VARCHAR2(6 char)  | 核准人員代號            |    |
|     | CFD_CUST_TYPE          | VARCHAR2(2 char)  | 客戶型態              |    |
|     | CFD_SALESMAN           | VARCHAR2(11 char) | 推廣人員ID            |    |
|     | CFD_PROMO_AMT          | NUMBER(13,0)      | 推廣費               |    |
|     | CFD_OTH_AMT            | NUMBER(9,0)       | 開辦費               |    |
|     | CFD_TAX_AMT            | NUMBER(9,0)       | 扣繳稅額              |    |
|     | CFD_LNP_CRT_DATE       | DATE              | 批覆書資料建檔日期         |    |
|     | CFD_COMMUTE_AMT        | NUMBER(9,0)       | 代償費               |    |
|     | CFD_PROMO_BR           | VARCHAR2(4 char)  | 推廣單位子分行           |    |
|     | CFD_CO_EMP_ID          | VARCHAR2(11 char) | 行銷公司人員統編          |    |
|     | CFD_PAY_DATE           | DATE              | 推廣費撥入日期           |    |
|     | CFD_SC_AMT             | NUMBER(9,0)       | 代償費[小企部專用]        |    |
|     | CFD_TR_OVERDUE_DATE    | DATE              | 轉催日期              |    |
|     | CFD_MTN_AO             | VARCHAR2(6 char)  | 經管AO              |    |
|     | CFD_BAD_AMT            | NUMBER(13,0)      | 轉呆金額              |    |
|     | CFD_RTRN_BAD_AMT       | NUMBER(13,0)      | 呆帳收回              |    |
|     | CFD_NEGOT_DATE         | DATE              | 協商狀態日期(西元年)       |    |
|     | CFD_INT_RATE           | NUMBER(6,4)       | 貸放利率              |    |
|     | CFD_BUSI_NO_USE        | VARCHAR2(6 char)  | 授信業務分類號碼          |    |
|     | CFD_STRUC_SHIP         | VARCHAR2(1 char)  | 建物所有權人與授信戶關係      |    |
|     | CFD_OTH_AMT_LOA        | NUMBER(13,0)      | 代墊費用[LNLOA]       |    |
|     | CFD_ORG_ACC_CODE       | VARCHAR2(5 char)  | 原貸科子目             |    |
|     | CFD_LN_RATING          | VARCHAR2(1 char)  | 企業戶授信評等           |    |
|     | CFD_MOV_APLR_VALUE     | NUMBER(11,0)      | 擔保品-動產之鑑價總值       |    |
|     | CFD_NEGOT_STAT         | VARCHAR2(1 char)  | 協商狀態              |    |
|     | CFD_RECEIVE_NO         | VARCHAR2(7 char)  | 勞宅貸款種類            |    |
|     | CFD_GURN_CNT           | NUMBER(2,0)       | 已徵提從債務人數          |    |
|     | CFD_LICENCE_NO         | VARCHAR2(7 char)  | 牌照號碼(動產擔保品)       |    |
|     | CFD_DELAY_KIND         | VARCHAR2(1 char)  | 逾期種類              |    |
|     | CFD_OVER_MONTHS        | NUMBER(4,0)       | 逾期月數              |    |
|     | CFD_OVER_REMAINS       | NUMBER(2,0)       | 逾期零星天數            |    |
|     | CFD_DELAY_KIND_N       | VARCHAR2(1 char)  | 逾期種類-重分類          |    |
|     | CFD_OVER_MONTHS_N      | NUMBER(4,0)       | 逾期月數-重分類          |    |
|     | CFD_OVER_REMAINS_N     | NUMBER(2,0)       | 逾期天數-重分類          |    |
|     | CFD_PRI_INTVL          | NUMBER(2,0)       | 還本週期              |    |
|     | CFD_INT_INTVL          | NUMBER(2,0)       | 繳息週期              |    |
|     | CFD_ADJ_TYPE           | VARCHAR2(1 char)  | 利率調整方式            |    |
|     | CFD_DUEDATE_NEGOT_BEF  | DATE              | 協商前到期日            |    |
|     | CFD_RATE_NEGOT_BEF     | VARCHAR2(6 char)  | 協商前貸放利率           |    |
|     | CFD_LNLNP_TYPE         | VARCHAR2(1 char)  | 申請類別              |    |
|     | CFD_LNLNP_BR_MANAGER   | VARCHAR2(6 char)  | 分行經理人             |    |
|     | CFD_DELAY_LONG_KIND    | VARCHAR2(1 char)  | 逾期時間較長之類別         |    |
|     | CFD_LONG_MONTHS        | VARCHAR2(4 char)  | 逾期月數              |    |
|     | CFD_LONG_REMAINS       | VARCHAR2(2 char)  | 逾期零星天數            |    |
|     | CFD_OBSERVE_MARK       | VARCHAR2(1 char)  | 列報案件資料註記          |    |
|     | CFD_BARGAIN_MARK       | VARCHAR2(1 char)  | 協議案件資料註記          |    |
|     | CFD_SUBSIDY_INT        | NUMBER(9,0)       | 補貼息金額             |    |
|     | CFD_ADVFEE_AMT         | NUMBER(7,0)       | 預收帳務管理費           |    |
|     | CFD_NEGLS_STAT         | VARCHAR2(1 char)  | 前置協商狀態            |    |
|     | CFD_NEGLS_DATE         | DATE              | 前置協商狀態日期          |    |
|     | CFD_RENEW_STAT         | VARCHAR2(1 char)  | 更生狀態              |    |
|     | CFD_RENEW_DATE         | DATE              | 更生狀態日期            |    |
|     | CFD_LIQUIDATE_STAT     | VARCHAR2(1 char)  | 清算狀態              |    |
|     | CFD_LIQUIDATE_DATE     | DATE              | 清算狀態日期            |    |
|     | CFD_LOA_LN_BAL         | NUMBER(13,0)      | 貸放檔餘額             |    |
|     | CFD_CZINT_RATE_REAL    | NUMBER(6,4)       | 依牌告推算之實收利率        |    |
|     | CFD_DELAY_KIND_N_GLS   | NUMBER(1,0)       | 債清逾期種類-重分類        |    |
|     | CFD_OVER_MONTHS_N_GLS  | NUMBER(4,0)       | 債清逾期月數-重分類        |    |
|     | CFD_OVER_REMAINS_N_GLS | NUMBER(2,0)       | 債清逾期天數-重分類        |    |
|     | CFD_LOA_ADV_BAL        | NUMBER(13,0)      | 預收款金額             |    |
|     | CFD_PAUSE_01           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份        |    |
|     | CFD_PAUSE_02           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份        |    |
|     | CFD_PAUSE_03           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份        |    |
|     | CFD_PAUSE_04           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份        |    |
|     | CFD_RLY_DEBT_PERC      | NUMBER(3,0)       | 不動產貸款成數           |    |
|     | CFD_LOA_OFFSET_RATE    | NUMBER(6,4)       | 補貼利率              |    |
|     | CFD_MOV_PRODUCT_DATE   | NUMBER(6,0)       | 出廠年月              |    |
|     | CFD_LOA_COST_RATE      | NUMBER(6,4)       | 成本利率              |    |
|     | CFD_NON_DLY_ZERO       | VARCHAR2(1 char)  | 非逾期註記權數零          |    |
|     | CFD_STRUC_COM_DATE     | DATE              | 擔保品建築完成日          |    |
|     | CFD_STRUC_MATERIAL     | VARCHAR2(1 char)  | 建物主要建材            |    |
|     | CFD_LEX_SUBSIDY_DATE   | DATE              | 補貼息止日             |    |
|     | CFD_BAD_FEEBAL         | NUMBER(13,0)      | 下傳轉呆代墊費用餘額        |    |
|     | CFD_72_2_RATIO         | NUMBER(3,0)       | 銀行法72-2條拆分比例(%)   |    |
|     | CFD_72_2_CHAR_CODE     | VARCHAR2(3 char)  | 銀行法72-2條拆分用途別     |    |
|     | CFD_PAUSE_MARK         | VARCHAR2(1 char)  | 經濟弱勢展延-狀態         |    |
|     | CFD_PAUSE_DATE         | DATE              | 經濟弱勢展延-狀態日期       |    |
|     | CFD_DELAY_KIND_N_PAS   | NUMBER(1,0)       | 經濟弱勢展延-重分類        |    |
|     | CFD_OVER_MONTHS_N_PAS  | NUMBER(4,0)       | 經濟弱勢展延逾期月數-重分類    |    |
|     | CFD_OVER_REMAINS_N_PAS | NUMBER(2,0)       | 經濟弱勢展延逾期天數-重分類    |    |
|     | CFD_MOV_TYPE           | VARCHAR2(20 char) | 擔保品-動產之型式         |    |
|     | CFD_FEE_KIND_MARK      | VARCHAR2(1 char)  | 承諾費收取註記           |    |
|     | CFD_NEADJ_STAT         | VARCHAR2(1 char)  | 前置調解-狀態           |    |
|     | CFD_NEADJ_DATE         | DATE              | 前置調解-狀態日期         |    |
|     | CFD_DELAY_KIND_N_ADJ   | NUMBER(1,0)       | 前置調解逾期種類-重分類      |    |
|     | CFD_OVER_MONTHS_N_ADJ  | NUMBER(4,0)       | 前置調解逾期月數-重分類      |    |
|     | CFD_OVER_REMAINS_N_ADJ | NUMBER(2,0)       | 前置調解逾期天數-重分類      |    |
|     | CFD_CITY_ZONE          | VARCHAR2(12 char) | 擔保品（市）區（鄉）鎮       |    |
|     | CFD_STRUC_ADDR_ROAD    | VARCHAR2(12 char) | 擔保品建物地址-路         |    |
|     | CFD_STRUC_ADDR_OTH     | VARCHAR2(36 char) | 擔保品其餘門牌號碼         |    |
|     | CFD_LAW_GET_OV         | NUMBER(1,0)       | 主從債務人訴追註記         |    |
|     | CFD_LAW_GET_OTH        | NUMBER(1,0)       | 主從債務人他案已訴追        |    |
|     | CFD_OBS_BAL_TYPE       | VARCHAR2(1 char)  | 債信不良列報逾放申報類別      |    |
|     | CFD_CAPITAL_CHINA      | VARCHAR2(1 char)  | 資金流向大陸註記          |    |
|     | CFD_JCIC_FLAG          | NUMBER(1,0)       | 報送聯徵註記            |    |
|     | CFD_DLY_STAT           | VARCHAR2(1 char)  | 逾期狀態              |    |
|     | CFD_LDLY_STAT          | VARCHAR2(1 char)  | 未重分類逾期狀態          |    |
|     | CFD_NDLY_STAT          | VARCHAR2(1 char)  | 重分類逾期狀態(債清協)      |    |
|     | CFD_DTYP_STAT          | VARCHAR2(1 char)  | 重分類期限             |    |
|     | CFD_JCIC_STAT          | VARCHAR2(1 char)  | 列報期限狀態            |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間            |

### VW_ODS_D_LNCTCFF
#### test
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CFF_REC_CODE           | VARCHAR2(1 char)  | 貸放類別(額度別)                                  |    |
|     | CFF_ACC_ID_NO          | VARCHAR2(13 char) | 透支存款帳號                                     |    |
|     | CFF_ODM_REC_STAT       | VARCHAR2(1 char)  | 透支檔狀態                                      |    |
|     | CFF_LOA_REC_STAT       | VARCHAR2(1 char)  | 貸放檔狀態                                      |    |
| PK  | CFF_APRV_NO            | VARCHAR2(12 char) | 核准號碼                                       |    |
|     | CFF_ACC_CODE           | VARCHAR2(5 char)  | 放款科子目                                      |    |
|     | CFF_FST_LN_DATE        | DATE              | 初貸日期                                       |    |
|     | CFF_LN_DATE            | DATE              | 建檔日/貸放日                                    |    |
|     | CFF_DUE_DATE           | DATE              | 到期日(透支契約迄日)                                |    |
|     | CFF_FST_AMT            | NUMBER(13,0)      | 初貸金額                                       |    |
|     | CFF_LN_BAL             | NUMBER(13,0)      | 貸放餘額LOA                                    |    |
|     | CFF_RTRN_TYPE          | NUMBER(1,0)       | 還款方式/週期LNLOAN                              |    |
|     | CFF_INT_UNIT           | NUMBER(2,0)       | 繳息/還本週期單位LNLOAN                            |    |
|     | CFF_INT_RATE_BASIC     | NUMBER(3,0)       | 放款訂價利率                                     |    |
|     | CFF_FST_APRV_RATE      | NUMBER(6,4)       | 初准利率LNP                                    |    |
|     | FILLER                 | VARCHAR2(5 char)  | 調整前利率資訊部說先空著                               |    |
|     | CFF_INT_RATE_REAL      | NUMBER(6,4)       | 實收利率(=貸放利率-補貼利率)                           |    |
|     | CFF_INDE_RATE_SIGN     | VARCHAR2(1 char)  | 利率差幅之正負號                                   |    |
|     | CFF_ALLOW_DATE         | DATE              | 還本寬限期                                      |    |
|     | CFF_EXT_TIMES          | NUMBER(3,0)       | 展期次數                                       |    |
|     | CFF_CHAR_CODE_1        | VARCHAR2(1 char)  | 授信用途別第一碼資金用途                               |    |
|     | CFF_CLOSE_REASON       | VARCHAR2(2 char)  | 結清原因                                       |    |
|     | CFF_TEL_NO             | VARCHAR2(17 char) | 聯絡電話                                       |    |
|     | CFF_CR_ACC_ID_NO       | VARCHAR2(13 char) | 撥款帳號                                       |    |
|     | CFF_ID_CODE            | VARCHAR2(11 char) | 借款人ID                                      |    |
|     | CFF_APRV_AMT           | NUMBER(13,0)      | 核准金額                                       |    |
|     | CFF_LN_BAL_TOTAL       | NUMBER(13,0)      | 現貸餘額改為核准額度現貸                               |    |
|     | CFF_UNUSED_BAL_TOTAL   | NUMBER(13,0)      | 核准未貸餘額                                     |    |
|     | CFF_REPLY_INTVL        | DATE              | 批覆書有效止日                                    |    |
|     | CFF_LNP_REC_STAT       | VARCHAR2(1 char)  | 核准狀況                                       |    |
|     | CFF_L_Y_AUM            | NUMBER(13,0)      | 去年累計積數                                     |    |
|     | CFF_T_Y_AUM            | NUMBER(13,0)      | 本年累計積數                                     |    |
|     | CFF_BOSS_ID_CODE       | VARCHAR2(11 char) | 公司統編(負責人)                                  |    |
|     | CFF_CHAR_CODE          | VARCHAR2(3 char)  | 授信用途別                                      |    |
|     | CFF_PROJ_CODE          | VARCHAR2(5 char)  | 專案代號                                       |    |
|     | CFF_COLA_CODE          | VARCHAR2(3 char)  | 擔保品類別代號                                    |    |
|     | CFF_COLA_NO            | VARCHAR2(10 char) | 擔保品編號                                      |    |
|     | CFF_INS_DUE_DATE       | DATE              | 保險到期日LNINSUR                               |    |
|     | CFF_INS_AMT            | NUMBER(13,0)      | 保險金額                                       |    |
|     | CFF_HYPO_DUE_DATE      | DATE              | 抵押權到期日LNREALTY                             |    |
|     | CFF_APRV_DATE          | DATE              | 核准日期                                       |    |
|     | CFF_CENT_CODE          | VARCHAR2(4 char)  | 利潤中心                                       |    |
|     | CFF_DECIDE_LEVEL       | VARCHAR2(2 char)  | 核定層級                                       |    |
|     | CFF_APRV_EMP_NO        | VARCHAR2(6 char)  | 核准人員代號                                     |    |
|     | CFF_RCV_AO             | VARCHAR2(6 char)  | 承作AO代號                                     |    |
|     | CFF_CUST_NAME          | VARCHAR2(40 char) | 姓名                                         |    |
|     | CFF_ADDR               | VARCHAR2(71 char) | 地址                                         |    |
|     | CFF_COLA_MARK          | VARCHAR2(1 char)  | 擔保註記                                       |    |
|     | CFF_OD_TERM            | NUMBER(3,0)       | 透支契約期間透支迄日-透支起日單位/月                        |    |
|     | CFF_TD_MAX_BAL         | NUMBER(11,0)      | 當日最高動用餘額LNODMST                            |    |
|     | CFF_LAST_AMT           | NUMBER(11,0)      | 昨日透支餘額lnodm-bal+本日清償-本日動用                  |    |
|     | CFF_TOT_IN             | NUMBER(11,0)      | 當日存入累計金額                                   |    |
|     | CFF_TOT_OUT            | NUMBER(11,0)      | 當日支出累計金額                                   |    |
|     | CFF_OD_AUM_1           | NUMBER(13,0)      | 計息積數-1(未除36500)                            |    |
|     | CFF_OV_OD_AUM          | NUMBER(13,0)      | 逾期積數                                       |    |
|     | CFF_LAST_AUM           | NUMBER(13,0)      | 去年累計積數                                     |    |
|     | CFF_TY_REF_AUM         | NUMBER(13,0)      | 本年累計積數                                     |    |
|     | CFF_AUM_MON_DATA_1     | NUMBER(15,0)      | 最近六個月各月累計積數1                               |    |
|     | CFF_AUM_MON_DATA_2     | NUMBER(15,0)      | 最近六個月各月累計積數2                               |    |
|     | CFF_AUM_MON_DATA_3     | NUMBER(15,0)      | 最近六個月各月累計積數3                               |    |
|     | CFF_AUM_MON_DATA_4     | NUMBER(15,0)      | 最近六個月各月累計積數4                               |    |
|     | CFF_AUM_MON_DATA_5     | NUMBER(15,0)      | 最近六個月各月累計積數5                               |    |
|     | CFF_AUM_MON_DATA_6     | NUMBER(15,0)      | 最近六個月各月累計積數6                               |    |
|     | CFF_REF_AUM            | NUMBER(13,0)      | 本月累計實際積數                                   |    |
|     | CFF_CAL_END_DATE       | DATE              | 計息迄日                                       |    |
|     | CFF_L_OD_DATE          | DATE              | 上次交易日                                      |    |
|     | CFF_L_RTRN_DATE        | DATE              | 上次還本日(金太郎時只要有還(手續費/利息/本金))LOA              |    |
|     | CFF_L_INT_DATE         | DATE              | 上次繳息日/繳息迄日(上次計息迄日)                         |    |
|     | CFF_FST_OV_OD_DATE     | DATE              | 轉息超額日期LNODMST                              |    |
|     | CFF_REC_DATE           | DATE              | 額度註銷日期註銷日                                  |    |
|     | CFF_RTRN_INT_TOT       | NUMBER(8,0)       | 已繳利息總額負數需顯示                                |    |
|     | CFF_REF_INT            | NUMBER(7,0)       | 當月已繳利息                                     |    |
|     | CFF_LY_INT_TOT         | NUMBER(7,0)       | 去年度已收利息總額                                  |    |
|     | CFF_TY_INT_TOT         | NUMBER(7,0)       | 本年度已收利息總額                                  |    |
|     | CFF_TR_OVERDUE_DATE    | DATE              | 轉催收日期                                      |    |
|     | CFF_OVERDUE_AMT        | NUMBER(13,0)      | 催收款項本金＋利息＋遲延息                              |    |
|     | CFF_OVERDUE_RTRN_AMT   | NUMBER(13,0)      | 催收收回金額                                     |    |
|     | CFF_CRT_DATE           | DATE              | 建檔日期LNODMST                                |    |
|     | CFF_RTRN_FEE_TOT       | NUMBER(7,0)       | 金太郎帳務管理費                                   |    |
|     | CFF_INDE_RATE          | NUMBER(6,4)       | 利率差幅                                       |    |
|     | CFF_N_INT_DATE         | DATE              | 最後還款日(即下次繳息日，此欄位金太郎專用)                     |    |
|     | CFF_SALESMAN           | VARCHAR2(11 char) | 推廣人員ID                                     |    |
|     | CFF_PROMO_AMT          | NUMBER(9,0)       | 推廣費LNCDLOA                                 |    |
|     | CFF_OTH_AMT            | NUMBER(9,0)       | 開辦費                                        |    |
|     | CFF_TAX_AMT            | NUMBER(9,0)       | 扣繳稅額                                       |    |
|     | CFF_LNP_CRT_DATE       | DATE              | 批覆書資料建檔日期                                  |    |
|     | CFF_PROMO_BR           | VARCHAR2(4 char)  | 推廣單位子分行                                    |    |
|     | CFF_CO_EMP_ID          | VARCHAR2(11 char) | 行銷公司人員統編                                   |    |
|     | CFF_TYPE_CODE          | NUMBER(1,0)       | 車貸/非車貸                                     |    |
|     | CFF_PAY_DATE           | DATE              | 推廣費撥入日期LNSHE=_LNLOAN                       |    |
|     | CFF_PRJ_TYPE           | VARCHAR2(1 char)  | 專案類型(金太郎)(10433:1、2、3,10434、10437、10438:1) |    |
|     | CFF_PRJ_ADJ_CODE       | VARCHAR2(1 char)  | 專案調整代碼(金太郎)                                |    |
|     | CFF_MTN_AO             | VARCHAR2(6 char)  | 經管AO                                       |    |
|     | CFF_BAD_AMT            | NUMBER(13,0)      | 下傳轉呆金額不含代墊費用                               |    |
|     | CFF_RTRN_BAD_AMT       | NUMBER(13,0)      | 呆帳收回                                       |    |
|     | CFF_NEGOT_DATE         | DATE              | 協商狀態日期                                     |    |
|     | CFF_LN_NO              | VARCHAR2(14 char) | 授信帳號                                       |    |
|     | CFF_LN_SER_NO          | VARCHAR2(4 char)  | 授信帳號                                       |    |
|     | CFF_BUSI_NO_USE        | VARCHAR2(6 char)  | 授信業務分類號碼                                   |    |
|     | CFF_STRUC_SHIP         | VARCHAR2(1 char)  | 建物所有權人與授信戶關係                               |    |
|     | CFF_OTH_AMT_LOA        | NUMBER(13,0)      | 代墊費用                                       |    |
|     | CFF_ORG_ACC_CODE       | VARCHAR2(5 char)  | 原貸科子目                                      |    |
|     | CFF_BINS_CODE          | VARCHAR2(6 char)  | 央行-行業代號                                    |    |
|     | CFF_MOV_APLR_VALUE     | NUMBER(11,0)      | 擔保品-動產之鑑價總值                                |    |
|     | CFF_NEGOT_STAT         | VARCHAR2(1 char)  | 協商狀態                                       |    |
|     | CFF_RECEIVE_NO         | VARCHAR2(7 char)  | 勞宅貸款收件編號                                   |    |
|     | CFF_GURN_CNT           | NUMBER(2,0)       | 已徵提從債務人數                                   |    |
|     | CFF_CUST_TYPE          | VARCHAR2(2 char)  | 客戶型態                                       |    |
|     | CFF_DELAY_KIND         | VARCHAR2(1 char)  | 逾期種類(1:本金2:利息)                             |    |
|     | CFF_OVER_MONTHS        | NUMBER(4,0)       | 逾期月數                                       |    |
|     | CFF_OVER_REMAINS       | NUMBER(2,0)       | 逾期零星天數                                     |    |
|     | CFF_DELAY_KIND_N       | NUMBER(1,0)       | 逾期種類-重分類                                   |    |
|     | CFF_OVER_MONTHS_N      | NUMBER(4,0)       | 逾期月數-重分類                                   |    |
|     | CFF_OVER_REMAINS_N     | NUMBER(2,0)       | 逾期天數-重分類                                   |    |
|     | CFF_ADJ_TYPE           | VARCHAR2(1 char)  | 利率調整方式                                     |    |
|     | CFF_DUEDATE_NEGOT_BEF  | DATE              | 協商前到期日                                     |    |
|     | CFF_RATE_NEGOT_BEF     | VARCHAR2(6 char)  | 協商前貸放利率                                    |    |
|     | CFF_LNLNP_TYPE         | VARCHAR2(1 char)  | 申請類別                                       |    |
|     | CFF_LNLNP_BR_MANAGER   | VARCHAR2(6 char)  | 分行經理人                                      |    |
|     | CFF_DELAY_LONG_KIND    | VARCHAR2(1 char)  | 逾期時間較長之類別(本金或利息)                           |    |
|     | CFF_LONG_MONTHS        | VARCHAR2(4 char)  | 逾期月數                                       |    |
|     | CFF_LONG_REMAINS       | VARCHAR2(2 char)  | 逾期零星天數                                     |    |
|     | CFF_OBSERVE_MARK       | VARCHAR2(1 char)  | 列報案件資料註記                                   |    |
|     | CFF_LN_RATING          | VARCHAR2(1 char)  | 企業戶授信評等(綜合風險指標)                            |    |
|     | CFF_BARGAIN_MARK       | VARCHAR2(1 char)  | 協議案件資料註記                                   |    |
|     | CFF_NEGLS_STAT         | VARCHAR2(1 char)  | 前置協商狀態                                     |    |
|     | CFF_NEGLS_DATE         | DATE              | 前置協商狀態日期                                   |    |
|     | CFF_RENEW_STAT         | VARCHAR2(1 char)  | 更生狀態                                       |    |
|     | CFF_RENEW_DATE         | DATE              | 更生狀態日期                                     |    |
|     | CFF_LIQUIDATE_STAT     | VARCHAR2(1 char)  | 清算狀態                                       |    |
|     | CFF_LIQUIDATE_DATE     | DATE              | 清算狀態日期                                     |    |
|     | CFF_LOA_LN_BAL         | NUMBER(13,0)      | 貸放檔餘額                                      |    |
|     | CFF_CZINT_RATE_REAL    | NUMBER(6,4)       | 依牌告推算之實收利率                                 |    |
|     | CFF_DELAY_KIND_N_GLS   | VARCHAR2(1 char)  | 債清逾期種類-重分類                                 |    |
|     | CFF_OVER_MONTHS_N_GLS  | NUMBER(4,0)       | 債清逾期月數-重分類                                 |    |
|     | CFF_OVER_REMAINS_N_GLS | NUMBER(2,0)       | 債清逾期天數-重分類                                 |    |
|     | CFF_LOA_ADV_BAL        | NUMBER(13,0)      | 預收款金額                                      |    |
|     | CFF_PAUSE_01           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份-1                               |    |
|     | CFF_PAUSE_02           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份-2                               |    |
|     | CFF_PAUSE_03           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份-3                               |    |
|     | CFF_PAUSE_04           | VARCHAR2(6 char)  | 核准協商暫緩繳款月份-4                               |    |
|     | CFF_RLY_DEBT_PERC      | NUMBER(3,0)       | 不動產貸款成數                                    |    |
|     | CFF_LOA_OFFSET_RATE    | NUMBER(6,4)       | 補貼利率(應為正值)                                 |    |
|     | CFF_NON_DLY_ZERO       | VARCHAR2(1 char)  | 非逾期註記權數零                                   |    |
|     | CFF_STRUC_COM_DATE     | DATE              | 擔保品建築完成日                                   |    |
|     | CFF_STRUC_MATERIAL     | VARCHAR2(1 char)  | 建物主要建材                                     |    |
|     | CFF_BAD_FEEBAL         | NUMBER(13,0)      | 下傳轉呆代墊費用餘額                                 |    |
|     | CFF_OD_INT_TYPE        | VARCHAR2(1 char)  | 透支積數計算型態                                   |    |
|     | CFF_72_2_RATIO         | NUMBER(3,0)       | 銀行法72-2條拆分比例(%)                            |    |
|     | CFF_72_2_CHAR_CODE     | VARCHAR2(3 char)  | 銀行法72-2條拆分用途別                              |    |
|     | CFF_PAUSE_MARK         | VARCHAR2(1 char)  | 經濟弱勢展延-狀態                                  |    |
|     | CFF_PAUSE_DATE         | DATE              | 經濟弱勢展延-狀態日期                                |    |
|     | CFF_DELAY_KIND_N_PAS   | VARCHAR2(1 char)  | 經濟弱勢展延-重分類                                 |    |
|     | CFF_OVER_MONTHS_N_PAS  | NUMBER(4,0)       | 經濟弱勢展延逾期月數-重分類                             |    |
|     | CFF_OVER_REMAINS_N_PAS | NUMBER(2,0)       | 經濟弱勢展延逾期天數-重分類                             |    |
|     | CFF_FEE_KIND_MARK      | VARCHAR2(1 char)  |                                            |    |
|     | CFF_NEADJ_STAT         | VARCHAR2(1 char)  |                                            |    |
|     | CFF_NEADJ_DATE         | DATE              |                                            |    |
|     | CFF_DELAY_KIND_N_ADJ   | VARCHAR2(1 char)  |                                            |    |
|     | CFF_OVER_MONTHS_N_ADJ  | NUMBER(4,0)       |                                            |    |
|     | CFF_OVER_REMAINS_N_ADJ | NUMBER(2,0)       |                                            |    |
|     | CFF_CITY_ZONE          | VARCHAR2(12 char) |                                            |    |
|     | CFF_STRUC_ADDR_ROAD    | VARCHAR2(12 char) |                                            |    |
|     | CFF_STRUC_ADDR_OTH     | VARCHAR2(36 char) |                                            |    |
|     | CFF_LAW_GET_OV         | VARCHAR2(1 char)  |                                            |    |
|     | CFF_LAW_GET_OTH        | VARCHAR2(1 char)  |                                            |    |
|     | CFF_OBS_BAL_TYPE       | VARCHAR2(1 char)  |                                            |    |
|     | CFF_JCIC_FLAG          | VARCHAR2(1 char)  |                                            |    |
|     | CFF_DLY_STAT           | VARCHAR2(1 char)  |                                            |    |
|     | CFF_LDLY_STAT          | VARCHAR2(1 char)  |                                            |    |
|     | CFF_NDLY_STAT          | VARCHAR2(1 char)  |                                            |    |
|     | CFF_DTYP_STAT          | VARCHAR2(1 char)  |                                            |    |
|     | CFF_JCIC_STAT          | VARCHAR2(1 char)  |                                            |    |
|     | CFF_INT_DAY            | NUMBER(2,0)       |                                            |    |
|     | CFF_INT_FAIL_DATE      | DATE              |                                            |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間                                     |

### VW_ODS_D_LNCTDLY
#### 逾期資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNTDLY_LN_ACC_NO   | NUMBER(18,0)      |        |    |
|     | LNTDLY_ID_CODE     | VARCHAR2(11 char) |        |    |
|     | LNTDLY_APRV_NO     | NUMBER(12,0)      |        |    |
|     | LNTDLY_DELAY_KIND  | NUMBER(1,0)       |        |    |
|     | LNTDLY_OVER_DAYS   | NUMBER(4,0)       |        |    |
|     | LNTDLY_TR_BAD_DATE | DATE              |        |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間 |

### VW_ODS_D_LNCTTRA
#### 貸放資料統一識別值對照檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRA_LN_ID_NO   | VARCHAR2(18 char) | 貸放帳號      |    |
|     | TRA_APRV_NO    | VARCHAR2(12 char) | 核准號碼      |    |
|     | TRA_LOAN_UID   | VARCHAR2(30 char) | 貸放資料統一識別值 |    |
|     | TRA_LOA_STATUS | NUMBER(1,0)       | 貸放狀態      |    |
|     | TBL_UPD_TIM    | TIMESTAMP         | 表格更新時間    |


### VW_ODS_D_LNDIVIDE
#### 分行聯貸(分潤)設定檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNDIV_APRV_NO      | VARCHAR2(12 char) | 核准號碼(綜合額度以頂層紀錄) |    |
|     | LNDIV_AGENCY_BR    | VARCHAR2(4 char)  | 分潤轉介行           |    |
|     | LNDIV_AGENCY_RATIO | NUMBER(3,0)       | 分潤轉介比例(%)       |    |
|     | LNDIV_CRT_DATE     | DATE              | 建檔日期            |    |
|     | LNDIV_CRT_TLR      | VARCHAR2(6 char)  | 建檔櫃員            |    |
|     | LNDIV_UPD_DATE     | DATE              | 異動日期            |    |
|     | LNDIV_UPD_TLR      | VARCHAR2(6 char)  | 異動櫃員            |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間          |

### VW_ODS_D_LNEXRATE
#### 外部牌告重定價分段設定檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNEXR_LN_ID_NO  | VARCHAR2(18 char) | 貸放帳號      |    |
| PK  | LNEXR_EFF_DATE  | DATE              | 生效日       |    |
|     | LNEXR_INDE_RATE | NUMBER(6,4)       | 重定價利率差幅   |    |
|     | LNEXR_MIN_RATE  | NUMBER(6,4)       | 重定價下限利率   |    |
|     | LNEXR_ADJ_INTVL | NUMBER(2,0)       | 重定價利率調整週期 |    |
|     | LNEXR_CRT_DATE  | DATE              | 建檔日       |    |
|     | LNEXR_UPD_DATE  | DATE              | 異動日       |    |
|     | LNEXR_SET_DATE  | DATE              | 生效完成日     |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間    |

### VW_ODS_D_LNFEEREC
#### 其他費用資料檔手續費檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNFEE_ID_CODE    | VARCHAR2(11 char) | 借款人ID     |    |
|     | LNFEE_APRV_NO    | VARCHAR2(12 char) | 核准號碼/申請編號 |    |
| PK  | LNFEE_TXN_DATE   | DATE              | 交易日期      |    |
| PK  | LNFEE_TXN_SEQ_NO | VARCHAR2(13 char) | 交易序號      |    |
|     | LNFEE_REC_STAT   | VARCHAR2(1 char)  | 記錄狀態      |    |
|     | LNFEE_AMT        | NUMBER(15,2)      | 交易金額      |    |
|     | LNFEE_KIND       | VARCHAR2(2 char)  | 費用類別      |    |
|     | LNFEE_CENT_CODE  | VARCHAR2(4 char)  | 利潤中心      |    |
|     | LNFEE_ACC_BR     | VARCHAR2(4 char)  | 記帳單位      |    |
|     | LNFEE_MTN_AO     | VARCHAR2(6 char)  | 經管A/O代號   |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間    |
### VW_ODS_D_LNGROUP
#### 集團資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNGRP_MAIN_NO     | VARCHAR2(3 char)  | 集團代號           |    |
| PK  | LNGRP_MEM_NO      | VARCHAR2(2 char)  | 成員代號           |    |
|     | LNGRP_MEM_ID_CODE | VARCHAR2(11 char) | 集團成員統一編號       |    |
|     | LNGRP_NAME        | VARCHAR2(30 char) | 集團/成員名稱        |    |
|     | LNGRP_AMT         | NUMBER(18,2)      | 總額度上限          |    |
|     | LNGRP_L_TXN_DATE  | DATE              | 上一交易日          |    |
|     | LNGRP_CRT_DATE    | DATE              | 建檔日期           |    |
|     | LNGRP_REC_STATUS  | VARCHAR2(1 char)  | 記錄狀態           |    |
|     | LNGRP_MAIN_GRP_NO | VARCHAR2(2 char)  | 集團主體編號         |    |
|     | LNGRP_LN_RATING   | VARCHAR2(1 char)  | 內部授信評等(綜合風險指標) |    |
|     | LNGRP_RATING_NEW  | VARCHAR2(2 char)  | 企金戶信用評等        |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |

### VW_ODS_D_LNGURN
#### 從債務人資料檔_保證人
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNGRN_APRV_NO   | VARCHAR2(12 char) | 申請編號/核准號碼 |    |
| PK  | LNGRN_ID_CODE   | VARCHAR2(11 char) | 從債務人ID    |    |
|     | LNGRN_REC_CODE  | VARCHAR2(1 char)  | 從債務人紀錄別   |    |
|     | LNGRN_CRT_DATE  | DATE              | 建檔日期      |    |
|     | LNGRN_FILE_STAT | VARCHAR2(1 char)  | 紀錄狀態      |    |
|     | LNGRN_KIND      | VARCHAR2(2 char)  | 從債務人類別    |    |
|     | LNGRN_RLT_KIND  | VARCHAR2(1 char)  | 從債務人關係代碼  |    |
|     | LNGRN_RLT_CODE  | VARCHAR2(2 char)  | 企業關係代號    |    |
|     | LNGRN_APL_MARK  | VARCHAR2(1 char)  | 申請時建檔註記   |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間    |

### VW_ODS_D_LNINSUR
#### 保險單資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNINS_COLA_NO  | VARCHAR2(10 char) | 擔保品編號  |    |
|     | LNINS_SUB_NO   | VARCHAR2(2 char)  | 子號     |    |
|     | LNINS_GET_DATE | DATE              | 建檔日期   |    |
|     | LNINS_REC_STAT | VARCHAR2(1 char)  | 記錄狀態   |    |
| PK  | LNINS_COMPANY  | VARCHAR2(2 char)  | 保險公司   |    |
| PK  | LNINS_NO       | VARCHAR2(30 char) | 保險單號碼  |    |
| PK  | LNINS_KIND     | VARCHAR2(1 char)  | 保險類別   |    |
|     | LNINS_AMT      | NUMBER(18,2)      | 保險金額   |    |
|     | LNINS_DUE_DATE | DATE              | 保險到期日  |    |
|     | TBL_UPD_TIM    | TIMESTAMP         | 表格更新時間 |

### VW_ODS_D_LNLAB
#### 擔保品_不動產土地建物資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LNLAB_SUB_NO           | VARCHAR2(2 char)  | 記錄子號             |   |
|    | LNLAB_CRT_DATE         | DATE              | 建檔日期             |   |
|    | LNLAB_REC_STAT         | VARCHAR2(1 char)  | 記錄狀態             |   |
|    | LNLAB_OWNER_ID_CODE    | VARCHAR2(11 char) | 所有權人ID－土地        |   |
|    | LNLAB_CUST_NAME        | VARCHAR2(30 char) | 所有權人姓名－土地        |   |
|    | LNLAB_S_OWNER_ID_CODE  | VARCHAR2(11 char) | 所有權人ID－建物        |   |
|    | LNLAB_S_CUST_NAME      | VARCHAR2(30 char) | 所有權人姓名－建物        |   |
|    | LNLAB_ZIP_CODE         | VARCHAR2(5 char)  | 郵遞區號             |   |
|    | LNLAB_CITY_ZONE        | VARCHAR2(12 char) | （市）區（鄉）鎮         |   |
|    | LNLAB_LAND_SEC         | VARCHAR2(20 char) | 段                |   |
|    | LNLAB_LAND_PART_SEC    | VARCHAR2(20 char) | 小段               |   |
|    | LNLAB_LAND_NO          | VARCHAR2(8 char)  | 地號               |   |
|    | LNLAB_STRUC_NO         | VARCHAR2(8 char)  | 建號               |   |
|    | LNLAB_STRUC_ADDR_ROAD  | VARCHAR2(12 char) | 建物地址-路           |   |
|    | LNLAB_STRUC_ADDR_OTH   | VARCHAR2(36 char) | 其餘門牌號碼           |   |
|    | LNLAB_HOUSE_TXN_NO     | VARCHAR2(12 char) | 房屋稅籍號碼           |   |
|    | LNLAB_HOUSE_GET_DATE   | DATE              | 房屋取得日期           |   |
|    | LNLAB_SEC_NO           | VARCHAR2(4 char)  | 土地段名代碼           |   |
|    | LNLAB_LAND_SHIP        | VARCHAR2(1 char)  | 土地所有權人與授信戶關係     |   |
|    | LNLAB_STRUC_SHIP       | VARCHAR2(1 char)  | 建物所有權人與授信戶關係     |   |
|    | LNLAB_LAND_USE         | VARCHAR2(1 char)  | 土地使用別            |   |
|    | LNLAB_STRUC_USE        | VARCHAR2(1 char)  | 建物使用別            |   |
|    | LNLAB_LAND_RENT_DATE   | DATE              | 土地租約到期日          |   |
|    | LNLAB_STRUC_RENT_DATE  | DATE              | 建物租約到期日          |   |
|    | LNLAB_LAND_HOLD_AREA   | NUMBER(10,2)      | 土地持分面積(平方公尺)     |   |
|    | LNLAB_STRUC_TYPE       | VARCHAR2(2 char)  | 建物類別             |   |
|    | LNLAB_CAR_PARK_MODE    | VARCHAR2(1 char)  | 停車位型式            |   |
|    | LNLAB_CAR_PARK_AREA    | NUMBER(8,2)       | 獨立產權車位登記面積(平方公尺) |   |
|    | LNLAB_LAND_SRENT_DATE  | DATE              | 土地租約起日           |   |
|    | LNLAB_STRUC_SRENT_DATE | DATE              | 建物租約起日           |   |
|    | LNLAB_LAND_CODE        | VARCHAR2(1 char)  | 地目               |   |
|    | LNLAB_LAND_AREA        | NUMBER(10,2)      | 面積               |   |
|    | LNLAB_LAND_ZONE        | VARCHAR2(1 char)  | 使用分區             |   |
|    | LNLAB_LAND_TYPE        | VARCHAR2(2 char)  | 使用地類別            |   |
|    | LNLAB_LAND_VALUE       | NUMBER(13,0)      | 公告土地現值           |   |
|    | LNLAB_LAND_VALUE_YM    | VARCHAR2(6 char)  | 公告土地現值年月         |   |
|    | LNLAB_STRUC_CHAR_CODE  | VARCHAR2(1 char)  | 建物主要用途           |   |
|    | LNLAB_STRUC_MATERIAL   | VARCHAR2(1 char)  | 建物主要建材           |   |
|    | LNLAB_STRUC_FLOOR      | NUMBER(3,0)       | 層樓               |   |
|    | LNLAB_STRUC_FLOOR_AREA | NUMBER(10,2)      | 層樓總面積            |   |
|    | LNLAB_STRUC_LAYER      | VARCHAR2(7 char)  | 層次               |   |
|    | LNLAB_STRUC_LAYER_AREA | NUMBER(10,2)      | 層次面積             |   |
|    | LNLAB_STRUC_COM_DATE   | DATE              | 建築完成日期           |   |
|    | LNLAB_ADJ_STRUC_CHAR_1 | VARCHAR2(1 char)  | 附屬建物用途(平臺)       |   |
|    | LNLAB_ADJ_STRUC_CHAR_2 | VARCHAR2(1 char)  | 附屬建物用途(陽台)       |   |
|    | LNLAB_ADJ_STRUC_CHAR_3 | VARCHAR2(1 char)  | 附屬建物用途(屋簷)       |   |
|    | LNLAB_ADJ_STRUC_CHAR_4 | VARCHAR2(1 char)  | 附屬建物用途(雨遮)       |   |
|    | LNLAB_ADJ_STRUC_CHAR_5 | VARCHAR2(1 char)  | 附屬建物用途(地下室)      |   |
|    | LNLAB_ADJ_STRUC_CHAR_6 | VARCHAR2(1 char)  | 附屬建物用途(其他)       |   |
|    | LNLAB_ADJ_STRUC_AREA   | NUMBER(10,2)      | 附屬建物總面積          |   |
|    | LNLAB_COM_HOLD_AREA    | NUMBER(10,2)      | 共同部份持分面積         |   |
|    | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間           |

### VW_ODS_D_LNLOAEXT_0A
#### 銀行法72-2條用途別拆分資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LEX0A_LN_ID_NO     | VARCHAR2(18 char) | 貸放帳號      |    |
|     | LEX0A_CTR_DATE     | DATE              | 建檔日期      |    |
|     | LEX0A_UPD_TLR      | VARCHAR2(6 char)  | 建檔/異動櫃員   |    |
|     | LEX0A_UPD_DATE     | DATE              | 異動日期      |    |
|     | LEX0A_0A_RATIO     | NUMBER(3,0)       | 拆解分出比例(%) |    |
|     | LEX0A_0A_CHAR_CODE | VARCHAR2(3 char)  | 拆解分出對應用途別 |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間    |

### VW_ODS_D_LNLOAEXT_0K
#### 外部牌告重定價資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LEX0A_LN_ID_NO     | VARCHAR2(18 char) | 貸放帳號      |    |
|     | LEX0A_CTR_DATE     | DATE              | 建檔日期      |    |
|     | LEX0A_UPD_TLR      | VARCHAR2(6 char)  | 建檔/異動櫃員   |    |
|     | LEX0A_UPD_DATE     | DATE              | 異動日期      |    |
|     | LEX0A_0A_RATIO     | NUMBER(3,0)       | 拆解分出比例(%) |    |
|     | LEX0A_0A_CHAR_CODE | VARCHAR2(3 char)  | 拆解分出對應用途別 |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間    |

### VW_ODS_D_LNLOAN
#### 貸放資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNLOA_ID_CODE           | VARCHAR2(11 char) | 借款人ID                      |    |
|     | LNLOA_APRV_NO           | VARCHAR2(12 char) | 核准號碼                       |    |
|     | LNLOA_LN_ID_NO          | VARCHAR2(18 char) | 授信帳號                       |    |
|     | LNLOA_LN_E_ID_NO        | VARCHAR2(13 char) | 貸放電子帳號                     |    |
|     | LNLOA_IND_NO            | VARCHAR2(12 char) | 間接授信編號                     |    |
|     | LNLOA_ACC_CODE          | VARCHAR2(5 char)  | 放款科子目                      |    |
|     | LNLOA_REC_STAT          | VARCHAR2(1 char)  | 記錄狀態                       |    |
|     | LNLOA_LN_STAT           | VARCHAR2(1 char)  | 狀態                         |    |
|     | LNLOA_LN_DATE           | DATE              | 貸放日期/建檔日期                  |    |
|     | LNLOA_FST_LN_DATE       | DATE              | 初貸日                        |    |
|     | LNLOA_DUE_DATE          | DATE              | 到期日                        |    |
|     | LNLOA_CURR_CODE         | VARCHAR2(3 char)  | 幣別                         |    |
|     | LNLOA_FST_AMT           | NUMBER(15,2)      | 初貸金額/開狀金額/匯票金額/保證金額        |    |
|     | LNLOA_LN_BAL            | NUMBER(15,2)      | 現貸餘額/開狀餘額/匯票餘額/保證餘額        |    |
|     | LNLOA_ADJ_TYPE          | VARCHAR2(1 char)  | 利率調整方式                     |    |
|     | LNLOA_R_INTVL           | NUMBER(2,0)       | 利率調整週期                     |    |
|     | LNLOA_R_INTVL_UNIT      | VARCHAR2(1 char)  | 利率調整週期單位                   |    |
|     | LNLOA_N_RATE_DATE       | DATE              | 下次利率調整日                    |    |
|     | LNLOA_INT_RATE_BASIC    | NUMBER(3,0)       | 放款訂價利率                     |    |
|     | LNLOA_INDE_RATE         | NUMBER(6,4)       | 利率差幅                       |    |
|     | LNLOA_INT_RATE          | NUMBER(6,4)       | 貸放利率                       |    |
|     | LNLOA_OFFSET_RATE       | NUMBER(6,4)       | 補貼利率                       |    |
|     | LNLOA_INT_RATE_REAL     | NUMBER(6,4)       | 實收利率(實際計息利率)               |    |
|     | LNLOA_COST_RATE         | NUMBER(6,4)       | 成本利率                       |    |
|     | LNLOA_HANG_RATE         | NUMBER(6,4)       | 掛帳利率                       |    |
|     | LNLOA_RTRN_TYPE         | VARCHAR2(1 char)  | 還款方式/週期                    |    |
|     | LNLOA_INT_INTVL         | NUMBER(2,0)       | 繳息週期                       |    |
|     | LNLOA_PRI_INTVL         | NUMBER(2,0)       | 還本週期                       |    |
|     | LNLOA_INT_UNIT          | NUMBER(2,0)       | 繳息/還本週期單位                  |    |
|     | LNLOA_CHAR_CODE         | VARCHAR2(3 char)  | 授信用途別                      |    |
|     | LNLOA_ALLOW_DATE        | DATE              | 還本寬限期                      |    |
|     | LNLOA_RTRN_TERM         | NUMBER(3,0)       | 分期應攤還期數                    |    |
|     | LNLOA_RTRNED_TERM       | NUMBER(3,0)       | 已攤還期數                      |    |
|     | LNLOA_FIXAMT_RTRN_MARK  | NUMBER(1,0)       | 攤還額約定方式(約定攤還固定金額註記)        |    |
|     | LNLOA_EACH_AMT          | NUMBER(15,2)      | 每期攤還額                      |    |
|     | LNLOA_L_RTRN_DATE       | DATE              | 上次還本日                      |    |
|     | LNLOA_N_RTRN_DATE       | DATE              | 下次攤還/還本日                   |    |
|     | LNLOA_INT_DAY           | NUMBER(2,0)       | 繳息日                        |    |
|     | LNLOA_L_INT_DATE        | DATE              | 上次繳息日/繳息迄日(上次計息迄日)         |    |
|     | LNLOA_N_INT_DATE        | DATE              | 下次繳息日(應繳款日)                |    |
|     | LNLOA_PENALTY_TYPE      | VARCHAR2(1 char)  | 違約金計收方式(For分期型)            |    |
|     | LNLOA_PENALTY_END_DATE  | DATE              | 違約金計算迄日                    |    |
|     | LNLOA_ONLY_PRI_MARK     | VARCHAR2(1 char)  | 部份還本當時有否繳息註記               |    |
|     | LNLOA_MID_INT_B_DATE    | DATE              | 中途掛帳利息起日                   |    |
|     | LNLOA_MID_INT           | NUMBER(15,2)      | 掛帳利息(中途還款)                 |    |
|     | LNLOA_BARGAIN_INT       | NUMBER(15,2)      | 掛帳利息(協議)                   |    |
|     | LNLOA_HANG_END_DATE     | DATE              | 掛帳迄日/協議迄日                  |    |
|     | LNLOA_HANG_INT          | NUMBER(15,2)      | 掛帳利息                       |    |
|     | LNLOA_HANG_DELAY_INT    | NUMBER(15,2)      | 掛帳逾期息                      |    |
|     | LNLOA_HANG_PENALTY      | NUMBER(15,2)      | 掛帳違約金                      |    |
|     | LNLOA_OWE_FEE           | NUMBER(15,2)      | 積欠手續費                      |    |
|     | LNLOA_CR_ACC_ID_NO      | VARCHAR2(13 char) | 撥款帳號                       |    |
|     | LNLOA_DB_ACC_ID_NO      | VARCHAR2(13 char) | 連動扣繳帳號                     |    |
|     | LNLOA_CLOSE_REASON      | VARCHAR2(2 char)  | 結清原因                       |    |
|     | LNLOA_AVOID_LIST_MARK   | VARCHAR2(1 char)  | 免列逾放註記                     |    |
|     | LNLOA_DELAY_TIMES_1     | NUMBER(2,0)       | 逾期次數-1(6-30天)              |    |
|     | LNLOA_DELAY_TIMES_2     | NUMBER(2,0)       | 逾期次數-2(31-60天)             |    |
|     | LNLOA_DELAY_TIMES_3     | NUMBER(2,0)       | 逾期次數-3(61-90天)             |    |
|     | LNLOA_DELAY_TIMES_4     | NUMBER(2,0)       | 逾期次數-4(91-120天)            |    |
|     | LNLOA_DELAY_TIMES_5     | NUMBER(2,0)       | 逾期次數-5(121-150天)           |    |
|     | LNLOA_DELAY_TIMES_6     | NUMBER(2,0)       | 逾期次數-6(150天以上)             |    |
|     | LNLOA_TR_OVERDUE_DATE   | DATE              | 轉催收日期                      |    |
|     | LNLOA_TR_LN_DATE        | DATE              | 催收轉正常放款日期                  |    |
|     | LNLOA_OVERDUE_PRI       | NUMBER(15,2)      | 催收-本金                      |    |
|     | LNLOA_OVERDUE_INT       | NUMBER(15,2)      | 催收-利息                      |    |
|     | LNLOA_OVERDUE_DLY_INT   | NUMBER(15,2)      | 催收-遲延息                     |    |
|     | LNLOA_OVERDUE_PENALTY   | NUMBER(15,2)      | 催收-違約金                     |    |
|     | LNLOA_OVERDUE_RTRN_AMT  | NUMBER(15,2)      | 催收收回金額                     |    |
|     | LNLOA_ADV_BAL           | NUMBER(15,2)      | 預收款金額                      |    |
|     | LNLOA_BAD_PRI           | NUMBER(15,2)      | 轉列呆帳-本金                    |    |
|     | LNLOA_BAD_INT           | NUMBER(15,2)      | 轉列呆帳-利息                    |    |
|     | LNLOA_BAD_FEE           | NUMBER(15,2)      | 轉列呆帳-代墊費用                  |    |
|     | LNLOA_RTRN_BAD_AMT      | NUMBER(15,2)      | 呆帳收回金額(不含代墊費用)             |    |
|     | LNLOA_OTH_AMT           | NUMBER(15,2)      | 其他應收款(費用轉列)                |    |
|     | LNLOA_RTRN_INT_TOT      | NUMBER(15,2)      | 已收利息總額                     |    |
|     | LNLOA_TY_INT_TOT        | NUMBER(15,2)      | 本年度已收利息總額                  |    |
|     | LNLOA_LY_INT_TOT        | NUMBER(15,2)      | 去年度已收利息總額                  |    |
|     | LNLOA_L_M_AUM           | NUMBER(13,0)      | 上月累計積數(暫不使用)               |    |
|     | LNLOA_T_Y_AUM           | NUMBER(13,0)      | 本年累計積數                     |    |
|     | LNLOA_L_Y_AUM           | NUMBER(13,0)      | 去年累計積數                     |    |
|     | LNLOA_EXT_TIMES         | NUMBER(2,0)       | 展期次數                       |    |
|     | LNLOA_EXT_IN_DATE       | DATE              | 展期日(展入)                    |    |
|     | LNLOA_EXT_OUT_DATE      | DATE              | 展期日(展出)                    |    |
|     | LNLOA_EXT_APRV_NO       | VARCHAR2(12 char) | 延展之核准號碼(申請編號)              |    |
|     | LNLOA_ORG_ACC_CODE      | VARCHAR2(5 char)  | 原貸科子目                      |    |
|     | LNLOA_ORG_LN_ID_NO      | VARCHAR2(18 char) | 原授信帳號(展期或LC轉列)             |    |
|     | LNLOA_NEW_LN_ID_NO      | VARCHAR2(18 char) | 新授信帳號(展期或LC轉列)             |    |
|     | LNLOA_ORG_LC_NO         | VARCHAR2(12 char) | 原LC號碼                      |    |
|     | LNLOA_ORG_ACPT_NO       | VARCHAR2(12 char) | 原承兌編號                      |    |
|     | LNLOA_CARD_GRP          | VARCHAR2(1 char)  | 卡貸群組                       |    |
|     | LNLOA_MOVE_STAT         | VARCHAR2(1 char)  | 轉籍狀態                       |    |
|     | LNLOA_MVIN_DATE         | DATE              | 轉籍移入日期                     |    |
|     | LNLOA_MVOUT_DATE        | DATE              | 轉籍移出日期                     |    |
|     | LNLOA_MVIN_BR           | VARCHAR2(4 char)  | 轉籍移入對方行                    |    |
|     | LNLOA_MVOUT_BR          | VARCHAR2(4 char)  | 轉籍移出對方行                    |    |
|     | LNLOA_MVIN_ID_NO        | VARCHAR2(18 char) | 轉籍前原授信帳號                   |    |
|     | LNLOA_MVOUT_ID_NO       | VARCHAR2(18 char) | 轉籍後新授信帳號                   |    |
|     | LNLOA_SALES_COMPANY     | VARCHAR2(8 char)  | 行銷公司統編                     |    |
|     | LNLOA_SALES_EMP_NO      | VARCHAR2(6 char)  | 推廣人員代號                     |    |
|     | LNLOA_SALESMAN          | VARCHAR2(11 char) | 推廣人員ID                     |    |
|     | LNLOA_PROMO_AMT         | NUMBER(15,2)      | 推廣費                        |    |
|     | LNLOA_TAX_RATE          | NUMBER(6,4)       | 推廣費稅率                      |    |
|     | LNLOA_PAY_DATE          | DATE              | 推廣費支付日期                    |    |
|     | LNLOA_ACCRUAL_INT       | NUMBER(15,2)      | 提存-利息                      |    |
|     | LNLOA_ACCRUAL_DLY_INT   | NUMBER(15,2)      | 提存-遲延息                     |    |
|     | LNLOA_NET_LN_RATE       | NUMBER(6,4)       | 聯往貸放利率                     |    |
|     | LNLOA_NET_INDE_RATE     | NUMBER(6,4)       | 聯往利率差                      |    |
|     | LNLOA_CAL_TYPE          | VARCHAR2(1 char)  | 計算方式                       |    |
|     | LNLOA_OV_AUTO_FLAG      | VARCHAR2(1 char)  | 自動轉催收註記                    |    |
|     | LNLOA_TOT_CASH_IN_AMT   | NUMBER(15,2)      | 當日現金存入累計金額                 |    |
|     | LNLOA_TOT_CASH_OUT_AMT  | NUMBER(15,2)      | 當日現金支出累計金額                 |    |
|     | LNLOA_TOT_TRAN_IN_AMT   | NUMBER(15,2)      | 當日轉帳存入累計金額                 |    |
|     | LNLOA_TOT_TRAN_OUT_AMT  | NUMBER(15,2)      | 當日轉帳支出累計金額                 |    |
|     | LNLOA_WASH_NOCHK_MARK   | VARCHAR2(1 char)  | 洗錢防制法免申報原因                 |    |
|     | LNLOA_WASH_DB_OV_FLAG   | VARCHAR2(1 char)  | 當日洗錢防制法支出超過限額旗標            |    |
|     | LNLOA_WASH_CR_OV_FLAG   | VARCHAR2(1 char)  | 當日洗錢防制法存入超過限額旗標            |    |
|     | LNLOA_NEAR_UNACC_DATE   | DATE              | 非帳務資料最近異動日                 |    |
|     | LNLOA_NEAR_ACC_DATE     | DATE              | 帳務最近異動日                    |    |
|     | LNLOA_OLD_TI_TYPE       | VARCHAR2(2 char)  | 轉換前存單型態                    |    |
|     | LNLOA_OLD_TI_INTVL      | NUMBER(2,0)       | 轉換前存單期間                    |    |
|     | LNLOA_RTRN_FEE_TOT      | NUMBER(15,2)      | 累計實收手續費/帳務管理費              |    |
|     | LNLOA_BARG_TXN_DATE     | DATE              | 協議交易日                      |    |
|     | LNLOA_EX_AMT_1          | NUMBER(15,2)      | 預留金額-1                     |    |
|     | LNLOA_BARG_FLAG         | VARCHAR2(1 char)  | 協議註記                       |    |
|     | LNLOA_BARG_B_DATE       | DATE              | 協議生效起日                     |    |
|     | LNLOA_NEGOT_DATE        | DATE              | 協商狀態日期(金管會協商機制)            |    |
|     | LNLOA_NEGOT_STAT        | VARCHAR2(1 char)  | 協商狀態(金管會協商機制)              |    |
|     | LNLOA_RECEIVE_TYPE      | VARCHAR2(1 char)  | 勞宅貸款種類                     |    |
|     | LNLOA_ASSIGN_FLAG       | VARCHAR2(1 char)  | 委外旗標                       |    |
|     | LNLOA_SOLD_FLAG         | VARCHAR2(1 char)  | 債權出售旗標                     |    |
|     | LNLOA_LN_CHG_MARK       | VARCHAR2(1 char)  | 授信變更註記                     |    |
|     | LNLOA_NEGOT_INT         | NUMBER(7,0)       | 協商掛帳息                      |    |
|     | LNLOA_NEGOT_FEE         | NUMBER(7,0)       | 協商掛帳金太郎帳務管理費               |    |
|     | LNLOA_PAUSE_MARK        | VARCHAR2(1 char)  | 經濟弱勢展延還款方案-狀態              |    |
|     | LNLOA_TRAN_FLAG         | VARCHAR2(1 char)  | 外部系統轉入註記                   |    |
|     | LNLOA_POLICY_NET_FLAG   | VARCHAR2(1 char)  | 政策性放款註記(逐戶依成本利率計算聯往息)      |    |
|     | LNLOA_OVERDUE_NEGOT_INT | NUMBER(7,0)       | 轉催-協商掛帳息                   |    |
|     | LNLOA_DUEDATE_NEGOT_BEF | DATE              | 債權協商前到期日                   |    |
|     | LNLOA_RATE_NEGOT_BEF    | NUMBER(6,4)       | 債權協商前貸放利率                  |    |
|     | LNLOA_OBSERVE_MARK      | VARCHAR2(1 char)  | 依規調整案件                     |    |
|     | LNLOA_BARGAIN_MARK      | VARCHAR2(1 char)  | 協議案件註記(個別協商)               |    |
|     | LNLOA_LAD_TYPE_CODE     | VARCHAR2(1 char)  | 階梯型貸款註記                    |    |
|     | LNLOA_72_2_FLAG         | VARCHAR2(1 char)  | 銀行法72-2條用途別拆分註記            |    |
|     | LNLOA_OBS_BAL_TYPE      | VARCHAR2(1 char)  | 債信不良列報逾放申報類別(聯徵需調整案件-甲乙類別) |    |
|     | LNLOA_OBSERVE_BAL_TYPE  | VARCHAR2(1 char)  |                            |    |
|     | LNLOA_NON_DLY_ZERO      | NUMBER(1,0)       | 非逾期註記-權數零(資評損失金額歸零)        |    |
|     | LNLOA_SUBSIDY_INT       | NUMBER(9,0)       | 補貼息                        |    |
|     | LNLOA_COL_LOST_KIND     | VARCHAR2(1 char)  | 擔保品處份案件資評類別調整              |    |
|     | LNLOA_ADJ_LOST_KIND     | VARCHAR2(1 char)  | 資產評估類別調整                   |    |
|     | LNLOA_NEGLS_DATE        | DATE              | 債清條例-前置協商狀態日期              |    |
|     | LNLOA_NEGLS_STAT        | VARCHAR2(1 char)  | 債清條例-前置協商狀態                |    |
|     | LNLOA_RENEW_DATE        | DATE              | 更生狀態日期                     |    |
|     | LNLOA_RENEW_STAT        | VARCHAR2(1 char)  | 更生狀態                       |    |
|     | LNLOA_LIQUIDATE_DATE    | DATE              | 清算狀態日期                     |    |
|     | LNLOA_LIQUIDATE_STAT    | VARCHAR2(1 char)  | 清算狀態                       |    |
|     | LNLOA_ADVFEE_AMT        | NUMBER(7,0)       | 預收帳務管理費                    |    |
|     | LNLOA_REV_DB_FLAG       | VARCHAR2(1 char)  | 預約自動扣繳註記                   |    |
|     | LNLOA_JCIC_FLAG         | VARCHAR2(1 char)  | 報送聯徵註記                     |    |
|     | LNLOA_OTH_DEBT_CODE     | VARCHAR2(1 char)  | 有無對外債權註記                   |    |
|     | LNLOA_DEBT_CLOSE_DATE   | DATE              | 對外債權結清日期                   |    |
|     | LNLOA_DELAY_LAST_B_DATE | DATE              | 最近逾期起日                     |    |
|     | LNLOA_NEADJ_STAT        | VARCHAR2(1 char)  | 前置調解狀態                     |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間                     |
### VW_ODS_D_LNMOVABL
#### 擔保品－動產資料檔-book
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNMOV_COLA_NO             | VARCHAR2(10 char) | 擔保品編號       |    |
|     | LNMOV_COLA_CODE           | VARCHAR2(3 char)  | 擔保品類別代號     |    |
|     | LNMOV_GET_DATE            | DATE              | 建檔日期        |    |
|     | LNMOV_REC_STAT            | VARCHAR2(1 char)  | 記錄狀態        |    |
|     | LNMOV_CNT                 | NUMBER(2,0)       | 共用件數        |    |
|     | LNMOV_SET_DATE_1          | DATE              | 設定日期(一)     |    |
|     | LNMOV_SET_SEQ_1           | NUMBER(1,0)       | 設定順位(一)     |    |
|     | LNMOV_SET_AMT_1           | NUMBER(11,0)      | 設定金額(一)     |    |
|     | LNMOV_HYPOTHEC_DUE_DATE_1 | DATE              | 抵押權到期日(一)   |    |
|     | LNMOV_COLA_AMT_1          | NUMBER(11,0)      | 擔保金額(一)     |    |
|     | LNMOV_SET_DATE_2          | DATE              | 設定日期(二)     |    |
|     | LNMOV_SET_SEQ_2           | NUMBER(1,0)       | 設定順位(二)     |    |
|     | LNMOV_SET_AMT_2           | NUMBER(11,0)      | 設定金額(二)     |    |
|     | LNMOV_HYPOTHEC_DUE_DATE_2 | DATE              | 抵押權到期日(二)   |    |
|     | LNMOV_COLA_AMT_2          | NUMBER(11,0)      | 擔保金額(二)     |    |
|     | LNMOV_SET_DATE_3          | DATE              | 設定日期(三)     |    |
|     | LNMOV_SET_SEQ_3           | NUMBER(1,0)       | 設定順位(三)     |    |
|     | LNMOV_SET_AMT_3           | NUMBER(11,0)      | 設定金額(三)     |    |
|     | LNMOV_HYPOTHEC_DUE_DATE_3 | DATE              | 抵押權到期日(三)   |    |
|     | LNMOV_COLA_AMT_3          | NUMBER(11,0)      | 擔保金額(三)     |    |
|     | LNMOV_APLRAISE_VALUE      | NUMBER(11,0)      | 鑑價總值        |    |
|     | LNMOV_LICENCE_NO          | VARCHAR2(7 char)  | 牌照號碼        |    |
|     | LNMOV_PRODUCT_DATE        | VARCHAR2(6 char)  | 出廠年月        |    |
|     | LNMOV_BRAND               | VARCHAR2(10 char) | 車種/廠牌       |    |
|     | LNMOV_TYPE                | VARCHAR2(20 char) | 型式          |    |
|     | LNMOV_INSUR_MARK          | VARCHAR2(1 char)  | 保險單建檔註記     |    |
|     | LNMOV_INSUR_CNT           | NUMBER(2,0)       | 保險單已建張數     |    |
|     | LNMOV_OWNER_ID            | VARCHAR2(11 char) | 擔保品所有權人ID   |    |
|     | LNMOV_APPR_DATE           | DATE              | 鑑估日期        |    |
|     | LNMOV_OTH_AMT             | NUMBER(11,0)      | 其他債權人前已設定金額 |    |
|     | LNMOV_SALE_AMT            | NUMBER(11,0)      | 處分價格        |    |
|     | LNMOV_SALE_DATE           | DATE              | 處分價格輸入日     |    |
|     | LNMOV_DURABLE_LIFE        | NUMBER(2,0)       | 耐用年限        |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間      |
### VW_ODS_D_LNMRGCTL
#### 額度合併控管資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNCTL_NO        | VARCHAR2(8 char)  | 合併控管編號       |    |
| PK  | LNCTL_APRV_NO   | VARCHAR2(12 char) | 核准號碼         |    |
|     | LNCTL_REC_STAT  | VARCHAR2(1 char)  | 記錄狀態         |    |
| PK  | LNCTL_CTL_KIND  | VARCHAR2(1 char)  | 控管項目         |    |
|     | LNCTL_CURR_CODE | VARCHAR2(3 char)  | 幣別(首筆資料使用)   |    |
|     | LNCTL_AMT       | NUMBER(15,2)      | 共用額度(首筆資料使用) |    |
|     | LNCTL_HOLD_AMT  | NUMBER(15,2)      | 圈存金額(首筆資料使用) |    |
|     | LNCTL_BAL       | NUMBER(15,2)      | 現貸餘額(首筆資料使用) |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間       |

### VW_ODS_D_LNODMST
#### 透支主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNODM_ACC_ID_NO        | VARCHAR2(13 char) | 存款帳號                 |    |
| PK  | LNODM_APRV_NO          | VARCHAR2(12 char) | 核准號碼                 |    |
| PK  | LNODM_USE_SEQ          | NUMBER(2,0)       | 動用順序                 |    |
|     | LNODM_OD_TYPE          | VARCHAR2(2 char)  | 透支型態                 |    |
|     | LNODM_LN_ID_NO         | VARCHAR2(18 char) | 授信帳號                 |    |
|     | LNODM_CRT_DATE         | DATE              | 建檔日期                 |    |
|     | LNODM_STAT             | VARCHAR2(1 char)  | 記錄狀態                 |    |
|     | LNODM_OD_BEG_DATE      | DATE              | 透支契約起日               |    |
|     | LNODM_OD_END_DATE      | DATE              | 透支契約迄日               |    |
|     | LNODM_INT_DAY          | NUMBER(2,0)       | 結息日                  |    |
|     | LNODM_OD_RATE          | NUMBER(6,4)       | 透支利率                 |    |
|     | LNODM_OD_INDE_RATE     | NUMBER(6,4)       | 透支利率差幅               |    |
|     | LNODM_OD_COLA_SET_DATE | DATE              | 擔保物權設定完成日            |    |
|     | LNODM_AUM_BAS_DATE     | DATE              | 積數計算基準日(實際積數)        |    |
|     | LNODM_L_OD_DATE        | DATE              | 上次交易日                |    |
|     | LNODM_CAL_END_DATE     | DATE              | 計息積數計算迄日             |    |
|     | LNODM_INT_E_DATE       | DATE              | 繳息迄日(非金太郎)           |    |
|     | LNODM_FST_OV_OD_DATE   | DATE              | 轉息超額日期               |    |
|     | LNODM_OD_INT_TYPE      | VARCHAR2(1 char)  | 透支積數計算型態             |    |
|     | LNODM_APRV_AMT         | NUMBER(15,2)      | 核准額度                 |    |
|     | LNODM_BAL              | NUMBER(15,2)      | 當日最後動用餘額(貸放餘額)       |    |
|     | LNODM_TD_MAX_BAL       | NUMBER(15,2)      | 當日最高動用餘額             |    |
|     | LNODM_ADJ_AMT          | NUMBER(15,2)      | 可調整金額(For當日最高)       |    |
|     | LNODM_REF_AUM          | NUMBER(15,0)      | 本月累計實際積數             |    |
|     | LNODM_TY_REF_AUM       | NUMBER(15,0)      | 本年度累計實際積數            |    |
|     | LNODM_OD_AUM_1         | NUMBER(15,0)      | 計息積數-1(未除36500)      |    |
|     | LNODM_OD_AUM_2         | NUMBER(15,0)      | 計息積數-2(未除36500)      |    |
|     | LNODM_OD_AUM_3         | NUMBER(15,0)      | 計息積數-3(未除36500)      |    |
|     | LNODM_OD_AUM_4         | NUMBER(15,0)      | 計息積數-4(未除36500)      |    |
|     | LNODM_OD_AUM_5         | NUMBER(15,0)      | 計息積數-5(未除36500)      |    |
|     | LNODM_OV_OD_AUM        | NUMBER(15,0)      | 逾期計息積數(未除36500)      |    |
|     | LNODM_OV_OD_AUM_EXT    | NUMBER(15,0)      | 逾期六個月以上計息積數(未除36500) |    |
|     | LNODM_OV_L_REF_AUM     | NUMBER(15,0)      | 上次逾期實際積數             |    |
|     | LNODM_OV_REF_AUM       | NUMBER(15,0)      | 逾期實際積數               |    |
|     | LNODM_BOA_RATE_FLAG    | VARCHAR2(1 char)  | 牌告利率變動旗標(綜存質借分配使用)   |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間               |

### VW_ODS_D_LNPACT
#### 行內協商案件資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNPAT_NO             | VARCHAR2(8 char)  | 申請序號               |    |
|     | LNPAT_ID_CODE        | VARCHAR2(11 char) | 授信戶統編              |    |
|     | LNPAT_APRV_NO        | VARCHAR2(12 char) | 核准號碼               |    |
| PK  | LNPAT_LN_ID_NO       | VARCHAR2(18 char) | 貸放帳號               |    |
|     | LNPAT_APL_DATE       | DATE              | 申請日期               |    |
|     | LNPAT_APR_DATE       | DATE              | 核准/駁回日期            |    |
|     | LNPAT_EFF_INTVL      | DATE              | 核准有效期限             |    |
|     | LNPAT_SIGN_DATE      | DATE              | 簽約日                |    |
|     | LNPAT_PACT_STAT      | VARCHAR2(1 char)  | 行內協商狀態             |    |
|     | LNPAT_GOV_NON_LIST   | VARCHAR2(1 char)  | 不符合主管機關免列報條件       |    |
|     | LNPAT_OV_REPORT      | VARCHAR2(1 char)  | 非列報逾放案件_依上月逾期狀況申報  |    |
|     | LNPAT_FST_PAY_DATE   | DATE              | 協議首付日              |    |
|     | LNPAT_DELAY_KIND     | VARCHAR2(1 char)  | 逾期種類_本金/利息         |    |
|     | LNPAT_OVER_DAYS_O    | VARCHAR2(4 char)  | 逾期by天數_原分類         |    |
|     | LNPAT_OVER_MONTHS_O  | VARCHAR2(4 char)  | 逾期by月數_逾期月數_原分類    |    |
|     | LNPAT_OVER_REMAINS_O | VARCHAR2(2 char)  | 逾期by月數_逾期天數_原分類    |    |
|     | LNPAT_VIEW_KIND      | VARCHAR2(1 char)  | 逾期_乙類_原分類          |    |
|     | LNPAT_VIEW_KIND_2    | VARCHAR2(1 char)  | 逾期_甲類_原分類          |    |
|     | LNPAT_STOP_DATE      | DATE              | 免列報日期_連續繳款六期之當月月底日 |    |
|     | LNPAT_SIGN_STAT      | VARCHAR2(1 char)  | 簽約狀態               |    |
|     | LNPAT_NON_SELF       | VARCHAR2(1 char)  | 第三人申請              |    |
|     | LNPAT_GURN_KIND      | VARCHAR2(1 char)  | 保人免責               |    |
|     | LNPAT_ADJ_DATE       | DATE              | 申請/簽約異動日期          |    |
|     | LNPAT_UPD_DATE       | DATE              | 異動日期               |    |
|     | LNPAT_AJD_TLR        | VARCHAR2(6 char)  | 異動櫃員               |    |
|     | LNPAT_REC_STAT       | VARCHAR2(1 char)  | 記錄狀態               |    |
|     | LNPAT_SIGN_OV_KIND   | VARCHAR2(1 char)  | 預定簽約帳齡             |    |
|     | LNPAT_COLA_KIND      | VARCHAR2(1 char)  | 擔保物權狀態             |    |
|     | LNPAT_APLY_RATE      | NUMBER(6,4)       |                    |    |
|     | TBL_UPD_TIM          | TIMESTAMP         | 表格更新時間             |

### VW_ODS_D_LNPROJ
#### 專案代碼檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNPRJ_CODE          | VARCHAR2(5 char)  | 專案代號         |    |
| PK  | LNPRJ_BR            | VARCHAR2(4 char)  | 專案單位別        |    |
|     | LNPRJ_NAME          | VARCHAR2(50 char) | 專案名稱         |    |
|     | LNPRJ_AMT           | NUMBER(18,2)      | 專案分(全)行總額度   |    |
|     | LNPRJ_BR_APL_CNT    | NUMBER(8,0)       | 分(全)行申請中件數合計 |    |
|     | LNPRJ_BR_APL_AMT    | NUMBER(18,2)      | 分(全)行申請中金額合計 |    |
|     | LNPRJ_BR_APRV_CNT   | NUMBER(8,0)       | 分(全)行已核准件數合計 |    |
|     | LNPRJ_BR_APRV_AMT   | NUMBER(18,2)      | 分(全)行已核准金額合計 |    |
|     | LNPRJ_BR_REJECT_CNT | NUMBER(8,0)       | 分(全)行駁回件數合計  |    |
|     | LNPRJ_BR_REJECT_AMT | NUMBER(18,2)      | 分(全)行駁回金額合計  |    |
|     | LNPRJ_VALID_DATE    | DATE              | 生效起日         |    |
|     | LNPRJ_INVALID_DATE  | DATE              | 生效迄日         |    |
|     | LNPRJ_DUP_MARK      | VARCHAR2(1 char)  | 客戶是否可重複申請註記  |    |
|     | TBL_UPD_TIM         | TIMESTAMP         | 表格更新時間       |
### VW_ODS_D_LNRATEDI
#### 分段利率檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNRDI_ID_CODE        | VARCHAR2(1 char)  | 分段利率識別碼  |    |
| PK  | LNRDI_NO             | VARCHAR2(18 char) | 分段利率代碼   |    |
|     | LNRDI_CRT_DATE       | DATE              | 建檔日期     |    |
|     | LNRDI_REC_STAT       | VARCHAR2(1 char)  | 記錄狀態     |    |
| PK  | LNRDI_ASSIGN_TYPE    | VARCHAR2(1 char)  | 指定方式     |    |
| PK  | LNRDI_EFFEC_DATE     | DATE              | 利率生效日    |    |
|     | LNRDI_INTVL_UNIT     | VARCHAR2(1 char)  | 期間單位     |    |
|     | LNRDI_ADJ_TYPE       | VARCHAR2(1 char)  | 利率調整方式   |    |
|     | LNRDI_R_INTVL        | NUMBER(2,0)       | 利率調整週期   |    |
|     | LNRDI_R_INTVL_UNIT   | VARCHAR2(1 char)  | 利率調整週期單位 |    |
|     | LNRDI_INT_RATE_BASIC | NUMBER(3,0)       | 放款訂價利率   |    |
|     | LNRDI_INDE_RATE      | NUMBER(6,4)       | 利率差幅     |    |
|     | LNRDI_INT_RATE       | NUMBER(6,4)       | 貸放利率     |    |
|     | LNRDI_OFFSET_RATE    | NUMBER(6,4)       | 補貼利率     |    |
|     | LNRDI_INT_RATE_REAL  | NUMBER(6,4)       | 實收利率     |    |
|     | LNRDI_HANG_RATE      | NUMBER(6,4)       | 掛帳利率     |    |
|     | LNRDI_CHG_DATE       | DATE              | 異動日期     |    |
|     | LNRDI_CHG_SUP        | VARCHAR2(6 char)  | 異動主管代號   |    |
|     | TBL_UPD_TIM          | TIMESTAMP         | 表格更新時間   |
### VW_ODS_D_LNREALTY
#### 擔保品－不動產資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| Key | 欄位名稱                      | 欄位資料型態            | 欄位說明                     | 備註 |
| PK  | LNRLY_COLA_NO             | VARCHAR2(10 char) | 擔保品編號                    |    |
| PK  | LNRLY_COLA_CODE           | VARCHAR2(3 char)  | 擔保品類別代號                  |    |
|     | LNRLY_SET_GET_DATE        | DATE              | 建檔日期                     |    |
|     | LNRLY_REC_STAT            | VARCHAR2(1 char)  | 記錄狀態                     |    |
|     | LNRLY_APLRAISE_VALUE      | NUMBER(11,0)      | 鑑價總值                     |    |
|     | LNRLY_CNT                 | NUMBER(2,0)       | 共用件數                     |    |
|     | LNRLY_SET_DATE_1          | DATE              | 設定日期(一)                  |    |
|     | LNRLY_SET_SEQ_1           | NUMBER(1,0)       | 設定順位(一)                  |    |
|     | LNRLY_SET_AMT_1           | NUMBER(11,0)      | 設定金額(一)                  |    |
|     | LNRLY_HYPOTHEC_DUE_DATE_1 | DATE              | 擔保債權確定期日/抵押權到期日(一)       |    |
|     | LNRLY_COLA_AMT_1          | NUMBER(11,0)      | 擔保金額(一)                  |    |
|     | LNRLY_SET_DATE_2          | DATE              | 設定日期(二)                  |    |
|     | LNRLY_SET_SEQ_2           | NUMBER(1,0)       | 設定順位(二)                  |    |
|     | LNRLY_SET_AMT_2           | NUMBER(11,0)      | 設定金額(二)                  |    |
|     | LNRLY_HYPOTHEC_DUE_DATE_2 | DATE              | 擔保債權確定期日/抵押權到期日(二)       |    |
|     | LNRLY_COLA_AMT_2          | NUMBER(11,0)      | 擔保金額(二)                  |    |
|     | LNRLY_SET_DATE_3          | DATE              | 設定日期(三)                  |    |
|     | LNRLY_SET_SEQ_3           | NUMBER(1,0)       | 設定順位(三)                  |    |
|     | LNRLY_SET_AMT_3           | NUMBER(11,0)      | 設定金額(三)                  |    |
|     | LNRLY_HYPOTHEC_DUE_DATE_3 | DATE              | 擔保債權確定期日/抵押權到期日(三)       |    |
|     | LNRLY_COLA_AMT_3          | NUMBER(11,0)      | 擔保金額(三)                  |    |
|     | LNRLY_SET_DATE_4          | DATE              | 設定日期(四)                  |    |
|     | LNRLY_SET_SEQ_4           | NUMBER(1,0)       | 設定順位(四)                  |    |
|     | LNRLY_SET_AMT_4           | NUMBER(11,0)      | 設定金額(四)                  |    |
|     | LNRLY_HYPOTHEC_DUE_DATE_4 | DATE              | 擔保債權確定期日/抵押權到期日(四)       |    |
|     | LNRLY_COLA_AMT_4          | NUMBER(11,0)      | 擔保金額(四)                  |    |
|     | LNRLY_SET_DATE_5          | DATE              | 設定日期(五)                  |    |
|     | LNRLY_SET_SEQ_5           | NUMBER(1,0)       | 設定順位(五)                  |    |
|     | LNRLY_SET_AMT_5           | NUMBER(11,0)      | 設定金額(五)                  |    |
|     | LNRLY_HYPOTHEC_DUE_DATE_5 | DATE              | 擔保債權確定期日/抵押權到期日(五)       |    |
|     | LNRLY_COLA_AMT_5          | NUMBER(11,0)      | 擔保金額(五)                  |    |
|     | LNRLY_HYPOTHEC_MARK       | VARCHAR2(1 char)  | 抵押權註記                    |    |
|     | LNRLY_INSUR_MARK          | VARCHAR2(1 char)  | 保險單建檔註記                  |    |
|     | LNRLY_INSUR_CNT           | NUMBER(2,0)       | 保險單已建張數                  |    |
|     | LNRLY_APPR_DATE           | DATE              | 鑑估日期                     |    |
|     | LNRLY_OTH_AMT             | NUMBER(11,0)      | 其他債權人前已設定金額              |    |
|     | LNRLY_SALE_AMT            | NUMBER(11,0)      | 處分價格                     |    |
|     | LNRLY_RESTRICT_DATE       | DATE              | 限制塗銷日期                   |    |
|     | LNRLY_SPACE               | VARCHAR2(8 char)  | 保留位(原土地增值稅單位為千元)         |    |
|     | LNRLY_COM_TRACT_PRICE     | NUMBER(11,0)      | 買賣契約價格                   |    |
|     | LNRLY_COM_TRACT_DATE      | DATE              | 買賣契約日期                   |    |
|     | LNRLY_SALE_DATE           | DATE              | 處分日期                     |    |
|     | LNRLY_RIGHT_KIND          | VARCHAR2(1 char)  | 權利種類                     |    |
|     | LNRLY_MORTGAGE_REASON     | VARCHAR2(1 char)  | 最高限額抵押權確定事由              |    |
|     | LNRLY_RECV_DATE           | DATE              | 收文日期                     |    |
|     | LNRLY_RECV_DOC            | VARCHAR2(30 char) | 收文案號                     |    |
|     | LNRLY_REVK_DATE           | DATE              | 撤銷日期                     |    |
|     | LNRLY_REVK_DOC            | VARCHAR2(30 char) | 撤銷案號                     |    |
|     | LNRLY_COLA_MARK           | VARCHAR2(1 char)  | 擔保註記                     |    |
|     | LNRLY_DEBT_PERC           | NUMBER(3,0)       | 貸款成數                     |    |
|     | LNRLY_DEBT_LOA            | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-借款          |    |
|     | LNRLY_DEBT_ODM            | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-透支          |    |
|     | LNRLY_DEBT_DISCOUNT       | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-貼現          |    |
|     | LNRLY_DEBT_CLEAN_BILL     | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-買入光票        |    |
|     | LNRLY_DEBT_PAYED          | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-墊款          |    |
|     | LNRLY_DEBT_ACCEPT         | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-承兌          |    |
|     | LNRLY_DEBT_COM_GURN       | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-委任保證        |    |
|     | LNRLY_DEBT_LC             | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-開發信用狀       |    |
|     | LNRLY_DEBT_NEGOT          | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-進出口押匯       |    |
|     | LNRLY_DEBT_BILL           | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-票據          |    |
|     | LNRLY_DEBT_GURN           | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-保證          |    |
|     | LNRLY_DEBT_CREDIT         | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-信用卡契約       |    |
|     | LNRLY_DEBT_BUY            | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-應收帳款承購契約    |    |
|     | LNRLY_DEBT_GOODS_CONTRACT | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-衍生性金融商品交易契約 |    |
|     | LNRLY_DEBT_STORE_CONTRACT | VARCHAR2(1 char)  | 最高限額抵押權設定之債務-特約商店契約      |    |
|     | LNRLY_LAND_INC_TAX        | NUMBER(11,0)      | 土地增值稅                    |    |
|     | LNRLY_PLAN_MARK           | VARCHAR2(1 char)  | 有無興建計劃                   |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間                   |

### VW_ODS_D_LNRECORD
#### 繳款動用記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNREC_LN_ID_NO         | VARCHAR2(18 char) | 授信帳號          |    |
|     | LNREC_REC_STAT         | VARCHAR2(1 char)  | 記錄狀態          |    |
|     | LNREC_TXN_SEQ_NO       | VARCHAR2(13 char) | 交易序號          |    |
| PK  | LNREC_TXN_DATE         | DATE              | 交易日期/帳務日      |    |
| PK  | LNREC_TXN_TIME         | NUMBER(6,0)       | 交易時間          |    |
|     | LNREC_ACC_CODE         | VARCHAR2(5 char)  | 科子目           |    |
|     | LNREC_CURR_CODE        | VARCHAR2(3 char)  | 幣別            |    |
|     | LNREC_TXN_CODE         | VARCHAR2(5 char)  | 交易代號          |    |
|     | LNREC_BEF_BAL          | NUMBER(15,2)      | 交易前現貸餘額(計收本金) |    |
|     | LNREC_AFT_BAL          | NUMBER(15,2)      | 交易後現貸餘額       |    |
|     | LNREC_BEG_DATE         | DATE              | 起日            |    |
|     | LNREC_END_DATE         | DATE              | 迄日            |    |
|     | LNREC_INT_RATE         | NUMBER(6,4)       | 利率/費率/稅率      |    |
|     | LNREC_PRINCIPAL        | NUMBER(15,2)      | 本金            |    |
|     | LNREC_INT              | NUMBER(15,2)      | 應收利息          |    |
|     | LNREC_INT_REAL         | NUMBER(15,2)      | 實收利息          |    |
|     | LNREC_INT_MARK         | VARCHAR2(1 char)  | 減免註記-利息       |    |
|     | LNREC_DELAY_INT        | NUMBER(15,2)      | 應收遲延息         |    |
|     | LNREC_DELAY_INT_REAL   | NUMBER(15,2)      | 實收遲延息         |    |
|     | LNREC_DELAY_INT_MARK   | VARCHAR2(1 char)  | 減免註記-遲延息      |    |
|     | LNREC_PENALTY_AMT      | NUMBER(15,2)      | 應收違約金         |    |
|     | LNREC_PENALTY_AMT_REAL | NUMBER(15,2)      | 實收違約金         |    |
|     | LNREC_PENALTY_AMT_MARK | VARCHAR2(1 char)  | 減免註記-違約金      |    |
|     | LNREC_BPEN_AMT         | NUMBER(15,2)      | 應收提前清償違約金     |    |
|     | LNREC_BPEN_AMT_REAL    | NUMBER(15,2)      | 實收提前清償違約金     |    |
|     | LNREC_BPEN_AMT_MARK    | VARCHAR2(1 char)  | 減免註記-提前清償違約金  |    |
|     | LNREC_FEE_AMT          | NUMBER(15,2)      | 手續費(卡貸/金太郎)   |    |
|     | LNREC_INS_AMT          | NUMBER(15,2)      | 保險費(卡貸)       |    |
|     | LNREC_ADV_FLAG         | VARCHAR2(1 char)  | 預收收款註記        |    |
|     | LNREC_ADV_AMT          | NUMBER(15,2)      | 預收款沖銷金額       |    |
|     | LNREC_TXN_TYPE         | VARCHAR2(2 char)  | 交易型態          |    |
|     | LNREC_AMT_KIND_M       | VARCHAR2(2 char)  | 金額類別-大類       |    |
|     | LNREC_AMT_KIND_S       | VARCHAR2(2 char)  | 金額類別-細項       |    |
|     | LNREC_BILL_EX_NO       | VARCHAR2(16 char) | 交換號碼          |    |
|     | LNREC_DLY_DAYS         | NUMBER(4,0)       | 逾期日數          |    |
|     | LNREC_SUP_CODE         | VARCHAR2(6 char)  | 主管代號          |    |
|     | LNREC_SYS_DATE         | DATE              | 系統日期/客戶交易日    |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間        |

### VW_ODS_D_LNREL
#### 利害/同一關係人檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNREL_CODE         | VARCHAR2(1 char)  | 類別代號        |    |
| PK  | LNREL_MARK         | VARCHAR2(1 char)  | 身分註記        |    |
| PK  | LNREL_ID_CODE      | VARCHAR2(11 char) | 關係者ID       |    |
| PK  | LNREL_SHIP_ID_CODE | VARCHAR2(11 char) | 親屬ID        |    |
| PK  | LNREL_BUSI_ID_CODE | VARCHAR2(11 char) | 事業ID        |    |
|     | LNREL_NAME         | VARCHAR2(30 char) | 姓名/名稱       |    |
| PK  | LNREL_STAT_CODE    | VARCHAR2(2 char)  | 身分別         |    |
|     | LNREL_SHIP_CODE    | VARCHAR2(3 char)  | 親等代號        |    |
|     | LNREL_STK_RATE     | NUMBER(7,4)       | 持股比例        |    |
|     | LNREL_BR_SR_DATA   | VARCHAR2(4 char)  | 所屬單位別       |    |
|     | LNREL_PART_ID_CODE | VARCHAR2(11 char) | 所屬法人ID      |    |
|     | LNREL_BEG_DATE     | DATE              | 任職起日        |    |
|     | LNREL_END_DATE     | DATE              | 任職迄日        |    |
|     | LNREL_REC_STAT     | VARCHAR2(1 char)  | 記錄狀態        |    |
|     | LNREL_UPDATE_DATE  | DATE              | 維護日期        |    |
|     | LNREL_FINACE_STAT  | VARCHAR2(1 char)  | 金控身分別       |    |
|     | LNREL_RELATION_G   | VARCHAR2(4 char)  | 關係代號(同一關係用) |    |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間      |

### VW_ODS_D_LNSPRTN
#### 還款計劃資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNSPR_LN_NO            | VARCHAR2(14 char) | 授信號碼                |    |
| PK  | LNSPR_LN_SER_NO        | VARCHAR2(4 char)  | 貸放分號                |    |
|     | LNSPR_CRT_DATE         | DATE              | 建檔日期                |    |
|     | LNSPR_REC_STAT         | VARCHAR2(1 char)  | 記錄狀態                |    |
|     | LNSPR_CHG_DATE         | DATE              | 異動日期                |    |
| PK  | LNSPR_BEG_DATE         | DATE              | 還款生效日               |    |
|     | LNSPR_RTRN_TYPE        | VARCHAR2(1 char)  | 還款方式                |    |
|     | LNSPR_INT_INTVL        | VARCHAR2(2 char)  | 繳息週期                |    |
|     | LNSPR_PRI_INTVL        | VARCHAR2(2 char)  | 還本週期                |    |
|     | LNSPR_INT_UNIT         | VARCHAR2(2 char)  |                     |    |
|     | LNSPR_FIXAMT_RTRN_MARK | VARCHAR2(1 char)  | 攤還額約定方式(約定攤還固定金額註記) |    |
|     | LNSPR_EACH_AMT         | NUMBER(15,2)      | 固定還款本金(息)           |    |
|     | LNSPR_CHG_SUP          | VARCHAR2(6 char)  | 主管代號                |    |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間              |
### VW_ODS_D_LNSTOCK
#### 擔保品－股票資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LNSTK_COLA_NO           | VARCHAR2(10 char) | 擔保品編號                |    |
|     | LNSTK_APRV_NO           | VARCHAR2(12 char) | 報送聯徵作業對應核准號碼         |    |
|     | LNSTK_REC_STATUS        | VARCHAR2(1 char)  | 記錄狀態                 |    |
|     | LNSTK_COLA_CODE         | VARCHAR2(3 char)  | 擔保品類別代號              |    |
|     | LNSTK_CNT               | NUMBER(2,0)       | 共用件數                 |    |
|     | LNSTK_STK_NO            | VARCHAR2(6 char)  | 股票代號                 |    |
|     | LNSTK_OWNER_ID_CODE     | VARCHAR2(11 char) | 股票所有人IDNO            |    |
|     | LNSTK_OWNER_NAME        | VARCHAR2(30 char) | 股票持有人姓名              |    |
|     | LNSTK_INNER_PRO_TITLE   | VARCHAR2(1 char)  | 公司內部人職稱              |    |
|     | LNSTK_INNER_ID_MARK     | VARCHAR2(1 char)  | 公司內部人身分註記            |    |
|     | LNSTK_REL_ID_CODE       | VARCHAR2(11 char) | 法定關係人ID              |    |
|     | LNSTK_APRV_RATE         | NUMBER(5,2)       | 股票放款率(%)             |    |
|     | LNSTK_HOLD_RATE_MARK    | NUMBER(1,0)       | 計算維持率                |    |
|     | LNSTK_CRT_DATE          | DATE              | 建檔日期                 |    |
|     | LNSTK_CHG_DATE          | DATE              | 異動日期(初次建檔及異動時寫入股票交易檔 |    |
|     | LNSTK_SET_RLS_DATE      | DATE              | 最近設/解質日期             |    |
|     | LNSTK_STORE_STK_BAL     | NUMBER(14,0)      | 設質股數餘額               |    |
|     | LNSTK_APLRAISE_VALUE    | NUMBER(11,0)      | 鑑估值                  |    |
|     | LNSTK_COLA_AMT          | NUMBER(11,0)      | 授信(擔保)金額(放款值)        |    |
|     | LNSTK_APPR_DATE         | DATE              | 鑑估日期                 |    |
|     | LNSTK_SALE_AMT          | NUMBER(11,0)      | 處分價格                 |    |
|     | LNSTK_SALE_DATE         | DATE              | 處分日期                 |    |
|     | LNSTK_HYPOTHEC_DUE_DATE | DATE              | 擔保債權確定期日             |    |
|     | LNSTK_EVALUATE_BASE     | VARCHAR2(1 char)  | 每股單價鑑估標準             |    |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間               |
### VW_ODS_D_LNTIME
#### 質借存單資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LNTIM_ID_CODE   | VARCHAR2(11 char) | 借款人ID     |    |
| PK  | LNTIM_APRV_NO   | VARCHAR2(12 char) | 核准號碼      |    |
| PK  | LNTIM_TI_NO     | VARCHAR2(13 char) | 存單號碼      |    |
|     | LNTIM_CRT_DATE  | DATE              | 建檔日期/質設日期 |    |
|     | LNTIM_FILE_STAT | VARCHAR2(1 char)  | 記錄狀態      |    |
|     | LNTIM_STAT      | VARCHAR2(1 char)  | 質設狀態      |    |
|     | LNTIM_RLS_DATE  | DATE              | 解質日期      |    |
|     | LNTIM_AMT       | NUMBER(15,2)      | 存單質設金額    |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間    |
### VW_ODS_M_LN_RTNPRI
#### 本金到期分析資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | PRI_LN_ID_NO   | VARCHAR2(18 char) | 貸放帳號    |    |
|     | PRI_N_RTN_DATE | DATE              | 下次還本日   |    |
|     | PRI_RTN_AMT_01 | NUMBER(11,0)      | 近1月還本金  |    |
|     | PRI_RTN_AMT_02 | NUMBER(11,0)      | 近2月還本金  |    |
|     | PRI_RTN_AMT_03 | NUMBER(11,0)      | 近3月還本金  |    |
|     | PRI_RTN_AMT_04 | NUMBER(11,0)      | 近4月還本金  |    |
|     | PRI_RTN_AMT_05 | NUMBER(11,0)      | 近5月還本金  |    |
|     | PRI_RTN_AMT_06 | NUMBER(11,0)      | 近6月還本金  |    |
|     | PRI_RTN_AMT_07 | NUMBER(11,0)      | 近7月還本金  |    |
|     | PRI_RTN_AMT_08 | NUMBER(11,0)      | 近8月還本金  |    |
|     | PRI_RTN_AMT_09 | NUMBER(11,0)      | 近9月還本金  |    |
|     | PRI_RTN_AMT_10 | NUMBER(11,0)      | 近10月還本金 |    |
|     | PRI_RTN_AMT_11 | NUMBER(11,0)      | 近11月還本金 |    |
|     | PRI_RTN_AMT_12 | NUMBER(11,0)      | 近12月還本金 |    |
|     | PRI_RTN_AMT_13 | NUMBER(11,0)      | 近13月還本金 |    |
|     | PRI_RTN_AMT_14 | NUMBER(11,0)      | 近14月還本金 |    |
|     | PRI_RTN_AMT_15 | NUMBER(11,0)      | 近15月還本金 |    |
|     | PRI_RTN_AMT_16 | NUMBER(11,0)      | 近16月還本金 |    |
|     | PRI_RTN_AMT_17 | NUMBER(11,0)      | 近17月還本金 |    |
|     | PRI_RTN_AMT_18 | NUMBER(11,0)      | 近18月還本金 |    |
|     | PRI_RTN_BAL    | NUMBER(11,0)      | 剩餘還本金   |    |
|     | TBL_UPD_TIM    | TIMESTAMP         | 表格更新時間  |
### VW_ODS_M_LNBPMREC2
#### 最近3個月內提前清償資料(核心06920)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | OUT1_LN_ID_NO           | VARCHAR2(18 char)  | 授信帳號                              |    |
|     | OUT1_APRV_NO            | VARCHAR2(12 char)  | 核准號碼                              |    |
|     | OUT1_TXN_DATE           | DATE               | 交易日                               |    |
|     | OUT1_PRINCIPAL          | NUMBER(13,0)       | 還本金額                              |    |
|     | OUT1_SALES_EMP_NO       | VARCHAR2(6 char)   | 推廣人員                              |    |
|     | OUT1_RCV_AO             | VARCHAR2(6 char)   | 承作AO                              |    |
|     | OUT1_BPENR              | NUMBER(13,0)       | 提前清償違約金                           |    |
|     | OUT1_BPN_FLAG           | VARCHAR2(1 char)   | 貸放三個月內提前清償註記                      |    |
|     | OUT1_ID_CODE            | VARCHAR2(11 char)  |                                   |    |
|     | OUT1_DAT_DATE           | DATE               | 資料日期                              |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |
### VW_ODS_M_LNBRM476
#### 信用評等更新明細表
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | M476_BUSI_NO            | VARCHAR2(6 char)   | 業務分類代碼                            |    |
|     | M476_CUST_NAME          | VARCHAR2(20 char)  | 戶名                                |    |
|     | M476_ID_CODE            | VARCHAR2(11 char)  | 授信戶ID                             |    |
|     | M476_LN_RATING          | VARCHAR2(1 char)   | 綜合風險指標                            |    |
|     | M476_HONOR_RATING       | VARCHAR2(1 char)   | 財務風險指標                            |    |
|     | M476_TCRI_CODE          | VARCHAR2(1 char)   | 經濟新報評等                            |    |
|     | M476_APRV_DATE          | DATE               | 核准日期                              |    |
|     | M476_APRV_NO            | VARCHAR2(12 char)  | 核准號碼                              |    |
|     | M476_LN_NO              | VARCHAR2(14 char)  | 授信號碼                              |    |
|     | M476_AMT                | NUMBER(15,2)       | 核准額度_折算台幣                         |    |
|     | M476_LN_BAL             | NUMBER(15,2)       | 現貸餘額_折算台幣                         |    |
|     | M476_MTN_AO             | VARCHAR2(6 char)   | 經管AO                              |    |
|     | M476_CUST_TYPE          | VARCHAR2(2 char)   | 客戶型態                              |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |
### VW_ODS_M_LNBRM957
#### 流動性覆蓋比率申報
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | M957_ITEM_NO            | NUMBER(2,0)        |                                   |    |
|     | M957_ITEM_NAME          | VARCHAR2(150 char) |                                   |    |
|     | M957_ITEM_BAL           | NUMBER(13,0)       |                                   |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |
### VW_ODS_M_LNCRDLNP
#### B卡核准資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SLNP_APRV_NO            | VARCHAR2(12 char)  | 核准號碼                              |    |
|     | SLNP_ID_CODE            | VARCHAR2(11 char)  | 借款人ID                             |    |
|     | SLNP_APRV_DATE          | DATE               | 核准日期                              |    |
|     | SLNP_TOT_AMT            | NUMBER(16,2)       | 總額度                               |    |
|     | SLNP_AMT                | NUMBER(16,2)       | 核准額度/透支額度                         |    |
|     | SLNP_FST_APRV_RATE      | NUMBER(7,4)        | 初准利率                              |    |
|     | SLNP_BUSI_NO            | VARCHAR2(6 char)   |                                   |    |
|     | SLNP_OD_END_DATE        | DATE               | 透支契約迄日                            |    |
|     | SLNP_USE_TYPE           | VARCHAR2(6 char)   | 動用方式                              |    |
|     | SLNP_REPLY_INTVL        | DATE               | 批覆書有效止日                           |    |
|     | SLNP_FST_LN_INTVL       | NUMBER(8,0)        | 首次動撥期限                            |    |
|     | SLNP_CENT_CODE          | VARCHAR2(4 char)   | 利潤中心                              |    |
|     | SLNP_PROJ_CODE          | VARCHAR2(5 char)   | 專案代號                              |    |
|     | SLNP_REC_CODE           | VARCHAR2(2 char)   | 額度類別                              |    |
|     | SLNP_LN_BAL             | NUMBER(16,2)       | 現貸餘額                              |    |
|     | SLNP_TYPE               | VARCHAR2(1 char)   | 申請類別                              |    |
|     | SLNP_MOVE_STAT          | VARCHAR2(1 char)   | 轉籍狀態                              |    |
|     | SLNP_CRINS_RATIO        | NUMBER(3,0)        | 信保保證成數(%)                         |    |
|     | SLNP_CRINS_MARK         | VARCHAR2(1 char)   | 信保案件註記                            |    |
|     | SLNP_ODM_MARK           | VARCHAR2(1 char)   | 透支戶註記                             |    |
|     | SLNP_COLA_MARK          | VARCHAR2(1 char)   | 擔保註記                              |    |
|     | SLNP_ACC_TITLE_CODE     | VARCHAR2(3 char)   | 科目                                |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |
### VW_ODS_M_LNCRDLOA
#### B卡貸放資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SLOA_LN_ID_NO           | VARCHAR2(18 char)  | 貸放帳號                              |    |
|     | SLOA_APRV_NO            | VARCHAR2(12 char)  | 核准號碼                              |    |
|     | SLOA_ACC_CODE           | NUMBER(5,0)        |                                   |    |
|     | SLOA_REC_STAT           | VARCHAR2(1 char)   | 貸放檔記錄狀態                           |    |
|     | SLOA_CLOSE_MARK         | VARCHAR2(1 char)   | 結清註記                              |    |
|     | SLOA_LN_STAT            | VARCHAR2(1 char)   | 貸放狀態                              |    |
|     | SLOA_OVER_MARK          | VARCHAR2(1 char)   | 催收註記                              |    |
|     | SLOA_BAD_MARK           | VARCHAR2(1 char)   | 呆帳註記                              |    |
|     | SLOA_LN_DATE            | DATE               | 貸放日期/建檔日期                         |    |
|     | SLOA_FST_LN_DATE        | DATE               | 初貸日                               |    |
|     | SLOA_DUE_DATE           | DATE               | 到期日                               |    |
|     | SLOA_FST_AMT            | NUMBER(16,2)       | 初貸金額                              |    |
|     | SLOA_LN_BAL             | NUMBER(16,2)       | 現貸餘額                              |    |
|     | SLOA_INT_RATE_REAL      | NUMBER(7,4)        | 實收利率                              |    |
|     | SLOA_RTRN_TYPE          | VARCHAR2(1 char)   | 還款方式/週期                           |    |
|     | SLOA_INT_INTVL          | VARCHAR2(2 char)   | 繳息週期                              |    |
|     | SLOA_PRI_INTVL          | VARCHAR2(2 char)   | 還本週期                              |    |
|     | SLOA_INT_UNIT           | VARCHAR2(2 char)   | 繳息/還本週期單位                         |    |
|     | SLOA_CHAR_CODE          | VARCHAR2(3 char)   |                                   |    |
|     | SLOA_RTRN_TERM          | VARCHAR2(3 char)   |                                   |    |
|     | SLOA_RTRNED_TERM        | VARCHAR2(3 char)   |                                   |    |
|     | SLOA_FIXAMT_RTRN_MARK   | VARCHAR2(1 char)   | 攤還額約定方式                           |    |
|     | SLOA_EACH_AMT           | NUMBER(16,2)       | 每期攤還額                             |    |
|     | SLOA_INT_DAY            | NUMBER(2,0)        | 繳息日                               |    |
|     | SLOA_CUR_MON_PAY        | NUMBER(16,2)       | 當月實繳金額                            |    |
|     | SLOA_OVER_DAYS          | NUMBER(5,0)        | 逾期天數                              |    |
|     | SLOA_OVERDUE_AMT        | NUMBER(16,2)       |                                   |    |
|     | SLOA_CUR_PAYABLE_AMT    | NUMBER(16,2)       | 當期應付金額                            |    |
|     | SLOA_OD_MARK            | VARCHAR2(1 char)   | 透支戶註記                             |    |
|     | SLOA_CAL_END_DATE       | DATE               | 透支計息積數計算迄日                        |    |
|     | SLOA_OD_AUM_1           | NUMBER(15,0)       | 透支計息積數                            |    |
|     | SLOA_OV_OD_AUM          | NUMBER(15,0)       | 透支逾期計息積數                          |    |
|     | SLOA_L_INT_DATE         | DATE               | 上次繳息日/繳息迄日(上次計息迄日                 |    |
|     | SLOA_L_RTRN_DATE        | DATE               | 上次還本日                             |    |
|     | SLOA_N_RTRN_DATE        | DATE               | 下次還本日                             |    |
|     | SLOA_ALLOW_DATE         | DATE               | 還本寬限期                             |    |
|     | SLOA_N_INT_DATE         | DATE               | 下次繳息日                             |    |
|     | SLOA_NEAR_ACC_DATE      | DATE               | 帳務最近異動日                           |    |
|     | SLOA_CLOSE_DATE         | DATE               | 帳戶關閉日                             |    |
|     | SLOA_ORG_LN_ID_NO       | VARCHAR2(18 char)  | 展期前貸放帳號                           |    |
|     | SLOA_NEW_LN_ID_NO       | VARCHAR2(18 char)  | 展期後新貸放帳號                          |    |
|     | SLOA_MVIN_ID_NO         | VARCHAR2(18 char)  | 轉籍前原貸放帳號                          |    |
|     | SLOA_MVOUT_ID_NO        | VARCHAR2(18 char)  | 轉籍後新貸放帳號                          |    |
|     | SLOA_ID_CODE            | VARCHAR2(11 char)  | 統一編號                              |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |

### VW_ODS_M_LNCTBAS_LTV
#### BASEL_LTV資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LTV_LN_ACC_NO           | VARCHAR2(20 char)  | 授信帳號                              |    |
|     | LTV_CASE_TYPE           | VARCHAR2(3 char)   | 債權類別                              |    |
|     | LTV_CREDIT_WEIGHT       | NUMBER(6,2)        | 風險權數                              |    |
|     | LTV_LN_BAL              | NUMBER(13,0)       | 現貸餘額                              |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |

### VW_ODS_M_LNCTBAS_TRF
#### BASEL明細資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BAS_CASE_TYPE           | VARCHAR2(3 char)   | 債權類別                              |    |
|     | BAS_DATA_TYPE           | VARCHAR2(2 char)   | 逾期類別                              |    |
|     | BAS_BINS_CODE           | VARCHAR2(6 char)   | 央行_行業別                            |    |
|     | BAS_JCIC_BINS_CODE      | VARCHAR2(6 char)   | 主計處_行業別                           |    |
|     | BAS_COLA_MARK           | VARCHAR2(1 char)   | 擔保註記                              |    |
|     | BAS_COLA_CODE           | VARCHAR2(3 char)   | 擔保品類別代號                           |    |
|     | BAS_ID_CODE             | VARCHAR2(11 char)  | 客戶ID                              |    |
|     | BAS_CUST_TYPE           | VARCHAR2(2 char)   | 客戶型態                              |    |
| PK  | BAS_APRV_NO             | VARCHAR2(12 char)  | 核准號碼                              |    |
| PK  | BAS_LN_ACC_NO           | VARCHAR2(20 char)  | 授信帳號                              |    |
|     | BAS_ACC_CODE            | VARCHAR2(5 char)   | 放款科子目                             |    |
|     | BAS_LN_BAL              | NUMBER(13,0)       | 台幣現貸餘額                            |    |
|     | BAS_ID_BAL              | NUMBER(13,0)       | 歸戶餘額                              |    |
|     | BAS_N_INT_DATE          | DATE               | 下次繳息日                             |    |
|     | BAS_INT_DELAY           | VARCHAR2(1 char)   | 利息逾期                              |    |
|     | BAS_DUE_DATE            | DATE               | 到期日                               |    |
|     | BAS_DUE_DELAY           | VARCHAR2(1 char)   | 本金逾期                              |    |
|     | BAS_LNL_CURR_CODE       | VARCHAR2(3 char)   | 貸放幣別                              |    |
|     | BAS_LN_BAL_F            | NUMBER(16,2)       | 外幣現貸餘額                            |    |
|     | BAS_LOSS_PREPARE_RATE   | NUMBER(6,2)        | 特別損失準備率                           |    |
|     | BAS_LOSS_PREPARE_AMT    | NUMBER(13,0)       | 特別損失準備                            |    |
|     | BAS_CUTED_PREPARE_AMT   | NUMBER(13,0)       | 扣除準備後暴險額(4)                       |    |
|     | BAS_PROJ_CODE           | VARCHAR2(5 char)   | 專案代號                              |    |
|     | BAS_CREDIT_TYPE         | VARCHAR2(2 char)   | 信評種類                              |    |
|     | BAS_CREDIT_LEVEL        | VARCHAR2(12 char)  | 信用評等                              |    |
|     | BAS_CREDIT_WEIGHT       | NUMBER(3,0)        | 風險權數                              |    |
|     | BAS_IND_TYPE            | VARCHAR2(1 char)   | 間接授信類別                            |    |
|     | BAS_CREDIT_CONVER_VALUE | NUMBER(3,0)        | 信用轉換係數                            |    |
|     | BAS_CREDIT_CORR_AMT     | NUMBER(13,0)       | 信用相當額                             |    |
|     | BAS_LOA_ADV_BAL         | NUMBER(13,0)       | LOAN預收款金額                         |    |
|     | BAS_ADV_MITED_BAL       | NUMBER(13,0)       | 預收款抵減金額                           |    |
|     | BAS_ADV_CUTED_AFT_BAL   | NUMBER(13,0)       | 預收款抵減後暴險額                         |    |
|     | BAS_SAVING_TOTAL_BAL    | NUMBER(13,0)       | 存款歸戶餘額                            |    |
|     | BAS_SAVING_MITED_BAL    | NUMBER(13,0)       | 存款抵減金額                            |    |
|     | BAS_SAV_CUTED_AFT_BAL   | NUMBER(13,0)       | 存款抵減後暴險額                          |    |
|     | BAS_NON_MITED_LST_BAL   | NUMBER(13,0)       | 無風險抵減工具之暴險額(5)                    |    |
|     | BAS_ELI_COL_MIT_BAL     | NUMBER(13,0)       | 淨額結算及擔保品前暴險額(6)                   |    |
|     | BAS_ELI_COL_WEIGHT      | NUMBER(3,0)        | 擔保品風險權數                           |    |
|     | BAS_COL_MITED_BAL       | NUMBER(13,0)       | 合格擔保品已抵減金額/考慮淨額結算及擔保品後暴險額(7)      |    |
|     | BAS_COL_CUTED_AFT_BAL   | NUMBER(13,0)       | 考慮淨額結算及擔保品後暴險額(7)                 |    |
|     | BAS_GRN_CRE_TYPE        | VARCHAR2(2 char)   | 保證人信評種類                           |    |
|     | BAS_GRN_CREDIT          | VARCHAR2(12 char)  | 保證人信用評等                           |    |
|     | BAS_GRN_CRE_WEIGHT      | NUMBER(3,0)        | 保證人風險權數                           |    |
|     | BAS_GRN_MITED_BAL       | NUMBER(13,0)       | 保證人已抵減金額(8)(9)/考慮信用保障後暴險額         |    |
|     | BAS_GRN_CUTED_AFT_BAL   | NUMBER(13,0)       | 保證抵減後餘額                           |    |
|     | BAS_RISK_ASSESS_BAL     | NUMBER(13,0)       | 風險性資產餘額(10)=【(5)+(7)+(9)】*(1)     |    |
|     | BAS_APPROVE_AMT         | NUMBER(13,0)       | 核准額度/透支額度                         |    |
|     | BAS_APPROVE_UNUSE_AMT   | NUMBER(13,0)       | 核准未貸額度                            |    |
|     | BAS_LNP_LN_BAL          | NUMBER(13,0)       | 現貸餘額                              |    |
|     | BAS_REC_CODE            | VARCHAR2(2 char)   | 額度別                               |    |
|     | BAS_REPLY_INTVL         | DATE               | 批覆書有效止日                           |    |
|     | BAS_CHAR_CODE           | VARCHAR2(3 char)   | 放款用途別                             |    |
|     | BAS_CRT_DATE            | DATE               | 貸放日期                              |    |
|     | BAS_MIX_APRV_NO         | VARCHAR2(12 char)  | 綜合額度核准號碼                          |    |
|     | BAS_MIX_APPROVE_AMT     | NUMBER(13,0)       | 綜合額度核准額度                          |    |
|     | BAS_M_APRV_UNUSE_AMT    | NUMBER(13,0)       | 綜合額度核准未貸額度                        |    |
|     | BAS_M_LN_AMT            | NUMBER(13,0)       | 綜合額度現貸餘額                          |    |
|     | BAS_NEGOT_INT           | NUMBER(7,0)        | 協商掛帳息                             |    |
|     | BAS_921_HANG_INT        | NUMBER(7,0)        | 921掛帳息                            |    |
|     | BAS_LNP_CRINS_RATIO     | NUMBER(3,0)        | 信保保證成數(%)                         |    |
|     | BAS_COL_SHIP            | VARCHAR2(1 char)   | 擔保品所有權人與借款人關係                     |    |
|     | BAS_RATIO_GRN_MITED     | VARCHAR2(1 char)   | 信保保證成數保證抵減                        |    |
|     | BAS_ORIG_CASE_TYPE      | VARCHAR2(3 char)   | 原來債權類別                            |    |
|     | BAS_ORIG_CRE_WEIGHT     | NUMBER(3,0)        | 原來風險權數                            |    |
|     | BAS_FST_LN_DATE         | DATE               | 初貸日                               |    |
|     | BAS_SELF_HOUSE          | VARCHAR2(1 char)   | 自用住宅                              |    |
|     | BAS_APRV_DATE           | DATE               | 核准日期                              |    |
|     | BAS_LAB_STRUC_USE       | VARCHAR2(1 char)   | 建物使用別                             |    |
|     | BAS_CENT_CODE           | VARCHAR2(4 char)   | 利潤中心                              |    |
|     | BAS_COL_SALE_MARK       | VARCHAR2(1 char)   | 擔保品已處份註記                          |    |
|     | BAS_ACC                 | VARCHAR2(4 char)   | 會計科目                              |    |
|     | BAS_DELAY_MARK          | VARCHAR2(1 char)   | Basel_逾期註記(擔保:Y22、Y3；無擔:Y3、Y4、Y5) |    |
|     | BAS_JCIC_DELAY_MARK     | VARCHAR2(1 char)   | 債管_逾期註記                           |    |
|     | BAS_REMAINS_MONTHS      | NUMBER(4,0)        | 剩餘期間月數                            |    |
|     | BAS_REMAINS_DAYS        | NUMBER(2,0)        | 剩餘期間天數                            |    |
|     | BAS_REMAINS_KIND        | VARCHAR2(1 char)   | 剩餘期間_分類                           |    |
|     | BAS_DATA_SOURCE         | VARCHAR2(1 char)   | 檔案來源                              |    |
|     | BAS_CLOSING_RATE        | NUMBER(13,7)       | 折算台幣匯率                            |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |    |

### VW_ODS_M_LNUREL
#### 利害關係人F18資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | UREL_ID                 | VARCHAR2(11 char)  | 統一編號                              |    |
|     | UREL_TYPE               | VARCHAR2(1 char)   | F18利害關係人代號                        |    |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間                            |