---
sidebar_position: 16
title: 台幣核心系統-支票存款(CSQA)
---

### VW_ODS_D_QABHOLD1
#### 票據事故檔1
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | QABHD_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                   |    |
|     | QABHD_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬單位別              |    |
| PK  | QABHD_SET_DATE                 | DATE              | 事故登錄日期               |    |
| PK  | QABHD_SER_NO                   | VARCHAR2(2 char)  | 流水號                  |    |
| PK  | QABHD_BILL_NO                  | VARCHAR2(9 char)  | 票據號碼                 |    |
|     | QABHD_ACDT_CODE                | VARCHAR2(2 char)  | 事故代號                 |    |
|     | QABHD_BOUN_REASON              | VARCHAR2(2 char)  | 退票理由                 |    |
|     | QABHD_ACDT_STAT                | VARCHAR2(1 char)  | 事故設定狀態               |    |
|     | QABHD_RLS_DATE                 | DATE              | 事故解除日期               |    |
|     | QABHD_SAVE_BR_CODE             | VARCHAR2(4 char)  | 交易執行單位               |    |
|     | QABHD_BILL_AMT                 | NUMBER(17,2)      | 票據金額                 |    |
|     | QABHD_BRING_AMT                | NUMBER(17,2)      | 已提存金額/原帳扣除金額/備付金額    |    |
|     | QABHD_DUE_DATE                 | DATE              | 票據到期日                |    |
|     | QABHD_NEW_BRING_DATE           | DATE              | 最近提存日/原帳扣除日/退票申請備付日  |    |
|     | QABHD_BILL_STAT                | VARCHAR2(1 char)  | 退票處理狀態               |    |
|     | QABHD_APL_TLR_CODE             | VARCHAR2(6 char)  | 登錄櫃員代號               |    |
|     | QABHD_RLS_TLR_CODE             | VARCHAR2(6 char)  | 解除櫃員代號               |    |
|     | QABHD_RLS_SUP_CODE             | VARCHAR2(6 char)  | 解除主管代號               |    |
|     | QABHD_COURT_PROVE              | VARCHAR2(40 char) | 文號                   |    |
|     | QABHD_COURT_DATE               | DATE              | 文號日期                 |    |
|     | QABHD_RLS_COURT_PROVE          | VARCHAR2(40 char) | 解除文號                 |    |
|     | QABHD_RLS_COURT_DATE           | DATE              | 解除文號日期               |    |
|     | QABHD_ACDT_NOTIFY              | VARCHAR2(40 char) | 止付通知人/被禁止提示人         |    |
|     | QABHD_ACDT_NOTIFY_TEL          | VARCHAR2(10 char) | 止付通知人電話              |    |
|     | QABHD_BOUN_REASON_NO           | VARCHAR2(8 char)  | 退票理由單號碼              |    |
|     | QABHD_BOUN_MAKE_STAT           | VARCHAR2(1 char)  | 當日/非當日註記             |    |
|     | QABHD_PAY_BR_CODE              | VARCHAR2(9 char)  | 提示行代號                |    |
|     | QABHD_PAY_ACC_ID_NO            | VARCHAR2(14 char) | 提示人帳號                |    |
|     | QABHD_CHG_STAT                 | VARCHAR2(1 char)  | 交換旗標(交換/非交換)         |    |
|     | QABHD_HLD_ALTER_MEMO           | VARCHAR2(30 char) | 登錄備註                 |    |
|     | QABHD_HLD_ALTER_MEMO_2         | VARCHAR2(30 char) | 登錄備註-2               |    |
|     | QABHD_RLS_ALTER_MEMO           | VARCHAR2(30 char) | 解除備註                 |    |
|     | QABHD_TXN_TIME                 | NUMBER(6,0)       | 交易時間                 |    |
|     | QABHD_PCS_CNT                  | NUMBER(4,0)       | 張數                   |    |
|     | QABHD_RLS_ALTER_MEMO_2         | VARCHAR2(20 char) | 解除備註-2               |    |
|     | QABHD_FUN1_STAT                | VARCHAR2(1 char)  | 登錄帳務旗標               |    |
|     | QABHD_FUN2_STAT                | VARCHAR2(1 char)  | 登錄更正帳務旗標             |    |
|     | QABHD_FUN3_STAT                | VARCHAR2(1 char)  | 解除帳務旗標               |    |
|     | QABHD_FUN4_STAT                | VARCHAR2(1 char)  | 解除更正帳務旗標             |    |
|     | QABHD_RSK_SEQ_NO               | VARCHAR2(7 char)  | 風管序號                 |    |
|     | QABHD_APL_SUP_CODE             | VARCHAR2(6 char)  | 登錄主管代號               |    |
|     | QABHD_NO_VARY_FLAG             | VARCHAR2(1 char)  | 銀行合併免收違約金(QAFEES)旗標  |    |
|     | QABHD_FILLER                   | VARCHAR2(77 char) | 空白                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間               |    |
### VW_ODS_D_QABHOLD2
#### 票據事故檔2
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | QABHD_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                   |    |
|     | QABHD_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬單位別              |    |
| PK  | QABHD_SET_DATE                 | DATE              | 事故登錄日期               |    |
| PK  | QABHD_SER_NO                   | VARCHAR2(2 char)  | 流水號                  |    |
| PK  | QABHD_BILL_NO                  | VARCHAR2(9 char)  | 票據號碼                 |    |
|     | QABHD_ACDT_CODE                | VARCHAR2(2 char)  | 事故代號                 |    |
|     | QABHD_BOUN_REASON              | VARCHAR2(2 char)  | 退票理由                 |    |
|     | QABHD_ACDT_STAT                | VARCHAR2(1 char)  | 事故設定狀態               |    |
|     | QABHD_RLS_DATE                 | DATE              | 事故解除日期               |    |
|     | QABHD_SAVE_BR_CODE             | VARCHAR2(4 char)  | 交易執行單位               |    |
|     | QABHD_BILL_AMT                 | NUMBER(17,2)      | 票據金額                 |    |
|     | QABHD_BRING_AMT                | NUMBER(17,2)      | 已提存金額/原帳扣除金額/備付金額    |    |
|     | QABHD_DUE_DATE                 | DATE              | 票據到期日                |    |
|     | QABHD_NEW_BRING_DATE           | DATE              | 最近提存日/原帳扣除日/退票申請備付日  |    |
|     | QABHD_BILL_STAT                | VARCHAR2(1 char)  | 退票處理狀態               |    |
|     | QABHD_APL_TLR_CODE             | VARCHAR2(6 char)  | 登錄櫃員代號               |    |
|     | QABHD_RLS_TLR_CODE             | VARCHAR2(6 char)  | 解除櫃員代號               |    |
|     | QABHD_RLS_SUP_CODE             | VARCHAR2(6 char)  | 解除主管代號               |    |
|     | QABHD_COURT_PROVE              | VARCHAR2(40 char) | 文號                   |    |
|     | QABHD_COURT_DATE               | DATE              | 文號日期                 |    |
|     | QABHD_RLS_COURT_PROVE          | VARCHAR2(40 char) | 解除文號                 |    |
|     | QABHD_RLS_COURT_DATE           | DATE              | 解除文號日期               |    |
|     | QABHD_ACDT_NOTIFY              | VARCHAR2(40 char) | 止付通知人/被禁止提示人         |    |
|     | QABHD_ACDT_NOTIFY_TEL          | VARCHAR2(10 char) | 止付通知人電話              |    |
|     | QABHD_BOUN_REASON_NO           | VARCHAR2(8 char)  | 退票理由單號碼              |    |
|     | QABHD_BOUN_MAKE_STAT           | VARCHAR2(1 char)  | 當日/非當日註記             |    |
|     | QABHD_PAY_BR_CODE              | VARCHAR2(9 char)  | 提示行代號                |    |
|     | QABHD_PAY_ACC_ID_NO            | VARCHAR2(14 char) | 提示人帳號                |    |
|     | QABHD_CHG_STAT                 | VARCHAR2(1 char)  | 交換旗標(交換/非交換)         |    |
|     | QABHD_HLD_ALTER_MEMO           | VARCHAR2(30 char) | 登錄備註                 |    |
|     | QABHD_HLD_ALTER_MEMO_2         | VARCHAR2(30 char) | 登錄備註-2               |    |
|     | QABHD_RLS_ALTER_MEMO           | VARCHAR2(30 char) | 解除備註                 |    |
|     | QABHD_TXN_TIME                 | NUMBER(6,0)       | 交易時間                 |    |
|     | QABHD_PCS_CNT                  | NUMBER(4,0)       | 張數                   |    |
|     | QABHD_RLS_ALTER_MEMO_2         | VARCHAR2(20 char) | 解除備註-2               |    |
|     | QABHD_FUN1_STAT                | VARCHAR2(1 char)  | 登錄帳務旗標               |    |
|     | QABHD_FUN2_STAT                | VARCHAR2(1 char)  | 登錄更正帳務旗標             |    |
|     | QABHD_FUN3_STAT                | VARCHAR2(1 char)  | 解除帳務旗標               |    |
|     | QABHD_FUN4_STAT                | VARCHAR2(1 char)  | 解除更正帳務旗標             |    |
|     | QABHD_RSK_SEQ_NO               | VARCHAR2(7 char)  | 風管序號                 |    |
|     | QABHD_APL_SUP_CODE             | VARCHAR2(6 char)  | 登錄主管代號               |    |
|     | QABHD_NO_VARY_FLAG             | VARCHAR2(1 char)  | 銀行合併免收違約金(QAFEES)旗標  |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間               |    |

