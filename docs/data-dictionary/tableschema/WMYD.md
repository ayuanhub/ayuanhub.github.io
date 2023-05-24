---
sidebar_position: 55
title: 財富管理系統(WMYD)
---

### VW_ODS_D_AIIVT

#### 投組投資方式資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CUS_IDN            | VARCHAR2(11 char)   | 客戶身份證字號             |    |
| PK  | IPMSET_CODE        | VARCHAR2(20 char)   | 投資組合代碼              |    |
| PK  | REF_NO             | VARCHAR2(11 char)   | 憑證號碼                |    |
|     | INV_TYPE           | VARCHAR2(1 char)    | 投資方式                |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_AOCAPACITY

#### 理專銷售商品資格檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                 | VARCHAR2(5 char)    | 員編                  |    |
|     | C2                 | VARCHAR2(1 char)    | 身分                  |    |
|     | C3                 | VARCHAR2(1 char)    | 可銷售基金               |    |
|     | C4                 | VARCHAR2(1 char)    | 可銷售債券               |    |
|     | C5                 | VARCHAR2(1 char)    | 可銷售連動債              |    |
|     | C6                 | VARCHAR2(1 char)    | 可銷售ETF              |    |
|     | C7                 | VARCHAR2(1 char)    | 可銷售特別股              |    |
|     | C8                 | VARCHAR2(1 char)    | 可銷售期貨型基金            |    |
|     | C9                 | VARCHAR2(48 char)   | 可銷售商品預留欄位           |    |
|     | C10                | DATE                | 啟用日                 |    |
|     | C11                | DATE                | 註銷日                 |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_CRMKYC

#### 客戶投資屬性檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                 | DATE                | 日期                  |    |
|     | C2                 | VARCHAR2(15 char)   | 客戶ID                |    |
|     | C3                 | VARCHAR2(2 char)    | 客戶投資屬性              |    |
|     | C4                 | VARCHAR2(1 char)    | 連動債購買資格             |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_CRMRECOMM

#### 推介同意書

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | SYS_DT             | DATE                | 日期                  |    |
| PK  | CUS_CODE           | VARCHAR2(11 char)   | 客戶ID                |    |
|     | RECOMM_STATUS      | VARCHAR2(1 char)    | 取得推介同意書             |    |
|     | RECOMM_SIGN_DT     | DATE                | 更新日期                |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_CUS_KYC_APPLY_LOGS

