---
sidebar_position: 6
title: 特店檔(CDWC)
---

### VW_ODS_D_MERCHANT
#### 特店檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | MERCH_NO            | VARCHAR2(15 char)  | 特店代號                |    |
|     | BIZ_TAX_ID          | VARCHAR2(8 char)   | 特店統一編號              |    |
|     | BRANCH_NO           | VARCHAR2(4 char)   | 分行代號                |    |
|     | HQT_FLAG            | VARCHAR2(1 char)   | 特店所屬體系              |    |
|     | CHAIN_FLAG          | VARCHAR2(1 char)   | 特店類型                |    |
|     | HQT_MERCH_NO        | VARCHAR2(15 char)  | 總公司代號               |    |
|     | REG_NAME            | VARCHAR2(66 char)  | 特店登記名稱              |    |
|     | BIZ_NAME            | VARCHAR2(66 char)  | 特店營業名稱              |    |
|     | ENG_NAME            | VARCHAR2(22 char)  | 特店英文名稱              |    |
|     | REG_ZIP             | VARCHAR2(5 char)   | 登記地址ZIP             |    |
|     | REG_ADDR            | VARCHAR2(66 char)  | 登記地址                |    |
|     | BIZ_ZIP             | VARCHAR2(5 char)   | 營業地址ZIP             |    |
|     | BIZ_ADDR            | VARCHAR2(66 char)  | 營業地址                |    |
|     | POST_ZIP            | VARCHAR2(5 char)   | 郵寄地址ZIP             |    |
|     | POST_ADDR           | VARCHAR2(66 char)  | 郵寄地址                |    |
|     | BIZ_TEL_NO1         | VARCHAR2(30 char)  | 營業電話(1)             |    |
|     | BIZ_TEL_NO2         | VARCHAR2(30 char)  | 營業電話(2)             |    |
|     | FAX_TEL_NO1         | VARCHAR2(30 char)  | 傳真電話(1)             |    |
|     | FAX_TEL_NO2         | VARCHAR2(30 char)  | 傳真電話(2)             |    |
|     | PRIN_NAME1          | VARCHAR2(15 char)  | 負責人姓名1              |    |
|     | PRIN_ID1            | VARCHAR2(10 char)  | 負責人身份証字號1           |    |
|     | PRIN_NAME2          | VARCHAR2(15 char)  | 負責人姓名2              |    |
|     | PRIN_ID2            | VARCHAR2(10 char)  | 負責人身份証字號2           |    |
|     | CONTACT_NAME        | VARCHAR2(15 char)  | 卡務連絡人姓名             |    |
|     | CONTACT_TEL_NO1     | VARCHAR2(30 char)  | 卡務連絡人電話             |    |
|     | CONTACT_TEL_NO2     | VARCHAR2(30 char)  | 卡務連絡人行動             |    |
|     | ACCT_NAME           | VARCHAR2(15 char)  | 帳務連絡人姓名             |    |
|     | ACCT_TEL_NO1        | VARCHAR2(30 char)  | 帳務連絡人電話             |    |
|     | ACCT_TEL_NO2        | VARCHAR2(30 char)  | 帳務連絡人行動             |    |
|     | EMAIL               | VARCHAR2(40 char)  | 特店電子郵件信箱            |    |
|     | URL                 | VARCHAR2(40 char)  | 特店網址                |    |
|     | PROMOTER_NO         | VARCHAR2(10 char)  | 推廣單位代號              |    |
|     | PROMOTER_ID         | VARCHAR2(15 char)  | 推薦人姓名               |    |
|     | PROMOTION_CODE      | VARCHAR2(1 char)   | 推薦來源代碼              |    |
|     | PROMOTER_NAME       | VARCHAR2(15 char)  | 推廣人姓名               |    |
|     | ENG_ADDR            | VARCHAR2(40 char)  | 英文地址                |    |
|     | ENG_CITY            | VARCHAR2(20 char)  | 城市英文名稱              |    |
|     | CHN_CITY            | VARCHAR2(21 char)  | 城市中文名稱              |    |
|     | AREA_CODE           | VARCHAR2(2 char)   | 營業地區代碼              |    |
|     | CNTRY_CODE          | VARCHAR2(3 char)   | 國別碼                 |    |
|     | CURR_CODE           | VARCHAR2(3 char)   | 幣別碼                 |    |
|     | MCC                 | VARCHAR2(4 char)   | 特店行業類別碼             |    |
|     | MCC_DESC            | VARCHAR2(20 char)  | 特店類別碼說明             |    |
|     | RISK_LEVEL          | VARCHAR2(2 char)   | 特店風險代碼              |    |
|     | PROCEEDS_D1         | NUMBER(14,0)       | 預估日營業額              |    |
|     | PROCEEDS_M1         | NUMBER(14,0)       | 預估月營業額              |    |
|     | PROCEEDS_Y1         | NUMBER(14,0)       | 預估年營業額              |    |
|     | TX_TYPE             | VARCHAR2(4 char)   | 交易型態                |    |
|     | CARD_PLANS          | VARCHAR2(8 char)   | 可接受卡片種類             |    |
|     | CREDIT_PAY_CYCLE    | VARCHAR2(1 char)   | 付款週期(for信用卡)        |    |
|     | CREDIT_PAY_DAY      | VARCHAR2(2 char)   | 付款日期(for信用卡)        |    |
|     | CREDIT_PAY_METHOD   | VARCHAR2(1 char)   | 付款方式                |    |
|     | CREDIT_PAY_ACCTNO   | VARCHAR2(16 char)  | 虛擬付款帳號(for信用卡)      |    |
|     | CREDIT_PAY_ACCTNO2  | VARCHAR2(16 char)  | 實體付款帳號(for信用卡)      |    |
|     | CREDIT_PAY_BANKID   | VARCHAR2(8 char)   | 銀行代碼(for信用卡)        |    |
|     | CREDIT_FEE_ACCTNO   | VARCHAR2(16 char)  | 虛擬手續費帳號(for信用卡)     |    |
|     | CREDIT_FEE_ACCTNO2  | VARCHAR2(16 char)  | 實體手續費帳號(for信用卡)     |    |
|     | CREDIT_FEE_BANKID   | VARCHAR2(8 char)   | 銀行代碼(for信用卡)        |    |
|     | CREDIT_FEE_BRANCHNO | VARCHAR2(4 char)   |                     |    |
|     | CREDIT_PAY_BRANCHNO | VARCHAR2(4 char)   |                     |    |
|     | DEBIT_FEE_DAY       | VARCHAR2(2 char)   | 手續費結算日(for金融卡)      |    |
|     | DEBIT_FEE_METHOD    | VARCHAR2(1 char)   | 手續費繳款方式(for金融卡)     |    |
|     | DEBIT_PAY_METHOD    | VARCHAR2(1 char)   | 付款方式(for金融卡)        |    |
|     | DEBIT_FEE_BRANCHNO  | VARCHAR2(4 char)   |                     |    |
|     | DEBIT_PAY_BRANCHNO  | VARCHAR2(4 char)   |                     |    |
|     | DEBIT_PAY_ACCTNO    | VARCHAR2(16 char)  | 虛擬付款帳號(for金融卡)      |    |
|     | DEBIT_PAY_ACCTNO2   | VARCHAR2(16 char)  | 實體付款帳號(for金融卡)      |    |
|     | DEBIT_PAY_BANKID    | VARCHAR2(8 char)   | 銀行代碼(for金融卡)        |    |
|     | DEBIT_FEE_ACCTNO    | VARCHAR2(16 char)  | 虛擬手續費帳號(for金融卡)     |    |
|     | DEBIT_FEE_ACCTNO2   | VARCHAR2(16 char)  | 實體手續費帳號             |    |
|     | DEBIT_FEE_BANKID    | VARCHAR2(8 char)   | 銀行代碼(for金融卡)        |    |
|     | STA_CYCLE           | VARCHAR2(1 char)   | 對帳單寄送週期             |    |
|     | STA_WAY             | VARCHAR2(1 char)   | 對帳單提供方式             |    |
|     | STA_METHOD          | VARCHAR2(1 char)   | 對帳單寄送方式             |    |
|     | PAYMENT_FEE_FLAG    | VARCHAR2(1 char)   |                     |    |
|     | INVOICE_TYPE        | VARCHAR2(1 char)   | 發票開立方式              |    |
|     | INVOICE_CYCLE       | VARCHAR2(1 char)   | 發票寄送週期(for手續費)      |    |
|     | INVOICE_CYCLE_DAY   | VARCHAR2(2 char)   |                     |    |
|     | INVOICE_METHOD      | VARCHAR2(1 char)   | 發票寄送方式              |    |
|     | FEE_CODE_9          | VARCHAR2(4 char)   | 自行手續費代碼             |    |
|     | FEE_CODE_6          | VARCHAR2(4 char)   | 自系手續費代碼             |    |
|     | FEE_CODE_8          | VARCHAR2(4 char)   | 跨系手續費代碼             |    |
|     | FEE_CODE_0          | VARCHAR2(4 char)   | 跨國手續費代碼             |    |
|     | ACT_START_DAY       | DATE               | 優惠手續費率起始日           |    |
|     | ACT_END_DAY         | DATE               | 優惠手續費率終止日           |    |
|     | ACT_FEE_CODE_9      | VARCHAR2(4 char)   | 自行優惠手續費率代碼          |    |
|     | ACT_FEE_CODE_6      | VARCHAR2(4 char)   | 自系優惠手續費率代碼          |    |
|     | ACT_FEE_CODE_8      | VARCHAR2(4 char)   | 跨系優惠手續費率代碼          |    |
|     | ACT_FEE_CODE_0      | VARCHAR2(4 char)   | 跨國優惠手續費率代碼          |    |
|     | MERCH_ACT_DAY       | DATE               | 特店簽約日期              |    |
|     | MERCH_STOP_DAY      | DATE               | 特店解約日期              |    |
|     | MERCH_STOP_TYPE     | VARCHAR2(1 char)   | 特店解約種類              |    |
|     | MERCH_STOP_CODE     | VARCHAR2(1 char)   | 特店解約原因              |    |
|     | CREDIT_ACT_DAY      | DATE               | 信用卡業務啟用日            |    |
|     | CREDIT_STOP_DAY     | DATE               | 信用卡業務註銷日            |    |
|     | CREDIT_STOP_CODE    | VARCHAR2(1 char)   | 信用卡業務停用理由碼          |    |
|     | DEBIT_ACT_DAY       | DATE               | 金融卡業務啟用日            |    |
|     | DEBIT_STOP_DAY      | DATE               | 金融卡業務註銷日            |    |
|     | DEBIT_STOP_CODE     | VARCHAR2(1 char)   | 金融卡業務停用理由碼          |    |
|     | AMT_PURCH_LIMIT     | NUMBER(12,0)       | 信用卡消費金額上限           |    |
|     | INT_TXN_FLAG        | VARCHAR2(1 char)   | 信用卡國外卡交易旗標          |    |
|     | CHECK_REFUND_FG     | VARCHAR2(1 char)   | 檢檢退貨交易旗標            |    |
|     | REFUND_LIMIT_TIMES  | NUMBER(2,0)        | 退貨限額倍數              |    |
|     | REFUND_LIMIT_AMT    | NUMBER(12,0)       | 退貨上限金額              |    |
|     | SETL_PERIOD         | VARCHAR2(4 char)   | 特店結帳時段              |    |
|     | DEBIT_REFUND_FLAG   | VARCHAR2(1 char)   | 晶片金融卡退貨參數           |    |
|     | DEBIT_REFUND_DAYS   | NUMBER(3,0)        | 晶片金融卡退貨期限(天)        |    |
|     | DEBIT_SETL_UNITNO   | VARCHAR2(10 char)  | 清算單位代號              |    |
|     | DEBIT_SETL_CHARGE   | NUMBER(3,0)        | 清算單位手續費所得比率(%)      |    |
|     | DEPOSIT_DAY         | DATE               | 押金收付日               |    |
|     | DEPOSIT_AMT         | NUMBER(8,0)        | 押金金額                |    |
|     | SETUP_DAY           | DATE               | 特店裝機日               |    |
|     | EDC_FLAG            | VARCHAR2(1 char)   | 是否安裝EDC             |    |
|     | EDC_CNT             | NUMBER(4,0)        | EDC數量               |    |
|     | POS_FLAG            | VARCHAR2(1 char)   | 是否安裝POS             |    |
|     | POS_CNT             | NUMBER(4,0)        | POS數量               |    |
|     | IMP_CNT             | NUMBER(4,0)        | IMP數量               |    |
|     | PG_FLAG             | VARCHAR2(1 char)   | 是否有使用PaymentGateway |    |
|     | SET_FLAG            | VARCHAR2(1 char)   | 是否可接受SET交易          |    |
|     | SSL_FLAG            | VARCHAR2(1 char)   | 是否可接受SSL交易          |    |
|     | VIDEO_REC_FLAG      | VARCHAR2(1 char)   | 是否有錄影設備             |    |
|     | INPUT_DAY           | DATE               | 特店建檔日期              |    |
|     | INPUT_TIME          | VARCHAR2(6 char)   | 特店建檔時間              |    |
|     | INPUT_USER          | VARCHAR2(15 char)  | 特店建檔人員              |    |
|     | LAST_UPDATE_DAY     | DATE               | 前次修改日期              |    |
|     | LAST_UPDATE_TIME    | VARCHAR2(6 char)   | 前次修改時間              |    |
|     | LAST_UPDATE_USER    | VARCHAR2(23 char)  | 前次修改人員              |    |
|     | STATUS              | VARCHAR2(1 char)   | 本筆資料狀態              |    |
|     | ST3_FLAG            | VARCHAR2(1 char)   | 手續費率同步旗標            |    |
|     | OUTT_FLAG           | VARCHAR2(1 char)   | 信用卡授權交易轉請款過檔旗標      |    |
|     | DEBIT_BLOCK_DAY     | VARCHAR2(2 char)   |                     |    |
|     | DEBIT_FEE_CYCLE     | NUMBER(1,0)        |                     |    |
|     | CAPTIAL_AMT         | NUMBER(12,0)       |                     |    |
|     | PERMIT_DAY          | DATE               |                     |    |
|     | SALE_PREPARE_FG     | VARCHAR2(1 char)   | 充許預售                |    |
|     | MERCH_SERVICE_FEE   | NUMBER(12,0)       | 商店服務費               |    |
|     | SRV_BRANCH_FG       | VARCHAR2(1 char)   | 是否由分行代付?            |    |
|     | SRV_ACT_START_DAY   | DATE               | 優惠商服費起始日期           |    |
|     | SRV_ACT_END_DAY     | DATE               | 優惠商服費終止日期           |    |
|     | SRV_ACT_FEE         | NUMBER(8,0)        | 優惠商店服務費             |    |
|     | SRV_AMT_PURCH       | NUMBER(12,0)       | 商服費簽帳金額?            |    |
|     | INVOICE_SUM_FG      | VARCHAR2(1 char)   | 電子發票總店匯整            |    |
|     | MERCH_CHK_UNIT      | VARCHAR2(4 char)   | 評核單位                |    |
|     | MERCH_CHK_DAY       | DATE               | 評核日期                |    |
|     | MERCH_CHK_FLAG      | VARCHAR2(1 char)   | 回饋旗標                |    |
|     | MERCH_CHK_SDAY      | DATE               | 回饋起始日期              |    |
|     | MERCH_CHK_EDAY      | DATE               | 回饋結束日期              |    |
|     | HQ_BIZ_TAX_ID       | VARCHAR2(8 char)   | 母公司統一編號             |    |
|     | TBL_UPD_TIM         | TIMESTAMP          | 表格更新時間              |    |
### VW_ODS_M_SERVICE_FEE
#### 商服費主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SETL_MONTH          | VARCHAR2(6 char)   | 扣帳月份                |    |
| PK  | BIZ_TAX_ID          | VARCHAR2(8 char)   | 統一編號                |    |
|     | SERVICE_FEE         | NUMBER(6,0)        | 應收商服費               |    |
|     | ADJUST_AMT          | NUMBER(6,0)        | 調整金額                |    |
|     | DR_SERVICE_FEE      | NUMBER(6,0)        | 退商服費                |    |
|     | ACT_SERVICE_FEE     | NUMBER(6,0)        | 實收商服費               |    |
|     | CR_FLAG             | NUMBER(1,0)        | 扣商服費狀態              |    |
|     | UPDATE_CR_FLAG_DAY  | DATE               | 更新CR_FLAG日期         |    |
|     | UPDATE_CR_FLAG_TIME | VARCHAR2(6 char)   | 更新CR_FLAG時間         |    |
|     | TOTAL_AMT           | NUMBER(12,0)       | 上月簽帳總金額             |    |
|     | STATUS              | VARCHAR2(1 char)   | 是否應收商服費             |    |
|     | MERCH_NO            | VARCHAR2(15 char)  | 特店代號                |    |
|     | ACCT_BANKID         | VARCHAR2(3 char)   | 入扣帳帳號之銀行            |    |
|     | ACCTNO              | VARCHAR2(16 char)  | 入扣帳帳號               |    |
|     | DR_FLAG             | VARCHAR2(1 char)   | 退商服費結果碼             |    |
|     | UPDATE_DR_FLAG_DAY  | DATE               | 更新DR_FLAG日期         |    |
|     | UPDATE_DR_FLAG_TIME | VARCHAR2(6 char)   | 更新DR_FLAG時間         |    |
|     | BRANCH_FG           | VARCHAR2(1 char)   | 分行代付                |    |
|     | ADJ_FG              | VARCHAR2(1 char)   | 更新_調整金額_狀態          |    |
|     | UPT_ADJ_DAY         | DATE               | 更新ADJ_FG日期          |    |
|     | UPT_ADJ_TIME        | VARCHAR2(6 char)   | 更新ADJ_FG時間          |    |
|     | TBL_UPD_TIM         | TIMESTAMP          | 表格更新時間              |    |
### VW_ODS_M_SETL
#### 特店請款清算檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SETL_DAY            | DATE               | 清算日                 |    |
| PK  | MERCH_NO            | VARCHAR2(15 char)  | 特店代號                |    |
| PK  | TERMINAL_ID         | VARCHAR2(8 char)   | 端末代號                |    |
| PK  | BATCH_NO            | VARCHAR2(6 char)   | 批號                  |    |
| PK  | REC_TYPE            | VARCHAR2(1 char)   | 資料別                 |    |
| PK  | SETL_FLAG           | VARCHAR2(1 char)   | 清算別                 |    |
| PK  | CARD_PLAN           | VARCHAR2(1 char)   | 卡別                  |    |
| PK  | TRAN_CODE           | VARCHAR2(4 char)   | 清算代碼                |    |
|     | USAGE_CODE          | VARCHAR2(1 char)   | 使用碼                 |    |
|     | CNT                 | VARCHAR2(8 char)   | 合計筆數                |    |
|     | AMT                 | NUMBER(14,4)       | 合計金額                |    |
|     | SIGN                | VARCHAR2(1 char)   | 金額入扣別               |    |
|     | PAY_DAY             | DATE               | 預定撥款日               |    |
| PK  | INST_LEVEL          | VARCHAR2(2 char)   | 分期付款期數              |    |
|     | REMARK              | VARCHAR2(200 char) | 註記                  |    |
|     | PAY_FLAG            | VARCHAR2(1 char)   | 撥扣款旗標               |    |
|     | PROC_DAY            | DATE               | 過檔處理日               |    |
|     | PROC_TIME           | VARCHAR2(6 char)   | 過檔處理時間              |    |
|     | OUTPUT_DAY          | DATE               | 報表產生日               |    |
|     | OUTPUT_TIME         | VARCHAR2(6 char)   | 報表產生時間              |    |
|     | STMT_DAY            | DATE               | 對帳單產生日              |    |
|     | STMT_TIME           | VARCHAR2(6 char)   | 對帳單產生時間             |    |
|     | EXP_HIST_DAY        | DATE               | 過檔至xxx_OFF的日期       |    |
|     | EXP_HIST_TIME       | VARCHAR2(6 char)   | 過檔至xxx_OFF的時間       |    |
|     | JOUR_FLAG           | VARCHAR2(1 char)   | 分錄切轉旗標              |    |
|     | JOUR_DAY            | DATE               | 產生會計分錄日期            |    |
|     | JOUR_TIME           | VARCHAR2(6 char)   | 產生會計分錄時間            |    |
|     | HOLD_FLAG           | VARCHAR2(1 char)   | 緩帳旗標                |    |
|     | HOLD_DAY            | DATE               | 緩帳日期                |    |
|     | UNHOLD_DAY          | DATE               | 緩帳解除日期              |    |
|     | HOLD_REASON         | VARCHAR2(200 char) | HoldFund原因說明        |    |
|     | TBL_UPD_TIM         | TIMESTAMP          | 表格更新時間              |
