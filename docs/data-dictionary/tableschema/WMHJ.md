---
sidebar_position: 52
title: 信託_海外股票系統(WMHJ)
---

### VW_ODS_D_BDS010

#### 債券基本檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDA01       | VARCHAR2(12 char) | 債券代碼            |    |
|     | BDA02       | VARCHAR2(2 char)  | 種類代碼            |    |
|     | BDA03       | VARCHAR2(78 char) | BONDDESCRIPTION |    |
|     | BDA04       | VARCHAR2(20 char) | 債券簡稱            |    |
|     | BDA05       | VARCHAR2(20 char) | 保證機構            |    |
|     | BDA07       | VARCHAR2(20 char) | 發行機構            |    |
|     | BDA06       | VARCHAR2(7 char)  | 優先上手            |    |
|     | BDA08       | DATE              | 發行日期            |    |
|     | BDA23       | DATE              | 到期日期            |    |
|     | BDA18       | NUMBER(13, 0)      | 發行金額            |    |
|     | BDA28       | VARCHAR2(3 char)  | 幣別代號            |    |
|     | BDA46       | DATE              | 開始報價日           |    |
|     | BDA14       | NUMBER(9, 0)       | 票面價格            |    |
|     | BDA34       | NUMBER(9, 0)       | 報價單位            |    |
|     | BDA13       | NUMBER(9, 0)       | 殘餘時間票面          |    |
|     | BDA36       | VARCHAR2(1 char)  | 報價方式            |    |
|     | BDA11       | NUMBER(8, 6)       | 利率              |    |
|     | BDA19       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA24       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA30       | DATE              | 開始付息日           |    |
|     | BDA26       | DATE              | 上一次付息日          |    |
|     | BDA27       | DATE              | 下一次付息日          |    |
|     | BDA12       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA10       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA32       | VARCHAR2(12 char) | ISIN-CODE       |    |
|     | BDA33       | VARCHAR2(9 char)  | CUSIP-CODE      |    |
|     | BDA21       | VARCHAR2(4 char)  | CBC台幣M3代碼       |    |
|     | BDA22       | VARCHAR2(15 char) | 公會基金代碼          |    |
|     | BDA25       | VARCHAR2(6 char)  | 保留欄位            |    |
|     | BDA29       | NUMBER(13, 0)      | 最低申購金額          |    |
|     | BDA35       | VARCHAR2(1 char)  | 結束碼             |    |
|     | BDA17       | NUMBER(3, 0)       | 贖回限制            |    |
|     | BDA37       | VARCHAR2(1 char)  | 單位              |    |
|     | BDA38       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA39       | NUMBER(7, 5)       | 優惠類別            |    |
|     | BDA43       | NUMBER(5, 2)       | 存續期間            |    |
|     | BDA44       | VARCHAR2(3 char)  | 國別              |    |
|     | BDA45       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDA15       | NUMBER(7, 5)       | 圈存倍數            |    |
|     | BDA16       | VARCHAR2(16 char) | ENGLISHNAME     |    |
|     | BDA51       | VARCHAR2(4 char)  | 公會基金公司代碼        |    |
|     | BDA52       | NUMBER(13, 0)      | 最低申購累績金額        |    |
|     | BDA53       | NUMBER(13, 0)      | 最低贖回金額          |    |
|     | BDA54       | NUMBER(13, 0)      | 最低贖回累績金額        |    |
|     | BD010       | VARCHAR2(50 char) | 優惠類別            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS019

#### 債券附加檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDAS1       | VARCHAR2(12 char) | 債券代碼            |    |
|     | BDAS0       | NUMBER(2, 0)       | 還本次數（次）         |    |
|     | BDAS2       | DATE              | 開始還本日期          |    |
|     | BDAS3       | DATE              | 上次還本日           |    |
|     | BDAS4       | DATE              | 下次還本日           |    |
|     | BDAS5       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDAS6       | NUMBER(3, 0)       | 保管費限制           |    |
|     | BDAS7       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDAS8       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDAS9       | NUMBER(13, 0)      | 最低申購下單金額        |    |
|     | BDASA       | NUMBER(13, 0)      | 最低申購累績金額        |    |
|     | BDASB       | NUMBER(13, 0)      | 最低贖回下單金額        |    |
|     | BDASC       | NUMBER(13, 0)      | 最低贖回累績金額        |    |
|     | BDASD       | NUMBER(5, 2)       | 保本比率            |    |
|     | BDASE       | NUMBER(5, 2)       | 參與率             |    |
|     | BDASF       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDASG       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDASH       | DATE              | 期初評價日           |    |
|     | BDASI       | DATE              | 期末評價日           |    |
|     | BDASJ       | VARCHAR2(1 char)  | NAV報價           |    |
|     | BDASK       | DATE              | 首次買回權行使日        |    |
|     | BDASL       | VARCHAR2(1 char)  | W-8BEN確認        |    |
|     | BDASM       | VARCHAR2(1 char)  | 遠匯操作            |    |
|     | BDASN       | DATE              | 提前買回基準日         |    |
|     | BDASO       | DATE              | 提前到期執行日         |    |
|     | BDASP       | VARCHAR2(48 char) | 債券全名            |    |
|     | BDASQ       | DATE              | 贖回開放日           |    |
|     | BDASV       | NUMBER(3, 0)       | 交割天數            |    |
|     | BDASW       | NUMBER(3, 0)       | 扣款天數            |    |
|     | BDASX       | NUMBER(3, 0)       | 匯款天數            |    |
|     | BDASR       | DATE              | 加碼起日            |    |
|     | BDASS       | DATE              | 加碼迄日            |    |
|     | BDAST       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDASU       | NUMBER(8, 6)       | 加碼利率            |    |
|     | BDASY       | VARCHAR2(1 char)  | 信託業務別           |    |
|     | BD019       | VARCHAR2(50 char) | 優惠類別            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS030

#### 債券種類檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDC01       | VARCHAR2(2 char)  | 種類代碼            |    |
|     | BDC02       | VARCHAR2(22 char) | 種類名稱            |    |
|     | BD030       | VARCHAR2(20 char) | 優惠類別            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS052

#### 收盤價檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDEB2       | VARCHAR2(12 char) | 債券代號            |    |
| PK  | BDEB3       | DATE              | 議價日期            |    |
|     | BDEB4       | NUMBER(19, 0)      | 賣出價             |    |
|     | BDEB5       | NUMBER(19, 0)      | 買進價             |    |
|     | BD052       | VARCHAR2(50 char) | 預留欄位            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS055

#### 債券信評檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDEE1       | VARCHAR2(12 char) | 債券代碼            |    |
| PK  | BDEE2       | VARCHAR2(7 char)  | 信評機構代碼          |    |
|     | BDEE3       | VARCHAR2(6 char)  | 信評等級            |    |
|     | BD055       | VARCHAR2(10 char) | 預留欄位            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS120

#### 信託資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BDAB1       | VARCHAR2(14 char) | 委託單號            |    |
|     | BDAB3       | VARCHAR2(12 char) | 債券代號            |    |
|     | BDAB6       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDAB2       | DATE              | 委託日期            |    |
|     | BDAB0       | NUMBER(6, 0)       | 委託時間            |    |
|     | BDAB5       | VARCHAR2(12 char) | 身分證/統一編號        |    |
|     | BDAB7       | NUMBER(11, 0)      | 委託面額            |    |
|     | BDAB8       | NUMBER(13, 4)      | 委託單位            |    |
|     | BDAB4       | VARCHAR2(4 char)  | 入帳分行            |    |
|     | BDABA       | VARCHAR2(10 char) | 推廣員工            |    |
|     | BDABB       | VARCHAR2(1 char)  | 委託中止            |    |
|     | BDABC       | VARCHAR2(7 char)  | 上手編號            |    |
|     | BDABD       | VARCHAR2(10 char) | 授權主管            |    |
|     | BDAB9       | NUMBER(5, 4)       | 分行分配比率          |    |
|     | BDABE       | NUMBER(19, 9)      | 限價              |    |
|     | BDAB11      | NUMBER(5, 2)       | 殖利率限價           |    |
|     | BDABF       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDABH       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDABI       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDABV       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDABP       | NUMBER(13, 4)      | 預估成交金額          |    |
|     | BDABM       | NUMBER(9, 2)       | 預估手續費           |    |
|     | BDABN       | NUMBER(9, 2)       | 預估前手息           |    |
|     | BDABO       | NUMBER(9, 2)       | 預估交易稅           |    |
|     | BDABQ       | NUMBER(9, 2)       | 預估其他費用          |    |
|     | BDABS       | NUMBER(13, 4)      | 預估收付金額原幣        |    |
|     | BDABU       | NUMBER(13, 4)      | 預估收付金額台幣        |    |
|     | BDABT       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDABG       | VARCHAR2(14 char) | 下單編號            |    |
|     | BDABJ       | VARCHAR2(14 char) | 買進成交單號          |    |
|     | BDABK       | NUMBER(3, 0)       | 分配順序            |    |
|     | BDABR       | NUMBER(19, 9)      | 委託匯率            |    |
|     | BDAB12      | VARCHAR2(8 char)  | 手續費率            |    |
|     | BDAB13      | VARCHAR2(14 char) | 買進委託單號          |    |
|     | BDAB10      | VARCHAR2(1 char)  | 議價              |    |
|     | BD120       | VARCHAR2(16 char) | 信託帳號            |    |
|     | BDABW       | VARCHAR2(3 char)  | 扣帳銀行            |    |
|     | BDABY       | VARCHAR2(15 char) | 扣帳帳號            |    |
|     | BDAB15      | VARCHAR2(3 char)  | 入帳銀行            |    |
|     | BDAB16      | VARCHAR2(15 char) | 入帳帳號            |    |
|     | BDAB17      | VARCHAR2(10 char) | 分行審核主管          |    |
|     | BDAB18      | DATE              | 分行審核日期          |    |
|     | BDAB19      | VARCHAR2(10 char) | 信託審核主管          |    |
|     | BDAB20      | VARCHAR2(8 char)  | B扣款S有效          |    |
|     | BDAB21      | VARCHAR2(5 char)  | 身份種類            |    |
|     | BDABL       | NUMBER(3, 0)       | 圈存天數            |    |
|     | BDAB22      | VARCHAR2(7 char)  | 保管機構            |    |
|     | BDAB23      | NUMBER(3, 0)       | 勾選碼             |    |
|     | BDABX       | VARCHAR2(4 char)  | 員工分行            |    |
|     | BDABZ       | VARCHAR2(10 char) | 理財專員            |    |
|     | BD120A      | VARCHAR2(34 char) | 預留欄位            |    |
|     | MTIME       | NUMBER(6, 0)       | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MPGM        | VARCHAR2(10 char) | 維護程式            |    |
|     | MUSR        | VARCHAR2(10 char) | 維護者             |    |
|     | BDAB24      | VARCHAR2(5 char)  | 專案代碼            |    |
|     | BDAB25      | VARCHAR2(5 char)  | 優惠代碼            |    |
|     | BD120B      | VARCHAR2(21 char) | 主機交易序號          |    |
|     | BD120C      | VARCHAR2(4 char)  | 回應代碼            |    |
|     | BDABZA      | VARCHAR2(10 char) | 理財顧問            |    |
|     | BD120D      | VARCHAR2(40 char) | 預留欄位            |    |
|     | BDAB26      | DATE              | 委託終止日           |    |
|     | SOURCE      | VARCHAR2(1 char)  | 市場別             |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS140

#### 投資人成交明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDAD1       | VARCHAR2(14 char) |                 |    |
| PK  | BDAD3       | VARCHAR2(12 char) |                 |    |
| PK  | BDAD9       | VARCHAR2(14 char) |                 |    |
| PK  | BDAD6       | VARCHAR2(1 char)  |                 |    |
| PK  | BDAD2       | DATE              |                 |    |
|     | BDAD17      | DATE              | 委託日期            |    |
|     | BDAD5       | VARCHAR2(12 char) |                 |    |
|     | BDAD7       | NUMBER(13, 4)      |                 |    |
|     | BDADF       | NUMBER(11, 0)      |                 |    |
|     | BDADB       | VARCHAR2(10 char) |                 |    |
|     | BDADC       | NUMBER(9, 2)       |                 |    |
|     | BDADD       | NUMBER(9, 2)       |                 |    |
|     | BDADE       | NUMBER(9, 2)       |                 |    |
|     | BDADH       | NUMBER(9, 2)       |                 |    |
|     | BDADR       | NUMBER(9, 2)       |                 |    |
|     | BDAD8       | NUMBER(9, 2)       |                 |    |
|     | BDADA       | NUMBER(9, 2)       |                 |    |
|     | BDADG       | NUMBER(13, 4)      |                 |    |
|     | BDADP       | NUMBER(9, 2)       |                 |    |
|     | BDADJ       | NUMBER(13, 4)      |                 |    |
|     | BDADQ       | NUMBER(13, 4)      |                 |    |
|     | BDADK       | NUMBER(19, 9)      |                 |    |
|     | BDADL       | VARCHAR2(3 char)  |                 |    |
|     | BDADN       | VARCHAR2(15 char) |                 |    |
|     | BDADU       | VARCHAR2(1 char)  |                 |    |
|     | BDADS       | VARCHAR2(1 char)  |                 |    |
|     | BDADW       | VARCHAR2(7 char)  |                 |    |
|     | BDADY       | VARCHAR2(4 char)  |                 |    |
|     | BDAD4       | VARCHAR2(1 char)  |                 |    |
|     | BDADT       | VARCHAR2(1 char)  |                 |    |
|     | BDADZ       | DATE              |                 |    |
|     | BD140       | VARCHAR2(16 char) |                 |    |
|     | BDADI       | NUMBER(8, 5)       |                 |    |
|     | BDADM       | NUMBER(8, 5)       |                 |    |
|     | BDADO       | DATE              |                 |    |
|     | BDAD11      | VARCHAR2(3 char)  | 入帳銀行            |    |
|     | BDAD12      | VARCHAR2(15 char) | 入帳帳號            |    |
|     | BDAD14      | VARCHAR2(7 char)  | 保管機構            |    |
|     | BDAD15      | NUMBER(9, 2)       | 分行手續費           |    |
|     | BDAD16      | NUMBER(9, 2)       | 信託部手續費          |    |
|     | BDAD18      | NUMBER(19, 9)      | 客戶價             |    |
|     | BDAD21      | VARCHAR2(5 char)  | 身份種類            |    |
|     | BDAD22      | NUMBER(13, 4)      | 成本金額(原幣)        |    |
|     | BDAD23      | NUMBER(13, 4)      | 成本金額(台幣)        |    |
|     | BD140A      | VARCHAR2(34 char) | 優惠類別            |    |
|     | MTIME       | VARCHAR2(6 char)  |                 |    |
|     | MDATE       | DATE              |                 |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | BDAD24      | VARCHAR2(5 char)  | 專案代碼            |    |
|     | BDAD25      | VARCHAR2(5 char)  | 優惠代碼            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS160

#### 債券庫存明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BDAF1       | VARCHAR2(12 char) |                 |    |
| PK  | BDAF2       | VARCHAR2(12 char) |                 |    |
| PK  | BDAFH       | VARCHAR2(14 char) |                 |    |
|     | BDAF9       | VARCHAR2(14 char) |                 |    |
|     | BDAFG       | VARCHAR2(7 char)  |                 |    |
|     | BDAF5       | NUMBER(13, 4)      |                 |    |
|     | BDAF6       | NUMBER(13, 4)      |                 |    |
|     | BDAF7       | NUMBER(13, 4)      |                 |    |
|     | BDAF8       | NUMBER(13, 4)      |                 |    |
|     | BDAFA       | NUMBER(13, 4)      |                 |    |
|     | BDAFI       | NUMBER(13, 4)      |                 |    |
|     | BDAFB       | NUMBER(13, 4)      |                 |    |
|     | BDAFC       | NUMBER(13, 4)      |                 |    |
|     | BDAFD       | VARCHAR2(1 char)  |                 |    |
|     | BD160       | VARCHAR2(16 char) |                 |    |
|     | BDAFJ       | VARCHAR2(3 char)  |                 |    |
|     | BDAFK       | VARCHAR2(15 char) |                 |    |
|     | BDAFL       | VARCHAR2(4 char)  |                 |    |
|     | BD160A      | VARCHAR2(50 char) | 預留欄位            |    |
|     | MTIME       | VARCHAR2(6 char)  |                 |    |
|     | MDATE       | DATE              |                 |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |    |

### VW_ODS_D_BDS860

#### 會計餘額檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BDHP2       | VARCHAR2(1 char)  | 信託業務別           |    |
|     | BDHP6       | VARCHAR2(3 char)  | 幣別代號            |    |
|     | BDHP1       | DATE              | 記帳日期            |    |
|     | BDHP3       | VARCHAR2(10 char) | 科目代號            |    |
|     | BDHP4       | VARCHAR2(10 char) | 子目代號            |    |
|     | BDHP5       | VARCHAR2(1 char)  | 優惠類別            |    |
|     | BDHPE       | NUMBER(15, 2)      | 期初金額原幣          |    |
|     | BDHP7       | NUMBER(15, 2)      | 借方金額原幣          |    |
|     | BDHP8       | NUMBER(15, 2)      | 貸方金額原幣          |    |
|     | BDHP9       | NUMBER(15, 2)      | 本日餘額原幣          |    |
|     | BDHPF       | NUMBER(15, 2)      | 期初金額台幣          |    |
|     | BDHPA       | NUMBER(15, 2)      | 借方金額台幣          |    |
|     | BDHPB       | NUMBER(15, 2)      | 貸方金額台幣          |    |
|     | BDHPC       | NUMBER(15, 2)      | 本日餘額台幣          |    |
|     | BDHPD       | VARCHAR2(60 char) | 名稱              |    |
|     | BD860       | VARCHAR2(20 char) | 保留欄位            |    |
|     | MTIME       | VARCHAR2(6 char)  | 維護時間            |    |
|     | MDATE       | DATE              | 維護日期            |    |
|     | MPGM        | VARCHAR2(10 char) |                 |    |
|     | MUSR        | VARCHAR2(10 char) |                 |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間          |
