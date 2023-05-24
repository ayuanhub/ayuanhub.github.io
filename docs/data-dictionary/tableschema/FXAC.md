---
sidebar_position: 26
title: 外匯系統-會計(FXAC)
---

### VW_ODS_D_FILE0CTX

#### 會計明細檔(OBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | DATE              |                           |    |
| PK  | C2          | VARCHAR2(4 char)  |                           |    |
|     | C3          | VARCHAR2(2 char)  |                           |    |
| PK  | C4          | NUMBER(5, 0)       |                           |    |
| PK  | C5          | NUMBER(2, 0)       |                           |    |
|     | C6          | VARCHAR2(3 char)  |                           |    |
|     | C7          | VARCHAR2(6 char)  |                           |    |
|     | C8          | VARCHAR2(20 char) |                           |    |
|     | C9          | VARCHAR2(2 char)  |                           |    |
|     | C10         | DATE              | 到期日                       |    |
|     | C11         | VARCHAR2(4 char)  | 代理行代碼(計算分行績數用)            |    |
|     | C12         | VARCHAR2(4 char)  | 記帳行代碼                     |    |
|     | C13         | VARCHAR2(8 char)  | 科子細目代碼                    |    |
|     | C14         | VARCHAR2(3 char)  | 幣別                        |    |
|     | C15         | VARCHAR2(1 char)  | 借貸區分                      |    |
|     | C16         | NUMBER(18, 0)      | 金額                        |    |
|     | C17         | NUMBER(18, 0)      | 昨日餘額                      |    |
|     | C18         | NUMBER(18, 0)      | 上月餘額                      |    |
|     | C19         | NUMBER(18, 0)      | 上期餘額                      |    |
|     | C20         | VARCHAR2(80 char) | 會計摘要一                     |    |
|     | C21         | VARCHAR2(80 char) | 會計摘要二                     |    |
|     | C22         | VARCHAR2(5 char)  | 存匯行代碼                     |    |
|     | C23         | NUMBER(12, 6)      | 掛牌匯率(中價)                  |    |
|     | C24         | NUMBER(12, 6)      | 成本匯率_利率                   |    |
|     | C25         | NUMBER(12, 6)      | 成交匯率_利率                   |    |
|     | C26         | DATE              | 輸入日期                      |    |
|     | C27         | VARCHAR2(8 char)  | 輸入時間                      |    |
|     | C28         | VARCHAR2(10 char) | 輸入經辦                      |    |
|     | C29         | DATE              | 放行日期                      |    |
|     | C30         | VARCHAR2(8 char)  | 放行時間                      |    |
|     | C31         | VARCHAR2(10 char) | 放行主管                      |    |
|     | C32         | DATE              | ONEOFPLFMAINKEY(DATETYPE) |    |
|     | C33         | VARCHAR2(1 char)  | 測試FLAG                    |    |
|     | C34         | VARCHAR2(3 char)  | 接收                        |    |
|     | C35         | VARCHAR2(3 char)  | 實際SORT                    |    |
|     | C36         | VARCHAR2(1 char)  | 501                       |    |
|     | C37         | VARCHAR2(3 char)  | 502                       |    |
|     | C38         | VARCHAR2(1 char)  | 是否沖正                      |    |
|     | C39         | NUMBER(18, 2)      | WK-AMT                    |    |
|     | C40         | DATE              | 營業日期                      |    |
|     | C41         | VARCHAR2(11 char) | 統一編號                      |    |
|     | C42         | VARCHAR2(4 char)  | 代理行(外指行用)                 |    |
|     | C43         | VARCHAR2(4 char)  | 代辦行                       |    |
|     | C44         | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C45         | VARCHAR2(20 char) | 各業務交割編號                   |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_D_FILEACTX

#### 會計明細檔(DBU)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1          | DATE              |                           |    |
| PK  | C2          | VARCHAR2(4 char)  |                           |    |
|     | C3          | VARCHAR2(2 char)  |                           |    |
| PK  | C4          | NUMBER(5, 0)       |                           |    |
| PK  | C5          | NUMBER(2, 0)       |                           |    |
|     | C6          | VARCHAR2(3 char)  |                           |    |
|     | C7          | VARCHAR2(6 char)  |                           |    |
|     | C8          | VARCHAR2(20 char) |                           |    |
|     | C9          | VARCHAR2(2 char)  |                           |    |
|     | C10         | DATE              | 到期日                       |    |
|     | C11         | VARCHAR2(4 char)  | 代理行代碼(計算分行績數用)            |    |
|     | C12         | VARCHAR2(4 char)  | 記帳行代碼                     |    |
|     | C13         | VARCHAR2(8 char)  | 科子細目代碼                    |    |
|     | C14         | VARCHAR2(3 char)  | 幣別                        |    |
|     | C15         | VARCHAR2(1 char)  | 借貸區分                      |    |
|     | C16         | NUMBER(18, 0)      | 金額                        |    |
|     | C17         | NUMBER(18, 0)      | 昨日餘額                      |    |
|     | C18         | NUMBER(18, 0)      | 上月餘額                      |    |
|     | C19         | NUMBER(18, 0)      | 上期餘額                      |    |
|     | C20         | VARCHAR2(80 char) | 會計摘要一                     |    |
|     | C21         | VARCHAR2(80 char) | 會計摘要二                     |    |
|     | C22         | VARCHAR2(5 char)  | 存匯行代碼                     |    |
|     | C23         | NUMBER(12, 6)      | 掛牌匯率(中價)                  |    |
|     | C24         | NUMBER(12, 6)      | 成本匯率_利率                   |    |
|     | C25         | NUMBER(12, 6)      | 成交匯率_利率                   |    |
|     | C26         | DATE              | 輸入日期                      |    |
|     | C27         | VARCHAR2(8 char)  | 輸入時間                      |    |
|     | C28         | VARCHAR2(10 char) | 輸入經辦                      |    |
|     | C29         | DATE              | 放行日期                      |    |
|     | C30         | VARCHAR2(8 char)  | 放行時間                      |    |
|     | C31         | VARCHAR2(10 char) | 放行主管                      |    |
|     | C32         | DATE              | ONEOFPLFMAINKEY(DATETYPE) |    |
|     | C33         | VARCHAR2(1 char)  | 測試FLAG                    |    |
|     | C34         | VARCHAR2(3 char)  | 接收                        |    |
|     | C35         | VARCHAR2(3 char)  | 實際SORT                    |    |
|     | C36         | VARCHAR2(1 char)  | 501                       |    |
|     | C37         | VARCHAR2(3 char)  | 502                       |    |
|     | C38         | VARCHAR2(6 char)  | 是否沖正                      |    |
|     | C39         | NUMBER(18, 0)      | WK-AMT                    |    |
|     | C40         | DATE              | 營業日期                      |    |
|     | C41         | VARCHAR2(11 char) | 統一編號                      |    |
|     | C42         | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C43         | VARCHAR2(4 char)  | 代理行(外指行用)                 |    |
|     | C44         | VARCHAR2(13 char) | 連動外匯活存帳號                  |    |
|     | C45         | VARCHAR2(4 char)  | 代辦行                       |    |
|     | C46         | VARCHAR2(6 char)  | 議價編號                      |    |
|     | C47         | VARCHAR2(20 char) | 各業務交割編號                   |    |
|     | C48         | VARCHAR2(16 char) | 對台聯往銷帳編號                  |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_M_SU2KDBU

#### DBU分潤-手續費收入統計(新)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | DATE              | 交易日期                      |    |
|     | C2          | VARCHAR2(8 char)  | 手續費科目                     |    |
|     | C3          | VARCHAR2(8 char)  | 台幣會計科目                    |    |
|     | C4          | VARCHAR2(3 char)  | 原幣幣別                      |    |
|     | C5          | VARCHAR2(4 char)  | 記帳行                       |    |
|     | C6          | VARCHAR2(4 char)  | 分行代碼                      |    |
|     | C7          | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C8          | VARCHAR2(18 char) | 交易編號                      |    |
|     | C9          | NUMBER(13, 2)      | 原幣金額                      |    |
|     | C10         | VARCHAR2(11 char) | 統一編號                      |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |    |

### VW_ODS_M_SU2KOBU

#### OBU分潤-手續費收入統計(新)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C1          | DATE              | 交易日期                      |    |
|     | C2          | VARCHAR2(8 char)  | 手續費科目                     |    |
|     | C3          | VARCHAR2(8 char)  | 台幣會計科目                    |    |
|     | C4          | VARCHAR2(3 char)  | 原幣幣別                      |    |
|     | C5          | VARCHAR2(4 char)  | 記帳行                       |    |
|     | C6          | VARCHAR2(4 char)  | 分行代碼                      |    |
|     | C7          | VARCHAR2(4 char)  | 區域中心                      |    |
|     | C8          | VARCHAR2(18 char) | 交易編號                      |    |
|     | C9          | NUMBER(13, 2)      | 原幣金額                      |    |
|     | C10         | VARCHAR2(11 char) | 統一編號                      |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間                    |
