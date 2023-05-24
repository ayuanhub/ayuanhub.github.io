---
sidebar_position: 32
title: 外匯系統-共用(FXFX)
---

### VW_ODS_D_FILEBUS

#### 分行資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 分行代號                |    |
|     | C2          | VARCHAR2(40 char) | 分行名稱                |    |
|     | C3          | VARCHAR2(4 char)  | 記帳分行                |    |
|     | C4          | VARCHAR2(24 char) | 業務主管                |    |
|     | C5          | VARCHAR2(80 char) | 分行住址                |    |
|     | C6          | VARCHAR2(12 char) | 分行電話                |    |
|     | C7          | VARCHAR2(12 char) | 傳真號碼                |    |
|     | C8          | VARCHAR2(24 char) | 業務經辦                |    |
|     | C601        | NUMBER(1, 0)       | 營運中                 |    |
|     | C602        | NUMBER(1, 0)       | 平帳試算                |    |
|     | C603        | NUMBER(1, 0)       | 指定劃帳                |    |
|     | C604        | NUMBER(1, 0)       | 已總結                 |    |
|     | C605        | NUMBER(1, 0)       | 批次作業                |    |
|     | C606        | NUMBER(1, 0)       | 臺幣額度離線控管            |    |
|     | C607        | NUMBER(1, 0)       | 關帳匯率                |    |
|     | C608        | NUMBER(1, 0)       | 聯往息利率               |    |
|     | C609        | NUMBER(1, 0)       | 央行清算控管欄位            |    |
|     | C610        | NUMBER(1, 0)       | 預留欄位                |    |
|     | C10         | DATE              | 成立指定分行日期            |    |
|     | C11         | VARCHAR2(2 char)  | 央行字軌分行代碼            |    |
|     | C12         | VARCHAR2(4 char)  | 央行字軌                |    |
|     | C13         | VARCHAR2(18 char) | GEB申請檔歷史資料          |    |
|     | C14         | DATE              | 營業日期                |    |
|     | C15         | VARCHAR2(10 char) | 使用者                 |    |
|     | C16         | VARCHAR2(8 char)  | 統一編號                |    |
|     | C17         | VARCHAR2(3 char)  | 稽徵機關代號              |    |
|     | C18         | VARCHAR2(4 char)  | 媒體單位代號              |    |
|     | C19         | VARCHAR2(9 char)  | 營利事業稅籍編號            |    |
|     | C20         | VARCHAR2(12 char) | 房屋稅籍編號              |    |
|     | C21         | VARCHAR2(2 char)  | 地區代碼                |    |
|     | C22         | VARCHAR2(1 char)  | 乙種外匯旗標              |    |
|     | C23         | VARCHAR2(1 char)  | 分行類別                |    |
|     | C24         | VARCHAR2(4 char)  | 代理行(存款)             |    |
|     | C611        | NUMBER(1, 0)       | OBU外指行營運中           |    |
|     | C612        | NUMBER(1, 0)       | OBU外指行平帳試算          |    |
|     | C613        | NUMBER(1, 0)       | OBU預留欄位             |    |
|     | C614        | NUMBER(1, 0)       | OBU預留欄位             |    |
|     | C615        | NUMBER(1, 0)       | OBU預留欄位             |    |
|     | C26         | VARCHAR2(4 char)  | 進口代理行               |    |
|     | C27         | VARCHAR2(4 char)  | 出口代理行               |    |
|     | C28         | VARCHAR2(4 char)  | 匯兌代理行               |    |
|     | C29         | VARCHAR2(4 char)  | 放款代理行               |    |
|     | C30         | VARCHAR2(12 char) | SWIFT_Code          |    |
|     | C31         | VARCHAR2(40 char) | 分行英文地址一             |    |
|     | C32         | VARCHAR2(40 char) | 分行英文地址二             |    |
|     | C33         | VARCHAR2(40 char) | 分行英文地址三             |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILECCY

#### 幣別檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(3 char)  | 幣別                  |    |
|     | C2          | VARCHAR2(3 char)  | SWIFT代碼             |    |
|     | C3          | VARCHAR2(2 char)  | 幣別數字代碼              |    |
|     | C4          | VARCHAR2(2 char)  | 幣別所屬國家              |    |
|     | C5          | VARCHAR2(22 char) | 幣別英文全名              |    |
|     | C6          | VARCHAR2(40 char) | 幣別中文全名              |    |
|     | C7          | VARCHAR2(40 char) | 主幣名稱                |    |
|     | C8          | VARCHAR2(10 char) | 輔幣名稱                |    |
|     | C9          | VARCHAR2(1 char)  | 對美元報價               |    |
|     | C10         | NUMBER(3, 0)       | 基礎計息天數              |    |
|     | C11         | NUMBER(12, 6)      | 合理檢核範圍              |    |
|     | C12         | NUMBER(12, 6)      | 合理性檢核上限匯率           |    |
|     | C13         | NUMBER(12, 6)      | 合理性檢核下限匯率           |    |
|     | C14         | NUMBER(1, 0)       | 小數位數                |    |
|     | C15         | VARCHAR2(2 char)  | 報表列印順序              |    |
|     | C16         | NUMBER(3, 0)       | 掛牌盤數                |    |
|     | C17         | NUMBER(12, 6)      | 即期買入（對美元）           |    |
|     | C18         | NUMBER(12, 6)      | 即期賣出（對美元）           |    |
|     | C19         | NUMBER(12, 6)      | 即期中價（對美元）           |    |
|     | C20         | NUMBER(12, 6)      | 即期買入（對台幣)           |    |
|     | C21         | NUMBER(12, 6)      | 即期賣出（對台幣）           |    |
|     | C22         | NUMBER(12, 6)      | 即期中價（對台幣）           |    |
|     | C23         | NUMBER(12, 6)      | 現鈔買入（對台幣）           |    |
|     | C24         | NUMBER(12, 6)      | 現鈔賣出（對台幣）           |    |
|     | C25         | NUMBER(12, 6)      | 現鈔中價（對台幣）           |    |
|     | C26         | NUMBER(12, 6)      | 昨日關帳匯率              |    |
|     | C27         | NUMBER(12, 6)      | 上月關帳匯率              |    |
|     | C28         | NUMBER(12, 6)      | 中價(以雜幣為被報價幣對美金)     |    |
|     | C29         | NUMBER(12, 6)      | 買入(以雜幣為被報價幣對美金)     |    |
|     | C30         | NUMBER(12, 6)      | 賣出(以雜幣為被報價幣對美金)     |    |
| PK  | C31         | DATE              | 營業日期                |    |
|     | C32         | VARCHAR2(10 char) | 使用者                 |    |
|     | C33         | VARCHAR2(8 char)  | 掛牌時間                |    |
|     | C34         | NUMBER(12, 6)      | 額度評估匯率              |    |
|     | C35         | NUMBER(18, 0)      | 外匯活存起息點             |    |
|     | C36         | NUMBER(1, 0)       | 關帳FLAG              |    |
|     | C37         | NUMBER(12, 6)      | 外幣放款聯往息利率           |    |
|     | C38         | VARCHAR2(40 char) | 國家全名                |    |
|     | C39         | NUMBER(3, 0)       | 外匯交易資金存借業務計息天數      |    |
|     | C40         | VARCHAR2(1 char)  | 乘除判別符號              |    |
|     | C41         | NUMBER(12, 6)      | 上月關帳匯率(對美金)         |    |
|     | C42         | NUMBER(12, 6)      | 記帳匯率(額度)            |    |
|     | C43         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C44         | NUMBER(12, 6)      | 外幣存款利率              |    |
|     | C45         | NUMBER(12, 6)      | 昨日關帳匯率(對美金)         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILECIR

#### 客戶基本資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 交易行(開戶行)            |    |
|     | C2          | VARCHAR2(4 char)  | 記帳行                 |    |
| PK  | C3          | VARCHAR2(6 char)  | 授信戶號                |    |
|     | C4          | VARCHAR2(11 char) | 統一編號(客戶)            |    |
|     | C5          | VARCHAR2(11 char) | 統一編號(負責人)           |    |
|     | C6          | VARCHAR2(70 char) | 客戶名稱(中)             |    |
|     | C7          | VARCHAR2(50 char) | 負責人名稱(中)            |    |
|     | C8          | VARCHAR2(40 char) | 客戶名稱１(英))           |    |
|     | C9          | VARCHAR2(40 char) | 客戶名稱２(英)            |    |
|     | C10         | DATE              | 出生日(西元)             |    |
|     | C11         | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C12         | VARCHAR2(40 char) | 國別英文名稱              |    |
|     | C13         | VARCHAR2(60 char) | 戶籍地址１               |    |
|     | C14         | VARCHAR2(60 char) | 戶籍地址２               |    |
|     | C15         | VARCHAR2(60 char) | 戶籍地址３               |    |
|     | C16         | VARCHAR2(60 char) | 通訊地址１               |    |
|     | C17         | VARCHAR2(60 char) | 通訊地址２               |    |
|     | C18         | VARCHAR2(60 char) | 通訊地址３               |    |
|     | C19         | VARCHAR2(60 char) | 英文地址１               |    |
|     | C20         | VARCHAR2(60 char) | 英文地址２               |    |
|     | C21         | VARCHAR2(60 char) | 英文地址３               |    |
|     | C22         | VARCHAR2(20 char) | 電話號碼１               |    |
|     | C23         | VARCHAR2(20 char) | 電話號碼２               |    |
|     | C24         | VARCHAR2(20 char) | 傳真號碼１               |    |
|     | C25         | VARCHAR2(20 char) | 傳真號碼２               |    |
|     | C26         | VARCHAR2(1 char)  | 稅率                  |    |
|     | C27         | VARCHAR2(1 char)  | 客戶等級                |    |
|     | C28         | VARCHAR2(1 char)  | 戶別                  |    |
|     | C29         | VARCHAR2(1 char)  | 稅別                  |    |
|     | C30         | VARCHAR2(1 char)  | 性別                  |    |
|     | C31         | VARCHAR2(3 char)  | 人格代碼                |    |
|     | C32         | VARCHAR2(5 char)  | 行業別                 |    |
|     | C33         | DATE              | 建檔日期                |    |
|     | C34         | VARCHAR2(1 char)  | 活期最大支號              |    |
|     | C35         | VARCHAR2(4 char)  | 定期最大支號              |    |
|     | C36         | VARCHAR2(1 char)  | 死亡                  |    |
|     | C37         | VARCHAR2(1 char)  | 禁制                  |    |
|     | C38         | VARCHAR2(1 char)  | 扣繳憑單                |    |
|     | C39         | VARCHAR2(1 char)  | 對帳單                 |    |
|     | C40         | VARCHAR2(20 char) | OBU關系人名稱            |    |
|     | C41         | VARCHAR2(5 char)  | OBU關係人代號            |    |
|     | C42         | VARCHAR2(10 char) | 作業經辦                |    |
|     | C43         | VARCHAR2(1 char)  | 國境區分                |    |
|     | C44         | VARCHAR2(13 char) | 在本行撥款帳號             |    |
|     | C45         | VARCHAR2(14 char) | 在本行外存帳號             |    |
|     | C46         | VARCHAR2(40 char) | 交易行名稱               |    |
|     | C47         | VARCHAR2(1 char)  | RELEASE_FLAG        |    |
|     | C48         | VARCHAR2(1 char)  | 交易狀態                |    |
|     | C49         | VARCHAR2(1 char)  | RELEASE_FLAG(主管未放行) |    |
|     | C50         | VARCHAR2(60 char) | 交易說明                |    |
|     | C51         | VARCHAR2(4 char)  | WORK-FIELD(報表用)     |    |
|     | C52         | VARCHAR2(6 char)  | WORK-FIELD2(報表用)    |    |
|     | C53         | VARCHAR2(4 char)  | 顧客服務組組別             |    |
|     | C54         | VARCHAR2(10 char) | 顧客服務專員代號            |    |
|     | C55         | VARCHAR2(60 char) | 顧客服務專員姓名            |    |
|     | C56         | VARCHAR2(10 char) | 顧客服務專員代號1_交叉銷售人員    |    |
|     | C57         | VARCHAR2(60 char) | 顧客服務專員姓名1           |    |
|     | C58         | VARCHAR2(10 char) | 顧客服務專員代號2_新壽通訊處代號   |    |
|     | C59         | VARCHAR2(60 char) | 顧客服務專員姓名2_新壽通訊處名稱   |    |
|     | C60         | VARCHAR2(60 char) | 保證人名稱               |    |
|     | C61         | VARCHAR2(11 char) | 保證人統一編號             |    |
|     | C62         | VARCHAR2(60 char) | 保證人名稱2              |    |
|     | C63         | VARCHAR2(11 char) | 保證人統一編號2            |    |
|     | C64         | VARCHAR2(6 char)  | 對象別(央行)             |    |
|     | C65         | VARCHAR2(4 char)  | 授信區域中心              |    |
|     | C66         | VARCHAR2(7 char)  | 授信AO代碼              |    |
|     | C67         | VARCHAR2(1 char)  | 區域中心自行招攬            |    |
|     | C68         | VARCHAR2(1 char)  | 活期最大支號-OBU          |    |
|     | C69         | VARCHAR2(4 char)  | 定期最大支號-OBU          |    |
|     | C70         | VARCHAR2(1 char)  | 大陸台商                |    |
|     | C71         | VARCHAR2(1 char)  | 地區                  |    |
|     | C72         | VARCHAR2(10 char) | OBU客戶虛擬ID           |    |
|     | C601        | DATE              | 交易日期                |    |
|     | C602        | VARCHAR2(4 char)  | 分行代碼                |    |
|     | C603        | VARCHAR2(5 char)  | 連動交易序號              |    |
|     | C604        | VARCHAR2(8 char)  | 使用者代碼               |    |
|     | C605        | VARCHAR2(7 char)  | SEND_BANK           |    |
|     | C606        | VARCHAR2(7 char)  | RECV_BANK           |    |
|     | C607        | VARCHAR2(17 char) | 主機回應序號              |    |
|     | C608        | VARCHAR2(3 char)  | 連動科目                |    |
|     | C609        | VARCHAR2(3 char)  | 連動細目                |    |
|     | C610        | VARCHAR2(7 char)  | 主機連動交易序號            |    |
|     | C74         | VARCHAR2(2 char)  | VIP等級               |    |
|     | C75         | VARCHAR2(2 char)  | 招攬方式                |    |
|     | C76         | VARCHAR2(60 char) | 電子郵件信箱              |    |
|     | C77         | VARCHAR2(60 char) | 核准設立日網址             |    |
|     | C78         | VARCHAR2(1 char)  | 聯名戶識別               |    |
|     | C79         | VARCHAR2(20 char) | 簡訊電話                |    |
|     | C80         | VARCHAR2(1 char)  | 自動化交易以MAIL通知        |    |
|     | C81         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C82         | VARCHAR2(6 char)  | 行業別(主計處)            |    |
|     | C83         | VARCHAR2(1 char)  | 券商代號                |    |
|     | C84         | VARCHAR2(1 char)  | 活存─招攬單位             |    |
|     | C85         | VARCHAR2(7 char)  | 活存─AO代號             |    |
|     | C86         | VARCHAR2(4 char)  | 活存─區域中心             |    |
|     | C87         | VARCHAR2(1 char)  | 定存─招攬單位             |    |
|     | C88         | VARCHAR2(7 char)  | 定存─AO代號             |    |
|     | C89         | VARCHAR2(4 char)  | 定存─區域中心             |    |
|     | C90         | VARCHAR2(11 char) | 居留證號                |    |
|     | C91         | DATE              | 居留證發給日              |    |
|     | C92         | DATE              | 居留證到期日              |    |
|     | C93         | DATE              | 香港商業登記證屆滿日          |    |
|     | C94         | VARCHAR2(1 char)  | 保留                  |    |
|     | C95         | VARCHAR2(7 char)  | 活存─招募行員             |    |
|     | C96         | VARCHAR2(7 char)  | 定存─招募行員             |    |
|     | C97         | VARCHAR2(7 char)  | 授信手續費─招募行員          |    |
|     | C98         | VARCHAR2(1 char)  | 人民幣風險               |    |
|     | C99         | VARCHAR2(4 char)  | 人民幣風險預告行            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILECNTR

#### 國家代碼檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | 洲別                  |    |
| PK  | C3          | VARCHAR2(2 char)  | 國家代碼                |    |
|     | C5          | VARCHAR2(40 char) | 國家名稱                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |
