---
sidebar_position: 8
title: 台幣核心系統-代理(CSAG)
---

### VW_ODS_D_AGAPF
#### 授權結果檔(財金)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AGAPF_ACC_ID_NO_G     | VARCHAR2(16 char)  | 帳號              |    |
| PK  | AGAPF_ORDER_BRCH      | VARCHAR2(8 char)   | 委託單位代號          |    |
| PK  | AGAPF_PAY_KIND        | VARCHAR2(5 char)   | 繳費類別            |    |
|     | AGAPF_OTH_BKNO        | VARCHAR2(7 char)   | 帳務代理行           |    |
|     | AGAPF_TRO_BKNO        | VARCHAR2(7 char)   | 轉出行             |    |
|     | AGAPF_ACC_IDCODE      | VARCHAR2(11 char)  | 帳戶ID            |    |
|     | AGAPF_USR_IDCODE      | VARCHAR2(11 char)  | 用戶ID            |    |
|     | AGAPF_SET_DATE        | DATE               | 交易提出日期          |    |
| PK  | AGAPF_TXN_SEQ         | VARCHAR2(7 char)   | 交易序號            |    |
|     | AGAPF_REP_DATE        | DATE               | 交易回應日期          |    |
|     | AGAPF_REP_STAT        | VARCHAR2(2 char)   | 回覆訊息            |    |
|     | AGAPF_SOR             | VARCHAR2(1 char)   | 資料來源            |    |
|     | AGAPF_TXN_KIND        | VARCHAR2(1 char)   | 交易類別            |    |
|     | AGAPF_MEMO            | VARCHAR2(10 char)  | 備註              |    |
|     | AGAPF_L_TXN_DATE      | DATE               | 最近交易日期          |    |
|     | AGAPF_D_SUM_AMT       | NUMBER(11,0)       | 日累計金額           |    |
|     | AGAPF_M_SUM_AMT       | NUMBER(11,0)       | 月累計金額           |    |
|     | AGAPF_NUM_LIMIT       | NUMBER(11,0)       | 次限額             |    |
|     | AGAPF_DAY_LIMIT       | NUMBER(11,0)       | 日限額             |    |
|     | AGAPF_MON_LIMIT       | NUMBER(11,0)       | 月限額             |    |
|     | AGAPF_CHG_DATE        | DATE               | 異動日期            |    |
|     | AGAPF_CHG_TIME        | VARCHAR2(6 char)   | 異動時間            |    |
|     | AGAPF_CHG_TLR         | VARCHAR2(6 char)   | 異動櫃員            |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGAPL
#### 代理申請檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | AGAPL_PROD_ID         | VARCHAR2(7 char)   | 產品代號            |    |
|     | AGAPL_AREA_NO         | VARCHAR2(7 char)   | 局區所號            |    |
|     | AGAPL_USER_NO         | VARCHAR2(20 char)  | 用戶號碼            |    |
|     | AGAPL_ACC_ID_NO       | VARCHAR2(13 char)  | 約定帳號            |    |
|     | AGAPL_USER_MEMO       | VARCHAR2(20 char)  | 用戶號碼MEMO        |    |
|     | AGAPL_ORG_BR_CODE     | VARCHAR2(4 char)   | 開戶行             |    |
|     | AGAPL_TXN_BR_CODE     | VARCHAR2(4 char)   | 建檔分行(受理申請單位)    |    |
|     | AGAPL_TXN_TLR         | VARCHAR2(6 char)   | 交易櫃員編號          |    |
|     | AGAPL_CLR_BR_CODE     | VARCHAR2(4 char)   | 外匯活存交易明細檔異常資料   |    |
|     | AGAPL_APPLY_STAT      | VARCHAR2(1 char)   | 申請狀態            |    |
|     | AGAPL_OD_STAT         | VARCHAR2(1 char)   | 透支_質借狀態         |    |
|     | AGAPL_SEND_STAT       | VARCHAR2(1 char)   | 彙送狀態            |    |
|     | AGAPL_LAST_TXN_STAT   | VARCHAR2(4 char)   | 最近一次轉帳結果        |    |
|     | AGAPL_APPLY_STAT_DATE | DATE               | 申請狀態異動日期        |    |
|     | AGAPL_OD_STAT_DATE    | DATE               | 透支_質借狀態異動日期     |    |
|     | AGAPL_SEND_STAT_DATE  | DATE               | 彙送狀態異動日期        |    |
|     | AGAPL_LAST_TXN_DATE   | DATE               | 最近一次轉帳結果異動日期    |    |
|     | AGAPL_DATA            | VARCHAR2(120 char) | 申請明細資料          |    |
|     | AGAPL_APPLY_DATE      | DATE               | 申請日期            |    |
|     | AGAPL_STOP_DATE       | DATE               | 中止日期            |    |
|     | AGAPL_ABAT_STAT       | VARCHAR2(1 char)   | 信用卡扣款額度狀態       |    |
|     | AGAPL_LAST_FREE       | NUMBER(2,0)        | 上月優惠轉帳次數        |    |
|     | AGAPL_CURR_FREE       | NUMBER(2,0)        | 本月優惠轉帳次數        |    |
|     | AGAPL_WTO_UNIT        | VARCHAR2(7 char)   | 委託單位_國民年金被保險人生日 |    |
|     | AGAPL_DEL_REASON      | VARCHAR2(1 char)   | 中止原因            |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGCHK
#### 授權扣款核印檔(票交所)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AGCHK_TXN_ID          | VARCHAR2(3 char)   | 委繳類別            |    |
| PK  | AGCHK_BUSI_ID         | VARCHAR2(10 char)  | 委繳事業單位(發動者統編)   |    |
| PK  | AGCHK_USER_NO         | VARCHAR2(20 char)  | 委繳戶用戶號碼         |    |
| PK  | AGCHK_ACC_ID_NO       | VARCHAR2(14 char)  | 委繳戶帳號           |    |
|     | AGCHK_ID              | VARCHAR2(10 char)  | 委繳戶統一編號         |    |
|     | AGCHK_SORG_BANK       | VARCHAR2(7 char)   | 發送單位代號          |    |
|     | AGCHK_APPL_STAT       | VARCHAR2(1 char)   | 申請狀態            |    |
|     | AGCHK_APPL_DATE       | DATE               | 申請日期            |    |
|     | AGCHK_STOP_DATE       | DATE               | 中止日期            |    |
|     | AGCHK_CHG_DATE        | DATE               | 異動日期            |    |
|     | AGCHK_CHG_TIME        | VARCHAR2(8 char)   | 異動時間            |    |
|     | AGCHK_CHG_TLR         | VARCHAR2(6 char)   | 異動櫃員            |    |
|     | AGCHK_CHG_SUP         | VARCHAR2(6 char)   | 異動主管            |    |
|     | AGCHK_BRCH            | VARCHAR2(4 char)   | 主辦行             |    |
|     | AGCHK_576_EMAIL       | VARCHAR2(40 char)  | 停車費EMAIL        |    |
|     | AGCHK_L_TXN_DATE      | DATE               | 最近交易日期          |    |
|     | AGCHK_D_SUM_AMT       | NUMBER(11,0)       | 日累計金額           |    |
|     | AGCHK_M_SUM_AMT       | NUMBER(11,0)       | 月累計金額           |    |
|     | AGCHK_NUM_LIMIT       | NUMBER(11,0)       | 次限額             |    |
|     | AGCHK_DAY_LIMIT       | NUMBER(11,0)       | 日限額             |    |
|     | AGCHK_MON_LIMIT       | NUMBER(11,0)       | 月限額             |    |
|     | AGCHK_LIMIT_KIND      | NUMBER(2,0)        | 月限額設定           |    |
|     | AGCHK_BEG_CAL_DATE    | DATE               | 開始計算日期          |    |
|     | AGCHK_CERT_TYPE       | VARCHAR2(1 char)   | 憑證類別            |    |
|     | AGCHK_CHANNEL         | VARCHAR2(1 char)   | 發動管道            |    |
|     | AGCHK_FILLER          | VARCHAR2(28 char)  | 保留              |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGCID
#### 委託單位設定檔(AGCID)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AGCID_CUST_ID         | VARCHAR2(7 char)   | 委託單位            |    |
|     | AGCID_APPLY_STAT      | VARCHAR2(1 char)   | 申請狀態            |    |
|     | AGCID_CUST_NAME       | VARCHAR2(40 char)  | 委託單位名稱          |    |
|     | AGCID_TRAN_TYPE       | VARCHAR2(1 char)   | 入扣帳方式           |    |
|     | AGCID_ACC_ID_NO_1     | VARCHAR2(13 char)  | 本行帳號1           |    |
|     | AGCID_ACC_ID_NO_2     | VARCHAR2(13 char)  | 本行帳號2           |    |
|     | AGCID_ACC_ID_NO_3     | VARCHAR2(13 char)  | 本行帳號3           |    |
|     | AGCID_ACC_ID_NO_4     | VARCHAR2(13 char)  | 本行帳號4           |    |
|     | AGCID_ACC_ID_NO_5     | VARCHAR2(13 char)  | 本行帳號5           |    |
|     | AGCID_ACC_ID_NO_6     | VARCHAR2(13 char)  | 本行帳號6           |    |
|     | AGCID_ACC_ID_NO_7     | VARCHAR2(13 char)  | 本行帳號7           |    |
|     | AGCID_ACC_ID_NO_8     | VARCHAR2(13 char)  | 本行帳號8           |    |
|     | AGCID_ACC_ID_NO_9     | VARCHAR2(13 char)  | 本行帳號9           |    |
|     | AGCID_ACC_ID_NO_10    | VARCHAR2(13 char)  | 本行帳號10          |    |
|     | AGCID_TRAN_TIT_CODE   | VARCHAR2(8 char)   | 會計科目(代墊)        |    |
|     | AGCID_STOCK_STAT      | VARCHAR2(1 char)   | 提供股票代號狀態        |    |
|     | AGCID_TR2_STAT        | VARCHAR2(1 char)   | 提供二扣狀態(櫃員啟動)    |    |
|     | AGCID_MRG_TR2_ID      | VARCHAR2(7 char)   | 合併啟動二扣委託單位      |    |
|     | AGCID_MRG_RPT_ID      | VARCHAR2(7 char)   | 合併報回覆表委託單位      |    |
|     | AGCID_MRG_FILE_ID     | VARCHAR2(7 char)   | 合併回覆檔案委託單位      |    |
|     | AGCID_APPLY_DATE      | DATE               | 申請日期            |    |
|     | AGCID_STOP_DATE       | DATE               | 中止日期            |    |
|     | AGCID_CHG_DATE        | DATE               | 異動日期            |    |
|     | AGCID_CHG_TIME        | VARCHAR2(6 char)   | 異動時間            |    |
|     | AGCID_CHG_TLR         | VARCHAR2(6 char)   | 異動櫃員            |    |
|     | AGCID_CHG_SUP         | VARCHAR2(6 char)   | 異動主管            |    |
|     | AGCID_SK_CMP          | VARCHAR2(1 char)   | 是否為新光金控子公司      |    |
|     | AGCID_SAL_RATE        | VARCHAR2(1 char)   | 薪轉是否優惠利率        |    |
|     | AGCID_FEE_TYPE        | VARCHAR2(1 char)   | 手續費收取方式         |    |
|     | AGCID_FEE_FREE_TIMES  | VARCHAR2(1 char)   | 優惠手續費次數         |    |
|     | AGCID_SAL_TRAN        | VARCHAR2(1 char)   | 薪轉否             |    |
|     | AGCID_BEG_DATE        | DATE               | 薪轉生效日期          |    |
|     | AGCID_DUE_DATE        | DATE               | 薪轉失效日期          |    |
|     | AGCID_FEE_WD_CNT      | NUMBER(2,0)        | 優惠提款次數          |    |
|     | AGCID_FEE_TR_CNT      | NUMBER(2,0)        | 優惠轉帳次數          |    |
|     | AGCID_CHK_APL         | VARCHAR2(1 char)   | 扣帳檢核否           |    |
|     | AGCID_FEE_FLAG        | VARCHAR2(1 char)   | 優惠手續費否          |    |
|     | AGCID_APL_WTO         | VARCHAR2(6 char)   | 全方位帳號資料         |    |
|     | AGCID_UNP_FLAG        | VARCHAR2(1 char)   | 存摺彙總記號          |    |
|     | AGCID_UNP_KIND        | VARCHAR2(1 char)   | 存摺彙總種類          |    |
|     | AGCID_SAL_EXTEND      | VARCHAR2(1 char)   | 薪轉續約否           |    |
|     | AGCID_EXT_BEG_DATE    | DATE               | 薪轉續約生效日期        |    |
|     | AGCID_EXT_DUE_DATE    | DATE               | 薪轉續約失效日期        |    |
|     | AGCID_AUTO_TRAN       | VARCHAR2(1 char)   | 簽署券商交割自動化合約     |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGFTT
#### 全方位帳號交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | AGFTT_ACC_ID_NO       | VARCHAR2(13 char)  | 帳號              |    |
|     | AGFTT_TXN_DATE        | DATE               | 交易日期/傳輸日期       |    |
|     | AGFTT_TXN_TIME        | VARCHAR2(6 char)   | 交易時間/傳輸序號       |    |
|     | AGFTT_FTT_ACC_ID_NO   | VARCHAR2(16 char)  | 全方位帳號           |    |
|     | AGFTT_TXN_AMT_S       | VARCHAR2(1 char)   | 交易金額符號          |    |
|     | AGFTT_TXN_AMT         | NUMBER(10,0)       | 交易金額            |    |
|     | AGFTT_TXN_MEMO        | VARCHAR2(10 char)  | 摘要              |    |
|     | AGFTT_ACT_BRCH        | VARCHAR2(4 char)   | 代理行             |    |
|     | AGFTT_TXN_CHAN        | VARCHAR2(2 char)   | 交易通路            |    |
|     | AGFTT_TXN_MART        | VARCHAR2(2 char)   | 通路代號            |    |
|     | AGFTT_CHG_DATE        | DATE               | 異動日期            |    |
|     | AGFTT_BUSI_DATE       | DATE               | 營業日             |    |
|     | AGFTT_TXN_SER         | VARCHAR2(6 char)   | 往來序號            |    |
|     | AGFTT_CUST_ID         | VARCHAR2(6 char)   | 全方位帳號           |    |
|     | AGFTT_FEE             | NUMBER(3,0)        | 保險費手續費          |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGPOL
#### 整批轉帳檔格式
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AGPOL_TR_DATE         | DATE               | 轉帳日期            |    |
| PK  | AGPOL_SEND_UNIT       | VARCHAR2(7 char)   | 委託單位            |    |
| PK  | AGPOL_TXN_TYPE        | VARCHAR2(2 char)   | 轉帳類別            |    |
| PK  | AGPOL_BATCH_NO        | VARCHAR2(2 char)   | 批號              |    |
| PK  | AGPOL_REG_NO          | VARCHAR2(7 char)   | 登錄序號            |    |
|     | AGPOL_CHG_DATE        | DATE               | 異動日期            |    |
|     | AGPOL_CHG_TIME        | VARCHAR2(6 char)   | 異動時間            |    |
|     | AGPOL_CHG_TLR         | VARCHAR2(6 char)   | 異動櫃員            |    |
|     | FILLLER               | VARCHAR2(14 char)  |                 |    |
|     | AGPOL_DATA            | VARCHAR2(60 char)  | 資料區             |    |
|     | AGPOL_SOURCE_DATA     | VARCHAR2(200 char) | 原始資料            |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |    |
### VW_ODS_D_AGSAL
#### 薪轉設定檔(AGSAL)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AGSAL_ACC_ID_NO       | VARCHAR2(13 char)  | 薪轉帳號            |    |
|     | AGSAL_CUST_ID         | VARCHAR2(7 char)   | 帳號所屬委託單位        |    |
|     | AGSAL_BR_CODE         | VARCHAR2(4 char)   | 客戶所屬分行          |    |
|     | AGSAL_STAT            | VARCHAR2(1 char)   | 薪轉設定狀態          |    |
|     | AGSAL_APPLY_DATE      | DATE               | 薪轉申請日期          |    |
|     | AGSAL_STOP_DATE       | DATE               | 薪轉中止日期          |    |
|     | AGSAL_LAST_TXN_DATE   | DATE               | 最近一次薪轉日期        |    |
|     | AGSAL_BEF_RATE        | NUMBER(6,4)        | 轉換前適用利率         |    |
|     | AGSAL_BEF_AUM         | NUMBER(11,0)       | 轉換前適用計息積數       |    |
|     | AGSAL_AFT_RATE        | NUMBER(6,4)        | 轉換後適用利率         |    |
|     | AGSAL_AFT_AUM         | NUMBER(11,0)       | 轉換後適用計息積數       |    |
|     | AGSAL_SAL_APL_STAT    | VARCHAR2(1 char)   | 薪轉約定狀態          |    |
|     | AGSAL_CHG_TIME        | VARCHAR2(6 char)   | 異動時間            |    |
|     | AGSAL_CHG_TLR         | VARCHAR2(6 char)   | 異動櫃員            |    |
|     | TBL_UPD_TIM           | TIMESTAMP          | 表格更新時間          |