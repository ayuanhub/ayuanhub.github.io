---
sidebar_position: 34
title: 外匯系統-匯款(FXRM)
---

### VW_ODS_D_FILE0INE

#### 匯入匯款交易檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | ReleaseFlag         |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | FUNKTIONID          |    |
|     | C4          | VARCHAR2(16 char) | 匯入匯款交易編號            |    |
|     | C5          | NUMBER(1, 0)       | EVENTNO             |    |
|     | C6          | VARCHAR2(1 char)  | 匯入匯款方式              |    |
|     | C7          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C8          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C9          | DATE              | 系統日                 |    |
|     | C10         | DATE              | 國外入帳日               |    |
|     | C11         | DATE              | 通知日                 |    |
|     | C12         | VARCHAR2(20 char) | 通知日全文               |    |
|     | C13         | DATE              | 解匯日                 |    |
|     | C14         | DATE              | 止付日                 |    |
|     | C15         | DATE              | 解除止付日               |    |
|     | C16         | DATE              | 退匯日                 |    |
|     | C17         | DATE              | 匯款修改日               |    |
|     | C18         | VARCHAR2(6 char)  | 受款人代號               |    |
|     | C19         | VARCHAR2(2 char)  | 台幣科目                |    |
|     | C20         | VARCHAR2(13 char) | 受款人台幣帳號             |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C22         | VARCHAR2(40 char) | 受款人欄位1              |    |
|     | C23         | VARCHAR2(11 char) | 受款人ＩＤ               |    |
|     | C24         | VARCHAR2(40 char) | 受款人欄位2              |    |
|     | C25         | VARCHAR2(40 char) | 受益人欄位3              |    |
|     | C26         | VARCHAR2(40 char) | 受益人欄位4              |    |
|     | C27         | DATE              | 受益人出生年月日            |    |
|     | C28         | VARCHAR2(1 char)  | 匯款人行業別選項            |    |
|     | C29         | VARCHAR2(20 char) | 匯款人行業別全文            |    |
|     | C30         | VARCHAR2(11 char) | 受益人電話號碼             |    |
|     | C31         | VARCHAR2(4 char)  | 分行別                 |    |
|     | C32         | VARCHAR2(14 char) | 受益人SWIFTCODE        |    |
|     | C33         | VARCHAR2(40 char) | 受款人銀行名稱             |    |
|     | C34         | VARCHAR2(40 char) | 受款人銀行地址一            |    |
|     | C35         | VARCHAR2(40 char) | 受款人銀行地址二            |    |
|     | C36         | VARCHAR2(40 char) | 受款人銀行地址三            |    |
|     | C37         | VARCHAR2(5 char)  | 匯款銀行代號              |    |
|     | C38         | VARCHAR2(40 char) | 匯款銀行名稱              |    |
|     | C39         | VARCHAR2(40 char) | 匯款銀行地址一             |    |
|     | C40         | VARCHAR2(40 char) | 匯款銀行地址二             |    |
|     | C41         | VARCHAR2(40 char) | 匯款銀行地址三             |    |
|     | C42         | VARCHAR2(16 char) | 匯款銀行編號              |    |
|     | C43         | VARCHAR2(40 char) | 匯款人姓名               |    |
|     | C44         | VARCHAR2(40 char) | 匯款人住址一              |    |
|     | C45         | VARCHAR2(40 char) | 匯款人住址二              |    |
|     | C46         | VARCHAR2(40 char) | 匯款人住址三              |    |
|     | C47         | VARCHAR2(40 char) | 匯款人國別               |    |
|     | C48         | VARCHAR2(5 char)  | 原匯款銀行代號             |    |
|     | C49         | VARCHAR2(40 char) | 原匯款銀行               |    |
|     | C50         | VARCHAR2(5 char)  | 存匯銀行                |    |
|     | C51         | VARCHAR2(40 char) | 存匯銀行名稱              |    |
|     | C52         | VARCHAR2(40 char) | 存匯銀行地址一             |    |
|     | C53         | VARCHAR2(40 char) | 存匯銀行地址二             |    |
|     | C54         | VARCHAR2(40 char) | 存匯銀行地址三             |    |
|     | C55         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C56         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C57         | VARCHAR2(40 char) | 金額大寫一               |    |
|     | C58         | VARCHAR2(40 char) | 金額大寫二               |    |
|     | C59         | VARCHAR2(40 char) | 金額大寫三               |    |
|     | C60         | VARCHAR2(40 char) | 金額大寫四               |    |
|     | C606        | VARCHAR2(1 char)  | 台幣結購FLAG            |    |
|     | C607        | VARCHAR2(3 char)  | 求償幣別                |    |
|     | C608        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C609        | NUMBER(12, 6)      | 客戶匯率                |    |
|     | C610        | NUMBER(12, 6)      | 成本利率                |    |
|     | C611        | NUMBER(12, 6)      | 客戶利率                |    |
|     | C612        | NUMBER(18, 0)      | 等值外幣                |    |
|     | C613        | NUMBER(18, 0)      | 電報費                 |    |
|     | C614        | NUMBER(18, 0)      | 手續費                 |    |
|     | C615        | NUMBER(18, 0)      | 手續費外幣               |    |
|     | C616        | NUMBER(18, 0)      | 求償總額                |    |
|     | C62         | NUMBER(18, 0)      | PrvOutstanding      |    |
|     | C63         | NUMBER(18, 0)      | 增加金額                |    |
|     | C64         | NUMBER(18, 0)      | 減少金額                |    |
|     | C65         | NUMBER(18, 0)      | RemitCreditAmt      |    |
|     | C66         | NUMBER(18, 0)      | NewOutstanding      |    |
|     | C67         | NUMBER(12, 6)      | 匯率上限                |    |
|     | C68         | NUMBER(12, 6)      | 匯率下限                |    |
|     | C69         | NUMBER(12, 6)      | 買入匯率                |    |
|     | C70         | NUMBER(12, 6)      | 賣出匯率                |    |
|     | C71         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C72         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C73         | NUMBER(12, 6)      | 現金賣出匯率              |    |
|     | C74         | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C75         | VARCHAR2(20 char) | 國外匯款人國別             |    |
|     | C617        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C618        | VARCHAR2(60 char) | 匯款分類全文              |    |
|     | C619        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C620        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C621        | VARCHAR2(60 char) | 匯款分類全文1             |    |
|     | C622        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C623        | VARCHAR2(3 char)  | 匯款分類號碼2             |    |
|     | C624        | VARCHAR2(60 char) | 匯款分類號碼全文2           |    |
|     | C625        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C77         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C78         | VARCHAR2(13 char) | 受款人外存帳號             |    |
|     | C79         | VARCHAR2(1 char)  | 存入外存帳號-支號           |    |
|     | C80         | NUMBER(18, 0)      | 支付外幣現金              |    |
|     | C81         | NUMBER(18, 0)      | 支付旅行支票              |    |
|     | C82         | NUMBER(18, 0)      | 支付外幣貸款              |    |
|     | C83         | NUMBER(18, 0)      | 轉匯出金額               |    |
|     | C84         | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C85         | NUMBER(18, 0)      | 預售遠匯款               |    |
|     | C86         | NUMBER(12, 6)      | 預售遠匯匯率              |    |
|     | C87         | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C88         | NUMBER(18, 0)      | 其他                  |    |
|     | C89         | NUMBER(18, 0)      | 標準手續費               |    |
|     | C90         | NUMBER(18, 0)      | 優惠手續費               |    |
|     | C91         | NUMBER(18, 0)      | 成交手續費               |    |
|     | C92         | NUMBER(18, 0)      | 郵電費                 |    |
|     | C93         | NUMBER(18, 0)      | 郵電費外幣               |    |
|     | C94         | NUMBER(18, 0)      | 退匯金額                |    |
|     | C95         | NUMBER(18, 0)      | 其他費用                |    |
|     | C96         | NUMBER(18, 0)      | 總共費用                |    |
|     | C97         | VARCHAR2(1 char)  | 手續費從本金扣             |    |
|     | C98         | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C99         | NUMBER(18, 0)      | 手續費兌換LCY            |    |
|     | C100        | NUMBER(18, 0)      | 手續費兌換FCY            |    |
|     | C101        | NUMBER(18, 0)      | 應收手續費               |    |
|     | C102        | NUMBER(18, 0)      | 實收手續費               |    |
|     | C103        | NUMBER(18, 0)      | 兌換FCY               |    |
|     | C104        | NUMBER(18, 0)      | 兌換LCY               |    |
|     | C105        | NUMBER(18, 0)      | 總兌換外幣               |    |
|     | C106        | NUMBER(18, 0)      | 總兌換台幣               |    |
|     | C107        | NUMBER(18, 0)      | 支付淨額外幣              |    |
|     | C108        | NUMBER(18, 0)      | 支付淨額台幣              |    |
|     | C109        | DATE              | 刪除日期                |    |
|     | C110        | VARCHAR2(10 char) | USERID              |    |
|     | C111        | VARCHAR2(10 char) | 主管ID                |    |
|     | C112        | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C113        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C114        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C115        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C116        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C117        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C118        | VARCHAR2(5 char)  | 主機連動代碼              |    |
|     | C119        | VARCHAR2(40 char) | 會計傳票摘要              |    |
|     | C120        | VARCHAR2(20 char) | 會計KEY               |    |
|     | C121        | NUMBER(5, 0)       | 會計傳票序號1             |    |
|     | C626        | VARCHAR2(20 char) | 電文1                 |    |
|     | C627        | VARCHAR2(20 char) | 電文2                 |    |
|     | C628        | VARCHAR2(20 char) | 電文3                 |    |
|     | C629        | VARCHAR2(20 char) | 電文4                 |    |
|     | C630        | VARCHAR2(20 char) | 電文5                 |    |
|     | C631        | VARCHAR2(20 char) | 電文6                 |    |
|     | C632        | VARCHAR2(20 char) | 電文7                 |    |
|     | C123        | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C124        | VARCHAR2(14 char) | 匯款行SWIFTCODE        |    |
|     | C125        | VARCHAR2(14 char) | 交易參考編號(電文)          |    |
|     | C126        | VARCHAR2(14 char) | 原匯行SWIFTCODE        |    |
|     | C127        | VARCHAR2(40 char) | 客戶備註1               |    |
|     | C128        | VARCHAR2(40 char) | 客戶備註2               |    |
|     | C129        | VARCHAR2(40 char) | 客戶備註3               |    |
|     | C130        | VARCHAR2(16 char) | 遠匯契約號碼              |    |
|     | C131        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C132        | NUMBER(18, 0)      | 匯入手續費               |    |
|     | C133        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C134        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C135        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C136        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C137        | NUMBER(18, 0)      | 實付台幣                |    |
|     | C138        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C139        | NUMBER(18, 0)      | 手續費一次性收費額           |    |
|     | C140        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C141        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C142        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C143        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C144        | NUMBER(12, 6)      | 客戶額度利率              |    |
|     | C145        | VARCHAR2(3 char)  | 費率幣別                |    |
|     | C146        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C147        | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C148        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C149        | VARCHAR2(20 char) | 營業單位中文名             |    |
|     | C150        | VARCHAR2(5 char)  | VALUE-DATE-NOTE1    |    |
|     | C151        | VARCHAR2(1 char)  | WK-FIELD            |    |
|     | C152        | VARCHAR2(5 char)  | WK-FIELD2           |    |
|     | C153        | DATE              | 匯款起始日               |    |
|     | C154        | DATE              | 匯款訖日                |    |
|     | C155        | VARCHAR2(2 char)  | WK-FIELD3           |    |
|     | C156        | VARCHAR2(40 char) | 退匯理由                |    |
|     | C157        | VARCHAR2(40 char) | 退匯理由1               |    |
|     | C158        | NUMBER(18, 0)      | 解付(現金)              |    |
|     | C159        | NUMBER(18, 0)      | 解付(其他)              |    |
|     | C160        | VARCHAR2(1 char)  | WK-FIELD3           |    |
|     | C161        | NUMBER(2, 0)       | 修改次數                |    |
|     | C162        | VARCHAR2(40 char) | 受款人中文名              |    |
|     | C163        | VARCHAR2(13 char) | 受款人帳號               |    |
|     | C164        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C165        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C166        | NUMBER(18, 0)      | 違約金金額               |    |
|     | C633        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C634        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C635        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C168        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C169        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C170        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C171        | VARCHAR2(40 char) | 受款人欄位5              |    |
|     | C636        | VARCHAR2(1 char)  | 議價處理區分              |    |
|     | C637        | VARCHAR2(6 char)  | 議價編號                |    |
|     | C638        | VARCHAR2(1 char)  | 買賣區分                |    |
|     | C639        | VARCHAR2(3 char)  | 議價幣別                |    |
|     | C640        | NUMBER(18, 0)      | 議價成交金額              |    |
|     | C641        | VARCHAR2(16 char) | 虛擬帳號                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0INM

#### 匯入匯款主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | HOLDMARK            |    |
| PK  | C2          | VARCHAR2(16 char) | 匯入匯款交易編號            |    |
|     | C3          | NUMBER(1, 0)       | EVENTNO             |    |
|     | C4          | VARCHAR2(1 char)  | 匯入匯款方式              |    |
|     | C5          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C6          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C7          | DATE              | 系統日                 |    |
|     | C8          | DATE              | 國外入帳日               |    |
|     | C9          | DATE              | 通知日                 |    |
|     | C10         | DATE              | 解匯日                 |    |
|     | C11         | DATE              | 止付日                 |    |
|     | C12         | DATE              | 解除止付日               |    |
|     | C13         | DATE              | 退匯日                 |    |
|     | C14         | DATE              | 匯款修改日               |    |
|     | C15         | VARCHAR2(6 char)  | 受款人代號               |    |
|     | C16         | VARCHAR2(2 char)  | 台幣科目                |    |
|     | C17         | VARCHAR2(12 char) | 受款人台幣帳號             |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C19         | VARCHAR2(40 char) | 受款人名稱               |    |
|     | C20         | VARCHAR2(11 char) | 受款人ＩＤ               |    |
|     | C21         | VARCHAR2(40 char) | 受款人住址一              |    |
|     | C22         | VARCHAR2(40 char) | 受款人住址二              |    |
|     | C23         | VARCHAR2(40 char) | 受款人住址三              |    |
|     | C24         | VARCHAR2(11 char) | 受款人電話號碼             |    |
|     | C25         | DATE              | 受款人生日               |    |
|     | C26         | VARCHAR2(1 char)  | 匯款人身份別選項            |    |
|     | C27         | VARCHAR2(20 char) | 匯款人身份別全文            |    |
|     | C28         | VARCHAR2(4 char)  | 分行別                 |    |
|     | C29         | VARCHAR2(40 char) | 受款人銀行名稱             |    |
|     | C30         | VARCHAR2(40 char) | 受款人銀行地址一            |    |
|     | C31         | VARCHAR2(40 char) | 受款人銀行地址二            |    |
|     | C32         | VARCHAR2(40 char) | 受款人銀行地址三            |    |
|     | C33         | VARCHAR2(5 char)  | 匯款銀行代號              |    |
|     | C34         | VARCHAR2(40 char) | 匯款銀行名稱              |    |
|     | C35         | VARCHAR2(40 char) | 匯款銀行地址一             |    |
|     | C36         | VARCHAR2(40 char) | 匯款銀行地址二             |    |
|     | C37         | VARCHAR2(40 char) | 匯款銀行地址三             |    |
|     | C38         | VARCHAR2(16 char) | 匯款銀行編號              |    |
|     | C39         | VARCHAR2(40 char) | 匯款人姓名               |    |
|     | C40         | VARCHAR2(40 char) | 匯款人住址一              |    |
|     | C41         | VARCHAR2(40 char) | 匯款人住址二              |    |
|     | C42         | VARCHAR2(40 char) | 匯款人住址三              |    |
|     | C43         | VARCHAR2(40 char) | 匯款人國別               |    |
|     | C44         | VARCHAR2(5 char)  | 原匯款銀行代號             |    |
|     | C45         | VARCHAR2(40 char) | 原匯款銀行               |    |
|     | C46         | VARCHAR2(5 char)  | 存匯銀行                |    |
|     | C47         | VARCHAR2(40 char) | 存匯銀行名稱              |    |
|     | C48         | VARCHAR2(40 char) | 存匯銀行地址一             |    |
|     | C49         | VARCHAR2(40 char) | 存匯銀行地址二             |    |
|     | C50         | VARCHAR2(40 char) | 存匯銀行地址三             |    |
|     | C51         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C52         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C53         | VARCHAR2(40 char) | 金額大寫一               |    |
|     | C54         | VARCHAR2(40 char) | 金額大寫二               |    |
|     | C55         | VARCHAR2(40 char) | 金額大寫三               |    |
|     | C56         | VARCHAR2(40 char) | 金額大寫四               |    |
|     | C606        | VARCHAR2(1 char)  | 台幣結購FLAG            |    |
|     | C607        | VARCHAR2(3 char)  | 求償幣別                |    |
|     | C608        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C609        | NUMBER(12, 6)      | 客戶匯率                |    |
|     | C610        | NUMBER(12, 6)      | 成本利率                |    |
|     | C611        | NUMBER(12, 6)      | 客戶利率                |    |
|     | C612        | NUMBER(18, 0)      | 等值外幣                |    |
|     | C613        | NUMBER(18, 0)      | 電報費                 |    |
|     | C614        | NUMBER(18, 0)      | 手續費                 |    |
|     | C615        | NUMBER(18, 0)      | 手續費外幣               |    |
|     | C616        | NUMBER(18, 0)      | 求償總額                |    |
|     | C58         | NUMBER(18, 0)      | PrvOutstanding      |    |
|     | C59         | NUMBER(18, 0)      | 增加金額                |    |
|     | C60         | NUMBER(18, 0)      | 減少金額                |    |
|     | C61         | NUMBER(18, 0)      | RemitCreditAmt      |    |
|     | C62         | NUMBER(18, 0)      | NewOutstanding      |    |
|     | C63         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C64         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C65         | NUMBER(12, 6)      | 現金賣出匯率              |    |
|     | C66         | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C67         | VARCHAR2(20 char) | 國外匯款人國別             |    |
|     | C617        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C618        | NUMBER(18, 0)      | 匯款金額                |    |
|     | C619        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C620        | NUMBER(18, 0)      | 匯款金額1               |    |
|     | C621        | VARCHAR2(3 char)  | 匯款分類號2              |    |
|     | C622        | NUMBER(18, 0)      | 匯款金額2               |    |
|     | C69         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C70         | VARCHAR2(13 char) | 受款人外幣帳號             |    |
|     | C71         | VARCHAR2(1 char)  | 存人外存外幣帳號-支號         |    |
|     | C72         | NUMBER(18, 0)      | 支付外幣現金              |    |
|     | C73         | NUMBER(18, 0)      | 支付旅行支票              |    |
|     | C74         | NUMBER(18, 0)      | 支付外幣貸款              |    |
|     | C75         | NUMBER(18, 0)      | 轉匯出金額               |    |
|     | C76         | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C77         | NUMBER(18, 0)      | 預售遠匯款               |    |
|     | C78         | NUMBER(12, 6)      | 預售遠匯匯率              |    |
|     | C79         | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C80         | NUMBER(18, 0)      | 其他                  |    |
|     | C81         | NUMBER(18, 0)      | 標準手續費               |    |
|     | C82         | NUMBER(18, 0)      | 成交手續費               |    |
|     | C83         | NUMBER(18, 0)      | 郵電費                 |    |
|     | C84         | NUMBER(18, 0)      | 郵電費外幣               |    |
|     | C85         | NUMBER(18, 0)      | 退匯金額                |    |
|     | C86         | NUMBER(18, 0)      | 其他費用                |    |
|     | C87         | NUMBER(18, 0)      | 總共費用                |    |
|     | C88         | VARCHAR2(1 char)  | 手續費從本金扣             |    |
|     | C89         | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C90         | NUMBER(18, 0)      | 手續費兌換LCY            |    |
|     | C91         | NUMBER(18, 0)      | 手續費兌換FCY            |    |
|     | C92         | NUMBER(18, 0)      | 應收手續費               |    |
|     | C93         | NUMBER(18, 0)      | 實收手續費               |    |
|     | C94         | NUMBER(18, 0)      | 兌換FCY               |    |
|     | C95         | NUMBER(18, 0)      | 兌換LCY               |    |
|     | C96         | NUMBER(18, 0)      | 總兌換外幣               |    |
|     | C97         | NUMBER(18, 0)      | 總兌換台幣               |    |
|     | C98         | NUMBER(18, 0)      | 支付淨額外幣              |    |
|     | C99         | NUMBER(18, 0)      | 支付淨額台幣              |    |
|     | C100        | DATE              | 刪除日期                |    |
|     | C101        | VARCHAR2(10 char) | USERID              |    |
|     | C102        | VARCHAR2(10 char) | 主管ID                |    |
|     | C103        | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C104        | VARCHAR2(14 char) | 匯款行SWIFTCODE        |    |
|     | C105        | VARCHAR2(14 char) | 原匯行SWIFTCODE        |    |
|     | C106        | VARCHAR2(14 char) | 交易參考編號(電文)          |    |
|     | C107        | VARCHAR2(40 char) | 客戶備註1               |    |
|     | C108        | VARCHAR2(40 char) | 客戶備註2               |    |
|     | C109        | VARCHAR2(40 char) | 客戶備註3               |    |
|     | C110        | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C111        | VARCHAR2(16 char) | 遠匯契約號碼              |    |
|     | C112        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C113        | NUMBER(18, 0)      | 匯入手續費               |    |
|     | C114        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C115        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C116        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C117        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C118        | NUMBER(18, 0)      | 實付台幣                |    |
|     | C119        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C120        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C121        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C122        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C123        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C124        | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C125        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C126        | VARCHAR2(20 char) | 營業單位中文名             |    |
|     | C127        | VARCHAR2(40 char) | 退匯理由                |    |
|     | C128        | VARCHAR2(40 char) | 退匯理由1               |    |
|     | C129        | NUMBER(18, 0)      | 解付(現金)              |    |
|     | C130        | NUMBER(18, 0)      | 解付(其他)              |    |
|     | C131        | NUMBER(2, 0)       | 修改次數                |    |
|     | C132        | VARCHAR2(40 char) | 受款人中文名              |    |
|     | C133        | VARCHAR2(13 char) | 受款人帳號               |    |
|     | C134        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C135        | VARCHAR2(3 char)  | 幣別TEMP              |    |
|     | C136        | NUMBER(18, 0)      | 金額TEMP              |    |
|     | C137        | VARCHAR2(1 char)  | 台幣匯款FLAG            |    |
|     | C623        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C624        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C625        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C139        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C140        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C141        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C142        | VARCHAR2(40 char) | 受款人名稱2              |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0NLN

#### 匯入還款補登錄交易檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(30 char) | 營業單位中文名稱            |    |
|     | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | DATE              | 交易日期                |    |
|     | C5          | VARCHAR2(3 char)  | 交易幣別                |    |
|     | C6          | NUMBER(18, 0)      | 交易金額                |    |
|     | C7          | NUMBER(18, 2)      | 折合美金                |    |
|     | C8          | NUMBER(12, 6)      | 折合美金匯率              |    |
|     | C9          | VARCHAR2(8 char)  | 承作經辦                |    |
|     | C10         | VARCHAR2(8 char)  | 央行字軌                |    |
|     | C11         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C12         | NUMBER(1, 0)       | 版次                  |    |
|     | C13         | VARCHAR2(1 char)  | 主管放行                |    |
|     | C14         | VARCHAR2(8 char)  | 放行主管                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0OWE

#### 匯出匯款交易檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Release_Flag        |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | 交易代碼(FUNC. ID)       |    |
|     | C4          | VARCHAR2(30 char) | 交易名稱(FUNC. NAME)     |    |
|     | C5          | VARCHAR2(16 char) | 交易編號                |    |
|     | C6          | NUMBER(1, 0)       | EVENT(副檔KEY)        |    |
|     | C7          | VARCHAR2(1 char)  | NosReconcile(存同)    |    |
|     | C8          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C10         | VARCHAR2(1 char)  | TEMP                |    |
|     | C11         | VARCHAR2(1 char)  | 匯出方式選項              |    |
|     | C12         | VARCHAR2(20 char) | 匯出方式全文              |    |
|     | C13         | VARCHAR2(1 char)  | 匯款性質選項              |    |
|     | C14         | VARCHAR2(20 char) | 匯款性質全文              |    |
|     | C15         | VARCHAR2(1 char)  | 選項區分１               |    |
|     | C16         | VARCHAR2(1 char)  | 電文類別(swift_form)    |    |
|     | C17         | DATE              | 系統日(交易日)            |    |
|     | C18         | DATE              | 匯款日                 |    |
|     | C19         | DATE              | 存同扣帳日               |    |
|     | C20         | VARCHAR2(6 char)  | 申請人代號               |    |
|     | C21         | VARCHAR2(40 char) | 申請人名字               |    |
|     | C22         | VARCHAR2(40 char) | 申請人中文名字             |    |
|     | C23         | VARCHAR2(40 char) | 申請人地址１              |    |
|     | C24         | VARCHAR2(40 char) | 申請人地址２              |    |
|     | C25         | VARCHAR2(40 char) | 申請人地址３              |    |
|     | C26         | VARCHAR2(11 char) | 申請人身份證號             |    |
|     | C27         | DATE              | 申請人出生年月日            |    |
|     | C28         | VARCHAR2(12 char) | 申請人電話               |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C30         | VARCHAR2(2 char)  | 申請人台幣科目             |    |
|     | C31         | VARCHAR2(12 char) | 申請人台幣帳支號            |    |
|     | C32         | DATE              | VALUEDATE           |    |
|     | C33         | DATE              | 匯款退匯通知日             |    |
|     | C34         | VARCHAR2(20 char) | 退匯編號                |    |
|     | C35         | DATE              | 退匯日                 |    |
|     | C36         | DATE              | 匯款修改日               |    |
|     | C37         | VARCHAR2(40 char) | 受益人名字               |    |
|     | C38         | VARCHAR2(40 char) | 受益人地址１              |    |
|     | C39         | VARCHAR2(40 char) | 受益人地址２              |    |
|     | C40         | VARCHAR2(40 char) | 受益人地址３              |    |
|     | C41         | VARCHAR2(40 char) | 受益人帳號               |    |
|     | C42         | VARCHAR2(2 char)  | 受益人國家代碼             |    |
|     | C43         | VARCHAR2(40 char) | 受益人國家               |    |
|     | C44         | VARCHAR2(12 char) | 受益人電話               |    |
|     | C45         | VARCHAR2(1 char)  | 受益人身份別              |    |
|     | C46         | VARCHAR2(20 char) | 受益人身份別全文            |    |
|     | C47         | VARCHAR2(5 char)  | 存匯行CODE             |    |
|     | C48         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C49         | VARCHAR2(40 char) | 存匯行地址１              |    |
|     | C50         | VARCHAR2(40 char) | 存匯行地址２              |    |
|     | C51         | VARCHAR2(40 char) | 存匯行地址３              |    |
|     | C52         | VARCHAR2(12 char) | 存匯行SWIFTCODE        |    |
|     | C53         | VARCHAR2(5 char)  | 受益人設帳行CODE          |    |
|     | C54         | VARCHAR2(40 char) | 受益人設帳行名稱            |    |
|     | C55         | VARCHAR2(40 char) | 受益人設帳行地址１           |    |
|     | C56         | VARCHAR2(40 char) | 受益人設帳行地址２           |    |
|     | C57         | VARCHAR2(40 char) | 受益人設帳行地址３           |    |
|     | C58         | VARCHAR2(12 char) | 設帳行SWIFTCODE        |    |
|     | C59         | VARCHAR2(5 char)  | 送訊通匯行CODE           |    |
|     | C60         | VARCHAR2(40 char) | 送訊通匯行名稱             |    |
|     | C61         | VARCHAR2(40 char) | 送訊通匯行地址１            |    |
|     | C62         | VARCHAR2(40 char) | 送訊通匯行地址２            |    |
|     | C63         | VARCHAR2(40 char) | 送訊通匯行地址３            |    |
|     | C64         | VARCHAR2(12 char) | 送訊行SWIFTCODE        |    |
|     | C65         | VARCHAR2(5 char)  | 收訊通匯行CODE           |    |
|     | C66         | VARCHAR2(40 char) | 收訊通匯行名稱             |    |
|     | C67         | VARCHAR2(40 char) | 收訊通匯行地址１            |    |
|     | C68         | VARCHAR2(40 char) | 收訊通匯行地址２            |    |
|     | C69         | VARCHAR2(40 char) | 收訊通匯行地址３            |    |
|     | C70         | VARCHAR2(12 char) | 收訊行SWIFTCODE        |    |
|     | C606        | VARCHAR2(5 char)  | INTBANKCODE         |    |
|     | C607        | VARCHAR2(40 char) | INTBANKNAME         |    |
|     | C608        | VARCHAR2(40 char) | INTBANKADD1         |    |
|     | C609        | VARCHAR2(40 char) | INTBANKADD2         |    |
|     | C610        | VARCHAR2(40 char) | INTBANKADD3         |    |
|     | C611        | VARCHAR2(12 char) | INTBANKSWIFTCODE    |    |
|     | C612        | VARCHAR2(5 char)  | PAYINGBANKCODE      |    |
|     | C613        | VARCHAR2(40 char) | PAYINGBANKNAME      |    |
|     | C614        | VARCHAR2(40 char) | PAYINGBANKADD1      |    |
|     | C615        | VARCHAR2(40 char) | PAYINGBANKADD2      |    |
|     | C616        | VARCHAR2(40 char) | PAYINGBANKADD3      |    |
|     | C617        | VARCHAR2(14 char) | PAYINGBANKSWIFTCODE |    |
|     | C73         | VARCHAR2(40 char) | 備註１(英文)             |    |
|     | C74         | VARCHAR2(40 char) | 備註２(英文)             |    |
|     | C75         | VARCHAR2(40 char) | 備註３(英文)             |    |
|     | C76         | VARCHAR2(40 char) | 備註４(英文)             |    |
|     | C77         | VARCHAR2(3 char)  | 費用負擔方               |    |
|     | C78         | VARCHAR2(40 char) | 銀行間備註１(英文)          |    |
|     | C79         | VARCHAR2(40 char) | 銀行間備註２(英文)          |    |
|     | C80         | VARCHAR2(40 char) | 銀行間備註３(英文)          |    |
|     | C81         | VARCHAR2(40 char) | 銀行間備註４(英文)          |    |
|     | C82         | VARCHAR2(40 char) | 銀行間備註５(英文)          |    |
|     | C83         | VARCHAR2(40 char) | 銀行間備註６(英文)          |    |
|     | C84         | VARCHAR2(16 char) | 匯票號碼                |    |
|     | C85         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C86         | NUMBER(18, 0)      | 匯款金額(CCY)           |    |
|     | C87         | VARCHAR2(80 char) | 大寫金額１               |    |
|     | C88         | VARCHAR2(70 char) | 大寫金額２               |    |
|     | C89         | VARCHAR2(20 char) | 大寫金額3               |    |
|     | C90         | NUMBER(18, 0)      | 前次匯款餘額              |    |
|     | C91         | NUMBER(18, 0)      | 本次匯款餘額              |    |
|     | C92         | NUMBER(18, 0)      | 退匯國外費用              |    |
|     | C93         | NUMBER(18, 0)      | 退匯淨額                |    |
|     | C94         | NUMBER(12, 6)      | 現鈔買進成本匯率            |    |
|     | C95         | NUMBER(12, 6)      | 現鈔賣出成交匯率            |    |
|     | C96         | NUMBER(12, 6)      | 買入匯率(即期)            |    |
|     | C97         | NUMBER(12, 6)      | 賣出匯率(即期)            |    |
|     | C98         | NUMBER(12, 6)      | 買入匯率(現鈔)            |    |
|     | C99         | NUMBER(12, 6)      | 賣出匯率(現鈔)            |    |
|     | C100        | NUMBER(12, 6)      | 匯率上限                |    |
|     | C101        | NUMBER(12, 6)      | 匯率下限                |    |
|     | C102        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C103        | NUMBER(12, 6)      | 成交匯率                |    |
|     | C104        | NUMBER(18, 0)      | TC兌換外幣              |    |
|     | C105        | NUMBER(18, 0)      | TC兌換台幣              |    |
|     | C106        | NUMBER(18, 0)      | 台幣結購金額              |    |
|     | C107        | NUMBER(18, 0)      | 預購遠匯外幣              |    |
|     | C108        | NUMBER(12, 6)      | 預購遠匯匯率              |    |
|     | C109        | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C110        | NUMBER(18, 0)      | 匯出款以外存付             |    |
|     | C111        | NUMBER(18, 0)      | 匯出款以外幣現鈔付           |    |
|     | C112        | NUMBER(18, 0)      | 匯出款以旅行支票付           |    |
|     | C113        | NUMBER(18, 0)      | 匯出款以出口或匯入款付         |    |
|     | C114        | NUMBER(18, 0)      | 匯出款以其他款項付           |    |
|     | C115        | NUMBER(18, 0)      | 轉匯出                 |    |
|     | C116        | NUMBER(18, 0)      | 匯出退匯                |    |
|     | C117        | NUMBER(18, 0)      | 應繳外幣(不含費用)          |    |
|     | C118        | NUMBER(18, 0)      | 應繳台幣(不含費用)          |    |
|     | C119        | NUMBER(18, 0)      | 兌換外幣(CCY)           |    |
|     | C120        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C121        | NUMBER(18, 0)      | 兌換外幣合計              |    |
|     | C122        | NUMBER(18, 0)      | 兌換台幣合計              |    |
|     | C123        | VARCHAR2(1 char)  | 費用從本金扣抵             |    |
|     | C124        | VARCHAR2(2 char)  | 匯款人國別代碼             |    |
|     | C125        | VARCHAR2(40 char) | 國外匯款人國別             |    |
|     | C618        | VARCHAR2(3 char)  | 匯款分類編號              |    |
|     | C619        | VARCHAR2(60 char) | 匯款分類全文              |    |
|     | C620        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C621        | VARCHAR2(3 char)  | 匯款分類編號1             |    |
|     | C622        | VARCHAR2(60 char) | 匯款分類全文1             |    |
|     | C623        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C624        | VARCHAR2(3 char)  | 匯款分類編號2             |    |
|     | C625        | VARCHAR2(60 char) | 匯款分類全文2             |    |
|     | C626        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C127        | NUMBER(18, 0)      | 退匯費用                |    |
|     | C128        | NUMBER(18, 0)      | 匯出手續費(台幣)           |    |
|     | C129        | NUMBER(18, 0)      | 旅支手續費(台幣)           |    |
|     | C130        | NUMBER(18, 0)      | 成交手續費(台幣)           |    |
|     | C131        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C132        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C133        | NUMBER(18, 0)      | 電報費                 |    |
|     | C134        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C135        | NUMBER(18, 0)      | 現鈔兌換手續費             |    |
|     | C136        | NUMBER(18, 0)      | 其他費用                |    |
|     | C137        | NUMBER(18, 0)      | TOTAL費用(WK-GT)      |    |
|     | C138        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C139        | VARCHAR2(3 char)  | 費用付款幣別              |    |
|     | C140        | NUMBER(18, 0)      | 費用兌換(台幣)            |    |
|     | C141        | NUMBER(18, 0)      | 費用兌換(外幣)            |    |
|     | C142        | NUMBER(18, 0)      | 應收費用(台幣)            |    |
|     | C143        | NUMBER(18, 0)      | 應收費用(外幣)            |    |
|     | C144        | NUMBER(18, 0)      | 應收付款(外幣)            |    |
|     | C145        | NUMBER(18, 0)      | 應收付款(外幣現鈔)          |    |
|     | C146        | NUMBER(18, 0)      | 應收付款(台幣)            |    |
|     | C147        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C148        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C149        | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C150        | NUMBER(18, 0)      | 手續費一次性收費            |    |
|     | C151        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C152        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C153        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C154        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C155        | VARCHAR2(8 char)  | 摘要KEY(FILENOTE)     |    |
|     | C156        | DATE              | 刪除日期                |    |
|     | C157        | VARCHAR2(10 char) | 經辦ID                |    |
|     | C158        | VARCHAR2(10 char) | 主管ID                |    |
|     | C159        | VARCHAR2(16 char) | 遠契契約號碼              |    |
|     | C160        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C161        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C162        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C163        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C164        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C165        | VARCHAR2(2 char)  | 業務代碼(APCODE)        |    |
|     | C166        | VARCHAR2(5 char)  | NEC連動代號(TXCODE)     |    |
|     | C167        | VARCHAR2(40 char) | 會計摘要                |    |
|     | C168        | VARCHAR2(20 char) | 會計KEY(傳票編號)         |    |
|     | C169        | NUMBER(5, 0)       | 傳票序號                |    |
|     | C627        | VARCHAR2(20 char) | 電文稿一                |    |
|     | C628        | VARCHAR2(20 char) | 電文稿二                |    |
|     | C629        | VARCHAR2(20 char) | 電文稿三                |    |
|     | C630        | VARCHAR2(20 char) | 電文稿四                |    |
|     | C631        | VARCHAR2(20 char) | 電文稿五                |    |
|     | C632        | VARCHAR2(20 char) | 電文稿六                |    |
|     | C633        | VARCHAR2(20 char) | 電文稿七                |    |
|     | C171        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C172        | VARCHAR2(20 char) | 分行中文名稱              |    |
|     | C173        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C174        | NUMBER(18, 0)      | 違約金金額               |    |
|     | C175        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C176        | VARCHAR2(4 char)  | 預購_售活存營業單位          |    |
|     | C177        | VARCHAR2(2 char)  | 預購_售活存科目            |    |
|     | C178        | VARCHAR2(6 char)  | 預購_售活存顧客號碼          |    |
|     | C179        | NUMBER(1, 0)       | 預購_售活存檢號            |    |
|     | C180        | VARCHAR2(3 char)  | 預購_售活存摘要            |    |
|     | C634        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C635        | VARCHAR2(4 char)  | 績效歸屬部門              |    |
|     | C636        | VARCHAR2(7 char)  | 積效歸屬AO代碼            |    |
|     | C182        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C183        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C184        | VARCHAR2(4 char)  | 代辦行                 |    |
|     | C185        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C186        | VARCHAR2(1 char)  | 全額到位                |    |
|     | C187        | VARCHAR2(40 char) | 申請人中文名字2            |    |
|     | C188        | VARCHAR2(40 char) | 申請人中文名字3            |    |
|     | C189        | VARCHAR2(13 char) | BNFBANK_BRANCHCODE  |    |
|     | C637        | VARCHAR2(1 char)  | 議價處理區分              |    |
|     | C638        | VARCHAR2(6 char)  | 議價編號                |    |
|     | C639        | VARCHAR2(1 char)  | 買賣區分                |    |
|     | C640        | VARCHAR2(3 char)  | 議價幣別                |    |
|     | C641        | NUMBER(18, 0)      | 議價成交金額              |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILE0OWM

#### 匯出匯款主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | HOLDMARK            |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | 交易代號(FUNC. ID)       |    |
|     | C4          | VARCHAR2(30 char) | 交易名稱(FUNC. NAME)     |    |
|     | C5          | VARCHAR2(16 char) | 交易編號                |    |
|     | C6          | NUMBER(1, 0)       | EVENTNO             |    |
|     | C7          | VARCHAR2(1 char)  | NosReconcile(存同)    |    |
|     | C8          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C10         | VARCHAR2(1 char)  | TEMP                |    |
|     | C11         | VARCHAR2(1 char)  | 匯出方式                |    |
|     | C12         | VARCHAR2(20 char) | 匯出方式全文              |    |
|     | C13         | VARCHAR2(1 char)  | 匯款性質                |    |
|     | C14         | VARCHAR2(20 char) | 匯款性質全文              |    |
|     | C15         | VARCHAR2(1 char)  | SWIFTFORM           |    |
|     | C16         | DATE              | 系統日                 |    |
|     | C17         | DATE              | 匯款日                 |    |
|     | C18         | DATE              | VALUEDATE           |    |
|     | C19         | DATE              | 退匯通知日               |    |
|     | C20         | DATE              | 存同扣帳日               |    |
|     | C21         | VARCHAR2(6 char)  | 申請人CODE             |    |
|     | C22         | VARCHAR2(40 char) | 申請人名字               |    |
|     | C23         | VARCHAR2(40 char) | 申請人中文名字             |    |
|     | C24         | VARCHAR2(40 char) | 申請人地址１              |    |
|     | C25         | VARCHAR2(40 char) | 申請人地址２              |    |
|     | C26         | VARCHAR2(40 char) | 申請人地址３              |    |
|     | C27         | VARCHAR2(11 char) | 申請人身份證字號            |    |
|     | C28         | DATE              | 申請人出生日              |    |
|     | C29         | VARCHAR2(12 char) | 申請人電話               |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C31         | VARCHAR2(2 char)  | 申請人台幣科目             |    |
|     | C32         | VARCHAR2(12 char) | 申請人台幣帳號             |    |
|     | C33         | DATE              | 退匯日                 |    |
|     | C34         | VARCHAR2(20 char) | 退匯編號                |    |
|     | C35         | DATE              | 匯款修改日               |    |
|     | C36         | VARCHAR2(40 char) | 受益人名字               |    |
|     | C37         | VARCHAR2(40 char) | 受益人地址１              |    |
|     | C38         | VARCHAR2(40 char) | 受益人地址２              |    |
|     | C39         | VARCHAR2(40 char) | 受益人地址３              |    |
|     | C40         | VARCHAR2(40 char) | 受益人帳號               |    |
|     | C41         | VARCHAR2(20 char) | 受益人國家               |    |
|     | C42         | VARCHAR2(12 char) | 受益人電話               |    |
|     | C43         | VARCHAR2(1 char)  | 受益人身份別              |    |
|     | C44         | VARCHAR2(20 char) | 受益人身份別全文            |    |
|     | C45         | VARCHAR2(5 char)  | 存匯行代號               |    |
|     | C46         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C47         | VARCHAR2(40 char) | 存匯行地址１              |    |
|     | C48         | VARCHAR2(40 char) | 存匯行地址２              |    |
|     | C49         | VARCHAR2(40 char) | 存匯行地址３              |    |
|     | C50         | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C51         | VARCHAR2(5 char)  | 受益人設帳行CODE          |    |
|     | C52         | VARCHAR2(40 char) | 受益人設帳行名稱            |    |
|     | C53         | VARCHAR2(40 char) | 受益人設帳行地址１           |    |
|     | C54         | VARCHAR2(40 char) | 受益人設帳行地址２           |    |
|     | C55         | VARCHAR2(40 char) | 受益人設帳行地址３           |    |
|     | C56         | VARCHAR2(14 char) | 設帳行SWIFT_CODE       |    |
|     | C57         | VARCHAR2(5 char)  | 送訊通匯行CODE           |    |
|     | C58         | VARCHAR2(40 char) | 送訊通匯行名稱             |    |
|     | C59         | VARCHAR2(40 char) | 送訊通匯行地址１            |    |
|     | C60         | VARCHAR2(40 char) | 送訊通匯行地址２            |    |
|     | C61         | VARCHAR2(40 char) | 送訊通匯行地址３            |    |
|     | C62         | VARCHAR2(14 char) | 送訊行SWIFTCODE        |    |
|     | C63         | VARCHAR2(5 char)  | 收訊通匯行CODE           |    |
|     | C64         | VARCHAR2(40 char) | 收訊通匯行名稱             |    |
|     | C65         | VARCHAR2(40 char) | 收訊通匯行地址１            |    |
|     | C66         | VARCHAR2(40 char) | 收訊通匯行地址２            |    |
|     | C67         | VARCHAR2(40 char) | 收訊通匯行地址３            |    |
|     | C68         | VARCHAR2(14 char) | 收訊行SWIFTCODE        |    |
|     | C606        | VARCHAR2(5 char)  | INTBANKCODE         |    |
|     | C607        | VARCHAR2(40 char) | INTBANKNAME         |    |
|     | C608        | VARCHAR2(40 char) | INTBANKADD1         |    |
|     | C609        | VARCHAR2(40 char) | INTBANKADD2         |    |
|     | C610        | VARCHAR2(40 char) | INTBANKADD3         |    |
|     | C611        | VARCHAR2(14 char) | INTBANKSWIFTCODE    |    |
|     | C612        | VARCHAR2(5 char)  | PAYINGBANKCODE      |    |
|     | C613        | VARCHAR2(40 char) | PAYINGBANKNAME      |    |
|     | C614        | VARCHAR2(40 char) | PAYINGBANKADD1      |    |
|     | C615        | VARCHAR2(40 char) | PAYINGBANKADD2      |    |
|     | C616        | VARCHAR2(40 char) | PAYINGBANKADD3      |    |
|     | C617        | VARCHAR2(14 char) | PAYINGBANKSWIFTCODE |    |
|     | C71         | VARCHAR2(40 char) | 備註１                 |    |
|     | C72         | VARCHAR2(40 char) | 備註２                 |    |
|     | C73         | VARCHAR2(40 char) | 備註３                 |    |
|     | C74         | VARCHAR2(40 char) | 備註４                 |    |
|     | C75         | VARCHAR2(3 char)  | 費用負擔方               |    |
|     | C76         | VARCHAR2(40 char) | 銀行間備註１(英)           |    |
|     | C77         | VARCHAR2(40 char) | 銀行間備註２(英)           |    |
|     | C78         | VARCHAR2(40 char) | 銀行間備註３(英)           |    |
|     | C79         | VARCHAR2(40 char) | 銀行間備註４(英)           |    |
|     | C80         | VARCHAR2(40 char) | 銀行間備註５(英)           |    |
|     | C81         | VARCHAR2(40 char) | 銀行間備註６(英)           |    |
|     | C82         | VARCHAR2(16 char) | 匯款號碼                |    |
|     | C83         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C84         | NUMBER(18, 0)      | 匯款金額(外幣)            |    |
|     | C85         | VARCHAR2(60 char) | 大寫金額１(英)            |    |
|     | C86         | VARCHAR2(60 char) | 大寫金額２(英)            |    |
|     | C87         | VARCHAR2(40 char) | 大寫金額3               |    |
|     | C88         | NUMBER(18, 0)      | 前次匯款餘額              |    |
|     | C89         | NUMBER(18, 0)      | 本次匯款餘額              |    |
|     | C90         | NUMBER(18, 0)      | 退匯國外費用              |    |
|     | C91         | NUMBER(18, 0)      | 退匯淨額                |    |
|     | C92         | NUMBER(12, 6)      | 成本匯率(現鈔)            |    |
|     | C93         | NUMBER(12, 6)      | 成交匯率(現鈔)            |    |
|     | C94         | NUMBER(12, 6)      | 買入匯率(即期)            |    |
|     | C95         | NUMBER(12, 6)      | 賣出匯率(即期)            |    |
|     | C96         | NUMBER(12, 6)      | 匯率上限                |    |
|     | C97         | NUMBER(12, 6)      | 匯率下限                |    |
|     | C98         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C99         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C100        | NUMBER(18, 0)      | 兌換外幣                |    |
|     | C101        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C102        | NUMBER(18, 0)      | 台幣結購                |    |
|     | C103        | NUMBER(18, 0)      | 預購遠匯外幣              |    |
|     | C104        | NUMBER(12, 6)      | 預購遠匯匯率              |    |
|     | C105        | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C106        | NUMBER(18, 0)      | 匯出款－外存付             |    |
|     | C107        | NUMBER(18, 0)      | 匯出款－外幣現鈔付           |    |
|     | C108        | NUMBER(18, 0)      | 匯出款－旅行支票付           |    |
|     | C109        | NUMBER(18, 0)      | 匯出款－出口或匯入款付         |    |
|     | C110        | NUMBER(18, 0)      | 匯出款－其他款項付           |    |
|     | C111        | NUMBER(18, 0)      | 轉匯出                 |    |
|     | C112        | NUMBER(18, 0)      | 匯出退匯                |    |
|     | C113        | NUMBER(18, 0)      | 兌換外幣                |    |
|     | C114        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C115        | NUMBER(18, 0)      | 兌換外幣總金額             |    |
|     | C116        | NUMBER(18, 0)      | 兌換台幣總金額             |    |
|     | C117        | NUMBER(18, 0)      | 匯出款總金額              |    |
|     | C118        | VARCHAR2(1 char)  | 費用從本金扣抵             |    |
|     | C119        | NUMBER(18, 0)      | 匯款淨額                |    |
|     | C120        | VARCHAR2(40 char) | 國外匯款人國別             |    |
|     | C618        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C619        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C620        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C621        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C622        | VARCHAR2(3 char)  | 匯款分類號2              |    |
|     | C623        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C122        | NUMBER(18, 0)      | 退匯費用                |    |
|     | C123        | NUMBER(18, 0)      | 匯出手續費               |    |
|     | C124        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C125        | NUMBER(18, 0)      | 成交手續費               |    |
|     | C126        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C127        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C128        | NUMBER(18, 0)      | 電報費                 |    |
|     | C129        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C130        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C131        | NUMBER(18, 0)      | 其他費用                |    |
|     | C132        | NUMBER(18, 0)      | 總費用(台幣)             |    |
|     | C133        | VARCHAR2(3 char)  | 費用付款幣別              |    |
|     | C134        | NUMBER(18, 0)      | 費用兌換台幣              |    |
|     | C135        | NUMBER(18, 0)      | 費用兌換外幣              |    |
|     | C136        | NUMBER(18, 0)      | 應收費用                |    |
|     | C137        | NUMBER(18, 0)      | 實收費用                |    |
|     | C138        | NUMBER(18, 0)      | 應收付款(外幣)            |    |
|     | C139        | NUMBER(18, 0)      | 應收付款(外幣現鈔)          |    |
|     | C140        | NUMBER(18, 0)      | 應收付台幣               |    |
|     | C141        | NUMBER(18, 0)      | 實收台幣                |    |
|     | C142        | NUMBER(18, 0)      | 應收帳款                |    |
|     | C143        | NUMBER(18, 0)      | 應付帳款                |    |
|     | C144        | DATE              | 刪除日期                |    |
|     | C145        | VARCHAR2(10 char) | USERID              |    |
|     | C146        | VARCHAR2(10 char) | 主管ID                |    |
|     | C147        | VARCHAR2(2 char)  | 業務代碼(APCode)        |    |
|     | C148        | VARCHAR2(16 char) | 遠契契約號碼              |    |
|     | C149        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C150        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C151        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C152        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C153        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C154        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C155        | VARCHAR2(2 char)  | 國家代碼                |    |
|     | C156        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C157        | VARCHAR2(20 char) | 分行中文名稱              |    |
|     | C624        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C625        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C626        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C159        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C160        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C161        | VARCHAR2(4 char)  | 代辦行                 |    |
|     | C162        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C163        | VARCHAR2(1 char)  | 全額到位                |    |
|     | C164        | VARCHAR2(40 char) | 申請人中文名字2            |    |
|     | C165        | VARCHAR2(40 char) | 申請人中文名字3            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEINE

#### 匯入匯款交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | ReleaseFlag         |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | FUNKTIONID          |    |
| PK  | C4          | VARCHAR2(16 char) | 匯入匯款交易編號            |    |
| PK  | C5          | VARCHAR2(1 char)  | EVENTNO             |    |
|     | C6          | VARCHAR2(1 char)  | 匯入匯款方式              |    |
|     | C7          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C8          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C9          | DATE              | 系統日                 |    |
|     | C10         | DATE              | 國外入帳日               |    |
|     | C11         | DATE              | 通知日                 |    |
|     | C12         | VARCHAR2(20 char) | 通知日全文               |    |
|     | C13         | DATE              | 解匯日                 |    |
|     | C14         | DATE              | 止付日                 |    |
|     | C15         | DATE              | 解除止付日               |    |
|     | C16         | DATE              | 退匯日                 |    |
|     | C17         | DATE              | 匯款修改日               |    |
|     | C18         | VARCHAR2(6 char)  | 受款人代號               |    |
|     | C19         | VARCHAR2(2 char)  | 台幣科目                |    |
|     | C20         | VARCHAR2(13 char) | 受款人台幣帳號             |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C22         | VARCHAR2(40 char) | 受款人欄位1              |    |
|     | C23         | VARCHAR2(11 char) | 受款人ＩＤ               |    |
|     | C24         | VARCHAR2(40 char) | 受款人欄位2              |    |
|     | C25         | VARCHAR2(40 char) | 受益人欄位3              |    |
|     | C26         | VARCHAR2(40 char) | 受益人欄位4              |    |
|     | C27         | DATE              | 受益人出生年月日            |    |
|     | C28         | VARCHAR2(1 char)  | 匯款人行業別選項            |    |
|     | C29         | VARCHAR2(20 char) | 匯款人行業別全文            |    |
|     | C30         | VARCHAR2(11 char) | 受益人電話號碼             |    |
|     | C31         | VARCHAR2(4 char)  | 分行別                 |    |
|     | C32         | VARCHAR2(14 char) | 受益人SWIFTCODE        |    |
|     | C33         | VARCHAR2(40 char) | 受款人銀行名稱             |    |
|     | C34         | VARCHAR2(40 char) | 受款人銀行地址一            |    |
|     | C35         | VARCHAR2(40 char) | 受款人銀行地址二            |    |
|     | C36         | VARCHAR2(40 char) | 受款人銀行地址三            |    |
|     | C37         | VARCHAR2(5 char)  | 匯款銀行代號              |    |
|     | C38         | VARCHAR2(40 char) | 匯款銀行名稱              |    |
|     | C39         | VARCHAR2(40 char) | 匯款銀行地址一             |    |
|     | C40         | VARCHAR2(40 char) | 匯款銀行地址二             |    |
|     | C41         | VARCHAR2(40 char) | 匯款銀行地址三             |    |
|     | C42         | VARCHAR2(16 char) | 匯款銀行編號              |    |
|     | C43         | VARCHAR2(40 char) | 匯款人姓名               |    |
|     | C44         | VARCHAR2(40 char) | 匯款人住址一              |    |
|     | C45         | VARCHAR2(40 char) | 匯款人住址二              |    |
|     | C46         | VARCHAR2(40 char) | 匯款人住址三              |    |
|     | C47         | VARCHAR2(40 char) | 匯款人國別               |    |
|     | C48         | VARCHAR2(5 char)  | 原匯款銀行代號             |    |
|     | C49         | VARCHAR2(40 char) | 原匯款銀行               |    |
|     | C50         | VARCHAR2(5 char)  | 存匯銀行                |    |
|     | C51         | VARCHAR2(40 char) | 存匯銀行名稱              |    |
|     | C52         | VARCHAR2(40 char) | 存匯銀行地址一             |    |
|     | C53         | VARCHAR2(40 char) | 存匯銀行地址二             |    |
|     | C54         | VARCHAR2(40 char) | 存匯銀行地址三             |    |
|     | C55         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C56         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C57         | VARCHAR2(40 char) | 金額大寫一               |    |
|     | C58         | VARCHAR2(40 char) | 金額大寫二               |    |
|     | C59         | VARCHAR2(40 char) | 金額大寫三               |    |
|     | C60         | VARCHAR2(40 char) | 金額大寫四               |    |
|     | C606        | VARCHAR2(1 char)  | 台幣結購FLAG            |    |
|     | C607        | VARCHAR2(3 char)  | 求償幣別                |    |
|     | C608        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C609        | NUMBER(12, 6)      | 客戶匯率                |    |
|     | C610        | NUMBER(12, 6)      | 成本利率                |    |
|     | C611        | NUMBER(12, 6)      | 客戶利率                |    |
|     | C612        | NUMBER(18, 0)      | 等值外幣                |    |
|     | C613        | NUMBER(18, 0)      | 電報費                 |    |
|     | C614        | NUMBER(18, 0)      | 手續費                 |    |
|     | C615        | NUMBER(18, 0)      | 手續費外幣               |    |
|     | C616        | NUMBER(18, 0)      | 求償總額                |    |
|     | C62         | NUMBER(18, 0)      | PrvOutstanding      |    |
|     | C63         | NUMBER(18, 0)      | 增加金額                |    |
|     | C64         | NUMBER(18, 0)      | 減少金額                |    |
|     | C65         | NUMBER(18, 0)      | RemitCreditAmt      |    |
|     | C66         | NUMBER(18, 0)      | NewOutstanding      |    |
|     | C67         | NUMBER(12, 6)      | 匯率上限                |    |
|     | C68         | NUMBER(12, 6)      | 匯率下限                |    |
|     | C69         | NUMBER(12, 6)      | 買入匯率                |    |
|     | C70         | NUMBER(12, 6)      | 賣出匯率                |    |
|     | C71         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C72         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C73         | NUMBER(12, 6)      | 現金賣出匯率              |    |
|     | C74         | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C75         | VARCHAR2(20 char) | 國外匯款人國別             |    |
|     | C617        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C618        | VARCHAR2(60 char) | 匯款分類全文              |    |
|     | C619        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C620        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C621        | VARCHAR2(60 char) | 匯款分類全文1             |    |
|     | C622        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C623        | VARCHAR2(3 char)  | 匯款分類號碼2             |    |
|     | C624        | VARCHAR2(60 char) | 匯款分類號碼全文2           |    |
|     | C625        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C77         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C78         | VARCHAR2(13 char) | 受款人外存帳號             |    |
|     | C79         | VARCHAR2(1 char)  | 存入外存帳號-支號           |    |
|     | C80         | NUMBER(18, 0)      | 支付外幣現金              |    |
|     | C81         | NUMBER(18, 0)      | 支付旅行支票              |    |
|     | C82         | NUMBER(18, 0)      | 支付外幣貸款              |    |
|     | C83         | NUMBER(18, 0)      | 轉匯出金額               |    |
|     | C84         | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C85         | NUMBER(18, 0)      | 預售遠匯款               |    |
|     | C86         | NUMBER(12, 6)      | 預售遠匯匯率              |    |
|     | C87         | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C88         | NUMBER(18, 0)      | 其他                  |    |
|     | C89         | NUMBER(18, 0)      | 標準手續費               |    |
|     | C90         | NUMBER(18, 0)      | 優惠手續費               |    |
|     | C91         | NUMBER(18, 0)      | 成交手續費               |    |
|     | C92         | NUMBER(18, 0)      | 郵電費                 |    |
|     | C93         | NUMBER(18, 0)      | 郵電費外幣               |    |
|     | C94         | NUMBER(18, 0)      | 退匯金額                |    |
|     | C95         | NUMBER(18, 0)      | 其他費用                |    |
|     | C96         | NUMBER(18, 0)      | 總共費用                |    |
|     | C97         | VARCHAR2(1 char)  | 手續費從本金扣             |    |
|     | C98         | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C99         | NUMBER(18, 0)      | 手續費兌換LCY            |    |
|     | C100        | NUMBER(18, 0)      | 手續費兌換FCY            |    |
|     | C101        | NUMBER(18, 0)      | 應收手續費               |    |
|     | C102        | NUMBER(18, 0)      | 實收手續費               |    |
|     | C103        | NUMBER(18, 0)      | 兌換FCY               |    |
|     | C104        | NUMBER(18, 0)      | 兌換LCY               |    |
|     | C105        | NUMBER(18, 0)      | 總兌換外幣               |    |
|     | C106        | NUMBER(18, 0)      | 總兌換台幣               |    |
|     | C107        | NUMBER(18, 0)      | 支付淨額外幣              |    |
|     | C108        | NUMBER(18, 0)      | 支付淨額台幣              |    |
|     | C109        | DATE              | 刪除日期                |    |
|     | C110        | VARCHAR2(10 char) | USERID              |    |
|     | C111        | VARCHAR2(10 char) | 主管ID                |    |
|     | C112        | VARCHAR2(2 char)  | 業務代碼                |    |
|     | C113        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C114        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C115        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C116        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C117        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C118        | VARCHAR2(5 char)  | 主機連動代碼              |    |
|     | C119        | VARCHAR2(40 char) | 會計傳票摘要              |    |
|     | C120        | VARCHAR2(20 char) | 會計KEY               |    |
|     | C121        | NUMBER(5, 0)       | 會計傳票序號1             |    |
|     | C626        | VARCHAR2(20 char) | 電文1                 |    |
|     | C627        | VARCHAR2(20 char) | 電文2                 |    |
|     | C628        | VARCHAR2(20 char) | 電文3                 |    |
|     | C629        | VARCHAR2(20 char) | 電文4                 |    |
|     | C630        | VARCHAR2(20 char) | 電文5                 |    |
|     | C631        | VARCHAR2(20 char) | 電文6                 |    |
|     | C632        | VARCHAR2(20 char) | 電文7                 |    |
|     | C123        | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C124        | VARCHAR2(14 char) | 匯款行SWIFTCODE        |    |
|     | C125        | VARCHAR2(14 char) | 交易參考編號(電文)          |    |
|     | C126        | VARCHAR2(14 char) | 原匯行SWIFTCODE        |    |
|     | C127        | VARCHAR2(40 char) | 客戶備註1               |    |
|     | C128        | VARCHAR2(40 char) | 客戶備註2               |    |
|     | C129        | VARCHAR2(40 char) | 客戶備註3               |    |
|     | C130        | VARCHAR2(16 char) | 遠匯契約號碼              |    |
|     | C131        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C132        | NUMBER(18, 0)      | 匯入手續費               |    |
|     | C133        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C134        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C135        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C136        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C137        | NUMBER(18, 0)      | 實付台幣                |    |
|     | C138        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C139        | NUMBER(18, 0)      | 手續費一次性收費額           |    |
|     | C140        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C141        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C142        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C143        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C144        | NUMBER(12, 6)      | 客戶額度利率              |    |
|     | C145        | VARCHAR2(3 char)  | 費率幣別                |    |
|     | C146        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C147        | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C148        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C149        | VARCHAR2(20 char) | 營業單位中文名             |    |
|     | C150        | VARCHAR2(5 char)  | VALUE-DATE-NOTE1    |    |
|     | C151        | VARCHAR2(1 char)  | WK-FIELD            |    |
|     | C152        | VARCHAR2(5 char)  | WK-FIELD2           |    |
|     | C153        | DATE              | 匯款起始日               |    |
|     | C154        | DATE              | 匯款訖日                |    |
|     | C155        | VARCHAR2(2 char)  | WK-FIELD3           |    |
|     | C156        | VARCHAR2(40 char) | 退匯理由                |    |
|     | C157        | VARCHAR2(40 char) | 退匯理由1               |    |
|     | C158        | NUMBER(18, 0)      | 解付(現金)              |    |
|     | C159        | NUMBER(18, 0)      | 解付(其他)              |    |
|     | C160        | VARCHAR2(1 char)  | WK-FIELD3           |    |
|     | C161        | NUMBER(2, 0)       | 修改次數                |    |
|     | C162        | VARCHAR2(40 char) | 受款人中文名              |    |
|     | C163        | VARCHAR2(13 char) | 受款人帳號               |    |
|     | C164        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C165        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C166        | NUMBER(18, 0)      | 違約金金額               |    |
|     | C633        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C634        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C635        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C168        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C169        | VARCHAR2(13 char) | 台幣扣款帳號              |    |
|     | C170        | NUMBER(18, 0)      | 連動台幣扣款金額            |    |
|     | C171        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C172        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C173        | VARCHAR2(2 char)  | 受款人國別               |    |
|     | C174        | VARCHAR2(20 char) | 受款人國家               |    |
|     | C175        | VARCHAR2(40 char) | 受款人名稱2              |    |
|     | C636        | VARCHAR2(1 char)  | 議價處理區分              |    |
|     | C637        | VARCHAR2(6 char)  | 議價編號                |    |
|     | C638        | VARCHAR2(1 char)  | 買賣區分                |    |
|     | C639        | VARCHAR2(3 char)  | 議價幣別                |    |
|     | C640        | NUMBER(18, 0)      | 議價成交金額              |    |
|     | C641        | VARCHAR2(1 char)  | 國外匯款人身分別            |    |
|     | C642        | VARCHAR2(1 char)  | 是否大陸出口              |    |
|     | C643        | VARCHAR2(16 char) | 虛擬帳號                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEINLN

#### 匯入還款補登錄交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C2          | VARCHAR2(30 char) | 營業單位中文名稱            |    |
|     | C3          | VARCHAR2(16 char) | 交易編號                |    |
|     | C4          | DATE              | 交易日期                |    |
|     | C5          | VARCHAR2(3 char)  | 交易幣別                |    |
|     | C6          | NUMBER(18, 0)      | 交易金額                |    |
|     | C7          | NUMBER(18, 2)      | 折合美金                |    |
|     | C8          | NUMBER(12, 6)      | 折合美金匯率              |    |
|     | C9          | VARCHAR2(8 char)  | 承作經辦                |    |
|     | C10         | VARCHAR2(8 char)  | 央行字軌                |    |
|     | C11         | VARCHAR2(4 char)  | 代理行                 |    |
|     | C12         | NUMBER(1, 0)       | 版次                  |    |
|     | C13         | VARCHAR2(1 char)  | 主管放行                |    |
|     | C14         | VARCHAR2(8 char)  | 放行主管                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEINM

#### 匯入匯款主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | HOLDMARK            |    |
| PK  | C2          | VARCHAR2(16 char) | 匯入匯款交易編號            |    |
|     | C3          | NUMBER(1, 0)       | EVENTNO             |    |
|     | C4          | VARCHAR2(1 char)  | 匯入匯款方式              |    |
|     | C5          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C6          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C7          | DATE              | 系統日                 |    |
|     | C8          | DATE              | 國外入帳日               |    |
|     | C9          | DATE              | 通知日                 |    |
|     | C10         | DATE              | 解匯日                 |    |
|     | C11         | DATE              | 止付日                 |    |
|     | C12         | DATE              | 解除止付日               |    |
|     | C13         | DATE              | 退匯日                 |    |
|     | C14         | DATE              | 匯款修改日               |    |
|     | C15         | VARCHAR2(6 char)  | 受款人代號               |    |
|     | C16         | VARCHAR2(2 char)  | 台幣科目                |    |
|     | C17         | VARCHAR2(13 char) | 受款人台幣帳號             |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C19         | VARCHAR2(40 char) | 受款人名稱               |    |
|     | C20         | VARCHAR2(11 char) | 受款人ＩＤ               |    |
|     | C21         | VARCHAR2(40 char) | 受款人住址一              |    |
|     | C22         | VARCHAR2(40 char) | 受款人住址二              |    |
|     | C23         | VARCHAR2(40 char) | 受款人住址三              |    |
|     | C24         | VARCHAR2(11 char) | 受款人電話號碼             |    |
|     | C25         | DATE              | 受款人生日               |    |
|     | C26         | VARCHAR2(1 char)  | 匯款人身份別選項            |    |
|     | C27         | VARCHAR2(20 char) | 匯款人身份別全文            |    |
|     | C28         | VARCHAR2(4 char)  | 分行別                 |    |
|     | C29         | VARCHAR2(40 char) | 受款人銀行名稱             |    |
|     | C30         | VARCHAR2(40 char) | 受款人銀行地址一            |    |
|     | C31         | VARCHAR2(40 char) | 受款人銀行地址二            |    |
|     | C32         | VARCHAR2(40 char) | 受款人銀行地址三            |    |
|     | C33         | VARCHAR2(5 char)  | 匯款銀行代號              |    |
|     | C34         | VARCHAR2(40 char) | 匯款銀行名稱              |    |
|     | C35         | VARCHAR2(40 char) | 匯款銀行地址一             |    |
|     | C36         | VARCHAR2(40 char) | 匯款銀行地址二             |    |
|     | C37         | VARCHAR2(40 char) | 匯款銀行地址三             |    |
|     | C38         | VARCHAR2(16 char) | 匯款銀行編號              |    |
|     | C39         | VARCHAR2(40 char) | 匯款人姓名               |    |
|     | C40         | VARCHAR2(40 char) | 匯款人住址一              |    |
|     | C41         | VARCHAR2(40 char) | 匯款人住址二              |    |
|     | C42         | VARCHAR2(40 char) | 匯款人住址三              |    |
|     | C43         | VARCHAR2(40 char) | 匯款人國別               |    |
|     | C44         | VARCHAR2(5 char)  | 原匯款銀行代號             |    |
|     | C45         | VARCHAR2(40 char) | 原匯款銀行               |    |
|     | C46         | VARCHAR2(5 char)  | 存匯銀行                |    |
|     | C47         | VARCHAR2(40 char) | 存匯銀行名稱              |    |
|     | C48         | VARCHAR2(40 char) | 存匯銀行地址一             |    |
|     | C49         | VARCHAR2(40 char) | 存匯銀行地址二             |    |
|     | C50         | VARCHAR2(40 char) | 存匯銀行地址三             |    |
|     | C51         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C52         | NUMBER(18, 0)      | 匯款金額                |    |
|     | C53         | VARCHAR2(40 char) | 金額大寫一               |    |
|     | C54         | VARCHAR2(40 char) | 金額大寫二               |    |
|     | C55         | VARCHAR2(40 char) | 金額大寫三               |    |
|     | C56         | VARCHAR2(40 char) | 金額大寫四               |    |
|     | C606        | VARCHAR2(1 char)  | 台幣結購FLAG            |    |
|     | C607        | VARCHAR2(3 char)  | 求償幣別                |    |
|     | C608        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C609        | NUMBER(12, 6)      | 客戶匯率                |    |
|     | C610        | NUMBER(12, 6)      | 成本利率                |    |
|     | C611        | NUMBER(12, 6)      | 客戶利率                |    |
|     | C612        | NUMBER(18, 0)      | 等值外幣                |    |
|     | C613        | NUMBER(18, 0)      | 電報費                 |    |
|     | C614        | NUMBER(18, 0)      | 手續費                 |    |
|     | C615        | NUMBER(18, 0)      | 手續費外幣               |    |
|     | C616        | NUMBER(18, 0)      | 求償總額                |    |
|     | C58         | NUMBER(18, 0)      | PrvOutstanding      |    |
|     | C59         | NUMBER(18, 0)      | 增加金額                |    |
|     | C60         | NUMBER(18, 0)      | 減少金額                |    |
|     | C61         | NUMBER(18, 0)      | RemitCreditAmt      |    |
|     | C62         | NUMBER(18, 0)      | NewOutstanding      |    |
|     | C63         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C64         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C65         | NUMBER(12, 6)      | 現金賣出匯率              |    |
|     | C66         | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C67         | VARCHAR2(20 char) | 國外匯款人國別             |    |
|     | C617        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C618        | NUMBER(18, 0)      | 匯款金額                |    |
|     | C619        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C620        | NUMBER(18, 0)      | 匯款金額1               |    |
|     | C621        | VARCHAR2(3 char)  | 匯款分類號2              |    |
|     | C622        | NUMBER(18, 0)      | 匯款金額2               |    |
|     | C69         | NUMBER(18, 0)      | 存入外匯存款              |    |
|     | C70         | VARCHAR2(13 char) | 受款人外幣帳號             |    |
|     | C71         | VARCHAR2(1 char)  | 存人外存外幣帳號-支號         |    |
|     | C72         | NUMBER(18, 0)      | 支付外幣現金              |    |
|     | C73         | NUMBER(18, 0)      | 支付旅行支票              |    |
|     | C74         | NUMBER(18, 0)      | 支付外幣貸款              |    |
|     | C75         | NUMBER(18, 0)      | 轉匯出金額               |    |
|     | C76         | NUMBER(18, 0)      | 償還外銷貸款              |    |
|     | C77         | NUMBER(18, 0)      | 預售遠匯款               |    |
|     | C78         | NUMBER(12, 6)      | 預售遠匯匯率              |    |
|     | C79         | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C80         | NUMBER(18, 0)      | 其他                  |    |
|     | C81         | NUMBER(18, 0)      | 標準手續費               |    |
|     | C82         | NUMBER(18, 0)      | 成交手續費               |    |
|     | C83         | NUMBER(18, 0)      | 郵電費                 |    |
|     | C84         | NUMBER(18, 0)      | 郵電費外幣               |    |
|     | C85         | NUMBER(18, 0)      | 退匯金額                |    |
|     | C86         | NUMBER(18, 0)      | 其他費用                |    |
|     | C87         | NUMBER(18, 0)      | 總共費用                |    |
|     | C88         | VARCHAR2(1 char)  | 手續費從本金扣             |    |
|     | C89         | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C90         | NUMBER(18, 0)      | 手續費兌換LCY            |    |
|     | C91         | NUMBER(18, 0)      | 手續費兌換FCY            |    |
|     | C92         | NUMBER(18, 0)      | 應收手續費               |    |
|     | C93         | NUMBER(18, 0)      | 實收手續費               |    |
|     | C94         | NUMBER(18, 0)      | 兌換FCY               |    |
|     | C95         | NUMBER(18, 0)      | 兌換LCY               |    |
|     | C96         | NUMBER(18, 0)      | 總兌換外幣               |    |
|     | C97         | NUMBER(18, 0)      | 總兌換台幣               |    |
|     | C98         | NUMBER(18, 0)      | 支付淨額外幣              |    |
|     | C99         | NUMBER(18, 0)      | 支付淨額台幣              |    |
|     | C100        | DATE              | 刪除日期                |    |
|     | C101        | VARCHAR2(10 char) | USERID              |    |
|     | C102        | VARCHAR2(10 char) | 主管ID                |    |
|     | C103        | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C104        | VARCHAR2(14 char) | 匯款行SWIFTCODE        |    |
|     | C105        | VARCHAR2(14 char) | 原匯行SWIFTCODE        |    |
|     | C106        | VARCHAR2(14 char) | 交易參考編號(電文)          |    |
|     | C107        | VARCHAR2(40 char) | 客戶備註1               |    |
|     | C108        | VARCHAR2(40 char) | 客戶備註2               |    |
|     | C109        | VARCHAR2(40 char) | 客戶備註3               |    |
|     | C110        | VARCHAR2(13 char) | 外幣帳號                |    |
|     | C111        | VARCHAR2(16 char) | 遠匯契約號碼              |    |
|     | C112        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C113        | NUMBER(18, 0)      | 匯入手續費               |    |
|     | C114        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C115        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C116        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C117        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C118        | NUMBER(18, 0)      | 實付台幣                |    |
|     | C119        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C120        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C121        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C122        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C123        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C124        | VARCHAR2(2 char)  | 國別代碼                |    |
|     | C125        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C126        | VARCHAR2(20 char) | 營業單位中文名             |    |
|     | C127        | VARCHAR2(40 char) | 退匯理由                |    |
|     | C128        | VARCHAR2(40 char) | 退匯理由1               |    |
|     | C129        | NUMBER(18, 0)      | 解付(現金)              |    |
|     | C130        | NUMBER(18, 0)      | 解付(其他)              |    |
|     | C131        | NUMBER(2, 0)       | 修改次數                |    |
|     | C132        | VARCHAR2(40 char) | 受款人中文名              |    |
|     | C133        | VARCHAR2(13 char) | 受款人帳號               |    |
|     | C134        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C135        | VARCHAR2(3 char)  | 幣別TEMP              |    |
|     | C136        | NUMBER(18, 0)      | 金額TEMP              |    |
|     | C137        | VARCHAR2(1 char)  | 台幣匯款FLAG            |    |
|     | C623        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C624        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C625        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C139        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C140        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C141        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C142        | VARCHAR2(2 char)  | 受款人國別               |    |
|     | C143        | VARCHAR2(20 char) | 受款人國家               |    |
|     | C144        | VARCHAR2(40 char) | 受款人名稱2              |    |
|     | C145        | VARCHAR2(6 char)  | 議價編號                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEOWE

#### 匯出匯款交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Release_Flag        |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | 交易代碼(FUNC. ID)       |    |
|     | C4          | VARCHAR2(30 char) | 交易名稱(FUNC. NAME)     |    |
|     | C5          | VARCHAR2(16 char) | 交易編號                |    |
|     | C6          | NUMBER(1, 0)       | EVENT(副檔KEY)        |    |
|     | C7          | VARCHAR2(1 char)  | NosReconcile(存同)    |    |
|     | C8          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C10         | VARCHAR2(1 char)  | TEMP                |    |
|     | C11         | VARCHAR2(1 char)  | 匯出方式選項              |    |
|     | C12         | VARCHAR2(20 char) | 匯出方式全文              |    |
|     | C13         | VARCHAR2(1 char)  | 匯款性質選項              |    |
|     | C14         | VARCHAR2(20 char) | 匯款性質全文              |    |
|     | C15         | VARCHAR2(1 char)  | 選項區分１               |    |
|     | C16         | VARCHAR2(1 char)  | 電文類別(swift_form)    |    |
|     | C17         | DATE              | 系統日(交易日)            |    |
|     | C18         | DATE              | 匯款日                 |    |
|     | C19         | DATE              | 存同扣帳日               |    |
|     | C20         | VARCHAR2(6 char)  | 申請人代號               |    |
|     | C21         | VARCHAR2(40 char) | 申請人名字               |    |
|     | C22         | VARCHAR2(40 char) | 申請人中文名字             |    |
|     | C23         | VARCHAR2(40 char) | 申請人地址１              |    |
|     | C24         | VARCHAR2(40 char) | 申請人地址２              |    |
|     | C25         | VARCHAR2(40 char) | 申請人地址３              |    |
|     | C26         | VARCHAR2(11 char) | 申請人身份證號             |    |
|     | C27         | DATE              | 申請人出生年月日            |    |
|     | C28         | VARCHAR2(12 char) | 申請人電話               |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C30         | VARCHAR2(2 char)  | 申請人台幣科目             |    |
|     | C31         | VARCHAR2(13 char) | 申請人台幣帳支號            |    |
|     | C32         | DATE              | VALUEDATE           |    |
|     | C33         | DATE              | 匯款退匯通知日             |    |
|     | C34         | VARCHAR2(20 char) | 退匯編號                |    |
|     | C35         | DATE              | 退匯日                 |    |
|     | C36         | DATE              | 匯款修改日               |    |
|     | C37         | VARCHAR2(40 char) | 受益人名字               |    |
|     | C38         | VARCHAR2(40 char) | 受益人地址１              |    |
|     | C39         | VARCHAR2(40 char) | 受益人地址２              |    |
|     | C40         | VARCHAR2(40 char) | 受益人地址３              |    |
|     | C41         | VARCHAR2(40 char) | 受益人帳號               |    |
|     | C42         | VARCHAR2(2 char)  | 受益人國家代碼             |    |
|     | C43         | VARCHAR2(40 char) | 受益人國家               |    |
|     | C44         | VARCHAR2(12 char) | 受益人電話               |    |
|     | C45         | VARCHAR2(1 char)  | 受益人身份別              |    |
|     | C46         | VARCHAR2(20 char) | 受益人身份別全文            |    |
|     | C47         | VARCHAR2(5 char)  | 存匯行CODE             |    |
|     | C48         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C49         | VARCHAR2(40 char) | 存匯行地址１              |    |
|     | C50         | VARCHAR2(40 char) | 存匯行地址２              |    |
|     | C51         | VARCHAR2(40 char) | 存匯行地址３              |    |
|     | C52         | VARCHAR2(12 char) | 存匯行SWIFTCODE        |    |
|     | C53         | VARCHAR2(5 char)  | 受益人設帳行CODE          |    |
|     | C54         | VARCHAR2(40 char) | 受益人設帳行名稱            |    |
|     | C55         | VARCHAR2(40 char) | 受益人設帳行地址１           |    |
|     | C56         | VARCHAR2(40 char) | 受益人設帳行地址２           |    |
|     | C57         | VARCHAR2(40 char) | 受益人設帳行地址３           |    |
|     | C58         | VARCHAR2(12 char) | 設帳行SWIFTCODE        |    |
|     | C59         | VARCHAR2(5 char)  | 送訊通匯行CODE           |    |
|     | C60         | VARCHAR2(40 char) | 送訊通匯行名稱             |    |
|     | C61         | VARCHAR2(40 char) | 送訊通匯行地址１            |    |
|     | C62         | VARCHAR2(40 char) | 送訊通匯行地址２            |    |
|     | C63         | VARCHAR2(40 char) | 送訊通匯行地址３            |    |
|     | C64         | VARCHAR2(12 char) | 送訊行SWIFTCODE        |    |
|     | C65         | VARCHAR2(5 char)  | 收訊通匯行CODE           |    |
|     | C66         | VARCHAR2(40 char) | 收訊通匯行名稱             |    |
|     | C67         | VARCHAR2(40 char) | 收訊通匯行地址１            |    |
|     | C68         | VARCHAR2(40 char) | 收訊通匯行地址２            |    |
|     | C69         | VARCHAR2(40 char) | 收訊通匯行地址３            |    |
|     | C70         | VARCHAR2(12 char) | 收訊行SWIFTCODE        |    |
|     | C606        | VARCHAR2(5 char)  | INTBANKCODE         |    |
|     | C607        | VARCHAR2(40 char) | INTBANKNAME         |    |
|     | C608        | VARCHAR2(40 char) | INTBANKADD1         |    |
|     | C609        | VARCHAR2(40 char) | INTBANKADD2         |    |
|     | C610        | VARCHAR2(40 char) | INTBANKADD3         |    |
|     | C611        | VARCHAR2(12 char) | INTBANKSWIFTCODE    |    |
|     | C612        | VARCHAR2(5 char)  | PAYINGBANKCODE      |    |
|     | C613        | VARCHAR2(40 char) | PAYINGBANKNAME      |    |
|     | C614        | VARCHAR2(40 char) | PAYINGBANKADD1      |    |
|     | C615        | VARCHAR2(40 char) | PAYINGBANKADD2      |    |
|     | C616        | VARCHAR2(40 char) | PAYINGBANKADD3      |    |
|     | C617        | VARCHAR2(14 char) | PAYINGBANKSWIFTCODE |    |
|     | C73         | VARCHAR2(40 char) | 備註１(英文)             |    |
|     | C74         | VARCHAR2(40 char) | 備註２(英文)             |    |
|     | C75         | VARCHAR2(40 char) | 備註３(英文)             |    |
|     | C76         | VARCHAR2(40 char) | 備註４(英文)             |    |
|     | C77         | VARCHAR2(3 char)  | 費用負擔方               |    |
|     | C78         | VARCHAR2(40 char) | 銀行間備註１(英文)          |    |
|     | C79         | VARCHAR2(40 char) | 銀行間備註２(英文)          |    |
|     | C80         | VARCHAR2(40 char) | 銀行間備註３(英文)          |    |
|     | C81         | VARCHAR2(40 char) | 銀行間備註４(英文)          |    |
|     | C82         | VARCHAR2(40 char) | 銀行間備註５(英文)          |    |
|     | C83         | VARCHAR2(40 char) | 銀行間備註６(英文)          |    |
|     | C84         | VARCHAR2(16 char) | 匯票號碼                |    |
|     | C85         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C86         | NUMBER(18, 0)      | 匯款金額(CCY)           |    |
|     | C87         | VARCHAR2(80 char) | 大寫金額１               |    |
|     | C88         | VARCHAR2(70 char) | 大寫金額２               |    |
|     | C89         | VARCHAR2(20 char) | 大寫金額3               |    |
|     | C90         | NUMBER(18, 0)      | 前次匯款餘額              |    |
|     | C91         | NUMBER(18, 0)      | 本次匯款餘額              |    |
|     | C92         | NUMBER(18, 0)      | 退匯國外費用              |    |
|     | C93         | NUMBER(18, 0)      | 退匯淨額                |    |
|     | C94         | NUMBER(12, 6)      | 現鈔買進成本匯率            |    |
|     | C95         | NUMBER(12, 6)      | 現鈔賣出成交匯率            |    |
|     | C96         | NUMBER(12, 6)      | 買入匯率(即期)            |    |
|     | C97         | NUMBER(12, 6)      | 賣出匯率(即期)            |    |
|     | C98         | NUMBER(12, 6)      | 買入匯率(現鈔)            |    |
|     | C99         | NUMBER(12, 6)      | 賣出匯率(現鈔)            |    |
|     | C100        | NUMBER(12, 6)      | 匯率上限                |    |
|     | C101        | NUMBER(12, 6)      | 匯率下限                |    |
|     | C102        | NUMBER(12, 6)      | 成本匯率                |    |
|     | C103        | NUMBER(12, 6)      | 成交匯率                |    |
|     | C104        | NUMBER(18, 0)      | TC兌換外幣              |    |
|     | C105        | NUMBER(18, 0)      | TC兌換台幣              |    |
|     | C106        | NUMBER(18, 0)      | 台幣結購金額              |    |
|     | C107        | NUMBER(18, 0)      | 預購遠匯外幣              |    |
|     | C108        | NUMBER(12, 6)      | 預購遠匯匯率              |    |
|     | C109        | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C110        | NUMBER(18, 0)      | 匯出款以外存付             |    |
|     | C111        | NUMBER(18, 0)      | 匯出款以外幣現鈔付           |    |
|     | C112        | NUMBER(18, 0)      | 匯出款以旅行支票付           |    |
|     | C113        | NUMBER(18, 0)      | 匯出款以出口或匯入款付         |    |
|     | C114        | NUMBER(18, 0)      | 匯出款以其他款項付           |    |
|     | C115        | NUMBER(18, 0)      | 轉匯出                 |    |
|     | C116        | NUMBER(18, 0)      | 匯出退匯                |    |
|     | C117        | NUMBER(18, 0)      | 應繳外幣(不含費用)          |    |
|     | C118        | NUMBER(18, 0)      | 應繳台幣(不含費用)          |    |
|     | C119        | NUMBER(18, 0)      | 兌換外幣(CCY)           |    |
|     | C120        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C121        | NUMBER(18, 0)      | 兌換外幣合計              |    |
|     | C122        | NUMBER(18, 0)      | 兌換台幣合計              |    |
|     | C123        | VARCHAR2(1 char)  | 費用從本金扣抵             |    |
|     | C124        | VARCHAR2(2 char)  | 匯款人國別代碼             |    |
|     | C125        | VARCHAR2(40 char) | 國外匯款人國別             |    |
|     | C618        | VARCHAR2(3 char)  | 匯款分類編號              |    |
|     | C619        | VARCHAR2(60 char) | 匯款分類全文              |    |
|     | C620        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C621        | VARCHAR2(3 char)  | 匯款分類編號1             |    |
|     | C622        | VARCHAR2(60 char) | 匯款分類全文1             |    |
|     | C623        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C624        | VARCHAR2(3 char)  | 匯款分類編號2             |    |
|     | C625        | VARCHAR2(60 char) | 匯款分類全文2             |    |
|     | C626        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C127        | NUMBER(18, 0)      | 退匯費用                |    |
|     | C128        | NUMBER(18, 0)      | 匯出手續費(台幣)           |    |
|     | C129        | NUMBER(18, 0)      | 旅支手續費(台幣)           |    |
|     | C130        | NUMBER(18, 0)      | 成交手續費(台幣)           |    |
|     | C131        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C132        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C133        | NUMBER(18, 0)      | 電報費                 |    |
|     | C134        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C135        | NUMBER(18, 0)      | 現鈔兌換手續費             |    |
|     | C136        | NUMBER(18, 0)      | 其他費用                |    |
|     | C137        | NUMBER(18, 0)      | TOTAL費用(WK-GT)      |    |
|     | C138        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C139        | VARCHAR2(3 char)  | 費用付款幣別              |    |
|     | C140        | NUMBER(18, 0)      | 費用兌換(台幣)            |    |
|     | C141        | NUMBER(18, 0)      | 費用兌換(外幣)            |    |
|     | C142        | NUMBER(18, 0)      | 應收費用(台幣)            |    |
|     | C143        | NUMBER(18, 0)      | 應收費用(外幣)            |    |
|     | C144        | NUMBER(18, 0)      | 應收付款(外幣)            |    |
|     | C145        | NUMBER(18, 0)      | 應收付款(外幣現鈔)          |    |
|     | C146        | NUMBER(18, 0)      | 應收付款(台幣)            |    |
|     | C147        | VARCHAR2(4 char)  | 手續費編碼               |    |
|     | C148        | NUMBER(12, 6)      | 手續費費率               |    |
|     | C149        | VARCHAR2(3 char)  | 手續費幣別               |    |
|     | C150        | NUMBER(18, 0)      | 手續費一次性收費            |    |
|     | C151        | NUMBER(18, 0)      | 手續費最高收費             |    |
|     | C152        | NUMBER(18, 0)      | 手續費最低收費             |    |
|     | C153        | VARCHAR2(1 char)  | 手續費收費方式             |    |
|     | C154        | NUMBER(12, 6)      | 手續費成交匯率             |    |
|     | C155        | VARCHAR2(8 char)  | 摘要KEY(FILENOTE)     |    |
|     | C156        | DATE              | 刪除日期                |    |
|     | C157        | VARCHAR2(10 char) | 經辦ID                |    |
|     | C158        | VARCHAR2(10 char) | 主管ID                |    |
|     | C159        | VARCHAR2(16 char) | 遠契契約號碼              |    |
|     | C160        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C161        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C162        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C163        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C164        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C165        | VARCHAR2(2 char)  | 業務代碼(APCODE)        |    |
|     | C166        | VARCHAR2(5 char)  | NEC連動代號(TXCODE)     |    |
|     | C167        | VARCHAR2(40 char) | 會計摘要                |    |
|     | C168        | VARCHAR2(20 char) | 會計KEY(傳票編號)         |    |
|     | C169        | NUMBER(5, 0)       | 傳票序號                |    |
|     | C627        | VARCHAR2(20 char) | 電文稿一                |    |
|     | C628        | VARCHAR2(20 char) | 電文稿二                |    |
|     | C629        | VARCHAR2(20 char) | 電文稿三                |    |
|     | C630        | VARCHAR2(20 char) | 電文稿四                |    |
|     | C631        | VARCHAR2(20 char) | 電文稿五                |    |
|     | C632        | VARCHAR2(20 char) | 電文稿六                |    |
|     | C633        | VARCHAR2(20 char) | 電文稿七                |    |
|     | C171        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C172        | VARCHAR2(20 char) | 分行中文名稱              |    |
|     | C173        | VARCHAR2(3 char)  | 違約金幣別               |    |
|     | C174        | NUMBER(18, 0)      | 違約金金額               |    |
|     | C175        | NUMBER(18, 0)      | 外匯定存                |    |
|     | C176        | VARCHAR2(4 char)  | 預購_售活存營業單位          |    |
|     | C177        | VARCHAR2(2 char)  | 預購_售活存科目            |    |
|     | C178        | VARCHAR2(6 char)  | 預購_售活存顧客號碼          |    |
|     | C179        | NUMBER(1, 0)       | 預購_售活存檢號            |    |
|     | C180        | VARCHAR2(3 char)  | 預購_售活存摘要            |    |
|     | C634        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C635        | VARCHAR2(4 char)  | 績效歸屬部門              |    |
|     | C636        | VARCHAR2(7 char)  | 積效歸屬AO代碼            |    |
|     | C182        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C183        | VARCHAR2(13 char) | 台幣扣款帳號              |    |
|     | C184        | NUMBER(18, 0)      | 連動台幣扣款金額            |    |
|     | C185        | VARCHAR2(4 char)  | 代辦行                 |    |
|     | C186        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C187        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C188        | VARCHAR2(1 char)  | 全額到位                |    |
|     | C637        | VARCHAR2(1 char)  | 議價處理區分              |    |
|     | C638        | VARCHAR2(6 char)  | 議價編號                |    |
|     | C639        | VARCHAR2(1 char)  | 買賣區分                |    |
|     | C640        | VARCHAR2(3 char)  | 議價幣別                |    |
|     | C641        | NUMBER(18, 0)      | 議價成交金額              |    |
|     | C190        | VARCHAR2(40 char) | 申請人中文名字2            |    |
|     | C191        | VARCHAR2(40 char) | 申請人中文名字3            |    |
|     | C192        | VARCHAR2(13 char) | BNFBANK_BRANCHCODE  |    |
|     | C193        | VARCHAR2(1 char)  | 是否大陸進口              |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |    |

### VW_ODS_D_FILEOWM

#### 匯出匯款主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | HOLDMARK            |    |
|     | C2          | NUMBER(2, 0)       | 版次                  |    |
|     | C3          | VARCHAR2(8 char)  | 交易代號(FUNC. ID)       |    |
|     | C4          | VARCHAR2(30 char) | 交易名稱(FUNC. NAME)     |    |
|     | C5          | VARCHAR2(16 char) | 交易編號                |    |
|     | C6          | NUMBER(1, 0)       | EVENTNO             |    |
|     | C7          | VARCHAR2(1 char)  | NosReconcile(存同)    |    |
|     | C8          | VARCHAR2(4 char)  | 營業單位                |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                |    |
|     | C10         | VARCHAR2(1 char)  | TEMP                |    |
|     | C11         | VARCHAR2(1 char)  | 匯出方式                |    |
|     | C12         | VARCHAR2(20 char) | 匯出方式全文              |    |
|     | C13         | VARCHAR2(1 char)  | 匯款性質                |    |
|     | C14         | VARCHAR2(20 char) | 匯款性質全文              |    |
|     | C15         | VARCHAR2(1 char)  | SWIFTFORM           |    |
|     | C16         | DATE              | 系統日                 |    |
|     | C17         | DATE              | 匯款日                 |    |
|     | C18         | DATE              | VALUEDATE           |    |
|     | C19         | DATE              | 退匯通知日               |    |
|     | C20         | DATE              | 存同扣帳日               |    |
|     | C21         | VARCHAR2(6 char)  | 申請人CODE             |    |
|     | C22         | VARCHAR2(40 char) | 申請人名字               |    |
|     | C23         | VARCHAR2(40 char) | 申請人中文名字             |    |
|     | C24         | VARCHAR2(40 char) | 申請人地址１              |    |
|     | C25         | VARCHAR2(40 char) | 申請人地址２              |    |
|     | C26         | VARCHAR2(40 char) | 申請人地址３              |    |
|     | C27         | VARCHAR2(11 char) | 申請人身份證字號            |    |
|     | C28         | DATE              | 申請人出生日              |    |
|     | C29         | VARCHAR2(12 char) | 申請人電話               |    |
|     | C601        | VARCHAR2(4 char)  | 外幣帳號-營業單位           |    |
|     | C602        | VARCHAR2(2 char)  | 外幣帳號-科目             |    |
|     | C603        | VARCHAR2(6 char)  | 外幣帳號-顧客號碼           |    |
|     | C604        | NUMBER(1, 0)       | 外幣帳號-檢號             |    |
|     | C605        | VARCHAR2(3 char)  | 外幣帳號-摘要             |    |
|     | C31         | VARCHAR2(2 char)  | 申請人台幣科目             |    |
|     | C32         | VARCHAR2(13 char) | 申請人台幣帳號             |    |
|     | C33         | DATE              | 退匯日                 |    |
|     | C34         | VARCHAR2(20 char) | 退匯編號                |    |
|     | C35         | DATE              | 匯款修改日               |    |
|     | C36         | VARCHAR2(40 char) | 受益人名字               |    |
|     | C37         | VARCHAR2(40 char) | 受益人地址１              |    |
|     | C38         | VARCHAR2(40 char) | 受益人地址２              |    |
|     | C39         | VARCHAR2(40 char) | 受益人地址３              |    |
|     | C40         | VARCHAR2(40 char) | 受益人帳號               |    |
|     | C41         | VARCHAR2(20 char) | 受益人國家               |    |
|     | C42         | VARCHAR2(12 char) | 受益人電話               |    |
|     | C43         | VARCHAR2(1 char)  | 受益人身份別              |    |
|     | C44         | VARCHAR2(20 char) | 受益人身份別全文            |    |
|     | C45         | VARCHAR2(5 char)  | 存匯行代號               |    |
|     | C46         | VARCHAR2(40 char) | 存匯行名稱               |    |
|     | C47         | VARCHAR2(40 char) | 存匯行地址１              |    |
|     | C48         | VARCHAR2(40 char) | 存匯行地址２              |    |
|     | C49         | VARCHAR2(40 char) | 存匯行地址３              |    |
|     | C50         | VARCHAR2(14 char) | 存匯行SWIFTCODE        |    |
|     | C51         | VARCHAR2(5 char)  | 受益人設帳行CODE          |    |
|     | C52         | VARCHAR2(40 char) | 受益人設帳行名稱            |    |
|     | C53         | VARCHAR2(40 char) | 受益人設帳行地址１           |    |
|     | C54         | VARCHAR2(40 char) | 受益人設帳行地址２           |    |
|     | C55         | VARCHAR2(40 char) | 受益人設帳行地址３           |    |
|     | C56         | VARCHAR2(14 char) | 設帳行SWIFT_CODE       |    |
|     | C57         | VARCHAR2(5 char)  | 送訊通匯行CODE           |    |
|     | C58         | VARCHAR2(40 char) | 送訊通匯行名稱             |    |
|     | C59         | VARCHAR2(40 char) | 送訊通匯行地址１            |    |
|     | C60         | VARCHAR2(40 char) | 送訊通匯行地址２            |    |
|     | C61         | VARCHAR2(40 char) | 送訊通匯行地址３            |    |
|     | C62         | VARCHAR2(14 char) | 送訊行SWIFTCODE        |    |
|     | C63         | VARCHAR2(5 char)  | 收訊通匯行CODE           |    |
|     | C64         | VARCHAR2(40 char) | 收訊通匯行名稱             |    |
|     | C65         | VARCHAR2(40 char) | 收訊通匯行地址１            |    |
|     | C66         | VARCHAR2(40 char) | 收訊通匯行地址２            |    |
|     | C67         | VARCHAR2(40 char) | 收訊通匯行地址３            |    |
|     | C68         | VARCHAR2(14 char) | 收訊行SWIFTCODE        |    |
|     | C606        | VARCHAR2(5 char)  | INTBANKCODE         |    |
|     | C607        | VARCHAR2(40 char) | INTBANKNAME         |    |
|     | C608        | VARCHAR2(40 char) | INTBANKADD1         |    |
|     | C609        | VARCHAR2(40 char) | INTBANKADD2         |    |
|     | C610        | VARCHAR2(40 char) | INTBANKADD3         |    |
|     | C611        | VARCHAR2(14 char) | INTBANKSWIFTCODE    |    |
|     | C612        | VARCHAR2(5 char)  | PAYINGBANKCODE      |    |
|     | C613        | VARCHAR2(40 char) | PAYINGBANKNAME      |    |
|     | C614        | VARCHAR2(40 char) | PAYINGBANKADD1      |    |
|     | C615        | VARCHAR2(40 char) | PAYINGBANKADD2      |    |
|     | C616        | VARCHAR2(40 char) | PAYINGBANKADD3      |    |
|     | C617        | VARCHAR2(14 char) | PAYINGBANKSWIFTCODE |    |
|     | C71         | VARCHAR2(40 char) | 備註１                 |    |
|     | C72         | VARCHAR2(40 char) | 備註２                 |    |
|     | C73         | VARCHAR2(40 char) | 備註３                 |    |
|     | C74         | VARCHAR2(40 char) | 備註４                 |    |
|     | C75         | VARCHAR2(3 char)  | 費用負擔方               |    |
|     | C76         | VARCHAR2(40 char) | 銀行間備註１(英)           |    |
|     | C77         | VARCHAR2(40 char) | 銀行間備註２(英)           |    |
|     | C78         | VARCHAR2(40 char) | 銀行間備註３(英)           |    |
|     | C79         | VARCHAR2(40 char) | 銀行間備註４(英)           |    |
|     | C80         | VARCHAR2(40 char) | 銀行間備註５(英)           |    |
|     | C81         | VARCHAR2(40 char) | 銀行間備註６(英)           |    |
|     | C82         | VARCHAR2(16 char) | 匯款號碼                |    |
|     | C83         | VARCHAR2(3 char)  | 匯款幣別                |    |
|     | C84         | NUMBER(18, 0)      | 匯款金額(外幣)            |    |
|     | C85         | VARCHAR2(60 char) | 大寫金額１(英)            |    |
|     | C86         | VARCHAR2(60 char) | 大寫金額２(英)            |    |
|     | C87         | VARCHAR2(40 char) | 大寫金額3               |    |
|     | C88         | NUMBER(18, 0)      | 前次匯款餘額              |    |
|     | C89         | NUMBER(18, 0)      | 本次匯款餘額              |    |
|     | C90         | NUMBER(18, 0)      | 退匯國外費用              |    |
|     | C91         | NUMBER(18, 0)      | 退匯淨額                |    |
|     | C92         | NUMBER(12, 6)      | 成本匯率(現鈔)            |    |
|     | C93         | NUMBER(12, 6)      | 成交匯率(現鈔)            |    |
|     | C94         | NUMBER(12, 6)      | 買入匯率(即期)            |    |
|     | C95         | NUMBER(12, 6)      | 賣出匯率(即期)            |    |
|     | C96         | NUMBER(12, 6)      | 匯率上限                |    |
|     | C97         | NUMBER(12, 6)      | 匯率下限                |    |
|     | C98         | NUMBER(12, 6)      | 成本匯率                |    |
|     | C99         | NUMBER(12, 6)      | 成交匯率                |    |
|     | C100        | NUMBER(18, 0)      | 兌換外幣                |    |
|     | C101        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C102        | NUMBER(18, 0)      | 台幣結購                |    |
|     | C103        | NUMBER(18, 0)      | 預購遠匯外幣              |    |
|     | C104        | NUMBER(12, 6)      | 預購遠匯匯率              |    |
|     | C105        | NUMBER(18, 0)      | 兌換遠匯                |    |
|     | C106        | NUMBER(18, 0)      | 匯出款－外存付             |    |
|     | C107        | NUMBER(18, 0)      | 匯出款－外幣現鈔付           |    |
|     | C108        | NUMBER(18, 0)      | 匯出款－旅行支票付           |    |
|     | C109        | NUMBER(18, 0)      | 匯出款－出口或匯入款付         |    |
|     | C110        | NUMBER(18, 0)      | 匯出款－其他款項付           |    |
|     | C111        | NUMBER(18, 0)      | 轉匯出                 |    |
|     | C112        | NUMBER(18, 0)      | 匯出退匯                |    |
|     | C113        | NUMBER(18, 0)      | 兌換外幣                |    |
|     | C114        | NUMBER(18, 0)      | 兌換台幣                |    |
|     | C115        | NUMBER(18, 0)      | 兌換外幣總金額             |    |
|     | C116        | NUMBER(18, 0)      | 兌換台幣總金額             |    |
|     | C117        | NUMBER(18, 0)      | 匯出款總金額              |    |
|     | C118        | VARCHAR2(1 char)  | 費用從本金扣抵             |    |
|     | C119        | NUMBER(18, 0)      | 匯款淨額                |    |
|     | C120        | VARCHAR2(40 char) | 國外匯款人國別             |    |
|     | C618        | VARCHAR2(3 char)  | 匯款分類號               |    |
|     | C619        | NUMBER(18, 0)      | 匯款分類金額              |    |
|     | C620        | VARCHAR2(3 char)  | 匯款分類號1              |    |
|     | C621        | NUMBER(18, 0)      | 匯款分類金額1             |    |
|     | C622        | VARCHAR2(3 char)  | 匯款分類號2              |    |
|     | C623        | NUMBER(18, 0)      | 匯款分類金額2             |    |
|     | C122        | NUMBER(18, 0)      | 退匯費用                |    |
|     | C123        | NUMBER(18, 0)      | 匯出手續費               |    |
|     | C124        | NUMBER(18, 0)      | 旅支手續費               |    |
|     | C125        | NUMBER(18, 0)      | 成交手續費               |    |
|     | C126        | NUMBER(18, 0)      | 轉匯出手續費              |    |
|     | C127        | NUMBER(18, 0)      | 轉匯出郵電費              |    |
|     | C128        | NUMBER(18, 0)      | 電報費                 |    |
|     | C129        | NUMBER(18, 0)      | 郵電費                 |    |
|     | C130        | NUMBER(18, 0)      | 現鈔兌換差價              |    |
|     | C131        | NUMBER(18, 0)      | 其他費用                |    |
|     | C132        | NUMBER(18, 0)      | 總費用(台幣)             |    |
|     | C133        | VARCHAR2(3 char)  | 費用付款幣別              |    |
|     | C134        | NUMBER(18, 0)      | 費用兌換台幣              |    |
|     | C135        | NUMBER(18, 0)      | 費用兌換外幣              |    |
|     | C136        | NUMBER(18, 0)      | 應收費用                |    |
|     | C137        | NUMBER(18, 0)      | 實收費用                |    |
|     | C138        | NUMBER(18, 0)      | 應收付款(外幣)            |    |
|     | C139        | NUMBER(18, 0)      | 應收付款(外幣現鈔)          |    |
|     | C140        | NUMBER(18, 0)      | 應收付台幣               |    |
|     | C141        | NUMBER(18, 0)      | 實收台幣                |    |
|     | C142        | NUMBER(18, 0)      | 應收帳款                |    |
|     | C143        | NUMBER(18, 0)      | 應付帳款                |    |
|     | C144        | DATE              | 刪除日期                |    |
|     | C145        | VARCHAR2(10 char) | USERID              |    |
|     | C146        | VARCHAR2(10 char) | 主管ID                |    |
|     | C147        | VARCHAR2(2 char)  | 業務代碼(APCode)        |    |
|     | C148        | VARCHAR2(16 char) | 遠契契約號碼              |    |
|     | C149        | NUMBER(18, 0)      | 存入台幣存款              |    |
|     | C150        | VARCHAR2(3 char)  | 遠匯交割幣別              |    |
|     | C151        | NUMBER(18, 0)      | 應付遠匯                |    |
|     | C152        | VARCHAR2(13 char) | 遠匯交割帳號              |    |
|     | C153        | VARCHAR2(1 char)  | 遠匯交割帳號-支號           |    |
|     | C154        | NUMBER(18, 0)      | 各業務交割金額合計           |    |
|     | C155        | VARCHAR2(2 char)  | 國家代碼                |    |
|     | C156        | NUMBER(12, 6)      | 議價匯率                |    |
|     | C157        | VARCHAR2(20 char) | 分行中文名稱              |    |
|     | C624        | VARCHAR2(4 char)  | 績效歸屬單位              |    |
|     | C625        | VARCHAR2(1 char)  | 績效歸屬部門              |    |
|     | C626        | VARCHAR2(7 char)  | 績效歸屬AO代碼            |    |
|     | C159        | VARCHAR2(4 char)  | 區域中心                |    |
|     | C160        | VARCHAR2(4 char)  | 代辦行                 |    |
|     | C161        | VARCHAR2(4 char)  | 代理行                 |    |
|     | C162        | VARCHAR2(40 char) | 匯款人帳號               |    |
|     | C163        | VARCHAR2(2 char)  | 申請人國別               |    |
|     | C164        | VARCHAR2(20 char) | 申請人國家               |    |
|     | C165        | VARCHAR2(1 char)  | 全額到位                |    |
|     | C166        | VARCHAR2(40 char) | 申請人中文名字2            |    |
|     | C167        | VARCHAR2(40 char) | 申請人中文名字3            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間              |
