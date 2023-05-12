---
sidebar_position: 21
title: 信用資訊查詢系統(EJCIC)
---

### VW_ODS_D_EJCIC_ACM002
#### 企業變更登記資料
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | HIS_YMD           | VARCHAR2(7 char)   | 變更登記核准日期                                            |    |
|     | HIS_CODE          | VARCHAR2(2 char)   | 變更登記項目代號(對照表)                                       |    |
|     | HIS_ITEM          | VARCHAR2(100 char) | 變更登記項目內容                                            |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_ACM024
#### 公司董監事,有限合夥合夥人,商業登記負責人
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | POS_CODE          | VARCHAR2(2 char)   | 職稱代號(對照表)                                           |    |
|     | IDN               | VARCHAR2(10 char)  | 身分證號                                                |    |
|     | NAME              | VARCHAR2(12 char)  | 中文姓名                                                |    |
|     | STOCK             | VARCHAR2(14 char)  | 持有股份/出資額                                            |    |
|     | RESP_TYPE         | VARCHAR2(1 char)   | 責任種類代號(對照表)                                         |    |
|     | POS_DATE          | VARCHAR2(7 char)   | 到職日期                                                |    |
|     | AC_CODE           | VARCHAR2(1 char)   | 是否為法人代表(對照表)                                        |    |
|     | GA_BAN            | VARCHAR2(8 char)   | 法人代表統一編號                                            |    |
|     | GA_CNAME          | VARCHAR2(60 char)  | 法人代表中文戶名                                            |    |
|     | GA_DATE           | VARCHAR2(5 char)   | 法人代表資料年月                                            |    |
|     | STATUS_CODE       | VARCHAR2(1 char)   | 公司設立狀況代碼(對照表)                                       |    |
|     | MDY_DATE          | VARCHAR2(7 char)   | 公司核准變更日期                                            |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_ACS017
#### 企業登記資料(含公司、商業登記、有限合夥)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | C_NAME            | VARCHAR2(60 char)  | 中文戶名                                                |    |
|     | ZIP               | VARCHAR2(5 char)   | 郵遞區號                                                |    |
|     | ADDRESS           | VARCHAR2(60 char)  | 中文地址                                                |    |
|     | E_NAME            | VARCHAR2(60 char)  | 英文戶名                                                |    |
|     | TEL               | VARCHAR2(16 char)  | 電話                                                  |    |
|     | FAX               | VARCHAR2(16 char)  | 傳真                                                  |    |
|     | ECO_CODE          | VARCHAR2(8 char)   | 主行業別代號/所營事業項目(對照表)                                  |    |
|     | IDN               | VARCHAR2(10 char)  | 負責人身分證號                                             |    |
|     | NAME              | VARCHAR2(12 char)  | 負責人姓名                                               |    |
|     | DR_E_YMD          | VARCHAR2(7 char)   | 董事任期至                                               |    |
|     | SR_E_YMD          | VARCHAR2(7 char)   | 監察人任期至                                              |    |
|     | ORG_CODE          | VARCHAR2(1 char)   | 組織別代號(對照表)                                          |    |
|     | PUB_PRI_CODE      | VARCHAR2(1 char)   | 公民營代號(對照表)                                          |    |
|     | STATUS_CODE       | VARCHAR2(1 char)   | 設立狀況代號(對照表)                                         |    |
|     | MDY_WORD          | VARCHAR2(6 char)   | 核准文號字                                               |    |
|     | MDY_CODE          | VARCHAR2(11 char)  | 核准文號號                                               |    |
|     | MDY_YMD           | VARCHAR2(7 char)   | 變更登記核准日期                                            |    |
|     | APRV_WORD         | VARCHAR2(6 char)   | 設立登記文號(字)                                           |    |
|     | APRV_CODE         | VARCHAR2(11 char)  | 設立登記文號(號)                                           |    |
|     | RGY_YMD           | VARCHAR2(7 char)   | 設立登記日期                                              |    |
|     | ALIVE_CODE        | VARCHAR2(1 char)   | 休業/復業/延展開業狀況代號(對照表)                                 |    |
|     | ALIVE_B_YMD       | VARCHAR2(7 char)   | 停業／復業／延展日期(起)                                       |    |
|     | ALIVE_E_YMD       | VARCHAR2(7 char)   | 休業期限至                                               |    |
|     | ACCT_IDN          | VARCHAR2(10 char)  | 會計師身分證號                                             |    |
|     | ACCT_NAME         | VARCHAR2(12 char)  | 會計師中文姓名                                             |    |
|     | FISCAL_MM         | VARCHAR2(2 char)   | 會計期間月                                               |    |
|     | FISCAL_DD         | VARCHAR2(2 char)   | 會計期間日                                               |    |
|     | ADMIN_CODE        | VARCHAR2(2 char)   | 申請登記機關代號(對照表)                                       |    |
|     | STOCK_ATTR        | VARCHAR2(1 char)   | 股票性質代號1:上市2:上櫃3:公開發行4:其他                            |    |
|     | STOCK_DATE        | VARCHAR2(7 char)   | 股票(上市/櫃日期)                                          |    |
|     | DR_QTY            | VARCHAR2(3 char)   | 董事人數                                                |    |
|     | SR_QTY            | VARCHAR2(3 char)   | 監察人人數                                               |    |
|     | AR_QTY            | VARCHAR2(4 char)   | 分公司數                                                |    |
|     | RGY_CAPITAL       | VARCHAR2(14 char)  | 登記資本額(元)                                            |    |
|     | TOTAL_SHARE       | VARCHAR2(14 char)  | 股份總數                                                |    |
|     | UNIT_AMT          | VARCHAR2(14 char)  | 股份單位金額(元)                                           |    |
|     | REAL_CAPITAL      | VARCHAR2(14 char)  | 實收資本額(元)                                            |    |
|     | CASH              | VARCHAR2(14 char)  | 現金(元)                                               |    |
|     | NONCASH           | VARCHAR2(14 char)  | 現金以外財產(元)                                           |    |
|     | SURPLUS           | VARCHAR2(14 char)  | 公積(元)                                               |    |
|     | EARNING           | VARCHAR2(14 char)  | 盈餘(元)                                               |    |
|     | DEBTEQUITY        | VARCHAR2(14 char)  | 債權抵繳股款(元)                                           |    |
|     | BOND_SHARE        | VARCHAR2(14 char)  | 公司債股份股數                                             |    |
|     | BOND_AMT          | VARCHAR2(14 char)  | 公司債股份金額(元)                                          |    |
|     | MERGE_AMT         | VARCHAR2(14 char)  | 本次合併換發股份金額(元)                                       |    |
|     | REDUCE_AMT        | VARCHAR2(14 char)  | 減資金額(元)                                             |    |
|     | GP_QTY            | VARCHAR2(6 char)   | 普通合夥人數                                              |    |
|     | LP_QTY            | VARCHAR2(6 char)   | 有限合夥人數                                              |    |
|     | LIVE_BEG_DATE     | VARCHAR2(7 char)   | 存續起日                                                |    |
|     | LIVE_END_DATE     | VARCHAR2(7 char)   | 存續迄日                                                |    |
|     | CREDIT            | VARCHAR2(14 char)  | 信用                                                  |    |
|     | OTHER             | VARCHAR2(14 char)  | 其他                                                  |    |
|     | SERVICE           | VARCHAR2(14 char)  | 勞務                                                  |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_BAM095
#### 99年版授信額度,擔保品,金額,還款紀錄資訊
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYY          | VARCHAR2(3 char)   | 資料年度                                                |    |
|     | DATA_MM           | VARCHAR2(2 char)   | 資料月份                                                |    |
|     | BANK_CODE         | VARCHAR2(7 char)   | 行庫代號                                                |    |
|     | BANK_NAME         | VARCHAR2(40 char)  | 行庫名稱                                                |    |
|     | ACCOUNT_CODE      | VARCHAR2(1 char)   | 科目別(對照表)                                            |    |
|     | ACCOUNT_CODE2     | VARCHAR2(1 char)   | 科目別註記(對照表)                                          |    |
|     | PURPOSE_CODE      | VARCHAR2(1 char)   | 用途別(對照表)                                            |    |
|     | CONTRACT_AMT1     | VARCHAR2(10 char)  | 綜合額度金額(千元)                                          |    |
|     | CONTRACT_AMT      | VARCHAR2(10 char)  | 分項額度金額(千元)                                          |    |
|     | LOAN_AMT          | VARCHAR2(10 char)  | 未逾期金額(千元)                                           |    |
|     | PASS_DUE_AMT      | VARCHAR2(10 char)  | 逾期未還金額(千元)                                          |    |
|     | PAY_CODE_12       | VARCHAR2(12 char)  | 12期還款記錄                                             |    |
|     | IS_KIND           | VARCHAR2(2 char)   | 擔保品類別(對照表)                                          |    |
|     | PROJECT_CODE      | VARCHAR2(2 char)   | 政府專案貸款分類代碼(對照表)                                     |    |
|     | CO_LOAN           | VARCHAR2(1 char)   | 共同借款註記(*表有共同借款)                                     |    |
|     | UN_MARK           | VARCHAR2(1 char)   | 聯貸註記(A表國內,B表國際聯貸)                                   |    |
|     | U_YYYMMDD         | VARCHAR2(8 char)   | 聯貸日期西元YYYYMMDD                                      |    |
|     | U_RATE            | VARCHAR2(6 char)   | 參貸比例百分比(例如100.00)                                   |    |
|     | IB_MARK           | VARCHAR2(1 char)   | 資金流向註記(*表流向非法人組織)                                   |    |
|     | IAB_BAN           | VARCHAR2(8 char)   | 資金流向非法人組織統編                                         |    |
|     | IAB_NAME          | VARCHAR2(60 char)  | 資金流向非法人組織名稱                                         |    |
|     | CONTRACT_MARK     | VARCHAR2(1 char)   | 額度特別註記(*表最高階額度所有者ID不同)                              |    |
|     | CONTRACT_CODE     | VARCHAR2(50 char)  | 本階額度代碼                                              |    |
|     | CONTRACT_CODE1    | VARCHAR2(50 char)  | 最高階額度代碼                                             |    |
|     | CON_BAN           | VARCHAR2(10 char)  | 最高階額度所屬公司統編                                         |    |
|     | CON_NAME          | VARCHAR2(60 char)  | 最高階額度所屬公司名稱                                         |    |
|     | ACT_Y_MARK        | VARCHAR2(1 char)   | Ｙ科目之額度註記(*表有現金卡日報資料)本欄位將於94/10/01開始提供查詢             |    |
|     | CONTRACT_AMT_Y    | VARCHAR2(10 char)  | 現金卡日報Ｙ科目之可動用額度(千元)本欄位將於94/10/01開始提供查詢               |    |
|     | AC_AMT            | VARCHAR2(10 char)  | 授信1千元之原始金額                                          |    |
|     | ASST_DATA_YYY     | VARCHAR2(3 char)   | 債權證券化資料年                                            |    |
|     | ASST_DATA_MM      | VARCHAR2(2 char)   | 債權證券化資料月                                            |    |
|     | ASST_IDN_BAN      | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                                       |    |
|     | ASST_NAME         | VARCHAR2(60 char)  | 債權證券化受託機構名稱                                         |    |
|     | CURRENCY_CODE_3   | VARCHAR2(3 char)   | 幣別代號(對照表)                                           |    |
|     | CYCLE_FLAG        | VARCHAR2(1 char)   | 循環信用註記                                              |    |
|     | OFF_FLAG          | VARCHAR2(1 char)   | 額度可否撤銷                                              |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_BAM306
#### 99年版授信保證資料(從債務)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYY          | VARCHAR2(3 char)   | 資料年度                                                |    |
|     | DATA_MM           | VARCHAR2(2 char)   | 資料月份                                                |    |
|     | BANK_CODE         | VARCHAR2(7 char)   | 行庫代號                                                |    |
|     | BANK_NAME         | VARCHAR2(40 char)  | 行庫名稱                                                |    |
|     | ACCOUNT_CODE      | VARCHAR2(1 char)   | 科目別(對照表)                                            |    |
|     | ACCOUNT_CODE2     | VARCHAR2(1 char)   | 科目別註記(對照表)                                          |    |
|     | PURPOSE_CODE      | VARCHAR2(1 char)   | 用途別(對照表)                                            |    |
|     | GID_CODE          | VARCHAR2(1 char)   | 身分代號(對照表)                                           |    |
|     | M_ID              | VARCHAR2(10 char)  | 主債務人身分證號                                            |    |
|     | M_ID_NAME         | VARCHAR2(60 char)  | 主債務人名稱                                              |    |
|     | REL_CODE          | VARCHAR2(2 char)   | 關係代號(對照表)                                           |    |
|     | CONTRACT_AMT      | VARCHAR2(10 char)  | 訂約金額(千元)                                            |    |
|     | LOAN_AMT          | VARCHAR2(10 char)  | 放款未逾期(千元)                                           |    |
|     | PASS_DUE_AMT      | VARCHAR2(10 char)  | 逾期未還金額(千元)                                          |    |
|     | ASST_DATA_YYY     | VARCHAR2(3 char)   | 債權證券化資料年                                            |    |
|     | ASST_DATA_MM      | VARCHAR2(2 char)   | 債權證券化資料月                                            |    |
|     | ASST_IDN_BAN      | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                                       |    |
|     | ASST_NAME         | VARCHAR2(60 char)  | 債權證券化受託機構名稱                                         |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_BAM501
#### 應計入DBR22倍規範之無擔保債務餘額彙總
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | MAIN_CODE         | VARCHAR2(3 char)   | 行庫代號                                                |    |
|     | BANK_NAME         | VARCHAR2(24 char)  | 行庫名稱                                                |    |
|     | B_AMT             | VARCHAR2(9 char)   | 無擔保放款(仟元)                                           |    |
|     | Y_AMT             | VARCHAR2(9 char)   | 現金卡放款(仟元)                                           |    |
|     | C1_AMT            | VARCHAR2(13 char)  | 信用卡循環信用(仟元)小數點3位(含小數點共13位)                          |    |
|     | C2_AMT            | VARCHAR2(13 char)  | 未到期待付款(仟元)小數點3位(含小數點共13位)                           |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_BAM504
#### 應計入DBR22倍規範之貸款餘額
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYY          | VARCHAR2(3 char)   | 資料年度                                                |    |
|     | DATA_MM           | VARCHAR2(2 char)   | 資料月份                                                |    |
|     | BANK_CODE         | VARCHAR2(7 char)   | 行庫代號                                                |    |
|     | BANK_NAME         | VARCHAR2(40 char)  | 行庫名稱                                                |    |
|     | AMT               | VARCHAR2(10 char)  | 金額(千元)                                              |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |


### VW_ODS_D_EJCIC_BAM505
#### 新增核准額度中應計入DBR22倍之金額明細 (多筆 B68)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_DATE         | VARCHAR2(7 char)   | 日期                                                  |    |
|     | BANK_CODE         | VARCHAR2(7 char)   | 行庫代號                                                |    |
|     | BANK_NAME         | VARCHAR2(40 char)  | 行庫名稱                                                |    |
|     | CONTRACT_AMT      | VARCHAR2(10 char)  | 新增核准額度訂約金額(千元)長度10位若有負值時負號也算一位                      |    |
|     | DBR22_AMT         | VARCHAR2(10 char)  | 應計入DBR22倍規範之金額(千元)長度10位若有負值時負號也算一位                  |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_BAS001
#### 授信異常紀錄(三年內逾催或五年內呆帳)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | EVER_DELINQUENT   | VARCHAR2(1 char)   | 授信異常YN                                              |    |
|     | DATA_YYYMMDD      | VARCHAR2(7 char)   | 最近授信異常日期YYYMMDD                                     |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_DAS001
#### 退票異常紀錄
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | EVER_BAD_CHECK    | VARCHAR2(1 char)   | 退票異常紀錄YN                                            |    |
|     | DATA_YYYMMDD      | VARCHAR2(7 char)   | 最近退票日期YYYMMDD                                       |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_DAS002
#### 拒絕往來紀錄
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | REJECT_YN         | VARCHAR2(1 char)   | 拒絕往來記錄YN                                            |    |
|     | LATEST_REJECT     | VARCHAR2(7 char)   | 拒絕往來日期YYYMMDD拒絕往來記錄N本欄位有日期為該戶拒往已解除本欄位日期為拒絕往來日期      |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_KRM040
#### 信用卡戶帳款及循環比率資訊(最近12月)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN           | VARCHAR2(10 char)  | 繳款人ID                                               |    |
|     | BILL_DATE         | VARCHAR2(7 char)   | 結帳日                                                 |    |
|     | ISSUE             | VARCHAR2(3 char)   | 發卡機構代號                                              |    |
|     | ISSUE_NAME        | VARCHAR2(24 char)  | 發卡機構名稱                                              |    |
|     | BILL_MARK         | VARCHAR2(2 char)   | 帳單別                                                 |    |
|     | CARD_TYPE         | VARCHAR2(7 char)   | 信用卡別                                                |    |
|     | PERM_LIMIT        | VARCHAR2(7 char)   | 永久額度單位:千元                                           |    |
|     | TEMP_LIMIT        | VARCHAR2(7 char)   | 臨時額度單位:千元                                           |    |
|     | CASH_LIMIT        | VARCHAR2(7 char)   | 預借現金額度單位:千元                                         |    |
|     | PAYABLE           | VARCHAR2(9 char)   | 本期應付帳款(金額)單位:元                                      |    |
|     | CASH_LENT         | VARCHAR2(8 char)   | 本期預借現金單位:元                                          |    |
|     | LAST_PAYA         | VARCHAR2(9 char)   | 上期應付帳款(金額)單位:元                                      |    |
|     | REVOL_BAL         | VARCHAR2(9 char)   | 上期循環信用單位:元                                          |    |
|     | PAY_STAT          | VARCHAR2(1 char)   | 上期繳款狀況代號(金額)(對照表)                                   |    |
|     | PAY_CODE          | VARCHAR2(1 char)   | 上期繳款狀況代號(時間)(對照表)                                   |    |
|     | REVOL_RATE        | VARCHAR2(4 char)   | 上期循環比率REVOL_BAL/PERM_LIMIT_精確度至小數點後2位(四捨五入)_非百分比_   |    |
|     | PRE_OWED          | VARCHAR2(8 char)   | 未到期分期償還待付金額PRE_OWED=PRE_SPENT+PRE_CASHED+PRE_BILLED |    |
|     | DEBT_CODE         | VARCHAR2(1 char)   | 債權狀態註記A催收,B呆帳,其它blank_無對照表                          |    |
|     | CLOSE_CODE        | VARCHAR2(1 char)   | 債權結案註記(對照表)                                         |    |
|     | CLEAR_DATE        | VARCHAR2(7 char)   | 不良債權結案日期                                            |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_KRS001
#### 信用卡是否持卡及強停
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LIVE_CNT          | VARCHAR2(10 char)  | 有效卡張數（正卡及附卡）                                        |    |
|     | STOP_CNT          | VARCHAR2(10 char)  | 停卡張數（含強制停卡）                                         |    |
|     | DEAD_CNT          | VARCHAR2(10 char)  | 強制停卡張數                                              |    |
|     | AB_CODE           | VARCHAR2(1 char)   | 最近強停原因代號(對照表)                                       |    |
|     | STOP_DATE         | VARCHAR2(7 char)   | 最近強制停用日期                                            |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_RAI002
#### 融資租賃交易資訊資料日期
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYYMM        | VARCHAR2(5 char)   | 資料年月                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_RAM001
#### 主債務融資租賃資訊
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | FL_CODE           | VARCHAR2(7 char)   | 租賃公司代碼                                              |    |
|     | FL_NAME           | VARCHAR2(40 char)  | 租賃公司名稱                                              |    |
|     | CONTRACT_AMT      | VARCHAR2(10 char)  | 契約總價金(千元)                                           |    |
|     | DATA_YYYMM        | VARCHAR2(5 char)   | 資料年月                                                |    |
|     | RENT_AMT          | VARCHAR2(10 char)  | 應收租金餘額(千元)                                          |    |
|     | DELAY_AMT         | VARCHAR2(10 char)  | 遲延租金(千元)                                            |    |
|     | TYPE              | VARCHAR2(3 char)   | 交易類別(對照表)                                           |    |
|     | CLASS_CODE        | VARCHAR2(2 char)   | 標的物類別(對照表)                                          |    |
|     | PAYMENT_STATUS    | VARCHAR2(1 char)   | 最新繳款紀錄(對照表)                                         |    |
|     | ACCOUNT_CODE      | VARCHAR2(1 char)   | 債權狀態(對照表)                                           |    |
|     | REMARK            | VARCHAR2(1 char)   | 是否有報送繳款資料(Y/N)                                      |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_RAM005
#### 勞工退休準備金投保事業單位明細資訊
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BAN               | VARCHAR2(8 char)   | 統一編號                                                |    |
|     | NAME              | VARCHAR2(60 char)  | 企業名稱                                                |    |
|     | INSURANCE_NUM     | VARCHAR2(8 char)   | 勞退專戶證號                                              |    |
|     | LABOR_AMT         | VARCHAR2(5 char)   | 勞工保險投保人數                                            |    |
|     | LABOR_OLD_D       | VARCHAR2(5 char)   | 適用勞退舊制人數(本國、外配、陸配)                                  |    |
|     | LABOR_OLD_F       | VARCHAR2(5 char)   | 適用勞退舊制人數(外國)                                        |    |
|     | LABOR_NEW_O       | VARCHAR2(5 char)   | 適用新制具舊制保留年資人數                                       |    |
|     | LABOR_NEW         | VARCHAR2(5 char)   | 適用新制無舊制保留年資人數                                       |    |
|     | OTHER_AMT         | VARCHAR2(5 char)   | 其他人數(不適用勞基法)                                        |    |
|     | SALARY_6M         | VARCHAR2(12 char)  | 預估６個月工資                                             |    |
|     | RETIRE_AMT_O      | VARCHAR2(12 char)  | 預估舊制退休金                                             |    |
|     | SEVERANCE_OLD     | VARCHAR2(12 char)  | 預估舊制資遣費                                             |    |
|     | SEVERANCE_NEW     | VARCHAR2(12 char)  | 預估新制資遣費                                             |    |
|     | ARREARS_MONTHS    | VARCHAR2(4 char)   | 欠繳月數                                                |    |
|     | FILLER            | VARCHAR2(30 char)  | 保留欄位                                                |    |
| PK  | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
| PK  | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
| PK  | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_RAM006
#### 勞工退休準備金專戶明細資訊
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | BAN               | VARCHAR2(8 char)   | 事業單位統一編號                                            |    |
|     | NAME              | VARCHAR2(60 char)  | 事業單位名稱                                              |    |
|     | ACCOUNT_NUM       | VARCHAR2(9 char)   | 勞退專戶證號                                              |    |
|     | OPEN_DATE         | VARCHAR2(7 char)   | 開戶日期                                                |    |
|     | CAL_DATE          | VARCHAR2(7 char)   | 計算日期                                                |    |
|     | BALANCE           | VARCHAR2(12 char)  | 餘額                                                  |    |
|     | RATE              | VARCHAR2(8 char)   | 提撥率                                                 |    |
|     | STATUS            | VARCHAR2(1 char)   | 基金戶現況0:提繳中,1:已解約,2:暫停提撥,3:縣市註記歇業                    |    |
|     | NOT_MONTHS        | VARCHAR2(8 char)   | 未提撥月數                                               |    |
|     | FILLER            | VARCHAR2(22 char)  | 保留欄位                                                |    |
| PK  | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
| PK  | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
| PK  | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_RAS004
#### 勞工退休準備金彙總資訊
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LABOR_AMT         | VARCHAR2(5 char)   | 勞工保險投保人數                                            |    |
|     | LABOR_OLD_D       | VARCHAR2(5 char)   | 適用勞退舊制人數(本國、外配、陸配)                                  |    |
|     | LABOR_OLD_F       | VARCHAR2(5 char)   | 適用勞退舊制人數(外國)                                        |    |
|     | LABOR_NEW_O       | VARCHAR2(5 char)   | 適用新制具舊制保留年資人數                                       |    |
|     | LABOR_NEW         | VARCHAR2(5 char)   | 適用新制無舊制保留年資人數                                       |    |
|     | OTHER_AMT         | VARCHAR2(5 char)   | 其他人數(不適用勞基法)                                        |    |
|     | SALARY_6M         | VARCHAR2(12 char)  | 預估６個月工資                                             |    |
|     | RETIRE_AMT_O      | VARCHAR2(12 char)  | 預估舊制退休金                                             |    |
|     | SEVERANCE_OLD     | VARCHAR2(12 char)  | 預估舊制資遣費                                             |    |
|     | SEVERANCE_NEW     | VARCHAR2(12 char)  | 預估新制資遣費                                             |    |
|     | OPEN_DATE         | VARCHAR2(7 char)   | 開戶日期                                                |    |
|     | CAL_DATE          | VARCHAR2(7 char)   | 計算日期                                                |    |
|     | BALANCE           | VARCHAR2(12 char)  | 專戶餘額                                                |    |
|     | MAPPING_AMT       | VARCHAR2(5 char)   | 對應勞保戶數                                              |    |
|     | ARREARS_MONTHS    | VARCHAR2(5 char)   | 欠繳月數                                                |    |
|     | NOT_MONTHS        | VARCHAR2(8 char)   | 未提撥月數                                               |    |
|     | FILLER            | VARCHAR2(22 char)  | 保留欄位                                                |    |
| PK  | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
| PK  | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
| PK  | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |    |

