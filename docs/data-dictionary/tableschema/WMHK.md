---
sidebar_position: 53
title: 信託_保管銀行系統(WMHK)
---

### VW_ODS_D_CGM037P

#### 客戶保管費參數明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CGM037010   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | CGM037020   | VARCHAR2(6 char)   | 歸屬交割交易所碼         |    |
|     | CGM037030   | VARCHAR2(6 char)   | 上手代號             |    |
|     | CGM037040   | VARCHAR2(3 char)   | 群組類別             |    |
|     | CGM037050   | VARCHAR2(3 char)   | 交割幣別             |    |
|     | CGM037060   | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | CGM037070   | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | CGM037080   | VARCHAR2(4 char)   | 分行代號             |    |
|     | CGM037090   | VARCHAR2(11 char)  | 身份證號             |    |
|     | CGM037100   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | CGM037110   | NUMBER(13, 2)       | 交易金額級距（含         |    |
|     | CGM037120   | NUMBER(9, 5)        | 人工單年費率％          |    |
|     | CGM037130   | NUMBER(13, 2)       | 人工單最低保管費         |    |
|     | CGM037140   | NUMBER(13, 2)       | 人工單最高保管費         |    |
|     | CGM037150   | NUMBER(9, 5)        | 電子單年費率％          |    |
|     | CGM037160   | NUMBER(13, 2)       | 電子單最低保管費         |    |
|     | CGM037170   | NUMBER(13, 2)       | 電子單最高保管費         |    |
|     | CGM037991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | CGM037992   | DATE               | 異動日期             |    |
|     | CGM037993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | CGM037994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | CGM037995   | DATE               | 核准日期             |    |
|     | CGM037996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_COM006P

#### 商品之委託期間禁止交易設定檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COM006010   | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | COM006020   | VARCHAR2(10 char)  | 商品代號             |    |
|     | COM006030   | DATE               | 禁止委託期間起日         |    |
|     | COM006040   | DATE               | 禁止委託期間迄日         |    |
|     | COM006050   | VARCHAR2(1 char)   | 禁止期間啟用碼          |    |
|     | COM006060   | VARCHAR2(100 char) | 商品名稱全名           |    |
|     | COM006070   | VARCHAR2(200 char) | 商品備註             |    |
|     | COM006080   | VARCHAR2(100 char) | 預留欄位             |    |
|     | COM006991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | COM006992   | DATE               | 異動日期             |    |
|     | COM006993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | COM006994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | COM006995   | DATE               | 核准日期             |    |
|     | COM006996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_COM007P

#### 商品名目手續費率設定檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COM007010   | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | COM007020   | VARCHAR2(10 char)  | 商品代號             |    |
|     | COM007030   | NUMBER(9, 5)        | 顧客買進手續費率%        |    |
|     | COM007040   | NUMBER(9, 5)        | 顧客賣出手續費率%        |    |
|     | COM007050   | NUMBER(9, 5)        | 行員買進手續費率%        |    |
|     | COM007060   | NUMBER(9, 5)        | 行員賣出手續費率%        |    |
|     | COM007991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | COM007992   | DATE               | 異動日期             |    |
|     | COM007993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | COM007994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | COM007995   | DATE               | 核准日期             |    |
|     | COM007996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_COM008P

#### 商品資料主管機關附加檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COM008010   | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | COM008020   | VARCHAR2(10 char)  | 商品代號             |    |
|     | COM008030   | VARCHAR2(2 char)   | 央行商品類別           |    |
|     | COM008040   | VARCHAR2(3 char)   | 央行商品註冊國          |    |
|     | COM008050   | VARCHAR2(3 char)   | 央行原始風險國          |    |
|     | COM008060   | VARCHAR2(3 char)   | 央行最終風險國          |    |
|     | COM008070   | VARCHAR2(3 char)   | 央行債務人國別          |    |
|     | COM008080   | VARCHAR2(2 char)   | 央行註冊行業別          |    |
|     | COM008090   | VARCHAR2(2 char)   | 央行原始風險行業別        |    |
|     | COM008100   | VARCHAR2(2 char)   | 央行最終風險行業別        |    |
|     | COM008110   | VARCHAR2(1 char)   | 央行國內投資國外         |    |
|     | COM008120   | VARCHAR2(1 char)   | 央行剩餘期間           |    |
|     | COM008130   | VARCHAR2(240 char) | 商品英文名稱           |    |
|     | COM008140   | VARCHAR2(3 char)   | 商品註冊地報稅          |    |
|     | COM008991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | COM008992   | DATE               | 異動日期             |    |
|     | COM008993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | COM008994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | COM008995   | DATE               | 核准日期             |    |
|     | COM008996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | COM008999   | VARCHAR2(10 char)  | 異動程式             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_COMFIL

#### 商品資料主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COM01       | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | COM02       | VARCHAR2(10 char)  | 商品代號             |    |
|     | COM03       | VARCHAR2(32 char)  | 商品中文名稱           |    |
|     | COM04       | VARCHAR2(1 char)   | 商品類別             |    |
|     | COM05       | VARCHAR2(3 char)   | 交易所交割幣別          |    |
|     | COM06       | NUMBER(9, 0)        | 最少交易金額           |    |
|     | COM07       | NUMBER(9, 0)        | 最少交易單位           |    |
|     | COM08       | NUMBER(15, 6)       | 市價               |    |
|     | COM09       | NUMBER(13, 0)       | 交易股數單位－每手        |    |
|     | COM10       | VARCHAR2(1 char)   | 禁止交易註記           |    |
|     | COM11       | DATE               | 價格日期             |    |
|     | COM12       | VARCHAR2(2 char)   | 商品類別－券商公會        |    |
|     | COM13       | VARCHAR2(3 char)   | SPREADTYPE       |    |
|     | COM14       | VARCHAR2(3 char)   | 交易所報價幣別          |    |
|     | COM15       | VARCHAR2(3 char)   | 對上手交割幣別          |    |
|     | COM16       | VARCHAR2(2 char)   | 類股               |    |
|     | COM17       | DATE               | 禁止交易日            |    |
|     | COM18       | VARCHAR2(2 char)   | 商品屬性             |    |
|     | COM19       | VARCHAR2(12 char)  | ISINCODE         |    |
|     | COM20       | VARCHAR2(9 char)   | CUSIPCODE        |    |
|     | COM21       | VARCHAR2(10 char)  | 交易所商品代號          |    |
|     | COM22       | VARCHAR2(1 char)   | 商品警示註記           |    |
|     | COM23       | VARCHAR2(20 char)  | 交易所商品代碼          |    |
|     | COM24       | VARCHAR2(1 char)   | DBU專業限制          |    |
|     | COM25       | VARCHAR2(50 char)  | 商品英文名稱           |    |
|     | COM26       | VARCHAR2(1 char)   | OBU專業限制          |    |
|     | COM27       | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | COM28       | VARCHAR2(1 char)   | 是否可合併下單          |    |
|     | COM29       | VARCHAR2(1 char)   | 商品風險等級           |    |
|     | COM30       | VARCHAR2(1 char)   | ExceptionAllowed |    |
|     | COM31       | VARCHAR2(1 char)   | 客戶部門分類           |    |
|     | COM32       | VARCHAR2(1 char)   | HighYieldProduct |    |
|     | COM33       | VARCHAR2(2 char)   | ProductType      |    |
|     | COM34       | VARCHAR2(1 char)   | AssentClass      |    |
|     | COM99       | VARCHAR2(50 char)  | 保留欄位             |    |
|     | COM991      | VARCHAR2(14 char)  | 異動人員             |    |
|     | COM992      | DATE               | 異動日期             |    |
|     | COM993      | VARCHAR2(6 char)   | 異動時間             |    |
|     | COM994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | COM995      | DATE               | 核准日期             |    |
|     | COM996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | COM35       | VARCHAR2(12 char)  | 存摺簡稱             |    |
|     | COM36       | VARCHAR2(6 char)   | 商品預設上手           |    |
|     | COM37       | VARCHAR2(10 char)  | 發行公司代號           |    |
|     | COM38       | VARCHAR2(10 char)  | 保留欄位1            |    |
|     | COM39       | VARCHAR2(10 char)  | 保留欄位2            |    |
|     | COM40       | VARCHAR2(2 char)   | 配息頻率             |    |
|     | COM41       | DATE               | 發行日期             |    |
|     | COM42       | DATE               | 首次買回權行使日         |    |
|     | COM43       | NUMBER(10, 6)       | 票面利率             |    |
|     | COM44       | DATE               | 到期執行日            |    |
|     | COM45       | NUMBER(8, 0)        | 保留欄位3            |    |
|     | COM46       | NUMBER(8, 0)        | 保留欄位4            |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_DTLFIL

