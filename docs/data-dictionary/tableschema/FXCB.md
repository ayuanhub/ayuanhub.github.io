---
sidebar_position: 27
title: 外匯系統-光票(FXCB)
---

### VW_ODS_D_FILE0CLE

#### 光票作業交易檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Release_Flag   |    |
|     | C2          | NUMBER(2, 0)       | 版次             |    |
|     | C3          | VARCHAR2(8 char)  | FUNKTION_ID    |    |
| PK  | C4          | VARCHAR2(16 char) | 交易編號           |    |
| PK  | C5          | NUMBER(1, 0)       | EVENT_NO       |    |
|     | C6          | VARCHAR2(1 char)  | 光票種類           |    |
|     | C7          | VARCHAR2(1 char)  | 光票交易性質         |    |
| PK  | C8          | VARCHAR2(4 char)  | 營業單位           |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位           |    |
|     | C10         | DATE              | 系統日            |    |
|     | C11         | DATE              | 光票託收日          |    |
|     | C12         | DATE              | 光票買入日          |    |
|     | C13         | DATE              | 預計對方入帳日        |    |
|     | C14         | DATE              | 存同入帳日          |    |
|     | C15         | DATE              | 入客戶帳戶日         |    |
|     | C16         | DATE              | 光票買入利息到期日      |    |
|     | C17         | DATE              | 退票日            |    |
|     | C18         | DATE              | 退票還款日          |    |
|     | C19         | VARCHAR2(40 char) | 退票附註           |    |
|     | C20         | VARCHAR2(12 char) | 核貸書號           |    |
|     | C21         | VARCHAR2(6 char)  | 申請人代號          |    |
|     | C22         | VARCHAR2(2 char)  | 台幣科目           |    |
|     | C23         | VARCHAR2(12 char) | 申請人台幣帳號        |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位      |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目        |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼      |    |
|     | C604        | VARCHAR2(1 char)  | 外幣帳號-檢號        |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要        |    |
|     | C25         | VARCHAR2(40 char) | 申請人名稱          |    |
|     | C26         | VARCHAR2(11 char) | 申請人ＩＤ          |    |
|     | C27         | VARCHAR2(40 char) | 申請人住址一         |    |
|     | C28         | VARCHAR2(40 char) | 申請人住址二         |    |
|     | C29         | VARCHAR2(40 char) | 申請人住址三         |    |
|     | C30         | DATE              | 申請人出生年月日       |    |
|     | C31         | VARCHAR2(1 char)  | 發票人身份別選項       |    |
|     | C32         | VARCHAR2(10 char) | 發票人身份別全文       |    |
|     | C33         | VARCHAR2(11 char) | 申請人電話號碼        |    |
|     | C34         | VARCHAR2(5 char)  | 託收銀行代號         |    |
|     | C35         | VARCHAR2(40 char) | 託收銀行名稱         |    |
|     | C36         | VARCHAR2(14 char) | 託收銀行SWIFT_CODE |    |
|     | C37         | VARCHAR2(40 char) | 託收銀行地址一        |    |
|     | C38         | VARCHAR2(40 char) | 託收銀行地址二        |    |
|     | C39         | VARCHAR2(40 char) | 託收銀行地址三        |    |
|     | C40         | VARCHAR2(5 char)  | 存匯銀行           |    |
|     | C41         | VARCHAR2(40 char) | 存匯銀行名稱         |    |
|     | C42         | VARCHAR2(14 char) | 存匯行SWIFT_CODE  |    |
|     | C43         | VARCHAR2(40 char) | 存匯銀行地址一        |    |
|     | C44         | VARCHAR2(40 char) | 存匯銀行地址二        |    |
|     | C45         | VARCHAR2(40 char) | 存匯銀行地址三        |    |
|     | C46         | VARCHAR2(60 char) | 發票人            |    |
|     | C47         | VARCHAR2(60 char) | 受票人            |    |
|     | C48         | VARCHAR2(2 char)  | 交易國別代碼         |    |
|     | C49         | VARCHAR2(40 char) | 交易國別           |    |
|     | C50         | VARCHAR2(40 char) | 付款人            |    |
|     | C51         | DATE              | 光票日期           |    |
|     | C52         | VARCHAR2(14 char) | 光票號碼           |    |
|     | C53         | VARCHAR2(3 char)  | 光票幣別           |    |
|     | C54         | NUMBER(18, 0)      | 光票金額           |    |
|     | C55         | VARCHAR2(40 char) | 金額大寫一          |    |
|     | C56         | VARCHAR2(40 char) | 金額大寫二          |    |
|     | C57         | VARCHAR2(40 char) | 金額大寫三          |    |
|     | C58         | VARCHAR2(40 char) | 託收銀行編號         |    |
|     | C59         | NUMBER(12, 6)      | 匯率上限           |    |
|     | C60         | NUMBER(12, 6)      | 匯率下限           |    |
|     | C61         | NUMBER(12, 6)      | 買入匯率           |    |
|     | C62         | NUMBER(12, 6)      | 賣出匯率           |    |
|     | C63         | NUMBER(12, 6)      | 成本匯率           |    |
|     | C64         | NUMBER(12, 6)      | 成交匯率           |    |
|     | C65         | NUMBER(12, 6)      | 現金買入賣出匯率       |    |
|     | C66         | NUMBER(12, 6)      | 交叉匯率           |    |
|     | C67         | NUMBER(12, 6)      | 成本利率           |    |
|     | C68         | NUMBER(12, 6)      | 成交利率           |    |
|     | C69         | VARCHAR2(3 char)  | USD            |    |
|     | C70         | VARCHAR2(1 char)  | 額度區分           |    |
|     | C71         | NUMBER(18, 0)      | 美金額度           |    |
|     | C72         | NUMBER(18, 0)      | 國外費用           |    |
|     | C73         | NUMBER(18, 0)      | 退票國外費用         |    |
|     | C74         | NUMBER(18, 0)      | NOSTRO_AMOUNT  |    |
|     | C75         | VARCHAR2(3 char)  | 光票分類號碼         |    |
|     | C76         | VARCHAR2(60 char) | 光票分類號碼全文       |    |
|     | C77         | NUMBER(18, 0)      | 存入外匯存款         |    |
|     | C78         | NUMBER(18, 0)      | 支付外幣現金         |    |
|     | C79         | NUMBER(18, 0)      | 支付旅行支票         |    |
|     | C80         | NUMBER(18, 0)      | 支付外幣貸款         |    |
|     | C81         | NUMBER(18, 0)      | 轉匯出金額          |    |
|     | C82         | NUMBER(18, 0)      | 償還外銷貸款         |    |
|     | C83         | NUMBER(18, 0)      | 預售遠匯款          |    |
|     | C84         | NUMBER(12, 6)      | 預售遠匯匯率         |    |
|     | C85         | VARCHAR2(16 char) | 遠匯契約號碼         |    |
|     | C86         | NUMBER(18, 0)      | 兌換遠匯           |    |
|     | C87         | NUMBER(18, 0)      | 其他             |    |
|     | C88         | VARCHAR2(1 char)  | 利息天數選項         |    |
|     | C89         | NUMBER(4, 0)       | 利息天數           |    |
|     | C90         | NUMBER(4, 0)       | 利息優惠天數         |    |
|     | C91         | NUMBER(4, 0)       | 利息補收天數         |    |
|     | C92         | NUMBER(12, 6)      | 標準利率           |    |
|     | C93         | NUMBER(18, 0)      | 利息             |    |
|     | C94         | NUMBER(18, 0)      | 託收手續費          |    |
|     | C95         | NUMBER(18, 0)      | 旅支手續費          |    |
|     | C96         | NUMBER(18, 0)      | 轉匯出手續費         |    |
|     | C97         | NUMBER(18, 0)      | 現鈔兌換差價         |    |
|     | C98         | NUMBER(18, 0)      | 標準手續費          |    |
|     | C99         | NUMBER(18, 0)      | 優惠手序費          |    |
|     | C100        | NUMBER(18, 0)      | 成交手續費          |    |
|     | C101        | NUMBER(18, 0)      | 轉匯出郵電費         |    |
|     | C102        | NUMBER(18, 0)      | 標準郵電費          |    |
|     | C103        | NUMBER(18, 0)      | 郵電費外幣          |    |
|     | C104        | NUMBER(18, 0)      | 其他費用           |    |
|     | C105        | NUMBER(18, 0)      | 總共費用           |    |
|     | C106        | NUMBER(1, 0)       | 手續費從本金扣        |    |
|     | C107        | VARCHAR2(1 char)  | 手續費繳費幣別選項      |    |
|     | C108        | VARCHAR2(3 char)  | 台幣幣別           |    |
|     | C109        | NUMBER(18, 0)      | 手續費兌換LCY       |    |
|     | C110        | NUMBER(18, 0)      | 手續費兌換FCY       |    |
|     | C111        | NUMBER(18, 0)      | 應收費用合計         |    |
|     | C112        | NUMBER(18, 0)      | 實收費用合計         |    |
|     | C113        | NUMBER(18, 0)      | 預繳外幣           |    |
|     | C114        | NUMBER(18, 0)      | 兌換FCY          |    |
|     | C115        | NUMBER(18, 0)      | 兌換LCY          |    |
|     | C116        | NUMBER(18, 0)      | 總兌換外幣          |    |
|     | C117        | NUMBER(18, 0)      | 總兌換台幣          |    |
|     | C118        | NUMBER(18, 0)      | 存入台幣帳款         |    |
|     | C119        | NUMBER(18, 0)      | 實付台幣           |    |
|     | C120        | NUMBER(18, 0)      | 支付淨額外幣         |    |
|     | C121        | NUMBER(18, 0)      | 支付淨額台幣         |    |
|     | C122        | DATE              | 刪除日期           |    |
|     | C123        | VARCHAR2(10 char) | USER_ID        |    |
|     | C124        | VARCHAR2(10 char) | 主管ID           |    |
|     | C125        | VARCHAR2(4 char)  | 手續費編碼          |    |
|     | C126        | NUMBER(12, 6)      | 手續費費率          |    |
|     | C127        | VARCHAR2(3 char)  | 手續費幣別          |    |
|     | C128        | NUMBER(18, 0)      | 手續費一次性收費       |    |
|     | C129        | NUMBER(18, 0)      | 手續費最高收費        |    |
|     | C130        | NUMBER(18, 0)      | 手續費最低收費        |    |
|     | C131        | VARCHAR2(1 char)  | 手續費收費方式        |    |
|     | C132        | NUMBER(12, 6)      | 手續費成交匯率        |    |
|     | C133        | VARCHAR2(3 char)  | 遠匯交割幣別         |    |
|     | C134        | NUMBER(18, 0)      | 應付遠匯           |    |
|     | C135        | VARCHAR2(13 char) | 遠匯交割帳號         |    |
|     | C136        | VARCHAR2(1 char)  | 遠匯交割帳號-支號      |    |
|     | C137        | NUMBER(18, 0)      | 各業務交割金額合計      |    |
|     | C138        | VARCHAR2(2 char)  | 業務代碼           |    |
|     | C139        | VARCHAR2(5 char)  | 主機連動代碼         |    |
|     | C140        | VARCHAR2(3 char)  | 額度類別           |    |
|     | C141        | VARCHAR2(16 char) | 外匯恢復KEY        |    |
|     | C142        | VARCHAR2(40 char) | 會計摘要二          |    |
|     | C143        | VARCHAR2(40 char) | 會計傳票摘要         |    |
|     | C144        | VARCHAR2(20 char) | 會計KEY          |    |
|     | C145        | NUMBER(5, 0)       | 會計傳票序號1        |    |
|     | C606        | VARCHAR2(20 char) | 電文1            |    |
|     | C607        | VARCHAR2(20 char) | 電文2            |    |
|     | C608        | VARCHAR2(20 char) | 電文3            |    |
|     | C609        | VARCHAR2(20 char) | 電文4            |    |
|     | C610        | VARCHAR2(20 char) | 電文5            |    |
|     | C611        | VARCHAR2(20 char) | 電文6            |    |
|     | C612        | VARCHAR2(20 char) | 電文7            |    |
|     | C147        | VARCHAR2(12 char) | 分行中文名稱         |    |
|     | C148        | NUMBER(12, 6)      | 議價匯率           |    |
|     | C149        | VARCHAR2(40 char) | 受益人中文名         |    |
|     | C150        | VARCHAR2(3 char)  | 額度幣別           |    |
|     | C151        | NUMBER(12, 6)      | 額度交叉匯率         |    |
|     | C152        | VARCHAR2(20 char) | 存同帳號           |    |
|     | C153        | VARCHAR2(2 char)  | 付款國別代碼         |    |
|     | C154        | VARCHAR2(40 char) | 付款國別           |    |
|     | C155        | VARCHAR2(3 char)  | 違約金幣別          |    |
|     | C156        | NUMBER(18, 0)      | 違約金金額          |    |
|     | C157        | NUMBER(18, 0)      | 外匯定存           |    |
|     | C158        | VARCHAR2(11 char) | 受款銀行SWIFT_CODE |    |
|     | C613        | VARCHAR2(1 char)  | 績效歸屬部別         |    |
|     | C614        | VARCHAR2(4 char)  | 績效歸屬單位         |    |
|     | C615        | VARCHAR2(7 char)  | 績效單位AO代碼       |    |
|     | C160        | VARCHAR2(4 char)  | 代理行            |    |
|     | C161        | VARCHAR2(4 char)  | 區域中心           |    |
|     | C162        | VARCHAR2(4 char)  | 代辦行            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FILECLE

