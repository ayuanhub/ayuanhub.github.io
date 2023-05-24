---
sidebar_position: 33
title: 外匯系統-放款(FXLN)
---

### VW_ODS_D_EXCECML2

#### 外幣每日授信餘額檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | DATE              | 資料日期                      |    |
|     | C3          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C5          | VARCHAR2(18 char) | 交易編號                      |    |
|     | C7          | VARCHAR2(12 char) | FAC NO. 核號                 |    |
| PK  | C9          | VARCHAR2(3 char)  | 幣別                        |    |
|     | C11         | NUMBER(15, 2)      | 授信餘額-原幣V99                |    |
|     | C13         | NUMBER(10, 0)      | 利率                        |    |
|     | C15         | VARCHAR2(11 char) | 客戶統編                      |    |
|     | C17         | VARCHAR2(7 char)  | AO代碼                      |    |
|     | C19         | VARCHAR2(3 char)  | 額度細項代碼                    |    |
|     | C21         | NUMBER(15, 0)      | 初貸金額                      |    |
|     | C23         | DATE              | 初貸日                       |    |
|     | C25         | DATE              | 到期日                       |    |
|     | C27         | VARCHAR2(3 char)  | 放款性質別                     |    |
|     | C29         | VARCHAR2(4 char)  | 績效單位                      |    |
|     | C31         | VARCHAR2(1 char)  | 逾期記號                      |    |
|     | C33         | VARCHAR2(1 char)  | 聯貸記號                      |    |
|     | C35         | NUMBER(4, 0)       | 逾期天數                      |    |
|     | C37         | NUMBER(10, 0)      | 聯往成本利率                    |    |
|     | C39         | DATE              | 利率起用日                     |    |
|     | C41         | DATE              | 起息日                       |    |
|     | C43         | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C45         | VARCHAR2(1 char)  | DO                        |    |
|     | C47         | VARCHAR2(6 char)  | 行業別-主計處                   |    |
|     | C49         | VARCHAR2(6 char)  | 對象別-央行                    |    |
|     | C51         | VARCHAR2(2 char)  | 客戶國別                      |    |
|     | C53         | DATE              | FAC核准日期                   |    |
|     | C55         | VARCHAR2(6 char)  | 授信戶號                      |    |
|     | C57         | VARCHAR2(4 char)  | 會計科目                      |    |
|     | C59         | VARCHAR2(2 char)  | 聯徵科目                      |    |
|     | C61         | VARCHAR2(1 char)  | 轉催呆原聯徵科目                  |    |
|     | C63         | NUMBER(15, 0)      | 折等值台幣餘額-元                 |    |
|     | C65         | VARCHAR2(1 char)  | 遲延還款記錄                    |    |
|     | C67         | VARCHAR2(1 char)  | 繳款未滿四期                    |    |
|     | C69         | DATE              | 下次繳息日                     |    |
|     | C71         | DATE              | 下次還本日                     |    |
|     | C73         | NUMBER(15, 2)      | 催收款項-原幣V99                |    |
|     | C75         | NUMBER(15, 2)      | 催收收回-原幣V99                |    |
|     | C77         | VARCHAR2(1 char)  | 利率調整方式                    |    |
|     | C79         | NUMBER(3, 0)       | 出押日數                      |    |
|     | C81         | NUMBER(3, 0)       | 轉押日數                      |    |
|     | C83         | NUMBER(3, 0)       | 貼現日數                      |    |
|     | C85         | VARCHAR2(1 char)  | 利率別                       |    |
|     | C87         | NUMBER(10, 0)      | 利率加減碼                     |    |
|     | C89         | VARCHAR2(1 char)  | 資評分類                      |    |
|     | C91         | VARCHAR2(4 char)  | 會計子目                      |    |
|     | C93         | NUMBER(3, 0)       | S/L利率天期                   |    |
|     | C95         | VARCHAR2(1 char)  | 承諾費收取註記                   |    |
|     | C97         | DATE              | 上次繳息日                     |    |
|     | C99         | VARCHAR2(1 char)  | 還款方式-1到期還本息2分息到還本3分本息     |    |
|     | C101        | NUMBER(3, 0)       | 逾期月                       |    |
|     | C103        | NUMBER(2, 0)       | 逾期日                       |    |
|     | C105        | VARCHAR2(8 char)  | 逾放重分類-債管                  |    |
|     | C107        | VARCHAR2(1 char)  | 資金流向大陸註記                  |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILE0LLM

#### 外幣中長期放款主檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 分行代號                      |    |
|     | C2          | VARCHAR2(20 char) | 分行名稱                      |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C4          | VARCHAR2(20 char) | 記帳單位名稱                    |    |
| PK  | C5          | VARCHAR2(16 char) | 放款交易編號                    |    |
|     | C6          | VARCHAR2(1 char)  | 戶況                        |    |
|     | C7          | VARCHAR2(2 char)  | 業務代碼(AP CODE)             |    |
|     | C8          | VARCHAR2(16 char) | 來源編號                      |    |
|     | C9          | VARCHAR2(2 char)  | 中長放種類代碼                   |    |
|     | C10         | VARCHAR2(2 char)  | 中長放代款代號                   |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 貸款金額                      |    |
|     | C13         | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C14         | VARCHAR2(20 char) | 種類說明                      |    |
|     | C15         | VARCHAR2(1 char)  | 資金用途別                     |    |
|     | C16         | VARCHAR2(20 char) | 資金用途說明                    |    |
|     | C17         | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C18         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C19         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C20         | DATE              | 起息日                       |    |
|     | C21         | DATE              | 到期日                       |    |
|     | C22         | VARCHAR2(1 char)  | 期數別                       |    |
|     | C23         | NUMBER(4, 0)       | 計息期數(足月)                  |    |
|     | C24         | NUMBER(4, 0)       | 計息期數(不足月)                 |    |
|     | C25         | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C26         | VARCHAR2(20 char) | 交易國別說明                    |    |
|     | C27         | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C28         | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C601        | VARCHAR2(12 char) | 批覆書號                      |    |
|     | C602        | VARCHAR2(3 char)  | 額度細項                      |    |
|     | C603        | VARCHAR2(3 char)  | 批覆書幣別                     |    |
|     | C604        | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C605        | VARCHAR2(16 char) | 額度外匯key                   |    |
|     | C606        | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C607        | VARCHAR2(16 char) | 額度恢復KEY                   |    |
|     | C608        | NUMBER(18, 0)      | 前次額度餘額                    |    |
|     | C609        | NUMBER(18, 0)      | 本次額度餘額                    |    |
|     | C610        | NUMBER(18, 0)      | 本次異動金額                    |    |
|     | C611        | VARCHAR2(4 char)  | 擔保品                       |    |
|     | C612        | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C613        | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C614        | NUMBER(2, 0)       | 每月約定繳息日                   |    |
|     | C615        | VARCHAR2(12 char) | 申請人外幣帳號                   |    |
|     | C616        | VARCHAR2(1 char)  | 申請人外幣帳號檢號                 |    |
|     | C617        | VARCHAR2(3 char)  | 外匯帳號幣別                    |    |
|     | C618        | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C619        | VARCHAR2(11 char) | 客戶ID                      |    |
|     | C620        | DATE              | 客戶出生年月日                   |    |
|     | C621        | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C622        | VARCHAR2(40 char) | 客戶住址二                     |    |
|     | C623        | VARCHAR2(40 char) | 客戶住址三                     |    |
|     | C624        | VARCHAR2(11 char) | 客戶通訊電話                    |    |
|     | C625        | VARCHAR2(1 char)  | 基金保證FLAG                  |    |
|     | C626        | NUMBER(12, 6)      | 基金保證成數(擔保)                |    |
|     | C627        | NUMBER(12, 6)      | 基金保證成數(無擔保)               |    |
|     | C628        | VARCHAR2(3 char)  | 基金保證幣別                    |    |
|     | C629        | NUMBER(18, 0)      | 基金保證金額(原幣)                |    |
|     | C630        | NUMBER(18, 0)      | 基金保證-無擔保(原幣)              |    |
|     | C631        | NUMBER(18, 0)      | 基金保證-擔保                   |    |
|     | C632        | NUMBER(18, 0)      | 基金保證-無擔保                  |    |
|     | C633        | NUMBER(12, 6)      | 貸款利率                      |    |
|     | C634        | NUMBER(12, 6)      | 利率加減碼                     |    |
|     | C635        | DATE              | 最後交易日                     |    |
|     | C636        | DATE              | 上次提存_計息日                  |    |
|     | C637        | DATE              | 上次繳息日                     |    |
|     | C638        | DATE              | 上次利率變更日                   |    |
|     | C639        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C640        | NUMBER(18, 0)      | 每期應還本金                    |    |
|     | C641        | NUMBER(18, 0)      | 每期應還利息                    |    |
|     | C642        | NUMBER(18, 0)      | 目前累計已還本金                  |    |
|     | C643        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C644        | NUMBER(18, 0)      | 目前累計應還而未還利息               |    |
|     | C645        | NUMBER(18, 0)      | 目前累計應還而未還之本金              |    |
|     | C646        | NUMBER(4, 0)       | 目前已還款次數                   |    |
|     | C647        | NUMBER(4, 0)       | 目前已還息次數                   |    |
|     | C648        | NUMBER(4, 0)       | 還息寬限期數                    |    |
|     | C649        | NUMBER(4, 0)       | 還本寬限期數                    |    |
|     | C650        | DATE              | 轉催收日期                     |    |
|     | C651        | NUMBER(12, 6)      | 轉催收利率                     |    |
|     | C652        | DATE              | 轉呆帳日期                     |    |
|     | C653        | VARCHAR2(10 char) | 維護經辦                      |    |
|     | C654        | DATE              | 維護日期                      |    |
|     | C655        | VARCHAR2(8 char)  | 維護時間                      |    |
|     | C656        | VARCHAR2(10 char) | 審核主管                      |    |
|     | C657        | DATE              | 審核日期                      |    |
|     | C658        | VARCHAR2(8 char)  | 審核時間                      |    |
|     | C34         | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C35         | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C36         | VARCHAR2(20 char) | 來源區分說明                    |    |
|     | C37         | NUMBER(4, 0)       | 還息期數                      |    |
|     | C38         | NUMBER(4, 0)       | 還本期數                      |    |
|     | C39         | VARCHAR2(1 char)  | 逾期符號                      |    |
|     | C40         | NUMBER(18, 0)      | 轉催收金額                     |    |
|     | C41         | NUMBER(18, 0)      | 轉呆帳金額                     |    |
|     | C42         | VARCHAR2(1 char)  | 還款計劃區間                    |    |
|     | C43         | NUMBER(3, 0)       | EVN NO                    |    |
|     | C44         | VARCHAR2(12 char) | OLD-CANO                  |    |
|     | C45         | VARCHAR2(1 char)  | 利率選項                      |    |
|     | C46         | DATE              | 上原定繳息日                    |    |
|     | C47         | VARCHAR2(2 char)  | 風險移入國別                    |    |
|     | C48         | DATE              | 下次還本日期                    |    |
|     | C49         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C50         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C51         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C52         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C53         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C54         | DATE              | 初貸日                       |    |
|     | C55         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C56         | DATE              | 下次付息日                     |    |
|     | C57         | NUMBER(2, 0)       | 約定還息間隔                    |    |
|     | C58         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C59         | NUMBER(12, 6)      | 牌告利率                      |    |
|     | C60         | NUMBER(12, 6)      | 利率2                       |    |
|     | C61         | NUMBER(18, 0)      | 逾期息累計                     |    |
|     | C62         | NUMBER(18, 0)      | 違約金累計                     |    |
|     | C63         | NUMBER(2, 0)       | 約定還本間隔                    |    |
|     | C64         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C65         | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C66         | VARCHAR2(11 char) | 客戶統編key用                  |    |
|     | C67         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C68         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C69         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C70         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C71         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C72         | DATE              | 上次還本日                     |    |
|     | C73         | VARCHAR2(1 char)  | FILLER                    |    |
|     | C74         | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C75         | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C76         | VARCHAR2(1 char)  | 出口單據查詢檔                   |    |
|     | C77         | DATE              | 下次利率變更日                   |    |
|     | C78         | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C79         | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C80         | NUMBER(18, 0)      | 累計手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILE0LLP

#### 外幣中長期放款工作暫存檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C2          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C3          | VARCHAR2(2 char)  | 業務代碼                      |    |
| PK  | C4          | VARCHAR2(16 char) | 交易編號                      |    |
|     | C5          | VARCHAR2(20 char) | 交易說明                      |    |
| PK  | C6          | NUMBER(3, 0)       | EVENT NO                  |    |
|     | C7          | NUMBER(2, 0)       | 版次                        |    |
|     | C8          | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C9          | VARCHAR2(12 char) | 交易型態                      |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                        |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 貸款金額                      |    |
|     | C13         | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C14         | VARCHAR2(20 char) | 貸款種類說明                    |    |
|     | C15         | VARCHAR2(1 char)  | 資金用途                      |    |
|     | C16         | VARCHAR2(20 char) | 資金用途說明                    |    |
|     | C17         | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C18         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C19         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C20         | DATE              | 起息日                       |    |
|     | C21         | DATE              | 到期日                       |    |
|     | C22         | VARCHAR2(1 char)  | 期數別                       |    |
|     | C23         | NUMBER(4, 0)       | 計息期數                      |    |
|     | C601        | VARCHAR2(12 char) | 批覆書號                      |    |
|     | C602        | VARCHAR2(3 char)  | 額度細項                      |    |
|     | C603        | VARCHAR2(3 char)  | 批覆書幣別                     |    |
|     | C604        | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C605        | VARCHAR2(16 char) | 額度外匯KEY                   |    |
|     | C606        | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C607        | VARCHAR2(16 char) | 額度恢復KEY                   |    |
|     | C608        | NUMBER(18, 2)      | 前次額度餘額                    |    |
|     | C609        | NUMBER(18, 2)      | 本次額度餘額                    |    |
|     | C610        | NUMBER(18, 2)      | 本次額度異動                    |    |
|     | C611        | VARCHAR2(1 char)  | 基金保證FLAG                  |    |
|     | C612        | NUMBER(12, 6)      | 基金保證成數(擔保)                |    |
|     | C613        | NUMBER(12, 6)      | 基金保證成數(無擔保)               |    |
|     | C614        | VARCHAR2(3 char)  | 基金保證幣別                    |    |
|     | C615        | NUMBER(18, 0)      | 基金保證金額(擔保)原幣              |    |
|     | C616        | NUMBER(18, 0)      | 基金保證金額(無擔保)原幣             |    |
|     | C617        | NUMBER(18, 0)      | 基金保證金額(擔保)                |    |
|     | C618        | NUMBER(18, 0)      | 基金保證金額(無擔保)               |    |
|     | C619        | NUMBER(12, 6)      | 聯往利率                      |    |
|     | C620        | NUMBER(12, 6)      | 利差                        |    |
|     | C621        | NUMBER(12, 6)      | 買入匯率_下限                   |    |
|     | C622        | NUMBER(12, 6)      | 賣出匯率_上限                   |    |
|     | C623        | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C624        | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C625        | NUMBER(12, 6)      | 對美金匯率(交叉匯率)               |    |
|     | C626        | NUMBER(12, 6)      | 掛牌利率                      |    |
|     | C627        | NUMBER(12, 6)      | 貸放利率                      |    |
|     | C628        | NUMBER(12, 6)      | 優惠客戶利率                    |    |
|     | C629        | NUMBER(12, 6)      | 逾期利率                      |    |
|     | C630        | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C631        | NUMBER(2, 0)       | 每月約定繳息日                   |    |
|     | C632        | VARCHAR2(13 char) | 申請人台幣帳號-圈外存               |    |
|     | C633        | VARCHAR2(12 char) | 申請人外匯帳號                   |    |
|     | C634        | VARCHAR2(1 char)  | 申請人外匯帳號檢號                 |    |
|     | C635        | VARCHAR2(3 char)  | 外匯帳號幣別                    |    |
|     | C636        | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C637        | VARCHAR2(11 char) | 客戶ID                      |    |
|     | C638        | DATE              | 客戶出生年月日                   |    |
|     | C639        | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C640        | VARCHAR2(40 char) | 客戶住址二                     |    |
|     | C641        | VARCHAR2(40 char) | 客戶住址三                     |    |
|     | C642        | VARCHAR2(11 char) | 客戶通訊電話                    |    |
|     | C28         | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C29         | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C30         | VARCHAR2(20 char) | 交易國別說明                    |    |
|     | C643        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C644        | NUMBER(18, 0)      | 交易金額                      |    |
|     | C645        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C646        | NUMBER(18, 0)      | 目前累計未還利息                  |    |
|     | C647        | NUMBER(18, 0)      | 本期攤提利息                    |    |
|     | C648        | NUMBER(18, 0)      | 本次總計應還期內息                 |    |
|     | C649        | NUMBER(18, 0)      | 本期實收逾期息                   |    |
|     | C650        | NUMBER(18, 0)      | 本期應收違約金                   |    |
|     | C651        | NUMBER(18, 0)      | 本次雜項息_催呆金額                |    |
|     | C652        | NUMBER(4, 0)       | 本次計息天數                    |    |
|     | C653        | NUMBER(4, 0)       | 逾期日數                      |    |
|     | C32         | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C33         | VARCHAR2(20 char) | 記帳單位名稱                    |    |
|     | C34         | VARCHAR2(10 char) | 交易經辦                      |    |
|     | C35         | DATE              | 交易日期                      |    |
|     | C36         | VARCHAR2(10 char) | 覆核主管                      |    |
|     | C37         | DATE              | 覆核日期                      |    |
|     | C38         | VARCHAR2(8 char)  | 交易時間                      |    |
|     | C39         | VARCHAR2(8 char)  | 覆核時間                      |    |
|     | C40         | VARCHAR2(8 char)  | FUNCTION ID               |    |
|     | C41         | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C42         | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C43         | VARCHAR2(5 char)  | 台幣連動交易代碼                  |    |
|     | C44         | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C45         | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C62         | VARCHAR2(16 char) | 來源交易編號                    |    |
|     | C63         | VARCHAR2(2 char)  | 中長放種纇代碼                   |    |
|     | C64         | VARCHAR2(2 char)  | 中長放代款代號                   |    |
|     | C65         | VARCHAR2(1 char)  | 利率選項                      |    |
|     | C66         | NUMBER(4, 0)       | 付息期間                      |    |
|     | C67         | NUMBER(4, 0)       | 還本期間                      |    |
|     | C68         | DATE              | 下次付息日                     |    |
|     | C69         | DATE              | 下次還本日_還本迄日                |    |
|     | C70         | NUMBER(3, 0)       | 已付息次數                     |    |
|     | C71         | NUMBER(3, 0)       | 已還款次數                     |    |
|     | C72         | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C73         | NUMBER(4, 0)       | 寬限期                       |    |
|     | C74         | VARCHAR2(4 char)  | 擔保品                       |    |
|     | C75         | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C76         | VARCHAR2(1 char)  | 付款方式_外存轉付                 |    |
|     | C77         | DATE              | 記帳日                       |    |
|     | C782        | NUMBER(18, 0)      | 遠匯交割金額                    |    |
|     | C783        | VARCHAR2(16 char) | 遠匯交易編號                    |    |
|     | C784        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C785        | NUMBER(12, 6)      | 遠匯匯率                      |    |
|     | C786        | NUMBER(18, 0)      | 應付遠匯款                     |    |
|     | C787        | VARCHAR2(1 char)  | 遠匯FLAG                    |    |
|     | C788        | NUMBER(18, 0)      | 交割金額                      |    |
|     | C789        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C790        | VARCHAR2(16 char) | 原遠匯交易編號                   |    |
|     | C791        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C792        | NUMBER(18, 0)      | 預售遠匯金額兌換台幣                |    |
|     | C793        | NUMBER(4, 0)       | 還款次數                      |    |
|     | C794        | DATE              | 交易日期                      |    |
|     | C795        | DATE              | 計息起日                      |    |
|     | C796        | DATE              | 計息迄日                      |    |
|     | C797        | DATE              | 下次付息日                     |    |
|     | C798        | DATE              | 上次提存日                     |    |
|     | C799        | DATE              | 下次還本日                     |    |
|     | C800        | DATE              | 前繳_計息日                    |    |
|     | C801        | NUMBER(18, 0)      | 本次計息                      |    |
|     | C802        | NUMBER(18, 0)      | 應還本金                      |    |
|     | C803        | NUMBER(18, 0)      | 目前餘額                      |    |
|     | C80         | VARCHAR2(1 char)  | 狀態碼                       |    |
|     | C81         | VARCHAR2(1 char)  | 交易狀態碼                     |    |
|     | C82         | VARCHAR2(2 char)  | 科目                        |    |
|     | C83         | VARCHAR2(3 char)  | 活存摘要                      |    |
|     | C804        | NUMBER(18, 0)      | 應收利息                      |    |
|     | C805        | NUMBER(18, 0)      | 應收逾期息                     |    |
|     | C806        | NUMBER(18, 0)      | 實收本金                      |    |
|     | C807        | NUMBER(18, 0)      | 實收利息                      |    |
|     | C808        | NUMBER(18, 0)      | 實收金額                      |    |
|     | C809        | NUMBER(18, 0)      | 應收違約金                     |    |
|     | C810        | NUMBER(18, 0)      | 實收違約金                     |    |
|     | C811        | NUMBER(18, 0)      | 以外存支付金額                   |    |
|     | C812        | NUMBER(18, 0)      | 以外幣貸款支付                   |    |
|     | C813        | NUMBER(18, 0)      | 出口或匯入                     |    |
|     | C814        | NUMBER(18, 0)      | 存同支付                      |    |
|     | C815        | VARCHAR2(5 char)  | 存同行                       |    |
|     | C816        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C85         | VARCHAR2(1 char)  | 逾期符號                      |    |
|     | C86         | VARCHAR2(1 char)  | 還款計劃區間                    |    |
|     | C87         | DATE              | 約定繳息日                     |    |
|     | C88         | VARCHAR2(2 char)  | 風險移入國別                    |    |
|     | C89         | VARCHAR2(20 char) | 風險移入國別中文說明                |    |
|     | C90         | VARCHAR2(2 char)  | 國家額度類別                    |    |
|     | C91         | NUMBER(2, 0)       | 還款間隔                      |    |
|     | C92         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C93         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C94         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C95         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C96         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C97         | DATE              | 初貸日                       |    |
|     | C98         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C99         | NUMBER(2, 0)       | 約定還息間隔                    |    |
|     | C100        | VARCHAR2(2 char)  | 通路別                       |    |
|     | C101        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C102        | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C103        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C104        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C105        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C106        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C107        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C108        | DATE              | 上次還本日                     |    |
|     | C817        | VARCHAR2(1 char)  | 議價處理區分                    |    |
|     | C818        | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C819        | VARCHAR2(1 char)  | 買賣區分                      |    |
|     | C820        | VARCHAR2(3 char)  | 議價幣別                      |    |
|     | C821        | NUMBER(18, 0)      | 議價成交金額                    |    |
|     | C822        | VARCHAR2(1 char)  | 報價方式                      |    |
|     | C823        | VARCHAR2(3 char)  | 幣轉幣別                      |    |
|     | C824        | NUMBER(18, 0)      | 幣轉金額                      |    |
|     | C110        | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C111        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C112        | NUMBER(18, 6)      | 計息含尾差                     |    |
|     | C113        | NUMBER(18, 0)      | 交易前貸款餘額                   |    |
|     | C114        | DATE              | 利率生效日                     |    |
|     | C115        | DATE              | 下次利率變更日                   |    |
|     | C116        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C117        | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C118        | NUMBER(18, 0)      | 本次手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILE0LNE

#### 外幣短期放款交易檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C2          | VARCHAR2(16 char) | 外幣放款交易號碼                  |    |
| PK  | C3          | NUMBER(3, 0)       | EVENT NO                  |    |
|     | C4          | NUMBER(2, 0)       | 版次                        |    |
|     | C5          | VARCHAR2(8 char)  | FUNCTION ID               |    |
|     | C6          | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C7          | VARCHAR2(16 char) | 信用狀或託收號碼(來源編號)            |    |
|     | C8          | VARCHAR2(8 char)  | 存單質借編號                    |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                        |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 交易金額                      |    |
|     | C13         | NUMBER(18, 0)      | 前次貸款餘額                    |    |
|     | C14         | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C15         | NUMBER(18, 0)      | 償還本金金額(實收本金)              |    |
|     | C16         | NUMBER(18, 0)      | 原先還款總額                    |    |
|     | C17         | NUMBER(18, 0)      | 目前還款總額                    |    |
|     | C18         | NUMBER(18, 0)      | 利息金額                      |    |
|     | C19         | NUMBER(18, 0)      | 逾期息_遲延息                   |    |
|     | C20         | NUMBER(18, 0)      | 違約金                       |    |
|     | C21         | NUMBER(18, 0)      | 此次應(可)繳利息總額               |    |
|     | C22         | NUMBER(18, 0)      | 前次已還利息總額                  |    |
|     | C23         | NUMBER(18, 0)      | 本次已還利息總額                  |    |
|     | C24         | NUMBER(18, 0)      | 本次攤提利息金額                  |    |
|     | C25         | NUMBER(18, 0)      | 前次利息攤提總額                  |    |
|     | C26         | NUMBER(18, 0)      | 本次利息攤提總額                  |    |
|     | C27         | NUMBER(18, 0)      | 攤提尾差                      |    |
|     | C28         | NUMBER(18, 0)      | 本次沖轉雜項息金額                 |    |
|     | C29         | NUMBER(18, 0)      | 前次雜項息總額                   |    |
|     | C30         | NUMBER(18, 0)      | 本次雜項息總額                   |    |
|     | C31         | NUMBER(18, 0)      | 利息(臺幣)                    |    |
|     | C32         | NUMBER(18, 0)      | 逾期息(臺幣)                   |    |
|     | C33         | NUMBER(18, 0)      | 違約金(臺幣)                   |    |
|     | C601        | VARCHAR2(40 char) | 金額大寫一                     |    |
|     | C602        | VARCHAR2(40 char) | 金額大寫二                     |    |
|     | C603        | VARCHAR2(40 char) | 金額大寫三                     |    |
|     | C604        | VARCHAR2(40 char) | 金額大寫四                     |    |
|     | C35         | NUMBER(12, 6)      | 匯率上限                      |    |
|     | C36         | NUMBER(12, 6)      | 匯率下限                      |    |
|     | C37         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C38         | DATE              | 下次付息日                     |    |
|     | C39         | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C40         | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C41         | NUMBER(12, 6)      | 對美金匯率(交叉匯率)               |    |
|     | C42         | NUMBER(12, 6)      | 預購遠匯匯率                    |    |
|     | C43         | NUMBER(12, 6)      | 外匯授信利率                    |    |
|     | C44         | NUMBER(12, 6)      | 基本放款利率                    |    |
|     | C45         | NUMBER(12, 6)      | 貸款利率                      |    |
|     | C46         | NUMBER(12, 6)      | 利率差_加減碼                   |    |
|     | C47         | NUMBER(12, 6)      | 逾期利率1_新貸款利率               |    |
|     | C48         | NUMBER(12, 6)      | 逾期利率2                     |    |
|     | C49         | VARCHAR2(2 char)  | 交易代碼                      |    |
|     | C50         | VARCHAR2(20 char) | 交易別中文                     |    |
|     | C51         | VARCHAR2(1 char)  | LOAN TYPE                 |    |
|     | C52         | VARCHAR2(2 char)  | 子目                        |    |
|     | C53         | VARCHAR2(2 char)  | 性質別(國家額度性質別)              |    |
|     | C54         | VARCHAR2(2 char)  | 業務代碼                      |    |
|     | C55         | NUMBER(3, 0)       | 期限_期數                     |    |
|     | C56         | VARCHAR2(1 char)  | 期別                        |    |
|     | C57         | DATE              | 起息日                       |    |
|     | C58         | DATE              | 到期日                       |    |
|     | C59         | DATE              | 記帳日(交易日期)                 |    |
|     | C60         | DATE              | 最後交易日                     |    |
|     | C61         | DATE              | 取消交易日                     |    |
|     | C62         | DATE              | 轉呆帳起日                     |    |
|     | C63         | DATE              | 轉催收起日                     |    |
|     | C64         | DATE              | 轉期日期                      |    |
|     | C65         | DATE              | 最後利息攤提日                   |    |
|     | C66         | NUMBER(2, 0)       | 扣繳日期_指定繳息日                |    |
|     | C67         | NUMBER(4, 0)       | 計息日數                      |    |
|     | C68         | NUMBER(3, 0)       | 逾期日數                      |    |
|     | C69         | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C70         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C71         | VARCHAR2(2 char)  | 利率種類                      |    |
|     | C72         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C73         | VARCHAR2(1 char)  | 逾期息收取方式                   |    |
|     | C74         | VARCHAR2(1 char)  | 違約金收取方式                   |    |
|     | C75         | NUMBER(2, 0)       | 前次轉期次數                    |    |
|     | C76         | NUMBER(2, 0)       | 本次轉期次數                    |    |
|     | C77         | VARCHAR2(1 char)  | 定存質權設定                    |    |
|     | C78         | NUMBER(18, 0)      | 新臺幣結購外幣                   |    |
|     | C79         | NUMBER(18, 0)      | 以外匯存款支付                   |    |
|     | C80         | NUMBER(18, 0)      | 旅行支票_外幣現鈔                 |    |
|     | C81         | NUMBER(18, 0)      | 遠期外匯結購                    |    |
|     | C82         | NUMBER(18, 0)      | 以外幣貸款支付                   |    |
|     | C83         | NUMBER(18, 0)      | 出口或匯入款轉匯                  |    |
|     | C84         | NUMBER(18, 0)      | 其他                        |    |
|     | C85         | NUMBER(18, 0)      | 結購臺幣金額                    |    |
|     | C86         | NUMBER(18, 0)      | 應付遠匯款(臺幣)                 |    |
|     | C87         | NUMBER(18, 0)      | 結匯原幣金額                    |    |
|     | C88         | NUMBER(18, 0)      | 結匯臺幣金額                    |    |
|     | C89         | NUMBER(18, 0)      | 應收原幣金額                    |    |
|     | C90         | NUMBER(18, 0)      | 應收臺幣金額                    |    |
|     | C91         | NUMBER(18, 0)      | 實收原幣金額                    |    |
|     | C92         | NUMBER(18, 0)      | 實收臺幣金額                    |    |
|     | C93         | VARCHAR2(12 char) | 批覆書號碼                     |    |
|     | C94         | VARCHAR2(3 char)  | 額度類別                      |    |
|     | C95         | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C96         | VARCHAR2(16 char) | 額度外匯KEY                   |    |
|     | C97         | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C98         | VARCHAR2(16 char) | 額度恢復KEY                   |    |
|     | C99         | NUMBER(18, 2)      | 前次額度餘額                    |    |
|     | C100        | NUMBER(18, 2)      | 本次額度餘額                    |    |
|     | C101        | NUMBER(18, 2)      | 本次額度異動                    |    |
|     | C102        | DATE              | 輸入日期                      |    |
|     | C103        | VARCHAR2(8 char)  | 輸入時間                      |    |
|     | C104        | VARCHAR2(10 char) | 經辦代碼                      |    |
|     | C105        | DATE              | 放行日期                      |    |
|     | C106        | VARCHAR2(8 char)  | 放行時間                      |    |
|     | C107        | VARCHAR2(10 char) | 主管代碼                      |    |
|     | C108        | VARCHAR2(6 char)  | 申請人編號                     |    |
|     | C109        | VARCHAR2(2 char)  | 風險移入國別                    |    |
|     | C110        | VARCHAR2(20 char) | 風險移入國別說明                  |    |
|     | C605        | VARCHAR2(12 char) | 分行_科目_顧客號碼                |    |
|     | C606        | VARCHAR2(1 char)  | 檢號                        |    |
|     | C607        | VARCHAR2(3 char)  | 幣別                        |    |
|     | C112        | VARCHAR2(40 char) | 申請人名稱                     |    |
|     | C113        | VARCHAR2(11 char) | 申請人ＩＤ                     |    |
|     | C114        | VARCHAR2(40 char) | 申請人住址一                    |    |
|     | C115        | VARCHAR2(40 char) | 申請人住址二                    |    |
|     | C116        | VARCHAR2(40 char) | 申請人住址三                    |    |
|     | C117        | DATE              | 申請人出生年月日                  |    |
|     | C118        | VARCHAR2(11 char) | 申請人電話號碼                   |    |
|     | C119        | VARCHAR2(40 char) | 交易國別                      |    |
|     | C120        | VARCHAR2(2 char)  | 業務代碼(ACVO用)               |    |
|     | C121        | VARCHAR2(5 char)  | 臺幣連動交易代碼                  |    |
|     | C122        | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C123        | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C124        | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C743        | NUMBER(18, 0)      | 轉催_呆金額                    |    |
|     | C745        | NUMBER(12, 6)      | 放款聯往利率                    |    |
|     | C746        | NUMBER(12, 6)      | 聯往利差                      |    |
|     | C748        | VARCHAR2(1 char)  | 自動從活存扣繳                   |    |
|     | C749        | VARCHAR2(4 char)  | 單位                        |    |
|     | C750        | VARCHAR2(2 char)  | 科目                        |    |
|     | C751        | VARCHAR2(5 char)  | 顧客號碼                      |    |
|     | C752        | NUMBER(1, 0)       | 檢號                        |    |
|     | C753        | NUMBER(4, 0)       | 支號                        |    |
|     | C167        | VARCHAR2(3 char)  | 轉放款幣別                     |    |
|     | C168        | NUMBER(18, 0)      | 幣別轉換金額                    |    |
|     | C169        | VARCHAR2(1 char)  | 來源編號轉換                    |    |
|     | C170        | VARCHAR2(1 char)  | 交易主管放行旗標                  |    |
|     | C171        | VARCHAR2(1 char)  | 存單質借旗標                    |    |
|     | C172        | VARCHAR2(3 char)  | 還款幣別                      |    |
|     | C173        | NUMBER(12, 6)      | 換匯匯率-成本                   |    |
|     | C174        | NUMBER(12, 6)      | 換匯匯率-成交                   |    |
|     | C175        | DATE              | 存單到期日                     |    |
|     | C176        | VARCHAR2(1 char)  | 付款方式                      |    |
|     | C177        | VARCHAR2(2 char)  | 活存科目                      |    |
|     | C178        | VARCHAR2(3 char)  | 摘要別                       |    |
|     | C179        | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C180        | VARCHAR2(3 char)  | 定存單幣別                     |    |
|     | C181        | NUMBER(18, 0)      | 定存單金額                     |    |
|     | C182        | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C183        | NUMBER(3, 0)       | 固定議價天數                    |    |
|     | C184        | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C185        | NUMBER(18, 2)      | 自動變更加減碼                   |    |
|     | C186        | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C187        | VARCHAR2(1 char)  | 計息單旗標                     |    |
|     | C754        | VARCHAR2(16 char) | 遠匯交易編號                    |    |
|     | C755        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C756        | NUMBER(12, 6)      | 遠匯交割匯率                    |    |
|     | C757        | NUMBER(18, 0)      | 應付遠匯金額                    |    |
|     | C758        | VARCHAR2(1 char)  | 遠匯FLAGE                   |    |
|     | C759        | NUMBER(18, 0)      | 交割金額                      |    |
|     | C760        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C761        | VARCHAR2(16 char) | 原遠匯交易編號                   |    |
|     | C762        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C763        | NUMBER(18, 0)      | 預售遠匯兌換台幣                  |    |
|     | C189        | VARCHAR2(4 char)  | 代理行                       |    |
|     | C190        | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C191        | VARCHAR2(7 char)  | AO代號                      |    |
|     | C192        | VARCHAR2(16 char) | 展期編號                      |    |
|     | C193        | VARCHAR2(1 char)  | 移行旗標                      |    |
|     | C194        | VARCHAR2(5 char)  | 存同行代碼                     |    |
|     | C195        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C196        | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C764        | DATE              | 約定繳息日                     |    |
|     | C765        | DATE              | 上_繳息日                     |    |
|     | C766        | DATE              | 初貸日                       |    |
|     | C767        | DATE              | 下次還本日                     |    |
|     | C768        | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C769        | VARCHAR2(1 char)  | 外存轉付                      |    |
|     | C770        | VARCHAR2(2 char)  | 通路別                       |    |
|     | C771        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C772        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C773        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C774        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C775        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C776        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C777        | DATE              | 上_還本日                     |    |
|     | C778        | DATE              | 利率生效日                     |    |
|     | C779        | VARCHAR2(1 char)  | 議價處理區分                    |    |
|     | C780        | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C781        | VARCHAR2(1 char)  | 買賣區分                      |    |
|     | C782        | VARCHAR2(3 char)  | 議價幣別                      |    |
|     | C783        | NUMBER(18, 0)      | 議價成交金額                    |    |
|     | C784        | VARCHAR2(1 char)  | 報價方式                      |    |
|     | C785        | VARCHAR2(3 char)  | 幣轉幣別                      |    |
|     | C786        | NUMBER(18, 0)      | 幣轉金額                      |    |
|     | C787        | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C788        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C789        | NUMBER(2, 0)       | 繳息週期(月)                   |    |
|     | C790        | NUMBER(2, 0)       | 還本週期(月)                   |    |
|     | C791        | DATE              | 下次利率變更日                   |    |
|     | C792        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C793        | NUMBER(18, 0)      | 累計手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILE0LNM