#### 除權除息明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DTL01       | VARCHAR2(6 char)   | 交易所代號            |    |
|     | DTL02       | VARCHAR2(10 char)  | 商品代號             |    |
|     | DTL03       | DATE               | 基準日期             |    |
|     | DTL03A      | VARCHAR2(6 char)   | 上手代號             |    |
|     | DTL04       | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | DTL05       | VARCHAR2(11 char)  | 身份證號             |    |
|     | DTL058      | VARCHAR2(20 char)  | 信託帳號             |    |
|     | DTL06       | NUMBER(17, 0)       | 基準日股數            |    |
|     | DTL07       | NUMBER(17, 2)       | 實際撥扣款金額          |    |
|     | DTL98       | NUMBER(12, 9)       | 捨棄尾數             |    |
|     | DTL99       | VARCHAR2(20 char)  | 保留欄位             |    |
|     | DTL08       | VARCHAR2(1 char)   | 股利撥款註記           |    |
|     | DTL09       | DATE               | 實際撥扣日／入帳日        |    |
|     | DTL10       | VARCHAR2(1 char)   | 處理方式             |    |
|     | DTL11       | NUMBER(17, 2)       | 上手費用             |    |
|     | DTL12       | NUMBER(17, 2)       | 交易所費用            |    |
|     | DTL13       | NUMBER(17, 2)       | 上手其他費用           |    |
|     | DTL14       | NUMBER(17, 9)       | 券商費用計算比例         |    |
|     | DTL15       | NUMBER(17, 2)       | 實際分配股數或金額        |    |
|     | DTL16       | NUMBER(17, 2)       | 券商費用             |    |
|     | DTL17       | VARCHAR2(1 char)   | 平倉調整處理碼          |    |
|     | DTL18       | DATE               | 成交日期             |    |
|     | DTL19       | VARCHAR2(8 char)   | 成交單號             |    |
|     | DTL20       | DATE               | 處理日期             |    |
|     | DTL21       | VARCHAR2(3 char)   | 交割幣別             |    |
|     | DTL22       | DATE               | 預計出金日            |    |
|     | DTL23       | VARCHAR2(1 char)   | 資料來源碼            |    |
|     | DTL24       | DATE               | 原始預計撥扣日          |    |
|     | DTL25       | DATE               | 調後預計撥扣日          |    |
|     | DTL26       | VARCHAR2(10 char)  | 出金申請編號           |    |
|     | DTL26A      | VARCHAR2(3 char)   | 銀行編號             |    |
|     | DTL26B      | DATE               | 匯率日期             |    |
|     | DTL26C      | VARCHAR2(3 char)   | 匯率幣別             |    |
|     | DTL26D      | NUMBER(11, 4)       | 匯率               |    |
|     | DTL27       | NUMBER(17, 2)       | 銀行匯費             |    |
|     | DTL27A      | DATE               | 券商費用參數設定日        |    |
|     | DTL28       | NUMBER(17, 2)       | 原始分配股數或金額        |    |
|     | DTL29       | VARCHAR2(1 char)   | 上手淨利撥扣碼          |    |
|     | DTL30       | VARCHAR2(1 char)   | 實際分配客戶撥扣碼        |    |
|     | DTL30A      | VARCHAR2(1 char)   | 費用計畢可撥扣碼         |    |
|     | DTL31       | VARCHAR2(1 char)   | 資料調整碼            |    |
|     | DTL32       | DATE               | 異動日期             |    |
|     | DTL33       | VARCHAR2(6 char)   | 異動時間             |    |
|     | DTL34       | VARCHAR2(14 char)  | 異動人員             |    |
|     | DTL35       | DATE               | 上手配發日            |    |
|     | DTL36       | DATE               | 最後交易日            |    |
|     | DTL37       | VARCHAR2(1 char)   | 券商費用計算方式         |    |
|     | DTL38       | DATE               | 上手費用設定日          |    |
|     | DTL39       | NUMBER(17, 9)       | 上手費用計算比例         |    |
|     | DTL40       | VARCHAR2(1 char)   | 上手費用計算方式         |    |
|     | DTL41       | DATE               | 交易所費用設定日         |    |
|     | DTL42       | NUMBER(17, 9)       | 交易所費用計算比例        |    |
|     | DTL43       | VARCHAR2(1 char)   | 交易所費用計算方式        |    |
|     | DTL44       | NUMBER(12, 9)       | 上手費用捨棄尾數         |    |
|     | DTL45       | NUMBER(12, 9)       | 上手其他捨棄尾數         |    |
|     | DTL46       | NUMBER(12, 9)       | 交易所費用捨棄尾數        |    |
|     | DTL47       | NUMBER(12, 9)       | 券商費用捨棄尾數         |    |
|     | DTL48       | NUMBER(17, 2)       | 上手費用短收金額         |    |
|     | DTL49       | NUMBER(17, 2)       | 上手其他短收金額         |    |
|     | DTL50       | NUMBER(17, 2)       | 交易所費用短收金額        |    |
|     | DTL51       | NUMBER(17, 2)       | 券商費用短收金額         |    |
|     | DTL52       | VARCHAR2(1 char)   | 參加碼              |    |
|     | DTL53       | DATE               | 參加日期             |    |
|     | DTL54       | NUMBER(17, 2)       | 確認認購股數           |    |
|     | DTL55       | NUMBER(17, 2)       | 實際認購金額           |    |
|     | DTL56       | DATE               | 庫存配給日            |    |
|     | DTL01A      | VARCHAR2(6 char)   | 標的交易所代號          |    |
|     | DTL02A      | VARCHAR2(10 char)  | 標的商品代號           |    |
|     | DTL57       | VARCHAR2(50 char)  | 備註說明             |    |
|     | DTL58       | DATE               | 除權成本取盤價日         |    |
|     | DTL59       | NUMBER(15, 6)       | 除權成本認定盤價         |    |
|     | DTL60       | NUMBER(15, 2)       | 除權盤價成本－原         |    |
|     | DTL61       | NUMBER(15, 2)       | 除權入庫總成本－原        |    |
|     | DTL62       | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | DTL63       | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | DTL64       | VARCHAR2(3 char)   | 實際交割基礎幣別         |    |
|     | DTL65       | DATE               | 換匯匯率最近日          |    |
|     | DTL66       | VARCHAR2(2 char)   | 換匯性質別            |    |
|     | DTL67       | VARCHAR2(6 char)   | 換匯時間             |    |
|     | DTL68       | NUMBER(16, 9)       | 換匯轉換匯率           |    |
|     | DTL69       | NUMBER(15, 2)       | 除息撥扣金額－基         |    |
|     | DTL70       | NUMBER(12, 9)       | 除息撥扣捨去尾數         |    |
|     | DTL71       | NUMBER(2, 0)        | 已被調整次數           |    |
|     | DTL72       | NUMBER(9, 2)        | 除息撥扣調額－基         |    |
|     | DTL73       | NUMBER(15, 2)       | 成本及撥扣額－基         |    |
|     | DTL74       | NUMBER(13, 2)       | 除權母零股調額－原        |    |
|     | DTL75       | NUMBER(13, 2)       | 除權母零股調額－基        |    |
|     | DTL76       | VARCHAR2(6 char)   | 市場代碼             |    |
|     | DTL77       | VARCHAR2(6 char)   | 歸屬交割交易所碼         |    |
|     | DTL78       | NUMBER(16, 9)       | 除息會計台幣匯率         |    |
|     | DTL79       | NUMBER(15, 2)       | 除息會計記帳台幣         |    |
|     | DTL80       | VARCHAR2(4 char)   | 成交單分行代號          |    |
|     | DTL81       | NUMBER(15, 2)       | 除權尾差             |    |
|     | DTL82       | NUMBER(15, 2)       | 零股上手給付分配額        |    |
|     | DTL83       | NUMBER(15, 2)       | 零股賣出分配金額         |    |
|     | DTL84       | NUMBER(15, 2)       | 零股實付調整額          |    |
|     | DTL85       | NUMBER(15, 2)       | 零股原實付金額          |    |
|     | DTL86       | DATE               | 發動入扣帳日期          |    |
|     | DTL87       | VARCHAR2(6 char)   | 入扣帳時間            |    |
|     | DTL88       | VARCHAR2(6 char)   | 圈解扣序號            |    |
|     | DTL89       | VARCHAR2(10 char)  | 銀行回覆代號           |    |
|     | DTL90       | VARCHAR2(60 char)  | 銀行回覆說明           |    |
|     | DTL91       | VARCHAR2(17 char)  | 資料產生序號           |    |
|     | DTL92       | VARCHAR2(15 char)  | 客戶入帳帳號           |    |
|     | DTL991      | VARCHAR2(14 char)  | 異動人員             |    |
|     | DTL992      | DATE               | 異動日期             |    |
|     | DTL993      | VARCHAR2(6 char)   | 異動時間             |    |
|     | DTL994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | DTL995      | DATE               | 核准日期             |    |
|     | DTL996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_DVDFIL

