---
sidebar_position: 49
title: DCI(DCI)/組合式商品系統(SPS)/TMU 系統(GYRO)(WMDC)
---

### VW_ODS_D_ACCOUNTING

#### DCI_會計檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ACCID                | INTEGER            | 流水號                 |    |
|     | ACCDATE              | DATE               | 日期                  |    |
|     | ACCPRODUCTID         | VARCHAR2(12 char)  | 產品代號                |    |
|     | ACCNUMBER            | INTEGER            | 會計序號                |    |
|     | ACCDC                | VARCHAR2(1 char)   | 借貸方                 |    |
|     | ACCOUNT              | VARCHAR2(8 char)   | 會計科目                |    |
|     | ACCSUMMARY           | VARCHAR2(50 char)  | 科目名稱                |    |
|     | ACCCUR               | VARCHAR2(3 char)   | 幣別                  |    |
|     | ACCAMOUNT            | FLOAT              | 金額                  |    |
|     | ACCNOTE              | VARCHAR2(50 char)  | 說明                  |    |
|     | ACCSTATE             | INTEGER            | 狀態                  |    |
|     | ACOTSTATE            | INTEGER            | 顯示狀態                |    |
|     | ACOTOD               | VARCHAR2(3 char)   | OUBDBU              |    |
|     | ACCMSG               | VARCHAR2(400 char) | 訊息                  |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_ACOTDATA

#### SPS_會計檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ID                   | INTEGER            | 流水號                 |    |
|     | ACOTID               | INTEGER            | 會計序號                |    |
|     | PRODSTATE            | VARCHAR2(50 char)  | 產品說明                |    |
|     | PRODID               | VARCHAR2(50 char)  | 產品代號                |    |
|     | BRANCHID             | VARCHAR2(4 char)   | 分行別                 |    |
|     | DUEDATE              | DATE               | 到期日                 |    |
|     | CUSTTYPE             | VARCHAR2(3 char)   | 客戶類型                |    |
|     | USERID               | VARCHAR2(10 char)  | 使用者ID               |    |
|     | CREDATE              | DATE               | 建立日期                |    |
|     | FILESTATE            | VARCHAR2(1 char)   | 檔案是否產生              |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_ACOTENTRIES

#### SPS_會計內容檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | ID                   | INTEGER            | 流水號                 |    |
|     | ACOTID               | INTEGER            | 會計序號                |    |
|     | ENTID                | INTEGER            | 順序                  |    |
|     | DC                   | VARCHAR2(1 char)   | 借方貸方                |    |
|     | ACCOUNT              | VARCHAR2(8 char)   | 會計科目                |    |
|     | CUR                  | VARCHAR2(3 char)   | 幣別                  |    |
|     | SUMMARY              | VARCHAR2(100 char) | 摘要                  |    |
|     | DAMT                 | NUMBER(18, 2)       | 借方金額                |    |
|     | CAMT                 | NUMBER(18, 2)       | 貸方金額                |    |
|     | SPOT                 | NUMBER(18, 6)       | 匯率                  |    |
|     | CREDATE              | DATE               | 建立日期                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_DCDPRODUCT

#### DCI_Online交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | PRODUCTTYPE          | INTEGER            | 產品型態                |    |
|     | PRODUCTKYC           | VARCHAR2(1 char)   | 產品風險等級              |    |
|     | MAINCUR              | VARCHAR2(3 char)   | 產品主要幣別              |    |
|     | SWITCHCUR            | VARCHAR2(3 char)   | 產品交換幣別              |    |
|     | QUOTEMETHOD          | VARCHAR2(6 char)   | 外匯選擇權組合             |    |
|     | SPOT                 | FLOAT              | 現匯價                 |    |
|     | STRIKE               | FLOAT              | 履約價(K)              |    |
|     | SPOTDAY              | DATE               | SPOT日期              |    |
|     | DEALDATE             | DATE               | 進場日                 |    |
|     | VALUEDATE            | DATE               | 起息日                 |    |
|     | FIXDATE              | DATE               | 決價日                 |    |
|     | EXPIRYDATE           | DATE               | 到期日                 |    |
|     | DEPORATE             | FLOAT              | 客戶牌告/議價利率           |    |
|     | DEPOPERIODUNIT       | VARCHAR2(1 char)   | 牌告/議價利率存期           |    |
|     | DEPOPERIODTYPE       | VARCHAR2(2 char)   | 牌告/議價利率期別           |    |
|     | DEPOAMOUNT           | FLOAT              | 客戶牌告/議價金額           |    |
|     | IAAMOUNT             | FLOAT              | 累計攤提利息              |    |
|     | CUSTOPTRATE          | FLOAT              | 客戶選擇權利率             |    |
|     | CUSTOPTAMOUNT        | FLOAT              | 客戶選擇權金額             |    |
|     | YIELDRATE            | FLOAT              | 客戶總收益率              |    |
|     | YIELDAMOUNT          | FLOAT              | 客戶總收益率金額            |    |
|     | BANKOPTRATE          | FLOAT              | 銀行選擇權利率             |    |
|     | BANKOPTAMOUNT        | FLOAT              | 銀行選擇權金額             |    |
|     | IFPROFESSIONAL       | VARCHAR2(1 char)   | 是否為專業投資人可購買         |    |
|     | NOTE                 | VARCHAR2(100 char) | 產品說明                |    |
|     | OBUDBU               | VARCHAR2(3 char)   | OBUDBU              |    |
|     | CUSTID               | VARCHAR2(11 char)  | 客戶統編/身份証字號          |    |
|     | CUSTTYPE             | INTEGER            | 客戶別                 |    |
|     | CUSTJOB              | VARCHAR2(6 char)   | 客戶行業別               |    |
|     | CUSTRISK             | VARCHAR2(2 char)   | 客戶投資風險屬性            |    |
|     | CUSTNAME             | VARCHAR2(40 char)  | 客戶姓名                |    |
|     | CURRENTACCOUNT       | VARCHAR2(13 char)  | 客戶活存帳號              |    |
|     | FIXEDACCOUNT         | VARCHAR2(13 char)  | 客戶定存帳號              |    |
|     | DEPORECEIPT          | VARCHAR2(8 char)   | 客戶存單號碼              |    |
|     | CUR                  | VARCHAR2(3 char)   | 投資幣別                |    |
|     | AMOUNT               | FLOAT              | 投資金額                |    |
|     | IFSEVENTY            | VARCHAR2(1 char)   | 是否符合70條款            |    |
|     | PROFESSIONALSTATUS   | VARCHAR2(1 char)   | 客戶專業投資人資格           |    |
|     | CUSTAGE              | INTEGER            | 年齡                  |    |
|     | FIXRATE              | FLOAT              | 決價匯率                |    |
|     | IFCONVERT            | INTEGER            | 是否轉換                |    |
|     | FINALCUR             | VARCHAR2(3 char)   | 本金入帳幣別              |    |
|     | FINALAMOUNT          | FLOAT              | 本金入帳金額              |    |
|     | TMUID                | VARCHAR2(10 char)  | TMU人員               |    |
|     | TMUIDPOSITION        | VARCHAR2(50 char)  | TMU職位               |    |
|     | CREATETIME           | DATE               | 建立時間                |    |
|     | BRANCHID             | VARCHAR2(10 char)  | 分行代號                |    |
|     | SALESID              | VARCHAR2(10 char)  | 分行理專代號              |    |
|     | SALESIDPOSITION      | VARCHAR2(50 char)  | 分行理專職位              |    |
|     | COMMENDID            | VARCHAR2(10 char)  | 分行轉介人員              |    |
|     | COMMENDIDPOSITION    | VARCHAR2(50 char)  | 分行轉介職位              |    |
|     | OPERATORID           | VARCHAR2(10 char)  | 分行作業人員代號            |    |
|     | OPERATORIDPOSITION   | VARCHAR2(50 char)  | 分行作業職位              |    |
|     | ORDERTIME            | DATE               | 建立時間                |    |
|     | MANAGERID            | VARCHAR2(10 char)  | 分行主管代號              |    |
|     | MANAGERIDPOSITION    | VARCHAR2(50 char)  | 分行主管職位              |    |
|     | RECHECKTIME          | DATE               | 建立時間                |    |
|     | FIXERID              | VARCHAR2(10 char)  | 決價人員代號              |    |
|     | FIXERIDPOSITION      | VARCHAR2(50 char)  | 決價人員職位              |    |
|     | FIXTIME              | DATE               | 建立時間                |    |
|     | PRODUCTSTATE         | INTEGER            | 產品情形                |    |
|     | IFBLOCK              | INTEGER            | 圈存結果                |    |
|     | IFFIXEDDEPO          | INTEGER            | 定存結果                |    |
|     | IFFIXEDDEPONOTE      | VARCHAR2(50 char)  | 定存結果說明              |    |
|     | IFFIX                | INTEGER            | 決價結果                |    |
|     | IFEXPIRY             | INTEGER            | 到期結果                |    |
|     | IFEXPIRYNOTE         | VARCHAR2(50 char)  | 到期結果說明              |    |
|     | IFEXPORT             | INTEGER            | 匯入中台情形              |    |
|     | PRINTSTATE           | INTEGER            | 列印情形                |    |
|     | PRINTTIME            | DATE               | 列印時間                |    |
|     | BREAKDATE            | DATE               | 解約日期                |    |
|     | BREAKFEE             | FLOAT              | 手續費                 |    |
|     | BREAKAMOUNT          | FLOAT              | 還本金額                |    |
|     | TAXRATE              | FLOAT              | 稅率                  |    |
|     | TAXCUR               | VARCHAR2(3 char)   | 稅額幣別                |    |
|     | FEEAMOUNT            | FLOAT              | 原幣所得總額              |    |
|     | TAXAMOUNT            | FLOAT              | 稅額金額                |    |
|     | TWDSPOT              | FLOAT              | 折台匯率                |    |
|     | FEEAMOUNTTWD         | FLOAT              | 台幣所得總額              |    |
|     | TAXAMOUNTTWD         | FLOAT              | 台幣稅額                |    |
|     | MTMPRICE             | FLOAT              | MTM評價               |    |
|     | OPTPROFIT            | FLOAT              | 損益報酬                |    |
|     | MTMSPOT              | FLOAT              | MTM評價Spot           |    |
|     | MTMVOL               | FLOAT              | MTM評價波動率            |    |
|     | VOL                  | FLOAT              | vol                 |    |
|     | BREAKEVEN            | FLOAT              | 損益兩平點               |    |
|     | BP                   | FLOAT              | B. P                 |    |
|     | MEAL                 | VARCHAR2(15 char)  | 套餐編號                |    |
|     | BOTHCONVERT          | INTEGER            | 是否本利轉               |    |
|     | BANKOPTAMOUNTSTATE   | INTEGER            | 銀行收益金額              |    |
|     | SOCKETSTATE          | INTEGER            | 通訊狀態                |    |
|     | EXTENDPID            | VARCHAR2(12 char)  | 繼作產品代號              |    |
|     | CONVAMOUNT           | FLOAT              | 轉換金額                |    |
|     | CONVYIELDAMOUNT      | FLOAT              | 收益轉換金額              |    |
|     | NETYIELDAMOUNT       | FLOAT              | 稅後收益金額              |    |
|     | CONVNETYIELDAMOUNT   | FLOAT              | 稅後收益轉換金額            |    |
|     | MAINACOTAMT          | FLOAT              | 主幣別實收金額             |    |
|     | CONVACOTAMT          | FLOAT              | 轉換幣別實收金額            |    |
|     | IFYNCREDIT           | VARCHAR2(1 char)   | 是否先佔用額度             |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_DCIMTMDATA

#### DCI_MTM資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
| PK  | TIME                 | DATE               | 日期時間                |    |
|     | MTMPRICE             | FLOAT              | MTM值                |    |
|     | MTMSPOT              | FLOAT              | MTM匯率值              |    |
|     | MTMVOL               | FLOAT              | MTMVOL值             |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_CCS

