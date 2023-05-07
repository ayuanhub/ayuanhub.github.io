---
sidebar_position: 3
title: 信用卡提供的 AML 資料(CDAML)
---

### VW_ODS_D_EP002_01_AML_CDRP
#### 反洗錢_信用卡附卡客戶主檔(每日_異動)
| Key | 欄位名稱                     | 欄位資料型態        | 欄位說明       | 備註 |
| --- | ---------------------------- | ------------------- | -------------- | ---- |
|     | CUSTOMER_ID_NUMBER           | VARCHAR2(24 char)   | 正卡人 ID      |      |
|     | RELATED_PARTIES_TYPE         | VARCHAR2(5 char)    |                |      |
|     | RELATED_PARTIES_ID           | VARCHAR2(50 char)   | 附卡人 ID      |      |
|     | OTHER_RELATED_PARTY_TYPE     | VARCHAR2(5 char)    |                |      |
|     | OTHER_RELATED_PARTY_DESC     | VARCHAR2(50 char)   |                |      |
|     | NAME                         | VARCHAR2(350 char)  | 附卡人姓名     |      |
|     | ALIASES                      | VARCHAR2(350 char)  |                |      |
|     | TYPE                         | VARCHAR2(1 char)    |                |      |
|     | DATE_OF_BIRTH                | VARCHAR2(8 char)    | 附卡人出生日期 |      |
|     | NATIONALITY                  | VARCHAR2(4 char)    | 附卡人國籍     |      |
|     | PERMANENT_ADDRESS_LINE_1     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_2     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_ADDRESS_LINE_3     | VARCHAR2(200 char)  |                |      |
|     | PERMANENT_COUNTRY            | VARCHAR2(4 char)    |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_1 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_2 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_ADDRESS_LINE_3 | VARCHAR2(200 char)  |                |      |
|     | CORRESPONDENT_COUNTRY        | VARCHAR2(4 char)    |                |      |
|     | CONTACT_PHONE_NUMBER         | VARCHAR2(14 char)   |                |      |
|     | EMAIL_ADDRESS                | VARCHAR2(100 char)  |                |      |
|     | ID_TYPE                      | VARCHAR2(50 char)   |                |      |
|     | ID_NUMBER                    | VARCHAR2(30 char)   | 附卡人 ID      |      |
|     | ID_ISSUE_DATE                | VARCHAR2(8 char)    |                |      |
|     | ID_EXPIRY_DATE               | VARCHAR2(8 char)    |                |      |
|     | ID_ISSUING_COUNTRY           | VARCHAR2(4 char)    |                |      |
|     | REMARK                       | VARCHAR2(1000 char) |                |      |
|     | STATUS                       | VARCHAR2(2 char)    |                |      |
|     | OPENING_DATE                 | VARCHAR2(8 char)    |                |      |
|     | CLOSED_DATE                  | VARCHAR2(8 char)    | 最後剪卡日     |      |
|     | CORESYSTEM                   | VARCHAR2(50 char)   |                |      |
|     | PROCESSING_DATE              | DATE                | 資料日期       |      |
|     | NATIVE_NAME                  | VARCHAR2(350 char)  | 附卡人姓名     |      |
|     | TBL_UPD_TIM                  | TIMESTAMP           | 表格更新時間   |      |
### VW_ODS_D_EP013_AML_CCD
#### 反洗錢_信用卡帳號檔(每日_異動)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
### VW_ODS_D_EP023_01_AML_KYC
#### 反洗錢_信用卡客戶主檔_KYC資訊(每日_異動)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
### VW_ODS_D_EP023_AML_CUST_CD
#### 反洗錢_信用卡客戶主檔(每日_新增)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
### VW_ODS_W_EP002_01_AML_CDRP_FULL
#### 反洗錢_信用卡附卡客戶主檔(每週_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
### VW_ODS_W_EP023_01_AML_KYC_FULL
#### 反洗錢_信用卡客戶主檔_KYC資訊(每週_全檔)
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