#### 除權除息基本檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DVD01       | VARCHAR2(6 char)   | 交易所代號            |    |
|     | DVD02       | VARCHAR2(10 char)  | 商品代號             |    |
|     | DVD03       | DATE               | 基準日期             |    |
|     | DVD03A      | VARCHAR2(6 char)   | 上手代號             |    |
|     | DVD04       | DATE               | 處理日期             |    |
|     | DVD05       | VARCHAR2(1 char)   | 處理方式             |    |
|     | DVD06       | NUMBER(17, 0)       | 基準日總股數           |    |
|     | DVD07       | NUMBER(17, 9)       | 每股分配股數或金額        |    |
|     | DVD08       | NUMBER(17, 2)       | 總分配股數或金額         |    |
|     | DVD09       | NUMBER(17, 2)       | 上手總費用            |    |
|     | DVD10       | VARCHAR2(20 char)  | 確認書單號            |    |
|     | DVD11       | VARCHAR2(10 char)  | 異動人員             |    |
|     | DVD12       | NUMBER(17, 0)       | 電腦計算總股數          |    |
|     | DVD99       | VARCHAR2(50 char)  | 保留欄位             |    |
|     | DVD13       | NUMBER(17, 2)       | 券商總費用            |    |
|     | DVD14       | NUMBER(17, 2)       | 交易所總費用           |    |
|     | DVD15       | DATE               | 預計撥扣日            |    |
|     | DVD16       | VARCHAR2(3 char)   | 交割幣別             |    |
|     | DVD17       | VARCHAR2(6 char)   | 歸屬交易所碼           |    |
|     | DVD18       | DATE               | 預計出金日            |    |
|     | DVD19       | NUMBER(17, 2)       | 上手其他總費用          |    |
|     | DVD20       | VARCHAR2(1 char)   | 資料來源碼            |    |
|     | DVD21       | VARCHAR2(1 char)   | 上傳無基準日判別碼        |    |
|     | DVD22       | DATE               | 出金申請匯回日          |    |
|     | DVD23       | DATE               | 出金申請預計匯入日        |    |
|     | DVD23A      | DATE               | 出金申請實際匯入日        |    |
|     | DVD24       | VARCHAR2(10 char)  | 出金申請編號           |    |
|     | DVD25       | VARCHAR2(1 char)   | 資料調整碼            |    |
|     | DVD26       | DATE               | 異動日期             |    |
|     | DVD27       | VARCHAR2(6 char)   | 異動時間             |    |
|     | DVD28       | DATE               | 上手配發日            |    |
|     | DVD29       | DATE               | 最後交易日            |    |
|     | DVD30       | VARCHAR2(1 char)   | 上手費用計算方式         |    |
|     | DVD31       | VARCHAR2(1 char)   | 交易所費用計算方式        |    |
|     | DVD32       | VARCHAR2(1 char)   | 券商費用計算方式         |    |
|     | DVD33       | DATE               | 申購截止日            |    |
|     | DVD34       | NUMBER(17, 9)       | 每股認購金額           |    |
|     | DVD35       | NUMBER(17, 2)       | 認購總金額            |    |
|     | DVD36       | NUMBER(17, 0)       | 認購股數上限           |    |
|     | DVD37       | NUMBER(17, 0)       | 本次認購總股數          |    |
|     | DVD38       | NUMBER(17, 0)       | 參與認購總股數          |    |
|     | DVD39       | NUMBER(17, 0)       | 新增認購股數           |    |
|     | DVD40       | NUMBER(9, 0)        | 原始認購總人數          |    |
|     | DVD41       | NUMBER(9, 0)        | 參與認購總人數          |    |
|     | DVD42       | NUMBER(9, 0)        | 新增參與人數           |    |
|     | DVD43       | VARCHAR2(1 char)   | 流程控制碼            |    |
|     | DVD44       | DATE               | 流程控制確認日          |    |
|     | DVD45       | NUMBER(9, 0)        | 庫存配給總人數          |    |
|     | DVD01A      | VARCHAR2(6 char)   | 標的交易所代號          |    |
|     | DVD02A      | VARCHAR2(10 char)  | 標的商品代號           |    |
|     | DVD46       | VARCHAR2(3 char)   | 實際交割基礎幣別         |    |
|     | DVD47       | NUMBER(15, 2)       | 整批除息總額－原         |    |
|     | DVD48       | NUMBER(15, 2)       | 整批除息總款－基         |    |
|     | DVD49       | NUMBER(15, 2)       | 本除息總撥款－基         |    |
|     | DVD50       | VARCHAR2(1 char)   | 配股轉現金            |    |
|     | DVD51       | VARCHAR2(3 char)   | 配息所得類別           |    |
|     | DVD52       | NUMBER(22, 9)       | 除權後總股數原始值        |    |
|     | DVD53       | NUMBER(22, 9)       | 除權後捨棄總股數         |    |
|     | DVD54       | VARCHAR2(1 char)   | 畸零股需現金分配碼        |    |
|     | DVD55       | VARCHAR2(1 char)   | 畸零股上手／賣出碼        |    |
|     | DVD56       | NUMBER(13, 0)       | 畸零股銀行賣出股數        |    |
|     | DVD57       | DATE               | 畸零股上手給付日         |    |
|     | DVD58       | DATE               | 畸零股最後賣出日         |    |
|     | DVD59       | DATE               | 零股金額稅務申報日        |    |
|     | DVD60       | NUMBER(15, 2)       | 畸零股上手給付額         |    |
|     | DVD61       | NUMBER(15, 2)       | 畸零股賣出金額          |    |
|     | DVD62       | NUMBER(15, 2)       | 畸零股原應付客戶額        |    |
|     | DVD63       | NUMBER(15, 2)       | 畸零股總實付客戶額        |    |
|     | DVD64       | DATE               | 零股換現撥款日期         |    |
|     | DVD65       | VARCHAR2(1 char)   | 畸零股現金已分配         |    |
|     | DVD66       | DATE               | 畸零股現金分配日期        |    |
|     | DVD991      | VARCHAR2(14 char)  | 異動人員             |    |
|     | DVD992      | DATE               | 異動日期             |    |
|     | DVD993      | VARCHAR2(6 char)   | 異動時間             |    |
|     | DVD994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | DVD995      | DATE               | 核准日期             |    |
|     | DVD996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_LMCAH

#### 保管銀行帳號檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | ID          | VARCHAR2(11 char)  | ID               |    |
|     | ACTNO       | VARCHAR2(15 char)  | 帳號               |    |
|     | CUR         | VARCHAR2(3 char)   | 幣別               |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_OFT023P

#### 含息損益買進單除息明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | OFT023010   | VARCHAR2(4 char)   | 買進成交單分行號         |    |
|     | OFT023020   | DATE               | 買進成交單成交日         |    |
|     | OFT023030   | VARCHAR2(8 char)   | 買進成交單單號          |    |
|     | OFT023040   | VARCHAR2(6 char)   | 上手代號             |    |
|     | OFT023050   | VARCHAR2(6 char)   | 交易所代號            |    |
|     | OFT023060   | VARCHAR2(10 char)  | 商品代號             |    |
|     | OFT023070   | DATE               | 除息基準日期           |    |
|     | OFT023080   | DATE               | 除息處理日期           |    |
|     | OFT023085   | VARCHAR2(1 char)   | 事件類別             |    |
|     | OFT023090   | VARCHAR2(4 char)   | 客戶分行號            |    |
|     | OFT023100   | VARCHAR2(11 char)  | 身份證號             |    |
|     | OFT023110   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | OFT023120   | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | OFT023130   | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | OFT023140   | VARCHAR2(6 char)   | 歸屬交割交易所          |    |
|     | OFT023150   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | OFT023155   | VARCHAR2(1 char)   | 成交單來源類別          |    |
|     | OFT023160   | DATE               | 除息實際撥款入帳日        |    |
|     | OFT023165   | DATE               | 除息預計撥扣日          |    |
|     | OFT023170   | NUMBER(13, 0)       | 原成交股數            |    |
|     | OFT023175   | NUMBER(13, 0)       | 除息基準日除息原股        |    |
|     | OFT023180   | NUMBER(13, 0)       | 除息基準日餘股數         |    |
|     | OFT023190   | VARCHAR2(1 char)   | 已平倉狀況碼           |    |
|     | OFT023200   | NUMBER(13, 0)       | 已平倉除息股數          |    |
|     | OFT023210   | NUMBER(13, 0)       | 除息基準日庫存總股        |    |
|     | OFT023220   | NUMBER(13, 0)       | 除息明細累計總股數        |    |
|     | OFT023230   | NUMBER(17, 9)       | 除息每股分配金額         |    |
|     | OFT023240   | VARCHAR2(3 char)   | 除息分配金額幣別         |    |
|     | OFT023250   | NUMBER(17, 2)       | 除息幣除息撥款金額        |    |
|     | OFT023260   | NUMBER(17, 2)       | 已平除息幣除息款額        |    |
|     | OFT023270   | VARCHAR2(3 char)   | 商品交割幣別           |    |
|     | OFT023280   | DATE               | 除息兌商品幣匯率日        |    |
|     | OFT023290   | NUMBER(16, 9)       | 除息幣兌台轉換匯率        |    |
|     | OFT023300   | NUMBER(16, 9)       | 商品幣兌台轉換匯率        |    |
|     | OFT023310   | NUMBER(17, 2)       | 商品幣除息撥款金額        |    |
|     | OFT023320   | NUMBER(17, 2)       | 已平商品幣除息款額        |    |
|     | OFT023330   | VARCHAR2(3 char)   | 實際除息交割台幣別        |    |
|     | OFT023340   | NUMBER(17, 2)       | 實際除息撥款台幣額        |    |
|     | OFT023350   | NUMBER(17, 2)       | 已平實際除息款台幣        |    |
|     | OFT023360   | VARCHAR2(1 char)   | 配息入款當日已賣畢        |    |
|     | OFT023370   | VARCHAR2(4 char)   | 賣畢最大成單分行號        |    |
|     | OFT023380   | DATE               | 賣畢最大成單成交日        |    |
|     | OFT023390   | VARCHAR2(8 char)   | 賣畢最大成交單單號        |    |
|     | OFT023400   | NUMBER(13, 0)       | 賣畢成單原賣出股數        |    |
|     | OFT023410   | NUMBER(13, 0)       | 賣畢成單沖本買股數        |    |
|     | OFT023415   | NUMBER(13, 0)       | 賣沖本買單總股數         |    |
|     | OFT023420   | VARCHAR2(1 char)   | 非交易虛買單辨別碼        |    |
|     | OFT023430   | VARCHAR2(4 char)   | 虛賣成交單分行          |    |
|     | OFT023440   | DATE               | 虛賣單成交日           |    |
|     | OFT023450   | VARCHAR2(8 char)   | 虛賣成交單單號          |    |
|     | OFT023460   | VARCHAR2(4 char)   | 新虛買成交單分行         |    |
|     | OFT023470   | DATE               | 新虛買單成交日          |    |
|     | OFT023480   | VARCHAR2(8 char)   | 新虛買成交單單號         |    |
|     | OFT023490   | NUMBER(15, 2)       | 併割扣減成交價原幣        |    |
|     | OFT023500   | NUMBER(15, 2)       | 併割扣減成交價基幣        |    |
|     | OFT023510   | NUMBER(15, 2)       | 併割扣減應收額原幣        |    |
|     | OFT023520   | NUMBER(15, 2)       | 併割扣減應收額基幣        |    |
|     | OFT023530   | NUMBER(15, 2)       | 併割扣減成交額美元        |    |
|     | OFT023540   | VARCHAR2(1 char)   | 虛賣轉出事件類別         |    |
|     | OFT023550   | VARCHAR2(1 char)   | 虛賣轉出事件處理碼        |    |
|     | OFT023560   | DATE               | 虛賣轉出事件基準日        |    |
|     | OFT023570   | DATE               | 虛賣轉出事件處理日        |    |
|     | OFT023580   | VARCHAR2(6 char)   | 出之併割後交易所         |    |
|     | OFT023590   | VARCHAR2(10 char)  | 出之併割後商品碼         |    |
|     | OFT023600   | VARCHAR2(8 char)   | 出之下市繼承處理序        |    |
|     | OFT023610   | VARCHAR2(1 char)   | 虛買轉入事件處理碼        |    |
|     | OFT023620   | DATE               | 虛買轉入事件基準日        |    |
|     | OFT023630   | DATE               | 虛買轉入事件處理日        |    |
|     | OFT023640   | DATE               | 虛買轉入事件入庫日        |    |
|     | OFT023650   | VARCHAR2(4 char)   | 虛買轉入原成交分行        |    |
|     | OFT023660   | DATE               | 虛買轉入原成交日         |    |
|     | OFT023670   | VARCHAR2(8 char)   | 虛買轉入原成交單號        |    |
|     | OFT023680   | VARCHAR2(6 char)   | 入之被併割原交易所        |    |
|     | OFT023690   | VARCHAR2(10 char)  | 入之被併割原商品碼        |    |
|     | OFT023700   | VARCHAR2(8 char)   | 入之繼承處理序號         |    |
|     | OFT023710   | NUMBER(3, 0)        | 入之繼承多人流水號        |    |
|     | OFT023720   | VARCHAR2(4 char)   | 入之原被繼客戶分行        |    |
|     | OFT023730   | VARCHAR2(11 char)  | 入之原被繼承身份證        |    |
|     | OFT023740   | VARCHAR2(20 char)  | 入之原被繼信託帳號        |    |
|     | OFT023750   | VARCHAR2(30 char)  | 事件相關預留欄位         |    |
|     | OFT023991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | OFT023992   | DATE               | 異動日期             |    |
|     | OFT023993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | OFT023994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | OFT023995   | DATE               | 核准日期             |    |
|     | OFT023996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_POSFIL

