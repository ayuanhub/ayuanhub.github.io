---
sidebar_position: 24
title: 投資管理系統(FMIM)
---

### VW_ODS_D_BILLS

#### 票券
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | STOCKDATE        | DATE              | 庫存部位日期                 |    |
|     | STOCKTYPE        | VARCHAR2(6 char)  | 票券類別(TB/CD/CP/BA/ABCP) |    |
|     | STOCKNO          | VARCHAR2(12 char) | 承銷編號                   |    |
|     | ISSUER           | VARCHAR2(10 char) | 發票人                    |    |
|     | GUARANTOR        | VARCHAR2(10 char) | 保證機構                   |    |
|     | STOCKAMT1        | FLOAT             | 庫存面額                   |    |
|     | ISSUEDATE        | DATE              | 發票日期                   |    |
|     | MATURITYDATE     | DATE              | 到期日期                   |    |
|     | PRIMARYRATE      | FLOAT             | 買進利率                   |    |
|     | TTCOST           | FLOAT             | 萬元成本(票面利率)             |    |
|     | STOCKCOST        | FLOAT             | 庫存成本                   |    |
|     | STOCKINTEREST    | FLOAT             | 應計利息                   |    |
|     | MATURITYAMT      | FLOAT             | 到期值                    |    |
|     | PREVIOUSTAX      | FLOAT             | 前手稅款                   |    |
|     | ISSUEDATE1       | DATE              | 首買日期                   |    |
|     | ACCNO            | VARCHAR2(10 char) | 會計科目                   |    |
|     | MARKETVALUE      | FLOAT             | 市價                     |    |
|     | IFRS9TYPE        | VARCHAR2(5 char)  | 帳別(FVPL)               |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_BOND

#### 每日庫存部位資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | STOCKDATE        | DATE              | 庫存部位日期                 |    |
| PK  | BONDNO           | VARCHAR2(15 char) | 債券代號                   |    |
|     | BONDSNAME        | VARCHAR2(40 char) | 債券簡稱                   |    |
|     | COUPON           | NUMBER(13, 5)      | 債券票面利率                 |    |
|     | MATURITYDATE     | DATE              | 到期日                    |    |
|     | CURRENCY         | VARCHAR2(5 char)  | 幣別                     |    |
|     | TDINVNPA         | NUMBER(17, 0)      | 庫存部位                   |    |
|     | TDINVBOOKVALUE   | NUMBER(19, 2)      | 庫存成本(原幣)               |    |
|     | MARKETVALUE      | NUMBER(19, 2)      | 市值(原幣)                 |    |
| PK  | RISKTYPE         | VARCHAR2(1 char)  | 銀行簿/交易簿                |    |
| PK  | IFRS9TYPE        | VARCHAR2(5 char)  | IFRS分類                 |    |
| PK  | BOOKBR           | VARCHAR2(3 char)  | 掛帳行                    |    |
|     | ACCNO            | VARCHAR2(60 char) | 會計科目                   |    |
|     | INT_ACCNO        | VARCHAR2(60 char) | 利息會計科目                 |    |
|     | LASTPAYDATE      | DATE              | 上次付息日                  |    |
|     | NEXTPAYDATE      | DATE              | 下次付息日                  |    |
|     | ACCINT_ORI       | NUMBER(19, 2)      | 應計利息(上次付息日至庫存日期的應計息原幣) |    |
|     | ACCINT_TWD       | NUMBER(17, 0)      | 應計利息(上次付息日至庫存日期的應計息台幣) |    |
|     | ACCINT_ORI_DAY   | NUMBER(19, 2)      | 日提息(原幣)                |    |
|     | ACCINT_TWD_DAY   | NUMBER(17, 0)      | 日提息(台幣)                |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_BONDISSUE

#### 金融負債(AC3451)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | STOCKDATE        | DATE              | 庫存部位日期                 |    |
|     | BONDNO           | VARCHAR2(10 char) | 債券代號                   |    |
|     | BONDSNAME        | VARCHAR2(10 char) | 債券簡稱                   |    |
|     | ISSUEDATE        | DATE              | 發行日期                   |    |
|     | MATURITYDATE     | DATE              | 到期日期                   |    |
|     | DEALAMT          | FLOAT             | 面額                     |    |
|     | COUPON           | FLOAT             | 票面利率                   |    |
|     | ACCNO            | VARCHAR2(10 char) | 會計科目                   |    |
|     | ACCRUEDINTEREST  | FLOAT             | 應計利息                   |    |
|     | INTERESTFREQ     | VARCHAR2(10 char) | 付息區間(付息頻率)             |    |
|     | NEXTINTERESTDATE | DATE              | 下次付息日                  |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_BSRPRS