#### 外幣短期放款主檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C2          | VARCHAR2(16 char) | 放款交易編號                    |    |
|     | C3          | NUMBER(3, 0)       | 交易檔序號                     |    |
|     | C4          | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C5          | VARCHAR2(1 char)  | 放款來源區分                    |    |
|     | C6          | VARCHAR2(30 char) | 來源編號                      |    |
|     | C7          | VARCHAR2(8 char)  | 存單質借編號                    |    |
|     | C8          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C9          | VARCHAR2(1 char)  | 戶況                        |    |
|     | C10         | VARCHAR2(3 char)  | 交易幣別                      |    |
|     | C11         | NUMBER(18, 0)      | 開戶時放款餘額                   |    |
|     | C12         | NUMBER(18, 0)      | 目前餘額                      |    |
|     | C13         | NUMBER(18, 0)      | 累計已還本金金額                  |    |
|     | C14         | NUMBER(18, 0)      | 累計已還利息額                   |    |
|     | C15         | NUMBER(18, 0)      | 累計已攤提利息額                  |    |
|     | C16         | NUMBER(18, 0)      | 攤提尾差                      |    |
|     | C17         | NUMBER(18, 0)      | 轉雜項息累計_轉催呆餘額              |    |
|     | C18         | VARCHAR2(2 char)  | 業務代碼                      |    |
|     | C19         | VARCHAR2(1 char)  | 放款種類                      |    |
|     | C20         | VARCHAR2(2 char)  | 子目                        |    |
|     | C21         | VARCHAR2(2 char)  | 性質別                       |    |
|     | C22         | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C23         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C24         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C25         | VARCHAR2(2 char)  | 利率種類                      |    |
|     | C26         | NUMBER(12, 6)      | 目前利率                      |    |
|     | C27         | NUMBER(12, 6)      | 利率差                       |    |
|     | C28         | NUMBER(3, 0)       | 期數                        |    |
|     | C29         | VARCHAR2(1 char)  | 期別                        |    |
|     | C30         | DATE              | 開戶日期                      |    |
|     | C31         | DATE              | 起息日期                      |    |
|     | C32         | DATE              | 到期日期                      |    |
|     | C33         | DATE              | 最後攤息日(含)                  |    |
|     | C34         | DATE              | 最後交易日                     |    |
|     | C35         | DATE              | 轉呆帳日期                     |    |
|     | C36         | DATE              | 轉催收日期                     |    |
|     | C37         | DATE              | 展期日期                      |    |
|     | C38         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C39         | NUMBER(2, 0)       | 扣繳日期                      |    |
|     | C40         | VARCHAR2(17 char) | 活存帳號                      |    |
|     | C41         | VARCHAR2(6 char)  | 顧客號碼                      |    |
|     | C42         | VARCHAR2(11 char) | 統一編號                      |    |
|     | C43         | VARCHAR2(12 char) | 核貸書編號                     |    |
|     | C44         | VARCHAR2(40 char) | 交易國別                      |    |
|     | C45         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C46         | VARCHAR2(3 char)  | 額度類別                      |    |
|     | C47         | NUMBER(18, 2)      | 目前額度餘額                    |    |
|     | C601        | VARCHAR2(1 char)  | 自動扣繳                      |    |
|     | C49         | NUMBER(18, 0)      | TOTAL POSTED              |    |
|     | C50         | NUMBER(18, 0)      | TOTAL PAID                |    |
|     | C51         | VARCHAR2(3 char)  | 還款幣別                      |    |
|     | C52         | NUMBER(12, 6)      | 換匯匯率-成本                   |    |
|     | C53         | NUMBER(12, 6)      | 換匯匯率-成交                   |    |
|     | C54         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C55         | VARCHAR2(1 char)  | 付款方式                      |    |
|     | C56         | VARCHAR2(3 char)  | 存單幣別                      |    |
|     | C57         | NUMBER(18, 0)      | 存單金額                      |    |
|     | C58         | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C59         | NUMBER(3, 0)       | 固定議價天數_前序號                |    |
|     | C60         | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C61         | NUMBER(18, 2)      | 自動變更加減碼                   |    |
|     | C62         | VARCHAR2(2 char)  | 交易國別代碼                    |    |
|     | C63         | NUMBER(12, 6)      | 基本放款利率                    |    |
|     | C64         | NUMBER(12, 6)      | 台幣基本放款利率                  |    |
|     | C65         | NUMBER(18, 0)      | 存單質借剩餘金額                  |    |
|     | C66         | NUMBER(12, 6)      | 逾期息利率                     |    |
|     | C67         | VARCHAR2(1 char)  | 計息通知單                     |    |
|     | C602        | NUMBER(18, 0)      | 累計積數                      |    |
|     | C603        | NUMBER(18, 0)      | 本次攤提積數                    |    |
|     | C604        | DATE              | 本次攤提起日                    |    |
|     | C605        | DATE              | 本次攤提迄日                    |    |
|     | C606        | DATE              | 前次攤提日                     |    |
|     | C607        | NUMBER(18, 0)      | 本月累計計息積數                  |    |
|     | C608        | NUMBER(3, 0)       | 攤提天數                      |    |
|     | C69         | VARCHAR2(5 char)  | 存同代碼                      |    |
|     | C70         | VARCHAR2(1 char)  | 移行旗標                      |    |
|     | C71         | NUMBER(18, 0)      | 保證轉移應收利息                  |    |
|     | C72         | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C73         | DATE              | 上約定繳息日                    |    |
|     | C74         | VARCHAR2(12 char) | OLD-CANO                  |    |
|     | C75         | VARCHAR2(2 char)  | 風險移入國別                    |    |
|     | C76         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C77         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C78         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C79         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C80         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C81         | DATE              | 下次付息日                     |    |
|     | C82         | NUMBER(3, 0)       | 自動扣款繳息次數                  |    |
|     | C83         | VARCHAR2(1 char)  | FIL-1                     |    |
|     | C84         | DATE              | 上繳息日                      |    |
|     | C85         | NUMBER(18, 0)      | 轉雜項息累計-17                 |    |
|     | C86         | NUMBER(18, 0)      | 逾期息累計                     |    |
|     | C87         | NUMBER(18, 0)      | 違約金累計                     |    |
|     | C88         | DATE              | 下次還本日                     |    |
|     | C89         | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C90         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C91         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C92         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C93         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C94         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C95         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C96         | DATE              | 上次還本日                     |    |
|     | C97         | DATE              | 利率生效日                     |    |
|     | C98         | VARCHAR2(1 char)  | FILLER                    |    |
|     | C99         | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C100        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C101        | VARCHAR2(1 char)  | 出口單據查詢檔                   |    |
|     | C102        | NUMBER(2, 0)       | 繳息週期(月)                   |    |
|     | C103        | NUMBER(2, 0)       | 還本週期(月)                   |    |
|     | C104        | DATE              | 下次利率變更日                   |    |
|     | C105        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C106        | NUMBER(18, 0)      | 累計手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILE0LSN

#### 外幣聯貸放款主檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C2          | VARCHAR2(4 char)  | 指定單位(代理行)                 |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C4          | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C5          | VARCHAR2(20 char) | 指定單位名稱                    |    |
|     | C6          | VARCHAR2(2 char)  | 業務代碼(AP Code)             |    |
|     | C7          | VARCHAR2(12 char) | 批覆書號_電腦核准編號               |    |
|     | C8          | VARCHAR2(3 char)  | 授信種類_額度細項代碼               |    |
|     | C601        | VARCHAR2(3 char)  | 放款移出(營業單位)                |    |
|     | C602        | VARCHAR2(16 char) | 放款移出(交易編號)                |    |
|     | C603        | DATE              | TempKey3(最後交易日期)          |    |
|     | C604        | NUMBER(5, 0)       | TempKey4(最後交易傳票序號)        |    |
|     | C605        | VARCHAR2(2 char)  | TempKey5(前交易別)            |    |
|     | C10         | VARCHAR2(16 char) | 存同銷帳編號                    |    |
|     | C11         | VARCHAR2(16 char) | 額度銷帳編號                    |    |
|     | C12         | VARCHAR2(16 char) | 外幣聯往編號                    |    |
| PK  | C13         | VARCHAR2(16 char) | 交易編號                      |    |
|     | C14         | VARCHAR2(1 char)  | Master File Status(戶況)    |    |
|     | C15         | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C16         | VARCHAR2(16 char) | 來源編號                      |    |
|     | C17         | VARCHAR2(1 char)  | 還本還息控制Flag                |    |
|     | C18         | VARCHAR2(2 char)  | 來源次數(到單)                  |    |
|     | C19         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C20         | NUMBER(18, 0)      | 首次撥貸金額                    |    |
|     | C21         | NUMBER(12, 6)      | 擔保成數                      |    |
|     | C22         | DATE              | 轉催收日期                     |    |
|     | C23         | DATE              | 轉呆帳日期                     |    |
|     | C24         | NUMBER(18, 0)      | 原始來源交易金額                  |    |
|     | C606        | NUMBER(18, 0)      | 目前累計已收本金總額                |    |
|     | C607        | NUMBER(18, 0)      | 目前累計已收期內息                 |    |
|     | C608        | NUMBER(18, 0)      | 目前累計已收遲延息_逾期息_催收息         |    |
|     | C609        | NUMBER(18, 0)      | 目前累計已收違約金FCY              |    |
|     | C610        | NUMBER(18, 0)      | 目前累計動撥金額                  |    |
|     | C611        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C612        | NUMBER(18, 0)      | 目前擔保放款餘額                  |    |
|     | C613        | NUMBER(18, 0)      | 目前信用放款餘額                  |    |
|     | C614        | NUMBER(18, 0)      | 目前累計未收期內息                 |    |
|     | C615        | NUMBER(18, 0)      | 目前累計未收遲延息_逾期息_催收息         |    |
|     | C616        | DATE              | 目前起息日期                    |    |
|     | C617        | DATE              | 目前到期日期                    |    |
|     | C618        | DATE              | 前次計息迄日(期內息)               |    |
|     | C619        | DATE              | 前次還本日                     |    |
|     | C620        | DATE              | 前次還息日                     |    |
|     | C621        | NUMBER(3, 0)       | 目前累計已還本月數                 |    |
|     | C622        | NUMBER(3, 0)       | 目前累計已還息月數                 |    |
|     | C623        | NUMBER(3, 0)       | 目前累計已還本次數                 |    |
|     | C624        | NUMBER(3, 0)       | 目前累計已還息次數                 |    |
|     | C625        | NUMBER(12, 6)      | 目前貸款利率                    |    |
|     | C626        | DATE              | 目前下次利率變更日                 |    |
|     | C627        | NUMBER(18, 0)      | 目前累計聯貸費用收入LCY             |    |
|     | C628        | NUMBER(18, 0)      | 目前累計其他收入(稅款補貼)LCY         |    |
|     | C629        | NUMBER(18, 0)      | 目前已攤提利息(帳上應收利息餘額)         |    |
|     | C630        | NUMBER(18, 0)      | 目前累計擔保放款利息                |    |
|     | C631        | NUMBER(18, 0)      | 目前累計信用放款利息                |    |
|     | C632        | NUMBER(18, 0)      | 目前轉催收本金餘額                 |    |
|     | C633        | NUMBER(18, 0)      | 目前轉催收利息餘額                 |    |
|     | C634        | NUMBER(18, 0)      | 目前轉催收餘額                   |    |
|     | C635        | NUMBER(18, 0)      | 前次來源交易金額(OA結購)            |    |
|     | C636        | NUMBER(18, 0)      | 目前轉呆帳金額                   |    |
|     | C637        | NUMBER(18, 2)      | 目前貸款餘額等值美金                |    |
|     | C638        | NUMBER(18, 0)      | 目前貸款餘額等值台幣                |    |
|     | C639        | DATE              | 目前下次還本日                   |    |
|     | C640        | DATE              | 目前下次還息日                   |    |
|     | C641        | NUMBER(18, 0)      | 目前累計應收利息-擔保放款             |    |
|     | C642        | NUMBER(18, 0)      | 目前累計應收利息-信用放款             |    |
|     | C643        | DATE              | 前次攤提日期                    |    |
|     | C644        | DATE              | 本次攤提日期                    |    |
|     | C645        | NUMBER(18, 0)      | 本次應攤提利息(至攤提日)             |    |
|     | C646        | NUMBER(18, 0)      | 月底攤提差額                    |    |
|     | C647        | NUMBER(18, 0)      | 本次出帳利息額                   |    |
|     | C648        | NUMBER(18, 0)      | 本次出帳利息額(短放)               |    |
|     | C649        | NUMBER(18, 0)      | 本次出帳利息額(短擔)               |    |
|     | C650        | VARCHAR2(8 char)  | 利息出帳科目(短放)                |    |
|     | C651        | VARCHAR2(8 char)  | 利息出帳科目(短擔)                |    |
|     | C652        | DATE              | LNM1副檔記錄日期                |    |
|     | C653        | DATE              | 首次撥貸日                     |    |
|     | C654        | VARCHAR2(12 char) | 目前主辦銀行SWIFT代號             |    |
|     | C655        | VARCHAR2(40 char) | 目前主辦銀行名稱                  |    |
|     | C656        | VARCHAR2(2 char)  | 目前交易國別                    |    |
|     | C657        | VARCHAR2(40 char) | 目前交易國別名稱                  |    |
|     | C658        | VARCHAR2(1 char)  | 目前貸款種類                    |    |
|     | C659        | VARCHAR2(1 char)  | 目前期別                      |    |
|     | C660        | NUMBER(4, 0)       | 目前期限_期數                   |    |
|     | C661        | VARCHAR2(2 char)  | 目前貸放性質                    |    |
|     | C662        | VARCHAR2(20 char) | 目前貸放性質說明                  |    |
|     | C663        | VARCHAR2(1 char)  | 目前計息種類                    |    |
|     | C664        | VARCHAR2(1 char)  | 目前計息區分                    |    |
|     | C665        | NUMBER(3, 0)       | 目前計息基礎天數(BASE_DAYS)       |    |
|     | C666        | VARCHAR2(1 char)  | 目前資金用途                    |    |
|     | C667        | VARCHAR2(4 char)  | 目前擔保品ID                   |    |
|     | C668        | VARCHAR2(20 char) | 目前擔保品名稱                   |    |
|     | C669        | VARCHAR2(1 char)  | 目前計息方式                    |    |
|     | C670        | VARCHAR2(1 char)  | 目前償還方式                    |    |
|     | C671        | VARCHAR2(1 char)  | 目前還本方式                    |    |
|     | C672        | VARCHAR2(1 char)  | 目前付息方式                    |    |
|     | C673        | NUMBER(3, 0)       | 目前每次還本月數                  |    |
|     | C674        | NUMBER(3, 0)       | 目前每次還息月數                  |    |
|     | C675        | NUMBER(3, 0)       | 目前本金寬限期數                  |    |
|     | C676        | NUMBER(18, 0)      | 目前每次還本金額                  |    |
|     | C677        | NUMBER(3, 0)       | 目前每月變更利率(定期機動)            |    |
|     | C678        | VARCHAR2(1 char)  | 目前營業稅別                    |    |
|     | C679        | VARCHAR2(7 char)  | 目前特殊優惠編號                  |    |
|     | C680        | NUMBER(12, 6)      | 目前貸款利率減免(牌告授信利率-貸款利率      |    |
|     | C681        | NUMBER(12, 6)      | 目前貸款成本利率                  |    |
|     | C682        | NUMBER(12, 6)      | 目前貸款利率利差(存單質借利率加碼)        |    |
|     | C683        | NUMBER(12, 6)      | 目前遲延息_逾期息_催收息利率           |    |
|     | C684        | VARCHAR2(3 char)  | 目前利率種類                    |    |
|     | C685        | DATE              | 上次存提日                     |    |
|     | C686        | NUMBER(18, 0)      | 每期應還利息                    |    |
|     | C687        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C688        | NUMBER(18, 0)      | 目前累計應還而未還利息               |    |
|     | C29         | NUMBER(12, 6)      | 對美金匯率(FCY_USD)(牌告中價_牌告中價) |    |
|     | C30         | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C31         | VARCHAR2(11 char) | 客戶統一編號                    |    |
|     | C32         | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C33         | VARCHAR2(2 char)  | 風險所在國別                    |    |
|     | C34         | VARCHAR2(2 char)  | 母國所在國別                    |    |
|     | C35         | VARCHAR2(6 char)  | 產業別                       |    |
|     | C36         | VARCHAR2(60 char) | 產業別說明                     |    |
|     | C37         | NUMBER(12, 6)      | 備抵呆帳提列率                   |    |
|     | C38         | NUMBER(18, 0)      | 備抵呆帳                      |    |
|     | C39         | NUMBER(18, 0)      | 營業稅                       |    |
|     | C40         | VARCHAR2(40 char) | 金額大寫一                     |    |
|     | C41         | VARCHAR2(40 char) | 金額大寫二                     |    |
|     | C42         | VARCHAR2(11 char) | 額度使用統編                    |    |
|     | C43         | NUMBER(12, 6)      | 國際聯貸參貸比例                  |    |
|     | C44         | NUMBER(18, 0)      | 利差分配-月底分配數                |    |
|     | C45         | NUMBER(12, 6)      | 動用額度匯率(交叉)                |    |
|     | C46         | NUMBER(12, 6)      | 動用額度匯率(對美金)               |    |
|     | C47         | VARCHAR2(1 char)  | 國內或國際聯貸                   |    |
|     | C48         | DATE              | 聯貸合約訂定日期                  |    |
|     | C49         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C50         | VARCHAR2(7 char)  | AO代碼                      |    |
|     | C51         | VARCHAR2(7 char)  | 基本資料編號                    |    |
|     | C52         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C53         | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C54         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C55         | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C56         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C57         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C58         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C59         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C60         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C61         | DATE              | 利率生效日                     |    |
|     | C62         | VARCHAR2(20 char) | 開狀行                       |    |
|     | C63         | DATE              | 開狀日                       |    |
|     | C64         | DATE              | 有效日                       |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |
| --- | --------- | ------------------- | ------------ | ---- |

### VW_ODS_D_FILE0LSP

#### 外幣聯貸放款工作暫存檔(OBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Pending File Status       |    |
|     | C2          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C3          | VARCHAR2(4 char)  | 指定單位(代理行)                 |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C5          | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C6          | VARCHAR2(20 char) | 指定單位名稱                    |    |
|     | C7          | VARCHAR2(8 char)  | 處理檔案(FCH NAME)            |    |
|     | C8          | VARCHAR2(8 char)  | 功能代碼(FUNC. ID)            |    |
|     | C9          | VARCHAR2(2 char)  | 業務代碼(AP Code)             |    |
|     | C10         | DATE              | 交易日期                      |    |
|     | C11         | NUMBER(5, 0)       | 傳票序號                      |    |
|     | C12         | VARCHAR2(2 char)  | 交易別                       |    |
|     | C13         | VARCHAR2(20 char) | 交易別說明                     |    |
|     | C14         | DATE              | 經辦維護日期                    |    |
|     | C15         | VARCHAR2(8 char)  | 經辦維護時間                    |    |
|     | C16         | DATE              | 主管覆核日期(記帳日期)              |    |
|     | C17         | VARCHAR2(8 char)  | 主管覆核時間                    |    |
|     | C18         | VARCHAR2(10 char) | 作業單位經辦                    |    |
|     | C19         | VARCHAR2(10 char) | 作業單位主管                    |    |
|     | C20         | VARCHAR2(10 char) | 最後維護經辦                    |    |
|     | C601        | NUMBER(2, 0)       | 版次(受理)                    |    |
|     | C602        | NUMBER(2, 0)       | 版次一(指定)                   |    |
|     | C603        | NUMBER(2, 0)       | 版次二(指定)                   |    |
|     | C604        | VARCHAR2(2 char)  | 外幣活存科目                    |    |
|     | C605        | VARCHAR2(13 char) | 外幣活存帳號                    |    |
|     | C606        | NUMBER(18, 0)      | 外幣活存存提金額                  |    |
|     | C607        | NUMBER(1, 0)       | 外幣活存檢號                    |    |
|     | C608        | VARCHAR2(3 char)  | 外幣活存摘要                    |    |
|     | C609        | VARCHAR2(4 char)  | 外幣活存營業單位                  |    |
|     | C610        | VARCHAR2(6 char)  | 外幣活存顧客號碼                  |    |
|     | C611        | VARCHAR2(1 char)  | 台幣存款處理區分                  |    |
|     | C612        | VARCHAR2(12 char) | 台幣存款帳號                    |    |
|     | C613        | NUMBER(18, 0)      | 連動台幣存款金額                  |    |
|     | C614        | VARCHAR2(13 char) | 台幣扣款帳號                    |    |
|     | C615        | NUMBER(18, 0)      | 連動台幣扣款金額                  |    |
|     | C616        | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C617        | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C618        | VARCHAR2(16 char) | 遠匯交易號碼                    |    |
|     | C619        | NUMBER(12, 6)      | 遠匯匯率                      |    |
|     | C620        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C621        | NUMBER(18, 0)      | 應付遠匯金額                    |    |
|     | C622        | VARCHAR2(13 char) | 遠匯交割帳號                    |    |
|     | C623        | VARCHAR2(1 char)  | 遠匯交割支號                    |    |
|     | C624        | VARCHAR2(1 char)  | 遠匯FLAG                    |    |
|     | C625        | NUMBER(18, 0)      | 各業務交割金額合計                 |    |
|     | C626        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C627        | VARCHAR2(16 char) | 原遠匯交易號碼                   |    |
|     | C628        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C629        | VARCHAR2(3 char)  | 違約金幣別(遠匯)                 |    |
|     | C630        | NUMBER(18, 0)      | 違約金(遠匯)                   |    |
|     | C631        | VARCHAR2(1 char)  | 額度處理區分                    |    |
|     | C632        | VARCHAR2(12 char) | 批覆書號_電腦核准編號               |    |
|     | C633        | VARCHAR2(3 char)  | 授信種類_額度細項代碼               |    |
|     | C634        | VARCHAR2(3 char)  | 額度交易幣別                    |    |
|     | C635        | NUMBER(18, 0)      | 額度交易金額                    |    |
|     | C636        | VARCHAR2(11 char) | 額度使用統編                    |    |
|     | C637        | NUMBER(12, 6)      | 對美金匯率(交叉匯率)               |    |
|     | C638        | VARCHAR2(2 char)  | 國家額度類別(OBU)               |    |
|     | C27         | VARCHAR2(16 char) | 存同銷帳編號                    |    |
|     | C28         | VARCHAR2(16 char) | 額度銷帳編號                    |    |
|     | C29         | VARCHAR2(16 char) | 交易編號                      |    |
|     | C30         | VARCHAR2(1 char)  | Master File Status(戶況)    |    |
|     | C31         | VARCHAR2(16 char) | 來源編號                      |    |
|     | C32         | VARCHAR2(1 char)  | 來源編號業務代碼                  |    |
|     | C33         | NUMBER(2, 0)       | 還款次數                      |    |
|     | C34         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C35         | NUMBER(18, 0)      | 首次撥貸金額                    |    |
|     | C36         | VARCHAR2(1 char)  | 還本還息控制Flag                |    |
|     | C37         | NUMBER(12, 6)      | 擔保成數                      |    |
|     | C639        | NUMBER(18, 0)      | 前次累計已收本金總額                |    |
|     | C640        | NUMBER(18, 0)      | 前次累計己收期內息                 |    |
|     | C641        | NUMBER(18, 0)      | 前次累計己收遲延息_逾期息_催收息         |    |
|     | C642        | NUMBER(18, 0)      | 前次累計己收違約金                 |    |
|     | C643        | NUMBER(18, 0)      | 前次累計動撥金額                  |    |
|     | C644        | NUMBER(18, 0)      | 前次貸款餘額                    |    |
|     | C645        | NUMBER(18, 0)      | 前次擔保放款餘額                  |    |
|     | C646        | NUMBER(18, 0)      | 前次信用放款餘額                  |    |
|     | C647        | NUMBER(18, 0)      | 前次累計未收期內息                 |    |
|     | C648        | NUMBER(18, 0)      | 前次累計未收遲延息_逾期息_催收息         |    |
|     | C649        | DATE              | 原起息日期                     |    |
|     | C650        | DATE              | 原到期日期                     |    |
|     | C651        | DATE              | 前次計息迄日(期內息)               |    |
|     | C652        | DATE              | 前次下次還本日期                  |    |
|     | C653        | DATE              | 前次下次還息日期                  |    |
|     | C654        | DATE              | 前次下次利率變更日                 |    |
|     | C655        | NUMBER(3, 0)       | 前次累計已還本月數                 |    |
|     | C656        | NUMBER(3, 0)       | 前次累計已還息月數                 |    |
|     | C657        | NUMBER(3, 0)       | 前次累計已還本次數                 |    |
|     | C658        | NUMBER(3, 0)       | 前次累計已還息次數                 |    |
|     | C659        | NUMBER(12, 6)      | 前次貸款利率                    |    |
|     | C660        | NUMBER(4, 0)       | 前次期限_期數                   |    |
|     | C661        | NUMBER(18, 0)      | 前次累計聯貸費用收入LCY             |    |
|     | C662        | NUMBER(18, 0)      | 前次累計應收利息-擔保放款利息           |    |
|     | C663        | NUMBER(18, 0)      | 前次累計應收利息-信用放款利息           |    |
|     | C664        | NUMBER(18, 0)      | 前次帳上應收利息餘額                |    |
|     | C665        | NUMBER(18, 0)      | 前次帳上應收擔保放款利息餘額            |    |
|     | C666        | NUMBER(18, 0)      | 前次帳上應收信用放款利息餘額            |    |
|     | C667        | NUMBER(18, 0)      | 前次轉催收本金餘額                 |    |
|     | C668        | NUMBER(18, 0)      | 前次轉催收利息餘額                 |    |
|     | C669        | NUMBER(18, 0)      | 前次轉催收餘額                   |    |
|     | C670        | NUMBER(18, 0)      | 原始來源交易金額                  |    |
|     | C671        | NUMBER(18, 0)      | 交易金額                      |    |
|     | C672        | NUMBER(18, 0)      | 擔保放款交易金額                  |    |
|     | C673        | NUMBER(18, 0)      | 信用放款交易金額                  |    |
|     | C674        | NUMBER(18, 0)      | 應收本金金額                    |    |
|     | C675        | NUMBER(18, 0)      | 應收期內息                     |    |
|     | C676        | NUMBER(18, 0)      | 應收遲延息_逾期息_應收催收息           |    |
|     | C677        | NUMBER(18, 0)      | 應收違約金FCY                  |    |
|     | C678        | NUMBER(18, 0)      | 實收本金金額                    |    |
|     | C679        | NUMBER(18, 0)      | 實收期內息                     |    |
|     | C680        | NUMBER(18, 0)      | 實收遲延息_逾期息_實收催收息           |    |
|     | C681        | NUMBER(18, 0)      | 實收違約金FCY                  |    |
|     | C682        | NUMBER(18, 0)      | 應收違約金LCY                  |    |
|     | C683        | NUMBER(18, 0)      | 實收違約金LCY                  |    |
|     | C684        | NUMBER(18, 0)      | 實收外幣總額(本金_利息_違約金FCY)      |    |
|     | C685        | NUMBER(18, 0)      | 利息收入                      |    |
|     | C686        | NUMBER(18, 0)      | 實收擔保放款利息                  |    |
|     | C687        | NUMBER(18, 0)      | 實收信用放款利息                  |    |
|     | C688        | NUMBER(18, 0)      | 轉催收本金                     |    |
|     | C689        | NUMBER(18, 0)      | 轉催收利息                     |    |
|     | C690        | NUMBER(18, 0)      | 轉催收金額                     |    |
|     | C691        | NUMBER(18, 0)      | 轉呆帳金額(FCY)                |    |
|     | C692        | NUMBER(18, 0)      | 轉呆帳金額(USD_TWD)            |    |
|     | C693        | NUMBER(18, 0)      | 聯貸費用收入FCY                 |    |
|     | C694        | NUMBER(18, 2)      | 聯貸費用收入USD_TWD             |    |
|     | C695        | NUMBER(18, 0)      | 本次應收利息-擔保放款利息             |    |
|     | C696        | NUMBER(18, 0)      | 本次應收利息-信用放款利息             |    |
|     | C697        | NUMBER(18, 0)      | 備抵呆帳                      |    |
|     | C698        | NUMBER(18, 2)      | 交易金額等值美金                  |    |
|     | C699        | NUMBER(18, 0)      | 交易金額等值台幣                  |    |
|     | C700        | DATE              | 轉催收日期                     |    |
|     | C701        | DATE              | 轉呆帳日期                     |    |
|     | C702        | NUMBER(18, 0)      | 本次攤提利息                    |    |
|     | C703        | NUMBER(18, 0)      | 交易後累計已收本金總額               |    |
|     | C704        | NUMBER(18, 0)      | 交易後累計己收期內息                |    |
|     | C705        | NUMBER(18, 0)      | 交易後累計己收遲延息_逾期息_催收息        |    |
|     | C706        | NUMBER(18, 0)      | 交易後累計己收違約金                |    |
|     | C707        | NUMBER(18, 0)      | 交易後累計動撥金額                 |    |
|     | C708        | NUMBER(18, 0)      | 交易後貸款餘額                   |    |
|     | C709        | NUMBER(18, 0)      | 交易後擔保放款餘額                 |    |
|     | C710        | NUMBER(18, 0)      | 交易後信用放款餘額                 |    |
|     | C711        | NUMBER(18, 0)      | 交易後累計未收期內息                |    |
|     | C712        | NUMBER(18, 0)      | 交易後累計未收遲延息_逾期息_催收息        |    |
|     | C713        | NUMBER(18, 0)      | 交易後累計未收違約金                |    |
|     | C714        | NUMBER(18, 0)      | 本次違約金減免                   |    |
|     | C715        | DATE              | 交易後起息日期                   |    |
|     | C716        | DATE              | 交易後到期日期                   |    |
|     | C717        | DATE              | (本次計息迄日)(期內息)             |    |
|     | C718        | DATE              | 前次還本日                     |    |
|     | C719        | DATE              | 前次還息日                     |    |
|     | C720        | NUMBER(3, 0)       | 交易後累計已還本月數                |    |
|     | C721        | NUMBER(3, 0)       | 交易後累計已還息月數                |    |
|     | C722        | NUMBER(3, 0)       | 交易後累計已還本次數                |    |
|     | C723        | NUMBER(3, 0)       | 交易後累計已還息次數                |    |
|     | C724        | NUMBER(12, 6)      | 交易後貸款利率                   |    |
|     | C725        | NUMBER(18, 0)      | 交易後累計聯貸費用收入LCY            |    |
|     | C726        | NUMBER(18, 0)      | 交易後累計應收利息-擔保放款利息          |    |
|     | C727        | NUMBER(18, 0)      | 交易後累計應收利息-信用放款利息          |    |
|     | C728        | DATE              | 交易後下次還本日                  |    |
|     | C729        | DATE              | 交易後下次還息日                  |    |
|     | C730        | DATE              | 交易後下次利率變更日                |    |
|     | C731        | NUMBER(18, 0)      | 交易後帳上應收利息餘額               |    |
|     | C732        | NUMBER(18, 0)      | 交易後帳上應收擔保放款利息餘額           |    |
|     | C733        | NUMBER(18, 0)      | 交易後帳上應收信用放款利息餘額           |    |
|     | C734        | NUMBER(18, 0)      | 交易後轉催收本金餘額                |    |
|     | C735        | NUMBER(18, 0)      | 交易後轉催收利息餘額                |    |
|     | C736        | NUMBER(18, 0)      | 交易後轉催收餘額                  |    |
|     | C737        | NUMBER(18, 0)      | 交易後轉呆帳餘額(FCY)             |    |
|     | C738        | NUMBER(3, 0)       | 本次還本月數                    |    |
|     | C739        | NUMBER(3, 0)       | 本次還息月數                    |    |
|     | C740        | NUMBER(3, 0)       | 本次還本次數                    |    |
|     | C741        | NUMBER(3, 0)       | 本次還息次數                    |    |
|     | C742        | DATE              | LNM1副檔記錄日期                |    |
|     | C743        | DATE              | 預約撥貸日_原始撥貸日               |    |
|     | C744        | VARCHAR2(12 char) | 主辦銀行SWIFT代號               |    |
|     | C745        | VARCHAR2(40 char) | 主辦銀行名稱                    |    |
|     | C746        | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C747        | VARCHAR2(40 char) | 交易國別名稱                    |    |
|     | C748        | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C749        | VARCHAR2(1 char)  | 期別                        |    |
|     | C750        | NUMBER(4, 0)       | 交易後期限_期數                  |    |
|     | C751        | VARCHAR2(2 char)  | 貸放性質                      |    |
|     | C752        | VARCHAR2(20 char) | 貸放性質說明                    |    |
|     | C753        | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C754        | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C755        | NUMBER(3, 0)       | 計息基礎天數(BASE DAYS)         |    |
|     | C756        | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C757        | VARCHAR2(12 char) | 存同行SWIFT代號(匯出)            |    |
|     | C758        | VARCHAR2(1 char)  | 資金用途                      |    |
|     | C759        | VARCHAR2(4 char)  | 擔保品ID                     |    |
|     | C760        | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C761        | VARCHAR2(1 char)  | 計息方式(1. 現欠餘額2. 實收本金)        |    |
|     | C762        | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C763        | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C764        | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C765        | NUMBER(3, 0)       | 每次還本月數                    |    |
|     | C766        | NUMBER(3, 0)       | 每次還息月數                    |    |
|     | C767        | NUMBER(3, 0)       | 本金寬限期數                    |    |
|     | C768        | NUMBER(18, 0)      | 每次還本金額                    |    |
|     | C769        | NUMBER(3, 0)       | 每月變更利率(定期機動)              |    |
|     | C770        | VARCHAR2(1 char)  | 營業稅別                      |    |
|     | C771        | VARCHAR2(1 char)  | 連貸費用收入幣別                  |    |
|     | C772        | NUMBER(12, 6)      | 牌告授信利率                    |    |
|     | C773        | VARCHAR2(4 char)  | 經權利率代碼                    |    |
|     | C774        | VARCHAR2(7 char)  | 特殊優惠編號                    |    |
|     | C775        | NUMBER(12, 6)      | 優惠減免限制(利率)(利率優惠)          |    |
|     | C776        | NUMBER(12, 6)      | 貸款利率減免(牌告授信利率-貸款利率)       |    |
|     | C777        | NUMBER(12, 6)      | 貸款成本利率                    |    |
|     | C778        | NUMBER(12, 6)      | 貸款利率利差                    |    |
|     | C779        | NUMBER(12, 6)      | 遲延息_逾期息_催收息利率             |    |
|     | C780        | VARCHAR2(3 char)  | 利率種類                      |    |
|     | C781        | NUMBER(3, 0)       | 期內息月數                     |    |
|     | C782        | NUMBER(4, 0)       | 期內息日數                     |    |
|     | C783        | NUMBER(4, 0)       | 遲延息_逾期息_催收息日數             |    |
|     | C784        | NUMBER(18, 0)      | 台幣結購_結售                   |    |
|     | C785        | NUMBER(18, 0)      | 預購遠匯_預售遠匯                 |    |
|     | C786        | NUMBER(18, 0)      | 外存提領(FCY)                 |    |
|     | C787        | NUMBER(18, 0)      | 其他                        |    |
|     | C788        | NUMBER(18, 0)      | 外幣聯往                      |    |
|     | C789        | NUMBER(18, 0)      | 存放銀行同業                    |    |
|     | C790        | NUMBER(18, 0)      | 應收外幣                      |    |
|     | C791        | NUMBER(18, 0)      | 實收外幣                      |    |
|     | C792        | NUMBER(18, 0)      | 應收台幣合計                    |    |
|     | C793        | NUMBER(18, 0)      | 應收臺幣結購款_應付結售臺幣款           |    |
|     | C794        | NUMBER(18, 0)      | 應收出售遠匯款_應付購入遠匯款           |    |
|     | C795        | VARCHAR2(30 char) | 其他詳述                      |    |
|     | C796        | VARCHAR2(1 char)  | 違約金繳交幣別                   |    |
|     | C797        | VARCHAR2(12 char) | 存同行SWIFT代號                |    |
|     | C798        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C45         | NUMBER(12, 6)      | 匯率上限_聯往利率                 |    |
|     | C46         | NUMBER(12, 6)      | 匯率下限_利差                   |    |
|     | C47         | NUMBER(12, 6)      | 對美金匯率(FCY_LCY)(牌告中價_牌告中價) |    |
|     | C48         | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C49         | VARCHAR2(11 char) | 客戶統一編號                    |    |
|     | C50         | VARCHAR2(40 char) | 客戶英文名稱                    |    |
|     | C51         | VARCHAR2(40 char) | 客戶中文名稱                    |    |
|     | C52         | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C53         | DATE              | 客戶出生年月日                   |    |
|     | C54         | VARCHAR2(1 char)  | 客戶                        |    |
|     | C55         | VARCHAR2(2 char)  | 風險所在國別                    |    |
|     | C56         | VARCHAR2(20 char) | 風險國別說明                    |    |
|     | C57         | VARCHAR2(2 char)  | 母國所在國別                    |    |
|     | C58         | VARCHAR2(6 char)  | 行業別(央行)                   |    |
|     | C59         | VARCHAR2(60 char) | 行業別說明(央行)                 |    |
|     | C60         | NUMBER(12, 6)      | 備抵呆帳提列率                   |    |
|     | C61         | VARCHAR2(1 char)  | 國內或國際聯貸                   |    |
|     | C62         | DATE              | 聯貸合約訂定日期                  |    |
|     | C63         | VARCHAR2(3 char)  | WK-FIELD_1                |    |
|     | C64         | VARCHAR2(3 char)  | WK-FIELD_2                |    |
|     | C65         | NUMBER(12, 6)      | 國際聯貸參貸比例                  |    |
|     | C799        | NUMBER(12, 6)      | 參貸率                       |    |
|     | C800        | NUMBER(12, 6)      | 承諾率                       |    |
|     | C801        | NUMBER(18, 0)      | 參貸費                       |    |
|     | C802        | NUMBER(18, 0)      | 承諾費                       |    |
|     | C803        | NUMBER(18, 0)      | 其他                        |    |
|     | C67         | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C68         | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C69         | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C161        | NUMBER(12, 6)      | 聯往利率                      |    |
|     | C162        | NUMBER(12, 6)      | 聯往利差                      |    |
|     | C164        | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C165        | VARCHAR2(7 char)  | AO代碼                      |    |
|     | C166        | VARCHAR2(7 char)  | 基本資料編號                    |    |
|     | C881        | DATE              | 計息起日                      |    |
|     | C882        | DATE              | 計息迄日                      |    |
|     | C883        | NUMBER(3, 0)       | 計息天數                      |    |
|     | C884        | NUMBER(18, 0)      | 攤提金額                      |    |
|     | C168        | NUMBER(2, 0)       | 展期次數                      |    |
|     | C169        | VARCHAR2(12 char) | 批覆書號(展期用)                 |    |
|     | C170        | VARCHAR2(3 char)  | 額度細項(展期用)                 |    |
|     | C171        | VARCHAR2(3 char)  | 額度幣別(展期用)                 |    |
|     | C172        | NUMBER(18, 0)      | 額度金額(展期用)                 |    |
|     | C173        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C174        | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C175        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C176        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C177        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C178        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C179        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C180        | DATE              | 利率生效日                     |    |
|     | C181        | NUMBER(18, 6)      | 計息含尾差                     |    |
|     | C182        | VARCHAR2(20 char) | 開狀行                       |    |
|     | C183        | DATE              | 開狀日                       |    |
|     | C184        | DATE              | 有效日                       |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELLM

#### 外幣中長期放款主檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 分行代號                      |    |
|     | C2          | VARCHAR2(20 char) | 分行名稱                      |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C4          | VARCHAR2(20 char) | 記帳單位名稱                    |    |
| PK  | C5          | VARCHAR2(16 char) | 放款交易編號                    |    |
|     | C6          | VARCHAR2(1 char)  | 戶況                        |    |
|     | C7          | VARCHAR2(2 char)  | 業務代碼(AP CODE)             |    |
|     | C8          | VARCHAR2(16 char) | 來源編號                      |    |
|     | C9          | VARCHAR2(2 char)  | 中長放種類代碼                   |    |
|     | C10         | VARCHAR2(2 char)  | 中長放代款代號                   |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 貸款金額                      |    |
|     | C13         | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C14         | VARCHAR2(20 char) | 種類說明                      |    |
|     | C15         | VARCHAR2(1 char)  | 資金用途別                     |    |
|     | C16         | VARCHAR2(20 char) | 資金用途說明                    |    |
|     | C17         | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C18         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C19         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C20         | DATE              | 起息日                       |    |
|     | C21         | DATE              | 到期日                       |    |
|     | C22         | VARCHAR2(1 char)  | 期數別                       |    |
|     | C23         | NUMBER(4, 0)       | 計息期數                      |    |
|     | C24         | NUMBER(4, 0)       | 計息期數                      |    |
|     | C25         | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C26         | VARCHAR2(20 char) | 交易國別說明                    |    |
|     | C27         | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C28         | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C601        | VARCHAR2(12 char) | 批覆書號                      |    |
|     | C602        | VARCHAR2(3 char)  | 額度細項                      |    |
|     | C603        | VARCHAR2(3 char)  | 批覆書幣別                     |    |
|     | C604        | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C605        | VARCHAR2(16 char) | 額度外匯key                   |    |
|     | C606        | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C607        | VARCHAR2(16 char) | 額度恢復KEY                   |    |
|     | C608        | NUMBER(18, 0)      | 前次額度餘額                    |    |
|     | C609        | NUMBER(18, 0)      | 本次額度餘額                    |    |
|     | C610        | NUMBER(18, 0)      | 本次異動金額                    |    |
|     | C611        | VARCHAR2(4 char)  | 擔保品                       |    |
|     | C612        | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C613        | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C614        | NUMBER(2, 0)       | 每月約定繳息日                   |    |
|     | C615        | VARCHAR2(12 char) | 申請人外幣帳號                   |    |
|     | C616        | VARCHAR2(1 char)  | 申請人外幣帳號檢號                 |    |
|     | C617        | VARCHAR2(3 char)  | 外匯帳號幣別                    |    |
|     | C618        | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C619        | VARCHAR2(11 char) | 客戶ID                      |    |
|     | C620        | DATE              | 客戶出生年月日                   |    |
|     | C621        | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C622        | VARCHAR2(40 char) | 客戶住址二                     |    |
|     | C623        | VARCHAR2(40 char) | 客戶住址三                     |    |
|     | C624        | VARCHAR2(11 char) | 客戶通訊電話                    |    |
|     | C625        | VARCHAR2(1 char)  | 基金保證FLAG                  |    |
|     | C626        | NUMBER(12, 6)      | 基金保證成數(擔保)                |    |
|     | C627        | NUMBER(12, 6)      | 基金保證成數(無擔保)               |    |
|     | C628        | VARCHAR2(3 char)  | 基金保證幣別                    |    |
|     | C629        | NUMBER(18, 0)      | 基金保證金額(原幣)                |    |
|     | C630        | NUMBER(18, 0)      | 基金保證-無擔保(原幣)              |    |
|     | C631        | NUMBER(18, 0)      | 基金保證-擔保(台幣)               |    |
|     | C632        | NUMBER(18, 0)      | 基金保證-無擔保(台幣)              |    |
|     | C633        | NUMBER(12, 6)      | 貸款利率                      |    |
|     | C634        | NUMBER(12, 6)      | 利率加減碼                     |    |
|     | C635        | DATE              | 最後交易日                     |    |
|     | C636        | DATE              | 上次提存_計息日                  |    |
|     | C637        | DATE              | 上次繳息日                     |    |
|     | C638        | DATE              | 上次利率變更日                   |    |
|     | C639        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C640        | NUMBER(18, 0)      | 每期應還本金                    |    |
|     | C641        | NUMBER(18, 0)      | 每期應還利息                    |    |
|     | C642        | NUMBER(18, 0)      | 目前累計已還本金                  |    |
|     | C643        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C644        | NUMBER(18, 0)      | 目前累計應還而未還利息               |    |
|     | C645        | NUMBER(18, 0)      | 目前累計應還而未還之本金              |    |
|     | C646        | NUMBER(4, 0)       | 目前已還款次數                   |    |
|     | C647        | NUMBER(4, 0)       | 目前已還息次數                   |    |
|     | C648        | NUMBER(4, 0)       | 還息寬限期數                    |    |
|     | C649        | NUMBER(4, 0)       | 還本寬限期數                    |    |
|     | C650        | DATE              | 轉催收日期                     |    |
|     | C651        | NUMBER(12, 6)      | 轉催收利率                     |    |
|     | C652        | DATE              | 轉呆帳日期                     |    |
|     | C653        | VARCHAR2(10 char) | 維護經辦                      |    |
|     | C654        | DATE              | 維護日期                      |    |
|     | C655        | VARCHAR2(8 char)  | 維護時間                      |    |
|     | C656        | VARCHAR2(10 char) | 審核主管                      |    |
|     | C657        | DATE              | 審核日期                      |    |
|     | C658        | VARCHAR2(8 char)  | 審核時間                      |    |
|     | C34         | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C35         | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C36         | VARCHAR2(20 char) | 來源區分說明                    |    |
|     | C37         | NUMBER(4, 0)       | 還息期數                      |    |
|     | C38         | NUMBER(4, 0)       | 還本期數                      |    |
|     | C39         | VARCHAR2(1 char)  | 逾期符號                      |    |
|     | C40         | NUMBER(18, 0)      | 轉催收金額                     |    |
|     | C41         | NUMBER(18, 0)      | 轉呆帳金額                     |    |
|     | C42         | VARCHAR2(1 char)  | 還款計劃區間                    |    |
|     | C43         | NUMBER(3, 0)       | EVN NO                    |    |
|     | C44         | VARCHAR2(12 char) | OLD-CANO                  |    |
|     | C45         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C46         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C47         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C48         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C49         | DATE              | 初貸日                       |    |
|     | C50         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C51         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C52         | DATE              | 下次付息日                     |    |
|     | C53         | NUMBER(2, 0)       | 約定還息間隔                    |    |
|     | C54         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C55         | DATE              | 下次還本日                     |    |
|     | C56         | VARCHAR2(2 char)  | 風險移入國別                    |    |
|     | C57         | DATE              | 上約定繳息日                    |    |
|     | C58         | VARCHAR2(2 char)  | 利率代碼                      |    |
|     | C59         | NUMBER(12, 6)      | 牌告利率                      |    |
|     | C60         | NUMBER(12, 6)      | 利率2                       |    |
|     | C61         | NUMBER(18, 0)      | 逾期息累計                     |    |
|     | C62         | NUMBER(18, 0)      | 違約金累計                     |    |
|     | C63         | NUMBER(2, 0)       | 約定還本間隔                    |    |
|     | C64         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C65         | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C66         | VARCHAR2(11 char) | 客戶統編key用                  |    |
|     | C67         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C68         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C69         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C70         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C71         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C72         | DATE              | 上次還本日                     |    |
|     | C73         | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C74         | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C75         | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C76         | VARCHAR2(1 char)  | 出口單據查詢檔                   |    |
|     | C659        | VARCHAR2(40 char) | 受款人名稱                     |    |
|     | C660        | VARCHAR2(40 char) | 受款人帳號                     |    |
|     | C661        | VARCHAR2(5 char)  | 受款行編號                     |    |
|     | C662        | VARCHAR2(11 char) | 受款行SWIFT CODE             |    |
|     | C663        | VARCHAR2(40 char) | 受款行名稱                     |    |
|     | C78         | DATE              | 下次利率變更日                   |    |
|     | C79         | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C80         | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C81         | NUMBER(18, 0)      | 累計手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELLP

#### 外幣中長期放款工作暫存檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C2          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C3          | VARCHAR2(2 char)  | 業務代碼                      |    |
| PK  | C4          | VARCHAR2(16 char) | 交易編號                      |    |
|     | C5          | VARCHAR2(20 char) | 交易說明                      |    |
| PK  | C6          | NUMBER(3, 0)       | EVENT NO                  |    |
|     | C7          | NUMBER(2, 0)       | 版次                        |    |
|     | C8          | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C9          | VARCHAR2(12 char) | 交易型態                      |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                        |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 貸款金額                      |    |
|     | C13         | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C14         | VARCHAR2(20 char) | 貸款種類說明                    |    |
|     | C15         | VARCHAR2(1 char)  | 資金用途                      |    |
|     | C16         | VARCHAR2(20 char) | 資金用途說明                    |    |
|     | C17         | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C18         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C19         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C20         | DATE              | 起息日                       |    |
|     | C21         | DATE              | 到期日                       |    |
|     | C22         | VARCHAR2(1 char)  | 期數別                       |    |
|     | C23         | NUMBER(4, 0)       | 計息期數                      |    |
|     | C601        | VARCHAR2(12 char) | 批覆書號                      |    |
|     | C602        | VARCHAR2(3 char)  | 額度細項                      |    |
|     | C603        | VARCHAR2(3 char)  | 批覆書幣別                     |    |
|     | C604        | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C605        | VARCHAR2(16 char) | 額度外匯KEY                   |    |
|     | C606        | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C607        | VARCHAR2(16 char) | 額度恢復KEY_對台往銷號             |    |
|     | C608        | NUMBER(18, 2)      | 前次額度餘額                    |    |
|     | C609        | NUMBER(18, 2)      | 本次額度餘額                    |    |
|     | C610        | NUMBER(18, 2)      | 本次額度異動                    |    |
|     | C611        | VARCHAR2(1 char)  | 基金保證FLAG                  |    |
|     | C612        | NUMBER(12, 6)      | 基金保證成數(擔保)                |    |
|     | C613        | NUMBER(12, 6)      | 基金保證成數(無擔保)               |    |
|     | C614        | VARCHAR2(3 char)  | 基金保證幣別                    |    |
|     | C615        | NUMBER(18, 0)      | 基金保證金額(擔保)原幣              |    |
|     | C616        | NUMBER(18, 0)      | 基金保證金額(無擔保)原幣             |    |
|     | C617        | NUMBER(18, 0)      | 基金保證金額(擔保)台幣              |    |
|     | C618        | NUMBER(18, 0)      | 基金保證金額(無擔保)台幣             |    |
|     | C619        | NUMBER(12, 6)      | 聯往利率                      |    |
|     | C620        | NUMBER(12, 6)      | 利差                        |    |
|     | C621        | NUMBER(12, 6)      | 買入匯率_下限                   |    |
|     | C622        | NUMBER(12, 6)      | 賣出匯率_上限                   |    |
|     | C623        | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C624        | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C625        | NUMBER(12, 6)      | 對美金匯率                     |    |
|     | C626        | NUMBER(12, 6)      | 掛牌利率                      |    |
|     | C627        | NUMBER(12, 6)      | 貸放利率                      |    |
|     | C628        | NUMBER(12, 6)      | 優惠客戶利率                    |    |
|     | C629        | NUMBER(12, 6)      | 逾期利率                      |    |
|     | C630        | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C631        | NUMBER(2, 0)       | 月約定繳息日                    |    |
|     | C632        | VARCHAR2(13 char) | 申請人台幣帳號-圈外存               |    |
|     | C633        | VARCHAR2(12 char) | 申請人外匯帳號                   |    |
|     | C634        | VARCHAR2(1 char)  | 申請人外匯帳號檢號                 |    |
|     | C635        | VARCHAR2(3 char)  | 外匯帳號幣別                    |    |
|     | C636        | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C637        | VARCHAR2(11 char) | 客戶ID                      |    |
|     | C638        | DATE              | 客戶出生年月日                   |    |
|     | C639        | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C640        | VARCHAR2(40 char) | 客戶住址二                     |    |
|     | C641        | VARCHAR2(40 char) | 客戶住址三                     |    |
|     | C642        | VARCHAR2(11 char) | 客戶通訊電話                    |    |
|     | C28         | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C29         | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C30         | VARCHAR2(20 char) | 交易國別說明                    |    |
|     | C643        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C644        | NUMBER(18, 0)      | 交易金額                      |    |
|     | C645        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C646        | NUMBER(18, 0)      | 目前累計未還利息                  |    |
|     | C647        | NUMBER(18, 0)      | 本期攤提利息                    |    |
|     | C648        | NUMBER(18, 0)      | 本次總計應還期內息                 |    |
|     | C649        | NUMBER(18, 0)      | 本期實收逾期息                   |    |
|     | C650        | NUMBER(18, 0)      | 本期應收違約金                   |    |
|     | C651        | NUMBER(18, 0)      | 本次沖轉雜項利息金額                |    |
|     | C652        | NUMBER(4, 0)       | 本次計息天數                    |    |
|     | C653        | NUMBER(4, 0)       | 逾期日數                      |    |
|     | C32         | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C33         | VARCHAR2(20 char) | 記帳單位名稱                    |    |
|     | C34         | VARCHAR2(10 char) | 交易經辦                      |    |
|     | C35         | DATE              | 交易日期                      |    |
|     | C36         | VARCHAR2(10 char) | 覆核主管                      |    |
|     | C37         | DATE              | 覆核日期                      |    |
|     | C38         | VARCHAR2(8 char)  | 交易時間                      |    |
|     | C39         | VARCHAR2(8 char)  | 覆核時間                      |    |
|     | C40         | VARCHAR2(8 char)  | FUNCTION ID               |    |
|     | C41         | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C42         | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C43         | VARCHAR2(5 char)  | 台幣連動交易碼_利息央媒用             |    |
|     | C44         | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C45         | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C62         | VARCHAR2(16 char) | 來源交易編號                    |    |
|     | C63         | VARCHAR2(2 char)  | 中長放種纇代碼                   |    |
|     | C64         | VARCHAR2(2 char)  | 中長放代款代號                   |    |
|     | C65         | VARCHAR2(2 char)  | 利率代碼                      |    |
|     | C66         | NUMBER(4, 0)       | 付息期間                      |    |
|     | C67         | NUMBER(4, 0)       | 還本期間                      |    |
|     | C68         | DATE              | 下次付息日                     |    |
|     | C69         | DATE              | 下次還本日_還款迄日                |    |
|     | C70         | NUMBER(3, 0)       | 已付息次數                     |    |
|     | C71         | NUMBER(3, 0)       | 已還款次數                     |    |
|     | C72         | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C73         | NUMBER(4, 0)       | 寬限期                       |    |
|     | C74         | VARCHAR2(4 char)  | 擔保品                       |    |
|     | C75         | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C76         | VARCHAR2(1 char)  | 付款方式_外存轉付                 |    |
|     | C77         | DATE              | 記帳日                       |    |
|     | C782        | NUMBER(18, 0)      | 遠匯交割金額                    |    |
|     | C783        | VARCHAR2(16 char) | 遠匯交易編號                    |    |
|     | C784        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C785        | NUMBER(12, 6)      | 遠匯匯率                      |    |
|     | C786        | NUMBER(18, 0)      | 應付遠匯款                     |    |
|     | C787        | VARCHAR2(1 char)  | 遠匯FLAG                    |    |
|     | C788        | NUMBER(18, 0)      | 交割金額                      |    |
|     | C789        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C790        | VARCHAR2(16 char) | 原遠匯交易編號                   |    |
|     | C791        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C792        | NUMBER(18, 0)      | 預售遠匯金額兌換台幣                |    |
|     | C793        | NUMBER(4, 0)       | 還款次數                      |    |
|     | C794        | DATE              | 交易日期                      |    |
|     | C795        | DATE              | 計息起日                      |    |
|     | C796        | DATE              | 計息迄日                      |    |
|     | C797        | DATE              | 下次付息日                     |    |
|     | C798        | DATE              | 上次提存日                     |    |
|     | C799        | DATE              | 下次還本日                     |    |
|     | C800        | DATE              | 前繳_計息日                    |    |
|     | C801        | NUMBER(18, 0)      | 本次計息                      |    |
|     | C802        | NUMBER(18, 0)      | 應還本金                      |    |
|     | C803        | NUMBER(18, 0)      | 目前餘額                      |    |
|     | C80         | VARCHAR2(1 char)  | 狀態碼                       |    |
|     | C81         | VARCHAR2(1 char)  | 交易狀態碼                     |    |
|     | C82         | VARCHAR2(2 char)  | 科目                        |    |
|     | C83         | VARCHAR2(3 char)  | 活存摘要                      |    |
|     | C804        | NUMBER(18, 0)      | 應收利息                      |    |
|     | C805        | NUMBER(18, 0)      | 應收逾期息                     |    |
|     | C806        | NUMBER(18, 0)      | 實收本金                      |    |
|     | C807        | NUMBER(18, 0)      | 實收利息                      |    |
|     | C808        | NUMBER(18, 0)      | 實收金額                      |    |
|     | C809        | NUMBER(18, 0)      | 應收違約金                     |    |
|     | C810        | NUMBER(18, 0)      | 實收違約金                     |    |
|     | C811        | NUMBER(18, 0)      | 以外存支付金額                   |    |
|     | C812        | NUMBER(18, 0)      | 以外幣貸款支付                   |    |
|     | C813        | NUMBER(18, 0)      | 出口或匯入                     |    |
|     | C814        | NUMBER(18, 0)      | 存同支付                      |    |
|     | C815        | VARCHAR2(5 char)  | 存同行                       |    |
|     | C816        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C85         | VARCHAR2(1 char)  | 逾期符號                      |    |
|     | C86         | VARCHAR2(1 char)  | 還款計劃區間                    |    |
|     | C87         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C88         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C89         | VARCHAR2(13 char) | 台幣扣款帳號                    |    |
|     | C90         | NUMBER(18, 0)      | 連動台幣扣款金額                  |    |
|     | C91         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C92         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C93         | DATE              | 初貸日                       |    |
|     | C94         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C95         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C96         | NUMBER(2, 0)       | 約定還息間隔                    |    |
|     | C97         | DATE              | 約定繳息日                     |    |
|     | C98         | NUMBER(2, 0)       | 約定還本間隔                    |    |
|     | C99         | VARCHAR2(2 char)  | 通路別                       |    |
|     | C100        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C101        | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C102        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C103        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C104        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C105        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C106        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C107        | DATE              | 上次還本日                     |    |
|     | C108        | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C817        | VARCHAR2(1 char)  | 議價處理區分                    |    |
|     | C818        | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C819        | VARCHAR2(1 char)  | 買賣區分                      |    |
|     | C820        | VARCHAR2(3 char)  | 議價幣別                      |    |
|     | C821        | NUMBER(18, 0)      | 議價成交金額                    |    |
|     | C111        | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C112        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C113        | NUMBER(18, 6)      | 計息含尾差                     |    |
|     | C830        | VARCHAR2(40 char) | 受款人名稱                     |    |
|     | C831        | VARCHAR2(40 char) | 受款人帳號                     |    |
|     | C832        | VARCHAR2(5 char)  | 受款行編號                     |    |
|     | C833        | VARCHAR2(11 char) | 受款行SWIFT CODE             |    |
|     | C834        | VARCHAR2(40 char) | 受款行名稱                     |    |
|     | C115        | NUMBER(18, 0)      | 交易前貸款餘額                   |    |
|     | C116        | DATE              | 利率生效日                     |    |
|     | C117        | DATE              | 下次利率變更日                   |    |
|     | C118        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C119        | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C120        | NUMBER(18, 0)      | 本次手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELNE

#### 外幣短期放款交易檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C2          | VARCHAR2(16 char) | 外幣放款交易號碼                  |    |
| PK  | C3          | NUMBER(3, 0)       | EVENT NO                  |    |
|     | C4          | NUMBER(2, 0)       | 版次                        |    |
|     | C5          | VARCHAR2(8 char)  | FUNCTION ID               |    |
|     | C6          | VARCHAR2(1 char)  | 來源區分                      |    |
|     | C7          | VARCHAR2(16 char) | 信用狀或託收號碼                  |    |
|     | C8          | VARCHAR2(8 char)  | 存單質借編號                    |    |
|     | C9          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C10         | VARCHAR2(1 char)  | 戶況                        |    |
|     | C11         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C12         | NUMBER(18, 0)      | 交易金額                      |    |
|     | C13         | NUMBER(18, 0)      | 前次貸款餘額                    |    |
|     | C14         | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C15         | NUMBER(18, 0)      | 償還本金金額(實收本金)              |    |
|     | C16         | NUMBER(18, 0)      | 原先還款總額                    |    |
|     | C17         | NUMBER(18, 0)      | 目前還款總額                    |    |
|     | C18         | NUMBER(18, 0)      | 利息金額                      |    |
|     | C19         | NUMBER(18, 0)      | 逾期息_遲延息                   |    |
|     | C20         | NUMBER(18, 0)      | 違約金                       |    |
|     | C21         | NUMBER(18, 0)      | 此次應(可)繳利息總額               |    |
|     | C22         | NUMBER(18, 0)      | 前次已還利息總額                  |    |
|     | C23         | NUMBER(18, 0)      | 本次已還利息總額                  |    |
|     | C24         | NUMBER(18, 0)      | 本次攤提利息金額                  |    |
|     | C25         | NUMBER(18, 0)      | 前次利息攤提總額                  |    |
|     | C26         | NUMBER(18, 0)      | 本次利息攤提總額                  |    |
|     | C27         | NUMBER(18, 0)      | 攤提尾差                      |    |
|     | C28         | NUMBER(18, 0)      | 本次沖轉雜項息金額                 |    |
|     | C29         | NUMBER(18, 0)      | 前次雜項息總額                   |    |
|     | C30         | NUMBER(18, 0)      | 本次雜項息總額                   |    |
|     | C31         | NUMBER(18, 0)      | 利息(臺幣)                    |    |
|     | C32         | NUMBER(18, 0)      | 逾期息(臺幣)                   |    |
|     | C33         | NUMBER(18, 0)      | 違約金(臺幣)                   |    |
|     | C601        | VARCHAR2(40 char) | 金額大寫一                     |    |
|     | C602        | VARCHAR2(40 char) | 金額大寫二                     |    |
|     | C603        | VARCHAR2(40 char) | 金額大寫三                     |    |
|     | C604        | VARCHAR2(40 char) | 金額大寫四                     |    |
|     | C35         | NUMBER(12, 6)      | 匯率上限                      |    |
|     | C36         | NUMBER(12, 6)      | 匯率下限                      |    |
|     | C37         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C38         | DATE              | 下次付息日                     |    |
|     | C39         | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C40         | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C41         | NUMBER(12, 6)      | 對美金匯率(交叉匯率)               |    |
|     | C42         | NUMBER(12, 6)      | 預購遠匯匯率                    |    |
|     | C43         | NUMBER(12, 6)      | 外匯授信利率                    |    |
|     | C44         | NUMBER(12, 6)      | 基本放款利率                    |    |
|     | C45         | NUMBER(12, 6)      | 貸款利率                      |    |
|     | C46         | NUMBER(12, 6)      | 利率差_加減碼                   |    |
|     | C47         | NUMBER(12, 6)      | 逾期利率1_新貸款利率               |    |
|     | C48         | NUMBER(12, 6)      | 逾期利率2                     |    |
|     | C49         | VARCHAR2(2 char)  | 交易代碼                      |    |
|     | C50         | VARCHAR2(20 char) | 交易別中文                     |    |
|     | C51         | VARCHAR2(1 char)  | LOAN_TYPE                 |    |
|     | C52         | VARCHAR2(2 char)  | 子目                        |    |
|     | C53         | VARCHAR2(2 char)  | 性質別                       |    |
|     | C54         | VARCHAR2(2 char)  | 業務代碼                      |    |
|     | C55         | NUMBER(3, 0)       | 期限_期數                     |    |
|     | C56         | VARCHAR2(1 char)  | 期別                        |    |
|     | C57         | DATE              | 起息日                       |    |
|     | C58         | DATE              | 到期日                       |    |
|     | C59         | DATE              | 記帳日(交易日期)                 |    |
|     | C60         | DATE              | 最後交易日                     |    |
|     | C61         | DATE              | 取消交易日                     |    |
|     | C62         | DATE              | 轉逾期起日                     |    |
|     | C63         | DATE              | 轉催收起日                     |    |
|     | C64         | DATE              | 轉期日期                      |    |
|     | C65         | DATE              | 最後利息攤提日                   |    |
|     | C66         | NUMBER(2, 0)       | 扣繳日期_指定繳息日                |    |
|     | C67         | NUMBER(4, 0)       | 計息日數                      |    |
|     | C68         | NUMBER(3, 0)       | 逾期日數                      |    |
|     | C69         | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C70         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C71         | VARCHAR2(2 char)  | 利率種類                      |    |
|     | C72         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C73         | VARCHAR2(1 char)  | 逾期息收取方式                   |    |
|     | C74         | VARCHAR2(1 char)  | 違約金收取方式                   |    |
|     | C75         | NUMBER(2, 0)       | 前次轉期次數                    |    |
|     | C76         | NUMBER(2, 0)       | 本次轉期次數                    |    |
|     | C77         | VARCHAR2(1 char)  | 定存質權設定                    |    |
|     | C78         | NUMBER(18, 0)      | 新臺幣結購外幣                   |    |
|     | C79         | NUMBER(18, 0)      | 以外匯存款支付                   |    |
|     | C80         | NUMBER(18, 0)      | 旅行支票_外幣現鈔                 |    |
|     | C81         | NUMBER(18, 0)      | 遠期外匯結購                    |    |
|     | C82         | NUMBER(18, 0)      | 以外幣貸款支付                   |    |
|     | C83         | NUMBER(18, 0)      | 出口或匯入款轉匯                  |    |
|     | C84         | NUMBER(18, 0)      | 其他                        |    |
|     | C85         | NUMBER(18, 0)      | 結購臺幣金額                    |    |
|     | C86         | NUMBER(18, 0)      | 應付遠匯款(臺幣)                 |    |
|     | C87         | NUMBER(18, 0)      | 結匯原幣金額                    |    |
|     | C88         | NUMBER(18, 0)      | 結匯臺幣金額                    |    |
|     | C89         | NUMBER(18, 0)      | 應收原幣金額                    |    |
|     | C90         | NUMBER(18, 0)      | 應收臺幣金額                    |    |
|     | C91         | NUMBER(18, 0)      | 實收原幣金額                    |    |
|     | C92         | NUMBER(18, 0)      | 實收臺幣金額                    |    |
|     | C93         | VARCHAR2(12 char) | 批覆書號碼                     |    |
|     | C94         | VARCHAR2(3 char)  | 額度類別                      |    |
|     | C95         | VARCHAR2(1 char)  | 貸出扣減區分                    |    |
|     | C96         | VARCHAR2(16 char) | 額度外匯KEY                   |    |
|     | C97         | NUMBER(2, 0)       | 額度外匯SEQ                   |    |
|     | C98         | VARCHAR2(16 char) | 額度恢復KEY                   |    |
|     | C99         | NUMBER(18, 2)      | 前次額度餘額                    |    |
|     | C100        | NUMBER(18, 2)      | 本次額度餘額                    |    |
|     | C101        | NUMBER(18, 2)      | 本次額度異動                    |    |
|     | C102        | DATE              | 輸入日期                      |    |
|     | C103        | VARCHAR2(8 char)  | 輸入時間                      |    |
|     | C104        | VARCHAR2(10 char) | 經辦代碼                      |    |
|     | C105        | DATE              | 放行日期                      |    |
|     | C106        | VARCHAR2(8 char)  | 放行時間                      |    |
|     | C107        | VARCHAR2(10 char) | 主管代碼                      |    |
|     | C108        | VARCHAR2(6 char)  | 申請人編號                     |    |
|     | C109        | VARCHAR2(2 char)  | 台幣科目                      |    |
|     | C110        | VARCHAR2(13 char) | 申請人台幣帳號                   |    |
|     | C605        | VARCHAR2(12 char) | 分行_科目_顧客號碼                |    |
|     | C606        | VARCHAR2(1 char)  | 檢號                        |    |
|     | C607        | VARCHAR2(3 char)  | 幣別                        |    |
|     | C112        | VARCHAR2(40 char) | 申請人名稱                     |    |
|     | C113        | VARCHAR2(11 char) | 申請人ＩＤ                     |    |
|     | C114        | VARCHAR2(40 char) | 申請人住址一                    |    |
|     | C115        | VARCHAR2(40 char) | 申請人住址二                    |    |
|     | C116        | VARCHAR2(40 char) | 申請人住址三                    |    |
|     | C117        | DATE              | 申請人出生年月日                  |    |
|     | C118        | VARCHAR2(11 char) | 申請人電話號碼                   |    |
|     | C119        | VARCHAR2(40 char) | 交易國別                      |    |
|     | C120        | VARCHAR2(2 char)  | 業務代碼(ACVO用)               |    |
|     | C121        | VARCHAR2(5 char)  | 臺幣連動交易代碼                  |    |
|     | C122        | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C123        | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C124        | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C742        | VARCHAR2(1 char)  | 非LC匯款別                    |    |
|     | C745        | NUMBER(12, 6)      | 放款聯往利率                    |    |
|     | C746        | NUMBER(12, 6)      | 聯往利差                      |    |
|     | C748        | VARCHAR2(1 char)  | 自動從活存扣繳                   |    |
|     | C749        | VARCHAR2(4 char)  | 單位                        |    |
|     | C750        | VARCHAR2(2 char)  | 科目                        |    |
|     | C751        | VARCHAR2(5 char)  | 顧客號碼                      |    |
|     | C752        | NUMBER(1, 0)       | 檢號                        |    |
|     | C753        | NUMBER(4, 0)       | 支號                        |    |
|     | C167        | VARCHAR2(3 char)  | 轉放款幣別                     |    |
|     | C168        | NUMBER(18, 0)      | 幣別轉換金額                    |    |
|     | C169        | VARCHAR2(1 char)  | 來源編號轉換                    |    |
|     | C170        | VARCHAR2(1 char)  | 交易主管放行旗標                  |    |
|     | C171        | VARCHAR2(1 char)  | 存單質借旗標                    |    |
|     | C172        | VARCHAR2(3 char)  | 還款幣別                      |    |
|     | C173        | NUMBER(12, 6)      | 換匯匯率-成本                   |    |
|     | C174        | NUMBER(12, 6)      | 換匯匯率-成交                   |    |
|     | C175        | DATE              | 存單到期日                     |    |
|     | C176        | VARCHAR2(1 char)  | 付款方式                      |    |
|     | C177        | VARCHAR2(2 char)  | 活存科目                      |    |
|     | C178        | VARCHAR2(3 char)  | 摘要別                       |    |
|     | C179        | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C180        | VARCHAR2(3 char)  | 定存單幣別                     |    |
|     | C181        | NUMBER(18, 0)      | 定存單金額                     |    |
|     | C182        | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C183        | NUMBER(3, 0)       | 固定議價天數                    |    |
|     | C184        | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C185        | NUMBER(18, 2)      | 自動變更加減碼                   |    |
|     | C186        | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C187        | VARCHAR2(1 char)  | 計息單旗標                     |    |
|     | C754        | VARCHAR2(16 char) | 遠匯交易編號                    |    |
|     | C755        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C756        | NUMBER(12, 6)      | 遠匯交割匯率                    |    |
|     | C757        | NUMBER(18, 0)      | 應付遠匯金額                    |    |
|     | C758        | VARCHAR2(1 char)  | 遠匯FLAGE                   |    |
|     | C759        | NUMBER(18, 0)      | 交割金額                      |    |
|     | C760        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C761        | VARCHAR2(16 char) | 原遠匯交易編號                   |    |
|     | C762        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C763        | NUMBER(18, 0)      | 預售遠匯兌換台幣                  |    |
|     | C189        | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C190        | VARCHAR2(7 char)  | AO代號                      |    |
|     | C191        | VARCHAR2(13 char) | 台幣扣款帳號                    |    |
|     | C192        | NUMBER(18, 0)      | 連動台幣扣款金額                  |    |
|     | C193        | VARCHAR2(16 char) | 展期編號                      |    |
|     | C194        | VARCHAR2(4 char)  | 代理行                       |    |
|     | C195        | VARCHAR2(1 char)  | 移行旗標                      |    |
|     | C764        | VARCHAR2(5 char)  | 存同行代碼                     |    |
|     | C765        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C766        | VARCHAR2(12 char) | 核帶書總號                     |    |
|     | C767        | VARCHAR2(1 char)  | 還本方式.                     |    |
|     | C768        | DATE              | 約定繳息日                     |    |
|     | C769        | DATE              | 上_繳息日                     |    |
|     | C770        | DATE              | 初貸日                       |    |
|     | C771        | DATE              | 下次還本日                     |    |
|     | C772        | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C773        | VARCHAR2(1 char)  | 外存轉付                      |    |
|     | C774        | VARCHAR2(2 char)  | 通路別                       |    |
|     | C775        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C776        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C777        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C778        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C779        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C780        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C781        | DATE              | 上_還本日                     |    |
|     | C782        | DATE              | 利率生效日                     |    |
|     | C783        | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C784        | VARCHAR2(1 char)  | 議價處理區分                    |    |
|     | C785        | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C786        | VARCHAR2(1 char)  | 買賣區分                      |    |
|     | C787        | VARCHAR2(3 char)  | 議價幣別                      |    |
|     | C788        | NUMBER(18, 0)      | 議價成交金額                    |    |
|     | C789        | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C790        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C791        | NUMBER(2, 0)       | 繳息週期(月)                   |    |
|     | C792        | NUMBER(2, 0)       | 還本週期(月)                   |    |
|     | C793        | DATE              | 下次利率變更日                   |    |
|     | C794        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C795        | NUMBER(18, 0)      | 本次手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELNM

#### 外幣短期放款主檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C2          | VARCHAR2(16 char) | 放款交易編號                    |    |
|     | C3          | NUMBER(3, 0)       | 交易檔序號                     |    |
|     | C4          | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C5          | VARCHAR2(1 char)  | 放款來源區分                    |    |
|     | C6          | VARCHAR2(20 char) | 來源編號                      |    |
|     | C7          | VARCHAR2(8 char)  | 存單質借編號                    |    |
|     | C8          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C9          | VARCHAR2(1 char)  | 戶況                        |    |
|     | C10         | VARCHAR2(3 char)  | 交易幣別                      |    |
|     | C11         | NUMBER(18, 0)      | 開戶時放款餘額                   |    |
|     | C12         | NUMBER(18, 0)      | 目前餘額                      |    |
|     | C13         | NUMBER(18, 0)      | 累計已還本金金額                  |    |
|     | C14         | NUMBER(18, 0)      | 累計已還利息額                   |    |
|     | C15         | NUMBER(18, 0)      | 累計已攤提利息額                  |    |
|     | C16         | NUMBER(18, 0)      | 攤提尾差                      |    |
|     | C17         | NUMBER(18, 0)      | 轉催呆額                      |    |
|     | C18         | VARCHAR2(2 char)  | 業務代碼                      |    |
|     | C19         | VARCHAR2(1 char)  | 放款種類                      |    |
|     | C20         | VARCHAR2(2 char)  | 子目                        |    |
|     | C21         | VARCHAR2(2 char)  | 性質別                       |    |
|     | C22         | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C23         | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C24         | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C25         | VARCHAR2(2 char)  | 利率種類                      |    |
|     | C26         | NUMBER(12, 6)      | 目前利率                      |    |
|     | C27         | NUMBER(12, 6)      | 利率差                       |    |
|     | C28         | NUMBER(3, 0)       | 期數                        |    |
|     | C29         | VARCHAR2(1 char)  | 期別                        |    |
|     | C30         | DATE              | 開戶日期                      |    |
|     | C31         | DATE              | 起息日期                      |    |
|     | C32         | DATE              | 到期日期                      |    |
|     | C33         | DATE              | 最後攤息日(含)                  |    |
|     | C34         | DATE              | 最後交易日                     |    |
|     | C35         | DATE              | 轉呆帳日期                     |    |
|     | C36         | DATE              | 轉催收日期                     |    |
|     | C37         | DATE              | 展期日期                      |    |
|     | C38         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C39         | NUMBER(2, 0)       | 扣繳日期                      |    |
|     | C40         | VARCHAR2(17 char) | 活存帳號                      |    |
|     | C41         | VARCHAR2(6 char)  | 顧客號碼                      |    |
|     | C42         | VARCHAR2(11 char) | 統一編號                      |    |
|     | C43         | VARCHAR2(12 char) | 核貸書編號                     |    |
|     | C44         | VARCHAR2(40 char) | 交易國別                      |    |
|     | C45         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C46         | VARCHAR2(3 char)  | 額度類別                      |    |
|     | C47         | NUMBER(18, 2)      | 目前額度餘額                    |    |
|     | C601        | VARCHAR2(1 char)  | 自動扣繳                      |    |
|     | C49         | NUMBER(18, 0)      | TOTAL POSTED              |    |
|     | C50         | NUMBER(18, 0)      | TOTAL PAID                |    |
|     | C51         | VARCHAR2(3 char)  | 還款幣別                      |    |
|     | C52         | NUMBER(12, 6)      | 換匯匯率-成本                   |    |
|     | C53         | NUMBER(12, 6)      | 換匯匯率-成交                   |    |
|     | C54         | NUMBER(12, 6)      | 交叉匯率                      |    |
|     | C55         | VARCHAR2(1 char)  | 付款方式                      |    |
|     | C56         | VARCHAR2(3 char)  | 存單幣別                      |    |
|     | C57         | NUMBER(18, 0)      | 存單金額                      |    |
|     | C58         | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C59         | NUMBER(3, 0)       | 固定議價天數_前序號                |    |
|     | C60         | VARCHAR2(1 char)  | 利率變更方式                    |    |
|     | C61         | NUMBER(18, 2)      | 自動變更加減碼                   |    |
|     | C62         | VARCHAR2(2 char)  | 交易國別代碼                    |    |
|     | C63         | NUMBER(12, 6)      | 基本放款利率                    |    |
|     | C64         | NUMBER(12, 6)      | 台幣基本放款利率                  |    |
|     | C65         | NUMBER(18, 0)      | 存單質借剩餘金額                  |    |
|     | C66         | NUMBER(12, 6)      | 逾期息利率                     |    |
|     | C67         | VARCHAR2(1 char)  | 計息通知單                     |    |
|     | C602        | NUMBER(18, 0)      | 累計積數                      |    |
|     | C603        | NUMBER(18, 0)      | 本次攤提積數                    |    |
|     | C604        | DATE              | 本次攤提起日                    |    |
|     | C605        | DATE              | 本次攤提迄日                    |    |
|     | C606        | DATE              | 前次攤提日                     |    |
|     | C607        | NUMBER(18, 0)      | 本月累計計息積數                  |    |
|     | C608        | NUMBER(3, 0)       | 攤提天數                      |    |
|     | C69         | VARCHAR2(5 char)  | 存同代碼                      |    |
|     | C70         | VARCHAR2(1 char)  | 移行旗標                      |    |
|     | C71         | NUMBER(18, 0)      | 保證轉移應收利息                  |    |
|     | C72         | VARCHAR2(12 char) | OLD-CANO                  |    |
|     | C73         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C74         | VARCHAR2(7 char)  | AO代號                      |    |
|     | C75         | VARCHAR2(16 char) | 展期編號                      |    |
|     | C76         | DATE              | 發票到期日                     |    |
|     | C77         | VARCHAR2(16 char) | 發票號碼                      |    |
|     | C78         | VARCHAR2(4 char)  | 代理行                       |    |
|     | C79         | VARCHAR2(13 char) | 自動扣款帳號                    |    |
|     | C80         | DATE              | 下次付息日                     |    |
|     | C81         | NUMBER(3, 0)       | 自動扣款繳息次數                  |    |
|     | C82         | VARCHAR2(1 char)  | 還本方式.                     |    |
|     | C83         | DATE              | 上約定繳息日                    |    |
|     | C84         | DATE              | 上繳息日                      |    |
|     | C85         | NUMBER(18, 0)      | 轉雜項息累計-17                 |    |
|     | C86         | NUMBER(18, 0)      | 逾期息累計                     |    |
|     | C87         | NUMBER(18, 0)      | 違約金累計                     |    |
|     | C88         | DATE              | 下次還本日                     |    |
|     | C89         | NUMBER(18, 0)      | 下次還本金額                    |    |
|     | C90         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C91         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C92         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C93         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C94         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C95         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C96         | DATE              | 上次還本日                     |    |
|     | C97         | DATE              | 利率生效日                     |    |
|     | C98         | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C99         | VARCHAR2(3 char)  | 出口單據幣別                    |    |
|     | C100        | NUMBER(18, 0)      | 出口單據金額                    |    |
|     | C101        | VARCHAR2(1 char)  | 出口單據查詢檔                   |    |
|     | C609        | VARCHAR2(40 char) | 受款人名稱                     |    |
|     | C610        | VARCHAR2(40 char) | 受款人帳號                     |    |
|     | C611        | VARCHAR2(5 char)  | 受款行編號                     |    |
|     | C612        | VARCHAR2(11 char) | 受款行SWIFT CODE             |    |
|     | C613        | VARCHAR2(40 char) | 受款行名稱                     |    |
|     | C103        | NUMBER(2, 0)       | 繳息週期(月)                   |    |
|     | C104        | NUMBER(2, 0)       | 還本週期(月)                   |    |
|     | C105        | DATE              | 下次利率變更日                   |    |
|     | C106        | NUMBER(2, 0)       | 利率變更週期(月)                 |    |
|     | C107        | NUMBER(18, 0)      | 累計手續費-折原幣                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELSM

#### 外幣聯貸放款主檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C2          | VARCHAR2(4 char)  | 指定單位(代理行)                 |    |
|     | C3          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C4          | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C5          | VARCHAR2(20 char) | 記帳單位名稱                    |    |
|     | C6          | VARCHAR2(2 char)  | 業務代碼(AP Code)             |    |
|     | C7          | VARCHAR2(12 char) | 批覆書號_電腦核准編號               |    |
|     | C8          | VARCHAR2(3 char)  | 授信種類_額度細項代碼               |    |
|     | C601        | VARCHAR2(3 char)  | 放款移出(營業單位)                |    |
|     | C602        | VARCHAR2(16 char) | 放款移出(交易編號)                |    |
|     | C603        | DATE              | TempKey3(最後交易日期)          |    |
|     | C604        | NUMBER(5, 0)       | TempKey4(最後交易傳票序號)        |    |
|     | C605        | VARCHAR2(2 char)  | TempKey5(前交易別)            |    |
|     | C10         | VARCHAR2(16 char) | 存同銷帳編號                    |    |
|     | C11         | VARCHAR2(16 char) | 額度銷帳編號                    |    |
|     | C12         | VARCHAR2(16 char) | 外幣聯往編號                    |    |
| PK  | C13         | VARCHAR2(16 char) | 交易編號                      |    |
|     | C14         | VARCHAR2(1 char)  | Master File Status(戶況)    |    |
|     | C15         | VARCHAR2(1 char)  | HOLD MARK                 |    |
|     | C16         | VARCHAR2(16 char) | 來源編號                      |    |
|     | C17         | VARCHAR2(1 char)  | 還本還息控制Flag                |    |
|     | C18         | VARCHAR2(2 char)  | 來源次數(到單)                  |    |
|     | C19         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C20         | NUMBER(18, 0)      | 首次撥貸金額                    |    |
|     | C21         | NUMBER(12, 6)      | 擔保成數                      |    |
|     | C22         | DATE              | 轉催收日期                     |    |
|     | C23         | DATE              | 轉呆帳日期                     |    |
|     | C24         | NUMBER(18, 0)      | 原始來源交易金額                  |    |
|     | C606        | NUMBER(18, 0)      | 目前累計已收本金總額                |    |
|     | C607        | NUMBER(18, 0)      | 目前累計已收期內息                 |    |
|     | C608        | NUMBER(18, 0)      | 目前累計已收遲延息_逾期息_催收息         |    |
|     | C609        | NUMBER(18, 0)      | 目前累計已收違約金FCY              |    |
|     | C610        | NUMBER(18, 0)      | 目前累計動撥金額                  |    |
|     | C611        | NUMBER(18, 0)      | 目前貸款餘額                    |    |
|     | C612        | NUMBER(18, 0)      | 目前擔保放款餘額                  |    |
|     | C613        | NUMBER(18, 0)      | 目前信用放款餘額                  |    |
|     | C614        | NUMBER(18, 0)      | 目前累計未收期內息                 |    |
|     | C615        | NUMBER(18, 0)      | 目前累計未收遲延息_逾期息_催收息         |    |
|     | C616        | DATE              | 目前起息日期                    |    |
|     | C617        | DATE              | 目前到期日期                    |    |
|     | C618        | DATE              | 前次計息迄日(期內息)               |    |
|     | C619        | DATE              | 前次還本日                     |    |
|     | C620        | DATE              | 前次還息日                     |    |
|     | C621        | NUMBER(3, 0)       | 目前累計已還本月數                 |    |
|     | C622        | NUMBER(3, 0)       | 目前累計已還息月數                 |    |
|     | C623        | NUMBER(3, 0)       | 目前累計已還本次數                 |    |
|     | C624        | NUMBER(3, 0)       | 目前累計已還息次數                 |    |
|     | C625        | NUMBER(12, 6)      | 目前貸款利率                    |    |
|     | C626        | DATE              | 目前下次利率變更日                 |    |
|     | C627        | NUMBER(18, 0)      | 目前累計聯貸費用收入LCY             |    |
|     | C628        | NUMBER(18, 0)      | 目前累計其他收入(稅款補貼)LCY         |    |
|     | C629        | NUMBER(18, 0)      | 目前已攤提利息(帳上應收利息餘額)         |    |
|     | C630        | NUMBER(18, 0)      | 目前累計擔保放款利息                |    |
|     | C631        | NUMBER(18, 0)      | 目前累計信用放款利息                |    |
|     | C632        | NUMBER(18, 0)      | 目前轉催收本金餘額                 |    |
|     | C633        | NUMBER(18, 0)      | 目前轉催收利息餘額                 |    |
|     | C634        | NUMBER(18, 0)      | 目前轉催收餘額                   |    |
|     | C635        | NUMBER(18, 0)      | 前次來源交易金額(OA結購)            |    |
|     | C636        | NUMBER(18, 0)      | 目前轉呆帳金額                   |    |
|     | C637        | NUMBER(18, 2)      | 目前貸款餘額等值美金                |    |
|     | C638        | NUMBER(18, 0)      | 目前貸款餘額等值台幣                |    |
|     | C639        | DATE              | 目前下次還本日                   |    |
|     | C640        | DATE              | 目前下次還息日                   |    |
|     | C641        | NUMBER(18, 0)      | 目前累計應收利息-擔保放款             |    |
|     | C642        | NUMBER(18, 0)      | 目前累計應收利息-信用放款             |    |
|     | C643        | DATE              | 前次攤提日期                    |    |
|     | C644        | DATE              | 本次攤提日期                    |    |
|     | C645        | NUMBER(18, 0)      | 本次應攤提利息(至攤提日)             |    |
|     | C646        | NUMBER(18, 0)      | 月底攤提差額                    |    |
|     | C647        | NUMBER(18, 0)      | 本次出帳利息額                   |    |
|     | C648        | NUMBER(18, 0)      | 本次出帳利息額(短放)               |    |
|     | C649        | NUMBER(18, 0)      | 本次出帳利息額(短擔)               |    |
|     | C650        | VARCHAR2(8 char)  | 利息出帳科目(短放)                |    |
|     | C651        | VARCHAR2(8 char)  | 利息出帳科目(短擔)                |    |
|     | C652        | DATE              | LNM1副檔記錄日期                |    |
|     | C653        | DATE              | 首次撥貸日                     |    |
|     | C654        | VARCHAR2(12 char) | 目前主辦銀行SWIFT代號             |    |
|     | C655        | VARCHAR2(40 char) | 目前主辦銀行名稱                  |    |
|     | C656        | VARCHAR2(2 char)  | 目前交易國別                    |    |
|     | C657        | VARCHAR2(40 char) | 目前交易國別名稱                  |    |
|     | C658        | VARCHAR2(1 char)  | 目前貸款種類                    |    |
|     | C659        | VARCHAR2(1 char)  | 目前期別                      |    |
|     | C660        | NUMBER(4, 0)       | 目前期限_期數                   |    |
|     | C661        | VARCHAR2(2 char)  | 目前貸放性質                    |    |
|     | C662        | VARCHAR2(20 char) | 目前貸放性質說明                  |    |
|     | C663        | VARCHAR2(1 char)  | 目前計息種類                    |    |
|     | C664        | VARCHAR2(1 char)  | 目前計息區分                    |    |
|     | C665        | NUMBER(3, 0)       | 目前計息基礎天數(BASE_DAYS)       |    |
|     | C666        | VARCHAR2(1 char)  | 目前資金用途                    |    |
|     | C667        | VARCHAR2(4 char)  | 目前擔保品ID                   |    |
|     | C668        | VARCHAR2(20 char) | 目前擔保品名稱                   |    |
|     | C669        | VARCHAR2(1 char)  | 目前計息方式                    |    |
|     | C670        | VARCHAR2(1 char)  | 目前償還方式                    |    |
|     | C671        | VARCHAR2(1 char)  | 目前還本方式                    |    |
|     | C672        | VARCHAR2(1 char)  | 目前付息方式                    |    |
|     | C673        | NUMBER(3, 0)       | 目前每次還本月數                  |    |
|     | C674        | NUMBER(3, 0)       | 目前每次還息月數                  |    |
|     | C675        | NUMBER(3, 0)       | 目前本金寬限期數                  |    |
|     | C676        | NUMBER(18, 0)      | 目前每次還本金額                  |    |
|     | C677        | NUMBER(3, 0)       | 目前每月變更利率(定期機動)            |    |
|     | C678        | VARCHAR2(1 char)  | 目前營業稅別                    |    |
|     | C679        | VARCHAR2(7 char)  | 目前特殊優惠編號                  |    |
|     | C680        | NUMBER(12, 6)      | 目前貸款利率減免(牌告授信利率-貸款利率      |    |
|     | C681        | NUMBER(12, 6)      | 目前貸款成本利率                  |    |
|     | C682        | NUMBER(12, 6)      | 目前貸款利率利差(存單質借利率加碼)        |    |
|     | C683        | NUMBER(12, 6)      | 目前遲延息_逾期息_催收息利率           |    |
|     | C684        | VARCHAR2(3 char)  | 目前利率種類                    |    |
|     | C685        | DATE              | 上次存提日                     |    |
|     | C686        | NUMBER(18, 0)      | 每期應還利息                    |    |
|     | C687        | NUMBER(18, 0)      | 目前累計已還利息                  |    |
|     | C688        | NUMBER(18, 0)      | 目前累計應還而未還利息               |    |
|     | C29         | NUMBER(12, 6)      | 對美金匯率(FCY_USD)(牌告中價_牌告中價) |    |
|     | C30         | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C31         | VARCHAR2(11 char) | 客戶統一編號                    |    |
|     | C32         | VARCHAR2(40 char) | 客戶名稱                      |    |
|     | C33         | VARCHAR2(2 char)  | 風險所在國別                    |    |
|     | C34         | VARCHAR2(2 char)  | 母國所在國別                    |    |
|     | C35         | VARCHAR2(6 char)  | 產業別                       |    |
|     | C36         | VARCHAR2(60 char) | 產業別說明                     |    |
|     | C37         | NUMBER(12, 6)      | 備抵呆帳提列率                   |    |
|     | C38         | NUMBER(18, 0)      | 備抵呆帳                      |    |
|     | C39         | NUMBER(18, 0)      | 營業稅                       |    |
|     | C40         | VARCHAR2(40 char) | 金額大寫一                     |    |
|     | C41         | VARCHAR2(40 char) | 金額大寫二                     |    |
|     | C42         | VARCHAR2(11 char) | 額度使用統編                    |    |
|     | C43         | NUMBER(12, 6)      | 國際聯貸參貸比例                  |    |
|     | C44         | NUMBER(18, 0)      | 利差分配-月底分配數                |    |
|     | C45         | NUMBER(12, 6)      | 動用額度匯率(交叉)                |    |
|     | C46         | NUMBER(12, 6)      | 動用額度匯率(對美金)               |    |
|     | C47         | VARCHAR2(1 char)  | 國內或國際聯貸                   |    |
|     | C48         | DATE              | 聯貸合約訂定日期                  |    |
|     | C49         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C50         | VARCHAR2(7 char)  | AO代碼                      |    |
|     | C51         | VARCHAR2(7 char)  | 基本資料編號                    |    |
|     | C52         | NUMBER(2, 0)       | 展期次數                      |    |
|     | C53         | VARCHAR2(3 char)  | 額度幣別                      |    |
|     | C54         | NUMBER(3, 0)       | 利率天期                      |    |
|     | C55         | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C56         | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C57         | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C58         | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C59         | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C60         | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C61         | DATE              | 利率生效日                     |    |
|     | C62         | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C63         | VARCHAR2(20 char) | 開狀行                       |    |
|     | C64         | DATE              | 開狀日                       |    |
|     | C65         | DATE              | 有效日                       |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILELSP

#### 外幣聯貸放款工作暫存檔(DBU)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | VARCHAR2(1 char)  | Pending File Status       |    |
| PK  | C2          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C3          | VARCHAR2(4 char)  | 指定單位(代理行)                 |    |
|     | C4          | VARCHAR2(4 char)  | 記帳單位                      |    |
|     | C5          | VARCHAR2(20 char) | 營業單位名稱                    |    |
|     | C6          | VARCHAR2(20 char) | 記帳單位名稱                    |    |
|     | C7          | VARCHAR2(8 char)  | 處理檔案(FCH NAME)            |    |
|     | C8          | VARCHAR2(8 char)  | 功能代碼(FUNC. ID)            |    |
|     | C9          | VARCHAR2(2 char)  | 業務代碼(AP Code)             |    |
| PK  | C10         | DATE              | 交易日期                      |    |
| PK  | C11         | NUMBER(5, 0)       | 傳票序號                      |    |
|     | C12         | VARCHAR2(2 char)  | 交易別                       |    |
|     | C13         | VARCHAR2(20 char) | 交易別說明                     |    |
|     | C14         | DATE              | 經辦維護日期                    |    |
|     | C15         | VARCHAR2(8 char)  | 經辦維護時間                    |    |
|     | C16         | DATE              | 主管覆核日期(記帳日期)              |    |
|     | C17         | VARCHAR2(8 char)  | 主管覆核時間                    |    |
|     | C18         | VARCHAR2(10 char) | 作業單位經辦                    |    |
|     | C19         | VARCHAR2(10 char) | 作業單位主管                    |    |
|     | C20         | VARCHAR2(10 char) | 最後維護經辦                    |    |
|     | C601        | NUMBER(2, 0)       | 版次(受理)                    |    |
|     | C602        | NUMBER(2, 0)       | 版次一(指定)                   |    |
|     | C603        | NUMBER(2, 0)       | 版次二(指定)                   |    |
|     | C604        | VARCHAR2(2 char)  | 外幣活存科目                    |    |
|     | C605        | VARCHAR2(13 char) | 外幣活存帳號                    |    |
|     | C606        | NUMBER(18, 0)      | 外幣活存存提金額                  |    |
|     | C607        | NUMBER(1, 0)       | 外幣活存檢號                    |    |
|     | C608        | VARCHAR2(3 char)  | 外幣活存摘要                    |    |
|     | C609        | VARCHAR2(4 char)  | 外幣活存營業單位                  |    |
|     | C610        | VARCHAR2(6 char)  | 外幣活存顧客號碼                  |    |
|     | C611        | VARCHAR2(1 char)  | 台幣存款處理區分                  |    |
|     | C612        | VARCHAR2(12 char) | 台幣存款帳號                    |    |
|     | C613        | NUMBER(18, 0)      | 連動台幣存款金額                  |    |
|     | C614        | VARCHAR2(13 char) | 台幣扣款帳號                    |    |
|     | C615        | NUMBER(18, 0)      | 連動台幣扣款金額                  |    |
|     | C616        | NUMBER(12, 6)      | 成本匯率                      |    |
|     | C617        | NUMBER(12, 6)      | 成交匯率                      |    |
|     | C618        | VARCHAR2(16 char) | 遠匯交易號碼                    |    |
|     | C619        | NUMBER(12, 6)      | 遠匯匯率                      |    |
|     | C620        | VARCHAR2(3 char)  | 遠匯交割幣別                    |    |
|     | C621        | NUMBER(18, 0)      | 應付遠匯金額                    |    |
|     | C622        | VARCHAR2(13 char) | 遠匯交割帳號                    |    |
|     | C623        | VARCHAR2(1 char)  | 遠匯交割支號                    |    |
|     | C624        | VARCHAR2(1 char)  | 遠匯FLAG                    |    |
|     | C625        | NUMBER(18, 0)      | 各業務交割金額合計                 |    |
|     | C626        | VARCHAR2(4 char)  | 原營業單位                     |    |
|     | C627        | VARCHAR2(16 char) | 原遠匯交易號碼                   |    |
|     | C628        | NUMBER(18, 0)      | 原交割金額                     |    |
|     | C629        | VARCHAR2(3 char)  | 違約金幣別(遠匯)                 |    |
|     | C630        | NUMBER(18, 0)      | 違約金(遠匯)                   |    |
|     | C631        | VARCHAR2(1 char)  | 額度處理區分                    |    |
|     | C632        | VARCHAR2(12 char) | 批覆書號_電腦核准編號               |    |
|     | C633        | VARCHAR2(3 char)  | 授信種類_額度細項代碼               |    |
|     | C634        | VARCHAR2(3 char)  | 額度交易幣別                    |    |
|     | C635        | NUMBER(18, 0)      | 額度交易金額                    |    |
|     | C636        | VARCHAR2(11 char) | 額度使用統編                    |    |
|     | C637        | NUMBER(12, 6)      | 對美金匯率(交叉匯率)               |    |
|     | C638        | VARCHAR2(2 char)  | 國家額度類別(OBU)               |    |
|     | C27         | VARCHAR2(16 char) | 存同銷帳編號                    |    |
|     | C28         | VARCHAR2(16 char) | 額度銷帳編號_對台往銷號              |    |
| PK  | C29         | VARCHAR2(16 char) | 交易編號                      |    |
|     | C30         | VARCHAR2(1 char)  | Master File Status(戶況)    |    |
|     | C31         | VARCHAR2(16 char) | 來源編號                      |    |
|     | C32         | VARCHAR2(1 char)  | 來源編號業務代碼                  |    |
|     | C33         | NUMBER(2, 0)       | 還款次數                      |    |
|     | C34         | VARCHAR2(3 char)  | 貸款幣別                      |    |
|     | C35         | NUMBER(18, 0)      | 首次撥貸金額                    |    |
|     | C36         | VARCHAR2(1 char)  | 還本還息控制Flag                |    |
|     | C37         | NUMBER(12, 6)      | 擔保成數                      |    |
|     | C639        | NUMBER(18, 0)      | 前次累計已收本金總額                |    |
|     | C640        | NUMBER(18, 0)      | 前次累計己收期內息                 |    |
|     | C641        | NUMBER(18, 0)      | 前次累計己收遲延息_逾期息_催收息         |    |
|     | C642        | NUMBER(18, 0)      | 前次累計己收違約金                 |    |
|     | C643        | NUMBER(18, 0)      | 前次累計動撥金額                  |    |
|     | C644        | NUMBER(18, 0)      | 前次貸款餘額                    |    |
|     | C645        | NUMBER(18, 0)      | 前次擔保放款餘額                  |    |
|     | C646        | NUMBER(18, 0)      | 前次信用放款餘額                  |    |
|     | C647        | NUMBER(18, 0)      | 前次累計未收期內息                 |    |
|     | C648        | NUMBER(18, 0)      | 前次累計未收遲延息_逾期息_催收息         |    |
|     | C649        | DATE              | 原起息日期                     |    |
|     | C650        | DATE              | 原到期日期                     |    |
|     | C651        | DATE              | 前次計息迄日(期內息)               |    |
|     | C652        | DATE              | 前次下次還本日期                  |    |
|     | C653        | DATE              | 前次下次還息日期                  |    |
|     | C654        | DATE              | 前次下次利率變更日                 |    |
|     | C655        | NUMBER(3, 0)       | 前次累計已還本月數                 |    |
|     | C656        | NUMBER(3, 0)       | 前次累計已還息月數                 |    |
|     | C657        | NUMBER(3, 0)       | 前次累計已還本次數                 |    |
|     | C658        | NUMBER(3, 0)       | 前次累計已還息次數                 |    |
|     | C659        | NUMBER(12, 6)      | 前次貸款利率                    |    |
|     | C660        | NUMBER(4, 0)       | 前次期限_期數                   |    |
|     | C661        | NUMBER(18, 0)      | 前次累計聯貸費用收入LCY             |    |
|     | C662        | NUMBER(18, 0)      | 前次累計應收利息-擔保放款利息           |    |
|     | C663        | NUMBER(18, 0)      | 前次累計應收利息-信用放款利息           |    |
|     | C664        | NUMBER(18, 0)      | 前次帳上應收利息餘額                |    |
|     | C665        | NUMBER(18, 0)      | 前次帳上應收擔保放款利息餘額            |    |
|     | C666        | NUMBER(18, 0)      | 前次帳上應收信用放款利息餘額            |    |
|     | C667        | NUMBER(18, 0)      | 前次轉催收本金餘額                 |    |
|     | C668        | NUMBER(18, 0)      | 前次轉催收利息餘額                 |    |
|     | C669        | NUMBER(18, 0)      | 前次轉催收餘額                   |    |
|     | C670        | NUMBER(18, 0)      | 原始來源交易金額                  |    |
|     | C671        | NUMBER(18, 0)      | 交易金額                      |    |
|     | C672        | NUMBER(18, 0)      | 擔保放款交易金額                  |    |
|     | C673        | NUMBER(18, 0)      | 信用放款交易金額                  |    |
|     | C674        | NUMBER(18, 0)      | 應收本金金額                    |    |
|     | C675        | NUMBER(18, 0)      | 應收期內息                     |    |
|     | C676        | NUMBER(18, 0)      | 應收遲延息_逾期息_應收催收息           |    |
|     | C677        | NUMBER(18, 0)      | 應收違約金FCY                  |    |
|     | C678        | NUMBER(18, 0)      | 實收本金金額                    |    |
|     | C679        | NUMBER(18, 0)      | 實收期內息                     |    |
|     | C680        | NUMBER(18, 0)      | 實收遲延息_逾期息_實收催收息           |    |
|     | C681        | NUMBER(18, 0)      | 實收違約金FCY                  |    |
|     | C682        | NUMBER(18, 0)      | 應收違約金LCY                  |    |
|     | C683        | NUMBER(18, 0)      | 實收違約金LCY                  |    |
|     | C684        | NUMBER(18, 0)      | 實收外幣總額(本金_利息_違約金FCY)      |    |
|     | C685        | NUMBER(18, 0)      | 利息收入                      |    |
|     | C686        | NUMBER(18, 0)      | 實收擔保放款利息                  |    |
|     | C687        | NUMBER(18, 0)      | 實收信用放款利息                  |    |
|     | C688        | NUMBER(18, 0)      | 轉催收本金                     |    |
|     | C689        | NUMBER(18, 0)      | 轉催收利息                     |    |
|     | C690        | NUMBER(18, 0)      | 轉催收金額                     |    |
|     | C691        | NUMBER(18, 0)      | 轉呆帳金額(FCY)                |    |
|     | C692        | NUMBER(18, 0)      | 轉呆帳金額(USD_TWD)            |    |
|     | C693        | NUMBER(18, 0)      | 聯貸費用收入FCY                 |    |
|     | C694        | NUMBER(18, 0)      | 聯貸費用收入USD_TWD             |    |
|     | C695        | NUMBER(18, 0)      | 本次應收利息-擔保放款利息             |    |
|     | C696        | NUMBER(18, 0)      | 本次應收利息-信用放款利息             |    |
|     | C697        | NUMBER(18, 0)      | 備抵呆帳                      |    |
|     | C698        | NUMBER(18, 2)      | 交易金額等值美金                  |    |
|     | C699        | NUMBER(18, 0)      | 交易金額等值台幣                  |    |
|     | C700        | DATE              | 轉催收日期                     |    |
|     | C701        | DATE              | 轉呆帳日期                     |    |
|     | C702        | NUMBER(18, 0)      | 本次攤提利息                    |    |
|     | C703        | NUMBER(18, 0)      | 交易後累計已收本金總額               |    |
|     | C704        | NUMBER(18, 0)      | 交易後累計己收期內息                |    |
|     | C705        | NUMBER(18, 0)      | 交易後累計己收遲延息_逾期息_催收息        |    |
|     | C706        | NUMBER(18, 0)      | 交易後累計己收違約金                |    |
|     | C707        | NUMBER(18, 0)      | 交易後累計動撥金額                 |    |
|     | C708        | NUMBER(18, 0)      | 交易後貸款餘額                   |    |
|     | C709        | NUMBER(18, 0)      | 交易後擔保放款餘額                 |    |
|     | C710        | NUMBER(18, 0)      | 交易後信用放款餘額                 |    |
|     | C711        | NUMBER(18, 0)      | 交易後累計未收期內息                |    |
|     | C712        | NUMBER(18, 0)      | 交易後累計未收遲延息_逾期息_催收息        |    |
|     | C713        | NUMBER(18, 0)      | 交易後累計未收違約金                |    |
|     | C714        | NUMBER(18, 0)      | 本次違約金減免                   |    |
|     | C715        | DATE              | 交易後起息日期                   |    |
|     | C716        | DATE              | 交易後到期日期                   |    |
|     | C717        | DATE              | (本次計息迄日)(期內息)             |    |
|     | C718        | DATE              | 前次還本日                     |    |
|     | C719        | DATE              | 前次還息日                     |    |
|     | C720        | NUMBER(3, 0)       | 交易後累計已還本月數                |    |
|     | C721        | NUMBER(3, 0)       | 交易後累計已還息月數                |    |
|     | C722        | NUMBER(3, 0)       | 交易後累計已還本次數                |    |
|     | C723        | NUMBER(3, 0)       | 交易後累計已還息次數                |    |
|     | C724        | NUMBER(12, 6)      | 交易後貸款利率                   |    |
|     | C725        | NUMBER(18, 0)      | 交易後累計聯貸費用收入LCY            |    |
|     | C726        | NUMBER(18, 0)      | 交易後累計應收利息-擔保放款利息          |    |
|     | C727        | NUMBER(18, 0)      | 交易後累計應收利息-信用放款利息          |    |
|     | C728        | DATE              | 交易後下次還本日                  |    |
|     | C729        | DATE              | 交易後下次還息日                  |    |
|     | C730        | DATE              | 交易後下次利率變更日                |    |
|     | C731        | NUMBER(18, 0)      | 交易後帳上應收利息餘額               |    |
|     | C732        | NUMBER(18, 0)      | 交易後帳上應收擔保放款利息餘額           |    |
|     | C733        | NUMBER(18, 0)      | 交易後帳上應收信用放款利息餘額           |    |
|     | C734        | NUMBER(18, 0)      | 交易後轉催收本金餘額                |    |
|     | C735        | NUMBER(18, 0)      | 交易後轉催收利息餘額                |    |
|     | C736        | NUMBER(18, 0)      | 交易後轉催收餘額                  |    |
|     | C737        | NUMBER(18, 0)      | 交易後轉呆帳餘額(FCY)             |    |
|     | C738        | NUMBER(3, 0)       | 本次還本月數                    |    |
|     | C739        | NUMBER(3, 0)       | 本次還息月數                    |    |
|     | C740        | NUMBER(3, 0)       | 本次還本次數                    |    |
|     | C741        | NUMBER(3, 0)       | 本次還息次數                    |    |
|     | C742        | DATE              | LNM1副檔記錄日期                |    |
|     | C743        | DATE              | 預約撥貸日_原始撥貸日               |    |
|     | C744        | VARCHAR2(12 char) | 主辦銀行SWIFT代號               |    |
|     | C745        | VARCHAR2(40 char) | 主辦銀行名稱                    |    |
|     | C746        | VARCHAR2(2 char)  | 交易國別                      |    |
|     | C747        | VARCHAR2(40 char) | 交易國別名稱                    |    |
|     | C748        | VARCHAR2(1 char)  | 貸款種類                      |    |
|     | C749        | VARCHAR2(1 char)  | 期別(1. 日2. 月)                |    |
|     | C750        | NUMBER(4, 0)       | 交易後期限_期數                  |    |
|     | C751        | VARCHAR2(2 char)  | 貸放性質                      |    |
|     | C752        | VARCHAR2(20 char) | 貸放性質說明                    |    |
|     | C753        | VARCHAR2(1 char)  | 計息種類                      |    |
|     | C754        | VARCHAR2(1 char)  | 計息區分                      |    |
|     | C755        | NUMBER(3, 0)       | 計息基礎天數(BASE DAYS)         |    |
|     | C756        | VARCHAR2(1 char)  | 資金流向                      |    |
|     | C757        | VARCHAR2(12 char) | 存同行SWIFT代號(匯出)            |    |
|     | C758        | VARCHAR2(1 char)  | 資金用途                      |    |
|     | C759        | VARCHAR2(4 char)  | 擔保品ID                     |    |
|     | C760        | VARCHAR2(20 char) | 擔保品名稱                     |    |
|     | C761        | VARCHAR2(1 char)  | 計息方式                      |    |
|     | C762        | VARCHAR2(1 char)  | 償還方式                      |    |
|     | C763        | VARCHAR2(1 char)  | 還本方式                      |    |
|     | C764        | VARCHAR2(1 char)  | 付息方式                      |    |
|     | C765        | NUMBER(3, 0)       | 每次還本月數                    |    |
|     | C766        | NUMBER(3, 0)       | 每次還息月數                    |    |
|     | C767        | NUMBER(3, 0)       | 本金寬限期數                    |    |
|     | C768        | NUMBER(18, 0)      | 每次還本金額                    |    |
|     | C769        | NUMBER(3, 0)       | 每月變更利率(定期機動)              |    |
|     | C770        | VARCHAR2(1 char)  | 營業稅別                      |    |
|     | C771        | VARCHAR2(1 char)  | 連貸費用收入幣別                  |    |
|     | C772        | NUMBER(12, 6)      | 牌告授信利率                    |    |
|     | C773        | VARCHAR2(4 char)  | 經權利率代碼                    |    |
|     | C774        | VARCHAR2(7 char)  | 特殊優惠編號                    |    |
|     | C775        | NUMBER(12, 6)      | 優惠減免限制(利率)(利率優惠)          |    |
|     | C776        | NUMBER(12, 6)      | 貸款利率減免(牌告授信利率-貸款利率)       |    |
|     | C777        | NUMBER(12, 6)      | 貸款成本利率                    |    |
|     | C778        | NUMBER(12, 6)      | 貸款利率利差                    |    |
|     | C779        | NUMBER(12, 6)      | 遲延息_逾期息_催收息利率             |    |
|     | C780        | VARCHAR2(3 char)  | 利率種類                      |    |
|     | C781        | NUMBER(3, 0)       | 期內息月數                     |    |
|     | C782        | NUMBER(4, 0)       | 期內息日數                     |    |
|     | C783        | NUMBER(4, 0)       | 遲延息_逾期息_催收息日數             |    |
|     | C784        | NUMBER(18, 0)      | 台幣結購_結售                   |    |
|     | C785        | NUMBER(18, 0)      | 預購遠匯_預售遠匯                 |    |
|     | C786        | NUMBER(18, 0)      | 外存提領(FCY)                 |    |
|     | C787        | NUMBER(18, 0)      | 其他                        |    |
|     | C788        | NUMBER(18, 0)      | 外幣聯往                      |    |
|     | C789        | NUMBER(18, 0)      | 存放銀行同業                    |    |
|     | C790        | NUMBER(18, 0)      | 應收外幣                      |    |
|     | C791        | NUMBER(18, 0)      | 實收外幣結購                    |    |
|     | C792        | NUMBER(18, 0)      | 應收台幣合計                    |    |
|     | C793        | NUMBER(18, 0)      | 應收臺幣結購款_應付結售臺幣款           |    |
|     | C794        | NUMBER(18, 0)      | 應收出售遠匯款_應付購入遠匯款           |    |
|     | C795        | VARCHAR2(30 char) | 其他詳述                      |    |
|     | C796        | VARCHAR2(1 char)  | 違約金繳交幣別                   |    |
|     | C797        | VARCHAR2(12 char) | 存同行SWIFT代號                |    |
|     | C798        | VARCHAR2(40 char) | 存同行名稱                     |    |
|     | C45         | NUMBER(12, 6)      | 匯率上限                      |    |
|     | C46         | NUMBER(12, 6)      | 匯率下限                      |    |
|     | C47         | NUMBER(12, 6)      | 對美金匯率(FCY_LCY)(牌告中價_牌告中價) |    |
|     | C48         | VARCHAR2(6 char)  | 客戶編號                      |    |
|     | C49         | VARCHAR2(11 char) | 客戶統一編號                    |    |
|     | C50         | VARCHAR2(40 char) | 客戶英文名稱                    |    |
|     | C51         | VARCHAR2(40 char) | 客戶中文名稱                    |    |
|     | C52         | VARCHAR2(40 char) | 客戶住址一                     |    |
|     | C53         | DATE              | 客戶出生年月日                   |    |
|     | C54         | VARCHAR2(1 char)  | 客戶(0. 境內1. 境外)              |    |
|     | C55         | VARCHAR2(2 char)  | 風險所在國別                    |    |
|     | C56         | VARCHAR2(20 char) | 風險國別說明                    |    |
|     | C57         | VARCHAR2(2 char)  | 母國所在國別                    |    |
|     | C58         | VARCHAR2(6 char)  | 行業別(央行)                   |    |
|     | C59         | VARCHAR2(60 char) | 行業別說明(央行)                 |    |
|     | C60         | NUMBER(12, 6)      | 備抵呆帳提列率                   |    |
|     | C61         | VARCHAR2(1 char)  | 國內或國際聯貸                   |    |
|     | C62         | DATE              | 聯貸合約訂定日期                  |    |
|     | C63         | VARCHAR2(3 char)  | WK-FIELD_1                |    |
|     | C64         | VARCHAR2(3 char)  | WK-FIELD_2                |    |
|     | C65         | NUMBER(12, 6)      | 國際聯貸參貸比例                  |    |
|     | C799        | NUMBER(12, 6)      | 參貸率                       |    |
|     | C800        | NUMBER(12, 6)      | 承諾率                       |    |
|     | C801        | NUMBER(18, 0)      | 參貸費                       |    |
|     | C802        | NUMBER(18, 0)      | 承諾費                       |    |
|     | C803        | NUMBER(18, 0)      | 其他                        |    |
|     | C67         | VARCHAR2(40 char) | 會計傳票摘要                    |    |
|     | C68         | VARCHAR2(20 char) | 會計KEY                     |    |
|     | C69         | NUMBER(5, 0)       | 會計傳票序號                    |    |
|     | C161        | NUMBER(12, 6)      | 聯往利率                      |    |
|     | C162        | NUMBER(12, 6)      | 聯往利差                      |    |
|     | C164        | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C165        | VARCHAR2(7 char)  | AO代碼                      |    |
|     | C166        | VARCHAR2(7 char)  | 基本資料編號                    |    |
|     | C881        | DATE              | 計息起日                      |    |
|     | C882        | DATE              | 計息迄日                      |    |
|     | C883        | NUMBER(3, 0)       | 計息天數                      |    |
|     | C884        | NUMBER(18, 0)      | 攤提金額                      |    |
|     | C168        | NUMBER(2, 0)       | 展期次數                      |    |
|     | C169        | VARCHAR2(12 char) | 批覆書號(展期用)                 |    |
|     | C170        | VARCHAR2(3 char)  | 額度細項(展期用)                 |    |
|     | C171        | VARCHAR2(3 char)  | 額度幣別(展期用)                 |    |
|     | C172        | NUMBER(18, 0)      | 額度金額(展期用)                 |    |
|     | C173        | NUMBER(3, 0)       | 利率天期                      |    |
|     | C174        | NUMBER(18, 6)      | 計息尾差                      |    |
|     | C175        | VARCHAR2(1 char)  | 投資大陸註記                    |    |
|     | C176        | VARCHAR2(1 char)  | 三角貿易                      |    |
|     | C177        | VARCHAR2(1 char)  | 大陸進口                      |    |
|     | C178        | VARCHAR2(1 char)  | 大陸出口                      |    |
|     | C179        | VARCHAR2(3 char)  | 匯款分類                      |    |
|     | C180        | DATE              | 利率生效日                     |    |
|     | C181        | VARCHAR2(1 char)  | 利率不另加稅                    |    |
|     | C885        | VARCHAR2(1 char)  | 議價處理區分                    |    |
|     | C886        | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C887        | VARCHAR2(1 char)  | 買賣區分                      |    |
|     | C888        | VARCHAR2(3 char)  | 議價幣別                      |    |
|     | C889        | NUMBER(18, 0)      | 議價成交金額                    |    |
|     | C183        | NUMBER(18, 6)      | 計息含尾差                     |    |
|     | C184        | VARCHAR2(20 char) | 開狀行                       |    |
|     | C185        | DATE              | 開狀日                       |    |
|     | C186        | DATE              | 有效日                       |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_M_FILEACIL

#### 外匯授信利息收入會計明細

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | DATE              | 資料日期                      |    |
| PK  | C2          | VARCHAR2(8 char)  | 會計科子目-外匯                  |    |
|     | C3          | VARCHAR2(8 char)  | 會計科子目-核心                  |    |
| PK  | C4          | VARCHAR2(3 char)  | 幣別                        |    |
|     | C5          | VARCHAR2(4 char)  | 記帳單位                      |    |
| PK  | C6          | VARCHAR2(4 char)  | 營業單位                      |    |
|     | C7          | VARCHAR2(4 char)  | 利潤中心                      |    |
| PK  | C8          | VARCHAR2(20 char) | 交易編號                      |    |
|     | C9          | NUMBER(13, 2)      | 原幣金額S9(10)V99             |    |
|     | C10         | VARCHAR2(11 char) | 客戶統編                      |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_M_FILEAITL

#### 外匯授信會科期限統計檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | DATE              | 資料日期                      |    |
|     | C2          | VARCHAR2(6 char)  | 報表代號                      |    |
|     | C3          | VARCHAR2(8 char)  | 會計科子目-外匯                  |    |
|     | C4          | VARCHAR2(1 char)  | 期別                        |    |
|     | C5          | VARCHAR2(3 char)  | 幣別                        |    |
|     | C6          | NUMBER(15, 2)      | 原幣金額S9(13)V99             |    |
|     | C7          | VARCHAR2(10 char) | 備註                        |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_M_FXLNNSFR

#### 外幣放款分月還本明細(NSFR)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | DATE              | 資料日期                      |    |
|     | C2          | VARCHAR2(4 char)  | 營業單位                      |    |
| PK  | C3          | VARCHAR2(16 char) | 貸放帳號                      |    |
|     | C4          | VARCHAR2(3 char)  | 幣別                        |    |
|     | C5          | VARCHAR2(8 char)  | 到期日                       |    |
|     | C6          | VARCHAR2(8 char)  | 下次還本日                     |    |
|     | C7          | NUMBER(15, 2)      | 近1月還本金V99                 |    |
|     | C8          | NUMBER(15, 2)      | 近2月還本金V99                 |    |
|     | C9          | NUMBER(15, 2)      | 近3月還本金V99                 |    |
|     | C10         | NUMBER(15, 2)      | 近4月還本金V99                 |    |
|     | C11         | NUMBER(15, 2)      | 近5月還本金V99                 |    |
|     | C12         | NUMBER(15, 2)      | 近6月還本金V99                 |    |
|     | C13         | NUMBER(15, 2)      | 近7月還本金V99                 |    |
|     | C14         | NUMBER(15, 2)      | 近8月還本金V99                 |    |
|     | C15         | NUMBER(15, 2)      | 近9月還本金V99                 |    |
|     | C16         | NUMBER(15, 2)      | 近10月還本金V99                |    |
|     | C17         | NUMBER(15, 2)      | 近11月還本金V99                |    |
|     | C18         | NUMBER(15, 2)      | 近12月還本金V99                |    |
|     | C19         | NUMBER(15, 2)      | 近13月還本金V99                |    |
|     | C20         | NUMBER(15, 2)      | 近14月還本金V99                |    |
|     | C21         | NUMBER(15, 2)      | 近15月還本金V99                |    |
|     | C22         | NUMBER(15, 2)      | 近16月還本金V99                |    |
|     | C23         | NUMBER(15, 2)      | 近17月還本金V99                |    |
|     | C24         | NUMBER(15, 2)      | 近18月還本金V99                |    |
|     | C25         | NUMBER(15, 2)      | 剩餘還本金V99                  |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |
