---
sidebar_position: 38
title: 網銀(NB)
---

### VW_ODS_D_EP003

#### GEB申請檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COMPANY_KEY        | VARCHAR2(10 char)  | 公司內部鍵值         |    |
|     | COMPANY_GROUP_KEY  | VARCHAR2(10 char)  | 隸屬集團鍵值         |    |
|     | OUID               | VARCHAR2(21 char)  | 統編或身分證字號       |    |
|     | OLD_OUID           | VARCHAR2(21 char)  | 作廢前統編或身分證      |    |
|     | STATUS             | VARCHAR2(5 char)   | 公司狀態           |    |
|     | COMPANY_NAME       | VARCHAR2(256 char) | 公司名稱           |    |
|     | ESTABLISH_DATE     | DATE               | 創立/出生日期        |    |
|     | FOREIGN_START_DATE | DATE               | 外僑居留證核發日(暫不使用) |    |
|     | FOREIGN_DUE_DATE   | DATE               | 外僑居留證有效日(暫不使用) |    |
|     | BELONE_BRANCH_ID   | VARCHAR2(4 char)   | 歸屬分行ID         |    |
|     | COMPANY_KIND       | VARCHAR2(5 char)   | 公司種類           |    |
|     | ENTITY_TYPE        | VARCHAR2(5 char)   | 身分別            |    |
|     | AUTHZ_LEVEL        | VARCHAR2(5 char)   | 授權流程           |    |
|     | AUTHZ_STATUS       | VARCHAR2(5 char)   | 授權套餐完成狀態       |    |
|     | AUTHZ_CURRENCY     | VARCHAR2(3 char)   | 授權限額幣別         |    |
|     | TERMINATE_DATE     | DATE               | 終止日期           |    |
|     | COMPANY_ENAME      | VARCHAR2(256 char) | 公司英文名稱         |    |
|     | COMPANY_ADDR       | VARCHAR2(256 char) | 公司中文地址         |    |
|     | COMPANY_EADDR1     | VARCHAR2(256 char) | 公司英文地址         |    |
|     | OWNER_NAME         | VARCHAR2(64 char)  | 負責人姓名          |    |
|     | OWNER_ADDR         | VARCHAR2(256 char) | 負責人地址          |    |
|     | CONTACT_NAME       | VARCHAR2(64 char)  | 聯絡人姓名          |    |
|     | CONTACT_PHONE      | VARCHAR2(25 char)  | 聯絡人電話          |    |
|     | CONTACT_MOBILE     | VARCHAR2(16 char)  | 聯絡人手機          |    |
|     | CONTACT_EMAIL      | VARCHAR2(256 char) | 聯絡人EMAIL       |    |
|     | FAX_NO             | VARCHAR2(20 char)  | 傳真號碼           |    |
|     | BU_TYPE            | VARCHAR2(5 char)   | 此公司戶所屬事業別      |    |
|     | INDUSTRY_TYPE      | VARCHAR2(10 char)  | 行業別            |    |
|     | ALLOW_TRADE_BIZ    | VARCHAR2(5 char)   | 允許進出口業務        |    |
|     | SERVICE_ITEM       | VARCHAR2(5 char)   | 全球金融網服務項目      |    |
|     | IS_DOUBLE_LOGIN    | VARCHAR2(5 char)   | 是否啟用雙重認證       |    |
|     | IS_RETRY           | VARCHAR2(5 char)   | 是否啟用餘額不足自動重試   |    |
|     | IS_DESIGNATE_ONLY  | VARCHAR2(5 char)   | 全球金融網轉帳均為約定轉入  |    |
|     | CREATE_DATE        | DATE               | 資料建立日期         |    |
|     | FEDI_USERID        | VARCHAR2(12 char)  | 用戶代號           |    |
|     | FEDI_BANK_DOMAIN   | VARCHAR2(4 char)   | 銀行網域           |    |
|     | FEDI_SENDER_ADD    | VARCHAR2(35 char)  | 送件人郵箱          |    |
|     | FLAG               | VARCHAR2(1 char)   | 批次檔更新的處理狀態     |    |
|     | IS_DESIGNATE_NEED  | VARCHAR2(5 char)   | 外幣交易不需事先約定     |    |
|     | TBL_UPD_TIM        | TIMESTAMP          | 表格更新時間         |    |

### VW_ODS_D_UAA

#### GEB交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | PAY_DATE           | DATE               | 交易日期           |    |
|     | TX_OUID            | VARCHAR2(21 char)  | 交易ID           |    |
|     | ACCT_BRANCH        | VARCHAR2(4 char)   | 交易分行代號         |    |
|     | TBL_UPD_TIM        | TIMESTAMP          | 表格更新時間         |
