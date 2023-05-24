---
sidebar_position: 41
title: 海外分行(OTBR)
---

### VW_ODS_D_ALHK02

#### 海外分行客戶活期支存資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ALHK02_ACC_ID_NO          | VARCHAR2(20 char) | 存款帳號            |    |
|     | ALHK02_ID_SER_NO          | VARCHAR2(6 char)  | 客戶ID序號          |    |
|     | ALHK02_TAX_ID             | VARCHAR2(11 char) | 稅籍號碼            |    |
|     | ALHK02_BUSI_CODE          | VARCHAR2(2 char)  | 帳號類別            |    |
|     | ALHK02_BR_CODE            | VARCHAR2(4 char)  | 帳號所屬單位別         |    |
| PK  | ALHK02_CURR_CODE          | VARCHAR2(3 char)  | 存款幣別            |    |
|     | ALHK02_ACC_BAL_SIGN       | VARCHAR2(1 char)  | 帳戶餘額正負號         |    |
|     | ALHK02_ACC_BAL            | NUMBER(15, 2)      | 帳戶餘額            |    |
|     | ALHK02_USE_BAL            | NUMBER(15, 2)      | 可用餘額            |    |
|     | ALHK02_PROD_CODE          | VARCHAR2(2 char)  | 產品代碼            |    |
|     | ALHK02_INT_RATE           | NUMBER(6, 4)       | 利率              |    |
|     | ALHK02_OPEN_DATE          | DATE              | 開戶日期            |    |
|     | ALHK02_CLOSE_DATE         | DATE              | 結清日期            |    |
|     | ALHK02_CUST_STAT          | VARCHAR2(1 char)  | 帳號目前狀態          |    |
|     | ALHK02_ACDT_STAT          | VARCHAR2(1 char)  | 事故狀態            |    |
|     | ALHK02_L_TXN_DATE         | DATE              | 最近帳務異動日         |    |
| PK  | ALHK02_DATA_DATE          | DATE              | 資料日期            |    |
|     | ALHK02_TOT_AUM_SIGN       | VARCHAR2(1 char)  | 本月份-總積數正負號      |    |
|     | ALHK02_TOT_AUM_TM         | NUMBER(17, 2)      | 本月份-總積數         |    |
|     | ALHK02_TOT_AUM_H1_SIGN    | VARCHAR2(1 char)  | 上半年度-總積數正負號     |    |
|     | ALHK02_TOT_AUM_H1         | NUMBER(17, 2)      | 上半年度-總積數        |    |
|     | ALHK02_TOT_AUM_H2_SIGN    | VARCHAR2(1 char)  | 下半年度-總積數正負號     |    |
|     | ALHK02_TOT_AUM_H2         | NUMBER(17, 2)      | 下半年度-總積數        |    |
|     | ALHK02_TOT_AUM_TY_SIGN    | VARCHAR2(1 char)  | 本年度-總積數正負號      |    |
|     | ALHK02_TOT_AUM_TY         | NUMBER(17, 2)      | 本年度-總積數         |    |
|     | ALHK02_PFT_CENTER_ID      | VARCHAR2(4 char)  | 利潤中心            |    |
|     | ALHK02_ACCT_OFFICER       | VARCHAR2(5 char)  | AO員編            |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_ALHK03

#### 海外分行客戶定期存款資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ALHK03_ACC_ID_NO          | VARCHAR2(20 char) | 定期存款帳號          |    |
|     | ALHK03_ID_SER_NO          | VARCHAR2(6 char)  | 客戶ID序號          |    |
|     | ALHK03_TAX_ID             | VARCHAR2(11 char) | 稅籍號碼            |    |
|     | ALHK03_BR_CODE            | VARCHAR2(4 char)  | 帳號所屬單位別         |    |
|     | ALHK03_OPEN_DATE          | DATE              | 帳號開戶日期          |    |
|     | ALHK03_CUST_STAT          | VARCHAR2(1 char)  | 帳號目前狀態          |    |
|     | ALHK03_ACDT_STAT          | VARCHAR2(1 char)  | 事故狀態            |    |
|     | ALHK03_L_TXN_DATE         | DATE              | 最近帳務異動日         |    |
| PK  | ALHK03_DATA_DATE          | DATE              | 資料日期            |    |
| PK  | ALHK03_TI_ACC_ID_NO       | VARCHAR2(20 char) | 存單序號            |    |
|     | ALHK03_CURR_CODE          | VARCHAR2(3 char)  | 存款幣別            |    |
|     | ALHK03_ACC_BAL            | NUMBER(15, 2)      | 存單金額            |    |
|     | ALHK03_PROD_CODE          | VARCHAR2(10 char) | 產品代碼            |    |
|     | ALHK03_BEG_DATE           | DATE              | 存單起息日           |    |
|     | ALHK03_END_DATE           | DATE              | 存單到期日           |    |
|     | ALHK03_TERM_UNIT          | VARCHAR2(1 char)  | 存單期數單位          |    |
|     | ALHK03_TERM_NO            | VARCHAR2(3 char)  | 存單期數            |    |
|     | ALHK03_INT_RATE           | NUMBER(6, 4)       | 存單利率            |    |
|     | ALHK03_ADJ_TYPE           | VARCHAR2(1 char)  | 利率調整方式          |    |
|     | ALHK03_TERM_CNT           | NUMBER(6, 0)       | 轉期次數            |    |
|     | ALHK03_DEBT_MARK          | VARCHAR2(1 char)  | 質借註計            |    |
|     | ALHK03_DEBT_DATE          | DATE              | 設定質借日期          |    |
|     | ALHK03_DEBT_PERC          | NUMBER(3, 0)       | 設定質借成數(單位:%)    |    |
|     | ALHK03_PRINCIPAL_GLNO     | VARCHAR2(20 char) | 本金會計科目          |    |
|     | ALHK03_PFT_CENTER_ID      | VARCHAR2(4 char)  | 利潤中心            |    |
|     | ALHK03_ACCT_OFFICER       | VARCHAR2(5 char)  | AO員編            |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_ALHK12

#### 海外分行客戶活期存款資料檔-同業存款
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | HK12_BSN_DATE             | DATE              | 營業日             |    |
| PK  | HK12_DUE_ACT_CODE         | VARCHAR2(5 char)  | 同存帳戶代號          |    |
| PK  | HK12_CCY                  | VARCHAR2(3 char)  | 幣別              |    |
| PK  | HK12_DUE_BANKID           | VARCHAR2(16 char) | 同存行BANKID       |    |
|     | HK12_DUE_BANK_BRIEF_NAME  | VARCHAR2(30 char) | 同存行簡稱           |    |
| PK  | HK12_GLNO                 | VARCHAR2(16 char) | 會計科目代碼-存款       |    |
| PK  | HK12_GLNO_OD              | VARCHAR2(16 char) | 會計科目代碼-透支       |    |
|     | HK12_BALANCE              | NUMBER(16, 2)      | 當日餘額            |    |
|     | HK12_INT_RATE             | NUMBER(6, 4)       | 利率-存款           |    |
|     | HK12_INT_RATE_OD          | NUMBER(6, 4)       | 利率-透支           |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_CM5681

#### 表外曝險
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTID                    | VARCHAR2(16 char) | 客戶代碼            |    |
| PK  | PERMIT_NO                 | VARCHAR2(12 char) | 披覆書號            |    |
|     | CUST_NAME                 | VARCHAR2(70 char) | 客戶名稱            |    |
|     | SYND                      | VARCHAR2(1 char)  | 是否為聯貸案          |    |
|     | TYPE                      | VARCHAR2(8 char)  | 額度代碼            |    |
|     | ATTR                      | VARCHAR2(5 char)  | 循環屬性            |    |
|     | VALID_DATE                | DATE              | 披覆書起日           |    |
|     | EXPIRY_DATE               | DATE              | 披覆書迄日           |    |
|     | CCY                       | VARCHAR2(3 char)  | 幣別              |    |
|     | LINE_AMT                  | NUMBER(15, 2)      | 核准額度            |    |
|     | LINE_AMT_USED             | NUMBER(15, 2)      | 已使用額度           |    |
|     | AVAILABLE_AMT             | NUMBER(15, 2)      | 可使用額度           |    |
|     | REVOLVING                 | VARCHAR2(1 char)  | 是否循環使用          |    |
|     | REVOCABLE                 | VARCHAR2(1 char)  | 是否可撤銷           |    |
|     | USED_TYPE                 | VARCHAR2(3 char)  | 用途編號            |    |
|     | USED_TYPE_DESC            | VARCHAR2(80 char) | 用途說明            |    |
|     | CLIENT_CODE               | VARCHAR2(1 char)  | 身份別             |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_CMBOLT

#### 利率看板案資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CCY                       | VARCHAR2(3 char)  | 幣別代碼            |    |
|     | CCY_NAME_C                | VARCHAR2(20 char) | 幣別中文名稱          |    |
|     | CS_INTRATE                | NUMBER(9, 6)       | 活期利率            |    |
|     | TD1W_INTRATE              | NUMBER(9, 6)       | 定期利率(一週)        |    |
|     | TD2W_INTRATE              | NUMBER(9, 6)       | 定期利率(二週)        |    |
|     | TD3W_INTRATE              | NUMBER(9, 6)       | 定期利率(三週)        |    |
|     | TD1M_INTRATE              | NUMBER(9, 6)       | 定期利率(一個月)       |    |
|     | TD3M_INTRATE              | NUMBER(9, 6)       | 定期利率(三個月)       |    |
|     | TD6M_INTRATE              | NUMBER(9, 6)       | 定期利率(六個月)       |    |
|     | TD9M_INTRATE              | NUMBER(9, 6)       | 定期利率(九個月)       |    |
|     | TD1Y_INTRATE              | NUMBER(9, 6)       | 定期利率(一年)        |    |
|     | PRIME_INTRATE             | NUMBER(9, 6)       | 本行授信利率          |    |
|     | CCY_BOARD_SEQNO           | NUMBER(2, 0)       | 顯示順序            |    |
|     | UPDATE_TIME               | DATE              | 更新時間            |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_CMCIFM_CLINET

#### 核心系統客戶別資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CMCIFM_CLINET_CUSTID      | VARCHAR2(16 char) | 定期存款帳號          |    |
|     | CMCIFM_CLINET_CLIENT_CODE | VARCHAR2(1 char)  | 客戶別             |    |
|     | HO_VOCATION_CODE          | VARCHAR2(8 char)  | 總行行業別           |    |
|     | NAME                      | VARCHAR2(70 char) | 客戶名稱            |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_CPX140

#### 附賣回債券
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BUYSELL                   | VARCHAR2(16 char) | 買賣別             |    |
|     | TRADE_DATE                | DATE              | 交易日             |    |
|     | RPRS_MAT_DATE             | DATE              | 附買賣回日期          |    |
|     | NET_NOMI_AMT              | NUMBER(15, 2)      | RP/RS面額         |    |
|     | REPO_CPNRATE              | NUMBER(11, 8)      | 附買賣回利率          |    |
|     | SEC_CODE_ID               | VARCHAR2(12 char) | 債券代號            |    |
|     | BOND_MAT_DATE             | DATE              | 債券到期日期          |    |
|     | SETTLEAMT                 | NUMBER(15, 2)      | 應收付金額           |    |
|     | CCY                       | VARCHAR2(3 char)  | 債券幣別            |    |
| PK  | TXNT_NO                   | VARCHAR2(16 char) | 交易編號            |    |
|     | CP_INVEST_CLASS           | VARCHAR2(1 char)  | 債券投資分類          |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_LNHK01

