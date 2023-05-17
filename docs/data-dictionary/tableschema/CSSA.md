---
sidebar_position: 19
title: 台幣核心系統-存摺存款(CSSA)
---

### VW_ODS_D_SAAVGAUM1
#### sacdavg帳戶月累計積數檔(一)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAAVG_ACC_ID_NO                | VARCHAR2(13 char)  | 帳號                       |    |
| PK  | SAAVG_DATA_YEAR                | NUMBER(4,0)        | 年度                       |    |
|     | SAAVG_ID_CODE                  | VARCHAR2(11 char)  | 統一編號                     |    |
|     | SAAVG_BR_CODE                  | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | SAAVG_AUM_DATA1                | NUMBER(15,0)       | 一月當月累計積數                 |    |
|     | SAAVG_AUM_DATA2                | NUMBER(15,0)       | 二月當月累計積數                 |    |
|     | SAAVG_AUM_DATA3                | NUMBER(15,0)       | 三月當月累計積數                 |    |
|     | SAAVG_AUM_DATA4                | NUMBER(15,0)       | 四月當月累計積數                 |    |
|     | SAAVG_AUM_DATA5                | NUMBER(15,0)       | 五月當月累計積數                 |    |
|     | SAAVG_AUM_DATA6                | NUMBER(15,0)       | 六月當月累計積數                 |    |
|     | SAAVG_AUM_DATA7                | NUMBER(15,0)       | 七月當月累計積數                 |    |
|     | SAAVG_AUM_DATA8                | NUMBER(15,0)       | 八月當月累計積數                 |    |
|     | SAAVG_AUM_DATA9                | NUMBER(15,0)       | 九月當月累計積數                 |    |
|     | SAAVG_AUM_DATA10               | NUMBER(15,0)       | 十月當月累計積數                 |    |
|     | SAAVG_AUM_DATA11               | NUMBER(15,0)       | 十一月當月累計積數                |    |
|     | SAAVG_AUM_DATA12               | NUMBER(15,0)       | 十二月當月累計積數                |    |
|     | SAAVG_FILLER                   | VARCHAR2(44 char)  | 空白                       |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SAAVGAUM2
#### sacdavg帳戶月累計積數檔(二)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAAVG_ACC_ID_NO                | VARCHAR2(13 char)  | 帳號                       |    |
| PK  | SAAVG_DATA_YEAR                | NUMBER(4,0)        | 年度                       |    |
|     | SAAVG_ID_CODE                  | VARCHAR2(11 char)  | 統一編號                     |    |
|     | SAAVG_BR_CODE                  | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | SAAVG_AUM_DATA1                | NUMBER(15,0)       | 一月當月累計積數                 |    |
|     | SAAVG_AUM_DATA2                | NUMBER(15,0)       | 二月當月累計積數                 |    |
|     | SAAVG_AUM_DATA3                | NUMBER(15,0)       | 三月當月累計積數                 |    |
|     | SAAVG_AUM_DATA4                | NUMBER(15,0)       | 四月當月累計積數                 |    |
|     | SAAVG_AUM_DATA5                | NUMBER(15,0)       | 五月當月累計積數                 |    |
|     | SAAVG_AUM_DATA6                | NUMBER(15,0)       | 六月當月累計積數                 |    |
|     | SAAVG_AUM_DATA7                | NUMBER(15,0)       | 七月當月累計積數                 |    |
|     | SAAVG_AUM_DATA8                | NUMBER(15,0)       | 八月當月累計積數                 |    |
|     | SAAVG_AUM_DATA9                | NUMBER(15,0)       | 九月當月累計積數                 |    |
|     | SAAVG_AUM_DATA10               | NUMBER(15,0)       | 十月當月累計積數                 |    |
|     | SAAVG_AUM_DATA11               | NUMBER(15,0)       | 十一月當月累計積數                |    |
|     | SAAVG_AUM_DATA12               | NUMBER(15,0)       | 十二月當月累計積數                |    |
|     | SAAVG_FILLER                   | VARCHAR2(44 char)  | 空白                       |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SADIGACC
#### 數位存款帳戶檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SADIG_ACC_ID_NO                | VARCHAR2(13 char)  | 存款帳號                     |    |
|     | SADIG_ID_CODE                  | VARCHAR2(11 char)  | 統一編號                     |    |
|     | SADIG_CUST_TYPE                | VARCHAR2(1 char)   | 數位存款帳戶類別                 |    |
|     | SADIG_BR_CODE                  | VARCHAR2(4 char)   | 帳號所屬分行別                  |    |
|     | SADIG_TXN_DATE                 | DATE               | 交易日期(申請日期)               |    |
|     | SADIG_TXN_TIME                 | VARCHAR2(6 char)   | 交易時間                     |    |
|     | SADIG_HOST_SEQ_NO              | VARCHAR2(7 char)   | 主機查詢序號                   |    |
|     | SADIG_BUSI_DATE                | DATE               | 記帳日(營業日期)                |    |
|     | SADIG_BUSI_TIME                | VARCHAR2(6 char)   | 交易發生時間(APA-TXN-TIME)     |    |
|     | SADIG_ACC_OPEN_STAT            | VARCHAR2(1 char)   | 開戶雙證件核驗狀態(確認狀態)          |    |
|     | SADIG_DOCU_NORMAL_DATE         | DATE               | 證件核驗相符/正常日期              |    |
|     | SADIG_VIDEO_CONF               | VARCHAR2(1 char)   | 是否視訊確認旗標(一類數位存款帳戶區分高低風險) |    |
|     | SADIG_APP_BR_CODE              | VARCHAR2(4 char)   | 申請分行                     |    |
|     | SADIG_CHG_DATE                 | DATE               | 最後異動日期                   |    |
|     | SADIG_CHG_TIME                 | VARCHAR2(6 char)   | 最後異動時間                   |    |
|     | SADIG_CHG_TLR                  | VARCHAR2(6 char)   | 異動櫃員                     |    |
|     | SADIG_TRANS_NORMAL             | VARCHAR2(1 char)   | 轉換為一般戶旗標                 |    |
|     | SADIG_TRANS_DATE               | DATE               | 轉換為一般戶日期                 |    |
|     | SADIG_CARD_KIND                | VARCHAR2(1 char)   | 卡片種類                     |    |
|     | SADIG_CARD_VER_NO              | VARCHAR2(2 char)   | 卡片版本                     |    |
|     | SADIG_FILLER                   | VARCHAR2(146 char) | 空白                       |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SAMASTER1
#### 存摺存款主檔(一)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAMST_ACC_ID_NO                | VARCHAR2(13 char)  | 帳號                       |    |
|     | SAMST_BR_CODE                  | VARCHAR2(4 char)   | 客戶所屬分行別                  |    |
|     | SAMST_PRD_CODE                 | VARCHAR2(7 char)   | 產品代號                     |    |
| PK  | SAMST_ID_CODE                  | VARCHAR2(11 char)  | 身份證統一編號(或負責人統一編號)        |    |
|     | SAMST_CUST_STAT                | VARCHAR2(2 char)   | 帳戶狀態代號                   |    |
|     | SAMST_PASSBOOK_STATUS          | VARCHAR2(1 char)   | 執行無摺交易旗標                 |    |
|     | SAMST_OD_STAT                  | NUMBER(1,0)        | 透支筆數                     |    |
|     | SAMST_MS_STAT                  | VARCHAR2(1 char)   | 綜存狀態                     |    |
|     | SAMST_NET_STAT                 | VARCHAR2(1 char)   | 全行/自行提款申請狀態              |    |
|     | SAMST_PB_LOSE_STAT             | VARCHAR2(1 char)   | 存摺掛失狀態                   |    |
|     | SAMST_CHOP_LOSE_STAT           | NUMBER(1,0)        | 變更代表人暨約定印鑑               |    |
|     | SAMST_TXN_STOP_STAT            | VARCHAR2(1 char)   | 暫停交易狀態                   |    |
|     | SAMST_DEAD_STAT                | VARCHAR2(1 char)   | 死亡事故狀態                   |    |
|     | SAMST_COURT_STAT               | NUMBER(1,0)        | 法院扣押                     |    |
|     | SAMST_HOLD_STAT                | NUMBER(1,0)        | 本行設定                     |    |
|     | SAMST_WARN_STAT                | VARCHAR2(1 char)   | 警示戶狀態                    |    |
|     | SAMST_OD_OV_STAT               | VARCHAR2(1 char)   | 是否透支超過限額旗標               |    |
|     | SAMST_WASH_NOCHK_MARK          | VARCHAR2(1 char)   | 洗錢防制法免申報註記               |    |
|     | SAMST_WASH_DB_OV_FLAG          | VARCHAR2(1 char)   | 當日洗錢防制法支出超過限額旗標          |    |
|     | SAMST_WASH_CR_OV_FLAG          | VARCHAR2(1 char)   | 當日洗錢防制法存入超過限額旗標          |    |
|     | SAMST_INT_AWAY_FLG             | NUMBER(1,0)        | 拋棄利息請求權                  |    |
|     | SAMST_FRUIT                    | NUMBER(1,0)        | 果菜戶                      |    |
|     | SAMST_UNPOST_FLAG              | VARCHAR2(1 char)   | 未登摺不壓縮註記                 |    |
|     | SAMST_CRNT_SAVING_STK_FLAG     | VARCHAR2(1 char)   | 薪轉戶註記                    |    |
|     | SAMST_SKL_ATM_USE_FLAG         | VARCHAR2(1 char)   | 保貸戶使用狀況旗標                |    |
|     | SAMST_TD_CASH_CR_FLAG          | VARCHAR2(1 char)   | 當日現金存入累計額超過限額不授權旗標       |    |
|     | SAMST_VISA_DEBIT_FLAG          | VARCHAR2(1 char)   | VISA金融卡註記                |    |
|     | SAMST_STAT_FILLER_0            | VARCHAR2(1 char)   | 狀態保留位                    |    |
|     | SAMST_OPEN_KIND                | VARCHAR2(2 char)   | 是否臨櫃開戶                   |    |
|     | SAMST_STAT_FILLER              | VARCHAR2(3 char)   | 狀態保留位                    |    |
|     | SAMST_OPEN_DATE                | DATE               | 開戶日期                     |    |
|     | SAMST_L_TXN_DATE               | DATE               | 積數計算基準日                  |    |
|     | SAMST_MODIF_DATE               | DATE               | 資料維護日期                   |    |
|     | SAMST_SAL_TR_DATE              | DATE               | 薪資轉帳日期                   |    |
|     | SAMST_L_BUSI_DATE              | DATE               | 上次往來日                    |    |
|     | SAMST_L_AUM_DATE               | DATE               | 上次計息迄日                   |    |
|     | SAMST_MAX_BAL_DATE             | DATE               | 當年最高餘額發生日                |    |
|     | SAMST_SKL_ATM_DOCNO            | VARCHAR2(16 char)  | 借款申請書編號                  |    |
|     | SAMST_MOVE_BR_CODE             | VARCHAR2(4 char)   | 移出行                      |    |
|     | SAMST_CENT_CODE                | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | SAMST_ACC_CHAR_CODE            | VARCHAR2(2 char)   | 帳戶性質別                    |    |
|     | SAMST_INT_RATE                 | VARCHAR2(3 char)   | 利率別                      |    |
|     | SAMST_INT_GLAP                 | NUMBER(8,3)        | 議價利率差幅                   |    |
|     | SAMST_INT_CODE                 | NUMBER(1,0)        | 計息別                      |    |
|     | SAMST_FORCE_TAX_CODE           | NUMBER(1,0)        | 強迫扣稅別                    |    |
|     | SAMST_JOIN_STAT                | VARCHAR2(1 char)   | 聯名戶旗標                    |    |
|     | SAMST_PB_VER_NO                | NUMBER(2,0)        | 存摺版本                     |    |
|     | SAMST_PB_ID                    | VARCHAR2(2 char)   | 摺號                       |    |
|     | SAMST_PB_LINE                  | NUMBER(2,0)        | 存摺列印行次                   |    |
|     | SAMST_UNPOST_CNT               | NUMBER(6,0)        | 未登摺筆數                    |    |
|     | SAMST_UNPOST_DATE              | DATE               | 首筆未登摺日期                  |    |
|     | SAMST_TXN_SER_NO               | VARCHAR2(6 char)   | 存提記錄序號                   |    |
|     | SAMST_HOLD_SER_NO              | VARCHAR2(2 char)   | 事故序號                     |    |
|     | SAMST_HOLD_CNT                 | NUMBER(4,0)        | 止扣筆數                     |    |
|     | SAMST_BAL                      | NUMBER(17,2)       | 帳戶餘額                     |    |
|     | SAMST_TD_CHECK_AMT             | NUMBER(13,0)       | 本交票金額                    |    |
|     | SAMST_TD_CHECK_CNT             | NUMBER(4,0)        | 本交票筆數                    |    |
|     | SAMST_TM_CHECK_AMT             | NUMBER(13,0)       | 次交票金額                    |    |
|     | SAMST_TM_CHECK_CNT             | NUMBER(4,0)        | 次交票筆數                    |    |
|     | SAMST_PB_BAL                   | NUMBER(17,2)       | 存摺餘額                     |    |
|     | SAMST_FROZEN_AMT               | NUMBER(17,2)       | 法扣金額                     |    |
|     | SAMST_HOLD_AMT                 | NUMBER(17,2)       | 保留金額(本行設定)               |    |
|     | SAMST_STOCK_NOENOUG_AMT        | NUMBER(17,2)       | 股款交割不足金額                 |    |
|     | SAMST_VISA_DB_HLD_AMT          | NUMBER(17,2)       | VISA                     |    |
|     | SAMST_PR_AUTHPR_HLD_AMT        | NUMBER(17,2)       | 預約授權交易保留金額               |    |
|     | SAMST_TM_WDRAW_AMT             | NUMBER(17,2)       | 其它圈存保留金額                 |    |
|     | SAMST_TM_DPOST_AMT             | NUMBER(17,2)       | 外幣圈存保留金額                 |    |
|     | SAMST_AGBR_WDRAW_LIMIT         | NUMBER(13,0)       | 全行提款限額                   |    |
|     | SAMST_L_DAY_BAL                | NUMBER(17,2)       | 前日帳戶餘額                   |    |
|     | SAMST_WDRAW_LIMIT              | NUMBER(13,0)       | 約定提款限額                   |    |
|     | SAMST_TRAN_LIMIT               | NUMBER(13,0)       | 約定轉帳限額(全行)               |    |
|     | SAMST_NON_CON_LIMIT            | NUMBER(13,0)       | 非約定轉帳限額                  |    |
|     | SAMST_TD_ATM_TRAN_AMT          | NUMBER(17,2)       | ATM本日轉帳累計金額              |    |
|     | SAMST_TM_ATM_TRAN_AMT          | NUMBER(17,2)       | 本日支出累計金額                 |    |
|     | SAMST_TD_ATM_WDRAW_AMT         | NUMBER(17,2)       | ATM本日提款累計金額              |    |
|     | SAMST_TM_ATM_WDRAW_AMT         | NUMBER(17,2)       | ATM次日提款累計金額              |    |
|     | SAMST_TD_NON_CON_TFR_AMT       | NUMBER(17,2)       | ATM本日未約定轉帳總額             |    |
|     | SAMST_TM_NON_CON_TFR_AMT       | NUMBER(17,2)       | ATM次日未約定轉帳總額             |    |
|     | SAMST_TD_CASH_CR_AMT           | NUMBER(17,2)       | 本日現金存入累計金額               |    |
|     | SAMST_TD_CASH_DB_AMT           | NUMBER(17,2)       | 本日現金提款累計金額               |    |
|     | SAMST_TD_RT_TXN_CNT            | NUMBER(3,0)        | 本日匯入筆數                   |    |
|     | SAMST_TD_RT_TXN_AMT            | NUMBER(17,2)       | 本日匯入金額                   |    |
|     | SAMST_TD_AGBR_DB_AMT           | NUMBER(17,2)       | 當日全行提款累計金額               |    |
|     | SAMST_CURR_ADJ_AUM             | NUMBER(15,0)       | 本期累計計息積數                 |    |
|     | SAMST_UNLIM_ADJ_AUM_1          | NUMBER(15,0)       | 本期限額外積數_1                |    |
|     | SAMST_UNLIM_ADJ_AUM_2          | NUMBER(15,0)       | 本期限額外積數_2                |    |
|     | SAMST_UNLIM_ADJ_AUM_3          | NUMBER(15,0)       | 本期限額外積數_3                |    |
|     | SAMST_UNLIM_ADJ_AUM_4          | NUMBER(15,0)       | 本期限額外積數_4                |    |
|     | SAMST_CURR_REF_AUM             | NUMBER(15,0)       | 本期累計實際積數                 |    |
|     | SAMST_MON_REF_AUM              | NUMBER(15,0)       | 本月累計實際積數                 |    |
|     | SAMST_SS_REF_AUM               | NUMBER(15,0)       | 月積數累計實際積數                |    |
|     | SAMST_MN_INT_AMT               | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | SAMST_VIP_CUST                 | VARCHAR2(2 char)   | VIP客戶                    |    |
|     | SAMST_NET_PASSWD               | VARCHAR2(8 char)   | 全行提款密碼                   |    |
|     | SAMST_NET_PASSWD_ERR_TIMES     | NUMBER(1,0)        | 全行提款密碼錯誤次數               |    |
|     | SAMST_SERVICE_AO               | VARCHAR2(6 char)   | 服務AO                     |    |
|     | SAMST_ENLIST_TLR               | VARCHAR2(6 char)   | 招募行員                     |    |
|     | SAMST_NOTICE_KIND              | NUMBER(1,0)        | 聯絡/不聯絡                   |    |
|     | SAMST_CHK_SHEET_CODE           | NUMBER(1,0)        | 對帳單寄送方式                  |    |
|     | SAMST_SS_INT_ACC_ID            | VARCHAR2(13 char)  | 退休帳戶結息帳號                 |    |
|     | SAMST_MS_LINE                  | NUMBER(2,0)        | 綜定列印行次                   |    |
|     | SAMST_PROJECT_CODE             | VARCHAR2(4 char)   | 券商代號                     |    |
|     | SAMST_Y_MAX_BAL                | NUMBER(17,2)       | 當年度最高餘額                  |    |
|     | SAMST_GROSS_INT                | NUMBER(10,0)       | 本年度給付利息                  |    |
|     | SAMST_GROSS_TAX                | NUMBER(10,0)       | 本年度扣繳稅款                  |    |
|     | SAMST_MAKE_DOC_INT             | NUMBER(10,0)       | 本年度已開扣繳憑單利息              |    |
|     | SAMST_MAKE_DOC_TAX             | NUMBER(10,0)       | 本年度已開扣繳憑單稅款              |    |
|     | SAMST_LAST_GROSS_INT           | NUMBER(10,0)       | 去年度給付利息                  |    |
|     | SAMST_LAST_GROSS_TAX           | NUMBER(10,0)       | 去年度扣繳稅款                  |    |
|     | SAMST_VGBR_TRAN_LIMIT          | NUMBER(13,0)       | 約定轉帳限額(跨行)               |    |
|     | SAMST_XML_TRAN_LIMIT_T         | NUMBER(11,0)       | XML約定轉帳限額                |    |
|     | SAMST_XML_NON_CON_TRAN_LIMIT_T | NUMBER(11,0)       | EDI非約定轉帳限額               |    |
|     | SAMST_XML_TRAN_LIMIT_O         | NUMBER(11,0)       | XML約定跨轉限額                |    |
|     | SAMST_XML_NON_CON_TRAN_LIMIT_O | NUMBER(11,0)       | EDI非約定跨轉限額               |    |
|     | SAMST_XML_TRAN_TTL_T           | NUMBER(11,0)       | XML約定轉帳限額日累計             |    |
|     | SAMST_XML_NON_CON_TTL_T        | NUMBER(11,0)       | EDI非約定轉帳限額日累計            |    |
|     | SAMST_XML_TRAN_TTL_O           | NUMBER(11,0)       | XML約定跨轉限額日累計             |    |
|     | SAMST_XML_NON_CON_TTL_O        | NUMBER(11,0)       | EDI非約定跨轉限額日累計            |    |
|     | SAMST_DOCNO_FILLER             | VARCHAR2(8 char)   | 空白保留位                    |    |
|     | SAMST_VGBR_TRAN_LIMIT_TTL      | NUMBER(13,0)       | 約定轉帳金額日累計(跨行)            |    |
|     | SAMST_OTP_NON_TRAN_LIMIT_D_T   | NUMBER(11,0)       | OTP非約定轉帳日限額              |    |
|     | SAMST_OTP_NON_TRAN_LIMIT_M_T   | NUMBER(11,0)       | OTP非約定轉帳月限額              |    |
|     | SAMST_OTP_NON_CON_D_TTL_T      | NUMBER(13,0)       | OTP非約定轉帳金額日累計            |    |
|     | SAMST_OTP_NON_CON_M_TTL_T      | NUMBER(13,0)       | OTP非約定轉帳金額月累計            |    |
|     | SAMST_VISA_DEBIT_HOLD_SER_NO   | VARCHAR2(3 char)   | VISA金融卡圈存序號              |    |
|     | SAMST_VISA_DEBIT_ACC_FUNC      | NUMBER(1,0)        | VISA金融卡帳戶簽帳功能            |    |
|     | SAMST_VISA_DEBIT_AMT_LIMIT     | NUMBER(5,0)        | VISA金融卡每日簽帳限額            |    |
|     | SAMST_VISA_DEBIT_AMT_TTL_T     | NUMBER(7,0)        | VISA金融卡當日累計簽帳金額          |    |
|     | SAMST_VISA_DEBIT_HOLD_DATE     | DATE               | VISA金融卡上次簽帳日期            |    |
|     | SAMST_VISA_DEBIT_CNT_LIMIT     | NUMBER(3,0)        | VISA金融卡日刷卡次數上限           |    |
|     | SAMST_VISA_DEBIT_CNT_TTL_T     | NUMBER(3,0)        | VISA金融卡當日累計刷卡次數          |    |
|     | SAMST_VISA_DEBIT_FEE_SER_NO    | VARCHAR2(2 char)   | VISA金融卡欠費序號              |    |
|     | SAMST_UNPOST_SER_NO            | VARCHAR2(6 char)   | 首筆未登摺序號                  |    |
|     | SAMST_NO_PB_STAT               | VARCHAR2(1 char)   | 無摺取款密碼申請狀態               |    |
|     | SAMST_NO_PB_PASSWD             | VARCHAR2(8 char)   | 無摺取款密碼                   |    |
|     | SAMST_FAX_ORDER_STAT           | VARCHAR2(1 char)   | 傳真交易申請狀態                 |    |
|     | SAMST_FAX_ORDER_PWD_KIND       | NUMBER(1,0)        | 傳真交易驗證密碼類別               |    |
|     | SAMST_GROSS_INS_FEE            | NUMBER(8,0)        | 本年度代扣健保費                 |    |
|     | SAMST_DOUBLE_DOCU_STAT         | VARCHAR2(1 char)   | 臨櫃提示雙證件狀態_數位存款帳戶         |    |
|     | SAMST_ACCOUNT_PURPOSE          | VARCHAR2(2 char)   | 開戶目的                     |    |
|     | SAMST_OUT_SER                  | VARCHAR2(1 char)   | 外收服務設定                   |    |
|     | SAMST_PURP_OTH                 | VARCHAR2(12 char)  | 開戶目的-其他理由                |    |
|     | SAMST_PURP_TRUST               | VARCHAR2(2 char)   | 開戶目的-信託細項                |    |
|     | SAMST_AGENT                    | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | SAMST_PROD_CODE                | VARCHAR2(7 char)   | 優利產品代號                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SAMASTER2
#### 存摺存款主檔(二)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAMST_ACC_ID_NO                | VARCHAR2(13 char)  | 帳號                       |    |
|     | SAMST_BR_CODE                  | VARCHAR2(4 char)   | 客戶所屬分行別                  |    |
|     | SAMST_PRD_CODE                 | VARCHAR2(7 char)   | 產品代號                     |    |
| PK  | SAMST_ID_CODE                  | VARCHAR2(11 char)  | 身份證統一編號(或負責人統一編號)        |    |
|     | SAMST_CUST_STAT                | VARCHAR2(2 char)   | 帳戶狀態代號                   |    |
|     | SAMST_PASSBOOK_STATUS          | VARCHAR2(1 char)   | 執行無摺交易旗標                 |    |
|     | SAMST_OD_STAT                  | NUMBER(1,0)        | 透支筆數                     |    |
|     | SAMST_MS_STAT                  | VARCHAR2(1 char)   | 綜存狀態                     |    |
|     | SAMST_NET_STAT                 | VARCHAR2(1 char)   | 全行/自行提款申請狀態              |    |
|     | SAMST_PB_LOSE_STAT             | VARCHAR2(1 char)   | 存摺掛失狀態                   |    |
|     | SAMST_CHOP_LOSE_STAT           | NUMBER(1,0)        | 變更代表人暨約定印鑑               |    |
|     | SAMST_TXN_STOP_STAT            | VARCHAR2(1 char)   | 暫停交易狀態                   |    |
|     | SAMST_DEAD_STAT                | VARCHAR2(1 char)   | 死亡事故狀態                   |    |
|     | SAMST_COURT_STAT               | NUMBER(1,0)        | 法院扣押                     |    |
|     | SAMST_HOLD_STAT                | NUMBER(1,0)        | 本行設定                     |    |
|     | SAMST_WARN_STAT                | VARCHAR2(1 char)   | 警示戶狀態                    |    |
|     | SAMST_OD_OV_STAT               | VARCHAR2(1 char)   | 是否透支超過限額旗標               |    |
|     | SAMST_WASH_NOCHK_MARK          | VARCHAR2(1 char)   | 洗錢防制法免申報註記               |    |
|     | SAMST_WASH_DB_OV_FLAG          | VARCHAR2(1 char)   | 當日洗錢防制法支出超過限額旗標          |    |
|     | SAMST_WASH_CR_OV_FLAG          | VARCHAR2(1 char)   | 當日洗錢防制法存入超過限額旗標          |    |
|     | SAMST_INT_AWAY_FLG             | NUMBER(1,0)        | 拋棄利息請求權                  |    |
|     | SAMST_FRUIT                    | NUMBER(1,0)        | 果菜戶                      |    |
|     | SAMST_UNPOST_FLAG              | VARCHAR2(1 char)   | 未登摺不壓縮註記                 |    |
|     | SAMST_CRNT_SAVING_STK_FLAG     | VARCHAR2(1 char)   | 薪轉戶註記                    |    |
|     | SAMST_SKL_ATM_USE_FLAG         | VARCHAR2(1 char)   | 保貸戶使用狀況旗標                |    |
|     | SAMST_TD_CASH_CR_FLAG          | VARCHAR2(1 char)   | 當日現金存入累計額超過限額不授權旗標       |    |
|     | SAMST_VISA_DEBIT_FLAG          | VARCHAR2(1 char)   | VISA金融卡註記                |    |
|     | SAMST_STAT_FILLER_0            | VARCHAR2(1 char)   | 狀態保留位                    |    |
|     | SAMST_OPEN_KIND                | VARCHAR2(2 char)   | 是否臨櫃開戶                   |    |
|     | SAMST_STAT_FILLER              | VARCHAR2(3 char)   | 狀態保留位                    |    |
|     | SAMST_OPEN_DATE                | DATE               | 開戶日期                     |    |
|     | SAMST_L_TXN_DATE               | DATE               | 積數計算基準日                  |    |
|     | SAMST_MODIF_DATE               | DATE               | 資料維護日期                   |    |
|     | SAMST_SAL_TR_DATE              | DATE               | 薪資轉帳日期                   |    |
|     | SAMST_L_BUSI_DATE              | DATE               | 上次往來日                    |    |
|     | SAMST_L_AUM_DATE               | DATE               | 上次計息迄日                   |    |
|     | SAMST_MAX_BAL_DATE             | DATE               | 當年最高餘額發生日                |    |
|     | SAMST_SKL_ATM_DOCNO            | VARCHAR2(16 char)  | 借款申請書編號                  |    |
|     | SAMST_MOVE_BR_CODE             | VARCHAR2(4 char)   | 移出行                      |    |
|     | SAMST_CENT_CODE                | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | SAMST_ACC_CHAR_CODE            | VARCHAR2(2 char)   | 帳戶性質別                    |    |
|     | SAMST_INT_RATE                 | VARCHAR2(3 char)   | 利率別                      |    |
|     | SAMST_INT_GLAP                 | NUMBER(8,3)        | 議價利率差幅                   |    |
|     | SAMST_INT_CODE                 | NUMBER(1,0)        | 計息別                      |    |
|     | SAMST_FORCE_TAX_CODE           | NUMBER(1,0)        | 強迫扣稅別                    |    |
|     | SAMST_JOIN_STAT                | VARCHAR2(1 char)   | 聯名戶旗標                    |    |
|     | SAMST_PB_VER_NO                | NUMBER(2,0)        | 存摺版本                     |    |
|     | SAMST_PB_ID                    | VARCHAR2(2 char)   | 摺號                       |    |
|     | SAMST_PB_LINE                  | NUMBER(2,0)        | 存摺列印行次                   |    |
|     | SAMST_UNPOST_CNT               | NUMBER(6,0)        | 未登摺筆數                    |    |
|     | SAMST_UNPOST_DATE              | DATE               | 首筆未登摺日期                  |    |
|     | SAMST_TXN_SER_NO               | VARCHAR2(6 char)   | 存提記錄序號                   |    |
|     | SAMST_HOLD_SER_NO              | VARCHAR2(2 char)   | 事故序號                     |    |
|     | SAMST_HOLD_CNT                 | NUMBER(4,0)        | 止扣筆數                     |    |
|     | SAMST_BAL                      | NUMBER(17,2)       | 帳戶餘額                     |    |
|     | SAMST_TD_CHECK_AMT             | NUMBER(13,0)       | 本交票金額                    |    |
|     | SAMST_TD_CHECK_CNT             | NUMBER(4,0)        | 本交票筆數                    |    |
|     | SAMST_TM_CHECK_AMT             | NUMBER(13,0)       | 次交票金額                    |    |
|     | SAMST_TM_CHECK_CNT             | NUMBER(4,0)        | 次交票筆數                    |    |
|     | SAMST_PB_BAL                   | NUMBER(17,2)       | 存摺餘額                     |    |
|     | SAMST_FROZEN_AMT               | NUMBER(17,2)       | 法扣金額                     |    |
|     | SAMST_HOLD_AMT                 | NUMBER(17,2)       | 保留金額(本行設定)               |    |
|     | SAMST_STOCK_NOENOUG_AMT        | NUMBER(17,2)       | 股款交割不足金額                 |    |
|     | SAMST_VISA_DB_HLD_AMT          | NUMBER(17,2)       | VISA                     |    |
|     | SAMST_PR_AUTHPR_HLD_AMT        | NUMBER(17,2)       | 預約授權交易保留金額               |    |
|     | SAMST_TM_WDRAW_AMT             | NUMBER(17,2)       | 其它圈存保留金額                 |    |
|     | SAMST_TM_DPOST_AMT             | NUMBER(17,2)       | 外幣圈存保留金額                 |    |
|     | SAMST_AGBR_WDRAW_LIMIT         | NUMBER(13,0)       | 全行提款限額                   |    |
|     | SAMST_L_DAY_BAL                | NUMBER(17,2)       | 前日帳戶餘額                   |    |
|     | SAMST_WDRAW_LIMIT              | NUMBER(13,0)       | 約定提款限額                   |    |
|     | SAMST_TRAN_LIMIT               | NUMBER(13,0)       | 約定轉帳限額(全行)               |    |
|     | SAMST_NON_CON_LIMIT            | NUMBER(13,0)       | 非約定轉帳限額                  |    |
|     | SAMST_TD_ATM_TRAN_AMT          | NUMBER(17,2)       | ATM本日轉帳累計金額              |    |
|     | SAMST_TM_ATM_TRAN_AMT          | NUMBER(17,2)       | 本日支出累計金額                 |    |
|     | SAMST_TD_ATM_WDRAW_AMT         | NUMBER(17,2)       | ATM本日提款累計金額              |    |
|     | SAMST_TM_ATM_WDRAW_AMT         | NUMBER(17,2)       | ATM次日提款累計金額              |    |
|     | SAMST_TD_NON_CON_TFR_AMT       | NUMBER(17,2)       | ATM本日未約定轉帳總額             |    |
|     | SAMST_TM_NON_CON_TFR_AMT       | NUMBER(17,2)       | ATM次日未約定轉帳總額             |    |
|     | SAMST_TD_CASH_CR_AMT           | NUMBER(17,2)       | 本日現金存入累計金額               |    |
|     | SAMST_TD_CASH_DB_AMT           | NUMBER(17,2)       | 本日現金提款累計金額               |    |
|     | SAMST_TD_RT_TXN_CNT            | NUMBER(3,0)        | 本日匯入筆數                   |    |
|     | SAMST_TD_RT_TXN_AMT            | NUMBER(17,2)       | 本日匯入金額                   |    |
|     | SAMST_TD_AGBR_DB_AMT           | NUMBER(17,2)       | 當日全行提款累計金額               |    |
|     | SAMST_CURR_ADJ_AUM             | NUMBER(15,0)       | 本期累計計息積數                 |    |
|     | SAMST_UNLIM_ADJ_AUM_1          | NUMBER(15,0)       | 本期限額外積數_1                |    |
|     | SAMST_UNLIM_ADJ_AUM_2          | NUMBER(15,0)       | 本期限額外積數_2                |    |
|     | SAMST_UNLIM_ADJ_AUM_3          | NUMBER(15,0)       | 本期限額外積數_3                |    |
|     | SAMST_UNLIM_ADJ_AUM_4          | NUMBER(15,0)       | 本期限額外積數_4                |    |
|     | SAMST_CURR_REF_AUM             | NUMBER(15,0)       | 本期累計實際積數                 |    |
|     | SAMST_MON_REF_AUM              | NUMBER(15,0)       | 本月累計實際積數                 |    |
|     | SAMST_SS_REF_AUM               | NUMBER(15,0)       | 月積數累計實際積數                |    |
|     | SAMST_MN_INT_AMT               | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | SAMST_VIP_CUST                 | VARCHAR2(2 char)   | VIP客戶                    |    |
|     | SAMST_NET_PASSWD               | VARCHAR2(8 char)   | 全行提款密碼                   |    |
|     | SAMST_NET_PASSWD_ERR_TIMES     | NUMBER(1,0)        | 全行提款密碼錯誤次數               |    |
|     | SAMST_SERVICE_AO               | VARCHAR2(6 char)   | 服務AO                     |    |
|     | SAMST_ENLIST_TLR               | VARCHAR2(6 char)   | 招募行員                     |    |
|     | SAMST_NOTICE_KIND              | NUMBER(1,0)        | 聯絡/不聯絡                   |    |
|     | SAMST_CHK_SHEET_CODE           | NUMBER(1,0)        | 對帳單寄送方式                  |    |
|     | SAMST_SS_INT_ACC_ID            | VARCHAR2(13 char)  | 退休帳戶結息帳號                 |    |
|     | SAMST_MS_LINE                  | NUMBER(2,0)        | 綜定列印行次                   |    |
|     | SAMST_PROJECT_CODE             | VARCHAR2(4 char)   | 券商代號                     |    |
|     | SAMST_Y_MAX_BAL                | NUMBER(17,2)       | 當年度最高餘額                  |    |
|     | SAMST_GROSS_INT                | NUMBER(10,0)       | 本年度給付利息                  |    |
|     | SAMST_GROSS_TAX                | NUMBER(10,0)       | 本年度扣繳稅款                  |    |
|     | SAMST_MAKE_DOC_INT             | NUMBER(10,0)       | 本年度已開扣繳憑單利息              |    |
|     | SAMST_MAKE_DOC_TAX             | NUMBER(10,0)       | 本年度已開扣繳憑單稅款              |    |
|     | SAMST_LAST_GROSS_INT           | NUMBER(10,0)       | 去年度給付利息                  |    |
|     | SAMST_LAST_GROSS_TAX           | NUMBER(10,0)       | 去年度扣繳稅款                  |    |
|     | SAMST_VGBR_TRAN_LIMIT          | NUMBER(13,0)       | 約定轉帳限額(跨行)               |    |
|     | SAMST_XML_TRAN_LIMIT_T         | NUMBER(11,0)       | XML約定轉帳限額                |    |
|     | SAMST_XML_NON_CON_TRAN_LIMIT_T | NUMBER(11,0)       | EDI非約定轉帳限額               |    |
|     | SAMST_XML_TRAN_LIMIT_O         | NUMBER(11,0)       | XML約定跨轉限額                |    |
|     | SAMST_XML_NON_CON_TRAN_LIMIT_O | NUMBER(11,0)       | EDI非約定跨轉限額               |    |
|     | SAMST_XML_TRAN_TTL_T           | NUMBER(11,0)       | XML約定轉帳限額日累計             |    |
|     | SAMST_XML_NON_CON_TTL_T        | NUMBER(11,0)       | EDI非約定轉帳限額日累計            |    |
|     | SAMST_XML_TRAN_TTL_O           | NUMBER(11,0)       | XML約定跨轉限額日累計             |    |
|     | SAMST_XML_NON_CON_TTL_O        | NUMBER(11,0)       | EDI非約定跨轉限額日累計            |    |
|     | SAMST_DOCNO_FILLER             | VARCHAR2(8 char)   | 空白保留位                    |    |
|     | SAMST_VGBR_TRAN_LIMIT_TTL      | NUMBER(13,0)       | 約定轉帳金額日累計(跨行)            |    |
|     | SAMST_OTP_NON_TRAN_LIMIT_D_T   | NUMBER(11,0)       | OTP非約定轉帳日限額              |    |
|     | SAMST_OTP_NON_TRAN_LIMIT_M_T   | NUMBER(11,0)       | OTP非約定轉帳月限額              |    |
|     | SAMST_OTP_NON_CON_D_TTL_T      | NUMBER(13,0)       | OTP非約定轉帳金額日累計            |    |
|     | SAMST_OTP_NON_CON_M_TTL_T      | NUMBER(13,0)       | OTP非約定轉帳金額月累計            |    |
|     | SAMST_VISA_DEBIT_HOLD_SER_NO   | VARCHAR2(3 char)   | VISA金融卡圈存序號              |    |
|     | SAMST_VISA_DEBIT_ACC_FUNC      | NUMBER(1,0)        | VISA金融卡帳戶簽帳功能            |    |
|     | SAMST_VISA_DEBIT_AMT_LIMIT     | NUMBER(5,0)        | VISA金融卡每日簽帳限額            |    |
|     | SAMST_VISA_DEBIT_AMT_TTL_T     | NUMBER(7,0)        | VISA金融卡當日累計簽帳金額          |    |
|     | SAMST_VISA_DEBIT_HOLD_DATE     | DATE               | VISA金融卡上次簽帳日期            |    |
|     | SAMST_VISA_DEBIT_CNT_LIMIT     | NUMBER(3,0)        | VISA金融卡日刷卡次數上限           |    |
|     | SAMST_VISA_DEBIT_CNT_TTL_T     | NUMBER(3,0)        | VISA金融卡當日累計刷卡次數          |    |
|     | SAMST_VISA_DEBIT_FEE_SER_NO    | VARCHAR2(2 char)   | VISA金融卡欠費序號              |    |
|     | SAMST_UNPOST_SER_NO            | VARCHAR2(6 char)   | 首筆未登摺序號                  |    |
|     | SAMST_NO_PB_STAT               | VARCHAR2(1 char)   | 無摺取款密碼申請狀態               |    |
|     | SAMST_NO_PB_PASSWD             | VARCHAR2(8 char)   | 無摺取款密碼                   |    |
|     | SAMST_FAX_ORDER_STAT           | VARCHAR2(1 char)   | 傳真交易申請狀態                 |    |
|     | SAMST_FAX_ORDER_PWD_KIND       | NUMBER(1,0)        | 傳真交易驗證密碼類別               |    |
|     | SAMST_GROSS_INS_FEE            | NUMBER(8,0)        | 本年度代扣健保費                 |    |
|     | SAMST_DOUBLE_DOCU_STAT         | VARCHAR2(1 char)   | 臨櫃提示雙證件狀態_數位存款帳戶         |    |
|     | SAMST_ACCOUNT_PURPOSE          | VARCHAR2(2 char)   | 開戶目的                     |    |
|     | SAMST_OUT_SER                  | VARCHAR2(1 char)   | 外收服務設定                   |    |
|     | SAMST_PURP_OTH                 | VARCHAR2(12 char)  | 開戶目的-其他理由                |    |
|     | SAMST_PURP_TRUST               | VARCHAR2(2 char)   | 開戶目的-信託細項                |    |
|     | SAMST_AGENT                    | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | SAMST_PROD_CODE                | VARCHAR2(7 char)   | 優利產品代號                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SAMEMOCD
#### 存款摘要對照檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAMMD_MEMO_CODE                | VARCHAR2(4 char)   | 摘要代號                     |    |
|     | SAMMD_CHINES_CODE              | VARCHAR2(20 char)  | 中文摘要                     |    |
|     | SAMMD_CREATE_DATE              | DATE               | 建立日期                     |    |
|     | SAMMD_CHG_TLR                  | VARCHAR2(6 char)   | 修改櫃員                     |    |
|     | SAMMD_CHG_DATE                 | DATE               | 修改日期                     |    |
|     | SAMMD_OTH_MEMO                 | VARCHAR2(2 char)   | 他行對照摘要                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_SAPRDINT
#### 優利產品利率檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SAPNT_PROD_CODE                | VARCHAR2(7 char)   | 優利產品代號                   |    |
|     | SAPNT_PROD_NAME                | VARCHAR2(40 char)  | 優利產品名稱                   |    |
|     | SAPNT_START_DATE               | NUMBER(8,0)        | 優利產品起日                   |    |
|     | SAPNT_END_DATE                 | NUMBER(8,0)        | 優利產品迄日                   |    |
|     | SAPNT_START_AMT                | NUMBER(10,0)       | 起息金額                     |    |
|     | SAPNT_TERM_NO                  | NUMBER(2,0)        | 期數                       |    |
|     | SAPNT_INT_RATE1                | NUMBER(7,5)        | 1_12個月利率1                |    |
|     | SAPNT_INT_RATE2                | NUMBER(7,5)        | 1_12個月利率2                |    |
|     | SAPNT_INT_RATE3                | NUMBER(7,5)        | 1_12個月利率3                |    |
|     | SAPNT_INT_RATE4                | NUMBER(7,5)        | 1_12個月利率4                |    |
|     | SAPNT_INT_RATE5                | NUMBER(7,5)        | 1_12個月利率5                |    |
|     | SAPNT_INT_RATE6                | NUMBER(7,5)        | 1_12個月利率6                |    |
|     | SAPNT_INT_RATE7                | NUMBER(7,5)        | 1_12個月利率7                |    |
|     | SAPNT_INT_RATE8                | NUMBER(7,5)        | 1_12個月利率8                |    |
|     | SAPNT_INT_RATE9                | NUMBER(7,5)        | 1_12個月利率9                |    |
|     | SAPNT_INT_RATE10               | NUMBER(7,5)        | 1_12個月利率10               |    |
|     | SAPNT_INT_RATE11               | NUMBER(7,5)        | 1_12個月利率11               |    |
|     | SAPNT_INT_RATE12               | NUMBER(7,5)        | 1_12個月利率12               |    |
|     | SAPNT_TLR_CODE                 | VARCHAR2(6 char)   | 建檔人員                     |    |
|     | SAPNT_CRT_DATE                 | NUMBER(8,0)        | 建檔日期                     |    |
|     | SAPNT_MOD_TLR                  | VARCHAR2(6 char)   | 修改人員                     |    |
|     | SAPNT_MOD_DATE                 | NUMBER(8,0)        | 修改日期                     |    |
|     | SAPNT_OPEN_CNT                 | NUMBER(10,0)       | 開戶戶數                     |    |
|     | SAPNT_STAT                     | NUMBER(1,0)        | 狀態                       |    |
|     | SAPNT_SA_PRD_CODE              | VARCHAR2(7 char)   | 存款產品代號                   |    |
|     | SAPNT_LMT_BEG                  | NUMBER(10,0)       | 首筆存入下限                   |    |
|     | SAPNT_LMT_END                  | NUMBER(10,0)       | 每戶存入上限                   |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_SATXNREC
#### 帳戶交易記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SATXN_ACC_ID_NO                | VARCHAR2(13 char)  | 帳號                       |    |
| PK  | SATXN_ENTRY_DATE               | DATE               | 記帳日期                     |    |
| PK  | SATXN_TXN_SER                  | VARCHAR2(6 char)   | 往來序號                     |    |
| PK  | SATXN_TXN_ID_CODE              | VARCHAR2(5 char)   | 交易代號                     |    |
|     | SATXN_BR_UNIT                  | VARCHAR2(4 char)   | 代收付單位                    |    |
|     | SATXN_BR_CODE                  | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | SATXN_TXN_SER_NO               | VARCHAR2(13 char)  | 交易序號                     |    |
|     | SATXN_BUSI_DATE                | DATE               | 交易日期                     |    |
|     | SATXN_TXN_TIME                 | VARCHAR2(6 char)   | 交易時間                     |    |
|     | SATXN_MEMO_CODE                | VARCHAR2(4 char)   | 摘要代號                     |    |
|     | SATXN_TXN_MEMO                 | VARCHAR2(10 char)  | 摘要                       |    |
|     | SATXN_DB_CR_STAT               | VARCHAR2(1 char)   | 借貸別                      |    |
|     | SATXN_ALTER_MEMO               | VARCHAR2(16 char)  | 附屬摘要                     |    |
|     | SATXN_TXN_AMT                  | NUMBER(17,2)       | 交易金額                     |    |
|     | SATXN_SAM_BAL                  | NUMBER(17,2)       | 主檔餘額                     |    |
|     | SATXN_TXN_STAT                 | VARCHAR2(1 char)   | 交易狀態                     |    |
|     | SATXN_PB_STATUS                | VARCHAR2(1 char)   | 無摺交易註記                   |    |
|     | SATXN_ID_CODE                  | VARCHAR2(11 char)  | 統一編號                     |    |
|     | SATXN_SUP_CODE_1               | VARCHAR2(6 char)   | 主管代號1                    |    |
|     | SATXN_SUP_CODE_2               | VARCHAR2(6 char)   | 主管代號2                    |    |
|     | SATXN_BUSI_CODE                | VARCHAR2(4 char)   | 交易類別                     |    |
|     | SATXN_CASH_AMT                 | NUMBER(10,0)       | 現金金額                     |    |
|     | SATXN_BANK_CODE                | VARCHAR2(7 char)   | 匯出行庫代號                   |    |
|     | SATXN_BANK_NO                  | VARCHAR2(3 char)   | 銀行別                      |    |
|     | SATXN_TXNNAME                  | VARCHAR2(20 char)  | 交易人資料                    |    |
|     | SATXN_FTT_FLAG                 | VARCHAR2(1 char)   | 全方位交易旗標                  |    |
|     | SATXN_TERM_ID                  | VARCHAR2(8 char)   | 終端機代號                    |    |
|     | SATXN_FILLER                   | VARCHAR2(50 char)  | 空白                       |    |
|     | TBL_UPD_TIM                    | TIMESTAMP          | 表格更新時間                   |