#### 投資人部位檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | POS01       | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | POS02       | VARCHAR2(11 char)  | 身份證號             |    |
| PK  | POS03       | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | POS04       | VARCHAR2(10 char)  | 商品代號             |    |
| PK  | POS04A      | VARCHAR2(6 char)   | 上手代號             |    |
| PK  | POS043      | VARCHAR2(1 char)   | DBU/OBU          |    |
| PK  | POS044      | VARCHAR2(1 char)   | 外幣信託業務別          |    |
| PK  | POS048      | VARCHAR2(20 char)  | 信託帳號             |    |
|     | POS05       | NUMBER(13, 0)       | 庫存數量             |    |
|     | POS06       | NUMBER(15, 2)       | 預留前日投資成本         |    |
|     | POS062      | NUMBER(15, 6)       | 預留前日加權均價         |    |
|     | POS07       | NUMBER(15, 2)       | 預留本日買成交款         |    |
|     | POS08       | NUMBER(15, 2)       | 預留本日賣成交款         |    |
|     | POS09       | NUMBER(15, 2)       | 預留欄位金額           |    |
|     | POS10       | NUMBER(13, 0)       | 買進在途數量           |    |
|     | POS11       | DATE               | 最近交易日            |    |
|     | POS12       | NUMBER(13, 0)       | 委託尚未賣出數量         |    |
|     | POS13       | NUMBER(13, 0)       | 本日買進成交數量         |    |
|     | POS14       | NUMBER(13, 0)       | 本日賣出成交數量         |    |
|     | POS15       | VARCHAR2(52 char)  | 修改備註             |    |
|     | POS16       | VARCHAR2(1 char)   | 部位已改碼            |    |
|     | POS17       | DATE               | 最近人工修改日          |    |
|     | POS18       | NUMBER(13, 0)       | 修前原持有數量          |    |
|     | POS98       | VARCHAR2(6 char)   | 營業員              |    |
|     | POS99       | VARCHAR2(20 char)  | 預留欄位             |    |
|     | POS991      | VARCHAR2(14 char)  | 異動人員             |    |
|     | POS992      | DATE               | 異動日期             |    |
|     | POS993      | VARCHAR2(6 char)   | 異動時間             |    |
|     | POS994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | POS995      | DATE               | 核准日期             |    |
|     | POS996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_PRDFIL

#### 商品盤價檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRD01       | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | PRD02       | VARCHAR2(10 char)  | 商品代號             |    |
| PK  | PRD03       | DATE               | 資料日期             |    |
|     | PRD05       | NUMBER(15, 6)       | 盤價價位             |    |
|     | PRD08       | NUMBER(15, 6)       | 開盤價位             |    |
|     | PRD11       | NUMBER(15, 6)       | 收盤價位             |    |
|     | PRD14       | NUMBER(15, 6)       | 最高價位             |    |
|     | PRD17       | NUMBER(15, 6)       | 最低價位             |    |
|     | PRD18       | VARCHAR2(6 char)   | 更新時間             |    |
|     | PRD99       | VARCHAR2(20 char)  | 預留欄位             |    |
|     | PRD97       | VARCHAR2(1 char)   | 系統產生碼            |    |
|     | PRD98       | VARCHAR2(1 char)   | 人工修改碼            |    |
|     | PRD991      | VARCHAR2(14 char)  | 異動人員             |    |
|     | PRD992      | DATE               | 異動日期             |    |
|     | PRD993      | VARCHAR2(6 char)   | 異動時間             |    |
|     | PRD994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | PRD995      | DATE               | 核准日期             |    |
|     | PRD996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_TRMFIL

#### 委託資料主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRM01       | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | TRM02       | VARCHAR2(8 char)   | 委託單號             |    |
| PK  | TRM03       | DATE               | 委託日期             |    |
|     | TRM032      | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | TRM04       | VARCHAR2(11 char)  | 身份證號             |    |
|     | TRM048      | VARCHAR2(20 char)  | 信託帳號             |    |
|     | TRM05       | VARCHAR2(6 char)   | 交易所代號            |    |
|     | TRM06       | VARCHAR2(10 char)  | 商品代號             |    |
|     | TRM07       | VARCHAR2(1 char)   | 買賣別B/S           |    |
|     | TRM08       | VARCHAR2(3 char)   | 委託方式             |    |
|     | TRM09       | VARCHAR2(3 char)   | 委託期間             |    |
|     | TRM10       | NUMBER(13, 0)       | 下單數量             |    |
|     | TRM11       | NUMBER(15, 6)       | 委託價位             |    |
|     | TRM11REF    | NUMBER(15, 6)       | 委託參考價－市價單        |    |
|     | TRM12       | VARCHAR2(3 char)   | 報價幣別             |    |
|     | TRM122      | VARCHAR2(4 char)   | 營業員分行代號          |    |
|     | TRM13       | VARCHAR2(6 char)   | 業績營業員            |    |
|     | TRM14       | NUMBER(13, 0)       | 成交數量             |    |
|     | TRM15       | VARCHAR2(1 char)   | 委託中止註記           |    |
|     | TRM16       | VARCHAR2(6 char)   | 中止時間             |    |
|     | TRM17       | VARCHAR2(6 char)   | 上手代號             |    |
|     | TRM18       | NUMBER(7, 0)        | 授信額度－台幣萬         |    |
|     | TRM19       | VARCHAR2(10 char)  | 授權主管             |    |
|     | TRM20       | VARCHAR2(10 char)  | 轉介人員             |    |
|     | TRM21       | VARCHAR2(6 char)   | 新單委託時間           |    |
|     | TRM22       | DATE               | 委託日期             |    |
|     | TRM23       | VARCHAR2(10 char)  | 登錄人員             |    |
|     | TRM24       | VARCHAR2(20 char)  | 備註欄位             |    |
|     | TRM25       | VARCHAR2(2 char)   | 本筆委託狀態           |    |
|     | TRM26       | NUMBER(15, 2)       | 已使用金額－原幣         |    |
|     | TRM27       | VARCHAR2(3 char)   | 委託WEB代號          |    |
|     | TRM28       | VARCHAR2(8 char)   | 委託WEB流水序號        |    |
|     | TRM99       | VARCHAR2(50 char)  | 預留欄位             |    |
|     | TRM29       | VARCHAR2(6 char)   | 新改刪最近時間          |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_TRNFIL

