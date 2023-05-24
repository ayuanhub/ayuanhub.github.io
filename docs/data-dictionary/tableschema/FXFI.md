---
sidebar_position: 30
title: 外匯系統-進口(FXFI)
---

### VW_ODS_D_FILE0IAM

#### 進口到單帳戶主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀_託收編號               |    |
| PK  | C3          | VARCHAR2(1 char)  | 業務別                    |    |
| PK  | C4          | NUMBER(2, 0)       | 到單次數_託收交易序號            |    |
|     | C5          | NUMBER(1, 0)       | 交易檔序號                  |    |
|     | C6          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C7          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C8          | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                   |    |
|     | C10         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C11         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C12         | VARCHAR2(1 char)  | 擔提種類                   |    |
|     | C13         | VARCHAR2(1 char)  | 融資種類                   |    |
|     | C14         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C15         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C16         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C17         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C18         | NUMBER(18, 0)      | 信用狀可用餘額                |    |
|     | C19         | NUMBER(18, 0)      | 國外求償金額                 |    |
|     | C20         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C21         | NUMBER(18, 0)      | 擔提金額                   |    |
|     | C22         | NUMBER(18, 0)      | 超押金額                   |    |
|     | C23         | NUMBER(18, 0)      | 轉放款金額                  |    |
|     | C24         | NUMBER(18, 0)      | 進口押匯款_應收承兌票款           |    |
|     | C25         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C26         | NUMBER(18, 0)      | 國外費用累計_外幣              |    |
|     | C27         | NUMBER(18, 0)      | 我方費用累計_外幣              |    |
|     | C28         | NUMBER(18, 0)      | 保兌費用_外幣                |    |
|     | C29         | NUMBER(18, 0)      | 郵電費_外幣                 |    |
|     | C30         | NUMBER(18, 0)      | 到單匯款金額                 |    |
|     | C31         | NUMBER(18, 2)      | 恢復額度                   |    |
|     | C32         | NUMBER(18, 0)      | 國外費用累計_臺幣              |    |
|     | C33         | NUMBER(18, 0)      | 我方費用累計                 |    |
|     | C34         | NUMBER(18, 0)      | 保兌費退費累計                |    |
|     | C35         | NUMBER(18, 0)      | 利息費用_臺幣                |    |
|     | C36         | NUMBER(18, 0)      | 違約金累計_臺幣               |    |
|     | C37         | VARCHAR2(16 char) | 主信用狀號碼                 |    |
|     | C38         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C39         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C40         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C41         | DATE              | 擔提日期                   |    |
|     | C42         | DATE              | 註銷擔提日_到單               |    |
|     | C43         | DATE              | 國外扣帳日_託收繳款日            |    |
|     | C44         | DATE              | 到單日期                   |    |
|     | C45         | DATE              | 通知日期_催收文件寄發日           |    |
|     | C46         | DATE              | 國外押匯日                  |    |
|     | C47         | DATE              | 承兌取單日_託收DA承兌           |    |
|     | C48         | DATE              | 拒付日期                   |    |
|     | C49         | DATE              | 繳款日期                   |    |
|     | C50         | DATE              | 轉放款日期                  |    |
|     | C51         | DATE              | 拒付解除日期                 |    |
|     | C52         | DATE              | 裝船日期                   |    |
|     | C53         | DATE              | 到期日期                   |    |
|     | C54         | DATE              | 存同起息日                  |    |
|     | C55         | VARCHAR2(1 char)  | 擔提_副提單沖轉FLAG           |    |
|     | C56         | DATE              | 解除擔提日                  |    |
|     | C57         | DATE              | 取消信用狀日                 |    |
|     | C58         | VARCHAR2(1 char)  | 承兌電文製發Flag             |    |
|     | C59         | VARCHAR2(1 char)  | 匯款電文製發Flag             |    |
|     | C60         | VARCHAR2(1 char)  | 拒付電文製發Flag             |    |
|     | C61         | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C62         | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C63         | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C64         | VARCHAR2(1 char)  | 是否轉放款or是否付款_託收擔提       |    |
|     | C65         | VARCHAR2(1 char)  | 客戶是否付款_託收DA承兌          |    |
|     | C66         | VARCHAR2(1 char)  | 是否求償授權                 |    |
|     | C67         | VARCHAR2(1 char)  | 是否瑕疵                   |    |
|     | C68         | VARCHAR2(40 char) | 瑕疵明細                   |    |
|     | C69         | VARCHAR2(20 char) | 押匯銀行參考編號               |    |
|     | C70         | VARCHAR2(20 char) | 提單號碼                   |    |
|     | C71         | VARCHAR2(30 char) | 船名_航次                  |    |
|     | C72         | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C73         | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C74         | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C601        | VARCHAR2(40 char) | 申請人英文名稱                |    |
|     | C602        | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C603        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C605        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C606        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C607        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C608        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C609        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C77         | VARCHAR2(5 char)  | 押匯銀行編號                 |    |
|     | C78         | VARCHAR2(40 char) | 押匯銀行名稱                 |    |
|     | C79         | VARCHAR2(12 char) | 押匯銀行SWIFT_CODE         |    |
|     | C80         | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C81         | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C82         | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C610        | VARCHAR2(40 char) | 船公司名稱                  |    |
|     | C611        | VARCHAR2(40 char) | 船公司地址一                 |    |
|     | C612        | VARCHAR2(40 char) | 船公司地址二                 |    |
|     | C613        | VARCHAR2(40 char) | 船公司地址三                 |    |
|     | C84         | DATE              | 託收登錄日                  |    |
|     | C614        | VARCHAR2(3 char)  | 轉放款幣別                  |    |
|     | C615        | NUMBER(18, 0)      | 幣別轉換金額                 |    |
|     | C616        | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C86         | NUMBER(18, 0)      | 保證金交易金額                |    |
|     | C87         | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C88         | DATE              | 營業日期                   |    |
|     | C89         | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C90         | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C617        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C92         | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C93         | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C94         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C95         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C96         | NUMBER(18, 2)      | 等值美金-報表用               |    |
|     | C97         | VARCHAR2(1 char)  | 託收性質                   |    |
|     | C98         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C99         | VARCHAR2(4 char)  | 代理行                    |    |
|     | C100        | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C101        | VARCHAR2(7 char)  | AO代碼                   |    |
|     | C102        | NUMBER(18, 0)      | 瑕疵費用                   |    |
|     | C103        | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C104        | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C105        | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C106        | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C107        | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C108        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C109        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C110        | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C111        | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C112        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILE0IGM

#### 保證業務帳戶主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 交易編號                   |    |
|     | C3          | NUMBER(2, 0)       | 交易檔序號                  |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C5          | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C6          | VARCHAR2(1 char)  | 保證型式                   |    |
|     | C7          | VARCHAR2(1 char)  | 保證種類                   |    |
|     | C8          | VARCHAR2(1 char)  | 分期區分                   |    |
|     | C9          | VARCHAR2(1 char)  | 戶況                     |    |
|     | C10         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C11         | VARCHAR2(2 char)  | 子目                     |    |
|     | C12         | NUMBER(2, 0)       | 修改次數                   |    |
|     | C13         | VARCHAR2(3 char)  | 保證金幣別                  |    |
|     | C14         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C15         | NUMBER(18, 0)      | 開發時保證金額                |    |
|     | C16         | NUMBER(18, 0)      | 目前保證金額                 |    |
|     | C17         | NUMBER(18, 0)      | 解除時保證金額                |    |
|     | C18         | NUMBER(18, 0)      | 賠償金額                   |    |
|     | C19         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C20         | NUMBER(18, 2)      | 目前額度餘額                 |    |
|     | C21         | NUMBER(18, 0)      | 預收手續費餘額                |    |
|     | C22         | NUMBER(18, 0)      | 累計優惠手續費                |    |
|     | C23         | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C24         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C25         | NUMBER(2, 0)       | 開發時保證期數                |    |
|     | C26         | NUMBER(2, 0)       | 目前保證期數                 |    |
|     | C27         | DATE              | 開發保證日                  |    |
|     | C28         | DATE              | 解除保證日                  |    |
|     | C29         | DATE              | 違約設定日                  |    |
|     | C30         | DATE              | 有效期限                   |    |
|     | C31         | DATE              | 最後交易日                  |    |
|     | C601        | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C602        | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C603        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C605        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C606        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C607        | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C608        | VARCHAR2(2 char)  | 受益人國別代碼                |    |
|     | C609        | VARCHAR2(30 char) | 受益人國別                  |    |
|     | C610        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C611        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C612        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C613        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C614        | VARCHAR2(5 char)  | 保證銀行編號                 |    |
|     | C615        | VARCHAR2(40 char) | 保證銀行名稱                 |    |
|     | C616        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C617        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C36         | VARCHAR2(1 char)  | 開立保函方式                 |    |
|     | C37         | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C38         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C39         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C40         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C41         | VARCHAR2(4 char)  | 代理行                    |    |
|     | C42         | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C43         | VARCHAR2(7 char)  | AO代號                   |    |
|     | C44         | NUMBER(12, 6)      | 手續費率                   |    |
|     | C45         | VARCHAR2(1 char)  | 資金投資大陸註記               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILE0IGP

