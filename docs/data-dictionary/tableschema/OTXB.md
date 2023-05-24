---
sidebar_position: 44
title: 保管箱系統(OTXB)
---

### VW_ODS_D_BOXM

#### 保管箱主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BX02_BRNO       | VARCHAR2(4 char)  | 分行代號         |    |
| PK  | BX02_KIND       | VARCHAR2(2 char)  | 箱種           |    |
| PK  | BX02_BOXNO      | VARCHAR2(6 char)  | 箱號           |    |
|     | CUSTOMER_ID     | VARCHAR2(10 char) | 立約人          |    |
|     | CUSTOMER_ID_ERR | VARCHAR2(1 char)  | 立約人ID檢碼      |    |
|     | BOX_STATUS      | VARCHAR2(1 char)  | 使用狀態         |    |
|     | BX02_SDATE      | DATE              | 始用日          |    |
|     | BX02_EDATE      | DATE              | 到期日          |    |
|     | PERIOD          | VARCHAR2(3 char)  | 期間           |    |
|     | BX02_TRACTNO    | VARCHAR2(14 char) | 轉帳帳號         |    |
|     | RENT_PAY        | VARCHAR2(8 char)  | 租金           |    |
|     | SAVE_PAY        | VARCHAR2(8 char)  | 保證金          |    |
|     | TEMP_PAY        | VARCHAR2(8 char)  | 押金           |    |
|     | PAY_DATE        | DATE              | 付款日          |    |
|     | BX02_KEYNO      | VARCHAR2(8 char)  | 鑰匙編號         |    |
|     | BX02_CARDNO     | VARCHAR2(10 char) | 卡片編號         |    |
|     | OPEN_CONTROL    | VARCHAR2(1 char)  | 優惠類別         |    |
|     | EVENT_STATUS    | VARCHAR2(2 char)  | 事故狀態         |    |
|     | BX02_STATUS     | VARCHAR2(1 char)  | 優惠類別         |    |
|     | NOTICE_CONTROL  | VARCHAR2(7 char)  | 優惠類別         |    |
|     | AGAINST_ST      | VARCHAR2(2 char)  | 違約狀態         |    |
|     | AGAINST_PAY     | VARCHAR2(8 char)  | 違約金          |    |
|     | BX02_USECODE1   | VARCHAR2(1 char)  | 使用人別1        |    |
|     | BX02_UNINO1     | VARCHAR2(10 char) | 使用人1         |    |
|     | BX02_UNINO1_ERR | VARCHAR2(1 char)  | ID檢碼         |    |
|     | BX02_USECODE2   | VARCHAR2(1 char)  | 使用人別2        |    |
|     | BX02_UNINO2     | VARCHAR2(10 char) | 使用人2         |    |
|     | BX02_UNINO2_ERR | VARCHAR2(1 char)  | ID檢碼         |    |
|     | BX02_USECODE3   | VARCHAR2(1 char)  | 使用人別2        |    |
|     | BX02_UNINO3     | VARCHAR2(10 char) | 使用人3         |    |
|     | BX02_UNINO3_ERR | VARCHAR2(1 char)  | ID檢碼         |    |
|     | BX02_DSCRATE    | VARCHAR2(3 char)  | 優惠折數         |    |
|     | BX02_CD         | VARCHAR2(2 char)  | 優惠類別         |    |
|     | CLOSE_DATE      | DATE              | 退租日期         |    |
|     | CONTACT_NAME    | VARCHAR2(20 char) | 聯絡人姓名        |    |
|     | CONT_TEL_AREA   | VARCHAR2(4 char)  | 聯絡人電話區碼      |    |
|     | CONT_TEL_NO     | VARCHAR2(10 char) | 外匯存單事故記錄檔暫存檔 |    |
|     | BX02_FLAG       | VARCHAR2(1 char)  | 優惠類別         |    |
|     | BX02_OP         | VARCHAR2(5 char)  | 維護OP         |    |
|     | BX02_UDATE      | DATE              | 維護日期         |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間       |    |

### VW_ODS_D_CUSTOMER

#### 客戶檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTOMER_ID     | VARCHAR2(10 char) | 統一編號         |    |
|     | CUSTOMER_ID_ERR | VARCHAR2(1 char)  | 統一編號         |    |
|     | CUSTOMER_NAME   | VARCHAR2(44 char) | 戶名           |    |
|     | BSCODE          | VARCHAR2(6 char)  | 職業代號         |    |
|     | BIRTH_DATE      | DATE              | 出生日期         |    |
|     | SEXTURE         | VARCHAR2(1 char)  | 性別           |    |
|     | TEL_AREA        | VARCHAR2(3 char)  | 電話區碼         |    |
|     | TEL_NO          | VARCHAR2(10 char) | 電話           |    |
|     | MOBILE          | VARCHAR2(12 char) | 手機           |    |
|     | DMCL_ZIP        | VARCHAR2(5 char)  | 戶籍郵遞區號       |    |
|     | POSTCODE        | VARCHAR2(5 char)  | 通訊郵遞區號       |    |
|     | ADDRESS         | VARCHAR2(64 char) | 地址           |    |
|     | CONTACT_ID      | VARCHAR2(11 char) | 連絡人稅籍ID      |    |
|     | CONTACT_NAME    | VARCHAR2(44 char) | 連絡人姓名        |    |
|     | CONT_TEL_AREA   | VARCHAR2(3 char)  | 連絡人電話區碼      |    |
|     | CONT_TEL_NO     | VARCHAR2(10 char) | 連絡人電話        |    |
|     | CONT_ADDRESS    | VARCHAR2(64 char) | 連絡人地址        |    |
|     | REMARK          | VARCHAR2(44 char) | 備註           |    |
|     | FLAG            | VARCHAR2(1 char)  | FLAG         |    |
|     | BX02_OP         | VARCHAR2(5 char)  | 維護OP         |    |
|     | BX02_UDATE      | DATE              | 維護日期         |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間       |    |

### VW_ODS_D_TRANS

#### 交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BRNO            | VARCHAR2(4 char)  | 分行代號         |    |
|     | SER_NO          | NUMBER(9, 0)       | 交易序號         |    |
|     | TINO            | VARCHAR2(5 char)  | 傳票號碼         |    |
|     | TRAN_DATE       | DATE              | 交易日期         |    |
|     | TRAN_TIME       | VARCHAR2(8 char)  | 交易時間         |    |
|     | BOX_TYPE        | VARCHAR2(2 char)  | 箱種           |    |
|     | BOX_NO          | VARCHAR2(6 char)  | 箱號           |    |
|     | ID1             | VARCHAR2(10 char) | 統一編號         |    |
|     | ID_ERR          | VARCHAR2(1 char)  | 統一編號檢碼       |    |
|     | STAT            | VARCHAR2(1 char)  | 狀態           |    |
|     | START_DATE      | DATE              | 起用日          |    |
|     | END_DATE        | DATE              | 到期日          |    |
|     | PERIOD          | VARCHAR2(3 char)  | 期間           |    |
|     | RENT            | VARCHAR2(8 char)  | 租金           |    |
|     | REAL_RENT       | VARCHAR2(8 char)  | 實收租金         |    |
|     | SAVE_PAY        | VARCHAR2(8 char)  | 保證金          |    |
|     | TEMP_PAY        | VARCHAR2(8 char)  | 押金           |    |
|     | AGAINST_PAY     | VARCHAR2(8 char)  | 雜項收入／違約金     |    |
|     | ACH_RENT        | VARCHAR2(8 char)  | 當月手續費收入      |    |
|     | RECODE          | VARCHAR2(1 char)  | 更正碼          |    |
|     | ACC_CLASS       | VARCHAR2(3 char)  | 帳務別          |    |
|     | TRAN_NO         | VARCHAR2(3 char)  | 交易代號         |    |
|     | ACC             | VARCHAR2(14 char) | 帳號           |    |
|     | PER_FEE         | VARCHAR2(2 char)  | 繳費期數         |    |
|     | MEMO            | VARCHAR2(42 char) | 備註           |    |
|     | FLAG            | VARCHAR2(1 char)  | flag         |    |
|     | MT_OP           | VARCHAR2(5 char)  | 維護OP         |    |
|     | MT_DATE         | DATE              | 維護日期         |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間       |