#### 衍生性金融商品(換匯換利)交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID              | VARCHAR2(20 char)  | 交易編號                |    |
|     | TRADETYPE            | NUMBER(1, 0)        | 產品類型                |    |
|     | TRADEDATE            | DATE               | 交易日期                |    |
|     | CONTRACTRATE         | NUMBER(12, 6)       | 合約匯率                |    |
|     | TENOR                | VARCHAR2(3 char)   | 產品期間                |    |
|     | AMTSWAP              | NUMBER(1, 0)        | 本金交換模式              |    |
|     | AMTSWAPD1            | DATE               | 期初本金交換日             |    |
|     | AMTSWAPD2            | DATE               | 期末本金交換日             |    |
|     | REVPAYMETHOD         | INTEGER            | 被報價幣別付息方向           |    |
|     | TRADEMETHOD          | INTEGER            | 本行利息收付類型            |    |
|     | REVCUR               | VARCHAR2(3 char)   | 被報價幣別               |    |
|     | REVAMT               | NUMBER(17, 2)       | 被報價幣別方名目本金          |    |
|     | REVSDATE             | DATE               | 被報價幣別方起始日           |    |
|     | REVEDATE             | DATE               | 被報價幣別方到期日           |    |
|     | REVFREQ              | VARCHAR2(5 char)   | 被報價幣別方付息頻率          |    |
|     | REVBASIS             | NUMBER(1, 0)        | 被報價幣別方計息基礎          |    |
|     | REVRATE              | NUMBER(7, 5)        | 被報價幣別方固定利率          |    |
|     | REVPOINTCURPERIOD    | VARCHAR2(15 char)  | 被報價幣別方浮動利率指標        |    |
|     | REVOVERCHARGE        | NUMBER(7, 5)        | 被報價幣別方浮動利率加碼        |    |
|     | PAYCUR               | VARCHAR2(3 char)   | 報價幣別                |    |
|     | PAYAMT               | NUMBER(17, 2)       | 報價幣別方名目本金           |    |
|     | PAYSDATE             | DATE               | 報價幣別方起始日            |    |
|     | PAYEDATE             | DATE               | 報價幣別方到期日            |    |
|     | PAYFREQ              | VARCHAR2(5 char)   | 報價幣別方付息頻率           |    |
|     | PAYBASIS             | NUMBER(1, 0)        | 報價幣別方計息基礎           |    |
|     | PAYRATE              | NUMBER(7, 5)        | 報價幣別方固定利率           |    |
|     | PAYPOINTCURPERIOD    | VARCHAR2(15 char)  | 報價幣別方浮動利率指標         |    |
|     | PAYOVERCHARGE        | NUMBER(7, 5)        | 報價幣別方浮動利率加碼         |    |
|     | PREMIUMDATE          | DATE               | 權利金交割日              |    |
|     | PREMIUMPAY           | NUMBER(1, 0)        | 權利金收付方向             |    |
|     | PREMIUMCUR           | VARCHAR2(3 char)   | 權利金幣別               |    |
|     | PREMIUMAMT           | NUMBER(17, 2)       | 權利金金額               |    |
|     | PROFITCUR            | VARCHAR2(3 char)   | Profit幣別            |    |
|     | PROFITAMT            | NUMBER(17, 2)       | Profit金額            |    |
|     | COSTCUR              | VARCHAR2(3 char)   | Cost幣別              |    |
|     | COSTAMT              | NUMBER(17, 2)       | Cost金額              |    |
|     | CUSTTYPE             | INTEGER            | 客戶類型                |    |
|     | BRANCHID             | VARCHAR2(4 char)   | 分行代碼                |    |
|     | CUSTID               | VARCHAR2(15 char)  | 客戶統編/SwiftCode      |    |
|     | CUSTACCOUNTREV       | VARCHAR2(15 char)  | 客戶被報價幣別活存帳號/存同      |    |
|     | CUSTACCOUNTPAY       | VARCHAR2(15 char)  | 客戶報價幣別活存帳號/存同       |    |
|     | CUSTACCOUNTPREM      | VARCHAR2(15 char)  | 客戶權利金幣別活存帳號/存同      |    |
|     | CREDITALLOWID        | VARCHAR2(12 char)  | 客戶額度批覆書號            |    |
|     | CREDITUSING          | NUMBER(17, 2)       | 交易佔用額度              |    |
|     | CREDITEXRATE         | NUMBER(12, 6)       | 名目本金幣別與額度幣別匯率       |    |
|     | CREDITMULTIPLE       | NUMBER(7, 5)        | 操作杆槓倍數              |    |
|     | AOID1                | VARCHAR2(5 char)   | AO1員編               |    |
|     | AORATIO1             | NUMBER(7, 4)        | AO1分潤比率             |    |
|     | AOID2                | VARCHAR2(5 char)   | AO2員編               |    |
|     | AORATIO2             | NUMBER(7, 4)        | AO2分潤比率             |    |
|     | CREATORID            | VARCHAR2(5 char)   | 交易建立人員ID            |    |
|     | CREATETIME           | DATE               | 交易建立日期              |    |
|     | TRADESTATE           | NUMBER(1, 0)        | 交易狀態                |    |
|     | NOTE                 | VARCHAR2(20 char)  | 備註                  |    |
|     | COPYFROM             | VARCHAR2(12 char)  | 拋補對應交易編號            |    |
|     | OBUDBU               | VARCHAR2(1 char)   | OBU/DBU             |    |
|     | CENTRALNO            | VARCHAR2(20 char)  | 客戶性質                |    |
|     | CENTRALSN            | VARCHAR2(16 char)  | 央媒編號                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_CCS_MTM

#### CCS評價資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                   | VARCHAR2(20 char)  | 交易代碼                |    |
| PK  | C2                   | VARCHAR2(15 char)  | 客戶ID                |    |
|     | C3                   | FLOAT              | MTM                 |    |
| PK  | C4                   | DATE               | 資料日期                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_CMO

#### 衍生性金融商品(商品選擇權)交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID              | VARCHAR2(12 char)  | 交易編號                |    |
|     | TRADEDATE            | DATE               | 交易日期                |    |
|     | CMTYPE               | NUMBER(1, 0)        | 標的物類別               |    |
|     | CMNAME               | VARCHAR2(15 char)  | 標的物名稱               |    |
|     | CMNUMBER             | NUMBER(7, 0)        | 標的物數量               |    |
|     | CMUNIT               | VARCHAR2(3 char)   | 標的物數量單位             |    |
|     | OPTTYPE              | NUMBER(1, 0)        | 選擇權類型               |    |
|     | TRADE_PERIOD_3M      | NUMBER(12, 6)       | 3MT                 |    |
|     | SPOT                 | NUMBER(12, 6)       | 即期參考匯率              |    |
|     | STRIKE               | NUMBER(12, 6)       | 履約匯率                |    |
|     | FIXRATE              | NUMBER(12, 6)       | 決價匯率                |    |
|     | PROFIT               | NUMBER(17, 2)       | 本行到期損益              |    |
|     | FIXINGBASIS          | NUMBER(1, 0)        | 決價基礎                |    |
|     | BASECUR              | VARCHAR2(3 char)   | 基礎幣別                |    |
|     | NOTIONALINUSD        | NUMBER(17, 2)       | 等值美金名目本金            |    |
|     | BUYSELL              | NUMBER(1, 0)        | 買/賣                 |    |
|     | CALLPUT              | NUMBER(1, 0)        | 選擇權型態               |    |
|     | EXPIRYDATE           | DATE               | 清算日期                |    |
|     | DELIVERYDATE         | DATE               | 交割日期                |    |
|     | PREMDATE             | DATE               | 權利金交割日              |    |
|     | PREMPAYREV           | NUMBER(1, 0)        | 權利金收付方向             |    |
|     | PREMCUR              | VARCHAR2(3 char)   | 權利金幣別               |    |
|     | PREMAMT              | NUMBER(17, 2)       | 權利金金額               |    |
|     | PROFITCUR            | VARCHAR2(3 char)   | Profit幣別            |    |
|     | PROFITAMT            | NUMBER(17, 2)       | Profit金額            |    |
|     | COSTCUR              | VARCHAR2(3 char)   | Cost幣別              |    |
|     | COSTAMT              | NUMBER(17, 2)       | Cost金額              |    |
|     | CUSTTYPE             | INTEGER            | 客戶類型                |    |
|     | BRANCHID             | VARCHAR2(4 char)   | 分行代碼                |    |
|     | CUSTID               | VARCHAR2(15 char)  | 客戶統編/SwiftCode      |    |
|     | CUSTACCOUNT          | VARCHAR2(15 char)  | 客戶帳號/對手存同行美金帳號      |    |
|     | CUSTACCOUNTTWD       | VARCHAR2(15 char)  | 客戶帳號/對手存同行臺幣帳號      |    |
|     | CUSTOBUDBU           | VARCHAR2(1 char)   | OBU/DBU             |    |
|     | CREDITALLOWID        | VARCHAR2(12 char)  | 客戶額度批覆書號            |    |
|     | CREDITUSING          | NUMBER(17, 2)       | 交易佔用額度              |    |
|     | CREDITEXRATE         | NUMBER(12, 6)       | 名目本金幣別與額度幣別匯率       |    |
|     | CREDITMULTIPLE       | NUMBER(7, 5)        | 操作杆槓倍數              |    |
|     | AOID1                | VARCHAR2(5 char)   | AO1員編               |    |
|     | AORATIO1             | NUMBER(7, 4)        | AO1分潤比率             |    |
|     | AOID2                | VARCHAR2(5 char)   | AO2員編               |    |
|     | AORATIO2             | NUMBER(7, 4)        | AO2分潤比率             |    |
|     | CREATORID            | VARCHAR2(5 char)   | 交易建立人員ID            |    |
|     | CREDITTIME           | DATE               | 交易建立日期              |    |
|     | TRADESTATE           | NUMBER(1, 0)        | 交易狀態                |    |
|     | NOTE                 | VARCHAR2(200 char) | 備註                  |    |
|     | COPYFROM             | VARCHAR2(12 char)  | 拋補對應交易編號            |    |
|     | COUNTS               | DATE               | 計算期間起日              |    |
|     | COUNTE               | DATE               | 計算期間迄日              |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_CMO_MTM

#### 商品選擇權評價資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                   | VARCHAR2(12 char)  | 群組ID                |    |
|     | C2                   | VARCHAR2(200 char) | 交易代碼(列表)            |    |
| PK  | C3                   | VARCHAR2(15 char)  | 客戶ID                |    |
|     | C4                   | FLOAT              | MTM                 |    |
| PK  | C5                   | DATE               | 資料日期                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_IRS

#### 衍生性金融商品(利率交換)交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID              | VARCHAR2(20 char)  | 交易編號                |    |
|     | TRADETYPE            | NUMBER(1, 0)        | 產品類型                |    |
|     | TRADEDATE            | DATE               | 交易日期                |    |
|     | TRADECUR             | VARCHAR2(3 char)   | 產品幣別                |    |
|     | TENOR                | VARCHAR2(3 char)   | 產品期間                |    |
|     | TRADEMETHOD          | INTEGER            | 本行利息收付類型            |    |
|     | AMOUNT               | NUMBER(17, 2)       | 名目本金                |    |
|     | REVSDATE             | DATE               | 本行付息端起始日            |    |
|     | REVEDATE             | DATE               | 本行付息端到期日            |    |
|     | REVFREQ              | VARCHAR2(5 char)   | 本行付息頻率              |    |
|     | REVBASIS             | NUMBER(1, 0)        | 本行付息端計息基礎           |    |
|     | REVRATE              | NUMBER(8, 6)        | 本行付息端固定利率           |    |
|     | REVINDICATORCURTENOR | VARCHAR2(15 char)  | 本行付息端浮動利率指標         |    |
|     | REVOVERCHARGE        | NUMBER(7, 5)        | 本行付息端浮動利率加碼         |    |
|     | PAYSDATE             | DATE               | 本行收息端起始日            |    |
|     | PAYEDATE             | DATE               | 本行收息端到期日            |    |
|     | PAYFREQ              | VARCHAR2(5 char)   | 本行收息頻率              |    |
|     | PAYBASIS             | NUMBER(1, 0)        | 本行收息端計息基礎           |    |
|     | PAYRATE              | NUMBER(8, 6)        | 本行收息端固定利率           |    |
|     | PAYINDICATORCURTENOR | VARCHAR2(15 char)  | 本行收息端浮動利率指標         |    |
|     | PAYOVERCHARGE        | NUMBER(7, 5)        | 本行收息端浮動利率加碼         |    |
|     | TMURP                | NUMBER(1, 0)        | 權利金收付方向             |    |
|     | TMUPROFITDATE        | DATE               | 權利金交割日              |    |
|     | TMUPROFITCUR         | VARCHAR2(3 char)   | 權利金幣別               |    |
|     | TMUPROFITAMT         | NUMBER(17, 2)       | 權利金金額               |    |
|     | PROFITCUR            | VARCHAR2(3 char)   | Profit幣別            |    |
|     | PROFITAMT            | NUMBER(17, 2)       | Profit金額            |    |
|     | COSTCUR              | VARCHAR2(3 char)   | Cost幣別              |    |
|     | COSTAMT              | NUMBER(17, 2)       | Cost金額              |    |
|     | OBUDBU               | VARCHAR2(1 char)   | OBU/DBU             |    |
|     | CUSTTYPE             | INTEGER            | 客戶類型                |    |
|     | BRANCHID             | VARCHAR2(4 char)   | 分行代碼                |    |
|     | CUSTID               | VARCHAR2(15 char)  | 客戶統編/SwiftCode      |    |
|     | CUSTACCOUNT          | VARCHAR2(15 char)  | 客戶帳號/對手存同行帳號(交易幣別)  |    |
|     | CUSTTMUACCOUNT       | VARCHAR2(15 char)  | 客戶帳號/對手存同行帳號(權利金幣別) |    |
|     | CREDITALLOWID        | VARCHAR2(12 char)  | 客戶額度批覆書號            |    |
|     | CREDITUSING          | NUMBER(17, 2)       | 交易佔用額度              |    |
|     | CREDITEXRATE         | NUMBER(12, 6)       | 名目本金幣別與額度幣別匯率       |    |
|     | CREDITMULTIPLE       | NUMBER(8, 5)        | 操作杆槓倍數              |    |
|     | AOID1                | VARCHAR2(5 char)   | AO1員編               |    |
|     | AORATIO1             | NUMBER(7, 4)        | AO1分潤比率             |    |
|     | AOID2                | VARCHAR2(5 char)   | AO2員編               |    |
|     | AORATIO2             | NUMBER(7, 4)        | AO2分潤比率             |    |
|     | CREATORID            | VARCHAR2(5 char)   | 交易建立人員ID            |    |
|     | CREATETIME           | DATE               | 交易建立日期              |    |
|     | TRADESTATE           | NUMBER(1, 0)        | 交易狀態                |    |
|     | NOTE                 | VARCHAR2(200 char) | 備註                  |    |
|     | COPYFROM             | VARCHAR2(12 char)  | 拋補對應交易編號            |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_IRS_MTM

#### IRS評價資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | C1                   | VARCHAR2(20 char)  | 交易代碼                |    |
| PK  | C2                   | VARCHAR2(15 char)  | 客戶ID                |    |
|     | C3                   | FLOAT              | MTM                 |    |
| PK  | C4                   | DATE               | 資料日期                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_GYRO_CRM_NDF

