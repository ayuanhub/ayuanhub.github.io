---
sidebar_position: 29
title: 外匯系統-遠匯(FXFA)
---

### VW_ODS_D_FILE0LF23

#### 遠期兌換損益分析-遠期外匯-OBU FATCA

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(5 char)  | 傳票序號           |    |
| PK  | C2                | DATE              | 交易日期           |    |
| PK  | C3                | VARCHAR2(20 char) | 交易編號           |    |
|     | C4                | VARCHAR2(2 char)  | 保證人/交易對手國別     |    |
|     | C5                | NUMBER(4, 0)       | 交易行            |    |
|     | C6                | VARCHAR2(12 char) | SWIFTCODE/顧客ID |    |
|     | C7                | VARCHAR2(3 char)  | 美金幣別           |    |
|     | C8                | NUMBER(18, 2)      | 美金金額           |    |
|     | C9                | VARCHAR2(2 char)  | 公司負責人國別        |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILE0LF24

#### 遠期兌換損益分析-外匯換匯-OBU FATCA

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(5 char)  | 傳票序號           |    |
| PK  | C2                | DATE              | 交易日期           |    |
| PK  | C3                | VARCHAR2(20 char) | 交易編號           |    |
|     | C4                | VARCHAR2(2 char)  | 國別             |    |
|     | C5                | VARCHAR2(4 char)  | 交易行            |    |
|     | C6                | VARCHAR2(12 char) | SWIFTCODE/顧客ID |    |
|     | C7                | VARCHAR2(3 char)  | 美金幣別           |    |
|     | C8                | NUMBER(18, 2)      | 美金金額           |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEACPI02

#### 存同帳戶報表明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(4 char)  | 單位             |    |
| PK  | C2                | VARCHAR2(8 char)  | 帳戶代碼           |    |
| PK  | C3                | VARCHAR2(3 char)  | 幣別             |    |
|     | C4                | VARCHAR2(16 char) | 帳戶名稱           |    |
|     | C5                | NUMBER(18, 2)      | 目前餘額           |    |
|     | C6                | VARCHAR2(12 char) | SWIFTCODE      |    |
|     | C7                | VARCHAR2(2 char)  | SWIFTCODE(56碼) |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEFAM

#### 客戶預購(售)遠匯主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(4 char)  | 營業單位(代碼)       |    |
|     | C2                | VARCHAR2(12 char) | 營業單位名稱         |    |
| PK  | C3                | VARCHAR2(16 char) | 遠匯交易編號         |    |
|     | C4                | VARCHAR2(16 char) | 遠匯展期編號         |    |
|     | C5                | VARCHAR2(16 char) | 各業務交易編號        |    |
|     | C6                | VARCHAR2(1 char)  | 遠匯交易別          |    |
|     | C7                | VARCHAR2(1 char)  | 交易副檔型態         |    |
|     | C8                | NUMBER(2, 0)       | 交易副檔序號         |    |
|     | C9                | NUMBER(2, 0)       | 交易更正版次         |    |
|     | C10               | VARCHAR2(1 char)  | 戶況             |    |
|     | C11               | VARCHAR2(4 char)  | 記帳行代碼          |    |
|     | C12               | DATE              | 交易日期           |    |
|     | C13               | VARCHAR2(4 char)  | 前次交易型態         |    |
|     | C14               | VARCHAR2(4 char)  | 此次交易型態         |    |
|     | C15               | VARCHAR2(20 char) | 此次交易型態說明       |    |
|     | C16               | VARCHAR2(3 char)  | 類別             |    |
|     | C17               | VARCHAR2(40 char) | 類別說明           |    |
|     | C18               | VARCHAR2(3 char)  | 額度類別           |    |
|     | C19               | VARCHAR2(1 char)  | 額度扣減別          |    |
|     | C20               | NUMBER(18, 0)      | 額度金額           |    |
|     | C21               | NUMBER(12, 6)      | 額度評估匯率         |    |
|     | C22               | VARCHAR2(6 char)  | 顧客號碼           |    |
|     | C23               | VARCHAR2(12 char) | 批覆書號           |    |
|     | C24               | VARCHAR2(40 char) | 顧客名稱           |    |
|     | C25               | VARCHAR2(11 char) | 顧客統一編號         |    |
|     | C26               | VARCHAR2(12 char) | 顧客電話           |    |
|     | C27               | VARCHAR2(40 char) | 顧客地址一          |    |
|     | C28               | VARCHAR2(40 char) | 顧客地址二          |    |
|     | C29               | VARCHAR2(40 char) | 顧客地址三          |    |
|     | C30               | VARCHAR2(3 char)  | 遠匯分類編號         |    |
|     | C31               | VARCHAR2(60 char) | 遠匯性質全文         |    |
|     | C32               | DATE              | 訂約日            |    |
|     | C33               | DATE              | 交割日            |    |
|     | C34               | DATE              | 展期/取消日         |    |
|     | C35               | DATE              | 提前交割日          |    |
|     | C36               | DATE              | 違約日            |    |
|     | C37               | NUMBER(3, 0)       | 掛牌天數           |    |
|     | C38               | NUMBER(1, 0)       | 指定到期別          |    |
|     | C39               | VARCHAR2(12 char) | 指定到期別說明        |    |
|     | C40               | DATE              | 指定到期日          |    |
|     | C41               | DATE              | 原指定到期日         |    |
|     | C42               | DATE              | 指定交割區間-起始日     |    |
|     | C43               | DATE              | 指定交割區間-終止日     |    |
|     | C44               | DATE              | 原指定交割區間-起始日    |    |
|     | C45               | DATE              | 原指定交割區間-終止日    |    |
|     | C46               | NUMBER(3, 0)       | 天數             |    |
|     | C47               | NUMBER(3, 0)       | 區間天數-起始天數      |    |
|     | C48               | NUMBER(3, 0)       | 區間天數-終止天數      |    |
|     | C49               | VARCHAR2(3 char)  | 預購/預售幣別        |    |
|     | C50               | NUMBER(18, 0)      | 預購/預售金額(未交割金額) |    |
|     | C51               | NUMBER(18, 0)      | 欲交割金額          |    |
|     | C52               | NUMBER(18, 0)      | 未交割餘額          |    |
|     | C53               | NUMBER(18, 0)      | 各業務交割金額合計      |    |
|     | C54               | VARCHAR2(13 char) | 交割/繳費外幣帳號      |    |
|     | C55               | VARCHAR2(1 char)  | 交割/繳費外幣支號      |    |
|     | C56               | NUMBER(18, 0)      | 展期金額           |    |
|     | C57               | NUMBER(18, 0)      | 部份取消金額         |    |
|     | C58               | VARCHAR2(3 char)  | 匯率差價幣別         |    |
|     | C59               | NUMBER(18, 0)      | 匯率差價金額         |    |
|     | C60               | VARCHAR2(3 char)  | 相對幣別           |    |
|     | C61               | NUMBER(18, 0)      | 相對幣別金額         |    |
|     | C62               | VARCHAR2(13 char) | 相對幣別帳號         |    |
|     | C63               | VARCHAR2(1 char)  | 相對幣別支號         |    |
|     | C64               | VARCHAR2(3 char)  | 原相對幣別(OFFSET用) |    |
|     | C65               | NUMBER(18, 0)      | 原相對金額(OFFSET用) |    |
|     | C66               | NUMBER(12, 6)      | 議價成本匯率         |    |
|     | C67               | NUMBER(12, 6)      | 議價成交匯率         |    |
|     | C68               | NUMBER(12, 6)      | 部分取消成本匯率       |    |
|     | C69               | NUMBER(12, 6)      | 部分取消成交匯率       |    |
|     | C70               | NUMBER(12, 6)      | 展期成本匯率         |    |
|     | C71               | NUMBER(12, 6)      | 展期成交匯率         |    |
|     | C72               | NUMBER(12, 6)      | 提前交割成本匯率       |    |
|     | C73               | NUMBER(12, 6)      | 提前交割成交匯率       |    |
|     | C74               | NUMBER(12, 6)      | 保證成數           |    |
|     | C75               | VARCHAR2(3 char)  | 保證金幣別          |    |
|     | C76               | NUMBER(18, 0)      | 保證金金額(外幣)      |    |
|     | C77               | VARCHAR2(1 char)  | 保證金型式          |    |
|     | C78               | VARCHAR2(3 char)  | 保證金繳交幣別        |    |
|     | C79               | NUMBER(18, 0)      | 保證金繳交金額        |    |
|     | C80               | NUMBER(12, 6)      | 原成本匯率          |    |
|     | C81               | NUMBER(12, 6)      | 原成交匯率          |    |
|     | C82               | NUMBER(12, 6)      | 議價匯率           |    |
|     | C83               | NUMBER(18, 0)      | 存入台幣金額         |    |
|     | C84               | NUMBER(18, 0)      | 各業務可交割餘額       |    |
|     | C85               | VARCHAR2(12 char) | 台幣帳號           |    |
|     | C86               | VARCHAR2(15 char) | 其他憑證號碼         |    |
|     | C87               | NUMBER(18, 0)      | 應退台幣金額         |    |
|     | C88               | VARCHAR2(40 char) | 刪除原因           |    |
|     | C89               | VARCHAR2(1 char)  | 乘除判別碼          |    |
|     | C90               | VARCHAR2(1 char)  | 是否已覆核(訂約)      |    |
|     | C91               | VARCHAR2(1 char)  | 是否已覆核(展期)/交割原因 |    |
|     | C92               | VARCHAR2(1 char)  | 是否已覆核(提前交割)    |    |
|     | C93               | VARCHAR2(1 char)  | 是否已覆核(違約)      |    |
|     | C94               | VARCHAR2(1 char)  | 修改放行FLAG       |    |
|     | C95               | VARCHAR2(1 char)  | 交易主管放行FLAG     |    |
|     | C96               | VARCHAR2(1 char)  | 遠匯FLAG         |    |
|     | C97               | VARCHAR2(8 char)  | 輸入時間(交易員)      |    |
|     | C98               | VARCHAR2(8 char)  | 輸入時間(交割員)      |    |
|     | C99               | VARCHAR2(10 char) | 輸入經辦(交易員)      |    |
|     | C100              | VARCHAR2(10 char) | 輸入主管(交割員)      |    |
|     | C101              | VARCHAR2(1 char)  | 交割主管放行FLAG     |    |
|     | C102              | DATE              | 放行日期(交易主管)     |    |
|     | C103              | DATE              | 放行日期(交割主管)     |    |
|     | C104              | VARCHAR2(8 char)  | 放行時間(交易主管)     |    |
|     | C105              | VARCHAR2(8 char)  | 放行時間(交割主管)     |    |
|     | C106              | VARCHAR2(10 char) | 放行主管(交易主管)     |    |
|     | C107              | VARCHAR2(10 char) | 放行主管(交割主管)     |    |
|     | C108              | VARCHAR2(3 char)  | 美金             |    |
|     | C109              | NUMBER(18, 0)      | 等值美金           |    |
|     | C110              | NUMBER(12, 6)      | 額度匯率           |    |
|     | C111              | NUMBER(18, 0)      | WB-FIELD-1     |    |
|     | C112              | NUMBER(18, 0)      | WB-FIELD-2     |    |
|     | C113              | VARCHAR2(3 char)  | 額度幣別           |    |
|     | C114              | VARCHAR2(12 char) | OLD-CANO       |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEFAM44

#### 顧客間即期BY國別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(16 char) | 交易編號           |    |
|     | C3                | VARCHAR2(3 char)  | 客戶預購(售)幣別      |    |
|     | C2                | NUMBER(18, 2)      | 餘額             |    |
|     | C4                | VARCHAR2(2 char)  | 保證人/交易對手國別     |    |
|     | C5                | VARCHAR2(2 char)  | 公司負責人國別        |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEFXCM

#### 外匯交易主檔 FOR Customer

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                | VARCHAR2(4 char)  | 營業單位           |    |
| PK  | C2                | VARCHAR2(16 char) | 交易編號           |    |
|     | C3                | VARCHAR2(16 char) | 換匯即期交易編號       |    |
|     | C4                | VARCHAR2(16 char) | 換匯遠期交易編號       |    |
|     | C5                | DATE              | 交易日期           |    |
|     | C6                | NUMBER(2, 0)       | 本次副檔序號         |    |
|     | C7                | NUMBER(5, 0)       | 傳票序號           |    |
|     | C8                | NUMBER(2, 0)       | 傳票版次           |    |
|     | C9                | VARCHAR2(20 char) | 傳票交易編號         |    |
|     | C10               | VARCHAR2(4 char)  | 記帳單位           |    |
|     | C11               | VARCHAR2(4 char)  | 前次記錄型態         |    |
|     | C12               | VARCHAR2(4 char)  | 本次記錄型態         |    |
|     | C13               | VARCHAR2(20 char) | 本次記錄型態說明       |    |
|     | C14               | DATE              | 訂約日期           |    |
|     | C15               | NUMBER(1, 0)       | 交易目的           |    |
|     | C16               | NUMBER(1, 0)       | 交易方式           |    |
|     | C17               | VARCHAR2(1 char)  | 交易主管放行Flag     |    |
|     | C18               | VARCHAR2(1 char)  | 交割主管放行Flag     |    |
|     | C19               | VARCHAR2(1 char)  | 修改放行Flag       |    |
|     | C20               | VARCHAR2(1 char)  | 刪除Flag         |    |
|     | C21               | VARCHAR2(40 char) | 刪除原因           |    |
|     | C22               | VARCHAR2(1 char)  | 換匯交易即期FLAG     |    |
|     | C23               | VARCHAR2(2 char)  | 額度類別           |    |
|     | C24               | VARCHAR2(2 char)  | 額度性質           |    |
|     | C25               | NUMBER(12, 6)      | 額度適用匯率         |    |
|     | C26               | VARCHAR2(3 char)  | 額度幣別           |    |
|     | C27               | NUMBER(18, 2)      | 扣減額度           |    |
|     | C28               | NUMBER(18, 2)      | 回復額度           |    |
|     | C29               | VARCHAR2(2 char)  | 業務種類           |    |
|     | C30               | VARCHAR2(10 char) | 業務名稱           |    |
|     | C31               | VARCHAR2(6 char)  | 客戶戶號           |    |
|     | C32               | VARCHAR2(11 char) | 客戶ID           |    |
|     | C33               | VARCHAR2(40 char) | 客戶名稱           |    |
|     | C34               | VARCHAR2(2 char)  | 客戶所在國別         |    |
|     | C35               | DATE              | 交割日期(即期)       |    |
|     | C36               | NUMBER(12, 6)      | 成交匯率(即期)       |    |
|     | C37               | NUMBER(12, 6)      | 成本匯率(即期)       |    |
|     | C38               | VARCHAR2(3 char)  | 買入幣別(即期)       |    |
|     | C39               | NUMBER(18, 0)      | 買入金額(即期)       |    |
|     | C40               | NUMBER(18, 0)      | 買入部位金額(即期)     |    |
|     | C41               | VARCHAR2(3 char)  | 賣出幣別(即期)       |    |
|     | C42               | NUMBER(18, 0)      | 賣出金額(即期)       |    |
|     | C43               | NUMBER(18, 0)      | 賣出部位金額(即期)     |    |
|     | C44               | VARCHAR2(1 char)  | 是否出交割帳-1       |    |
|     | C45               | DATE              | 交割日期(遠期)       |    |
|     | C46               | NUMBER(12, 6)      | 成交匯率(遠期)       |    |
|     | C47               | NUMBER(12, 6)      | 成本匯率(遠期)       |    |
|     | C48               | VARCHAR2(3 char)  | 買入幣別(遠期)       |    |
|     | C49               | NUMBER(18, 0)      | 買入金額(遠期)       |    |
|     | C50               | NUMBER(18, 0)      | 買入部位金額(遠期)     |    |
|     | C51               | VARCHAR2(3 char)  | 賣出幣別(遠期)       |    |
|     | C52               | NUMBER(18, 0)      | 賣出金額(遠期)       |    |
|     | C53               | NUMBER(18, 0)      | 賣出部位金額(遠期)     |    |
|     | C54               | VARCHAR2(1 char)  | 是否出交割帳-2       |    |
|     | C55               | NUMBER(12, 6)      | 折強勢幣匯率         |    |
|     | C56               | NUMBER(18, 0)      | 折強勢幣金額         |    |
|     | C57               | VARCHAR2(60 char) | 交易處理狀況說明       |    |
|     | C58               | VARCHAR2(1 char)  | 訂約覆核記號         |    |
|     | C59               | VARCHAR2(1 char)  | 央行交易記號         |    |
|     | C60               | VARCHAR2(20 char) | 對方電話確認人員       |    |
|     | C61               | VARCHAR2(8 char)  | 確認時間           |    |
|     | C62               | VARCHAR2(10 char) | 交易員名稱          |    |
|     | C63               | DATE              | 交易員維護日期        |    |
|     | C64               | VARCHAR2(10 char) | 交易員維護時間        |    |
|     | C65               | VARCHAR2(10 char) | 訂約覆核經辦名稱       |    |
|     | C66               | DATE              | 訂約覆核經辦維護日期     |    |
|     | C67               | VARCHAR2(10 char) | 訂約覆核經辦維護時間     |    |
|     | C68               | VARCHAR2(10 char) | 訂約放行主管名稱       |    |
|     | C69               | DATE              | 訂約主管放行日期       |    |
|     | C70               | VARCHAR2(8 char)  | 訂約主管放行時間       |    |
|     | C71               | VARCHAR2(10 char) | 交割覆核經辦名稱       |    |
|     | C72               | DATE              | 交割覆核經辦維護日期     |    |
|     | C73               | VARCHAR2(10 char) | 交割覆核經辦維護時間     |    |
|     | C74               | VARCHAR2(10 char) | 交割放行主管名稱       |    |
|     | C75               | DATE              | 交割主管放行日期       |    |
|     | C76               | VARCHAR2(10 char) | 交割主管放行時間       |    |
|     | C77               | DATE              | 清算日期           |    |
|     | C78               | VARCHAR2(1 char)  | 清算覆核FLAG       |    |
|     | C79               | VARCHAR2(3 char)  | 清算差額幣別         |    |
|     | C80               | NUMBER(18, 0)      | 清算差額           |    |
|     | C81               | VARCHAR2(12 char) | 批覆書號           |    |
|     | C82               | VARCHAR2(3 char)  | 額度細項           |    |
|     | C83               | VARCHAR2(1 char)  | 交割原因           |    |
|     | C84               | VARCHAR2(16 char) | 申報央行編號         |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEFXMB9

#### 銀行間外匯交易報表檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1                | VARCHAR2(16 char) | 交易編號           |    |
|     | C2                | VARCHAR2(2 char)  | 國別             |    |
|     | C3                | VARCHAR2(3 char)  | 額度幣別           |    |
|     | C4                | NUMBER(18, 2)      | 扣減額度           |    |
|     | C5                | DATE              | 交割日            |    |
|     | C6                | VARCHAR2(3 char)  | 買入幣別           |    |
|     | C7                | NUMBER(18, 2)      | 買入金額           |    |
|     | C8                | VARCHAR2(3 char)  | 賣出幣別           |    |
|     | C9                | NUMBER(18, 2)      | 賣出金額           |    |
|     | C10               | NUMBER(18, 2)      | 遠期兌換損益         |    |
|     | C11               | NUMBER(18, 2)      | 損益等值美金         |    |
|     | C12               | VARCHAR2(2 char)  | 交易類型           |    |
|     | C13               | VARCHAR2(8 char)  | SWIFTCODE      |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEFXMC9

#### 銀行間外匯交易報表檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(16 char) | 交易編號           |    |
|     | C2                | VARCHAR2(2 char)  | 國別             |    |
|     | C3                | DATE              | 交割日            |    |
|     | C4                | VARCHAR2(3 char)  | 買入幣別           |    |
|     | C5                | NUMBER(18, 2)      | 買入金額           |    |
|     | C6                | VARCHAR2(3 char)  | 賣出幣別           |    |
|     | C7                | NUMBER(18, 2)      | 賣出金額           |    |
|     | C8                | VARCHAR2(8 char)  | SWIFTCODE      |    |
|     | C9                | VARCHAR2(2 char)  | SWIFTCODE56碼   |    |
|     | C10               | NUMBER(18, 2)      | 差額             |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEPLF10

