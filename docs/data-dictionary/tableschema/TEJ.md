---
sidebar_position: 47
title: 企業情報資料系統(TEJ)
---

### VW_ODS_D_CRMCEO

#### 更換經營層
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CO_ID        | VARCHAR2(8 char)   | 公司                               |    |
|     | PMAN1        | VARCHAR2(29 char)  | 現任董事長                            |    |
|     | PMAN2        | VARCHAR2(29 char)  | 前任董事長                            |    |
|     | PMAN3        | VARCHAR2(29 char)  | 前2任董事長                           |    |
|     | PMAN4        | VARCHAR2(29 char)  | 前3任董事長                           |    |
|     | PMAN5        | VARCHAR2(29 char)  | 前4任董事長                           |    |
|     | QMAN1        | VARCHAR2(29 char)  | 現任總經理                            |    |
|     | QMAN2        | VARCHAR2(29 char)  | 前任總經理                            |    |
|     | QMAN3        | VARCHAR2(29 char)  | 前2任總經理                           |    |
|     | QMAN4        | VARCHAR2(29 char)  | 前3任總經理                           |    |
|     | QMAN5        | VARCHAR2(29 char)  | 前4任總經理                           |    |
|     | SMAN1        | VARCHAR2(29 char)  | 現任發言人                            |    |
|     | SMAN2        | VARCHAR2(29 char)  | 前任發言人                            |    |
|     | SMAN3        | VARCHAR2(29 char)  | 前2任發言人                           |    |
|     | SMAN4        | VARCHAR2(29 char)  | 前3任發言人                           |    |
|     | SMAN5        | VARCHAR2(29 char)  | 前4任發言人                           |    |
|     | FMAN1        | VARCHAR2(29 char)  | 現任財務長                            |    |
|     | FMAN2        | VARCHAR2(29 char)  | 前任財務長                            |    |
|     | FMAN3        | VARCHAR2(29 char)  | 前2任財務長                           |    |
|     | FMAN4        | VARCHAR2(29 char)  | 前3任財務長                           |    |
|     | FMAN5        | VARCHAR2(29 char)  | 前4任財務長                           |    |
|     | AMAN1        | VARCHAR2(29 char)  | 現任會計主管                           |    |
|     | AMAN2        | VARCHAR2(29 char)  | 前任會計主管                           |    |
|     | AMAN3        | VARCHAR2(29 char)  | 前2任會計主管                          |    |
|     | AMAN4        | VARCHAR2(29 char)  | 前3任會計主管                          |    |
|     | AMAN5        | VARCHAR2(29 char)  | 前4任會計主管                          |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_CRMPRMK

#### 危機公司大事紀
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CO_ID        | VARCHAR2(7 char)   | 公司                               |    |
| PK  | YYMMDD       | VARCHAR2(8 char)   | 年/月                              |    |
| PK  | XNO          | VARCHAR2(2 char)   | 則次                               |    |
| PK  | SEQ          | VARCHAR2(3 char)   | 行次                               |    |
|     | RMK          | VARCHAR2(70 char)  | 內文                               |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_CRMSTD

