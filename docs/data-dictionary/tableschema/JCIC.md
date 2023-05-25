---
sidebar_position: 36
title: 信用卡(JCIC)
---

### VW_ODS_D_JCSEK2

#### K2檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | NONE1                     | VARCHAR2(1 char)   | 資料識別欄                        |    |
| PK  | M_APP_NO                  | VARCHAR2(12 char)  | 案件編號                         |    |
|     | M_IDNO                    | VARCHAR2(11 char)  | 申請人ＩＤ                        |    |
|     | M_MAJOR_IDNO              | VARCHAR2(11 char)  | 申請人正卡ＩＤ                      |    |
|     | M_BIRTHDAY                | DATE               | 申請人出生年月日                     |    |
|     | M_ENG_NAME                | VARCHAR2(25 char)  | 申請人英文姓名                      |    |
|     | M_COMMERCE_ID             | VARCHAR2(9 char)   | 法人戶統一編號                      |    |
|     | M_BUSINESS_DEPT           | VARCHAR2(10 char)  | 商務卡部門別                       |    |
|     | M_ENG_COMPANY_NAME        | VARCHAR2(40 char)  | 英文公司名稱                       |    |
|     | M_SEX                     | VARCHAR2(1 char)   | 性別                           |    |
|     | M_NATIONALITY             | VARCHAR2(1 char)   | 國籍                           |    |
|     | M_MARRIAGE                | VARCHAR2(1 char)   | 婚姻狀況                         |    |
|     | M_EDUCATION               | VARCHAR2(1 char)   | 學歷                           |    |
|     | M_MSG_INCOME              | VARCHAR2(1 char)   | 訊息來源                         |    |
|     | M_GIFT_NO                 | VARCHAR2(1 char)   | 贈品編號                         |    |
|     | M_SMS_TYPE                | VARCHAR2(1 char)   | 簡訊發送                         |    |
|     | M_INSURANCE_PAY           | VARCHAR2(1 char)   | 保險費自付                        |    |
|     | M_DV_CARD_TYPE            | VARCHAR2(1 char)   | 要貴賓卡                         |    |
|     | M_NOT_CIPHER              | VARCHAR2(1 char)   | 不要密碼函                        |    |
|     | M_VIP_MARK                | VARCHAR2(1 char)   | ＶＩＰ註記                        |    |
|     | M_LIVING_TYPE             | VARCHAR2(1 char)   | 現居狀況                         |    |
|     | M_TRADE_TYPE              | VARCHAR2(2 char)   | 行業別                          |    |
|     | M_PROFESSIONAL_TITLE      | VARCHAR2(4 char)   | 職業職稱                         |    |
|     | CUSTOMER_TYPE             | VARCHAR2(1 char)   | 客戶類別                         |    |
|     | M_RISK_CLASS              | VARCHAR2(1 char)   | 風險等級                         |    |
|     | M_JOB_CLASS               | VARCHAR2(1 char)   | 任職類別                         |    |
|     | M_ONBOARD_DATE            | VARCHAR2(6 char)   | 到職年月                         |    |
|     | M_MAJOR_RELATION          | VARCHAR2(1 char)   | 與正卡關係                        |    |
|     | M_PROMOTE_PROD            | VARCHAR2(4 char)   | 推廣專案代號                       |    |
|     | M_PROMOTE_ROUTER          | VARCHAR2(4 char)   | 推廣通路代號                       |    |
|     | M_PROMOTE_DEPT            | VARCHAR2(4 char)   | 推廣單位代號                       |    |
|     | M_PROMOTE_ID              | VARCHAR2(11 char)  | 推廣員代號                        |    |
|     | M_CREDIT_ID_1             | VARCHAR2(4 char)   | 徵信員代號（一）                     |    |
|     | M_CREDIT_ID_2             | VARCHAR2(4 char)   | 徵信員代號（二）                     |    |
|     | M_CREDIT_DIRECTOR         | VARCHAR2(5 char)   | 徵信主管代號                       |    |
|     | M_SALES_NO                | VARCHAR2(6 char)   | 行銷代碼                         |    |
|     | M_DIVERSITY               | VARCHAR2(2 char)   | 條件差異                         |    |
|     | M_SALES_LETTER            | VARCHAR2(1 char)   | 廣告信函                         |    |
|     | M_SALES_MARK              | VARCHAR2(1 char)   | 共同行銷註記                       |    |
|     | M_SKM_ISSUE_MARK          | VARCHAR2(1 char)   | 新光三越聯名卡客戶同意發卡註記              |    |
|     | M_YEAR_FEE                | VARCHAR2(4 char)   | 年費碼                          |    |
|     | M_LOSS_FEE                | VARCHAR2(2 char)   | 掛失費碼                         |    |
|     | M_CYCLE_MARK              | VARCHAR2(1 char)   | 指定帳務期別註記                     |    |
|     | M_CYCLE                   | VARCHAR2(1 char)   | 指定帳務期別                       |    |
|     | M_CR_MARK                 | VARCHAR2(1 char)   | 公司等級（ＣＲ）                     |    |
|     | M_RE_MARK                 | VARCHAR2(1 char)   | 資產（ＲＥ）                       |    |
|     | M_DP_MARK                 | VARCHAR2(1 char)   | 存款餘額（ＤＰ）                     |    |
|     | M_DK_MARK                 | VARCHAR2(3 char)   | ＤＫ                           |    |
|     | M_ACCOUNT_YEAR            | VARCHAR2(3 char)   | 開戶年份                         |    |
|     | M_COLLECT_TYPE            | VARCHAR2(1 char)   | 領卡方式                         |    |
|     | M_BILL_TYPE               | VARCHAR2(1 char)   | 帳單寄送方式                       |    |
|     | M_GRADUATE_DATE           | VARCHAR2(6 char)   | 預計畢業日期                       |    |
|     | M_JMB_NO                  | VARCHAR2(9 char)   | JAL會員編號                      |    |
|     | M_COMBO_ACCOUNT           | VARCHAR2(13 char)  | ＣＯＭＢＯ卡帳號                     |    |
|     | M_LATELY_ABOARD_DATE      | DATE               | 最近出國日期                       |    |
|     | M_FLIGHT                  | VARCHAR2(6 char)   | 班機號碼                         |    |
|     | M_INSTALLMENT_7           | VARCHAR2(6 char)   | 分期７期                         |    |
|     | M_INSTALLMENT_12          | VARCHAR2(6 char)   | 分期１２期                        |    |
|     | M_INSTALLMENT_18          | VARCHAR2(6 char)   | 分期１８期                        |    |
|     | M_INSTALLMENT_24          | VARCHAR2(6 char)   | 分期２４期                        |    |
|     | M_YEAR_INCOME             | NUMBER(5, 0)        | 年收入                          |    |
|     | M_YEAR_INCOME_OTHER       | NUMBER(5, 0)        | 其他年收入                        |    |
|     | M_YEAR_INCOME_SPOUSE      | NUMBER(5, 0)        | 配偶年收入                        |    |
|     | S_CREDIT_LIMIT            | NUMBER(3, 0)        | 循環信用額度                       |    |
|     | M_KEYIN_ID                | VARCHAR2(8 char)   | 建檔人員                         |    |
|     | M_CARD_TYPE_1             | VARCHAR2(1 char)   | 申請卡種（一）                      |    |
|     | M_FEE_CODE_1              | VARCHAR2(1 char)   | 第一年年費碼（一）                    |    |
|     | M_MEMBER_CARD_1           | VARCHAR2(1 char)   | 會員卡註記（一）                     |    |
|     | M_COERCE_MARK_1           | VARCHAR2(1 char)   | 強制註記（一）                      |    |
|     | M_RETN_REASON_1           | VARCHAR2(3 char)   | 退件原因（一）                      |    |
|     | M_CARD_TYPE_2             | VARCHAR2(1 char)   | 申請卡種（二）                      |    |
|     | M_FEE_CODE_2              | VARCHAR2(1 char)   | 第一年年費碼（二）                    |    |
|     | M_VI_MARK_2               | VARCHAR2(1 char)   | ＶＩ註記（二）                      |    |
|     | M_COERCE_MARK_2           | VARCHAR2(1 char)   | 強制註記（二）                      |    |
|     | M_RETN_REASON_2           | VARCHAR2(3 char)   | 退件原因（二）                      |    |
|     | M_CARD_TYPE_3             | VARCHAR2(1 char)   | 申請卡種（三）                      |    |
|     | M_FEE_CODE_3              | VARCHAR2(1 char)   | 第一年年費碼（三）                    |    |
|     | M_VI_MARK_3               | VARCHAR2(1 char)   | ＶＩ註記（三）                      |    |
|     | M_COERCE_MARK_3           | VARCHAR2(1 char)   | 強制註記（三）                      |    |
|     | M_RETN_REASON_3           | VARCHAR2(3 char)   | 退件原因（三）                      |    |
|     | M_CARD_TYPE_4             | VARCHAR2(1 char)   | 申請卡種（四）                      |    |
|     | M_FEE_CODE_4              | VARCHAR2(1 char)   | 第一年年費碼（四）                    |    |
|     | M_CARD_MARK_4             | VARCHAR2(1 char)   | ＸＸ註記（四）                      |    |
|     | M_COERCE_MARK_4           | VARCHAR2(1 char)   | 強制註記（四）                      |    |
|     | M_RETN_REASON_4           | VARCHAR2(3 char)   | 退件原因（四）                      |    |
|     | M_CARD_TYPE_5             | VARCHAR2(1 char)   | 申請卡種（五）                      |    |
|     | M_FEE_CODE_5              | VARCHAR2(1 char)   | 第一年年費碼（五）                    |    |
|     | M_MP_MARK_5               | VARCHAR2(1 char)   | ＭＰ註記（五）                      |    |
|     | M_COERCE_MARK_5           | VARCHAR2(1 char)   | 強制註記（五）                      |    |
|     | M_RETN_REASON_5           | VARCHAR2(3 char)   | 退件原因（五）                      |    |
|     | M_CARD_TYPE_6             | VARCHAR2(1 char)   | 申請卡種（六）                      |    |
|     | M_FEE_CODE_6              | VARCHAR2(1 char)   | 第一年年費碼（六）                    |    |
|     | M_MP_MARK_6               | VARCHAR2(1 char)   | ＭＰ註記（六）                      |    |
|     | M_COERCE_MARK_6           | VARCHAR2(1 char)   | 強制註記（六）                      |    |
|     | M_RETN_REASON_6           | VARCHAR2(3 char)   | 退件原因（六）                      |    |
|     | M_CARD_TYPE_7             | VARCHAR2(1 char)   | 申請卡種（七）                      |    |
|     | M_FEE_CODE_7              | VARCHAR2(1 char)   | 第一年年費碼（七）                    |    |
|     | M_JP_MARK_7               | VARCHAR2(1 char)   | ＪＰ註記（七）                      |    |
|     | M_COERCE_MARK_7           | VARCHAR2(1 char)   | 強制註記（七）                      |    |
|     | M_RETN_REASON_7           | VARCHAR2(3 char)   | 退件原因（七）                      |    |
|     | M_CARD_TYPE_8             | VARCHAR2(1 char)   | 申請卡種（八）                      |    |
|     | M_FEE_CODE_8              | VARCHAR2(1 char)   | 第一年年費碼（八）                    |    |
|     | M_JP_MARK_8               | VARCHAR2(1 char)   | ＪＰ註記（八）                      |    |
|     | M_COERCE_MARK_8           | VARCHAR2(1 char)   | 強制註記（八）                      |    |
|     | M_RETN_REASON_8           | VARCHAR2(3 char)   | 退件原因（八）                      |    |
|     | M_E_BILL                  | VARCHAR2(1 char)   | 電子帳單                         |    |
|     | M_E_MAIL                  | VARCHAR2(40 char)  | 電子郵件地址                       |    |
|     | M_RESIDENT_ZIP            | VARCHAR2(5 char)   | 戶籍郵區                         |    |
|     | M_MAIL_ZIP                | VARCHAR2(5 char)   | 通訊郵區                         |    |
|     | M_OFFICE_ZIP              | VARCHAR2(5 char)   | 公司郵區                         |    |
|     | M_LIVING_ZIP              | VARCHAR2(5 char)   | 現居郵區                         |    |
|     | M_ASSURER_LIVING_ZIP      | VARCHAR2(5 char)   | 保人現居郵區                       |    |
|     | M_ASSURER_OFFICE_ZIP      | VARCHAR2(5 char)   | 保人公司郵區                       |    |
|     | M_CH_NAME                 | VARCHAR2(20 char)  | 申請人中文姓名                      |    |
|     | M_RESIDENT_ADDR_2         | VARCHAR2(32 char)  | 戶籍地址２                        |    |
|     | M_RESIDENT_ADDR_3         | VARCHAR2(20 char)  | 戶籍地址３                        |    |
|     | M_MAIL_ADDR_2             | VARCHAR2(32 char)  | 通訊地址２                        |    |
|     | M_MAIL_ADDR_3             | VARCHAR2(20 char)  | 通訊地址３                        |    |
|     | M_OFFICE_ADDR_2           | VARCHAR2(32 char)  | 公司地址２                        |    |
|     | M_OFFICE_ADDR_3           | VARCHAR2(20 char)  | 公司地址３                        |    |
|     | M_LIVING_ADDR_2           | VARCHAR2(32 char)  | 現居地址２                        |    |
|     | M_LIVING_ADDR_3           | VARCHAR2(20 char)  | 現居地址３                        |    |
|     | M_ASSURER_LIVING_ADDR_2   | VARCHAR2(32 char)  | 保人現居地址２                      |    |
|     | M_ASSURER_LIVING_ADDR_3   | VARCHAR2(20 char)  | 保人現居地址３                      |    |
|     | M_ASSURER_OFFICE_ADDR_2   | VARCHAR2(32 char)  | 保人公司地址２                      |    |
|     | M_ASSURER_OFFICE_ADDR_3   | VARCHAR2(20 char)  | 保人公司地址３                      |    |
|     | M_COMPANY                 | VARCHAR2(24 char)  | 公司名稱                         |    |
|     | M_JOB_TITLE               | VARCHAR2(16 char)  | 職稱                           |    |
|     | M_ASSURER_COMPANY         | VARCHAR2(40 char)  | 保人公司名稱                       |    |
|     | M_PARENT_NAME             | VARCHAR2(10 char)  | 家長姓名                         |    |
|     | M_SPOUSE_CH_NAME          | VARCHAR2(10 char)  | 配偶中文姓名                       |    |
|     | M_RELATIVE_CH_NAME        | VARCHAR2(10 char)  | 近親中文姓名                       |    |
|     | M_FRIEND_CH_NAME          | VARCHAR2(10 char)  | 好友中文姓名                       |    |
|     | M_ASSURER_CH_NAME         | VARCHAR2(10 char)  | 保人中文姓名                       |    |
|     | M_RELATIVE_RELATION       | VARCHAR2(4 char)   | 近親與卡人關係                      |    |
|     | M_FRIEND_RELATION         | VARCHAR2(4 char)   | 好友與卡人關係                      |    |
|     | M_ASSURER_RELATION        | VARCHAR2(10 char)  | 保人與卡人關係                      |    |
|     | M_RESIDENT_TEL            | VARCHAR2(12 char)  | 戶籍電話                         |    |
|     | M_GSM_TEL                 | VARCHAR2(10 char)  | 行動電話                         |    |
|     | M_OFFICE_TEL              | VARCHAR2(19 char)  | 公司電話                         |    |
|     | M_OTHER_TEL               | VARCHAR2(19 char)  | 其他電話                         |    |
|     | M_SPOUSE_TEL              | VARCHAR2(19 char)  | 配偶電話                         |    |
|     | M_RELATIVE_TEL_1          | VARCHAR2(12 char)  | 近親電話（一）                      |    |
|     | M_RELATIVE_TEL_2          | VARCHAR2(12 char)  | 近親電話（二）                      |    |
|     | M_FRIEND_TEL_1            | VARCHAR2(12 char)  | 好友電話（一）                      |    |
|     | M_FRIEND_TEL_2            | VARCHAR2(12 char)  | 好友電話（二）                      |    |
|     | M_ASSURER_TEL_H           | VARCHAR2(12 char)  | 保人電話（Ｈ）                      |    |
|     | M_ASSURER_TEL_O           | VARCHAR2(19 char)  | 保人電話（Ｏ）                      |    |
|     | M_SPOUSE_IDNO             | VARCHAR2(11 char)  | 配偶ＩＤ                         |    |
|     | M_ASSURER_IDNO            | VARCHAR2(11 char)  | 保人ＩＤ                         |    |
|     | M_ASSURER_EDUCATION       | VARCHAR2(1 char)   | 保人學歷                         |    |
|     | M_PAY_BANK_NO             | VARCHAR2(4 char)   | 扣繳銀行別                        |    |
|     | M_PAY_ACCOUNT             | VARCHAR2(20 char)  | 自動扣繳帳號                       |    |
|     | M_PAY_ACCOUNT_IDNO        | VARCHAR2(11 char)  | 扣繳帳號歸屬ＩＤ                     |    |
|     | M_PAY_RATE                | NUMBER(3, 0)        | 扣繳比率                         |    |
|     | M_ATM_MARK                | VARCHAR2(1 char)   | ＡＴＭ註記                        |    |
|     | M_ATM_ACCOUNT             | VARCHAR2(22 char)  | ＡＴＭ帳號                        |    |
|     | M_COMMEND_IDNO            | VARCHAR2(11 char)  | 推薦人ＩＤ                        |    |
|     | M_LINE_FOUR               | VARCHAR2(20 char)  | 凸字第四行                        |    |
|     | M_PASSPORT_COUNTRY_CODE   | VARCHAR2(2 char)   | 外籍人士護照國別碼                    |    |
|     | M_PASSPORT_NO             | VARCHAR2(10 char)  | 外籍人士護照號碼                     |    |
|     | M_DENIZEN_IDNO            | VARCHAR2(10 char)  | 外籍人士中華民國身分證號                 |    |
|     | M_ID_COLLECT_NOTE         | VARCHAR2(9 char)   | ＩＤ請領記錄                       |    |
|     | M_NOTE                    | VARCHAR2(30 char)  | 備註欄                          |    |
|     | M_SPECIAL_DATE_1          | VARCHAR2(4 char)   | 特殊紀念日（一）                     |    |
|     | M_SPECIAL_DATE_2          | VARCHAR2(4 char)   | 特殊紀念日（二）                     |    |
|     | M_SPECIAL_DATE_3          | VARCHAR2(4 char)   | 特殊紀念日（三）                     |    |
|     | M_SPECIAL_DATE_NOTE_1     | VARCHAR2(16 char)  | 特殊紀念日備註（一）                   |    |
|     | M_SPECIAL_DATE_NOTE_2     | VARCHAR2(16 char)  | 特殊紀念日備註（二）                   |    |
|     | M_SPECIAL_DATE_NOTE_3     | VARCHAR2(16 char)  | 特殊紀念日備註（三）                   |    |
|     | M_SIDEKICK_BIRTHDAY_1     | VARCHAR2(4 char)   | 親友生日（一）                      |    |
|     | M_SIDEKICK_BIRTHDAY_2     | VARCHAR2(4 char)   | 親友生日（二）                      |    |
|     | M_SIDEKICK_BIRTHDAY_3     | VARCHAR2(4 char)   | 親友生日（三）                      |    |
|     | M_SIDEKICK_RELATION_1     | VARCHAR2(8 char)   | 親友關係（一）                      |    |
|     | M_SIDEKICK_RELATION_2     | VARCHAR2(8 char)   | 親友關係（二）                      |    |
|     | M_SIDEKICK_RELATION_3     | VARCHAR2(8 char)   | 親友關係（三）                      |    |
|     | M_LOVE_DATE               | VARCHAR2(4 char)   | 真愛紀念日                        |    |
|     | M_HOME_TEL                | VARCHAR2(12 char)  | 住家電話                         |    |
|     | M_BUSINESS_CARD_SEND_CODE | VARCHAR2(1 char)   | 商務卡寄送碼                       |    |
|     | M_ALLIANCE_CODE           | VARCHAR2(1 char)   | 結盟業者同意條款                     |    |
|     | S_MANUAL_CLASS            | VARCHAR2(2 char)   | 人工評等                         |    |
|     | S_CARD_CLASS_1            | VARCHAR2(1 char)   | 卡人等級1                        |    |
|     | NONE2                     | VARCHAR2(1 char)   | 卡人等級2                        |    |
|     | S_COM_CLASS_1             | VARCHAR2(2 char)   | 電腦評等1                        |    |
|     | NONE3                     | VARCHAR2(2 char)   | 電腦評等2                        |    |
|     | ENG_MAIL_CITY             | VARCHAR2(20 char)  | 英文通訊都市名稱                     |    |
|     | ENG_MAIL_ZIP              | VARCHAR2(5 char)   | 英文通訊郵區                       |    |
|     | ENG_MAIL_ADDR1            | VARCHAR2(30 char)  | 英文通訊地址1                      |    |
|     | ENG_MAIL_ADDR2            | VARCHAR2(30 char)  | 英文通訊地址2                      |    |
|     | ENG_MAIL_ADDR3            | VARCHAR2(30 char)  | 英文通訊地址3                      |    |
|     | ENG_MAIL_ADDR4            | VARCHAR2(30 char)  | 英文通訊地址4                      |    |
|     | ENG_OFFICE_CITY           | VARCHAR2(20 char)  | 英文公司都市名稱                     |    |
|     | ENG_OFFICE_ZIP            | VARCHAR2(5 char)   | 英文公司郵區                       |    |
|     | ENG_OFFICE_ADDR1          | VARCHAR2(30 char)  | 英文公司地址1                      |    |
|     | ENG_OFFICE_ADDR2          | VARCHAR2(30 char)  | 英文公司地址2                      |    |
|     | ENG_OFFICE_ADDR3          | VARCHAR2(30 char)  | 英文公司地址3                      |    |
|     | ENG_OFFICE_ADDR4          | VARCHAR2(30 char)  | 英文公司地址4                      |    |
|     | S_EM_CARD                 | VARCHAR2(1 char)   | 緊急製卡                         |    |
|     | S_MANUAL_ADD              | VARCHAR2(1 char)   | 加辦卡片                         |    |
|     | EDS_BATCH_NO              | VARCHAR2(10 char)  | EDS批次號碼                      |    |
|     | NONE4                     | VARCHAR2(3 char)   | 處理結果                         |    |
|     | S_SUPP_ONLY               | VARCHAR2(1 char)   | 單獨申請附卡                       |    |
|     | M_SALES_COMPANY           | VARCHAR2(8 char)   | 共同行銷-子公司別                    |    |
|     | K2_DATA_TYPE              | VARCHAR2(1 char)   | K2資料類別                       |    |
|     | OLD_CARD_NO               | VARCHAR2(19 char)  | 六福舊卡號                        |    |
|     | M_ELEMENTARY_SCHOOL       | VARCHAR2(20 char)  | 國小畢業學校名稱                     |    |
|     | M_GIFT_TYPE               | VARCHAR2(4 char)   | 首刷禮可選一                       |    |
|     | M_CUSTOMER_TYPE           | VARCHAR2(4 char)   | 客戶類別                         |    |
|     | M_VSM_MARK                | VARCHAR2(1 char)   | 是否已持有新光三越聯名卡                 |    |
|     | M_BRANCH_REVOLVE_AMT      | VARCHAR2(3 char)   | 分行自審核准額度                     |    |
|     | M_CREDIT_RATE_LEVEL       | VARCHAR2(4 char)   | 初核卡利率                        |    |
|     | M_APRC_DATE               | VARCHAR2(8 char)   | 外僑居留證日期                      |    |
|     | M_MNO_ID                  | VARCHAR2(2 char)   | 電信營運商識別碼                     |    |
|     | M_SE_TYPE                 | VARCHAR2(2 char)   | 安全裝置                         |    |
|     | M_REFERENCE               | VARCHAR2(11 char)  | 推薦主管員編                       |    |
|     | M_EASYCARD_VALUE          | VARCHAR2(1 char)   | 悠遊卡自動加值註記                    |    |
|     | M_EASYCARD_MARKETING      | VARCHAR2(1 char)   | 悠遊卡行銷註記                      |    |
|     | M_CONTRACT                | VARCHAR2(2 char)   | 消費分期合約書                      |    |
|     | M_SKLI_MARK               | VARCHAR2(1 char)   | 新壽註記                         |    |
|     | CLOSED_DAY                | VARCHAR2(2 char)   | 指定關帳日                        |    |
|     | CARD_LIMIT                | VARCHAR2(5 char)   | 卡片額度                         |    |
|     | M_LOGO                    | VARCHAR2(3 char)   | LOGO                         |    |
|     | PCT                       | VARCHAR2(3 char)   | PCT                          |    |
|     | CREDIT_LIMIT              | NUMBER(5, 0)        | 關係戶額度                        |    |
|     | M_COUNTRY                 | VARCHAR2(2 char)   | 國別                           |    |
|     | M_PAY_PRINT               | VARCHAR2(1 char)   | 自動扣繳是否驗印                     |    |
|     | NONE5                     | VARCHAR2(5 char)   | FILLER                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_D_MAPPING

#### K2 MAPPING檔暫存檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | APP_NO                    | VARCHAR2(12 char)  | 申請書編號                        |    |
| PK  | END_DATE                  | DATE               | 結案日期                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_D_MDSM007

#### 郵購請款檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | PURCHASE_DATE             | DATE               | 請款日期                         |    |
|     | DATES                     | NUMBER(8, 0)        | 訂單檔期                         |    |
|     | ORDER_NO                  | VARCHAR2(4 char)   | 訂單流水號                        |    |
|     | ORDER_SEQ                 | VARCHAR2(4 char)   | 訂單序號                         |    |
|     | PURCHASE_SEQ              | VARCHAR2(2 char)   | 請款序號                         |    |
| PK  | EDS_ORDER_NO              | VARCHAR2(11 char)  | EDS訂單編號                      |    |
|     | ORDER_DATE                | DATE               | 訂單日期                         |    |
|     | CARD_NO                   | VARCHAR2(16 char)  | 卡號                           |    |
|     | IDNO                      | VARCHAR2(10 char)  | 身分證號                         |    |
|     | CUST_NAME                 | VARCHAR2(10 char)  | 姓名                           |    |
|     | CVC2                      | VARCHAR2(3 char)   | CVC2                         |    |
|     | EXP_DATE                  | VARCHAR2(6 char)   | 有效年月                         |    |
|     | TXN_DATE                  | DATE               | 出貨日期                         |    |
|     | AUTH_CODE                 | VARCHAR2(6 char)   | 授權碼                          |    |
|     | TXN_QTY                   | NUMBER(10, 0)       | 出貨數量                         |    |
|     | UNIT_AMT                  | NUMBER(10, 0)       | 單價                           |    |
|     | PERIOD_TOT                | NUMBER(10, 0)       | 分期期數                         |    |
|     | PERIOD_AMT                | NUMBER(10, 0)       | 分期金額                         |    |
|     | SUB_AMT                   | NUMBER(10, 0)       | 單筆合計金額                       |    |
|     | FIRST_AMT                 | NUMBER(10, 0)       | 頭款金額                         |    |
|     | LAST_AMT                  | NUMBER(10, 0)       | 尾款金額                         |    |
|     | INVOICE                   | VARCHAR2(10 char)  | 商店編號                         |    |
|     | SUPPLY_ENAME              | VARCHAR2(40 char)  | 商店英文名稱                       |    |
|     | SUPPLY_NAME               | VARCHAR2(40 char)  | 商店中文名稱                       |    |
|     | TXN_TYPE                  | VARCHAR2(2 char)   | 交易類別                         |    |
|     | FEE                       | NUMBER(10, 0)       | 手續費                          |    |
|     | FIRST_PAY                 | DATE               | 第一次繳款日期                      |    |
|     | LAST_PAY                  | DATE               | 最後繳款日期                       |    |
|     | PAID_NO                   | NUMBER(10, 0)       | 已繳期數                         |    |
|     | CYCLE_DATE                | VARCHAR2(1 char)   | 每月關帳日                        |    |
|     | PAY_DATE                  | DATE               | 墊款日期                         |    |
|     | RTN_DATE                  | DATE               | 退貨日期                         |    |
|     | OFF_DATE                  | DATE               | 訂單結清日期                       |    |
|     | PAYOFF_DATE               | DATE               | 帳單結清日期                       |    |
|     | PROC_DATE                 | DATE               | 處理日期                         |    |
|     | PROC_ID                   | VARCHAR2(6 char)   | 處理人員                         |    |
|     | POPULARIZEDEPT            | VARCHAR2(4 char)   | 推廣單位                         |    |
|     | POPULARIZEEMPNO           | VARCHAR2(5 char)   | 推廣員編                         |    |
|     | IMMEDIATENAMELIST         | VARCHAR2(1 char)   | 直效名單                         |    |
|     | PROD_ID                   | VARCHAR2(10 char)  | 商品代號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_D_SCIDS

#### 信用卡行為評分卡之ID總檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN                       | VARCHAR2(11 char)  | 身份證字號                        |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_BAM028

#### 新增授信及清償資訊-行庫別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | PAY_LOAN_DATE             | DATE               | 授信新增清償日                      |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | LASTMON_LOAN_AMT          | NUMBER(10, 0)       | 最新資料年月月底未逾期金額                |    |
|     | LASTMON_PASS_DUE_AMT      | NUMBER(10, 0)       | 最新資料年月月底逾期餘額                 |    |
|     | NEW_CONTRACT_AMT          | NUMBER(10, 0)       | 訂約金額(千元)                     |    |
|     | NEW_LOAN_AMT              | NUMBER(10, 0)       | 新增授信金額(千元)                   |    |
|     | NEW_PAY_LOAN_AMT          | NUMBER(10, 0)       | 新增清償金額(千元)                   |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_BAM029

#### 新增授信及清償資訊-行庫別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | PAY_LOAN_DATE             | DATE               | 授信新增清償日                      |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | XACT_CODE                 | VARCHAR2(1 char)   | 交易別                          |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別(對照表)                     |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記(對照表)                   |    |
|     | LASTMON_LOAN_AMT          | NUMBER(10, 0)       | 最新資料年月月底未逾期金額(千元)            |    |
|     | LASTMON_PASS_DUE_AMT      | NUMBER(10, 0)       | 最新資料年月月底逾期餘額(千元)             |    |
|     | NEW_CONTRACT_AMT          | NUMBER(10, 0)       | 訂約金額(千元)                     |    |
|     | NEW_LOAN_AMT              | NUMBER(10, 0)       | 當日動撥金額(千元)                   |    |
|     | NEW_PAY_LOAN_AMT          | NUMBER(10, 0)       | 新增清償金額(千元)                   |    |
|     | NEW_DBR22_AMT             | NUMBER(10, 0)       | 應計入DBR22倍規範之金額(千元)           |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_BAM095