#### 遠期兌換損益分析-顧客間

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(20 char) | 交易編號           |    |
| PK  | C2                | VARCHAR2(3 char)  | 買入幣別           |    |
|     | C3                | NUMBER(18, 2)      | 買入金額           |    |
|     | C4                | VARCHAR2(3 char)  | 賣出幣別           |    |
|     | C5                | NUMBER(18, 2)      | 賣出金額           |    |
|     | C6                | NUMBER(18, 2)      | 遠期兌換損益         |    |
|     | C7                | VARCHAR2(11 char) | 統編             |    |
|     | C8                | VARCHAR2(2 char)  | 國別             |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEPLF23

#### 遠期兌換損益分析-遠期外匯 FATCA

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(5 char)  | 傳票序號           |    |
| PK  | C2                | DATE              | 交易日期           |    |
| PK  | C3                | VARCHAR2(20 char) | 交易編號           |    |
|     | C4                | VARCHAR2(2 char)  | 國別             |    |
|     | C5                | VARCHAR2(4 char)  | 交易行            |    |
|     | C6                | VARCHAR2(12 char) | SWIFTCODE/顧客ID |    |
|     | C7                | VARCHAR2(3 char)  | 台幣幣別           |    |
|     | C8                | NUMBER(18, 2)      | 台幣金額           |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILEPLF24

#### 遠期兌換損益分析-外匯換匯 FATCA

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                | VARCHAR2(5 char)  | 傳票序號           |    |
| PK  | C2                | DATE              | 交易日期           |    |
| PK  | C3                | VARCHAR2(20 char) | 交易編號           |    |
|     | C4                | VARCHAR2(2 char)  | 國別             |    |
|     | C5                | VARCHAR2(4 char)  | 交易行            |    |
|     | C6                | VARCHAR2(12 char) | SWIFTCODE/顧客ID |    |
|     | C7                | VARCHAR2(3 char)  | 台幣幣別           |    |
|     | C8                | NUMBER(18, 2)      | 台幣金額           |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILERP1

#### MM(RP/RS)交易檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_DATE         | DATE              | 日期             |    |
| PK  | TXN_NUMBER        | VARCHAR2(12 char) | 交易代號           |    |
|     | THE_TYPE          | VARCHAR2(2 char)  | 商品種類           |    |
|     | THE_CURRENCY      | VARCHAR2(3 char)  | 幣別             |    |
|     | ISSUE_DATE        | DATE              | 發行日            |    |
|     | MATURITY_DATE     | DATE              | 到期日            |    |
|     | COUPON_RATE       | NUMBER(8, 6)       | 票面利率           |    |
|     | THE_POSITION      | NUMBER(18, 2)      | 金額             |    |
|     | COLLATERAL        | VARCHAR2(12 char) | 債券編號           |    |
|     | COLLATERAL_AMOUNT | NUMBER(18, 2)      | 債券面額           |    |
|     | COUNTERPARTY      | VARCHAR2(12 char) | 交易對手           |    |
|     | OUTSTANDING_FLAG  | VARCHAR2(8 char)  | 有效旗標(N-結案)     |    |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間         |
