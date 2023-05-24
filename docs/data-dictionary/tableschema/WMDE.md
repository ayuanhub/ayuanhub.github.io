---
sidebar_position: 50
title: 保貸系統(WMDE)
---

### VW_ODS_D_INSIN

#### 新契約進件主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | SNO               | VARCHAR2(50 char)  | 序號          |    |
| PK  | ACCEPTNO          | VARCHAR2(16 char)  | 受理編號        |    |
|     | INSTYPE           | VARCHAR2(20 char)  | 險種代號        |    |
|     | VERSION           | VARCHAR2(3 char)   | 版本          |    |
|     | INSKIND           | VARCHAR2(20 char)  | 險種種類        |    |
|     | INSNAME           | VARCHAR2(80 char)  | 險種名稱        |    |
|     | CUR               | VARCHAR2(3 char)   | 幣別          |    |
|     | PAYTYPE           | VARCHAR2(10 char)  | 繳法別         |    |
|     | PAYYEAR           | VARCHAR2(10 char)  | 繳費年期        |    |
|     | INSPROTECT_FRD    | NUMBER(18, 4)       | 保險金額(原幣)    |    |
|     | INSPAY_FRD        | NUMBER(18, 4)       | 保費(原幣)      |    |
|     | CURRATE           | NUMBER(19, 7)       | 匯率          |    |
|     | INSPROTECT_NTD    | NUMBER(18, 4)       | 保險金額(台幣)    |    |
|     | INSPAY_NTD        | NUMBER(18, 4)       | 保費(台幣)      |    |
|     | ATTINS            | VARCHAR2(1 char)   | 是否有附約       |    |
|     | AUTOPAY           | VARCHAR2(1 char)   | 自動墊繳        |    |
|     | BONUSTYPE         | VARCHAR2(1 char)   | 保單紅利        |    |
|     | ANNUITYAGE        | VARCHAR2(3 char)   | 年金給付開始日     |    |
|     | ANNUITYPAYTYPE    | VARCHAR2(20 char)  | 年金給付方式      |    |
|     | ANNUITYGUAR       | VARCHAR2(10 char)  | 年金給付保証期限    |    |
|     | BCID              | VARCHAR2(20 char)  | 被保人ID       |    |
|     | BCNAME            | VARCHAR2(100 char) | 被保人姓名       |    |
|     | BBIRTHDAY         | VARCHAR2(10 char)  | 被保人生日       |    |
|     | BSEX              | VARCHAR2(1 char)   | 被保人性別       |    |
|     | BRELATION         | VARCHAR2(2 char)   | 被保人與要保人關係   |    |
|     | BRELATIONDESC     | VARCHAR2(10 char)  | 被保人與要保人關係描述 |    |
|     | BTELH             | VARCHAR2(20 char)  | 被保人電話       |    |
|     | BTELO             | VARCHAR2(20 char)  | 被保人電話       |    |
|     | BCELL             | VARCHAR2(20 char)  | 被保人手機       |    |
|     | BRADDR_POSTCODE   | VARCHAR2(5 char)   | 被保人郵遞區號     |    |
|     | BRADDR            | VARCHAR2(100 char) | 被保人地址       |    |
|     | SICKNESS          | VARCHAR2(1 char)   | 身心障礙(被保險人)  |    |
|     | PCID              | VARCHAR2(20 char)  | 要保人ID       |    |
|     | PCNAME            | VARCHAR2(100 char) | 要保人姓名       |    |
|     | PBIRTHDAY         | VARCHAR2(10 char)  | 要保人生日       |    |
|     | PSEX              | VARCHAR2(1 char)   | 要保人性別       |    |
|     | PTELH             | VARCHAR2(20 char)  | 要保人電話       |    |
|     | PTELO             | VARCHAR2(20 char)  | 要保人電話       |    |
|     | PCELL             | VARCHAR2(20 char)  | 要保人手機       |    |
|     | PRADDR_POSTCODE   | VARCHAR2(5 char)   | 要保人郵遞區號     |    |
|     | PRADDR            | VARCHAR2(100 char) | 要保人地址       |    |
|     | PAYADDRTYPE       | VARCHAR2(1 char)   | 付費地址同被保人    |    |
|     | PAYADDR_POSTCODE  | VARCHAR2(5 char)   | 付費地址郵遞區號    |    |
|     | PAYADDR           | VARCHAR2(100 char) | 付費地址        |    |
|     | SALEBID           | VARCHAR2(10 char)  | 交易分行        |    |
|     | SALE1ID           | VARCHAR2(10 char)  | 招攬人1員編      |    |
|     | SALE1NAME         | VARCHAR2(30 char)  | 招攬人1姓名      |    |
|     | SALE1TYPE         | VARCHAR2(10 char)  | 身分別         |    |
|     | SALE2ID           | VARCHAR2(10 char)  | 招攬人2員編      |    |
|     | SALE2NAME         | VARCHAR2(30 char)  | 招攬人2姓名      |    |
|     | SALE2TYPE         | VARCHAR2(10 char)  | 身分別         |    |
|     | SENDADDRTYPE      | VARCHAR2(1 char)   | 保單郵寄地址類型    |    |
|     | SENDADDR_POSTCODE | VARCHAR2(5 char)   | 郵遞區號        |    |
|     | SENDADDR          | VARCHAR2(100 char) | 保單郵寄地址      |    |
|     | SENDADDRNAME      | VARCHAR2(100 char) | 保單郵寄地址之收件人  |    |
|     | CRTEMPID          | VARCHAR2(10 char)  | 建立者員編       |    |
|     | CRTEMPNAME        | VARCHAR2(30 char)  | 建立者姓名       |    |
|     | CRTDATE           | VARCHAR2(20 char)  | 建立者日期       |    |
|     | CONFBOSSID        | VARCHAR2(10 char)  | 覆核者員編       |    |
|     | CONFBOSSNAME      | VARCHAR2(30 char)  | 覆核者姓名       |    |
|     | CONFDATE          | VARCHAR2(20 char)  | 覆核者日期       |    |
|     | STATE             | VARCHAR2(20 char)  | 檔案狀態        |    |
|     | REASON            | VARCHAR2(50 char)  | 理由          |    |
|     | SENDDATE          | VARCHAR2(20 char)  | 傳送新壽日期      |    |
|     | SENDUSERID        | VARCHAR2(10 char)  | 傳送新壽者員編     |    |
|     | SENDUSERNAME      | VARCHAR2(30 char)  | 傳送新壽者       |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |    |

### VW_ODS_D_INSINATT

#### 新契約附約檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SNO               | VARCHAR2(50 char)  | 序號          |    |
| PK  | ACCEPTNO          | VARCHAR2(16 char)  | 受理編號        |    |
|     | INSTYPE           | VARCHAR2(10 char)  | 險種代號        |    |
|     | VERSION           | VARCHAR2(3 char)   | 版本          |    |
|     | INSNAME           | VARCHAR2(80 char)  | 險種名稱        |    |
|     | INSPROTECT_NTD    | NUMBER(18, 4)       | 保額          |    |
|     | BCID              | VARCHAR2(15 char)  | 被保人ID       |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |    |

### VW_ODS_D_INSINMINS

#### 新契約多主約檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | SNO               | VARCHAR2(50 char)  | 序號          |    |
| PK  | ACCEPTNO          | VARCHAR2(16 char)  | 受理編號        |    |
| PK  | MINSNO            | VARCHAR2(2 char)   | 主約序號        |    |
|     | MTLTYPE           | VARCHAR2(2 char)   | 投保類型        |    |
|     | INSTYPE           | VARCHAR2(20 char)  | 險種代碼        |    |
|     | VERSION           | VARCHAR2(3 char)   | 版本          |    |
|     | INSKIND           | VARCHAR2(20 char)  | 外幣/人身/投資    |    |
|     | INSNAME           | VARCHAR2(80 char)  | 險種名稱        |    |
|     | PAYYEAR           | VARCHAR2(10 char)  | 繳費年期        |    |
|     | INSPROTECT_NTD    | NUMBER(18, 4)       | 保額          |    |
|     | REMIT             | VARCHAR2(1 char)   | 新要保人豁免保險費   |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間      |
