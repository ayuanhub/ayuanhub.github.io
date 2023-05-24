---
sidebar_position: 28
title: 外匯系統-出口(FXEX)
---

### VW_ODS_D_FILE0EBM

#### 轉開國內信用狀主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C5          | DATE              | 交易日期                |    |
|     | C6          | VARCHAR2(1 char)  | 業務別                 |    |
|     | C7          | NUMBER(1, 0)       | 交易檔序號               |    |
|     | C8          | NUMBER(2, 0)       | 修狀次數                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK           |    |
|     | C12         | VARCHAR2(1 char)  | 控制轉開開狀FLAG          |    |
|     | C13         | VARCHAR2(1 char)  | 控制是否為本行通知FLAG       |    |
|     | C14         | NUMBER(18, 0)      | 交易金額                |    |
|     | C15         | VARCHAR2(3 char)  | 臺幣幣別                |    |
|     | C16         | VARCHAR2(16 char) | 主信用狀號碼              |    |
|     | C17         | VARCHAR2(3 char)  | 主信用狀幣別              |    |
|     | C18         | NUMBER(18, 0)      | 主信用狀金額              |    |
|     | C19         | NUMBER(18, 0)      | 主信用狀餘額-可轉開餘額        |    |
|     | C20         | NUMBER(18, 0)      | 轉開信用狀金額             |    |
|     | C21         | NUMBER(18, 0)      | 前次修狀餘額              |    |
|     | C22         | NUMBER(18, 0)      | 轉開目前信用狀餘額           |    |
|     | C23         | NUMBER(18, 0)      | 主LC金額               |    |
|     | C24         | NUMBER(18, 0)      | 主LC餘額-主LC進帳後付款      |    |
|     | C25         | NUMBER(18, 0)      | 保證金餘額               |    |
|     | C26         | NUMBER(18, 0)      | 國內匯票金額              |    |
|     | C27         | NUMBER(18, 0)      | 超押金額                |    |
|     | C28         | NUMBER(18, 0)      | 國外求償金額              |    |
|     | C29         | NUMBER(18, 0)      | 押匯行費用               |    |
|     | C30         | NUMBER(18, 0)      | 手續費                 |    |
|     | C31         | NUMBER(12, 6)      | 手續費率                |    |
|     | C32         | NUMBER(18, 0)      | 郵電費用                |    |
|     | C33         | NUMBER(12, 6)      | 保證金成數               |    |
|     | C34         | NUMBER(2, 0)       | 計費期數                |    |
|     | C35         | NUMBER(12, 6)      | 批覆書保證成數             |    |
|     | C36         | NUMBER(18, 0)      | 批覆書保證金額             |    |
|     | C37         | DATE              | 主LC有效日期             |    |
|     | C38         | DATE              | 主LC最後裝船日            |    |
|     | C39         | DATE              | 轉開有效日期              |    |
|     | C40         | DATE              | 轉開最後裝船日             |    |
|     | C41         | DATE              | 國內LC押匯日             |    |
|     | C42         | DATE              | 開狀日期                |    |
|     | C43         | DATE              | 到單日期                |    |
|     | C44         | DATE              | 換單日期                |    |
|     | C45         | DATE              | 取消日期-取消轉開LC         |    |
|     | C46         | DATE              | 拒付日期                |    |
|     | C47         | DATE              | 註銷日期-拒付解除           |    |
|     | C48         | DATE              | 存同起息日-Value_Date    |    |
|     | C49         | NUMBER(3, 0)       | 主LC_TenorDays-對外    |    |
|     | C50         | NUMBER(3, 0)       | 轉開TenorDays-對外      |    |
|     | C51         | VARCHAR2(70 char) | 出口港-44E             |    |
|     | C52         | VARCHAR2(70 char) | 目地港-44F             |    |
|     | C53         | VARCHAR2(1 char)  | 信用狀型式               |    |
|     | C54         | VARCHAR2(20 char) | 信用狀型式全文             |    |
|     | C55         | VARCHAR2(1 char)  | 有效期限地點              |    |
|     | C56         | VARCHAR2(20 char) | 有效期限地點全文            |    |
|     | C57         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C58         | VARCHAR2(1 char)  | 開狀方式                |    |
|     | C601        | VARCHAR2(6 char)  | 申請人編號               |    |
|     | C602        | VARCHAR2(40 char) | 申請人英文名稱             |    |
|     | C603        | VARCHAR2(40 char) | 申請人中文名稱             |    |
|     | C604        | VARCHAR2(11 char) | 申請人統一編號             |    |
|     | C605        | VARCHAR2(12 char) | 申請人批覆書號             |    |
|     | C606        | VARCHAR2(40 char) | 申請人住址一              |    |
|     | C607        | VARCHAR2(40 char) | 申請人住址二              |    |
|     | C608        | VARCHAR2(40 char) | 申請人住址三              |    |
|     | C609        | VARCHAR2(40 char) | 受益人名稱               |    |
|     | C610        | VARCHAR2(40 char) | 受益人住址一              |    |
|     | C611        | VARCHAR2(40 char) | 受益人住址二              |    |
|     | C612        | VARCHAR2(40 char) | 受益人住址三              |    |
|     | C613        | VARCHAR2(5 char)  | 押匯行編號               |    |
|     | C614        | VARCHAR2(12 char) | 押匯行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 押匯行名稱               |    |
|     | C616        | VARCHAR2(20 char) | 押匯行參考編號             |    |
|     | C617        | VARCHAR2(12 char) | 押匯行在設帳行帳號           |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之設帳行SWIFT_CODE   |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之設帳行名稱           |    |
|     | C62         | VARCHAR2(5 char)  | 存匯行編號               |    |
|     | C63         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C64         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C65         | NUMBER(12, 6)      | 額度交叉匯率              |    |
|     | C66         | VARCHAR2(3 char)  | 額度佔用_恢復代碼           |    |
|     | C67         | VARCHAR2(12 char) | OLD-CANO            |    |
|     | C68         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C69         | VARCHAR2(4 char)  | 區域中心                |    |
|     | C70         | VARCHAR2(7 char)  | AO代號                |    |
|     | C71         | VARCHAR2(1 char)  | 價格條件                |    |
|     | C72         | NUMBER(18, 0)      | 信用狀餘額-34B           |    |
|     | C73         | VARCHAR2(11 char) | 客戶統編                |    |
|     | C74         | VARCHAR2(70 char) | 收貨地_接管地-44A         |    |
|     | C75         | VARCHAR2(70 char) | 目的地-44B             |    |
|     | C76         | VARCHAR2(30 char) | 輸入許可證號              |    |
|     | C77         | NUMBER(2, 0)       | 容許百分比加項             |    |
|     | C78         | NUMBER(2, 0)       | 容許百分比減項             |    |
|     | C79         | NUMBER(2, 0)       | 單據提示期限              |    |
|     | C80         | VARCHAR2(1 char)  | 付款方式                |    |
|     | C81         | VARCHAR2(1 char)  | 運送單據                |    |
|     | C82         | VARCHAR2(1 char)  | 價格條件                |    |
|     | C83         | VARCHAR2(1 char)  | 保險負擔                |    |
|     | C84         | VARCHAR2(1 char)  | 運費負擔                |    |
|     | C85         | VARCHAR2(1 char)  | 部份裝運                |    |
|     | C86         | VARCHAR2(1 char)  | 轉運                  |    |
|     | C87         | VARCHAR2(2 char)  | 通知行國別               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0ETM

#### 轉開國內信用狀到單主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
|     | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C5          | DATE              | 交易日期                |    |
|     | C6          | VARCHAR2(1 char)  | 業務別                 |    |
|     | C7          | NUMBER(1, 0)       | 交易檔序號               |    |
|     | C8          | NUMBER(2, 0)       | 修狀次數                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK           |    |
|     | C12         | VARCHAR2(1 char)  | 控制轉開開狀FLAG          |    |
|     | C13         | VARCHAR2(1 char)  | 控制是否為本行通知FLAG       |    |
|     | C14         | NUMBER(18, 0)      | 交易金額                |    |
|     | C15         | VARCHAR2(3 char)  | 臺幣幣別                |    |
|     | C16         | VARCHAR2(16 char) | 主信用狀號碼              |    |
|     | C17         | VARCHAR2(3 char)  | 主信用狀幣別              |    |
|     | C18         | NUMBER(18, 0)      | 主信用狀金額              |    |
|     | C19         | NUMBER(18, 0)      | 主信用狀餘額              |    |
|     | C20         | NUMBER(18, 0)      | 轉開信用狀金額             |    |
|     | C21         | NUMBER(18, 0)      | 前次修狀餘額              |    |
|     | C22         | NUMBER(18, 0)      | 轉開目前信用狀餘額           |    |
|     | C23         | NUMBER(18, 0)      | 主LC餘額-主LC進帳後付款      |    |
|     | C24         | NUMBER(18, 0)      | 保證金餘額               |    |
|     | C25         | NUMBER(18, 0)      | 國內匯票金額              |    |
|     | C26         | NUMBER(18, 0)      | 國外匯票金額              |    |
|     | C27         | NUMBER(18, 0)      | 超押金額                |    |
|     | C28         | NUMBER(18, 0)      | 對外求償金額-主LC進帳        |    |
|     | C29         | NUMBER(18, 0)      | 國外入帳金額-主LC進帳        |    |
|     | C30         | NUMBER(18, 0)      | 國內求償金額-主LC進帳        |    |
|     | C31         | NUMBER(18, 0)      | 押匯行費用               |    |
|     | C32         | NUMBER(18, 0)      | 我方費用-外幣             |    |
|     | C33         | NUMBER(18, 0)      | 郵電費-外幣              |    |
|     | C34         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C35         | NUMBER(12, 6)      | 保證金成數               |    |
|     | C36         | NUMBER(2, 0)       | 計費期數                |    |
|     | C37         | NUMBER(12, 6)      | 批覆書保證成數             |    |
|     | C38         | NUMBER(18, 0)      | 批覆書保證金額             |    |
|     | C39         | DATE              | 國內LC押匯日             |    |
|     | C40         | DATE              | 開狀日期                |    |
|     | C41         | DATE              | 到單日期                |    |
|     | C42         | DATE              | 換單日期                |    |
|     | C43         | DATE              | 取消日期-取消轉開LC         |    |
|     | C44         | DATE              | 拒付日期                |    |
|     | C45         | DATE              | 註銷日期-拒付解除           |    |
|     | C46         | DATE              | 存同起息日-ValueDate     |    |
|     | C47         | DATE              | 退單日期                |    |
|     | C48         | VARCHAR2(20 char) | 出口港                 |    |
|     | C49         | VARCHAR2(20 char) | 目地港                 |    |
|     | C50         | VARCHAR2(1 char)  | 信用狀型式               |    |
|     | C51         | VARCHAR2(20 char) | 信用狀型式全文             |    |
|     | C52         | VARCHAR2(1 char)  | 有效期限地點              |    |
|     | C53         | VARCHAR2(20 char) | 有效期限地點全文            |    |
|     | C54         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C55         | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C56         | VARCHAR2(40 char) | 瑕疵明細二               |    |
|     | C601        | VARCHAR2(6 char)  | 申請人編號               |    |
|     | C602        | VARCHAR2(40 char) | 申請人英文名稱             |    |
|     | C603        | VARCHAR2(40 char) | 申請人中文名稱             |    |
|     | C604        | VARCHAR2(11 char) | 申請人統一編號             |    |
|     | C605        | VARCHAR2(12 char) | 申請人批覆書號             |    |
|     | C606        | VARCHAR2(40 char) | 申請人住址一              |    |
|     | C607        | VARCHAR2(40 char) | 申請人住址二              |    |
|     | C608        | VARCHAR2(40 char) | 申請人住址三              |    |
|     | C609        | VARCHAR2(40 char) | 受益人名稱               |    |
|     | C610        | VARCHAR2(40 char) | 受益人住址一              |    |
|     | C611        | VARCHAR2(40 char) | 受益人住址二              |    |
|     | C612        | VARCHAR2(40 char) | 受益人住址三              |    |
|     | C613        | VARCHAR2(5 char)  | 押匯行編號               |    |
|     | C614        | VARCHAR2(12 char) | 押匯行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 押匯行名稱               |    |
|     | C616        | VARCHAR2(20 char) | 押匯行參考編號             |    |
|     | C617        | VARCHAR2(12 char) | 押匯行在設帳行帳號           |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之設帳行SWIFT_CODE   |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之設帳行名稱           |    |
|     | C60         | VARCHAR2(5 char)  | 存匯行編號               |    |
|     | C61         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C62         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C63         | NUMBER(12, 6)      | 額度交叉匯率              |    |
|     | C64         | VARCHAR2(3 char)  | 額度佔用_恢復代碼           |    |
|     | C67         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C65         | VARCHAR2(4 char)  | 區域中心                |    |
|     | C66         | VARCHAR2(7 char)  | AO代號                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0EXM

#### 出口押匯主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位-交易行            |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(1 char)  | 交易副檔型態              |    |
|     | C5          | NUMBER(2, 0)       | 交易副檔序號              |    |
|     | C6          | VARCHAR2(4 char)  | 記帳行代碼               |    |
|     | C7          | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C8          | VARCHAR2(6 char)  | 顧客號碼                |    |
|     | C9          | VARCHAR2(40 char) | 顧客戶名                |    |
|     | C10         | VARCHAR2(11 char) | 統一編號                |    |
|     | C11         | VARCHAR2(12 char) | 批覆書號                |    |
|     | C12         | VARCHAR2(40 char) | 顧客地址一               |    |
|     | C13         | VARCHAR2(40 char) | 顧客地址二               |    |
|     | C14         | VARCHAR2(40 char) | 顧客地址三               |    |
|     | C15         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C16         | VARCHAR2(1 char)  | 融資方式_入帳行選擇          |    |
|     | C17         | VARCHAR2(1 char)  | 主檔鎖住FLAG            |    |
|     | C18         | VARCHAR2(1 char)  | 本行通知FLAG            |    |
|     | C19         | VARCHAR2(4 char)  | 交易狀況                |    |
|     | C20         | VARCHAR2(16 char) | 本行讓號號碼_第一押匯行編號      |    |
|     | C21         | VARCHAR2(16 char) | 預售遠匯交易編號            |    |
|     | C22         | VARCHAR2(20 char) | 信用狀號碼               |    |
|     | C23         | DATE              | 交易日期                |    |
|     | C24         | DATE              | 押匯日                 |    |
|     | C25         | DATE              | 承兌日                 |    |
|     | C26         | DATE              | 開狀日                 |    |
|     | C27         | DATE              | 有效日                 |    |
|     | C28         | DATE              | 到期日                 |    |
|     | C29         | DATE              | 存同入帳日               |    |
|     | C30         | DATE              | 裝船日                 |    |
|     | C31         | DATE              | 最後裝船日               |    |
|     | C32         | DATE              | 拒付日                 |    |
|     | C33         | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C34         | VARCHAR2(40 char) | 交易國別名稱              |    |
|     | C35         | VARCHAR2(5 char)  | 存匯行代碼               |    |
|     | C36         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C37         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C38         | VARCHAR2(20 char) | 存匯行帳號               |    |
|     | C39         | VARCHAR2(5 char)  | 開狀行代碼               |    |
|     | C40         | VARCHAR2(12 char) | 開狀行SWIFT_CODE       |    |
|     | C41         | VARCHAR2(40 char) | 開狀行名稱               |    |
|     | C42         | VARCHAR2(40 char) | 開狀行地址一              |    |
|     | C43         | VARCHAR2(40 char) | 開狀行地址二              |    |
|     | C44         | VARCHAR2(40 char) | 開狀行地址三              |    |
|     | C45         | VARCHAR2(5 char)  | 求償行代碼               |    |
|     | C46         | VARCHAR2(12 char) | 求償行SWIFT_CODE       |    |
|     | C47         | VARCHAR2(12 char) | 求償行TELEX_No         |    |
|     | C48         | VARCHAR2(40 char) | 求償行名稱               |    |
|     | C49         | VARCHAR2(40 char) | 求償行地址一              |    |
|     | C50         | VARCHAR2(40 char) | 求償行地址二              |    |
|     | C51         | VARCHAR2(40 char) | 求償行地址三              |    |
|     | C52         | VARCHAR2(5 char)  | 第二押匯行_託收行代碼         |    |
|     | C53         | VARCHAR2(12 char) | 第二押匯行_託收行SWIFT_CODE |    |
|     | C54         | VARCHAR2(40 char) | 第二押匯行_託收行名稱         |    |
|     | C55         | VARCHAR2(40 char) | 第二押匯行_託收行地址一        |    |
|     | C56         | VARCHAR2(40 char) | 第二押匯行_託收行地址二        |    |
|     | C57         | VARCHAR2(40 char) | 第二押匯行_託收行地址三        |    |
|     | C58         | VARCHAR2(40 char) | 第一押匯行入帳行            |    |
|     | C59         | VARCHAR2(40 char) | 國外進口商               |    |
|     | C60         | VARCHAR2(40 char) | 進口商地址一              |    |
|     | C61         | VARCHAR2(40 char) | 進口商地址二              |    |
|     | C62         | VARCHAR2(40 char) | 進口商地址三              |    |
|     | C63         | VARCHAR2(3 char)  | 匯票幣別                |    |
|     | C64         | NUMBER(18, 0)      | 匯票金額                |    |
|     | C65         | NUMBER(18, 0)      | 未銷帳餘額               |    |
|     | C66         | NUMBER(18, 0)      | 存同入帳金額              |    |
|     | C67         | VARCHAR2(1 char)  | TENOR_TYPE          |    |
|     | C68         | NUMBER(3, 0)       | TENOR_DAY           |    |
|     | C69         | NUMBER(18, 0)      | 求償利息                |    |
|     | C70         | NUMBER(18, 0)      | 墊款金額                |    |
|     | C71         | NUMBER(18, 0)      | 本行求償銀行費用            |    |
|     | C72         | NUMBER(18, 0)      | 存入外存                |    |
|     | C73         | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C74         | VARCHAR2(1 char)  | 外幣支號                |    |
|     | C75         | NUMBER(18, 0)      | 轉匯國內它行              |    |
|     | C76         | NUMBER(18, 0)      | 轉匯國外它行              |    |
|     | C77         | NUMBER(18, 0)      | 轉開金額                |    |
|     | C78         | NUMBER(18, 0)      | 轉讓金額                |    |
|     | C79         | NUMBER(18, 0)      | 償還外幣貸款              |    |
|     | C80         | NUMBER(18, 0)      | 扣付佣金                |    |
|     | C81         | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C82         | NUMBER(18, 0)      | 本次國外費用              |    |
|     | C83         | NUMBER(18, 0)      | 前次國外費用              |    |
|     | C84         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C85         | NUMBER(12, 6)      | 成交利率                |    |
|     | C86         | NUMBER(18, 0)      | 出押息日數               |    |
|     | C87         | NUMBER(18, 0)      | 出押息金額               |    |
|     | C88         | NUMBER(18, 0)      | 轉押日數                |    |
|     | C89         | NUMBER(18, 0)      | 轉押息金額               |    |
|     | C90         | NUMBER(18, 0)      | 瑕疵日數                |    |
|     | C91         | NUMBER(18, 0)      | 瑕疵息                 |    |
|     | C92         | NUMBER(18, 0)      | 貼現息日數               |    |
|     | C93         | NUMBER(18, 0)      | 貼現息金額               |    |
|     | C94         | NUMBER(18, 0)      | 已收手續費               |    |
|     | C95         | NUMBER(18, 0)      | 短收通知手續費             |    |
|     | C96         | NUMBER(18, 0)      | 短收郵電費               |    |
|     | C97         | NUMBER(18, 0)      | 已收郵電費               |    |
|     | C98         | NUMBER(18, 0)      | 應付第二押匯行手續費          |    |
|     | C99         | NUMBER(18, 0)      | 應付第二押匯行郵電費          |    |
|     | C100        | NUMBER(18, 0)      | 存入台幣                |    |
|     | C101        | VARCHAR2(12 char) | 台幣帳號                |    |
|     | C102        | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C103        | VARCHAR2(1 char)  | 託收押匯型態              |    |
|     | C104        | VARCHAR2(40 char) | 拒付理由                |    |
|     | C105        | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C106        | VARCHAR2(40 char) | 瑕疵明細二               |    |
|     | C107        | NUMBER(18, 0)      | 應收前期逾期息             |    |
|     | C108        | NUMBER(18, 0)      | 應收前期國外費用            |    |
|     | C109        | VARCHAR2(16 char) | 攤提編號                |    |
|     | C110        | VARCHAR2(3 char)  | 美金                  |    |
|     | C111        | NUMBER(18, 0)      | 等值美金                |    |
|     | C112        | VARCHAR2(3 char)  | 額度代碼                |    |
|     | C113        | NUMBER(12, 6)      | 額度匯率                |    |
|     | C114        | DATE              | 攤提到期日               |    |
|     | C115        | VARCHAR2(1 char)  | 是否先向出口商收取利息         |    |
|     | C116        | NUMBER(3, 0)       | 求償天數                |    |
|     | C117        | NUMBER(2, 0)       | 容許百分比               |    |
|     | C118        | NUMBER(3, 0)       | 逾期天數                |    |
|     | C119        | NUMBER(18, 0)      | 逾期息                 |    |
|     | C120        | VARCHAR2(1 char)  | 押匯_託收性質             |    |
|     | C121        | VARCHAR2(1 char)  | 批次銷帳旗標              |    |
|     | C122        | DATE              | 批次銷帳日期              |    |
|     | C123        | VARCHAR2(16 char) | 批次銷帳編號              |    |
|     | C124        | NUMBER(18, 0)      | 累計短收轉押匯手續費          |    |
|     | C125        | DATE              | 承作日期                |    |
|     | C126        | VARCHAR2(12 char) | OLD-CANO            |    |
|     | C127        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C128        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C129        | VARCHAR2(7 char)  | AO代號                |    |
|     | C130        | VARCHAR2(1 char)  | 賣斷FLAG              |    |
|     | C131        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C132        | NUMBER(12, 6)      | 利率加_減碼              |    |
|     | C133        | NUMBER(3, 0)       | SIBOR天期             |    |
|     | C134        | NUMBER(3, 0)       | LIBOR天期             |    |
|     | C135        | VARCHAR2(5 char)  | 買_賣斷行代碼             |    |
|     | C136        | VARCHAR2(12 char) | 買_賣斷行SWIFT_CODE     |    |
|     | C137        | VARCHAR2(40 char) | 買_賣斷行名稱             |    |
|     | C138        | VARCHAR2(3 char)  | 信用狀幣別               |    |
|     | C139        | NUMBER(18, 0)      | 信用狀金額               |    |
|     | C140        | NUMBER(12, 6)      | EXCHANGE_RATE       |    |
|     | C141        | NUMBER(18, 0)      | 本次逾期息               |    |
|     | C142        | VARCHAR2(1 char)  | 遠期承兌額度還原FLAG        |    |
|     | C143        | NUMBER(18, 0)      | 買_賣斷行手續費-FCY        |    |
|     | C144        | VARCHAR2(1 char)  | 是否國外費用補收            |    |
|     | C145        | DATE              | 託收改押匯日              |    |
|     | C146        | VARCHAR2(1 char)  | 買斷行                 |    |
|     | C147        | NUMBER(12, 6)      | 他行買斷融資利率報價          |    |
|     | C148        | NUMBER(12, 6)      | 他行買斷不融資手續費率         |    |
|     | C149        | NUMBER(18, 0)      | 本行加碼手續費             |    |
|     | C150        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C151        | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C152        | VARCHAR2(20 char) | 額度預暫編號-FILEBAHP     |    |
|     | C153        | NUMBER(18, 0)      | 買斷利息收入              |    |
|     | C154        | NUMBER(18, 0)      | 應付買斷款               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0EXP

#### 出口押匯工作檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位-交易行            |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 押匯編號                |    |
|     | C4          | VARCHAR2(16 char) | 本行通知編號              |    |
|     | C5          | VARCHAR2(16 char) | 保兌編號                |    |
|     | C6          | VARCHAR2(16 char) | 轉讓編號_第一押匯行編號        |    |
|     | C7          | VARCHAR2(16 char) | 攤提編號                |    |
|     | C8          | VARCHAR2(1 char)  | 交易副檔型態              |    |
| PK  | C9          | NUMBER(2, 0)       | 交易副檔序號              |    |
|     | C10         | NUMBER(2, 0)       | 交易更正版次              |    |
|     | C11         | VARCHAR2(1 char)  | 通知FLAG              |    |
|     | C12         | VARCHAR2(4 char)  | 記帳行代碼               |    |
|     | C13         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C601        | VARCHAR2(6 char)  | 顧客號碼                |    |
|     | C602        | VARCHAR2(40 char) | 顧客戶名-英文             |    |
|     | C603        | VARCHAR2(50 char) | 顧客戶名-中文             |    |
|     | C604        | VARCHAR2(11 char) | 營利事業統一編號            |    |
|     | C605        | VARCHAR2(12 char) | 批覆書號                |    |
|     | C606        | VARCHAR2(40 char) | 顧客地址一               |    |
|     | C607        | VARCHAR2(40 char) | 顧客地址二               |    |
|     | C608        | VARCHAR2(40 char) | 顧客地址三               |    |
|     | C15         | VARCHAR2(3 char)  | 額度類別                |    |
|     | C16         | VARCHAR2(1 char)  | 是否由出口商負擔利息          |    |
|     | C17         | VARCHAR2(3 char)  | 額度幣別                |    |
|     | C18         | NUMBER(18, 0)      | 額度金額                |    |
|     | C19         | NUMBER(12, 6)      | 額度評估匯率              |    |
|     | C20         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C21         | VARCHAR2(4 char)  | 前次作業型態              |    |
|     | C22         | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C23         | VARCHAR2(4 char)  | 記錄型態                |    |
|     | C24         | VARCHAR2(20 char) | 記錄型態說明              |    |
|     | C25         | VARCHAR2(20 char) | 信用狀號碼               |    |
|     | C26         | VARCHAR2(20 char) | 信用狀號碼-由本行轉讓         |    |
|     | C27         | VARCHAR2(3 char)  | 信用狀幣別               |    |
|     | C28         | NUMBER(18, 0)      | 信用狀餘額               |    |
|     | C29         | VARCHAR2(1 char)  | 作業型態選項              |    |
|     | C30         | VARCHAR2(20 char) | 作業型態說明              |    |
|     | C31         | VARCHAR2(1 char)  | 融資方式_入帳行            |    |
|     | C32         | DATE              | 交易日期                |    |
|     | C33         | DATE              | 開狀日                 |    |
|     | C34         | DATE              | 有效日                 |    |
|     | C35         | DATE              | 最後裝船日               |    |
|     | C36         | DATE              | 押匯_託收日              |    |
|     | C37         | DATE              | 預估到期日               |    |
|     | C38         | DATE              | 存同入帳日               |    |
|     | C39         | DATE              | 遠期承兌日               |    |
|     | C40         | DATE              | 裝船日                 |    |
|     | C41         | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C42         | VARCHAR2(40 char) | 交易國別名稱              |    |
|     | C609        | VARCHAR2(5 char)  | 存匯行代碼               |    |
|     | C610        | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C611        | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C612        | VARCHAR2(20 char) | 存匯行帳號               |    |
|     | C44         | VARCHAR2(5 char)  | 第一押匯行入帳行代碼          |    |
|     | C45         | VARCHAR2(12 char) | 第一押匯行入帳行SWIFT_CODE  |    |
|     | C46         | VARCHAR2(40 char) | 第一押匯行入帳行名稱          |    |
|     | C47         | VARCHAR2(20 char) | 第一押匯行入帳行帳號          |    |
|     | C613        | VARCHAR2(5 char)  | 開狀行代碼               |    |
|     | C614        | VARCHAR2(12 char) | 開狀行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 開狀行名稱               |    |
|     | C616        | VARCHAR2(40 char) | 開狀行地址一              |    |
|     | C617        | VARCHAR2(40 char) | 開狀行地址二              |    |
|     | C618        | VARCHAR2(40 char) | 開狀行地址三              |    |
|     | C619        | VARCHAR2(5 char)  | 求償行代碼               |    |
|     | C620        | VARCHAR2(12 char) | 求償行SWIFT_CODE       |    |
|     | C621        | VARCHAR2(12 char) | 求償行TELEX_No         |    |
|     | C622        | VARCHAR2(40 char) | 求償行名稱               |    |
|     | C623        | VARCHAR2(40 char) | 求償行地址一              |    |
|     | C624        | VARCHAR2(40 char) | 求償行地址二              |    |
|     | C625        | VARCHAR2(40 char) | 求償行地址三              |    |
|     | C626        | VARCHAR2(5 char)  | 第二押匯行_託收行代碼         |    |
|     | C627        | VARCHAR2(12 char) | 第二押匯行_託收行SWIFT_CODE |    |
|     | C628        | VARCHAR2(40 char) | 第二押匯行_託收行名稱         |    |
|     | C629        | VARCHAR2(40 char) | 第二押匯行_託收行地址一        |    |
|     | C630        | VARCHAR2(40 char) | 第二押匯行_託收行地址二        |    |
|     | C631        | VARCHAR2(40 char) | 第二押匯行_託收行地址三        |    |
|     | C51         | VARCHAR2(40 char) | 國外進口商               |    |
|     | C52         | VARCHAR2(40 char) | 進口商地址一              |    |
|     | C53         | VARCHAR2(40 char) | 進口商地址二              |    |
|     | C54         | VARCHAR2(40 char) | 進口商地址三              |    |
|     | C55         | VARCHAR2(3 char)  | 匯票幣別                |    |
|     | C56         | NUMBER(18, 0)      | 匯票金額                |    |
|     | C57         | NUMBER(18, 0)      | 未銷帳餘額               |    |
|     | C58         | NUMBER(18, 0)      | 存同入帳金額              |    |
|     | C59         | VARCHAR2(1 char)  | TENOR_TYPE          |    |
|     | C60         | VARCHAR2(20 char) | TENOR_TYPE描述        |    |
|     | C61         | NUMBER(3, 0)       | TENOR_DAY           |    |
|     | C62         | NUMBER(3, 0)       | 求償利息天數              |    |
|     | C63         | NUMBER(12, 6)      | 求償利率                |    |
|     | C64         | NUMBER(18, 0)      | 求償利息                |    |
|     | C65         | NUMBER(18, 0)      | 墊款金額                |    |
|     | C66         | NUMBER(18, 0)      | 本行求償銀行費用            |    |
|     | C67         | NUMBER(18, 0)      | 求償金額                |    |
|     | C68         | NUMBER(18, 0)      | 押匯金額_銷帳金額           |    |
|     | C69         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C70         | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C71         | VARCHAR2(1 char)  | 外幣支號                |    |
|     | C72         | VARCHAR2(4 char)  | 活存營業單位-存入外存         |    |
|     | C73         | VARCHAR2(2 char)  | 活存科目-存入外存           |    |
|     | C74         | VARCHAR2(6 char)  | 活存顧客號碼-存入外存         |    |
|     | C75         | VARCHAR2(3 char)  | 活存摘要-存入外存           |    |
|     | C76         | NUMBER(18, 0)      | 轉匯國內它行              |    |
|     | C77         | NUMBER(18, 0)      | 轉匯國外它行              |    |
|     | C78         | NUMBER(18, 0)      | 轉開金額_出口押匯不足款        |    |
|     | C79         | NUMBER(18, 0)      | 轉讓金額_應收國外費用         |    |
|     | C80         | NUMBER(18, 0)      | 償還外幣貸款              |    |
|     | C81         | NUMBER(18, 0)      | 扣付佣金                |    |
|     | C82         | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C83         | NUMBER(18, 0)      | 本次國外費用              |    |
|     | C84         | NUMBER(18, 0)      | 前次國外費用              |    |
|     | C85         | NUMBER(18, 0)      | 國外費用總數              |    |
|     | C632        | NUMBER(18, 0)      | 預售遠期交割金額            |    |
|     | C633        | VARCHAR2(16 char) | 遠匯交易號碼              |    |
|     | C634        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C635        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C636        | NUMBER(12, 6)      | 遠匯交割成交匯率            |    |
|     | C637        | NUMBER(18, 0)      | 應付遠匯金額              |    |
|     | C638        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C639        | VARCHAR2(1 char)  | 遠匯交割支號              |    |
|     | C640        | VARCHAR2(4 char)  | 活存營業單位-遠匯           |    |
|     | C641        | VARCHAR2(2 char)  | 活存科目-遠匯             |    |
|     | C642        | VARCHAR2(6 char)  | 活存顧客號碼-遠匯           |    |
|     | C643        | VARCHAR2(3 char)  | 活存摘要-遠匯             |    |
|     | C644        | VARCHAR2(1 char)  | 遠匯FLAG              |    |
|     | C645        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C646        | VARCHAR2(4 char)  | 原營業單位               |    |
|     | C647        | VARCHAR2(16 char) | 原遠匯交易號碼             |    |
|     | C648        | NUMBER(18, 0)      | 原交割金額               |    |
|     | C649        | VARCHAR2(1 char)  | 活存FLAG              |    |
|     | C87         | NUMBER(18, 0)      | 其它原幣扣項              |    |
|     | C88         | NUMBER(18, 0)      | 原幣扣項合計              |    |
|     | C89         | NUMBER(18, 0)      | 押匯-溢付兌換金額           |    |
|     | C90         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C91         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C92         | NUMBER(12, 6)      | 議價匯率                |    |
|     | C93         | NUMBER(18, 0)      | 預購_售違約金             |    |
|     | C94         | NUMBER(18, 0)      | 押匯剩餘款-溢付金額折合新台幣     |    |
|     | C650        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C651        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C652        | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C653        | NUMBER(18, 0)      | 手續費一次性收費額           |    |
|     | C654        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C655        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C656        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C657        | NUMBER(18, 0)      | 收費最低限額              |    |
|     | C658        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C659        | NUMBER(12, 6)      | 客戶額度利率              |    |
|     | C96         | NUMBER(12, 6)      | 押匯手續費率              |    |
|     | C97         | NUMBER(18, 0)      | 本次應收手續費             |    |
|     | C98         | NUMBER(18, 0)      | 優惠手續費               |    |
|     | C99         | NUMBER(18, 0)      | 實收手續費               |    |
|     | C100        | NUMBER(18, 0)      | 匯費                  |    |
|     | C101        | NUMBER(18, 0)      | 本次郵電費               |    |
|     | C102        | NUMBER(3, 0)       | 出押日數                |    |
|     | C103        | NUMBER(18, 0)      | 出押息                 |    |
|     | C104        | NUMBER(3, 0)       | 轉押日數                |    |
|     | C105        | NUMBER(18, 0)      | 轉押息                 |    |
|     | C106        | NUMBER(3, 0)       | 瑕疵日數                |    |
|     | C107        | NUMBER(18, 0)      | 瑕疵息                 |    |
|     | C108        | NUMBER(3, 0)       | 貼現日數                |    |
|     | C109        | NUMBER(18, 0)      | 貼現息                 |    |
|     | C110        | VARCHAR2(1 char)  | 匯票種類                |    |
|     | C111        | NUMBER(18, 0)      | 手續費-佣金              |    |
|     | C112        | NUMBER(3, 0)       | 逾期日數                |    |
|     | C113        | NUMBER(18, 0)      | 前期逾期息補收_逾期息         |    |
|     | C114        | NUMBER(18, 0)      | 前期國外費用補收            |    |
|     | C115        | NUMBER(18, 0)      | 其它台幣扣項              |    |
|     | C116        | NUMBER(18, 0)      | 台幣扣項合計              |    |
|     | C117        | NUMBER(3, 0)       | 寬限天數                |    |
|     | C118        | NUMBER(12, 6)      | 成本利率                |    |
|     | C119        | NUMBER(12, 6)      | 成交利率                |    |
|     | C120        | NUMBER(12, 6)      | 議價利率                |    |
|     | C121        | VARCHAR2(1 char)  | 費用負擔對象              |    |
|     | C122        | VARCHAR2(1 char)  | 費用繳交方式              |    |
|     | C123        | VARCHAR2(3 char)  | 費用支付幣別              |    |
|     | C124        | NUMBER(12, 6)      | 費用支付成本匯率            |    |
|     | C125        | NUMBER(12, 6)      | 費用支付成交匯率            |    |
|     | C126        | NUMBER(18, 0)      | 客戶實繳台幣-聯行往來         |    |
|     | C127        | NUMBER(18, 0)      | 客戶實繳外幣              |    |
|     | C128        | NUMBER(18, 0)      | 以外存支付               |    |
|     | C129        | VARCHAR2(13 char) | 外幣支付帳號              |    |
|     | C130        | VARCHAR2(1 char)  | 外幣支付支號              |    |
|     | C131        | VARCHAR2(4 char)  | 活存營業單位-外幣支付         |    |
|     | C132        | VARCHAR2(2 char)  | 活存科目-外幣支付           |    |
|     | C133        | VARCHAR2(6 char)  | 活存顧客號碼-外幣支付         |    |
|     | C134        | VARCHAR2(3 char)  | 活存摘要-外幣支付           |    |
|     | C135        | NUMBER(18, 0)      | 應收費用以外幣支付金額         |    |
|     | C136        | NUMBER(18, 0)      | 國內費用兌換金額            |    |
|     | C137        | NUMBER(18, 0)      | 國內費用兌換台幣            |    |
|     | C138        | NUMBER(18, 0)      | 預售遠匯金額兌換台幣          |    |
|     | C139        | NUMBER(18, 0)      | 解付台幣淨額_應退款項         |    |
|     | C140        | NUMBER(18, 0)      | 解付外幣淨額              |    |
|     | C141        | NUMBER(18, 0)      | 應收款項                |    |
|     | C142        | NUMBER(18, 0)      | 存入台幣金額              |    |
|     | C143        | VARCHAR2(12 char) | 台幣帳號                |    |
|     | C144        | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C145        | NUMBER(18, 0)      | 累計受益人短收手續費          |    |
|     | C146        | NUMBER(18, 0)      | 受益人已收手續費            |    |
|     | C147        | NUMBER(18, 0)      | 本次繳交手續費             |    |
|     | C148        | NUMBER(18, 0)      | 累計受益人短收郵電費          |    |
|     | C149        | NUMBER(18, 0)      | 本次繳交郵電費             |    |
|     | C150        | NUMBER(18, 0)      | 應收第二押匯行手續費          |    |
|     | C151        | NUMBER(18, 0)      | 應付第二押匯行郵電費          |    |
|     | C152        | NUMBER(18, 0)      | 應付第二押匯行費用合計         |    |
|     | C153        | VARCHAR2(40 char) | 拒付理由_瑕疵明細二          |    |
|     | C154        | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C155        | VARCHAR2(1 char)  | 主檔HOLD_MARK         |    |
|     | C156        | VARCHAR2(10 char) | 輸入經辦                |    |
|     | C157        | VARCHAR2(1 char)  | 需主管放行FLAG           |    |
|     | C158        | VARCHAR2(10 char) | 放行主管                |    |
|     | C159        | NUMBER(5, 0)       | 會計傳票序號              |    |
|     | C884        | VARCHAR2(20 char) | 電文稿一                |    |
|     | C885        | VARCHAR2(20 char) | 電文稿二                |    |
|     | C886        | VARCHAR2(20 char) | 電文稿三                |    |
|     | C887        | VARCHAR2(20 char) | 電文稿四                |    |
|     | C888        | VARCHAR2(20 char) | 電文稿五                |    |
|     | C889        | VARCHAR2(20 char) | 電文稿六                |    |
|     | C890        | VARCHAR2(20 char) | 電文稿七                |    |
|     | C891        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C892        | VARCHAR2(2 char)  | 利率種類                |    |
|     | C893        | NUMBER(12, 6)      | 出口託收DA費率            |    |
|     | C894        | NUMBER(12, 6)      | 出口託收DP費率            |    |
|     | C895        | NUMBER(12, 6)      | 出口押匯費率              |    |
|     | C896        | NUMBER(12, 6)      | 出口轉押匯費率             |    |
|     | C897        | NUMBER(3, 0)       | 出押息加減天數             |    |
|     | C898        | VARCHAR2(3 char)  | 轉押息加減天數             |    |
|     | C899        | VARCHAR2(3 char)  | 瑕疵息加減天數             |    |
|     | C900        | VARCHAR2(12 char) | 核貸書總號               |    |
|     | C194        | DATE              | 攤提到期日               |    |
|     | C195        | NUMBER(2, 0)       | 容許百分比               |    |
|     | C196        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C197        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C198        | VARCHAR2(7 char)  | AO代號                |    |
|     | C199        | VARCHAR2(1 char)  | 賣斷FLAG              |    |
|     | C901        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C902        | NUMBER(12, 6)      | 牌告利率                |    |
|     | C903        | NUMBER(12, 6)      | SIBOR利率             |    |
|     | C904        | NUMBER(12, 6)      | LIBOR利率             |    |
|     | C905        | NUMBER(12, 6)      | 利率加_減碼              |    |
|     | C906        | NUMBER(3, 0)       | SIBOR天期             |    |
|     | C907        | NUMBER(3, 0)       | LIBOR天期             |    |
|     | C908        | VARCHAR2(5 char)  | GEB-TXN-CODE        |    |
|     | C909        | VARCHAR2(7 char)  | GEB-SEQ-NO          |    |
|     | C910        | VARCHAR2(5 char)  | 買_賣斷行代碼             |    |
|     | C911        | VARCHAR2(12 char) | 買_賣斷行SWIFT_CODE     |    |
|     | C912        | VARCHAR2(40 char) | 買_賣斷行名稱             |    |
|     | C913        | VARCHAR2(3 char)  | 信用狀幣別               |    |
|     | C914        | NUMBER(18, 0)      | 信用狀金額               |    |
|     | C915        | NUMBER(12, 6)      | EXCHANGE_RATE       |    |
|     | C916        | VARCHAR2(30 char) | 押匯性質說明              |    |
|     | C917        | NUMBER(18, 0)      | 本次逾期息               |    |
|     | C918        | VARCHAR2(1 char)  | 遠期承兌額度還原FLAG        |    |
|     | C919        | VARCHAR2(40 char) | 買_賣斷行地址一            |    |
|     | C920        | VARCHAR2(40 char) | 買_賣斷行地址二            |    |
|     | C921        | VARCHAR2(40 char) | 買_賣斷行地址三            |    |
|     | C922        | NUMBER(18, 0)      | 買_賣斷行手續費-FCY        |    |
|     | C923        | VARCHAR2(1 char)  | 是否國外費用補收            |    |
|     | C924        | DATE              | 託收改押匯日              |    |
|     | C925        | VARCHAR2(20 char) | 交易型態說明              |    |
|     | C926        | VARCHAR2(1 char)  | 買斷行                 |    |
|     | C927        | NUMBER(12, 6)      | 他行買斷融資利率報價          |    |
|     | C928        | NUMBER(12, 6)      | 他行買斷不融資手續費率         |    |
|     | C929        | NUMBER(18, 0)      | 本行加碼手續費             |    |
|     | C930        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C931        | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C932        | VARCHAR2(20 char) | 額度預暫編號-FILEBAHP     |    |
|     | C933        | VARCHAR2(1 char)  | 圈存刪除FLAG            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEEBAM

#### 轉開國內信用狀到單主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
|     | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C5          | DATE              | 交易日期                |    |
|     | C6          | VARCHAR2(1 char)  | 業務別                 |    |
|     | C7          | NUMBER(1, 0)       | 交易檔序號               |    |
|     | C8          | NUMBER(2, 0)       | 修狀次數                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK           |    |
|     | C12         | VARCHAR2(1 char)  | 控制轉開開狀FLAG          |    |
|     | C13         | VARCHAR2(1 char)  | 控制是否為本行通知FLAG       |    |
|     | C14         | NUMBER(18, 0)      | 交易金額                |    |
|     | C15         | VARCHAR2(3 char)  | 臺幣幣別                |    |
|     | C16         | VARCHAR2(16 char) | 主信用狀號碼              |    |
|     | C17         | VARCHAR2(3 char)  | 主信用狀幣別              |    |
|     | C18         | NUMBER(18, 0)      | 主信用狀金額              |    |
|     | C19         | NUMBER(18, 0)      | 主信用狀餘額              |    |
|     | C20         | NUMBER(18, 0)      | 轉開信用狀金額             |    |
|     | C21         | NUMBER(18, 0)      | 前次修狀餘額              |    |
|     | C22         | NUMBER(18, 0)      | 轉開目前信用狀餘額           |    |
|     | C23         | NUMBER(18, 0)      | 主LC餘額-主LC進帳後付款      |    |
|     | C24         | NUMBER(18, 0)      | 保證金餘額               |    |
|     | C25         | NUMBER(18, 0)      | 國內匯票金額              |    |
|     | C26         | NUMBER(18, 0)      | 國外匯票金額              |    |
|     | C27         | NUMBER(18, 0)      | 超押金額                |    |
|     | C28         | NUMBER(18, 0)      | 對外求償金額-主LC進帳        |    |
|     | C29         | NUMBER(18, 0)      | 國外入帳金額-主LC進帳        |    |
|     | C30         | NUMBER(18, 0)      | 國內求償金額-主LC進帳        |    |
|     | C31         | NUMBER(18, 0)      | 押匯行費用               |    |
|     | C32         | NUMBER(18, 0)      | 我方費用-外幣             |    |
|     | C33         | NUMBER(18, 0)      | 郵電費-外幣              |    |
|     | C34         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C35         | NUMBER(12, 6)      | 保證金成數               |    |
|     | C36         | NUMBER(2, 0)       | 計費期數                |    |
|     | C37         | NUMBER(12, 6)      | 批覆書保證成數             |    |
|     | C38         | NUMBER(18, 0)      | 批覆書保證金額             |    |
|     | C39         | DATE              | 國內LC押匯日             |    |
|     | C40         | DATE              | 開狀日期                |    |
|     | C41         | DATE              | 到單日期                |    |
|     | C42         | DATE              | 換單日期                |    |
|     | C43         | DATE              | 取消日期-取消轉開LC         |    |
|     | C44         | DATE              | 拒付日期                |    |
|     | C45         | DATE              | 註銷日期-拒付解除           |    |
|     | C46         | DATE              | 存同起息日-ValueDate     |    |
|     | C47         | DATE              | 退單日期                |    |
|     | C48         | VARCHAR2(20 char) | 出口港                 |    |
|     | C49         | VARCHAR2(20 char) | 目地港                 |    |
|     | C50         | VARCHAR2(1 char)  | 信用狀型式               |    |
|     | C51         | VARCHAR2(20 char) | 信用狀型式全文             |    |
|     | C52         | VARCHAR2(1 char)  | 有效期限地點              |    |
|     | C53         | VARCHAR2(20 char) | 有效期限地點全文            |    |
|     | C54         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C55         | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C56         | VARCHAR2(40 char) | 瑕疵明細二               |    |
|     | C601        | VARCHAR2(6 char)  | 申請人編號               |    |
|     | C602        | VARCHAR2(40 char) | 申請人英文名稱             |    |
|     | C603        | VARCHAR2(40 char) | 申請人中文名稱             |    |
|     | C604        | VARCHAR2(11 char) | 申請人統一編號             |    |
|     | C605        | VARCHAR2(12 char) | 申請人批覆書號             |    |
|     | C606        | VARCHAR2(40 char) | 申請人住址一              |    |
|     | C607        | VARCHAR2(40 char) | 申請人住址二              |    |
|     | C608        | VARCHAR2(40 char) | 申請人住址三              |    |
|     | C609        | VARCHAR2(40 char) | 受益人名稱               |    |
|     | C610        | VARCHAR2(40 char) | 受益人住址一              |    |
|     | C611        | VARCHAR2(40 char) | 受益人住址二              |    |
|     | C612        | VARCHAR2(40 char) | 受益人住址三              |    |
|     | C613        | VARCHAR2(5 char)  | 押匯行編號               |    |
|     | C614        | VARCHAR2(12 char) | 押匯行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 押匯行名稱               |    |
|     | C616        | VARCHAR2(20 char) | 押匯行參考編號             |    |
|     | C617        | VARCHAR2(12 char) | 押匯行在設帳行帳號           |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之設帳行SWIFT_CODE   |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之設帳行名稱           |    |
|     | C60         | VARCHAR2(5 char)  | 存匯行編號               |    |
|     | C61         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C62         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C63         | NUMBER(12, 6)      | 額度交叉匯率              |    |
|     | C64         | VARCHAR2(3 char)  | 額度佔用_恢復代碼           |    |
|     | C65         | VARCHAR2(4 char)  | 區域中心                |    |
|     | C66         | VARCHAR2(7 char)  | AO代號                |    |
|     | C67         | VARCHAR2(4 char)  | 代理行                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEEBM

#### 轉開國內信用狀主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C5          | DATE              | 交易日期                |    |
|     | C6          | VARCHAR2(1 char)  | 業務別                 |    |
|     | C7          | NUMBER(1, 0)       | 交易檔序號               |    |
|     | C8          | NUMBER(2, 0)       | 修狀次數                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK           |    |
|     | C12         | VARCHAR2(1 char)  | 控制轉開開狀FLAG          |    |
|     | C13         | VARCHAR2(1 char)  | 控制是否為本行通知FLAG       |    |
|     | C14         | NUMBER(18, 0)      | 交易金額                |    |
|     | C15         | VARCHAR2(3 char)  | 臺幣幣別                |    |
|     | C16         | VARCHAR2(16 char) | 主信用狀號碼              |    |
|     | C17         | VARCHAR2(3 char)  | 主信用狀幣別              |    |
|     | C18         | NUMBER(18, 0)      | 主信用狀金額              |    |
|     | C19         | NUMBER(18, 0)      | 主信用狀餘額-可轉開餘額        |    |
|     | C20         | NUMBER(18, 0)      | 轉開信用狀金額             |    |
|     | C21         | NUMBER(18, 0)      | 前次修狀餘額              |    |
|     | C22         | NUMBER(18, 0)      | 轉開目前信用狀餘額           |    |
|     | C23         | NUMBER(18, 0)      | 主LC金額               |    |
|     | C24         | NUMBER(18, 0)      | 主LC餘額-主LC進帳後付款      |    |
|     | C25         | NUMBER(18, 0)      | 保證金餘額               |    |
|     | C26         | NUMBER(18, 0)      | 國內匯票金額              |    |
|     | C27         | NUMBER(18, 0)      | 超押金額                |    |
|     | C28         | NUMBER(18, 0)      | 國外求償金額              |    |
|     | C29         | NUMBER(18, 0)      | 押匯行費用               |    |
|     | C30         | NUMBER(18, 0)      | 手續費                 |    |
|     | C31         | NUMBER(12, 6)      | 手續費率                |    |
|     | C32         | NUMBER(18, 0)      | 郵電費用                |    |
|     | C33         | NUMBER(12, 6)      | 保證金成數               |    |
|     | C34         | NUMBER(2, 0)       | 計費期數                |    |
|     | C35         | NUMBER(12, 6)      | 批覆書保證成數             |    |
|     | C36         | NUMBER(18, 0)      | 批覆書保證金額             |    |
|     | C37         | DATE              | 主LC有效日期             |    |
|     | C38         | DATE              | 主LC最後裝船日            |    |
|     | C39         | DATE              | 轉開有效日期              |    |
|     | C40         | DATE              | 轉開最後裝船日             |    |
|     | C41         | DATE              | 國內LC押匯日             |    |
|     | C42         | DATE              | 開狀日期                |    |
|     | C43         | DATE              | 到單日期                |    |
|     | C44         | DATE              | 換單日期                |    |
|     | C45         | DATE              | 取消日期-取消轉開LC         |    |
|     | C46         | DATE              | 拒付日期                |    |
|     | C47         | DATE              | 註銷日期-拒付解除           |    |
|     | C48         | DATE              | 存同起息日-Value_Date    |    |
|     | C49         | NUMBER(3, 0)       | 主LC_TenorDays-對外    |    |
|     | C50         | NUMBER(3, 0)       | 轉開TenorDays-對外      |    |
|     | C51         | VARCHAR2(70 char) | 出口港-44E             |    |
|     | C52         | VARCHAR2(70 char) | 目地港-44F             |    |
|     | C53         | VARCHAR2(1 char)  | 信用狀型式               |    |
|     | C54         | VARCHAR2(20 char) | 信用狀型式全文             |    |
|     | C55         | VARCHAR2(1 char)  | 有效期限地點              |    |
|     | C56         | VARCHAR2(20 char) | 有效期限地點全文            |    |
|     | C57         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C58         | VARCHAR2(1 char)  | 開狀方式                |    |
|     | C601        | VARCHAR2(6 char)  | 申請人編號               |    |
|     | C602        | VARCHAR2(40 char) | 申請人英文名稱             |    |
|     | C603        | VARCHAR2(40 char) | 申請人中文名稱             |    |
|     | C604        | VARCHAR2(11 char) | 申請人統一編號             |    |
|     | C605        | VARCHAR2(12 char) | 申請人批覆書號             |    |
|     | C606        | VARCHAR2(40 char) | 申請人住址一              |    |
|     | C607        | VARCHAR2(40 char) | 申請人住址二              |    |
|     | C608        | VARCHAR2(40 char) | 申請人住址三              |    |
|     | C609        | VARCHAR2(40 char) | 受益人名稱               |    |
|     | C610        | VARCHAR2(40 char) | 受益人住址一              |    |
|     | C611        | VARCHAR2(40 char) | 受益人住址二              |    |
|     | C612        | VARCHAR2(40 char) | 受益人住址三              |    |
|     | C613        | VARCHAR2(5 char)  | 押匯行編號               |    |
|     | C614        | VARCHAR2(12 char) | 押匯行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 押匯行名稱               |    |
|     | C616        | VARCHAR2(20 char) | 押匯行參考編號             |    |
|     | C617        | VARCHAR2(12 char) | 押匯行在設帳行帳號           |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之設帳行SWIFT_CODE   |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之設帳行名稱           |    |
|     | C62         | VARCHAR2(5 char)  | 存匯行編號               |    |
|     | C63         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C64         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C65         | NUMBER(12, 6)      | 額度交叉匯率              |    |
|     | C66         | VARCHAR2(3 char)  | 額度佔用_恢復代碼           |    |
|     | C67         | VARCHAR2(12 char) | OLD-CANO            |    |
|     | C68         | VARCHAR2(4 char)  | 區域中心                |    |
|     | C69         | VARCHAR2(7 char)  | AO代號                |    |
|     | C70         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C71         | VARCHAR2(1 char)  | 價格條件                |    |
|     | C72         | NUMBER(18, 0)      | 信用狀餘額-34B           |    |
|     | C73         | VARCHAR2(11 char) | 客戶統編                |    |
|     | C74         | VARCHAR2(70 char) | 收貨地_接管地-44A         |    |
|     | C75         | VARCHAR2(70 char) | 目的地-44B             |    |
|     | C76         | VARCHAR2(30 char) | 輸入許可證號              |    |
|     | C77         | NUMBER(2, 0)       | 容許百分比加項             |    |
|     | C78         | NUMBER(2, 0)       | 容許百分比減項             |    |
|     | C79         | NUMBER(2, 0)       | 單據提示期限              |    |
|     | C80         | VARCHAR2(1 char)  | 付款方式                |    |
|     | C81         | VARCHAR2(1 char)  | 運送單據                |    |
|     | C82         | VARCHAR2(1 char)  | 價格條件                |    |
|     | C83         | VARCHAR2(1 char)  | 保險負擔                |    |
|     | C84         | VARCHAR2(1 char)  | 運費負擔                |    |
|     | C85         | VARCHAR2(1 char)  | 部份裝運                |    |
|     | C86         | VARCHAR2(1 char)  | 轉運                  |    |
|     | C87         | VARCHAR2(2 char)  | 通知行國別               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEEXM

#### 出口押匯主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位-交易行            |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | VARCHAR2(1 char)  | 交易副檔型態              |    |
|     | C5          | NUMBER(2, 0)       | 交易副檔序號              |    |
|     | C6          | VARCHAR2(4 char)  | 記帳行代碼               |    |
|     | C7          | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C8          | VARCHAR2(6 char)  | 顧客號碼                |    |
|     | C9          | VARCHAR2(40 char) | 顧客戶名                |    |
|     | C10         | VARCHAR2(11 char) | 統一編號                |    |
|     | C11         | VARCHAR2(12 char) | 批覆書號                |    |
|     | C12         | VARCHAR2(40 char) | 顧客地址一               |    |
|     | C13         | VARCHAR2(40 char) | 顧客地址二               |    |
|     | C14         | VARCHAR2(40 char) | 顧客地址三               |    |
|     | C15         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C16         | VARCHAR2(1 char)  | 融資方式_入帳行選擇          |    |
|     | C17         | VARCHAR2(1 char)  | 主檔鎖住FLAG            |    |
|     | C18         | VARCHAR2(1 char)  | 本行通知FLAG            |    |
|     | C19         | VARCHAR2(4 char)  | 交易狀況                |    |
|     | C20         | VARCHAR2(16 char) | 本行讓號號碼_第一押匯行編號      |    |
|     | C21         | VARCHAR2(16 char) | 預售遠匯交易編號            |    |
|     | C22         | VARCHAR2(20 char) | 信用狀號碼               |    |
|     | C23         | DATE              | 交易日期                |    |
|     | C24         | DATE              | 押匯日                 |    |
|     | C25         | DATE              | 承兌日                 |    |
|     | C26         | DATE              | 開狀日                 |    |
|     | C27         | DATE              | 有效日                 |    |
|     | C28         | DATE              | 到期日                 |    |
|     | C29         | DATE              | 存同入帳日               |    |
|     | C30         | DATE              | 裝船日                 |    |
|     | C31         | DATE              | 最後裝船日               |    |
|     | C32         | DATE              | 拒付日                 |    |
|     | C33         | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C34         | VARCHAR2(40 char) | 交易國別名稱              |    |
|     | C35         | VARCHAR2(5 char)  | 存匯行代碼               |    |
|     | C36         | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C37         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C38         | VARCHAR2(20 char) | 存匯行帳號               |    |
|     | C39         | VARCHAR2(5 char)  | 開狀行代碼               |    |
|     | C40         | VARCHAR2(12 char) | 開狀行SWIFT_CODE       |    |
|     | C41         | VARCHAR2(40 char) | 開狀行名稱               |    |
|     | C42         | VARCHAR2(40 char) | 開狀行地址一              |    |
|     | C43         | VARCHAR2(40 char) | 開狀行地址二              |    |
|     | C44         | VARCHAR2(40 char) | 開狀行地址三              |    |
|     | C45         | VARCHAR2(5 char)  | 求償行代碼               |    |
|     | C46         | VARCHAR2(12 char) | 求償行SWIFT_CODE       |    |
|     | C47         | VARCHAR2(12 char) | 求償行TELEX_No         |    |
|     | C48         | VARCHAR2(40 char) | 求償行名稱               |    |
|     | C49         | VARCHAR2(40 char) | 求償行地址一              |    |
|     | C50         | VARCHAR2(40 char) | 求償行地址二              |    |
|     | C51         | VARCHAR2(40 char) | 求償行地址三              |    |
|     | C52         | VARCHAR2(5 char)  | 第二押匯行_託收行代碼         |    |
|     | C53         | VARCHAR2(12 char) | 第二押匯行_託收行SWIFT_CODE |    |
|     | C54         | VARCHAR2(40 char) | 第二押匯行_託收行名稱         |    |
|     | C55         | VARCHAR2(40 char) | 第二押匯行_託收行地址一        |    |
|     | C56         | VARCHAR2(40 char) | 第二押匯行_託收行地址二        |    |
|     | C57         | VARCHAR2(40 char) | 第二押匯行_託收行地址三        |    |
|     | C58         | VARCHAR2(40 char) | 第一押匯行入帳行            |    |
|     | C59         | VARCHAR2(40 char) | 國外進口商               |    |
|     | C60         | VARCHAR2(40 char) | 進口商地址一              |    |
|     | C61         | VARCHAR2(40 char) | 進口商地址二              |    |
|     | C62         | VARCHAR2(40 char) | 進口商地址三              |    |
|     | C63         | VARCHAR2(3 char)  | 匯票幣別                |    |
|     | C64         | NUMBER(18, 0)      | 匯票金額                |    |
|     | C65         | NUMBER(18, 0)      | 未銷帳餘額               |    |
|     | C66         | NUMBER(18, 0)      | 存同入帳金額              |    |
|     | C67         | VARCHAR2(1 char)  | TENOR_TYPE          |    |
|     | C68         | NUMBER(3, 0)       | TENOR_DAY           |    |
|     | C69         | NUMBER(18, 0)      | 求償利息                |    |
|     | C70         | NUMBER(18, 0)      | 墊款金額                |    |
|     | C71         | NUMBER(18, 0)      | 本行求償銀行費用            |    |
|     | C72         | NUMBER(18, 0)      | 存入外存                |    |
|     | C73         | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C74         | VARCHAR2(1 char)  | 外幣支號                |    |
|     | C75         | NUMBER(18, 0)      | 轉匯國內它行              |    |
|     | C76         | NUMBER(18, 0)      | 轉匯國外它行              |    |
|     | C77         | NUMBER(18, 0)      | 轉開金額                |    |
|     | C78         | NUMBER(18, 0)      | 轉讓金額                |    |
|     | C79         | NUMBER(18, 0)      | 償還外幣貸款              |    |
|     | C80         | NUMBER(18, 0)      | 扣付佣金                |    |
|     | C81         | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C82         | NUMBER(18, 0)      | 本次國外費用              |    |
|     | C83         | NUMBER(18, 0)      | 前次國外費用              |    |
|     | C84         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C85         | NUMBER(12, 6)      | 成交利率                |    |
|     | C86         | NUMBER(18, 0)      | 出押息日數               |    |
|     | C87         | NUMBER(18, 0)      | 出押息金額               |    |
|     | C88         | NUMBER(18, 0)      | 轉押日數                |    |
|     | C89         | NUMBER(18, 0)      | 轉押息金額               |    |
|     | C90         | NUMBER(18, 0)      | 瑕疵日數                |    |
|     | C91         | NUMBER(18, 0)      | 瑕疵息                 |    |
|     | C92         | NUMBER(18, 0)      | 貼現息日數               |    |
|     | C93         | NUMBER(18, 0)      | 貼現息金額               |    |
|     | C94         | NUMBER(18, 0)      | 已收手續費               |    |
|     | C95         | NUMBER(18, 0)      | 短收通知手續費             |    |
|     | C96         | NUMBER(18, 0)      | 短收郵電費               |    |
|     | C97         | NUMBER(18, 0)      | 已收郵電費               |    |
|     | C98         | NUMBER(18, 0)      | 應付第二押匯行手續費          |    |
|     | C99         | NUMBER(18, 0)      | 應付第二押匯行郵電費          |    |
|     | C100        | NUMBER(18, 0)      | 存入台幣                |    |
|     | C101        | VARCHAR2(12 char) | 台幣帳號                |    |
|     | C102        | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C103        | VARCHAR2(1 char)  | 託收押匯型態              |    |
|     | C104        | VARCHAR2(40 char) | 拒付理由                |    |
|     | C105        | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C106        | VARCHAR2(40 char) | 瑕疵明細二               |    |
|     | C107        | NUMBER(18, 0)      | 應收前期逾期息             |    |
|     | C108        | NUMBER(18, 0)      | 應收前期國外費用            |    |
|     | C109        | VARCHAR2(16 char) | 攤提編號                |    |
|     | C110        | VARCHAR2(3 char)  | 美金                  |    |
|     | C111        | NUMBER(18, 0)      | 等值美金                |    |
|     | C112        | VARCHAR2(3 char)  | 額度代碼                |    |
|     | C113        | NUMBER(12, 6)      | 額度匯率                |    |
|     | C114        | DATE              | 攤提到期日               |    |
|     | C115        | VARCHAR2(1 char)  | 是否先向出口商收取利息         |    |
|     | C116        | NUMBER(3, 0)       | 求償天數                |    |
|     | C117        | NUMBER(2, 0)       | 容許百分比               |    |
|     | C118        | NUMBER(3, 0)       | 逾期天數                |    |
|     | C119        | NUMBER(18, 0)      | 逾期息                 |    |
|     | C120        | VARCHAR2(1 char)  | 押匯_託收性質             |    |
|     | C121        | VARCHAR2(1 char)  | 批次銷帳旗標              |    |
|     | C122        | DATE              | 批次銷帳日期              |    |
|     | C123        | VARCHAR2(16 char) | 批次銷帳編號              |    |
|     | C124        | NUMBER(18, 0)      | 累計短收轉押匯手續費          |    |
|     | C125        | DATE              | 承作日期                |    |
|     | C126        | VARCHAR2(12 char) | OLD-CANO            |    |
|     | C127        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C128        | VARCHAR2(7 char)  | AO代號                |    |
|     | C129        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C130        | VARCHAR2(1 char)  | 賣斷FLAG              |    |
|     | C131        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C132        | NUMBER(12, 6)      | 利率加_減碼              |    |
|     | C133        | NUMBER(3, 0)       | SIBOR天期             |    |
|     | C134        | NUMBER(3, 0)       | LIBOR天期             |    |
|     | C135        | VARCHAR2(5 char)  | 買_賣斷行代碼             |    |
|     | C136        | VARCHAR2(12 char) | 買_賣斷行SWIFT_CODE     |    |
|     | C137        | VARCHAR2(40 char) | 買_賣斷行名稱             |    |
|     | C138        | NUMBER(18, 0)      | 本次逾期息               |    |
|     | C139        | VARCHAR2(1 char)  | 遠期承兌額度還原FLAG        |    |
|     | C140        | NUMBER(18, 0)      | 買_賣斷行手續費-台幣         |    |
|     | C141        | VARCHAR2(1 char)  | 是否國外費用補收            |    |
|     | C142        | DATE              | 託收改押匯日              |    |
|     | C143        | VARCHAR2(1 char)  | 國外費用支付方式            |    |
|     | C144        | VARCHAR2(1 char)  | 買斷行                 |    |
|     | C145        | NUMBER(12, 6)      | 他行買斷融資利率報價          |    |
|     | C146        | NUMBER(12, 6)      | 他行買斷不融資手續費率         |    |
|     | C147        | NUMBER(18, 0)      | 本行加碼手續費             |    |
|     | C148        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C149        | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C150        | VARCHAR2(20 char) | 額度預暫編號-FILEBAHP     |    |
|     | C151        | NUMBER(18, 0)      | 買斷利息收入              |    |
|     | C152        | NUMBER(18, 0)      | 應付買斷款               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEEXP

#### 出口押匯工作檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位-交易行            |    |
|     | C2          | VARCHAR2(20 char) | 營業單位名稱              |    |
| PK  | C3          | VARCHAR2(16 char) | 押匯編號                |    |
|     | C4          | VARCHAR2(16 char) | 本行通知編號              |    |
|     | C5          | VARCHAR2(16 char) | 保兌編號                |    |
|     | C6          | VARCHAR2(16 char) | 轉讓編號_第一押匯行編號        |    |
|     | C7          | VARCHAR2(16 char) | 攤提編號                |    |
|     | C8          | VARCHAR2(1 char)  | 交易副檔型態              |    |
| PK  | C9          | NUMBER(2, 0)       | 交易副檔序號              |    |
|     | C10         | NUMBER(2, 0)       | 交易更正版次              |    |
|     | C11         | VARCHAR2(1 char)  | 通知FLAG              |    |
|     | C12         | VARCHAR2(4 char)  | 記帳行代碼               |    |
|     | C13         | VARCHAR2(1 char)  | 是否瑕疵                |    |
|     | C601        | VARCHAR2(6 char)  | 顧客號碼                |    |
|     | C602        | VARCHAR2(40 char) | 顧客戶名-英文             |    |
|     | C603        | VARCHAR2(40 char) | 顧客戶名-中文             |    |
|     | C604        | VARCHAR2(11 char) | 營利事業統一編號            |    |
|     | C605        | VARCHAR2(12 char) | 批覆書號                |    |
|     | C606        | VARCHAR2(40 char) | 顧客地址一               |    |
|     | C607        | VARCHAR2(40 char) | 顧客地址二               |    |
|     | C608        | VARCHAR2(40 char) | 顧客地址三               |    |
|     | C15         | VARCHAR2(3 char)  | 額度類別                |    |
|     | C16         | VARCHAR2(1 char)  | 是否由出口商負擔利息          |    |
|     | C17         | VARCHAR2(3 char)  | 額度幣別                |    |
|     | C18         | NUMBER(18, 0)      | 額度金額                |    |
|     | C19         | NUMBER(12, 6)      | 額度評估匯率              |    |
|     | C20         | VARCHAR2(1 char)  | 戶況                  |    |
|     | C21         | VARCHAR2(4 char)  | 前次作業型態              |    |
|     | C22         | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C23         | VARCHAR2(4 char)  | 記錄型態                |    |
|     | C24         | VARCHAR2(20 char) | 記錄型態說明              |    |
|     | C25         | VARCHAR2(20 char) | 信用狀號碼               |    |
|     | C26         | VARCHAR2(20 char) | 信用狀號碼-由本行轉讓         |    |
|     | C27         | VARCHAR2(3 char)  | 信用狀幣別               |    |
|     | C28         | NUMBER(18, 0)      | 信用狀餘額               |    |
|     | C29         | VARCHAR2(1 char)  | 作業型態選項              |    |
|     | C30         | VARCHAR2(20 char) | 作業型態說明              |    |
|     | C31         | VARCHAR2(1 char)  | 融資方式_入帳行            |    |
|     | C32         | DATE              | 交易日期                |    |
|     | C33         | DATE              | 開狀日                 |    |
|     | C34         | DATE              | 有效日                 |    |
|     | C35         | DATE              | 最後裝船日               |    |
|     | C36         | DATE              | 押匯_託收日              |    |
|     | C37         | DATE              | 預估到期日               |    |
|     | C38         | DATE              | 存同入帳日               |    |
|     | C39         | DATE              | 遠期承兌日               |    |
|     | C40         | DATE              | 裝船日                 |    |
|     | C41         | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C42         | VARCHAR2(40 char) | 交易國別名稱              |    |
|     | C609        | VARCHAR2(5 char)  | 存匯行代碼               |    |
|     | C610        | VARCHAR2(12 char) | 存匯行SWIFT_CODE       |    |
|     | C611        | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C612        | VARCHAR2(20 char) | 存匯行帳號               |    |
|     | C44         | VARCHAR2(5 char)  | 第一押匯行入帳行代碼          |    |
|     | C45         | VARCHAR2(12 char) | 第一押匯行入帳行SWIFT_CODE  |    |
|     | C46         | VARCHAR2(40 char) | 第一押匯行入帳行名稱          |    |
|     | C47         | VARCHAR2(20 char) | 第一押匯行入帳行帳號          |    |
|     | C613        | VARCHAR2(5 char)  | 開狀行代碼               |    |
|     | C614        | VARCHAR2(12 char) | 開狀行SWIFT_CODE       |    |
|     | C615        | VARCHAR2(40 char) | 開狀行名稱               |    |
|     | C616        | VARCHAR2(40 char) | 開狀行地址一              |    |
|     | C617        | VARCHAR2(40 char) | 開狀行地址二              |    |
|     | C618        | VARCHAR2(40 char) | 開狀行地址三              |    |
|     | C619        | VARCHAR2(5 char)  | 求償行代碼               |    |
|     | C620        | VARCHAR2(12 char) | 求償行SWIFT_CODE       |    |
|     | C621        | VARCHAR2(12 char) | 求償行TELEX_No         |    |
|     | C622        | VARCHAR2(40 char) | 求償行名稱               |    |
|     | C623        | VARCHAR2(40 char) | 求償行地址一              |    |
|     | C624        | VARCHAR2(40 char) | 求償行地址二              |    |
|     | C625        | VARCHAR2(40 char) | 求償行地址三              |    |
|     | C626        | VARCHAR2(5 char)  | 第二押匯行_託收行代碼         |    |
|     | C627        | VARCHAR2(12 char) | 第二押匯行_託收行SWIFT_CODE |    |
|     | C628        | VARCHAR2(40 char) | 第二押匯行_託收行名稱         |    |
|     | C629        | VARCHAR2(40 char) | 第二押匯行_託收行地址一        |    |
|     | C630        | VARCHAR2(40 char) | 第二押匯行_託收行地址二        |    |
|     | C631        | VARCHAR2(40 char) | 第二押匯行_託收行地址三        |    |
|     | C51         | VARCHAR2(40 char) | 國外進口商               |    |
|     | C52         | VARCHAR2(40 char) | 進口商地址一              |    |
|     | C53         | VARCHAR2(40 char) | 進口商地址二              |    |
|     | C54         | VARCHAR2(40 char) | 進口商地址三              |    |
|     | C55         | VARCHAR2(3 char)  | 匯票幣別                |    |
|     | C56         | NUMBER(18, 0)      | 匯票金額                |    |
|     | C57         | NUMBER(18, 0)      | 未銷帳餘額               |    |
|     | C58         | NUMBER(18, 0)      | 存同入帳金額              |    |
|     | C59         | VARCHAR2(1 char)  | TENOR_TYPE          |    |
|     | C60         | VARCHAR2(20 char) | TENOR_TYPE描述        |    |
|     | C61         | NUMBER(3, 0)       | TENOR_DAY           |    |
|     | C62         | NUMBER(3, 0)       | 求償利息天數              |    |
|     | C63         | NUMBER(12, 6)      | 求償利率                |    |
|     | C64         | NUMBER(18, 0)      | 求償利息                |    |
|     | C65         | NUMBER(18, 0)      | 墊款金額                |    |
|     | C66         | NUMBER(18, 0)      | 本行求償銀行費用            |    |
|     | C67         | NUMBER(18, 0)      | 求償金額                |    |
|     | C68         | NUMBER(18, 0)      | 押匯金額_銷帳金額           |    |
|     | C69         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C70         | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C71         | VARCHAR2(1 char)  | 外幣支號                |    |
|     | C72         | VARCHAR2(4 char)  | 活存營業單位-存入外存         |    |
|     | C73         | VARCHAR2(2 char)  | 活存科目-存入外存           |    |
|     | C74         | VARCHAR2(6 char)  | 活存顧客號碼-存入外存         |    |
|     | C75         | VARCHAR2(3 char)  | 活存摘要-存入外存           |    |
|     | C76         | NUMBER(18, 0)      | 轉匯國內它行              |    |
|     | C77         | NUMBER(18, 0)      | 轉匯國外它行              |    |
|     | C78         | NUMBER(18, 0)      | 轉開金額_出口押匯不足款        |    |
|     | C79         | NUMBER(18, 0)      | 轉讓金額_應收國外費用         |    |
|     | C80         | NUMBER(18, 0)      | 償還外幣貸款              |    |
|     | C81         | NUMBER(18, 0)      | 扣付佣金                |    |
|     | C82         | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C83         | NUMBER(18, 0)      | 本次國外費用              |    |
|     | C84         | NUMBER(18, 0)      | 前次國外費用              |    |
|     | C85         | NUMBER(18, 0)      | 國外費用總數              |    |
|     | C632        | NUMBER(18, 0)      | 預售遠期交割金額            |    |
|     | C633        | VARCHAR2(16 char) | 遠匯交易號碼              |    |
|     | C634        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C635        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C636        | NUMBER(12, 6)      | 遠匯交割成交匯率            |    |
|     | C637        | NUMBER(18, 0)      | 應付遠匯金額              |    |
|     | C638        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C639        | VARCHAR2(1 char)  | 遠匯交割支號              |    |
|     | C640        | VARCHAR2(4 char)  | 活存營業單位-遠匯           |    |
|     | C641        | VARCHAR2(2 char)  | 活存科目-遠匯             |    |
|     | C642        | VARCHAR2(6 char)  | 活存顧客號碼-遠匯           |    |
|     | C643        | VARCHAR2(3 char)  | 活存摘要-遠匯             |    |
|     | C644        | VARCHAR2(1 char)  | 遠匯FLAG              |    |
|     | C645        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C646        | VARCHAR2(4 char)  | 原營業單位               |    |
|     | C647        | VARCHAR2(16 char) | 原遠匯交易號碼             |    |
|     | C648        | NUMBER(18, 0)      | 原交割金額               |    |
|     | C649        | VARCHAR2(1 char)  | 活存FLAG              |    |
|     | C87         | NUMBER(18, 0)      | 其它原幣扣項              |    |
|     | C88         | NUMBER(18, 0)      | 原幣扣項合計              |    |
|     | C89         | NUMBER(18, 0)      | 押匯-溢付兌換金額           |    |
|     | C90         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C91         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C92         | NUMBER(12, 6)      | 議價匯率                |    |
|     | C93         | NUMBER(18, 0)      | 預購_售違約金             |    |
|     | C94         | NUMBER(18, 0)      | 押匯剩餘款-溢付金額折合新台幣     |    |
|     | C650        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C651        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C652        | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C653        | NUMBER(18, 0)      | 手續費一次性收費額           |    |
|     | C654        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C655        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C656        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C657        | NUMBER(18, 0)      | 收費最低限額              |    |
|     | C658        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C659        | NUMBER(12, 6)      | 客戶額度利率              |    |
|     | C96         | NUMBER(12, 6)      | 押匯手續費率              |    |
|     | C97         | NUMBER(18, 0)      | 本次應收手續費             |    |
|     | C98         | NUMBER(18, 0)      | 優惠手續費               |    |
|     | C99         | NUMBER(18, 0)      | 實收手續費               |    |
|     | C100        | NUMBER(18, 0)      | 匯費                  |    |
|     | C101        | NUMBER(18, 0)      | 本次郵電費               |    |
|     | C102        | NUMBER(3, 0)       | 出押日數                |    |
|     | C103        | NUMBER(18, 0)      | 出押息                 |    |
|     | C104        | NUMBER(3, 0)       | 轉押日數                |    |
|     | C105        | NUMBER(18, 0)      | 轉押息                 |    |
|     | C106        | NUMBER(3, 0)       | 瑕疵日數                |    |
|     | C107        | NUMBER(18, 0)      | 瑕疵息                 |    |
|     | C108        | NUMBER(3, 0)       | 貼現日數                |    |
|     | C109        | NUMBER(18, 0)      | 貼現息                 |    |
|     | C110        | VARCHAR2(1 char)  | 匯票種類                |    |
|     | C111        | NUMBER(18, 0)      | 手續費-佣金              |    |
|     | C112        | NUMBER(3, 0)       | 逾期日數                |    |
|     | C113        | NUMBER(18, 0)      | 前期逾期息補收_逾期息         |    |
|     | C114        | NUMBER(18, 0)      | 前期國外費用補收            |    |
|     | C115        | NUMBER(18, 0)      | 其它台幣扣項              |    |
|     | C116        | NUMBER(18, 0)      | 台幣扣項合計              |    |
|     | C117        | NUMBER(3, 0)       | 寬限天數                |    |
|     | C118        | NUMBER(12, 6)      | 成本利率                |    |
|     | C119        | NUMBER(12, 6)      | 成交利率                |    |
|     | C120        | NUMBER(12, 6)      | 議價利率                |    |
|     | C121        | VARCHAR2(1 char)  | 費用負擔對象              |    |
|     | C122        | VARCHAR2(1 char)  | 費用繳交方式              |    |
|     | C123        | VARCHAR2(3 char)  | 費用支付幣別              |    |
|     | C124        | NUMBER(12, 6)      | 費用支付成本匯率            |    |
|     | C125        | NUMBER(12, 6)      | 費用支付成交匯率            |    |
|     | C126        | NUMBER(18, 0)      | 客戶實繳台幣-聯行往來         |    |
|     | C127        | NUMBER(18, 0)      | 客戶實繳外幣              |    |
|     | C128        | NUMBER(18, 0)      | 以外存支付               |    |
|     | C129        | VARCHAR2(13 char) | 外幣支付帳號              |    |
|     | C130        | VARCHAR2(1 char)  | 外幣支付支號              |    |
|     | C131        | VARCHAR2(4 char)  | 活存營業單位-外幣支付         |    |
|     | C132        | VARCHAR2(2 char)  | 活存科目-外幣支付           |    |
|     | C133        | VARCHAR2(6 char)  | 活存顧客號碼-外幣支付         |    |
|     | C134        | VARCHAR2(3 char)  | 活存摘要-外幣支付           |    |
|     | C135        | NUMBER(18, 0)      | 應收費用以外幣支付金額         |    |
|     | C136        | NUMBER(18, 0)      | 國內費用兌換金額            |    |
|     | C137        | NUMBER(18, 0)      | 國內費用兌換台幣            |    |
|     | C138        | NUMBER(18, 0)      | 預售遠匯金額兌換台幣          |    |
|     | C139        | NUMBER(18, 0)      | 解付台幣淨額_應退款項         |    |
|     | C140        | NUMBER(18, 0)      | 解付外幣淨額              |    |
|     | C141        | NUMBER(18, 0)      | 應收款項                |    |
|     | C142        | NUMBER(18, 0)      | 存入台幣金額              |    |
|     | C143        | VARCHAR2(13 char) | 台幣帳號                |    |
|     | C144        | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C145        | NUMBER(18, 0)      | 累計受益人短收手續費          |    |
|     | C146        | NUMBER(18, 0)      | 受益人已收手續費            |    |
|     | C147        | NUMBER(18, 0)      | 本次繳交手續費             |    |
|     | C148        | NUMBER(18, 0)      | 累計受益人短收郵電費          |    |
|     | C149        | NUMBER(18, 0)      | 本次繳交郵電費             |    |
|     | C150        | NUMBER(18, 0)      | 應收第二押匯行手續費          |    |
|     | C151        | NUMBER(18, 0)      | 應付第二押匯行郵電費          |    |
|     | C152        | NUMBER(18, 0)      | 應付第二押匯行費用合計         |    |
|     | C153        | VARCHAR2(40 char) | 拒付理由_瑕疵明細二          |    |
|     | C154        | VARCHAR2(40 char) | 瑕疵明細一               |    |
|     | C155        | VARCHAR2(1 char)  | 主檔HOLD_MARK         |    |
|     | C156        | VARCHAR2(10 char) | 輸入經辦                |    |
|     | C157        | VARCHAR2(1 char)  | 需主管放行FLAG           |    |
|     | C158        | VARCHAR2(10 char) | 放行主管                |    |
|     | C159        | NUMBER(5, 0)       | 會計傳票序號              |    |
|     | C884        | VARCHAR2(20 char) | 電文稿一                |    |
|     | C885        | VARCHAR2(20 char) | 電文稿二                |    |
|     | C886        | VARCHAR2(20 char) | 電文稿三                |    |
|     | C887        | VARCHAR2(20 char) | 電文稿四                |    |
|     | C888        | VARCHAR2(20 char) | 電文稿五                |    |
|     | C889        | VARCHAR2(20 char) | 電文稿六                |    |
|     | C890        | VARCHAR2(20 char) | 電文稿七                |    |
|     | C891        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C892        | VARCHAR2(2 char)  | 利率種類                |    |
|     | C893        | NUMBER(12, 6)      | 出口託收DA費率            |    |
|     | C894        | NUMBER(12, 6)      | 出口託收DP費率            |    |
|     | C895        | NUMBER(12, 6)      | 出口押匯費率              |    |
|     | C896        | NUMBER(12, 6)      | 出口轉押匯費率             |    |
|     | C897        | NUMBER(3, 0)       | 出押息加減天數             |    |
|     | C898        | NUMBER(3, 0)       | 轉押息加減天數             |    |
|     | C899        | NUMBER(3, 0)       | 瑕疵息加減天數             |    |
|     | C900        | VARCHAR2(12 char) | 核貸書總號               |    |
|     | C194        | DATE              | 攤提到期日               |    |
|     | C195        | NUMBER(2, 0)       | 容許百分比               |    |
|     | C196        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C197        | VARCHAR2(7 char)  | AO代號                |    |
|     | C901        | VARCHAR2(13 char) | 台幣扣款帳號              |    |
|     | C902        | NUMBER(18, 0)      | 連動台幣扣款金額            |    |
|     | C199        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C903        | VARCHAR2(1 char)  | 議價處理區分0-不處理1-處理     |    |
|     | C904        | VARCHAR2(6 char)  | 議價編號                |    |
|     | C905        | VARCHAR2(1 char)  | 買賣區分B-買S-賣          |    |
|     | C906        | VARCHAR2(3 char)  | 議價幣別                |    |
|     | C907        | NUMBER(18, 0)      | 議價成交金額              |    |
|     | C908        | VARCHAR2(1 char)  | 賣斷FLAG              |    |
|     | C909        | VARCHAR2(2 char)  | 利率代碼                |    |
|     | C910        | NUMBER(12, 6)      | 牌告利率                |    |
|     | C911        | NUMBER(12, 6)      | SIBOR利率             |    |
|     | C912        | NUMBER(12, 6)      | LIBOR利率             |    |
|     | C913        | NUMBER(12, 6)      | 利率加_減碼              |    |
|     | C914        | NUMBER(3, 0)       | SIBOR天期             |    |
|     | C915        | NUMBER(3, 0)       | LIBOR天期             |    |
|     | C916        | VARCHAR2(5 char)  | GEB-TXN-CODE        |    |
|     | C917        | VARCHAR2(7 char)  | GEB-SEQ-NO          |    |
|     | C918        | VARCHAR2(16 char) | 對台聯往銷帳編號            |    |
|     | C919        | VARCHAR2(5 char)  | 買_賣斷行代碼             |    |
|     | C920        | VARCHAR2(12 char) | 買_賣斷行SWIFT_CODE     |    |
|     | C921        | VARCHAR2(40 char) | 買_賣斷行名稱             |    |
|     | C922        | VARCHAR2(30 char) | 押匯性質說明              |    |
|     | C923        | NUMBER(18, 0)      | 本次逾期息               |    |
|     | C924        | VARCHAR2(1 char)  | 遠期承兌額度還原FLAG        |    |
|     | C925        | VARCHAR2(40 char) | 買_賣斷行地址一            |    |
|     | C926        | VARCHAR2(40 char) | 買_賣斷行地址二            |    |
|     | C927        | VARCHAR2(40 char) | 買_賣斷行地址三            |    |
|     | C928        | NUMBER(18, 0)      | 買_賣斷行手續費-台幣         |    |
|     | C929        | NUMBER(18, 0)      | 買_賣斷行手續費-FCY        |    |
|     | C930        | VARCHAR2(1 char)  | 是否國外費用補收            |    |
|     | C931        | DATE              | 託收改押匯日              |    |
|     | C932        | VARCHAR2(20 char) | 交易型態說明              |    |
|     | C933        | VARCHAR2(1 char)  | 國外費用支付方式            |    |
|     | C934        | NUMBER(18, 0)      | 逾期息-FCY-ALL         |    |
|     | C935        | NUMBER(18, 0)      | 逾期息-TWD-ALL         |    |
|     | C936        | VARCHAR2(1 char)  | 買斷行                 |    |
|     | C937        | NUMBER(12, 6)      | 他行買斷融資利率報價          |    |
|     | C938        | NUMBER(12, 6)      | 他行買斷不融資手續費率         |    |
|     | C939        | NUMBER(18, 0)      | 本行加碼手續費             |    |
|     | C940        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C941        | NUMBER(18, 0)      | 預收國外費用              |    |
|     | C942        | VARCHAR2(20 char) | 額度預暫編號-FILEBAHP     |    |
|     | C943        | VARCHAR2(1 char)  | 圈存刪除FLAG            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |
