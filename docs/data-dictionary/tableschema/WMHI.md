---
sidebar_position: 51
title: 中菲基金債券系統(WMHI)
---

### VW_ODS_D_AC1FIL

#### 信託帳號檔（一）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AC101       | VARCHAR2(11 char) | 憑證號碼           |    |
| PK  | AC103       | VARCHAR2(4 char)  | 基金代碼           |    |
| PK  | AC104       | VARCHAR2(9 char)  | 貨幣帳號           |    |
|     | AC107       | NUMBER(12, 4)      | 總單位數           |    |
|     | AC108       | NUMBER(12, 4)      | 預出單位數          |    |
|     | AC109       | NUMBER(5, 2)       | 停損點            |    |
|     | AC110       | NUMBER(5, 2)       | 獲利點            |    |
|     | AC111       | NUMBER(5, 2)       | 投資組合           |    |
|     | AC112       | NUMBER(9, 0)       | 入帳金額           |    |
|     | AC113       | NUMBER(9, 0)       | 預出金額           |    |
|     | AC114       | VARCHAR2(1 char)  | 主投資標的          |    |
|     | AC116       | NUMBER(5, 0)       | 累計已扣次數         |    |
|     | AC117       | NUMBER(9, 0)       | 累計已扣金額         |    |
|     | AC118       | NUMBER(11, 4)      | 除權單位數          |    |
|     | AC119       | NUMBER(9, 2)       | 手續費            |    |
|     | AC120       | NUMBER(5, 3)       | 手續費率           |    |
|     | AC121       | NUMBER(7, 0)       | 扣款金額           |    |
|     | AC122       | DATE              | 除權基準日          |    |
|     | AC123       | NUMBER(14, 2)      | 外幣金額           |    |
|     | AC124       | NUMBER(7, 2)       | 其他手續費          |    |
|     | AC199       | VARCHAR2(20 char) | 預留欄位           |    |
|     | AC125       | NUMBER(14, 2)      | 外幣－預出          |    |
|     | AC126       | NUMBER(14, 2)      | 外幣－在途          |    |
|     | AC127       | VARCHAR2(15 char) | 外幣存款帳號         |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_AC2FIL

#### 信託帳號檔（二）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | AC201       | VARCHAR2(11 char) | 憑證號碼           |    |
|     | AC202       | VARCHAR2(1 char)  | 信託型態           |    |
|     | AC203       | VARCHAR2(11 char) | 身分證號           |    |
|     | AC204       | DATE              | 出生日期           |    |
|     | AC205       | NUMBER(2, 0)       | 契約年限           |    |
|     | AC206       | NUMBER(9, 0)       | 總信託金額          |    |
|     | AC207       | VARCHAR2(1 char)  | 契約到期處理         |    |
|     | AC208       | VARCHAR2(1 char)  | 客戶性質           |    |
|     | AC209       | VARCHAR2(1 char)  | 贖回除息處理方        |    |
|     | AC210       | DATE              | 不扣款日期起         |    |
|     | AC211       | DATE              | 不扣款日期迄         |    |
|     | AC212       | NUMBER(6, 0)       | 總保管費           |    |
|     | AC213       | NUMBER(6, 0)       | 總申購手續費         |    |
|     | AC214       | NUMBER(6, 0)       | 總轉換手續費         |    |
|     | AC215       | NUMBER(6, 0)       | 總贖回手續費         |    |
|     | AC216       | NUMBER(6, 0)       | 違約金            |    |
|     | AC217       | NUMBER(6, 0)       | 總其它費用          |    |
|     | AC218       | VARCHAR2(15 char) | 扣款帳號           |    |
|     | AC219       | NUMBER(9, 0)       | 扣款金額           |    |
|     | AC220       | NUMBER(2, 0)       | 扣款日期１          |    |
|     | AC221       | NUMBER(2, 0)       | 扣款日期２          |    |
|     | AC222       | NUMBER(2, 0)       | 扣款日期３          |    |
|     | AC223       | NUMBER(2, 0)       | 扣款失敗次數         |    |
|     | AC224       | VARCHAR2(15 char) | 存款帳號           |    |
|     | AC225       | DATE              | 第一次申購日         |    |
|     | AC227       | NUMBER(9, 0)       | 質借金額           |    |
|     | AC228       | VARCHAR2(15 char) | 信託帳號           |    |
|     | AC229       | DATE              | 憑證列印日期         |    |
|     | AC230       | VARCHAR2(1 char)  | 契約到期記號         |    |
|     | AC231       | DATE              | 質借日期           |    |
|     | AC232       | DATE              | 契約到期日          |    |
|     | AC233       | DATE              | 最後一次交易日        |    |
|     | AC299       | VARCHAR2(40 char) | 預留欄位           |    |
|     | AC234       | VARCHAR2(6 char)  | 交易員代號          |    |
|     | AC235       | VARCHAR2(3 char)  | 營業單位代碼         |    |
|     | AC236       | NUMBER(10, 0)      | 質借時現值          |    |
|     | AC237       | DATE              | 契約申請日          |    |
|     | AC238       | DATE              | 信託開始日          |    |
|     | AC239       | NUMBER(5, 0)       | 總扣款成功次數        |    |
|     | AC240       | DATE              | 最後扣款失敗日        |    |
|     | AC241       | VARCHAR2(3 char)  | 扣款銀行           |    |
|     | AC242       | VARCHAR2(7 char)  | 存款銀行           |    |
|     | AC243       | VARCHAR2(1 char)  | 領款方式           |    |
|     | AC244       | VARCHAR2(16 char) | 信用卡號           |    |
|     | AC245       | NUMBER(4, 0)       | 信用卡有效期限        |    |
|     | AC246       | VARCHAR2(1 char)  | 扣款方式           |    |
|     | AC298       | VARCHAR2(40 char) | 預留欄位1          |    |
|     | AC247       | VARCHAR2(12 char) | 保單編號           |    |
|     | AC248       | VARCHAR2(11 char) | 扣款ID           |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CHNFIL

#### 交易通路資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CHN01       | VARCHAR2(2 char)  | 交易通路代號         |    |
|     | CHN02       | VARCHAR2(32 char) | 交易通路說明         |    |
|     | CHN03       | VARCHAR2(1 char)  | 對應碼            |    |
|     | CHN99       | VARCHAR2(40 char) | 預留欄位           |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CODFIL

#### 代碼資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | COD01       | VARCHAR2(3 char)  | 代碼             |    |
|     | COD02       | VARCHAR2(5 char)  | 序號             |    |
|     | COD03       | NUMBER(11, 0)      | 數值１            |    |
|     | COD04       | NUMBER(11, 0)      | 數值２            |    |
|     | COD05       | NUMBER(11, 0)      | 數值３            |    |
|     | COD06       | VARCHAR2(20 char) | 文字１            |    |
|     | COD07       | VARCHAR2(20 char) | 文字２            |    |
|     | COD08       | VARCHAR2(20 char) | 文字３            |    |
|     | COD99       | VARCHAR2(20 char) | 預留欄位           |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_CTMFIL

#### 投資人資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CTM01       | VARCHAR2(11 char) | 身份證／統一編號       |    |
|     | CTM02       | DATE              | 出生年月           |    |
|     | CTM03       | VARCHAR2(42 char) | 姓名             |    |
|     | CTM04       | VARCHAR2(1 char)  | 客戶性質           |    |
|     | CTM05       | DATE              | 開戶日期           |    |
|     | CTM06       | VARCHAR2(3 char)  | 開戶行號           |    |
|     | CTM07       | VARCHAR2(15 char) | 存款帳號           |    |
|     | CTM08       | VARCHAR2(15 char) | 扣款帳號           |    |
|     | CTM15       | NUMBER(5, 3)       | 代扣稅款稅率         |    |
|     | CTM16       | NUMBER(5, 0)       | 代扣梲款起始金額       |    |
|     | CTM17       | VARCHAR2(2 char)  | 行業別            |    |
|     | CTM99       | VARCHAR2(40 char) | 預留欄位           |    |
|     | CTM20       | VARCHAR2(15 char) | 外幣存款帳號         |    |
|     | CTM21       | VARCHAR2(15 char) | 外幣扣款帳號         |    |
|     | CTM22       | VARCHAR2(10 char) | 居留證號碼          |    |
|     | CTM23       | DATE              | 居留證核發日期        |    |
|     | CTM98       | VARCHAR2(40 char) | EMAIL          |    |
|     | CTM24       | VARCHAR2(1 char)  | 領款方式           |    |
|     | CTM25       | VARCHAR2(3 char)  | 扣款銀行           |    |
|     | CTM26       | VARCHAR2(7 char)  | 銀行分行代碼         |    |
|     | CTM28       | VARCHAR2(2 char)  | VIP碼           |    |
|     | CTM29       | VARCHAR2(10 char) | 專屬理專           |    |
|     | CTM96       | VARCHAR2(30 char) | 預留欄位           |    |
|     | CTM30       | VARCHAR2(6 char)  | 理財顧問           |    |
|     | CTM31       | DATE              | 理顧修改日期         |    |
|     | CTM32       | VARCHAR2(11 char) | 信託戶ＩＤ          |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_DFLWM

#### 扣款失敗通知檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DFLWM01     | NUMBER(8, 0)       | 扣款失敗日期         |    |
|     | DFLWM02     | VARCHAR2(11 char) | 客戶身分證號         |    |
|     | DFLWM03     | VARCHAR2(11 char) | 信託編號           |    |
|     | DFLWM04     | VARCHAR2(4 char)  | 基金代碼           |    |
|     | DFLWM05     | VARCHAR2(3 char)  | 幣別             |    |
|     | DFLWM06     | NUMBER(7, 0)       | 扣款金額           |    |
|     | DFLWM07     | NUMBER(9, 2)       | 手續費            |    |
|     | DFLWM08     | VARCHAR2(2 char)  | 失敗原因代碼         |    |
|     | DFLWM09     | VARCHAR2(1 char)  | 扣款方式           |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FUAFIL

#### 基金代理公司資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | FUA01       | VARCHAR2(2 char)  | 基金公司代碼         |    |
|     | FUA02       | VARCHAR2(22 char) | 中文名稱           |    |
|     | FUA03       | VARCHAR2(10 char) | 簡稱             |    |
|     | FUA04       | VARCHAR2(50 char) | 國外經理公司         |    |
|     | FUA05       | VARCHAR2(20 char) | 聯絡人            |    |
|     | FUA06       | VARCHAR2(17 char) | FAXNO          |    |
|     | FUA07       | VARCHAR2(50 char) | 代理公司英文名稱       |    |
|     | FUA08       | VARCHAR2(20 char) | 聯絡人            |    |
|     | FUA09       | VARCHAR2(17 char) | FAXNO          |    |
|     | FUA10       | VARCHAR2(9 char)  | REFERENCE      |    |
|     | FUA11       | NUMBER(5, 2)       | 轉換內扣比率         |    |
|     | FUA12       | VARCHAR2(1 char)  | 乘除碼            |    |
|     | FUA13       | VARCHAR2(1 char)  | 信託手續費計算幣別      |    |
|     | FUA14       | VARCHAR2(1 char)  | 無資料是否要傳真       |    |
|     | FUA15       | NUMBER(5, 2)       | 代扣稅款稅率         |    |
|     | FUA99       | VARCHAR2(40 char) | 預留欄位           |    |
|     | FUA16       | VARCHAR2(17 char) | TELNO          |    |
|     | FUA17       | VARCHAR2(7 char)  | 解款行            |    |
|     | FUA18       | VARCHAR2(40 char) | 解款行名稱          |    |
|     | FUA19       | VARCHAR2(14 char) | 帳號             |    |
|     | FUA20       | VARCHAR2(15 char) | OBUPERSONALA/C |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FUSFIL

#### 基金基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | FUS01       | VARCHAR2(2 char)  | 基金公司代碼         |    |
|     | FUS02       | VARCHAR2(2 char)  | 基金代碼           |    |
|     | FUS03       | VARCHAR2(22 char) | 中文名稱           |    |
|     | FUS04       | VARCHAR2(12 char) | 簡稱             |    |
|     | FUS05       | VARCHAR2(16 char) | 英文名稱           |    |
|     | FUS06       | VARCHAR2(3 char)  | 使用幣別           |    |
|     | FUS07       | NUMBER(1, 0)       | 受益單位數有效小數      |    |
|     | FUS08       | VARCHAR2(1 char)  | 基金性質           |    |
|     | FUS09       | VARCHAR2(1 char)  | 基金所屬區域         |    |
|     | FUS10       | VARCHAR2(1 char)  | 小額投資           |    |
|     | FUS11       | NUMBER(3, 1)       | 質借最高比率         |    |
|     | FUS12       | VARCHAR2(15 char) | 匯款帳號           |    |
|     | FUS13       | VARCHAR2(15 char) | 基金帳號           |    |
|     | FUS14       | NUMBER(7, 0)       | 貨幣淨值買價         |    |
|     | FUS99       | VARCHAR2(20 char) | 預留欄位           |    |
|     | FUS15       | VARCHAR2(28 char) | 中文全稱           |    |
|     | FUS16       | NUMBER(5, 2)       | 轉換內扣比率         |    |
|     | FUS17       | VARCHAR2(30 char) | 銀行戶名名稱１        |    |
|     | FUS18       | VARCHAR2(30 char) | 銀行戶名名稱２        |    |
|     | FUS19       | VARCHAR2(40 char) | 銀行戶名名稱３        |    |
|     | FUS20       | VARCHAR2(1 char)  | 國內基金碼          |    |
|     | FUS98       | VARCHAR2(40 char) | 預留欄位－２         |    |
|     | FUS21       | NUMBER(9, 0)       | 申購最低金額         |    |
|     | FUS22       | NUMBER(9, 0)       | 申購最高金額         |    |
|     | FUS23       | VARCHAR2(42 char) | 備註             |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_FUSMK

#### 基金商品衍生檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | FUS01       | VARCHAR2(2 char)  | 基金公司代碼         |    |
|     | FUS02       | VARCHAR2(2 char)  | 基金代碼           |    |
|     | FUSM12      | VARCHAR2(1 char)  | 轉換手續費檢查碼       |    |
|     | FUSM13      | VARCHAR2(1 char)  | 管理費檢查碼         |    |
|     | FUSM14      | VARCHAR2(1 char)  | 除權/息基金代碼       |    |
|     | FUSM98      | VARCHAR2(40 char) | 預留欄位           |    |
|     | FUSM99      | VARCHAR2(40 char) | 預留欄位1          |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_NETFIL

#### 基金淨值檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | NET01       | DATE              | 國外交易日          |    |
| PK  | NET02       | VARCHAR2(4 char)  | 基金代碼           |    |
|     | NET03       | NUMBER(10, 4)      | 買價             |    |
|     | NET04       | NUMBER(10, 4)      | 賣價             |    |
|     | NET05       | NUMBER(10, 4)      | ９０日買價平均價       |    |
|     | NET99       | VARCHAR2(20 char) | 預留欄位           |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_TR1FIL

#### 信託異動資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TR101       | DATE              | 異動日期           |    |
|     | TR102       | VARCHAR2(11 char) | 憑證號碼           |    |
|     | TR103       | VARCHAR2(2 char)  | 異動性質           |    |
|     | TR104       | VARCHAR2(4 char)  | 基金代碼（轉出）       |    |
|     | TR107       | VARCHAR2(9 char)  | 貨幣帳號           |    |
|     | TR105       | VARCHAR2(4 char)  | 基金代碼（轉入）       |    |
|     | TR137       | VARCHAR2(9 char)  | 新貨幣帳號          |    |
|     | TR106       | VARCHAR2(1 char)  | 信託型態           |    |
|     | TR108       | VARCHAR2(11 char) | 身分證號           |    |
|     | TR109       | DATE              | 出生日期           |    |
|     | TR110       | NUMBER(2, 0)       | 契約年限           |    |
|     | TR111       | NUMBER(11, 2)      | 總扣款金額          |    |
|     | TR112       | NUMBER(11, 2)      | 申購金額           |    |
|     | TR113       | NUMBER(11, 6)      | 匯率             |    |
|     | TR114       | VARCHAR2(1 char)  | 匯率乘除碼          |    |
|     | TR115       | NUMBER(12, 4)      | 單位數一           |    |
|     | TR116       | NUMBER(10, 4)      | 淨值賣價           |    |
|     | TR119       | NUMBER(5, 3)       | 手續費率           |    |
|     | TR120       | NUMBER(9, 2)       | 手續費            |    |
|     | TR121       | VARCHAR2(1 char)  | 轉換方式（贖回）       |    |
|     | TR122       | VARCHAR2(1 char)  | 小額轉換方式（贖回最低期限） |    |
|     | TR123       | NUMBER(12, 4)      | 單位數二           |    |
|     | TR124       | VARCHAR2(15 char) | 信託帳號           |    |
|     | TR127       | VARCHAR2(1 char)  | STATUS-CODE    |    |
|     | TR128       | DATE              | 下單日            |    |
|     | TR129       | DATE              | 分配日            |    |
|     | TR130       | DATE              | 入帳日            |    |
|     | TR131       | NUMBER(9, 2)       | 總手續費           |    |
|     | TR132       | NUMBER(9, 2)       | 小額違約金          |    |
|     | TR133       | NUMBER(10, 2)      | 保管費            |    |
|     | TR134       | NUMBER(10, 4)      | 淨值買價           |    |
|     | TR135       | NUMBER(9, 2)       | 代扣稅款（手續費）      |    |
|     | TR136       | NUMBER(9, 2)       | 貨幣基金利息         |    |
|     | TR138       | NUMBER(13, 4)      | 贖回金額           |    |
|     | TR139       | VARCHAR2(15 char) | 存款帳號           |    |
|     | TR140       | NUMBER(14, 2)      | 外幣金額           |    |
|     | TR141       | NUMBER(9, 6)       | 權息每單位數分配值      |    |
|     | TR144       | NUMBER(6, 0)       | 贖回外幣差價         |    |
|     | TR145       | NUMBER(14, 2)      | 外幣信託外幣金額       |    |
|     | TR146       | NUMBER(11, 6)      | 成本匯率           |    |
|     | TR147       | VARCHAR2(1 char)  | 信託業務別          |    |
|     | TR199       | VARCHAR2(40 char) | 預留欄位           |    |
|     | TR198       | VARCHAR2(40 char) | 預留欄位1          |    |
|     | TR148       | VARCHAR2(7 char)  | 主機查詢序號         |    |
|     | TR149       | VARCHAR2(1 char)  | 連動圈存           |    |
|     | TR150       | VARCHAR2(1 char)  | 圈存記號           |    |
|     | TR151       | VARCHAR2(4 char)  | 圈存ERRCODE      |    |
|     | TR152       | VARCHAR2(15 char) | 圈存台幣扣款帳號       |    |
|     | TR153       | VARCHAR2(15 char) | 圈存外幣扣款帳號       |    |
|     | TR154       | VARCHAR2(21 char) | 圈存序號           |    |
|     | TR155       | VARCHAR2(1 char)  | 基本資料圈存記號       |    |
|     | TR156       | VARCHAR2(21 char) | 主機交易序號         |    |
|     | SOURCE      | VARCHAR2(1 char)  | 市場別            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_TRUKYC

#### KYC

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TN0001      | DATE              | 交易日期           |    |
|     | TN0002      | VARCHAR2(12 char) | 憑證編號           |    |
|     | TN0003      | NUMBER(6, 0)       | 交易時間           |    |
|     | TN0004      | VARCHAR2(12 char) | 商品代碼           |    |
|     | TN0005      | VARCHAR2(2 char)  | 交易類型           |    |
|     | TN0006      | VARCHAR2(1 char)  | 基金/債券          |    |
|     | TN0007      | VARCHAR2(2 char)  | 客戶等級           |    |
|     | TN0008      | VARCHAR2(1 char)  | 商品等級           |    |
|     | TN0009      | VARCHAR2(1 char)  | 連動債資格          |    |
|     | TN0010      | VARCHAR2(1 char)  | 財管回應碼          |    |
|     | TN0011      | VARCHAR2(1 char)  | 大額控管           |    |
|     | TN0012      | VARCHAR2(1 char)  | 70條款           |    |
|     | TN0013      | VARCHAR2(1 char)  | 商品保本           |    |
|     | TN0014      | VARCHAR2(1 char)  | 投資人身份別         |    |
|     | TN0015      | VARCHAR2(1 char)  | 交易身份別          |    |
|     | TN0016      | VARCHAR2(1 char)  | 非推介            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |    |

### VW_ODS_D_TRUKYCO

#### OBU KYC

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TN0001      | DATE              | 交易日期           |    |
|     | TN0002      | VARCHAR2(12 char) | 憑證編號           |    |
|     | TN0003      | NUMBER(6, 0)       | 交易時間           |    |
|     | TN0004      | VARCHAR2(12 char) | 商品代碼           |    |
|     | TN0005      | VARCHAR2(2 char)  | 交易類型           |    |
|     | TN0006      | VARCHAR2(1 char)  | 基金/債券          |    |
|     | TN0007      | VARCHAR2(2 char)  | 客戶等級           |    |
|     | TN0008      | VARCHAR2(1 char)  | 商品等級           |    |
|     | TN0009      | VARCHAR2(1 char)  | 連動債資格          |    |
|     | TN0010      | VARCHAR2(1 char)  | 財管回應碼          |    |
|     | TN0011      | VARCHAR2(1 char)  | 大額控管           |    |
|     | TN0012      | VARCHAR2(1 char)  | 70條款           |    |
|     | TN0013      | VARCHAR2(1 char)  | 商品保本           |    |
|     | TN0014      | VARCHAR2(1 char)  | 投資人身份別         |    |
|     | TN0015      | VARCHAR2(1 char)  | 交易身份別          |    |
|     | TN0016      | VARCHAR2(1 char)  | 非推介            |    |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間         |
