---
sidebar_position: 5
title: 催收帳務(CDJS)
---

### VW_ODS_D_JCSNDEL1
#### 催收帳務資料(一)
| Key | 欄位名稱            | 欄位資料型態 | 欄位說明                  | 備註 |
| --- | ----------------------- | ------------------ | ----------------------------- | ---- |
|     | NDEL1_ACCOUNT_ID        | VARCHAR2(11 char)  | ID                            |      |
|     | NDEL1_STATEMENT_CYCLE   | VARCHAR2(1 char)   | 期別                        |      |
|     | NDEL1_DELINQUENT_PERIOD | VARCHAR2(2 char)   |                               |      |
|     | NDEL1_WRITE_OFF_DATE    | DATE               | 轉呆帳日                  |      |
|     | NDEL1_M0_AMT            | NUMBER(10,0)       | M0金額                      |      |
|     | NDEL1_M1_AMT            | NUMBER(10,0)       | M1金額                      |      |
|     | NDEL1_M2_AMT            | NUMBER(10,0)       | M2金額                      |      |
|     | NDEL1_M3_AMT            | NUMBER(10,0)       | M3金額                      |      |
|     | NDEL1_M4_AMT            | NUMBER(10,0)       | M4金額                      |      |
|     | NDEL1_M5_AMT            | NUMBER(10,0)       | M5金額                      |      |
|     | NDEL1_M6_AMT            | NUMBER(10,0)       | M6金額                      |      |
|     | NDEL1_M7_AMT            | NUMBER(10,0)       | M7+金額                     |      |
|     | NDEL1_END_BAL_COMQK     | NUMBER(10,0)       | 本金                        |      |
|     | NDEL1_END_BAL_R         | NUMBER(10,0)       | 循環息                     |      |
|     | NDEL1_END_BAL_F         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_C         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_O         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_T         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_B         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_A         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_L         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_K         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_E         | NUMBER(10,0)       | 爭議款                     |      |
|     | NDEL1_END_BAL_Q         | NUMBER(10,0)       | 代償款                     |      |
|     | NDEL1_END_BAL_P         | NUMBER(10,0)       | 手續費                     |      |
|     | NDEL1_END_BAL_M         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_MX        | NUMBER(10,0)       | 卡貸(息)                   |      |
|     | NDEL1_END_BAL_X1        | NUMBER(10,0)       | 不計提息（呆帳後）   |      |
|     | NDEL1_END_BAL_ALL       | NUMBER(10,0)       | 總欠款(不含未到期)    |      |
|     | NDEL1_END_BAL_R1        | NUMBER(10,0)       | 本期循環息               |      |
|     | NDEL1_END_BAL_Q1        | NUMBER(10,0)       | 本期代償息               |      |
|     | NDEL1_END_BAL_2         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_MA      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_OT      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_BA      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_T_1       | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_TR_1      | NUMBER(10,0)       | 催收款金額(利息)       |      |
|     | NDEL1_END_BAL_TR_X      | NUMBER(10,0)       | 催收款金額(本利和)    |      |
|     | NDEL1_DEBT_T_ST         | NUMBER(10,0)       | 催收款金額:一般        |      |
|     | NDEL1_DEBT_T_MA         | NUMBER(10,0)       | 催收款金額:卡貸        |      |
|     | NDEL1_DEBT_T_OT         | NUMBER(10,0)       | 催收款金額:代償        |      |
|     | NDEL1_DEBT_T_BA         | NUMBER(10,0)       | 催收款金額:通信        |      |
|     | NDEL1_END_BAL_B_1       | NUMBER(10,0)       | 呆帳款金額(本金)       |      |
|     | NDEL1_END_BAL_BR_1      | NUMBER(10,0)       | 呆帳款金額(利息)       |      |
|     | NDEL1_END_BAL_BR_X      | NUMBER(10,0)       | 呆帳款金額(本利和)    |      |
|     | NDEL1_DEBT_B_ST         | NUMBER(10,0)       | 呆帳款金額:一般        |      |
|     | NDEL1_DEBT_B_MA         | NUMBER(10,0)       | 呆帳款金額:卡貸        |      |
|     | NDEL1_DEBT_B_OT         | NUMBER(10,0)       | 呆帳款金額:代償        |      |
|     | NDEL1_DEBT_B_BA         | NUMBER(10,0)       | 呆帳款金額:通信        |      |
|     | NDEL1_CLOSE_DATE        | VARCHAR2(2 char)   | 關帳日                     |      |
|     | NDEL1_INOAYY            | VARCHAR2(2 char)   | 委外別                     |      |
|     | NDEL1_TYPE              | VARCHAR2(1 char)   | 類別                        |      |
|     | NDEL1_NOT_BILL_FLAG     | VARCHAR2(1 char)   | 未到期金額(總計)FLAG   |      |
|     | NDEL1_NOT_BILL          | NUMBER(10,0)       | 未到期金額(總計)       |      |
|     | NDEL1_LOAN_BAL          | NUMBER(10,0)       | 未到期:卡貸本金分期資料未到期 |      |
|     | NDEL1_LOAN_RENT         | NUMBER(10,0)       | 未到期:卡貸利息        |      |
|     | NDEL1_CASH_BAL          | NUMBER(10,0)       | 未到期:通信預借金本金 |      |
|     | NDEL1_CASH_INTE         | NUMBER(10,0)       |                               |      |
|     | NDEL1_CASH_MFEE         | NUMBER(10,0)       | 未到期:通信預借金手續費 |      |
|     | NDEL1_INST_BAL          | NUMBER(10,0)       | 未到期:分期付款本金  |      |
|     | NDEL1_INST_MFEE         | NUMBER(10,0)       | 未到期:分期付款手續費 |      |
|     | NDEL1_BLNW_BAL_FLAG     | VARCHAR2(1 char)   | 未到期:1231代墊款本金FLAG |      |
|     | NDEL1_BLNW_BAL          | NUMBER(10,0)       | 未到期:1231代墊款本金 |      |
|     | NDEL1_BLNW_MFEE         | NUMBER(10,0)       | 未到期:1231代墊款手續費 |      |
|     | NDEL1_TRVY_BAL          | NUMBER(10,0)       | 未到期:郵購金額        |      |
|     | NDEL1_BTLG_BAL          | NUMBER(10,0)       | 未到期:代償本金        |      |
|     | NDEL1_BTLG_MFEE         | NUMBER(10,0)       | 未到期:代償手續費     |      |
|     | NDEL1_END_BAL_TOTAL     | NUMBER(10,0)       | 總欠款(含未到期)       |      |
|     | NDEL1_REVOLVE_AMT       | NUMBER(10,0)       | 循環信用額度            |      |
|     | NDEL1_REVOLVE_BAL       | NUMBER(10,0)       | 循環信用餘額            |      |
|     | NDEL1_REVOLVE_LOAN      | NUMBER(10,0)       | 通信預借額度            |      |
|     | NDEL1_REVOLVE_LOAN_1    | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_D         | NUMBER(10,0)       | 溢付款                     |      |
|     | NDEL1_START_DATE        | VARCHAR2(7 char)   | 分期期間(起)             |      |
|     | NDEL1_END_DATE          | VARCHAR2(7 char)   | 分期期間(迄)             |      |
|     | NDEL1_LAST_CLOSING_DATE | DATE               | 上期關帳日               |      |
|     | NDEL1_MORA_DATE         | DATE               |                               |      |
|     | NDEL1_INSTALLMENT_CNT   | NUMBER(3,0)        | 分期期數                  |      |
|     | NDEL1_INSTALLMENT_AMT   | NUMBER(10,0)       | 每期應繳金額            |      |
|     | NDEL1_PAY_DD            | VARCHAR2(2 char)   | 每期還款日期            |      |
|     | NDEL1_DELAY_FLAG        | VARCHAR2(1 char)   | 最近三個月曾逾期      |      |
|     | NDEL1_DEDUCT_ACCOUNT_NO | VARCHAR2(20 char)  |                               |      |
|     | NDEL1_DELINQUENT_FLAG   | VARCHAR2(1 char)   | 違約註記                  |      |
|     | NDEL1_BRANCH_TYPE       | VARCHAR2(4 char)   | 分行                        |      |
|     | NDEL1_STATUS            | VARCHAR2(1 char)   | 歸戶現狀                  |      |
|     | NDEL1_MIN_PAY           | NUMBER(10,0)       | 最低應繳款               |      |
|     | NDEL1_MIN_PAY_BAL       | NUMBER(10,0)       | 本期最低應繳款餘額   |      |
|     | NDEL1_TOT_RECEIVABLE    | NUMBER(10,0)       | 本期應繳總金額         |      |
|     | NDEL1_PAY_AMT           | NUMBER(10,0)       | 本期總繳款金額         |      |
|     | NDEL1_PAY_CNT           | NUMBER(3,0)        | 本期繳款次數            |      |
|     | NDEL1_MESSAGE           | VARCHAR2(72 char)  |                               |      |
|     | NDEL1_LASTPAY_DATE      | DATE               | 繳款截止日               |      |
|     | NDEL1_ACCOUNT_CLASS     | VARCHAR2(1 char)   | 案件等級                  |      |
|     | NDEL1_PAYMENT_RATE      | VARCHAR2(24 char)  | 繳款評等                  |      |
|     | NDEL1_EW_MARK           | VARCHAR2(2 char)   | 預警註記                  |      |
|     | NDEL1_DELAYPAY_DATE     | DATE               | 寬延日                     |      |
|     | NDEL1_THIS_REVOLVE_RATE | NUMBER(4,2)        | 循環利率(差別利率)    |      |
|     | NDEL1_LAST_PAY_DATE     | DATE               | 最後付款日               |      |
|     | NDEL1_LAST_PAY_AMT      | NUMBER(10,0)       | 最後付款金額            |      |
|     | NDEL1_R_UNHELP_AMT      | NUMBER(10,0)       | 循環息之債協提存息   |      |
|     | NDEL1_T_UNHELP_AMT      | NUMBER(10,0)       | 催收款之債協提存息   |      |
|     | NDEL1_B_UNHELP_AMT      | NUMBER(10,0)       | 呆帳之債協提存息      |      |
|     | NDEL1_RATE              | NUMBER(6,4)        | 1334畫面的分期利率     |      |
|     | NDEL1_REMARK            | VARCHAR2(120 char) | 1334畫面的備註           |      |
|     | NDEL1_AGREE_FLAG        | VARCHAR2(1 char)   | 1334畫面的一致性註記  |      |
|     | NDEL1_DEDUCT_BANK       | VARCHAR2(4 char)   | 1414畫面的扣繳行庫     |      |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間            |      |
### VW_ODS_D_JCSNDEL11
#### 催收帳務資料(二)(正常戶)
| Key | 欄位名稱            | 欄位資料型態 | 欄位說明                  | 備註 |
| --- | ----------------------- | ------------------ | ----------------------------- | ---- |
|     | NDEL1_ACCOUNT_ID        | VARCHAR2(11 char)  | ID                            |      |
|     | NDEL1_STATEMENT_CYCLE   | VARCHAR2(1 char)   | 期別                        |      |
|     | NDEL1_DELINQUENT_PERIOD | VARCHAR2(2 char)   |                               |      |
|     | NDEL1_WRITE_OFF_DATE    | DATE               | 轉呆帳日                  |      |
|     | NDEL1_M0_AMT            | NUMBER(10,0)       | M0金額                      |      |
|     | NDEL1_M1_AMT            | NUMBER(10,0)       | M1金額                      |      |
|     | NDEL1_M2_AMT            | NUMBER(10,0)       | M2金額                      |      |
|     | NDEL1_M3_AMT            | NUMBER(10,0)       | M3金額                      |      |
|     | NDEL1_M4_AMT            | NUMBER(10,0)       | M4金額                      |      |
|     | NDEL1_M5_AMT            | NUMBER(10,0)       | M5金額                      |      |
|     | NDEL1_M6_AMT            | NUMBER(10,0)       | M6金額                      |      |
|     | NDEL1_M7_AMT            | NUMBER(10,0)       | M7+金額                     |      |
|     | NDEL1_END_BAL_COMQK     | NUMBER(10,0)       | 本金                        |      |
|     | NDEL1_END_BAL_R         | NUMBER(10,0)       | 循環息                     |      |
|     | NDEL1_END_BAL_F         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_C         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_O         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_T         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_B         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_A         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_L         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_K         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_E         | NUMBER(10,0)       | 爭議款                     |      |
|     | NDEL1_END_BAL_Q         | NUMBER(10,0)       | 代償款                     |      |
|     | NDEL1_END_BAL_P         | NUMBER(10,0)       | 手續費                     |      |
|     | NDEL1_END_BAL_M         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_MX        | NUMBER(10,0)       | 卡貸(息)                   |      |
|     | NDEL1_END_BAL_X1        | NUMBER(10,0)       | 不計提息（呆帳後）   |      |
|     | NDEL1_END_BAL_ALL       | NUMBER(10,0)       | 總欠款(不含未到期)    |      |
|     | NDEL1_END_BAL_R1        | NUMBER(10,0)       | 本期循環息               |      |
|     | NDEL1_END_BAL_Q1        | NUMBER(10,0)       | 本期代償息               |      |
|     | NDEL1_END_BAL_2         | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_MA      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_OT      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_2_BA      | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_T_1       | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_TR_1      | NUMBER(10,0)       | 催收款金額(利息)       |      |
|     | NDEL1_END_BAL_TR_X      | NUMBER(10,0)       | 催收款金額(本利和)    |      |
|     | NDEL1_DEBT_T_ST         | NUMBER(10,0)       | 催收款金額:一般        |      |
|     | NDEL1_DEBT_T_MA         | NUMBER(10,0)       | 催收款金額:卡貸        |      |
|     | NDEL1_DEBT_T_OT         | NUMBER(10,0)       | 催收款金額:代償        |      |
|     | NDEL1_DEBT_T_BA         | NUMBER(10,0)       | 催收款金額:通信        |      |
|     | NDEL1_END_BAL_B_1       | NUMBER(10,0)       | 呆帳款金額(本金)       |      |
|     | NDEL1_END_BAL_BR_1      | NUMBER(10,0)       | 呆帳款金額(利息)       |      |
|     | NDEL1_END_BAL_BR_X      | NUMBER(10,0)       | 呆帳款金額(本利和)    |      |
|     | NDEL1_DEBT_B_ST         | NUMBER(10,0)       | 呆帳款金額:一般        |      |
|     | NDEL1_DEBT_B_MA         | NUMBER(10,0)       | 呆帳款金額:卡貸        |      |
|     | NDEL1_DEBT_B_OT         | NUMBER(10,0)       | 呆帳款金額:代償        |      |
|     | NDEL1_DEBT_B_BA         | NUMBER(10,0)       | 呆帳款金額:通信        |      |
|     | NDEL1_CLOSE_DATE        | VARCHAR2(2 char)   | 關帳日                     |      |
|     | NDEL1_INOAYY            | VARCHAR2(2 char)   | 委外別                     |      |
|     | NDEL1_TYPE              | VARCHAR2(1 char)   | 類別                        |      |
|     | NDEL1_NOT_BILL_FLAG     | VARCHAR2(1 char)   | 未到期金額(總計)FLAG   |      |
|     | NDEL1_NOT_BILL          | NUMBER(10,0)       | 未到期金額(總計)       |      |
|     | NDEL1_LOAN_BAL          | NUMBER(10,0)       | 未到期:卡貸本金分期資料未到期 |      |
|     | NDEL1_LOAN_RENT         | NUMBER(10,0)       | 未到期:卡貸利息        |      |
|     | NDEL1_CASH_BAL          | NUMBER(10,0)       | 未到期:通信預借金本金 |      |
|     | NDEL1_CASH_INTE         | NUMBER(10,0)       |                               |      |
|     | NDEL1_CASH_MFEE         | NUMBER(10,0)       | 未到期:通信預借金手續費 |      |
|     | NDEL1_INST_BAL          | NUMBER(10,0)       | 未到期:分期付款本金  |      |
|     | NDEL1_INST_MFEE         | NUMBER(10,0)       | 未到期:分期付款手續費 |      |
|     | NDEL1_BLNW_BAL_FLAG     | VARCHAR2(1 char)   | 未到期:1231代墊款本金FLAG |      |
|     | NDEL1_BLNW_BAL          | NUMBER(10,0)       | 未到期:1231代墊款本金 |      |
|     | NDEL1_BLNW_MFEE         | NUMBER(10,0)       | 未到期:1231代墊款手續費 |      |
|     | NDEL1_TRVY_BAL          | NUMBER(10,0)       | 未到期:郵購金額        |      |
|     | NDEL1_BTLG_BAL          | NUMBER(10,0)       | 未到期:代償本金        |      |
|     | NDEL1_BTLG_MFEE         | NUMBER(10,0)       | 未到期:代償手續費     |      |
|     | NDEL1_END_BAL_TOTAL     | NUMBER(10,0)       | 總欠款(含未到期)       |      |
|     | NDEL1_REVOLVE_AMT       | NUMBER(10,0)       | 循環信用額度            |      |
|     | NDEL1_REVOLVE_BAL       | NUMBER(10,0)       | 循環信用餘額            |      |
|     | NDEL1_REVOLVE_LOAN      | NUMBER(10,0)       | 通信預借額度            |      |
|     | NDEL1_REVOLVE_LOAN_1    | NUMBER(10,0)       |                               |      |
|     | NDEL1_END_BAL_D         | NUMBER(10,0)       | 溢付款                     |      |
|     | NDEL1_START_DATE        | VARCHAR2(7 char)   | 分期期間(起)             |      |
|     | NDEL1_END_DATE          | VARCHAR2(7 char)   | 分期期間(迄)             |      |
|     | NDEL1_LAST_CLOSING_DATE | DATE               | 上期關帳日               |      |
|     | NDEL1_MORA_DATE         | DATE               |                               |      |
|     | NDEL1_INSTALLMENT_CNT   | NUMBER(3,0)        | 分期期數                  |      |
|     | NDEL1_INSTALLMENT_AMT   | NUMBER(10,0)       | 每期應繳金額            |      |
|     | NDEL1_PAY_DD            | VARCHAR2(2 char)   | 每期還款日期            |      |
|     | NDEL1_DELAY_FLAG        | VARCHAR2(1 char)   | 最近三個月曾逾期      |      |
|     | NDEL1_DEDUCT_ACCOUNT_NO | VARCHAR2(20 char)  |                               |      |
|     | NDEL1_DELINQUENT_FLAG   | VARCHAR2(1 char)   | 違約註記                  |      |
|     | NDEL1_BRANCH_TYPE       | VARCHAR2(4 char)   | 分行                        |      |
|     | NDEL1_STATUS            | VARCHAR2(1 char)   | 歸戶現狀                  |      |
|     | NDEL1_MIN_PAY           | NUMBER(10,0)       | 最低應繳款               |      |
|     | NDEL1_MIN_PAY_BAL       | NUMBER(10,0)       | 本期最低應繳款餘額   |      |
|     | NDEL1_TOT_RECEIVABLE    | NUMBER(10,0)       | 本期應繳總金額         |      |
|     | NDEL1_PAY_AMT           | NUMBER(10,0)       | 本期總繳款金額         |      |
|     | NDEL1_PAY_CNT           | NUMBER(3,0)        | 本期繳款次數            |      |
|     | NDEL1_MESSAGE           | VARCHAR2(72 char)  |                               |      |
|     | NDEL1_LASTPAY_DATE      | DATE               | 繳款截止日               |      |
|     | NDEL1_ACCOUNT_CLASS     | VARCHAR2(1 char)   | 案件等級                  |      |
|     | NDEL1_PAYMENT_RATE      | VARCHAR2(24 char)  | 繳款評等                  |      |
|     | NDEL1_EW_MARK           | VARCHAR2(2 char)   | 預警註記                  |      |
|     | NDEL1_DELAYPAY_DATE     | DATE               | 寬延日                     |      |
|     | NDEL1_THIS_REVOLVE_RATE | NUMBER(4,2)        | 循環利率(差別利率)    |      |
|     | NDEL1_LAST_PAY_DATE     | DATE               | 最後付款日               |      |
|     | NDEL1_LAST_PAY_AMT      | NUMBER(10,0)       | 最後付款金額            |      |
|     | NDEL1_R_UNHELP_AMT      | NUMBER(10,0)       | 循環息之債協提存息   |      |
|     | NDEL1_T_UNHELP_AMT      | NUMBER(10,0)       | 催收款之債協提存息   |      |
|     | NDEL1_B_UNHELP_AMT      | NUMBER(10,0)       | 呆帳之債協提存息      |      |
|     | NDEL1_RATE              | NUMBER(6,4)        | 1334畫面的分期利率     |      |
|     | NDEL1_REMARK            | VARCHAR2(120 char) | 1334畫面的備註           |      |
|     | NDEL1_AGREE_FLAG        | VARCHAR2(1 char)   | 1334畫面的一致性註記  |      |
|     | NDEL1_DEDUCT_BANK       | VARCHAR2(4 char)   | 1414畫面的扣繳行庫     |      |
|     | TBL_UPD_TIM             | TIMESTAMP          | 表格更新時間            |      |