#### 授信額度/擔保品/金額/還款紀錄資訊(聯徵資料)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | CONTRACT_AMT1             | NUMBER(10, 0)       | 綜合額度金額(千元)                   |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 分項額度金額(千元)                   |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 未逾期金額(千元)                    |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額(千元)                   |    |
|     | PAY_CODE_12               | VARCHAR2(12 char)  | 12期還款記錄                      |    |
|     | IS_KIND                   | VARCHAR2(2 char)   | 擔保品類別                        |    |
|     | PROJECT_CODE              | VARCHAR2(2 char)   | 政府專案貸款分類代碼                   |    |
|     | CO_LOAN                   | VARCHAR2(1 char)   | 共同借款註記                       |    |
|     | UN_MARK                   | VARCHAR2(1 char)   | 聯貸註記                         |    |
|     | U_YYYMMDD                 | VARCHAR2(8 char)   | 聯貸日期西元YYYYMMDD               |    |
|     | U_RATE                    | NUMBER(5, 2)        | 參貸比例百分比(例如100.00             |    |
|     | IB_MARK                   | VARCHAR2(1 char)   | 資金流向註記                       |    |
|     | IAB_BAN                   | VARCHAR2(8 char)   | 資金流向非法人組織統編                  |    |
|     | IAB_NAME                  | VARCHAR2(60 char)  | 資金流向非法人組織名稱                  |    |
|     | CONTRACT_MARK             | VARCHAR2(1 char)   | 額度特別註記                       |    |
|     | CONTRACT_CODE             | VARCHAR2(50 char)  | 本階額度代碼                       |    |
|     | CONTRACT_CODE1            | VARCHAR2(50 char)  | 最高階額度代碼                      |    |
|     | CON_BAN                   | VARCHAR2(10 char)  | 最高階額度所屬公司統編                  |    |
|     | CON_NAME                  | VARCHAR2(60 char)  | 最高階額度所屬公司名稱                  |    |
|     | ACT_Y_MARK                | VARCHAR2(1 char)   | Ｙ科目之額度註記                     |    |
|     | CONTRACT_AMT_Y            | NUMBER(10, 0)       | 現金卡日報Ｙ科目之可動用額度(千元)           |    |
|     | AC_AMT                    | NUMBER(10, 0)       | 授信1千元之原始金額                   |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | CURRENCY_CODE_3           | VARCHAR2(3 char)   | 幣別代號                         |    |
|     | CYCLE_FLAG                | VARCHAR2(1 char)   | 循環信用註記                       |    |
|     | OFF_FLAG                  | VARCHAR2(1 char)   | 額度可否撤銷                       |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_BAM306

#### 99年版授信保證資料(從債務)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | GID_CODE                  | VARCHAR2(1 char)   | 身分代號                         |    |
|     | M_ID                      | VARCHAR2(10 char)  | 主債務人身分證號                     |    |
|     | M_ID_NAME                 | VARCHAR2(60 char)  | 主債務人名稱                       |    |
|     | REL_CODE                  | VARCHAR2(2 char)   | 關係代號                         |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 訂約金額                         |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 放款未逾期                        |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額                       |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_JAS002

#### 信用異常紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | EVER_DELINQUENT           | VARCHAR2(1 char)   | 授信異常                         |    |
|     | DELINQUENT_DATE           | VARCHAR2(7 char)   | 最近授信異常日期                     |    |
|     | EVER_BAD_CHECK            | VARCHAR2(1 char)   | 退票異常                         |    |
|     | BAD_CHECK_DATE            | DATE               | 最近退票異常日期                     |    |
|     | EVER_REJECT               | VARCHAR2(1 char)   | 拒絕往來記錄                       |    |
|     | REJECT_DATE               | DATE               | 拒絕往來日期                       |    |
|     | EVER_STOP_CARD            | VARCHAR2(1 char)   | 強制停卡異常                       |    |
|     | STOP_CARD_DATE            | DATE               | 最近強制停卡日期                     |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_KRM040

#### 聯徵資料C

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 繳款人ID                        |    |
|     | BILL_DATE                 | DATE               | 結帳日                          |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(24 char)  | 發卡機構名稱                       |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | CARD_TYPE                 | VARCHAR2(7 char)   | 信用卡別                         |    |
|     | PERM_LIMIT                | NUMBER(7, 0)        | 永久額度                         |    |
|     | TEMP_LIMIT                | NUMBER(7, 0)        | 臨時額度                         |    |
|     | CASH_LIMIT                | NUMBER(7, 0)        | 預借現金額度                       |    |
|     | PAYABLE                   | NUMBER(9, 0)        | 本期應付帳款(金額)                   |    |
|     | CASH_LENT                 | NUMBER(8, 0)        | 本期預借現金                       |    |
|     | LAST_PAYA                 | NUMBER(9, 0)        | 上期應付帳款(金額)                   |    |
|     | REVOL_BAL                 | NUMBER(9, 0)        | 上期循環信用                       |    |
|     | PAY_STAT                  | VARCHAR2(1 char)   | 上期繳款狀況代號(金額)                 |    |
|     | PAY_CODE                  | VARCHAR2(1 char)   | 上期繳款狀況代號(時間)                 |    |
|     | REVOL_RATE                | NUMBER(4, 2)        | 上期循環比率                       |    |
|     | PRE_OWED                  | NUMBER(8, 0)        | 未到期分期償還待付金額                  |    |
|     | DEBT_CODE                 | VARCHAR2(1 char)   | 債權狀態註記                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 債權結案註記                       |    |
|     | CLEAR_DATE                | DATE               | 不良債權結案日期                     |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_KRM046

#### 信用卡正附卡資訊（本人持用信用卡）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 受查戶IDN_BAN                   |    |
|     | DISP_GROUP                | VARCHAR2(1 char)   | 類別                           |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(40 char)  | 發卡機構名稱                       |    |
|     | CARD_BRAND                | VARCHAR2(1 char)   | 卡名代號                         |    |
|     | CARD_TYPE                 | VARCHAR2(1 char)   | 標章代號                         |    |
|     | START_DATE                | VARCHAR2(7 char)   | 發卡日期                         |    |
|     | LIMIT_AMT                 | NUMBER(6, 0)        | 額度（千元）                       |    |
|     | YN_SHARE_LIMIT            | VARCHAR2(1 char)   | 是否綜合額度                       |    |
|     | YN_PHYSICAL               | VARCHAR2(1 char)   | 是否實體卡                        |    |
|     | ACT_MARK                  | VARCHAR2(1 char)   | 開卡註記                         |    |
|     | STOP_DATE                 | DATE               | 停用日期                         |    |
|     | STOP_CODE                 | VARCHAR2(1 char)   | 停用種類代號                       |    |
|     | AB_CODE                   | VARCHAR2(1 char)   | 停用原因代號                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 結案代碼                         |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | M_IDN_BAN                 | VARCHAR2(10 char)  | 正卡人/繳款人IDN_BAN               |    |
|     | M_CNAME                   | VARCHAR2(12 char)  | 正卡人/繳款人戶名                    |    |
|     | RELA                      | VARCHAR2(1 char)   | 受查戶與正卡人/繳款人關係代號              |    |
|     | RELA_NAME                 | VARCHAR2(20 char)  | 受查戶與正卡人/繳款人關係名稱              |    |
|     | RISK                      | NUMBER(6, 0)        | 風險損失金額（千元）                   |    |
|     | CLEAR_DATE                | DATE               | 欠款結清日期                       |    |
|     | GUAR_ID                   | VARCHAR2(10 char)  | 保證人IDN_BAN                   |    |
|     | GUAR_CNAME                | VARCHAR2(12 char)  | 保證人中文戶名                      |    |
|     | YN_AMC_CLEAR              | VARCHAR2(1 char)   | 欠款結清日期來自資產管理公司函告             |    |
|     | REMARK                    | VARCHAR2(100 char) | 註記                           |    |
|     | FCUR_CODE                 | VARCHAR2(4 char)   | 雙幣卡外幣別                       |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_STM007

#### 最近三個月內非Z類產品被查詢紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | INQ_DATE                  | DATE               | 查詢日期                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 查詢單位代號                       |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 查詢單位名稱                       |    |
|     | ITEM_LIST                 | VARCHAR2(10 char)  | 查詢項目串列                       |    |
|     | INQ_PURPOSE_1             | VARCHAR2(1 char)   | 查詢理由碼                        |    |
|     | INQ_PURPOSE               | VARCHAR2(30 char)  | 查詢理由碼                        |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_STM008

#### 當日非Z類產品被查詢紀錄 (多筆)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | VARCHAR2(10 char)  | 資料查詢日期                       |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 查詢單位代號                       |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 查詢單位名稱                       |    |
|     | INQ_PURPOSE_1             | VARCHAR2(1 char)   | 查詢理由碼                        |    |
|     | INQ_PURPOSE               | VARCHAR2(30 char)  | 查詢理由碼(中文註解)新、原業務、新原存款開戶及公開資訊 |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | ROWGUID                   | VARCHAR2(36 char)  | 識別碼                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_VAM106

#### 消債條例信用註記資訊(原052組合)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_VAM107

#### 銀行公會消金案件債務協商補充註記

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_JCIC_VAM108

#### 其他補充註記資訊

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | APP_NO                    | VARCHAR2(12 char)  | 信用卡申請書編號                     |    |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | VARCHAR2(10 char)  | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_BAM028

#### 新增授信及清償資訊-行庫別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | PAY_LOAN_DATE             | DATE               | 授信新增清償日                      |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | LASTMON_LOAN_AMT          | NUMBER(10, 0)       | 最新資料年月月底未逾期金額                |    |
|     | LASTMON_PASS_DUE_AMT      | NUMBER(10, 0)       | 最新資料年月月底逾期餘額                 |    |
|     | NEW_CONTRACT_AMT          | NUMBER(10, 0)       | 訂約金額(千元)                     |    |
|     | NEW_LOAN_AMT              | NUMBER(10, 0)       | 新增授信金額(千元)                   |    |
|     | NEW_PAY_LOAN_AMT          | NUMBER(10, 0)       | 新增清償金額(千元)                   |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_BAM029

#### 新增授信及清償資訊-行庫別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | PAY_LOAN_DATE             | VARCHAR2(7 char)   | 授信新增清償日                      |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | XACT_CODE                 | VARCHAR2(1 char)   | 交易別                          |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別(對照表)                     |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記(對照表)                   |    |
|     | LASTMON_LOAN_AMT          | NUMBER(10, 0)       | 最新資料年月月底未逾期金額(千元)            |    |
|     | LASTMON_PASS_DUE_AMT      | NUMBER(10, 0)       | 最新資料年月月底逾期餘額(千元)             |    |
|     | NEW_CONTRACT_AMT          | NUMBER(10, 0)       | 訂約金額(千元)                     |    |
|     | NEW_LOAN_AMT              | NUMBER(10, 0)       | 當日動撥金額(千元)                   |    |
|     | NEW_PAY_LOAN_AMT          | NUMBER(10, 0)       | 新增清償金額(千元)                   |    |
|     | NEW_DBR22_AMT             | NUMBER(10, 0)       | 應計入DBR22倍規範之金額(千元)           |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_BAM095

#### 99年版授信額度, 擔保品, 金額, 還款紀錄資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | CONTRACT_AMT1             | NUMBER(10, 0)       | 綜合額度金額(千元)                   |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 分項額度金額(千元)                   |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 未逾期金額(千元)                    |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額(千元)                   |    |
|     | PAY_CODE_12               | VARCHAR2(12 char)  | 12期還款記錄                      |    |
|     | IS_KIND                   | VARCHAR2(2 char)   | 擔保品類別                        |    |
|     | PROJECT_CODE              | VARCHAR2(2 char)   | 政府專案貸款分類代碼                   |    |
|     | CO_LOAN                   | VARCHAR2(1 char)   | 共同借款註記                       |    |
|     | UN_MARK                   | VARCHAR2(1 char)   | 聯貸註記                         |    |
|     | U_YYYMMDD                 | VARCHAR2(8 char)   | 聯貸日期西元YYYYMMDD               |    |
|     | U_RATE                    | NUMBER(5, 2)        | 參貸比例百分比(例如100.00             |    |
|     | IB_MARK                   | VARCHAR2(1 char)   | 資金流向註記                       |    |
|     | IAB_BAN                   | VARCHAR2(8 char)   | 資金流向非法人組織統編                  |    |
|     | IAB_NAME                  | VARCHAR2(60 char)  | 資金流向非法人組織名稱                  |    |
|     | CONTRACT_MARK             | VARCHAR2(1 char)   | 額度特別註記                       |    |
|     | CONTRACT_CODE             | VARCHAR2(50 char)  | 本階額度代碼                       |    |
|     | CONTRACT_CODE1            | VARCHAR2(50 char)  | 最高階額度代碼                      |    |
|     | CON_BAN                   | VARCHAR2(10 char)  | 最高階額度所屬公司統編                  |    |
|     | CON_NAME                  | VARCHAR2(60 char)  | 最高階額度所屬公司名稱                  |    |
|     | ACT_Y_MARK                | VARCHAR2(1 char)   | Ｙ科目之額度註記                     |    |
|     | CONTRACT_AMT_Y            | NUMBER(10, 0)       | 現金卡日報Ｙ科目之可動用額度(千元)           |    |
|     | AC_AMT                    | NUMBER(10, 0)       | 授信1千元之原始金額                   |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | CURRENCY_CODE_3           | VARCHAR2(3 char)   | 幣別代號                         |    |
|     | CYCLE_FLAG                | VARCHAR2(1 char)   | 循環信用註記                       |    |
|     | OFF_FLAG                  | VARCHAR2(1 char)   | 額度可否撤銷                       |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_BAM306

#### 99年版授信保證資料(從債務)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | GID_CODE                  | VARCHAR2(1 char)   | 身分代號                         |    |
|     | M_ID                      | VARCHAR2(10 char)  | 主債務人身分證號                     |    |
|     | M_ID_NAME                 | VARCHAR2(60 char)  | 主債務人名稱                       |    |
|     | REL_CODE                  | VARCHAR2(2 char)   | 關係代號                         |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 訂約金額                         |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 放款未逾期                        |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額                       |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_JAS002

#### 信用異常紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | EVER_DELINQUENT           | VARCHAR2(1 char)   | 授信異常                         |    |
|     | DELINQUENT_DATE           | VARCHAR2(7 char)   | 最近授信異常日期                     |    |
|     | EVER_BAD_CHECK            | VARCHAR2(1 char)   | 退票異常                         |    |
|     | BAD_CHECK_DATE            | DATE               | 最近退票異常日期                     |    |
|     | EVER_REJECT               | VARCHAR2(1 char)   | 拒絕往來記錄                       |    |
|     | REJECT_DATE               | DATE               | 拒絕往來日期                       |    |
|     | EVER_STOP_CARD            | VARCHAR2(1 char)   | 強制停卡異常                       |    |
|     | STOP_CARD_DATE            | DATE               | 最近強制停卡日期                     |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_KRM040

#### 信用卡戶帳款及循環比率資訊(最近12月)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 繳款人ID                        |    |
|     | BILL_DATE                 | DATE               | 結帳日                          |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(24 char)  | 發卡機構名稱                       |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | CARD_TYPE                 | VARCHAR2(7 char)   | 信用卡別                         |    |
|     | PERM_LIMIT                | NUMBER(7, 0)        | 永久額度                         |    |
|     | TEMP_LIMIT                | NUMBER(7, 0)        | 臨時額度                         |    |
|     | CASH_LIMIT                | NUMBER(7, 0)        | 預借現金額度                       |    |
|     | PAYABLE                   | NUMBER(9, 0)        | 本期應付帳款(金額)                   |    |
|     | CASH_LENT                 | NUMBER(8, 0)        | 本期預借現金                       |    |
|     | LAST_PAYA                 | NUMBER(9, 0)        | 上期應付帳款(金額)                   |    |
|     | REVOL_BAL                 | NUMBER(9, 0)        | 上期循環信用                       |    |
|     | PAY_STAT                  | VARCHAR2(1 char)   | 上期繳款狀況代號(金額)                 |    |
|     | PAY_CODE                  | VARCHAR2(1 char)   | 上期繳款狀況代號(時間)                 |    |
|     | REVOL_RATE                | NUMBER(4, 2)        | 上期循環比率                       |    |
|     | PRE_OWED                  | NUMBER(8, 0)        | 未到期分期償還待付金額                  |    |
|     | DEBT_CODE                 | VARCHAR2(1 char)   | 債權狀態註記                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 債權結案註記                       |    |
|     | CLEAR_DATE                | DATE               | 不良債權結案日期                     |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_KRM046

#### 信用卡正附卡資訊（本人持用信用卡）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 受查戶IDN_BAN                   |    |
|     | DISP_GROUP                | VARCHAR2(1 char)   | 類別                           |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(40 char)  | 發卡機構名稱                       |    |
|     | CARD_BRAND                | VARCHAR2(1 char)   | 卡名代號                         |    |
|     | CARD_TYPE                 | VARCHAR2(1 char)   | 標章代號                         |    |
|     | START_DATE                | VARCHAR2(7 char)   | 發卡日期                         |    |
|     | LIMIT_AMT                 | NUMBER(6, 0)        | 額度（千元）                       |    |
|     | YN_SHARE_LIMIT            | VARCHAR2(1 char)   | 是否綜合額度                       |    |
|     | YN_PHYSICAL               | VARCHAR2(1 char)   | 是否實體卡                        |    |
|     | ACT_MARK                  | VARCHAR2(1 char)   | 開卡註記                         |    |
|     | STOP_DATE                 | DATE               | 停用日期                         |    |
|     | STOP_CODE                 | VARCHAR2(1 char)   | 停用種類代號                       |    |
|     | AB_CODE                   | VARCHAR2(1 char)   | 停用原因代號                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 結案代碼                         |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | M_IDN_BAN                 | VARCHAR2(10 char)  | 正卡人/繳款人IDN_BAN               |    |
|     | M_CNAME                   | VARCHAR2(12 char)  | 正卡人/繳款人戶名                    |    |
|     | RELA                      | VARCHAR2(1 char)   | 受查戶與正卡人/繳款人關係代號              |    |
|     | RELA_NAME                 | VARCHAR2(20 char)  | 受查戶與正卡人/繳款人關係名稱              |    |
|     | RISK                      | NUMBER(6, 0)        | 風險損失金額（千元）                   |    |
|     | CLEAR_DATE                | DATE               | 欠款結清日期                       |    |
|     | GUAR_ID                   | VARCHAR2(10 char)  | 保證人IDN_BAN                   |    |
|     | GUAR_CNAME                | VARCHAR2(12 char)  | 保證人中文戶名                      |    |
|     | YN_AMC_CLEAR              | VARCHAR2(1 char)   | 欠款結清日期來自資產管理公司函告             |    |
|     | REMARK                    | VARCHAR2(100 char) | 註記                           |    |
|     | FCUR_CODE                 | VARCHAR2(4 char)   | 雙幣卡外幣別                       |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_STM007

#### 最近三個月內非Z類產品被查詢紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | INQ_DATE                  | DATE               | 查詢日期                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 查詢單位代號                       |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 查詢單位名稱                       |    |
|     | ITEM_LIST                 | VARCHAR2(10 char)  | 查詢項目串列                       |    |
|     | INQ_PURPOSE_1             | VARCHAR2(1 char)   | 查詢理由碼                        |    |
|     | INQ_PURPOSE               | VARCHAR2(30 char)  | 查詢理由碼                        |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_STM008

#### 當日非Z類產品被查詢紀錄 (多筆)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | VARCHAR2(10 char)  | 資料查詢日期                       |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 查詢單位代號                       |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 查詢單位名稱                       |    |
|     | INQ_PURPOSE_1             | VARCHAR2(1 char)   | 查詢理由碼                        |    |
|     | INQ_PURPOSE               | VARCHAR2(30 char)  | 查詢理由碼(中文註解)新、原業務、新原存款開戶及公開資訊 |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | ROWGUID                   | VARCHAR2(36 char)  | 識別碼                          |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_VAM106

#### 消債條例信用註記資訊(原052組合)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_VAM107

#### 銀行公會消金案件債務協商補充註記

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_M_REJCIC_VAM108

#### 其他補充註記資訊

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | JCIC_BATCH_NO             | VARCHAR2(10 char)  | 聯徵批號                         |    |
|     | JCIC_QITEM                | VARCHAR2(3 char)   | 查詢項目                         |    |
|     | JCIC_NO                   | VARCHAR2(12 char)  | 聯徵查詢編號                       |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_AAS003

#### 自然人姓名, 身分證補發, 通報, 補充註記

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN                       | VARCHAR2(10 char)  | 身分證號                         |    |
|     | PNAME                     | VARCHAR2(40 char)  | 中文姓名                         |    |
|     | IS_LOST                   | VARCHAR2(1 char)   | 身分證註銷或一年內掛失紀錄                |    |
|     | IS_WANTED                 | VARCHAR2(1 char)   | 通報案件紀錄                       |    |
|     | IS_NOTE                   | VARCHAR2(1 char)   | 是否有補充註記                      |    |
|     | NOTELIST                  | VARCHAR2(9 char)   | 補充註記                         |    |
|     | WANTEDLIST                | VARCHAR2(9 char)   | 通報案件紀錄                       |    |
|     | FOREIGNER_MARK            | VARCHAR2(1 char)   | 在台無戶籍人士身分證號對照索引註記            |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_APS001

#### 自然人個人資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | RGY_ADDRESS               | VARCHAR2(66 char)  | 戶籍地址                         |    |
|     | ENG_NAME                  | VARCHAR2(20 char)  | 英文姓名                         |    |
|     | BIRTHDAY                  | DATE               | 出生日期                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 身分證號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_BAI001

#### 授信資料日期

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | LN_DATA_DATE              | DATE               | 授信資料日期                       |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_BAM028

#### 新增授信及清償資訊-行庫別

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | PAY_LOAN_DATE             | DATE               | 授信新增清償日                      |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | LASTMON_LOAN_AMT          | NUMBER(10, 0)       | 最新資料年月月底未逾期金額                |    |
|     | LASTMON_PASS_DUE_AMT      | NUMBER(10, 0)       | 最新資料年月月底逾期餘額                 |    |
|     | NEW_CONTRACT_AMT          | NUMBER(10, 0)       | 訂約金額(千元)                     |    |
|     | NEW_LOAN_AMT              | NUMBER(10, 0)       | 新增授信金額(千元)                   |    |
|     | NEW_PAY_LOAN_AMT          | NUMBER(10, 0)       | 新增清償金額(千元)                   |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_BAM095

#### 99年版授信額度, 擔保品, 金額, 還款紀錄資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | CONTRACT_AMT1             | NUMBER(10, 0)       | 綜合額度金額(千元)                   |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 分項額度金額(千元)                   |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 未逾期金額(千元)                    |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額(千元)                   |    |
|     | PAY_CODE_12               | VARCHAR2(12 char)  | 12期還款記錄                      |    |
|     | IS_KIND                   | VARCHAR2(2 char)   | 擔保品類別                        |    |
|     | PROJECT_CODE              | VARCHAR2(2 char)   | 政府專案貸款分類代碼                   |    |
|     | CO_LOAN                   | VARCHAR2(1 char)   | 共同借款註記                       |    |
|     | UN_MARK                   | VARCHAR2(1 char)   | 聯貸註記                         |    |
|     | U_YYYMMDD                 | VARCHAR2(8 char)   | 聯貸日期西元YYYYMMDD               |    |
|     | U_RATE                    | NUMBER(5, 2)        | 參貸比例百分比(例如100.00             |    |
|     | IB_MARK                   | VARCHAR2(1 char)   | 資金流向註記                       |    |
|     | IAB_BAN                   | VARCHAR2(8 char)   | 資金流向非法人組織統編                  |    |
|     | IAB_NAME                  | VARCHAR2(60 char)  | 資金流向非法人組織名稱                  |    |
|     | CONTRACT_MARK             | VARCHAR2(1 char)   | 額度特別註記                       |    |
|     | CONTRACT_CODE             | VARCHAR2(50 char)  | 本階額度代碼                       |    |
|     | CONTRACT_CODE1            | VARCHAR2(50 char)  | 最高階額度代碼                      |    |
|     | CON_BAN                   | VARCHAR2(10 char)  | 最高階額度所屬公司統編                  |    |
|     | CON_NAME                  | VARCHAR2(60 char)  | 最高階額度所屬公司名稱                  |    |
|     | ACT_Y_MARK                | VARCHAR2(1 char)   | Ｙ科目之額度註記                     |    |
|     | CONTRACT_AMT_Y            | NUMBER(10, 0)       | 現金卡日報Ｙ科目之可動用額度(千元)           |    |
|     | AC_AMT                    | NUMBER(10, 0)       | 授信1千元之原始金額                   |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | CURRENCY_CODE_3           | VARCHAR2(3 char)   | 幣別代號                         |    |
|     | CYCLE_FLAG                | VARCHAR2(1 char)   | 循環信用註記                       |    |
|     | OFF_FLAG                  | VARCHAR2(1 char)   | 額度可否撤銷                       |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_BAM306

#### 99年版授信保證資料(從債務)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_YYY                  | VARCHAR2(3 char)   | 資料年度                         |    |
|     | DATA_MM                   | VARCHAR2(2 char)   | 資料月份                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 行庫代號                         |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 行庫名稱                         |    |
|     | ACCOUNT_CODE              | VARCHAR2(1 char)   | 科目別                          |    |
|     | ACCOUNT_CODE2             | VARCHAR2(1 char)   | 科目別註記                        |    |
|     | PURPOSE_CODE              | VARCHAR2(1 char)   | 用途別                          |    |
|     | GID_CODE                  | VARCHAR2(1 char)   | 身分代號                         |    |
|     | M_ID                      | VARCHAR2(10 char)  | 主債務人身分證號                     |    |
|     | M_ID_NAME                 | VARCHAR2(60 char)  | 主債務人名稱                       |    |
|     | REL_CODE                  | VARCHAR2(2 char)   | 關係代號                         |    |
|     | CONTRACT_AMT              | NUMBER(10, 0)       | 訂約金額                         |    |
|     | LOAN_AMT                  | NUMBER(10, 0)       | 放款未逾期                        |    |
|     | PASS_DUE_AMT              | NUMBER(10, 0)       | 逾期未還金額                       |    |
|     | ASST_DATA_YYY             | VARCHAR2(3 char)   | 債權證券化資料年                     |    |
|     | ASST_DATA_MM              | VARCHAR2(2 char)   | 債權證券化資料月                     |    |
|     | ASST_IDN_BAN              | VARCHAR2(10 char)  | 債權證券化受託機構統一編號                |    |
|     | ASST_NAME                 | VARCHAR2(60 char)  | 債權證券化受託機構名稱                  |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_JAS002

#### 信用異常紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | EVER_DELINQUENT           | VARCHAR2(1 char)   | 授信異常                         |    |
|     | DELINQUENT_DATE           | VARCHAR2(7 char)   | 最近授信異常日期                     |    |
|     | EVER_BAD_CHECK            | VARCHAR2(1 char)   | 退票異常                         |    |
|     | BAD_CHECK_DATE            | DATE               | 最近退票異常日期                     |    |
|     | EVER_REJECT               | VARCHAR2(1 char)   | 拒絕往來記錄                       |    |
|     | REJECT_DATE               | DATE               | 拒絕往來日期                       |    |
|     | EVER_STOP_CARD            | VARCHAR2(1 char)   | 強制停卡異常                       |    |
|     | STOP_CARD_DATE            | DATE               | 最近強制停卡日期                     |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_KRI001

#### 資料處理日期

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | DATA_PROCESS_DATE         | DATE               | 資料處理日期                       |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_KRM040

#### 信用卡戶帳款及循環比率資訊(最近12月)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 繳款人ID                        |    |
|     | BILL_DATE                 | DATE               | 結帳日                          |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(24 char)  | 發卡機構名稱                       |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | CARD_TYPE                 | VARCHAR2(7 char)   | 信用卡別                         |    |
|     | PERM_LIMIT                | NUMBER(7, 0)        | 永久額度                         |    |
|     | TEMP_LIMIT                | NUMBER(7, 0)        | 臨時額度                         |    |
|     | CASH_LIMIT                | NUMBER(7, 0)        | 預借現金額度                       |    |
|     | PAYABLE                   | NUMBER(9, 0)        | 本期應付帳款(金額)                   |    |
|     | CASH_LENT                 | NUMBER(8, 0)        | 本期預借現金                       |    |
|     | LAST_PAYA                 | NUMBER(9, 0)        | 上期應付帳款(金額)                   |    |
|     | REVOL_BAL                 | NUMBER(9, 0)        | 上期循環信用                       |    |
|     | PAY_STAT                  | VARCHAR2(1 char)   | 上期繳款狀況代號(金額)                 |    |
|     | PAY_CODE                  | VARCHAR2(1 char)   | 上期繳款狀況代號(時間)                 |    |
|     | REVOL_RATE                | NUMBER(4, 2)        | 上期循環比率                       |    |
|     | PRE_OWED                  | NUMBER(8, 0)        | 未到期分期償還待付金額                  |    |
|     | DEBT_CODE                 | VARCHAR2(1 char)   | 債權狀態註記                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 債權結案註記                       |    |
|     | CLEAR_DATE                | DATE               | 不良債權結案日期                     |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_KRM046

#### 信用卡正附卡資訊（本人持用信用卡）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 受查戶IDN_BAN                   |    |
|     | DISP_GROUP                | VARCHAR2(1 char)   | 類別                           |    |
|     | ISSUE                     | VARCHAR2(3 char)   | 發卡機構代號                       |    |
|     | ISSUE_NAME                | VARCHAR2(40 char)  | 發卡機構名稱                       |    |
|     | CARD_BRAND                | VARCHAR2(1 char)   | 卡名代號                         |    |
|     | CARD_TYPE                 | VARCHAR2(1 char)   | 標章代號                         |    |
|     | START_DATE                | VARCHAR2(7 char)   | 發卡日期                         |    |
|     | LIMIT_AMT                 | NUMBER(6, 0)        | 額度（千元）                       |    |
|     | YN_SHARE_LIMIT            | VARCHAR2(1 char)   | 是否綜合額度                       |    |
|     | YN_PHYSICAL               | VARCHAR2(1 char)   | 是否實體卡                        |    |
|     | ACT_MARK                  | VARCHAR2(1 char)   | 開卡註記                         |    |
|     | STOP_DATE                 | DATE               | 停用日期                         |    |
|     | STOP_CODE                 | VARCHAR2(1 char)   | 停用種類代號                       |    |
|     | AB_CODE                   | VARCHAR2(1 char)   | 停用原因代號                       |    |
|     | CLOSE_CODE                | VARCHAR2(1 char)   | 結案代碼                         |    |
|     | BILL_MARK                 | VARCHAR2(2 char)   | 帳單別                          |    |
|     | M_IDN_BAN                 | VARCHAR2(10 char)  | 正卡人/繳款人IDN_BAN               |    |
|     | M_CNAME                   | VARCHAR2(12 char)  | 正卡人/繳款人戶名                    |    |
|     | RELA                      | VARCHAR2(1 char)   | 受查戶與正卡人/繳款人關係代號              |    |
|     | RELA_NAME                 | VARCHAR2(20 char)  | 受查戶與正卡人/繳款人關係名稱              |    |
|     | RISK                      | NUMBER(6, 0)        | 風險損失金額（千元）                   |    |
|     | CLEAR_DATE                | DATE               | 欠款結清日期                       |    |
|     | GUAR_ID                   | VARCHAR2(10 char)  | 保證人IDN_BAN                   |    |
|     | GUAR_CNAME                | VARCHAR2(12 char)  | 保證人中文戶名                      |    |
|     | YN_AMC_CLEAR              | VARCHAR2(1 char)   | 欠款結清日期來自資產管理公司函告             |    |
|     | REMARK                    | VARCHAR2(100 char) | 註記                           |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_KRS011

#### 自用住宅有無

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | H_CODE                    | VARCHAR2(1 char)   | 自用住宅有無                       |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_STM007

#### 最近三個月內非Z類產品被查詢紀錄

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | INQ_DATE                  | DATE               | 查詢日期                         |    |
|     | BANK_CODE                 | VARCHAR2(7 char)   | 查詢單位代號                       |    |
|     | BANK_NAME                 | VARCHAR2(40 char)  | 查詢單位名稱                       |    |
|     | ITEM_LIST                 | VARCHAR2(10 char)  | 查詢項目串列                       |    |
|     | INQ_PURPOSE_1             | VARCHAR2(1 char)   | 查詢理由碼                        |    |
|     | INQ_PURPOSE               | VARCHAR2(30 char)  | 查詢理由碼                        |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_VAM106

#### 消債條例信用註記資訊(原052組合)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_VAM107

#### 銀行公會消金案件債務協商補充註記

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_VAM108

#### 其他補充註記資訊

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統編/身分證號                      |    |
|     | DATA_DATE                 | DATE               | 訊息登錄日期                       |    |
|     | MAINCODE                  | VARCHAR2(1 char)   | 訊息種類大項代碼                     |    |
|     | MAINNOTE                  | VARCHAR2(36 char)  | 訊息種類大項                       |    |
|     | SUBCODE                   | VARCHAR2(1 char)   | 訊息種類細項第一位代碼                  |    |
|     | SUBNOTE                   | VARCHAR2(60 char)  | 訊息種類細項                       |    |
|     | NOTE                      | VARCHAR2(200 char) | 訊息內容                         |    |
|     | NEW_SUBCODE               | VARCHAR2(2 char)   | 訊息種類細項代碼（新）                  |    |
|     | FILLER                    | VARCHAR2(28 char)  | 保留欄位                         |    |
|     | IDN                       | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |    |

### VW_ODS_Y_VAM201

#### 通報案件紀錄-案件通報

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | TYPE                      | VARCHAR2(1 char)   | 通報種類                         |    |
|     | CRI_PLACE                 | VARCHAR2(7 char)   | 通報單位                         |    |
|     | CRI_DATE                  | DATE               | 發生日期                         |    |
|     | DOC_DATE                  | DATE               | 通報日期                         |    |
|     | CNAME                     | VARCHAR2(44 char)  | 中文戶名                         |    |
|     | INVOICE_NO                | VARCHAR2(20 char)  | 單據號碼/人頭帳號                    |    |
|     | REMARK_1                  | VARCHAR2(70 char)  | 說明１                          |    |
|     | REMARK_2                  | VARCHAR2(70 char)  | 說明２                          |    |
|     | REMARK_3                  | VARCHAR2(70 char)  | 說明３                          |    |
|     | REMARK_4                  | VARCHAR2(70 char)  | 說明４                          |    |
|     | DOC_NAME                  | VARCHAR2(40 char)  | 通報單位中文名稱                     |    |
|     | REL_CODE                  | VARCHAR2(1 char)   | 警示帳戶解除代碼                     |    |
|     | REL_REASON                | VARCHAR2(30 char)  | 警示帳戶解除原因                     |    |
|     | REL_DATE                  | DATE               | 警示帳戶解除日期                     |    |
|     | FILLER                    | VARCHAR2(30 char)  | 保留欄位                         |    |
|     | IDN_BAN                   | VARCHAR2(10 char)  | 統一編號                         |    |
|     | QUERY_DATE                | DATE               | 資料查詢日期                       |    |
|     | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                       |