#### 保證業務工作暫存檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 交易編號                   |    |
| PK  | C3          | NUMBER(2, 0)       | 交易檔序號                  |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C5          | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C6          | VARCHAR2(1 char)  | 保證型式                   |    |
|     | C7          | VARCHAR2(3 char)  | 保證型式Q-KEY              |    |
|     | C8          | VARCHAR2(20 char) | 保證型式全文                 |    |
|     | C9          | VARCHAR2(1 char)  | 保證種類                   |    |
|     | C10         | VARCHAR2(3 char)  | 保證種類Q-KEY              |    |
|     | C11         | VARCHAR2(20 char) | 保證種類全文                 |    |
|     | C12         | VARCHAR2(1 char)  | 分期區分                   |    |
|     | C13         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C14         | VARCHAR2(2 char)  | 子目                     |    |
|     | C15         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C16         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C17         | NUMBER(2, 0)       | 前次交易序號                 |    |
|     | C18         | NUMBER(2, 0)       | 版次_更正次數                |    |
|     | C19         | NUMBER(2, 0)       | 修改次數                   |    |
|     | C20         | VARCHAR2(3 char)  | 保證金幣別                  |    |
|     | C21         | VARCHAR2(3 char)  | 美金幣別                   |    |
|     | C22         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C23         | NUMBER(12, 6)      | 掛牌中價匯率_CCY-TWD         |    |
|     | C24         | NUMBER(12, 6)      | 成本匯率_CCY-TWD           |    |
|     | C25         | NUMBER(12, 6)      | 成交匯率_CCY-TWD           |    |
|     | C26         | NUMBER(12, 6)      | 議價匯率                   |    |
|     | C27         | VARCHAR2(1 char)  | 議價Flag                 |    |
|     | C28         | NUMBER(12, 6)      | 遠期匯率_CCY-TWD           |    |
|     | C29         | NUMBER(12, 6)      | 對美金匯率-USD-CCY_交叉匯率     |    |
|     | C30         | NUMBER(12, 6)      | 匯率上限                   |    |
|     | C31         | NUMBER(12, 6)      | 匯率下限                   |    |
|     | C32         | NUMBER(12, 6)      | 標準手續費率                 |    |
|     | C33         | NUMBER(12, 6)      | 成交手續費率                 |    |
|     | C34         | NUMBER(18, 0)      | 前次保證金額                 |    |
|     | C35         | NUMBER(18, 0)      | 本次保證金額                 |    |
|     | C36         | NUMBER(18, 0)      | 保證金額異動金額               |    |
|     | C37         | NUMBER(18, 0)      | 賠償金額                   |    |
|     | C38         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C39         | NUMBER(18, 0)      | 應收手續費                  |    |
|     | C40         | NUMBER(18, 0)      | 實收手續費                  |    |
|     | C41         | NUMBER(18, 0)      | 最低手續費_應付遠匯款            |    |
|     | C42         | NUMBER(18, 0)      | 優惠手續費                  |    |
|     | C43         | NUMBER(18, 0)      | 前次優惠手續費                |    |
|     | C44         | NUMBER(18, 0)      | 本次優惠手續費                |    |
|     | C45         | NUMBER(18, 0)      | 前次預收手續費                |    |
|     | C46         | NUMBER(18, 0)      | 本次預收手續費                |    |
|     | C47         | NUMBER(18, 0)      | 郵電費                    |    |
|     | C48         | NUMBER(18, 0)      | 新臺幣結購外幣                |    |
|     | C49         | NUMBER(18, 0)      | 以外匯存款支付                |    |
|     | C50         | NUMBER(18, 0)      | 旅行支票_外幣現鈔              |    |
|     | C51         | NUMBER(18, 0)      | 遠期外匯結購                 |    |
|     | C52         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C53         | NUMBER(18, 0)      | 出口或匯入款轉匯               |    |
|     | C54         | NUMBER(18, 0)      | 其他                     |    |
|     | C55         | NUMBER(18, 0)      | 應收原幣金額                 |    |
|     | C56         | NUMBER(18, 0)      | 應收臺幣金額                 |    |
|     | C57         | NUMBER(18, 0)      | 實收原幣金額                 |    |
|     | C58         | NUMBER(18, 0)      | 實收臺幣金額                 |    |
|     | C59         | NUMBER(18, 0)      | 結匯原幣金額                 |    |
|     | C60         | NUMBER(18, 0)      | 結匯臺幣金額                 |    |
|     | C601        | VARCHAR2(40 char) | 金額大寫一                  |    |
|     | C602        | VARCHAR2(40 char) | 金額大寫二                  |    |
|     | C603        | VARCHAR2(40 char) | 金額大寫三                  |    |
|     | C604        | VARCHAR2(40 char) | 金額大寫四                  |    |
|     | C62         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C63         | VARCHAR2(3 char)  | 額度幣別                   |    |
|     | C64         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C65         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C66         | VARCHAR2(13 char) | 外幣帳號                   |    |
|     | C605        | VARCHAR2(4 char)  | 營業單位_連動活存              |    |
|     | C606        | VARCHAR2(2 char)  | 活存科目                   |    |
|     | C607        | VARCHAR2(6 char)  | 顧客號碼_連動活存              |    |
|     | C608        | NUMBER(1, 0)       | 檢號                     |    |
|     | C609        | VARCHAR2(3 char)  | 活存摘要                   |    |
|     | C68         | NUMBER(2, 0)       | 前次保證期數                 |    |
|     | C69         | NUMBER(2, 0)       | 本次保證期數                 |    |
|     | C70         | NUMBER(2, 0)       | 期數差                    |    |
|     | C71         | DATE              | 開發日期                   |    |
|     | C72         | DATE              | 記帳日                    |    |
|     | C73         | DATE              | 前次有效期限                 |    |
|     | C74         | DATE              | 本次有效期限                 |    |
|     | C75         | DATE              | 最後交易日                  |    |
|     | C610        | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C611        | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C612        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C613        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C614        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C615        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C616        | VARCHAR2(8 char)  | 申請人出生年月日               |    |
|     | C617        | VARCHAR2(40 char) | 申請人中名名稱                |    |
|     | C618        | VARCHAR2(2 char)  | 受益人國別代碼                |    |
|     | C619        | VARCHAR2(30 char) | 受益人國別                  |    |
|     | C620        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C621        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C622        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C623        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C624        | VARCHAR2(5 char)  | 保證銀行編號                 |    |
|     | C625        | VARCHAR2(40 char) | 保證銀行名稱                 |    |
|     | C626        | VARCHAR2(40 char) | 保證銀行地址一                |    |
|     | C627        | VARCHAR2(40 char) | 保證銀行地址二                |    |
|     | C628        | VARCHAR2(40 char) | 保證銀行地址三                |    |
|     | C629        | VARCHAR2(12 char) | 保證銀行SWIFT_CODE         |    |
|     | C630        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C631        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C632        | VARCHAR2(40 char) | 存匯銀行地址一                |    |
|     | C633        | VARCHAR2(40 char) | 存匯銀行地址二                |    |
|     | C634        | VARCHAR2(40 char) | 存匯銀行地址三                |    |
|     | C635        | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C80         | VARCHAR2(9 char)  | CIR-KEY                |    |
|     | C81         | VARCHAR2(8 char)  | 業務經辦                   |    |
|     | C82         | VARCHAR2(8 char)  | 業務主管                   |    |
|     | C83         | VARCHAR2(1 char)  | 業務放行註記                 |    |
|     | C84         | VARCHAR2(8 char)  | 業務功能代碼                 |    |
|     | C85         | VARCHAR2(2 char)  | 業務代碼                   |    |
|     | C86         | VARCHAR2(5 char)  | 臺幣連動交易代碼               |    |
|     | C87         | VARCHAR2(40 char) | 會計摘要                   |    |
|     | C88         | VARCHAR2(20 char) | 會計傳票KEY                |    |
|     | C89         | NUMBER(5, 0)       | 會計傳票序號                 |    |
|     | C727        | VARCHAR2(20 char) | 電文稿格式一                 |    |
|     | C728        | VARCHAR2(20 char) | 電文稿格式二                 |    |
|     | C729        | VARCHAR2(20 char) | 電文稿格式三                 |    |
|     | C730        | VARCHAR2(20 char) | 電文稿格式四                 |    |
|     | C731        | VARCHAR2(20 char) | 電文稿格式五                 |    |
|     | C732        | VARCHAR2(20 char) | 電文稿格式六                 |    |
|     | C733        | VARCHAR2(20 char) | 電文稿格式七                 |    |
|     | C734        | VARCHAR2(4 char)  | 手續費編碼                  |    |
|     | C735        | NUMBER(12, 6)      | 手續費率                   |    |
|     | C736        | VARCHAR2(3 char)  | 手續費幣別                  |    |
|     | C737        | NUMBER(18, 0)      | 手續費一次性收費額              |    |
|     | C738        | NUMBER(18, 0)      | 手續費最高收費                |    |
|     | C739        | NUMBER(18, 0)      | 手續費最低收費                |    |
|     | C740        | VARCHAR2(1 char)  | 手續費收費方式                |    |
|     | C741        | NUMBER(12, 6)      | 手續費成交匯率                |    |
|     | C742        | NUMBER(12, 6)      | 客戶優惠利率_額度授信登記          |    |
|     | C118        | NUMBER(18, 0)      | 沖轉保證金額_預收手續費沖轉         |    |
|     | C119        | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C120        | VARCHAR2(2 char)  | 主管放行SPS                |    |
|     | C121        | VARCHAR2(12 char) | 核貸書總號                  |    |
|     | C122        | VARCHAR2(4 char)  | 代理行                    |    |
|     | C123        | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C124        | VARCHAR2(7 char)  | AO代號                   |    |
|     | C125        | VARCHAR2(1 char)  | 資金投資大陸註記               |    |
|     | C126        | VARCHAR2(16 char) | 電文複製用LC_NO             |    |
|     | C127        | VARCHAR2(3 char)  | MESSAGE_TYPE           |    |
|     | C128        | VARCHAR2(1 char)  | 圈存刪除FLAG               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILE0IMM

#### 進口業務帳戶主檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀號碼                  |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C4          | VARCHAR2(1 char)  | 業務別                    |    |
|     | C5          | NUMBER(2, 0)       | 修狀_到單次數                |    |
|     | C6          | NUMBER(2, 0)       | 修狀次數                   |    |
|     | C7          | NUMBER(2, 0)       | 到單次數                   |    |
|     | C8          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C9          | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C12         | NUMBER(2, 0)       | 交易序號                   |    |
|     | C13         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C14         | NUMBER(18, 0)      | 開狀時信用狀金額               |    |
|     | C15         | NUMBER(18, 0)      | 前次修狀餘額                 |    |
|     | C16         | NUMBER(18, 0)      | 目前信用狀餘額                |    |
|     | C17         | NUMBER(18, 0)      | 保證金餘額                  |    |
|     | C18         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C19         | NUMBER(18, 0)      | 擔提金額累計                 |    |
|     | C20         | NUMBER(18, 0)      | 國外費用累計                 |    |
|     | C21         | NUMBER(18, 0)      | 欠繳國外費用累計               |    |
|     | C22         | NUMBER(18, 0)      | 保兌費用_外幣                |    |
|     | C23         | NUMBER(18, 0)      | 手續費用累計                 |    |
|     | C24         | NUMBER(18, 0)      | 郵電費用累計                 |    |
|     | C25         | NUMBER(18, 0)      | 優惠手續費累計                |    |
|     | C26         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C27         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C28         | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C29         | VARCHAR2(16 char) | 主信用狀號碼                 |    |
|     | C30         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C31         | NUMBER(12, 6)      | 保證金成數                  |    |
|     | C32         | NUMBER(2, 0)       | 容許百分比加項                |    |
|     | C33         | NUMBER(12, 6)      | 開狀時成交費率                |    |
|     | C34         | DATE              | 開狀日期                   |    |
|     | C35         | DATE              | 退匯註銷日期                 |    |
|     | C36         | DATE              | 最後裝船日                  |    |
|     | C37         | DATE              | 取消信用狀日                 |    |
|     | C38         | DATE              | 有效期限                   |    |
|     | C39         | VARCHAR2(1 char)  | 有效期限地點                 |    |
|     | C40         | DATE              | 最後交易日                  |    |
|     | C41         | NUMBER(2, 0)       | 計費期數                   |    |
|     | C42         | NUMBER(2, 0)       | 單據提示期限                 |    |
|     | C43         | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C44         | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C45         | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C46         | VARCHAR2(1 char)  | Avail. With             |    |
|     | C47         | VARCHAR2(1 char)  | By                     |    |
|     | C48         | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C49         | VARCHAR2(1 char)  | 匯票付款人                  |    |
|     | C50         | VARCHAR2(1 char)  | 運送方式                   |    |
|     | C51         | VARCHAR2(1 char)  | 價格條件                   |    |
|     | C52         | VARCHAR2(1 char)  | 運費負擔                   |    |
|     | C53         | VARCHAR2(1 char)  | 有無保單                   |    |
|     | C54         | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C55         | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C56         | VARCHAR2(1 char)  | 部份裝運許可                 |    |
|     | C57         | VARCHAR2(1 char)  | 轉運許可                   |    |
|     | C58         | VARCHAR2(1 char)  | 單據收貨人                  |    |
|     | C59         | VARCHAR2(1 char)  | 是否授權                   |    |
|     | C60         | VARCHAR2(1 char)  | 是否保兌                   |    |
|     | C61         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C62         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C601        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C602        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C603        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C605        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C606        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C607        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C608        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C65         | VARCHAR2(5 char)  | 通知銀行編號                 |    |
|     | C66         | VARCHAR2(40 char) | 通知銀行名稱                 |    |
|     | C67         | VARCHAR2(12 char) | 通知銀行SWIFT_CODE         |    |
|     | C68         | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C69         | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C70         | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C71         | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C72         | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C73         | DATE              | 營業日期                   |    |
|     | C74         | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C609        | VARCHAR2(16 char) | 保單號碼                   |    |
|     | C610        | NUMBER(18, 0)      | 保險金額                   |    |
|     | C611        | DATE              | 保險日期                   |    |
|     | C76         | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C77         | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C78         | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C79         | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C80         | NUMBER(18, 0)      | 沖轉自行結匯款                |    |
|     | C612        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C613        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C614        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C82         | DATE              | 到單收件日                  |    |
|     | C83         | NUMBER(18, 2)      | 等值美金-報表用               |    |
|     | C84         | VARCHAR2(1 char)  | 開狀性質-RPT               |    |
|     | C85         | VARCHAR2(1 char)  | 保單是否收到                 |    |
|     | C86         | NUMBER(18, 0)      | 修改信用狀增加金額              |    |
|     | C87         | NUMBER(18, 0)      | 修改信用狀減少金額              |    |
|     | C88         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C89         | VARCHAR2(4 char)  | 代理行                    |    |
|     | C90         | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C91         | VARCHAR2(7 char)  | AO代碼                   |    |
|     | C92         | NUMBER(18, 0)      | 信用狀餘額_34B              |    |
|     | C93         | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C94         | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C95         | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C96         | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C97         | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C98         | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C99         | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C100        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C101        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C102        | NUMBER(2, 0)       | 容許百分比減項                |    |
|     | C103        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | C104        | NUMBER(18, 0)      | 其他應收款                  |    |
|     | C105        | VARCHAR2(1 char)  | 延遲付款方式                 |    |
|     | C106        | NUMBER(3, 0)       | 延遲付款天期                 |    |
|     | C107        | NUMBER(18, 0)      | 應收信用狀款餘額               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILE0IMP

#### 進口業務工作暫存檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀編號                  |    |
| PK  | C3          | VARCHAR2(1 char)  | 業務別                    |    |
| PK  | C4          | VARCHAR2(2 char)  | LC交易序號                 |    |
| PK  | C5          | VARCHAR2(2 char)  | 修狀_到單次數                |    |
| PK  | C6          | VARCHAR2(1 char)  | 交易檔序號                  |    |
|     | C7          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C8          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C9          | NUMBER(2, 0)       | 原修狀次數                  |    |
|     | C10         | NUMBER(2, 0)       | 原到單次數                  |    |
|     | C11         | NUMBER(1, 0)       | 原交易檔序號                 |    |
|     | C12         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C13         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C14         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C15         | NUMBER(2, 0)       | 版次_更正次數                |    |
|     | C16         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C601        | NUMBER(12, 6)      | 掛牌中價匯率_CCY-TWD         |    |
|     | C602        | NUMBER(12, 6)      | 成本匯率_CCY-TWD           |    |
|     | C603        | NUMBER(12, 6)      | 成交匯率_CCY-TWD           |    |
|     | C604        | NUMBER(12, 6)      | 匯率上限                   |    |
|     | C605        | NUMBER(12, 6)      | 匯率下限                   |    |
|     | C18         | NUMBER(12, 6)      | 保兌費率                   |    |
|     | C19         | NUMBER(12, 6)      | 標準手續費率                 |    |
|     | C20         | NUMBER(12, 6)      | 成交手續費率                 |    |
|     | C21         | NUMBER(12, 6)      | 前次保證成數                 |    |
|     | C22         | NUMBER(12, 6)      | 保證成數                   |    |
|     | C23         | NUMBER(2, 0)       | 容許百分比加項                |    |
|     | C24         | NUMBER(12, 6)      | 利息利率Ａ                  |    |
|     | C25         | NUMBER(12, 6)      | 利息利率Ｂ                  |    |
|     | C26         | NUMBER(12, 6)      | 違約金利率Ａ                 |    |
|     | C27         | NUMBER(12, 6)      | 違約金利率Ｂ_原容許百分比          |    |
|     | C28         | NUMBER(18, 0)      | 前次信用狀餘額                |    |
|     | C29         | NUMBER(18, 0)      | 本次信用狀餘額                |    |
|     | C30         | NUMBER(18, 0)      | 交易金額                   |    |
|     | C31         | VARCHAR2(3 char)  | 額度幣別                   |    |
|     | C32         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C33         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C34         | NUMBER(18, 0)      | 前次保證金餘額                |    |
|     | C35         | NUMBER(18, 0)      | 保證金交易金額                |    |
|     | C36         | NUMBER(18, 0)      | 本次保證金餘額                |    |
|     | C37         | NUMBER(18, 0)      | 擔提金額累計                 |    |
|     | C38         | NUMBER(18, 0)      | 國外求償費用                 |    |
|     | C39         | NUMBER(18, 0)      | 國外費用_外幣                |    |
|     | C40         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C41         | NUMBER(18, 0)      | 超押金額                   |    |
|     | C42         | NUMBER(18, 0)      | 前次擔提金額                 |    |
|     | C43         | NUMBER(18, 0)      | 前次擔提金額_託收              |    |
|     | C44         | NUMBER(18, 0)      | 本次擔提餘額_託收              |    |
|     | C45         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C46         | NUMBER(18, 0)      | 進口押匯款_應收承兌票款           |    |
|     | C47         | NUMBER(18, 0)      | 匯款金額_應付國外總額            |    |
|     | C48         | NUMBER(18, 0)      | 我方費用_外幣                |    |
|     | C49         | NUMBER(18, 0)      | 利息費用_臺幣                |    |
|     | C50         | NUMBER(18, 0)      | 違約金_臺幣                 |    |
|     | C51         | NUMBER(18, 0)      | 本次保兌費用                 |    |
|     | C52         | NUMBER(18, 0)      | 最低保兌費用                 |    |
|     | C53         | NUMBER(18, 0)      | 前次保兌費用_標準手續費           |    |
|     | C54         | NUMBER(18, 0)      | 實收手續費                  |    |
|     | C55         | NUMBER(18, 0)      | 保兌費_外幣                 |    |
|     | C56         | NUMBER(18, 0)      | 優惠手續費                  |    |
|     | C57         | NUMBER(18, 0)      | 修狀增加金額_利息費用-外幣         |    |
|     | C58         | NUMBER(18, 0)      | 修狀減少金額_違約金-外幣          |    |
|     | C59         | NUMBER(18, 0)      | 我方費用_臺幣                |    |
|     | C60         | NUMBER(18, 0)      | 國外費用_臺幣                |    |
|     | C61         | NUMBER(18, 0)      | 匯費_臺幣                  |    |
|     | C62         | NUMBER(18, 0)      | 郵電費_臺幣                 |    |
|     | C63         | NUMBER(18, 0)      | 新臺幣結購外幣                |    |
|     | C64         | NUMBER(18, 0)      | 以外匯存款支付_連動活存           |    |
|     | C65         | NUMBER(18, 0)      | 旅行支票_外幣現鈔              |    |
|     | C66         | NUMBER(18, 0)      | 遠期外匯結購                 |    |
|     | C67         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C68         | NUMBER(18, 0)      | 出口或匯入款轉匯               |    |
|     | C69         | NUMBER(18, 0)      | 其他                     |    |
|     | C70         | NUMBER(18, 0)      | 結購臺幣                   |    |
|     | C71         | NUMBER(18, 0)      | 補收保證金_客戶應繳總額-託收        |    |
|     | C72         | NUMBER(18, 0)      | 應收原幣金額                 |    |
|     | C73         | NUMBER(18, 0)      | 應收臺幣金額                 |    |
|     | C74         | NUMBER(18, 0)      | 實收原幣金額                 |    |
|     | C75         | NUMBER(18, 0)      | 實收臺幣金額                 |    |
|     | C76         | NUMBER(18, 0)      | 結匯原幣金額                 |    |
|     | C77         | NUMBER(18, 0)      | 結匯臺幣金額                 |    |
|     | C606        | VARCHAR2(40 char) | 金額大寫一                  |    |
|     | C607        | VARCHAR2(40 char) | 金額大寫二                  |    |
|     | C608        | VARCHAR2(40 char) | 金額大寫三                  |    |
|     | C609        | VARCHAR2(40 char) | 金額大寫四                  |    |
|     | C79         | VARCHAR2(1 char)  | 擔提種類                   |    |
|     | C80         | VARCHAR2(1 char)  | 融資種類                   |    |
|     | C81         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C82         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C83         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C84         | VARCHAR2(16 char) | 主信用狀編號                 |    |
|     | C85         | NUMBER(2, 0)       | 前次期數                   |    |
|     | C86         | NUMBER(2, 0)       | 本次期數                   |    |
|     | C87         | NUMBER(2, 0)       | 期數差_墊款息天數              |    |
|     | C88         | DATE              | 開狀日期_承兌日               |    |
|     | C89         | DATE              | 擔提日期                   |    |
|     | C90         | DATE              | 到單日                    |    |
|     | C91         | DATE              | 記帳日                    |    |
|     | C92         | DATE              | 前次有效期限                 |    |
|     | C93         | DATE              | 本次有效期限                 |    |
|     | C94         | DATE              | 到期日                    |    |
|     | C95         | DATE              | 最後交易日_存同起息日            |    |
|     | C96         | DATE              | 國外扣帳日_付款日              |    |
|     | C97         | DATE              | 裝船日                    |    |
|     | C98         | DATE              | 通知日期_催收文件寄發日           |    |
|     | C99         | DATE              | 最後裝船日                  |    |
|     | C100        | VARCHAR2(1 char)  | 到單匯款FLAG               |    |
|     | C101        | DATE              | 對內融資起息日                |    |
|     | C102        | NUMBER(2, 0)       | 單據提示期限                 |    |
|     | C103        | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C104        | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C105        | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C610        | VARCHAR2(1 char)  | 有效期限地點                 |    |
|     | C611        | VARCHAR2(1 char)  | Avail. With             |    |
|     | C612        | VARCHAR2(1 char)  | By                     |    |
|     | C613        | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C614        | VARCHAR2(1 char)  | 匯票付款人                  |    |
|     | C615        | VARCHAR2(1 char)  | 運送方式                   |    |
|     | C616        | VARCHAR2(1 char)  | 價格條件                   |    |
|     | C617        | VARCHAR2(1 char)  | 運費負擔                   |    |
|     | C618        | VARCHAR2(1 char)  | 部份裝運                   |    |
|     | C619        | VARCHAR2(1 char)  | 轉運                     |    |
|     | C620        | VARCHAR2(1 char)  | 有無保單                   |    |
|     | C621        | VARCHAR2(1 char)  | 提單收貨人                  |    |
|     | C622        | VARCHAR2(1 char)  | 是否轉放款_是否付款-託收擔提        |    |
|     | C623        | VARCHAR2(1 char)  | 是否授權求償                 |    |
|     | C624        | VARCHAR2(1 char)  | 是否保兌                   |    |
|     | C625        | VARCHAR2(1 char)  | 是否瑕疵                   |    |
|     | C107        | VARCHAR2(40 char) | 瑕疵明細一_到單匯款註記           |    |
|     | C108        | VARCHAR2(40 char) | 瑕疵明細二                  |    |
|     | C109        | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C110        | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C111        | VARCHAR2(20 char) | 提單號碼                   |    |
|     | C112        | VARCHAR2(30 char) | 船名_航次                  |    |
|     | C626        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C627        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C628        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C629        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C630        | DATE              | 申請人出生年月日               |    |
|     | C631        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C632        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C633        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C634        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C115        | VARCHAR2(5 char)  | 通知銀行_押匯銀行編號            |    |
|     | C635        | VARCHAR2(40 char) | 通知銀行_押匯銀行名稱            |    |
|     | C636        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址一           |    |
|     | C637        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址二           |    |
|     | C638        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址三           |    |
|     | C639        | VARCHAR2(12 char) | 通知銀行_押匯銀行SWIFT_CODE    |    |
|     | C640        | VARCHAR2(20 char) | 押匯銀行參考編號               |    |
|     | C117        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C641        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C642        | VARCHAR2(40 char) | 存匯銀行地址一                |    |
|     | C643        | VARCHAR2(40 char) | 存匯銀行地址二                |    |
|     | C644        | VARCHAR2(40 char) | 存匯銀行地址三                |    |
|     | C645        | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C646        | VARCHAR2(40 char) | 船公司名稱                  |    |
|     | C647        | VARCHAR2(40 char) | 船公司地址一                 |    |
|     | C648        | VARCHAR2(40 char) | 船公司地址二                 |    |
|     | C120        | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C121        | VARCHAR2(10 char) | 業務主管                   |    |
|     | C122        | VARCHAR2(1 char)  | 業務放行註記                 |    |
|     | C123        | VARCHAR2(8 char)  | 業務功能代碼                 |    |
|     | C649        | VARCHAR2(3 char)  | 信用狀型式Q-KEY             |    |
|     | C650        | VARCHAR2(3 char)  | TenorType-Q_KEY        |    |
|     | C651        | VARCHAR2(3 char)  | 有效期限地點-Q-KEY_計息天數Ａ     |    |
|     | C652        | VARCHAR2(3 char)  | Avail. With-Q-KEY_計息天數Ｂ |    |
|     | C653        | VARCHAR2(3 char)  | By-Q-KEY               |    |
|     | C654        | VARCHAR2(3 char)  | 付款方式Q-KEY              |    |
|     | C655        | VARCHAR2(3 char)  | 匯票付款人Q-KEY             |    |
|     | C656        | VARCHAR2(3 char)  | 運送方式Q-KEY              |    |
|     | C657        | VARCHAR2(3 char)  | 價格條件Q-KEY              |    |
|     | C658        | VARCHAR2(3 char)  | 運費負擔Q-KEY              |    |
|     | C659        | VARCHAR2(3 char)  | 部份裝運Q-KEY              |    |
|     | C660        | VARCHAR2(3 char)  | 轉運Q-KEY                |    |
|     | C661        | VARCHAR2(3 char)  | 提單收貨人Q-KEY             |    |
|     | C662        | VARCHAR2(3 char)  | 是否保兌Q-KEY              |    |
|     | C663        | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C664        | VARCHAR2(20 char) | TenorType全文            |    |
|     | C665        | VARCHAR2(20 char) | 有效期限地點全文               |    |
|     | C666        | VARCHAR2(20 char) | Avail. With全文           |    |
|     | C667        | VARCHAR2(20 char) | By全文                   |    |
|     | C668        | VARCHAR2(20 char) | 付款方式全文                 |    |
|     | C669        | VARCHAR2(20 char) | 匯票付款人全文                |    |
|     | C670        | VARCHAR2(20 char) | 運送方式全文                 |    |
|     | C671        | VARCHAR2(20 char) | 價格條件全文                 |    |
|     | C672        | VARCHAR2(20 char) | 運費負擔全文                 |    |
|     | C673        | VARCHAR2(20 char) | 部份裝運全文                 |    |
|     | C674        | VARCHAR2(20 char) | 轉運全文                   |    |
|     | C675        | VARCHAR2(20 char) | 提單收貨人全文                |    |
|     | C676        | VARCHAR2(20 char) | 保兌全文                   |    |
|     | C677        | VARCHAR2(20 char) | 瑕疵全文                   |    |
|     | C126        | VARCHAR2(2 char)  | 業務代碼                   |    |
|     | C127        | VARCHAR2(40 char) | 會計摘要                   |    |
|     | C128        | VARCHAR2(20 char) | 會計傳票KEY                |    |
|     | C129        | NUMBER(5, 0)       | 會計傳票序號                 |    |
|     | C825        | VARCHAR2(20 char) | 電文稿格式一                 |    |
|     | C826        | VARCHAR2(20 char) | 電文稿格式二                 |    |
|     | C827        | VARCHAR2(20 char) | 電文稿格式三                 |    |
|     | C828        | VARCHAR2(20 char) | 電文稿格式四                 |    |
|     | C829        | VARCHAR2(20 char) | 電文稿格式五                 |    |
|     | C830        | VARCHAR2(20 char) | 電文稿格式六                 |    |
|     | C831        | VARCHAR2(20 char) | 電文稿格式七                 |    |
|     | C176        | DATE              | 註銷擔提日                  |    |
|     | C177        | DATE              | 託收承兌日                  |    |
|     | C178        | VARCHAR2(1 char)  | 開狀方式                   |    |
|     | C179        | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C180        | VARCHAR2(1 char)  | 費用繳交                   |    |
|     | C181        | NUMBER(18, 0)      | 費用合計_臺                 |    |
|     | C182        | NUMBER(18, 0)      | 費用合計_外                 |    |
|     | C183        | VARCHAR2(13 char) | 外幣帳號_連動活存              |    |
|     | C832        | VARCHAR2(4 char)  | 手續費編碼                  |    |
|     | C833        | NUMBER(12, 6)      | 手續費費率                  |    |
|     | C834        | VARCHAR2(3 char)  | 手續費幣別                  |    |
|     | C835        | NUMBER(18, 0)      | 手續費一次性收費額              |    |
|     | C836        | NUMBER(18, 0)      | 手續費最高收費                |    |
|     | C837        | NUMBER(18, 0)      | 手續費最低收費                |    |
|     | C838        | VARCHAR2(1 char)  | 手續費收費方式                |    |
|     | C839        | NUMBER(12, 6)      | 手續費成交匯率                |    |
|     | C840        | NUMBER(12, 6)      | 客戶優惠利率                 |    |
|     | C841        | NUMBER(18, 0)      | 存入台幣帳戶金額               |    |
|     | C842        | VARCHAR2(13 char) | 台幣帳號                   |    |
|     | C843        | VARCHAR2(1 char)  | Control_Flag           |    |
|     | C844        | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C845        | VARCHAR2(16 char) | 遠匯交易號碼                 |    |
|     | C846        | VARCHAR2(3 char)  | 遠匯交割幣別                 |    |
|     | C847        | NUMBER(12, 6)      | 遠匯交割匯率                 |    |
|     | C848        | VARCHAR2(13 char) | 遠匯交割帳號                 |    |
|     | C849        | VARCHAR2(1 char)  | 遠匯交割支號                 |    |
|     | C850        | NUMBER(18, 0)      | 各業務交割金額合計              |    |
|     | C851        | NUMBER(18, 0)      | 應付遠匯款                  |    |
|     | C852        | NUMBER(18, 0)      | 兌換遠匯_臺幣                |    |
|     | C853        | VARCHAR2(1 char)  | 遠匯FLAG                 |    |
|     | C854        | VARCHAR2(3 char)  | 違約金幣別_遠匯               |    |
|     | C855        | NUMBER(18, 0)      | 違約金_遠匯                 |    |
|     | C856        | VARCHAR2(4 char)  | 原營業單位                  |    |
|     | C857        | VARCHAR2(16 char) | 原遠匯交易號碼                |    |
|     | C858        | NUMBER(18, 0)      | 原交割金額                  |    |
|     | C859        | VARCHAR2(4 char)  | 營業單位_遠匯連動活存            |    |
|     | C860        | VARCHAR2(2 char)  | 活存科目_遠匯連動活存            |    |
|     | C861        | VARCHAR2(6 char)  | 顧客號碼_遠匯連動活存            |    |
|     | C862        | NUMBER(1, 0)       | 檢號_遠匯連動活存              |    |
|     | C863        | VARCHAR2(3 char)  | 活存摘要_遠匯連動活存            |    |
|     | C864        | VARCHAR2(3 char)  | 轉放款幣別                  |    |
|     | C865        | NUMBER(18, 0)      | 幣別轉換金額                 |    |
|     | C866        | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C867        | NUMBER(12, 6)      | 成本利率                   |    |
|     | C868        | NUMBER(12, 6)      | 成交利率                   |    |
|     | C869        | NUMBER(12, 6)      | 逾期利率                   |    |
|     | C870        | NUMBER(12, 6)      | 議價匯率                   |    |
|     | C871        | DATE              | 國外押匯日                  |    |
|     | C872        | DATE              | 拒付日期                   |    |
|     | C873        | DATE              | 註銷日期_拒付解除              |    |
|     | C874        | DATE              | 取消信用狀日期                |    |
|     | C875        | VARCHAR2(2 char)  | 主管放行SPS                |    |
|     | C876        | DATE              | 解除擔提日                  |    |
|     | C877        | VARCHAR2(1 char)  | 控制保兌費用由誰負擔FLAG         |    |
|     | C878        | VARCHAR2(50 char) | 客戶中文名稱                 |    |
|     | C879        | VARCHAR2(5 char)  | 船公司代碼                  |    |
|     | C880        | VARCHAR2(2 char)  | 利率種類                   |    |
|     | C881        | VARCHAR2(2 char)  | 利率代碼                   |    |
|     | C882        | VARCHAR2(1 char)  | 即期信用狀墊款息選項             |    |
|     | C883        | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C884        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C885        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C886        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C887        | NUMBER(18, 0)      | 郵電費_外幣                 |    |
|     | C888        | NUMBER(18, 0)      | 修改後之信用狀餘額              |    |
|     | C889        | NUMBER(2, 0)       | 期數差_墊款息天數-增加金額         |    |
|     | C890        | NUMBER(2, 0)       | 前次期數_增加金額              |    |
|     | C891        | NUMBER(2, 0)       | 本次期數_增加金額              |    |
|     | C892        | VARCHAR2(1 char)  | 客戶是否付款_託收DA承兌          |    |
|     | C893        | NUMBER(3, 0)       | 逾期實收天數                 |    |
|     | C894        | NUMBER(3, 0)       | 違約實收天數                 |    |
|     | C895        | VARCHAR2(4 char)  | 營業單位_連動活存              |    |
|     | C896        | VARCHAR2(2 char)  | 活存科目_連動活存              |    |
|     | C897        | VARCHAR2(6 char)  | 顧客號碼_連動活存              |    |
|     | C898        | NUMBER(1, 0)       | 檢號_連動活存                |    |
|     | C899        | VARCHAR2(3 char)  | 活存摘要_連動活存              |    |
|     | C189        | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C190        | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C191        | NUMBER(18, 0)      | 額度異動金額_依交易幣別           |    |
|     | C192        | NUMBER(12, 6)      | 手續費率_第二期               |    |
|     | C193        | VARCHAR2(1 char)  | 開狀性質-RPT               |    |
|     | C194        | VARCHAR2(20 char) | 開狀電文稿格式一               |    |
|     | C195        | VARCHAR2(20 char) | 開狀電文稿格式二               |    |
|     | C196        | VARCHAR2(12 char) | 核貸書總號                  |    |
|     | C197        | VARCHAR2(4 char)  | 代理行                    |    |
|     | C198        | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C199        | VARCHAR2(7 char)  | AO代號                   |    |
|     | C900        | VARCHAR2(2 char)  | 通路別                    |    |
|     | C901        | NUMBER(18, 0)      | 信用狀餘額_34B              |    |
|     | C902        | NUMBER(12, 6)      | 承兌費率                   |    |
|     | C903        | VARCHAR2(3 char)  | 價格條件名稱                 |    |
|     | C904        | NUMBER(18, 0)      | 瑕疵費用                   |    |
|     | C905        | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C906        | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C907        | VARCHAR2(2 char)  | GEB-REJ-CODE           |    |
|     | C908        | VARCHAR2(4 char)  | GEB-ERR-MSG            |    |
|     | C909        | VARCHAR2(5 char)  | GEB-TXN-CODE           |    |
|     | C910        | VARCHAR2(7 char)  | GEB-SEQ-NO             |    |
|     | C911        | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C912        | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C913        | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C914        | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C915        | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C916        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C917        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C918        | NUMBER(2, 0)       | 容許百分比減項                |    |
|     | C919        | VARCHAR2(1 char)  | 商業發票加註輸入許可證旗標          |    |
|     | C920        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | C921        | VARCHAR2(1 char)  | 海運_空運提單旗標              |    |
|     | C922        | VARCHAR2(1 char)  | 海運提單份數                 |    |
|     | C923        | VARCHAR2(1 char)  | 海運運費                   |    |
|     | C924        | VARCHAR2(1 char)  | 空運運費                   |    |
|     | C925        | NUMBER(18, 0)      | 承兌費用                   |    |
|     | C926        | NUMBER(18, 0)      | 開狀費用                   |    |
|     | C927        | NUMBER(18, 0)      | 修狀費用                   |    |
|     | C928        | VARCHAR2(5 char)  | 匯入存匯行                  |    |
|     | C929        | VARCHAR2(30 char) | 開狀性質說明                 |    |
|     | C930        | VARCHAR2(16 char) | 電文複製用LC_NO             |    |
|     | C931        | VARCHAR2(3 char)  | MESSAGE_TYPE           |    |
|     | C932        | VARCHAR2(1 char)  | 開_修狀費用                 |    |
|     | C933        | NUMBER(18, 0)      | 其他應收款                  |    |
|     | C934        | VARCHAR2(1 char)  | 圈存刪除FLAG               |    |
|     | C935        | NUMBER(3, 0)       | 延遲付款天期                 |    |
|     | C936        | VARCHAR2(1 char)  | 延遲付款方式                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEIAM

#### 進口到單帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀_託收編號               |    |
| PK  | C3          | VARCHAR2(1 char)  | 業務別                    |    |
| PK  | C4          | NUMBER(2, 0)       | 到單次數_託收交易序號            |    |
|     | C5          | NUMBER(1, 0)       | 交易檔序號                  |    |
|     | C6          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C7          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C8          | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C9          | NUMBER(2, 0)       | 到單次數                   |    |
|     | C10         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C11         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C12         | VARCHAR2(1 char)  | 擔提種類                   |    |
|     | C13         | VARCHAR2(1 char)  | 融資種類                   |    |
|     | C14         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C15         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C16         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C17         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C18         | NUMBER(18, 0)      | 信用狀可用餘額                |    |
|     | C19         | NUMBER(18, 0)      | 國外求償金額                 |    |
|     | C20         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C21         | NUMBER(18, 0)      | 擔提金額                   |    |
|     | C22         | NUMBER(18, 0)      | 超押金額                   |    |
|     | C23         | NUMBER(18, 0)      | 轉放款金額                  |    |
|     | C24         | NUMBER(18, 0)      | 進口押匯款_應收承兌票款           |    |
|     | C25         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C26         | NUMBER(18, 0)      | 國外費用累計_外幣              |    |
|     | C27         | NUMBER(18, 0)      | 我方費用累計_外幣              |    |
|     | C28         | NUMBER(18, 0)      | 保兌費用_外幣                |    |
|     | C29         | NUMBER(18, 0)      | 郵電費_外幣                 |    |
|     | C30         | NUMBER(18, 0)      | 到單匯款金額                 |    |
|     | C31         | NUMBER(18, 2)      | 恢復額度                   |    |
|     | C32         | NUMBER(18, 0)      | 國外費用累計_臺幣              |    |
|     | C33         | NUMBER(18, 0)      | 我方費用累計                 |    |
|     | C34         | NUMBER(18, 0)      | 保兌費退費累計                |    |
|     | C35         | NUMBER(18, 0)      | 利息費用_臺幣                |    |
|     | C36         | NUMBER(18, 0)      | 違約金累計_臺幣               |    |
|     | C37         | VARCHAR2(16 char) | 主信用狀號碼                 |    |
|     | C38         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C39         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C40         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C41         | DATE              | 擔提日期                   |    |
|     | C42         | DATE              | 註銷擔提日_到單               |    |
|     | C43         | DATE              | 國外扣帳日_託收繳款日            |    |
|     | C44         | DATE              | 到單日期                   |    |
|     | C45         | DATE              | 通知日期_催收文件寄發日           |    |
|     | C46         | DATE              | 國外押匯日                  |    |
|     | C47         | DATE              | 承兌取單日_託收DA承兌           |    |
|     | C48         | DATE              | 拒付日期                   |    |
|     | C49         | DATE              | 繳款日期                   |    |
|     | C50         | DATE              | 轉放款日期                  |    |
|     | C51         | DATE              | 拒付解除日期                 |    |
|     | C52         | DATE              | 裝船日期                   |    |
|     | C53         | DATE              | 到期日期                   |    |
|     | C54         | DATE              | 存同起息日                  |    |
|     | C55         | VARCHAR2(1 char)  | 擔提_副提單沖轉FLAG           |    |
|     | C56         | DATE              | 解除擔提日                  |    |
|     | C57         | DATE              | 取消信用狀日                 |    |
|     | C58         | VARCHAR2(1 char)  | 承兌電文製發Flag             |    |
|     | C59         | VARCHAR2(1 char)  | 匯款電文製發Flag             |    |
|     | C60         | VARCHAR2(1 char)  | 拒付電文製發Flag             |    |
|     | C61         | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C62         | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C63         | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C64         | VARCHAR2(1 char)  | 是否轉放款_是否付款-託收擔提        |    |
|     | C65         | VARCHAR2(1 char)  | 客戶是否付款_託收DA承兌          |    |
|     | C66         | VARCHAR2(1 char)  | 是否求償授權                 |    |
|     | C67         | VARCHAR2(1 char)  | 是否瑕疵                   |    |
|     | C68         | VARCHAR2(40 char) | 瑕疵明細                   |    |
|     | C69         | VARCHAR2(20 char) | 押匯銀行參考編號               |    |
|     | C70         | VARCHAR2(20 char) | 提單號碼                   |    |
|     | C71         | VARCHAR2(30 char) | 船名_航次                  |    |
|     | C72         | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C73         | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C74         | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C601        | VARCHAR2(40 char) | 申請人英文名稱                |    |
|     | C602        | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C603        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C605        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C606        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C607        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C608        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C609        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C77         | VARCHAR2(5 char)  | 押匯銀行編號                 |    |
|     | C78         | VARCHAR2(40 char) | 押匯銀行名稱                 |    |
|     | C79         | VARCHAR2(12 char) | 押匯銀行SWIFT_CODE         |    |
|     | C80         | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C81         | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C82         | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C610        | VARCHAR2(40 char) | 船公司名稱                  |    |
|     | C611        | VARCHAR2(40 char) | 船公司地址一                 |    |
|     | C612        | VARCHAR2(40 char) | 船公司地址二                 |    |
|     | C613        | VARCHAR2(40 char) | 船公司地址三                 |    |
|     | C84         | DATE              | 託收登錄日                  |    |
|     | C614        | VARCHAR2(3 char)  | 轉放款幣別                  |    |
|     | C615        | NUMBER(18, 0)      | 幣別轉換金額                 |    |
|     | C616        | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C86         | NUMBER(18, 0)      | 保證金交易金額                |    |
|     | C87         | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C88         | DATE              | 營業日期                   |    |
|     | C89         | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C90         | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C617        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C618        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C619        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C92         | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C93         | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C94         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C95         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C96         | NUMBER(18, 2)      | 等值美金-報表用               |    |
|     | C97         | VARCHAR2(1 char)  | 託收性質                   |    |
|     | C98         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C99         | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C100        | VARCHAR2(7 char)  | AO代碼                   |    |
|     | C101        | VARCHAR2(4 char)  | 代理行                    |    |
|     | C102        | NUMBER(18, 0)      | 瑕疵費用                   |    |
|     | C103        | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C104        | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C105        | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C106        | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C107        | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C108        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C109        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C110        | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C111        | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C112        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEIGM

#### 保證業務帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 交易編號                   |    |
|     | C3          | NUMBER(2, 0)       | 交易檔序號                  |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C5          | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C6          | VARCHAR2(1 char)  | 保證型式                   |    |
|     | C7          | VARCHAR2(1 char)  | 保證種類                   |    |
|     | C8          | VARCHAR2(1 char)  | 分期區分                   |    |
|     | C9          | VARCHAR2(1 char)  | 戶況                     |    |
|     | C10         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C11         | VARCHAR2(2 char)  | 子目                     |    |
|     | C12         | NUMBER(2, 0)       | 修改次數                   |    |
|     | C13         | VARCHAR2(3 char)  | 保證金幣別                  |    |
|     | C14         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C15         | NUMBER(18, 0)      | 開發時保證金額                |    |
|     | C16         | NUMBER(18, 0)      | 目前保證金額                 |    |
|     | C17         | NUMBER(18, 0)      | 解除時保證金額                |    |
|     | C18         | NUMBER(18, 0)      | 賠償金額                   |    |
|     | C19         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C20         | NUMBER(18, 2)      | 目前額度餘額                 |    |
|     | C21         | NUMBER(18, 0)      | 預收手續費餘額                |    |
|     | C22         | NUMBER(18, 0)      | 累計優惠手續費                |    |
|     | C23         | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C24         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C25         | NUMBER(2, 0)       | 開發時保證期數                |    |
|     | C26         | NUMBER(2, 0)       | 目前保證期數                 |    |
|     | C27         | DATE              | 開發保證日                  |    |
|     | C28         | DATE              | 解除保證日                  |    |
|     | C29         | DATE              | 違約設定日                  |    |
|     | C30         | DATE              | 有效期限                   |    |
|     | C31         | DATE              | 最後交易日                  |    |
|     | C601        | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C602        | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C603        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C605        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C606        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C607        | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C608        | VARCHAR2(2 char)  | 受益人國別代碼                |    |
|     | C609        | VARCHAR2(30 char) | 受益人國別                  |    |
|     | C610        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C611        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C612        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C613        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C614        | VARCHAR2(5 char)  | 保證銀行編號                 |    |
|     | C615        | VARCHAR2(40 char) | 保證銀行名稱                 |    |
|     | C616        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C617        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C36         | VARCHAR2(1 char)  | 開立保函方式                 |    |
|     | C37         | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C38         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C39         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C40         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C41         | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C42         | VARCHAR2(7 char)  | AO代號                   |    |
|     | C43         | VARCHAR2(4 char)  | 代理行                    |    |
|     | C44         | NUMBER(12, 6)      | 手續費率                   |    |
|     | C45         | VARCHAR2(2 char)  | 交易國別                   |    |
|     | C46         | VARCHAR2(30 char) | 大陸地區投資事業名稱一            |    |
|     | C47         | VARCHAR2(30 char) | 大陸地區投資事業名稱二            |    |
|     | C48         | VARCHAR2(30 char) | 經濟部許可赴大陸地區投資文號一        |    |
|     | C49         | VARCHAR2(30 char) | 經濟部許可赴大陸地區投資文號二        |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEIGP

#### 保證業務工作暫存檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 交易編號                   |    |
| PK  | C3          | NUMBER(2, 0)       | 交易檔序號                  |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C5          | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C6          | VARCHAR2(1 char)  | 保證型式                   |    |
|     | C7          | VARCHAR2(3 char)  | 保證型式Q-KEY              |    |
|     | C8          | VARCHAR2(20 char) | 保證型式全文                 |    |
|     | C9          | VARCHAR2(1 char)  | 保證種類                   |    |
|     | C10         | VARCHAR2(3 char)  | 保證種類Q-KEY              |    |
|     | C11         | VARCHAR2(20 char) | 保證種類全文                 |    |
|     | C12         | VARCHAR2(1 char)  | 分期區分                   |    |
|     | C13         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C14         | VARCHAR2(2 char)  | 子目                     |    |
|     | C15         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C16         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C17         | NUMBER(2, 0)       | 前次交易序號                 |    |
|     | C18         | NUMBER(2, 0)       | 版次_更正次數                |    |
|     | C19         | NUMBER(2, 0)       | 修改次數                   |    |
|     | C20         | VARCHAR2(3 char)  | 保證金幣別                  |    |
|     | C21         | VARCHAR2(3 char)  | 美金幣別                   |    |
|     | C22         | VARCHAR2(3 char)  | 臺幣幣別                   |    |
|     | C23         | NUMBER(12, 6)      | 掛牌中價匯率_CCY-TWD         |    |
|     | C24         | NUMBER(12, 6)      | 成本匯率_CCY-TWD           |    |
|     | C25         | NUMBER(12, 6)      | 成交匯率_CCY-TWD           |    |
|     | C26         | NUMBER(12, 6)      | 議價匯率                   |    |
|     | C27         | VARCHAR2(1 char)  | 議價Flag                 |    |
|     | C28         | NUMBER(12, 6)      | 遠期匯率_CCY-TWD           |    |
|     | C29         | NUMBER(12, 6)      | 對美金匯率-USD-CCY_交叉匯率     |    |
|     | C30         | NUMBER(12, 6)      | 匯率上限                   |    |
|     | C31         | NUMBER(12, 6)      | 匯率下限                   |    |
|     | C32         | NUMBER(12, 6)      | 標準手續費率                 |    |
|     | C33         | NUMBER(12, 6)      | 成交手續費率                 |    |
|     | C34         | NUMBER(18, 0)      | 前次保證金額                 |    |
|     | C35         | NUMBER(18, 0)      | 本次保證金額                 |    |
|     | C36         | NUMBER(18, 0)      | 保證金額異動金額               |    |
|     | C37         | NUMBER(18, 0)      | 賠償金額                   |    |
|     | C38         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C39         | NUMBER(18, 0)      | 應收手續費                  |    |
|     | C40         | NUMBER(18, 0)      | 實收手續費                  |    |
|     | C41         | NUMBER(18, 0)      | 最低手續費_應付遠匯款            |    |
|     | C42         | NUMBER(18, 0)      | 優惠手續費                  |    |
|     | C43         | NUMBER(18, 0)      | 前次優惠手續費                |    |
|     | C44         | NUMBER(18, 0)      | 本次優惠手續費                |    |
|     | C45         | NUMBER(18, 0)      | 前次預收手續費                |    |
|     | C46         | NUMBER(18, 0)      | 本次預收手續費                |    |
|     | C47         | NUMBER(18, 0)      | 郵電費                    |    |
|     | C48         | NUMBER(18, 0)      | 新臺幣結購外幣                |    |
|     | C49         | NUMBER(18, 0)      | 以外匯存款支付                |    |
|     | C50         | NUMBER(18, 0)      | 旅行支票_外幣現鈔              |    |
|     | C51         | NUMBER(18, 0)      | 遠期外匯結購                 |    |
|     | C52         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C53         | NUMBER(18, 0)      | 出口或匯入款轉匯               |    |
|     | C54         | NUMBER(18, 0)      | 其他                     |    |
|     | C55         | NUMBER(18, 0)      | 應收原幣金額                 |    |
|     | C56         | NUMBER(18, 0)      | 應收臺幣金額                 |    |
|     | C57         | NUMBER(18, 0)      | 實收原幣金額                 |    |
|     | C58         | NUMBER(18, 0)      | 實收臺幣金額                 |    |
|     | C59         | NUMBER(18, 0)      | 結匯原幣金額                 |    |
|     | C60         | NUMBER(18, 0)      | 結匯臺幣金額                 |    |
|     | C601        | VARCHAR2(40 char) | 金額大寫一                  |    |
|     | C602        | VARCHAR2(40 char) | 金額大寫二                  |    |
|     | C603        | VARCHAR2(40 char) | 金額大寫三                  |    |
|     | C604        | VARCHAR2(40 char) | 金額大寫四                  |    |
|     | C62         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C63         | VARCHAR2(3 char)  | 額度幣別                   |    |
|     | C64         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C65         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C66         | VARCHAR2(13 char) | 外幣帳號                   |    |
|     | C605        | VARCHAR2(4 char)  | 營業單位_連動活存              |    |
|     | C606        | VARCHAR2(2 char)  | 活存科目                   |    |
|     | C607        | VARCHAR2(6 char)  | 顧客號碼_連動活存              |    |
|     | C608        | NUMBER(1, 0)       | 檢號                     |    |
|     | C609        | VARCHAR2(3 char)  | 活存摘要                   |    |
|     | C68         | NUMBER(2, 0)       | 前次保證期數                 |    |
|     | C69         | NUMBER(2, 0)       | 本次保證期數                 |    |
|     | C70         | NUMBER(2, 0)       | 期數差                    |    |
|     | C71         | DATE              | 開發日期                   |    |
|     | C72         | DATE              | 記帳日                    |    |
|     | C73         | DATE              | 前次有效期限                 |    |
|     | C74         | DATE              | 本次有效期限                 |    |
|     | C75         | DATE              | 最後交易日                  |    |
|     | C610        | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C611        | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C612        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C613        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C614        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C615        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C616        | VARCHAR2(8 char)  | 申請人出生年月日               |    |
|     | C617        | VARCHAR2(40 char) | 申請人中名名稱                |    |
|     | C618        | VARCHAR2(2 char)  | 受益人國別代碼                |    |
|     | C619        | VARCHAR2(30 char) | 受益人國別                  |    |
|     | C620        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C621        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C622        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C623        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C624        | VARCHAR2(5 char)  | 保證銀行編號                 |    |
|     | C625        | VARCHAR2(40 char) | 保證銀行名稱                 |    |
|     | C626        | VARCHAR2(40 char) | 保證銀行地址一                |    |
|     | C627        | VARCHAR2(40 char) | 保證銀行地址二                |    |
|     | C628        | VARCHAR2(40 char) | 保證銀行地址三                |    |
|     | C629        | VARCHAR2(12 char) | 保證銀行SWIFT_CODE         |    |
|     | C630        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C631        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C632        | VARCHAR2(40 char) | 存匯銀行地址一                |    |
|     | C633        | VARCHAR2(40 char) | 存匯銀行地址二                |    |
|     | C634        | VARCHAR2(40 char) | 存匯銀行地址三                |    |
|     | C635        | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C80         | VARCHAR2(9 char)  | CIR-KEY                |    |
|     | C81         | VARCHAR2(8 char)  | 業務經辦                   |    |
|     | C82         | VARCHAR2(8 char)  | 業務主管                   |    |
|     | C83         | VARCHAR2(1 char)  | 業務放行註記                 |    |
|     | C84         | VARCHAR2(8 char)  | 業務功能代碼                 |    |
|     | C85         | VARCHAR2(2 char)  | 業務代碼                   |    |
|     | C86         | VARCHAR2(5 char)  | 臺幣連動交易代碼               |    |
|     | C87         | VARCHAR2(40 char) | 會計摘要                   |    |
|     | C88         | VARCHAR2(20 char) | 會計傳票KEY                |    |
|     | C89         | NUMBER(5, 0)       | 會計傳票序號                 |    |
|     | C727        | VARCHAR2(20 char) | 電文稿格式一                 |    |
|     | C728        | VARCHAR2(20 char) | 電文稿格式二                 |    |
|     | C729        | VARCHAR2(20 char) | 電文稿格式三                 |    |
|     | C730        | VARCHAR2(20 char) | 電文稿格式四                 |    |
|     | C731        | VARCHAR2(20 char) | 電文稿格式五                 |    |
|     | C732        | VARCHAR2(20 char) | 電文稿格式六                 |    |
|     | C733        | VARCHAR2(20 char) | 電文稿格式七                 |    |
|     | C734        | VARCHAR2(4 char)  | 手續費編碼                  |    |
|     | C735        | NUMBER(12, 6)      | 手續費率                   |    |
|     | C736        | VARCHAR2(3 char)  | 手續費幣別                  |    |
|     | C737        | NUMBER(18, 0)      | 手續費一次性收費額              |    |
|     | C738        | NUMBER(18, 0)      | 手續費最高收費                |    |
|     | C739        | NUMBER(18, 0)      | 手續費最低收費                |    |
|     | C740        | VARCHAR2(1 char)  | 手續費收費方式                |    |
|     | C741        | NUMBER(12, 6)      | 手續費成交匯率                |    |
|     | C742        | NUMBER(12, 6)      | 客戶優惠利率_額度授信登記          |    |
|     | C118        | NUMBER(18, 0)      | 沖轉保證金額_預收手續費沖轉         |    |
|     | C119        | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C120        | VARCHAR2(2 char)  | 主管放行SPS                |    |
|     | C121        | VARCHAR2(12 char) | 核貸書總號                  |    |
|     | C122        | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C123        | VARCHAR2(7 char)  | AO代號                   |    |
|     | C124        | VARCHAR2(13 char) | 台幣扣款帳號                 |    |
|     | C125        | NUMBER(18, 0)      | 連動台幣扣款金額               |    |
|     | C126        | VARCHAR2(4 char)  | 代理行                    |    |
|     | C743        | VARCHAR2(1 char)  | 議價處理區分                 |    |
|     | C744        | VARCHAR2(6 char)  | 議價編號                   |    |
|     | C745        | VARCHAR2(1 char)  | 買賣區分                   |    |
|     | C746        | VARCHAR2(3 char)  | 議價幣別                   |    |
|     | C747        | NUMBER(18, 0)      | 議價成交金額                 |    |
|     | C128        | VARCHAR2(2 char)  | 交易國別                   |    |
|     | C129        | VARCHAR2(40 char) | 國別名稱                   |    |
|     | C130        | VARCHAR2(30 char) | 大陸地區投資事業名稱一            |    |
|     | C131        | VARCHAR2(30 char) | 大陸地區投資事業名稱二            |    |
|     | C132        | VARCHAR2(30 char) | 經濟部許可赴大陸地區投資文號一        |    |
|     | C133        | VARCHAR2(30 char) | 經濟部許可赴大陸地區投資文號二        |    |
|     | C134        | VARCHAR2(16 char) | 對台聯往銷帳編號               |    |
|     | C135        | VARCHAR2(16 char) | 電文複製用LC_NO             |    |
|     | C136        | VARCHAR2(3 char)  | MESSAGE_TYPE           |    |
|     | C137        | VARCHAR2(1 char)  | 圈存刪除FLAG               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEIMM

#### 進口業務帳戶主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀號碼                  |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C4          | VARCHAR2(1 char)  | 業務別                    |    |
|     | C5          | NUMBER(2, 0)       | 修狀_到單次數                |    |
|     | C6          | NUMBER(2, 0)       | 修狀次數                   |    |
|     | C7          | NUMBER(2, 0)       | 到單次數                   |    |
|     | C8          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C9          | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C11         | VARCHAR2(1 char)  | HOLD_MARK              |    |
|     | C12         | NUMBER(2, 0)       | 交易序號                   |    |
|     | C13         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C14         | NUMBER(18, 0)      | 開狀時信用狀金額               |    |
|     | C15         | NUMBER(18, 0)      | 前次修狀餘額                 |    |
|     | C16         | NUMBER(18, 0)      | 目前信用狀餘額                |    |
|     | C17         | NUMBER(18, 0)      | 保證金餘額                  |    |
|     | C18         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C19         | NUMBER(18, 0)      | 擔提金額累計                 |    |
|     | C20         | NUMBER(18, 0)      | 國外費用累計                 |    |
|     | C21         | NUMBER(18, 0)      | 欠繳國外費用累計               |    |
|     | C22         | NUMBER(18, 0)      | 保兌費用_外幣                |    |
|     | C23         | NUMBER(18, 0)      | 手續費用累計                 |    |
|     | C24         | NUMBER(18, 0)      | 郵電費用累計                 |    |
|     | C25         | NUMBER(18, 0)      | 優惠手續費累計                |    |
|     | C26         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C27         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C28         | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C29         | VARCHAR2(16 char) | 主信用狀號碼                 |    |
|     | C30         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C31         | NUMBER(12, 6)      | 保證金成數                  |    |
|     | C32         | NUMBER(2, 0)       | 容許百分比加項                |    |
|     | C33         | NUMBER(12, 6)      | 開狀時成交費率                |    |
|     | C34         | DATE              | 開狀日期                   |    |
|     | C35         | DATE              | 退匯註銷日期                 |    |
|     | C36         | DATE              | 最後裝船日                  |    |
|     | C37         | DATE              | 取消信用狀日                 |    |
|     | C38         | DATE              | 有效期限                   |    |
|     | C39         | VARCHAR2(1 char)  | 有效期限地點                 |    |
|     | C40         | DATE              | 最後交易日                  |    |
|     | C41         | NUMBER(2, 0)       | 計費期數                   |    |
|     | C42         | NUMBER(2, 0)       | 單據提示期限                 |    |
|     | C43         | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C44         | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C45         | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C46         | VARCHAR2(1 char)  | Avail. With             |    |
|     | C47         | VARCHAR2(1 char)  | By                     |    |
|     | C48         | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C49         | VARCHAR2(1 char)  | 匯票付款人                  |    |
|     | C50         | VARCHAR2(1 char)  | 運送方式                   |    |
|     | C51         | VARCHAR2(1 char)  | 價格條件                   |    |
|     | C52         | VARCHAR2(1 char)  | 運費負擔                   |    |
|     | C53         | VARCHAR2(1 char)  | 有無保單                   |    |
|     | C54         | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C55         | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C56         | VARCHAR2(1 char)  | 部份裝運許可                 |    |
|     | C57         | VARCHAR2(1 char)  | 轉運許可                   |    |
|     | C58         | VARCHAR2(1 char)  | 單據收貨人                  |    |
|     | C59         | VARCHAR2(1 char)  | 是否授權                   |    |
|     | C60         | VARCHAR2(1 char)  | 是否保兌                   |    |
|     | C61         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C62         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C601        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C602        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C603        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C604        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C605        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C606        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C607        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C608        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C65         | VARCHAR2(5 char)  | 通知銀行編號                 |    |
|     | C66         | VARCHAR2(40 char) | 通知銀行名稱                 |    |
|     | C67         | VARCHAR2(12 char) | 通知銀行SWIFT_CODE         |    |
|     | C68         | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C69         | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C70         | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C71         | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C72         | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C73         | DATE              | 營業日期                   |    |
|     | C74         | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C609        | VARCHAR2(16 char) | 保單號碼                   |    |
|     | C610        | NUMBER(18, 0)      | 保險金額                   |    |
|     | C611        | DATE              | 保險日期                   |    |
|     | C76         | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C77         | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C78         | VARCHAR2(40 char) | 申請人中文名稱                |    |
|     | C79         | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C80         | NUMBER(18, 0)      | 沖轉自行結匯款                |    |
|     | C612        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C613        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C614        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C82         | DATE              | 到單收件日                  |    |
|     | C83         | NUMBER(18, 2)      | 等值美金-報表用               |    |
|     | C84         | VARCHAR2(1 char)  | 開狀性質-RPT               |    |
|     | C85         | VARCHAR2(1 char)  | 保單是否收到                 |    |
|     | C86         | NUMBER(18, 0)      | 修改信用狀增加金額              |    |
|     | C87         | NUMBER(18, 0)      | 修改信用狀減少金額              |    |
|     | C88         | VARCHAR2(12 char) | OLD-CANO               |    |
|     | C89         | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C90         | VARCHAR2(7 char)  | AO代碼                   |    |
|     | C91         | VARCHAR2(4 char)  | 代理行                    |    |
|     | C92         | NUMBER(18, 0)      | 信用狀餘額_34B              |    |
|     | C93         | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C94         | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C95         | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C96         | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C97         | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C98         | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C99         | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C100        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C101        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C102        | NUMBER(2, 0)       | 容許百分比減項                |    |
|     | C103        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | C104        | NUMBER(18, 0)      | 其他應收款                  |    |
|     | C105        | VARCHAR2(1 char)  | 延遲付款方式                 |    |
|     | C106        | NUMBER(3, 0)       | 延遲付款天期                 |    |
|     | C107        | NUMBER(18, 0)      | 應收信用狀款餘額               |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |    |

### VW_ODS_D_FILEIMP