#### 光票作業交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Release_Flag   |    |
|     | C2          | NUMBER(2, 0)       | 版次             |    |
|     | C3          | VARCHAR2(8 char)  | FUNKTION_ID    |    |
| PK  | C4          | VARCHAR2(16 char) | 交易編號           |    |
| PK  | C5          | NUMBER(1, 0)       | EVENT_NO       |    |
|     | C6          | VARCHAR2(1 char)  | 光票種類           |    |
|     | C7          | VARCHAR2(1 char)  | 光票交易性質         |    |
| PK  | C8          | VARCHAR2(4 char)  | 營業單位           |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位           |    |
|     | C10         | DATE              | 系統日            |    |
|     | C11         | DATE              | 光票託收日          |    |
|     | C12         | DATE              | 光票買入日          |    |
|     | C13         | DATE              | 預計對方入帳日        |    |
|     | C14         | DATE              | 存同入帳日          |    |
|     | C15         | DATE              | 入客戶帳戶日         |    |
|     | C16         | DATE              | 光票買入利息到期日      |    |
|     | C17         | DATE              | 退票日            |    |
|     | C18         | DATE              | 退票還款日          |    |
|     | C19         | VARCHAR2(40 char) | 退票附註           |    |
|     | C20         | VARCHAR2(12 char) | 核貸書號           |    |
|     | C21         | VARCHAR2(6 char)  | 申請人代號          |    |
|     | C22         | VARCHAR2(2 char)  | 台幣科目           |    |
|     | C23         | VARCHAR2(13 char) | 申請人台幣帳號        |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位      |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目        |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼      |    |
|     | C604        | VARCHAR2(1 char)  | 外幣帳號-檢號        |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要        |    |
|     | C25         | VARCHAR2(40 char) | 申請人名稱          |    |
|     | C26         | VARCHAR2(11 char) | 申請人ＩＤ          |    |
|     | C27         | VARCHAR2(40 char) | 申請人住址一         |    |
|     | C28         | VARCHAR2(40 char) | 申請人住址二         |    |
|     | C29         | VARCHAR2(40 char) | 申請人住址三         |    |
|     | C30         | DATE              | 申請人出生年月日       |    |
|     | C31         | VARCHAR2(1 char)  | 發票人身份別選項       |    |
|     | C32         | VARCHAR2(10 char) | 發票人身份別全文       |    |
|     | C33         | VARCHAR2(11 char) | 申請人電話號碼        |    |
|     | C34         | VARCHAR2(5 char)  | 託收銀行代號         |    |
|     | C35         | VARCHAR2(40 char) | 託收銀行名稱         |    |
|     | C36         | VARCHAR2(14 char) | 託收銀行SWIFT_CODE |    |
|     | C37         | VARCHAR2(40 char) | 託收銀行地址一        |    |
|     | C38         | VARCHAR2(40 char) | 託收銀行地址二        |    |
|     | C39         | VARCHAR2(40 char) | 託收銀行地址三        |    |
|     | C40         | VARCHAR2(5 char)  | 存匯銀行           |    |
|     | C41         | VARCHAR2(40 char) | 存匯銀行名稱         |    |
|     | C42         | VARCHAR2(14 char) | 存匯行SWIFT_CODE  |    |
|     | C43         | VARCHAR2(40 char) | 存匯銀行地址一        |    |
|     | C44         | VARCHAR2(40 char) | 存匯銀行地址二        |    |
|     | C45         | VARCHAR2(40 char) | 存匯銀行地址三        |    |
|     | C46         | VARCHAR2(60 char) | 發票人            |    |
|     | C47         | VARCHAR2(60 char) | 受票人            |    |
|     | C48         | VARCHAR2(2 char)  | 交易國別代碼         |    |
|     | C49         | VARCHAR2(40 char) | 交易國別           |    |
|     | C50         | VARCHAR2(40 char) | 付款人            |    |
|     | C51         | DATE              | 光票日期           |    |
|     | C52         | VARCHAR2(14 char) | 光票號碼           |    |
|     | C53         | VARCHAR2(3 char)  | 光票幣別           |    |
|     | C54         | NUMBER(18, 0)      | 光票金額           |    |
|     | C55         | VARCHAR2(40 char) | 金額大寫一          |    |
|     | C56         | VARCHAR2(40 char) | 金額大寫二          |    |
|     | C57         | VARCHAR2(40 char) | 金額大寫三          |    |
|     | C58         | VARCHAR2(40 char) | 託收銀行編號         |    |
|     | C59         | NUMBER(12, 6)      | 匯率上限           |    |
|     | C60         | NUMBER(12, 6)      | 匯率下限           |    |
|     | C61         | NUMBER(12, 6)      | 買入匯率           |    |
|     | C62         | NUMBER(12, 6)      | 賣出匯率           |    |
|     | C63         | NUMBER(12, 6)      | 成本匯率           |    |
|     | C64         | NUMBER(12, 6)      | 成交匯率           |    |
|     | C65         | NUMBER(12, 6)      | 現金買入賣出匯率       |    |
|     | C66         | NUMBER(12, 6)      | 交叉匯率           |    |
|     | C67         | NUMBER(12, 6)      | 成本利率           |    |
|     | C68         | NUMBER(12, 6)      | 成交利率           |    |
|     | C69         | VARCHAR2(3 char)  | USD            |    |
|     | C70         | VARCHAR2(1 char)  | 額度區分           |    |
|     | C71         | NUMBER(18, 0)      | 美金額度           |    |
|     | C72         | NUMBER(18, 0)      | 國外費用           |    |
|     | C73         | NUMBER(18, 0)      | 退票國外費用         |    |
|     | C74         | NUMBER(18, 0)      | NOSTRO_AMOUNT  |    |
|     | C75         | VARCHAR2(3 char)  | 光票分類號碼         |    |
|     | C76         | VARCHAR2(60 char) | 光票分類號碼全文       |    |
|     | C77         | NUMBER(18, 0)      | 存入外匯存款         |    |
|     | C78         | NUMBER(18, 0)      | 支付外幣現金         |    |
|     | C79         | NUMBER(18, 0)      | 支付旅行支票         |    |
|     | C80         | NUMBER(18, 0)      | 支付外幣貸款         |    |
|     | C81         | NUMBER(18, 0)      | 轉匯出金額          |    |
|     | C82         | NUMBER(18, 0)      | 償還外銷貸款         |    |
|     | C83         | NUMBER(18, 0)      | 預售遠匯款          |    |
|     | C84         | NUMBER(12, 6)      | 預售遠匯匯率         |    |
|     | C85         | VARCHAR2(16 char) | 遠匯契約號碼         |    |
|     | C86         | NUMBER(18, 0)      | 兌換遠匯           |    |
|     | C87         | NUMBER(18, 0)      | 其他             |    |
|     | C88         | VARCHAR2(1 char)  | 利息天數選項         |    |
|     | C89         | NUMBER(4, 0)       | 利息天數           |    |
|     | C90         | NUMBER(4, 0)       | 利息優惠天數         |    |
|     | C91         | NUMBER(4, 0)       | 利息補收天數         |    |
|     | C92         | NUMBER(12, 6)      | 標準利率           |    |
|     | C93         | NUMBER(18, 0)      | 利息             |    |
|     | C94         | NUMBER(18, 0)      | 託收手續費          |    |
|     | C95         | NUMBER(18, 0)      | 旅支手續費          |    |
|     | C96         | NUMBER(18, 0)      | 轉匯出手續費         |    |
|     | C97         | NUMBER(18, 0)      | 現鈔兌換差價         |    |
|     | C98         | NUMBER(18, 0)      | 標準手續費          |    |
|     | C99         | NUMBER(18, 0)      | 優惠手序費          |    |
|     | C100        | NUMBER(18, 0)      | 成交手續費          |    |
|     | C101        | NUMBER(18, 0)      | 轉匯出郵電費         |    |
|     | C102        | NUMBER(18, 0)      | 標準郵電費          |    |
|     | C103        | NUMBER(18, 0)      | 郵電費外幣          |    |
|     | C104        | NUMBER(18, 0)      | 其他費用           |    |
|     | C105        | NUMBER(18, 0)      | 總共費用           |    |
|     | C106        | NUMBER(1, 0)       | 手續費從本金扣        |    |
|     | C107        | VARCHAR2(1 char)  | 手續費繳費幣別選項      |    |
|     | C108        | VARCHAR2(3 char)  | 台幣幣別           |    |
|     | C109        | NUMBER(18, 0)      | 手續費兌換LCY       |    |
|     | C110        | NUMBER(18, 0)      | 手續費兌換FCY       |    |
|     | C111        | NUMBER(18, 0)      | 應收費用合計         |    |
|     | C112        | NUMBER(18, 0)      | 實收費用合計         |    |
|     | C113        | NUMBER(18, 0)      | 預繳外幣           |    |
|     | C114        | NUMBER(18, 0)      | 兌換FCY          |    |
|     | C115        | NUMBER(18, 0)      | 兌換LCY          |    |
|     | C116        | NUMBER(18, 0)      | 總兌換外幣          |    |
|     | C117        | NUMBER(18, 0)      | 總兌換台幣          |    |
|     | C118        | NUMBER(18, 0)      | 存入台幣帳款         |    |
|     | C119        | NUMBER(18, 0)      | 實付台幣           |    |
|     | C120        | NUMBER(18, 0)      | 支付淨額外幣         |    |
|     | C121        | NUMBER(18, 0)      | 支付淨額台幣         |    |
|     | C122        | DATE              | 刪除日期           |    |
|     | C123        | VARCHAR2(10 char) | USER_ID        |    |
|     | C124        | VARCHAR2(10 char) | 主管ID           |    |
|     | C125        | VARCHAR2(4 char)  | 手續費編碼          |    |
|     | C126        | NUMBER(12, 6)      | 手續費費率          |    |
|     | C127        | VARCHAR2(3 char)  | 手續費幣別          |    |
|     | C128        | NUMBER(18, 0)      | 手續費一次性收費       |    |
|     | C129        | NUMBER(18, 0)      | 手續費最高收費        |    |
|     | C130        | NUMBER(18, 0)      | 手續費最低收費        |    |
|     | C131        | VARCHAR2(1 char)  | 手續費收費方式        |    |
|     | C132        | NUMBER(12, 6)      | 手續費成交匯率        |    |
|     | C133        | VARCHAR2(3 char)  | 遠匯交割幣別         |    |
|     | C134        | NUMBER(18, 0)      | 應付遠匯           |    |
|     | C135        | VARCHAR2(13 char) | 遠匯交割帳號         |    |
|     | C136        | VARCHAR2(1 char)  | 遠匯交割帳號-支號      |    |
|     | C137        | NUMBER(18, 0)      | 各業務交割金額合計      |    |
|     | C138        | VARCHAR2(2 char)  | 業務代碼           |    |
|     | C139        | VARCHAR2(5 char)  | 主機連動代碼         |    |
|     | C140        | VARCHAR2(3 char)  | 額度類別           |    |
|     | C141        | VARCHAR2(16 char) | 外匯恢復KEY        |    |
|     | C142        | VARCHAR2(40 char) | 會計摘要二          |    |
|     | C143        | VARCHAR2(40 char) | 會計傳票摘要         |    |
|     | C144        | VARCHAR2(20 char) | 會計KEY          |    |
|     | C145        | NUMBER(5, 0)       | 會計傳票序號1        |    |
|     | C606        | VARCHAR2(18 char) | 電文1            |    |
|     | C607        | VARCHAR2(18 char) | 電文2            |    |
|     | C608        | VARCHAR2(18 char) | 電文3            |    |
|     | C609        | VARCHAR2(18 char) | 電文4            |    |
|     | C610        | VARCHAR2(18 char) | 電文5            |    |
|     | C611        | VARCHAR2(18 char) | 電文6            |    |
|     | C612        | VARCHAR2(18 char) | 電文7            |    |
|     | C147        | VARCHAR2(12 char) | 分行中文名稱         |    |
|     | C148        | NUMBER(12, 6)      | 議價匯率           |    |
|     | C149        | VARCHAR2(40 char) | 受益人中文名         |    |
|     | C150        | VARCHAR2(3 char)  | 額度幣別           |    |
|     | C151        | NUMBER(12, 6)      | 額度交叉匯率         |    |
|     | C152        | VARCHAR2(20 char) | 存同帳號           |    |
|     | C153        | VARCHAR2(2 char)  | 付款國別代碼         |    |
|     | C154        | VARCHAR2(40 char) | 付款國別           |    |
|     | C155        | VARCHAR2(3 char)  | 違約金幣別          |    |
|     | C156        | NUMBER(18, 0)      | 違約金金額          |    |
|     | C157        | NUMBER(18, 0)      | 外匯定存           |    |
|     | C158        | VARCHAR2(11 char) | 受款銀行SWIFT_CODE |    |
|     | C613        | VARCHAR2(1 char)  | 績效歸屬部別         |    |
|     | C614        | VARCHAR2(4 char)  | 績效歸屬單位         |    |
|     | C615        | VARCHAR2(7 char)  | 績效單位AO代碼       |    |
|     | C160        | VARCHAR2(4 char)  | 區域中心           |    |
|     | C161        | VARCHAR2(13 char) | 台幣扣款帳號         |    |
|     | C162        | NUMBER(18, 0)      | 連動台幣扣款金額       |    |
|     | C163        | VARCHAR2(4 char)  | 代理行            |    |
|     | C616        | VARCHAR2(1 char)  | 議價處理區分         |    |
|     | C617        | VARCHAR2(6 char)  | 議價編號           |    |
|     | C618        | VARCHAR2(1 char)  | 買賣區分           |    |
|     | C619        | VARCHAR2(3 char)  | 議價幣別           |    |
|     | C620        | NUMBER(18, 0)      | 議價成交金額         |    |
|     | C165        | VARCHAR2(4 char)  | 議價編號_利率        |    |
|     | C166        | VARCHAR2(4 char)  | 代辦行            |    |
|     | C167        | VARCHAR2(1 char)  | 國外匯款人身分別       |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |
