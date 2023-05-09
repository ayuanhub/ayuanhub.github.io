---
sidebar_position: 12
title: 外幣存款-活存(CSFS)
---
### VW_ODS_D_ACB0C66
#### 兌換損益資料檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TXN_BR                   | VARCHAR2(4 char)  | 交易行代碼         |    |
|     | BUSI_DATE                | DATE              | 記帳日           |    |
|     | RM_CODE                  | VARCHAR2(16 char) | 交易編號          |    |
|     | CURR_CODE                | VARCHAR2(3 char)  | 幣別            |    |
|     | TXN_AMT                  | NUMBER(19,3)      | 交易金額          |    |
|     | TRAN_RATE                | NUMBER(11,6)      | 成交匯率          |    |
|     | COST_RATE                | NUMBER(11,6)      | 成本匯率          |    |
|     | COMP_AMT                 | NUMBER(19,3)      | 損益分配          |    |
|     | ID_CODE                  | VARCHAR2(11 char) | ID            |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_ACBAC66
#### 兌換損益資料檔(DBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TXN_BR                   | VARCHAR2(4 char)  | 交易行代碼         |    |
|     | BUSI_DATE                | DATE              | 記帳日           |    |
|     | RM_CODE                  | VARCHAR2(16 char) | 交易編號          |    |
|     | CURR_CODE                | VARCHAR2(3 char)  | 幣別            |    |
|     | TXN_AMT                  | NUMBER(19,3)      | 交易金額          |    |
|     | TRAN_RATE                | NUMBER(11,6)      | 成交匯率          |    |
|     | COST_RATE                | NUMBER(11,6)      | 成本匯率          |    |
|     | COMP_AMT                 | NUMBER(19,3)      | 損益分配          |    |
|     | ID_CODE                  | VARCHAR2(11 char) | ID            |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_ACDWFXH
#### 外匯會計歷史明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | ACFXH_BUSI_DATE          | DATE              | 記帳日           |    |
|     | ACFXH_TXN_BR             | VARCHAR2(4 char)  | 交易行           |    |
|     | ACFXH_DIV_CODE           | VARCHAR2(1 char)  | 部別            |    |
|     | ACFXH_CHAN_FLAG          | VARCHAR2(1 char)  | 資料來源          |    |
|     | ACFXH_CASH_NO            | VARCHAR2(7 char)  | 櫃員檔序號         |    |
|     | ACFXH_BUSI_CODE          | VARCHAR2(2 char)  | 業務代碼          |    |
|     | ACFXH_LIQNO              | VARCHAR2(3 char)  | 央行清算代碼        |    |
|     | ACFXH_CUST_NO            | VARCHAR2(6 char)  | 顧客號碼          |    |
|     | ACFXH_MAST_NO            | VARCHAR2(20 char) | 交易主檔編號        |    |
|     | ACFXH_ACC_TYPE           | VARCHAR2(2 char)  | 會計科子目屬性       |    |
|     | ACFXH_DUE_DATE           | DATE              | 到期日           |    |
|     | ACFXH_AGENT_BR           | VARCHAR2(4 char)  | 代理行           |    |
|     | ACFXH_ACC_BR             | VARCHAR2(4 char)  | 記帳行           |    |
|     | ACFXH_ACC_CODE           | VARCHAR2(10 char) | 科子細目代碼        |    |
|     | ACFXH_CURR_CODE          | VARCHAR2(3 char)  | 幣別            |    |
|     | ACFXH_DBCR_FLAG          | VARCHAR2(1 char)  | 借貸區分          |    |
|     | ACFXH_TXN_AMT            | NUMBER(15,2)      | 金額            |    |
|     | ACFXH_MEMO_1             | VARCHAR2(40 char) | 會計摘要一         |    |
|     | ACFXH_MEMO_2             | VARCHAR2(40 char) | 會計摘要二         |    |
|     | ACFXH_SAVE_BR            | VARCHAR2(5 char)  | 存匯行代碼         |    |
|     | ACFXH_MID_RATE           | NUMBER(12,7)      | 掛牌匯率_中價       |    |
|     | ACFXH_COST_RATE          | NUMBER(12,7)      | 成本匯率_利率       |    |
|     | ACFXH_TRAN_RATE          | NUMBER(12,7)      | 成交匯率_利率       |    |
|     | ACFXH_IN_DATE            | DATE              | 輸入日期          |    |
|     | ACFXH_IN_TIME            | VARCHAR2(6 char)  | 輸入時間          |    |
|     | ACFXH_TLR_CODE           | VARCHAR2(10 char) | 輸入經辦          |    |
|     | ACFXH_GREEN_DATE         | DATE              | 放行日期          |    |
|     | ACFXH_GREEN_TIME         | VARCHAR2(6 char)  | 放行時間          |    |
|     | ACFXH_GREEN_SUP          | VARCHAR2(10 char) | 放行主管          |    |
|     | ACFXH_TXN_STAT           | VARCHAR2(1 char)  | 是否沖正          |    |
|     | ACFXH_TXN_DATE           | DATE              | 營業日期          |    |
|     | ACFXH_ID_CODE            | VARCHAR2(11 char) | 統一編號          |    |
|     | ACFXH_AREA_CODE          | VARCHAR2(4 char)  | 區域中心          |    |
|     | ACFXH_AGENT_CODE         | VARCHAR2(4 char)  | 代理行_外指行使用     |    |
|     | ACFXH_ACC_ID_NO          | VARCHAR2(13 char) | 連動外匯活存帳號      |    |
|     | ACFXH_HANDLE_BR          | VARCHAR2(4 char)  | 代辦行           |    |
|     | ACFXH_BARGAIN_NO         | VARCHAR2(6 char)  | 議價編號          |    |
|     | ACFXH_CLOSING_NO         | VARCHAR2(20 char) | 各業務交割編號       |    |
|     | ACFXH_WRITE_NO           | VARCHAR2(16 char) | 對台聯往銷帳編號      |    |
|     | ACFXH_RM_CODE            | VARCHAR2(16 char) | 水單編號          |    |
|     | ACFXH_TXN_ID             | VARCHAR2(5 char)  | 交易代碼          |    |
|     | ACFXH_CENT_CODE          | VARCHAR2(4 char)  | 利潤中心          |    |
|     | ACFXH_RCV_BR             | VARCHAR2(4 char)  | 對方行           |    |
|     | ACFXH_CHC_FLAG           | VARCHAR2(1 char)  | 幣別轉換          |    |
|     | ACFXH_CHC_CURR           | VARCHAR2(3 char)  | 對方幣別          |    |
|     | ACFXH_SALE_KIND          | VARCHAR2(1 char)  | 報價方式          |    |
|     | ACFXH_DIST_AMT           | NUMBER(15,2)      | 兌換損益分配金額      |    |
|     | ACFXH_AO_TLR             | VARCHAR2(6 char)  | AO櫃員          |    |
|     | ACFXH_FSFC_BR_1          | VARCHAR2(4 char)  | 收付欄_單位別1      |    |
|     | ACFXH_FSFC_AMT_1         | NUMBER(15,2)      | 收付欄_金額1       |    |
|     | ACFXH_FSFC_BR_2          | VARCHAR2(4 char)  | 收付欄_單位別2      |    |
|     | ACFXH_FSFC_AMT_2         | NUMBER(15,2)      | 收付欄_金額2       |    |
|     | ACFXH_FSFC_BR_3          | VARCHAR2(4 char)  | 收付欄_單位別3      |    |
|     | ACFXH_FSFC_AMT_3         | NUMBER(15,2)      | 收付欄_金額3       |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSBLD
#### 外匯帳戶每日餘額檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSBLD_CSTFG              | VARCHAR2(1 char)  | 活/定存記號        |    |
| PK  | FSBLD_ACC_ID_NO          | VARCHAR2(13 char) | 帳號            |    |
| PK  | FSBLD_YYMMDD             | DATE              | 年月日           |    |
| PK  | FSBLD_CURCD              | VARCHAR2(3 char)  | 幣別            |    |
|     | FSBLD_AVBAL              | NUMBER(7,5)       | 每日利率          |    |
|     | FSBLD_AVBAL_INT          | NUMBER(15,2)      | 活/定存每日餘額      |    |
|     | FSBLD_INT_RAT            | NUMBER(15,2)      | 活存計息金額        |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSCST
#### 外匯活存帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSCST_ACC_ID_NO          | VARCHAR2(13 char) | 帳號            |    |
|     | FSCST_BR_CODE            | VARCHAR2(4 char)  | 記帳單位/外指行      |    |
|     | FSCST_OWN_BR_CODE        | VARCHAR2(4 char)  | 所屬單位          |    |
|     | FSCST_PROD_NO            | VARCHAR2(7 char)  | 存戶商品編號        |    |
|     | FSCST_ID_CODE            | VARCHAR2(11 char) | 統一編號/身分證字號    |    |
|     | FSCST_CUST_STAT          | VARCHAR2(2 char)  | 帳戶狀態          |    |
|     | FSCST_MS_STAT            | VARCHAR2(1 char)  | 存戶存款類別        |    |
|     | FSCST_PASSBOOK_STATUS    | VARCHAR2(1 char)  | 存摺記號          |    |
|     | FSCST_UNPOST_FLAG        | VARCHAR2(1 char)  | 存摺合併記號        |    |
|     | FSCST_NET_STAT           | VARCHAR2(1 char)  | 全行提款服務        |    |
|     | FSCST_NOTICE_KIND        | VARCHAR2(1 char)  | 聯絡/不聯絡        |    |
|     | FSCST_CHK_SHEET_CODE     | VARCHAR2(1 char)  | 客戶對帳單記號       |    |
|     | FSCST_HOLD_MARK          | VARCHAR2(1 char)  | 全戶止扣記號        |    |
|     | FSCST_PB_LOSE_STAT       | VARCHAR2(1 char)  | 存摺掛失狀態        |    |
|     | FSCST_CHOP_LOSE_STAT     | VARCHAR2(1 char)  | 印鑑掛失狀態        |    |
|     | FSCST_TXN_STOP_STAT      | VARCHAR2(1 char)  | 暫停交易狀態        |    |
|     | FSCST_DEAD_STAT          | VARCHAR2(1 char)  | 死亡事故狀態        |    |
|     | FSCST_COURT_STAT         | VARCHAR2(1 char)  | 法院扣押          |    |
|     | FSCST_HOLD_STAT          | VARCHAR2(1 char)  | 本行設定          |    |
|     | FSCST_WARN_STAT          | VARCHAR2(1 char)  | 警示戶狀態         |    |
|     | FSCST_OTHER_STAT         | VARCHAR2(1 char)  | 其他狀態          |    |
|     | FSCST_INT_AWAY_FLG       | VARCHAR2(1 char)  | 拋棄利息請求權       |    |
|     | FSCST_JOIN_STAT          | VARCHAR2(1 char)  | 聯名戶           |    |
|     | FSCST_LN_STATUS          | VARCHAR2(1 char)  | 質借記號          |    |
|     | FSCST_LN_KIND            | VARCHAR2(1 char)  | 質借成數類別        |    |
|     | FSCST_NAME_FLG           | VARCHAR2(1 char)  | 別名記號          |    |
|     | FSCST_ENAME_FLG          | VARCHAR2(1 char)  | 英文別名記號        |    |
|     | FSCST_ADDR_FLG           | VARCHAR2(1 char)  | 帳戶通訊住址記號      |    |
|     | FSCST_EADDR_FLG          | VARCHAR2(1 char)  | 帳戶通訊英文住址記號    |    |
|     | FSCST_TEL_FLG            | VARCHAR2(1 char)  | 帳戶通訊電話記號      |    |
|     | FSCST_OD_INT_TYPE        | VARCHAR2(1 char)  | 透支積數計息型態      |    |
|     | FSCST_ACC_CHAR_CODE      | VARCHAR2(2 char)  | 性質別           |    |
|     | FSCST_MOVE_OWN_BR_CODE   | VARCHAR2(4 char)  | 移出所屬行         |    |
|     | FSCST_MOVE_BR_CODE       | VARCHAR2(4 char)  | 移出記帳行         |    |
|     | FSCST_BR_AGENT           | VARCHAR2(4 char)  | 代理行           |    |
|     | FSCST_CUR_CNT            | VARCHAR2(2 char)  | 活存筆數          |    |
|     | FSCST_TI_CNT             | VARCHAR2(4 char)  | 綜定筆數          |    |
|     | FSCST_TXN_SER_NO         | VARCHAR2(6 char)  | 交易記錄序號        |    |
|     | FSCST_HOLD_SER_NO        | VARCHAR2(2 char)  | 事故序號          |    |
|     | FSCST_HOLD_CNT           | VARCHAR2(4 char)  | 有效全戶止扣筆數      |    |
|     | FSCST_CENT_CODE          | VARCHAR2(4 char)  | 利潤中心          |    |
|     | FSCST_ENLIST_TLR         | VARCHAR2(6 char)  | 招募行員          |    |
|     | FSCST_SERVICE_AO         | VARCHAR2(6 char)  | AO_CODE       |    |
|     | FSCST_OPEN_DATE          | DATE              | 原始開戶日         |    |
|     | FSCST_L_BUSI_DATE        | DATE              | 上次交易日         |    |
|     | FSCST_MODIF_DATE         | DATE              | 資料維護日期        |    |
|     | FSCST_AGBR_WDRAW_CUR     | VARCHAR2(3 char)  | 全行提款限額折算幣別    |    |
|     | FSCST_AGBR_WDRAW_LIMIT   | NUMBER(15,2)      | 全行提款限額        |    |
|     | FSCST_TD_AGBR_DB_AMT     | NUMBER(15,2)      | 當日全行提款累計金額    |    |
|     | FSCST_TD_TXN_DB_AMT      | NUMBER(15,2)      | 本日支出累計金額_TWD  |    |
|     | FSCST_TD_TXN_CR_AMT      | NUMBER(15,2)      | 本日存入累計金額_TWD  |    |
|     | FSCST_TD_CASH_DB_AMT     | NUMBER(15,2)      | 本日提領現金累計額_TWD |    |
|     | FSCST_TD_CASH_CR_AMT     | NUMBER(15,2)      | 本日存入現金累計額_TWD |    |
|     | FSCST_PB_VER_NO          | VARCHAR2(2 char)  | 存摺版本          |    |
|     | FSCST_PB_ID              | VARCHAR2(2 char)  | 摺號            |    |
|     | FSCST_PB_PAGE            | VARCHAR2(2 char)  | 存褶頁次          |    |
|     | FSCST_PB_LINE            | VARCHAR2(2 char)  | 存褶行位          |    |
|     | FSCST_UNPOST_DATE        | DATE              | 最後已補登交易日      |    |
|     | FSCST_UNPOST_SER_NO      | VARCHAR2(6 char)  | 最後已補登序號       |    |
|     | FSCST_UNPOST_CNT         | VARCHAR2(4 char)  | 未登摺筆數         |    |
|     | FSCST_MS_PAGE            | VARCHAR2(2 char)  | 綜定存摺頁次        |    |
|     | FSCST_MS_LINE            | VARCHAR2(2 char)  | 綜定列印行次        |    |
|     | FSCST_MS_UPOST_DATE      | DATE              | 綜定最後已補登交易日    |    |
|     | FSCST_MS_UPOST_CNT       | VARCHAR2(4 char)  | 綜定未登摺筆數       |    |
|     | FSCST_CUR_CODE_1         | VARCHAR2(3 char)  | 幣別代號_1        |    |
|     | FSCST_CUR_CT_PER_1       | VARCHAR2(3 char)  | 原幣存單質借成數_1    |    |
|     | FSCST_CUR_BAL_1          | NUMBER(15,2)      | 幣別餘額_1        |    |
|     | FSCST_CUR_CODE_2         | VARCHAR2(3 char)  | 幣別代號_2        |    |
|     | FSCST_CUR_CT_PER_2       | VARCHAR2(3 char)  | 原幣存單質借成數_2    |    |
|     | FSCST_CUR_BAL_2          | NUMBER(15,2)      | 幣別餘額_2        |    |
|     | FSCST_CUR_CODE_3         | VARCHAR2(3 char)  | 幣別代號_3        |    |
|     | FSCST_CUR_CT_PER_3       | VARCHAR2(3 char)  | 原幣存單質借成數_3    |    |
|     | FSCST_CUR_BAL_3          | NUMBER(15,2)      | 幣別餘額_3        |    |
|     | FSCST_CUR_CODE_4         | VARCHAR2(3 char)  | 幣別代號_4        |    |
|     | FSCST_CUR_CT_PER_4       | VARCHAR2(3 char)  | 原幣存單質借成數_4    |    |
|     | FSCST_CUR_BAL_4          | NUMBER(15,2)      | 幣別餘額_4        |    |
|     | FSCST_CUR_CODE_5         | VARCHAR2(3 char)  | 幣別代號_5        |    |
|     | FSCST_CUR_CT_PER_5       | VARCHAR2(3 char)  | 原幣存單質借成數_5    |    |
|     | FSCST_CUR_BAL_5          | NUMBER(15,2)      | 幣別餘額_5        |    |
|     | FSCST_CUR_CODE_6         | VARCHAR2(3 char)  | 幣別代號_6        |    |
|     | FSCST_CUR_CT_PER_6       | VARCHAR2(3 char)  | 原幣存單質借成數_6    |    |
|     | FSCST_CUR_BAL_6          | NUMBER(15,2)      | 幣別餘額_6        |    |
|     | FSCST_CUR_CODE_7         | VARCHAR2(3 char)  | 幣別代號_7        |    |
|     | FSCST_CUR_CT_PER_7       | VARCHAR2(3 char)  | 原幣存單質借成數_7    |    |
|     | FSCST_CUR_BAL_7          | NUMBER(15,2)      | 幣別餘額_7        |    |
|     | FSCST_CUR_CODE_8         | VARCHAR2(3 char)  | 幣別代號_8        |    |
|     | FSCST_CUR_CT_PER_8       | VARCHAR2(3 char)  | 原幣存單質借成數_8    |    |
|     | FSCST_CUR_BAL_8          | NUMBER(15,2)      | 幣別餘額_8        |    |
|     | FSCST_CUR_CODE_9         | VARCHAR2(3 char)  | 幣別代號_9        |    |
|     | FSCST_CUR_CT_PER_9       | VARCHAR2(3 char)  | 原幣存單質借成數_9    |    |
|     | FSCST_CUR_BAL_9          | NUMBER(15,2)      | 幣別餘額_9        |    |
|     | FSCST_CUR_CODE_10        | VARCHAR2(3 char)  | 幣別代號_10       |    |
|     | FSCST_CUR_CT_PER_10      | VARCHAR2(3 char)  | 原幣存單質借成數_10   |    |
|     | FSCST_CUR_BAL_10         | NUMBER(15,2)      | 幣別餘額_10       |    |
|     | FSCST_CUR_CODE_11        | VARCHAR2(3 char)  | 幣別代號_11       |    |
|     | FSCST_CUR_CT_PER_11      | VARCHAR2(3 char)  | 原幣存單質借成數_11   |    |
|     | FSCST_CUR_BAL_11         | NUMBER(15,2)      | 幣別餘額_11       |    |
|     | FSCST_CUR_CODE_12        | VARCHAR2(3 char)  | 幣別代號_12       |    |
|     | FSCST_CUR_CT_PER_12      | VARCHAR2(3 char)  | 原幣存單質借成數_12   |    |
|     | FSCST_CUR_BAL_12         | NUMBER(15,2)      | 幣別餘額_12       |    |
|     | FSCST_CUR_CODE_13        | VARCHAR2(3 char)  | 幣別代號_13       |    |
|     | FSCST_CUR_CT_PER_13      | VARCHAR2(3 char)  | 原幣存單質借成數_13   |    |
|     | FSCST_CUR_BAL_13         | NUMBER(15,2)      | 幣別餘額_13       |    |
|     | FSCST_CUR_CODE_14        | VARCHAR2(3 char)  | 幣別代號_14       |    |
|     | FSCST_CUR_CT_PER_14      | VARCHAR2(3 char)  | 原幣存單質借成數_14   |    |
|     | FSCST_CUR_BAL_14         | NUMBER(15,2)      | 幣別餘額_14       |    |
|     | FSCST_CUR_CODE_15        | VARCHAR2(3 char)  | 幣別代號_15       |    |
|     | FSCST_CUR_CT_PER_15      | VARCHAR2(3 char)  | 原幣存單質借成數_15   |    |
|     | FSCST_CUR_BAL_15         | NUMBER(15,2)      | 幣別餘額_15       |    |
|     | FSCST_CUR_CODE_16        | VARCHAR2(3 char)  | 幣別代號_16       |    |
|     | FSCST_CUR_CT_PER_16      | VARCHAR2(3 char)  | 原幣存單質借成數_16   |    |
|     | FSCST_CUR_BAL_16         | NUMBER(15,2)      | 幣別餘額_16       |    |
|     | FSCST_CUR_CODE_17        | VARCHAR2(3 char)  | 幣別代號_17       |    |
|     | FSCST_CUR_CT_PER_17      | VARCHAR2(3 char)  | 原幣存單質借成數_17   |    |
|     | FSCST_CUR_BAL_17         | NUMBER(15,2)      | 幣別餘額_17       |    |
|     | FSCST_CUR_CODE_18        | VARCHAR2(3 char)  | 幣別代號_18       |    |
|     | FSCST_CUR_CT_PER_18      | VARCHAR2(3 char)  | 原幣存單質借成數_18   |    |
|     | FSCST_CUR_BAL_18         | NUMBER(15,2)      | 幣別餘額_18       |    |
|     | FSCST_CUR_CODE_19        | VARCHAR2(3 char)  | 幣別代號_19       |    |
|     | FSCST_CUR_CT_PER_19      | VARCHAR2(3 char)  | 原幣存單質借成數_19   |    |
|     | FSCST_CUR_BAL_19         | NUMBER(15,2)      | 幣別餘額_19       |    |
|     | FSCST_CUR_CODE_20        | VARCHAR2(3 char)  | 幣別代號_20       |    |
|     | FSCST_CUR_CT_PER_20      | VARCHAR2(3 char)  | 原幣存單質借成數_20   |    |
|     | FSCST_CUR_BAL_20         | NUMBER(15,2)      | 幣別餘額_20       |    |
|     | FSCST_CUR_CODE_21        | VARCHAR2(3 char)  | 幣別代號_21       |    |
|     | FSCST_CUR_CT_PER_21      | VARCHAR2(3 char)  | 原幣存單質借成數_21   |    |
|     | FSCST_CUR_BAL_21         | NUMBER(15,2)      | 幣別餘額_21       |    |
|     | FSCST_CUR_CODE_22        | VARCHAR2(3 char)  | 幣別代號_22       |    |
|     | FSCST_CUR_CT_PER_22      | VARCHAR2(3 char)  | 原幣存單質借成數_22   |    |
|     | FSCST_CUR_BAL_22         | NUMBER(15,2)      | 幣別餘額_22       |    |
|     | FSCST_CUR_CODE_23        | VARCHAR2(3 char)  | 幣別代號_23       |    |
|     | FSCST_CUR_CT_PER_23      | VARCHAR2(3 char)  | 原幣存單質借成數_23   |    |
|     | FSCST_CUR_BAL_23         | NUMBER(15,2)      | 幣別餘額_23       |    |
|     | FSCST_CUR_CODE_24        | VARCHAR2(3 char)  | 幣別代號_24       |    |
|     | FSCST_CUR_CT_PER_24      | VARCHAR2(3 char)  | 原幣存單質借成數_24   |    |
|     | FSCST_CUR_BAL_24         | NUMBER(15,2)      | 幣別餘額_24       |    |
|     | FSCST_CUR_CODE_25        | VARCHAR2(3 char)  | 幣別代號_25       |    |
|     | FSCST_CUR_CT_PER_25      | VARCHAR2(3 char)  | 原幣存單質借成數_25   |    |
|     | FSCST_CUR_BAL_25         | NUMBER(15,2)      | 幣別餘額_25       |    |
|     | FSCST_CUR_CODE_26        | VARCHAR2(3 char)  | 幣別代號_26       |    |
|     | FSCST_CUR_CT_PER_26      | VARCHAR2(3 char)  | 原幣存單質借成數_26   |    |
|     | FSCST_CUR_BAL_26         | NUMBER(15,2)      | 幣別餘額_26       |    |
|     | FSCST_CUR_CODE_27        | VARCHAR2(3 char)  | 幣別代號_27       |    |
|     | FSCST_CUR_CT_PER_27      | VARCHAR2(3 char)  | 原幣存單質借成數_27   |    |
|     | FSCST_CUR_BAL_27         | NUMBER(15,2)      | 幣別餘額_27       |    |
|     | FSCST_CUR_CODE_28        | VARCHAR2(3 char)  | 幣別代號_28       |    |
|     | FSCST_CUR_CT_PER_28      | VARCHAR2(3 char)  | 原幣存單質借成數_28   |    |
|     | FSCST_CUR_BAL_28         | NUMBER(15,2)      | 幣別餘額_28       |    |
|     | FSCST_CUR_CODE_29        | VARCHAR2(3 char)  | 幣別代號_29       |    |
|     | FSCST_CUR_CT_PER_29      | VARCHAR2(3 char)  | 原幣存單質借成數_29   |    |
|     | FSCST_CUR_BAL_29         | NUMBER(15,2)      | 幣別餘額_29       |    |
|     | FSCST_CUR_CODE_30        | VARCHAR2(3 char)  | 幣別代號_30       |    |
|     | FSCST_CUR_CT_PER_30      | VARCHAR2(3 char)  | 原幣存單質借成數_30   |    |
|     | FSCST_CUR_BAL_30         | NUMBER(15,2)      | 幣別餘額_30       |    |
|     | FSCST_PROJECT_CODE       | VARCHAR2(4 char)  | 券商代號          |    |
|     | FSCST_COUNTER_FLG        | VARCHAR2(1 char)  | 是否臨櫃開戶        |    |
|     | FSCST_CLS_DATE           | DATE              | 銷戶日           |    |
|     | FSCST_CLS_BR_CODE        | VARCHAR2(4 char)  | 銷戶單位          |    |
|     | FSCST_TRANS_DATE         | DATE              | 移存日           |    |
|     | FSCST_VIR_FLAG           | VARCHAR2(1 char)  | 虛擬帳號記號        |    |
|     | FSCST_COVER_PRINT        | VARCHAR2(1 char)  | 新開戶存摺封面列印記號   |    |
|     | FSCST_AREA_CODE          | VARCHAR2(4 char)  | 區域中心          |    |
|     | FSCST_OBU_STOP_FLG       | VARCHAR2(2 char)  | OBU凍結戶        |    |
|     | FSCST_ACCOUNT_PURPOSE    | VARCHAR2(4 char)  | 開戶目的          |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSDWINF
#### 外匯準備利率及利率檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSINF_TXN_DATE           | DATE              | 調整日期          |    |
| PK  | FSINF_KIND_CODE          | VARCHAR2(2 char)  | 利率代碼          |    |
| PK  | FSINF_CURR_CODE          | VARCHAR2(3 char)  | 幣別            |    |
|     | FSINF_RATE               | NUMBER(7,5)       | 利率            |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSIRM
#### 外存利率議價/模組主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSIRM_IRT_TYPE           | VARCHAR2(1 char)  | 利率類別          |    |
| PK  | FSIRM_IRT_SEQ_NO         | VARCHAR2(11 char) | 利率編號          |    |
|     | FSIRM_MEMO               | VARCHAR2(40 char) | 利率模組說明        |    |
|     | FSIRM_START_DATE         | DATE              | 生效起日/詢價日      |    |
|     | FSIRM_DUE_DATE           | DATE              | 生效止日/詢價有效止日   |    |
|     | FSIRM_L_BUSI_DATE        | DATE              | 最後生效日         |    |
|     | FSIRM_UN_START_DATE      | DATE              | 未確認生效起日       |    |
|     | FSIRM_UN_DUE_DATE        | DATE              | 未確認生效止日       |    |
|     | FSIRM_VER_NO             | VARCHAR2(1 char)  | 資料版本          |    |
|     | FSIRM_COF_STAT           | VARCHAR2(1 char)  | 利率模組狀態        |    |
|     | FSIRM_USE_STAT           | VARCHAR2(1 char)  | 啟用狀態          |    |
|     | FSIRM_USE_CNT            | NUMBER(4,0)       | 啟用筆數          |    |
|     | FSIRM_USE_TYPE           | VARCHAR2(1 char)  | 使用對象          |    |
|     | FSIRM_OBU_FLAG           | VARCHAR2(1 char)  | OBU記號         |    |
|     | FSIRM_TERM_FLAG          | VARCHAR2(1 char)  | 依期間優惠記號       |    |
|     | FSIRM_TERM_TYPE          | VARCHAR2(1 char)  | 定存條件類別        |    |
|     | FSIRM_COND_TYPE          | VARCHAR2(1 char)  | 優惠分類條件        |    |
|     | FSIRM_COND_PRD           | VARCHAR2(1 char)  | 條件變動週期        |    |
|     | FSIRM_COND_DATE          | VARCHAR2(4 char)  | 條件變動週期基準日     |    |
|     | FSIRM_INT_AMT            | VARCHAR2(1 char)  | 計息金額          |    |
|     | FSIRM_INT_TYPE           | VARCHAR2(1 char)  | 計息方式          |    |
|     | FSIRM_LIM_FLAG           | VARCHAR2(1 char)  | 利率上下限制        |    |
|     | FSIRM_RATE_TYPE          | VARCHAR2(1 char)  | 利率型態          |    |
|     | FSIRM_IR_PRD             | VARCHAR2(1 char)  | 利率定期週期        |    |
|     | FSIRM_DETA_TYPE          | VARCHAR2(1 char)  | 讀取明細檔         |    |
|     | FSIRM_PREM_CUR_FLAG      | VARCHAR2(2 char)  | 單幣別記號         |    |
|     | FSIRM_PREM_CUR           | VARCHAR2(30 char) | 幣別記號          |    |
|     | FSIRM_PREM_PRD1          | VARCHAR2(60 char) | 定存期間          |    |
|     | FSIRM_PREM_TERM1         | VARCHAR2(60 char) | 定存條件          |    |
|     | FSIRM_NEG_ID_CODE        | VARCHAR2(11 char) | 客戶統一編號        |    |
|     | FSIRM_NEG_OBUFG          | VARCHAR2(1 char)  | OBU案件         |    |
|     | FSIRM_NEG_RELATION       | VARCHAR2(1 char)  | 利害關係人         |    |
|     | FSIRM_NEG_OWN_BR_CO      | VARCHAR2(4 char)  | 議價分行          |    |
|     | FSIRM_NEG_BR_CODE        | VARCHAR2(4 char)  | 記帳分行          |    |
|     | FSIRM_NEG_TYPE           | VARCHAR2(1 char)  | 議價類別          |    |
|     | FSIRM_NEG_USE_TYPE       | VARCHAR2(1 char)  | 啟用類別          |    |
|     | FSIRM_NEG_ACC_ID_NO      | VARCHAR2(16 char) | 啟用帳號/最後啟用存單   |    |
|     | FSIRM_NEG_CURCD          | VARCHAR2(3 char)  | 議價幣別          |    |
|     | FSIRM_NEG_AMT            | NUMBER(15,2)      | 議價金額          |    |
|     | FSIRM_USE_AMT            | NUMBER(15,2)      | 目前已啟用金額       |    |
|     | FSIRM_NEG_TERM           | VARCHAR2(4 char)  | 議價定存期間        |    |
|     | FSIRM_NEG_START_DAT      | DATE              | 議價定存啟用日(控管用)  |    |
|     | FSIRM_NEG_TIME           | NUMBER(4,0)       | 詢價時間          |    |
|     | FSIRM_NEG_COF_TLR        | VARCHAR2(6 char)  | 總行確認櫃員        |    |
|     | FSIRM_NEG_COF_TIME       | NUMBER(4,0)       | 總行確認時間        |    |
|     | FSIRM_NEG_CALFG          | VARCHAR2(1 char)  | 註銷方式          |    |
|     | FSIRM_NEG_CAL_TI         | VARCHAR2(13 char) | 取消啟用存單        |    |
|     | FSIRM_NEG_DISAMT         | NUMBER(13,0)      | 承諾息金額         |    |
|     | FSIRM_NEG_MEMO1          | VARCHAR2(60 char) | 議價備註1(分行備註)   |    |
|     | FSIRM_NEG_MEMO2          | VARCHAR2(60 char) | 議價備註2(分行備註)   |    |
|     | FSIRM_NEG_MEMO3          | VARCHAR2(60 char) | 議價備註3(分行備註)   |    |
|     | FSIRM_NEG_MEMO4          | VARCHAR2(60 char) | 議價備註4(分行備註)   |    |
|     | FSIRM_NEG_MEMO5          | VARCHAR2(60 char) | 議價備註5(總行備註)   |    |
|     | FSIRM_NEG_MEMO6          | VARCHAR2(60 char) | 議價備註6(總行備註)   |    |
|     | FSIRM_PREM_NCOND1        | VARCHAR2(8 char)  | 數值分類條件1       |    |
|     | FSIRM_PREM_RATE_CODE_1   | VARCHAR2(5 char)  | 利率別1          |    |
|     | FSIRM_PREM_INT_RATE_1    | NUMBER(7,5)       | 加減/自訂利率1      |    |
|     | FSIRM_SUBS_INT_RATE_1    | NUMBER(7,5)       | 補貼利率／牌告利率1    |    |
|     | FSIRM_LIM_RATE_CODE_1    | VARCHAR2(5 char)  | 上下限利率別1       |    |
|     | FSIRM_LIM_INT_RATE_1     | NUMBER(7,5)       | 上下限變動利率1      |    |
|     | FSIRM_PREM_NCOND_2       | VARCHAR2(8 char)  | 數值分類條件2       |    |
|     | FSIRM_PREM_RATE_CODE_2   | VARCHAR2(5 char)  | 利率別2          |    |
|     | FSIRM_PREM_INT_RATE_2    | NUMBER(7,5)       | 加減/自訂利率2      |    |
|     | FSIRM_SUBS_INT_RATE_2    | NUMBER(7,5)       | 補貼利率／牌告利率2    |    |
|     | FSIRM_LIM_RATE_CODE_2    | VARCHAR2(5 char)  | 上下限利率別2       |    |
|     | FSIRM_LIM_INT_RATE_2     | NUMBER(7,5)       | 上下限變動利率2      |    |
|     | FSIRM_PREM_NCOND_3       | VARCHAR2(8 char)  | 數值分類條件3       |    |
|     | FSIRM_PREM_RATE_CODE_3   | VARCHAR2(5 char)  | 利率別3          |    |
|     | FSIRM_PREM_INT_RATE_3    | NUMBER(7,5)       | 加減/自訂利率3      |    |
|     | FSIRM_SUBS_INT_RATE_3    | NUMBER(7,5)       | 補貼利率／牌告利率3    |    |
|     | FSIRM_LIM_RATE_CODE_3    | VARCHAR2(5 char)  | 上下限利率別3       |    |
|     | FSIRM_LIM_INT_RATE_3     | NUMBER(7,5)       | 上下限變動利率3      |    |
|     | FSIRM_PREM_NCOND_4       | VARCHAR2(8 char)  | 數值分類條件4       |    |
|     | FSIRM_PREM_RATE_CODE_4   | VARCHAR2(5 char)  | 利率別4          |    |
|     | FSIRM_PREM_INT_RATE_4    | NUMBER(7,5)       | 加減/自訂利率4      |    |
|     | FSIRM_SUBS_INT_RATE_4    | NUMBER(7,5)       | 補貼利率／牌告利率4    |    |
|     | FSIRM_LIM_RATE_CODE_4    | VARCHAR2(5 char)  | 上下限利率別4       |    |
|     | FSIRM_LIM_INT_RATE_4     | NUMBER(7,5)       | 上下限變動利率4      |    |
|     | FSIRM_PREM_NCOND_5       | VARCHAR2(8 char)  | 數值分類條件5       |    |
|     | FSIRM_PREM_RATE_CODE_5   | VARCHAR2(5 char)  | 利率別5          |    |
|     | FSIRM_PREM_INT_RATE_5    | NUMBER(7,5)       | 加減/自訂利率5      |    |
|     | FSIRM_SUBS_INT_RATE_5    | NUMBER(7,5)       | 補貼利率／牌告利率5    |    |
|     | FSIRM_LIM_RATE_CODE_5    | VARCHAR2(5 char)  | 上下限利率別5       |    |
|     | FSIRM_LIM_INT_RATE_5     | NUMBER(7,5)       | 上下限變動利率5      |    |
|     | FSIRM_PREM_NCOND_6       | VARCHAR2(8 char)  | 數值分類條件6       |    |
|     | FSIRM_PREM_RATE_CODE_6   | VARCHAR2(5 char)  | 利率別6          |    |
|     | FSIRM_PREM_INT_RATE_6    | NUMBER(7,5)       | 加減/自訂利率6      |    |
|     | FSIRM_SUBS_INT_RATE_6    | NUMBER(7,5)       | 補貼利率／牌告利率6    |    |
|     | FSIRM_LIM_RATE_CODE_6    | VARCHAR2(5 char)  | 上下限利率別6       |    |
|     | FSIRM_LIM_INT_RATE_6     | NUMBER(7,5)       | 上下限變動利率6      |    |
|     | FSIRM_PREM_NCOND_7       | VARCHAR2(8 char)  | 數值分類條件7       |    |
|     | FSIRM_PREM_RATE_CODE_7   | VARCHAR2(5 char)  | 利率別7          |    |
|     | FSIRM_PREM_INT_RATE_7    | NUMBER(7,5)       | 加減/自訂利率7      |    |
|     | FSIRM_SUBS_INT_RATE_7    | NUMBER(7,5)       | 補貼利率／牌告利率7    |    |
|     | FSIRM_LIM_RATE_CODE_7    | VARCHAR2(5 char)  | 上下限利率別7       |    |
|     | FSIRM_LIM_INT_RATE_7     | NUMBER(7,5)       | 上下限變動利率7      |    |
|     | FSIRM_PREM_NCOND_8       | VARCHAR2(8 char)  | 數值分類條件8       |    |
|     | FSIRM_PREM_RATE_CODE_8   | VARCHAR2(5 char)  | 利率別8          |    |
|     | FSIRM_PREM_INT_RATE_8    | NUMBER(7,5)       | 加減/自訂利率8      |    |
|     | FSIRM_SUBS_INT_RATE_8    | NUMBER(7,5)       | 補貼利率／牌告利率8    |    |
|     | FSIRM_LIM_RATE_CODE_8    | VARCHAR2(5 char)  | 上下限利率別8       |    |
|     | FSIRM_LIM_INT_RATE_8     | NUMBER(7,5)       | 上下限變動利率8      |    |
|     | FSIRM_PREM_NCOND_9       | VARCHAR2(8 char)  | 數值分類條件9       |    |
|     | FSIRM_PREM_RATE_CODE_9   | VARCHAR2(5 char)  | 利率別9          |    |
|     | FSIRM_PREM_INT_RATE_9    | NUMBER(7,5)       | 加減/自訂利率9      |    |
|     | FSIRM_SUBS_INT_RATE_9    | NUMBER(7,5)       | 補貼利率／牌告利率9    |    |
|     | FSIRM_LIM_RATE_CODE_9    | VARCHAR2(5 char)  | 上下限利率別9       |    |
|     | FSIRM_LIM_INT_RATE_9     | NUMBER(7,5)       | 上下限變動利率9      |    |
|     | FSIRM_PREM_NCOND_10      | VARCHAR2(8 char)  | 數值分類條件10      |    |
|     | FSIRM_PREM_RATE_CODE_10  | VARCHAR2(5 char)  | 利率別10         |    |
|     | FSIRM_PREM_INT_RATE_10   | NUMBER(7,5)       | 加減/自訂利率10     |    |
|     | FSIRM_SUBS_INT_RATE_10   | NUMBER(7,5)       | 補貼利率／牌告利率10   |    |
|     | FSIRM_LIM_RATE_CODE_10   | VARCHAR2(5 char)  | 上下限利率別10      |    |
|     | FSIRM_LIM_INT_RATE_10    | NUMBER(7,5)       | 上下限變動利率10     |    |
|     | FSIRM_NEG_ASSIGN_DATE    | DATE              | 詢價指定到期日       |    |
|     | FSIRM_NEG_EXP_FLAG       | VARCHAR2(1 char)  | 詢價權限          |    |
|     | FSIRM_PAY_TYPE           | VARCHAR2(1 char)  | 計息週期          |    |
|     | FSIRM_LETTER_DUE_DA      | DATE              | 設定生效止日        |    |
|     | FSIRM_NEG_ASSIGN_DATE_S  | DATE              | 詢價指定起存日       |    |
|     | FSIRM_NEG_COF_DATE       | DATE              | 總行確認日期        |    |
|     | FSIRM_NEG_INQ_TLR        | VARCHAR2(6 char)  | 查詢列印櫃員        |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSMSM
#### 外匯綜存幣別主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSMSM_ACC_ID_NO          | VARCHAR2(13 char) | 帳號            |    |
| PK  | FSMSM_CURCD              | VARCHAR2(3 char)  | 幣別            |    |
|     | FSMSM_TI_CNT             | NUMBER(4,0)       | 存單筆數          |    |
|     | FSMSM_INT_RATE           | VARCHAR2(5 char)  | 利率別           |    |
|     | FSMSM_OD_IRT_CODE        | VARCHAR2(11 char) | 原幣質借利率編號      |    |
|     | FSMSM_OD_INT_DRATE       | VARCHAR2(5 char)  | 異幣質借利率別       |    |
|     | FSMSM_OD_IRT_DCODE       | VARCHAR2(11 char) | 異幣質借利率編號      |    |
|     | FSMSM_OPEN_DATE          | DATE              | 綜定建檔日期        |    |
|     | FSMSM_CHG_DATE           | DATE              | 上次交易日         |    |
|     | FSMSM_INT_DATE           | DATE              | 上次計息日期        |    |
|     | FSMSM_TD_OD_AMT          | NUMBER(15,2)      | 當日質借餘額        |    |
|     | FSMSM_TI_AMT             | NUMBER(15,2)      | 綜存定存總額        |    |
|     | FSMSM_TD_OD_TTL          | NUMBER(15,2)      | 最高透支額         |    |
|     | FSMSM_OD_CLS_FLG         | VARCHAR2(1 char)  | 質借未結清記號       |    |
|     | FSMSM_OD_ADD_VALUE       | NUMBER(7,5)       | 質借加減利率        |    |
|     | FSMSM_LAST_OD_INT_CODE   | NUMBER(7,5)       | 上次質借利率        |    |
|     | FSMSM_REF_OD_AUM         | NUMBER(17,2)      | 質借平均積數_本期     |    |
|     | FSMSM_MON_REF_OD_AUM     | NUMBER(17,2)      | 本月質借月平均積數     |    |
|     | FSMSM_LMON_REF_OD_AUM    | NUMBER(17,2)      | 上月質借月平均積數     |    |
|     | FSMSM_ADJ_OD_AUM         | NUMBER(17,2)      | 計息積數          |    |
|     | FSMSM_INT_XCRT           | NUMBER(11,6)      | 本期計息匯率        |    |
|     | FSMSM_INT_LN             | NUMBER(15,2)      | 本期放款息         |    |
|     | FSMSM_MN_INT_AMT         | NUMBER(15,2)      | 本月累計應收利息      |    |
|     | FSMSM_AUTI_TI_FLG        | VARCHAR2(1 char)  | 轉存記號          |    |
|     | FSMSM_TR_PRD_NO          | VARCHAR2(7 char)  | 約轉商品編號        |    |
|     | FSMSM_TR_TERM_CODE       | NUMBER(4,0)       | 約定轉存期間別_月     |    |
|     | FSMSM_INT_RATE_TYPE      | VARCHAR2(1 char)  | 轉存存單利率調整型態    |    |
|     | FSMSM_GLAP_RANGE         | NUMBER(7,5)       | 議價利率差幅        |    |
|     | FSMSM_TR_PAY_INT_FLG     | VARCHAR2(1 char)  | 約定領息類別        |    |
|     | FSMSM_REVSER_BAL         | NUMBER(15,2)      | 活期性存款積存金額     |    |
|     | FSMSM_TR_AMT             | NUMBER(15,2)      | 約定轉存定存金額單位    |    |
|     | FSMSM_AUTO_EXTEND_KIND   | VARCHAR2(1 char)  | 約定自動轉期        |    |
|     | FSMSM_OV_OD_INT          | NUMBER(15,0)      | 逾期透支累計利息      |    |
|     | FSMSM_OV_OD_INT_EXT      | NUMBER(15,0)      | 逾期六個月以上透支累計利息 |    |
|     | FSMSM_AUTO_EXTEND_LIMIT  | NUMBER(3,0)       | 約定自動轉期次數      |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSMST
#### 外匯活存幣別主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSMST_ACC_ID_NO          | VARCHAR2(13 char) | 帳號            |    |
| PK  | FSMST_CURCD              | VARCHAR2(3 char)  | 幣別            |    |
|     | FSMST_SET_STAT           | VARCHAR2(2 char)  | 狀態欄           |    |
|     | FSMST_HOLD_CNT           | NUMBER(2,0)       | 有效止扣檔筆數       |    |
|     | FSMST_CUST_STAT          | VARCHAR2(2 char)  | 銷戶記號          |    |
|     | FSMST_INT_RATE           | VARCHAR2(5 char)  | 利率別           |    |
|     | FSMST_INT_L_RATE         | NUMBER(7,5)       | 上次存款利率        |    |
|     | FSMST_IRT_CODE           | VARCHAR2(11 char) | 存款利率編號        |    |
|     | FSMST_BAL                | NUMBER(15,2)      | 餘額            |    |
|     | FSMST_PB_BAL             | NUMBER(15,2)      | 存摺餘額          |    |
|     | FSMST_HOLD_BAL           | NUMBER(15,2)      | 止扣_扣押總金額      |    |
|     | FSMST_HOLD_AMT           | NUMBER(15,2)      | 保留金額_本行設定     |    |
|     | FSMST_FROZEN_AMT         | NUMBER(15,2)      | 法扣金額          |    |
|     | FSMST_TM_WDRAW_AMT       | NUMBER(15,2)      | 其它圈存保留金額      |    |
|     | FSMST_OPEN_DATE          | DATE              | 起存日期          |    |
|     | FSMST_L_BUSI_DATE        | DATE              | 上次交易日         |    |
|     | FSMST_MODIF_DATE         | DATE              | 資料維護日期        |    |
|     | FSMST_L_TXN_DATE         | DATE              | 上次積數結算日       |    |
|     | FSMST_L_AVG_DATE         | DATE              | 上次平均餘額結算日     |    |
|     | FSMST_L_AUM_DATE         | DATE              | 上次計息迄日        |    |
|     | FSMST_CURR_REF_AUM       | NUMBER(17,2)      | 存摺實際積數_本期     |    |
|     | FSMST_MON_REF_AUM        | NUMBER(17,2)      | 本月月平均積數       |    |
|     | FSMST_LMON_REF_AUM       | NUMBER(17,2)      | 上月月平均積數       |    |
|     | FSMST_CURR_ADJ_AUM       | NUMBER(15,0)      | 存摺計息積數        |    |
|     | FSMST_RCV_INT_AMT        | NUMBER(12,2)      | 應補扣差息         |    |
|     | FSMST_PAY_INT_AMT        | NUMBER(12,2)      | 應補入差息         |    |
|     | FSMST_MN_INT_AMT         | NUMBER(12,2)      | 本月底應付利息       |    |
|     | FSMST_BAL_INTFG          | VARCHAR2(1 char)  | 超過起息額記號       |    |
|     | FSMST_CLS_DATE           | DATE              | 銷戶日期_1        |    |
|     | FSMST_CLS_BR_CODE        | VARCHAR2(4 char)  | 銷戶單位_1        |    |
|     | FSMST_MN_INT_AUM         | NUMBER(17,2)      | 本月底應付利息積數     |    |
|     | FSMST_LMN_INT_AMT        | NUMBER(12,2)      | 上月月底應付利息      |    |
|     | FSMST_TOT_NTINT          | NUMBER(15,2)      | 當年度累計台幣毛息     |    |
|     | FSMST_TOT_NTTAX          | NUMBER(15,2)      | 當年度累計台幣稅額     |    |
|     | FSMST_TOT_NTINS          | NUMBER(15,2)      | 當年度累計台幣保費     |    |
|     | FSMST_TOT_INT            | NUMBER(15,2)      | 當年度累計原幣毛息     |    |
|     | FSMST_TOT_TAX            | NUMBER(15,2)      | 當年度累計原幣稅額     |    |
|     | FSMST_TOT_INS            | NUMBER(15,2)      | 當年度累計原幣保費     |    |
|     | FSMST_WAIT_DB_AMT        | NUMBER(15,2)      | 待放行金額_扣款      |    |
|     | FSMST_TR_WDRAW_AMT       | NUMBER(15,2)      | 其它圈存保留金額_信託   |    |
|     | FSMST_GEB_WDRAW_AMT      | NUMBER(15,2)      | 其它圈存保留金額_GEB  |    |
|     | FSMST_DCD_WDRAW_AMT      | NUMBER(15,2)      | 其它圈存保留金額(DCD) |    |
|     | FSMST_LYY_INT_AMT        | NUMBER(15,2)      | 期初應付利息        |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSNTX
#### 外存週邊交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSNTX_TXN_DATE           | DATE              | 交易日期          |    |
| PK  | FSNTX_TXN_SEQ_NO         | VARCHAR2(17 char) | 交易序號          |    |
|     | FSNTX_TXN_TIME           | VARCHAR2(6 char)  | 交易時間          |    |
|     | FSNTX_CHANNEL            | VARCHAR2(2 char)  | 通路別           |    |
|     | FSNTX_REV_BR             | VARCHAR2(4 char)  | 收件行           |    |
|     | FSNTX_ACC_BR             | VARCHAR2(4 char)  | 記帳行           |    |
|     | FSNTX_AGT_BR             | VARCHAR2(4 char)  | 外指行           |    |
|     | FSNTX_TRO_ACC_NO         | VARCHAR2(13 char) | 轉出帳號/匯款外存帳號   |    |
|     | FSNTX_TRI_ACC_NO         | VARCHAR2(13 char) | 轉入帳號/匯款台存帳號   |    |
|     | FSNTX_VIR_ACC_NO         | VARCHAR2(16 char) | 虛擬帳號          |    |
|     | FSNTX_REFNO              | VARCHAR2(20 char) | 交易編號          |    |
|     | FSNTX_ACC_ID             | VARCHAR2(11 char) | 統一編號          |    |
|     | FSNTX_QID                | VARCHAR2(2 char)  | 身份別           |    |
|     | FSNTX_BINS_CODE          | VARCHAR2(6 char)  | 行業別           |    |
|     | FSNTX_CUST_TYPE          | VARCHAR2(2 char)  | 客戶型態          |    |
|     | FSNTX_TXN_ID_CODE        | VARCHAR2(5 char)  | 交易代碼          |    |
|     | FSNTX_RATENO             | VARCHAR2(6 char)  | 議價編號          |    |
|     | FSNTX_CURR_RATE          | NUMBER(11,6)      | 成交匯率          |    |
|     | FSNTX_COST_RATE          | NUMBER(11,6)      | 成本匯率          |    |
|     | FSNTX_TRO_CURR           | VARCHAR2(3 char)  | 轉出幣別/匯款外存幣別   |    |
|     | FSNTX_TRO_TXN_AMT        | NUMBER(15,2)      | 轉出金額/匯款外存金額   |    |
|     | FSNTX_TRI_CURR           | VARCHAR2(3 char)  | 轉入幣別/匯款台存幣別   |    |
|     | FSNTX_TRI_TXN_AMT        | NUMBER(15,2)      | 轉入金額/匯款台存金額   |    |
|     | FSNTX_FEE_NTD            | NUMBER(15,2)      | 外幣手續費         |    |
|     | FSNTX_FEE_FXD            | NUMBER(15,2)      | 台幣手續費         |    |
|     | FSNTX_POST_NTD           | NUMBER(15,2)      | 外幣郵電費         |    |
|     | FSNTX_POST_FXD           | NUMBER(15,2)      | 台幣郵電費         |    |
|     | FSNTX_CURR1              | VARCHAR2(3 char)  | 幣別1           |    |
|     | FSNTX_TXAMT1             | NUMBER(15,2)      | 交易金額1         |    |
|     | FSNTX_CURR2              | VARCHAR2(3 char)  | 幣別2           |    |
|     | FSNTX_TXAMT2             | NUMBER(15,2)      | 交易金額2         |    |
|     | FSNTX_NOTE               | VARCHAR2(40 char) | 備註            |    |
|     | FSNTX_USER_DATA01        | VARCHAR2(40 char) | 交易自用欄位01      |    |
|     | FSNTX_USER_DATA02        | VARCHAR2(40 char) | 交易自用欄位02      |    |
|     | FSNTX_USER_DATA03        | VARCHAR2(40 char) | 交易自用欄位03      |    |
|     | FSNTX_USER_DATA04        | VARCHAR2(40 char) | 交易自用欄位04      |    |
|     | FSNTX_USER_DATA05        | VARCHAR2(40 char) | 交易自用欄位05      |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_D_FSTXN
#### 外匯活存交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FSTXN_ACC_ID_NO          | VARCHAR2(13 char) | 存戶帳號          |    |
| PK  | FSTXN_ENTRY_DATE         | DATE              | 入帳日           |    |
| PK  | FSTXN_TXN_SER            | VARCHAR2(6 char)  | 交易明細檔序號       |    |
| PK  | FSTXN_TXN_ID_CODE        | VARCHAR2(5 char)  | 交易代號          |    |
|     | FSTXN_BR_CODE            | VARCHAR2(4 char)  | 記帳行           |    |
|     | FSTXN_OWN_BR_CODE        | VARCHAR2(4 char)  | 所屬分行          |    |
|     | FSTXN_BR_UNIT            | VARCHAR2(4 char)  | 代收付單位         |    |
|     | FSTXN_TXN_TLR            | VARCHAR2(6 char)  | 櫃員編號          |    |
|     | FSTXN_TXN_SER_CODE       | VARCHAR2(7 char)  | 交易序號          |    |
|     | FSTXN_BUSI_DATE          | DATE              | 交易日           |    |
|     | FSTXN_TXN_TIME           | VARCHAR2(6 char)  | 交易時間          |    |
|     | FSTXN_BACK_DATE          | DATE              | 超前起息日         |    |
|     | FSTXN_MEMO_CODE          | VARCHAR2(4 char)  | 摘要代碼          |    |
|     | FSTXN_TXN_MEMO           | VARCHAR2(10 char) | 摘要            |    |
|     | FSTXN_DB_CR_STAT         | VARCHAR2(1 char)  | 借貸別           |    |
|     | FSTXN_ALTER_MEMO         | VARCHAR2(16 char) | 存摺摘要          |    |
|     | FSTXN_CURCD              | VARCHAR2(3 char)  | 幣別            |    |
|     | FSTXN_TXN_AMT            | NUMBER(15,2)      | 交易金額          |    |
|     | FSTXN_SAM_BAL            | NUMBER(15,2)      | 交易餘額          |    |
|     | FSTXN_TXN_STAT           | VARCHAR2(1 char)  | 交易狀態          |    |
|     | FSTXN_PB_STATUS          | VARCHAR2(1 char)  | 無摺交易註記        |    |
|     | FSTXN_TXN_AFCLS          | VARCHAR2(1 char)  | 軋帳後記號         |    |
|     | FSTXN_ID_CODE            | VARCHAR2(11 char) | 統一編號          |    |
|     | FSTXN_SUP_CODE_1         | VARCHAR2(6 char)  | 主管代號1_1       |    |
|     | FSTXN_SUP_CODE_2         | VARCHAR2(6 char)  | 主管代號2         |    |
|     | FSTXN_CASH_AMT           | NUMBER(13,0)      | 現金交易金額        |    |
|     | FSTXN_FX_CASH_AMT        | NUMBER(15,2)      | 外幣現金          |    |
|     | FSTXN_INT_L_RATE         | NUMBER(7,5)       | 適用存款利率        |    |
|     | FSTXN_LN_INT_L_RATE      | NUMBER(7,5)       | 適用質借利率        |    |
|     | FSTXN_CURR_ADJ_AUM       | NUMBER(15,0)      | 活存計息積數        |    |
|     | FSTXN_LN_CURR_ADJ_AUM    | NUMBER(15,0)      | 質借計息積數        |    |
|     | FSTXN_INT_RATE           | VARCHAR2(5 char)  | 存款利率別         |    |
|     | FSTXN_IRT_CODE           | VARCHAR2(11 char) | 存款利率編號        |    |
|     | FSTXN_OD_IRT_CODE        | VARCHAR2(11 char) | 原幣質借利率編號      |    |
|     | FSTXN_OD_IRT_DCODE       | VARCHAR2(11 char) | 異幣質借利率編號      |    |
|     | FSTXN_TD_OD_TTL          | NUMBER(15,2)      | 最高透支額         |    |
|     | FSTXN_XCRT               | NUMBER(11,6)      | 基礎幣兌換匯率       |    |
|     | FSTXN_GINT               | NUMBER(12,2)      | 扣_退毛息         |    |
|     | FSTXN_TAXAMT             | NUMBER(12,2)      | 扣_退稅額         |    |
|     | FSTXN_NHIAMT             | NUMBER(12,2)      | 扣_退保費         |    |
|     | FSTXN_NT_GINT            | NUMBER(10,0)      | 扣_退毛息_基礎幣     |    |
|     | FSTXN_NT_TAXAMT          | NUMBER(10,0)      | 扣_退稅額_基礎幣     |    |
|     | FSTXN_NT_NHIAMT          | NUMBER(10,0)      | 扣_退保費_基礎幣     |    |
|     | FSTXN_TXN_NTAMT          | NUMBER(13,0)      | 交易金額_TWD      |    |
|     | FSTXN_TXN_XCRT           | NUMBER(11,6)      | 成交匯率          |    |
|     | FSTXN_CHG_XCRT           | NUMBER(11,6)      | 換算匯率          |    |
|     | FSTXN_CST_XCRT           | NUMBER(11,6)      | 成本匯率          |    |
|     | FSTXN_CENT_CODE          | VARCHAR2(4 char)  | 區域中心          |    |
|     | FSTXN_SERVICE_AO         | VARCHAR2(6 char)  | AO代號          |    |
|     | FSTXN_VIR_ACC_ID_NO      | VARCHAR2(16 char) | 虛擬帳號          |    |
|     | FSTXN_VIR_ID_CODE        | VARCHAR2(11 char) | 虛擬帳號ID        |    |
|     | FSTXN_NEG_PROC           | VARCHAR2(1 char)  | 議價處理區分        |    |
|     | FSTXN_NEG_NO             | VARCHAR2(6 char)  | 議價編號          |    |
|     | FSTXN_NEG_BS             | VARCHAR2(1 char)  | 買賣區分          |    |
|     | FSTXN_NEG_CURCD          | VARCHAR2(3 char)  | 議價幣別          |    |
|     | FSTXN_NEG_AMT            | NUMBER(15,2)      | 議價成交金額        |    |
|     | FSTXN_TMU_TXNNO          | VARCHAR2(16 char) | 交易編號          |    |
|     | FSTXN_TMU_REFNO          | VARCHAR2(16 char) | 水單編號          |    |
|     | FSTXN_TMU_SETTLE_AMT     | NUMBER(15,2)      | 交割金額          |    |
|     | FSTXN_TMU_RELATIVE_CURCD | VARCHAR2(3 char)  | 相對幣別          |    |
|     | FSTXN_TMU_SETTLE_NTMAT   | NUMBER(15,2)      | 交割臺幣金額        |    |
|     | FSTXN_TMU_TXN_KIND       | VARCHAR2(1 char)  | 交易別           |    |
|     | FSTXN_TMU_CST_XCRT       | NUMBER(11,6)      | 成本匯率          |    |
|     | FSTXN_TMU_TXN_XCRT       | NUMBER(11,6)      | 成交匯率          |    |
|     | FSTXN_TMU_KIND           | VARCHAR2(1 char)  | 交易性質_央媒       |    |
|     | FSTXN_CANCEL_NO          | VARCHAR2(16 char) | 對台聯往銷帳編號      |    |
|     | FSTXN_SKL_FLAG           | VARCHAR2(1 char)  | 是否為新壽客戶       |    |
|     | FSTXN_NCAPT_FLAG         | VARCHAR2(1 char)  | 是否為新資金        |    |
|     | FSTXN_OD_INT             | NUMBER(15,0)      | 透支累計利息        |    |
|     | FSTXN_OD_INT_BK          | NUMBER(15,0)      | 轉息前透支累計利息     |    |
|     | FSTXN_MON_OD_INT_BK      | NUMBER(15,0)      | 每月質借利息        |    |
|     | FSTXN_OD_ADD_VALUE       | NUMBER(7,5)       | 質借加減利率        |    |
|     | FSTXN_OD_INT_TYPE        | VARCHAR2(1 char)  | 透支積數計息型態      |    |
|     | FSTXN_REV_BR_NO          | VARCHAR2(4 char)  | 收件分行          |    |
|     | FSTXN_CHANNEL            | VARCHAR2(2 char)  | 通路別           |    |
|     | FSTXN_COMM_TXNMEMO       | VARCHAR2(2 char)  | 資金來源_去處       |    |
|     | FSTXN_COUNTRY_CODE       | VARCHAR2(2 char)  | 國別代碼          |    |
|     | FSTXN_ORG_TXN_ID         | VARCHAR2(5 char)  | 原始交易代號        |    |
|     | FSTXN_MACCNO1            | VARCHAR2(13 char) | 轉帳之對方帳號1      |    |
|     | FSTXN_MACCNO2            | VARCHAR2(13 char) | 轉帳之對方帳號2      |    |
|     | FSTXN_MACCNO3            | VARCHAR2(13 char) | 轉帳之對方帳號3      |    |
|     | FSTXN_INT_ADJ            | NUMBER(17,4)      | 調整息           |    |
|     | FSTXN_ACC_FLAG           | VARCHAR2(1 char)  | 帳務記號          |    |
|     | FSTXN_STAMPAMT           | NUMBER(12,2)      | 代扣印花稅款        |    |
|     | FSTXN_NT_STAMPAMT        | NUMBER(10,0)      | 代扣印花稅款_基礎幣    |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_M_FILEAI258
#### AI258資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | AI258_ACC_TITLE_CODE     | VARCHAR2(8 char)  | 會計科子目         |    |
|     | AI258_TERM_CODE          | VARCHAR2(2 char)  | 期別            |    |
|     | AI258_CURR_CODE          | VARCHAR2(3 char)  | 幣別            |    |
|     | AI258_BAL                | NUMBER(15,2)      | 原幣金額S9(13)V99 |    |
|     | AI258_OD_FLAG            | VARCHAR2(1 char)  | OBU/DBU註記     |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |    |
### VW_ODS_M_FILEAI260
#### AI260資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | AI260_ACC_TITLE_CODE     | VARCHAR2(8 char)  | 會計科子目         |    |
|     | AI260_PERCENT            | NUMBER(3,0)       | 係數(%)         |    |
|     | AI260_CURR_CODE          | VARCHAR2(3 char)  | 幣別            |    |
|     | AI260_BAL                | NUMBER(15,2)      | 原幣金額S9(13)V99 |    |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間        |