#### 進口業務工作暫存檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                   |    |
| PK  | C2          | VARCHAR2(16 char) | 信用狀編號                  |    |
| PK  | C3          | VARCHAR2(1 char)  | 業務別                    |    |
| PK  | C4          | VARCHAR2(2 char)  | LC交易序號                 |    |
| PK  | C5          | VARCHAR2(2 char)  | 修狀_到單次數                |    |
| PK  | C6          | VARCHAR2(1 char)  | 交易檔序號                  |    |
|     | C7          | VARCHAR2(4 char)  | 記帳單位                   |    |
|     | C8          | VARCHAR2(1 char)  | 信用狀型式                  |    |
|     | C9          | NUMBER(2, 0)       | 原修狀次數                  |    |
|     | C10         | NUMBER(2, 0)       | 原到單次數                  |    |
|     | C11         | NUMBER(1, 0)       | 原交易檔序號                 |    |
|     | C12         | VARCHAR2(1 char)  | 戶況                     |    |
|     | C13         | VARCHAR2(2 char)  | 交易別                    |    |
|     | C14         | VARCHAR2(20 char) | 交易別全文                  |    |
|     | C15         | NUMBER(2, 0)       | 版次_更正次數                |    |
|     | C16         | VARCHAR2(3 char)  | 信用狀幣別                  |    |
|     | C601        | NUMBER(12, 6)      | 掛牌中價匯率_CCY-TWD         |    |
|     | C602        | NUMBER(12, 6)      | 成本匯率_CCY-TWD           |    |
|     | C603        | NUMBER(12, 6)      | 成交匯率_CCY-TWD           |    |
|     | C604        | NUMBER(12, 6)      | 匯率上限                   |    |
|     | C605        | NUMBER(12, 6)      | 匯率下限                   |    |
|     | C18         | NUMBER(12, 6)      | 保兌費率                   |    |
|     | C19         | NUMBER(12, 6)      | 標準手續費率                 |    |
|     | C20         | NUMBER(12, 6)      | 成交手續費率                 |    |
|     | C21         | NUMBER(12, 6)      | 前次保證成數                 |    |
|     | C22         | NUMBER(12, 6)      | 保證成數                   |    |
|     | C23         | NUMBER(2, 0)       | 容許百分比加項                |    |
|     | C24         | NUMBER(12, 6)      | 利息利率Ａ                  |    |
|     | C25         | NUMBER(12, 6)      | 利息利率Ｂ                  |    |
|     | C26         | NUMBER(12, 6)      | 違約金利率Ａ                 |    |
|     | C27         | NUMBER(12, 6)      | 違約金利率Ｂ_原容許百分比          |    |
|     | C28         | NUMBER(18, 0)      | 前次信用狀餘額                |    |
|     | C29         | NUMBER(18, 0)      | 本次信用狀餘額                |    |
|     | C30         | NUMBER(18, 0)      | 交易金額                   |    |
|     | C31         | VARCHAR2(3 char)  | 額度幣別                   |    |
|     | C32         | NUMBER(12, 6)      | 額度交叉匯率                 |    |
|     | C33         | VARCHAR2(3 char)  | 額度佔用_恢復代碼              |    |
|     | C34         | NUMBER(18, 0)      | 前次保證金餘額                |    |
|     | C35         | NUMBER(18, 0)      | 保證金交易金額                |    |
|     | C36         | NUMBER(18, 0)      | 本次保證金餘額                |    |
|     | C37         | NUMBER(18, 0)      | 擔提金額累計                 |    |
|     | C38         | NUMBER(18, 0)      | 國外求償費用                 |    |
|     | C39         | NUMBER(18, 0)      | 國外費用_外幣                |    |
|     | C40         | NUMBER(18, 0)      | 匯票金額                   |    |
|     | C41         | NUMBER(18, 0)      | 超押金額                   |    |
|     | C42         | NUMBER(18, 0)      | 前次擔提金額                 |    |
|     | C43         | NUMBER(18, 0)      | 前次擔提金額_託收              |    |
|     | C44         | NUMBER(18, 0)      | 本次擔提餘額_託收              |    |
|     | C45         | NUMBER(18, 0)      | 轉放款_催收金額               |    |
|     | C46         | NUMBER(18, 0)      | 進口押匯款_應收承兌票款           |    |
|     | C47         | NUMBER(18, 0)      | 匯款金額_應付國外總額            |    |
|     | C48         | NUMBER(18, 0)      | 我方費用_外幣                |    |
|     | C49         | NUMBER(18, 0)      | 利息費用_臺幣                |    |
|     | C50         | NUMBER(18, 0)      | 違約金_臺幣                 |    |
|     | C51         | NUMBER(18, 0)      | 本次保兌費用                 |    |
|     | C52         | NUMBER(18, 0)      | 最低保兌費用                 |    |
|     | C53         | NUMBER(18, 0)      | 前次保兌費用_標準手續費           |    |
|     | C54         | NUMBER(18, 0)      | 實收手續費                  |    |
|     | C55         | NUMBER(18, 0)      | 保兌費_外幣                 |    |
|     | C56         | NUMBER(18, 0)      | 優惠手續費                  |    |
|     | C57         | NUMBER(18, 0)      | 修狀增加金額_利息費用_外幣         |    |
|     | C58         | NUMBER(18, 0)      | 修狀減少金額_違約金_外幣          |    |
|     | C59         | NUMBER(18, 0)      | 我方費用_臺幣                |    |
|     | C60         | NUMBER(18, 0)      | 國外費用_臺幣                |    |
|     | C61         | NUMBER(18, 0)      | 匯費_臺幣                  |    |
|     | C62         | NUMBER(18, 0)      | 郵電費_臺幣                 |    |
|     | C63         | NUMBER(18, 0)      | 新臺幣結購外幣                |    |
|     | C64         | NUMBER(18, 0)      | 以外匯存款支付_連動活存           |    |
|     | C65         | NUMBER(18, 0)      | 旅行支票_外幣現鈔              |    |
|     | C66         | NUMBER(18, 0)      | 遠期外匯結購                 |    |
|     | C67         | NUMBER(18, 0)      | 以外幣貸款支付                |    |
|     | C68         | NUMBER(18, 0)      | 出口或匯入款轉匯               |    |
|     | C69         | NUMBER(18, 0)      | 其他                     |    |
|     | C70         | NUMBER(18, 0)      | 結購臺幣                   |    |
|     | C71         | NUMBER(18, 0)      | 補收保證金_客戶應繳總額_託收        |    |
|     | C72         | NUMBER(18, 0)      | 應收原幣金額                 |    |
|     | C73         | NUMBER(18, 0)      | 應收臺幣金額                 |    |
|     | C74         | NUMBER(18, 0)      | 實收原幣金額                 |    |
|     | C75         | NUMBER(18, 0)      | 實收臺幣金額                 |    |
|     | C76         | NUMBER(18, 0)      | 結匯原幣金額                 |    |
|     | C77         | NUMBER(18, 0)      | 結匯臺幣金額                 |    |
|     | C606        | VARCHAR2(40 char) | 金額大寫一                  |    |
|     | C607        | VARCHAR2(40 char) | 金額大寫二                  |    |
|     | C608        | VARCHAR2(40 char) | 金額大寫三                  |    |
|     | C609        | VARCHAR2(40 char) | 金額大寫四                  |    |
|     | C79         | VARCHAR2(1 char)  | 擔提種類                   |    |
|     | C80         | VARCHAR2(1 char)  | 融資種類                   |    |
|     | C81         | VARCHAR2(6 char)  | 申請人顧客號碼                |    |
|     | C82         | VARCHAR2(11 char) | 申請人統一編號                |    |
|     | C83         | VARCHAR2(12 char) | 批覆書號碼                  |    |
|     | C84         | VARCHAR2(16 char) | 主信用狀編號                 |    |
|     | C85         | NUMBER(2, 0)       | 前次期數                   |    |
|     | C86         | NUMBER(2, 0)       | 本次期數                   |    |
|     | C87         | NUMBER(2, 0)       | 期數差_墊款息天數              |    |
|     | C88         | DATE              | 開狀日期_承兌日               |    |
|     | C89         | DATE              | 擔提日期                   |    |
|     | C90         | DATE              | 到單日                    |    |
|     | C91         | DATE              | 記帳日                    |    |
|     | C92         | DATE              | 前次有效期限                 |    |
|     | C93         | DATE              | 本次有效期限                 |    |
|     | C94         | DATE              | 到期日                    |    |
|     | C95         | DATE              | 最後交易日_存同起息日            |    |
|     | C96         | DATE              | 國外扣帳日_付款日              |    |
|     | C97         | DATE              | 裝船日                    |    |
|     | C98         | DATE              | 通知日期_催收文件寄發日           |    |
|     | C99         | DATE              | 最後裝船日                  |    |
|     | C100        | VARCHAR2(1 char)  | 到單匯款FLAG               |    |
|     | C101        | DATE              | 對內融資起息日                |    |
|     | C102        | NUMBER(2, 0)       | 單據提示期限                 |    |
|     | C103        | NUMBER(3, 0)       | TenorDays_對外           |    |
|     | C104        | NUMBER(3, 0)       | TenorDays_對內           |    |
|     | C105        | VARCHAR2(29 char) | 國別英文名稱                 |    |
|     | C610        | VARCHAR2(1 char)  | 有效期限地點                 |    |
|     | C611        | VARCHAR2(1 char)  | Avail. With             |    |
|     | C612        | VARCHAR2(1 char)  | By                     |    |
|     | C613        | VARCHAR2(1 char)  | 付款方式                   |    |
|     | C614        | VARCHAR2(1 char)  | 匯票付款人                  |    |
|     | C615        | VARCHAR2(1 char)  | 運送方式                   |    |
|     | C616        | VARCHAR2(1 char)  | 價格條件                   |    |
|     | C617        | VARCHAR2(1 char)  | 運費負擔                   |    |
|     | C618        | VARCHAR2(1 char)  | 部份裝運                   |    |
|     | C619        | VARCHAR2(1 char)  | 轉運                     |    |
|     | C620        | VARCHAR2(1 char)  | 有無保單                   |    |
|     | C621        | VARCHAR2(1 char)  | 提單收貨人                  |    |
|     | C622        | VARCHAR2(1 char)  | 是否轉放款_是否付款_託收擔提        |    |
|     | C623        | VARCHAR2(1 char)  | 是否授權求償                 |    |
|     | C624        | VARCHAR2(1 char)  | 是否保兌                   |    |
|     | C625        | VARCHAR2(1 char)  | 是否瑕疵                   |    |
|     | C107        | VARCHAR2(40 char) | 瑕疵明細一_到單匯款註記           |    |
|     | C108        | VARCHAR2(40 char) | 瑕疵明細二                  |    |
|     | C109        | VARCHAR2(70 char) | 裝載港_起運地機場_44E          |    |
|     | C110        | VARCHAR2(70 char) | 卸貨港_目的地機場_44F          |    |
|     | C111        | VARCHAR2(20 char) | 提單號碼                   |    |
|     | C112        | VARCHAR2(30 char) | 船名_航次                  |    |
|     | C626        | VARCHAR2(40 char) | 申請人名稱                  |    |
|     | C627        | VARCHAR2(40 char) | 申請人地址一                 |    |
|     | C628        | VARCHAR2(40 char) | 申請人地址二                 |    |
|     | C629        | VARCHAR2(40 char) | 申請人地址三                 |    |
|     | C630        | DATE              | 申請人出生年月日               |    |
|     | C631        | VARCHAR2(40 char) | 受益人名稱                  |    |
|     | C632        | VARCHAR2(40 char) | 受益人地址一                 |    |
|     | C633        | VARCHAR2(40 char) | 受益人地址二                 |    |
|     | C634        | VARCHAR2(40 char) | 受益人地址三                 |    |
|     | C115        | VARCHAR2(5 char)  | 通知銀行_押匯銀行編號            |    |
|     | C635        | VARCHAR2(40 char) | 通知銀行_押匯銀行名稱            |    |
|     | C636        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址一           |    |
|     | C637        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址二           |    |
|     | C638        | VARCHAR2(40 char) | 通知銀行_押匯銀行地址三           |    |
|     | C639        | VARCHAR2(12 char) | 通知銀行_押匯銀行SWIFT_CODE    |    |
|     | C640        | VARCHAR2(20 char) | 押匯銀行參考編號               |    |
|     | C117        | VARCHAR2(5 char)  | 存匯銀行編號                 |    |
|     | C641        | VARCHAR2(40 char) | 存匯銀行名稱                 |    |
|     | C642        | VARCHAR2(40 char) | 存匯銀行地址一                |    |
|     | C643        | VARCHAR2(40 char) | 存匯銀行地址二                |    |
|     | C644        | VARCHAR2(40 char) | 存匯銀行地址三                |    |
|     | C645        | VARCHAR2(12 char) | 存匯銀行SWIFT_CODE         |    |
|     | C646        | VARCHAR2(40 char) | 船公司名稱                  |    |
|     | C647        | VARCHAR2(40 char) | 船公司地址一                 |    |
|     | C648        | VARCHAR2(40 char) | 船公司地址二                 |    |
|     | C120        | VARCHAR2(10 char) | 業務經辦                   |    |
|     | C121        | VARCHAR2(10 char) | 業務主管                   |    |
|     | C122        | VARCHAR2(1 char)  | 業務放行註記                 |    |
|     | C123        | VARCHAR2(8 char)  | 業務功能代碼                 |    |
|     | C649        | VARCHAR2(3 char)  | 信用狀型式Q-KEY             |    |
|     | C650        | VARCHAR2(3 char)  | TenorType-Q-KEY        |    |
|     | C651        | VARCHAR2(3 char)  | 有效期限地點_Q_KEY_計息天數Ａ     |    |
|     | C652        | VARCHAR2(3 char)  | Avail. With-Q-KEY_計息天數Ｂ |    |
|     | C653        | VARCHAR2(3 char)  | By-Q-KEY               |    |
|     | C654        | VARCHAR2(3 char)  | 付款方式Q-KEY              |    |
|     | C655        | VARCHAR2(3 char)  | 匯票付款人Q-KEY             |    |
|     | C656        | VARCHAR2(3 char)  | 運送方式Q-KEY              |    |
|     | C657        | VARCHAR2(3 char)  | 價格條件Q-KEY              |    |
|     | C658        | VARCHAR2(3 char)  | 運費負擔Q-KEY              |    |
|     | C659        | VARCHAR2(3 char)  | 部份裝運Q-KEY              |    |
|     | C660        | VARCHAR2(3 char)  | 轉運Q-KEY                |    |
|     | C661        | VARCHAR2(3 char)  | 提單收貨人Q-KEY             |    |
|     | C662        | VARCHAR2(3 char)  | 是否保兌Q-KEY              |    |
|     | C663        | VARCHAR2(20 char) | 信用狀型式全文                |    |
|     | C664        | VARCHAR2(20 char) | TenorType全文            |    |
|     | C665        | VARCHAR2(20 char) | 有效期限地點全文               |    |
|     | C666        | VARCHAR2(20 char) | Avail. With全文           |    |
|     | C667        | VARCHAR2(20 char) | By全文                   |    |
|     | C668        | VARCHAR2(20 char) | 付款方式全文                 |    |
|     | C669        | VARCHAR2(20 char) | 匯票付款人全文                |    |
|     | C670        | VARCHAR2(20 char) | 運送方式全文                 |    |
|     | C671        | VARCHAR2(20 char) | 價格條件全文                 |    |
|     | C672        | VARCHAR2(20 char) | 運費負擔全文                 |    |
|     | C673        | VARCHAR2(20 char) | 部份裝運全文                 |    |
|     | C674        | VARCHAR2(20 char) | 轉運全文                   |    |
|     | C675        | VARCHAR2(20 char) | 提單收貨人全文                |    |
|     | C676        | VARCHAR2(20 char) | 保兌全文                   |    |
|     | C677        | VARCHAR2(20 char) | 瑕疵全文                   |    |
|     | C126        | VARCHAR2(2 char)  | 業務代碼                   |    |
|     | C127        | VARCHAR2(40 char) | 會計摘要                   |    |
|     | C128        | VARCHAR2(30 char) | 會計傳票KEY                |    |
|     | C129        | NUMBER(5, 0)       | 會計傳票序號                 |    |
|     | C825        | VARCHAR2(20 char) | 電文稿格式一                 |    |
|     | C826        | VARCHAR2(20 char) | 電文稿格式二                 |    |
|     | C827        | VARCHAR2(20 char) | 電文稿格式三                 |    |
|     | C828        | VARCHAR2(20 char) | 電文稿格式四                 |    |
|     | C829        | VARCHAR2(20 char) | 電文稿格式五                 |    |
|     | C830        | VARCHAR2(20 char) | 電文稿格式六                 |    |
|     | C831        | VARCHAR2(20 char) | 電文稿格式七                 |    |
|     | C176        | DATE              | 註銷擔提日                  |    |
|     | C177        | DATE              | 託收承兌日                  |    |
|     | C178        | VARCHAR2(1 char)  | 開狀方式                   |    |
|     | C179        | NUMBER(18, 0)      | 批覆書保證金額                |    |
|     | C180        | VARCHAR2(1 char)  | 費用繳交                   |    |
|     | C181        | NUMBER(18, 0)      | 費用合計_臺                 |    |
|     | C182        | NUMBER(18, 0)      | 費用合計_外                 |    |
|     | C183        | VARCHAR2(13 char) | 外幣帳號_連動活存              |    |
|     | C832        | VARCHAR2(4 char)  | 手續費編碼                  |    |
|     | C833        | NUMBER(12, 6)      | 手續費費率                  |    |
|     | C834        | VARCHAR2(3 char)  | 手續費幣別                  |    |
|     | C835        | NUMBER(18, 0)      | 手續費一次性收費額              |    |
|     | C836        | NUMBER(18, 0)      | 手續費最高收費                |    |
|     | C837        | NUMBER(18, 0)      | 手續費最低收費                |    |
|     | C838        | VARCHAR2(1 char)  | 手續費收費方式                |    |
|     | C839        | NUMBER(12, 6)      | 手續費成交匯率                |    |
|     | C840        | NUMBER(12, 6)      | 客戶優惠利率                 |    |
|     | C841        | NUMBER(18, 0)      | 存入台幣帳戶金額               |    |
|     | C842        | VARCHAR2(13 char) | 台幣帳號                   |    |
|     | C843        | VARCHAR2(1 char)  | Control_Flag           |    |
|     | C844        | VARCHAR2(1 char)  | 郵寄地區                   |    |
|     | C845        | VARCHAR2(16 char) | 遠匯交易號碼                 |    |
|     | C846        | VARCHAR2(3 char)  | 遠匯交割幣別                 |    |
|     | C847        | NUMBER(12, 6)      | 遠匯交割匯率                 |    |
|     | C848        | VARCHAR2(13 char) | 遠匯交割帳號                 |    |
|     | C849        | VARCHAR2(1 char)  | 遠匯交割支號                 |    |
|     | C850        | NUMBER(18, 0)      | 各業務交割金額合計              |    |
|     | C851        | NUMBER(18, 0)      | 應付遠匯款                  |    |
|     | C852        | NUMBER(18, 0)      | 兌換遠匯_臺幣                |    |
|     | C853        | VARCHAR2(1 char)  | 遠匯FLAG                 |    |
|     | C854        | VARCHAR2(3 char)  | 違約金幣別_遠匯               |    |
|     | C855        | NUMBER(18, 0)      | 違約金_遠匯                 |    |
|     | C856        | VARCHAR2(4 char)  | 原營業單位                  |    |
|     | C857        | VARCHAR2(16 char) | 原遠匯交易號碼                |    |
|     | C858        | NUMBER(18, 0)      | 原交割金額                  |    |
|     | C859        | VARCHAR2(4 char)  | 營業單位_遠匯連動活存            |    |
|     | C860        | VARCHAR2(2 char)  | 活存科目_遠匯連動活存            |    |
|     | C861        | VARCHAR2(6 char)  | 顧客號碼_遠匯連動活存            |    |
|     | C862        | NUMBER(1, 0)       | 檢號_遠匯連動活存              |    |
|     | C863        | VARCHAR2(3 char)  | 活存摘要_遠匯連動活存            |    |
|     | C864        | VARCHAR2(3 char)  | 轉放款幣別                  |    |
|     | C865        | NUMBER(18, 0)      | 幣別轉換金額                 |    |
|     | C866        | NUMBER(12, 6)      | 交叉匯率                   |    |
|     | C867        | NUMBER(12, 6)      | 成本利率                   |    |
|     | C868        | NUMBER(12, 6)      | 成交利率                   |    |
|     | C869        | NUMBER(12, 6)      | 逾期利率                   |    |
|     | C870        | NUMBER(12, 6)      | 議價匯率                   |    |
|     | C871        | DATE              | 國外押匯日                  |    |
|     | C872        | DATE              | 拒付日期                   |    |
|     | C873        | DATE              | 註銷日期_拒付解除              |    |
|     | C874        | DATE              | 取消信用狀日期                |    |
|     | C875        | VARCHAR2(2 char)  | 主管放行SPS                |    |
|     | C876        | DATE              | 解除擔提日                  |    |
|     | C877        | VARCHAR2(1 char)  | 控制保兌費用由誰負擔FLAG         |    |
|     | C878        | VARCHAR2(40 char) | 客戶中文名稱                 |    |
|     | C879        | VARCHAR2(5 char)  | 船公司代碼                  |    |
|     | C880        | VARCHAR2(2 char)  | 利率種類                   |    |
|     | C881        | VARCHAR2(2 char)  | 利率代碼                   |    |
|     | C882        | VARCHAR2(1 char)  | 即期信用狀墊款息選項             |    |
|     | C883        | NUMBER(12, 6)      | 批覆書保證成數                |    |
|     | C884        | VARCHAR2(12 char) | 押匯行之存匯行帳號              |    |
|     | C885        | VARCHAR2(12 char) | 押匯行之存匯行SWIFT_CODE      |    |
|     | C886        | VARCHAR2(40 char) | 押匯行之存匯行名稱              |    |
|     | C887        | NUMBER(18, 0)      | 郵電費_外幣                 |    |
|     | C888        | NUMBER(18, 0)      | 修改後之信用狀餘額              |    |
|     | C889        | NUMBER(2, 0)       | 期數差_墊款息天數_增加金額         |    |
|     | C890        | NUMBER(2, 0)       | 前次期數_增加金額              |    |
|     | C891        | NUMBER(2, 0)       | 本次期數_增加金額              |    |
|     | C892        | VARCHAR2(1 char)  | 客戶是否付款_託收DA承兌          |    |
|     | C893        | NUMBER(3, 0)       | 逾期實收天數                 |    |
|     | C894        | NUMBER(3, 0)       | 違約實收天數                 |    |
|     | C895        | VARCHAR2(4 char)  | 營業單位_連動活存              |    |
|     | C896        | VARCHAR2(2 char)  | 活存科目_連動活存              |    |
|     | C897        | VARCHAR2(6 char)  | 顧客號碼_連動活存              |    |
|     | C898        | NUMBER(1, 0)       | 檢號_連動活存                |    |
|     | C899        | VARCHAR2(3 char)  | 活存摘要_連動活存              |    |
|     | C189        | VARCHAR2(2 char)  | 國別代碼                   |    |
|     | C190        | VARCHAR2(20 char) | 分行名稱                   |    |
|     | C191        | NUMBER(18, 0)      | 額度異動金額_依交易幣別           |    |
|     | C192        | NUMBER(12, 6)      | 手續費率_第二期               |    |
|     | C193        | VARCHAR2(1 char)  | 開狀性質-RPT               |    |
|     | C194        | VARCHAR2(20 char) | 開狀電文稿格式一               |    |
|     | C195        | VARCHAR2(12 char) | 核貸書總號                  |    |
|     | C196        | VARCHAR2(4 char)  | 區域中心                   |    |
|     | C197        | VARCHAR2(7 char)  | AO代號                   |    |
|     | C900        | VARCHAR2(13 char) | 台幣扣款帳號                 |    |
|     | C901        | NUMBER(18, 0)      | 連動台幣扣款金額               |    |
|     | C199        | VARCHAR2(4 char)  | 代理行                    |    |
|     | C902        | VARCHAR2(1 char)  | 議價處理區分                 |    |
|     | C903        | VARCHAR2(6 char)  | 議價編號                   |    |
|     | C904        | VARCHAR2(1 char)  | 買賣區分                   |    |
|     | C905        | VARCHAR2(3 char)  | 議價幣別                   |    |
|     | C906        | NUMBER(18, 5)      | 議價成交金額                 |    |
|     | C907        | VARCHAR2(2 char)  | 通路別                    |    |
|     | C908        | NUMBER(18, 0)      | 信用狀總金額_34B             |    |
|     | C909        | NUMBER(12, 6)      | 承兌費率                   |    |
|     | C910        | VARCHAR2(20 char) | 價格條件名稱                 |    |
|     | C911        | NUMBER(18, 0)      | 瑕疵費用                   |    |
|     | C912        | VARCHAR2(70 char) | 收貨地_接管地_44A            |    |
|     | C913        | VARCHAR2(70 char) | 目的地_44B                |    |
|     | C914        | VARCHAR2(2 char)  | GEB-REJ-CODE           |    |
|     | C915        | VARCHAR2(4 char)  | GEB-ERR-MSG            |    |
|     | C916        | VARCHAR2(5 char)  | GEB-TXN-CODE           |    |
|     | C917        | VARCHAR2(7 char)  | GEB-SEQ-NO             |    |
|     | C918        | VARCHAR2(1 char)  | UPAS_YES_NO_FLAG       |    |
|     | C919        | VARCHAR2(1 char)  | Discount_Rate_Flag     |    |
|     | C920        | NUMBER(3, 0)       | LIBOR天期                |    |
|     | C921        | NUMBER(12, 6)      | LIBOR_SPREAD           |    |
|     | C922        | NUMBER(12, 6)      | UPAS_Discount_Rate     |    |
|     | C923        | NUMBER(18, 0)      | FEE_AMOUNT             |    |
|     | C924        | NUMBER(18, 0)      | 預收利息                   |    |
|     | C925        | NUMBER(2, 0)       | 容許百分比減項                |    |
|     | C926        | VARCHAR2(16 char) | 對台聯往銷帳編號               |    |
|     | C927        | VARCHAR2(1 char)  | 商業發票加註輸入許可證旗標          |    |
|     | C928        | VARCHAR2(30 char) | 輸入許可證號                 |    |
|     | C929        | VARCHAR2(1 char)  | 海運_空運提單旗標              |    |
|     | C930        | VARCHAR2(1 char)  | 海運提單份數                 |    |
|     | C931        | VARCHAR2(1 char)  | 海運運費                   |    |
|     | C932        | VARCHAR2(1 char)  | 空運運費                   |    |
|     | C933        | NUMBER(18, 0)      | 承兌費用                   |    |
|     | C934        | NUMBER(18, 0)      | 開狀費用                   |    |
|     | C935        | NUMBER(18, 0)      | 修狀費用                   |    |
|     | C936        | VARCHAR2(5 char)  | 匯入存匯行                  |    |
|     | C937        | VARCHAR2(30 char) | 開狀性質說明                 |    |
|     | C938        | VARCHAR2(16 char) | 電文複製用LC_NO             |    |
|     | C939        | VARCHAR2(3 char)  | MESSAGE_TYPE           |    |
|     | C940        | VARCHAR2(1 char)  | 開_修狀費用                 |    |
|     | C941        | NUMBER(18, 0)      | 其他應收款                  |    |
|     | C942        | VARCHAR2(1 char)  | 圈存刪除FLAG               |    |
|     | C943        | NUMBER(3, 0)       | 延遲付款天期                 |    |
|     | C944        | VARCHAR2(1 char)  | 延遲付款方式                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                 |
