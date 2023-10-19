---
sidebar_position: 2
title: 欄位代碼表
---

### VW_ODS_D_SAMASTER

#### SAMST_CUST_STAT

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_CUST_STAT        | 00      | 正常戶                              |
| SAMST_CUST_STAT        | 01      | 轉換後靜止戶                        |
| SAMST_CUST_STAT        | 03      | 結清戶                              |
| SAMST_CUST_STAT        | 05      | 移出戶                              |
| SAMST_CUST_STAT        | 04      | 錯誤消除戶                          |
| SAMST_CUST_STAT        | 09      | 轉換前靜止專戶                      |

#### SAMST_OD_STAT

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_OD_STAT          | 0       | 非透支戶                            |
| SAMST_OD_STAT          | 1       | 透支戶                              |
| SAMST_OD_STAT          | 2       | 透支轉催收                          |
| SAMST_OD_STAT          | 7       | 暫時取消                            |
| SAMST_OD_STAT          | 8       | 永久取消                            |

#### SAMST_TXN_STOP_STAT

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_TXN_STOP_STAT    | 0       | 正常                                |
| SAMST_TXN_STOP_STAT    | 1       | 暫停                                |

#### SAMST_WASH_NOCHK_MARK

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_WASH_NOCHK_MARK  | 1       | 百貨公司                            |
| SAMST_WASH_NOCHK_MARK  | 2       | 量販店                              |
| SAMST_WASH_NOCHK_MARK  | 3       | 連販超商                            |
| SAMST_WASH_NOCHK_MARK  | 4       | 加油站                              |
| SAMST_WASH_NOCHK_MARK  | 5       | 醫療院所                            |
| SAMST_WASH_NOCHK_MARK  | 6       | 交通運輸業                          |
| SAMST_WASH_NOCHK_MARK  | 7       | 餐飲旅館業                          |

#### SAMST_SKL_ATM_USE_FLAG

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_SKL_ATM_USE_FLAG | 0       | 非保貸戶的其他活存帳戶 (非 55 科目) |
| SAMST_SKL_ATM_USE_FLAG | 1       | 可使用                              |
| SAMST_SKL_ATM_USE_FLAG | 2       | 核貸中                              |
| SAMST_SKL_ATM_USE_FLAG | 9       | 已撤銷                              |

#### SAMST_OPEN_KIND

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_OPEN_KIND        | 0       | 是                                  |
| SAMST_OPEN_KIND        | 1       | 否                                  |

#### SAMST_NOTICE_KIND

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_NOTICE_KIND      | 1       | 聯絡                                |
| SAMST_NOTICE_KIND      | 2       | 不聯絡                              |
| SAMST_NOTICE_KIND      | 9       | 秘密戶                              |

#### SAMST_CHK_SHEET_CODE

| 欄位名稱               | 值域 ID | 值域中文說明                        |
| ---------------------- | ------- | ----------------------------------- |
| SAMST_CHK_SHEET_CODE   | 0       | 寄                                  |
| SAMST_CHK_SHEET_CODE   | 1       | 不寄                                |
| SAMST_CHK_SHEET_CODE   | 2       | 自取                                |

### VW_ODS_D_QATXNREC

| 欄位名稱         | 值域 ID | 值域中文說明   |
| ---------------- | ------- | -------------- |
| QATXN_DB_CR_STAT | 1       | 借方交易(轉出) |
| QATXN_DB_CR_STAT | 2       | 貸方交易(轉入) |

 ### VW_ODS_D_SATXNREC
| 欄位名稱         | 值域 ID | 值域中文說明   |
| ---------------- | ------- | -------------- |
| SATXN_DB_CR_STAT | 1       | 借方交易(轉出) |
| SATXN_DB_CR_STAT | 2       | 貸方交易(轉入) |
| SATXN_TXN_STAT   | 0       | 正常交易       |
| SATXN_TXN_STAT   | 1       | 沖正交易       |
| SATXN_TXN_STAT   | 2       | 被沖正交易     |

### VW_ODS_D_LNAPPROV

| 欄位名稱         | 值域 ID | 值域中文說明   |
| ---------------- | ------- | -------------- |
| LNLNP_CRINS_MARK | null | 非信保案件   |
| LNLNP_CRINS_MARK | 0    | 非信保案件   |
| LNLNP_CRINS_MARK | 1    | 授權信保保證 |
| LNLNP_CRINS_MARK | 2    | 專案信保保證 |
| LNLNP_CRINS_MARK | 3    | 批次信保保證 |
| LNLNP_CRINS_MARK | 4    | 直接信保保證 |

### VW_ODS_D_LNAPPLY

#### LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3

| 欄位名稱                                                            | 值域 ID | 值域中文說明                                                                                                       |
| ------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | 99      | 其他                                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | aa      | 營收起伏過鉅                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ab      | 各項財務比率欠佳                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ac      | 應收帳款、存貨、長短投、關係人交易異常                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ad      | 負責人變更頻繁                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ae      | 還款能力不佳                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | af      | 銀行借款持續增加                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ag      | 負責人及配偶信用卡循環信用金額偏高                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ah      | 負責人及配偶使用現金卡                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ai      | 負責人及配偶信用卡分期付款金額偏高                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | aj      | 借保人曾有繳款延遲紀錄                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ak      | 借保人曾有票債信不良紀錄                                                                                           |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | al      | 借保人存摺有個人異常匯入款                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | am      | 借戶存摺現金流量差                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | an      | 不符進件門檻                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ao      | 借保人聯徵查詢次數過多                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ap      | 行業展望欠佳                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | aq      | 分行自撤                                                                                                           |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ar      | 暫不宜承作                                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | as      | 借款大於營業額                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | at      | 中長期償債能力不足                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | au      | 擔保品下手性欠佳                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | av      | 有官司被依法起訴                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | aw      | 市場競爭激烈，產業前景尚待觀察                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ax      | 擴廠（擴張）過快或效益未產生                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ay      | 存匯未/偶往來，難以掌握財務變化                                                                                    |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | az      | 其他                                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sa      | 申戶之適用對象不符辦法規範                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sb      | 申戶提供之證明文件無法符合辦法規範                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sc      | 申戶年齡已逾 65 歲（105.04 修訂）                                                                                  |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sd      | 申戶為男性 37 歲以下應服役而未服役者                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | se      | 申戶年所得未達辦法規定                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sf      | 申請金額已逾本行相關辦法規定                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sg      | 本行進件評分卡得分未達進件標準                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | sh      | 策略評分結果自動婉拒                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ta      | 申戶聯徵及票交查詢目前有退(補)票紀錄                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tb      | 申戶聯徵及票交查詢目前有拒絕往來紀錄                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tc      | 申戶聯徵查詢目前有催收或呆帳紀錄                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | td      | 申戶聯徵查詢目前有強制停卡(含附卡)紀錄                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | te      | 申戶於金融機構之貸款繳款紀錄不佳                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tf      | 申戶名下從債務查詢目前有催收、呆帳或繳款紀錄不佳等                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tg      | 申戶信用卡繳款紀錄不佳                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | th      | 申戶聯徵 K01 無資料，但 POS 查詢目前有強制停卡(含附卡)紀錄                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ti      | 申戶本行風管查詢有本行規範債信不良情事                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tj      | 申戶曾有債信不良或信用不佳紀錄，但目前已無書面紀錄                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | tk      | 申戶確知遭起訴或假扣押、假處分、禁止處分中                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ua      | 申戶名下無擔保放款已逾月收入的 22 倍                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ub      | 申戶名下無擔保貸款已逾年所得                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | uc      | 申戶所持雙卡(信用卡及現金卡)現欠總額逾年所得                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ud      | 申戶近期增加無擔保貸款                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ue      | 申戶近期在他行有核准無擔保貸款，惟尚未撥款                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | uf      | 申戶名下雙卡(現金卡或信用卡)動用比率高                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ug      | 申戶名下信用卡有預借現金或預借現金頻繁                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | uh      | 申戶近三個月密集申請貸款或信用卡                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ui      | 申戶名下總貸款(含擔保)金額高                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | uj      | 申戶近期增加擔保貸款                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | uk      | 申戶名下從債務過高                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ul      | 入不敷出或家庭負擔重                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | um      | 不動產有私人設定次順位                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | va      | 申戶之身份係冒用                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vb      | 申戶之申請書類填載不實                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vc      | 申戶所述與照會內容不符                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vd      | 申戶檢附資料係屬偽造或不實                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ve      | 申戶任職之機構查無（或無法證實）營運跡象（含虛設行號、已撤銷營業登記、未曾存在等）                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vf      | 申戶任職之機構經照會查無此人                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vg      | 申戶任職之機構經照會已離職                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | vh      | 保人提供之相關資訊有造假或不實                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wa      | 國中（含）以下學歷                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wb      | 年長未婚或離婚                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wc      | 現居宿舍或租賃                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wd      | 申戶職業更換頻繁或現職年資未滿一年﹙若前職屬同類型者不在此限﹚                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | we      | 申戶職業替代性高(如行業、工作職務)                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wf      | 非所載任職機構之正職人員、工作性質明顯屬「按件計酬」、「按日計酬」或無一定之雇主                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wg      | 申戶為任職機構之股東或關係人                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wh      | 申戶任職之機構成立時間短或規模甚小                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wi      | 申戶任職之機構（或該行業）具潛在性營運風險                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wj      | 無收入者(學生、家庭主婦者)                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wk      | 申戶具雙重國籍者                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wl      | 工作地點位台灣本島以外                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wm      | 無任何金融機構放款、支存、信用卡之往來紀錄                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | wn      | 家人反對或有負面評價、與家人互動不佳                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | xa      | 配偶有債信不良或信用不佳                                                                                           |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | xb      | 配偶有信用擴張之虞                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | xc      | 配偶為外籍人士                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | xd      | 配偶為家管(指無收入者)                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | xe      | 配偶之年齡、婚姻家庭狀況、學歷、現居狀況、工作資歷、工作性質、財務狀況等因素綜合研判其信用程度較低或族群特性較不佳 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ya      | 申戶或配偶所經營企業有債信不良或信用不佳                                                                           |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | yb      | 申戶或配偶所經營企業有信用擴張之虞                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | yc      | 申戶或配偶所經營企業成立時間短或規模甚小                                                                           |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | yd      | 申戶或配偶所經營企業（或該行業）具潛在性營運風險                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ye      | 申戶或配偶所經營企業（或該行業）營運狀況不明或無法掌握風險                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | za      | 無法直接連絡本人                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zb      | 申戶配合程度不佳或多所隱瞞                                                                                         |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zc      | 研判借款非本人使用                                                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zd      | 疑似代辦案件                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | ze      | 重覆配件或更改貸款類別                                                                                             |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zf      | 依規範應徵提保證人或設定不動產後承作者，惟無法提供                                                                 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zg      | 綜合研判應徵提保證人或設定不動產後承作者，惟無法提供                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zh      | 保人之年齡、婚姻家庭狀況、學歷、現居狀況、工作資歷、工作性質、財務狀況等因素綜合研判其信用程度較低或族群特性較不佳 |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zi      | 申戶自行退件                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zj      | 系統自行結案（105.04 修訂）                                                                                        |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zk      | 逾期未補資料                                                                                                       |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zl      | 內部規範不宜承作                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zm      | 客戶暫無資金需求                                                                                                   |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zn      | 客戶無法提供必要文件                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zo      | 信保基金不承保                                                                                                     |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zp      | 信保基金保證成數不足                                                                                               |
| LNAPL_REJECT_REASON_1、LNAPL_REJECT_REASON_2、LNAPL_REJECT_REASON_3 | zq      | 信保加註其他批示條件                                                                                               |

### VW_ODS_D_TR1FIL

#### TR103

| 欄位名稱 | 值域 ID | 值域中文說明 |
| -------- | ------- | ------------ |
| TR103    | 10      | 申購         |
| TR103    | 20      | 轉換         |
| TR103    | 30      | 贖回         |
| TR103    | 40      | 除息         |
| TR103    | 50      | 除權         |
| TR103    | 60      | 合併         |
| TR103    | 70      | 分割         |

### VW_ODS_D_CRMTR1

#### TN0013

| 欄位名稱 | 值域 ID | 值域中文說明 |
| -------- | ------- | ------------ |
| TN0013 | 空值 | 臨櫃           |
| TN0013 | I    | 網銀           |
| TN0013 | 1    | 企銀           |
| TN0013 | 2    | IVR (電話下單) |
| TN0013 | 3    | 行動銀行       |
| TN0013 | 8    | 智能理財       |

### VW_ODS_D_FILEOWM

#### C147

| 欄位名稱 | 值域 ID | 值域中文說明     |
|------|-------|------------|
| C147 | GR    | GEB 外幣付款申請 |
| C147 | NW    | 個人網銀       |
| C147 | GB    | GEB 交易     |
| C147 | XL    | 企金網        |
| C147 | RO    | 臨櫃匯出       |

### VW_ODS_D_FILEFXCM

#### C23/C24

| 欄位名稱 | 值域 ID | 值域中文說明     |
|------|-------|------------|
| C23 | 01    | 換匯 |
| C24 | 03    | 換匯       |

#### C83

| 欄位名稱 | 值域 ID | 值域中文說明     |
|------|-------|------------|
| C83 | 1    | 正常交割  |
| C83 | 2    | 展期交割       |

### VW_ODS_D_CFKYC

#### CFKYC_YEAR_SAL_RG

| 欄位名稱 | 值域 ID | 值域中文說明     |
|------|-------|------------|
| CFKYC_YEAR_SAL_RG | 1    | 未達50萬元 |
| CFKYC_YEAR_SAL_RG | 2    | 50萬元（含）～100萬元以下 | 
| CFKYC_YEAR_SAL_RG | 3    | 100萬元（含）～200萬元以下 |
| CFKYC_YEAR_SAL_RG | 4    | 200萬元（含）～300萬元以下 |
| CFKYC_YEAR_SAL_RG | 5    | 300萬元（含）～500萬元以下 |
| CFKYC_YEAR_SAL_RG | 6    | 500萬元（含）以上 |      