#### 公司屬性資料庫
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CO_ID        | VARCHAR2(7 char)   | 公司                               |    |
|     | NAME8        | VARCHAR2(16 char)  | 簡稱                               |    |
|     | INVOICE      | VARCHAR2(8 char)   | 統編                               |    |
|     | MKT          | VARCHAR2(5 char)   | 上市別                              |    |
|     | IND          | VARCHAR2(2 char)   | 產業別                              |    |
|     | EMM          | VARCHAR2(2 char)   | 會計月份                             |    |
|     | PHONE        | VARCHAR2(13 char)  | 電話                               |    |
|     | FAX          | VARCHAR2(13 char)  | 傳真                               |    |
|     | CHIEF        | VARCHAR2(20 char)  | 董事長                              |    |
|     | PRESIDENT    | VARCHAR2(20 char)  | 總經理                              |    |
|     | SPOKES1      | VARCHAR2(20 char)  | 發言人                              |    |
|     | SPOKES2      | VARCHAR2(20 char)  | 財務經理                             |    |
|     | ESTB_DATE    | VARCHAR2(8 char)   | 設立日期                             |    |
|     | LIST_DATE    | VARCHAR2(8 char)   | 首次上市日                            |    |
|     | LIST_DAY1    | VARCHAR2(8 char)   | 目前上市日期                           |    |
|     | TSE_DAY1     | VARCHAR2(8 char)   | 上市日期                             |    |
|     | OTC_DAY1     | VARCHAR2(8 char)   | 上櫃日期                             |    |
|     | REG_DAY1     | VARCHAR2(8 char)   | 興櫃日期                             |    |
|     | LIST_DAY2    | VARCHAR2(8 char)   | 下市日期                             |    |
|     | D_CAT4       | VARCHAR2(8 char)   | 全額交割日                            |    |
|     | TEJIND       | VARCHAR2(5 char)   | TEJ業別                            |    |
|     | TEJINDNM     | VARCHAR2(10 char)  | TEJ產業名                           |    |
|     | BTINDNM      | VARCHAR2(54 char)  | 主要產品                             |    |
|     | GOP_NA       | VARCHAR2(12 char)  | 集團名                              |    |
|     | NAME_F_CHI   | VARCHAR2(30 char)  | 全稱                               |    |
|     | NAME_F_ENG   | VARCHAR2(40 char)  | 英文名                              |    |
|     | CHI_ADD      | VARCHAR2(60 char)  | 地址                               |    |
|     | STK_AMT      | NUMBER(10, 0)       | 資本額(千元)                          |    |
|     | PUB_DA2      | VARCHAR2(8 char)   | 撤銷公開發行日                          |    |
|     | INDNM        | VARCHAR2(10 char)  | 產業名稱                             |    |
|     | ISIN         | VARCHAR2(12 char)  | ISIN                             |    |
|     | CRMTCRI      | VARCHAR2(1 char)   | TCRI                             |    |
|     | AD_TCRI      | VARCHAR2(8 char)   | TCRI評等日                          |    |
|     | YYMM_TCRI    | VARCHAR2(6 char)   | TCRI財務年月                         |    |
|     | CO_TYPE      | VARCHAR2(2 char)   | 產業別(F一般/H金融/K產險/B壽險/S證券/V投資/L金控) |    |
|     | PUB_DA1      | VARCHAR2(8 char)   | 公開發行日                            |    |
|     | END_DATE     | VARCHAR2(8 char)   | 結束日期                             |    |
|     | FG1          | VARCHAR2(1 char)   | G公營/F外資/P民營                      |    |
|     | BROK_STAT    | VARCHAR2(1 char)   | 證券發行狀況(1                         |    |
|     | TSEIND       | VARCHAR2(2 char)   | TSE業別                            |    |
|     | TSEINDNM     | VARCHAR2(10 char)  | TSE產業名                           |    |
|     | SFIID        | VARCHAR2(7 char)   | 證期會代碼                            |    |
|     | SICS         | VARCHAR2(8 char)   | 主計處產業碼                           |    |
|     | SICSNM       | VARCHAR2(10 char)  | 主計處產業名稱                          |    |
|     | TDRFG        | VARCHAR2(1 char)   | 是否為TDR(Y/N)                      |    |
|     | PARVAL       | NUMBER(15, 3)       | 面額                               |    |
|     | PAR_CUR      | VARCHAR2(4 char)   | 面額幣別                             |    |
|     | JCIC         | VARCHAR2(8 char)   | JCIC統編                           |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_CRMTAB

#### TEJ信用評等資料庫主表
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CO_ID        | VARCHAR2(7 char)   | 公司                               |    |
| PK  | YYMM         | VARCHAR2(6 char)   | 年月                               |    |
|     | A_SHIP       | VARCHAR2(1 char)   | 採用                               |    |
|     | TYPE         | VARCHAR2(2 char)   | 報表別F/M                           |    |
|     | TT1          | VARCHAR2(3 char)   | 升降                               |    |
|     | TCRI         | VARCHAR2(2 char)   | TCRI                             |    |
|     | GDX          | VARCHAR2(3 char)   | 系統分級                             |    |
|     | XAPL         | VARCHAR2(4 char)   | APLr                             |    |
|     | R1           | VARCHAR2(2 char)   | MGT易手                            |    |
|     | R2           | VARCHAR2(2 char)   | 炒股                               |    |
|     | R3           | VARCHAR2(2 char)   | 庫藏股                              |    |
|     | R5           | VARCHAR2(1 char)   | CFO不一致                           |    |
|     | SCR          | NUMBER(10, 0)       | 總分                               |    |
|     | SCRD         | NUMBER(10, 0)       | ADE減分                            |    |
|     | SCL          | NUMBER(10, 0)       | 規模                               |    |
|     | ERN          | NUMBER(10, 0)       | 獲利                               |    |
|     | SAF          | NUMBER(10, 0)       | 安全                               |    |
|     | ACT          | NUMBER(10, 0)       | 效率                               |    |
|     | EPS          | NUMBER(8, 2)        | EPS                              |    |
|     | A_TA         | NUMBER(10, 0)       | 總資產                              |    |
|     | A_REV        | NUMBER(10, 0)       | 營收                               |    |
|     | RI           | NUMBER(8, 2)        | 常續性利益                            |    |
|     | ROE          | NUMBER(8, 2)        | 淨值報酬%                            |    |
|     | ROA          | NUMBER(8, 2)        | 資產報酬%                            |    |
|     | OPP          | NUMBER(8, 2)        | 營業利益%                            |    |
|     | A_DE         | NUMBER(10, 0)       | 借款依存度%                           |    |
|     | A_CTGP       | NUMBER(10, 0)       | 或有負債/股東權益%                       |    |
|     | A_ACID       | NUMBER(10, 0)       | 速動比率                             |    |
|     | INT_R        | NUMBER(8, 2)        | 利息支出率                            |    |
|     | A_TNAR       | NUMBER(10, 0)       | 收款天數                             |    |
|     | A_TNIVT      | NUMBER(10, 0)       | 售貨天數                             |    |
|     | A_GREV       | NUMBER(10, 0)       | 營收成長%                            |    |
|     | CFO          | NUMBER(8, 2)        | CFO                              |    |
|     | OP           | NUMBER(8, 2)        | 營業利益                             |    |
|     | INT_D        | NUMBER(8, 2)        | 借款息%                             |    |
|     | A_CTNAR2     | NUMBER(10, 0)       | 季底收款天增減/底                        |    |
|     | A_CTNAR      | NUMBER(10, 0)       | 平均收款天增減/均                        |    |
|     | A_CTNIVT     | NUMBER(10, 0)       | 平均售貨天                            |    |
|     | CIVT         | NUMBER(8, 2)        | 存貨增減(億元)                         |    |
|     | EVA          | NUMBER(8, 2)        | EVA                              |    |
|     | EVA_OP       | NUMBER(8, 2)        | EVA_OP                           |    |
|     | XCSH         | NUMBER(8, 2)        | 現金充裕度(億元)                        |    |
|     | A_OV_I       | NUMBER(10, 0)       | 過度投資額(億元)                        |    |
|     | A_DEBT       | NUMBER(10, 0)       | 借款(億元)                           |    |
|     | A_SE         | NUMBER(10, 0)       | 股東權益(億元)                         |    |
|     | RMK_D        | VARCHAR2(8 char)   | 評等日                              |    |
|     | DAT_D        | VARCHAR2(8 char)   | 資料日                              |    |
|     | ESTB_DATE    | VARCHAR2(8 char)   | 設立日                              |    |
|     | LIST_DATE    | VARCHAR2(8 char)   | 上市日                              |    |
|     | XCDT         | VARCHAR2(12 char)  | 狀況                               |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_CRQTRMK

#### TCRI調整說明紀事
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | CO_ID        | VARCHAR2(7 char)   | 公司                               |    |
| PK  | YYMMDD       | VARCHAR2(8 char)   | 年/月                              |    |
| PK  | XNO          | VARCHAR2(1 char)   | 則次                               |    |
| PK  | SEQ          | VARCHAR2(3 char)   | 行次                               |    |
|     | RMK          | VARCHAR2(70 char)  | 內文                               |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_DBTIND

#### 產業地位細分類
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | INDTYPE      | VARCHAR2(1 char)   | 大產業分類                            |    |
| PK  | BTINDID      | VARCHAR2(15 char)  | 小產業分類                            |    |
|     | BTINDNAME    | VARCHAR2(40 char)  | 小產業名稱                            |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_MAP3N

#### TCRI產業地位
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | BTINDA       | VARCHAR2(16 char)  | 所屬產業                             |    |
| PK  | IDNMA        | VARCHAR2(26 char)  | 公司名稱                             |    |
|     | Z            | VARCHAR2(1 char)   | TCRI                             |    |
|     | GD           | VARCHAR2(3 char)   | 系統分級                             |    |
|     | SCR1         | NUMBER(10, 0)       | 綜合評分                             |    |
|     | SCR2         | NUMBER(10, 0)       | 綜合評分                             |    |
|     | YM           | VARCHAR2(11 char)  | 資料年                              |    |
|     | REV1         | NUMBER(6, 1)        | 營收                               |    |
|     | GREV1        | NUMBER(5, 0)        | 成長%                              |    |
|     | GMP1         | NUMBER(7, 1)        | 毛利%                              |    |
|     | OPP1         | NUMBER(7, 1)        | 營利%                              |    |
|     | DE           | NUMBER(5, 0)        | DE                               |    |
|     | DT1          | VARCHAR2(5 char)   | 借款                               |    |
|     | K1           | VARCHAR2(24 char)  | 產品一                              |    |
|     | K2           | VARCHAR2(24 char)  | 產品二                              |    |
|     | K3           | VARCHAR2(24 char)  | 產品三                              |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_MBTIND

#### 產業地位大分類
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | INDTYPE      | VARCHAR2(1 char)   | 產業碼                              |    |
|     | INDNAME      | VARCHAR2(40 char)  | 產業名稱                             |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |    |

### VW_ODS_D_SNGWATCH

#### TCRI看門狗
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | COID         | VARCHAR2(7 char)   | 公司                               |    |
| PK  | MDATE        | VARCHAR2(8 char)   | 事件日                              |    |
| PK  | KEY3         | VARCHAR2(7 char)   | 序號                               |    |
|     | SOURCE       | VARCHAR2(1 char)   | 來源(A事件內容、BTCRI觀點)                |    |
|     | SEQ          | INTEGER            | 則次                               |    |
|     | TCRI         | VARCHAR2(20 char)  | TCRI(年/月)                        |    |
|     | SCORE        | VARCHAR2(2 char)   | 事件強度                             |    |
|     | L_CODE       | VARCHAR2(70 char)  | 大事件類別                            |    |
|     | S_CODE       | VARCHAR2(70 char)  | 小事件類別                            |    |
|     | TXT          | VARCHAR2(100 char) | 事件內容                             |    |
|     | INSIGHT_DATE | VARCHAR2(8 char)   | TCRI_觀點日期                        |    |
|     | TBL_UPD_TIM  | TIMESTAMP          | 表格更新時間                           |
