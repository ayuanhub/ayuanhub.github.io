---
sidebar_position: 25
title: 衍生性商品風控系統(FMRK)
---

### VW_ODS_D_HKFORWARD

#### 香港分行-Forward 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易代碼          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象ID        |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | EXPIRYDATE      | DATE              | 指定到期日         |    |
|     | MAINCUR         | VARCHAR2(3 char)  | 預購預售幣別        |    |
|     | MAINAMT         | FLOAT             | 預購預售金額        |    |
|     | SWITCHCUR       | VARCHAR2(3 char)  | 相對幣別          |    |
|     | SWITCHAMT       | FLOAT             | 相對幣別金額        |    |
|     | EXRATE          | FLOAT             | 議價匯率          |    |
|     | MM              | VARCHAR2(2 char)  | FX            |    |
|     | BUYSELL         | VARCHAR2(1 char)  | 買賣方向          |    |
|     | TRADETYPE       | VARCHAR2(1 char)  | 交易別           |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_HKNDF

#### 香港分行-NDF 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TRADEID         | VARCHAR2(20 char) | 交易代碼          |    |
|     | UPDATEDATE      | DATE              | 載入日期          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象ID        |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | EXPIRYDATE      | DATE              | 指定到期日         |    |
|     | MAINCUR         | VARCHAR2(3 char)  | 預購預售幣別        |    |
|     | MAINAMT         | FLOAT             | 預購預售金額        |    |
|     | SWITCHCUR       | VARCHAR2(3 char)  | 相對幣別          |    |
|     | SWITCHAMT       | FLOAT             | 相對幣別金額        |    |
|     | EXRATE          | FLOAT             | 議價匯率          |    |
|     | MM              | VARCHAR2(2 char)  | FX            |    |
|     | NOTE            | VARCHAR2(1 char)  | 註記            |    |
|     | TRADETYPE       | VARCHAR2(1 char)  | 交易別           |    |
|     | BUYSELL         | VARCHAR2(1 char)  | 買賣方向          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_HKSPOT

#### 香港分行-Spot 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易代碼          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象ID        |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | EXPIRYDATE      | DATE              | 交割日           |    |
|     | MAINCUR         | VARCHAR2(3 char)  | 預購預售幣別        |    |
|     | MAINAMT         | FLOAT             | 預購預售金額        |    |
|     | SWITCHCUR       | VARCHAR2(3 char)  | 相對幣別          |    |
|     | SWITCHAMT       | FLOAT             | 相對幣別金額        |    |
|     | EXRATE          | FLOAT             | 議價匯率          |    |
|     | MM              | VARCHAR2(2 char)  | FX            |    |
|     | NOTE            | VARCHAR2(1 char)  | 註記            |    |
|     | TRADETYPE       | VARCHAR2(1 char)  | 交易別           |    |
|     | BUYSELL         | VARCHAR2(1 char)  | 買賣方向          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_HKSWAP

#### 香港分行-Swap 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易代碼          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象ID        |    |
|     | SPOTDEALDATE    | DATE              | SPOT訂約日       |    |
|     | SPOTDELYDATE    | DATE              | SPOT交割日       |    |
|     | SPOTMAINCUR     | VARCHAR2(3 char)  | SPOT預購預售幣別    |    |
|     | SPOTMAINAMT     | FLOAT             | SPOT預購預售金額    |    |
|     | SPOTSWITCHCUR   | VARCHAR2(3 char)  | SPOT相對幣別      |    |
|     | SPOTSWITCHAMT   | FLOAT             | SPOT相對幣別金額    |    |
|     | SPOTEXRATE      | FLOAT             | SPOT議價匯率      |    |
|     | FRDDEALDATE     | DATE              | Forward訂約日    |    |
|     | FRDDELYDATE     | DATE              | Forward交割日    |    |
|     | FRDMAINCUR      | VARCHAR2(3 char)  | Forward預購預售幣別 |    |
|     | FRDMAINAMT      | FLOAT             | Forward預購預售金額 |    |
|     | FRDSWITCHCUR    | VARCHAR2(3 char)  | Forward相對幣別   |    |
|     | FRDSWITCHAMT    | FLOAT             | Forward相對幣別金額 |    |
|     | FRDEXRATE       | FLOAT             | Forward議價匯率   |    |
|     | MM              | VARCHAR2(2 char)  | FX            |    |
|     | NOTE            | VARCHAR2(1 char)  | 註記            |    |
|     | TRADETYPE       | VARCHAR2(1 char)  | 交易別           |    |
|     | BUYSELL         | VARCHAR2(1 char)  | 買賣方向          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_TWFORWARD