#### KYC 資料送審歷程

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(32 char)   | 客戶代碼                |    |
| PK  | C2                 | VARCHAR2(20 char)   | EVENT_ID            |    |
|     | C3                 | VARCHAR2(10 char)   | 分行代碼                |    |
|     | C4                 | VARCHAR2(10 char)   | 申請類別                |    |
|     | C5                 | VARCHAR2(20 char)   | 客戶歸屬理專              |    |
|     | C6                 | VARCHAR2(20 char)   | 申請序號                |    |
|     | C7                 | VARCHAR2(2 char)    | 婚姻狀況                |    |
|     | C8                 | VARCHAR2(1 char)    | 領有重大傷病證明卡           |    |
|     | C9                 | VARCHAR2(2 char)    | 職業                  |    |
|     | C10                | VARCHAR2(60 char)   | 職業-其他說明             |    |
|     | C11                | VARCHAR2(2 char)    | 職位                  |    |
|     | C12                | VARCHAR2(60 char)   | 職位-其他說明             |    |
|     | C13                | VARCHAR2(2 char)    | 與本行往來總資產金額來源(個人/家庭) |    |
|     | C14                | VARCHAR2(2 char)    | 與本行往來總資產金額          |    |
|     | C15                | VARCHAR2(23 char)   | 所得與資金來源             |    |
|     | C16                | VARCHAR2(60 char)   | 所得與資金來源_其他          |    |
|     | C17                | VARCHAR2(60 char)   | 法定代理人               |    |
|     | C18                | VARCHAR2(2 char)    | 公司型態                |    |
|     | C19                | VARCHAR2(2 char)    | 成立期間                |    |
|     | C20                | VARCHAR2(2 char)    | 公司資本額               |    |
|     | C21                | VARCHAR2(2 char)    | 是否接受衍生性商品           |    |
|     | C22                | VARCHAR2(10 char)   | 表單日期                |    |
|     | C23                | VARCHAR2(10 char)   | 本次投資屬性做問券日期         |    |
|     | C24                | VARCHAR2(2 char)    | 投資屬性教育程度代碼          |    |
|     | C25                | VARCHAR2(20 char)   | 本次投資屬性問卷作答編號        |    |
|     | C26                | VARCHAR2(3 char)    | 投資屬性答案分數            |    |
|     | C27                | VARCHAR2(2 char)    | 投資屬性客戶投資等級代碼        |    |
|     | C28                | VARCHAR2(2 char)    | 投資屬性客戶投資風險代碼        |    |
|     | C29                | VARCHAR2(2 char)    | 投資屬性客戶投資資金來源        |    |
|     | C30                | VARCHAR2(5 char)    | 投資屬性問卷版本            |    |
|     | C31                | VARCHAR2(2 char)    | 投資屬性問卷原因            |    |
|     | C32                | VARCHAR2(2 char)    | 投資屬性問卷原因說明          |    |
|     | C33                | VARCHAR2(60 char)   | 投資屬性問卷(法人)問卷簽署人員    |    |
|     | C34                | VARCHAR2(10 char)   | 投資屬性問卷表單日期          |    |
|     | C35                | VARCHAR2(10 char)   | 本次高風險客戶問券日期         |    |
|     | C36                | VARCHAR2(20 char)   | 本次高風險客戶問卷作答編號       |    |
|     | C37                | VARCHAR2(20 char)   | 理財業務人員              |    |
|     | C38                | VARCHAR2(5 char)    | 高風險客戶風險問卷版本         |    |
|     | C39                | VARCHAR2(2 char)    | 是否外訪指定對保人員          |    |
|     | C40                | VARCHAR2(20 char)   | 外訪指定對保人員            |    |
|     | C41                | VARCHAR2(1 char)    | 錄音確認                |    |
|     | C42                | VARCHAR2(4 char)    | 客戶確認                |    |
|     | C43                | VARCHAR2(2 char)    | 教育程度調整一             |    |
|     | C44                | VARCHAR2(2 char)    | 教育程度調整二             |    |
|     | C45                | VARCHAR2(2 char)    | 教育程度調整前代碼一          |    |
|     | C46                | VARCHAR2(2 char)    | 教育程度調整後代碼二          |    |
|     | C47                | VARCHAR2(20 char)   | 損失百分比               |    |
|     | C48                | VARCHAR2(10 char)   | 本次做高風險客戶評估問卷表單日期    |    |
|     | C49                | VARCHAR2(1 char)    | 高風險客戶等級代碼-系統計算      |    |
|     | C50                | VARCHAR2(8 char)    | 問卷來源                |    |
|     | C51                | VARCHAR2(10 char)   | KYC開戶完成日期(審核完成日)    |    |
|     | C52                | VARCHAR2(1 char)    | 審核狀態                |    |
|     | C53                | VARCHAR2(20 char)   | 建檔分行                |    |
|     | C54                | VARCHAR2(1 char)    | 評估類別                |    |
|     | C55                | VARCHAR2(1 char)    | 是否為專業投資人            |    |
|     | C56                | VARCHAR2(1 char)    | 近五年海外投資經驗           |    |
|     | C57                | VARCHAR2(1 char)    | 是否有推介同意書            |    |
|     | C58                | VARCHAR2(30 char)   | IP                  |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_CUS_KYC_CURRENT

#### KYC 主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(32 char)   | 客戶代碼                |    |
|     | C2                 | VARCHAR2(20 char)   | EVENT_ID            |    |
|     | C3                 | VARCHAR2(10 char)   | 分行代碼                |    |
|     | C4                 | VARCHAR2(10 char)   | 申請類別                |    |
|     | C5                 | VARCHAR2(20 char)   | 客戶歸屬理專              |    |
|     | C6                 | VARCHAR2(2 char)    | 婚姻狀況                |    |
|     | C7                 | VARCHAR2(1 char)    | 領有重大傷病證明卡           |    |
|     | C8                 | VARCHAR2(2 char)    | 職業                  |    |
|     | C9                 | VARCHAR2(60 char)   | 職業-其他說明             |    |
|     | C10                | VARCHAR2(2 char)    | 職位                  |    |
|     | C11                | VARCHAR2(60 char)   | 職位-其他說明             |    |
|     | C12                | VARCHAR2(2 char)    | 與本行往來總資產金額來源(個人/家庭) |    |
|     | C13                | VARCHAR2(2 char)    | 與本行往來總資產金額          |    |
|     | C14                | VARCHAR2(23 char)   | 所得與資金來源             |    |
|     | C15                | VARCHAR2(60 char)   | 所得與資金來源_其他          |    |
|     | C16                | VARCHAR2(60 char)   | 法定代理人               |    |
|     | C17                | VARCHAR2(2 char)    | 公司型態                |    |
|     | C18                | VARCHAR2(2 char)    | 成立期間                |    |
|     | C19                | VARCHAR2(2 char)    | 公司資本額               |    |
|     | C20                | VARCHAR2(2 char)    | 是否接受衍生性商品           |    |
|     | C21                | VARCHAR2(10 char)   | 表單日期                |    |
|     | C22                | VARCHAR2(10 char)   | 本次投資屬性做問券日期         |    |
|     | C23                | VARCHAR2(10 char)   | 下次評估日期              |    |
|     | C24                | VARCHAR2(2 char)    | 投資屬性教育程度代碼          |    |
|     | C25                | VARCHAR2(20 char)   | 本次投資屬性問卷作答編號        |    |
|     | C26                | VARCHAR2(3 char)    | 投資屬性答案分數            |    |
|     | C27                | VARCHAR2(2 char)    | 投資屬性客戶投資等級代碼        |    |
|     | C28                | VARCHAR2(2 char)    | 投資屬性客戶投資風險代碼        |    |
|     | C29                | VARCHAR2(2 char)    | 投資屬性客戶投資資金來源        |    |
|     | C30                | VARCHAR2(5 char)    | 投資屬性問卷版本            |    |
|     | C31                | VARCHAR2(2 char)    | 投資屬性問卷原因            |    |
|     | C32                | VARCHAR2(2 char)    | 投資屬性問卷原因說明          |    |
|     | C33                | VARCHAR2(60 char)   | 投資屬性問卷(法人)問卷簽署人員    |    |
|     | C34                | VARCHAR2(10 char)   | 投資屬性問卷表單日期          |    |
|     | C35                | VARCHAR2(10 char)   | 本次高風險客戶問券日期         |    |
|     | C36                | VARCHAR2(10 char)   | 下次高風險客戶問券日期         |    |
|     | C37                | VARCHAR2(20 char)   | 本次高風險客戶問卷作答編號       |    |
|     | C38                | VARCHAR2(1 char)    | 高風險客戶等級代碼-系統計算      |    |
|     | C39                | VARCHAR2(20 char)   | 理財業務人員              |    |
|     | C40                | VARCHAR2(5 char)    | 高風險客戶風險問卷版本         |    |
|     | C41                | VARCHAR2(2 char)    | 是否外訪指定對保人員          |    |
|     | C42                | VARCHAR2(20 char)   | 外訪指定對保人員            |    |
|     | C43                | VARCHAR2(1 char)    | 錄音確認                |    |
|     | C44                | VARCHAR2(4 char)    | 客戶確認                |    |
|     | C45                | VARCHAR2(2 char)    | 教育程度調整一             |    |
|     | C46                | VARCHAR2(2 char)    | 教育程度調整二             |    |
|     | C47                | VARCHAR2(2 char)    | 教育程度調整前代碼一          |    |
|     | C48                | VARCHAR2(2 char)    | 教育程度調整後代碼二          |    |
|     | C49                | VARCHAR2(20 char)   | 損失百分比               |    |
|     | C50                | VARCHAR2(10 char)   | 本次做高風險客戶評估問卷表單日期    |    |
|     | C51                | VARCHAR2(8 char)    | 問卷來源                |    |
|     | C52                | VARCHAR2(10 char)   | KYC開戶完成日期(審核完成日)    |    |
|     | C53                | VARCHAR2(20 char)   | 建檔分行                |    |
|     | C54                | VARCHAR2(1 char)    | 是否為專業投資人            |    |
|     | C55                | VARCHAR2(1 char)    | 近五年海外投資經驗           |    |
|     | C56                | VARCHAR2(1 char)    | 是否有推介同意書            |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_CUS_KYC_CUSTOMERS

#### KYC 客戶資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(32 char)   | 客戶代碼                |    |
|     | C2                 | VARCHAR2(10 char)   | 身分證字號(10碼)/客戶統編(8碼) |    |
|     | C3                 | VARCHAR2(10 char)   | 身分證字號/客戶統一編號(重覆碼)   |    |
|     | C4                 | VARCHAR2(1 char)    | 身份別                 |    |
|     | C5                 | VARCHAR2(60 char)   | 客戶名稱/公司或機構名稱        |    |
|     | C6                 | VARCHAR2(1 char)    | 性別                  |    |
|     | C7                 | VARCHAR2(24 char)   | 出生年月日               |    |
|     | C8                 | VARCHAR2(2 char)    | 學歷                  |    |
|     | C9                 | VARCHAR2(1 char)    | OBU/DBU別            |    |
|     | C10                | VARCHAR2(6 char)    | 產業別                 |    |
|     | C11                | VARCHAR2(1 char)    | 是否為員工               |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_INSFEAT

#### 保險手續費檔(當月保險手續費)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | SNAP_YM            | VARCHAR2(6 char)    | 資料月份                |    |
|     | INSNO              | VARCHAR2(20 char)   | 新契約編號               |    |
|     | BRANCHID           | VARCHAR2(10 char)   | 部門代號                |    |
|     | BRANCHNAME         | VARCHAR2(20 char)   | 部門名稱                |    |
|     | INSTYPENAME        | VARCHAR2(50 char)   | 險種                  |    |
|     | ROUTE              | VARCHAR2(1 char)    | 通路別                 |    |
|     | INSPAY             | NUMBER(18, 0)        | 保費                  |    |
|     | AOID               | VARCHAR2(10 char)   | 理專員工編號              |    |
|     | AONAME             | VARCHAR2(20 char)   | 理專姓名                |    |
|     | EMPID              | VARCHAR2(10 char)   | 轉介人員工編號             |    |
|     | EMPNAME            | VARCHAR2(20 char)   | 轉介人姓名               |    |
|     | FEE                | NUMBER(18, 2)        | 手續費收入               |    |
|     | ACCOUNTAO          | VARCHAR2(10 char)   | 帳管理專                |    |
|     | ADDVALUE_FEE       | NUMBER(2, 1)         | 權值                  |    |
|     | PID                | VARCHAR2(20 char)   | 要保人ID               |    |
|     | EMPTYPE            | VARCHAR2(30 char)   | 理專/理財主管             |    |
|     | NEWCUSTOM          | VARCHAR2(1 char)    | 是否為新客戶              |    |
|     | SENDDATE           | VARCHAR2(20 char)   | 送件日                 |    |
|     | AGE                | VARCHAR2(3 char)    | 年齡                  |    |
|     | ADDFEE             | NUMBER(18, 2)        | 業績加成                |    |
|     | AOBOSSID           | VARCHAR2(10 char)   | 理財主管員編              |    |
|     | AOBOSS             | VARCHAR2(20 char)   | 理財主管                |    |
|     | WAY_STATUS         | VARCHAR2(10 char)   | 首續期                 |    |
|     | CONTRACT_TYPE      | VARCHAR2(3 char)    | 主附約                 |    |
|     | POLICY_NO          | VARCHAR2(20 char)   | 受理編號                |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間              |    |

### VW_ODS_D_QUE_ANSFORMS

#### 問卷答案主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(80 char)   | 答案代碼               |    |
|     | C2                 | VARCHAR2(200 char)  | 問卷ID               |    |
|     | C3                 | VARCHAR2(32 char)   | 客戶代碼               |    |
|     | C4                 | INTEGER             | 問券版號               |    |
|     | C5                 | VARCHAR2(32 char)   | 問卷填寫來源             |    |
|     | C6                 | VARCHAR2(4 char)    | 是否有效               |    |
|     | C7                 | VARCHAR2(24 char)   | 生效日                |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_QUE_ANSSELS

#### 問券答案細項檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(80 char)   | 答案代碼               |    |
|     | C2                 | VARCHAR2(200 char)  | 問卷ID               |    |
| PK  | C3                 | VARCHAR2(200 char)  | 問卷題目編號             |    |
| PK  | C4                 | VARCHAR2(200 char)  | 問卷答案編號             |    |
|     | C5                 | NUMBER(10, 0)        | 問卷答案分數             |    |
|     | C6                 | VARCHAR2(2400 char) | 問卷答案輸入欄位           |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_QUE_FORMS

#### 問卷主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(200 char)  | 問卷ID               |    |
|     | C2                 | VARCHAR2(80 char)   | 問卷類型代碼             |    |
|     | C3                 | VARCHAR2(800 char)  | 問卷版本               |    |
|     | C4                 | VARCHAR2(800 char)  | 問卷名稱               |    |
|     | C5                 | VARCHAR2(800 char)  | 問卷英文名稱             |    |
|     | C6                 | VARCHAR2(24 char)   | 問卷有效起始日            |    |
|     | C7                 | VARCHAR2(24 char)   | 問卷有效結束日            |    |
|     | C8                 | VARCHAR2(4 char)    | 問卷是否有效             |    |
|     | C9                 | VARCHAR2(4 char)    | 此問卷是否計分            |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_QUE_ITEMS

#### 問卷題目檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(200 char)  | 問卷ID               |    |
|     | C2                 | VARCHAR2(4 char)    | 選項類別               |    |
| PK  | C3                 | VARCHAR2(200 char)  | 題目ID               |    |
|     | C4                 | VARCHAR2(800 char)  | 題目內容               |    |
|     | C5                 | VARCHAR2(800 char)  | 題目英文內容             |    |
|     | C6                 | VARCHAR2(4 char)    | 是否必填               |    |
|     | C7                 | NUMBER(24, 0)        | 顯示筆數               |    |
|     | C8                 | VARCHAR2(12 char)   | 群組代碼               |    |
|     | C9                 | VARCHAR2(4 char)    | 題目名稱顯示位置           |    |
|     | C10                | INTEGER             | 顯示順序               |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_QUE_SELS

#### 問卷選項檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                 | VARCHAR2(200 char)  | 題目ID               |    |
|     | C2                 | VARCHAR2(800 char)  | 選項名稱               |    |
|     | C3                 | VARCHAR2(800 char)  | 選項英文名稱             |    |
|     | C4                 | VARCHAR2(4 char)    | 選項名稱顯示位置           |    |
|     | C5                 | NUMBER(10, 4)        | 選項分數               |    |
|     | C6                 | VARCHAR2(4 char)    | 是否為預設勾選            |    |
|     | C7                 | VARCHAR2(12 char)   | 群組代碼               |    |
|     | C8                 | INTEGER             | 顯示順序               |    |
|     | C9                 | VARCHAR2(4 char)    | 是否加入input欄位        |    |
|     | C10                | VARCHAR2(4 char)    | input是否必填          |    |
|     | C11                | VARCHAR2(800 char)  | input欄裡的預設值        |    |
|     | C12                | VARCHAR2(800 char)  | 前綴文字               |    |
|     | C13                | VARCHAR2(800 char)  | 前綴英文文字             |    |
|     | C14                | VARCHAR2(800 char)  | 後接文字               |    |
|     | C15                | VARCHAR2(800 char)  | 後接英文文字             |    |
| PK  | C16                | VARCHAR2(200 char)  | 選項ID               |    |
|     | C17                | VARCHAR2(800 char)  | 下一題題目ID            |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_REBATE