#### 成交資料主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRN01       | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | TRN02       | VARCHAR2(8 char)   | 成交單號             |    |
| PK  | TRN03       | DATE               | 成交日期             |    |
|     | TRN032      | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | TRN04       | VARCHAR2(11 char)  | 身份證號             |    |
|     | TRN048      | VARCHAR2(20 char)  | 信託帳號             |    |
|     | TRN05       | VARCHAR2(6 char)   | 交易所代號            |    |
|     | TRN06       | VARCHAR2(10 char)  | 商品代號             |    |
|     | TRN07       | VARCHAR2(1 char)   | 買賣別B/S           |    |
|     | TRN08       | NUMBER(13, 0)       | 成交數量             |    |
|     | TRN09       | NUMBER(15, 6)       | 成交價位             |    |
|     | TRN10       | VARCHAR2(3 char)   | 交割幣別             |    |
|     | TRN11       | VARCHAR2(8 char)   | 委託單號             |    |
|     | TRN11A      | DATE               | 委託日期             |    |
|     | TRN112      | VARCHAR2(4 char)   | 營業員分行代號          |    |
|     | TRN12       | VARCHAR2(6 char)   | 營業員              |    |
|     | TRN13       | NUMBER(13, 2)       | 交易稅              |    |
|     | TRN14       | NUMBER(13, 2)       | 印花稅              |    |
|     | TRN15       | NUMBER(13, 2)       | 交所費              |    |
|     | TRN16       | NUMBER(13, 2)       | 匯費               |    |
|     | TRN17       | VARCHAR2(3 char)   | 客戶手續費幣別          |    |
|     | TRN18       | NUMBER(13, 2)       | 客戶手續費            |    |
|     | TRN19       | NUMBER(15, 2)       | 收付交割金額－原         |    |
|     | TRN20       | VARCHAR2(3 char)   | 基礎幣別             |    |
|     | TRN21       | NUMBER(15, 2)       | 收付交割金額－基         |    |
|     | TRN22       | VARCHAR2(3 char)   | 上手手續費幣別          |    |
|     | TRN23       | NUMBER(13, 2)       | 上手手續費            |    |
|     | TRN24       | VARCHAR2(6 char)   | 上手代號             |    |
|     | TRN25       | VARCHAR2(30 char)  | 上手成交單號           |    |
|     | TRN26       | DATE               | 客戶交割日期           |    |
|     | TRN27       | NUMBER(15, 2)       | 收付報價金額－原         |    |
|     | TRN28       | NUMBER(15, 2)       | 收付報價金額－基         |    |
|     | TRN29       | VARCHAR2(3 char)   | 入扣帳銀行代號１         |    |
|     | TRN30       | VARCHAR2(4 char)   | 入扣帳分行代號１         |    |
|     | TRN31       | VARCHAR2(15 char)  | 入扣帳銀行帳號１         |    |
|     | TRN32       | VARCHAR2(3 char)   | 入扣帳銀行代號２         |    |
|     | TRN33       | VARCHAR2(4 char)   | 入扣帳分行代號２         |    |
|     | TRN34       | VARCHAR2(15 char)  | 入扣帳銀行帳號２         |    |
|     | TRN35       | NUMBER(7, 0)        | 使用授信額台幣萬         |    |
|     | TRN36       | NUMBER(13, 0)       | 已分配股數            |    |
|     | TRN37       | DATE               | 市場交割日期           |    |
|     | TRN38       | NUMBER(15, 2)       | 成交價金－原幣          |    |
|     | TRN39       | VARCHAR2(1 char)   | 錯帳註記             |    |
|     | TRN40       | VARCHAR2(1 char)   | 交易代碼             |    |
|     | TRN41       | VARCHAR2(10 char)  | 轉介人員             |    |
|     | TRN42       | NUMBER(13, 2)       | 管理費              |    |
|     | TRN43       | NUMBER(13, 2)       | 服務費              |    |
|     | TRN44       | VARCHAR2(10 char)  | 理財專員             |    |
|     | TRN45       | VARCHAR2(3 char)   | 委託WEB代號          |    |
|     | TRN46       | VARCHAR2(8 char)   | 委託WEB流水序號        |    |
|     | TRN47       | VARCHAR2(3 char)   | 報價幣別             |    |
|     | TRN48       | NUMBER(13, 2)       | 交易徵費             |    |
|     | TRN49       | VARCHAR2(4 char)   | 開戶所屬分行           |    |
|     | TRN50       | VARCHAR2(6 char)   | 專案市場代碼           |    |
|     | TRN51       | VARCHAR2(6 char)   | 專案專案代號           |    |
|     | TRN52       | VARCHAR2(20 char)  | CRM推薦代號          |    |
|     | TRN99       | VARCHAR2(50 char)  | 預留欄位             |    |
|     | TRN993      | VARCHAR2(6 char)   | 維護時間             |    |
|     | TRN992      | DATE               | 維護日期             |    |
|     | TRN99A      | VARCHAR2(10 char)  | 維護程式             |    |
|     | TRN991      | VARCHAR2(10 char)  | 維護者              |    |
|     | TRN994      | VARCHAR2(14 char)  | 核准人員             |    |
|     | TRN995      | DATE               | 核准日期             |    |
|     | TRN996      | VARCHAR2(6 char)   | 核准時間             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_TRT002P

#### 交易委託附加檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRT002010   | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | TRT002020   | DATE               | 委託日期             |    |
| PK  | TRT002030   | VARCHAR2(8 char)   | 委託單號             |    |
|     | TRT002040   | VARCHAR2(10 char)  | 預留欄位(CIF#)       |    |
|     | TRT002042   | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | TRT002050   | VARCHAR2(11 char)  | 身份證號             |    |
|     | TRT002058   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | TRT002060   | VARCHAR2(6 char)   | 交易所代號            |    |
|     | TRT002062   | VARCHAR2(6 char)   | 歸屬交割交易所碼         |    |
|     | TRT002070   | VARCHAR2(6 char)   | 上手代號             |    |
|     | TRT002080   | VARCHAR2(10 char)  | 商品代號             |    |
|     | TRT002090   | VARCHAR2(1 char)   | 買賣別B/S           |    |
|     | TRT002100   | VARCHAR2(3 char)   | 市場報價幣別           |    |
|     | TRT002110   | VARCHAR2(3 char)   | 市場交割原幣別          |    |
|     | TRT002120   | VARCHAR2(2 char)   | 委託單下單來源          |    |
|     | TRT002130   | VARCHAR2(3 char)   | 成交限制             |    |
|     | TRT002140   | NUMBER(3, 0)        | 客戶立停損點％          |    |
|     | TRT002150   | NUMBER(3, 0)        | 客戶立滿足點％          |    |
|     | TRT002160   | VARCHAR2(20 char)  | 客戶虛擬帳號           |    |
|     | TRT002170   | VARCHAR2(10 char)  | 理財專員             |    |
|     | TRT002180   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | TRT002190   | VARCHAR2(15 char)  | 網路下單ＩＰ           |    |
|     | TRT002200   | VARCHAR2(30 char)  | 最後上手委託單號         |    |
|     | TRT002210   | NUMBER(13, 0)       | 原始下單數量           |    |
|     | TRT002220   | NUMBER(13, 0)       | 減量數量             |    |
|     | TRT002230   | NUMBER(13, 0)       | 刪單數量             |    |
|     | TRT002240   | NUMBER(13, 0)       | 最後下單數量           |    |
|     | TRT002250   | NUMBER(13, 0)       | 已成交總數量           |    |
|     | TRT002260   | NUMBER(13, 2)       | 最後上手手續費          |    |
|     | TRT002270   | NUMBER(13, 2)       | 最後客戶手續費          |    |
|     | TRT002280   | NUMBER(13, 2)       | 最後交易稅            |    |
|     | TRT002290   | NUMBER(13, 2)       | 最後印花稅            |    |
|     | TRT002300   | NUMBER(13, 2)       | 最後交所稅            |    |
|     | TRT002310   | NUMBER(13, 2)       | 最後交易徵費           |    |
|     | TRT002320   | NUMBER(13, 2)       | 最後管理費            |    |
|     | TRT002330   | NUMBER(13, 2)       | 最後服務費            |    |
|     | TRT002340   | NUMBER(13, 2)       | 最後銀行保管費          |    |
|     | TRT002350   | NUMBER(13, 2)       | 最後銀行服務費          |    |
|     | TRT002360   | NUMBER(13, 2)       | 最後銀行匯費           |    |
|     | TRT002370   | VARCHAR2(1 char)   | 客戶欲合併下單碼         |    |
|     | TRT002380   | DATE               | 被併單委託日期          |    |
|     | TRT002390   | VARCHAR2(6 char)   | 被併單委託時間          |    |
|     | TRT002400   | VARCHAR2(1 char)   | 已被合併下單碼          |    |
|     | TRT002410   | VARCHAR2(4 char)   | 合併單分行號           |    |
|     | TRT002420   | DATE               | 合併單委託日期          |    |
|     | TRT002430   | VARCHAR2(8 char)   | 合併單委託單號          |    |
|     | TRT002440   | VARCHAR2(1 char)   | 本筆為合併單碼          |    |
|     | TRT002450   | VARCHAR2(1 char)   | 本筆併單已分配畢         |    |
|     | TRT002460   | NUMBER(15, 2)       | 原收付使用額－原         |    |
|     | TRT002470   | NUMBER(15, 2)       | 本委託收付額－原         |    |
|     | TRT002480   | NUMBER(15, 2)       | 餘收付使用額－原         |    |
|     | TRT002490   | NUMBER(15, 2)       | 原總圈在途款－原         |    |
|     | TRT002500   | NUMBER(15, 2)       | 餘總圈在途款－原         |    |
|     | TRT002510   | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | TRT002520   | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | TRT002530   | VARCHAR2(3 char)   | 實際交割基礎幣別         |    |
|     | TRT002540   | VARCHAR2(1 char)   | 曾啟動銀行圈解碼         |    |
|     | TRT002550   | NUMBER(15, 2)       | 原總圈銀行額－原         |    |
|     | TRT002560   | NUMBER(15, 2)       | 餘總圈銀行額－原         |    |
|     | TRT002570   | NUMBER(15, 2)       | 原總圈銀行額－基         |    |
|     | TRT002580   | NUMBER(15, 2)       | 餘總圈銀行額－基         |    |
|     | TRT002590   | VARCHAR2(3 char)   | 入扣帳銀行代號          |    |
|     | TRT002600   | VARCHAR2(4 char)   | 入扣帳分行代號          |    |
|     | TRT002610   | VARCHAR2(15 char)  | 入扣帳銀行帳號          |    |
|     | TRT002620   | VARCHAR2(1 char)   | 盤後批次圈解碼          |    |
|     | TRT002630   | VARCHAR2(1 char)   | 盤後已解圈完畢碼         |    |
|     | TRT002640   | DATE               | 盤解圈市場委託日         |    |
|     | TRT002650   | NUMBER(10, 0)       | 盤解圈內部圈序號         |    |
|     | TRT002660   | NUMBER(15, 2)       | 成交總收付額－原         |    |
|     | TRT002670   | NUMBER(15, 2)       | 成交減總委用－原         |    |
|     | TRT002680   | NUMBER(10, 0)       | 首次內部圈序號          |    |
|     | TRT002690   | VARCHAR2(30 char)  | 首次圈存外部序號         |    |
|     | TRT002700   | VARCHAR2(30 char)  | 首次銀行回覆序號         |    |
|     | TRT002710   | VARCHAR2(1 char)   | 小額契約碼            |    |
|     | TRT002720   | VARCHAR2(4 char)   | 小額契約分行號          |    |
|     | TRT002730   | DATE               | 小額契約申購日          |    |
|     | TRT002740   | VARCHAR2(16 char)  | 小額契約申購號          |    |
|     | TRT002750   | VARCHAR2(4 char)   | 小額合併單分行號         |    |
|     | TRT002760   | DATE               | 小額合併單委託日         |    |
|     | TRT002770   | VARCHAR2(8 char)   | 小額合併單委託號         |    |
|     | TRT002780   | VARCHAR2(1 char)   | 小額併單已分配畢         |    |
|     | TRT002790   | VARCHAR2(1 char)   | 委託曾覆核辨別碼         |    |
|     | TRT002800   | VARCHAR2(1 char)   | 人工認可放行碼          |    |
|     | TRT002810   | VARCHAR2(1 char)   | 上手已接單確定碼         |    |
|     | TRT002820   | VARCHAR2(1 char)   | 客戶手續費基準          |    |
|     | TRT002830   | NUMBER(10, 5)       | 客戶手續率或折扣％        |    |
|     | TRT002840   | NUMBER(13, 2)       | 客戶最低手續費          |    |
|     | TRT002850   | VARCHAR2(1 char)   | 賣出保管費基準          |    |
|     | TRT002860   | NUMBER(10, 5)       | 保管費率或折扣％         |    |
|     | TRT002870   | NUMBER(13, 2)       | 最低賣出保管費台幣        |    |
|     | TRT002880   | NUMBER(13, 2)       | 系統賣保管費台外幣        |    |
|     | TRT002890   | DATE               | 保管費匯率最近日         |    |
|     | TRT002900   | NUMBER(16, 9)       | 保管費轉換匯率          |    |
|     | TRT002910   | DATE               | 長效單結束日（含         |    |
|     | TRT002991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | TRT002992   | DATE               | 異動日期             |    |
|     | TRT002993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | TRT002994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | TRT002995   | DATE               | 核准日期             |    |
|     | TRT002996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TRT002999   | VARCHAR2(10 char)  | 異動程式             |    |
|     | TRT00299A   | VARCHAR2(14 char)  | 最近放行人員           |    |
|     | TRT00299B   | DATE               | 最近放行日期           |    |
|     | TRT00299C   | VARCHAR2(6 char)   | 最近放行時間           |    |
|     | TRT00299J   | VARCHAR2(14 char)  | 最近確定人員           |    |
|     | TRT00299K   | DATE               | 最近確定日期           |    |
|     | TRT00299L   | VARCHAR2(6 char)   | 最近確定時間           |    |
|     | TRT002841   | NUMBER(10, 5)       | 原牌告客手續費率％        |    |
|     | TRT002842   | NUMBER(13, 2)       | 原牌告客手續費－原        |    |
|     | TRT002843   | NUMBER(10, 5)       | 原牌與實際客手折％        |    |
|     | TRT002920   | VARCHAR2(1 char)   | 交易台幣限額之檢核        |    |
|     | TRT002930   | VARCHAR2(1 char)   | 是否低於折扣           |    |
|     | TRT002940   | VARCHAR2(4 char)   | 營業員分行代號          |    |
|     | TRT002950   | VARCHAR2(4 char)   | 介紹人分行代號          |    |
|     | TRT002960   | VARCHAR2(1 char)   | 綜合戶              |    |
|     | TRT002970   | VARCHAR2(10 char)  | 主管審核ID           |    |
|     | TRT002980   | VARCHAR2(1 char)   | 預約單註記            |    |
|     | TRT002990   | VARCHAR2(4 char)   | 最後承做分行代號         |    |
|     | TRT002A10   | VARCHAR2(10 char)  | 最後經管人員代號         |    |
|     | TRT002A20   | NUMBER(13, 2)       | 原始上手手續費          |    |
|     | TRT002A30   | NUMBER(13, 2)       | 原始客戶手續費          |    |
|     | TRT002A40   | NUMBER(13, 2)       | 原始交易稅            |    |
|     | TRT002A50   | NUMBER(13, 2)       | 原始印花稅            |    |
|     | TRT002A60   | NUMBER(13, 2)       | 原始交所稅            |    |
|     | TRT002A70   | NUMBER(13, 2)       | 原始交易徵費           |    |
|     | TRT002A80   | NUMBER(13, 2)       | 原始管理費            |    |
|     | TRT002A90   | NUMBER(13, 2)       | 原始服務費            |    |
|     | TRT002B10   | NUMBER(13, 2)       | 原始銀行保管費          |    |
|     | TRT002B20   | NUMBER(13, 2)       | 原始銀行服務費          |    |
|     | TRT002B30   | NUMBER(13, 2)       | 原始銀行匯費           |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_TRT012P

#### 成交明細附加檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRT012010   | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | TRT012020   | DATE               | 成交日期             |    |
| PK  | TRT012030   | VARCHAR2(8 char)   | 成交單號             |    |
|     | TRT012040   | VARCHAR2(10 char)  | 預留欄位(CIF#)       |    |
|     | TRT012042   | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | TRT012050   | VARCHAR2(11 char)  | 身份證號             |    |
|     | TRT012058   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | TRT012060   | VARCHAR2(6 char)   | 交易所代號            |    |
|     | TRT012062   | VARCHAR2(6 char)   | 歸屬交割交易所碼         |    |
|     | TRT012070   | VARCHAR2(6 char)   | 上手代號             |    |
|     | TRT012080   | VARCHAR2(10 char)  | 商品代號             |    |
|     | TRT012090   | VARCHAR2(1 char)   | 買賣別B/S           |    |
|     | TRT012100   | VARCHAR2(3 char)   | 市場報價幣別           |    |
|     | TRT012110   | VARCHAR2(3 char)   | 市場交割原幣別          |    |
|     | TRT012120   | VARCHAR2(20 char)  | 客戶虛擬帳號           |    |
|     | TRT012130   | DATE               | 委託日期             |    |
|     | TRT012140   | VARCHAR2(8 char)   | 委託單號             |    |
|     | TRT012142   | VARCHAR2(4 char)   | 營業員分行代號          |    |
|     | TRT012150   | VARCHAR2(6 char)   | 營業員              |    |
|     | TRT012160   | VARCHAR2(1 char)   | 錯帳註記             |    |
|     | TRT012170   | VARCHAR2(1 char)   | 交易代碼             |    |
|     | TRT012180   | VARCHAR2(10 char)  | 理財專員             |    |
|     | TRT012190   | VARCHAR2(20 char)  | 交易所撮合序號          |    |
|     | TRT012200   | VARCHAR2(1 char)   | 電子單註記            |    |
|     | TRT012210   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | TRT012220   | NUMBER(13, 2)       | 銀行保管費            |    |
|     | TRT012230   | NUMBER(13, 2)       | 銀行服務費            |    |
|     | TRT012240   | NUMBER(13, 2)       | 銀行匯費             |    |
|     | TRT012250   | VARCHAR2(1 char)   | 客戶被併單碼           |    |
|     | TRT012260   | VARCHAR2(1 char)   | 本筆為合併單碼          |    |
|     | TRT012270   | VARCHAR2(1 char)   | 本筆併單已分配畢         |    |
|     | TRT012280   | NUMBER(13, 0)       | 併單已分配股數          |    |
|     | TRT012290   | VARCHAR2(4 char)   | 分配來源合併分行號        |    |
|     | TRT012300   | VARCHAR2(4 char)   | 分配來源合併成交日        |    |
|     | TRT012310   | VARCHAR2(4 char)   | 分配來源合併成交號        |    |
|     | TRT012320   | NUMBER(15, 2)       | 收付交割金額－原         |    |
|     | TRT012330   | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | TRT012340   | VARCHAR2(1 char)   | 外幣信託業務別          |    |
|     | TRT012350   | VARCHAR2(3 char)   | 實際交割基礎幣別         |    |
|     | TRT012360   | DATE               | 議匯匯率最近日          |    |
|     | TRT012370   | VARCHAR2(6 char)   | 換匯時間             |    |
|     | TRT012380   | NUMBER(16, 9)       | 議匯轉換匯率           |    |
|     | TRT012390   | VARCHAR2(1 char)   | 買賣超交割辨別碼         |    |
|     | TRT012400   | NUMBER(15, 2)       | 收付交割金額－基         |    |
|     | TRT012410   | VARCHAR2(1 char)   | 收付基礎額需調整碼        |    |
|     | TRT012420   | NUMBER(2, 0)        | 已被調整次數           |    |
|     | TRT012430   | NUMBER(9, 2)        | 收付調整金額－基         |    |
|     | TRT012440   | NUMBER(15, 2)       | 最後收付交割額－基        |    |
|     | TRT012450   | VARCHAR2(3 char)   | 入扣帳銀行代號          |    |
|     | TRT012460   | VARCHAR2(4 char)   | 入扣帳分行代號          |    |
|     | TRT012470   | VARCHAR2(15 char)  | 入扣帳銀行帳號          |    |
|     | TRT012480   | NUMBER(15, 2)       | 成交減委使用－原         |    |
|     | TRT012490   | VARCHAR2(1 char)   | 小額契約碼            |    |
|     | TRT012500   | VARCHAR2(4 char)   | 小額契約分行號          |    |
|     | TRT012510   | DATE               | 小額契約申購日          |    |
|     | TRT012520   | VARCHAR2(16 char)  | 小額契約申購號          |    |
|     | TRT012530   | VARCHAR2(4 char)   | 小額合併單分行號         |    |
|     | TRT012540   | DATE               | 小額合併單成交日         |    |
|     | TRT012550   | VARCHAR2(8 char)   | 小額合併單成交號         |    |
|     | TRT012560   | VARCHAR2(1 char)   | 小額併單已分配畢         |    |
|     | TRT012570   | NUMBER(13, 0)       | 小額併單已分配股         |    |
|     | TRT012580   | VARCHAR2(1 char)   | 客戶手續費基準          |    |
|     | TRT012590   | NUMBER(10, 5)       | 客戶手續率或折扣％        |    |
|     | TRT012600   | NUMBER(13, 2)       | 委託客戶最低手續費        |    |
|     | TRT012610   | VARCHAR2(1 char)   | 賣出保管費基準          |    |
|     | TRT012620   | NUMBER(10, 5)       | 保管費率或折扣％         |    |
|     | TRT012630   | NUMBER(13, 2)       | 委賣最低保管費台幣        |    |
|     | TRT012640   | NUMBER(13, 2)       | 系統賣出保管費台幣        |    |
|     | TRT012650   | DATE               | 保管費匯率最近日         |    |
|     | TRT012660   | NUMBER(16, 9)       | 保管費轉換匯率          |    |
|     | TRT012670   | VARCHAR2(1 char)   | 長效單辨別碼           |    |
|     | TRT012680   | DATE               | 長效單結束日（含         |    |
|     | TRT012991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | TRT012992   | DATE               | 異動日期             |    |
|     | TRT012993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | TRT012994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | TRT012995   | DATE               | 核准日期             |    |
|     | TRT012996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TRT012999   | VARCHAR2(10 char)  | 異動程式             |    |
|     | TRT012690   | NUMBER(13, 0)       | 委託股數             |    |
|     | TRT012700   | NUMBER(15, 6)       | 委託價位             |    |
|     | TRT012710   | VARCHAR2(3 char)   | 委託方式             |    |
|     | TRT012720   | VARCHAR2(3 char)   | 委託期間             |    |
|     | TRT012730   | NUMBER(13, 2)       | 交易稅－台            |    |
|     | TRT012740   | NUMBER(13, 2)       | 印花稅－台            |    |
|     | TRT012750   | NUMBER(13, 2)       | 交所費－台            |    |
|     | TRT012760   | NUMBER(13, 2)       | 管理費－台            |    |
|     | TRT012770   | NUMBER(13, 2)       | 服務費－台            |    |
|     | TRT012780   | NUMBER(13, 2)       | 交易徵費－台           |    |
|     | TRT012790   | NUMBER(15, 2)       | 成交價金－台           |    |
|     | TRT012800   | NUMBER(13, 2)       | 客戶手續費－基          |    |
|     | TRT012810   | NUMBER(13, 2)       | 上手手續費－基          |    |
|     | TRT012820   | NUMBER(13, 2)       | 信管費－基            |    |
|     | TRT012830   | VARCHAR2(2 char)   | 換匯性質             |    |
|     | TRT012840   | NUMBER(16, 9)       | 費用議匯匯率           |    |
|     | TRT012850   | DATE               | 信託資產立沖帳日         |    |
|     | TRT012860   | DATE               | 非交易原成交日          |    |
|     | TRT012870   | VARCHAR2(4 char)   | 最後承做分行代號         |    |
|     | TRT012880   | VARCHAR2(10 char)  | 最後經管人員代號         |    |
|     | TRT012890   | NUMBER(16, 9)       | 交叉對方匯率           |    |
|     | TRT012900   | NUMBER(15, 2)       | 非交易原始價金          |    |
|     | TRT012910   | NUMBER(15, 2)       | 非交易原始價金台         |    |
|     | TRT012920   | DATE               | 信管費買起賣迄日         |    |
|     | TRT012930   | VARCHAR2(1 char)   | 入扣帳成敗碼           |    |
|     | TRT012940   | VARCHAR2(20 char)  | 銀行回覆代號           |    |
|     | TRT012950   | DATE               | 發動入扣帳日期          |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_TRT022P

#### 交易委託附加檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRT022010   | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | TRT022020   | DATE               | 委託日期             |    |
| PK  | TRT022030   | VARCHAR2(8 char)   | 委託單號             |    |
|     | TRT022042   | VARCHAR2(4 char)   | 客戶分行代號           |    |
|     | TRT022050   | VARCHAR2(11 char)  | 身份證號             |    |
|     | TRT022058   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | TRT022060   | VARCHAR2(1 char)   | 會員等級             |    |
|     | TRT022070   | VARCHAR2(1 char)   | 是特殊客群            |    |
|     | TRT022080   | VARCHAR2(30 char)  | 特殊客群－項目          |    |
|     | TRT022090   | VARCHAR2(1 char)   | 需簽署自主投資          |    |
|     | TRT022100   | VARCHAR2(1 char)   | 是特殊交易            |    |
|     | TRT022110   | VARCHAR2(30 char)  | 特殊交易－項目          |    |
|     | TRT022120   | VARCHAR2(1 char)   | 是大額交易            |    |
|     | TRT022130   | VARCHAR2(1 char)   | 需信託部放行           |    |
|     | TRT022140   | VARCHAR2(1 char)   | 產品風險等級           |    |
|     | TRT022150   | VARCHAR2(1 char)   | 顧客風險等級           |    |
|     | TRT022160   | VARCHAR2(1 char)   | 專業投資人            |    |
|     | TRT022170   | VARCHAR2(3 char)   | 議價編號             |    |
|     | TRT022180   | VARCHAR2(6 char)   | 交易所代號            |    |
|     | TRT022190   | VARCHAR2(6 char)   | 上手代號             |    |
|     | TRT022200   | VARCHAR2(10 char)  | 商品代號             |    |
|     | TRT022210   | VARCHAR2(1 char)   | 買賣別B/S           |    |
|     | TRT022220   | VARCHAR2(3 char)   | 非交易入扣帳銀行號        |    |
|     | TRT022230   | VARCHAR2(4 char)   | 非交易入扣帳分行號        |    |
|     | TRT022240   | VARCHAR2(15 char)  | 非交易入扣帳銀行號        |    |
|     | TRT022250   | VARCHAR2(1 char)   | 經辦認可放行碼          |    |
|     | TRT022260   | VARCHAR2(14 char)  | 經辦放行人員           |    |
|     | TRT022270   | DATE               | 經辦放行日期           |    |
|     | TRT022280   | VARCHAR2(6 char)   | 經辦放行時間           |    |
|     | TRT022290   | NUMBER(16, 9)       | 換算台幣匯率           |    |
|     | TRT022300   | NUMBER(15, 2)       | 換算台幣             |    |
|     | TRT022310   | VARCHAR2(1 char)   | 信託部退回            |    |
|     | TRT022320   | VARCHAR2(4 char)   | 歸屬理專分行           |    |
|     | TRT022330   | VARCHAR2(10 char)  | 歸屬理專人員           |    |
|     | TRT022340   | VARCHAR2(1 char)   | 手續費率需檢附文件        |    |
|     | TRT022350   | VARCHAR2(10 char)  | 客戶身分確認人員號        |    |
|     | TRT022360   | VARCHAR2(1 char)   | 客戶學歷             |    |
|     | TRT022370   | VARCHAR2(1 char)   | 重大傷病             |    |
|     | TRT022380   | DATE               | KYC評估日期          |    |
|     | TRT022390   | DATE               | KYC放行日期          |    |
|     | TRT022400   | VARCHAR2(6 char)   | KYC放行時間          |    |
|     | TRT022410   | VARCHAR2(1 char)   | KYC為行內或行外        |    |
|     | TRT022420   | VARCHAR2(1 char)   | 進件來源             |    |
|     | TRT022430   | VARCHAR2(1 char)   | 單筆專業投資人          |    |
|     | TRT022440   | DATE               | 專業投資人生效日         |    |
|     | TRT022450   | VARCHAR2(1 char)   | 錄音註記             |    |
|     | TRT022460   | VARCHAR2(15 char)  | 錄音交易確認碼          |    |
|     | TRT022470   | VARCHAR2(11 char)  | 負責人ＩＤ            |    |
|     | TRT022480   | VARCHAR2(11 char)  | 委託代理人            |    |
|     | TRT022490   | VARCHAR2(10 char)  | 議價授權編碼           |    |
|     | TRT022500   | VARCHAR2(2 char)   | 專案代碼             |    |
|     | TRT022510   | NUMBER(10, 5)       | 經理權限折扣           |    |
|     | TRT022520   | DATE               | 居留證日期            |    |
|     | TRT022530   | VARCHAR2(1 char)   | 法扣註記             |    |
|     | TRT022540   | VARCHAR2(1 char)   | 印鑑註記             |    |
|     | TRT022550   | VARCHAR2(1 char)   | 簡訊已發送碼           |    |
|     | TRT022991   | VARCHAR2(14 char)  | 異動人員             |    |
|     | TRT022992   | DATE               | 異動日期             |    |
|     | TRT022993   | VARCHAR2(6 char)   | 異動時間             |    |
|     | TRT022994   | VARCHAR2(14 char)  | 核准人員             |    |
|     | TRT022995   | DATE               | 核准日期             |    |
|     | TRT022996   | VARCHAR2(6 char)   | 核准時間             |    |
|     | TRT022999   | VARCHAR2(10 char)  | 異動程式             |    |
|     | TRT022560   | DATE               | 外訪受理客戶日期         |    |
|     | TRT022570   | VARCHAR2(6 char)   | 外訪受理客戶時間         |    |
|     | TRT022580   | VARCHAR2(16 char)  | 預打單編號            |    |
|     | TRT022590   | VARCHAR2(2 char)   | 客戶等級             |    |
|     | TRT022600   | VARCHAR2(1 char)   | 連動債資格            |    |
|     | TRT022610   | VARCHAR2(1 char)   | 財管回應碼            |    |
|     | TRT022620   | VARCHAR2(1 char)   | 投資人身分別           |    |
|     | TRT022630   | VARCHAR2(1 char)   | 交易身分別            |    |
|     | TRT022640   | VARCHAR2(1 char)   | 非推介註記            |    |
|     | TRT022650   | VARCHAR2(30 char)  | 網路下單ＩＰ           |    |
|     | TRT022660   | VARCHAR2(1 char)   | 保留欄位1            |    |
|     | TRT022670   | VARCHAR2(1 char)   | 保留欄位2            |    |
|     | TRT022680   | VARCHAR2(2 char)   | 保留欄位3            |    |
|     | TRT022690   | VARCHAR2(2 char)   | 保留欄位4            |    |
|     | TRT022700   | VARCHAR2(8 char)   | 保留欄位5            |    |
|     | TRT022710   | VARCHAR2(8 char)   | 保留欄位6            |    |
|     | TRT022720   | VARCHAR2(10 char)  | 保留欄位7            |    |
|     | TRT022730   | VARCHAR2(10 char)  | 保留欄位8            |    |
|     | TRT022740   | VARCHAR2(10 char)  | 保留欄位9            |    |
|     | TRT022750   | VARCHAR2(10 char)  | 保留欄位10           |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_ZCRM007WA

#### 每日庫存資料工作檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CRM007010   | DATE               | 資料日期             |    |
| PK  | CRM007020   | VARCHAR2(4 char)   | 分行代號             |    |
| PK  | CRM007030   | VARCHAR2(11 char)  | 身分證號             |    |
| PK  | CRM007040   | VARCHAR2(6 char)   | 交易所代號            |    |
| PK  | CRM007050   | VARCHAR2(10 char)  | 商品代號             |    |
| PK  | CRM007060   | VARCHAR2(6 char)   | 上手代號             |    |
| PK  | CRM007070   | VARCHAR2(1 char)   | DBU/OBU          |    |
| PK  | CRM007080   | VARCHAR2(1 char)   | 信託業務別            |    |
| PK  | CRM007090   | VARCHAR2(20 char)  | 信託帳號             |    |
| PK  | CRM007100   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | CRM007110   | VARCHAR2(3 char)   | 交割幣別             |    |
|     | CRM007120   | NUMBER(13, 0)       | 庫存股數             |    |
|     | CRM007130   | NUMBER(15, 2)       | 庫存信託本金           |    |
|     | CRM007140   | DATE               | 參考日期             |    |
|     | CRM007150   | NUMBER(15, 6)       | 參考收盤價            |    |
|     | CRM007160   | NUMBER(16, 9)       | 參考匯率             |    |
|     | CRM007170   | NUMBER(15, 2)       | 投資現值             |    |
|     | CRM007180   | NUMBER(15, 2)       | 投資損益             |    |
|     | CRM007190   | NUMBER(8, 2)        | 報酬率％             |    |
|     | CRM007200   | NUMBER(13, 0)       | 在途庫存數            |    |
|     | CRM007210   | NUMBER(13, 2)       | 在途庫信託本金          |    |
|     | CRM007220   | VARCHAR2(32 char)  | 商品名稱             |    |
|     | CRM007230   | NUMBER(15, 2)       | 累積配息             |    |
|     | CRM007240   | NUMBER(15, 2)       | 含息損益             |    |
|     | CRM007250   | NUMBER(8, 2)        | 含息報酬率％           |    |
|     | CRM007260   | NUMBER(15, 6)       | 庫存成本均價投資幣        |    |
|     | CRM007270   | NUMBER(15, 6)       | 庫存成本均價商品幣        |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_ZCRM007WB

#### 每日庫存明細資料工作檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CRM007B010  | DATE               | 資料日期             |    |
|     | CRM007B020  | VARCHAR2(4 char)   | 分行代號             |    |
|     | CRM007B030  | VARCHAR2(11 char)  | 身分證號             |    |
|     | CRM007B040  | VARCHAR2(6 char)   | 交易所代號            |    |
|     | CRM007B050  | VARCHAR2(10 char)  | 商品代號             |    |
|     | CRM007B060  | VARCHAR2(6 char)   | 上手代號             |    |
|     | CRM007B070  | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | CRM007B080  | VARCHAR2(1 char)   | 信託業務別            |    |
|     | CRM007B090  | VARCHAR2(20 char)  | 信託帳號             |    |
|     | CRM007B100  | VARCHAR2(6 char)   | 市場代碼             |    |
|     | CRM007B11A  | VARCHAR2(4 char)   | 成交單分行號           |    |
|     | CRM007B11B  | DATE               | 成交單成交日           |    |
|     | CRM007B11C  | VARCHAR2(8 char)   | 成交單單號            |    |
|     | CRM007B110  | VARCHAR2(3 char)   | 交割幣別             |    |
|     | CRM007B120  | NUMBER(13, 0)       | 未平倉餘股數           |    |
|     | CRM007B130  | NUMBER(15, 2)       | 未平倉信託本金          |    |
|     | CRM007B140  | DATE               | 參考日期             |    |
|     | CRM007B150  | NUMBER(15, 6)       | 參考收盤價            |    |
|     | CRM007B160  | NUMBER(16, 9)       | 參考匯率             |    |
|     | CRM007B170  | NUMBER(15, 2)       | 投資現值             |    |
|     | CRM007B180  | NUMBER(15, 2)       | 投資損益             |    |
|     | CRM007B190  | NUMBER(8, 2)        | 報酬率％             |    |
|     | CRM007B200  | NUMBER(13, 0)       | 在途庫存數            |    |
|     | CRM007B210  | NUMBER(13, 2)       | 在途庫信託本金          |    |
|     | CRM007B220  | VARCHAR2(32 char)  | 商品名稱             |    |
|     | CRM007B230  | NUMBER(15, 2)       | 累積配息             |    |
|     | CRM007B240  | NUMBER(15, 2)       | 含息損益             |    |
|     | CRM007B250  | NUMBER(8, 2)        | 含息報酬率％           |    |
|     | CRM007B260  | NUMBER(15, 6)       | 成交單價             |    |
|     | CRM007B270  | NUMBER(15, 6)       | 成交單價             |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |    |

### VW_ODS_D_ZCRM008WA

#### 每日已實現損益資料工作檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CRM008010   | VARCHAR2(4 char)   | 下單分行             |    |
|     | CRM008020   | DATE               | 成交日期             |    |
|     | CRM008030   | VARCHAR2(8 char)   | 成交單號             |    |
|     | CRM008040   | VARCHAR2(4 char)   | 分行代號             |    |
|     | CRM008050   | VARCHAR2(11 char)  | 身份證字號            |    |
|     | CRM008060   | VARCHAR2(20 char)  | 信託帳號             |    |
|     | CRM008070   | DATE               | 委託日期             |    |
|     | CRM008080   | VARCHAR2(8 char)   | 委託單號             |    |
|     | CRM008090   | VARCHAR2(6 char)   | 市場代碼             |    |
|     | CRM008100   | VARCHAR2(3 char)   | 交割幣別             |    |
|     | CRM008110   | VARCHAR2(10 char)  | 商品代號             |    |
|     | CRM008120   | VARCHAR2(1 char)   | DBU/OBU          |    |
|     | CRM008130   | VARCHAR2(1 char)   | 信託業務別            |    |
|     | CRM008140   | NUMBER(15, 6)       | 買進均價             |    |
|     | CRM008150   | NUMBER(15, 2)       | 價金買沖成本－原         |    |
|     | CRM008160   | NUMBER(15, 2)       | 原投資應收付金額         |    |
|     | CRM008170   | NUMBER(13, 0)       | 賣出股數             |    |
|     | CRM008180   | NUMBER(15, 6)       | 賣出價格             |    |
|     | CRM008190   | NUMBER(15, 2)       | 沖銷成交金額           |    |
|     | CRM008200   | NUMBER(13, 2)       | 賣出客戶手續費          |    |
|     | CRM008210   | NUMBER(13, 2)       | 賣出交易稅            |    |
|     | CRM008220   | NUMBER(13, 2)       | 賣出印花稅            |    |
|     | CRM008230   | NUMBER(13, 2)       | 賣出交所費            |    |
|     | CRM008240   | NUMBER(13, 2)       | 賣出管理費            |    |
|     | CRM008250   | NUMBER(13, 2)       | 賣出服務費            |    |
|     | CRM008260   | NUMBER(13, 2)       | 賣出交易徵費           |    |
|     | CRM008270   | NUMBER(13, 2)       | 賣出信管費            |    |
|     | CRM008280   | NUMBER(15, 2)       | 賣出應收付金額          |    |
|     | CRM008290   | DATE               | 賣出客戶入帳日          |    |
|     | CRM008300   | NUMBER(15, 2)       | 已沖銷配息金額          |    |
|     | CRM008310   | VARCHAR2(1 char)   | 投資損益正負號          |    |
|     | CRM008320   | NUMBER(15, 2)       | 投資損益             |    |
|     | CRM008330   | VARCHAR2(1 char)   | 報酬率正負號           |    |
|     | CRM008340   | NUMBER(8, 2)        | 報酬率              |    |
|     | CRM008350   | VARCHAR2(1 char)   | 含息損益正負號          |    |
|     | CRM008360   | NUMBER(15, 2)       | 含息投資損益           |    |
|     | CRM008370   | VARCHAR2(1 char)   | 含息報酬率正負號         |    |
|     | CRM008380   | NUMBER(8, 2)        | 含息報酬率            |    |
|     | CRM008390   | VARCHAR2(1 char)   | 交易代碼             |    |
|     | CRM008400   | VARCHAR2(3 char)   | 投資幣別             |    |
|     | CRM008410   | NUMBER(15, 2)       | 價金買沖成本－投資幣       |    |
|     | CRM008420   | NUMBER(15, 2)       | 價金賣成交－投資幣        |    |
|     | CRM008430   | NUMBER(15, 2)       | 賣出應收付金額－投資幣      |    |
|     | CRM008440   | NUMBER(15, 2)       | 已沖銷配息金額－投資幣      |    |
|     | TBL_UPD_TIM | TIMESTAMP          | 表格更新時間           |