#### 票券RP/票券RS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | STOCKDATE        | DATE              | 庫存部位日期                 |    |
|     | BUYSELL          | VARCHAR2(4 char)  | 買賣別                    |    |
|     | DEALDATE         | DATE              | 交易日                    |    |
|     | RPRSDATE         | DATE              | 附買賣回日期                 |    |
|     | RPRSAMT          | FLOAT             | RP/RS面額                |    |
|     | RPRSRATE         | FLOAT             | 附買賣回利率                 |    |
|     | CPNO             | VARCHAR2(12 char) | 票券代號                   |    |
|     | ISSUEDATE        | DATE              | 發票日期                   |    |
|     | MATURITYDATE     | DATE              | 到期日期                   |    |
|     | SETTLEAMT        | FLOAT             | 應收付金額                  |    |
|     | ACCNO            | VARCHAR2(10 char) | 會計科目                   |    |
|     | DEALNO           | VARCHAR2(5 char)  | 成交單號                   |    |
|     | ACCRUEDINTEREST  | FLOAT             | 應計利息                   |    |
|     | IFRS9TYPE        | VARCHAR2(5 char)  | 帳別(FVPL)               |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEMMM

#### 外匯交易主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C001             | VARCHAR2(4 char)  | 營業單位                   |    |
|     | C002             | VARCHAR2(12 char) | 營業單位名稱                 |    |
| PK  | C003             | VARCHAR2(16 char) | 交易編號                   |    |
|     | C004             | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C005             | DATE              | 交易日期                   |    |
|     | C006             | VARCHAR2(1 char)  | 交易副檔型態                 |    |
|     | C007             | VARCHAR2(2 char)  | 交易副檔序號                 |    |
|     | C008             | VARCHAR2(2 char)  | 版次                     |    |
|     | C009             | VARCHAR2(1 char)  | 戶況                     |    |
|     | C010             | VARCHAR2(4 char)  | 前次記錄型態                 |    |
|     | C011             | VARCHAR2(4 char)  | 本次記錄型態                 |    |
|     | C012             | VARCHAR2(20 char) | 本次記錄型態說明               |    |
|     | C013             | DATE              | 訂約日                    |    |
|     | C014             | DATE              | 起息日                    |    |
|     | C015             | DATE              | 到期日                    |    |
|     | C016             | VARCHAR2(2 char)  | 期間別                    |    |
|     | C017             | VARCHAR2(1 char)  | 交易目的                   |    |
|     | C018             | DATE              | 電文發送日(MT320)           |    |
|     | C019             | DATE              | 電文發送日(MT202)           |    |
|     | C020             | VARCHAR2(1 char)  | 重新讀取編號碼                |    |
|     | C021             | VARCHAR2(1 char)  | 交易主管放行FLAG             |    |
|     | C022             | VARCHAR2(1 char)  | 交割主管放行FLAG             |    |
|     | C023             | VARCHAR2(1 char)  | 修改放行FLAG               |    |
|     | C024             | VARCHAR2(1 char)  | 刪除FLAG                 |    |
|     | C025             | VARCHAR2(40 char) | 刪除原因                   |    |
|     | C026             | VARCHAR2(1 char)  | 是否出訂約帳FLAG             |    |
|     | C027             | VARCHAR2(1 char)  | 是否已出電文FLAG             |    |
|     | C028             | VARCHAR2(2 char)  | 額度類別                   |    |
|     | C029             | NUMBER(12, 6)      | 額度適用匯率                 |    |
|     | C030             | VARCHAR2(3 char)  | 新額度幣別                  |    |
|     | C031             | VARCHAR2(3 char)  | 原額度幣別                  |    |
|     | C032             | NUMBER(18, 0)      | 扣減額度                   |    |
|     | C033             | NUMBER(18, 0)      | 恢復額度                   |    |
|     | C034             | VARCHAR2(5 char)  | 交易對象銀行代號               |    |
|     | C035             | VARCHAR2(4 char)  | 交易對象路透社代碼              |    |
|     | C036             | VARCHAR2(12 char) | 交易對象SWIFTCODE          |    |
|     | C037             | VARCHAR2(35 char) | 交易對象名稱                 |    |
|     | C038             | VARCHAR2(5 char)  | 總行代號                   |    |
|     | C039             | VARCHAR2(2 char)  | 交易對象所在國別               |    |
|     | C040             | VARCHAR2(2 char)  | 總行所在國別                 |    |
|     | C041             | VARCHAR2(1 char)  | 子公司FLAG                |    |
|     | C042             | VARCHAR2(1 char)  | 交易方式                   |    |
|     | C043             | VARCHAR2(5 char)  | 經紀商代號                  |    |
|     | C044             | VARCHAR2(20 char) | 經紀商名稱                  |    |
|     | C045             | NUMBER(18, 0)      | 經紀商傭金                  |    |
|     | C046             | NUMBER(12, 6)      | 經紀商費率                  |    |
|     | C047             | VARCHAR2(3 char)  | 拆放幣別                   |    |
|     | C048             | NUMBER(18, 4)      | 拆放金額                   |    |
|     | C049             | NUMBER(3, 0)       | 天數                     |    |
|     | C050             | NUMBER(12, 6)      | 年利率                    |    |
|     | C051             | NUMBER(3, 0)       | 計息基準天數                 |    |
|     | C052             | NUMBER(18, 4)      | 利息                     |    |
|     | C053             | NUMBER(18, 4)      | 到期本利和                  |    |
|     | C054             | VARCHAR2(5 char)  | 本行進帳行代號                |    |
|     | C055             | VARCHAR2(12 char) | 本行進帳行SWIFTCODE         |    |
|     | C056             | VARCHAR2(20 char) | 本行進帳行帳號                |    |
|     | C057             | VARCHAR2(35 char) | 本行進帳行名稱                |    |
|     | C058             | VARCHAR2(35 char) | 本行進帳行地址一               |    |
|     | C059             | VARCHAR2(35 char) | 本行進帳行地址二               |    |
|     | C060             | VARCHAR2(35 char) | 本行進帳行地址三               |    |
|     | C061             | VARCHAR2(5 char)  | 本行扣帳行代號                |    |
|     | C062             | VARCHAR2(12 char) | 本行扣帳行SWIFTCODE         |    |
|     | C063             | VARCHAR2(20 char) | 本行扣帳行帳號                |    |
|     | C064             | VARCHAR2(35 char) | 本行扣帳行名稱                |    |
|     | C065             | VARCHAR2(35 char) | 本行扣帳行地址一               |    |
|     | C066             | VARCHAR2(35 char) | 本行扣帳行地址二               |    |
|     | C067             | VARCHAR2(35 char) | 本行扣帳行地址三               |    |
|     | C068             | VARCHAR2(5 char)  | 他行進帳行代號                |    |
|     | C069             | VARCHAR2(12 char) | 他行進帳行SWIFTCODE         |    |
|     | C070             | VARCHAR2(20 char) | 他行進帳行帳號                |    |
|     | C071             | VARCHAR2(35 char) | 他行進帳行名稱                |    |
|     | C072             | VARCHAR2(35 char) | 他行進帳行地址一               |    |
|     | C073             | VARCHAR2(35 char) | 他行進帳行地址二               |    |
|     | C074             | VARCHAR2(35 char) | 他行進帳行地址三               |    |
|     | C075             | VARCHAR2(5 char)  | 中介行代號                  |    |
|     | C076             | VARCHAR2(12 char) | 中介行SWIFTCODE           |    |
|     | C077             | VARCHAR2(20 char) | 中介行帳號                  |    |
|     | C078             | VARCHAR2(35 char) | 中介行名稱                  |    |
|     | C079             | VARCHAR2(35 char) | 中介行地址一                 |    |
|     | C080             | VARCHAR2(35 char) | 中介行地址二                 |    |
|     | C081             | VARCHAR2(35 char) | 中介行地址三                 |    |
|     | C082             | VARCHAR2(40 char) | 付款指示                   |    |
|     | C083             | VARCHAR2(1 char)  | 訂約覆核FLAG               |    |
|     | C084             | VARCHAR2(1 char)  | 電話確認記號                 |    |
|     | C085             | VARCHAR2(20 char) | 對方電話確認人員               |    |
|     | C086             | VARCHAR2(8 char)  | 確認時間                   |    |
|     | C087             | VARCHAR2(10 char) | 交易員名稱                  |    |
|     | C088             | VARCHAR2(10 char) | 交易主管名稱                 |    |
|     | C089             | VARCHAR2(10 char) | 交割員名稱                  |    |
|     | C090             | VARCHAR2(10 char) | 交割主管名稱                 |    |
|     | C091             | VARCHAR2(2 char)  | 業務代碼                   |    |
|     | C601             | VARCHAR2(3 char)  | IAEVENTNO.             |    |
|     | C602             | VARCHAR2(2 char)  | ACCRUALTYPE            |    |
|     | C603             | NUMBER(18, 0)      | TOTALPOSTEDINT         |    |
|     | C604             | NUMBER(18, 0)      | TOTALPAIDINT           |    |
|     | C605             | DATE              | LASTPOSTEDDATE         |    |
|     | C093             | DATE              | 記錄起息日(控制流程用)           |    |
|     | C094             | VARCHAR2(1 char)  | MT202發送型式              |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEMMMB3

#### 貨幣市場交易報表檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1               | VARCHAR2(16 char) | 交易編號                   |    |
|     | C2               | VARCHAR2(2 char)  | 國別                     |    |
|     | C3               | DATE              | 到期日                    |    |
|     | C4               | VARCHAR2(3 char)  | 拆放幣別                   |    |
|     | C5               | NUMBER(18, 2)      | 拆放金額                   |    |
|     | C6               | VARCHAR2(12 char) | SWIFTCODE              |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_LON

#### 拆入拆出款
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | STOCKDATE        | DATE              | 庫存部位日期                 |    |
|     | SETTLEDATE       | DATE              | 交割日期                   |    |
|     | BUYSELL          | VARCHAR2(4 char)  | 拆放別                    |    |
|     | CUSTID           | VARCHAR2(10 char) | 客戶編號                   |    |
|     | CUSTNAME         | VARCHAR2(12 char) | 客戶名稱                   |    |
|     | MATURITYDATE     | DATE              | 到期日                    |    |
|     | DEALER           | VARCHAR2(10 char) | 交易員                    |    |
|     | DEALNO           | VARCHAR2(12 char) | 成交單號                   |    |
|     | DEALDATE         | DATE              | 拆出日                    |    |
|     | VALUEDATE        | DATE              | 起息日                    |    |
|     | ACCRUEDTYPE      | VARCHAR2(10 char) | 利息收付類別                 |    |
|     | AMT              | FLOAT             | 本金                     |    |
|     | DEALYIELD        | FLOAT             | 成交利率                   |    |
|     | ACCRUEDINTEREST  | FLOAT             | 利息                     |    |
|     | REVEXPAMT        | FLOAT             | 應收付金額                  |    |
|     | MATURITYAMT      | FLOAT             | 到期金額                   |    |
|     | ACCNO            | VARCHAR2(10 char) | 會計科目                   |    |
|     | INTEREST         | FLOAT             | 預付/收利息                 |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_RPRS

#### 每日的債券RPRS資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | STOCKDATE        | DATE              | 庫存部位日期                 |    |
| PK  | DEALNO           | VARCHAR2(15 char) | 交易單號                   |    |
|     | BUYSELL          | VARCHAR2(5 char)  | 買賣別                    |    |
|     | DEALDATE         | DATE              | 交易日                    |    |
|     | SETTLEDATE       | DATE              | 交割日                    |    |
|     | RPRSDATE         | DATE              | 附買賣回日期(到期交易日)          |    |
|     | PRPSSETTLEDATE   | DATE              | 到期交割日                  |    |
|     | CURRENCY         | VARCHAR2(5 char)  | 幣別                     |    |
|     | RPRSAMT          | NUMBER(17, 0)      | RP/RS面額                |    |
|     | RPRSRATE         | NUMBER(15, 6)      | 附買賣回利率                 |    |
|     | BONDNO           | VARCHAR2(15 char) | 債券代號                   |    |
|     | BONDSNAME        | VARCHAR2(40 char) | 債券簡稱                   |    |
|     | COUPON           | NUMBER(13, 5)      | 債券票面利率                 |    |
|     | MATURITYDATE     | DATE              | 債券到期日期                 |    |
|     | SETTLEAMT        | NUMBER(17, 2)      | 應收付金額(交割金額)            |    |
|     | ACCNO            | VARCHAR2(8 char)  | 會計科目(本金會科)             |    |
|     | RPRSINT_ORI      | NUMBER(17, 2)      | 附回利息(整段利息原幣)           |    |
|     | RPRSINT_TWD      | NUMBER(17, 0)      | 附回利息(整段利息台幣)           |    |
|     | ACCINT_ORI       | NUMBER(17, 2)      | 應計利息(至庫存日期的應計息原幣)      |    |
|     | ACCINT_TWD       | NUMBER(17, 0)      | 應計利息(至庫存日期的應計息台幣)      |    |
|     | INT_ACCNO        | VARCHAR2(8 char)  | 會計科目(利息會科)             |    |
|     | BOOK_TYPE        | VARCHAR2(1 char)  | 風險簿別                   |    |
|     | HOLD_PROPERTY    | VARCHAR2(10 char) | 持有屬性                   |    |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間                 |
