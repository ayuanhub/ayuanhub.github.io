---
sidebar_position: 20
title: 台幣核心系統-定期存款(CSTI)
---

### VW_ODS_D_TIACCREC
#### 存單帳戶存提明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIACR_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
| PK  | TIACR_TXN_DATE            | DATE               | 交易日期                     |    |
| PK  | TIACR_TXN_TIME            | VARCHAR2(8 char)   | 交易時間                     |    |
|     | TIACR_BR_CODE             | VARCHAR2(4 char)   | 所屬分行                     |    |
|     | TIACR_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
|     | TIACR_CHK_NO              | VARCHAR2(8 char)   | 用紙編號                     |    |
|     | TIACR_TXN_ID_CODE         | VARCHAR2(5 char)   | 交易代號                     |    |
|     | TIACR_DB_CR_CODE          | VARCHAR2(1 char)   | 借貸別                      |    |
|     | TIACR_TXN_STATUS          | VARCHAR2(1 char)   | 交易狀態                     |    |
|     | TIACR_TXN_AMT             | NUMBER(15,2)       | 交易金額                     |    |
|     | TIACR_ACC_BAL             | NUMBER(15,2)       | 帳戶餘額                     |    |
|     | TIACR_PRD_CODE            | VARCHAR2(7 char)   | 產品代號                     |    |
|     | TIACR_AUM_CAL_DATE        | DATE               | 上次計算迄日                   |    |
|     | TIACR_TLR_CODE            | VARCHAR2(6 char)   | 櫃員代號                     |    |
|     | TIACR_SUP_CODE_1          | VARCHAR2(6 char)   | 主管代號-1                   |    |
|     | TIACR_SUP_CODE_2          | VARCHAR2(6 char)   | 主管代號-2                   |    |
|     | TIACR_TXN_SEQ_NO          | VARCHAR2(7 char)   | 交易序號                     |    |
|     | TIACR_AGENT_BR_CODE       | VARCHAR2(4 char)   | 代理行                      |    |
|     | TIACR_FILLER              | VARCHAR2(57 char)  | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_TICUSTER
#### 定期帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TICST_ACC_ID_NO           | VARCHAR2(13 char)  | 帳號                       |    |
|     | TICST_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TICST_PRD_CODE            | VARCHAR2(7 char)   | 產品別                      |    |
|     | TICST_ID_CODE             | VARCHAR2(11 char)  | 統一編號                     |    |
|     | TICST_CUST_STAT           | VARCHAR2(2 char)   | 帳戶狀態代號                   |    |
|     | TICST_CHOP_LOSE_STAT      | VARCHAR2(1 char)   | 印鑑掛失狀態                   |    |
|     | TICST_TXN_STOP_STAT       | VARCHAR2(1 char)   | 暫停交易狀態                   |    |
|     | TICST_DEAD_STAT           | VARCHAR2(1 char)   | 死亡事故狀態                   |    |
|     | TICST_WARN_STAT           | VARCHAR2(1 char)   | 警示戶狀態                    |    |
|     | TICST_STAT_FILLER         | VARCHAR2(12 char)  | 狀態保留位                    |    |
|     | TICST_WASH_DB_OV_FLAG     | VARCHAR2(1 char)   | 當日洗錢防制法支出超過限額旗標          |    |
|     | TICST_WASH_CR_OV_FLAG     | VARCHAR2(1 char)   | 當日洗錢防制法存入超過限額旗標          |    |
|     | TICST_CUST_CHAR_CODE      | VARCHAR2(2 char)   | 帳戶性質別                    |    |
|     | TICST_NOTICE_KIND         | NUMBER(1,0)        | 聯絡／不聯絡                   |    |
|     | TICST_MAIL_KIND           | VARCHAR2(1 char)   | 對帳單寄送方式                  |    |
|     | TICST_WASH_NOCHK_MARK     | VARCHAR2(1 char)   | 洗錢防制法免申報註記               |    |
|     | TICST_FORCE_TAX_CODE      | VARCHAR2(1 char)   | 強迫扣稅別                    |    |
|     | TICST_THD_BILL_AMT        | NUMBER(15,2)       | 本交票金額                    |    |
|     | TICST_NXD_BILL_AMT        | NUMBER(15,2)       | 次交票金額                    |    |
|     | TICST_ACC_BAL             | NUMBER(15,2)       | 帳戶餘額                     |    |
|     | TICST_ACC_41_CNT          | NUMBER(3,0)        | 零存整付科目存單筆數               |    |
|     | TICST_ACC_41_BAL          | NUMBER(15,2)       | 零存整付科目存單餘額               |    |
|     | TICST_ACC_41_PAY_INT      | NUMBER(15,2)       | 零存整付科目給付利息總額             |    |
|     | TICST_ACC_41_PAY_TAX      | NUMBER(15,2)       | 零存整付科目扣繳稅額總額             |    |
|     | TICST_ACC_41_GROS_INT     | NUMBER(15,2)       | 零存整付科目已開利息總額             |    |
|     | TICST_ACC_41_GROS_TAX     | NUMBER(15,2)       | 零存整付科目已開稅額總額             |    |
|     | TICST_41_CURR_YEAR_AUM    | NUMBER(15,0)       | 零存整付科目本年度存款實際積數          |    |
|     | TICST_41_LAST_YEAR_AUM    | NUMBER(15,0)       | 零存整付科目上年度存款實際積數          |    |
|     | TICST_ACC_42_CNT          | NUMBER(3,0)        | 整存整付科目存單筆數               |    |
|     | TICST_ACC_42_BAL          | NUMBER(15,2)       | 整存整付科目存單餘額               |    |
|     | TICST_ACC_42_PAY_INT      | NUMBER(15,2)       | 整存整付科目給付利息總額             |    |
|     | TICST_ACC_42_PAY_TAX      | NUMBER(15,2)       | 整存整付科目扣繳稅額總額             |    |
|     | TICST_ACC_42_GROS_INT     | NUMBER(15,2)       | 整存整付科目已開利息總額             |    |
|     | TICST_ACC_42_GROS_TAX     | NUMBER(15,2)       | 整存整付科目已開稅額總額             |    |
|     | TICST_42_CURR_YEAR_AUM    | NUMBER(15,0)       | 整存整付科目本年度存款實際積數          |    |
|     | TICST_42_LAST_YEAR_AUM    | NUMBER(15,0)       | 整存整付科目上年度存款實際積數          |    |
|     | TICST_ACC_43_CNT          | NUMBER(3,0)        | 存本取息科目存單筆數               |    |
|     | TICST_ACC_43_BAL          | NUMBER(15,2)       | 存本取息科目存單餘額               |    |
|     | TICST_ACC_43_PAY_INT      | NUMBER(15,2)       | 存本取息科目給付利息總額             |    |
|     | TICST_ACC_43_PAY_TAX      | NUMBER(15,2)       | 存本取息科目扣繳稅額總額             |    |
|     | TICST_ACC_43_GROS_INT     | NUMBER(15,2)       | 存本取息科目已開利息總額             |    |
|     | TICST_ACC_43_GROS_TAX     | NUMBER(15,2)       | 存本取息科目已開稅額總額             |    |
|     | TICST_43_CURR_YEAR_AUM    | NUMBER(15,0)       | 存本取息科目本年度存款實際積數          |    |
|     | TICST_43_LAST_YEAR_AUM    | NUMBER(15,0)       | 存本取息科目上年度存款實際積數          |    |
|     | TICST_ACC_44_CNT          | NUMBER(3,0)        | 定期存款科目存單筆數               |    |
|     | TICST_ACC_44_BAL          | NUMBER(15,2)       | 定期存款科目存單餘額               |    |
|     | TICST_ACC_44_PAY_INT      | NUMBER(15,2)       | 定期存款科目給付利息總額             |    |
|     | TICST_ACC_44_PAY_TAX      | NUMBER(15,2)       | 定期存款科目扣繳稅額總額             |    |
|     | TICST_ACC_44_GROS_INT     | NUMBER(15,2)       | 定期存款科目已開利息總額             |    |
|     | TICST_ACC_44_GROS_TAX     | NUMBER(15,2)       | 定期存款科目已開稅額總額             |    |
|     | TICST_44_CURR_YEAR_AUM    | NUMBER(15,0)       | 定期存款(44或45)科目本年度存款實際積數   |    |
|     | TICST_44_LAST_YEAR_AUM    | NUMBER(15,0)       | 定期存款(44或45)科目上年度存款實際積數   |    |
|     | TICST_PAPER_KIND          | VARCHAR2(1 char)   | 單據類別                     |    |
|     | TICST_OPEN_DATE           | DATE               | 開戶日期                     |    |
|     | TICST_LAST_TXN_DATE       | DATE               | 上次交易日期                   |    |
|     | TICST_MODIF_DATE          | DATE               | 資料維護日期                   |    |
|     | TICST_TRANS_DATE          | DATE               | 移存日期                     |    |
|     | TICST_TRANS_BR_CODE       | VARCHAR2(4 char)   | 移出行                      |    |
|     | TICST_BREAK_INT_PER       | NUMBER(3,0)        | 中途解約利息折算(百分比)            |    |
|     | TICST_AUTO_INT_KIND       | VARCHAR2(1 char)   | 約定轉息方式                   |    |
|     | TICST_AUTO_INT_SELF       | VARCHAR2(1 char)   | 轉息本人戶記號                  |    |
|     | TICST_AUTO_INT_ACC_NO     | VARCHAR2(13 char)  | 約定轉息帳號                   |    |
|     | TICST_AUTO_EXTEND_KIND    | VARCHAR2(1 char)   | 約定轉期別                    |    |
|     | TICST_AUTO_EXTEND_LIMIT   | NUMBER(3,0)        | 約定轉期次數                   |    |
|     | TICST_TOT_CASH_IN_AMT     | NUMBER(15,2)       | 當日現金存入累計金額               |    |
|     | TICST_TOT_CASH_OUT_AMT    | NUMBER(15,2)       | 當日現金支累計金額                |    |
|     | TICST_TOT_TRAN_IN_AMT     | NUMBER(15,2)       | 當日轉帳存入累計金額               |    |
|     | TICST_TOT_TRAN_OUT_AMT    | NUMBER(15,2)       | 當日轉帳支出累計金額               |    |
|     | TICST_JOIN_STAT           | VARCHAR2(1 char)   | 聯名戶旗標                    |    |
|     | TICST_MOVIN_BR            | NUMBER(4,0)        | 約定移入行                    |    |
|     | TICST_MOVIN_ACC_ID        | VARCHAR2(13 char)  | 約定移入帳號                   |    |
|     | TICST_HOLD_SER_NO         | VARCHAR2(2 char)   | 止扣序號                     |    |
|     | TICST_HOLD_CNT            | NUMBER(3,0)        | 掛失筆數                     |    |
|     | TICST_HOLD_AMT            | NUMBER(15,2)       | 掛失總額                     |    |
|     | TICST_COURT_HOLD_CNT      | NUMBER(3,0)        | 法扣筆數                     |    |
|     | TICST_COURT_HOLD_AMT      | NUMBER(15,2)       | 法扣總額                     |    |
|     | TICST_POWER_HOLD_CNT      | NUMBER(3,0)        | 設質筆數                     |    |
|     | TICST_POWER_HOLD_AMT      | NUMBER(15,2)       | 設質總額                     |    |
|     | TICST_CHG_INT_ACC         | VARCHAR2(1 char)   | 更新轉息帳號旗標                 |    |
|     | TICST_LDAY_BAL            | NUMBER(15,0)       | 前日餘額                     |    |
|     | TICST_AUM_END_DATE        | DATE               | 積數計算迄日                   |    |
|     | TICST_OPEN_KIND           | VARCHAR2(1 char)   | 臨櫃開戶旗標                   |    |
|     | TICST_CLS_DATE            | DATE               | 結清日期                     |    |
|     | TICST_KEEP_HOLD_CNT       | NUMBER(3,0)        | 本行圈存筆數                   |    |
|     | TICST_KEEP_HOLD_AMT       | NUMBER(15,2)       | 本行圈存總額                   |    |
|     | TICST_AUT_LAST_TXN_DATE   | DATE               | 自動化交易上次交易日期              |    |
|     | TICST_CURR_MN_TRAN_IN_AMT | NUMBER(15,2)       | 當月自動化累計轉帳開單金額            |    |
|     | TICST_BAR_LAST_TXN_DATE   | DATE               | 當月臨櫃交易上次交易日期             |    |
|     | TICST_BAR_MN_TOT_IN_AMT   | NUMBER(15,2)       | 當月臨櫃交易累計開單金額             |    |
|     | TICST_FILLER              | VARCHAR2(4 char)   | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_TICUSTST
#### 定期帳戶主檔衛星檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TICSS_ACC_ID_NO           | VARCHAR2(13 char)  | 帳號                       |    |
|     | TICSS_ACCOUNT_PURPOSE     | VARCHAR2(2 char)   | 開戶目的                     |    |
|     | TICSS_AGENT               | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_TIMASTE1
#### 存單檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIMST_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
| PK  | TIMST_TRANS_CNT           | VARCHAR2(3 char)   | 轉期序號                     |    |
|     | TIMST_TR_TERM_CNT         | NUMBER(3,0)        | 已轉期次數                    |    |
|     | TIMST_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
|     | TIMST_CHK_NO              | VARCHAR2(8 char)   | 交易代理人旗標                  |    |
|     | TIMST_L_TI_ID_NO          | VARCHAR2(13 char)  | 上筆存單號碼                   |    |
|     | TIMST_N_TI_ID_NO          | VARCHAR2(13 char)  | 下筆存單號碼                   |    |
|     | TIMST_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TIMST_PRD_CODE            | VARCHAR2(7 char)   | 產品別                      |    |
|     | TIMST_TERM_CODE           | NUMBER(2,0)        | 存單期數                     |    |
|     | TIMST_CHAR_CODE           | VARCHAR2(1 char)   | 性質別                      |    |
|     | TIMST_INT_RATE            | NUMBER(5,3)        | 起始利率                     |    |
|     | TIMST_NET_RATE_RANGE      | NUMBER(5,3)        | 聯往利率                     |    |
|     | TIMST_RATE_TYPE           | NUMBER(1,0)        | 利率型態                     |    |
|     | TIMST_DP_DATE             | DATE               | 存入日期(含票據存入日期)            |    |
|     | TIMST_ST_INT_DATE         | DATE               | 起息日                      |    |
|     | TIMST_DUE_DATE            | DATE               | 到期日                      |    |
|     | TIMST_MT_INT_DATE         | DATE               | 交易代理人旗標                  |    |
|     | TIMST_PAY_INT_TERM        | NUMBER(2,0)        | 付息週期                     |    |
|     | TIMST_OPEN_DATE           | DATE               | 簽發存單日期                   |    |
|     | TIMST_CLS_DATE            | DATE               | 解約日期                     |    |
|     | TIMST_PRINCIPAL_AMT       | NUMBER(15,2)       | 存單金額                     |    |
|     | TIMST_AMT_TYPE            | VARCHAR2(1 char)   | 額度別                      |    |
|     | TIMST_TI_OPEN_TYPE        | NUMBER(1,0)        | 簽發存單型態                   |    |
|     | TIMST_TI_CLS_TYPE         | NUMBER(1,0)        | 解約存單型態                   |    |
|     | TIMST_TI_STAT_CODE        | NUMBER(1,0)        | 存單狀況                     |    |
|     | TIMST_REOPEN_STAT         | VARCHAR2(1 char)   | 補發類別                     |    |
|     | TIMST_TI_T_LOST           | NUMBER(1,0)        | 定存單暫掛失-30                |    |
|     | TIMST_TI_LOST             | NUMBER(1,0)        | 定存單掛失-31                 |    |
|     | TIMST_INT_HLD             | NUMBER(1,0)        | 含利息之質權設定-32              |    |
|     | TIMST_UNINT_HLD           | NUMBER(1,0)        | 不含利息之質權設定-33             |    |
|     | TIMST_INT_COURT_HLD       | NUMBER(1,0)        | 含利息之法院扣押-34              |    |
|     | TIMST_UNINT_COURT_HLD     | NUMBER(1,0)        | 不含利息之法院扣押-35             |    |
|     | TIMST_COURT_PUBLIC        | NUMBER(1,0)        | 公示催告                     |    |
|     | TIMST_COURT_RELEAS        | NUMBER(1,0)        | 法院除權判決-37                |    |
|     | TIMST_OTHER_HOLDED        | NUMBER(1,0)        | 其他-98                    |    |
|     | TIMST_NCD_LOST_SER_NO     | VARCHAR2(2 char)   | NCD登錄序號                  |    |
|     | TIMST_INT_KEEP            | NUMBER(1,0)        | 含利息之本行圈存-38              |    |
|     | TIMST_UNINT_KEEP          | NUMBER(1,0)        | 不含利息之本行圈存-39             |    |
|     | TIMST_EVEN_FILLER         | NUMBER(7,0)        | 空白                       |    |
|     | TIMST_INT_RATE_FLAG       | VARCHAR2(1 char)   | 利率加減別                    |    |
|     | TIMST_INT_GAP             | NUMBER(5,3)        | 議價利率差幅                   |    |
|     | TIMST_NAME_CODE           | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | TIMST_TXN_ACC_SER_NO      | VARCHAR2(3 char)   | 交易記錄存提序號                 |    |
|     | TIMST_ENLIST_SS           | VARCHAR2(6 char)   | 招募行員                     |    |
|     | TIMST_SERVICE_AO          | VARCHAR2(6 char)   | 服務AO                     |    |
|     | TIMST_CENT_CODE           | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | TIMST_SET_EXTEND_DATE     | DATE               | 設定自動轉期日期                 |    |
|     | TIMST_AUTO_EXTEND_KIND    | VARCHAR2(1 char)   | 約定自動轉期別                  |    |
|     | TIMST_AUTO_EXTEND_LIMIT   | NUMBER(3,0)        | 約定自動轉期次數                 |    |
|     | TIMST_SET_AUTO_INT_DATE   | DATE               | 自動轉息設定日期（零存扣帳設定日期）       |    |
|     | TIMST_AUTO_INT_KIND       | VARCHAR2(1 char)   | 約定轉息方式                   |    |
|     | TIMST_AUTO_INT_SELF       | VARCHAR2(1 char)   | 轉息本人戶記號                  |    |
|     | TIMST_AUTO_INT_ACC_NO     | VARCHAR2(13 char)  | 約定轉息帳號(零存扣帳帳號)           |    |
|     | TIMST_PAY_INT_CNT         | NUMBER(2,0)        | 交易代理人旗標                  |    |
|     | TIMST_CS_FAIL_CNT         | NUMBER(2,0)        | 零存扣帳不成功次數                |    |
|     | TIMST_CS_TOT_BAL          | NUMBER(15,2)       | 零存到期值                    |    |
|     | TIMST_TOT_PRINCIPAL       | NUMBER(15,2)       | 零存總繳款本金(本金餘額)            |    |
|     | TIMST_CS_IMP_INT          | NUMBER(15,2)       | 零存累計應補繳息                 |    |
|     | TIMST_PER_DP_AMT          | NUMBER(15,2)       | 零存月繳額                    |    |
|     | TIMST_MVOU_BR             | VARCHAR2(4 char)   | 移出行                      |    |
|     | TIMST_BREAK_INT_PERC      | NUMBER(3,0)        | 中途解約利息折算                 |    |
|     | TIMST_NCD_CASH_ID         | VARCHAR2(11 char)  | NCD買受人統編                 |    |
|     | TIMST_LAST_TXN_DATE       | DATE               | 上次交易日期                   |    |
|     | TIMST_LAST_INT_DATE       | DATE               | 上次結息日期/或為NCD的掛失日         |    |
|     | TIMST_DEBT_SET            | NUMBER(1,0)        | 設定質借約定                   |    |
|     | TIMST_DEBT_DATE           | DATE               | 設定質借日期                   |    |
|     | TIMST_DEBT_PERC           | NUMBER(3,0)        | 設定質借成數                   |    |
|     | TIMST_RLS_DEBT_DATE       | DATE               | 解除質借日期                   |    |
|     | TIMST_GROSS_INT           | NUMBER(15,2)       | 未開扣繳憑單利息                 |    |
|     | TIMST_GROSS_TAX           | NUMBER(15,2)       | 未開扣繳憑單稅額                 |    |
|     | TIMST_AL_GROSS_INT        | NUMBER(15,2)       | 已開扣繳憑單利息                 |    |
|     | TIMST_AL_GROSS_TAX        | NUMBER(15,2)       | 已開扣繳憑單稅額                 |    |
|     | TIMST_YEAR_PAY_INT        | NUMBER(15,2)       | 今年度已付利息總額                |    |
|     | TIMST_YEAR_PAY_TAX        | NUMBER(15,2)       | 今年度代扣稅額                  |    |
|     | TIMST_PAY_INT_TTL         | NUMBER(15,2)       | 累計付息總額                   |    |
|     | TIMST_PAY_TAX_TTL         | NUMBER(15,2)       | 累計代扣稅額                   |    |
|     | TIMST_PAY_STAMP_TTL       | NUMBER(15,2)       | 累計代繳印花稅                  |    |
|     | TIMST_CURR_INT_CNT        | NUMBER(2,0)        | 存單當月付利息次數                |    |
|     | TIMST_TRANS_AMT           | NUMBER(10,0)       | 續轉存金額                    |    |
|     | TIMST_NEXT_SETTED         | NUMBER(1,0)        | 轉期後約定                    |    |
|     | TIMST_MN_INT_AMT          | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | TIMST_CURR_TAX_INT        | NUMBER(10,0)       | 當月扣稅利息                   |    |
|     | TIMST_FREE_INT_USE        | NUMBER(10,0)       | 免扣証使用利息                  |    |
|     | TIMST_RECVI_INT           | NUMBER(10,0)       | 收回利息                     |    |
|     | TIMST_FREE_INT            | NUMBER(10,0)       | 免稅利息                     |    |
|     | TIMST_NOT_PAY_INT         | NUMBER(10,0)       | 設質未領利息                   |    |
|     | TIMST_BOARD_CODE          | VARCHAR2(2 char)   | 適用牌告別                    |    |
|     | TIMST_TRAN_DATE           | DATE               | 存單轉換日                    |    |
|     | TIMST_RCLS_DATE           | DATE               | 存單實際解約日(颱風天或到期解約的第一營業日用) |    |
|     | TIMST_TI_TXN_KIND         | VARCHAR2(1 char)   | 存單帳務領息交易旗標               |    |
|     | TIMST_MERGE_DATE          | DATE               | 合併銀行日                    |    |
|     | TIMST_CURR_MN_INT         | NUMBER(10,0)       | 當月已付利息                   |    |
|     | TIMST_CURR_MN_TAX         | NUMBER(10,0)       | 當月代扣稅額                   |    |
|     | TIMST_CURR_MN_STAMP       | NUMBER(10,0)       | 當月代扣印花稅                  |    |
|     | TIMST_PAY_INT_OLD         | NUMBER(15,2)       | 交易代理人旗標                  |    |
|     | TIMST_PROJ_CODE           | VARCHAR2(3 char)   | 專案代號                     |    |
|     | TIMST_NOTE_ITEM           | VARCHAR2(16 char)  | 備註欄                      |    |
|     | TIMST_AUTO_CLS_CODE       | VARCHAR2(1 char)   | 約定解約方式                   |    |
|     | TIMST_AUTO_CLS_ACC_NO     | VARCHAR2(13 char)  | 自動解約帳號                   |    |
|     | TIMST_DISCOUNT_CODE       | VARCHAR2(2 char)   | 中途解約折扣                   |    |
|     | TIMST_NOT_PAY_DATE        | DATE               | 存單前期起息日                  |    |
|     | TIMST_NOT_TAX_COST_INT    | NUMBER(15,2)       | 未扣稅本利和                   |    |
|     | TIMST_TI_BILL_KIND        | VARCHAR2(1 char)   | 存單實體是否                   |    |
|     | TIMST_NCD_ISIN_CODE       | VARCHAR2(12 char)  | 票券批號                     |    |
|     | TIMST_BILL_BUYER          | VARCHAR2(8 char)   | 首買票券商代號                  |    |
|     | TIMST_ABNORMAL_INT        | VARCHAR2(1 char)   | 註記(是否為正常牌告利率存單)          |    |
|     | TIMST_FILLER_1            | VARCHAR2(176 char) | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_TIMASTE2
#### 存單檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIMST_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
| PK  | TIMST_TRANS_CNT           | VARCHAR2(3 char)   | 轉期序號                     |    |
|     | TIMST_TR_TERM_CNT         | NUMBER(3,0)        | 已轉期次數                    |    |
|     | TIMST_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
|     | TIMST_CHK_NO              | VARCHAR2(8 char)   | 交易代理人旗標                  |    |
|     | TIMST_L_TI_ID_NO          | VARCHAR2(13 char)  | 上筆存單號碼                   |    |
|     | TIMST_N_TI_ID_NO          | VARCHAR2(13 char)  | 下筆存單號碼                   |    |
|     | TIMST_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TIMST_PRD_CODE            | VARCHAR2(7 char)   | 產品別                      |    |
|     | TIMST_TERM_CODE           | NUMBER(2,0)        | 存單期數                     |    |
|     | TIMST_CHAR_CODE           | VARCHAR2(1 char)   | 性質別                      |    |
|     | TIMST_INT_RATE            | NUMBER(5,3)        | 起始利率                     |    |
|     | TIMST_NET_RATE_RANGE      | NUMBER(5,3)        | 聯往利率                     |    |
|     | TIMST_RATE_TYPE           | NUMBER(1,0)        | 利率型態                     |    |
|     | TIMST_DP_DATE             | DATE               | 存入日期(含票據存入日期)            |    |
|     | TIMST_ST_INT_DATE         | DATE               | 起息日                      |    |
|     | TIMST_DUE_DATE            | DATE               | 到期日                      |    |
|     | TIMST_MT_INT_DATE         | DATE               | 交易代理人旗標                  |    |
|     | TIMST_PAY_INT_TERM        | NUMBER(2,0)        | 付息週期                     |    |
|     | TIMST_OPEN_DATE           | DATE               | 簽發存單日期                   |    |
|     | TIMST_CLS_DATE            | DATE               | 解約日期                     |    |
|     | TIMST_PRINCIPAL_AMT       | NUMBER(15,2)       | 存單金額                     |    |
|     | TIMST_AMT_TYPE            | VARCHAR2(1 char)   | 額度別                      |    |
|     | TIMST_TI_OPEN_TYPE        | NUMBER(1,0)        | 簽發存單型態                   |    |
|     | TIMST_TI_CLS_TYPE         | NUMBER(1,0)        | 解約存單型態                   |    |
|     | TIMST_TI_STAT_CODE        | NUMBER(1,0)        | 存單狀況                     |    |
|     | TIMST_REOPEN_STAT         | VARCHAR2(1 char)   | 補發類別                     |    |
|     | TIMST_TI_T_LOST           | NUMBER(1,0)        | 定存單暫掛失-30                |    |
|     | TIMST_TI_LOST             | NUMBER(1,0)        | 定存單掛失-31                 |    |
|     | TIMST_INT_HLD             | NUMBER(1,0)        | 含利息之質權設定-32              |    |
|     | TIMST_UNINT_HLD           | NUMBER(1,0)        | 不含利息之質權設定-33             |    |
|     | TIMST_INT_COURT_HLD       | NUMBER(1,0)        | 含利息之法院扣押-34              |    |
|     | TIMST_UNINT_COURT_HLD     | NUMBER(1,0)        | 不含利息之法院扣押-35             |    |
|     | TIMST_COURT_PUBLIC        | NUMBER(1,0)        | 公示催告                     |    |
|     | TIMST_COURT_RELEAS        | NUMBER(1,0)        | 法院除權判決-37                |    |
|     | TIMST_OTHER_HOLDED        | NUMBER(1,0)        | 其他-98                    |    |
|     | TIMST_NCD_LOST_SER_NO     | VARCHAR2(2 char)   | NCD登錄序號                  |    |
|     | TIMST_INT_KEEP            | NUMBER(1,0)        | 含利息之本行圈存-38              |    |
|     | TIMST_UNINT_KEEP          | NUMBER(1,0)        | 不含利息之本行圈存-39             |    |
|     | TIMST_EVEN_FILLER         | NUMBER(7,0)        | 空白                       |    |
|     | TIMST_INT_RATE_FLAG       | VARCHAR2(1 char)   | 利率加減別                    |    |
|     | TIMST_INT_GAP             | NUMBER(5,3)        | 議價利率差幅                   |    |
|     | TIMST_NAME_CODE           | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | TIMST_TXN_ACC_SER_NO      | VARCHAR2(3 char)   | 交易記錄存提序號                 |    |
|     | TIMST_ENLIST_SS           | VARCHAR2(6 char)   | 招募行員                     |    |
|     | TIMST_SERVICE_AO          | VARCHAR2(6 char)   | 服務AO                     |    |
|     | TIMST_CENT_CODE           | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | TIMST_SET_EXTEND_DATE     | DATE               | 設定自動轉期日期                 |    |
|     | TIMST_AUTO_EXTEND_KIND    | VARCHAR2(1 char)   | 約定自動轉期別                  |    |
|     | TIMST_AUTO_EXTEND_LIMIT   | NUMBER(3,0)        | 約定自動轉期次數                 |    |
|     | TIMST_SET_AUTO_INT_DATE   | DATE               | 自動轉息設定日期（零存扣帳設定日期）       |    |
|     | TIMST_AUTO_INT_KIND       | VARCHAR2(1 char)   | 約定轉息方式                   |    |
|     | TIMST_AUTO_INT_SELF       | VARCHAR2(1 char)   | 轉息本人戶記號                  |    |
|     | TIMST_AUTO_INT_ACC_NO     | VARCHAR2(13 char)  | 約定轉息帳號(零存扣帳帳號)           |    |
|     | TIMST_PAY_INT_CNT         | NUMBER(2,0)        | 交易代理人旗標                  |    |
|     | TIMST_CS_FAIL_CNT         | NUMBER(2,0)        | 零存扣帳不成功次數                |    |
|     | TIMST_CS_TOT_BAL          | NUMBER(15,2)       | 零存到期值                    |    |
|     | TIMST_TOT_PRINCIPAL       | NUMBER(15,2)       | 零存總繳款本金(本金餘額)            |    |
|     | TIMST_CS_IMP_INT          | NUMBER(15,2)       | 零存累計應補繳息                 |    |
|     | TIMST_PER_DP_AMT          | NUMBER(15,2)       | 零存月繳額                    |    |
|     | TIMST_MVOU_BR             | VARCHAR2(4 char)   | 移出行                      |    |
|     | TIMST_BREAK_INT_PERC      | NUMBER(3,0)        | 中途解約利息折算                 |    |
|     | TIMST_NCD_CASH_ID         | VARCHAR2(11 char)  | NCD買受人統編                 |    |
|     | TIMST_LAST_TXN_DATE       | DATE               | 上次交易日期                   |    |
|     | TIMST_LAST_INT_DATE       | DATE               | 上次結息日期/或為NCD的掛失日         |    |
|     | TIMST_DEBT_SET            | NUMBER(1,0)        | 設定質借約定                   |    |
|     | TIMST_DEBT_DATE           | DATE               | 設定質借日期                   |    |
|     | TIMST_DEBT_PERC           | NUMBER(3,0)        | 設定質借成數                   |    |
|     | TIMST_RLS_DEBT_DATE       | DATE               | 解除質借日期                   |    |
|     | TIMST_GROSS_INT           | NUMBER(15,2)       | 未開扣繳憑單利息                 |    |
|     | TIMST_GROSS_TAX           | NUMBER(15,2)       | 未開扣繳憑單稅額                 |    |
|     | TIMST_AL_GROSS_INT        | NUMBER(15,2)       | 已開扣繳憑單利息                 |    |
|     | TIMST_AL_GROSS_TAX        | NUMBER(15,2)       | 已開扣繳憑單稅額                 |    |
|     | TIMST_YEAR_PAY_INT        | NUMBER(15,2)       | 今年度已付利息總額                |    |
|     | TIMST_YEAR_PAY_TAX        | NUMBER(15,2)       | 今年度代扣稅額                  |    |
|     | TIMST_PAY_INT_TTL         | NUMBER(15,2)       | 累計付息總額                   |    |
|     | TIMST_PAY_TAX_TTL         | NUMBER(15,2)       | 累計代扣稅額                   |    |
|     | TIMST_PAY_STAMP_TTL       | NUMBER(15,2)       | 累計代繳印花稅                  |    |
|     | TIMST_CURR_INT_CNT        | NUMBER(2,0)        | 存單當月付利息次數                |    |
|     | TIMST_TRANS_AMT           | NUMBER(10,0)       | 續轉存金額                    |    |
|     | TIMST_NEXT_SETTED         | NUMBER(1,0)        | 轉期後約定                    |    |
|     | TIMST_MN_INT_AMT          | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | TIMST_CURR_TAX_INT        | NUMBER(10,0)       | 當月扣稅利息                   |    |
|     | TIMST_FREE_INT_USE        | NUMBER(10,0)       | 免扣証使用利息                  |    |
|     | TIMST_RECVI_INT           | NUMBER(10,0)       | 收回利息                     |    |
|     | TIMST_FREE_INT            | NUMBER(10,0)       | 免稅利息                     |    |
|     | TIMST_NOT_PAY_INT         | NUMBER(10,0)       | 設質未領利息                   |    |
|     | TIMST_BOARD_CODE          | VARCHAR2(2 char)   | 適用牌告別                    |    |
|     | TIMST_TRAN_DATE           | DATE               | 存單轉換日                    |    |
|     | TIMST_RCLS_DATE           | DATE               | 存單實際解約日(颱風天或到期解約的第一營業日用) |    |
|     | TIMST_TI_TXN_KIND         | VARCHAR2(1 char)   | 存單帳務領息交易旗標               |    |
|     | TIMST_MERGE_DATE          | DATE               | 合併銀行日                    |    |
|     | TIMST_CURR_MN_INT         | NUMBER(10,0)       | 當月已付利息                   |    |
|     | TIMST_CURR_MN_TAX         | NUMBER(10,0)       | 當月代扣稅額                   |    |
|     | TIMST_CURR_MN_STAMP       | NUMBER(10,0)       | 當月代扣印花稅                  |    |
|     | TIMST_PAY_INT_OLD         | NUMBER(15,2)       | 交易代理人旗標                  |    |
|     | TIMST_PROJ_CODE           | VARCHAR2(3 char)   | 專案代號                     |    |
|     | TIMST_NOTE_ITEM           | VARCHAR2(16 char)  | 備註欄                      |    |
|     | TIMST_AUTO_CLS_CODE       | VARCHAR2(1 char)   | 約定解約方式                   |    |
|     | TIMST_AUTO_CLS_ACC_NO     | VARCHAR2(13 char)  | 自動解約帳號                   |    |
|     | TIMST_DISCOUNT_CODE       | VARCHAR2(2 char)   | 中途解約折扣                   |    |
|     | TIMST_NOT_PAY_DATE        | DATE               | 存單前期起息日                  |    |
|     | TIMST_NOT_TAX_COST_INT    | NUMBER(15,2)       | 未扣稅本利和                   |    |
|     | TIMST_TI_BILL_KIND        | VARCHAR2(1 char)   | 存單實體是否                   |    |
|     | TIMST_NCD_ISIN_CODE       | VARCHAR2(12 char)  | 票券批號                     |    |
|     | TIMST_BILL_BUYER          | VARCHAR2(8 char)   | 首買票券商代號                  |    |
|     | TIMST_ABNORMAL_INT        | VARCHAR2(1 char)   | 註記(是否為正常牌告利率存單)          |    |
|     | TIMST_FILLER_1            | VARCHAR2(176 char) | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |
### VW_ODS_D_TIMASTE3
#### 存單檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIMST_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
| PK  | TIMST_TRANS_CNT           | VARCHAR2(3 char)   | 轉期序號                     |    |
|     | TIMST_TR_TERM_CNT         | NUMBER(3,0)        | 已轉期次數                    |    |
|     | TIMST_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
|     | TIMST_CHK_NO              | VARCHAR2(8 char)   | 交易代理人旗標                  |    |
|     | TIMST_L_TI_ID_NO          | VARCHAR2(13 char)  | 上筆存單號碼                   |    |
|     | TIMST_N_TI_ID_NO          | VARCHAR2(13 char)  | 下筆存單號碼                   |    |
|     | TIMST_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TIMST_PRD_CODE            | VARCHAR2(7 char)   | 產品別                      |    |
|     | TIMST_TERM_CODE           | NUMBER(2,0)        | 存單期數                     |    |
|     | TIMST_CHAR_CODE           | VARCHAR2(1 char)   | 性質別                      |    |
|     | TIMST_INT_RATE            | NUMBER(5,3)        | 起始利率                     |    |
|     | TIMST_NET_RATE_RANGE      | NUMBER(5,3)        | 聯往利率                     |    |
|     | TIMST_RATE_TYPE           | NUMBER(1,0)        | 利率型態                     |    |
|     | TIMST_DP_DATE             | DATE               | 存入日期(含票據存入日期)            |    |
|     | TIMST_ST_INT_DATE         | DATE               | 起息日                      |    |
|     | TIMST_DUE_DATE            | DATE               | 到期日                      |    |
|     | TIMST_MT_INT_DATE         | DATE               | 交易代理人旗標                  |    |
|     | TIMST_PAY_INT_TERM        | NUMBER(2,0)        | 付息週期                     |    |
|     | TIMST_OPEN_DATE           | DATE               | 簽發存單日期                   |    |
|     | TIMST_CLS_DATE            | DATE               | 解約日期                     |    |
|     | TIMST_PRINCIPAL_AMT       | NUMBER(15,2)       | 存單金額                     |    |
|     | TIMST_AMT_TYPE            | VARCHAR2(1 char)   | 額度別                      |    |
|     | TIMST_TI_OPEN_TYPE        | NUMBER(1,0)        | 簽發存單型態                   |    |
|     | TIMST_TI_CLS_TYPE         | NUMBER(1,0)        | 解約存單型態                   |    |
|     | TIMST_TI_STAT_CODE        | NUMBER(1,0)        | 存單狀況                     |    |
|     | TIMST_REOPEN_STAT         | VARCHAR2(1 char)   | 補發類別                     |    |
|     | TIMST_TI_T_LOST           | NUMBER(1,0)        | 定存單暫掛失-30                |    |
|     | TIMST_TI_LOST             | NUMBER(1,0)        | 定存單掛失-31                 |    |
|     | TIMST_INT_HLD             | NUMBER(1,0)        | 含利息之質權設定-32              |    |
|     | TIMST_UNINT_HLD           | NUMBER(1,0)        | 不含利息之質權設定-33             |    |
|     | TIMST_INT_COURT_HLD       | NUMBER(1,0)        | 含利息之法院扣押-34              |    |
|     | TIMST_UNINT_COURT_HLD     | NUMBER(1,0)        | 不含利息之法院扣押-35             |    |
|     | TIMST_COURT_PUBLIC        | NUMBER(1,0)        | 公示催告                     |    |
|     | TIMST_COURT_RELEAS        | NUMBER(1,0)        | 法院除權判決-37                |    |
|     | TIMST_OTHER_HOLDED        | NUMBER(1,0)        | 其他-98                    |    |
|     | TIMST_NCD_LOST_SER_NO     | VARCHAR2(2 char)   | NCD登錄序號                  |    |
|     | TIMST_INT_KEEP            | NUMBER(1,0)        | 含利息之本行圈存-38              |    |
|     | TIMST_UNINT_KEEP          | NUMBER(1,0)        | 不含利息之本行圈存-39             |    |
|     | TIMST_EVEN_FILLER         | NUMBER(7,0)        | 空白                       |    |
|     | TIMST_INT_RATE_FLAG       | VARCHAR2(1 char)   | 利率加減別                    |    |
|     | TIMST_INT_GAP             | NUMBER(5,3)        | 議價利率差幅                   |    |
|     | TIMST_NAME_CODE           | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | TIMST_TXN_ACC_SER_NO      | VARCHAR2(3 char)   | 交易記錄存提序號                 |    |
|     | TIMST_ENLIST_SS           | VARCHAR2(6 char)   | 招募行員                     |    |
|     | TIMST_SERVICE_AO          | VARCHAR2(6 char)   | 服務AO                     |    |
|     | TIMST_CENT_CODE           | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | TIMST_SET_EXTEND_DATE     | DATE               | 設定自動轉期日期                 |    |
|     | TIMST_AUTO_EXTEND_KIND    | VARCHAR2(1 char)   | 約定自動轉期別                  |    |
|     | TIMST_AUTO_EXTEND_LIMIT   | NUMBER(3,0)        | 約定自動轉期次數                 |    |
|     | TIMST_SET_AUTO_INT_DATE   | DATE               | 自動轉息設定日期（零存扣帳設定日期）       |    |
|     | TIMST_AUTO_INT_KIND       | VARCHAR2(1 char)   | 約定轉息方式                   |    |
|     | TIMST_AUTO_INT_SELF       | VARCHAR2(1 char)   | 轉息本人戶記號                  |    |
|     | TIMST_AUTO_INT_ACC_NO     | VARCHAR2(13 char)  | 約定轉息帳號(零存扣帳帳號)           |    |
|     | TIMST_PAY_INT_CNT         | NUMBER(2,0)        | 交易代理人旗標                  |    |
|     | TIMST_CS_FAIL_CNT         | NUMBER(2,0)        | 零存扣帳不成功次數                |    |
|     | TIMST_CS_TOT_BAL          | NUMBER(15,2)       | 零存到期值                    |    |
|     | TIMST_TOT_PRINCIPAL       | NUMBER(15,2)       | 零存總繳款本金(本金餘額)            |    |
|     | TIMST_CS_IMP_INT          | NUMBER(15,2)       | 零存累計應補繳息                 |    |
|     | TIMST_PER_DP_AMT          | NUMBER(15,2)       | 零存月繳額                    |    |
|     | TIMST_MVOU_BR             | VARCHAR2(4 char)   | 移出行                      |    |
|     | TIMST_BREAK_INT_PERC      | NUMBER(3,0)        | 中途解約利息折算                 |    |
|     | TIMST_NCD_CASH_ID         | VARCHAR2(11 char)  | NCD買受人統編                 |    |
|     | TIMST_LAST_TXN_DATE       | DATE               | 上次交易日期                   |    |
|     | TIMST_LAST_INT_DATE       | DATE               | 上次結息日期/或為NCD的掛失日         |    |
|     | TIMST_DEBT_SET            | NUMBER(1,0)        | 設定質借約定                   |    |
|     | TIMST_DEBT_DATE           | DATE               | 設定質借日期                   |    |
|     | TIMST_DEBT_PERC           | NUMBER(3,0)        | 設定質借成數                   |    |
|     | TIMST_RLS_DEBT_DATE       | DATE               | 解除質借日期                   |    |
|     | TIMST_GROSS_INT           | NUMBER(15,2)       | 未開扣繳憑單利息                 |    |
|     | TIMST_GROSS_TAX           | NUMBER(15,2)       | 未開扣繳憑單稅額                 |    |
|     | TIMST_AL_GROSS_INT        | NUMBER(15,2)       | 已開扣繳憑單利息                 |    |
|     | TIMST_AL_GROSS_TAX        | NUMBER(15,2)       | 已開扣繳憑單稅額                 |    |
|     | TIMST_YEAR_PAY_INT        | NUMBER(15,2)       | 今年度已付利息總額                |    |
|     | TIMST_YEAR_PAY_TAX        | NUMBER(15,2)       | 今年度代扣稅額                  |    |
|     | TIMST_PAY_INT_TTL         | NUMBER(15,2)       | 累計付息總額                   |    |
|     | TIMST_PAY_TAX_TTL         | NUMBER(15,2)       | 累計代扣稅額                   |    |
|     | TIMST_PAY_STAMP_TTL       | NUMBER(15,2)       | 累計代繳印花稅                  |    |
|     | TIMST_CURR_INT_CNT        | NUMBER(2,0)        | 存單當月付利息次數                |    |
|     | TIMST_TRANS_AMT           | NUMBER(10,0)       | 續轉存金額                    |    |
|     | TIMST_NEXT_SETTED         | NUMBER(1,0)        | 轉期後約定                    |    |
|     | TIMST_MN_INT_AMT          | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | TIMST_CURR_TAX_INT        | NUMBER(10,0)       | 當月扣稅利息                   |    |
|     | TIMST_FREE_INT_USE        | NUMBER(10,0)       | 免扣証使用利息                  |    |
|     | TIMST_RECVI_INT           | NUMBER(10,0)       | 收回利息                     |    |
|     | TIMST_FREE_INT            | NUMBER(10,0)       | 免稅利息                     |    |
|     | TIMST_NOT_PAY_INT         | NUMBER(10,0)       | 設質未領利息                   |    |
|     | TIMST_BOARD_CODE          | VARCHAR2(2 char)   | 適用牌告別                    |    |
|     | TIMST_TRAN_DATE           | DATE               | 存單轉換日                    |    |
|     | TIMST_RCLS_DATE           | DATE               | 存單實際解約日(颱風天或到期解約的第一營業日用) |    |
|     | TIMST_TI_TXN_KIND         | VARCHAR2(1 char)   | 存單帳務領息交易旗標               |    |
|     | TIMST_MERGE_DATE          | DATE               | 合併銀行日                    |    |
|     | TIMST_CURR_MN_INT         | NUMBER(10,0)       | 當月已付利息                   |    |
|     | TIMST_CURR_MN_TAX         | NUMBER(10,0)       | 當月代扣稅額                   |    |
|     | TIMST_CURR_MN_STAMP       | NUMBER(10,0)       | 當月代扣印花稅                  |    |
|     | TIMST_PAY_INT_OLD         | NUMBER(15,2)       | 交易代理人旗標                  |    |
|     | TIMST_PROJ_CODE           | VARCHAR2(3 char)   | 專案代號                     |    |
|     | TIMST_NOTE_ITEM           | VARCHAR2(16 char)  | 備註欄                      |    |
|     | TIMST_AUTO_CLS_CODE       | VARCHAR2(1 char)   | 約定解約方式                   |    |
|     | TIMST_AUTO_CLS_ACC_NO     | VARCHAR2(13 char)  | 自動解約帳號                   |    |
|     | TIMST_DISCOUNT_CODE       | VARCHAR2(2 char)   | 中途解約折扣                   |    |
|     | TIMST_NOT_PAY_DATE        | DATE               | 存單前期起息日                  |    |
|     | TIMST_NOT_TAX_COST_INT    | NUMBER(15,2)       | 未扣稅本利和                   |    |
|     | TIMST_TI_BILL_KIND        | VARCHAR2(1 char)   | 存單實體是否                   |    |
|     | TIMST_NCD_ISIN_CODE       | VARCHAR2(12 char)  | 票券批號                     |    |
|     | TIMST_BILL_BUYER          | VARCHAR2(8 char)   | 首買票券商代號                  |    |
|     | TIMST_ABNORMAL_INT        | VARCHAR2(1 char)   | 註記(是否為正常牌告利率存單)          |    |
|     | TIMST_FILLER_1            | VARCHAR2(176 char) | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_TIMASTE4
#### 存單檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIMST_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
| PK  | TIMST_TRANS_CNT           | VARCHAR2(3 char)   | 轉期序號                     |    |
|     | TIMST_TR_TERM_CNT         | NUMBER(3,0)        | 已轉期次數                    |    |
|     | TIMST_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
|     | TIMST_CHK_NO              | VARCHAR2(8 char)   | 交易代理人旗標                  |    |
|     | TIMST_L_TI_ID_NO          | VARCHAR2(13 char)  | 上筆存單號碼                   |    |
|     | TIMST_N_TI_ID_NO          | VARCHAR2(13 char)  | 下筆存單號碼                   |    |
|     | TIMST_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TIMST_PRD_CODE            | VARCHAR2(7 char)   | 產品別                      |    |
|     | TIMST_TERM_CODE           | NUMBER(2,0)        | 存單期數                     |    |
|     | TIMST_CHAR_CODE           | VARCHAR2(1 char)   | 性質別                      |    |
|     | TIMST_INT_RATE            | NUMBER(5,3)        | 起始利率                     |    |
|     | TIMST_NET_RATE_RANGE      | NUMBER(5,3)        | 聯往利率                     |    |
|     | TIMST_RATE_TYPE           | NUMBER(1,0)        | 利率型態                     |    |
|     | TIMST_DP_DATE             | DATE               | 存入日期(含票據存入日期)            |    |
|     | TIMST_ST_INT_DATE         | DATE               | 起息日                      |    |
|     | TIMST_DUE_DATE            | DATE               | 到期日                      |    |
|     | TIMST_MT_INT_DATE         | DATE               | 交易代理人旗標                  |    |
|     | TIMST_PAY_INT_TERM        | NUMBER(2,0)        | 付息週期                     |    |
|     | TIMST_OPEN_DATE           | DATE               | 簽發存單日期                   |    |
|     | TIMST_CLS_DATE            | DATE               | 解約日期                     |    |
|     | TIMST_PRINCIPAL_AMT       | NUMBER(15,2)       | 存單金額                     |    |
|     | TIMST_AMT_TYPE            | VARCHAR2(1 char)   | 額度別                      |    |
|     | TIMST_TI_OPEN_TYPE        | NUMBER(1,0)        | 簽發存單型態                   |    |
|     | TIMST_TI_CLS_TYPE         | NUMBER(1,0)        | 解約存單型態                   |    |
|     | TIMST_TI_STAT_CODE        | NUMBER(1,0)        | 存單狀況                     |    |
|     | TIMST_REOPEN_STAT         | VARCHAR2(1 char)   | 補發類別                     |    |
|     | TIMST_TI_T_LOST           | NUMBER(1,0)        | 定存單暫掛失-30                |    |
|     | TIMST_TI_LOST             | NUMBER(1,0)        | 定存單掛失-31                 |    |
|     | TIMST_INT_HLD             | NUMBER(1,0)        | 含利息之質權設定-32              |    |
|     | TIMST_UNINT_HLD           | NUMBER(1,0)        | 不含利息之質權設定-33             |    |
|     | TIMST_INT_COURT_HLD       | NUMBER(1,0)        | 含利息之法院扣押-34              |    |
|     | TIMST_UNINT_COURT_HLD     | NUMBER(1,0)        | 不含利息之法院扣押-35             |    |
|     | TIMST_COURT_PUBLIC        | NUMBER(1,0)        | 公示催告                     |    |
|     | TIMST_COURT_RELEAS        | NUMBER(1,0)        | 法院除權判決-37                |    |
|     | TIMST_OTHER_HOLDED        | NUMBER(1,0)        | 其他-98                    |    |
|     | TIMST_NCD_LOST_SER_NO     | VARCHAR2(2 char)   | NCD登錄序號                  |    |
|     | TIMST_INT_KEEP            | NUMBER(1,0)        | 含利息之本行圈存-38              |    |
|     | TIMST_UNINT_KEEP          | NUMBER(1,0)        | 不含利息之本行圈存-39             |    |
|     | TIMST_EVEN_FILLER         | NUMBER(7,0)        | 空白                       |    |
|     | TIMST_INT_RATE_FLAG       | VARCHAR2(1 char)   | 利率加減別                    |    |
|     | TIMST_INT_GAP             | NUMBER(5,3)        | 議價利率差幅                   |    |
|     | TIMST_NAME_CODE           | VARCHAR2(1 char)   | 交易代理人旗標                  |    |
|     | TIMST_TXN_ACC_SER_NO      | VARCHAR2(3 char)   | 交易記錄存提序號                 |    |
|     | TIMST_ENLIST_SS           | VARCHAR2(6 char)   | 招募行員                     |    |
|     | TIMST_SERVICE_AO          | VARCHAR2(6 char)   | 服務AO                     |    |
|     | TIMST_CENT_CODE           | VARCHAR2(4 char)   | 利潤中心                     |    |
|     | TIMST_SET_EXTEND_DATE     | DATE               | 設定自動轉期日期                 |    |
|     | TIMST_AUTO_EXTEND_KIND    | VARCHAR2(1 char)   | 約定自動轉期別                  |    |
|     | TIMST_AUTO_EXTEND_LIMIT   | NUMBER(3,0)        | 約定自動轉期次數                 |    |
|     | TIMST_SET_AUTO_INT_DATE   | DATE               | 自動轉息設定日期（零存扣帳設定日期）       |    |
|     | TIMST_AUTO_INT_KIND       | VARCHAR2(1 char)   | 約定轉息方式                   |    |
|     | TIMST_AUTO_INT_SELF       | VARCHAR2(1 char)   | 轉息本人戶記號                  |    |
|     | TIMST_AUTO_INT_ACC_NO     | VARCHAR2(13 char)  | 約定轉息帳號(零存扣帳帳號)           |    |
|     | TIMST_PAY_INT_CNT         | NUMBER(2,0)        | 交易代理人旗標                  |    |
|     | TIMST_CS_FAIL_CNT         | NUMBER(2,0)        | 零存扣帳不成功次數                |    |
|     | TIMST_CS_TOT_BAL          | NUMBER(15,2)       | 零存到期值                    |    |
|     | TIMST_TOT_PRINCIPAL       | NUMBER(15,2)       | 零存總繳款本金(本金餘額)            |    |
|     | TIMST_CS_IMP_INT          | NUMBER(15,2)       | 零存累計應補繳息                 |    |
|     | TIMST_PER_DP_AMT          | NUMBER(15,2)       | 零存月繳額                    |    |
|     | TIMST_MVOU_BR             | VARCHAR2(4 char)   | 移出行                      |    |
|     | TIMST_BREAK_INT_PERC      | NUMBER(3,0)        | 中途解約利息折算                 |    |
|     | TIMST_NCD_CASH_ID         | VARCHAR2(11 char)  | NCD買受人統編                 |    |
|     | TIMST_LAST_TXN_DATE       | DATE               | 上次交易日期                   |    |
|     | TIMST_LAST_INT_DATE       | DATE               | 上次結息日期/或為NCD的掛失日         |    |
|     | TIMST_DEBT_SET            | NUMBER(1,0)        | 設定質借約定                   |    |
|     | TIMST_DEBT_DATE           | DATE               | 設定質借日期                   |    |
|     | TIMST_DEBT_PERC           | NUMBER(3,0)        | 設定質借成數                   |    |
|     | TIMST_RLS_DEBT_DATE       | DATE               | 解除質借日期                   |    |
|     | TIMST_GROSS_INT           | NUMBER(15,2)       | 未開扣繳憑單利息                 |    |
|     | TIMST_GROSS_TAX           | NUMBER(15,2)       | 未開扣繳憑單稅額                 |    |
|     | TIMST_AL_GROSS_INT        | NUMBER(15,2)       | 已開扣繳憑單利息                 |    |
|     | TIMST_AL_GROSS_TAX        | NUMBER(15,2)       | 已開扣繳憑單稅額                 |    |
|     | TIMST_YEAR_PAY_INT        | NUMBER(15,2)       | 今年度已付利息總額                |    |
|     | TIMST_YEAR_PAY_TAX        | NUMBER(15,2)       | 今年度代扣稅額                  |    |
|     | TIMST_PAY_INT_TTL         | NUMBER(15,2)       | 累計付息總額                   |    |
|     | TIMST_PAY_TAX_TTL         | NUMBER(15,2)       | 累計代扣稅額                   |    |
|     | TIMST_PAY_STAMP_TTL       | NUMBER(15,2)       | 累計代繳印花稅                  |    |
|     | TIMST_CURR_INT_CNT        | NUMBER(2,0)        | 存單當月付利息次數                |    |
|     | TIMST_TRANS_AMT           | NUMBER(10,0)       | 續轉存金額                    |    |
|     | TIMST_NEXT_SETTED         | NUMBER(1,0)        | 轉期後約定                    |    |
|     | TIMST_MN_INT_AMT          | NUMBER(10,0)       | 本月底應付利息                  |    |
|     | TIMST_CURR_TAX_INT        | NUMBER(10,0)       | 當月扣稅利息                   |    |
|     | TIMST_FREE_INT_USE        | NUMBER(10,0)       | 免扣証使用利息                  |    |
|     | TIMST_RECVI_INT           | NUMBER(10,0)       | 收回利息                     |    |
|     | TIMST_FREE_INT            | NUMBER(10,0)       | 免稅利息                     |    |
|     | TIMST_NOT_PAY_INT         | NUMBER(10,0)       | 設質未領利息                   |    |
|     | TIMST_BOARD_CODE          | VARCHAR2(2 char)   | 適用牌告別                    |    |
|     | TIMST_TRAN_DATE           | DATE               | 存單轉換日                    |    |
|     | TIMST_RCLS_DATE           | DATE               | 存單實際解約日(颱風天或到期解約的第一營業日用) |    |
|     | TIMST_TI_TXN_KIND         | VARCHAR2(1 char)   | 存單帳務領息交易旗標               |    |
|     | TIMST_MERGE_DATE          | DATE               | 合併銀行日                    |    |
|     | TIMST_CURR_MN_INT         | NUMBER(10,0)       | 當月已付利息                   |    |
|     | TIMST_CURR_MN_TAX         | NUMBER(10,0)       | 當月代扣稅額                   |    |
|     | TIMST_CURR_MN_STAMP       | NUMBER(10,0)       | 當月代扣印花稅                  |    |
|     | TIMST_PAY_INT_OLD         | NUMBER(15,2)       | 交易代理人旗標                  |    |
|     | TIMST_PROJ_CODE           | VARCHAR2(3 char)   | 專案代號                     |    |
|     | TIMST_NOTE_ITEM           | VARCHAR2(16 char)  | 備註欄                      |    |
|     | TIMST_AUTO_CLS_CODE       | VARCHAR2(1 char)   | 約定解約方式                   |    |
|     | TIMST_AUTO_CLS_ACC_NO     | VARCHAR2(13 char)  | 自動解約帳號                   |    |
|     | TIMST_DISCOUNT_CODE       | VARCHAR2(2 char)   | 中途解約折扣                   |    |
|     | TIMST_NOT_PAY_DATE        | DATE               | 存單前期起息日                  |    |
|     | TIMST_NOT_TAX_COST_INT    | NUMBER(15,2)       | 未扣稅本利和                   |    |
|     | TIMST_TI_BILL_KIND        | VARCHAR2(1 char)   | 存單實體是否                   |    |
|     | TIMST_NCD_ISIN_CODE       | VARCHAR2(12 char)  | 票券批號                     |    |
|     | TIMST_BILL_BUYER          | VARCHAR2(8 char)   | 首買票券商代號                  |    |
|     | TIMST_ABNORMAL_INT        | VARCHAR2(1 char)   | 註記(是否為正常牌告利率存單)          |    |
|     | TIMST_FILLER_1            | VARCHAR2(176 char) | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_D_TITXNREC
#### 定期交易記錄檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TITXR_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
| PK  | TITXR_TI_ACC_ID_NO        | VARCHAR2(13 char)  | 存單號碼                     |    |
| PK  | TITXR_TRANS_CNT           | VARCHAR2(3 char)   | 轉期序號                     |    |
| PK  | TITXR_SER_NO              | VARCHAR2(3 char)   | 存提序號                     |    |
| PK  | TITXR_SER_NO_CHK          | VARCHAR2(3 char)   | 存提分號                     |    |
| PK  | TITXR_TXN_DATE            | DATE               | 交易日期                     |    |
|     | TITXR_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TITXR_TXN_ID_CODE         | VARCHAR2(5 char)   | 交易代號                     |    |
|     | TITXR_TXN_BR_CODE         | VARCHAR2(4 char)   | 交易執行分行                   |    |
|     | TITXR_TXN_SER_NO          | VARCHAR2(13 char)  | 交易序號                     |    |
|     | TITXR_AUTH_CODE           | VARCHAR2(6 char)   | 主管代號                     |    |
|     | TITXR_TXN_TIME            | VARCHAR2(6 char)   | 交易時間                     |    |
|     | TITXR_TXN_STATUS          | VARCHAR2(1 char)   | 交易狀態                     |    |
|     | TITXR_INT_RATE            | NUMBER(5,3)        | 利率                       |    |
|     | TITXR_INT_S_DATE          | DATE               | 付息起日                     |    |
|     | TITXR_INT_E_DATE          | DATE               | 付息迄日                     |    |
|     | TITXR_PAY_INT_CNT         | NUMBER(2,0)        | 付息次數                     |    |
|     | TITXR_TXN_AMT             | NUMBER(15,2)       | 交易金額(存單金額)               |    |
|     | TITXR_TXN_INT             | NUMBER(15,2)       | 應付利息                     |    |
|     | TITXR_TAX_BAL             | NUMBER(15,2)       | 代扣稅款                     |    |
|     | TITXR_TAX_STAMP           | NUMBER(15,2)       | 代扣印花稅                    |    |
|     | TITXR_BILL_NO             | VARCHAR2(8 char)   | 票據號碼                     |    |
|     | TITXR_TRAN_ACC            | VARCHAR2(13 char)  | 轉帳帳號                     |    |
|     | TITXR_FREE_BAL            | NUMBER(10,0)       | 累計免扣證金額                  |    |
|     | TITXR_CLS_RATE            | NUMBER(5,3)        | 解約利率                     |    |
|     | TITXR_IF_RECVI_INT        | VARCHAR2(1 char)   | 超前取息收回利息旗標               |    |
|     | TITXR_MEMO                | VARCHAR2(6 char)   | 摘要                       |    |
|     | TITXR_RATE_TYPE           | VARCHAR2(1 char)   | 利率型態                     |    |
|     | TITXR_INT_RATE_FLAG       | VARCHAR2(1 char)   | 利率加減別                    |    |
|     | TITXR_INT_GAP             | NUMBER(5,3)        | 利率差幅                     |    |
|     | TITXR_NOT_PAY_INT_FLG     | VARCHAR2(1 char)   | 設質未領息旗標                  |    |
|     | TITXR_FILLER              | VARCHAR2(40 char)  | 保留位                      |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_M_TIAVGAUM
#### 定期累計積數檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TIAVG_ACC_ID_NO           | VARCHAR2(13 char)  | 定期帳號                     |    |
| PK  | TIAVG_DATA_YEAR           | VARCHAR2(4 char)   | 年度                       |    |
|     | TIAVG_ID_CODE             | VARCHAR2(11 char)  | 統一編號                     |    |
|     | TIAVG_BR_CODE             | VARCHAR2(4 char)   | 客戶所屬分行                   |    |
|     | TIAVG_INT_AMT1            | NUMBER(15,0)       | 1月份利息                    |    |
|     | TIAVG_AUM_AMT1            | NUMBER(15,0)       | 1月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT2            | NUMBER(15,0)       | 2月份利息                    |    |
|     | TIAVG_AUM_AMT2            | NUMBER(15,0)       | 2月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT3            | NUMBER(15,0)       | 3月份利息                    |    |
|     | TIAVG_AUM_AMT3            | NUMBER(15,0)       | 3月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT4            | NUMBER(15,0)       | 4月份利息                    |    |
|     | TIAVG_AUM_AMT4            | NUMBER(15,0)       | 4月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT5            | NUMBER(15,0)       | 5月份利息                    |    |
|     | TIAVG_AUM_AMT5            | NUMBER(15,0)       | 5月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT6            | NUMBER(15,0)       | 6月份利息                    |    |
|     | TIAVG_AUM_AMT6            | NUMBER(15,0)       | 6月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT7            | NUMBER(15,0)       | 7月份利息                    |    |
|     | TIAVG_AUM_AMT7            | NUMBER(15,0)       | 7月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT8            | NUMBER(15,0)       | 8月份利息                    |    |
|     | TIAVG_AUM_AMT8            | NUMBER(15,0)       | 8月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT9            | NUMBER(15,0)       | 9月份利息                    |    |
|     | TIAVG_AUM_AMT9            | NUMBER(15,0)       | 9月份積數(單位:佰元)             |    |
|     | TIAVG_INT_AMT10           | NUMBER(15,0)       | 10月份利息                   |    |
|     | TIAVG_AUM_AMT10           | NUMBER(15,0)       | 10月份積數(單位:佰元)            |    |
|     | TIAVG_INT_AMT11           | NUMBER(15,0)       | 11月份利息                   |    |
|     | TIAVG_AUM_AMT11           | NUMBER(15,0)       | 11月份積數(單位:佰元)            |    |
|     | TIAVG_INT_AMT12           | NUMBER(15,0)       | 12月份利息                   |    |
|     | TIAVG_AUM_AMT12           | NUMBER(15,0)       | 12月份積數(單位:佰元)            |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |    |

### VW_ODS_M_TIBAI240
#### 定存息檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TI240_YYMM                | VARCHAR2(6 char)   | 資料年月                     |    |
| PK  | TI240_ITEM                | VARCHAR2(6 char)   | 存款類別                     |    |
|     | TI240_IIEM_NM             | VARCHAR2(18 char)  | 類別說明                     |    |
|     | TI240_BAL10               | NUMBER(18,0)       | 1~10天                    |    |
|     | TI240_BAL30               | NUMBER(18,0)       | 11~30天                   |    |
|     | TI240_BAL90               | NUMBER(18,0)       | 31~90天                   |    |
|     | TI240_BAL180              | NUMBER(18,0)       | 91~180天                  |    |
|     | TI240_BAL365              | NUMBER(18,0)       | 181天~一年                  |    |
|     | TI240_BAL366              | NUMBER(18,0)       | 一年以上                     |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                   |