### VW_ODS_D_QAFEES
#### 其他費用明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | QAFEE_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬單位別              |    |
|     | QAFEE_ACC_ID_NO                | VARCHAR2(13 char) | 支存帳號                 |    |
|     | QAFEE_FEES_DATE                | DATE              | 登錄日期                 |    |
|     | QAFEE_SER_NO                   | VARCHAR2(3 char)  | 序號                   |    |
|     | QAFEE_ABATE_STAT               | VARCHAR2(1 char)  | 收費註記                 |    |
|     | QAFEE_FEES_KIND                | VARCHAR2(2 char)  | 項目                   |    |
|     | QAFEE_BILL_NO                  | VARCHAR2(9 char)  | 票據號碼                 |    |
|     | QAFEE_PAY_DATE                 | DATE              | 收取日期                 |    |
|     | QAFEE_VARY_AMT                 | NUMBER(15,2)      | 應收金額                 |    |
|     | QAFEE_COLL_AMT                 | NUMBER(15,2)      | 已收金額                 |    |
|     | QAFEE_CUT_AMT                  | NUMBER(15,2)      | 減免金額                 |    |
|     | QAFEE_KILL_AMT                 | NUMBER(15,2)      | 退費金額                 |    |
|     | QAFEE_ALTER_MEMO               | VARCHAR2(16 char) | 備註                   |    |
|     | QAFEE_FILLER                   | VARCHAR2(5 char)  | 空白                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間               |    |
### VW_ODS_D_QAMASTER
#### 支存主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | QAMST_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                   |    |
| PK  | QAMST_TD_TXN_FLAG              | VARCHAR2(1 char)  | 本日交易記號               |    |
|     | QAMST_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬單位別              |    |
|     | QAMST_PRD_CODE                 | VARCHAR2(7 char)  | 產品代號                 |    |
|     | QAMST_ID_CODE                  | VARCHAR2(11 char) | 身份證統一編號              |    |
|     | QAMST_CUST_STAT                | VARCHAR2(2 char)  | 帳戶狀態代號               |    |
|     | QAMST_PASSBOOK_STAT            | NUMBER(1,0)       | 使用對帳簿旗標              |    |
|     | QAMST_OD_STAT                  | VARCHAR2(1 char)  | 透支狀態                 |    |
|     | QAMST_RENEW_STAT               | NUMBER(1,0)       | 簽訂補充條款               |    |
|     | QAMST_CLR_STAT                 | VARCHAR2(1 char)  | 妙管家申請狀態              |    |
|     | QAMST_CHOP_LOSE_STAT           | VARCHAR2(1 char)  | 印鑑掛失狀態               |    |
|     | QAMST_DEAD_STAT                | VARCHAR2(1 char)  | 死亡事故狀態               |    |
|     | QAMST_COURT_STAT               | VARCHAR2(1 char)  | 法院扣押狀態               |    |
|     | QAMST_HOLD_STAT                | NUMBER(1,0)       | 本行設定                 |    |
|     | QAMST_TXN_STOP_STAT            | VARCHAR2(1 char)  | 停止交易狀態               |    |
|     | QAMST_NOTE_PAY_STAT            | VARCHAR2(1 char)  | 擔當付款狀態               |    |
|     | QAMST_OTHER_STAT               | VARCHAR2(1 char)  | 其他狀態                 |    |
|     | QAMST_WARN_STAT                | VARCHAR2(1 char)  | 警示戶狀態                |    |
|     | QAMST_STAT_FILLER_4            | VARCHAR2(1 char)  | 帳戶事故狀態保留欄位           |    |
|     | QAMST_STAT_FILLER_5            | VARCHAR2(1 char)  | 客戶分類                 |    |
|     | QAMST_OPEN_KIND                | VARCHAR2(1 char)  | 是否臨櫃開戶               |    |
|     | QAMST_DATA_CHG_DELAY_STAT      | VARCHAR2(1 char)  | 基本資料異動逾期未變更          |    |
|     | QAMST_STAT_FILLER_8            | VARCHAR2(1 char)  |                      |    |
|     | QAMST_STAT_FILLER_9            | VARCHAR2(1 char)  |                      |    |
|     | QAMST_OPEN_DATE                | DATE              | 開戶日期                 |    |
|     | QAMST_L_TXN_DATE               | DATE              | 上次積數迄算日              |    |
|     | QAMST_CLS_DATE                 | DATE              | 結清日期                 |    |
|     | QAMST_STATIC_DATE              | DATE              | 靜止戶維護日期              |    |
|     | QAMST_SAL_TR_DATE              | DATE              | 設定拒往日期               |    |
|     | QAMST_CLR_DATE                 | DATE              | 妙管家維護日期              |    |
|     | QAMST_RENEW_DATE               | DATE              | 簽訂補充條款日              |    |
|     | QAMST_MODIF_DATE               | DATE              | 資料維護日                |    |
|     | QAMST_L_DATE                   | DATE              | 上次交易日                |    |
|     | QAMST_CENT_CODE                | VARCHAR2(4 char)  | 利潤中心                 |    |
|     | QAMST_ACC_CHAR_CODE            | VARCHAR2(2 char)  | 帳戶性質別                |    |
|     | QAMST_INT_RATE                 | VARCHAR2(3 char)  | 利率別                  |    |
|     | QAMST_INT_GLAP                 | NUMBER(5,3)       | 議價利率差幅               |    |
|     | QAMST_TAX_RATE                 | VARCHAR2(1 char)  | 扣稅別                  |    |
|     | QAMST_FORCE_TAX_CODE           | VARCHAR2(1 char)  | 強迫扣稅別                |    |
|     | QAMST_JOIN_STAT                | VARCHAR2(1 char)  | 聯名戶旗標                |    |
|     | QAMST_PB_LINE                  | VARCHAR2(2 char)  | 對帳簿行次                |    |
|     | QAMST_UNPOST_DATE              | DATE              | 首筆未登摺日期              |    |
|     | QAMST_UNPOST_CNT               | NUMBER(4,0)       | 未登摺筆數                |    |
|     | QAMST_TXN_SER_NO               | VARCHAR2(6 char)  | 存提記錄序號               |    |
|     | QAMST_BHD_SER_NO               | VARCHAR2(2 char)  | 票據事故序號               |    |
|     | QAMST_FEES_SER_NO              | VARCHAR2(2 char)  | 欠費序號                 |    |
|     | QAMST_HOLD_SER_NO              | VARCHAR2(2 char)  | 止扣序號                 |    |
|     | QAMST_HOLD_CNT                 | NUMBER(4,0)       | 止扣筆數                 |    |
|     | QAMST_BAL                      | NUMBER(15,2)      | 帳戶餘額                 |    |
|     | QAMST_TD_CHK_AMT               | NUMBER(13,0)      | 本交票金額                |    |
|     | QAMST_TD_CHK_CNT               | NUMBER(4,0)       | 本交票筆數                |    |
|     | QAMST_TM_CHK_AMT               | NUMBER(13,0)      | 次交票金額                |    |
|     | QAMST_TM_CHK_CNT               | NUMBER(4,0)       | 次交票筆數                |    |
|     | QAMST_PB_BAL                   | NUMBER(15,2)      | 對帳簿餘額                |    |
|     | QAMST_FROZEN_AMT               | NUMBER(15,2)      | 法扣金額                 |    |
|     | QAMST_HOLD_AMT                 | NUMBER(15,2)      | 保留金額                 |    |
|     | QAMST_ACDT_FAIL_AMT            | NUMBER(15,2)      | 止付提存不足金額             |    |
|     | QAMST_BILL_NOENOUG_AMT         | NUMBER(15,2)      | 待扣金額                 |    |
|     | QAMST_BOUN_NOENOUG_AMT         | NUMBER(15,2)      | 退票待扣金額               |    |
|     | QAMST_TD_TRAN_WD_TTL           | NUMBER(15,2)      | 本日轉帳提款累計金額           |    |
|     | QAMST_TD_TRAN_DP_TTL           | NUMBER(15,2)      | 本日轉帳存入累計金額           |    |
|     | QAMST_L_DAY_BAL                | NUMBER(15,2)      | 昨日帳戶餘額               |    |
|     | QAMST_TD_CASH_DP_TTL           | NUMBER(15,2)      | 本日現金存入累計金額           |    |
|     | QAMST_TD_CASH_WD_TTL           | NUMBER(15,2)      | 本日現金提款累計金額           |    |
|     | QAMST_TD_RT_TXN_CNT            | NUMBER(3,0)       | 本日匯款筆數               |    |
|     | QAMST_TD_RT_TXN_TTL            | NUMBER(15,2)      | 本日匯款金額               |    |
|     | QAMST_CURR_ADJ_AUM             | NUMBER(10,0)      | 本期累計計息積數             |    |
|     | QAMST_CURR_REF_AUM             | NUMBER(10,0)      | 本期累計實際積數             |    |
|     | QAMST_OUT_LIMIT_AUM            | NUMBER(10,0)      | 本期限額外積數              |    |
|     | QAMST_L_ADJ_AUM                | NUMBER(10,0)      | 上期累計計息積數             |    |
|     | QAMST_L_REF_AUM                | NUMBER(10,0)      | 上期累計實際積數             |    |
|     | QAMST_L_YEAR_AUM               | NUMBER(10,0)      | 去年度存款實際積數            |    |
|     | QAMST_L_MON_ADJ_AUM            | NUMBER(10,0)      | 本期至上月底累計計息積數         |    |
|     | QAMST_L_MON_REF_AUM            | NUMBER(10,0)      | 本期至上月底累計實際積數         |    |
|     | QAMST_VIP_CUST                 | VARCHAR2(2 char)  | VIP客戶等級              |    |
|     | QAMST_SERVICE_AO               | VARCHAR2(6 char)  | 服務AO                 |    |
|     | QAMST_ENLIST_TLR               | VARCHAR2(6 char)  | 招募行員                 |    |
|     | QAMST_NOTICE_KIND              | VARCHAR2(1 char)  | 聯絡方式                 |    |
|     | QAMST_CHK_SHEET_CODE           | VARCHAR2(1 char)  | 對帳單寄送方式              |    |
|     | QAMST_CLR_ACC_ID_NO            | VARCHAR2(13 char) | 妙管家約定扣帳帳號            |    |
|     | QAMST_CHK_BOOK_DATE            | DATE              | 對帳簿申請日期              |    |
|     | QAMST_BILL_VER_NO              | VARCHAR2(2 char)  | 票據版本                 |    |
|     | QAMST_PB_VER_NO                | VARCHAR2(2 char)  | 對帳簿版本                |    |
|     | QAMST_LAG_STAT                 | VARCHAR2(1 char)  | 是否計算大額旗標             |    |
|     | QAMST_WASH_NOCHK_MARK          | VARCHAR2(1 char)  | 洗錢防制法免申報註記           |    |
|     | QAMST_WASH_DB_OV_FLAG          | VARCHAR2(1 char)  | 當日洗錢防制法支出超過限額旗標      |    |
|     | QAMST_WASH_CR_OV_FLAG          | VARCHAR2(1 char)  | 當日洗錢防制法存入超過限額旗標      |    |
|     | QAMST_LAST_TRI_DATE            | DATE              | 上(月)期計息迄日            |    |
|     | QAMST_INT_CODE                 | VARCHAR2(1 char)  | 計息別                  |    |
|     | QAMST_T_MON_REF_AUM            | NUMBER(10,0)      | 本月份實際積數(本月1日起)       |    |
|     | QAMST_T_MON_ADJ_AUM1           | NUMBER(10,0)      | 本期(月)計息積數(第一(首)層)(零) |    |
|     | QAMST_T_MON_ADJ_AUM2           | NUMBER(10,0)      | 本期(月)計息積數(第二層)       |    |
|     | QAMST_T_MON_ADJ_AUM3           | NUMBER(10,0)      | 本期(月)計息積數(第三層)       |    |
|     | QAMST_T_MON_ADJ_AUM4           | NUMBER(10,0)      | 本期(月)計息積數(第四層)       |    |
|     | QAMST_T_MON_ADJ_AUM5           | NUMBER(10,0)      | 本期(月)計息積數(第五層)       |    |
|     | QAMST_MN_INT_AMT               | NUMBER(10,0)      | 本月底應付利息(零)           |    |
|     | QAMST_NOT_AUTO_TR              | VARCHAR2(1 char)  | 後送檔不自動扣帳旗標           |    |
|     | QAMST_REF_RLS_DATE             | DATE              | 解除拒往日期               |    |
|     | QAMST_UNPOST_SER_NO            | VARCHAR2(6 char)  | 延時用未登摺序號             |    |
|     | QAMST_XML_TRAN_LIMIT_T         | NUMBER(11,0)      | XML約定轉帳限額            |    |
|     | QAMST_XML_NON_CON_TRAN_LIMIT_T | NUMBER(11,0)      | EDI非約定轉帳限額           |    |
|     | QAMST_XML_TRAN_LIMIT_O         | NUMBER(11,0)      | XML約定跨轉限額            |    |
|     | QAMST_XML_NON_CON_TRAN_LIMIT_O | NUMBER(11,0)      | EDI非約定跨轉限額           |    |
|     | QAMST_XML_TRAN_TTL_T           | NUMBER(11,0)      | XML約定轉帳限額日累計         |    |
|     | QAMST_XML_NON_CON_TTL_T        | NUMBER(11,0)      | EDI非約定轉帳限額日累計        |    |
|     | QAMST_XML_TRAN_TTL_O           | NUMBER(11,0)      | XML約定跨轉限額日累計         |    |
|     | QAMST_XML_NON_CON_TTL_O        | NUMBER(11,0)      | EDI非約定跨轉限額日累計        |    |
|     | QAMST_FEES_SER_NO_2            | VARCHAR2(3 char)  | 新欠費序號(配合QAFEES擴檔)    |    |
|     | QAMST_ACCOUNT_PURPOSE          | VARCHAR2(2 char)  | 開戶目的                 |    |
|     | QAMST_FILLER                   | VARCHAR2(54 char) | 保留位                  |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間               |    |
### VW_ODS_D_QATXNREC
#### 支存交易記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | QATXN_ACC_ID_NO                | VARCHAR2(13 char) | 帳號                   |    |
| PK  | QATXN_ENTRY_DATE               | DATE              | 交易日期                 |    |
| PK  | QATXN_ENTRY_SER                | VARCHAR2(6 char)  | 往來序號                 |    |
|     | QATXN_TXN_ID_CODE              | VARCHAR2(5 char)  | DBU/OBU              |    |
|     | QATXN_BR_UNIT                  | VARCHAR2(4 char)  | 代收付單位                |    |
|     | QATXN_TXN_SER_NO               | VARCHAR2(18 char) | DBU/OBU              |    |
|     | QATXN_TXN_DATE                 | DATE              | 記帳日期                 |    |
|     | QATXN_TXN_TIME                 | VARCHAR2(6 char)  | 交易時間                 |    |
|     | QATXN_MEMO_CODE                | VARCHAR2(4 char)  | DBU/OBU              |    |
|     | QATXN_TXN_MEMO                 | VARCHAR2(10 char) | 摘要                   |    |
|     | QATXN_ALTER_MEMO               | VARCHAR2(16 char) | 附屬摘要                 |    |
|     | QATXN_DB_CR_STAT               | VARCHAR2(1 char)  | DBU/OBU              |    |
|     | QATXN_TXN_AMT                  | NUMBER(15,2)      | 交易金額                 |    |
|     | QATXN_QAM_BAL                  | NUMBER(15,2)      | 主檔餘額                 |    |
|     | QATXN_TXN_STAT                 | VARCHAR2(1 char)  | DBU/OBU              |    |
|     | QATXN_POST_FLAG                | VARCHAR2(1 char)  | 登摺旗標                 |    |
|     | QATXN_BR_CODE                  | VARCHAR2(4 char)  | 客戶所屬分行               |    |
|     | QATXN_ID_CODE                  | VARCHAR2(11 char) | 統一編號                 |    |
|     | QATXN_SUP_CODE_1               | VARCHAR2(6 char)  | 主管代號1                |    |
|     | QATXN_SUP_CODE_2               | VARCHAR2(6 char)  | 主管代號2                |    |
|     | QATXN_BILL_NO                  | VARCHAR2(9 char)  | 票據號碼                 |    |
|     | QATXN_UP_BILL_FLAG             | VARCHAR2(1 char)  | 票據號碼錯誤更正旗標           |    |
|     | QATXN_BANK_CODE                | VARCHAR2(7 char)  | 匯出行庫代號               |    |
|     | QATXN_BANK_NO                  | VARCHAR2(3 char)  | 銀行別                  |    |
|     | QATXN_TXN_NAME                 | VARCHAR2(20 char) | 交易人資料                |    |
|     | QATXN_FTT_FLAG                 | VARCHAR2(1 char)  | DBU/OBU              |    |
|     | QATXN_TERM_ID                  | VARCHAR2(8 char)  | DBU/OBU              |    |
|     | QATXN_FILLER                   | VARCHAR2(54 char) | 空白                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP         | 表格更新時間               |