#### Forward 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTTYPE        | VARCHAR2(3 char)  | 交易對象類別        |    |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易編號          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | MM              | VARCHAR2(2 char)  | FX/MM         |    |
|     | BRANCHID        | VARCHAR2(4 char)  | 分行別           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象          |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | EXPIRYDATE      | DATE              | 原始交割日         |    |
|     | DELYDATE        | DATE              | 實際交割日         |    |
|     | EARLYEXPIRYDATE | DATE              | 最終交割日         |    |
|     | BUYCUR          | VARCHAR2(3 char)  | 買入幣別          |    |
|     | BUYAMT          | FLOAT             | 買入金額          |    |
|     | SELLCUR         | VARCHAR2(3 char)  | 賣出幣別          |    |
|     | SELLAMT         | FLOAT             | 賣出金額          |    |
|     | EXRATE          | FLOAT             | 議價匯率          |    |
|     | INPUTID         | VARCHAR2(10 char) | 交易員           |    |
|     | OPTID           | VARCHAR2(15 char) | 反向註記          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_TWIRS

#### IRS 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTTYPE        | VARCHAR2(3 char)  | 交易對象類別        |    |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易編號          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | REVSDATE        | DATE              | 生效日           |    |
|     | REVEDATE        | DATE              | 到期日           |    |
|     | TRADECUR        | VARCHAR2(3 char)  | 承作幣別          |    |
|     | AMOUNT          | FLOAT             | 承作名目本金        |    |
|     | PAYRATE         | FLOAT             | 計息利率          |    |
|     | PAYFREQ         | VARCHAR2(20 char) | 付息方式          |    |
|     | PAYMETHOD       | VARCHAR2(20 char) | 收付方式          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_TWSPOT

#### Spot 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易代碼          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | TRADEDATE       | DATE              | 交易日           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象ID        |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | EXPIRYDATE      | DATE              | 交割日           |    |
|     | MAINCUR         | VARCHAR2(3 char)  | 預購預售幣別        |    |
|     | MAINAMT         | FLOAT             | 預購預售金額        |    |
|     | SWITCHCUR       | VARCHAR2(3 char)  | 相對幣別          |    |
|     | SWITCHAMT       | FLOAT             | 相對幣別金額        |    |
|     | EXRATE          | FLOAT             | 議價匯率          |    |
|     | MM              | VARCHAR2(2 char)  | FX            |    |
|     | NOTE            | VARCHAR2(1 char)  | 註記            |    |
|     | TRADETYPE       | VARCHAR2(1 char)  | 交易別           |    |
|     | BUYSELL         | VARCHAR2(1 char)  | 買賣方向          |    |
|     | BRANCHID        | VARCHAR2(4 char)  | 分行別           |    |
|     | INPUTID         | VARCHAR2(10 char) | 交易員           |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |    |

### VW_ODS_D_TWSWAP

#### Swap 交易明細檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | CUSTTYPE        | VARCHAR2(3 char)  | 交易對象類別        |    |
| PK  | TRADEID         | VARCHAR2(20 char) | 交易編號          |    |
| PK  | UPDATEDATE      | DATE              | 載入日期          |    |
|     | MM              | VARCHAR2(2 char)  | FX/MM         |    |
|     | BRANCHID        | VARCHAR2(4 char)  | 分行別           |    |
|     | CUSTID          | VARCHAR2(20 char) | 交易對象          |    |
|     | DEALDATE        | DATE              | 訂約日           |    |
|     | SPOTDELYDATE    | DATE              | 即期交割日         |    |
|     | SPOTBUYCUR      | VARCHAR2(3 char)  | 即期買入幣別        |    |
|     | SPOTBUYAMT      | FLOAT             | 即期買入金額        |    |
|     | SPOTSELLCUR     | VARCHAR2(3 char)  | 即期賣出幣別        |    |
|     | SPOTSELLAMT     | FLOAT             | 即期賣出金額        |    |
|     | SPOTEXRATE      | FLOAT             | 即期議價匯率        |    |
|     | FRDDELYDATE     | DATE              | 遠期交割日         |    |
|     | DELYDATE        | DATE              | 實際交割日         |    |
|     | EARLYEXPIRYDATE | DATE              | 最終交割日         |    |
|     | FRDBUYCUR       | VARCHAR2(3 char)  | 遠期買入幣別        |    |
|     | FRDBUYAMT       | FLOAT             | 遠期買入金額        |    |
|     | FRDSELLCUR      | VARCHAR2(3 char)  | 遠期賣出幣別        |    |
|     | FRDSELLAMT      | FLOAT             | 遠期賣出金額        |    |
|     | FRDEXRATE       | FLOAT             | 遠期議價匯率        |    |
|     | INPUTID         | VARCHAR2(10 char) | 交易員           |    |
|     | OPTID           | VARCHAR2(15 char) | 反向註記          |    |
|     | TBL_UPD_TIM     | TIMESTAMP         | 表格更新時間        |
