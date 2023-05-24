---
sidebar_position: 37
title: 自有資金投資中台風險控管系統(LNFD)
---

### VW_ODS_D_LNFD_APEX_INVEST

#### 有價證券投資資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BASEDATE       | DATE              | 庫存基準日   |    |
|     | HID            | NUMBER(19, 0)      | 階層編號    |    |
|     | SYMID          | INTEGER           | 商品流水號   |    |
|     | CODE           | VARCHAR2(48 char) | 商品代碼    |    |
|     | NAME           | VARCHAR2(48 char) | 商品名稱    |    |
|     | TYPE           | INTEGER           | 商品類型    |    |
|     | DEALCURRENCY   | VARCHAR2(3 char)  | 幣別      |    |
|     | AP             | VARCHAR2(1 char)  | 會計類別    |    |
|     | TDINVNPA       | NUMBER(38, 2)      | 庫存部位    |    |
|     | TDINVBOOKVALUE | NUMBER(38, 2)      | 庫存成本    |    |
|     | TDPRICE        | NUMBER(38, 8)      | 市價      |    |
|     | MATURITYDATE   | DATE              | 到期日     |    |
|     | MARKETVALUE    | NUMBER(38, 8)      | 市值      |    |
|     | RISKTYPE       | VARCHAR2(1 char)  | 銀行簿/交易簿 |    |
|     | TERMINATEDATE  | DATE              | 重定價日    |    |
|     | IFRS9TYPE      | VARCHAR2(1 char)  | IFRS分類  |    |
|     | ACCCODE        | VARCHAR2(4 char)  | 會計科目    |    |
|     | ACCSUBCODE     | VARCHAR2(4 char)  | 會計子目    |    |
|     | PRODUCTTYPE    | INTEGER           | 產品種類    |    |
|     | INDUSTRYCODE   | VARCHAR2(20 char) | 產業別     |    |
|     | COUPONRATE     | NUMBER(38, 8)      | 利率      |    |
|     | TBL_UPD_TIM    | TIMESTAMP         | 表格更新時間  |