### VW_ODS_D_EJCIC_STM007
#### 最近三個月內非Z類產品被查詢紀錄
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | QUERY_DATE        | VARCHAR2(7 char)   | 查詢日期                                                |    |
|     | BANK_CODE         | VARCHAR2(7 char)   | 查詢單位代號                                              |    |
|     | BANK_NAME         | VARCHAR2(40 char)  | 查詢單位名稱                                              |    |
|     | ITEM_LIST         | VARCHAR2(10 char)  | 查詢項目串列B:授信D:票信K:信用卡等                                |    |
|     | INQ_PURPOSE_1     | VARCHAR2(1 char)   | 查詢理由碼(對照表)                                          |    |
|     | INQ_PURPOSE       | VARCHAR2(30 char)  | 查詢理由碼(中文註解)新業務/原業務/公開資訊                             |    |
|     | QUERY_CONDITION   | VARCHAR2(200 char) | 查詢條件                                                |    |
|     | SEQ_NO            | NUMBER(10,0)       | 序號                                                  |    |
|     | CREATED_TIMESTAMP | TIMESTAMP          | 查詢時間                                                |    |
|     | EXPIRY_DATE       | TIMESTAMP          | 失效時間                                                |    |
|     | TBL_UPD_TIM       | TIMESTAMP          | 表格更新時間                                              |