---
sidebar_position: 54
title: 中菲基債(WMIJ)
---

### VW_ODS_D_CRMAC1

#### 基債庫存明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AC0001      | VARCHAR2(11 char) | 客戶ＩＤ           |    |
|     | AC0002      | DATE              | 日期             |    |
|     | AC0003      | VARCHAR2(50 char) | 投資標的           |    |
|     | AC0004      | VARCHAR2(3 char)  | 幣別             |    |
|     | AC0005      | NUMBER(13, 4)      | 持有單位數          |    |
|     | AC0006      | NUMBER(10, 4)      | 單位淨值平均成本       |    |
|     | AC0007      | NUMBER(10, 4)      | 淨值             |    |
|     | AC0008      | NUMBER(14, 2)      | 外幣金額           |    |
|     | AC0009      | NUMBER(11, 0)      | 台幣金額           |    |
|     | AC0010      | NUMBER(6, 3)       | 報酬率            |    |
|     | AC0011      | NUMBER(5, 0)       | 停損點            |    |
|     | AC0012      | NUMBER(5, 0)       | 停益點            |    |
|     | AC0013      | VARCHAR2(1 char)  | 投資類別           |    |
|     | AC0014      | DATE              | 停損日期           |    |
|     | AC0015      | VARCHAR2(2 char)  | 產品類別           |    |
|     | AC0016      | VARCHAR2(5 char)  | 專案             |    |
| PK  | AC0017      | VARCHAR2(12 char) | 基金代碼           |    |
| PK  | AC0018      | VARCHAR2(14 char) | 信託編號           |    |
|     | AC0019      | VARCHAR2(1 char)  | 信託型態           |    |
|     | AC0020      | VARCHAR2(4 char)  | 信託行            |    |
|     | AC0021      | NUMBER(14, 2)      | 現值             |    |
|     | AC0022      | VARCHAR2(1 char)  | 損益＋－           |    |
|     | AC0023      | NUMBER(14, 2)      | 損益             |    |
|     | AC0024      | NUMBER(19, 9)      | 單位價格           |    |
|     | AC0025      | NUMBER(9, 0)       | 在途金額           |    |
|     | AC0026      | DATE              | 作業日期           |    |
|     | AC0027      | DATE              | 淨值日期           |    |
|     | AC0028      | NUMBER(9, 4)       | 匯率             |    |
|     | AC0029      | DATE              | 匯率日期           |    |
|     | AC0030      | VARCHAR2(1 char)  | 基動配置母子基金別(M/S) |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CRMBDS

#### 債券基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BD0001      | VARCHAR2(12 char) | 債券代號           |    |
|     | BD0002      | VARCHAR2(20 char) | 發行機構           |    |
|     | BD0003      | VARCHAR2(20 char) | 發行機構評等         |    |
|     | BD0004      | VARCHAR2(48 char) | 產品名稱           |    |
|     | BD0005      | VARCHAR2(3 char)  | 幣別             |    |
|     | BD0006      | NUMBER(19, 9)      | 參考價格           |    |
|     | BD0007      | DATE              | 參考日期           |    |
|     | BD0008      | NUMBER(8, 5)       | 手續費            |    |
|     | BD0009      | DATE              | 到期日            |    |
|     | BD0010      | NUMBER(5, 2)       | 保本率            |    |
|     | BD0011      | DATE              | 起始銷售日期         |    |
|     | BD0012      | DATE              | 終止銷售日期         |    |
|     | BD0013      | VARCHAR2(2 char)  | EQUITYLINKOR   |    |
|     | BD0014      | VARCHAR2(3 char)  | 贖回限制           |    |
|     | BD0015      | VARCHAR2(4 char)  | 贖回限制年月日        |    |
|     | BD0016      | NUMBER(13, 0)      | 最低贖回金額         |    |
|     | BD0017      | NUMBER(13, 0)      | 最低申購金額         |    |
|     | BD0018      | NUMBER(8, 6)       | 票面利率           |    |
|     | BD0019      | DATE              | 提前買回行使日        |    |
|     | BD0020      | DATE              | 上次配息日          |    |
|     | BD0021      | DATE              | 下次配息日          |    |
|     | BD0022      | NUMBER(8, 5)       | 手續費率           |    |
|     | BD0023      | VARCHAR2(1 char)  | 付息憑率           |    |
|     | BD0024      | VARCHAR2(16 char) | 英文名稱           |    |
|     | BD0025      | NUMBER(5, 2)       | 存續期間           |    |
|     | BD0026      | DATE              | 作業日期           |    |
|     | BD0027      | VARCHAR2(1 char)  | 商品市場別          |    |
|     | BD0028      | DATE              | 發行日            |    |
|     | BD0029      | VARCHAR2(20 char) | 產品簡稱           |    |
|     | BD0030      | VARCHAR2(1 char)  | 報價方式           |    |
|     | BD0031      | VARCHAR2(1 char)  | 限專業投資人         |    |
|     | BD0032      | NUMBER(5, 2)       | 一般手續費率         |    |
|     | BD0033      | NUMBER(5, 2)       | 行員手續費率         |    |
|     | BD0034      | NUMBER(5, 2)       | 上手手續費率         |    |
|     | BD0035      | NUMBER(5, 2)       | 信託部拆帳比         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CRMCTM

#### 基債客戶基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TN0001      | VARCHAR2(11 char) | 客戶ＩＤ           |    |
|     | TN0002      | VARCHAR2(42 char) | 客戶姓名           |    |
|     | TN0003      | VARCHAR2(3 char)  | 開戶行            |    |
|     | TN0007      | VARCHAR2(40 char) | E-MAIL         |    |
|     | TN0008      | DATE              | 作業日期           |    |
|     | TN0009      | VARCHAR2(1 char)  | 身份別            |    |
|     | TN0010      | VARCHAR2(1 char)  | 專業投資人註記        |    |
|     | TN0011      | DATE              | 身分別申請異動日       |    |
|     | TN0012      | VARCHAR2(2 char)  | 客戶行業別          |    |
|     | TN0013      | VARCHAR2(1 char)  | 客戶信託開戶別        |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CRMFUS

#### 基金基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FD0001      | VARCHAR2(4 char)  |                |    |
|     | FD0002      | VARCHAR2(50 char) |                |    |
|     | FD0003      | VARCHAR2(50 char) |                |    |
|     | FD0004      | VARCHAR2(3 char)  |                |    |
|     | FD0005      | NUMBER(10, 4)      |                |    |
|     | FD0006      | DATE              |                |    |
|     | FD0007      | NUMBER(5, 3)       |                |    |
|     | FD0008      | VARCHAR2(1 char)  |                |    |
|     | FD0009      | VARCHAR2(16 char) |                |    |
|     | FD0010      | VARCHAR2(22 char) |                |    |
|     | FD0011      | VARCHAR2(12 char) |                |    |
|     | FD0012      | NUMBER(5, 2)       |                |    |
|     | FD0013      | VARCHAR2(1 char)  |                |    |
|     | FD0014      | VARCHAR2(2 char)  |                |    |
|     | FD0015      | VARCHAR2(1 char)  |                |    |
|     | FD0016      | VARCHAR2(2 char)  |                |    |
|     | FD0017      | VARCHAR2(1 char)  |                |    |
|     | FD0018      | VARCHAR2(1 char)  |                |    |
|     | FD0019      | VARCHAR2(1 char)  |                |    |
|     | FD0020      | VARCHAR2(1 char)  |                |    |
|     | FD0021      | VARCHAR2(1 char)  |                |    |
|     | FD0022      | VARCHAR2(1 char)  |                |    |
|     | FD0023      | VARCHAR2(42 char) |                |    |
|     | FD0024      | VARCHAR2(1 char)  |                |    |
|     | FD0025      | NUMBER(5, 2)       |                |    |
|     | FD0026      | NUMBER(5, 2)       |                |    |
|     | FD0027      | VARCHAR2(1 char)  |                |    |
|     | FD0028      | NUMBER(9, 0)       |                |    |
|     | FD0029      | NUMBER(9, 0)       |                |    |
|     | FD0030      | NUMBER(1, 0)       |                |    |
|     | FD0031      | DATE              |                |    |
|     | FD0032      | DATE              |                |    |
|     | FD0033      | DATE              |                |    |
|     | FD0034      | VARCHAR2(1 char)  |                |    |
|     | FD0035      | VARCHAR2(1 char)  |                |    |
|     | FD0036      | VARCHAR2(1 char)  |                |    |
|     | FD0037      | VARCHAR2(1 char)  |                |    |
|     | FD0038      | DATE              |                |    |
|     | FD0039      | NUMBER(6, 3)       |                |    |
|     | FD0040      | NUMBER(6, 3)       |                |    |
|     | FD0041      | VARCHAR2(1 char)  |                |    |
|     | FD0042      | NUMBER(6, 3)       |                |    |
|     | FD0043      | NUMBER(6, 3)       |                |    |
|     | FD0044      | NUMBER(6, 3)       |                |    |
|     | FD0045      | NUMBER(6, 3)       |                |    |
|     | FD0046      | VARCHAR2(1 char)  |                |    |
|     | FD0047      | VARCHAR2(1 char)  |                |    |
|     | FD0048      | VARCHAR2(1 char)  |                |    |
|     | FD0049      | VARCHAR2(1 char)  |                |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CRMTR1