#### 衍生性金融商品(無本金交割遠期外匯交易)交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | TRADEID              | VARCHAR2(12 char)  | 交易編號                |    |
|     | BUSSINESSDATE        | DATE               | 營業日期                |    |
|     | TRADEDATE            | DATE               | 交易日期                |    |
|     | IFEXTEND             | NUMBER(1, 0)        | 是否為展期交易             |    |
|     | OLDTRADEID           | VARCHAR2(12 char)  | 展期原交易編號             |    |
|     | FIXINGDATE           | DATE               | 清算日期                |    |
|     | DELIVERYDATE         | DATE               | 交割日期                |    |
|     | COSTRATE             | NUMBER(12, 6)       | 議價成本匯率              |    |
|     | STRIKERATE           | NUMBER(12, 6)       | 議價成交匯率              |    |
|     | BUYSELL              | NUMBER(1, 0)        | 客戶預購預售              |    |
|     | TRADECUR1            | VARCHAR2(3 char)   | 預購/預售幣別             |    |
|     | AMOUNT1              | NUMBER(17, 2)       | 預購/預售金額             |    |
|     | TRADECUR2            | VARCHAR2(3 char)   | 相對幣別                |    |
|     | AMOUNT2              | NUMBER(17, 2)       | 相對金額                |    |
|     | FIXRATE              | NUMBER(12, 6)       | 決價匯率                |    |
|     | PROFIT               | NUMBER(17, 2)       | 本行損益                |    |
|     | PROFITCUR            | VARCHAR2(3 char)   | Profit幣別            |    |
|     | PROFITAMT            | NUMBER(17, 2)       | Profit金額            |    |
|     | COSTCUR              | VARCHAR2(3 char)   | Cost幣別              |    |
|     | COSTAMT              | NUMBER(17, 2)       | Cost金額              |    |
|     | CUSTTYPE             | NUMBER(1, 0)        | 客戶類型                |    |
|     | BRANCHID             | VARCHAR2(4 char)   | 分行代碼                |    |
|     | CUSTID               | VARCHAR2(15 char)  | 客戶統編/SwiftCode      |    |
|     | CUSTACCOUNT          | VARCHAR2(15 char)  | 客戶帳號/對手存同行美金帳號      |    |
|     | CUSTACCOUNTTWD       | VARCHAR2(15 char)  | 客戶帳號/對手存同行臺幣帳號      |    |
|     | CUSTOBUDBU           | VARCHAR2(1 char)   | OBU/DBU             |    |
|     | CREDITALLOWID        | VARCHAR2(12 char)  | 客戶額度批覆書號            |    |
|     | CREDITUSING          | NUMBER(17, 2)       | 交易佔用額度              |    |
|     | CREDITEXRATE         | NUMBER(12, 6)       | 名目本金幣別與額度幣別匯率       |    |
|     | CREDITMULTIPLE       | NUMBER(7, 5)        | 操作杆槓倍數              |    |
|     | AOID1                | VARCHAR2(5 char)   | AO1員編               |    |
|     | AORATIO1             | NUMBER(7, 4)        | AO1分潤比率             |    |
|     | AOID2                | VARCHAR2(5 char)   | AO2員編               |    |
|     | AORATIO2             | NUMBER(7, 4)        | AO2分潤比率             |    |
|     | CREATORID            | VARCHAR2(5 char)   | 交易建立人員ID            |    |
|     | CREDITTIME           | DATE               | 交易建立日期              |    |
|     | TRADESTATE           | NUMBER(1, 0)        | 交易狀態                |    |
|     | NOTE                 | VARCHAR2(200 char) | 備註                  |    |
|     | COPYFROM             | VARCHAR2(12 char)  | 拋補對應交易編號            |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_PRINSEVEN

#### DCI_保七交易檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRIN7PRODUCTID       | VARCHAR2(12 char)  | 產品代號                |    |
|     | PRIN7                | INTEGER            | 是否保七                |    |
|     | PRIN7CUR             | VARCHAR2(3 char)   | 保七幣別                |    |
|     | PRIN7AMOUNT          | NUMBER(18, 2)       | 保七金額                |    |
|     | PRIN7CALLCUR         | VARCHAR2(3 char)   | CALL幣別              |    |
|     | PRIN7CALLAMT         | NUMBER(18, 2)       | CALL金額              |    |
|     | PRIN7PUTCUR          | VARCHAR2(3 char)   | PUT幣別               |    |
|     | PRIN7PUTAMT          | NUMBER(18, 2)       | PUT金額               |    |
|     | PRIN7STRIKE          | NUMBER(18, 5)       | 履約價                 |    |
|     | PRIN7CUSTOPTCUR      | VARCHAR2(3 char)   | 客戶權利金幣別             |    |
|     | PRIN7CUSTOPTRATE     | NUMBER(18, 4)       | 客戶權利金比率             |    |
|     | PRIN7CUSTOPTAMOUNT   | NUMBER(18, 2)       | 客戶權利金金額             |    |
|     | PRIN7BANKOPTRATE     | NUMBER(18, 4)       | 銀行權利金比率             |    |
|     | PRIN7BANKOPTAMOUNT   | NUMBER(18, 2)       | 銀行權利金金額             |    |
|     | PRIN7IFCONVERT       | INTEGER            | 是否轉換                |    |
|     | PRIN7FINALCUR        | VARCHAR2(3 char)   | 最終幣別                |    |
|     | PRIN7FINALAMT        | NUMBER(18, 2)       | 最終金額                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSMTMDATA

#### SPS_MTM每月資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | MTMNUM               | INTEGER            | 流水號                 |    |
|     | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | MTMRATE              | NUMBER(18, 4)       | MTM比率               |    |
|     | MTMAMT               | NUMBER(18, 2)       | MTM金額               |    |
|     | CREDATE              | DATE               | 建立日期                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSPRODUCT

#### SPS_產品內容檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | TYPE                 | VARCHAR2(10 char)  | 類型                  |    |
|     | PRODUCTNAME          | VARCHAR2(100 char) | 產品名稱                |    |
|     | STARTDATE            | DATE               | 募集開始日               |    |
|     | ENDDATE              | DATE               | 募集結束日               |    |
|     | DEALSTARTDATE        | DATE               | 可申購開始日              |    |
|     | DEALENDDATE          | DATE               | 可申購結束日              |    |
|     | CUR                  | VARCHAR2(50 char)  | 投資幣別                |    |
|     | DEALAMOUNT           | NUMBER(18, 2)       | 最低申購金額              |    |
|     | ADDAMOUNT            | NUMBER(18, 2)       | 最低增加金額              |    |
|     | DEALDATE             | DATE               | 交易日                 |    |
|     | VALUEDATE            | DATE               | 起息日                 |    |
|     | TENOR                | VARCHAR2(10 char)  | 投資期間                |    |
|     | EXPIRYDATE           | DATE               | 到期日                 |    |
|     | PERIODTENOR          | VARCHAR2(10 char)  | 配息方式(支付頻率)          |    |
|     | PERIODNUM            | INTEGER            | 配息次數                |    |
|     | DEPOTYPE             | VARCHAR2(10 char)  | 計息基礎                |    |
|     | WORKDAYSTR           | VARCHAR2(50 char)  | 營業日                 |    |
|     | PRODUCTMODE          | VARCHAR2(10 char)  | 產品模式                |    |
|     | INDEXSEL             | INTEGER            | 連結指標                |    |
|     | YIELDRATE            | NUMBER(18, 4)       | 商品收益率               |    |
|     | CHARGERATE           | NUMBER(18, 4)       | 申購手續費率              |    |
|     | EARLYEXPIRYDATE      | DATE               | 提前到期起日              |    |
|     | EARLYSTOPDATE        | DATE               | 提前終止起日              |    |
|     | ROWLIST              | INTEGER            | 情境分析列數              |    |
|     | COUNLIST             | INTEGER            | 情境分析行數              |    |
|     | RECNUMBER            | VARCHAR2(50 char)  | 產品錄音編號              |    |
|     | PK                   | VARCHAR2(100 char) | 風險等級分類              |    |
|     | PKFOR                | VARCHAR2(50 char)  | 客戶風險屬性              |    |
|     | PERIODNAME           | VARCHAR2(50 char)  | 月、季、年               |    |
|     | PERIODYEARDATE       | VARCHAR2(50 char)  | 每年配息日期              |    |
|     | SUCCEED              | INTEGER            | 產品狀態                |    |
|     | TOTALAMOUNT          | NUMBER(18, 2)       | 募集總金額               |    |
|     | TMUID                | VARCHAR2(10 char)  | 建立者ID               |    |
|     | TMUIDPOSITION        | VARCHAR2(50 char)  | 建立者角色               |    |
|     | CREATETIME           | DATE               | 建產品日期               |    |
|     | DEPOTYPESTR          | VARCHAR2(50 char)  | 牌告字串                |    |
|     | NNOTE                | VARCHAR2(100 char) | 情境分析表頭說明            |    |
|     | BANKPROFIT           | NUMBER(18, 4)       | 銀行間收益金額             |    |
|     | LIBORTENOR           | VARCHAR2(50 char)  | LIBOR期間             |    |
|     | LIBORBP              | NUMBER(18, 12)      | LIBORBP值            |    |
|     | LIBORVALUE           | NUMBER(18, 5)       | LIBOR值              |    |
|     | PRODUCTTYPE          | INTEGER            | 產品交易類型              |    |
|     | PRODUCTCLASS         | INTEGER            | 產品類別                |    |
|     | POINTRISKCLASS       | VARCHAR2(1 char)   | 風險類別                |    |
|     | EXCERCISEPRICE       | FLOAT              | 覆約價                 |    |
|     | EXCERCISEAMOUNT      | INTEGER            | 覆約金額                |    |
|     | ASSETSDETAIL         | VARCHAR2(120 char) | 申報屬性                |    |
|     | PRODRISKI            | VARCHAR2(2 char)   | 屬性設定I               |    |
|     | PRODRISKII           | FLOAT              | 屬性設定II              |    |
|     | SOFRSPREAD           | FLOAT              | SofrSpread          |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSPRODUCTCCS

#### Product CCS
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(12 char)  | 商品代碼                |    |
|     | REVCUR               | VARCHAR2(3 char)   | 對上手收息端：幣別           |    |
|     | REVAMT               | FLOAT              | 對上手收息端：名目本金         |    |
|     | PAYCUR               | VARCHAR2(3 char)   | 對上手付息端：幣別           |    |
|     | PAYAMT               | FLOAT              | 對上手付息端：名目本金         |    |
|     | EXRATE               | FLOAT              | 合約匯率                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSPRODUCTINFO

#### SPS系統產品訊息
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PROID                | VARCHAR2(15 char)  | 商品代碼                |    |
|     | TARGETTYPE           | VARCHAR2(3 char)   | 產品類型                |    |
|     | BANKACCXBU           | VARCHAR2(1 char)   | 上手端會計帳類別            |    |
|     | IFPAYONCE            | VARCHAR2(1 char)   | 是否為到期一次付息產品         |    |
|     | IFTAILOR             | VARCHAR2(1 char)   | 是否為客製化產品            |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSPRODUCTNOTE

#### SPS系統產品說明
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(20 char)  | 產品代號                |    |
|     | ACOTSTATE            | VARCHAR2(1 char)   | 上手端會計帳是否出帳          |    |
|     | LIBORTYPE            | VARCHAR2(50 char)  | 資金成本類別              |    |
|     | LIBORTYPESTR         | VARCHAR2(50 char)  | 資金成本期間              |    |
|     | LIBORDEPOTYPE        | VARCHAR2(20 char)  | 上手端計息基礎             |    |
|     | CHKRISK              | VARCHAR2(10 char)  | 商品客群                |    |
|     | CHKDO                | VARCHAR2(10 char)  | 商品允許下單客戶之類別         |    |
|     | CHKLOOK              | VARCHAR2(10 char)  | 商品是否有審閱期            |    |
|     | SHOWACC              | VARCHAR2(10 char)  | 上手帳務類別              |    |
|     | TOTALRATE            | FLOAT              | 累績目標                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSREC

#### SPS_交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(11 char)  | 產品代號                |    |
| PK  | SN                   | VARCHAR2(4 char)   | 申購序號                |    |
| PK  | RECID                | VARCHAR2(50 char)  | 申購代號                |    |
|     | CUSTID               | VARCHAR2(50 char)  | 客戶ID                |    |
|     | CUSTNAME             | VARCHAR2(50 char)  | 客戶名稱                |    |
|     | CID                  | VARCHAR2(50 char)  | 活存帳號                |    |
|     | DEALCUR              | VARCHAR2(50 char)  | 申購幣別                |    |
|     | AMOUNT               | NUMBER(18, 2)       | 申購金額                |    |
|     | INTRANS              | INTEGER            | 申購狀態                |    |
|     | RECNOTE              | VARCHAR2(50 char)  | 申購錯誤時的說明            |    |
|     | BRANCHID             | VARCHAR2(10 char)  | 分行別                 |    |
|     | SALESID              | VARCHAR2(10 char)  | 銷售人員代號              |    |
|     | SALESIDPOSITION      | VARCHAR2(50 char)  | 銷售人員角色              |    |
|     | COMMENDID            | VARCHAR2(10 char)  | 轉介人員代號              |    |
|     | COMMENDIDPOSITION    | VARCHAR2(50 char)  | 轉介人員角色              |    |
|     | OPERATORID           | VARCHAR2(10 char)  | 申購人員代號              |    |
|     | OPERATORIDPOSITION   | VARCHAR2(50 char)  | 申購人員角色              |    |
|     | ORDERTIME            | DATE               | 申購日期                |    |
|     | MANAGERID            | VARCHAR2(10 char)  | 申購主管代號              |    |
|     | MANAGERIDPOSITION    | VARCHAR2(50 char)  | 申購主管角色              |    |
|     | RECHECKTIME          | DATE               | 覆核日期                |    |
|     | LOOKSTARTDATE        | DATE               | 審閱開始日               |    |
|     | LOOKENDDATE          | DATE               | 審閱結束日               |    |
|     | AMTSOURCE            | VARCHAR2(50 char)  | 資金來源                |    |
|     | ADDRESS              | VARCHAR2(500 char) | 地址                  |    |
|     | IFPROFESSIONAL       | VARCHAR2(50 char)  | 專業投資人               |    |
|     | HOLDSEQ              | VARCHAR2(21 char)  | 圈存序號                |    |
|     | FIXCID               | VARCHAR2(13 char)  | 定存帳號                |    |
|     | OBUDBU               | VARCHAR2(50 char)  | OBU/DBU             |    |
|     | CHARGERATE           | NUMBER(18, 4)       | 手續費率                |    |
|     | TERMINATIONDATE      | DATE               | 中解日期                |    |
|     | TFEE                 | NUMBER(18, 2)       | 中解手續費               |    |
|     | TAMTRATE             | NUMBER(18, 4)       | 中解還本比率              |    |
|     | TAMT                 | NUMBER(18, 2)       | 中解還本金額              |    |
|     | TYIELDAMT            | NUMBER(18, 2)       | 中解收益金額              |    |
|     | TTAXAMT              | NUMBER(18, 2)       | 中解稅額金額              |    |
|     | TYIELDAMTTWD         | NUMBER(18, 0)       | 中解收益台幣金額            |    |
|     | TTAXAMTTWD           | NUMBER(18, 0)       | 中解稅額台幣金額            |    |
|     | TSPOT                | NUMBER(18, 6)       | 中解匯率                |    |
|     | ISFIX                | INTEGER            | 是否決價                |    |
|     | ISPERIOD             | INTEGER            | 是否配息                |    |
|     | PERIODNOTE           | VARCHAR2(100 char) | 備註說明                |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSSETTLE

#### SPS_決價內容
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SN                   | INTEGER            | 流水號                 |    |
|     | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | NUMID                | INTEGER            | 配息次數                |    |
|     | FIXDATE              | DATE               | 決價日                 |    |
|     | PERIODDATE           | DATE               | 配息日                 |    |
|     | YIELDDAY             | INTEGER            | 收益天數                |    |
|     | YIELDRATE            | NUMBER(18, 6)       | 收益率                 |    |
|     | TOTYIELDAMT          | NUMBER(18, 2)       | 收益金額                |    |
|     | IFEXPIRY             | VARCHAR2(1 char)   | 是否提前到期              |    |
|     | FIXERID              | VARCHAR2(10 char)  | 決價人員ID              |    |
|     | FIXERIDPOSITION      | VARCHAR2(50 char)  | 決價人員角色              |    |
|     | FIXTIME              | DATE               | 決價日期                |    |
|     | LOOKTENOR            | VARCHAR2(100 char) | 本期觀察期間              |    |
|     | DEPODAYS             | INTEGER            | 應計天數                |    |
|     | LIBOR                | NUMBER(20, 8)       | LIBOR值              |    |
|     | BP                   | NUMBER(20, 12)      | BP值                 |    |
|     | LIBORBP              | NUMBER(20, 12)      | LIBOR+BP值           |    |
|     | LIBORAMT             | NUMBER(18, 2)       | LIBOR金額             |    |
|     | YIELDDAYFILE         | INTEGER            | 總天數                 |    |
|     | DEPODAYSFILE         | INTEGER            | 應計天數                |    |
|     | SOFRSPREAD           | FLOAT              | SofrSpread          |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_SPSSETTLEREC

#### SPS_決價交易明細內容
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | SN                   | INTEGER            | 流水號                 |    |
|     | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | NUMID                | INTEGER            | 配息次數                |    |
|     | RECID                | VARCHAR2(50 char)  | 申購代號                |    |
|     | YIELDAMT             | NUMBER(18, 2)       | 收益金額                |    |
|     | TAXRATE              | NUMBER(18, 4)       | 稅率                  |    |
|     | TAXAMT               | NUMBER(18, 2)       | 稅額                  |    |
|     | INAMT                | NUMBER(18, 2)       | 實際入帳金額              |    |
|     | YIELDAMTTWD          | NUMBER(18, 0)       | 收益台幣金額              |    |
|     | TAXAMTTWD            | NUMBER(18, 0)       | 稅額台幣金額              |    |
|     | SPOT                 | NUMBER(18, 6)       | 匯率                  |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |    |

### VW_ODS_D_TMUPRODUCT

#### DCI_DCI交易資料檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | PRODUCTID            | VARCHAR2(12 char)  | 產品代號                |    |
|     | PRODUCTNAME          | VARCHAR2(40 char)  | 產品名稱                |    |
|     | PRODUCTTYPE          | INTEGER            | 產品型態                |    |
|     | PRODUCTKYC           | VARCHAR2(1 char)   | 產品風險等級              |    |
|     | MAINCUR              | VARCHAR2(3 char)   | 產品主要幣別              |    |
|     | SWITCHCUR            | VARCHAR2(3 char)   | 產品交換幣別              |    |
|     | QUOTEMETHOD          | VARCHAR2(6 char)   | 外匯選擇權組合             |    |
|     | SPOT                 | FLOAT              | 現匯價                 |    |
|     | STRIKE               | FLOAT              | 履約價(K)              |    |
|     | DEALDATE             | DATE               | 進場日                 |    |
|     | VALUEDATE            | DATE               | 起息日                 |    |
|     | FIXDATE              | DATE               | 決價日                 |    |
|     | EXPIRYDATE           | DATE               | 到期日                 |    |
|     | DEPORATE             | FLOAT              | 客戶牌告/議價利率           |    |
|     | NEGOTIATEID          | VARCHAR2(4 char)   | 議價編號                |    |
|     | DEPOPERIODUNIT       | VARCHAR2(1 char)   | 牌告/議價利率存期           |    |
|     | DEPOPERIODTYPE       | VARCHAR2(2 char)   | 牌告/議價利率期別           |    |
|     | DEPOAMOUNT           | FLOAT              | 客戶牌告/議價金額           |    |
|     | CUSTOPTRATE          | FLOAT              | 客戶選擇權利率             |    |
|     | CUSTOPTAMOUNT        | FLOAT              | 客戶選擇權金額             |    |
|     | GUARDRATE            | VARCHAR2(20 char)  | 客戶保本型最低最高收益率        |    |
|     | YIELDRATE            | FLOAT              | 客戶總收益率              |    |
|     | YIELDAMOUNT          | FLOAT              | 客戶總收益率金額            |    |
|     | BANKOPTRATE          | FLOAT              | 銀行選擇權利率             |    |
|     | BANKOPTAMOUNT        | FLOAT              | 銀行選擇權金額             |    |
|     | OPTTYPE              | INTEGER            | 選擇權類型               |    |
|     | OPTCONTENT           | VARCHAR2(10 char)  | 內容類型                |    |
|     | UPDOWN               | VARCHAR2(10 char)  | UP/DOWN             |    |
|     | KOKINAME1            | VARCHAR2(10 char)  | KOKI名稱1             |    |
|     | KOKINAME2            | VARCHAR2(10 char)  | KOKI名稱2             |    |
|     | KOKIVALUE1           | FLOAT              | KOKI值1              |    |
|     | KOKIVALUE2           | FLOAT              | KOKI值2              |    |
|     | PAYOFF               | FLOAT              | PayOff值             |    |
|     | KOKIDATE             | DATE               | KOKI日期              |    |
|     | IFPROFESSIONAL       | VARCHAR2(1 char)   | 是否為專業投資人可購買         |    |
|     | NOTE                 | VARCHAR2(100 char) | 產品說明                |    |
|     | OBUDBU               | VARCHAR2(3 char)   | OBUDBU              |    |
|     | CUSTID               | VARCHAR2(11 char)  | 客戶統編/身份証字號          |    |
|     | CUSTTYPE             | INTEGER            | 客戶別                 |    |
|     | CUSTJOB              | VARCHAR2(6 char)   | 客戶職業                |    |
|     | CUSTRISK             | VARCHAR2(2 char)   | 客戶投資風險屬性            |    |
|     | CUSTNAME             | VARCHAR2(40 char)  | 客戶姓名                |    |
|     | CURRENTACCOUNT       | VARCHAR2(13 char)  | 客戶活存帳號              |    |
|     | FIXEDACCOUNT         | VARCHAR2(13 char)  | 客戶定存帳號              |    |
|     | DEPORECEIPT          | VARCHAR2(8 char)   | 客戶存單號碼              |    |
|     | CUR                  | VARCHAR2(3 char)   | 投資幣別                |    |
|     | AMOUNT               | FLOAT              | 投資金額                |    |
|     | IFSEVENTY            | VARCHAR2(1 char)   | 是否符合70條款            |    |
|     | PROFESSIONALSTATUS   | VARCHAR2(1 char)   | 客戶專業投資人資格           |    |
|     | CUSTAGE              | INTEGER            | 年齡                  |    |
|     | FIXRATE              | FLOAT              | 決價匯率                |    |
|     | IFCONVERT            | INTEGER            | 是否轉換                |    |
|     | IFTOUCH              | VARCHAR2(1 char)   | 是否觸及                |    |
|     | FINALCUR             | VARCHAR2(3 char)   | 本金入帳幣別              |    |
|     | FINALAMOUNT          | FLOAT              | 本金入帳金額              |    |
|     | TMUID                | VARCHAR2(10 char)  | TMU人員               |    |
|     | TMUIDPOSITION        | VARCHAR2(50 char)  | TMU人員角色             |    |
|     | CREATETIME           | VARCHAR2(14 char)  | 建立時間                |    |
|     | BRANCHID             | VARCHAR2(10 char)  | 分行代號                |    |
|     | SALESID              | VARCHAR2(10 char)  | 分行理專代號              |    |
|     | SALESIDPOSITION      | VARCHAR2(50 char)  | 分行理專角色              |    |
|     | COMMENID             | VARCHAR2(10 char)  | 分行轉介人員              |    |
|     | COMMENDIDPOSITION    | VARCHAR2(50 char)  | 分行轉介角色              |    |
|     | OPERATORID           | VARCHAR2(10 char)  | 分行作業人員代號            |    |
|     | OPERATORIDPOSITION   | VARCHAR2(50 char)  | 分行作業人員角色            |    |
|     | ORDERTIME            | VARCHAR2(14 char)  | 建立時間                |    |
|     | MANAGERID            | VARCHAR2(10 char)  | 分行主管代號              |    |
|     | MANAGERIDPOSITION    | VARCHAR2(50 char)  | 分行主管角色              |    |
|     | RECHECKTIME          | VARCHAR2(14 char)  | 建立時間                |    |
|     | FIXERID              | VARCHAR2(10 char)  | 決價人員代號              |    |
|     | FIXERIDPOSITION      | VARCHAR2(50 char)  | 決價人員角色              |    |
|     | FIXTIME              | VARCHAR2(14 char)  | 建立時間                |    |
|     | PRODUCTSTATE         | INTEGER            | 產品情形                |    |
|     | IFBLOCK              | INTEGER            | 圈存結果                |    |
|     | IFFIXEDDEPO          | INTEGER            | 定存結果                |    |
|     | IFFIXEDDEPONOTE      | VARCHAR2(50 char)  | 定存結果說明              |    |
|     | IFFIX                | INTEGER            | 決價結果                |    |
|     | IFEXPIRY             | INTEGER            | 到期結果                |    |
|     | IFEXPIRYNOTE         | VARCHAR2(50 char)  | 到期結果說明              |    |
|     | IFEXPORT             | INTEGER            | 匯入中台情形              |    |
|     | PRINTSTATE           | INTEGER            | 列印情形                |    |
|     | PRINTTIME            | VARCHAR2(14 char)  | 列印時間                |    |
|     | BREAKDATE            | DATE               | 解約日期                |    |
|     | BREAKFEE             | FLOAT              | 手續費                 |    |
|     | BREAKAMOUNT          | FLOAT              | 還本金額                |    |
|     | TAXRATE              | FLOAT              | 稅率                  |    |
|     | TAXCUR               | VARCHAR2(3 char)   | 稅額幣別                |    |
|     | TAXAMOUNT            | FLOAT              | 稅額金額                |    |
|     | FEEAMOUNT            | FLOAT              | 所得總額                |    |
|     | FEEAMOUNTTWD         | FLOAT              | 台幣所得總額              |    |
|     | TAXAMOUNTTWD         | FLOAT              | 台幣稅額                |    |
|     | MTMPRICE             | FLOAT              | MTM評價               |    |
|     | OPTPROFIT            | FLOAT              | 損益報酬                |    |
|     | MTMSPOT              | FLOAT              | MTM評價Spot           |    |
|     | MTMVOL               | FLOAT              | MTM評價波動率            |    |
|     | IAAMOUNT             | FLOAT              | 累計攤提利息              |    |
|     | TWDSPOT              | FLOAT              | 台幣匯率                |    |
|     | BOTHCONVERT          | FLOAT              | 是否齊轉                |    |
|     | EXTENDPID            | VARCHAR2(12 char)  | PID                 |    |
|     | SOCKETSTATE          | INTEGER            | 通訊狀態                |    |
|     | CONVAMOUNT           | FLOAT              | 轉換金額                |    |
|     | CONVYIELDAMOUNT      | FLOAT              | 轉換收益金額              |    |
|     | NETYIELDAMOUNT       | FLOAT              | 稅後收益金額              |    |
|     | CONVNETYIELDAMOUNT   | FLOAT              | 轉換稅後收益金額            |    |
|     | MAINACOTAMT          | FLOAT              | 主幣別實收金額             |    |
|     | CONVACOTAMT          | FLOAT              | 轉換幣別實收金額            |    |
|     | IFYNCREDIT           | VARCHAR2(1 char)   | 判斷是否先佔額度            |    |
|     | OPTFEE               | FLOAT              | 權利金價差               |    |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間              |