#### 回佣匯入檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | DATADATE           | DATE                | 資料日期               |    |
|     | BRANCHID           | VARCHAR2(6 char)    | 入帳分行               |    |
|     | BRANCHNAME         | VARCHAR2(80 char)   | 分行名稱               |    |
|     | EMPID              | VARCHAR2(10 char)   | 理財專員               |    |
|     | EMPNAME            | VARCHAR2(20 char)   | 理專姓名               |    |
|     | EXEMPID            | VARCHAR2(10 char)   | 推廣員工               |    |
|     | EXEMPNAME          | VARCHAR2(20 char)   | 推廣員工姓名             |    |
|     | REBATE             | NUMBER(9, 0)         | 回佣                 |    |
|     | BDS_AMOUNT         | NUMBER(18, 0)        | 連動債銷售量             |    |
|     | BDS_FEE            | NUMBER(9, 0)         | 連動債手收              |    |
|     | BDS_CNT            | NUMBER(9, 0)         | 連動債筆數              |    |
|     | CUSTOM_UID         | VARCHAR2(15 char)   | 客戶ID               |    |
| PK  | TRANSACTION_NO     | VARCHAR2(15 char)   | 信託編號               |    |
|     | TXN_DATE           | DATE                | 交易日期               |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_RISKTYPE

#### 客戶投資風險屬性

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | RISKNUM            | VARCHAR2(50 char)   | 承作編號               |    |
|     | CUSTOM_UID         | VARCHAR2(20 char)   | 客戶id               |    |
|     | SUPPOSE_UID        | VARCHAR2(20 char)   | 虛擬客戶id             |    |
|     | CUSTOM             | VARCHAR2(100 char)  | 客戶姓名               |    |
|     | H_TEL              | VARCHAR2(50 char)   | 住家電話               |    |
|     | O_TEL              | VARCHAR2(50 char)   | 公司電話               |    |
|     | CELL               | VARCHAR2(50 char)   | 手機                 |    |
|     | CADDRESS           | VARCHAR2(100 char)  | 通訊地址               |    |
|     | RISKTYPE           | VARCHAR2(30 char)   | 投資風險屬性             |    |
|     | DODATE             | VARCHAR2(20 char)   | 承作日                |    |
|     | EMAIL              | VARCHAR2(50 char)   | EmailAddress       |    |
|     | DEST               | VARCHAR2(5 char)    | 測驗目的               |    |
|     | RERISKTYPE         | VARCHAR2(1 char)    | 變更投資屬性             |    |
|     | SCORE              | INTEGER             | 分數                 |    |
|     | SCORERISKTYPE      | VARCHAR2(30 char)   | 分數投資屬性             |    |
|     | ACCEPTBDS          | VARCHAR2(1 char)    | 是否接受衍生性商品          |    |
|     | AOID               | VARCHAR2(10 char)   | 承作人員編              |    |
|     | AONAME             | VARCHAR2(20 char)   | 承作人姓名              |    |
|     | BRANCHID           | VARCHAR2(10 char)   | 分行代號               |    |
|     | BRANCHNAME         | VARCHAR2(50 char)   | 分行名稱               |    |
|     | CONFBOSS           | VARCHAR2(50 char)   | 覆核主管               |    |
|     | CONFDATETIME       | VARCHAR2(20 char)   | 覆核時間               |    |
|     | STATE              | VARCHAR2(10 char)   | 審核狀態               |    |
|     | REASON             | VARCHAR2(50 char)   | 承作原因               |    |
|     | PRINTDATE          | VARCHAR2(20 char)   | 列印時間               |    |
|     | JOB                | VARCHAR2(1 char)    | 職業                 |    |
|     | JOB_OTHER          | VARCHAR2(20 char)   | 職業_其他              |    |
|     | PROTITLE           | VARCHAR2(1 char)    | 職業                 |    |
|     | PROTITLE_OTHER     | VARCHAR2(20 char)   | 職業_其他              |    |
|     | BANK_UNIT          | VARCHAR2(1 char)    | 本行往來資產             |    |
|     | BANK_AMOUNT        | VARCHAR2(1 char)    | 往來資金               |    |
|     | MONEYFROM          | VARCHAR2(6 char)    | 資金來源               |    |
|     | MONEYFROM_OTHER    | VARCHAR2(20 char)   | 資金來源_其他            |    |
|     | SICKNESS           | VARCHAR2(1 char)    | 重大傷病證明卡            |    |
|     | CP                 | VARCHAR2(1 char)    | 個人/公司              |    |
|     | COMPANYTYPE        | VARCHAR2(1 char)    | 公司型態               |    |
|     | COMPANYSETUP       | VARCHAR2(1 char)    | 成立期間               |    |
|     | COMPANYASSETS      | VARCHAR2(1 char)    | 公司總資產              |    |
|     | PROMAN             | VARCHAR2(1 char)    | 專業投資人              |    |
|     | EXPERIENCE         | VARCHAR2(1 char)    | 5年內是否有購買經驗(國內基金不算） |    |
|     | MUSTDOWN           | VARCHAR2(1 char)    | 強迫降為保守型            |    |
|     | AGENT              | VARCHAR2(80 char)   | 代理人姓名              |    |
|     | SEX                | VARCHAR2(1 char)    | 性別                 |    |
|     | BIRTHDAY           | DATE                | 生日                 |    |
|     | OVEMPID            | VARCHAR2(10 char)   | 陪訪人員編              |    |
|     | OVEMPNAME          | VARCHAR2(20 char)   | 陪訪人姓名              |    |
|     | HRTOAOID           | VARCHAR2(10 char)   | 高風險客戶指定分派理專員編      |    |
|     | HRTOAONAME         | VARCHAR2(20 char)   | 高風險客戶指定分派理專姓名      |    |
|     | HRTOAOACCEPT       | VARCHAR2(1 char)    | 指定分派理專是否接受         |    |
|     | HRTOAOCONFDATETIME | VARCHAR2(20 char)   | 指定分派理專是否接受設定時間     |    |
|     | ACCAOID            | VARCHAR2(10 char)   | 帳管理專員編             |    |
|     | ACCAONAME          | VARCHAR2(20 char)   | 帳管理專姓名             |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_TMS180

#### 個人信託帳號對照檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                 | VARCHAR2(11 char)   | 身分證號               |    |
|     | C2                 | VARCHAR2(15 char)   | 帳號                 |    |
|     | C3                 | VARCHAR2(3 char)    | 幣別                 |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |    |

### VW_ODS_D_VIP_ID

#### 貴賓戶名單檔(台外幣)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                 | VARCHAR2(11 char)   | 客戶ID               |    |
|     | C2                 | VARCHAR2(2 char)    | 貴賓戶等級              |    |
| PK  | C3                 | VARCHAR2(4 char)    | 帳管分行               |    |
|     | C4                 | VARCHAR2(6 char)    | 帳管理專               |    |
|     | C5                 | DATE                | 異動日期               |    |
|     | C6                 | VARCHAR2(1 char)    | 主次帳管               |    |
|     | TBL_UPD_TIM        | TIMESTAMP           | 表格更新時間             |
