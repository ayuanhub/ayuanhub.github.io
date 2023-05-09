---
sidebar_position: 13
title: 外幣存款-定存(CSFT)
---

### VW_ODS_D_FTCST
#### 外匯定存帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FTCST_ACC_ID_NO          | VARCHAR2(13 char) | 帳號             |    |
|     | FTCST_BR_CODE            | VARCHAR2(4 char)  | 記帳單位/外指行       |    |
|     | FTCST_OWN_BR_CODE        | VARCHAR2(4 char)  | 所屬單位           |    |
|     | FTCST_ID_CODE            | VARCHAR2(11 char) | 統一編號/身分證字號     |    |
|     | FTCST_CUST_STAT          | VARCHAR2(2 char)  | 帳戶狀態           |    |
|     | FTCST_HOLD_MARK          | VARCHAR2(1 char)  | 全戶止扣記號         |    |
|     | FTCST_PB_LOSE_STAT       | VARCHAR2(1 char)  | 存摺掛失狀態         |    |
|     | FTCST_CHOP_LOSE_STAT     | VARCHAR2(1 char)  | 印鑑掛失狀態         |    |
|     | FTCST_TXN_STOP_STAT      | VARCHAR2(1 char)  | 暫停交易狀態         |    |
|     | FTCST_DEAD_STAT          | VARCHAR2(1 char)  | 死亡事故狀態         |    |
|     | FTCST_COURT_STAT         | VARCHAR2(1 char)  | 法院扣押           |    |
|     | FTCST_HOLD_STAT          | VARCHAR2(1 char)  | 本行設定           |    |
|     | FTCST_WARN_STAT          | VARCHAR2(1 char)  | 警示戶狀態          |    |
|     | FTCST_OTHER_STAT         | VARCHAR2(1 char)  | 其他狀態           |    |
|     | FTCST_JOIN_STAT          | VARCHAR2(1 char)  | 聯名戶            |    |
|     | FTCST_NAME_FLG           | VARCHAR2(1 char)  | 別名記號           |    |
|     | FTCST_ENAME_FLG          | VARCHAR2(1 char)  | 英文別名記號         |    |
|     | FTCST_ADDR_FLG           | VARCHAR2(1 char)  | 帳戶通訊住址記號       |    |
|     | FTCST_EADDR_FLG          | VARCHAR2(1 char)  | 帳戶通訊英文住址記號     |    |
|     | FTCST_TEL_FLG            | VARCHAR2(1 char)  | 帳戶通訊電話記號       |    |
|     | FTCST_ACC_CHAR_CODE      | VARCHAR2(2 char)  | 性質別            |    |
|     | FTCST_CHK_SHEET_CODE     | VARCHAR2(1 char)  | 客戶對帳單記號        |    |
|     | FTCST_OPEN_DATE          | DATE              | 開戶日            |    |
|     | FTCST_LAST_TXN_DATE      | DATE              | 上次交易日          |    |
|     | FTCST_MODIF_DATE         | DATE              | 資料維護日期         |    |
|     | FTCST_TRANS_DATE         | DATE              | 移存日期           |    |
|     | FTCST_MOVE_OWN_BR_CODE   | VARCHAR2(4 char)  | 移出所屬行          |    |
|     | FTCST_AGENT_BR_CODE      | VARCHAR2(4 char)  | 代理行            |    |
|     | FTCST_MOVIN_BR           | VARCHAR2(4 char)  | 約定移入行          |    |
|     | FTCST_MOVIN_ACC_ID       | VARCHAR2(13 char) | 約定移入帳號         |    |
|     | FTCST_ACC_CNT            | VARCHAR2(4 char)  | 存單筆數           |    |
|     | FTCST_TXN_SER_NO         | VARCHAR2(6 char)  | 交易記錄序號         |    |
|     | FTCST_HOLD_SER_NO        | VARCHAR2(2 char)  | 事故序號           |    |
|     | FTCST_HOLD_CNT           | VARCHAR2(4 char)  | 有效全戶止扣筆數       |    |
|     | FTCST_AREA_CODE          | VARCHAR2(4 char)  | 區域中心           |    |
|     | FTCST_ENLIST_TLR         | VARCHAR2(6 char)  | 招募行員           |    |
|     | FTCST_SERVICE_AO         | VARCHAR2(6 char)  | AO_CODE        |    |
|     | FTCST_TOT_CASH_IN_AMT    | NUMBER(15,2)      | 當日現金存入累計金額_TWD |    |
|     | FTCST_TOT_CASH_OUT_AMT   | NUMBER(15,2)      | 當日現金支出累計金額_TWD |    |
|     | FTCST_TOT_TRAN_IN_AMT    | NUMBER(15,2)      | 當日轉帳存入累計金額_TWD |    |
|     | FTCST_TOT_TRAN_OUT_AMT   | NUMBER(15,2)      | 當日轉帳支出累計金額_TWD |    |
|     | FTCST_COUNTER_FLG        | VARCHAR2(1 char)  | 是否臨櫃開戶         |    |
|     | FTCST_NOTICE_KIND        | VARCHAR2(1 char)  | 聯絡/不聯絡         |    |
|     | FTCST_CUR_CODE_1         | VARCHAR2(3 char)  | 幣別代號_1         |    |
|     | FTCST_CUR_BAL_1          | NUMBER(15,2)      | 幣別餘額_1         |    |
|     | FTCST_CUR_CODE_2         | VARCHAR2(3 char)  | 幣別代號_2         |    |
|     | FTCST_CUR_BAL_2          | NUMBER(15,2)      | 幣別餘額_2         |    |
|     | FTCST_CUR_CODE_3         | VARCHAR2(3 char)  | 幣別代號_3         |    |
|     | FTCST_CUR_BAL_3          | NUMBER(15,2)      | 幣別餘額_3         |    |
|     | FTCST_CUR_CODE_4         | VARCHAR2(3 char)  | 幣別代號_4         |    |
|     | FTCST_CUR_BAL_4          | NUMBER(15,2)      | 幣別餘額_4         |    |
|     | FTCST_CUR_CODE_5         | VARCHAR2(3 char)  | 幣別代號_5         |    |
|     | FTCST_CUR_BAL_5          | NUMBER(15,2)      | 幣別餘額_5         |    |
|     | FTCST_CUR_CODE_6         | VARCHAR2(3 char)  | 幣別代號_6         |    |
|     | FTCST_CUR_BAL_6          | NUMBER(15,2)      | 幣別餘額_6         |    |
|     | FTCST_CUR_CODE_7         | VARCHAR2(3 char)  | 幣別代號_7         |    |
|     | FTCST_CUR_BAL_7          | NUMBER(15,2)      | 幣別餘額_7         |    |
|     | FTCST_CUR_CODE_8         | VARCHAR2(3 char)  | 幣別代號_8         |    |
|     | FTCST_CUR_BAL_8          | NUMBER(15,2)      | 幣別餘額_8         |    |
|     | FTCST_CUR_CODE_9         | VARCHAR2(3 char)  | 幣別代號_9         |    |
|     | FTCST_CUR_BAL_9          | NUMBER(15,2)      | 幣別餘額_9         |    |
|     | FTCST_CUR_CODE_10        | VARCHAR2(3 char)  | 幣別代號_10        |    |
|     | FTCST_CUR_BAL_10         | NUMBER(15,2)      | 幣別餘額_10        |    |
|     | FTCST_CUR_CODE_11        | VARCHAR2(3 char)  | 幣別代號_11        |    |
|     | FTCST_CUR_BAL_11         | NUMBER(15,2)      | 幣別餘額_11        |    |
|     | FTCST_CUR_CODE_12        | VARCHAR2(3 char)  | 幣別代號_12        |    |
|     | FTCST_CUR_BAL_12         | NUMBER(15,2)      | 幣別餘額_12        |    |
|     | FTCST_CUR_CODE_13        | VARCHAR2(3 char)  | 幣別代號_13        |    |
|     | FTCST_CUR_BAL_13         | NUMBER(15,2)      | 幣別餘額_13        |    |
|     | FTCST_CUR_CODE_14        | VARCHAR2(3 char)  | 幣別代號_14        |    |
|     | FTCST_CUR_BAL_14         | NUMBER(15,2)      | 幣別餘額_14        |    |
|     | FTCST_CUR_CODE_15        | VARCHAR2(3 char)  | 幣別代號_15        |    |
|     | FTCST_CUR_BAL_15         | NUMBER(15,2)      | 幣別餘額_15        |    |
|     | FTCST_CUR_CODE_16        | VARCHAR2(3 char)  | 幣別代號_16        |    |
|     | FTCST_CUR_BAL_16         | NUMBER(15,2)      | 幣別餘額_16        |    |
|     | FTCST_CUR_CODE_17        | VARCHAR2(3 char)  | 幣別代號_17        |    |
|     | FTCST_CUR_BAL_17         | NUMBER(15,2)      | 幣別餘額_17        |    |
|     | FTCST_CUR_CODE_18        | VARCHAR2(3 char)  | 幣別代號_18        |    |
|     | FTCST_CUR_BAL_18         | NUMBER(15,2)      | 幣別餘額_18        |    |
|     | FTCST_CUR_CODE_19        | VARCHAR2(3 char)  | 幣別代號_19        |    |
|     | FTCST_CUR_BAL_19         | NUMBER(15,2)      | 幣別餘額_19        |    |
|     | FTCST_CUR_CODE_20        | VARCHAR2(3 char)  | 幣別代號_20        |    |
|     | FTCST_CUR_BAL_20         | NUMBER(15,2)      | 幣別餘額_20        |    |
|     | FTCST_CUR_CODE_21        | VARCHAR2(3 char)  | 幣別代號_21        |    |
|     | FTCST_CUR_BAL_21         | NUMBER(15,2)      | 幣別餘額_21        |    |
|     | FTCST_CUR_CODE_22        | VARCHAR2(3 char)  | 幣別代號_22        |    |
|     | FTCST_CUR_BAL_22         | NUMBER(15,2)      | 幣別餘額_22        |    |
|     | FTCST_CUR_CODE_23        | VARCHAR2(3 char)  | 幣別代號_23        |    |
|     | FTCST_CUR_BAL_23         | NUMBER(15,2)      | 幣別餘額_23        |    |
|     | FTCST_CUR_CODE_24        | VARCHAR2(3 char)  | 幣別代號_24        |    |
|     | FTCST_CUR_BAL_24         | NUMBER(15,2)      | 幣別餘額_24        |    |
|     | FTCST_CUR_CODE_25        | VARCHAR2(3 char)  | 幣別代號_25        |    |
|     | FTCST_CUR_BAL_25         | NUMBER(15,2)      | 幣別餘額_25        |    |
|     | FTCST_CUR_CODE_26        | VARCHAR2(3 char)  | 幣別代號_26        |    |
|     | FTCST_CUR_BAL_26         | NUMBER(15,2)      | 幣別餘額_26        |    |
|     | FTCST_CUR_CODE_27        | VARCHAR2(3 char)  | 幣別代號_27        |    |
|     | FTCST_CUR_BAL_27         | NUMBER(15,2)      | 幣別餘額_27        |    |
|     | FTCST_CUR_CODE_28        | VARCHAR2(3 char)  | 幣別代號_28        |    |
|     | FTCST_CUR_BAL_28         | NUMBER(15,2)      | 幣別餘額_28        |    |
|     | FTCST_CUR_CODE_29        | VARCHAR2(3 char)  | 幣別代號_29        |    |
|     | FTCST_CUR_BAL_29         | NUMBER(15,2)      | 幣別餘額_29        |    |
|     | FTCST_CUR_CODE_30        | VARCHAR2(3 char)  | 幣別代號_30        |    |
|     | FTCST_CUR_BAL_30         | NUMBER(15,2)      | 幣別餘額_30        |    |
|     | FTCST_CLS_DATE           | DATE              | 銷戶日            |    |
|     | FTCST_MOVE_BR_CODE       | VARCHAR2(4 char)  | 移出記帳行          |    |
|     | FTCST_CLS_BR_CODE        | VARCHAR2(4 char)  | 銷戶單位           |    |
|     | FTCST_OBU_STOP_FLG       | VARCHAR2(2 char)  | OBU凍結戶         |    |
|     | FTCST_ACCOUNT_PURPOSE    | VARCHAR2(4 char)  | 開戶目的           |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間         |    |
### VW_ODS_D_FTMST
#### 外匯存單主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FTMST_TI_ACC_ID_NO       | VARCHAR2(13 char) | 存單號碼           |    |
| PK  | FTMST_TRANS_CNT          | VARCHAR2(3 char)  | 轉期序號           |    |
|     | FTMST_TR_TERM_CNT        | NUMBER(3,0)       | 已轉期次數          |    |
|     | FTMST_ACC_ID_NO          | VARCHAR2(13 char) | 定期帳號_綜存帳號      |    |
|     | FTMST_CURCD              | VARCHAR2(3 char)  | 幣別             |    |
|     | FTMST_CHK_NO             | VARCHAR2(8 char)  | 用紙編號           |    |
|     | FTMST_ID_CODE            | VARCHAR2(11 char) | 統一編號_身分證字號     |    |
|     | FTMST_L_TI_ID_NO         | VARCHAR2(13 char) | 上次存單號碼         |    |
|     | FTMST_N_TI_ID_NO         | VARCHAR2(13 char) | 下次存單號碼         |    |
|     | FTMST_BR_CODE            | VARCHAR2(4 char)  | 記帳單位_外指行       |    |
|     | FTMST_OWN_BR_CODE        | VARCHAR2(4 char)  | 所屬單位           |    |
|     | FTMST_PRD_NO             | VARCHAR2(7 char)  | 定存產品           |    |
|     | FTMST_PRD_IRTSQ          | VARCHAR2(11 char) | 商品利率編號         |    |
|     | FTMST_PRD_INT_GAP        | NUMBER(7,5)       | 商品議價利率差幅       |    |
|     | FTMST_PRD_TYPE           | VARCHAR2(1 char)  | 定存類別           |    |
|     | FTMST_INT_TYPE           | VARCHAR2(1 char)  | 定存計息方式         |    |
|     | FTMST_TERM_CODE          | VARCHAR2(4 char)  | 存單期別           |    |
|     | FTMST_CHAR_CODE          | VARCHAR2(1 char)  | 性質別            |    |
|     | FTMST_TERM_TYPE          | VARCHAR2(1 char)  | 週期類別           |    |
|     | FTMST_IRT_CODE           | VARCHAR2(11 char) | 利率詢價編號         |    |
|     | FTMST_INT_RATE           | NUMBER(7,5)       | 起始利率_存單利率      |    |
|     | FTMST_RATE_TYPE          | VARCHAR2(1 char)  | 利率型態           |    |
|     | FTMST_RATE_TERM          | VARCHAR2(2 char)  | 利率調動週期         |    |
|     | FTMST_INT_TERM           | NUMBER(2,0)       | 複利週期           |    |
|     | FTMST_DP_DATE            | DATE              | 存入日期           |    |
|     | FTMST_ST_INT_DATE        | DATE              | 起息日            |    |
|     | FTMST_DUE_DATE           | DATE              | 到期日            |    |
|     | FTMST_MT_INT_DATE        | DATE              | 下次應付息日期        |    |
|     | FTMST_MT_DP_DATE         | DATE              | 下次應存取期金日       |    |
|     | FTMST_PAY_INT_KIND       | VARCHAR2(1 char)  | 付息方式           |    |
|     | FTMST_PAY_INT_ST         | VARCHAR2(3 char)  | 付息起期           |    |
|     | FTMST_PAY_INT_TERM       | VARCHAR2(2 char)  | 付息週期           |    |
|     | FTMST_OPEN_DATE          | DATE              | 簽發存單日期         |    |
|     | FTMST_CLS_DATE           | DATE              | 銷戶日            |    |
|     | FTMST_PRINCIPAL_AMT      | NUMBER(15,2)      | 存單餘額           |    |
|     | FTMST_TI_CLS_TYPE        | VARCHAR2(1 char)  | 解約存單型態         |    |
|     | FTMST_TI_STAT_CODE       | VARCHAR2(1 char)  | 存單狀況           |    |
|     | FTMST_REOPEN_STAT        | VARCHAR2(1 char)  | 補發類別           |    |
|     | FTMST_HOLD_FLAG          | VARCHAR2(1 char)  | 存單止付記號         |    |
|     | FTMST_TI_T_LOST          | VARCHAR2(1 char)  | 定存單暫掛失         |    |
|     | FTMST_TI_LOST            | VARCHAR2(1 char)  | 定存單掛失          |    |
|     | FTMST_INT_HLD            | VARCHAR2(1 char)  | 含利息之質權設定       |    |
|     | FTMST_UNINT_HLD          | VARCHAR2(1 char)  | 不含利息之質權設定      |    |
|     | FTMST_INT_COURT_HLD      | VARCHAR2(1 char)  | 含利息之法院扣押       |    |
|     | FTMST_UNINT_COURT_HLD    | VARCHAR2(1 char)  | 不含利息之法院扣押      |    |
|     | FTMST_COURT_PUBLIC       | VARCHAR2(1 char)  | 公示催告           |    |
|     | FTMST_COURT_RELEAS       | VARCHAR2(1 char)  | 法院除權判決         |    |
|     | FTMST_INT_KEEP           | VARCHAR2(1 char)  | 含利息之本行圈存       |    |
|     | FTMST_UNINT_KEEP         | VARCHAR2(1 char)  | 不含利息之本行圈存      |    |
|     | FTMST_OTHER_HOLDED       | VARCHAR2(1 char)  | 其他事故           |    |
|     | FTMST_INT_GAP            | NUMBER(7,5)       | 議價利率差幅         |    |
|     | FTMST_TXN_ACC_SER_NO     | VARCHAR2(3 char)  | 交易記錄存提序號       |    |
|     | FTMST_ENLIST_TLR         | VARCHAR2(6 char)  | 招募行員           |    |
|     | FTMST_SERVICE_AO         | VARCHAR2(6 char)  | 服務AO           |    |
|     | FTMST_CENT_CODE          | VARCHAR2(4 char)  | 利潤中心           |    |
|     | FTMST_AUTO_EXTEND_KIND   | VARCHAR2(1 char)  | 約定自動轉期別        |    |
|     | FTMST_AUTO_EXTEND_LIMIT  | NUMBER(3,0)       | 約定轉期次數         |    |
|     | FTMST_AUTO_PRD_NO        | VARCHAR2(7 char)  | 約定定存產品         |    |
|     | FTMST_AUTO_TERM_CODE     | VARCHAR2(4 char)  | 約定存單期間別        |    |
|     | FTMST_AUTO_RATE_TYPE     | VARCHAR2(1 char)  | 轉期後利率型態        |    |
|     | FTMST_AUTO_INT_GAP       | NUMBER(7,5)       | 轉期後加減利率        |    |
|     | FTMST_AUTO_IRT_CODE      | VARCHAR2(11 char) | 轉期後利率編號        |    |
|     | FTMST_AUTO_INT_KIND      | VARCHAR2(1 char)  | 約定轉息方式         |    |
|     | FTMST_AUTO_INT_ACC_NO    | VARCHAR2(13 char) | 約定轉息帳號_零存扣帳帳號  |    |
|     | FTMST_PAY_INT_CNT        | NUMBER(2,0)       | 已付息次數          |    |
|     | FTMST_AUTO_DP_KIND       | VARCHAR2(1 char)  | 自動存取期金         |    |
|     | FTMST_DP_CNT             | NUMBER(2,0)       | 零存_零付繳款期數      |    |
|     | FTMST_CS_TOT_BAL         | NUMBER(15,2)      | 零存到期值_存單面額     |    |
|     | FTMST_CS_IMP_INT         | NUMBER(15,2)      | 零存累計應補繳/延遲息    |    |
|     | FTMST_PER_DP_AMT         | NUMBER(15,2)      | 零存_零付月繳額       |    |
|     | FTMST_DP_TERM            | NUMBER(2,0)       | 期金存取週期         |    |
|     | FTMST_CS_END_TERM        | NUMBER(3,0)       | 零存結束期數         |    |
|     | FTMST_CS_DL_MONTHS       | NUMBER(2,0)       | 繳納寬限月數         |    |
|     | FTMST_CS_DL_DAYS         | NUMBER(2,0)       | 繳納寬限天數         |    |
|     | FTMST_CS_BEF_DAYS        | NUMBER(3,0)       | 零存提前天數         |    |
|     | FTMST_CS_AF_DAYS         | NUMBER(3,0)       | 零存延遲天數         |    |
|     | FTMST_CS_STOP_FLG        | VARCHAR2(1 char)  | 零存停儲記號         |    |
|     | FTMST_DP_ST_TERM         | NUMBER(3,0)       | 零付起始期數         |    |
|     | FTMST_DP_CNT_LIMIT       | NUMBER(2,0)       | 可提取次數          |    |
|     | FTMST_DP_AMT_LIMIT       | NUMBER(3,0)       | 可提取限額          |    |
|     | FTMST_MVOU_OWN_BR        | VARCHAR2(4 char)  | 移出所屬行          |    |
|     | FTMST_BREAK_INT_FLG      | VARCHAR2(1 char)  | 中途解約記號         |    |
|     | FTMST_BREAK_INT_PERC     | NUMBER(3,0)       | 中途解約利息折算       |    |
|     | FTMST_LAST_TXN_DATE      | DATE              | 上次交易日期         |    |
|     | FTMST_LAST_INT_DATE      | DATE              | 上次結息日期         |    |
|     | FTMST_DEBT_SET           | VARCHAR2(1 char)  | 設定質借約定         |    |
|     | FTMST_DEBT_PERC          | NUMBER(3,0)       | 設定質借成數         |    |
|     | FTMST_UNBUSI_DAYS        | NUMBER(2,0)       | 非業營日數          |    |
|     | FTMST_PAY_INT_TTL        | NUMBER(15,2)      | 累計付息總額         |    |
|     | FTMST_MN_INT_AMT         | NUMBER(15,2)      | 本月底應付利息        |    |
|     | FTMST_RCV_INT_AMT        | NUMBER(10,2)      | 應補扣差息          |    |
|     | FTMST_PAY_INT_AMT        | NUMBER(10,2)      | 應補入差息          |    |
|     | FTMST_NOT_PAY_INT        | NUMBER(15,2)      | 設質未領利息         |    |
|     | FTMST_BOARD_CODE         | VARCHAR2(5 char)  | 適用牌告別          |    |
|     | FTMST_RCLS_DATE          | DATE              | 存單實際解約日        |    |
|     | FTMST_TI_BILL_KIND       | VARCHAR2(1 char)  | 存單實體是否         |    |
|     | FTMST_CLS_BR_CODE        | VARCHAR2(4 char)  | 銷戶單位           |    |
|     | FTMST_TRANS_DATE         | DATE              | 移存日            |    |
|     | FTMST_TRANS_CLS_BAL      | NUMBER(15,2)      | 續轉存餘額          |    |
|     | FTMST_CHANNEL            | VARCHAR2(2 char)  | 開戶通路別          |    |
|     | FTMST_LMN_INT_AMT        | NUMBER(15,2)      | 上月底應付利息        |    |
|     | FTMST_TOT_NTINT          | NUMBER(15,2)      | 當年度累計台幣毛息      |    |
|     | FTMST_TOT_NTTAX          | NUMBER(15,2)      | 當年度累計台幣稅額      |    |
|     | FTMST_TOT_NTINS          | NUMBER(15,2)      | 當年度累計台幣保費      |    |
|     | FTMST_TOT_NTSTAMP        | NUMBER(15,2)      | 當年度累計台幣印花稅     |    |
|     | FTMST_TOT_INT            | NUMBER(15,2)      | 當年度累計原幣毛息      |    |
|     | FTMST_TOT_TAX            | NUMBER(15,2)      | 當年度累計原幣稅額      |    |
|     | FTMST_TOT_INS            | NUMBER(15,2)      | 當年度累計原幣保費      |    |
|     | FTMST_TOT_STAMP          | NUMBER(15,2)      | 當年度累計原幣印花稅     |    |
|     | FTMST_WAIT_FLAG          | VARCHAR2(1 char)  | 待放行記號          |    |
|     | FTMST_TRANS_AMT          | NUMBER(15,2)      | 續轉存金額          |    |
|     | FTMST_WM_CODE            | VARCHAR2(12 char) | 憑證編號           |    |
|     | FTMST_MVOU_BR            | VARCHAR2(4 char)  | 移出記帳行          |    |
|     | FTMST_CLS_AMT            | NUMBER(15,2)      | 解約存單金額         |    |
|     | FTMST_AREA_CODE          | VARCHAR2(4 char)  | 區域中心           |    |
|     | FTMST_LYY_INT_AMT        | NUMBER(15,2)      | 期初應付利息         |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間         |    |
### VW_ODS_D_FTTXR
#### 外匯存單交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FTTXR_ACC_ID_NO          | VARCHAR2(13 char) | 定期帳號           |    |
| PK  | FTTXR_CURCD              | VARCHAR2(3 char)  | 幣別             |    |
| PK  | FTTXR_TI_ACC_ID_NO       | VARCHAR2(13 char) | 存單號碼           |    |
| PK  | FTTXR_TRANS_CNT          | VARCHAR2(3 char)  | 轉期序號           |    |
| PK  | FTTXR_SER_NO             | VARCHAR2(3 char)  | 存提序號           |    |
|     | FTTXR_TXN_DATE           | DATE              | 交易日期           |    |
|     | FTTXR_BR_CODE            | VARCHAR2(4 char)  | 帳務行            |    |
|     | FTTXR_OWN_BR_CDOE        | VARCHAR2(4 char)  | 客戶所屬分行         |    |
|     | FTTXR_TXN_ID_CODE        | VARCHAR2(5 char)  | 交易代號           |    |
|     | FTTXR_CHK_NO             | VARCHAR2(8 char)  | 用紙編號           |    |
|     | FTTXR_PRD_NO             | VARCHAR2(7 char)  | 定存產品           |    |
|     | FTTXR_IRT_CODE           | VARCHAR2(11 char) | 議價編號           |    |
|     | FTTXR_BOARD_CODE         | VARCHAR2(5 char)  | 牌告利率別          |    |
|     | FTTXR_TXN_BR_CODE        | VARCHAR2(4 char)  | 交易執行分行         |    |
|     | FTTXR_TXN_TLR_CODE       | VARCHAR2(6 char)  | 櫃員代號           |    |
|     | FTTXR_TXN_SER_CODE       | VARCHAR2(7 char)  | 交易流水號          |    |
|     | FTTXR_SUP_CODE_1         | VARCHAR2(6 char)  | 主管代號1_1        |    |
|     | FTTXR_SUP_CODE_2         | VARCHAR2(6 char)  | 主管代號2          |    |
|     | FTTXR_TXN_TIME           | VARCHAR2(6 char)  | 交易時間           |    |
|     | FTTXR_TXN_STATUS         | VARCHAR2(1 char)  | 交易狀態           |    |
|     | FTTXR_PAY_INT_CNT        | NUMBER(2,0)       | 付息次數           |    |
|     | FTTXR_PDSO_CNT           | NUMBER(2,0)       | 存入次數_零存        |    |
|     | FTTXR_DB_CR_CODE         | VARCHAR2(1 char)  | 借貸別            |    |
|     | FTTXR_TXN_AMT            | NUMBER(15,2)      | 交易金額_存單金額      |    |
|     | FTTXR_ACC_BAL            | NUMBER(15,2)      | 存單餘額           |    |
|     | FTTXR_ST_INT_DATE        | DATE              | 起息日            |    |
|     | FTTXR_CS_IMP_INT         | NUMBER(15,2)      | 零存本次應補繳延遲息     |    |
|     | FTTXR_CS_AF_DAYS         | NUMBER(2,0)       | 零存補繳延遲息天數      |    |
|     | FTTXR_TXN_INT            | NUMBER(15,2)      | 應付利息           |    |
|     | FTTXR_TAX_BAL            | NUMBER(15,2)      | 代扣稅款           |    |
|     | FTTXR_TAX_STAMP          | NUMBER(15,2)      | 代扣印花稅款         |    |
|     | FTTXR_INSFEE_AMT         | NUMBER(10,2)      | 代扣健保費          |    |
|     | FTTXR_NT_TXN_INT         | NUMBER(13,0)      | 應付利息_TWD       |    |
|     | FTTXR_NT_TAX_BAL         | NUMBER(13,0)      | 代扣稅款_TWD       |    |
|     | FTTXR_NT_TAX_STAMP       | NUMBER(13,0)      | 代扣印花稅款_TWD     |    |
|     | FTTXR_NT_INSFEE_AMT      | NUMBER(8,0)       | 代扣健保費_TWD      |    |
|     | FTTXR_TRAN_ACC           | VARCHAR2(13 char) | 轉帳帳號           |    |
|     | FTTXR_FREE_BAL           | NUMBER(10,0)      | 累計免扣證金額        |    |
|     | FTTXR_IF_RECVI_INT       | VARCHAR2(1 char)  | 超前取息收回利息旗標     |    |
|     | FTTXR_MEMO               | VARCHAR2(6 char)  | 摘要             |    |
|     | FTTXR_RATE_TYPE          | VARCHAR2(1 char)  | 利率型態           |    |
|     | FTTXR_INT_GAP            | NUMBER(7,5)       | 利率差幅           |    |
|     | FTTXR_NOT_PAY_INT_FLG    | VARCHAR2(1 char)  | 設質未領息旗標        |    |
|     | FTTXR_REV_BR_NO          | VARCHAR2(4 char)  | 收件分行           |    |
|     | FTTXR_TXN_XCRT           | NUMBER(11,6)      | 成交匯率           |    |
|     | FTTXR_CHG_XCRT           | NUMBER(11,6)      | 換算匯率           |    |
|     | FTTXR_CST_XCRT           | NUMBER(11,6)      | 成本匯率           |    |
|     | FTTXR_CENT_CODE          | VARCHAR2(4 char)  | 區域中心           |    |
|     | FTTXR_SERVICE_AO         | VARCHAR2(6 char)  | AO代號           |    |
|     | FTTXR_NEG_PROC           | VARCHAR2(1 char)  | 議價處理區分         |    |
|     | FTTXR_NEG_NO             | VARCHAR2(6 char)  | 議價編號           |    |
|     | FTTXR_NEG_BS             | VARCHAR2(1 char)  | 買賣區分           |    |
|     | FTTXR_NEG_CURCD          | VARCHAR2(3 char)  | 議價幣別           |    |
|     | FTTXR_NEG_AMT            | NUMBER(15,2)      | 議價成交金額         |    |
|     | FTTXR_TMU_TXNNO          | VARCHAR2(16 char) | 交易編號           |    |
|     | FTTXR_TMU_REFNO          | VARCHAR2(16 char) | 水單編號           |    |
|     | FTTXR_TMU_SETTLE_AMT     | NUMBER(15,2)      | 交割金額           |    |
|     | FTTXR_TMU_RELATIVE_CURCD | VARCHAR2(3 char)  | 相對幣別           |    |
|     | FTTXR_TMU_SETTLE_NTMAT   | NUMBER(15,2)      | 交割臺幣金額         |    |
|     | FTTXR_TMU_TXN_KIND       | VARCHAR2(1 char)  | 交易別            |    |
|     | FTTXR_TMU_CST_XCRT       | NUMBER(11,6)      | 成本匯率           |    |
|     | FTTXR_TMU_TXN_XCRT       | NUMBER(11,6)      | 成交匯率           |    |
|     | FTTXR_TMU_KIND           | VARCHAR2(1 char)  | 交易性質_央媒        |    |
|     | FTTXR_CANCEL_NO          | VARCHAR2(16 char) | 對台聯往銷帳編號       |    |
|     | FTTXR_SKL_FLAG           | VARCHAR2(1 char)  | 是否為新壽客戶        |    |
|     | FTTXR_NCAPT_FLAG         | VARCHAR2(1 char)  | 是否為新資金         |    |
|     | FTTXR_CHANNEL            | VARCHAR2(2 char)  | 通路別            |    |
|     | FTTXR_COMM_TXNMEMO       | VARCHAR2(2 char)  | 資金來源_去處        |    |
|     | FTTXR_COUNTRY_CODE       | VARCHAR2(2 char)  | 國別代碼           |    |
|     | FTTXR_ORG_TXN_ID         | VARCHAR2(5 char)  | 原始交易代號         |    |
|     | FTTXR_MACCNO1            | VARCHAR2(13 char) | 轉帳之對方帳號        |    |
|     | FTTXR_MACCNO2            | VARCHAR2(13 char) | 轉帳之對方帳號        |    |
|     | FTTXR_MACCNO3            | VARCHAR2(13 char) | 轉帳之對方帳號        |    |
|     | FTTXR_REMARK             | VARCHAR2(16 char) | 備註             |    |
|     | FTTXR_INT_RATE           | NUMBER(7,5)       | 利率             |    |
|     | FTTXR_DUE_DATE           | DATE              | 存單到期日          |    |
|     | FTTXR_ACC_SUB_CODE       | VARCHAR2(4 char)  | 對應會計子目代號       |    |
|     | FTTXR_TXN_NTAMT          | NUMBER(13,0)      | 交易金額折台幣        |    |
|     | FTTXR_CONS_NO            | VARCHAR2(6 char)  | 匯差理專           |    |
|     | FTTXR_CASH_AMT           | NUMBER(13,0)      | 台幣現金交易金額       |    |
|     | FTTXR_ACC_FLAG           | VARCHAR2(1 char)  | 帳務記號           |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間         |