#### 海外分行貸放明細資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | HK01_LN_ID_NO             | VARCHAR2(20 char) | 貸放帳號            |    |
|     | HK01_ID_SER_NO            | VARCHAR2(6 char)  | 客戶ID序號          |    |
|     | HK01_TAX_ID               | VARCHAR2(11 char) | 稅籍號碼            |    |
|     | HK01_APRV_NO              | VARCHAR2(12 char) | 額度編號            |    |
|     | HK01_APRV_PROD            | VARCHAR2(8 char)  | 產品代碼            |    |
|     | HK01_BR_CODE              | VARCHAR2(4 char)  | 分行別             |    |
|     | HK01_ACC_TITLE            | VARCHAR2(3 char)  | 科目              |    |
|     | HK01_CHAR_CODE            | VARCHAR2(3 char)  | 授信用途別           |    |
|     | HK01_COLA_MARK            | VARCHAR2(1 char)  | 擔保註記            |    |
|     | HK01_LN_DATE              | DATE              | 貸放日/間接授信起日      |    |
|     | HK01_DUE_DATE             | DATE              | 到期日/間接授信迄日      |    |
|     | HK01_CURR_CODE            | VARCHAR2(3 char)  | 撥貸幣別            |    |
|     | HK01_FST_AMT              | NUMBER(15, 2)      | 初貸金額            |    |
|     | HK01_LN_BAL               | NUMBER(15, 2)      | 現貸餘額            |    |
|     | HK01_ADJ_TYPE             | VARCHAR2(1 char)  | 利率調整方式          |    |
|     | HK01_INT_RATE             | NUMBER(6, 4)       | 貸放利率/間接授信費率     |    |
|     | HK01_RTRN_TYPE            | VARCHAR2(1 char)  | 還款方式            |    |
|     | HK01_L_INT_DATE           | DATE              | 上次繳息迄日          |    |
|     | HK01_N_INT_DATE           | DATE              | 下次繳息日           |    |
|     | HK01_STAT                 | VARCHAR2(1 char)  | 帳號目前狀態          |    |
|     | HK01_DELAY_DAYS           | NUMBER(5, 0)       | 逾期天數            |    |
|     | HK01_DELAY_MM             | NUMBER(4, 0)       | 逾期月數            |    |
|     | HK01_DELAY_DD             | NUMBER(2, 0)       | 逾期零星天           |    |
|     | HK01_ADV_AMT              | NUMBER(15, 2)      | 預收款金額           |    |
|     | HK01_TR_OVERDUE_DATE      | DATE              | 轉催日期            |    |
|     | HK01_OVERDUE_AMT          | NUMBER(15, 2)      | 轉催金額            |    |
|     | HK01_OVERDUE_RTN          | NUMBER(15, 2)      | 催收收回金額          |    |
|     | HK01_TR_BAD_DATE          | DATE              | 轉呆日期            |    |
|     | HK01_BAD_AMT              | NUMBER(15, 2)      | 轉呆金額            |    |
|     | HK01_BAD_RTN              | NUMBER(15, 2)      | 呆帳收回金額          |    |
| PK  | HK01_DATA_DATE            | DATE              | 資料日期            |    |
|     | HK01_TOT_AUM_TM           | NUMBER(17, 2)      | 本月份-總積數         |    |
|     | HK01_TOT_AUM_H1           | NUMBER(17, 2)      | 上半年度-總積數        |    |
|     | HK01_TOT_AUM_H2           | NUMBER(17, 2)      | 下半年度-總積數        |    |
|     | HK01_TOT_AUM_TY           | NUMBER(17, 2)      | 本年度-總積數         |    |
|     | HK01_JCIC_ACC_ID          | VARCHAR2(1 char)  | 聯徵科目別           |    |
|     | HK01_JCIC_ACC_MARK        | VARCHAR2(1 char)  | 聯徵科目別註記         |    |
|     | HK01_JCIC_CHAR_CODE       | VARCHAR2(1 char)  | 聯徵用途別           |    |
|     | HK01_JCIC_BUSS_CATALOG    | VARCHAR2(1 char)  | 聯徵融資業務分類        |    |
|     | HK01_AC_ACC_CODE          | VARCHAR2(10 char) | 對應核心會計科子細目      |    |
|     | HK01_ALL_INT_TOT          | NUMBER(15, 2)      | 已收利息總額          |    |
|     | HK01_TY_INT_TOT           | NUMBER(15, 2)      | 本年度已收利息總額       |    |
|     | HK01_COLA_CODE            | VARCHAR2(3 char)  | 擔保品類別           |    |
|     | HK01_DEPOSIT_INT          | NUMBER(15, 2)      | 提存利息            |    |
|     | HK01_INT_ADJ_MONTHS       | NUMBER(2, 0)       | 利率浮動週期(by月)     |    |
|     | HK01_NEXT_INT_ADJ_DATE    | DATE              | 下次利率調整日         |    |
|     | HK01_INT_TYPE             | VARCHAR2(8 char)  | 利率別代碼           |    |
|     | HK01_INT_TENOR_QTY        | NUMBER(3, 0)       | 牌告利率期間數         |    |
|     | HK01_INT_TENOR_UNIT       | VARCHAR2(1 char)  | 牌告利率期間單位        |    |
|     | HK01_APRV_PROD_CODE       | VARCHAR2(10 char) | 專案代號            |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_LNHK07

#### 海外分行授信客戶資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | HK07_ID_SER_NO            | VARCHAR2(6 char)  | 客戶ID序號          |    |
|     | HK07_TAX_ID               | VARCHAR2(11 char) | 稅籍號碼            |    |
|     | HK07_CUST_NAME            | VARCHAR2(60 char) | 戶名              |    |
|     | HK07_INDUSTRY_CODE        | VARCHAR2(2 char)  | 公司產業別           |    |
|     | HK07_CUST_TYPE            | VARCHAR2(2 char)  | 客戶型態            |    |
|     | HK07_BINS_CODE            | VARCHAR2(6 char)  | 行業別代號-央行        |    |
|     | HK07_BINS_CODE_JCIC       | VARCHAR2(6 char)  | 行業別代號-主計處       |    |
|     | HK07_LN_RATING            | VARCHAR2(1 char)  | 內部授信評等(綜合風險指標)  |    |
|     | HK07_HONOR_RATING         | VARCHAR2(1 char)  | 內部信用評等(財務風險指標)  |    |
|     | HK07_CORP_RATING          | VARCHAR2(2 char)  | 內部信用評等(企金戶信用評等) |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_LNHK08

#### 海外分行額度資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | HK08_APRV_NO              | VARCHAR2(12 char) | 額度編號            |    |
| PK  | HK08_APRV_PROD            | VARCHAR2(8 char)  | 產品代碼            |    |
|     | HK08_ACC_CODE             | VARCHAR2(3 char)  | 科目              |    |
|     | HK08_CHAR_CODE            | VARCHAR2(3 char)  | 用途別             |    |
|     | HK08_CURR_CODE            | VARCHAR2(3 char)  | 額度幣別            |    |
|     | HK08_APRV_AMT             | NUMBER(15, 2)      | 核准額度            |    |
|     | HK08_HOLD_AMT             | NUMBER(15, 2)      | 圈存金額            |    |
|     | HK08_UNUSE_AMT            | NUMBER(15, 2)      | 尚可動用額度          |    |
|     | HK08_LN_BAL               | NUMBER(15, 2)      | 額度現欠餘額          |    |
|     | HK08_BR_CODE              | VARCHAR2(4 char)  | 單位別             |    |
|     | HK08_REC_STAT             | VARCHAR2(1 char)  | 額度狀態            |    |
|     | HK08_APRV_DATE            | DATE              | 核准日期            |    |
|     | HK08_REPLY_INTVL          | DATE              | 批覆書有效止日         |    |
|     | HK08_USE_TYPE             | VARCHAR2(1 char)  | 動用方式            |    |
|     | HK08_FST_LN_DATE          | DATE              | 首筆貸放日           |    |
|     | HK08_ADJ_TYPE             | VARCHAR2(1 char)  | 利率調整方式          |    |
|     | HK08_COLA_MARK            | VARCHAR2(1 char)  | 擔保註記            |    |
|     | HK08_DECIDE_LEVEL         | VARCHAR2(2 char)  | 核定層級            |    |
|     | HK08_APRV_EMP_NO          | VARCHAR2(6 char)  | 核准人員代號          |    |
|     | HK08_BR_MANAGER           | VARCHAR2(6 char)  | 分行經理            |    |
|     | HK08_RCV_AO               | VARCHAR2(6 char)  | 承作A/O代號         |    |
|     | HK08_MTN_AO               | VARCHAR2(6 char)  | 經管A/O代號         |    |
|     | HK08_ALLY_LN_MARK         | VARCHAR2(1 char)  | 聯貸註記            |    |
|     | HK08_ALLY_MAIN_MARK       | VARCHAR2(1 char)  | 聯貸主辦行註計         |    |
|     | HK08_ALLY_LN_DATE         | DATE              | 聯貸合約簽訂日         |    |
|     | HK08_ALLY_LN_RATE         | NUMBER(5, 2)       | 聯貸參貸比例          |    |
|     | HK08_CENT_CODE            | VARCHAR2(4 char)  | 利潤中心            |    |
|     | HK08_AGENCY_BR            | VARCHAR2(4 char)  | 分潤轉介行           |    |
|     | HK08_AGENCY_RATIO         | NUMBER(3, 0)       | 分潤轉介比例(%)       |    |
|     | HK08_ID_SER_NO            | VARCHAR2(6 char)  | 客戶ID序號          |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_MM4901B

#### 港行拆放銀行同業
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TXNT_DATE                 | DATE              | 交易日期            |    |
| PK  | TXNT_NO                   | VARCHAR2(16 char) | 交易編號            |    |
|     | COUNTER_PARTY             | VARCHAR2(16 char) | 交易對手            |    |
|     | COUNTER_PARTY_NAME        | VARCHAR2(70 char) | 交易對手名稱          |    |
|     | VALUE_DATE                | DATE              | 起息日期            |    |
|     | MATUR_DATE                | DATE              | 到期日期            |    |
|     | CCY                       | VARCHAR2(3 char)  | 幣別              |    |
|     | PRINCIPAL                 | NUMBER(15, 2)      | 交易本金            |    |
|     | TOT_INT                   | NUMBER(15, 2)      | 總利息             |    |
|     | INTRATE                   | NUMBER(9, 6)       | 利率(%)           |    |
|     | TOTAL_AMT                 | NUMBER(15, 2)      | 總金額             |    |
|     | THEIR_AGENT               | VARCHAR2(16 char) | 對方的進帳行          |    |
|     | THEIR_AGENT_NAME          | VARCHAR2(70 char) | 對方的進帳行名稱        |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_MM4902B

#### 港行銀行同業拆入
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TXNT_DATE                 | DATE              | 交易日期            |    |
| PK  | TXNT_NO                   | VARCHAR2(16 char) | 交易編號            |    |
|     | COUNTER_PARTY             | VARCHAR2(16 char) | 交易對手            |    |
|     | COUNTER_PARTY_NAME        | VARCHAR2(70 char) | 交易對手名稱          |    |
|     | VALUE_DATE                | DATE              | 起息日期            |    |
|     | MATUR_DATE                | DATE              | 到期日期            |    |
|     | CCY                       | VARCHAR2(3 char)  | 幣別              |    |
|     | PRINCIPAL                 | NUMBER(15, 2)      | 交易本金            |    |
|     | TOT_INT                   | NUMBER(15, 2)      | 總利息             |    |
|     | INTRATE                   | NUMBER(9, 6)       | 利率(%)           |    |
|     | TOTAL_AMT                 | NUMBER(15, 2)      | 總金額             |    |
|     | THEIR_AGENT               | VARCHAR2(16 char) | 對方的進帳行          |    |
|     | THEIR_AGENT_NAME          | VARCHAR2(70 char) | 對方的進帳行名稱        |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_PBREC

#### 港行銀行同業拆入
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_DATE                 | DATE              | 資料日期            |    |
|     | ISIN_CODE                 | VARCHAR2(12 char) | ISIN Code       |    |
| PK  | TXNT_NO                   | VARCHAR2(16 char) | 交易編號            |    |
|     | TRADE_DATE                | DATE              | 交易日期            |    |
|     | ISSUE_DATE                | DATE              | 發行日期(交割日)       |    |
|     | MATURITY_DATE             | DATE              | 到期日期            |    |
|     | CCY                       | VARCHAR2(3 char)  | 幣別              |    |
|     | NOMINAL_AMOUNT            | NUMBER(17, 2)      | 面額              |    |
|     | PROCESS_AMOUNT            | NUMBER(17, 2)      | 本金              |    |
|     | ACCNO                     | VARCHAR2(8 char)  | 本金會科            |    |
|     | RATE                      | NUMBER(13, 9)      | 票面利率            |    |
|     | ACCRUED_INTEREST          | NUMBER(17, 2)      | 應計利息(累計)        |    |
|     | INT_ACCNO                 | VARCHAR2(8 char)  | 應計息會科           |    |
|     | INTEREST_DATE             | DATE              | 付息日             |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_M_CP8101B

#### 債券應計息
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSIP                     | VARCHAR2(12 char) | 債券ISINCODE      |    |
|     | NAME                      | VARCHAR2(70 char) | 債券名稱            |    |
| PK  | BOND_NO                   | VARCHAR2(16 char) | 交易編號            |    |
|     | INTEREST                  | NUMBER(15, 2)      | 累計提存息           |    |
|     | CCY                       | VARCHAR2(3 char)  | 幣別              |    |
|     | NOTIONAL                  | NUMBER(15, 2)      | 名目本金            |    |
|     | RATE                      | NUMBER(12, 8)      | 利率              |    |
|     | NEXT_PAY_DATE             | DATE              | 下次收息日           |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_M_LNHK04

#### 海外分行貸放每月積數資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | HK04_LN_ID_NO             | VARCHAR2(20 char) | 貸放帳號            |    |
| PK  | HK04_DATA_DATE            | DATE              | 資料日期            |    |
|     | HK04_TOT_AUM_LY           | NUMBER(17, 2)      | 去年度-總積數         |    |
|     | HK04_TOT_AUM_M1           | NUMBER(17, 2)      | 前1個月-總積數        |    |
|     | HK04_TOT_AUM_M2           | NUMBER(17, 2)      | 前2個月-總積數        |    |
|     | HK04_TOT_AUM_M3           | NUMBER(17, 2)      | 前3個月-總積數        |    |
|     | HK04_TOT_AUM_M6           | NUMBER(17, 2)      | 前6個月-總積數        |    |
|     | HK04_TOT_AUM_M9           | NUMBER(17, 2)      | 前9個月-總積數        |    |
|     | HK04_TOT_AUM_M12          | NUMBER(17, 2)      | 前12個月-總積數       |    |
|     | TBL_UPD_TIM               | TIMESTAMP         | 表格更新時間          |
