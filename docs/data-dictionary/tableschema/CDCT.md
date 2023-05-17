---
sidebar_position: 4
title: 信用卡(CDCT)
---

### VW_ODS_D_JCBD102C
#### 卡片檔(cycle)
| Key | 欄位名稱            | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ----------------------- | ----------------- | -------------------------------- | ---- |
|     | D102_CREDITOR_ID        | VARCHAR2(11 char) | 申請人ID                      |      |
| PK  | D102_CARD_NO            | VARCHAR2(19 char) | 卡號                           |      |
|     | D102_CARD_TYPE          | VARCHAR2(1 char)  | 卡別                           |      |
|     | D102_AFTY_CODE          | VARCHAR2(4 char)  | 認同碼                        |      |
|     | D102_PROD_NO            | VARCHAR2(4 char)  | 專案代號                     |      |
|     | D102_AFEE_CODE          | VARCHAR2(4 char)  | 年費碼                        |      |
|     | D102_A1_FEE_CODE        | VARCHAR2(1 char)  | 第一年年費碼               |      |
|     | D102_ISSUE_DATE         | DATE              | 發卡日期                     |      |
|     | D102_BEG_DATE_NEW       | VARCHAR2(6 char)  | 新有效起日                  |      |
|     | D102_END_DATE_NEW       | VARCHAR2(6 char)  | 新有效迄日                  |      |
|     | D102_OPPOST_DATE        | DATE              | 停掛日期                     |      |
|     | D102_REISSUE_DATE       | DATE              | 補發日期                     |      |
|     | D102_LAST_TRANS_DATE    | DATE              | 最後消費日                  |      |
|     | D102_APPL_NO            | VARCHAR2(12 char) | 申請書編號                  |      |
|     | D102_CURRENT_CODE       | VARCHAR2(1 char)  | 卡片現狀                     |      |
|     | D102_MAJOR_ID           | VARCHAR2(11 char) | 正卡ＩＤ                     |      |
|     | D102_MAJOR_CARD_NO      | VARCHAR2(19 char) | 正卡卡號                     |      |
|     | D102_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位                     |      |
|     | D102_PROMOTE_EMP_NO     | VARCHAR2(11 char) | 推廣人員                     |      |
|     | D102_CLASS              | VARCHAR2(1 char)  | 風險等級                     |      |
|     | D102_TOTAL_AMT          | NUMBER(11,0)      | 消費金額                     |      |
|     | D102_TOTAL_CNT          | NUMBER(7,0)       | 消費筆數                     |      |
|     | D102_BEG_DATE_OLD       | VARCHAR2(6 char)  | 舊有效起日                  |      |
|     | D102_END_DATE_OLD       | VARCHAR2(6 char)  | 舊有效迄日                  |      |
|     | D102_CHANGE_DATE        | DATE              | 換卡日期                     |      |
|     | D102_OLD_CARD           | VARCHAR2(19 char) | 掛失舊卡                     |      |
|     | D102_OPEN_DATE          | DATE              | 開卡日期                     |      |
|     | D102_CARD_SW            | VARCHAR2(3 char)  | 卡片種類                     |      |
|     | D102_CREDITOR_NO        | VARCHAR2(11 char) | 徵信人員                     |      |
|     | D102_CREDIT_APPROVER_NO | VARCHAR2(5 char)  | 徵信主管                     |      |
|     | D102_STMT_CYCLE         | VARCHAR2(2 char)  | 帳務期別                     |      |
|     | D102_OPPOST_REASON      | VARCHAR2(2 char)  | 停掛原因                     |      |
|     | D102_SPRD_NO            | VARCHAR2(6 char)  | 特殊專案代碼               |      |
|     | D102_CREATE_DATE        | DATE              | 建檔日期                     |      |
|     | D102_OPEN_STATUS        | VARCHAR2(1 char)  | 開卡狀態                     |      |
|     | D102_REISSUE_FLAG       | VARCHAR2(1 char)  | 補發新卡註記               |      |
|     | D102_VISA_FLAG          | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_MASTER_FLAG        | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_JCB_FLAG           | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_NEG_FLAG           | VARCHAR2(1 char)  | 黑名單註記                  |      |
|     | D102_CARD_UNIFORM       | VARCHAR2(9 char)  | 商務卡統編                  |      |
|     | D102_OPPOST_REASON_1    | VARCHAR2(2 char)  | 停卡動機                     |      |
|     | D102_APPL_METHOD        | VARCHAR2(4 char)  | 往來途徑                     |      |
|     | D102_TOTAL_CNT_N        | NUMBER(3,0)       | 本年度消費次數            |      |
|     | D102_TOTAL_AMT_N        | NUMBER(11,0)      | 本年度消費金額            |      |
|     | D102_FIRST_FLAG         | VARCHAR2(1 char)  | 新卡友註記                  |      |
|     | D102_PRPJ_CODE          | VARCHAR2(4 char)  | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID     | VARCHAR2(8 char)  | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS      | VARCHAR2(4 char)  | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE         | VARCHAR2(20 char) | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE     | DATE              | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW        | VARCHAR2(4 char)  | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW      | VARCHAR2(4 char)  | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1  | DATE              | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER             | VARCHAR2(2 char)  | 條件差異                     |      |
|     | D102_FIRST_FLAG_2       | VARCHAR2(1 char)  | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO           | VARCHAR2(10 char) | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH        | VARCHAR2(2 char)  | 新光三越店別               |      |
|     | D102_QR_CODE            | VARCHAR2(1 char)  | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO     | VARCHAR2(11 char) | 推薦主管員編               |      |
|     | D102_INTRO_ID           | VARCHAR2(11 char) | 推薦人                        |      |
|     | D102_LAST_EASY_CARD     | VARCHAR2(16 char) | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3       | VARCHAR2(1 char)  | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE         | VARCHAR2(1 char)  | 現狀碼                        |      |
|     | D102_CRLIM              | NUMBER(4,0)       | 卡片額度                     |      |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間               |      |
### VW_ODS_D_JCBD102D
#### 卡片檔(日)
| Key | 欄位名稱            | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ----------------------- | ----------------- | -------------------------------- | ---- |
|     | D102_CREDITOR_ID        | VARCHAR2(11 char) | 申請人ID                      |      |
| PK  | D102_CARD_NO            | VARCHAR2(19 char) | 卡號                           |      |
|     | D102_CARD_TYPE          | VARCHAR2(1 char)  | 卡別                           |      |
|     | D102_AFTY_CODE          | VARCHAR2(4 char)  | 認同碼                        |      |
|     | D102_PROD_NO            | VARCHAR2(4 char)  | 專案代號                     |      |
|     | D102_AFEE_CODE          | VARCHAR2(4 char)  | 年費碼                        |      |
|     | D102_A1_FEE_CODE        | VARCHAR2(1 char)  | 第一年年費碼               |      |
|     | D102_ISSUE_DATE         | DATE              | 發卡日期                     |      |
|     | D102_BEG_DATE_NEW       | VARCHAR2(6 char)  | 新有效起日                  |      |
|     | D102_END_DATE_NEW       | VARCHAR2(6 char)  | 新有效迄日                  |      |
|     | D102_OPPOST_DATE        | DATE              | 停掛日期                     |      |
|     | D102_REISSUE_DATE       | DATE              | 補發日期                     |      |
|     | D102_LAST_TRANS_DATE    | DATE              | 最後消費日                  |      |
|     | D102_APPL_NO            | VARCHAR2(12 char) | 申請書編號                  |      |
|     | D102_CURRENT_CODE       | VARCHAR2(1 char)  | 卡片現狀                     |      |
|     | D102_MAJOR_ID           | VARCHAR2(11 char) | 正卡ＩＤ                     |      |
|     | D102_MAJOR_CARD_NO      | VARCHAR2(19 char) | 正卡卡號                     |      |
|     | D102_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位                     |      |
|     | D102_PROMOTE_EMP_NO     | VARCHAR2(11 char) | 推廣人員                     |      |
|     | D102_CLASS              | VARCHAR2(1 char)  | 風險等級                     |      |
|     | D102_TOTAL_AMT          | NUMBER(11,0)      | 消費金額                     |      |
|     | D102_TOTAL_CNT          | NUMBER(7,0)       | 消費筆數                     |      |
|     | D102_BEG_DATE_OLD       | VARCHAR2(6 char)  | 舊有效起日                  |      |
|     | D102_END_DATE_OLD       | VARCHAR2(6 char)  | 舊有效迄日                  |      |
|     | D102_CHANGE_DATE        | DATE              | 換卡日期                     |      |
|     | D102_OLD_CARD           | VARCHAR2(19 char) | 掛失舊卡                     |      |
|     | D102_OPEN_DATE          | DATE              | 開卡日期                     |      |
|     | D102_CARD_SW            | VARCHAR2(3 char)  | 卡片種類                     |      |
|     | D102_CREDITOR_NO        | VARCHAR2(11 char) | 徵信人員                     |      |
|     | D102_CREDIT_APPROVER_NO | VARCHAR2(5 char)  | 徵信主管                     |      |
|     | D102_STMT_CYCLE         | VARCHAR2(2 char)  | 帳務期別                     |      |
|     | D102_OPPOST_REASON      | VARCHAR2(2 char)  | 停掛原因                     |      |
|     | D102_SPRD_NO            | VARCHAR2(6 char)  | 特殊專案代碼               |      |
|     | D102_CREATE_DATE        | DATE              | 建檔日期                     |      |
|     | D102_OPEN_STATUS        | VARCHAR2(1 char)  | 開卡狀態                     |      |
|     | D102_REISSUE_FLAG       | VARCHAR2(1 char)  | 補發新卡註記               |      |
|     | D102_VISA_FLAG          | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_MASTER_FLAG        | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_JCB_FLAG           | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_NEG_FLAG           | VARCHAR2(1 char)  | 黑名單註記                  |      |
|     | D102_CARD_UNIFORM       | VARCHAR2(9 char)  | 商務卡統編                  |      |
|     | D102_OPPOST_REASON_1    | VARCHAR2(2 char)  | 停卡動機                     |      |
|     | D102_APPL_METHOD        | VARCHAR2(4 char)  | 往來途徑                     |      |
|     | D102_TOTAL_CNT_N        | NUMBER(3,0)       | 本年度消費次數            |      |
|     | D102_TOTAL_AMT_N        | NUMBER(11,0)      | 本年度消費金額            |      |
|     | D102_FIRST_FLAG         | VARCHAR2(1 char)  | 新卡友註記                  |      |
|     | D102_PRPJ_CODE          | VARCHAR2(4 char)  | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID     | VARCHAR2(8 char)  | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS      | VARCHAR2(4 char)  | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE         | VARCHAR2(20 char) | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE     | DATE              | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW        | VARCHAR2(4 char)  | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW      | VARCHAR2(4 char)  | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1  | DATE              | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER             | VARCHAR2(2 char)  | 條件差異                     |      |
|     | D102_FIRST_FLAG_2       | VARCHAR2(1 char)  | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO           | VARCHAR2(10 char) | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH        | VARCHAR2(2 char)  | 新光三越店別               |      |
|     | D102_QR_CODE            | VARCHAR2(1 char)  | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO     | VARCHAR2(11 char) | 推薦主管員編               |      |
|     | D102_INTRO_ID           | VARCHAR2(11 char) | 推薦人                        |      |
|     | D102_LAST_EASY_CARD     | VARCHAR2(16 char) | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3       | VARCHAR2(1 char)  | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE         | VARCHAR2(1 char)  | 現狀碼                        |      |
|     | D102_CRLIM              | NUMBER(4,0)       | 卡片額度                     |      |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間               |      |
### VW_ODS_D_JCBD103
#### 帳務檔(日)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ---------------------- | ----------------- | -------------------------------- | ---- |
| PK  | OUT_APPL_ID            | VARCHAR2(11 char) | ID                               |      |
|     | OUT_BEG_BAL_D          | NUMBER(10,0)      | 期初_溢付款                 |      |
|     | OUT_BEG_BAL_A          | NUMBER(10,0)      | 期初_年費                    |      |
|     | OUT_BEG_BAL_L          | NUMBER(10,0)      | 期初_掛失費                 |      |
|     | OUT_BEG_BAL_B          | NUMBER(10,0)      | 期初_呆帳                    |      |
|     | OUT_BEG_BAL_M          | NUMBER(10,0)      | 期初_卡片貸款              |      |
|     | OUT_BEG_BAL_T          | NUMBER(10,0)      | 期初_催收款                 |      |
|     | OUT_BEG_BAL_I          | NUMBER(10,0)      | 期初_通信預借              |      |
|     | OUT_BEG_BAL_Q          | NUMBER(10,0)      | 期初_代償款                 |      |
|     | OUT_BEG_BAL_P          | NUMBER(10,0)      | 期初_手續費                 |      |
|     | OUT_BEG_BAL_R          | NUMBER(10,0)      | 期初_循環息                 |      |
|     | OUT_BEG_BAL_F          | NUMBER(10,0)      | 期初_違約金                 |      |
|     | OUT_BEG_BAL_C          | NUMBER(10,0)      | 期初_消費款                 |      |
|     | OUT_BEG_BAL_O          | NUMBER(10,0)      | 期初_應收款                 |      |
|     | OUT_BEG_BAL_E          | NUMBER(10,0)      | 期初_爭議款                 |      |
|     | OUT_END_BAL_D          | NUMBER(10,0)      | 期末_溢付款                 |      |
|     | OUT_END_BAL_A          | NUMBER(10,0)      | 期末_年費                    |      |
|     | OUT_END_BAL_L          | NUMBER(10,0)      | 期末_掛失費                 |      |
|     | OUT_END_BAL_B          | NUMBER(10,0)      | 期末_呆帳                    |      |
|     | OUT_END_BAL_M          | NUMBER(10,0)      | 期末_卡片貸款              |      |
|     | OUT_END_BAL_T          | NUMBER(10,0)      | 期末_催收款                 |      |
|     | OUT_END_BAL_I          | NUMBER(10,0)      | 期末_通信預借              |      |
|     | OUT_END_BAL_Q          | NUMBER(10,0)      | 期末_代償款                 |      |
|     | OUT_END_BAL_P          | NUMBER(10,0)      | 期末_手續費                 |      |
|     | OUT_END_BAL_R          | NUMBER(10,0)      | 期末_循環息                 |      |
|     | OUT_END_BAL_F          | NUMBER(10,0)      | 期末_違約金                 |      |
|     | OUT_END_BAL_C          | NUMBER(10,0)      | 期末_消費款                 |      |
|     | OUT_END_BAL_O          | NUMBER(10,0)      | 期末_應收款                 |      |
|     | OUT_END_BAL_E          | NUMBER(10,0)      | 期末_爭議款                 |      |
|     | OUT_CURRENT_BAL        | NUMBER(10,0)      | 目前總餘額                  |      |
|     | OUT_MIN_PAY            | NUMBER(10,0)      | 本期最低應繳款            |      |
|     | OUT_MIN_PAY_BAL        | NUMBER(10,0)      | 本期最低應繳款餘額      |      |
|     | OUT_REVOLVE_AMT        | NUMBER(10,0)      | 循環信用額度               |      |
|     | OUT_REVOLVE_BAL        | NUMBER(10,0)      | 循環信用餘額               |      |
|     | OUT_PAY_AMT            | NUMBER(10,0)      | 本期繳款金額               |      |
|     | OUT_PAY_CNT            | NUMBER(3,0)       | 本期繳款次數               |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char) | 繳款評等                     |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)      | 年度累積繳款               |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)      | 總累積繳款                  |      |
|     | OUT_BAL_SIGN           | VARCHAR2(1 char)  | 目前總餘額之正負號      |      |
|     | OUT_LAST_PAY_DATE      | DATE              | 最近付款日                  |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)       | 前次付款金額               |      |
|     | OUT_LAST_PAY_TYPE      | VARCHAR2(4 char)  | 繳款方式                     |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)  | 帳務週期                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間               |      |
|     | D102_FIRST_FLAG        | VARCHAR2(1 char)  | 新卡友註記                  |      |
|     | D102_PRPJ_CODE         | VARCHAR2(4 char)  | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID    | VARCHAR2(8 char)  | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS     | VARCHAR2(4 char)  | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE        | VARCHAR2(20 char) | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE    | DATE              | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW       | VARCHAR2(4 char)  | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW     | VARCHAR2(4 char)  | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1 | DATE              | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER            | VARCHAR2(2 char)  | 條件差異                     |      |
|     | D102_FIRST_FLAG_2      | VARCHAR2(1 char)  | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO          | VARCHAR2(10 char) | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH       | VARCHAR2(2 char)  | 新光三越店別               |      |
|     | D102_QR_CODE           | VARCHAR2(1 char)  | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO    | VARCHAR2(11 char) | 推薦主管員編               |      |
|     | D102_INTRO_ID          | VARCHAR2(11 char) | 推薦人                        |      |
|     | D102_LAST_EASY_CARD    | VARCHAR2(16 char) | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3      | VARCHAR2(1 char)  | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE        | VARCHAR2(1 char)  | 現狀碼                        |      |
|     | D102_CRLIM             | NUMBER(4,0)       | 卡片額度                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間               |      |
### VW_ODS_D_JCBD103W
#### 帳務檔(CYCLE)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ---------------------- | ----------------- | -------------------------------- | ---- |
| PK  | OUT_APPL_ID            | VARCHAR2(11 char) | ID                               |      |
|     | OUT_BEG_BAL_D          | NUMBER(10,0)      | 期初_溢付款                 |      |
|     | OUT_BEG_BAL_A          | NUMBER(10,0)      | 期初_年費                    |      |
|     | OUT_BEG_BAL_L          | NUMBER(10,0)      | 期初_掛失費                 |      |
|     | OUT_BEG_BAL_B          | NUMBER(10,0)      | 期初_呆帳                    |      |
|     | OUT_BEG_BAL_M          | NUMBER(10,0)      | 期初_卡片貸款              |      |
|     | OUT_BEG_BAL_T          | NUMBER(10,0)      | 期初_催收款                 |      |
|     | OUT_BEG_BAL_I          | NUMBER(10,0)      | 期初_通信預借              |      |
|     | OUT_BEG_BAL_Q          | NUMBER(10,0)      | 期初_代償款                 |      |
|     | OUT_BEG_BAL_P          | NUMBER(10,0)      | 期初_手續費                 |      |
|     | OUT_BEG_BAL_R          | NUMBER(10,0)      | 期初_循環息                 |      |
|     | OUT_BEG_BAL_F          | NUMBER(10,0)      | 期初_違約金                 |      |
|     | OUT_BEG_BAL_C          | NUMBER(10,0)      | 期初_消費款                 |      |
|     | OUT_BEG_BAL_O          | NUMBER(10,0)      | 期初_應收款                 |      |
|     | OUT_BEG_BAL_E          | NUMBER(10,0)      | 期初_爭議款                 |      |
|     | OUT_END_BAL_D          | NUMBER(10,0)      | 期末_溢付款                 |      |
|     | OUT_END_BAL_A          | NUMBER(10,0)      | 期末_年費                    |      |
|     | OUT_END_BAL_L          | NUMBER(10,0)      | 期末_掛失費                 |      |
|     | OUT_END_BAL_B          | NUMBER(10,0)      | 期末_呆帳                    |      |
|     | OUT_END_BAL_M          | NUMBER(10,0)      | 期末_卡片貸款              |      |
|     | OUT_END_BAL_T          | NUMBER(10,0)      | 期末_催收款                 |      |
|     | OUT_END_BAL_I          | NUMBER(10,0)      | 期末_通信預借              |      |
|     | OUT_END_BAL_Q          | NUMBER(10,0)      | 期末_代償款                 |      |
|     | OUT_END_BAL_P          | NUMBER(10,0)      | 期末_手續費                 |      |
|     | OUT_END_BAL_R          | NUMBER(10,0)      | 期末_循環息                 |      |
|     | OUT_END_BAL_F          | NUMBER(10,0)      | 期末_違約金                 |      |
|     | OUT_END_BAL_C          | NUMBER(10,0)      | 期末_消費款                 |      |
|     | OUT_END_BAL_O          | NUMBER(10,0)      | 期末_應收款                 |      |
|     | OUT_END_BAL_E          | NUMBER(10,0)      | 期末_爭議款                 |      |
|     | OUT_CURRENT_BAL        | NUMBER(10,0)      | 目前總餘額                  |      |
|     | OUT_MIN_PAY            | NUMBER(10,0)      | 本期最低應繳款            |      |
|     | OUT_MIN_PAY_BAL        | NUMBER(10,0)      | 本期最低應繳款餘額      |      |
|     | OUT_REVOLVE_AMT        | NUMBER(10,0)      | 循環信用額度               |      |
|     | OUT_REVOLVE_BAL        | NUMBER(10,0)      | 循環信用餘額               |      |
|     | OUT_PAY_AMT            | NUMBER(10,0)      | 本期繳款金額               |      |
|     | OUT_PAY_CNT            | NUMBER(3,0)       | 本期繳款次數               |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char) | 繳款評等                     |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)      | 年度累積繳款               |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)      | 總累積繳款                  |      |
|     | OUT_BAL_SIGN           | VARCHAR2(1 char)  | 目前總餘額之正負號      |      |
|     | OUT_LAST_PAY_DATE      | DATE              | 最近付款日                  |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)       | 前次付款金額               |      |
|     | OUT_LAST_PAY_TYPE      | VARCHAR2(4 char)  | 繳款方式                     |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)  | 帳務週期                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間               |      |
|     | D102_FIRST_FLAG        | VARCHAR2(1 char)  | 新卡友註記                  |      |
|     | D102_PRPJ_CODE         | VARCHAR2(4 char)  | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID    | VARCHAR2(8 char)  | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS     | VARCHAR2(4 char)  | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE        | VARCHAR2(20 char) | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE    | DATE              | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW       | VARCHAR2(4 char)  | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW     | VARCHAR2(4 char)  | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1 | DATE              | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER            | VARCHAR2(2 char)  | 條件差異                     |      |
|     | D102_FIRST_FLAG_2      | VARCHAR2(1 char)  | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO          | VARCHAR2(10 char) | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH       | VARCHAR2(2 char)  | 新光三越店別               |      |
|     | D102_QR_CODE           | VARCHAR2(1 char)  | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO    | VARCHAR2(11 char) | 推薦主管員編               |      |
|     | D102_INTRO_ID          | VARCHAR2(11 char) | 推薦人                        |      |
|     | D102_LAST_EASY_CARD    | VARCHAR2(16 char) | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3      | VARCHAR2(1 char)  | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE        | VARCHAR2(1 char)  | 現狀碼                        |      |
|     | D102_CRLIM             | NUMBER(4,0)       | 卡片額度                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間               |      |
### VW_ODS_D_JCBD104
#### 申請書進件資料檔
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ---------------------- | ------------------ | -------------------------------- | ---- |
|     | OUT_APPL_NO            | VARCHAR2(12 char)  | 申請書收件編號            |      |
|     | OUT_APPL_ID            | VARCHAR2(11 char)  | ID                               |      |
|     | OUT_APPL_CHI_NAME      | VARCHAR2(20 char)  | 申請人中文姓名            |      |
|     | OUT_PROD_NO            | VARCHAR2(4 char)   | 推廣專案代號               |      |
|     | OUT_CARD_CODE          | VARCHAR2(1 char)   | 卡別                           |      |
|     | OUT_CARD_TYPE          | VARCHAR2(1 char)   | 卡類                           |      |
|     | OUT_RECEIVE_DATE       | DATE               | 收件日期                     |      |
|     | OUT_INTRODUCER_CARD_ID | VARCHAR2(19 char)  | 介紹人卡號或ID             |      |
|     | OUT_PROMOTE_DEPT       | VARCHAR2(4 char)   | 推廣單位                     |      |
|     | OUT_PROMOTE_EMP_NO     | VARCHAR2(11 char)  | 推廣員代號                  |      |
|     | OUT_C_RETN_DATE        | DATE               | 徵信退件日                  |      |
|     | OUT_C_TO_NCC_DATE      | DATE               | 送件日                        |      |
|     | OUT_C_NCC_RETN_DATE    | DATE               | 中心退件日                  |      |
|     | OUT_ISSUE_CARD         | VARCHAR2(16 char)  | 發卡卡號                     |      |
|     | OUT_ISSUE_CARD_DATE    | DATE               | 發卡日期                     |      |
|     | OUT_ISSUE_NO           | VARCHAR2(11 char)  | 發卡編號                     |      |
|     | OUT_CAR_NO             | VARCHAR2(8 char)   | 車號                           |      |
|     | OUT_MOTOR              | VARCHAR2(1 char)   | 全鋒註記                     |      |
|     | OUT_MOTOR_DATE         | DATE               | 申請全鋒日期               |      |
|     | OUT_CREDITOR_NO        | VARCHAR2(11 char)  | 徵信員代號                  |      |
|     | OUT_CREDIT_APPROVER_NO | VARCHAR2(5 char)   | 徵信主管代號               |      |
|     | OUT_C_RETN_RESN        | VARCHAR2(3 char)   | 退件代碼                     |      |
|     | OUT_C_NCC_RETN_RESN    | VARCHAR2(2 char)   | 中心退件代碼               |      |
|     | OUT_SPRD_NO            | VARCHAR2(6 char)   | 特殊專案代碼               |      |
|     | OUT_FORCE_MARK         | VARCHAR2(1 char)   | 強制註記                     |      |
|     | OUT_NCC_AFTY_CODE      | VARCHAR2(4 char)   | NCC認同碼                     |      |
|     | OUT_CARD_CODE_2        | VARCHAR2(2 char)   | 卡別２                        |      |
|     | OUT_UPDATE_USER        | VARCHAR2(8 char)   | 維護人員                     |      |
|     | OUT_PROMOTE_PRPJ_NO    | VARCHAR2(4 char)   | 推廣通路                     |      |
|     | OUT_RETN_REMARK        | VARCHAR2(100 char) | 備註                           |      |
|     | OUT_DIFFER             | VARCHAR2(2 char)   | 條件差異                     |      |
|     | OUT_FIRST_REWARD_NO    | VARCHAR2(4 char)   | 保留欄位                     |      |
|     | OUT_TABLE_NO           | VARCHAR2(10 char)  | 專櫃代碼                     |      |
|     | OUT_LOGO               | VARCHAR2(3 char)   | LOGO                             |      |
|     | OUT_APPL_SOURCE        | VARCHAR2(2 char)   | 進件來源                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char)  | 繳款評等                     |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)       | 年度累積繳款               |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)       | 總累積繳款                  |      |
|     | OUT_BAL_SIGN           | VARCHAR2(1 char)   | 目前總餘額之正負號      |      |
|     | OUT_LAST_PAY_DATE      | DATE               | 最近付款日                  |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)        | 前次付款金額               |      |
|     | OUT_LAST_PAY_TYPE      | VARCHAR2(4 char)   | 繳款方式                     |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)   | 帳務週期                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
|     | D102_FIRST_FLAG        | VARCHAR2(1 char)   | 新卡友註記                  |      |
|     | D102_PRPJ_CODE         | VARCHAR2(4 char)   | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID    | VARCHAR2(8 char)   | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS     | VARCHAR2(4 char)   | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE        | VARCHAR2(20 char)  | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE    | DATE               | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW       | VARCHAR2(4 char)   | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW     | VARCHAR2(4 char)   | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1 | DATE               | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER            | VARCHAR2(2 char)   | 條件差異                     |      |
|     | D102_FIRST_FLAG_2      | VARCHAR2(1 char)   | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO          | VARCHAR2(10 char)  | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH       | VARCHAR2(2 char)   | 新光三越店別               |      |
|     | D102_QR_CODE           | VARCHAR2(1 char)   | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO    | VARCHAR2(11 char)  | 推薦主管員編               |      |
|     | D102_INTRO_ID          | VARCHAR2(11 char)  | 推薦人                        |      |
|     | D102_LAST_EASY_CARD    | VARCHAR2(16 char)  | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3      | VARCHAR2(1 char)   | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE        | VARCHAR2(1 char)   | 現狀碼                        |      |
|     | D102_CRLIM             | NUMBER(4,0)        | 卡片額度                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
### VW_ODS_D_JCBD107C
#### 客戶基本資料檔(cycle)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ---------------------- | ------------------ | -------------------------------- | ---- |
| PK  | IDNO                   | VARCHAR2(11 char)  | 申請人身份證號            |      |
|     | CH_NAME                | VARCHAR2(30 char)  | 申請人中文姓名            |      |
|     | SEX                    | VARCHAR2(1 char)   | 性別                           |      |
|     | BRITH_DATE             | DATE               | 申請人出生日期            |      |
|     | EDUCATION              | VARCHAR2(1 char)   | 學歷                           |      |
|     | MARRIAGE               | VARCHAR2(1 char)   | 婚姻狀況                     |      |
|     | RESIDENT_TYPE          | VARCHAR2(1 char)   | 現居狀況                     |      |
|     | CHILD_CNT              | VARCHAR2(2 char)   | 申請來源                     |      |
|     | INCOME                 | NUMBER(5,0)        | 年收入                        |      |
|     | INCOME_OTHER           | NUMBER(5,0)        | 年收入(其他)                |      |
|     | STMT_TYPE              | VARCHAR2(1 char)   | 帳單寄送(卡片寄送)方式 |      |
|     | TEL_H                  | VARCHAR2(12 char)  | 電話(H)                        |      |
|     | RESIDENT_ZIP           | VARCHAR2(5 char)   | 郵遞區號                     |      |
|     | RESIDENT_ADDR          | VARCHAR2(352 char) | 戶籍地址                     |      |
|     | MAIL_ZIP               | VARCHAR2(5 char)   | 郵寄郵遞區號               |      |
|     | MAIL_ADDR              | VARCHAR2(352 char) | 郵寄地址                     |      |
|     | OFFICE_ZIP             | VARCHAR2(5 char)   | 公司郵遞區號               |      |
|     | OFFICE_ADDR            | VARCHAR2(352 char) | 公司地址                     |      |
|     | RELATIVE_NAME          | VARCHAR2(30 char)  | 近親姓名                     |      |
|     | RELATIVE_TEL           | VARCHAR2(12 char)  | 近親電話                     |      |
|     | FRIEND_NAME            | VARCHAR2(30 char)  | 好友姓名                     |      |
|     | FRIEND_TEL             | VARCHAR2(12 char)  | 好友電話                     |      |
|     | SPOUSE_ID              | VARCHAR2(11 char)  | 配偶身份證號               |      |
|     | SPOUSE_NAME            | VARCHAR2(30 char)  | 配偶姓名                     |      |
|     | SPOUSE_TEL             | VARCHAR2(17 char)  | 配偶電話                     |      |
|     | SPOUSE_INCOME          | NUMBER(5,0)        | 配偶年收入                  |      |
|     | OFFICE_TEL             | VARCHAR2(17 char)  | 公司電話                     |      |
|     | GSM_TEL                | VARCHAR2(10 char)  | 行動電話                     |      |
|     | BUSINESS_CODE          | VARCHAR2(2 char)   | 行業別                        |      |
|     | CLASS_CODE             | VARCHAR2(1 char)   | 卡人等級                     |      |
|     | DM_TYPE                | VARCHAR2(1 char)   | 寄送DM型態                   |      |
|     | REMARK                 | VARCHAR2(60 char)  | 備註                           |      |
|     | COMPANY                | VARCHAR2(48 char)  | 公司名稱                     |      |
|     | TITLE                  | VARCHAR2(32 char)  | 職務名稱                     |      |
|     | POSITION_1             | VARCHAR2(8 char)   | 職業職稱                     |      |
|     | EMAIL                  | VARCHAR2(40 char)  | 電子信箱                     |      |
|     | EN_NAME                | VARCHAR2(25 char)  | 申請人英文姓名            |      |
|     | SBT_AMT                | NUMBER(10,0)       | 代償餘額                     |      |
|     | SUB_AMT                | NUMBER(10,0)       | 應收款餘額                  |      |
|     | ABS_AMT                | NUMBER(10,0)       | 催收款餘額                  |      |
|     | S_AMT                  | NUMBER(10,0)       | 呆帳款餘額                  |      |
|     | PAYMENT_ACCT_NO        | VARCHAR2(16 char)  | 繳款戶號                     |      |
|     | SALES_MARK             | VARCHAR2(1 char)   | 共同行銷註記               |      |
|     | UPD_DATE               | DATE               | 最後修改日期               |      |
|     | SECURITY_SUB_DATA      | VARCHAR2(8 char)   | 共同行銷子公司別         |      |
|     | TEL_RESIDENT           | VARCHAR2(12 char)  | 戶籍電話                     |      |
|     | CFPI_DATE              | DATE               | 個資控款日                  |      |
|     | NATIONALITY            | VARCHAR2(2 char)   |                                  |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
|     | D102_FORTH_LINE        | VARCHAR2(20 char)  | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE    | DATE               | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW       | VARCHAR2(4 char)   | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW     | VARCHAR2(4 char)   | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1 | DATE               | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER            | VARCHAR2(2 char)   | 條件差異                     |      |
|     | D102_FIRST_FLAG_2      | VARCHAR2(1 char)   | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO          | VARCHAR2(10 char)  | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH       | VARCHAR2(2 char)   | 新光三越店別               |      |
|     | D102_QR_CODE           | VARCHAR2(1 char)   | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO    | VARCHAR2(11 char)  | 推薦主管員編               |      |
|     | D102_INTRO_ID          | VARCHAR2(11 char)  | 推薦人                        |      |
|     | D102_LAST_EASY_CARD    | VARCHAR2(16 char)  | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3      | VARCHAR2(1 char)   | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE        | VARCHAR2(1 char)   | 現狀碼                        |      |
|     | D102_CRLIM             | NUMBER(4,0)        | 卡片額度                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
### VW_ODS_D_JCBD107D
#### 客戶基本資料檔(日)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ---------------------- | ------------------ | -------------------------------- | ---- |
| PK  | IDNO                   | VARCHAR2(11 char)  | 申請人身份證號            |      |
|     | CH_NAME                | VARCHAR2(30 char)  | 申請人中文姓名            |      |
|     | SEX                    | VARCHAR2(1 char)   | 性別                           |      |
|     | BRITH_DATE             | DATE               | 申請人出生日期            |      |
|     | EDUCATION              | VARCHAR2(1 char)   | 學歷                           |      |
|     | MARRIAGE               | VARCHAR2(1 char)   | 婚姻狀況                     |      |
|     | RESIDENT_TYPE          | VARCHAR2(1 char)   | 現居狀況                     |      |
|     | CHILD_CNT              | VARCHAR2(2 char)   | 申請來源                     |      |
|     | INCOME                 | NUMBER(5,0)        | 年收入                        |      |
|     | INCOME_OTHER           | NUMBER(5,0)        | 年收入(其他)                |      |
|     | STMT_TYPE              | VARCHAR2(1 char)   | 帳單寄送(卡片寄送)方式 |      |
|     | TEL_H                  | VARCHAR2(12 char)  | 電話(H)                        |      |
|     | RESIDENT_ZIP           | VARCHAR2(5 char)   | 郵遞區號                     |      |
|     | RESIDENT_ADDR          | VARCHAR2(352 char) | 戶籍地址                     |      |
|     | MAIL_ZIP               | VARCHAR2(5 char)   | 郵寄郵遞區號               |      |
|     | MAIL_ADDR              | VARCHAR2(352 char) | 郵寄地址                     |      |
|     | OFFICE_ZIP             | VARCHAR2(5 char)   | 公司郵遞區號               |      |
|     | OFFICE_ADDR            | VARCHAR2(352 char) | 公司地址                     |      |
|     | RELATIVE_NAME          | VARCHAR2(30 char)  | 近親姓名                     |      |
|     | RELATIVE_TEL           | VARCHAR2(12 char)  | 近親電話                     |      |
|     | FRIEND_NAME            | VARCHAR2(30 char)  | 好友姓名                     |      |
|     | FRIEND_TEL             | VARCHAR2(12 char)  | 好友電話                     |      |
|     | SPOUSE_ID              | VARCHAR2(11 char)  | 配偶身份證號               |      |
|     | SPOUSE_NAME            | VARCHAR2(30 char)  | 配偶姓名                     |      |
|     | SPOUSE_TEL             | VARCHAR2(17 char)  | 配偶電話                     |      |
|     | SPOUSE_INCOME          | NUMBER(5,0)        | 配偶年收入                  |      |
|     | OFFICE_TEL             | VARCHAR2(17 char)  | 公司電話                     |      |
|     | GSM_TEL                | VARCHAR2(10 char)  | 行動電話                     |      |
|     | BUSINESS_CODE          | VARCHAR2(2 char)   | 行業別                        |      |
|     | CLASS_CODE             | VARCHAR2(1 char)   | 卡人等級                     |      |
|     | DM_TYPE                | VARCHAR2(1 char)   | 寄送DM型態                   |      |
|     | REMARK                 | VARCHAR2(60 char)  | 備註                           |      |
|     | COMPANY                | VARCHAR2(48 char)  | 公司名稱                     |      |
|     | TITLE                  | VARCHAR2(32 char)  | 職務名稱                     |      |
|     | POSITION_1             | VARCHAR2(8 char)   | 職業職稱                     |      |
|     | EMAIL                  | VARCHAR2(40 char)  | 電子信箱                     |      |
|     | EN_NAME                | VARCHAR2(25 char)  | 申請人英文姓名            |      |
|     | SBT_AMT                | NUMBER(10,0)       | 代償餘額                     |      |
|     | SUB_AMT                | NUMBER(10,0)       | 應收款餘額                  |      |
|     | ABS_AMT                | NUMBER(10,0)       | 催收款餘額                  |      |
|     | S_AMT                  | NUMBER(10,0)       | 呆帳款餘額                  |      |
|     | PAYMENT_ACCT_NO        | VARCHAR2(16 char)  | 繳款戶號                     |      |
|     | SALES_MARK             | VARCHAR2(1 char)   | 共同行銷註記               |      |
|     | UPD_DATE               | DATE               | 最後修改日期               |      |
|     | SECURITY_SUB_DATA      | VARCHAR2(8 char)   | 共同行銷子公司別         |      |
|     | TEL_RESIDENT           | VARCHAR2(12 char)  | 戶籍電話                     |      |
|     | CFPI_DATE              | DATE               | 個資控款日                  |      |
|     | NATIONALITY            | VARCHAR2(2 char)   |                                  |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
|     | D102_FORTH_LINE        | VARCHAR2(20 char)  | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE    | DATE               | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW       | VARCHAR2(4 char)   | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW     | VARCHAR2(4 char)   | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1 | DATE               | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER            | VARCHAR2(2 char)   | 條件差異                     |      |
|     | D102_FIRST_FLAG_2      | VARCHAR2(1 char)   | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO          | VARCHAR2(10 char)  | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH       | VARCHAR2(2 char)   | 新光三越店別               |      |
|     | D102_QR_CODE           | VARCHAR2(1 char)   | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO    | VARCHAR2(11 char)  | 推薦主管員編               |      |
|     | D102_INTRO_ID          | VARCHAR2(11 char)  | 推薦人                        |      |
|     | D102_LAST_EASY_CARD    | VARCHAR2(16 char)  | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3      | VARCHAR2(1 char)   | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE        | VARCHAR2(1 char)   | 現狀碼                        |      |
|     | D102_CRLIM             | NUMBER(4,0)        | 卡片額度                     |      |
|     | TBL_UPD_TIM            | TIMESTAMP          | 表格更新時間               |      |
### VW_ODS_D_JCBD108C
#### 歸戶資料檔(cycle)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明         | 備註 |
| --- | ---------------------- | ----------------- | -------------------- | ---- |
| PK  | OUT_ACCOUNT_KEY        | VARCHAR2(19 char) | 歸戶帳號         |      |
|     | OUT_REVOLVE_AMT        | NUMBER(4,0)       | 循環信用額度   |      |
|     | OUT_AUTOPAY_RATE       | NUMBER(3,0)       | 自動扣繳比率   |      |
|     | OUT_RATE               | VARCHAR2(1 char)  | 電腦評等         |      |
|     | OUT_MANUAL_RATE        | VARCHAR2(1 char)  | 人工評等         |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)      | 年度累積繳款   |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)      | 總累積繳款      |      |
|     | OUT_FORCED_STOP_DATE   | DATE              | 強停日期         |      |
|     | OUT_PAYMENT_TYPE       | VARCHAR2(1 char)  | 繳款方式         |      |
|     | OUT_DEDUCT_BANK        | VARCHAR2(4 char)  | 扣繳行庫         |      |
|     | OUT_DEDUCT_ACCOUNT_NO  | VARCHAR2(20 char) | 扣繳帳號         |      |
|     | OUT_STATEMENT_CYCLE    | VARCHAR2(2 char)  | 帳務期別         |      |
|     | OUT_CLASS              | VARCHAR2(1 char)  | 風險等級         |      |
|     | OUT_SIGN_11            | VARCHAR2(1 char)  | 符號1_1            |      |
|     | OUT_JRNL_BAL           | NUMBER(10,0)      | 帳戶總餘額      |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char) | 繳款評等         |      |
|     | OUT_LAST_PAY_DATE      | DATE              | 最近付款日      |      |
|     | OUT_SIGN_2             | VARCHAR2(1 char)  | 符號二            |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)       | 前次付款金額   |      |
|     | OUT_LAST_TOT_DOT       | NUMBER(7,0)       | 上期累計點數   |      |
|     | OUT_CURR_DOT           | NUMBER(7,0)       | 本期新增點數   |      |
|     | OUT_USE_DOT            | NUMBER(7,0)       | 本期使用點數   |      |
|     | OUT_THIS_TOT_DOT       | NUMBER(7,0)       | 本期累計點數   |      |
|     | OUT_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位         |      |
|     | OUT_PROMOTE_EMP_NO     | VARCHAR2(4 char)  | 推廣員編號      |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)  | CYCLE                |      |
|     | OUT_SMS_MARK           | VARCHAR2(1 char)  | 簡訊發送         |      |
|     | OUT_INSU_MARK          | VARCHAR2(1 char)  | 保險費自付      |      |
|     | OUT_END_BAL_Q          | NUMBER(10,0)      | 代償餘額         |      |
|     | OUT_END_BAL_O          | NUMBER(10,0)      | 應收款餘額      |      |
|     | OUT_END_BAL_T          | NUMBER(10,0)      | 催收款餘額      |      |
|     | OUT_END_BAL_B          | NUMBER(10,0)      | 呆帳款餘額      |      |
|     | OUT_PURCHASE_AMT       | NUMBER(15,0)      | 一年內消費金額 |      |
|     | OUT_NOW_AMT            | NUMBER(8,0)       | 目前可用餘額   |      |
|     | OUT_WARNING_RATE       | VARCHAR2(48 char) | 預警評等         |      |
|     | OUT_TRUST_MARK         | VARCHAR2(2 char)  | 債協卡友註記   |      |
|     | OUT_REVOLVE_RATE       | VARCHAR2(4 char)  | 循環利率         |      |
|     | OUT_WARNING_REVOLVE    | VARCHAR2(4 char)  | 預警額度         |      |
|     | OUT_CLASS_AUTH         | VARCHAR2(1 char)  | 授權卡人等級   |      |
|     | OUT_YEAR_PUR_AMT       | VARCHAR2(10 char) | 年度累積消費金額 |      |
|     | OUT_YEAR_CASH_AMT      | VARCHAR2(10 char) | 年度累積預借現金 |      |
|     | OUT_CASH_REVOLVE_AMT   | VARCHAR2(10 char) | 預借可用餘額   |      |
|     | OUT_CONTROL_WARN       | VARCHAR2(40 char) | 授權管制內容   |      |
|     | OUT_CODE_WARN          | VARCHAR2(40 char) | 警示區            |      |
|     | OUT_NOTE               | VARCHAR2(60 char) | 備註               |      |
|     | OUT_SIGN_12            | VARCHAR2(1 char)  | 符號1_2            |      |
|     | OUT_AUTH_NOT_DEPOSIT   | NUMBER(9,0)       | 已授權未請款(含預借) |      |
|     | OUT_SIGN_13            | VARCHAR2(1 char)  | 符號1_3            |      |
|     | OUT_CURRENT_BAL        | NUMBER(9,0)       | 已請款未入帳   |      |
|     | OUT_INLA_AMT           | NUMBER(9,0)       | 分期未入帳金額 |      |
|     | OUT_STMT_TYPE          | VARCHAR2(1 char)  | 歸戶帳單寄送碼 |      |
|     | OUT_PRINT_CODE         | VARCHAR2(2 char)  | 循帳單管制碼   |      |
|     | OUT_CASH_PERCENT       | NUMBER(3,0)       | 預借成數         |      |
|     | OUT_MENU_CLI_DATE      | DATE              | 人工調額日      |      |
|     | OUT_BEFORE_MENU_REVAMT | NUMBER(4,0)       | 人工調額前額度 |      |
|     | OUT_MAJOR_ID_STATUS    | VARCHAR2(1 char)  | 歸戶現況碼      |      |
|     | OUT_OLD_FLAG           | VARCHAR2(1 char)  | 舊卡戶註記      |      |
|     | OUT_DIFFER             | VARCHAR2(1 char)  | 差異戶註記      |      |
|     | OUT_SYSTEM_CLI_DATE    | DATE              | 系統調整額度日期 |      |
|     | OUT_BEFORE_CLI_REVAMT  | VARCHAR2(4 char)  | 系統調整循環信用額度 |      |
|     | OUT_REVOLVE_WARNING2   | VARCHAR2(4 char)  | 預警額度2        |      |
|     | OUT_CASH_REVOLVE       | VARCHAR2(4 char)  | 總預借金額度   |      |
|     | OUT_FBGOV_FLAG         | VARCHAR2(1 char)  | 金管會信貸註記 |      |
|     | OUT_LOAN_FLAG          | VARCHAR2(1 char)  | 金管會消貸註記 |      |
|     | OUT_FILLER1            | VARCHAR2(1 char)  | 保留一            |      |
|     | OUT_FILLER2            | VARCHAR2(3 char)  | 保留二            |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間   |      |
### VW_ODS_D_JCBD108D
#### 歸戶資料檔(日)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明         | 備註 |
| --- | ---------------------- | ----------------- | -------------------- | ---- |
| PK  | OUT_ACCOUNT_KEY        | VARCHAR2(19 char) | 歸戶帳號         |      |
|     | OUT_REVOLVE_AMT        | NUMBER(4,0)       | 循環信用額度   |      |
|     | OUT_AUTOPAY_RATE       | NUMBER(3,0)       | 自動扣繳比率   |      |
|     | OUT_RATE               | VARCHAR2(1 char)  | 電腦評等         |      |
|     | OUT_MANUAL_RATE        | VARCHAR2(1 char)  | 人工評等         |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)      | 年度累積繳款   |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)      | 總累積繳款      |      |
|     | OUT_FORCED_STOP_DATE   | DATE              | 強停日期         |      |
|     | OUT_PAYMENT_TYPE       | VARCHAR2(1 char)  | 繳款方式         |      |
|     | OUT_DEDUCT_BANK        | VARCHAR2(4 char)  | 扣繳行庫         |      |
|     | OUT_DEDUCT_ACCOUNT_NO  | VARCHAR2(20 char) | 扣繳帳號         |      |
|     | OUT_STATEMENT_CYCLE    | VARCHAR2(2 char)  | 帳務期別         |      |
|     | OUT_CLASS              | VARCHAR2(1 char)  | 風險等級         |      |
|     | OUT_SIGN_11            | VARCHAR2(1 char)  | 符號1_1            |      |
|     | OUT_JRNL_BAL           | NUMBER(10,0)      | 帳戶總餘額      |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char) | 繳款評等         |      |
|     | OUT_LAST_PAY_DATE      | DATE              | 最近付款日      |      |
|     | OUT_SIGN_2             | VARCHAR2(1 char)  | 符號二            |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)       | 前次付款金額   |      |
|     | OUT_LAST_TOT_DOT       | NUMBER(7,0)       | 上期累計點數   |      |
|     | OUT_CURR_DOT           | NUMBER(7,0)       | 本期新增點數   |      |
|     | OUT_USE_DOT            | NUMBER(7,0)       | 本期使用點數   |      |
|     | OUT_THIS_TOT_DOT       | NUMBER(7,0)       | 本期累計點數   |      |
|     | OUT_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位         |      |
|     | OUT_PROMOTE_EMP_NO     | VARCHAR2(4 char)  | 推廣員編號      |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)  | CYCLE                |      |
|     | OUT_SMS_MARK           | VARCHAR2(1 char)  | 簡訊發送         |      |
|     | OUT_INSU_MARK          | VARCHAR2(1 char)  | 保險費自付      |      |
|     | OUT_END_BAL_Q          | NUMBER(10,0)      | 代償餘額         |      |
|     | OUT_END_BAL_O          | NUMBER(10,0)      | 應收款餘額      |      |
|     | OUT_END_BAL_T          | NUMBER(10,0)      | 催收款餘額      |      |
|     | OUT_END_BAL_B          | NUMBER(10,0)      | 呆帳款餘額      |      |
|     | OUT_PURCHASE_AMT       | NUMBER(15,0)      | 一年內消費金額 |      |
|     | OUT_NOW_AMT            | NUMBER(8,0)       | 目前可用餘額   |      |
|     | OUT_WARNING_RATE       | VARCHAR2(48 char) | 預警評等         |      |
|     | OUT_TRUST_MARK         | VARCHAR2(2 char)  | 債協卡友註記   |      |
|     | OUT_REVOLVE_RATE       | VARCHAR2(4 char)  | 循環利率         |      |
|     | OUT_WARNING_REVOLVE    | VARCHAR2(4 char)  | 預警額度         |      |
|     | OUT_CLASS_AUTH         | VARCHAR2(1 char)  | 授權卡人等級   |      |
|     | OUT_YEAR_PUR_AMT       | VARCHAR2(10 char) | 年度累積消費金額 |      |
|     | OUT_YEAR_CASH_AMT      | VARCHAR2(10 char) | 年度累積預借現金 |      |
|     | OUT_CASH_REVOLVE_AMT   | VARCHAR2(10 char) | 預借可用餘額   |      |
|     | OUT_CONTROL_WARN       | VARCHAR2(40 char) | 授權管制內容   |      |
|     | OUT_CODE_WARN          | VARCHAR2(40 char) | 警示區            |      |
|     | OUT_NOTE               | VARCHAR2(60 char) | 備註               |      |
|     | OUT_SIGN_12            | VARCHAR2(1 char)  | 符號1_2            |      |
|     | OUT_AUTH_NOT_DEPOSIT   | NUMBER(9,0)       | 已授權未請款(含預借) |      |
|     | OUT_SIGN_13            | VARCHAR2(1 char)  | 符號1_3            |      |
|     | OUT_CURRENT_BAL        | NUMBER(9,0)       | 已請款未入帳   |      |
|     | OUT_INLA_AMT           | NUMBER(9,0)       | 分期未入帳金額 |      |
|     | OUT_STMT_TYPE          | VARCHAR2(1 char)  | 歸戶帳單寄送碼 |      |
|     | OUT_PRINT_CODE         | VARCHAR2(2 char)  | 循帳單管制碼   |      |
|     | OUT_CASH_PERCENT       | NUMBER(3,0)       | 預借成數         |      |
|     | OUT_MENU_CLI_DATE      | DATE              | 人工調額日      |      |
|     | OUT_BEFORE_MENU_REVAMT | NUMBER(4,0)       | 人工調額前額度 |      |
|     | OUT_MAJOR_ID_STATUS    | VARCHAR2(1 char)  | 歸戶現況碼      |      |
|     | OUT_OLD_FLAG           | VARCHAR2(1 char)  | 舊卡戶註記      |      |
|     | OUT_DIFFER             | VARCHAR2(1 char)  | 差異戶註記      |      |
|     | OUT_SYSTEM_CLI_DATE    | DATE              | 系統調整額度日期 |      |
|     | OUT_BEFORE_CLI_REVAMT  | VARCHAR2(4 char)  | 系統調整循環信用額度 |      |
|     | OUT_REVOLVE_WARNING2   | VARCHAR2(4 char)  | 預警額度2        |      |
|     | OUT_CASH_REVOLVE       | VARCHAR2(4 char)  | 總預借金額度   |      |
|     | OUT_FBGOV_FLAG         | VARCHAR2(1 char)  | 金管會信貸註記 |      |
|     | OUT_LOAN_FLAG          | VARCHAR2(1 char)  | 金管會消貸註記 |      |
|     | OUT_FILLER1            | VARCHAR2(1 char)  | 保留一            |      |
|     | OUT_FILLER2            | VARCHAR2(3 char)  | 保留二            |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間   |      |
### VW_ODS_D_JCRMBIN
#### 卡別代碼檔
| Key | 欄位名稱 | 欄位資料型態 | 欄位說明 | 備註 |
| --- | ----------- | ----------------- | ------------ | ---- |
|     | OUT_BIN     | VARCHAR2(8 char)  | 國際組織別 |      |
|     | OUT_TYPE    | VARCHAR2(1 char)  | 卡類       |      |
|     | OUT_CTG     | VARCHAR2(1 char)  | 卡別       |      |
|     | OUT_PROD    | VARCHAR2(4 char)  | 專案代號 |      |
|     | OUT_DESC    | VARCHAR2(42 char) | 說明       |      |
|     | OUT_LOGO    | VARCHAR2(3 char)  | LOGO         |      |
|     | TBL_UPD_TIM | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_D_JCRMCTL
#### 控卡原因代碼檔
| Key | 欄位名稱  | 欄位資料型態 | 欄位說明 | 備註 |
| --- | ------------- | ----------------- | ------------ | ---- |
|     | OUT_CODE      | VARCHAR2(3 char)  | 代碼       |      |
|     | OUT_DESC      | VARCHAR2(62 char) | 說明       |      |
|     | OUT_AUTH_CODE | VARCHAR2(1 char)  | 授權回覆碼 |      |
|     | TBL_UPD_TIM   | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_D_JCSA669
#### 歸戶帳務資料檔
| Key | 欄位名稱             | 欄位資料型態 | 欄位說明                            | 備註 |
| --- | ------------------------ | ----------------- | --------------------------------------- | ---- |
| PK  | ACCOUNT_ID               | VARCHAR2(11 char) | 歸戶字號                            |      |
|     | CHI_NAME                 | VARCHAR2(10 char) | 姓名                                  |      |
|     | CYCLE                    | VARCHAR2(2 char)  | 期別                                  |      |
|     | DEL_MM                   | VARCHAR2(2 char)  | 帳齡                                  |      |
|     | OFF_DATE                 | DATE              | 轉呆帳日                            |      |
|     | END_BAL_COMQK            | NUMBER(12,0)      | 本金                                  |      |
|     | END_BAL_R                | NUMBER(12,0)      | 循環息                               |      |
|     | END_BAL_F                | NUMBER(12,0)      | 違約金                               |      |
|     | END_BAL_C                | NUMBER(12,0)      | 消費款                               |      |
|     | END_BAL_O                | NUMBER(12,0)      | 應收款                               |      |
|     | END_BAL_T                | NUMBER(12,0)      | 催收款                               |      |
|     | END_BAL_B                | NUMBER(12,0)      | 呆帳                                  |      |
|     | END_BAL_A                | NUMBER(12,0)      | 年費                                  |      |
|     | END_BAL_L                | NUMBER(12,0)      | 掛失費                               |      |
|     | END_BAL_K                | NUMBER(12,0)      | 通信預借現金                      |      |
|     | END_BAL_E                | NUMBER(12,0)      | 爭議款                               |      |
|     | END_BAL_Q                | NUMBER(12,0)      | 代償款                               |      |
|     | END_BAL_P                | NUMBER(12,0)      | 手續費                               |      |
|     | END_BAL_M                | NUMBER(12,0)      | 卡貸本金                            |      |
|     | END_BAL_MX               | NUMBER(12,0)      | 卡貸息                               |      |
|     | END_BAL_X1               | NUMBER(12,0)      | 不計提息                            |      |
|     | END_BAL_ALL              | NUMBER(12,0)      | 總欠款                               |      |
|     | END_BAL_R1               | NUMBER(12,0)      | 本期循環息                         |      |
|     | END_BAL_Q1               | NUMBER(12,0)      | 本期代償息                         |      |
|     | END_BAL_T_1              | NUMBER(12,0)      | 催收款_本金                        |      |
|     | END_BAL_TR_1             | NUMBER(12,0)      | 催收款_利息                        |      |
|     | END_BAL_TR_X             | NUMBER(12,0)      | 催收款_本利和                     |      |
|     | DEBT_T_ST                | NUMBER(12,0)      | 催收款_一般                        |      |
|     | DEBT_T_MA                | NUMBER(12,0)      | 催收款_卡貸                        |      |
|     | DEBT_T_OT                | NUMBER(12,0)      | 催收款_代償                        |      |
|     | DEBT_T_BA                | NUMBER(12,0)      | 催收款_通信                        |      |
|     | END_BAL_B_1              | NUMBER(12,0)      | 呆帳款_本金                        |      |
|     | END_BAL_BR_1             | NUMBER(12,0)      | 呆帳款_利息                        |      |
|     | END_BAL_BR_X             | NUMBER(12,0)      | 呆帳款_本利和                     |      |
|     | DEBT_B_ST                | NUMBER(12,0)      | 呆帳款_一般                        |      |
|     | DEBT_B_MA                | NUMBER(12,0)      | 呆帳款_卡貸                        |      |
|     | DEBT_B_OT                | NUMBER(12,0)      | 呆帳款_代償                        |      |
|     | DEBT_B_BA                | NUMBER(12,0)      | 呆帳款_通信                        |      |
|     | RECEIVE_FOR_HELP         | VARCHAR2(2 char)  | 委外註記                            |      |
|     | CLOSE_DATE               | VARCHAR2(2 char)  | 關帳日                               |      |
|     | INOAYY                   | VARCHAR2(2 char)  | 委外別                               |      |
|     | TYPE                     | VARCHAR2(1 char)  | 類別                                  |      |
|     | BUSINESS_DATE            | DATE              | 營業日                               |      |
|     | NOT_BILL_FLAG            | VARCHAR2(1 char)  | 未到期金額FLAG                     |      |
|     | NOT_BILL                 | NUMBER(12,0)      | 未到期金額LOAN+CASH+BTLG+INST+BLNW+TRVY |      |
|     | LOAN_BAL                 | NUMBER(12,0)      | 未到期金額_卡貸本金            |      |
|     | LOAN_RENT                | NUMBER(12,0)      | 未到期金額_卡貸利息            |      |
|     | CASH_BAL                 | NUMBER(12,0)      | 未到期金額_通信預借金本金   |      |
|     | CASH_INTE                | NUMBER(12,0)      | 未到期金額_通信預借金利息   |      |
|     | CASH_MFEE                | NUMBER(12,0)      | 未到期金額_通信預借金手續費 |      |
|     | INST_BAL                 | NUMBER(12,0)      | 未到期金額_分期付款本金      |      |
|     | INST_MFEE                | NUMBER(12,0)      | 未到期金額_分期付款手續費   |      |
|     | BLNW_BAL_FLAG            | VARCHAR2(1 char)  | 未到期金額_1231代墊款本金FLAG |      |
|     | BLNW_BAL                 | NUMBER(12,0)      | 未到期金額_1231代墊款本金     |      |
|     | BLNW_MFEE                | NUMBER(12,0)      | 未到期金額_1231代墊款手續費  |      |
|     | IRVY_BAL                 | NUMBER(12,0)      | 未到期金額_郵購金額            |      |
|     | BTLG_MFEE                | NUMBER(12,0)      | 未到期金額_代償手續費         |      |
|     | ALL_INTE                 | NUMBER(12,0)      | 未到期利息加總                   |      |
|     | ALL_MFEE                 | NUMBER(12,0)      | 未到期費用加總                   |      |
|     | TREATY_FLAG              | VARCHAR2(1 char)  | 是否免列逾放                      |      |
|     | CONS_DATE                | DATE              | 申請債協日期                      |      |
|     | CANCEL_DATE              | DATE              | 解除債協日期                      |      |
|     | CONS_STATUS              | VARCHAR2(1 char)  | 協商案件狀態                      |      |
|     | CNTR_MM                  | VARCHAR2(2 char)  | 941231帳齡                            |      |
|     | RECALL_FLAG              | VARCHAR2(1 char)  | 回沖註記                            |      |
|     | TREATY_CNT               | NUMBER(3,0)       | 是否免列逾放繳款次數          |      |
|     | EMPL_NO                  | VARCHAR2(5 char)  | 催收員代號                         |      |
|     | PAY_AMT                  | NUMBER(12,0)      | 本期繳款金額                      |      |
|     | MIN_PAY                  | NUMBER(12,0)      | 本期最低應繳款總額             |      |
|     | MIN_PAY_BAL              | NUMBER(12,0)      | 本期最低應繳款餘額             |      |
|     | BTLG_AMT                 | NUMBER(10,0)      | 未到期代償手續費                |      |
|     | TREATY_AMT               | NUMBER(10,0)      | 債協銷帳金額                      |      |
|     | ACT_FLAG                 | VARCHAR2(1 char)  | 是否有活卡                         |      |
|     | ABD_FLAG                 | VARCHAR2(1 char)  | 是否有強停卡                      |      |
|     | R_UNHELP_AMT             | NUMBER(10,0)      | 循環息之債協提存息             |      |
|     | T_UNHELP_AMT             | NUMBER(10,0)      | 催收款之債協提存息             |      |
|     | B_UNHELP_AMT             | NUMBER(10,0)      | 呆帳之債協提存息                |      |
|     | CONS1_DATE               | DATE              | 申請前置協商日                   |      |
|     | APPR1_DATE               | DATE              | 前置協商簽約日                   |      |
|     | CONS1_CANCEL_DATE        | DATE              | 解除前置協商日                   |      |
|     | CONS1_STATUS             | VARCHAR2(1 char)  | 前置協商狀態                      |      |
|     | CONS2_DATE               | DATE              | 申請更生日                         |      |
|     | APPR2_DATE               | DATE              | 更生簽約日                         |      |
|     | CONS2_CANCEL_DATE        | DATE              | 解除更生日                         |      |
|     | CONS2_STATUS             | VARCHAR2(1 char)  | 更生狀態                            |      |
|     | CONS3_DATE               | DATE              | 申請清算日                         |      |
|     | APPR3_DATE               | DATE              | 清算程序日                         |      |
|     | CONS3_CANCEL_DATE        | DATE              | 解除清算日                         |      |
|     | CONS3_STATUS             | VARCHAR2(1 char)  | 清算狀態                            |      |
|     | EXCEED_CNT               | NUMBER(1,0)       | 免逾放次數(繳款次數)           |      |
|     | OFF_DATE_BEF             | DATE              | 原轉呆日期                         |      |
|     | APPLY_MM                 | VARCHAR2(2 char)  | 申請協商帳齡                      |      |
|     | CURR_MM                  | VARCHAR2(2 char)  | 實際帳齡                            |      |
|     | ADJ_MM                   | VARCHAR2(2 char)  | 調整帳齡                            |      |
|     | CLAIM_AMT                | NUMBER(12,0)      | 債權金額                            |      |
|     | ASSET_TYPE               | VARCHAR2(2 char)  | 資產分類                            |      |
|     | CORT_AMT                 | NUMBER(12,0)      | 債協單筆債權金額                |      |
|     | CORT_RATE                | NUMBER(4,2)       | 債協優惠利率                      |      |
|     | CORT_TOT_INSTALL_CNT     | NUMBER(3,0)       | 債協攤還期數                      |      |
|     | CORT_MIN_PAY             | NUMBER(12,0)      | 債協應分配金額                   |      |
|     | CORT_TOT_PAY             | NUMBER(12,0)      | 債協已履約金額                   |      |
|     | OUT_CON1_AMT             | NUMBER(12,0)      | 前協單筆債權金額                |      |
|     | OUT_CON1_RATE            | NUMBER(4,2)       | 前協優惠利率                      |      |
|     | OUT_CON1_TOT_INSTALL_CNT | NUMBER(3,0)       | 前協攤還期數                      |      |
|     | OUT_CON1_MIN_PAY         | NUMBER(12,0)      | 前協應分配金額                   |      |
|     | OUT_CON1_TOT_PAY         | NUMBER(12,0)      | 前協已履約金額                   |      |
|     | OUT_CON2_AMT             | NUMBER(12,0)      | 更生單筆債權金額                |      |
|     | OUT_CON2_RATE            | NUMBER(4,2)       | 更生優惠利率                      |      |
|     | OUT_CON2_TOT_INSTALL_CNT | NUMBER(3,0)       | 更生攤還期數                      |      |
|     | OUT_CON2_MIN_PAY         | NUMBER(12,0)      | 更生應分配金額                   |      |
|     | OUT_CON2_TOT_PAY         | NUMBER(12,0)      | 更生已履約金額                   |      |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間                      |      |
### VW_ODS_D_JCSD114
#### 控卡檔
| Key | 欄位名稱       | 欄位資料型態 | 欄位說明                 | 備註 |
| --- | ------------------ | ----------------- | ---------------------------- | ---- |
|     | CONTROL_TYPE       | VARCHAR2(1 char)  | 控卡類別                 |      |
|     | CARD_NO            | VARCHAR2(19 char) | 管控卡號                 |      |
|     | IDNO               | VARCHAR2(11 char) | 管控ID                     |      |
|     | ACTION_CODE        | VARCHAR2(1 char)  | 回覆碼                    |      |
|     | CONTROL_START_DATE | DATE              | 鎖卡起日                 |      |
|     | CONTROL_END_DATE   | DATE              | 鎖卡迄日                 |      |
|     | REVAMT_BRANCH      | VARCHAR2(4 char)  | 存款不足暫停消費所屬分行代碼 |      |
|     | REVAMT_REASON      | VARCHAR2(2 char)  | 分行退票原因代碼     |      |
|     | REVAMT_FLAG        | VARCHAR2(1 char)  | 暫停消費來源           |      |
|     | ACTIVE_CARD_FLAG   | VARCHAR2(1 char)  | 持有效卡註記           |      |
|     | CONTROL_SORT       | VARCHAR2(3 char)  | 控卡原因代碼           |      |
|     | MARK               | VARCHAR2(1 char)  | 註記                       |      |
|     | TBL_UPD_TIM        | TIMESTAMP         | 表格更新時間           |      |
### VW_ODS_D_JCSM106
#### 行動綁定
| Key | 欄位名稱     | 欄位資料型態 | 欄位說明 | 備註 |
| --- | ---------------- | ----------------- | ------------ | ---- |
|     | TPDW_CARD_NO     | VARCHAR2(16 char) | 信用卡號 |      |
|     | TPDW_APAN_NO     | VARCHAR2(16 char) | ＨＣＥ卡號 |      |
|     | TPDW_EXPIRE_DATE | VARCHAR2(6 char)  | ＨＣＥ效期 |      |
|     | TPDW_CREATE_DATE | DATE              | ＨＣＥ建檔日 |      |
|     | TPDW_SIR_STATUS  | VARCHAR2(2 char)  | ＨＣＥ狀態 |      |
|     | TPDW_CARD_ID     | VARCHAR2(11 char) | 卡ＩＤ    |      |
|     | TPDW_PAY_FLAG    | VARCHAR2(1 char)  | 行動支付種類 |      |
|     | TPDW_SIR         | VARCHAR2(36 char) | SIR          |      |
|     | TPDW_CANCEL_DATE | DATE              | 取消日期 |      |
|     | TBL_UPD_TIM      | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_D_JCSMHBL
#### 消費請款檔
| Key | 欄位名稱             | 欄位資料型態 | 欄位說明         | 備註 |
| --- | ------------------------ | ----------------- | -------------------- | ---- |
|     | OUT_ID                   | VARCHAR2(11 char) | 歸戶帳號         |      |
|     | OUT_MAJOR_CARD_NO        | VARCHAR2(19 char) | 正卡卡號         |      |
|     | OUT_REAL_CARD_NO         | VARCHAR2(19 char) | 消費卡號         |      |
|     | OUT_TRANSACTION_CODE     | VARCHAR2(2 char)  | 交易碼            |      |
|     | OUT_DESTINATION_AMT      | NUMBER(10,0)      | 目的地金額      |      |
|     | OUT_DESTINATION_CURRENCY | VARCHAR2(3 char)  | 目的地幣別      |      |
|     | OUT_SOURCE_AMT           | NUMBER(10,0)      | 原始地金額      |      |
|     | OUT_SOURCE_CURRENCY      | VARCHAR2(3 char)  | 原始地幣別      |      |
|     | OUT_MERCHANT_ENG_NAME    | VARCHAR2(25 char) | 特店英文名稱   |      |
|     | OUT_MERCHANT_CITY        | VARCHAR2(13 char) | 特店城市         |      |
|     | OUT_MERCHANT_COUNTRY     | VARCHAR2(6 char)  | 特店國家         |      |
|     | OUT_MERCHANT_CATEGORY    | VARCHAR2(4 char)  | 特店行業別      |      |
|     | OUT_MERCHANT_ZIP         | VARCHAR2(10 char) | 特店郵區         |      |
|     | OUT_MERCHANT_STATE       | VARCHAR2(10 char) | 特店省份         |      |
|     | OUT_MERCHANT_NO          | VARCHAR2(15 char) | 特店代號         |      |
|     | OUT_MERCHANT_CHI_NAME    | VARCHAR2(60 char) | 特店中文名稱   |      |
|     | OUT_AUTHORIZATION        | VARCHAR2(8 char)  | 授權碼            |      |
|     | OUT_BILL_TYPE            | VARCHAR2(1 char)  | 帳單類別         |      |
|     | OUT_CASH_ADV_FEE         | NUMBER(10,0)      | 預借現金         |      |
|     | OUT_PROCESS_DATE         | VARCHAR2(4 char)  | 中央處理日      |      |
|     | OUT_ACQUIRE_DATE         | DATE              | 清算日期         |      |
|     | OUT_PURCHASE_DATE        | DATE              | 消費日            |      |
|     | OUT_ENTER_DATE           | DATE              | 建檔日            |      |
|     | OUT_ACCOUNT_DATE         | DATE              | 入帳日            |      |
|     | OUT_INSTALL_TOT_PERIOD   | NUMBER(3,0)       | 分期付款總期數 |      |
|     | OUT_INSTALL_CURR_PERIOD  | NUMBER(3,0)       | 分期付款目前期數 |      |
|     | OUT_FILM_NO              | VARCHAR2(46 char) | 縮影片號碼      |      |
|     | OUT_BLHS_FLAG            | VARCHAR2(1 char)  | 是否有出帳單   |      |
|     | OUT_LOT_NO               | VARCHAR2(7 char)  | 批號               |      |
|     | OUT_PROD_NO              | VARCHAR2(4 char)  | 專案代號         |      |
|     | OUT_BONUS_AMT            | NUMBER(10,0)      | 紅利折抵消費金額 |      |
|     | OUT_POINTS_REDEMPTION    | NUMBER(7,0)       | 紅利折抵點數   |      |
|     | OUT_FISC_FLAG            | VARCHAR2(1 char)  | 收單來源碼      |      |
|     | OUT_BTLG_SEQ             | VARCHAR2(5 char)  | 代償序號         |      |
|     | OUT_ADD_FEE              | NUMBER(5,0)       | 附加費            |      |
|     | OUT_AQRHEAD_DATE         | VARCHAR2(6 char)  | 清算報表檔頭日期 |      |
|     | OUT_NCCC_AFTY_CODE       | VARCHAR2(4 char)  | 認同碼            |      |
|     | OUT_EDC_FLAG             | VARCHAR2(37 char) | EDCflag              |      |
|     | OUT_HCE_FLAG             | VARCHAR2(1 char)  | 手機支付交易註記 |      |
|     | OUT_TRANSACTION_CODE_V   | VARCHAR2(4 char)  | 交易碼            |      |
|     | OUT_NO_PURCHASE_FLAG     | VARCHAR2(1 char)  | 非稅款/全家/全聯註記 |      |
|     | OUT_POS_ENTRY_MODE       | VARCHAR2(4 char)  | ENTRY_MODE           |      |
|     | OUT_ECI_FLAG             | VARCHAR2(1 char)  | ECI                  |      |
|     | OUT_UCAF                 | VARCHAR2(3 char)  | UCAF                 |      |
|     | DEL_COL                  | VARCHAR2(21 char) | 資料刪除條件使用 |      |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間   |      |
### VW_ODS_D_JCSMHBL_VD
#### VD簽帳金融卡交易資料
| Key |                          | 欄位資料型態 | 欄位說明     | 備註 |
| --- | ------------------------ | ----------------- | ---------------- | ---- |
|     | OUT_ID                   | VARCHAR2(11 char) | 歸戶帳號     |      |
|     | OUT_MAJOR_CARD_NO        | VARCHAR2(19 char) | 正卡卡號     |      |
|     | OUT_REAL_CARD_NO         | VARCHAR2(19 char) | 消費卡號     |      |
|     | OUT_TRANSACTION_CODE     | VARCHAR2(2 char)  | 交易碼        |      |
|     | OUT_DESTINATION_AMT      | NUMBER(10,0)      | 目的地金額  |      |
|     | OUT_DESTINATION_CURRENCY | VARCHAR2(3 char)  | 目的地幣別  |      |
|     | OUT_SOURCE_AMT           | NUMBER(10,0)      | 原始地金額  |      |
|     | OUT_SOURCE_CURRENCY      | VARCHAR2(3 char)  | 原始地幣別  |      |
|     | OUT_MERCHANT_ENG_NAME    | VARCHAR2(25 char) | 特店英文名稱 |      |
|     | OUT_MERCHANT_CITY        | VARCHAR2(13 char) | 特店城市     |      |
|     | OUT_MERCHANT_COUNTRY     | VARCHAR2(6 char)  | 特店國家     |      |
|     | OUT_MERCHANT_CATEGORY    | VARCHAR2(4 char)  | 特店行業別  |      |
|     | OUT_MERCHANT_ZIP         | VARCHAR2(10 char) | 特店郵區     |      |
|     | OUT_MERCHANT_STATE       | VARCHAR2(10 char) | 特店省份     |      |
|     | OUT_MERCHANT_NO          | VARCHAR2(15 char) | 特店代號     |      |
|     | OUT_MERCHANT_CHI_NAME    | VARCHAR2(60 char) | 特店中文名稱 |      |
|     | OUT_AUTHORIZATION        | VARCHAR2(8 char)  | 授權碼        |      |
|     | OUT_BILL_TYPE            | VARCHAR2(1 char)  | 帳單類別     |      |
|     | OUT_CASH_ADV_FEE         | NUMBER(10,0)      | 預借現金     |      |
|     | OUT_PROCESS_DATE         | VARCHAR2(4 char)  | 中央處理日  |      |
|     | OUT_ACQUIRE_DATE         | DATE              | 清算日期     |      |
|     | OUT_PURCHASE_DATE        | DATE              | 消費日        |      |
|     | OUT_ENTER_DATE           | DATE              | 建檔日        |      |
|     | OUT_ACCOUNT_DATE         | DATE              | 入帳日        |      |
|     | OUT_INSTALL_TOT_PERIOD   | NUMBER(3,0)       | 分期付款總期數 |      |
|     | OUT_INSTALL_CURR_PERIOD  | NUMBER(3,0)       | 分期付款目前期數 |      |
|     | OUT_FILM_NO              | VARCHAR2(46 char) | 縮影片號碼  |      |
|     | OUT_BLHS_FLAG            | VARCHAR2(1 char)  | 是否有出帳單 |      |
|     | OUT_LOT_NO               | VARCHAR2(7 char)  | 批號           |      |
|     | OUT_PROD_NO              | VARCHAR2(4 char)  | 專案代號     |      |
|     | OUT_BONUS_AMT            | NUMBER(10,0)      | 紅利折抵消費金額 |      |
|     | OUT_POINTS_REDEMPTION    | NUMBER(7,0)       | 紅利折抵點數 |      |
|     | OUT_FISC_FLAG            | VARCHAR2(1 char)  | 收單來源碼  |      |
|     | OUT_BTLG_SEQ             | VARCHAR2(5 char)  | 代償序號     |      |
|     | OUT_ADD_FEE              | NUMBER(5,0)       | 附加費        |      |
|     | OUT_AQRHEAD_DATE         | VARCHAR2(6 char)  | 清算報表檔頭日期 |      |
|     | OUT_NCCC_AFTY_CODE       | VARCHAR2(4 char)  | 認同碼        |      |
|     | OUT_EDC_FLAG             | VARCHAR2(37 char) | EDCflag          |      |
|     | OUT_HCE_FLAG             | VARCHAR2(1 char)  | HCE Flag         |      |
|     | OUT_TRANSACTION_CODE_V   | VARCHAR2(4 char)  | 交易碼        |      |
|     | DEL_COL                  | VARCHAR2(21 char) | 資料刪除條件使用 |      |
|     | TBL_UPD_TIM              | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_D_JCSSTMD
#### 帳單明細檔(cycle)
| Key | 欄位名稱         | 欄位資料型態 | 欄位說明  | 備註 |
| --- | -------------------- | ------------------ | ------------- | ---- |
| PK  | STMD_ID              | VARCHAR2(11 char)  | 歸戶ID      |      |
| PK  | STMD_SEQ_NO          | VARCHAR2(15 char)  | 流水號     |      |
|     | STMD_PUR_D           | DATE               | 消費日     |      |
|     | STMD_ACQ_D           | DATE               | 入帳日     |      |
|     | STMD_DES_C           | VARCHAR2(60 char)  | 消費說明–中文 |      |
|     | STMD_F_AMT           | NUMBER(14,2)       | 外幣金額  |      |
|     | STMD_CONVERSION_DATE | DATE               | 折算日     |      |
|     | STMD_P_AMT           | NUMBER(11,0)       | 台幣金額  |      |
|     | STMD_MCC_CODE        | VARCHAR2(4 char)   | MCC-CODE      |      |
| PK  | STMD_ACCT_YYMM       | VARCHAR2(5 char)   | 本次帳務月份 |      |
| PK  | STMD_STMT_CYCLE      | VARCHAR2(2 char)   | 帳務期別  |      |
|     | FILLER               | VARCHAR2(350 char) | 保留欄位  |      |
|     | TBL_UPD_TIM          | TIMESTAMP          | 表格更新時間 |      |
### VW_ODS_M_JCBD102M
#### 卡片檔(月)
| Key | 欄位名稱            | 欄位資料型態 | 欄位說明                     | 備註 |
| --- | ----------------------- | ----------------- | -------------------------------- | ---- |
|     | D102_CREDITOR_ID        | VARCHAR2(11 char) | 申請人ID                      |      |
| PK  | D102_CARD_NO            | VARCHAR2(19 char) | 卡號                           |      |
|     | D102_CARD_TYPE          | VARCHAR2(1 char)  | 卡別                           |      |
|     | D102_AFTY_CODE          | VARCHAR2(4 char)  | 認同碼                        |      |
|     | D102_PROD_NO            | VARCHAR2(4 char)  | 專案代號                     |      |
|     | D102_AFEE_CODE          | VARCHAR2(4 char)  | 年費碼                        |      |
|     | D102_A1_FEE_CODE        | VARCHAR2(1 char)  | 第一年年費碼               |      |
|     | D102_ISSUE_DATE         | DATE              | 發卡日期                     |      |
|     | D102_BEG_DATE_NEW       | VARCHAR2(6 char)  | 新有效起日                  |      |
|     | D102_END_DATE_NEW       | VARCHAR2(6 char)  | 新有效迄日                  |      |
|     | D102_OPPOST_DATE        | DATE              | 停掛日期                     |      |
|     | D102_REISSUE_DATE       | DATE              | 補發日期                     |      |
|     | D102_LAST_TRANS_DATE    | DATE              | 最後消費日                  |      |
|     | D102_APPL_NO            | VARCHAR2(12 char) | 申請書編號                  |      |
|     | D102_CURRENT_CODE       | VARCHAR2(1 char)  | 卡片現狀                     |      |
|     | D102_MAJOR_ID           | VARCHAR2(11 char) | 正卡ＩＤ                     |      |
|     | D102_MAJOR_CARD_NO      | VARCHAR2(19 char) | 正卡卡號                     |      |
|     | D102_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位                     |      |
|     | D102_PROMOTE_EMP_NO     | VARCHAR2(11 char) | 推廣人員                     |      |
|     | D102_CLASS              | VARCHAR2(1 char)  | 風險等級                     |      |
|     | D102_TOTAL_AMT          | NUMBER(11,0)      | 消費金額                     |      |
|     | D102_TOTAL_CNT          | NUMBER(7,0)       | 消費筆數                     |      |
|     | D102_BEG_DATE_OLD       | VARCHAR2(6 char)  | 舊有效起日                  |      |
|     | D102_END_DATE_OLD       | VARCHAR2(6 char)  | 舊有效迄日                  |      |
|     | D102_CHANGE_DATE        | DATE              | 換卡日期                     |      |
|     | D102_OLD_CARD           | VARCHAR2(19 char) | 掛失舊卡                     |      |
|     | D102_OPEN_DATE          | DATE              | 開卡日期                     |      |
|     | D102_CARD_SW            | VARCHAR2(3 char)  | 卡片種類                     |      |
|     | D102_CREDITOR_NO        | VARCHAR2(11 char) | 徵信人員                     |      |
|     | D102_CREDIT_APPROVER_NO | VARCHAR2(5 char)  | 徵信主管                     |      |
|     | D102_STMT_CYCLE         | VARCHAR2(2 char)  | 帳務期別                     |      |
|     | D102_OPPOST_REASON      | VARCHAR2(2 char)  | 停掛原因                     |      |
|     | D102_SPRD_NO            | VARCHAR2(6 char)  | 特殊專案代碼               |      |
|     | D102_CREATE_DATE        | DATE              | 建檔日期                     |      |
|     | D102_OPEN_STATUS        | VARCHAR2(1 char)  | 開卡狀態                     |      |
|     | D102_REISSUE_FLAG       | VARCHAR2(1 char)  | 補發新卡註記               |      |
|     | D102_VISA_FLAG          | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_MASTER_FLAG        | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_JCB_FLAG           | VARCHAR2(1 char)  | 國際黑名單註記            |      |
|     | D102_NEG_FLAG           | VARCHAR2(1 char)  | 黑名單註記                  |      |
|     | D102_CARD_UNIFORM       | VARCHAR2(9 char)  | 商務卡統編                  |      |
|     | D102_OPPOST_REASON_1    | VARCHAR2(2 char)  | 停卡動機                     |      |
|     | D102_APPL_METHOD        | VARCHAR2(4 char)  | 往來途徑                     |      |
|     | D102_TOTAL_CNT_N        | NUMBER(3,0)       | 本年度消費次數            |      |
|     | D102_TOTAL_AMT_N        | NUMBER(11,0)      | 本年度消費金額            |      |
|     | D102_FIRST_FLAG         | VARCHAR2(1 char)  | 新卡友註記                  |      |
|     | D102_PRPJ_CODE          | VARCHAR2(4 char)  | 推廣通路代碼               |      |
|     | D102_UPDATE_USER_ID     | VARCHAR2(8 char)  | 停掛人員編號               |      |
|     | D102_PROD_NO_TRANS      | VARCHAR2(4 char)  | 轉卡後專案代碼            |      |
|     | D102_FORTH_LINE         | VARCHAR2(20 char) | 第四行凸字                  |      |
|     | D102_FIRST_USE_DATE     | DATE              | 首刷日（任何費用及使用皆列入） |      |
|     | D102_PROD_NO_NEW        | VARCHAR2(4 char)  | 新專案代碼                  |      |
|     | D102_AFTY_CODE_NEW      | VARCHAR2(4 char)  | 新專案認同碼               |      |
|     | D102_LAST_TRANS_DATE_1  | DATE              | 最後消費日（含分期代償通信預借） |      |
|     | D102_DIFFER             | VARCHAR2(2 char)  | 條件差異                     |      |
|     | D102_FIRST_FLAG_2       | VARCHAR2(1 char)  | 新卡友註記３６５天      |      |
|     | D102_TABLE_NO           | VARCHAR2(10 char) | 專櫃代碼                     |      |
|     | D102_SKMC_BRANCH        | VARCHAR2(2 char)  | 新光三越店別               |      |
|     | D102_QR_CODE            | VARCHAR2(1 char)  | ＱＲ－ＣＯＤＥ            |      |
|     | D102_PROMOTE_SIR_NO     | VARCHAR2(11 char) | 推薦主管員編               |      |
|     | D102_INTRO_ID           | VARCHAR2(11 char) | 推薦人                        |      |
|     | D102_LAST_EASY_CARD     | VARCHAR2(16 char) | 悠遊卡號                     |      |
|     | D102_FIRST_FLAG_3       | VARCHAR2(1 char)  | 新卡友註記:僅持附卡申請正卡 |      |
|     | D102_BLOCK_CODE         | VARCHAR2(1 char)  | 現狀碼                        |      |
|     | D102_CRLIM              | NUMBER(4,0)       | 卡片額度                     |      |
|     | TBL_UPD_TIM             | TIMESTAMP         | 表格更新時間               |      |
### VW_ODS_M_JCBD103M
#### 帳務檔(月)
| Key | 欄位名稱      | 欄位資料型態 | 欄位說明       | 備註 |
| --- | ----------------- | ----------------- | ------------------ | ---- |
| PK  | OUT_APPL_ID       | VARCHAR2(11 char) | ID                 |      |
|     | OUT_BEG_BAL_D     | NUMBER(10,0)      | 期初_溢付款   |      |
|     | OUT_BEG_BAL_A     | NUMBER(10,0)      | 期初_年費      |      |
|     | OUT_BEG_BAL_L     | NUMBER(10,0)      | 期初_掛失費   |      |
|     | OUT_BEG_BAL_B     | NUMBER(10,0)      | 期初_呆帳      |      |
|     | OUT_BEG_BAL_M     | NUMBER(10,0)      | 期初_卡片貸款 |      |
|     | OUT_BEG_BAL_T     | NUMBER(10,0)      | 期初_催收款   |      |
|     | OUT_BEG_BAL_I     | NUMBER(10,0)      | 期初_通信預借 |      |
|     | OUT_BEG_BAL_Q     | NUMBER(10,0)      | 期初_代償款   |      |
|     | OUT_BEG_BAL_P     | NUMBER(10,0)      | 期初_手續費   |      |
|     | OUT_BEG_BAL_R     | NUMBER(10,0)      | 期初_循環息   |      |
|     | OUT_BEG_BAL_F     | NUMBER(10,0)      | 期初_違約金   |      |
|     | OUT_BEG_BAL_C     | NUMBER(10,0)      | 期初_消費款   |      |
|     | OUT_BEG_BAL_O     | NUMBER(10,0)      | 期初_應收款   |      |
|     | OUT_BEG_BAL_E     | NUMBER(10,0)      | 期初_爭議款   |      |
|     | OUT_END_BAL_D     | NUMBER(10,0)      | 期末_溢付款   |      |
|     | OUT_END_BAL_A     | NUMBER(10,0)      | 期末_年費      |      |
|     | OUT_END_BAL_L     | NUMBER(10,0)      | 期末_掛失費   |      |
|     | OUT_END_BAL_B     | NUMBER(10,0)      | 期末_呆帳      |      |
|     | OUT_END_BAL_M     | NUMBER(10,0)      | 期末_卡片貸款 |      |
|     | OUT_END_BAL_T     | NUMBER(10,0)      | 期末_催收款   |      |
|     | OUT_END_BAL_I     | NUMBER(10,0)      | 期末_通信預借 |      |
|     | OUT_END_BAL_Q     | NUMBER(10,0)      | 期末_代償款   |      |
|     | OUT_END_BAL_P     | NUMBER(10,0)      | 期末_手續費   |      |
|     | OUT_END_BAL_R     | NUMBER(10,0)      | 期末_循環息   |      |
|     | OUT_END_BAL_F     | NUMBER(10,0)      | 期末_違約金   |      |
|     | OUT_END_BAL_C     | NUMBER(10,0)      | 期末_消費款   |      |
|     | OUT_END_BAL_O     | NUMBER(10,0)      | 期末_應收款   |      |
|     | OUT_END_BAL_E     | NUMBER(10,0)      | 期末_爭議款   |      |
|     | OUT_CURRENT_BAL   | NUMBER(10,0)      | 目前總餘額    |      |
|     | OUT_MIN_PAY       | NUMBER(10,0)      | 本期最低應繳款 |      |
|     | OUT_MIN_PAY_BAL   | NUMBER(10,0)      | 本期最低應繳款餘額 |      |
|     | OUT_REVOLVE_AMT   | NUMBER(10,0)      | 循環信用額度 |      |
|     | OUT_REVOLVE_BAL   | NUMBER(10,0)      | 循環信用餘額 |      |
|     | OUT_PAY_AMT       | NUMBER(10,0)      | 本期繳款金額 |      |
|     | OUT_PAY_CNT       | NUMBER(3,0)       | 本期繳款次數 |      |
|     | OUT_PAYMENT_RATE  | VARCHAR2(24 char) | 繳款評等       |      |
|     | OUT_YTD_PAYMENT   | NUMBER(11,0)      | 年度累積繳款 |      |
|     | OUT_ITD_PAYMENT   | NUMBER(11,0)      | 總累積繳款    |      |
|     | OUT_BAL_SIGN      | VARCHAR2(1 char)  | 目前總餘額之正負號 |      |
|     | OUT_LAST_PAY_DATE | DATE              | 最近付款日    |      |
|     | OUT_LAST_PAY_AMT  | NUMBER(7,0)       | 前次付款金額 |      |
|     | OUT_LAST_PAY_TYPE | VARCHAR2(4 char)  | 繳款方式       |      |
|     | OUT_STMT_CYCLE    | VARCHAR2(2 char)  | 帳務週期       |      |
|     | TBL_UPD_TIM       | TIMESTAMP         | 表格更新時間 |      |
### VW_ODS_M_JCBD107M
#### 客戶基本資料檔(月)
| Key | 欄位名稱      | 欄位資料型態 | 欄位說明           | 備註 |
| --- | ----------------- | ------------------ | ---------------------- | ---- |
| PK  | IDNO              | VARCHAR2(11 char)  | 申請人身份證號  |      |
|     | CH_NAME           | VARCHAR2(30 char)  | 申請人中文姓名  |      |
|     | SEX               | VARCHAR2(1 char)   | 性別                 |      |
|     | BRITH_DATE        | DATE               | 申請人出生日期  |      |
|     | EDUCATION         | VARCHAR2(1 char)   | 學歷                 |      |
|     | MARRIAGE          | VARCHAR2(1 char)   | 婚姻狀況           |      |
|     | RESIDENT_TYPE     | VARCHAR2(1 char)   | 現居狀況           |      |
|     | CHILD_CNT         | VARCHAR2(2 char)   | 申請來源           |      |
|     | INCOME            | NUMBER(5,0)        | 年收入              |      |
|     | INCOME_OTHER      | NUMBER(5,0)        | 年收入(其他)      |      |
|     | STMT_TYPE         | VARCHAR2(1 char)   | 帳單寄送(卡片寄送)方式 |      |
|     | TEL_H             | VARCHAR2(12 char)  | 電話(H)              |      |
|     | RESIDENT_ZIP      | VARCHAR2(5 char)   | 郵遞區號           |      |
|     | RESIDENT_ADDR     | VARCHAR2(352 char) | 戶籍地址           |      |
|     | MAIL_ZIP          | VARCHAR2(5 char)   | 郵寄郵遞區號     |      |
|     | MAIL_ADDR         | VARCHAR2(352 char) | 郵寄地址           |      |
|     | OFFICE_ZIP        | VARCHAR2(5 char)   | 公司郵遞區號     |      |
|     | OFFICE_ADDR       | VARCHAR2(352 char) | 公司地址           |      |
|     | RELATIVE_NAME     | VARCHAR2(30 char)  | 近親姓名           |      |
|     | RELATIVE_TEL      | VARCHAR2(12 char)  | 近親電話           |      |
|     | FRIEND_NAME       | VARCHAR2(30 char)  | 好友姓名           |      |
|     | FRIEND_TEL        | VARCHAR2(12 char)  | 好友電話           |      |
|     | SPOUSE_ID         | VARCHAR2(11 char)  | 配偶身份證號     |      |
|     | SPOUSE_NAME       | VARCHAR2(30 char)  | 配偶姓名           |      |
|     | SPOUSE_TEL        | VARCHAR2(17 char)  | 配偶電話           |      |
|     | SPOUSE_INCOME     | NUMBER(5,0)        | 配偶年收入        |      |
|     | OFFICE_TEL        | VARCHAR2(17 char)  | 公司電話           |      |
|     | GSM_TEL           | VARCHAR2(10 char)  | 行動電話           |      |
|     | BUSINESS_CODE     | VARCHAR2(2 char)   | 行業別              |      |
|     | CLASS_CODE        | VARCHAR2(1 char)   | 卡人等級           |      |
|     | DM_TYPE           | VARCHAR2(1 char)   | 寄送DM型態         |      |
|     | REMARK            | VARCHAR2(60 char)  | 備註                 |      |
|     | COMPANY           | VARCHAR2(48 char)  | 公司名稱           |      |
|     | TITLE             | VARCHAR2(32 char)  | 職務名稱           |      |
|     | POSITION_1        | VARCHAR2(8 char)   | 職業職稱           |      |
|     | EMAIL             | VARCHAR2(40 char)  | 電子信箱           |      |
|     | EN_NAME           | VARCHAR2(25 char)  | 申請人英文姓名  |      |
|     | SBT_AMT           | NUMBER(10,0)       | 代償餘額           |      |
|     | SUB_AMT           | NUMBER(10,0)       | 應收款餘額        |      |
|     | ABS_AMT           | NUMBER(10,0)       | 催收款餘額        |      |
|     | S_AMT             | NUMBER(10,0)       | 呆帳款餘額        |      |
|     | PAYMENT_ACCT_NO   | VARCHAR2(16 char)  | 繳款戶號           |      |
|     | SALES_MARK        | VARCHAR2(1 char)   | 共同行銷註記     |      |
|     | UPD_DATE          | DATE               | 最後修改日期     |      |
|     | SECURITY_SUB_DATA | VARCHAR2(8 char)   | 共同行銷子公司別 |      |
|     | TEL_RESIDENT      | VARCHAR2(12 char)  | 戶籍電話           |      |
|     | CFPI_DATE         | DATE               | 個資控款日        |      |
|     | NATIONALITY       | VARCHAR2(2 char)   |                        |      |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間     |      |
### VW_ODS_M_JCBD108M
#### 歸戶資料檔(月)
| Key | 欄位名稱           | 欄位資料型態 | 欄位說明         | 備註 |
| --- | ---------------------- | ----------------- | -------------------- | ---- |
| PK  | OUT_ACCOUNT_KEY        | VARCHAR2(19 char) | 歸戶帳號         |      |
|     | OUT_REVOLVE_AMT        | NUMBER(4,0)       | 循環信用額度   |      |
|     | OUT_AUTOPAY_RATE       | NUMBER(3,0)       | 自動扣繳比率   |      |
|     | OUT_RATE               | VARCHAR2(1 char)  | 電腦評等         |      |
|     | OUT_MANUAL_RATE        | VARCHAR2(1 char)  | 人工評等         |      |
|     | OUT_YTD_PAYMENT        | NUMBER(11,0)      | 年度累積繳款   |      |
|     | OUT_ITD_PAYMENT        | NUMBER(11,0)      | 總累積繳款      |      |
|     | OUT_FORCED_STOP_DATE   | DATE              | 強停日期         |      |
|     | OUT_PAYMENT_TYPE       | VARCHAR2(1 char)  | 繳款方式         |      |
|     | OUT_DEDUCT_BANK        | VARCHAR2(4 char)  | 扣繳行庫         |      |
|     | OUT_DEDUCT_ACCOUNT_NO  | VARCHAR2(20 char) | 扣繳帳號         |      |
|     | OUT_STATEMENT_CYCLE    | VARCHAR2(2 char)  | 帳務期別         |      |
|     | OUT_CLASS              | VARCHAR2(1 char)  | 風險等級         |      |
|     | OUT_SIGN_11            | VARCHAR2(1 char)  | 符號1_1            |      |
|     | OUT_JRNL_BAL           | NUMBER(10,0)      | 帳戶總餘額      |      |
|     | OUT_PAYMENT_RATE       | VARCHAR2(24 char) | 繳款評等         |      |
|     | OUT_LAST_PAY_DATE      | DATE              | 最近付款日      |      |
|     | OUT_SIGN_2             | VARCHAR2(1 char)  | 符號二            |      |
|     | OUT_LAST_PAY_AMT       | NUMBER(7,0)       | 前次付款金額   |      |
|     | OUT_LAST_TOT_DOT       | NUMBER(7,0)       | 上期累計點數   |      |
|     | OUT_CURR_DOT           | NUMBER(7,0)       | 本期新增點數   |      |
|     | OUT_USE_DOT            | NUMBER(7,0)       | 本期使用點數   |      |
|     | OUT_THIS_TOT_DOT       | NUMBER(7,0)       | 本期累計點數   |      |
|     | OUT_PROMOTE_DEPT       | VARCHAR2(4 char)  | 推廣單位         |      |
|     | OUT_PROMOTE_EMP_NO     | VARCHAR2(4 char)  | 推廣員編號      |      |
|     | OUT_STMT_CYCLE         | VARCHAR2(2 char)  | CYCLE                |      |
|     | OUT_SMS_MARK           | VARCHAR2(1 char)  | 簡訊發送         |      |
|     | OUT_INSU_MARK          | VARCHAR2(1 char)  | 保險費自付      |      |
|     | OUT_END_BAL_Q          | NUMBER(10,0)      | 代償餘額         |      |
|     | OUT_END_BAL_O          | NUMBER(10,0)      | 應收款餘額      |      |
|     | OUT_END_BAL_T          | NUMBER(10,0)      | 催收款餘額      |      |
|     | OUT_END_BAL_B          | NUMBER(10,0)      | 呆帳款餘額      |      |
|     | OUT_PURCHASE_AMT       | NUMBER(15,0)      | 一年內消費金額 |      |
|     | OUT_NOW_AMT            | NUMBER(8,0)       | 目前可用餘額   |      |
|     | OUT_WARNING_RATE       | VARCHAR2(48 char) | 預警評等         |      |
|     | OUT_TRUST_MARK         | VARCHAR2(2 char)  | 債協卡友註記   |      |
|     | OUT_REVOLVE_RATE       | VARCHAR2(4 char)  | 循環利率         |      |
|     | OUT_WARNING_REVOLVE    | VARCHAR2(4 char)  | 預警額度         |      |
|     | OUT_CLASS_AUTH         | VARCHAR2(1 char)  | 授權卡人等級   |      |
|     | OUT_YEAR_PUR_AMT       | VARCHAR2(10 char) | 年度累積消費金額 |      |
|     | OUT_YEAR_CASH_AMT      | VARCHAR2(10 char) | 年度累積預借現金 |      |
|     | OUT_CASH_REVOLVE_AMT   | VARCHAR2(10 char) | 預借可用餘額   |      |
|     | OUT_CONTROL_WARN       | VARCHAR2(40 char) | 授權管制內容   |      |
|     | OUT_CODE_WARN          | VARCHAR2(40 char) | 警示區            |      |
|     | OUT_NOTE               | VARCHAR2(60 char) | 備註               |      |
|     | OUT_SIGN_12            | VARCHAR2(1 char)  | 符號1_2            |      |
|     | OUT_AUTH_NOT_DEPOSIT   | NUMBER(9,0)       | 已授權未請款(含預借) |      |
|     | OUT_SIGN_13            | VARCHAR2(1 char)  | 符號1_3            |      |
|     | OUT_CURRENT_BAL        | NUMBER(9,0)       | 已請款未入帳   |      |
|     | OUT_INLA_AMT           | NUMBER(9,0)       | 分期未入帳金額 |      |
|     | OUT_STMT_TYPE          | VARCHAR2(1 char)  | 歸戶帳單寄送碼 |      |
|     | OUT_PRINT_CODE         | VARCHAR2(2 char)  | 循帳單管制碼   |      |
|     | OUT_CASH_PERCENT       | NUMBER(3,0)       | 預借成數         |      |
|     | OUT_MENU_CLI_DATE      | DATE              | 人工調額日      |      |
|     | OUT_BEFORE_MENU_REVAMT | NUMBER(4,0)       | 人工調額前額度 |      |
|     | OUT_MAJOR_ID_STATUS    | VARCHAR2(1 char)  | 歸戶現況碼      |      |
|     | OUT_OLD_FLAG           | VARCHAR2(1 char)  | 舊卡戶註記      |      |
|     | OUT_DIFFER             | VARCHAR2(1 char)  | 差異戶註記      |      |
|     | OUT_SYSTEM_CLI_DATE    | DATE              | 系統調整額度日期 |      |
|     | OUT_BEFORE_CLI_REVAMT  | VARCHAR2(4 char)  | 系統調整循環信用額度 |      |
|     | OUT_REVOLVE_WARNING2   | VARCHAR2(4 char)  | 預警額度2        |      |
|     | OUT_CASH_REVOLVE       | VARCHAR2(4 char)  | 總預借金額度   |      |
|     | OUT_FBGOV_FLAG         | VARCHAR2(1 char)  | 金管會信貸註記 |      |
|     | OUT_LOAN_FLAG          | VARCHAR2(1 char)  | 金管會消貸註記 |      |
|     | OUT_FILLER1            | VARCHAR2(1 char)  | 保留一            |      |
|     | OUT_FILLER2            | VARCHAR2(3 char)  | 保留二            |      |
|     | TBL_UPD_TIM            | TIMESTAMP         | 表格更新時間   |      |