#### 基債交易明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TN0001      | VARCHAR2(11 char) | 客戶ＩＤ           |    |
|     | TN0002      | VARCHAR2(11 char) | 信託編號           |    |
|     | TN0003      | DATE              | 交易日            |    |
|     | TN0004      | VARCHAR2(6 char)  | 交易類別           |    |
|     | TN0005      | VARCHAR2(50 char) | 投資標的           |    |
|     | TN0006      | VARCHAR2(3 char)  | 幣別             |    |
|     | TN0007      | NUMBER(13, 4)      | 單位數            |    |
|     | TN0008      | NUMBER(10, 4)      | 基金淨值           |    |
|     | TN0009      | NUMBER(14, 2)      | 外幣金額           |    |
|     | TN0010      | NUMBER(11, 0)      | 台幣金額           |    |
|     | TN0011      | VARCHAR2(3 char)  | 信託行            |    |
|     | TN0012      | NUMBER(9, 2)       | 手續費            |    |
|     | TN0013      | VARCHAR2(5 char)  | 專案             |    |
|     | TN0014      | VARCHAR2(10 char) | 理專代號１          |    |
|     | TN0015      | VARCHAR2(10 char) | 理專代號２          |    |
|     | TN0016      | VARCHAR2(10 char) | 理專代號３          |    |
|     | TN0017      | VARCHAR2(10 char) | 理專代號４          |    |
|     | TN0018      | VARCHAR2(10 char) | 理專代號５          |    |
|     | TN0019      | VARCHAR2(12 char) | 基金代號           |    |
|     | TN0020      | NUMBER(19, 9)      | 匯率             |    |
|     | TN0021      | VARCHAR2(15 char) | 扣款帳號           |    |
|     | TN0022      | NUMBER(6, 3)       | 手續費率           |    |
|     | TN0023      | VARCHAR2(15 char) | 存款帳號           |    |
|     | TN0024      | VARCHAR2(1 char)  | 信託型態           |    |
|     | TN0025      | NUMBER(9, 0)       | 手續費─信託部        |    |
|     | TN0026      | NUMBER(9, 0)       | 手續費─分行         |    |
|     | TN0027      | NUMBER(9, 0)       | 手續費─基金公司       |    |
|     | TN0028      | DATE              | 契約訂定日          |    |
|     | TN0029      | DATE              | 作業日期           |    |
|     | TN0030      | DATE              | 日期欄位           |    |
|     | TN0031      | NUMBER(19, 9)      | 成交匯率           |    |
|     | TN0032      | VARCHAR2(1 char)  | 商品市場別          |    |
|     | TN0033      | NUMBER(15, 2)      | 贖回入帳金額         |    |
|     | TN0034      | VARCHAR2(1 char)  | 授權輸入手續費率       |    |
|     | TN0035      | NUMBER(6, 0)       | 申購手續費折扣率       |    |
|     | TN0036      | NUMBER(9, 2)       | 債券前手息          |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |
