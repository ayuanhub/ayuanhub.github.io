---
sidebar_position: 22
title: E-LOAN 徵審系統(ELEL)
---

### VW_ODS_D_ADM_BUILDREG

#### 電子謄本-建物-建物標示部

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | CITYID                          | VARCHAR2(50 char)   | 縣市代號              |   |
|    | CITYNAME                        | VARCHAR2(50 char)   | 縣市名稱              |   |
|    | AREAID                          | VARCHAR2(50 char)   | 區域代號              |   |
|    | AREANAME                        | VARCHAR2(50 char)   | 區域名稱              |   |
|    | SECTIONID                       | VARCHAR2(50 char)   | 段小段代號             |   |
|    | SECTIONNAME                     | VARCHAR2(50 char)   | 段小段名稱             |   |
|    | BUILDNO                         | VARCHAR2(50 char)   | 建號                |   |
|    | REGISTERREASONDATE              | VARCHAR2(50 char)   | 標示部登記日期           |   |
|    | REGISTERREASON                  | VARCHAR2(50 char)   | 標示部登記原因           |   |
|    | TOTALAREASIZE                   | VARCHAR2(50 char)   | 總面積               |   |
|    | ADDRESS                         | VARCHAR2(2000 char) | 地址                |   |
|    | PURPOSEID                       | VARCHAR2(50 char)   | 主要用途ID            |   |
|    | PURPOSE                         | VARCHAR2(500 char)  | 主要用途名稱            |   |
|    | MATERIALID                      | VARCHAR2(50 char)   | 主要建材ID            |   |
|    | MATERIAL                        | VARCHAR2(50 char)   | 主要建材名稱            |   |
|    | BUILDLEVEL                      | VARCHAR2(50 char)   | 層數(總樓層數)          |   |
|    | FINISHDATE                      | VARCHAR2(50 char)   | 建築完成日期            |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_BUILDREG_BTCLOR_TRO

#### 電子謄本-建物-建物所有權部-登記次序

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料主鍵              |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | BUILDREG_UID                    | VARCHAR2(36 char)   | 建號資料主鍵            |   |
|    | BTCLOR_UID                      | VARCHAR2(36 char)   | 建物他項權資料主鍵         |   |
|    | TARGETREGISTERORDER             | VARCHAR2(50 char)   | 他項權利標的登記次序        |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_BUILDREG_BTEBOW

#### 電子謄本-建物-建物所有權部

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | BUILDREG_UID                    | VARCHAR2(36 char)   | 建號資料主鍵            |   |
|    | REGISTERORDER                   | VARCHAR2(50 char)   |                   |   |
|    | REGISTERREASONDATE              | VARCHAR2(50 char)   | 所有權部登記日期          |   |
|    | REGISTERREASONHDATE             | VARCHAR2(50 char)   | 所有權部登記發生日期        |   |
|    | REGISTERREASON                  | VARCHAR2(50 char)   | 所有權部登記原因          |   |
|    | OWNERID                         | VARCHAR2(50 char)   | 所有權人ID            |   |
|    | OWNER                           | VARCHAR2(2000 char) | 所有權人名稱            |   |
|    | OWNERADDRESS                    | VARCHAR2(2000 char) | 所有權地址             |   |
|    | RIGHTSRANGE_RIGHTSREASON        | VARCHAR2(50 char)   |                   |   |
|    | RIGHTSRANGE_DENOMINATOR         | VARCHAR2(50 char)   | 權利範圍分母            |   |
|    | RIGHTSRANGE_NUMERATOR           | VARCHAR2(50 char)   | 權利範圍分子            |   |
|    | B16                             | VARCHAR2(500 char)  | 權狀年期字號            |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_BUILDREG_BTEBOW_OR

#### 電子謄本-建物-建物所有權部-其他登記事項

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料主鍵              |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | BUILDREG_UID                    | VARCHAR2(36 char)   | 建號資料主鍵            |   |
|    | BTEBOW_UID                      | VARCHAR2(36 char)   | 建物所有權資料主鍵         |   |
|    | OTHERREGISTERID                 | VARCHAR2(50 char)   | 其它登記事項ID          |   |
|    | OTHERREGISTER                   | VARCHAR2(500 char)  | 其它登記事項名稱          |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_BUILDREG_BTEBOW_ORRO

#### 電子謄本-建物-建物所有權部-相關他項權利登記次序

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料主鍵              |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | BUILDREG_UID                    | VARCHAR2(36 char)   | 建號資料主鍵            |   |
|    | BTEBOW_UID                      | VARCHAR2(36 char)   | 建物所有權資料主鍵         |   |
|    | ORREGISTERORDER                 | VARCHAR2(50 char)   | 相關他項權利登記次序        |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_BUILDREG_OR

#### 電子謄本-建物-建物標示部-其他登記事項

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | BUILDREG_UID                    | VARCHAR2(36 char)   | 建號資料主鍵            |   |
|    | OTHERREGISTERID                 | VARCHAR2(50 char)   | 其它登記事項ID          |   |
|    | OTHERREGISTER                   | VARCHAR2(500 char)  | 其它登記事項名稱          |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTBLOW

#### 電子謄本-土地-土地所有權部

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | REGISTERORDER                   | VARCHAR2(50 char)   | 登記次序              |   |
|    | REGISTERREASONDATE              | VARCHAR2(50 char)   | 所有權部登記日期          |   |
|    | REGISTERREASONHDATE             | VARCHAR2(50 char)   | 登記原因發生日期          |   |
|    | REGISTERREASON                  | VARCHAR2(50 char)   | 登記原因              |   |
|    | OWNERID                         | VARCHAR2(50 char)   | 所有權人ID            |   |
|    | OWNER                           | VARCHAR2(2000 char) | 所有權人名稱            |   |
|    | OWNERADDRESS                    | VARCHAR2(2000 char) | 所有權人地址            |   |
|    | RIGHTSRANGE_RIGHTSREASON        | VARCHAR2(50 char)   |                   |   |
|    | RIGHTSRANGE_DENOMINATOR         | VARCHAR2(50 char)   | 權利範圍分母            |   |
|    | RIGHTSRANGE_NUMERATOR           | VARCHAR2(50 char)   | 權利範圍分子            |   |
|    | B16                             | VARCHAR2(500 char)  | 權狀年期字號            |   |
|    | DECLAREDVALUEDATE               | VARCHAR2(50 char)   | 當期申報日期            |   |
|    | DECLAREDVALUE                   | VARCHAR2(50 char)   | 當期申報地價            |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTBLOW_BTPRCE

#### 電子謄本-土地-土地所有權部-前次移轉現值或原規定地價

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTBLOW_UID                      | VARCHAR2(36 char)   | 土地所有權部資料主鍵        |   |
|    | LASTDATE                        | VARCHAR2(50 char)   | 前次移轉年月            |   |
|    | LASTVALUE                       | VARCHAR2(50 char)   | 前次移轉現值            |   |
|    | DENOMINATOR                     | VARCHAR2(50 char)   | 歷次取得權利範圍分母        |   |
|    | NUMERATOR                       | VARCHAR2(50 char)   | 歷次取得權利範圍分子        |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTBLOW_OR

#### 電子謄本-土地-土地所有權部-其他登記事項

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTBLOW_UID                      | VARCHAR2(36 char)   | 土地所有權部資料主鍵        |   |
|    | OTHERREGISTERID                 | VARCHAR2(50 char)   | 其它登記事項代號          |   |
|    | OTHERREGISTER                   | VARCHAR2(500 char)  | 其它登記事項名稱          |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTBLOW_ORRO

#### 電子謄本-土地-土地所有權部-相關他項權利登記次序

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTBLOW_UID                      | VARCHAR2(36 char)   | 土地所有權部資料主鍵        |   |
|    | ORREGISTERORDER                 | VARCHAR2(50 char)   | 相關他項權利登記次序        |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTCLOR_BTTOGHC

#### 電子謄本-土地-土地他項權利部-共同擔保地建號

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTCLOR_UID                      | VARCHAR2(36 char)   | 土地他項權資料主鍵         |   |
|    | SECTIONID                       | VARCHAR2(50 char)   | 他項權共同擔保品之段小段ID    |   |
|    | SECTIONNAME                     | VARCHAR2(50 char)   | 他項權共同擔保品之段小段名稱    |   |
|    | LANDNO                          | VARCHAR2(50 char)   | 他項權共同擔保品之地號       |   |
|    | BUILDNO                         | VARCHAR2(50 char)   | 他項權共同擔保品之建號       |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTCLOR_OR

#### 電子謄本-土地-土地他項權利部-其他登記事項

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTCLOR_UID                      | VARCHAR2(36 char)   | 土地他項權資料主鍵         |   |
|    | OTHERREGISTERID                 | VARCHAR2(50 char)   | 其它登記事項代號          |   |
|    | OTHERREGISTER                   | VARCHAR2(1000 char) | 其它登記事項名稱          |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_BTCLOR_TRO

#### 電子謄本-土地-土地他項權利部-標的登記次序

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | BTCLOR_UID                      | VARCHAR2(36 char)   | 土地他項權資料主鍵         |   |
|    | TARGETREGISTERORDER             | VARCHAR2(50 char)   | 他項權利標的登記次序        |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_ADM_LANDREG_OR

#### 電子謄本-土地-土地標示部-其他登記事項

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                            | VARCHAR2(36 char)   | 資料UID             |   |
| PK | LOAN_UID                        | VARCHAR2(36 char)   | 案件主鍵              |   |
| PK | QUERY_UID                       | VARCHAR2(36 char)   | 查詢主鍵              |   |
| PK | DOC_UID                         | VARCHAR2(36 char)   | 查詢明細主鍵            |   |
|    | LANDREG_UID                     | VARCHAR2(36 char)   | 土地謄本資料主鍵          |   |
|    | OTHERREGISTERID                 | VARCHAR2(50 char)   | 其它登記事項代號          |   |
|    | OTHERREGISTER                   | VARCHAR2(500 char)  | 其它登記事項名稱          |   |
|    | CURRENCYS                       | VARCHAR2(3 char)    | 幣別                |   |
|    | DATASORT                        | NUMBER(19, 0)        | 順序                |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    | 語系                |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    | 建立角色              |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    | 建立人員              |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    | 建立分行              |   |
|    | CREATE_DATE                     | TIMESTAMP           | 建立日期              |   |
|    | LASTUPDATE_EMPROLE              | VARCHAR2(3 char)    | 更新角色              |   |
|    | LASTUPDATE_EMPID                | VARCHAR2(5 char)    | 更新人員              |   |
|    | LASTUPDATE_BRANCHID             | VARCHAR2(4 char)    | 更新分行              |   |
|    | LASTUPDATE_DATE                 | TIMESTAMP           | 更新日期              |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_APPLICATIONFORMMAIN

#### 雲端服務台申請主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | APPLYTYPE                       | NUMBER(5, 0)         |                   |   |
|    | VERSION                         | INTEGER             | 申請書版本             |   |
| PK | AF_NO                           | NUMBER(19, 0)        |                   |   |
|    | AFNO                            | VARCHAR2(50 char)   | 申請書編號             |   |
|    | BRANCHID                        | VARCHAR2(4 char)    | 服務分行              |   |
|    | ASSIGN_BRANCHID                 | VARCHAR2(4 char)    | 派件至分行別            |   |
|    | ASSIGN_ROLEID                   | VARCHAR2(3 char)    | 派件至角色             |   |
|    | ASSIGN_EMPID                    | VARCHAR2(5 char)    | 派件至員編             |   |
|    | ASSIGN_DATE                     | TIMESTAMP           | 派件日期              |   |
|    | LINK_LOAN_UID                   | VARCHAR2(36 char)   |                   |   |
|    | LINK_DATE                       | TIMESTAMP           |                   |   |
|    | LINK_TYPE                       | INTEGER             |                   |   |
|    | STATUS                          | NUMBER(5, 0)         |                   |   |
|    | LANGUAGETYPE                    | VARCHAR2(5 char)    |                   |   |
|    | CREATE_EMPROLE                  | VARCHAR2(3 char)    |                   |   |
|    | CREATE_EMPID                    | VARCHAR2(5 char)    |                   |   |
|    | CREATE_BRANCHID                 | VARCHAR2(4 char)    |                   |   |
|    | CREATE_DATE                     | TIMESTAMP           |                   |   |
|    | ROLLBACK_TARGET                 | VARCHAR2(1 char)    | 補件對向              |   |
|    | FINISHED_LIST_ROLLBACK_DATETIME | TIMESTAMP           | 預定補件清單結束時間        |   |
|    | ISNEW                           | VARCHAR2(1 char)    |                   |   |
|    | APPLYCHANNEL                    | NUMBER(5, 0)         | 申請方式(0: 紙本, 1: 線上)   |   |
|    | MAKECONTRACTTYPE                | NUMBER(5, 0)         | 對保方式(0: 專人, 1: 線上)   |   |
|    | APPROPRIATIONTYPE               | NUMBER(5, 0)         | 撥款方式(0: 專人, 1: 系統自動) |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |   |

### VW_ODS_D_BRANCH

#### 分行設定檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | BRANCHID                        | VARCHAR2(6 char)    | 分行代碼主鍵            |   |
|    | BRANCHNAME                      | VARCHAR2(80 char)   | 分行名稱              |   |
|    | AREAID                          | VARCHAR2(6 char)    | 優惠類別              |   |
|    | BRANCHTEL                       | VARCHAR2(50 char)   | 分行電話              |   |
|    | CONTACT                         | VARCHAR2(50 char)   | 分行負責人             |   |
|    | ISHEADOFFICE                    | VARCHAR2(1 char)    | 優惠類別              |   |
|    | STATUS                          | VARCHAR2(1 char)    | 優惠類別              |   |
|    | ORIGIN_BRANCHID                 | VARCHAR2(6 char)    | 實際分行代碼            |   |
|    | TBL_UPD_TIM                     | TIMESTAMP           | 表格更新時間            |

### VW_ODS_D_CAR_ACCOUNT

#### 消金車貸申請額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | ACCOUNT_UID             | VARCHAR2(36 char)   | PK                                                                  |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 申請號碼                                                                |
|    | COLLATERAL_MARK         | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                              |
|    | TYPE                    | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                        |
|    | SUBJECT                 | VARCHAR2(3 char)    | 授信科目細項                                                              |
|    | PROJECT_TYPE            | VARCHAR2(2 char)    | 專案類別                                                                |
|    | PROJECT_NO              | VARCHAR2(5 char)    | 專案代號                                                                |
|    | MARGIN_CENTER           | VARCHAR2(4 char)    | 利潤中心                                                                |
|    | AMOUNT                  | NUMBER(18, 3)        | 借款金額                                                                |
|    | PERIOD                  | INTEGER             | 借款期間(單位：月)                                                          |
|    | PAYMENT                 | VARCHAR2(2 char)    | 還款方式                                                                |
|    | DEBT_USE                | VARCHAR2(2 char)    | 借款用途                                                                |
|    | DEBT_USE_OTHER          | VARCHAR2(50 char)   | 借款用途_其他內容                                                           |
|    | LOAN_TYPE               | VARCHAR2(2 char)    | 貸款類別                                                                |
|    | LIMIT_YEAR              | INTEGER             | 寬限期(單位：月)                                                           |
|    | PURPOSE                 | VARCHAR2(3 char)    | 授信用途                                                                |
|    | PURPOSE_OTHER           | VARCHAR2(200 char)  | 授信用途_其他說明                                                           |
|    | BANK_OWE                | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                     |
|    | INTEREST                | VARCHAR2(4 char)    | 利/費率名稱                                                              |
|    | RATE_TYPE               | VARCHAR2(1 char)    | 利率類別(1：一般，2：零利率補貼息，3：低利率補貼息)                                        |
|    | BALANCE_RATE            | NUMBER(18, 3)        | 車商補貼利率                                                              |
|    | BALANCE_AMT             | NUMBER(18, 4)        | 車商補貼金額                                                              |
|    | FIGURE_TYPE             | VARCHAR2(1 char)    | 計息方式(1：首年固定，第二年機動2：首年機動3：固定計息)                                      |
|    | FIGURE_RATE             | NUMBER(18, 3)        | 計息利率                                                                |
|    | ISGOOD_INTEREST         | VARCHAR2(1 char)    | 利率優惠/業績打折(0: 否1: 是)                                                   |
|    | DISCOUNT                | NUMBER(18, 2)        | 業績打折%                                                               |
|    | PROCESS_CHARGE          | NUMBER(18, 3)        | 開辦費                                                                 |
|    | PROCESS_CHARGE_REMARK   | VARCHAR2(500 char)  | 開辦費說明                                                               |
|    | ACCOUNT_CHARGE          | NUMBER(18, 3)        | 帳務管理費                                                               |
|    | OFFICE_CHARGE           | NUMBER(18, 3)        | 監理站規費                                                               |
|    | CONDITION               | VARCHAR2(1000 char) | 其他貸放條件                                                              |
|    | TARGET                  | VARCHAR2(1 char)    | 購車對象（1：總代理2：貿易商）                                                    |
|    | COLLATERAL_TYPE         | VARCHAR2(1 char)    | 擔保品種類(1：新車2：展示車)                                                    |
|    | ADVICE                  | VARCHAR2(1000 char) | 建議說明                                                                |
|    | QUERY_UID_6E027         | VARCHAR2(36 char)   | 發動6E027的query_uid(申請檔)                                              |
|    | STATUS_6E027            | VARCHAR2(1 char)    | 6E027狀態(申請檔)(1：上傳成功，2：上傳失敗，3：上傳中)                                   |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | 語系                                                                  |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新人員分行別                                                           |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | RATE                    | NUMBER(18, 4)        | 對台幣匯率                                                               |
|    | INVEST_CHINA            | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                     |
|    | ACCOUNT_STATUS          | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                      |
|    | BRANCH_ACCOUNT_STATUS   | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                    |
|    | MM_PAY                  | NUMBER(18, 3)        | 月付金(包含調整前月付金. 調整前月付金小計. 調整後月付金)                                       |
|    | ISGET_APRVNO            | VARCHAR2(1 char)    | 是否向核心取號(0: 否1: 是)                                                     |
|    | MM_PAY_SUB              | NUMBER(18, 3)        | 調整後月付金小計                                                            |
|    | ISDBR22                 | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                              |
|    | DBR22_AMOUNT            | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                      |
|    | DBR22_REASON            | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                      |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_ACCOUNT_NEW

#### 消金車貸核准額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | ACCOUNT_UID             | VARCHAR2(36 char)   | PK                                                                  |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 申請號碼                                                                |
|    | COLLATERAL_MARK         | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                              |
|    | TYPE                    | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                        |
|    | SUBJECT                 | VARCHAR2(3 char)    | 授信科目細項                                                              |
|    | PROJECT_TYPE            | VARCHAR2(2 char)    | 專案類別                                                                |
|    | PROJECT_NO              | VARCHAR2(5 char)    | 專案代號                                                                |
|    | MARGIN_CENTER           | VARCHAR2(4 char)    | 利潤中心                                                                |
|    | AMOUNT                  | NUMBER(18, 3)        | 借款金額                                                                |
|    | PERIOD                  | INTEGER             | 借款期間(單位：月)                                                          |
|    | PAYMENT                 | VARCHAR2(2 char)    | 還款方式                                                                |
|    | DEBT_USE                | VARCHAR2(2 char)    | 借款用途                                                                |
|    | DEBT_USE_OTHER          | VARCHAR2(50 char)   | 借款用途_其他內容                                                           |
|    | LOAN_TYPE               | VARCHAR2(2 char)    | 貸款類別                                                                |
|    | LIMIT_YEAR              | INTEGER             | 寬限期(單位：月)                                                           |
|    | PURPOSE                 | VARCHAR2(3 char)    | 授信用途                                                                |
|    | PURPOSE_OTHER           | VARCHAR2(200 char)  | 授信用途_其他說明                                                           |
|    | BANK_OWE                | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                     |
|    | INTEREST                | VARCHAR2(4 char)    | 利/費率名稱                                                              |
|    | RATE_TYPE               | VARCHAR2(1 char)    | 利率類別(1：一般，2：零利率補貼息，3：低利率補貼息)                                        |
|    | BALANCE_RATE            | NUMBER(18, 3)        | 車商補貼利率                                                              |
|    | BALANCE_AMT             | NUMBER(18, 4)        | 車商補貼金額                                                              |
|    | FIGURE_TYPE             | VARCHAR2(1 char)    | 計息方式(1：首年固定，第二年機動2：首年機動3：固定計息)                                      |
|    | FIGURE_RATE             | NUMBER(18, 3)        | 計息利率                                                                |
|    | ISGOOD_INTEREST         | VARCHAR2(1 char)    | 利率優惠/業績打折(0: 否1: 是)                                                   |
|    | DISCOUNT                | NUMBER(18, 2)        | 業績打折%                                                               |
|    | PROCESS_CHARGE          | NUMBER(18, 3)        | 開辦費                                                                 |
|    | PROCESS_CHARGE_REMARK   | VARCHAR2(500 char)  | 開辦費說明                                                               |
|    | ACCOUNT_CHARGE          | NUMBER(18, 3)        | 帳務管理費                                                               |
|    | OFFICE_CHARGE           | NUMBER(18, 3)        | 監理站規費                                                               |
|    | CONDITION               | VARCHAR2(1000 char) | 其他貸放條件                                                              |
|    | TARGET                  | VARCHAR2(1 char)    | 購車對象（1：總代理2：貿易商）                                                    |
|    | COLLATERAL_TYPE         | VARCHAR2(1 char)    | 擔保品種類(1：新車2：展示車)                                                    |
|    | ADVICE                  | VARCHAR2(1000 char) | 建議說明                                                                |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | 語系                                                                  |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新人員分行別                                                           |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | RATE                    | NUMBER(18, 4)        | 對台幣匯率                                                               |
|    | INVEST_CHINA            | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                     |
|    | ACCOUNT_STATUS          | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                      |
|    | BRANCH_ACCOUNT_STATUS   | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                    |
|    | APRV_DATE               | TIMESTAMP           | 最新一種授信方式的核准結案日期                                                     |
|    | ISDBR22                 | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                              |
|    | DBR22_AMOUNT            | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                      |
|    | DBR22_REASON            | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                      |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_BASIC_REPORT

#### 車貸初審表檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | UIDX                    | VARCHAR2(36 char)   | 表單唯一識別值                                                             |
|    | IS_RELATED              | VARCHAR2(1 char)    | 本行利害關係人(0: 否, 1: 是)                                                    |
|    | RESOURCEX               | VARCHAR2(4 char)    | 來源                                                                  |
|    | RESOURCE_SELF           | VARCHAR2(2 char)    | 自來件選項                                                               |
|    | RESOURCE_NOTE           | VARCHAR2(200 char)  | 委辦說明                                                                |
|    | DEALERID                | VARCHAR2(4 char)    | 車商代碼                                                                |
|    | DEALERNAME              | VARCHAR2(50 char)   | 車商名稱                                                                |
|    | SALESNAME               | VARCHAR2(50 char)   | 業務員名稱                                                               |
|    | TEL_AREA                | VARCHAR2(3 char)    | 電話區碼                                                                |
|    | TEL_NO                  | VARCHAR2(10 char)   | 電號號碼                                                                |
|    | TEL_EXTN                | VARCHAR2(10 char)   | 電話分機碼                                                               |
|    | CUSTOMER_ID             | VARCHAR2(11 char)   | 推廣客戶ID                                                              |
|    | CUSTOMER_NAME           | VARCHAR2(50 char)   | 推廣客戶姓名                                                              |
|    | CHARGE                  | NUMBER(18, 3)        | 推廣費                                                                 |
|    | PART_CHARGE             | NUMBER(18, 6)        | 推廣費(即每萬元XX元)                                                        |
|    | IS_COMPLETE             | VARCHAR2(1 char)    | 申請書各欄位資料是否已填載完成(0否, 1是)                                              |
|    | ALLOT_LOAN              | VARCHAR2(2 char)    | 本案貸款類型                                                              |
|    | ALLOT_TIME              | VARCHAR2(2 char)    | 撥款時點                                                                |
|    | ALLOT_TIME_OTHER        | VARCHAR2(200 char)  | 撥款時點_其他說明                                                           |
|    | TARGET                  | VARCHAR2(1 char)    | 轉入對象                                                                |
|    | RECEIVER                | VARCHAR2(50 char)   | 受款人                                                                 |
|    | BANK_NAME               | VARCHAR2(50 char)   | 銀行名稱                                                                |
|    | BRANCH_NAME             | VARCHAR2(50 char)   | 分行名稱                                                                |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 帳號                                                                  |
|    | PAY_MODE                | VARCHAR2(1 char)    | 外匯存單事故記錄檔異常資料                                                       |
|    | DEDUCT_ACCOUNT          | VARCHAR2(50 char)   | 自動扣繳帳號                                                              |
|    | BANK_ACCOUNT            | VARCHAR2(50 char)   | 開立本、他行帳號                                                            |
|    | IS_DECLARE              | VARCHAR2(1 char)    | 是否具「受監護宣告」或「受輔助宣告」之身分(0: 否, 1: 是)                                      |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | 語系                                                                  |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新人員分行別                                                           |
|    | ISSUE_BANK              | VARCHAR2(50 char)   | 開立本、他行之銀行                                                           |
|    | ISSUE_BRANCH            | VARCHAR2(50 char)   | 開立本、他行之分行                                                           |
|    | ISSUE_NAME              | VARCHAR2(50 char)   | 開立本、他行之戶名                                                           |
|    | ISSUE_INQUERY           | VARCHAR2(50 char)   | 開立本、他行之照會結果                                                         |
|    | ISLNREL_NEAR            | VARCHAR2(1 char)    | 是否為準利害關係人(0: 否1: 是)                                                   |
|    | MEETING_YEAR            | INTEGER             |                                                                     |
|    | MEETING_MONTH           | INTEGER             |                                                                     |
|    | MEETING_DAY             | INTEGER             |                                                                     |
|    | MEETING_SEQNO           | INTEGER             |                                                                     |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_COMP_BASEDATA

#### 車貸案件企業基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | UIDX                    | VARCHAR2(36 char)   |                                                                     |
| PK | CAR_CUSTOMER_MAIN_UID   | VARCHAR2(36 char)   | Car_Customer_Main. UID                                               |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | RCV_AO                  | VARCHAR2(5 char)    | 承作AO編號                                                              |
|    | RCV_AO_NAME             | VARCHAR2(50 char)   | 承作AO姓名                                                              |
|    | SALESMAN_ID             | VARCHAR2(5 char)    | 招攬人員編                                                               |
|    | SALESMAN_NAME           | VARCHAR2(50 char)   | 外匯存單計息明細檔                                                           |
|    | ACC_BR_CODE             | VARCHAR2(4 char)    | 記帳單位                                                                |
|    | INPUT_CHANNEL_UID       | VARCHAR2(36 char)   | 得知管道Uid                                                             |
|    | KNOW_CODE               | VARCHAR2(3 char)    | 案件來源                                                                |
|    | BOSS_NAME               | VARCHAR2(50 char)   | 負責人                                                                 |
|    | SET_DATE                | TIMESTAMP           | 設立日期                                                                |
|    | CAPITAL                 | NUMBER(18, 3)        | 資本額                                                                 |
|    | BUSINESS_ITEM           | VARCHAR2(300 char)  | 公司經營項目                                                              |
|    | COMP_ZIP_3              | VARCHAR2(3 char)    | 公司地_郵遞區號3碼                                                          |
|    | COMP_ZIP_2              | VARCHAR2(2 char)    | 公司地_郵遞區號2碼                                                          |
|    | COMP_CITYID             | VARCHAR2(10 char)   | 戶籍地_縣市                                                              |
|    | COMP_AREAID             | VARCHAR2(2 char)    | 公司地_鄉鎮區                                                             |
|    | COMP_NB                 | VARCHAR2(12 char)   | 公司地_村里                                                              |
|    | COMP_NB_CODE            | VARCHAR2(1 char)    | 公司地_村里代碼                                                            |
|    | COMP_ND                 | VARCHAR2(3 char)    | 公司地_鄰                                                               |
|    | COMP_NO                 | VARCHAR2(100 char)  | 公司地_地址                                                              |
|    | IS_IMMOWNER             | VARCHAR2(1 char)    | 是否自有不動產(1: 是0: 否)                                                     |
|    | IMM_LIVERADIO           | VARCHAR2(1 char)    | 不動產radio(3. 公司地9. 如下)                                                 |
|    | IMM_ZIP_3               | VARCHAR2(3 char)    | 不動產地址_郵遞區號3碼                                                        |
|    | IMM_ZIP_2               | VARCHAR2(2 char)    | 不動產地址_郵遞區號2碼                                                        |
|    | IMM_CITYID              | VARCHAR2(10 char)   | 不動產地址_縣市                                                            |
|    | IMM_AREAID              | VARCHAR2(2 char)    | 不動產地址_鄉鎮區                                                           |
|    | IMM_NB                  | VARCHAR2(12 char)   | 不動產地址_村里                                                            |
|    | IMM_NB_CODE             | VARCHAR2(1 char)    | 不動產地址_村里代碼                                                          |
|    | IMM_ND                  | VARCHAR2(3 char)    | 不動產地址_鄰                                                             |
|    | IMM_NO                  | VARCHAR2(100 char)  | 不動產地址                                                               |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 外匯存單計息明細檔暫存檔                                                        |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | BUSINESS_LIVERADIO      | VARCHAR2(1 char)    | 營業地radio(1. 同登記地9. 如下)                                                |
|    | BUSINESS_ZIP_3          | VARCHAR2(3 char)    | 營業地_郵遞區號3碼                                                          |
|    | BUSINESS_ZIP_2          | VARCHAR2(2 char)    | 營業地_郵遞區號2碼                                                          |
|    | BUSINESS_CITYID         | VARCHAR2(10 char)   | 營業地_縣市                                                              |
|    | BUSINESS_AREAID         | VARCHAR2(2 char)    | 營業地_鄉鎮區                                                             |
|    | BUSINESS_NB             | VARCHAR2(12 char)   | 營業地_村里                                                              |
|    | BUSINESS_NB_CODE        | VARCHAR2(1 char)    | 營業地_村里代碼                                                            |
|    | BUSINESS_ND             | VARCHAR2(3 char)    | 營業地_鄰                                                               |
|    | BUSINESS_NO             | VARCHAR2(100 char)  | 營業地_地址                                                              |
|    | NOCOMP_TEL              | VARCHAR2(1 char)    | 公司地-無法提供市內電話(1: 是0: 否)                                                |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_CUSTOMER_MAIN

#### 車貸借款人基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立角色                                                                |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員                                                                |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立分行                                                                |
|    | CREATE_DATE             | TIMESTAMP           | 建立日期                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 更新角色                                                                |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 更新人員                                                                |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 更新分行                                                                |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 更新日期                                                                |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | 語系                                                                  |
| PK | UIDX                    | VARCHAR2(36 char)   | PK                                                                  |
| PK | CUSTOMER_ID             | VARCHAR2(11 char)   | 統一編號                                                                |
|    | CNAME                   | VARCHAR2(50 char)   | 個人姓名                                                                |
|    | ID_TYPE                 | VARCHAR2(1 char)    | 身份別(1: 個人戶2: 公司戶3: OBU)                                                |
|    | LOAN_TYPE               | VARCHAR2(2 char)    | 授信類型ID(參考Maintain_Loan_Type)                                        |
|    | LOAN_WAY                | VARCHAR2(2 char)    | 授信方式ID(參考Maintain_Loan_Way)                                         |
|    | DATA_SOURCE             | VARCHAR2(1 char)    | 資料來源(1: Eloan2: 核心)(只有授變撥貸後會用到此欄位)                                    |
|    | APRV_NO                 | VARCHAR2(12 char)   | 若是撥貸後，要輸入核准號碼                                                       |
|    | IS_COPY                 | VARCHAR2(1 char)    | 外匯存單主檔                                                              |
|    | COPY_CASENO             | VARCHAR2(20 char)   | 舊案之案件編號                                                             |
|    | COPY_LOAN_UID           | VARCHAR2(36 char)   | 舊案之loan_uid                                                         |
|    | COPY_DBNAME             | VARCHAR2(50 char)   | 舊案loan_uid存在現在或歷史DB                                                 |
|    | COPY_CLOSE_BRANCH       | VARCHAR2(1 char)    | 舊案是分行或總行結案(0：分行，1：總行)                                               |
|    | COPY_CUSTTYPE           | VARCHAR2(1 char)    | 引用案件之身份別                                                            |
|    | COPY_SUCCESS            | VARCHAR2(500 char)  | 存放成功複製的radio                                                        |
|    | QUERY_UID_6E010         | VARCHAR2(36 char)   | 發動6E010的query_uid(新貸和撥貸前進行原案修改，驗證是否建立核准檔)                           |
|    | STATUS_6E010            | VARCHAR2(1 char)    | 6E027狀態(1：上傳成功，2：上傳失敗，3：上傳中)(新貸和撥貸前進行原案修改，驗證是否建立核准檔)                |
|    | IS_CAROWNER             | VARCHAR2(1 char)    | 借款人是否為車輛所有權人(0: 否1: 是)                                                |
|    | ISIMM_OWNER             | VARCHAR2(1 char)    | 初審表_持有不動產人(1: 是0: 否)                                                  |
|    | QUERY_UID_6E023         | VARCHAR2(36 char)   | 發動6E023的query_uid(檢查核心同一關係人填表日期)                                    |
|    | STATUS_6E023            | VARCHAR2(1 char)    | 6E023狀態(1：上傳成功，2：上傳失敗，3：上傳中)(檢查核心同一關係人填表日期)                         |
|    | FILL_DATE               | VARCHAR2(8 char)    | 同一關係人填表日期                                                           |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_INCOME_LIST

#### 消金車貸月所得計算明細檔_分行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   |                                                                     |
| PK | INCOME_MAIN_UID         | VARCHAR2(36 char)   | 月所得主檔                                                               |
| PK | INCOME_LIST_UID         | VARCHAR2(36 char)   |                                                                     |
|    | INCOME_TYPE             | VARCHAR2(2 char)    | 月所得種類(1: 薪轉2: 扣憑3: 薪資單4: 薪資證明5: 其他薪資證明6:401報表7: 往來存摺8: 切結書9: 其他財力10: 所得證明計算) |
|    | BANK_NAME               | VARCHAR2(300 char)  | 銀行                                                                  |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 帳號                                                                  |
|    | ACCOUNT_UID             | VARCHAR2(36 char)   | 戶名Uid                                                               |
|    | ACCOUNT_TYPE            | VARCHAR2(1 char)    | 戶名類別(1: 借款人3: 保證人4借款人經營企業6: 保證人經營企業9: 其他)                               |
|    | ACCOUNT_NAME            | VARCHAR2(300 char)  | 戶名                                                                  |
|    | START_YY                | INTEGER             | 起年                                                                  |
|    | START_MM                | INTEGER             | 起月                                                                  |
|    | END_YY                  | INTEGER             | 迄年                                                                  |
|    | END_MM                  | INTEGER             | 迄月                                                                  |
|    | INCOME_REMARK           | VARCHAR2(1000 char) | 補充說明                                                                |
|    | MM_INCOME_SUM           | NUMBER(18, 3)        | 月所得加總                                                               |
|    | MM_INCOME_CALCULATE     | VARCHAR2(1 char)    | 月所得運算式(1: X2:/)                                                      |
|    | MM_INCOME_OPERATOR      | NUMBER(18, 3)        | 月所得運算子                                                              |
|    | MM_INCOME_AVG           | NUMBER(18, 3)        | 平均月所得                                                               |
|    | YY_INCOME_SUM           | NUMBER(18, 3)        | 年所得加總                                                               |
|    | YY_INCOME_CALCULATE     | VARCHAR2(1 char)    | 年所得運算式(1: X2:/)                                                      |
|    | YY_INCOME_OPERATOR      | NUMBER(18, 3)        | 年所得運算子                                                              |
|    | YY_INCOME_AVG           | NUMBER(18, 3)        | 平均年所得                                                               |
|    | IS_SET                  | VARCHAR2(1 char)    | 是否認定為最後所得(0: 否1: 是)                                                   |
|    | INCOME_SOURCE           | VARCHAR2(2 char)    | 來源(1: 租金收入2: 利息收入3: 月退俸4：其他)                                           |
|    | INCOME_SOURCE_OTHER     | VARCHAR2(50 char)   | 來源_其他                                                               |
|    | IS_BUSINESS_AVG         | VARCHAR2(1 char)    | 有無平均營業額(0: 無1: 有)                                                     |
|    | BUSINESS_SUM            | NUMBER(18, 3)        | 平均每月營業額加總                                                           |
|    | BUSINESS_CALCULATE      | VARCHAR2(1 char)    | 平均每月營業額運算式(1: X2:/)                                                  |
|    | BUSINESS_OPERATOR       | NUMBER(18, 3)        | 平均每月營業額運算子                                                          |
|    | BUSINESS_AVG            | NUMBER(18, 3)        | 平均每月營業額                                                             |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | INCOME_5P               | VARCHAR2(1000 char) | 切結書補充說明                                                             |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_INCOME_LIST_IQ

#### 消金車貸月所得計算明細檔_總行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   |                                                                     |
| PK | INCOME_MAIN_UID         | VARCHAR2(36 char)   | 月所得主檔                                                               |
| PK | INCOME_LIST_UID         | VARCHAR2(36 char)   |                                                                     |
|    | INCOME_TYPE             | VARCHAR2(2 char)    | 月所得種類(1: 薪轉2: 扣憑3: 薪資單4: 薪資證明5: 其他薪資證明6:401報表7: 往來存摺8: 切結書9: 其他財力10: 所得證明計算) |
|    | BANK_NAME               | VARCHAR2(300 char)  | 銀行                                                                  |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 帳號                                                                  |
|    | ACCOUNT_UID             | VARCHAR2(36 char)   | 戶名Uid                                                               |
|    | ACCOUNT_TYPE            | VARCHAR2(1 char)    | 戶名類別(1: 借款人3: 保證人4借款人經營企業6: 保證人經營企業9: 其他)                               |
|    | ACCOUNT_NAME            | VARCHAR2(300 char)  | 戶名                                                                  |
|    | START_YY                | INTEGER             | 起年                                                                  |
|    | START_MM                | INTEGER             | 起月                                                                  |
|    | END_YY                  | INTEGER             | 迄年                                                                  |
|    | END_MM                  | INTEGER             | 迄月                                                                  |
|    | INCOME_REMARK           | VARCHAR2(1000 char) | 補充說明                                                                |
|    | MM_INCOME_SUM           | NUMBER(18, 3)        | 月所得加總                                                               |
|    | MM_INCOME_CALCULATE     | VARCHAR2(1 char)    | 月所得運算式(1: X2:/)                                                      |
|    | MM_INCOME_OPERATOR      | NUMBER(18, 3)        | 月所得運算子                                                              |
|    | MM_INCOME_AVG           | NUMBER(18, 3)        | 平均月所得                                                               |
|    | YY_INCOME_SUM           | NUMBER(18, 3)        | 年所得加總                                                               |
|    | YY_INCOME_CALCULATE     | VARCHAR2(1 char)    | 年所得運算式(1: X2:/)                                                      |
|    | YY_INCOME_OPERATOR      | NUMBER(18, 3)        | 年所得運算子                                                              |
|    | YY_INCOME_AVG           | NUMBER(18, 3)        | 平均年所得                                                               |
|    | IS_SET                  | VARCHAR2(1 char)    | 是否認定為最後所得(0: 否1: 是)                                                   |
|    | INCOME_SOURCE           | VARCHAR2(2 char)    | 來源(1: 租金收入2: 利息收入3: 月退俸4：其他)                                           |
|    | INCOME_SOURCE_OTHER     | VARCHAR2(50 char)   | 來源_其他                                                               |
|    | IS_BUSINESS_AVG         | VARCHAR2(1 char)    | 有無平均營業額(0: 無1: 有)                                                     |
|    | BUSINESS_SUM            | NUMBER(18, 3)        | 平均每月營業額加總                                                           |
|    | BUSINESS_CALCULATE      | VARCHAR2(1 char)    | 平均每月營業額運算式(1: X2:/)                                                  |
|    | BUSINESS_OPERATOR       | NUMBER(18, 3)        | 平均每月營業額運算子                                                          |
|    | BUSINESS_AVG            | NUMBER(18, 3)        | 平均每月營業額                                                             |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | INCOME_5P               | VARCHAR2(1000 char) | 切結書補充說明                                                             |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_INCOME_MAIN

#### 消金車貸月所得計算主檔_分行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   |                                                                     |
| PK | INCOME_MAIN_UID         | VARCHAR2(36 char)   | 月所得主檔UID                                                            |
|    | CUST_UID                | VARCHAR2(36 char)   |                                                                     |
|    | PERSONTYPE              | VARCHAR2(1 char)    | 身份別(1: 借款人3: 保證人)                                                     |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | TARGET_TYPE             | VARCHAR2(1 char)    | 授信對象(1: 上班族2: 企業主3: 其他族群)                                              |
|    | CALCULATE_DESC          | VARCHAR2(1000 char) | 月所得22倍計算說明                                                          |
|    | FINAL_MM_SUM            | NUMBER(18, 3)        | 最後認定月所得加總                                                           |
|    | FINAL_YY_SUM            | NUMBER(18, 3)        | 最後認定年所得加總                                                           |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | REMARK_CHECK            | VARCHAR2(1000 char) | 總行審核說明                                                              |
|    | REMARK_AO               | VARCHAR2(1000 char) | 分行審核說明                                                              |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_INCOME_MAIN_IQ

#### 消金車貸月所得計算主檔_總行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   |                                                                     |
| PK | INCOME_MAIN_UID         | VARCHAR2(36 char)   | 月所得主檔UID                                                            |
|    | CUST_UID                | VARCHAR2(36 char)   |                                                                     |
|    | PERSONTYPE              | VARCHAR2(1 char)    | 身份別(1: 借款人3: 保證人)                                                     |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | TARGET_TYPE             | VARCHAR2(1 char)    | 授信對象(1: 上班族2: 企業主3: 其他族群)                                              |
|    | CALCULATE_DESC          | VARCHAR2(1000 char) | 月所得22倍計算說明                                                          |
|    | FINAL_MM_SUM            | NUMBER(18, 3)        | 最後認定月所得加總                                                           |
|    | FINAL_YY_SUM            | NUMBER(18, 3)        | 最後認定年所得加總                                                           |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | REMARK_CHECK            | VARCHAR2(1000 char) | 總行審核說明                                                              |
|    | REMARK_AO               | VARCHAR2(1000 char) | 分行審核說明                                                              |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_LEND

#### 消金車貸流程各關卡申請額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | ACCOUNT_UID             | VARCHAR2(36 char)   | PK                                                                  |
| PK | FLOW_SEQNO              | NUMBER(5, 0)         | 案件流程步驟累計(流程流水號)                                                     |
|    | FLOW_STATUS             | NUMBER(5, 0)         | 流程狀態代碼                                                              |
|    | ACCOUNT_NO              | VARCHAR2(50 char)   | 申請號碼                                                                |
|    | COLLATERAL_MARK         | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                              |
|    | TYPE                    | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                        |
|    | SUBJECT                 | VARCHAR2(3 char)    | 授信科目細項                                                              |
|    | PROJECT_TYPE            | VARCHAR2(2 char)    | 專案類別                                                                |
|    | PROJECT_NO              | VARCHAR2(5 char)    | 專案代號                                                                |
|    | MARGIN_CENTER           | VARCHAR2(4 char)    | 利潤中心                                                                |
|    | AMOUNT                  | NUMBER(18, 3)        | 借款金額                                                                |
|    | PERIOD                  | INTEGER             | 借款期間(單位：月)                                                          |
|    | PAYMENT                 | VARCHAR2(2 char)    | 還款方式                                                                |
|    | DEBT_USE                | VARCHAR2(2 char)    | 借款用途                                                                |
|    | DEBT_USE_OTHER          | VARCHAR2(50 char)   | 借款用途_其他內容                                                           |
|    | LOAN_TYPE               | VARCHAR2(2 char)    | 貸款類別                                                                |
|    | LIMIT_YEAR              | INTEGER             | 寬限期(單位：月)                                                           |
|    | PURPOSE                 | VARCHAR2(3 char)    | 授信用途                                                                |
|    | PURPOSE_OTHER           | VARCHAR2(200 char)  | 授信用途_其他說明                                                           |
|    | BANK_OWE                | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                     |
|    | INTEREST                | VARCHAR2(4 char)    | 利/費率名稱                                                              |
|    | RATE_TYPE               | VARCHAR2(1 char)    | 利率類別(1：一般，2：零利率補貼息，3：低利率補貼息)                                        |
|    | BALANCE_RATE            | NUMBER(18, 3)        | 車商補貼利率                                                              |
|    | BALANCE_AMT             | NUMBER(18, 4)        | 車商補貼金額                                                              |
|    | FIGURE_TYPE             | VARCHAR2(1 char)    | 計息方式(1：首年固定，第二年機動2：首年機動3：固定計息)                                      |
|    | FIGURE_RATE             | NUMBER(18, 3)        | 計息利率                                                                |
|    | ISGOOD_INTEREST         | VARCHAR2(1 char)    | 利率優惠/業績打折(0: 否1: 是)                                                   |
|    | DISCOUNT                | NUMBER(18, 2)        | 業績打折%                                                               |
|    | PROCESS_CHARGE          | NUMBER(18, 3)        | 開辦費                                                                 |
|    | PROCESS_CHARGE_REMARK   | VARCHAR2(500 char)  | 開辦費說明                                                               |
|    | ACCOUNT_CHARGE          | NUMBER(18, 3)        | 帳務管理費                                                               |
|    | OFFICE_CHARGE           | NUMBER(18, 3)        | 監理站規費                                                               |
|    | CONDITION               | VARCHAR2(1000 char) | 其他貸放條件                                                              |
|    | TARGET                  | VARCHAR2(1 char)    | 購車對象（1：總代理2：貿易商）                                                    |
|    | COLLATERAL_TYPE         | VARCHAR2(1 char)    | 擔保品種類(1：新車2：展示車)                                                    |
|    | ADVICE                  | VARCHAR2(1000 char) | 建議說明                                                                |
|    | QUERY_UID_6E027         | VARCHAR2(36 char)   | 發動6E027的query_uid(申請檔)                                              |
|    | STATUS_6E027            | VARCHAR2(1 char)    | 6E027狀態(申請檔)(1：上傳成功，2：上傳失敗，3：上傳中)                                   |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | 語系                                                                  |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新人員分行別                                                           |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | RATE                    | NUMBER(18, 4)        | 對台幣匯率                                                               |
|    | INVEST_CHINA            | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                     |
|    | ACCOUNT_STATUS          | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                      |
|    | BRANCH_ACCOUNT_STATUS   | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                    |
|    | ISDBR22                 | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                              |
|    | DBR22_AMOUNT            | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                      |
|    | DBR22_REASON            | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                      |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_PERSON_BASEDATA

#### 車貸案件個人基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | UIDX                    | VARCHAR2(36 char)   |                                                                     |
| PK | CAR_CUSTOMER_MAIN_UID   | VARCHAR2(36 char)   | Car_Customer_Main. UID                                               |
|    | CURRENCY                | VARCHAR2(3 char)    | 幣別                                                                  |
|    | RCV_AO                  | VARCHAR2(5 char)    | 承作AO編號                                                              |
|    | RCV_AO_NAME             | VARCHAR2(50 char)   | 承作AO姓名                                                              |
|    | SALESMAN_ID             | VARCHAR2(5 char)    | 招攬人員編                                                               |
|    | SALESMAN_NAME           | VARCHAR2(50 char)   | 招攬人姓名                                                               |
|    | ACC_BR_CODE             | VARCHAR2(4 char)    | 記帳單位                                                                |
|    | INPUT_CHANNEL_UID       | VARCHAR2(36 char)   | 得知管道Uid                                                             |
|    | KNOW_CODE               | VARCHAR2(3 char)    | 案件來源                                                                |
|    | BIRTHDAY                | TIMESTAMP           | 出生日期                                                                |
|    | EDUCATION               | VARCHAR2(2 char)    | 學歷                                                                  |
|    | MARRIAGE                | VARCHAR2(1 char)    | 婚姻狀況                                                                |
|    | CHILD                   | INTEGER             | 子女數                                                                 |
|    | CHILDSTATUS             | VARCHAR2(2 char)    | 子女狀況(1. 年幼2. 就學3. 就業99. 其他)                                             |
|    | CHILDSTATUS_DESC        | VARCHAR2(100 char)  | 子女狀況說明                                                              |
|    | SEX                     | VARCHAR2(1 char)    | 性別(1: 男, 2: 女)                                                         |
|    | HOME_ZIP_3              | VARCHAR2(3 char)    | 戶籍地_郵遞區號3碼                                                          |
|    | HOME_ZIP_2              | VARCHAR2(2 char)    | 戶籍地_郵遞區號2碼                                                          |
|    | HOME_CITYID             | VARCHAR2(10 char)   | 戶籍地_縣市                                                              |
|    | HOME_AREAID             | VARCHAR2(2 char)    | 戶籍地_鄉鎮區                                                             |
|    | HOME_NB                 | VARCHAR2(12 char)   | 戶籍地_村里                                                              |
|    | HOME_NB_CODE            | VARCHAR2(1 char)    | 戶籍地_村里代碼                                                            |
|    | HOME_ND                 | VARCHAR2(3 char)    | 戶籍地_鄰                                                               |
|    | HOME_NO                 | VARCHAR2(100 char)  | 戶籍地_地址                                                              |
|    | HOME_HOUSESTATUS        | VARCHAR2(2 char)    | 戶籍地_所有權人                                                            |
|    | HOME_RELATION           | VARCHAR2(50 char)   | 戶籍地_親人                                                              |
|    | HOME_RENT               | NUMBER(18, 3)        |                                                                     |
|    | HOME_LIVESTATUS         | VARCHAR2(2 char)    | 戶籍地_居住狀況                                                            |
|    | HOME_LIVESTATUS_OTHER   | VARCHAR2(50 char)   | 戶籍地_居住狀況其它說明                                                        |
|    | HOME_LIVEMM             | INTEGER             | 戶籍地_居住幾月                                                            |
|    | NOW_LIVERADIO           | VARCHAR2(1 char)    | 現居地radio(1. 同戶籍9. 如下)                                                 |
|    | NOW_ZIP_3               | VARCHAR2(3 char)    | 現居地址_郵遞區號3碼                                                         |
|    | NOW_ZIP_2               | VARCHAR2(2 char)    | 現居地址_郵遞區號2碼                                                         |
|    | NOW_CITYID              | VARCHAR2(10 char)   | 現居地址_縣市                                                             |
|    | NOW_AREAID              | VARCHAR2(2 char)    | 現居地址_鄉鎮區                                                            |
|    | NOW_NB                  | VARCHAR2(12 char)   | 現居地址_村里                                                             |
|    | NOW_NB_CODE             | VARCHAR2(1 char)    | 現居地址_村里代碼                                                           |
|    | NOW_ND                  | VARCHAR2(3 char)    | 現居地址_鄰                                                              |
|    | NOW_NO                  | VARCHAR2(100 char)  | 現居地址_地址                                                             |
|    | NOW_HOUSESTATUS         | VARCHAR2(2 char)    | 現居地址_所有權人                                                           |
|    | NOW_RELATION            | VARCHAR2(50 char)   | 現居地址_親人                                                             |
|    | NOW_RENT                | NUMBER(18, 3)        |                                                                     |
|    | NOW_LIVESTATUS          | VARCHAR2(2 char)    | 現居地址_居住狀況                                                           |
|    | NOW_LIVESTATUS_OTHER    | VARCHAR2(50 char)   | 現居地_居住狀況其它說明                                                        |
|    | NOW_LIVEMM              | INTEGER             | 現居地址_居住幾月                                                           |
|    | IS_IMMOWNER             | VARCHAR2(1 char)    | 是否自有不動產(1: 是0: 否)                                                     |
|    | IMM_LIVERADIO           | VARCHAR2(1 char)    | 不動產radio(1. 戶籍地2：現居地9. 如下)                                            |
|    | IMM_ZIP_3               | VARCHAR2(3 char)    | 不動產地址_郵遞區號3碼                                                        |
|    | IMM_ZIP_2               | VARCHAR2(2 char)    | 不動產地址_郵遞區號2碼                                                        |
|    | IMM_CITYID              | VARCHAR2(10 char)   | 不動產地址_縣市                                                            |
|    | IMM_AREAID              | VARCHAR2(2 char)    | 不動產地址_鄉鎮區                                                           |
|    | IMM_NB                  | VARCHAR2(12 char)   | 不動產地址_村里                                                            |
|    | IMM_NB_CODE             | VARCHAR2(1 char)    | 不動產地址_村里代碼                                                          |
|    | IMM_ND                  | VARCHAR2(3 char)    | 不動產地址_鄰                                                             |
|    | IMM_NO                  | VARCHAR2(100 char)  | 不動產地址                                                               |
|    | IS_KNOWWAY              | VARCHAR2(1 char)    | 家人知悉用途(1: 是0: 否)                                                      |
|    | INTERACT                | VARCHAR2(2 char)    | 與家人互動                                                               |
|    | INTERACT_OTHER          | VARCHAR2(100 char)  | 與家人互動_其他                                                            |
|    | ISIMM_OWNER             | VARCHAR2(1 char)    | 初審表_持有不動產人(1: 是0: 否)                                                  |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | NOHOME_TEL              | VARCHAR2(1 char)    | 戶籍地-無法提供市內電話(1: 是0: 否)                                                |
|    | NONOW_TEL               | VARCHAR2(1 char)    | 現居地-無法提供市內電話(1: 是0: 否)                                                |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_PHONENUM

#### 消金車貸案件電話資料檔_分行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | UIDX                    | VARCHAR2(36 char)   |                                                                     |
| PK | CAR_PERSON_BASEDATA_UID | VARCHAR2(36 char)   | 申請書UID、服務公司UID、聯絡人UID                                               |
|    | TYPE                    | VARCHAR2(1 char)    | 電話類別(1: 戶籍地電話2: 現居地電話3: 手機4: 公司電話5: 聯絡人電話)                               |
|    | TEL_AREA                | VARCHAR2(3 char)    | 電話區碼                                                                |
|    | TEL_NO                  | VARCHAR2(10 char)   | 電號號碼                                                                |
|    | TEL_EXTN                | VARCHAR2(10 char)   | 電話分機碼                                                               |
|    | TEL_AREA_O              | VARCHAR2(3 char)    |                                                                     |
|    | TEL_NO_O                | VARCHAR2(10 char)   |                                                                     |
|    | TEL_EXTN_O              | VARCHAR2(10 char)   |                                                                     |
|    | MOBILE                  | VARCHAR2(10 char)   | 行動電話                                                                |
|    | IS_ALLOT                | VARCHAR2(1 char)    | 是否為動撥確認電話(Y: 是N: 否)                                                   |
|    | SEQNO                   | INTEGER             | 動撥電話的順序                                                             |
|    | CHECKER                 | VARCHAR2(2 char)    | 行動電話第三人確認人                                                          |
|    | CHECKER_OTHER           | VARCHAR2(100 char)  | 行動電話第三人確認人_其他                                                       |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CAR_PHONENUM_IQ

#### 消金車貸案件電話資料檔_總行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                | VARCHAR2(36 char)   | 系統案件主鍵                                                              |
| PK | UIDX                    | VARCHAR2(36 char)   |                                                                     |
| PK | CAR_PERSON_BASEDATA_UID | VARCHAR2(36 char)   | 申請書UID、服務公司UID、聯絡人UID                                               |
|    | TYPE                    | VARCHAR2(1 char)    | 電話類別(1: 戶籍地電話2: 現居地電話3: 手機4: 公司電話5: 聯絡人電話)                               |
|    | TEL_AREA                | VARCHAR2(3 char)    | 電話區碼                                                                |
|    | TEL_NO                  | VARCHAR2(10 char)   | 電號號碼                                                                |
|    | TEL_EXTN                | VARCHAR2(10 char)   | 電話分機碼                                                               |
|    | TEL_AREA_O              | VARCHAR2(3 char)    |                                                                     |
|    | TEL_NO_O                | VARCHAR2(10 char)   |                                                                     |
|    | TEL_EXTN_O              | VARCHAR2(10 char)   |                                                                     |
|    | MOBILE                  | VARCHAR2(10 char)   | 行動電話                                                                |
|    | IS_ALLOT                | VARCHAR2(1 char)    | 是否為動撥確認電話(Y: 是N: 否)                                                   |
|    | SEQNO                   | INTEGER             | 動撥電話的順序                                                             |
|    | CHECKER                 | VARCHAR2(2 char)    | 行動電話第三人確認人                                                          |
|    | CHECKER_OTHER           | VARCHAR2(100 char)  | 行動電話第三人確認人_其他                                                       |
|    | CREATE_EMPROLE          | VARCHAR2(3 char)    | 建立人員角色                                                              |
|    | CREATE_EMPID            | VARCHAR2(5 char)    | 建立人員員編                                                              |
|    | CREATE_BRANCHID         | VARCHAR2(4 char)    | 建立人員分行別                                                             |
|    | CREATE_DATE             | TIMESTAMP           | 建立時間                                                                |
|    | LASTUPDATE_EMPROLE      | VARCHAR2(3 char)    | 最後更新人員角色                                                            |
|    | LASTUPDATE_EMPID        | VARCHAR2(5 char)    | 最後更新人員員編                                                            |
|    | LASTUPDATE_BRANCHID     | VARCHAR2(4 char)    | 最後更新人員分行別                                                           |
|    | LASTUPDATE_DATE         | TIMESTAMP           | 最後更新時間                                                              |
|    | LANGUAGETYPE            | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                   |
|    | TBL_UPD_TIM             | TIMESTAMP           | 表格更新時間                                                              |

### VW_ODS_D_CONSUME_BASIC_REPORT

#### 信貸分行審核表檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | 語系                                                                                                     |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 外幣定存新舊帳號比對                                                                                             |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新人員分行別                                                                                              |   |
|    | RESOURCEX                     | VARCHAR2(4 char)    | 來源                                                                                                     |   |
|    | RESOURCE_SELF                 | VARCHAR2(2 char)    | 自來件選項：01臨櫃, 02傳真, 03郵寄, 04其他                                                                              |   |
|    | APPLICATION_STATUS            | VARCHAR2(1 char)    | 外幣定存新舊帳號比對異常資料                                                                                         |   |
|    | REAL_JCIC                     | VARCHAR2(1 char)    | 借款人是否已辦理「實地徵信」(0否, 1是)                                                                                  |   |
|    | IS_DEBT                       | VARCHAR2(1 char)    | 全體金融機構借款逾2, 000萬元(0否, 1是)                                                                                |   |
|    | IS_TICKET                     | VARCHAR2(1 char)    | 是否可徵提分期備償票據2: 否，1：是                                                                                     |   |
|    | TICKET_NAME                   | VARCHAR2(50 char)   | 發票人                                                                                                    |   |
|    | TICKET_COUNT                  | INTEGER             | 外匯帳戶平均餘額檔                                                                                              |   |
|    | IS_GOOD                       | VARCHAR2(1 char)    | 是否為「好康倒相報」案件(0否, 1是)                                                                                    |   |
|    | CUSTOMER_NAME                 | VARCHAR2(50 char)   | 推廣客戶姓名                                                                                                 |   |
|    | CUSTOMER_ID                   | VARCHAR2(11 char)   | 推廣客戶ID                                                                                                 |   |
|    | ACCOUNT_TYPE                  | VARCHAR2(1 char)    | 存入帳號(1信用卡戶, 2存款戶)                                                                                       |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 存款戶帳號                                                                                                  |   |
|    | IS_DEBT_FLAG                  | VARCHAR2(1 char)    | 系統自動判斷全體金融機構借款逾2, 000萬元(0: 未判斷過，1: 已經判斷過)                                                                 |   |
|    | GUAR_REAL_JCIC                | VARCHAR2(1 char)    | 保證人是否已辦理「實地徵信」(0否, 1是)                                                                                  |   |
|    | REAL_JCIC_FLAG                | VARCHAR2(1 char)    | 系統自動判斷借款人和保證人是否已辦理「實地徵信」(0: 未判斷過，1: 已經判斷過)                                                               |   |
| PK | UIDX                          | VARCHAR2(36 char)   | 表單唯一識別值                                                                                                |   |
|    | IS_GOOD_IQ                    | VARCHAR2(1 char)    | 是否為好康倒相報(1: 是0: 否)(照會用)                                                                                  |   |
|    | CUSTOMER_NAME_IQ              | VARCHAR2(50 char)   | 推廣客戶姓名(照會用)                                                                                            |   |
|    | CUSTOMER_ID_IQ                | VARCHAR2(11 char)   | 推廣客戶ID(照會用)                                                                                            |   |
|    | ACCOUNT_TYPE_IQ               | VARCHAR2(1 char)    | 存入帳號(1信用卡戶, 2存款戶)(照會用)                                                                                  |   |
|    | ACCOUNT_NO_IQ                 | VARCHAR2(50 char)   | 存款戶帳號(照會用)                                                                                             |   |
|    | IS_TICKET_IQ                  | VARCHAR2(1 char)    | 是否可徵提分期備償票據(0否, 1是)(照會用)                                                                                |   |
|    | TICKET_NAME_IQ                | VARCHAR2(50 char)   | 發票人(照會用)                                                                                               |   |
|    | TICKET_COUNT_IQ               | INTEGER             | 發票張數(照會用)                                                                                              |   |
|    | IS_RELATED                    | VARCHAR2(1 char)    | 本行利害關係人(0: 否, 1: 是)                                                                                       |   |
|    | MEETING_YEAR                  | INTEGER             |                                                                                                        |   |
|    | MEETING_MONTH                 | INTEGER             |                                                                                                        |   |
|    | MEETING_DAY                   | INTEGER             |                                                                                                        |   |
|    | MEETING_SEQNO                 | INTEGER             |                                                                                                        |   |
|    | IS_DECLARE                    | VARCHAR2(1 char)    | 是否具「受監護宣告」或「受輔助宣告」之身分(0: 否, 1: 是)                                                                         |   |
|    | SK_RELATED                    | VARCHAR2(1 char)    | 新光金控利害關係人(0: 否1: 是)                                                                                      |   |
|    | RESOURCE_TRANSFER             | VARCHAR2(2 char)    | 轉介選項：01同業, 02代書／房仲, 03親人／朋友, 04舊戶                                                                         |   |
|    | TRANSFER_NAME                 | VARCHAR2(50 char)   | 轉介人姓名                                                                                                  |   |
|    | ISLNREL_NEAR                  | VARCHAR2(1 char)    | 是否為準利害關係人(0: 否1: 是)                                                                                      |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_CUSTOMER_MAIN

#### 消金客戶主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立角色                                                                                                   |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員                                                                                                   |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立分行                                                                                                   |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立日期                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 更新角色                                                                                                   |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 更新人員                                                                                                   |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 更新分行                                                                                                   |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 更新日期                                                                                                   |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | 語系                                                                                                     |   |
| PK | UIDX                          | VARCHAR2(36 char)   | PK                                                                                                     |   |
| PK | CUSTOMER_ID                   | VARCHAR2(11 char)   | 統一編號                                                                                                   |   |
|    | CNAME                         | VARCHAR2(50 char)   | 個人姓名                                                                                                   |   |
|    | ID_TYPE                       | VARCHAR2(1 char)    | 身份別                                                                                                    |   |
|    | LOAN_TYPE                     | VARCHAR2(2 char)    | 授信類型ID                                                                                                 |   |
|    | LOAN_WAY                      | VARCHAR2(2 char)    | 授信方式ID                                                                                                 |   |
|    | DATA_SOURCE                   | VARCHAR2(1 char)    | 外匯帳戶平均餘額檔異常資料                                                                                          |   |
|    | APRV_NO                       | VARCHAR2(12 char)   | 核准號碼                                                                                                   |   |
|    | IS_COPY                       | VARCHAR2(1 char)    | 案件引用                                                                                                   |   |
|    | COPY_CASENO                   | VARCHAR2(20 char)   | 舊案之案件編號                                                                                                |   |
|    | COPY_LOAN_UID                 | VARCHAR2(36 char)   | 舊案之loan_uid                                                                                            |   |
|    | COPY_DBNAME                   | VARCHAR2(50 char)   | 舊案loan_uid所存DB                                                                                         |   |
|    | COPY_CLOSE_BRANCH             | VARCHAR2(1 char)    | 舊案結案分行                                                                                                 |   |
|    | COPY_CUSTTYPE                 | VARCHAR2(1 char)    | 引用案件之身份別                                                                                               |   |
|    | COPY_SUCCESS                  | VARCHAR2(500 char)  | 存放成功複製的radio                                                                                           |   |
|    | QUERY_UID_6E010               | VARCHAR2(36 char)   | 發動6E010的query_uid                                                                                      |   |
|    | STATUS_6E010                  | VARCHAR2(1 char)    | 6E027狀態                                                                                                |   |
|    | QUERY_UID_6E023               | VARCHAR2(36 char)   | 發動6E023的query_uid                                                                                      |   |
|    | STATUS_6E023                  | VARCHAR2(1 char)    | 6E023狀態                                                                                                |   |
|    | FILL_DATE                     | VARCHAR2(8 char)    | 同一關係人填表日期                                                                                              |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_INCOME_LIST

#### 消金信貸月所得計算明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   |                                                                                                        |   |
| PK | INCOME_MAIN_UID               | VARCHAR2(36 char)   | 月所得主檔                                                                                                  |   |
| PK | INCOME_LIST_UID               | VARCHAR2(36 char)   |                                                                                                        |   |
|    | INCOME_TYPE                   | VARCHAR2(2 char)    | 月所得種類(1: 薪轉2: 扣憑3: 薪資單4: 薪資證明5: 其他薪資證明6:401報表7: 往來存摺8: 切結書9: 其他財力10: 所得證明計算)                                    |   |
|    | BANK_NAME                     | VARCHAR2(300 char)  | 銀行                                                                                                     |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 帳號                                                                                                     |   |
|    | ACCOUNT_UID                   | VARCHAR2(36 char)   | 戶名Uid                                                                                                  |   |
|    | ACCOUNT_TYPE                  | VARCHAR2(1 char)    | 戶名類別(1: 借款人3: 保證人4借款人經營企業6: 保證人經營企業9: 其他)                                                                  |   |
|    | ACCOUNT_NAME                  | VARCHAR2(300 char)  | 戶名                                                                                                     |   |
|    | START_YY                      | INTEGER             | 起年                                                                                                     |   |
|    | START_MM                      | INTEGER             | 起月                                                                                                     |   |
|    | END_YY                        | INTEGER             | 迄年                                                                                                     |   |
|    | END_MM                        | INTEGER             | 迄月                                                                                                     |   |
|    | INCOME_REMARK                 | VARCHAR2(2000 char) | 補充說明                                                                                                   |   |
|    | MM_INCOME_SUM                 | NUMBER(18, 3)        | 月所得加總                                                                                                  |   |
|    | MM_INCOME_CALCULATE           | VARCHAR2(1 char)    | 月所得運算式(1: X2:/)                                                                                         |   |
|    | MM_INCOME_OPERATOR            | NUMBER(18, 3)        | 月所得運算子                                                                                                 |   |
|    | MM_INCOME_AVG                 | NUMBER(18, 3)        | 平均月所得                                                                                                  |   |
|    | YY_INCOME_SUM                 | NUMBER(18, 3)        | 年所得加總                                                                                                  |   |
|    | YY_INCOME_CALCULATE           | VARCHAR2(1 char)    | 年所得運算式(1: X2:/)                                                                                         |   |
|    | YY_INCOME_OPERATOR            | NUMBER(18, 3)        | 年所得運算子                                                                                                 |   |
|    | YY_INCOME_AVG                 | NUMBER(18, 3)        | 平均年所得                                                                                                  |   |
|    | IS_SET                        | VARCHAR2(1 char)    | 是否認定為最後所得(0: 否1: 是)                                                                                      |   |
|    | INCOME_SOURCE                 | VARCHAR2(1 char)    | 來源(1: 租金收入2: 利息收入3: 月退俸4：其他)                                                                              |   |
|    | INCOME_SOURCE_DESC            | VARCHAR2(50 char)   | 來源_其他                                                                                                  |   |
|    | IS_BUSINESS_AVG               | VARCHAR2(1 char)    | 有無平均營業額(0: 無1: 有)                                                                                        |   |
|    | BUSINESS_SUM                  | NUMBER(18, 3)        | 平均每月營業額加總                                                                                              |   |
|    | BUSINESS_CALCULATE            | VARCHAR2(1 char)    | 平均每月營業額運算式(1: X2:/)                                                                                     |   |
|    | BUSINESS_OPERATOR             | NUMBER(18, 3)        | 平均每月營業額運算子                                                                                             |   |
|    | BUSINESS_AVG                  | NUMBER(18, 3)        | 平均每月營業額                                                                                                |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新時間                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                                                      |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_INCOME_MAIN

#### 消金信貸月所得計算主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   |                                                                                                        |   |
| PK | INCOME_MAIN_UID               | VARCHAR2(36 char)   | 月所得主檔UID                                                                                               |   |
|    | CUST_UID                      | VARCHAR2(36 char)   |                                                                                                        |   |
|    | PERSONTYPE                    | VARCHAR2(1 char)    | 身份別(1: 借款人3: 保證人)                                                                                        |   |
|    | CURRENCY                      | VARCHAR2(3 char)    | 幣別                                                                                                     |   |
|    | TARGET_TYPE                   | VARCHAR2(1 char)    | 授信對象(1: 上班族2: 企業主3: 其他族群)                                                                                 |   |
|    | REMARK_CHECK                  | VARCHAR2(2000 char) | 總行審核說明                                                                                                 |   |
|    | CALCULATE_DESC                | VARCHAR2(2000 char) | 月所得22倍計算說明                                                                                             |   |
|    | FINAL_MM_SUM                  | NUMBER(18, 3)        | 最後認定月所得加總                                                                                              |   |
|    | FINAL_YY_SUM                  | NUMBER(18, 3)        | 最後認定年所得加總                                                                                              |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新時間                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                                                      |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_ACCOUNT

#### 消金信貸申請額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
| PK | ACCOUNT_UID                   | VARCHAR2(36 char)   | PK                                                                                                     |   |
|    | ACCOUNT_UID_GUAR              | VARCHAR2(36 char)   | 農業有擔的PK                                                                                                |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 申請號碼                                                                                                   |   |
|    | COLLATERAL_MARK               | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                                 |   |
|    | TYPE                          | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                                           |   |
|    | SUBJECT                       | VARCHAR2(3 char)    | 授信科目細項                                                                                                 |   |
|    | PROJECT_TYPE                  | VARCHAR2(2 char)    | 專案類別(01: 上班族02: 企業主03: 創業好幫手貸款專案04: 有巢氏信貸05:199低利06: 新光關係企業員工07: 優質族群08: 特定族群09: 互助會10: 新光人壽房貸搭配新光銀行二順位信貸11: 農業) |   |
|    | PROJECT_NO                    | VARCHAR2(5 char)    | 專案代號                                                                                                   |   |
|    | GUARANTEE                     | INTEGER             | 農業保證成數(1~10成)                                                                                          |   |
|    | PROVIDE_IMMOVABLE             | VARCHAR2(1 char)    | 借款人或保證人可提供不動產予本行設定抵押權者(0: 否1: 是)                                                                         |   |
|    | MARGIN_CENTER                 | VARCHAR2(4 char)    | 利潤中心                                                                                                   |   |
|    | INVEST_CHINA                  | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                                                        |   |
|    | CURRENCY                      | VARCHAR2(3 char)    | 幣別                                                                                                     |   |
|    | RATE                          | NUMBER(18, 4)        | 對台幣匯率                                                                                                  |   |
|    | AMOUNT                        | NUMBER(18, 3)        | 借款金額/有擔無擔金額                                                                                            |   |
|    | AMOUNT_FARM                   | NUMBER(18, 3)        | 農貸借款金額                                                                                                 |   |
|    | INTEREST                      | NUMBER(18, 4)        | 利率                                                                                                     |   |
|    | PERIOD                        | INTEGER             | 借款期間(單位：月)                                                                                             |   |
|    | APPLY_TYPE                    | VARCHAR2(1 char)    | 申請類別(參照Maintain_Consume_Apply_Type)                                                                    |   |
|    | DEBT_REASON                   | VARCHAR2(2 char)    | 借款用途(1. 投資理財2. 代償名下負債3. 子女教育4. 創業5. 修繕6. 其他)                                                                 |   |
|    | DEBT_OTHER                    | VARCHAR2(50 char)   | 借款用途_其他內容                                                                                              |   |
|    | IS_COMMUTE                    | VARCHAR2(1 char)    | 可否代償(0: 否1: 是)                                                                                           |   |
|    | PAYWAY                        | VARCHAR2(50 char)   | 貸款類別(參考Maintain_Consume_Loan_Type)                                                                     |   |
|    | LIMIT_YEAR                    | INTEGER             | 寬限期(單位：月)                                                                                              |   |
|    | PURPOSE                       | VARCHAR2(3 char)    | 授信用途                                                                                                   |   |
|    | PROCESS_CHARGE                | NUMBER(18, 3)        | 開辦費                                                                                                    |   |
|    | RISK_CHARGE                   | NUMBER(18, 3)        | 風險管理費                                                                                                  |   |
|    | ACCOUNT_CHARGE                | NUMBER(18, 3)        | 帳務管理費                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE        | NUMBER(18, 3)        | 建議風險管理費                                                                                                |   |
|    | IS_APPLY                      | VARCHAR2(1 char)    | 是否申請優惠利率(0：否，1：是)                                                                                      |   |
|    | APPLY_INTEREST                | NUMBER(18, 4)        | 單位申請優惠利率                                                                                               |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | 語系                                                                                                     |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新人員分行別                                                                                              |   |
|    | APPROVE_LIMIT                 | INTEGER             | 批覆書有效期間(單位：天)                                                                                          |   |
|    | BANK_OWE                      | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                                                        |   |
|    | INTEREST_TOTAL                | NUMBER(18, 4)        | 利率合計                                                                                                   |   |
|    | CONDITION                     | VARCHAR2(2000 char) | 其他貸放條件                                                                                                 |   |
|    | ACCOUNT_STATUS                | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                                                         |   |
|    | ADVICE                        | VARCHAR2(2000 char) | 建議說明                                                                                                   |   |
|    | OVERRIDE                      | VARCHAR2(2 char)    | override原因                                                                                             |   |
|    | PURPOSE_OTHER                 | VARCHAR2(200 char)  | 授信用途_其他說明                                                                                              |   |
|    | BRANCH_ACCOUNT_STATUS         | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                                                       |   |
|    | INTEREST_BASIC                | VARCHAR2(4 char)    | 利率名稱                                                                                                   |   |
|    | QUERY_UID_6E027               | VARCHAR2(36 char)   | 發動6E027的query_uid(申請檔)                                                                                 |   |
|    | STATUS_6E027                  | VARCHAR2(1 char)    | 6E027狀態(申請檔)(1：上傳成功，2：上傳失敗，3：上傳中)                                                                      |   |
|    | PROJECT_TARGET_TITLE          | VARCHAR2(2 char)    | 授信對象資格_大項                                                                                              |   |
|    | PROJECT_TARGET                | VARCHAR2(2 char)    | 授信對象資格_細項                                                                                              |   |
|    | CREDIT_RAISE_FREE             | VARCHAR2(1 char)    | 本案依規是否須辦理信用加碼(0: 否, 1: 是)                                                                                 |   |
|    | PROCESS_CHARGE_REMARK         | VARCHAR2(200 char)  | 開辦費說明                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE_REMARK | VARCHAR2(200 char)  | 建議風險管理費說明                                                                                              |   |
|    | CHARGE_YEAR_RATE              | NUMBER(18, 4)        | 總費用年百分率                                                                                                |   |
|    | PAYMENT                       | VARCHAR2(2 char)    | 還款方式                                                                                                   |   |
|    | INTEREST_DESC                 | VARCHAR2(2000 char) | 建議利率說明                                                                                                 |   |
|    | INTEREST_TOTAL_DESC           | VARCHAR2(2000 char) | 利率合計中文說明(貸放條件)                                                                                         |   |
|    | ISGOOD_INTEREST               | VARCHAR2(1 char)    | 利率優惠/業績認列(0: 否1: 是)                                                                                      |   |
|    | DISCOUNT                      | NUMBER(18, 2)        | 業績打折%                                                                                                  |   |
|    | ISDBR22                       | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                                                                 |   |
|    | DBR22_AMOUNT                  | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                                                         |   |
|    | DBR22_REASON                  | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                                                         |   |
|    | SET_AMOUNT                    | NUMBER(18, 3)        | 他行設定/本行現欠                                                                                              |   |
|    | APPLY_AMOUNT                  | NUMBER(18, 3)        | 本次申貸/核准金額                                                                                              |   |
|    | NET_VALUE                     | NUMBER(18, 3)        | 鑑估淨值                                                                                                   |   |
|    | PERSON_DEBT_TYPE              | VARCHAR2(2 char)    | 個人置產類別                                                                                                 |   |
|    | TRANSFERAMT                   | NUMBER(18, 3)        | 本案代償金額                                                                                                 |   |
|    | TRANSFERAMT_DBR22             | NUMBER(18, 3)        | 代償金額(應計入DBR22倍)                                                                                        |   |
|    | MM_PAY                        | NUMBER(18, 3)        | 月付金(包含調整前月付金. 調整前月付金小計. 調整後月付金)                                                                          |   |
|    | MM_PAY_SUB                    | NUMBER(18, 3)        | 調整後月付金小計                                                                                               |   |
|    | INTEREST_PRIME                | NUMBER(18, 4)        | 建議承作優惠利率                                                                                               |   |
|    | TRIAL_AMOUNT                  | NUMBER(18, 3)        | 收支比試算金額                                                                                                |   |
|    | TRIAL_PERIOD                  | INTEGER             | 收支比試算期間                                                                                                |   |
|    | TRIAL_INTEREST                | NUMBER(18, 4)        | 收支比試算利率                                                                                                |   |
|    | TRIAL_MM_PAY                  | NUMBER(18, 3)        | 收支比試算月付金                                                                                               |   |
|    | UNDERPRIVILEGED               | VARCHAR2(1 char)    | 本案符合弱勢族群貸款開辦費優惠方案                                                                                      |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_ACCOUNT_NEW

#### 消金信貸核准額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
| PK | ACCOUNT_UID                   | VARCHAR2(36 char)   | PK                                                                                                     |   |
|    | ACCOUNT_UID_GUAR              | VARCHAR2(36 char)   | 農業有擔的PK                                                                                                |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 申請號碼                                                                                                   |   |
|    | COLLATERAL_MARK               | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                                 |   |
|    | TYPE                          | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                                           |   |
|    | SUBJECT                       | VARCHAR2(3 char)    | 授信科目細項                                                                                                 |   |
|    | PROJECT_TYPE                  | VARCHAR2(2 char)    | 專案類別(01: 上班族02: 企業主03: 創業好幫手貸款專案04: 有巢氏信貸05:199低利06: 新光關係企業員工07: 優質族群08: 特定族群09: 互助會10: 新光人壽房貸搭配新光銀行二順位信貸11: 農業) |   |
|    | PROJECT_NO                    | VARCHAR2(5 char)    | 專案代號                                                                                                   |   |
|    | GUARANTEE                     | INTEGER             | 農業保證成數(1~10成)                                                                                          |   |
|    | PROVIDE_IMMOVABLE             | VARCHAR2(1 char)    | 借款人或保證人可提供不動產予本行設定抵押權者(0: 否1: 是)                                                                         |   |
|    | MARGIN_CENTER                 | VARCHAR2(4 char)    | 利潤中心                                                                                                   |   |
|    | INVEST_CHINA                  | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                                                        |   |
|    | CURRENCY                      | VARCHAR2(3 char)    | 幣別                                                                                                     |   |
|    | RATE                          | NUMBER(18, 4)        | 對台幣匯率                                                                                                  |   |
|    | AMOUNT                        | NUMBER(18, 3)        | 借款金額/有擔無擔金額                                                                                            |   |
|    | AMOUNT_FARM                   | NUMBER(18, 3)        | 農貸借款金額                                                                                                 |   |
|    | INTEREST                      | NUMBER(18, 4)        | 利率                                                                                                     |   |
|    | PERIOD                        | INTEGER             | 借款期間(單位：月)                                                                                             |   |
|    | APPLY_TYPE                    | VARCHAR2(1 char)    | 申請類別(1：免保人2：純信3：第二順位抵押權)                                                                               |   |
|    | DEBT_REASON                   | VARCHAR2(2 char)    | 借款用途(1. 投資理財2. 代償名下負債3. 子女教育4. 創業5. 修繕6. 其他)                                                                 |   |
|    | DEBT_OTHER                    | VARCHAR2(50 char)   | 借款用途_其他內容                                                                                              |   |
|    | IS_COMMUTE                    | VARCHAR2(1 char)    | 可否代償(0: 否1: 是)                                                                                           |   |
|    | PAYWAY                        | VARCHAR2(50 char)   | 貸款類別(1: 分期攤還, 2: 分期攤還，但首年僅繳息)                                                                             |   |
|    | LIMIT_YEAR                    | INTEGER             | 寬限期(單位：年)                                                                                              |   |
|    | PURPOSE                       | VARCHAR2(3 char)    | 授信用途                                                                                                   |   |
|    | PROCESS_CHARGE                | NUMBER(18, 3)        | 開辦費                                                                                                    |   |
|    | RISK_CHARGE                   | NUMBER(18, 3)        | 風險管理費                                                                                                  |   |
|    | ACCOUNT_CHARGE                | NUMBER(18, 3)        | 帳務管理費                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE        | NUMBER(18, 3)        | 建議風險管理費                                                                                                |   |
|    | IS_APPLY                      | VARCHAR2(1 char)    | 是否申請優惠利率(0：否，1：是)                                                                                      |   |
|    | APPLY_INTEREST                | NUMBER(18, 4)        | 單位申請優惠利率                                                                                               |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | 語系                                                                                                     |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新人員分行別                                                                                              |   |
|    | APPROVE_LIMIT                 | INTEGER             | 批覆書有效期間(單位：天)                                                                                          |   |
|    | BANK_OWE                      | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                                                        |   |
|    | INTEREST_TOTAL                | NUMBER(18, 4)        | 利率合計                                                                                                   |   |
|    | ACCOUNT_STATUS                | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                                                         |   |
|    | CONDITION                     | VARCHAR2(2000 char) | 其他貸放條件                                                                                                 |   |
|    | ADVICE                        | VARCHAR2(2000 char) | 建議說明                                                                                                   |   |
|    | INTEREST_TOTAL_DESC           | VARCHAR2(2000 char) | 利率合計中文說明(貸放條件)                                                                                         |   |
|    | OVERRIDE                      | VARCHAR2(2 char)    |                                                                                                        |   |
|    | REJECT_TYPE                   | VARCHAR2(2 char)    | 退件理由碼                                                                                                  |   |
|    | REJECT_REASON                 | VARCHAR2(2000 char) | 退件理由碼                                                                                                  |   |
|    | PURPOSE_OTHER                 | VARCHAR2(200 char)  | 授信用途_其他說明                                                                                              |   |
|    | BRANCH_ACCOUNT_STATUS         | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                                                       |   |
|    | APRV_DATE                     | TIMESTAMP           | 最新一種授信方式的核准結案日期                                                                                        |   |
|    | INTEREST_BASIC                | VARCHAR2(4 char)    | 利率名稱                                                                                                   |   |
|    | LOAN_WAY_NEW                  | VARCHAR2(2 char)    | 最新授信方式(不論核准或婉拒)                                                                                        |   |
|    | PROJECT_TARGET_TITLE          | VARCHAR2(2 char)    | 授信對象資格_大項                                                                                              |   |
|    | PROJECT_TARGET                | VARCHAR2(2 char)    | 授信對象資格_細項                                                                                              |   |
|    | CREDIT_RAISE_FREE             | VARCHAR2(1 char)    | 本案依規是否須辦理信用加碼(0: 否, 1: 是)                                                                                 |   |
|    | PROCESS_CHARGE_REMARK         | VARCHAR2(200 char)  | 開辦費說明                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE_REMARK | VARCHAR2(200 char)  | 建議風險管理費說明                                                                                              |   |
|    | CHARGE_YEAR_RATE              | NUMBER(18, 4)        | 總費用年百分率                                                                                                |   |
|    | PAYMENT                       | VARCHAR2(2 char)    | 還款方式                                                                                                   |   |
|    | ISGOOD_INTEREST               | VARCHAR2(1 char)    | 利率優惠/業績打折(0: 否1: 是)                                                                                      |   |
|    | DISCOUNT                      | NUMBER(18, 2)        | 業績打折%                                                                                                  |   |
|    | ISDBR22                       | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                                                                 |   |
|    | DBR22_AMOUNT                  | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                                                         |   |
|    | DBR22_REASON                  | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                                                         |   |
|    | SET_AMOUNT                    | NUMBER(18, 3)        | 他行設定/本行現欠                                                                                              |   |
|    | APPLY_AMOUNT                  | NUMBER(18, 3)        | 本次申貸/核准金額                                                                                              |   |
|    | NET_VALUE                     | NUMBER(18, 3)        | 鑑估淨值                                                                                                   |   |
|    | PERSON_DEBT_TYPE              | VARCHAR2(2 char)    | 個人置產類別                                                                                                 |   |
|    | TRANSFERAMT                   | NUMBER(18, 3)        | 本案代償金額                                                                                                 |   |
|    | TRANSFERAMT_DBR22             | NUMBER(18, 3)        | 代償金額(應計入DBR22倍)                                                                                        |   |
|    | MM_PAY                        | NUMBER(18, 3)        | 月付金(包含調整前月付金. 調整前月付金小計. 調整後月付金)                                                                          |   |
|    | MM_PAY_SUB                    | NUMBER(18, 3)        | 調整後月付金小計                                                                                               |   |
|    | INTEREST_PRIME                | NUMBER(18, 4)        | 建議承作優惠利率                                                                                               |   |
|    | STATUS_6E048                  | VARCHAR2(1 char)    |                                                                                                        |   |
|    | QUERY_UID_6E048               | VARCHAR2(36 char)   |                                                                                                        |   |
|    | STATUS_6E049                  | VARCHAR2(1 char)    |                                                                                                        |   |
|    | QUERY_UID_6E049               | VARCHAR2(36 char)   |                                                                                                        |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_BASEDATA

#### 借款人個人基本資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新時間                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                                                      |   |
| PK | UIDX                          | VARCHAR2(36 char)   |                                                                                                        |   |
|    | CURRENCY                      | VARCHAR2(3 char)    | 幣別                                                                                                     |   |
|    | EMPID                         | VARCHAR2(10 char)   | 推廣員編號                                                                                                  |   |
|    | EMPNAME                       | VARCHAR2(20 char)   | 推廣員姓名                                                                                                  |   |
|    | ACC_BRANCHID                  | VARCHAR2(4 char)    | 記帳單位                                                                                                   |   |
|    | MAINTAIN_INPUT_CHANNEL_UID    | VARCHAR2(36 char)   | Maintain_Input_Channel. UID                                                                             |   |
|    | GETWAY                        | VARCHAR2(2 char)    | 得知管道(1: 報章2: 雜誌3: 電子媒體4: 友人5: 行員6: 其他)                                                                       |   |
|    | BIRTHDAY_TYPE                 | VARCHAR2(1 char)    | (核心)民國前／後(0: 民國, 1: 民國前)                                                                                  |   |
|    | BIRTHDAY                      | TIMESTAMP           | (核心)出生日期                                                                                               |   |
|    | SEX                           | VARCHAR2(1 char)    | (核心)性別(1: 男, 2: 女)                                                                                        |   |
|    | EDUCATION                     | VARCHAR2(1 char)    | (核心)學歷(1. 國中(以下)2. 高中/職3. 專科4. 大學5. 研究所以上)                                                                  |   |
|    | MARRIAGE                      | VARCHAR2(1 char)    | (核心)婚姻狀況(1. 未婚2. 已婚3. 離婚4配偶歿)                                                                             |   |
|    | CHILD                         | INTEGER             | 子女數                                                                                                    |   |
|    | CHILDSTATUS                   | VARCHAR2(2 char)    | 子女狀況(1. 年幼2. 就學3. 就業4. 其他)                                                                                 |   |
|    | CHILDSTATUS_DESC              | VARCHAR2(100 char)  | 子女狀況說明                                                                                                 |   |
|    | NOW_ZIP_3                     | VARCHAR2(3 char)    | (核心)現居地址_郵遞區號3碼                                                                                        |   |
|    | NOW_ZIP_2                     | VARCHAR2(2 char)    | 現居地址_郵遞區號2碼                                                                                            |   |
|    | NOW_CITYID                    | VARCHAR2(10 char)   | (核心)現居地址_縣市                                                                                            |   |
|    | NOW_AREAID                    | VARCHAR2(2 char)    | (核心)現居地址_鄉鎮區                                                                                           |   |
|    | NOW_NB                        | VARCHAR2(12 char)   | 現居地址_村里                                                                                                |   |
|    | NOW_NB_CODE                   | VARCHAR2(1 char)    | 現居地址_村里代碼                                                                                              |   |
|    | NOW_ND                        | VARCHAR2(3 char)    | 現居地址_鄰                                                                                                 |   |
|    | NOW_NO                        | VARCHAR2(100 char)  | (核心)現居地址_地址                                                                                            |   |
|    | NOW_LIVESTATUS                | VARCHAR2(1 char)    | (核心)現居地址_居住狀況(1. 獨居2. 配偶或父母或子女3. 親人4. 友人(同事))                                                              |   |
|    | NOW_LIVEYEAR                  | INTEGER             | (核心)現居地址_居住N幾年                                                                                         |   |
|    | NOW_HOUSESTATUS               | VARCHAR2(1 char)    | (核心)現居地址_所有權人(1. 本人2. 配偶3. 父母4. 子女5. 親人6. 友人7. 租賃8. 宿舍)                                                        |   |
|    | NOW_RELATION                  | VARCHAR2(50 char)   | 現居地址_親人                                                                                                |   |
|    | NOW_RENT                      | NUMBER(18, 3)        |                                                                                                        |   |
|    | HOME_LIVERADIO                | VARCHAR2(1 char)    | 戶籍地radio(1. 同現居2. 同公司9. 如下)                                                                               |   |
|    | HOME_ZIP_3                    | VARCHAR2(3 char)    | (核心)戶籍地_郵遞區號3碼                                                                                         |   |
|    | HOME_ZIP_2                    | VARCHAR2(2 char)    | 戶籍地_郵遞區號2碼                                                                                             |   |
|    | HOME_CITYID                   | VARCHAR2(10 char)   | (核心)戶籍地_縣市                                                                                             |   |
|    | HOME_AREAID                   | VARCHAR2(2 char)    | (核心)戶籍地_鄉鎮區                                                                                            |   |
|    | HOME_NB                       | VARCHAR2(12 char)   | 戶籍地_村里                                                                                                 |   |
|    | HOME_NB_CODE                  | VARCHAR2(1 char)    | 戶籍地_村里代碼                                                                                               |   |
|    | HOME_ND                       | VARCHAR2(3 char)    | 戶籍地_鄰                                                                                                  |   |
|    | HOME_NO                       | VARCHAR2(100 char)  | (核心)戶籍地_地址                                                                                             |   |
|    | HOME_LIVESTATUS               | VARCHAR2(1 char)    | 戶籍地_居住狀況(1. 同現居2. 配偶或父母或子女3. 親人4. 友人5. 其他)                                                                  |   |
|    | HOME_LIVESTATUS_OTHER         | VARCHAR2(50 char)   | 戶籍地_居住狀況其它說明                                                                                           |   |
|    | HOME_LIVEYEAR                 | INTEGER             | 戶籍地_居住N幾年                                                                                              |   |
|    | HOME_HOUSESTATUS              | VARCHAR2(1 char)    | 戶籍地_所有權人(1. 本人2. 配偶3. 父母4. 子女5. 親人6. 友人7. 租賃8. 宿舍)                                                             |   |
|    | HOME_RELATION                 | VARCHAR2(50 char)   | 戶籍地_親人                                                                                                 |   |
|    | HOME_RENT                     | NUMBER(18, 3)        | 戶籍地_月租                                                                                                 |   |
|    | COMM_LIVERADIO                | VARCHAR2(1 char)    | 通訊地radio(1. 同現居2. 同戶籍3. 配偶或父母或子女4. 親人5. 友人6. 其他)                                                             |   |
|    | COMM_ZIP_3                    | VARCHAR2(3 char)    | 通訊地_郵遞區號3碼                                                                                             |   |
|    | COMM_ZIP_2                    | VARCHAR2(2 char)    | 通訊地_郵遞區號2碼                                                                                             |   |
|    | COMM_CITYID                   | VARCHAR2(10 char)   | 通訊地_縣市                                                                                                 |   |
|    | COMM_AREAID                   | VARCHAR2(2 char)    | 通訊地_鄉鎮區                                                                                                |   |
|    | COMM_NB                       | VARCHAR2(12 char)   | 通訊地_村里                                                                                                 |   |
|    | COMM_NB_CODE                  | VARCHAR2(1 char)    | 通訊地_村里代碼                                                                                               |   |
|    | COMM_ND                       | VARCHAR2(3 char)    | 通訊地_鄰                                                                                                  |   |
|    | COMM_NO                       | VARCHAR2(100 char)  | 通訊地_地址                                                                                                 |   |
|    | EMAIL                         | VARCHAR2(50 char)   | Home_NO電子郵件信箱                                                                                          |   |
| PK | CONSUME_CUSTOMER_MAIN_UID     | VARCHAR2(36 char)   | Consume_Customer_Main. UID                                                                              |   |
|    | IS_KNOWWAY                    | VARCHAR2(1 char)    | 家人知悉用途(1: 是2: 否)                                                                                         |   |
|    | INTERACT                      | VARCHAR2(2 char)    | 與家人互動                                                                                                  |   |
|    | INTERACT_DESC                 | VARCHAR2(100 char)  | 與家人互動_其他                                                                                               |   |
|    | MEETING_TIME                  | VARCHAR2(100 char)  | 方便照會的時間                                                                                                |   |
|    | IS_MATCH                      | VARCHAR2(1 char)    | 身分證編號、出生年月日、地址、申請書對照是否相符(0: 否1: 是)                                                                       |   |
|    | SCHOOL                        | VARCHAR2(50 char)   | 就讀學校                                                                                                   |   |
|    | NOHOME_TEL                    | VARCHAR2(1 char)    | 戶籍地-無法提供市內電話(1: 是0: 否)                                                                                   |   |
|    | NONOW_TEL                     | VARCHAR2(1 char)    | 現居地-無法提供市內電話(1: 是0: 否)                                                                                   |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_CSCA

#### 消金信貸A卡評分資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                          | VARCHAR2(36 char)   | 發查Uid                                                                                                  |   |
|    | LOAN_UID                      | VARCHAR2(36 char)   | 案件Uid                                                                                                  |   |
|    | ACCOUNT_UID                   | VARCHAR2(36 char)   | 申請號碼Uid                                                                                                |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 申請號碼                                                                                                   |   |
|    | SCID                          | VARCHAR2(10 char)   | 評分卡卡號                                                                                                  |   |
|    | NO                            | VARCHAR2(4 char)    | 評分卡版本                                                                                                  |   |
|    | REQUESTXML                    | VARCHAR2(2000 char) | 查詢內容                                                                                                   |   |
|    | REQUESTSTATUS                 | VARCHAR2(1 char)    | 查詢狀態                                                                                                   |   |
|    | RESPONSEXML                   | VARCHAR2(2000 char) | 回傳結果                                                                                                   |   |
|    | RESPONSECODE                  | VARCHAR2(6 char)    | 回傳狀態代碼                                                                                                 |   |
|    | RESPONSEMSG                   | VARCHAR2(200 char)  | 回傳訊息                                                                                                   |   |
|    | PARSESTATUS                   | VARCHAR2(1 char)    | 解析狀態                                                                                                   |   |
|    | SCORING_R                     | VARCHAR2(1 char)    | 評分結果P: 核准, J拒絕, T轉介                                                                                       |   |
|    | SCORING_S                     | NUMBER(19, 6)        | 評分分數                                                                                                   |   |
|    | SCORING_K                     | INTEGER             | 評分等級                                                                                                   |   |
|    | SCORING_P                     | NUMBER(19, 6)        | 違約率                                                                                                    |   |
|    | CUTOFFSTATUS                  | VARCHAR2(1 char)    | 狀態(0: 核准1: 婉拒)                                                                                           |   |
|    | DELETE_STATUS                 | VARCHAR2(1 char)    | 狀態(0: 有效1: 無效)                                                                                           |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    |                                                                                                        |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立者所屬分行代碼                                                                                              |   |
|    | CREATE_EMPID                  | VARCHAR2(10 char)   | 建立者員編                                                                                                  |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立者角色                                                                                                  |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立日期                                                                                                   |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 修改者所屬分行代碼                                                                                              |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(10 char)   | 修改者員編                                                                                                  |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 修改者角色                                                                                                  |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 修改日期                                                                                                   |   |
|    | CHQ_ADB_IND                   | VARCHAR2(1 char)    | 申請人本行支存往來有無異常紀錄                                                                                        |   |
|    | ADB_IND                       | VARCHAR2(1 char)    | 申請人本行風險是否有異常紀錄                                                                                         |   |
|    | SAV_AMT                       | VARCHAR2(50 char)   | 本行存款往來積數                                                                                               |   |
|    | ESTATEMONTH                   | VARCHAR2(10 char)   | 最長之不動產持有期間                                                                                             |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_LEND

#### 消金信貸流程各關卡申請額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
| PK | ACCOUNT_UID                   | VARCHAR2(36 char)   | PK                                                                                                     |   |
| PK | FLOW_SEQNO                    | NUMBER(5, 0)         | 案件流程步驟累計(流程流水號)                                                                                        |   |
|    | FLOW_STATUS                   | NUMBER(5, 0)         | 流程狀態代碼                                                                                                 |   |
|    | ACCOUNT_UID_GUAR              | VARCHAR2(36 char)   | 農業有擔的PK                                                                                                |   |
|    | ACCOUNT_NO                    | VARCHAR2(50 char)   | 申請號碼                                                                                                   |   |
|    | COLLATERAL_MARK               | VARCHAR2(1 char)    | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                                 |   |
|    | TYPE                          | VARCHAR2(1 char)    | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                                           |   |
|    | SUBJECT                       | VARCHAR2(3 char)    | 授信科目細項                                                                                                 |   |
|    | PROJECT_TYPE                  | VARCHAR2(2 char)    | 專案類別(01: 上班族02: 企業主03: 創業好幫手貸款專案04: 有巢氏信貸05:199低利06: 新光關係企業員工07: 優質族群08: 特定族群09: 互助會10: 新光人壽房貸搭配新光銀行二順位信貸11: 農業) |   |
|    | PROJECT_NO                    | VARCHAR2(5 char)    | 專案代號                                                                                                   |   |
|    | GUARANTEE                     | INTEGER             | 農業保證成數(1~10成)                                                                                          |   |
|    | PROVIDE_IMMOVABLE             | VARCHAR2(1 char)    | 借款人或保證人可提供不動產予本行設定抵押權者(0: 否1: 是)                                                                         |   |
|    | MARGIN_CENTER                 | VARCHAR2(4 char)    | 利潤中心                                                                                                   |   |
|    | INVEST_CHINA                  | VARCHAR2(1 char)    | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備))                                                                        |   |
|    | CURRENCY                      | VARCHAR2(3 char)    | 幣別                                                                                                     |   |
|    | RATE                          | NUMBER(18, 4)        | 對台幣匯率                                                                                                  |   |
|    | AMOUNT                        | NUMBER(18, 3)        | 借款金額/有擔無擔金額                                                                                            |   |
|    | AMOUNT_FARM                   | NUMBER(18, 3)        | 農貸借款金額                                                                                                 |   |
|    | INTEREST                      | NUMBER(18, 4)        | 利率                                                                                                     |   |
|    | PERIOD                        | INTEGER             | 借款期間(單位：月)                                                                                             |   |
|    | APPLY_TYPE                    | VARCHAR2(1 char)    | 申請類別(1：免保人2：純信3：第二順位抵押權)                                                                               |   |
|    | DEBT_REASON                   | VARCHAR2(2 char)    | 借款用途(1. 投資理財2. 代償名下負債3. 子女教育4. 創業5. 修繕6. 其他)                                                                 |   |
|    | DEBT_OTHER                    | VARCHAR2(50 char)   | 借款用途_其他內容                                                                                              |   |
|    | IS_COMMUTE                    | VARCHAR2(1 char)    | 可否代償(0: 否1: 是)                                                                                           |   |
|    | PAYWAY                        | VARCHAR2(50 char)   | 貸款類別(1: 分期攤還, 2: 分期攤還，但首年僅繳息)                                                                             |   |
|    | LIMIT_YEAR                    | INTEGER             | 寬限期(單位：年)                                                                                              |   |
|    | PURPOSE                       | VARCHAR2(3 char)    | 授信用途                                                                                                   |   |
|    | PROCESS_CHARGE                | NUMBER(18, 3)        | 開辦費                                                                                                    |   |
|    | RISK_CHARGE                   | NUMBER(18, 3)        | 風險管理費                                                                                                  |   |
|    | ACCOUNT_CHARGE                | NUMBER(18, 3)        | 帳務管理費                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE        | NUMBER(18, 3)        | 建議風險管理費                                                                                                |   |
|    | IS_APPLY                      | VARCHAR2(1 char)    | 是否申請優惠利率(0：否，1：是)                                                                                      |   |
|    | APPLY_INTEREST                | NUMBER(18, 4)        | 單位申請優惠利率                                                                                               |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | 語系                                                                                                     |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新人員分行別                                                                                              |   |
|    | APPROVE_LIMIT                 | INTEGER             | 批覆書有效期間(單位：天)                                                                                          |   |
|    | BANK_OWE                      | VARCHAR2(1 char)    | 收回本行現欠(1: 是, 0: 否)                                                                                        |   |
|    | INTEREST_TOTAL                | NUMBER(18, 4)        | 利率合計                                                                                                   |   |
|    | ACCOUNT_STATUS                | VARCHAR2(1 char)    | 建議狀態(0: 娩拒1: 核准)                                                                                         |   |
|    | CONDITION                     | VARCHAR2(2000 char) | 其他貸放條件                                                                                                 |   |
|    | ADVICE                        | VARCHAR2(2000 char) | 建議說明                                                                                                   |   |
|    | INTEREST_TOTAL_DESC           | VARCHAR2(2000 char) | 利率合計中文說明(貸放條件)                                                                                         |   |
|    | OVERRIDE                      | VARCHAR2(2 char)    | override原因                                                                                             |   |
|    | OP_STATUS                     | VARCHAR2(1 char)    | 動撥狀態(0: 不動撥1: 要動撥)                                                                                       |   |
|    | PURPOSE_OTHER                 | VARCHAR2(200 char)  | 授信用途_其他說明                                                                                              |   |
|    | BRANCH_ACCOUNT_STATUS         | VARCHAR2(1 char)    | 分行建議狀態(0: 娩拒1: 核准)                                                                                       |   |
|    | INTEREST_BASIC                | VARCHAR2(4 char)    | 利率名稱                                                                                                   |   |
|    | QUERY_UID_6E027               | VARCHAR2(36 char)   | 發動6E027的query_uid                                                                                      |   |
|    | STATUS_6E027                  | VARCHAR2(1 char)    | 6E027狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                                           |   |
|    | PROJECT_TARGET_TITLE          | VARCHAR2(2 char)    | 授信對象資格_大項                                                                                              |   |
|    | PROJECT_TARGET                | VARCHAR2(2 char)    | 授信對象資格_細項                                                                                              |   |
|    | CREDIT_RAISE_FREE             | VARCHAR2(1 char)    | 本案依規是否須辦理信用加碼(0: 否, 1: 是)                                                                                 |   |
|    | PROCESS_CHARGE_REMARK         | VARCHAR2(200 char)  | 開辦費說明                                                                                                  |   |
|    | FAVORED_ACCOUNT_CHARGE_REMARK | VARCHAR2(200 char)  | 建議風險管理費說明                                                                                              |   |
|    | CHARGE_YEAR_RATE              | NUMBER(18, 4)        | 總費用年百分率                                                                                                |   |
|    | PAYMENT                       | VARCHAR2(2 char)    | 還款方式                                                                                                   |   |
|    | INTEREST_DESC                 | VARCHAR2(2000 char) | 建議利率說明                                                                                                 |   |
|    | ISGOOD_INTEREST               | VARCHAR2(1 char)    | 利率優惠/業績打折(0: 否1: 是)                                                                                      |   |
|    | DISCOUNT                      | NUMBER(18, 2)        | 業績打折%                                                                                                  |   |
|    | ISDBR22                       | VARCHAR2(1 char)    | 本筆核准額度是否應計入DBR22倍規範之金額                                                                                 |   |
|    | DBR22_AMOUNT                  | NUMBER(18, 3)        | 應計入DBR22倍規範之金額                                                                                         |   |
|    | DBR22_REASON                  | VARCHAR2(2 char)    | 不計入DBR22倍規範之原因                                                                                         |   |
|    | SET_AMOUNT                    | NUMBER(18, 3)        | 他行設定/本行現欠                                                                                              |   |
|    | APPLY_AMOUNT                  | NUMBER(18, 3)        | 本次申貸/核准金額                                                                                              |   |
|    | NET_VALUE                     | NUMBER(18, 3)        | 鑑估淨值                                                                                                   |   |
|    | TRANSFERAMT                   | NUMBER(18, 3)        | 本案代償金額                                                                                                 |   |
|    | PERSON_DEBT_TYPE              | VARCHAR2(2 char)    |                                                                                                        |   |
|    | TRANSFERAMT_DBR22             | NUMBER(18, 3)        | 代償金額(應計入DBR22倍)                                                                                        |   |
|    | MM_PAY                        | NUMBER(18, 3)        | 月付金(包含調整前月付金. 調整前月付金小計. 調整後月付金)                                                                          |   |
|    | MM_PAY_SUB                    | NUMBER(18, 3)        | 調整後月付金小計                                                                                               |   |
|    | INTEREST_PRIME                | NUMBER(18, 4)        | 建議承作優惠利率                                                                                               |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_PHONENUM

#### 消金信貸案件電話資料檔_分行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新時間                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                                                      |   |
| PK | UIDX                          | VARCHAR2(36 char)   |                                                                                                        |   |
|    | TYPE                          | VARCHAR2(1 char)    | 電話類別(1: 現居地電話2: 戶籍地電話3: 通訊地電話4: 通訊地手機)                                                                     |   |
|    | TEL_AREA                      | VARCHAR2(3 char)    | 電話區碼                                                                                                   |   |
|    | TEL_NO                        | VARCHAR2(30 char)   | 電號號碼                                                                                                   |   |
|    | TEL_EXTN                      | VARCHAR2(10 char)   | 電話分機碼                                                                                                  |   |
|    | TEL_AREA_H                    | VARCHAR2(3 char)    |                                                                                                        |   |
|    | TEL_NO_H                      | VARCHAR2(10 char)   |                                                                                                        |   |
|    | TEL_EXTN_H                    | VARCHAR2(50 char)   |                                                                                                        |   |
|    | MOBILE                        | VARCHAR2(10 char)   | 行動電話                                                                                                   |   |
| PK | CONSUME_PERSON_BASEDATA_UID   | VARCHAR2(36 char)   | Consume_Person_BaseData. UID                                                                            |   |
|    | CHECKER                       | VARCHAR2(2 char)    | 行動電話第三人確認人(1戶籍地、現居地之家人2. 連絡人一. 連絡人二3. 公司同事4. 同k01或k22資料5. 同舊貸)                                              |   |
|    | IS_CONFIRM_TEL                | VARCHAR2(1 char)    | 是否為動撥確認電話(Y: 是N: 否)                                                                                      |   |
|    | POKE_SEQNO                    | INTEGER             | 動撥電話的順序                                                                                                |   |
|    | CHECKER_DESC                  | VARCHAR2(100 char)  | 第3人確認人_其他                                                                                              |   |
|    | SFA_FLAG                      | VARCHAR2(1 char)    |                                                                                                        |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |   |

### VW_ODS_D_CONSUME_PERSON_PHONENUM_IQ

#### 消金信貸案件電話資料檔_總行

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                      | VARCHAR2(36 char)   | 系統案件主鍵                                                                                                 |   |
|    | CREATE_EMPROLE                | VARCHAR2(3 char)    | 建立人員角色                                                                                                 |   |
|    | CREATE_EMPID                  | VARCHAR2(5 char)    | 建立人員員編                                                                                                 |   |
|    | CREATE_BRANCHID               | VARCHAR2(4 char)    | 建立人員分行別                                                                                                |   |
|    | CREATE_DATE                   | TIMESTAMP           | 建立時間                                                                                                   |   |
|    | LASTUPDATE_EMPROLE            | VARCHAR2(3 char)    | 最後更新人員角色                                                                                               |   |
|    | LASTUPDATE_EMPID              | VARCHAR2(5 char)    | 最後更新人員員編                                                                                               |   |
|    | LASTUPDATE_BRANCHID           | VARCHAR2(4 char)    | 最後更新人員分行別                                                                                              |   |
|    | LASTUPDATE_DATE               | TIMESTAMP           | 最後更新時間                                                                                                 |   |
|    | LANGUAGETYPE                  | VARCHAR2(5 char)    | zh-TW_zh-CN_en-US                                                                                      |   |
| PK | UIDX                          | VARCHAR2(36 char)   |                                                                                                        |   |
|    | TYPE                          | VARCHAR2(1 char)    | 電話類別(1: 現居地電話2: 戶籍地電話3: 通訊地電話4: 通訊地手機)                                                                     |   |
|    | TEL_AREA                      | VARCHAR2(3 char)    | 電話區碼                                                                                                   |   |
|    | TEL_NO                        | VARCHAR2(30 char)   | 電號號碼                                                                                                   |   |
|    | TEL_EXTN                      | VARCHAR2(10 char)   | 電話分機碼                                                                                                  |   |
|    | TEL_AREA_H                    | VARCHAR2(3 char)    |                                                                                                        |   |
|    | TEL_NO_H                      | VARCHAR2(10 char)   |                                                                                                        |   |
|    | TEL_EXTN_H                    | VARCHAR2(10 char)   |                                                                                                        |   |
|    | MOBILE                        | VARCHAR2(10 char)   | 行動電話                                                                                                   |   |
| PK | CONSUME_PERSON_BASEDATA_UID   | VARCHAR2(36 char)   | Consume_Person_BaseData. UID                                                                            |   |
|    | CHECKER                       | VARCHAR2(2 char)    | 行動電話第三人確認人(1戶籍地、現居地之家人2. 連絡人一. 連絡人二3. 公司同事4. 同k01或k22資料5. 同舊貸)                                              |   |
|    | IS_CONFIRM_TEL                | VARCHAR2(1 char)    | 是否為動撥確認電話(Y: 是N: 否)                                                                                      |   |
|    | POKE_SEQNO                    | INTEGER             | 動撥電話的順序                                                                                                |   |
|    | CHECKER_DESC                  | VARCHAR2(100 char)  | 第3人確認人_其他                                                                                              |   |
|    | SFA_FLAG                      | VARCHAR2(1 char)    |                                                                                                        |   |
|    | TBL_UPD_TIM                   | TIMESTAMP           | 表格更新時間                                                                                                 |

### VW_ODS_D_CONSUMEAPPLICATIONFORM

#### 雲端信貸申請資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | AF_NO                     | NUMBER(20, 0)       |                                       |   |
|    | LOAN_PROJECT              | VARCHAR2(1 char)   |                                       |   |
|    | AMOUNT                    | NUMBER(5, 0)        |                                       |   |
|    | PERIOD                    | INTEGER            |                                       |   |
|    | DEBT_REASON               | VARCHAR2(2 char)   |                                       |   |
|    | DEBT_REASON_OTHER         | VARCHAR2(50 char)  |                                       |   |
|    | PAY_WAY                   | VARCHAR2(1 char)   |                                       |   |
|    | CNAME                     | VARCHAR2(50 char)  |                                       |   |
|    | BIRTHDAY                  | VARCHAR2(8 char)   |                                       |   |
|    | CUSTOMER_ID               | VARCHAR2(11 char)  |                                       |   |
|    | DATE_OF_ISSUE             | INTEGER            |                                       |   |
|    | ISSUED_BY                 | VARCHAR2(10 char)  |                                       |   |
|    | ITEM_OF_ISSUE             | VARCHAR2(10 char)  |                                       |   |
|    | MARRIAGE                  | VARCHAR2(1 char)   |                                       |   |
|    | CHILD                     | INTEGER            |                                       |   |
|    | EDUCATION                 | VARCHAR2(1 char)   |                                       |   |
|    | CR_ADDR_ZIP               | VARCHAR2(5 char)   |                                       |   |
|    | CR_ADDR_CITY              | VARCHAR2(10 char)  |                                       |   |
|    | CR_ADDR_AREA              | VARCHAR2(30 char)  |                                       |   |
|    | CR_ADDR_ADR               | VARCHAR2(100 char) |                                       |   |
|    | CR_TEL_NONTEL_REASON      | VARCHAR2(1 char)   |                                       |   |
|    | CR_TEL                    | VARCHAR2(52 char)  |                                       |   |
|    | CR_LIVE_STATUS            | VARCHAR2(1 char)   |                                       |   |
|    | CR_LIVE_MONTH             | INTEGER            |                                       |   |
|    | CR_OWNER                  | VARCHAR2(1 char)   |                                       |   |
|    | CR_OWNER_RELATIVE         | VARCHAR2(50 char)  |                                       |   |
|    | CR_MONTHLY_RENT           | INTEGER            |                                       |   |
|    | HOME_STATUS               | VARCHAR2(1 char)   |                                       |   |
|    | HOME_ADDR_ZIP             | VARCHAR2(5 char)   |                                       |   |
|    | HOME_ADDR_CITY            | VARCHAR2(10 char)  |                                       |   |
|    | HOME_ADDR_AREA            | VARCHAR2(30 char)  |                                       |   |
|    | HOME_ADDR_ADR             | VARCHAR2(100 char) |                                       |   |
|    | HOME_TEL_NONTEL_REASON    | VARCHAR2(1 char)   |                                       |   |
|    | HOME_TEL                  | VARCHAR2(52 char)  |                                       |   |
|    | HOME_OWNER                | VARCHAR2(1 char)   |                                       |   |
|    | HOME_OWNER_RELATIVE       | VARCHAR2(50 char)  |                                       |   |
|    | HOME_MONTHLY_RENT         | INTEGER            |                                       |   |
|    | MAILING_STATUS            | VARCHAR2(1 char)   |                                       |   |
|    | MAILING_ADDR_ZIP          | VARCHAR2(5 char)   |                                       |   |
|    | MAILING_ADDR_CITY         | VARCHAR2(10 char)  |                                       |   |
|    | MAILING_ADDR_AREA         | VARCHAR2(30 char)  |                                       |   |
|    | MAILING_ADDR_ADR          | VARCHAR2(100 char) |                                       |   |
|    | MAILING_TEL_NONTEL_REASON | VARCHAR2(1 char)   |                                       |   |
|    | MAILING_TEL               | VARCHAR2(52 char)  |                                       |   |
|    | MOBILE                    | VARCHAR2(10 char)  |                                       |   |
|    | EMAIL                     | VARCHAR2(50 char)  |                                       |   |
|    | CAREER                    | VARCHAR2(2 char)   |                                       |   |
|    | PROFESSION                | VARCHAR2(20 char)  |                                       |   |
|    | SERVICE_NAME              | VARCHAR2(50 char)  |                                       |   |
|    | SERVICE_ID                | VARCHAR2(11 char)  |                                       |   |
|    | SENIORITY                 | INTEGER            |                                       |   |
|    | INCOME                    | NUMBER(5, 0)        |                                       |   |
|    | SERVICE_ADDR_ZIP          | VARCHAR2(5 char)   |                                       |   |
|    | SERVICE_ADDR_CITY         | VARCHAR2(10 char)  |                                       |   |
|    | SERVICE_ADDR_AREA         | VARCHAR2(30 char)  |                                       |   |
|    | SERVICE_ADDR_ADR          | VARCHAR2(100 char) |                                       |   |
|    | SERVICE_TEL_NONTEL_REASON | VARCHAR2(1 char)   |                                       |   |
|    | SERVICE_TEL               | VARCHAR2(52 char)  |                                       |   |
|    | SERVICE_FAX               | VARCHAR2(15 char)  |                                       |   |
|    | MATE_IS_FOREIGNER         | VARCHAR2(1 char)   |                                       |   |
|    | MATE_CNAME                | VARCHAR2(50 char)  |                                       |   |
|    | MATE_CUSTOMER_ID          | VARCHAR2(11 char)  |                                       |   |
|    | PROMOTIONS_EMPID          | VARCHAR2(10 char)  |                                       |   |
|    | EMAIL_2                   | VARCHAR2(50 char)  |                                       |   |
|    | IS_TELEMARKETING          | VARCHAR2(1 char)   |                                       |   |
|    | AUTHENTICATE              | VARCHAR2(50 char)  |                                       |   |
|    | SIGN_DATE                 | VARCHAR2(8 char)   |                                       |   |
|    | DISBURSEMENT_TARGET       | VARCHAR2(1 char)   |                                       |   |
|    | DISBURSEMENT_BANK         | VARCHAR2(3 char)   |                                       |   |
|    | DISBURSEMENT_BRANCH       | VARCHAR2(4 char)   |                                       |   |
|    | DISBURSEMENT_ACCOUNT_NO   | VARCHAR2(16 char)  |                                       |   |
|    | CMPIN_ID                  | VARCHAR2(10 char)  |                                       |   |
|    | IS_EXISTING               | VARCHAR2(1 char)   |                                       |   |
|    | CAMPAIGN_ID               | VARCHAR2(20 char)  |                                       |   |
|    | CMPN_ID                   | VARCHAR2(15 char)  |                                       |   |
|    | CMPN_SRC                  | VARCHAR2(20 char)  |                                       |   |
|    | CMPN_REF                  | VARCHAR2(50 char)  |                                       |   |
|    | PROMOTIONS_ENT            | VARCHAR2(10 char)  |                                       |   |
|    | PROMOTIONS_UNIT           | VARCHAR2(10 char)  |                                       |   |
|    | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                                |   |

### VW_ODS_D_CONSUMEPERSONACCOUNT_BOWE_NEW

#### 消金信貸本案收回本行現欠明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | OWE_UID                   | VARCHAR2(36 char)  |                                       |   |
|    | LOAN_UID                  | VARCHAR2(36 char)  | 系統案件主鍵                                |   |
|    | ACCOUNT_UID               | VARCHAR2(36 char)  | PK                                    |   |
|    | ACCOUNT_NO                | VARCHAR2(50 char)  | 貸放帳號                                  |   |
|    | LANGUAGETYPE              | VARCHAR2(5 char)   | 語系                                    |   |
|    | CREATE_EMPROLE            | VARCHAR2(3 char)   | 建立人員角色                                |   |
|    | CREATE_EMPID              | VARCHAR2(5 char)   | 建立人員員編                                |   |
|    | CREATE_BRANCHID           | VARCHAR2(4 char)   | 建立人員分行別                               |   |
|    | CREATE_DATE               | TIMESTAMP          | 建立時間                                  |   |
|    | LASTUPDATE_EMPROLE        | VARCHAR2(3 char)   | 最後更新人員角色                              |   |
|    | LASTUPDATE_EMPID          | VARCHAR2(5 char)   | 最後更新人員員編                              |   |
|    | LASTUPDATE_BRANCHID       | VARCHAR2(4 char)   | 最後更新人員分行別                             |   |
|    | LASTUPDATE_DATE           | TIMESTAMP          | 最後更新人員分行別                             |   |
|    | STATUS                    | VARCHAR2(2 char)   | 狀態, 對應Maintain_Consume_Bank_Owe_Status |   |
|    | ISOK_DATA                 | VARCHAR2(1 char)   | 資料是否已確定新增?                            |   |
|    | OWE_AMOUNT                | NUMBER(18, 3)       | 現欠金額                                  |   |
|    | TBL_UPD_TIM               | TIMESTAMP          | 表格更新時間                                |

### VW_ODS_D_CPL_CUSTOM_LNGROUP

#### 授信限額集團檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | GRPMAINNO                            | VARCHAR2(5 char)   | 集團代號                                                                                                                                     |   |
| PK | GRPMENNO                             | VARCHAR2(2 char)   | 成員代號                                                                                                                                     |   |
|    | GRPMENIDCODE                         | VARCHAR2(11 char)  | 集團成員統一編號                                                                                                                                 |   |
|    | GRPNAME                              | VARCHAR2(100 char) | 集團/成員名稱                                                                                                                                  |   |
|    | GRPAMT                               | NUMBER(19, 3)       | 總額度上限                                                                                                                                    |   |
|    | GRPLASTTXNDATE                       | TIMESTAMP          | 上一交易日                                                                                                                                    |   |
|    | GRPCREATEDATE                        | TIMESTAMP          | 建檔日期                                                                                                                                     |   |
|    | GRPRECSTATUS                         | VARCHAR2(1 char)   | 記錄狀態                                                                                                                                     |   |
|    | GRPMAINGRPNO                         | VARCHAR2(2 char)   | 集團主體編號                                                                                                                                   |   |
|    | GRPLOANRATING                        | VARCHAR2(2 char)   | 內部授信評等(綜合風險指標)                                                                                                                           |   |
|    | GRPMAINOFFICER                       | VARCHAR2(30 char)  | 集團主要負責人                                                                                                                                  |   |
|    | OPUSERID                             | VARCHAR2(5 char)   | 資料維護人員                                                                                                                                   |   |
|    | OPUPDATETIME                         | TIMESTAMP          | 資料維護時間                                                                                                                                   |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_ACCOUNT_NEW

#### 申請額度（結案最新－含授變）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件主鍵                                                                                                                                   |   |
| PK | UIDX                                 | VARCHAR2(36 char)  | PK                                                                                                                                       |   |
|    | ACCOUNT_TYPE                         | VARCHAR2(1 char)   | 額度類型(1. 一般額度2. 綜合額度)                                                                                                                       |   |
|    | ACCOUNT_NO                           | VARCHAR2(50 char)  | 申請號碼                                                                                                                                     |   |
|    | TOTAL_AMOUNT                         | NUMBER(18, 3)       | 總額度                                                                                                                                      |   |
|    | CURRENCY                             | VARCHAR2(3 char)   | 幣別                                                                                                                                       |   |
|    | RATE                                 | NUMBER(18, 4)       | 對台幣匯率                                                                                                                                    |   |
|    | MARGIN_CENTER                        | VARCHAR2(4 char)   | 利潤中心                                                                                                                                     |   |
|    | INVEST_CHINA                         | VARCHAR2(1 char)   | 財簽是否註記投資大陸(0: 否1: 是(未核備)2: 是(已核備)                                                                                                           |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立人員角色                                                                                                                                   |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員員編                                                                                                                                   |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立人員分行別                                                                                                                                  |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立時間                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 最後更新人員角色                                                                                                                                 |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 最後更新人員員編                                                                                                                                 |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 最後更新人員分行別                                                                                                                                |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 最後更新人員分行別                                                                                                                                |   |
|    | ACCOUNT_STATUS                       | VARCHAR2(1 char)   | 狀態(1: 核准2: 緩議)                                                                                                                             |   |
|    | OVERRIDE                             | VARCHAR2(50 char)  | 駁回原因                                                                                                                                     |   |
|    | IS_EXPAND                            | VARCHAR2(1 char)   | 申請展延(0: 否, 1: 是)                                                                                                                            |   |
|    | IS_CORE                              | VARCHAR2(1 char)   | 核心存在核准檔(0: 否, 1: 是)                                                                                                                         |   |
|    | EXPAND_NO                            | VARCHAR2(12 char)  | 展延核號                                                                                                                                     |   |
|    | INVEST_CHINA_NO                      | VARCHAR2(8 char)   | 承作編號                                                                                                                                     |   |
|    | REPEAT_CHINA_NO                      | VARCHAR2(200 char) | 重覆承作編號                                                                                                                                   |   |
|    | LOAN_WAY                             | VARCHAR2(2 char)   | 授信方式                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_CHK_LIST

#### 企金審查員審核表、批覆書檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件主鍵                                                                                                                                   |   |
| PK | CHK_TYPE                             | VARCHAR2(1 char)   | 審核表審核單位(1: 審查員, 4: 批覆書, 5: 最新案件狀況)                                                                                                            |   |
|    | EXCHANGE_RATE                        | NUMBER(18, 7)       | 美元折算匯率                                                                                                                                   |   |
|    | SUBTOTAL                             | NUMBER(18, 3)       | 額度合計                                                                                                                                     |   |
|    | APRV_DATE                            | TIMESTAMP          | 核准日期                                                                                                                                     |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立人員角色                                                                                                                                   |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員員編                                                                                                                                   |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立人員分行別                                                                                                                                  |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立時間                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 最後更新人員角色                                                                                                                                 |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 最後更新人員員編                                                                                                                                 |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 最後更新人員分行別                                                                                                                                |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 最後更新人員分行別                                                                                                                                |   |
|    | NOT_BRANCH_FINALLYCHECKLEVEL         | VARCHAR2(10 char)  |                                                                                                                                          |   |
|    | MAKE_DATE                            | TIMESTAMP          | 授變彙整表製作日期                                                                                                                                |   |
|    | ISREVIEW                             | VARCHAR2(1 char)   | 是否申覆案件(1: 是0: 否)                                                                                                                           |   |
|    | LOAN_WAY                             | VARCHAR2(2 char)   | 授信方式(總行審核表用)(01: 企金_新貸, 02: 企金_增貸, 03: 企金_減貸, 04: 企金_續貸, 05: 企金_授信條件變更06: 企金_協議償還, 07: 消金_新貸08: 消金_授信條件變更(撥貸前), 09: 消金_授信條件變更(撥貸後))參照：Maintain_Loan_Way |   |
|    | SUBTOTAL_CURRENCY                    | VARCHAR2(3 char)   | 額度合計幣別                                                                                                                                   |   |
|    | SOLICIT_ID                           | VARCHAR2(11 char)  | 招攬人員工編號                                                                                                                                  |   |
|    | SOLICIT_NAME                         | VARCHAR2(50 char)  | 招攬人員工姓名                                                                                                                                  |   |
|    | SPREAD_ID                            | VARCHAR2(11 char)  | 推廣人員ID                                                                                                                                   |   |
|    | SPREAD_NAME                          | VARCHAR2(50 char)  | 推廣人員姓名                                                                                                                                   |   |
|    | RECORD_BRANCHID                      | VARCHAR2(4 char)   | 記帳單位                                                                                                                                     |   |
|    | GETWAY                               | VARCHAR2(3 char)   | 得知管道                                                                                                                                     |   |
|    | ISRELATED                            | VARCHAR2(5 char)   |                                                                                                                                          |   |
|    | COUNTRY_LEVEL                        | VARCHAR2(2 char)   | 國家風險等級                                                                                                                                   |   |
|    | ISSET_INTW                           | VARCHAR2(1 char)   | 母公司是否設立於台灣(0: 否1: 是)                                                                                                                       |   |
|    | ISLNREL_NEAR                         | VARCHAR2(1 char)   | 是否為準利害關係人(0: 否1: 是)                                                                                                                        |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_CUSTOMER_MAIN

#### 企金客戶主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件主鍵                                                                                                                                   |   |
| PK | CUST_UID                             | VARCHAR2(36 char)  | 客戶主鍵                                                                                                                                     |   |
|    | CUSTOMER_ID                          | VARCHAR2(11 char)  | 統一編號                                                                                                                                     |   |
|    | CNAME                                | VARCHAR2(70 char)  | 個人姓名                                                                                                                                     |   |
|    | ID_TYPE                              | VARCHAR2(1 char)   | 身份別                                                                                                                                      |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | LOAN_TYPE                            | VARCHAR2(2 char)   | 授信類型                                                                                                                                     |   |
|    | LOAN_WAY                             | VARCHAR2(2 char)   | 授信方式ID                                                                                                                                   |   |
|    | HIGHLOANLEVELROLEID                  | VARCHAR2(3 char)   | 最高授信權責_RoleID                                                                                                                            |   |
|    | HIGHLOANLEVELROLENAME                | VARCHAR2(50 char)  | 最高授信權責_RoleName                                                                                                                          |   |
|    | DATA_SOURCE                          | VARCHAR2(1 char)   | 資料來源                                                                                                                                     |   |
|    | APRV_NO                              | VARCHAR2(12 char)  | 核准號碼                                                                                                                                     |   |
|    | IS_COPY                              | VARCHAR2(1 char)   | 案件引用                                                                                                                                     |   |
|    | COPY_CASENO                          | VARCHAR2(20 char)  | 舊案之案件編號                                                                                                                                  |   |
|    | COPY_LOAN_UID                        | VARCHAR2(36 char)  | 舊案之loan_uid                                                                                                                              |   |
|    | COPY_DBNAME                          | VARCHAR2(50 char)  | 舊案loan_uid所存DB                                                                                                                           |   |
|    | COPY_ACCOUNT_TYPE                    | VARCHAR2(1 char)   | 額度/保證人/擔保品複製來源                                                                                                                           |   |
|    | CHANGE_LOAN_UID                      | VARCHAR2(36 char)  | 授變_eloan進過件_對應原案loan_uid                                                                                                                 |   |
|    | CHANGE_CREATE_DATE                   | TIMESTAMP          | 授變批覆書核准日期                                                                                                                                |   |
|    | QUERY_UID_6E010                      | VARCHAR2(36 char)  | 發動6E010的query_uid                                                                                                                        |   |
|    | STATUS_6E010                         | VARCHAR2(1 char)   | 6E010狀態                                                                                                                                  |   |
|    | APPROVE_LOAN_UID                     | VARCHAR2(36 char)  | 最近一次結案批覆書之loan_uid                                                                                                                       |   |
|    | APPROVE_LAST_TYPE                    | VARCHAR2(1 char)   | 最近一次結案批覆書類型                                                                                                                              |   |
|    | APPLY_BRANCHID                       | VARCHAR2(4 char)   | 申請單位                                                                                                                                     |   |
|    | QUERY_UID_6E023                      | VARCHAR2(36 char)  | 發動6E023的query_uid                                                                                                                        |   |
|    | STATUS_6E023                         | VARCHAR2(1 char)   | 核心交易6E023上傳狀態                                                                                                                            |   |
|    | FILL_DATE                            | VARCHAR2(8 char)   | 同一關係人填表日期                                                                                                                                |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_GUAR_CUSTOMER_MAIN

#### 保證人基本資料主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件主鍵                                                                                                                                   |   |
| PK | CUST_UID                             | VARCHAR2(36 char)  | PK                                                                                                                                       |   |
|    | ID_TYPE                              | VARCHAR2(1 char)   | 身份別                                                                                                                                      |   |
|    | CUSTOMER_ID                          | VARCHAR2(11 char)  | 統一編號                                                                                                                                     |   |
|    | GUAR_TYPE                            | VARCHAR2(3 char)   | 保證人類別                                                                                                                                    |   |
|    | RELATION_TYPE                        | VARCHAR2(2 char)   | 與借款人關係                                                                                                                                   |   |
|    | RELATION_OTHER                       | VARCHAR2(100 char) | 與借款人關係_其他說明                                                                                                                              |   |
|    | CNAME                                | VARCHAR2(50 char)  | 姓名                                                                                                                                       |   |
|    | CURRENCY                             | VARCHAR2(3 char)   | 年往來金額幣別                                                                                                                                  |   |
|    | INCOME                               | NUMBER(18, 3)       | 授信審核表_年收入                                                                                                                                |   |
|    | AGE                                  | INTEGER            | 年齡                                                                                                                                       |   |
|    | HAS_IMMOVABLE                        | VARCHAR2(1 char)   | 授信審核表_有無不動產                                                                                                                              |   |
|    | IS_SET                               | VARCHAR2(1 char)   | 授信審核表_不動產已無設定                                                                                                                            |   |
|    | GUAR_RELATION                        | VARCHAR2(3 char)   | 授信審核表_借款人與連保人關係                                                                                                                          |   |
|    | MASTER_CAREER                        | VARCHAR2(50 char)  | 授信審核表_主要事業                                                                                                                               |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立人員角色                                                                                                                                   |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員員編                                                                                                                                   |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立人員分行別                                                                                                                                  |   |
|    | CREATE_DATE                          | DATE               | 建立時間                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 最後更新人員角色                                                                                                                                 |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 最後更新人員員編                                                                                                                                 |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 最後更新人員分行別                                                                                                                                |   |
|    | LASTUPDATE_DATE                      | DATE               | 最後更新日期                                                                                                                                   |   |
|    | IS_RISK                              | VARCHAR2(1 char)   | 風管記錄                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_IP_ID_TO_CRM

#### 企金審案中借款人統編

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | IP_ID                                | VARCHAR2(11 char)  | 借款人/關係人統編                                                                                                                                |   |
|    | CUST_TYPE                            | VARCHAR2(1 char)   | 統編類別                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_LOAN_CHECK

#### 企金授信審核表主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
| PK | CHECK_UID                            | VARCHAR2(36 char)  | 審核表pk                                                                                                                                    |   |
|    | EXCHANGE_RATE                        | NUMBER(18, 7)       | 美元折算匯率                                                                                                                                   |   |
|    | SOLICIT_ID                           | VARCHAR2(11 char)  | 招攬人員工編號                                                                                                                                  |   |
|    | SOLICIT_NAME                         | VARCHAR2(50 char)  | 招攬人員工姓名                                                                                                                                  |   |
|    | SPREAD_ID                            | VARCHAR2(11 char)  | 推廣人員ID                                                                                                                                   |   |
|    | SPREAD_NAME                          | VARCHAR2(50 char)  | 推廣人員姓名                                                                                                                                   |   |
|    | RECORD_BRANCHID                      | VARCHAR2(4 char)   | 記帳單位                                                                                                                                     |   |
|    | GETWAY                               | VARCHAR2(3 char)   | 得知管道                                                                                                                                     |   |
|    | CURRENCY                             | VARCHAR2(3 char)   | 幣別                                                                                                                                       |   |
|    | CUST_NO                              | VARCHAR2(11 char)  | 戶號                                                                                                                                       |   |
|    | TITLE                                | VARCHAR2(2 char)   | 代表人職稱                                                                                                                                    |   |
|    | TITLE_DESC                           | VARCHAR2(50 char)  | 職稱_其他                                                                                                                                    |   |
|    | BUSINESS_ZIP1                        | VARCHAR2(3 char)   | 公司地址_郵遞區號                                                                                                                                |   |
|    | BUSINESS_ZIP2                        | VARCHAR2(2 char)   | 公司地址_郵遞區號                                                                                                                                |   |
|    | BUSINESS_CT                          | VARCHAR2(10 char)  | 公司地址_縣市代碼                                                                                                                                |   |
|    | BUSINESS_AR                          | VARCHAR2(2 char)   | 公司地址_鄉鎮區代碼                                                                                                                               |   |
|    | BUSINESS_NB                          | VARCHAR2(12 char)  | 公司地址_村里                                                                                                                                  |   |
|    | BUSINESS_NB_CODE                     | VARCHAR2(1 char)   | 公司地址_村里代碼                                                                                                                                |   |
|    | BUSINESS_NO                          | VARCHAR2(200 char) | 公司地址_詳細地址                                                                                                                                |   |
|    | BUSINESS_ND                          | VARCHAR2(3 char)   | 公司地址_鄰                                                                                                                                   |   |
|    | BUSINESS_STATE                       | VARCHAR2(10 char)  | 公司狀況(1: 自有2: 租賃)                                                                                                                           |   |
|    | FACTORY_ZIP1                         | VARCHAR2(3 char)   | 工廠地址_郵遞區號                                                                                                                                |   |
|    | FACTORY_ZIP2                         | VARCHAR2(2 char)   | 工廠地址_郵遞區號                                                                                                                                |   |
|    | FACTORY_CT                           | VARCHAR2(10 char)  | 工廠地址_縣市代碼                                                                                                                                |   |
|    | FACTORY_AR                           | VARCHAR2(2 char)   | 工廠地址_鄉鎮區代碼                                                                                                                               |   |
|    | FACTORY_NB                           | VARCHAR2(12 char)  | 工廠地址_村里                                                                                                                                  |   |
|    | FACTORY_NB_CODE                      | VARCHAR2(1 char)   | 工廠地址_村里代碼                                                                                                                                |   |
|    | FACTORY_NO                           | VARCHAR2(200 char) | 工廠地址_詳細地址                                                                                                                                |   |
|    | FACTORY_ND                           | VARCHAR2(3 char)   | 工廠地址_鄰                                                                                                                                   |   |
|    | FACTORY_STATE                        | VARCHAR2(10 char)  | 工廠狀況(1: 自有2: 租賃)                                                                                                                           |   |
|    | MKT_DATE                             | TIMESTAMP          | 上市櫃日期                                                                                                                                    |   |
|    | CHANGE_DATE                          | TIMESTAMP          | 最近變更日期                                                                                                                                   |   |
|    | INCREASE_DATE                        | TIMESTAMP          | 最近增資日期                                                                                                                                   |   |
|    | CLOSE_PRICE                          | NUMBER(18, 3)       | 收盤價                                                                                                                                      |   |
|    | CLOSE_DATE                           | TIMESTAMP          | 收盤日                                                                                                                                      |   |
|    | DEAL                                 | NUMBER(18, 0)       | 成交量                                                                                                                                      |   |
|    | STOCKHOLDER_PERCENT                  | NUMBER(18, 4)       | 董監持股比例                                                                                                                                   |   |
|    | AVG_AMT_DD                           | NUMBER(18, 3)       | 60日均價                                                                                                                                    |   |
|    | AVG_DD                               | NUMBER(18, 0)       | 60日均量                                                                                                                                    |   |
|    | AVG_AMT_YY                           | NUMBER(18, 3)       | 年均價                                                                                                                                      |   |
|    | AVG_YY                               | NUMBER(18, 0)       | 年均量                                                                                                                                      |   |
|    | SET_PROPERTY                         | NUMBER(18, 4)       | 董監設質                                                                                                                                     |   |
|    | SUBTOTAL                             | NUMBER(18, 3)       | 額度合計                                                                                                                                     |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TCRI                                 | VARCHAR2(1 char)   | TCRI評等                                                                                                                                   |   |
|    | MEETING_YEAR                         | INTEGER            |                                                                                                                                          |   |
|    | MEETING_MONTH                        | INTEGER            |                                                                                                                                          |   |
|    | MEETING_DAY                          | INTEGER            |                                                                                                                                          |   |
|    | MEETING_SEQNO                        | INTEGER            |                                                                                                                                          |   |
|    | BRANCH_FINALLYCHECKLEVEL             | VARCHAR2(10 char)  |                                                                                                                                          |   |
|    | BUSINESS_STATE2                      | VARCHAR2(10 char)  |                                                                                                                                          |   |
|    | FACTORY_STATE2                       | VARCHAR2(10 char)  |                                                                                                                                          |   |
|    | ISRELATED                            | VARCHAR2(1 char)   |                                                                                                                                          |   |
|    | COUNTRY_LEVEL                        | VARCHAR2(1 char)   | 國家風險等級                                                                                                                                   |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_DEBT

#### 徵信報告－資產負債表（一般）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
| PK | REPORT_UID                           | VARCHAR2(36 char)  | 財報pk                                                                                                                                     |   |
| PK | DEBT_UID                             | VARCHAR2(36 char)  | 資產負債表主檔(一般財報和同期比較)                                                                                                                       |   |
|    | START_YY                             | INTEGER            | 年度_起                                                                                                                                     |   |
|    | START_MM                             | INTEGER            | 月份_起                                                                                                                                     |   |
|    | END_YY                               | INTEGER            | 年度_迄                                                                                                                                     |   |
|    | END_MM                               | INTEGER            | 月份_迄                                                                                                                                     |   |
|    | ASSET_TOTAL                          | NUMBER(18, 3)       | 資產總額                                                                                                                                     |   |
|    | NET_TOTAL                            | NUMBER(18, 3)       | 負債及淨值總額                                                                                                                                  |   |
|    | FLOW_ASSET                           | NUMBER(18, 3)       | 流動資產                                                                                                                                     |   |
|    | FLOW_DEBT                            | NUMBER(18, 3)       | 流動負債                                                                                                                                     |   |
|    | CASH                                 | NUMBER(18, 3)       | 現金及銀行存款                                                                                                                                  |   |
|    | SHORT_LOAN                           | NUMBER(18, 3)       | 短期借款                                                                                                                                     |   |
|    | SHORT_INVEST                         | NUMBER(18, 3)       | 短期投資                                                                                                                                     |   |
|    | AP_SHORT_CHECK                       | NUMBER(18, 3)       | 應付短期票券                                                                                                                                   |   |
|    | AR_CHECK                             | NUMBER(18, 3)       | 應收票據淨額                                                                                                                                   |   |
|    | OWNER_DEBT                           | NUMBER(18, 3)       | 股東墊款                                                                                                                                     |   |
|    | AR_CASH                              | NUMBER(18, 3)       | 應收帳款淨額                                                                                                                                   |   |
|    | AP_CHECK_CASH                        | NUMBER(18, 3)       | 應付票據及帳款                                                                                                                                  |   |
|    | OTH_AR_CASH                          | NUMBER(18, 3)       | 其他應收款                                                                                                                                    |   |
|    | OTH_AP_CASH                          | NUMBER(18, 3)       | 其他應付款                                                                                                                                    |   |
|    | STOCK                                | NUMBER(18, 3)       | 存貨                                                                                                                                       |   |
|    | LONG_DEBT_YY                         | NUMBER(18, 3)       | 長期負債(一年內)                                                                                                                                |   |
|    | OTH_FLOW_ASSET                       | NUMBER(18, 3)       | 其他流動資產                                                                                                                                   |   |
|    | OTH_FLOW_DEBT                        | NUMBER(18, 3)       | 其他流動負債                                                                                                                                   |   |
|    | LONG_INVEST                          | NUMBER(18, 3)       | 基金及長期投資                                                                                                                                  |   |
|    | LONG_DEBT                            | NUMBER(18, 3)       | 長期負債                                                                                                                                     |   |
|    | FIX_INVEST                           | NUMBER(18, 3)       | 固定資產                                                                                                                                     |   |
|    | OTH_DEBT                             | NUMBER(18, 3)       | 其他負債                                                                                                                                     |   |
|    | LAND                                 | NUMBER(18, 3)       | 土地及房屋                                                                                                                                    |   |
|    | EQUIP                                | NUMBER(18, 3)       | 機器及設備                                                                                                                                    |   |
|    | RENT_EQUIP                           | NUMBER(18, 3)       | 租賃設備                                                                                                                                     |   |
|    | OTH_EQUIP                            | NUMBER(18, 3)       | 其他設備                                                                                                                                     |   |
|    | PRE_PAY_EQUIP                        | NUMBER(18, 3)       | 預付工程及設備                                                                                                                                  |   |
|    | DEPREC                               | NUMBER(18, 3)       | 減: 折舊準備                                                                                                                                   |   |
|    | DEBT_TOTAL                           | NUMBER(18, 3)       | 負債總額                                                                                                                                     |   |
|    | NET_VALUE                            | NUMBER(18, 3)       | 淨值                                                                                                                                       |   |
|    | CAPITAL                              | NUMBER(18, 3)       | 資本                                                                                                                                       |   |
|    | REC_STOCK                            | NUMBER(18, 3)       | 預收股款                                                                                                                                     |   |
|    | SURPLUS                              | NUMBER(18, 3)       | 公積                                                                                                                                       |   |
|    | ACM_PROFIT                           | NUMBER(18, 3)       | 累積盈虧                                                                                                                                     |   |
|    | OTH_ASSET                            | NUMBER(18, 3)       | 其他資產                                                                                                                                     |   |
|    | HOME_NET                             | NUMBER(18, 3)       | 本期損益                                                                                                                                     |   |
|    | FOW_ASSET_COL                        | VARCHAR2(50 char)  | 流動資產_其他                                                                                                                                  |   |
|    | FOW_ASSET_COL2                       | VARCHAR2(50 char)  | 流動資產_其他2                                                                                                                                 |   |
|    | FOW_ASSET_COL3                       | VARCHAR2(50 char)  | 流動資產_其他3                                                                                                                                 |   |
|    | FLOW_ASSET_AMT                       | NUMBER(18, 3)       | 流動資產_其他(金額)                                                                                                                              |   |
|    | FLOW_ASSET_AMT2                      | NUMBER(18, 3)       | 流動資產_其他2(金額)                                                                                                                             |   |
|    | FLOW_ASSET_AMT3                      | NUMBER(18, 3)       | 流動資產_其他3(金額)                                                                                                                             |   |
|    | LONG_INVEST_COL                      | VARCHAR2(50 char)  | 長期投資_其他                                                                                                                                  |   |
|    | LONG_INVEST_COL2                     | VARCHAR2(50 char)  | 長期投資_其他2                                                                                                                                 |   |
|    | LONG_INVEST_COL3                     | VARCHAR2(50 char)  | 長期投資_其他3                                                                                                                                 |   |
|    | LONG_INVEST_AMT                      | NUMBER(18, 3)       | 長期投資_其他(金額)                                                                                                                              |   |
|    | LONG_INVEST_AMT2                     | NUMBER(18, 3)       | 長期投資_其他2(金額)                                                                                                                             |   |
|    | LONG_INVEST_AMT3                     | NUMBER(18, 3)       | 長期投資_其他3(金額)                                                                                                                             |   |
|    | FIX_ASSET_COL                        | VARCHAR2(50 char)  | 固定資產_其他                                                                                                                                  |   |
|    | FIX_ASSET_COL2                       | VARCHAR2(50 char)  | 固定資產_其他2                                                                                                                                 |   |
|    | FIX_ASSET_COL3                       | VARCHAR2(50 char)  | 固定資產_其他3                                                                                                                                 |   |
|    | FIX_ASSET_AMT                        | NUMBER(18, 3)       | 固定資產_其他(金額)                                                                                                                              |   |
|    | FIX_ASSET_AMT2                       | NUMBER(18, 3)       | 固定資產_其他2(金額)                                                                                                                             |   |
|    | FIX_ASSET_AMT3                       | NUMBER(18, 3)       | 固定資產_其他3(金額)                                                                                                                             |   |
|    | ASSET_COL                            | VARCHAR2(50 char)  | 其他資產_其他                                                                                                                                  |   |
|    | ASSET_COL2                           | VARCHAR2(50 char)  | 其他資產_其他2                                                                                                                                 |   |
|    | ASSET_COL3                           | VARCHAR2(50 char)  | 其他資產_其他3                                                                                                                                 |   |
|    | ASSET_AMT                            | NUMBER(18, 3)       | 其他資產_其他(金額)                                                                                                                              |   |
|    | ASSET_AMT2                           | NUMBER(18, 3)       | 其他資產_其他2(金額)                                                                                                                             |   |
|    | ASSET_AMT3                           | NUMBER(18, 3)       | 其他資產_其他3(金額)                                                                                                                             |   |
|    | FOW_DEBT_COL                         | VARCHAR2(50 char)  | 流動負債_其他                                                                                                                                  |   |
|    | FOW_DEBT_COL2                        | VARCHAR2(50 char)  | 流動負債_其他2                                                                                                                                 |   |
|    | FOW_DEBT_COL3                        | VARCHAR2(50 char)  | 流動負債_其他3                                                                                                                                 |   |
|    | FLOW_DEBT_AMT                        | NUMBER(18, 3)       | 流動負債_其他(金額)                                                                                                                              |   |
|    | FLOW_DEBT_AMT2                       | NUMBER(18, 3)       | 流動負債_其他2(金額)                                                                                                                             |   |
|    | FLOW_DEBT_AMT3                       | NUMBER(18, 3)       | 流動負債_其他3(金額)                                                                                                                             |   |
|    | LONG_DEBT_COL                        | VARCHAR2(50 char)  | 長期負債_其他                                                                                                                                  |   |
|    | LONG_DEBT_COL2                       | VARCHAR2(50 char)  | 長期負債_其他2                                                                                                                                 |   |
|    | LONG_DEBT_COL3                       | VARCHAR2(50 char)  | 長期負債_其他3                                                                                                                                 |   |
|    | LONG_DEBT_AMT                        | NUMBER(18, 3)       | 長期負債_其他(金額)                                                                                                                              |   |
|    | LONG_DEBT_AMT2                       | NUMBER(18, 3)       | 長期負債_其他2(金額)                                                                                                                             |   |
|    | LONG_DEBT_AMT3                       | NUMBER(18, 3)       | 長期負債_其他3(金額)                                                                                                                             |   |
|    | DEBT_COL                             | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL2                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL3                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_AMT                             | NUMBER(18, 3)       | 其它負債_其他(金額)                                                                                                                              |   |
|    | DEBT_AMT2                            | NUMBER(18, 3)       | 其它負債_其他2(金額)                                                                                                                             |   |
|    | DEBT_AMT3                            | NUMBER(18, 3)       | 其它負債_其他3(金額)                                                                                                                             |   |
|    | NET_COL                              | VARCHAR2(50 char)  | 淨值_其他                                                                                                                                    |   |
|    | NET_COL2                             | VARCHAR2(50 char)  | 淨值_其他2                                                                                                                                   |   |
|    | NET_COL3                             | VARCHAR2(50 char)  | 淨值_其他3                                                                                                                                   |   |
|    | NET_AMT                              | NUMBER(18, 3)       | 淨值_其他(金額)                                                                                                                                |   |
|    | NET_AMT2                             | NUMBER(18, 3)       | 淨值_其他2(金額)                                                                                                                               |   |
|    | NET_AMT3                             | NUMBER(18, 3)       | 淨值_其他3(金額)                                                                                                                               |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_DEBT_BUILDING

#### 徵信報告－資產負債表（營建）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
|    | REPORT_UID                           | VARCHAR2(36 char)  | 財報pk                                                                                                                                     |   |
| PK | DEBT_UID                             | VARCHAR2(36 char)  | 資產負債表pk(營造)                                                                                                                              |   |
|    | START_YY                             | INTEGER            | 年度_起                                                                                                                                     |   |
|    | START_MM                             | INTEGER            | 月份_起                                                                                                                                     |   |
|    | END_YY                               | INTEGER            | 年度_迄                                                                                                                                     |   |
|    | END_MM                               | INTEGER            | 月份_迄                                                                                                                                     |   |
|    | ASSET_TOTAL                          | NUMBER(18, 3)       | 資產總額                                                                                                                                     |   |
|    | NET_TOTAL                            | NUMBER(18, 3)       | 負債及淨值總額                                                                                                                                  |   |
|    | FLOW_ASSET                           | NUMBER(18, 3)       | 流動資產                                                                                                                                     |   |
|    | FLOW_DEBT                            | NUMBER(18, 3)       | 流動負債                                                                                                                                     |   |
|    | CASH                                 | NUMBER(18, 3)       | 現金及銀行存款                                                                                                                                  |   |
|    | SHORT_LOAN                           | NUMBER(18, 3)       | 短期借款                                                                                                                                     |   |
|    | SHORT_INVEST                         | NUMBER(18, 3)       | 短期投資                                                                                                                                     |   |
|    | AP_SHORT_CHECK                       | NUMBER(18, 3)       | 應付短期票券                                                                                                                                   |   |
|    | AR_CHECK                             | NUMBER(18, 3)       | 應收票據淨額                                                                                                                                   |   |
|    | OWNER_DEBT                           | NUMBER(18, 3)       | 股東墊款                                                                                                                                     |   |
|    | AR_CASH                              | NUMBER(18, 3)       | 應收帳款淨額                                                                                                                                   |   |
|    | AP_CHECK_CASH                        | NUMBER(18, 3)       | 應付票據及帳款                                                                                                                                  |   |
|    | OTH_AR_CASH                          | NUMBER(18, 3)       | 其他應收款                                                                                                                                    |   |
|    | OTH_AP_CASH                          | NUMBER(18, 3)       | 其他應付款                                                                                                                                    |   |
|    | UNFINISH                             | NUMBER(18, 3)       | 在建工程                                                                                                                                     |   |
|    | LONG_DEBT_YY                         | NUMBER(18, 3)       | 長期負債(一年內)                                                                                                                                |   |
|    | OTH_FLOW_ASSET                       | NUMBER(18, 3)       | 其他流動資產                                                                                                                                   |   |
|    | OTH_FLOW_DEBT                        | NUMBER(18, 3)       | 其他流動負債                                                                                                                                   |   |
|    | LONG_INVEST                          | NUMBER(18, 3)       | 基金及長期投資                                                                                                                                  |   |
|    | LONG_DEBT                            | NUMBER(18, 3)       | 長期負債                                                                                                                                     |   |
|    | FIX_INVEST                           | NUMBER(18, 3)       | 固定資產                                                                                                                                     |   |
|    | OTH_DEBT                             | NUMBER(18, 3)       | 其他負債                                                                                                                                     |   |
|    | LAND                                 | NUMBER(18, 3)       | 土地及房屋                                                                                                                                    |   |
|    | EQUIP                                | NUMBER(18, 3)       | 機器及設備                                                                                                                                    |   |
|    | GROW_EQUIP                           | NUMBER(18, 3)       | 生財器具                                                                                                                                     |   |
|    | OTH_EQUIP                            | NUMBER(18, 3)       | 其他設備                                                                                                                                     |   |
|    | PRE_PAY_BUILD                        | NUMBER(18, 3)       | 預付及未完成工程                                                                                                                                 |   |
|    | DEPREC                               | NUMBER(18, 3)       | 減: 折舊準備                                                                                                                                   |   |
|    | DEBT_TOTAL                           | NUMBER(18, 3)       | 負債總額                                                                                                                                     |   |
|    | NET_VALUE                            | NUMBER(18, 3)       | 淨值                                                                                                                                       |   |
|    | CAPITAL                              | NUMBER(18, 3)       | 資本                                                                                                                                       |   |
|    | REC_STOCK                            | NUMBER(18, 3)       | 預收股款                                                                                                                                     |   |
|    | SURPLUS                              | NUMBER(18, 3)       | 公積                                                                                                                                       |   |
|    | ACM_PROFIT                           | NUMBER(18, 3)       | 累積盈虧                                                                                                                                     |   |
|    | OTH_ASSET                            | NUMBER(18, 3)       | 其他資產                                                                                                                                     |   |
|    | HOME_NET                             | NUMBER(18, 3)       | 本期損益                                                                                                                                     |   |
|    | FOW_ASSET_COL                        | VARCHAR2(50 char)  | 流動資產_其他                                                                                                                                  |   |
|    | FOW_ASSET_COL2                       | VARCHAR2(50 char)  | 流動資產_其他2                                                                                                                                 |   |
|    | FOW_ASSET_COL3                       | VARCHAR2(50 char)  | 流動資產_其他3                                                                                                                                 |   |
|    | FLOW_ASSET_AMT                       | NUMBER(18, 3)       | 流動資產_其他(金額)                                                                                                                              |   |
|    | FLOW_ASSET_AMT2                      | NUMBER(18, 3)       | 流動資產_其他2(金額)                                                                                                                             |   |
|    | FLOW_ASSET_AMT3                      | NUMBER(18, 3)       | 流動資產_其他3(金額)                                                                                                                             |   |
|    | LONG_INVEST_COL                      | VARCHAR2(50 char)  | 長期投資_其他                                                                                                                                  |   |
|    | LONG_INVEST_COL2                     | VARCHAR2(50 char)  | 長期投資_其他2                                                                                                                                 |   |
|    | LONG_INVEST_COL3                     | VARCHAR2(50 char)  | 長期投資_其他3                                                                                                                                 |   |
|    | LONG_INVEST_AMT                      | NUMBER(18, 3)       | 長期投資_其他(金額)                                                                                                                              |   |
|    | LONG_INVEST_AMT2                     | NUMBER(18, 3)       | 長期投資_其他2(金額)                                                                                                                             |   |
|    | LONG_INVEST_AMT3                     | NUMBER(18, 3)       | 長期投資_其他3(金額)                                                                                                                             |   |
|    | FIX_ASSET_COL                        | VARCHAR2(50 char)  | 固定資產_其他                                                                                                                                  |   |
|    | FIX_ASSET_COL2                       | VARCHAR2(50 char)  | 固定資產_其他2                                                                                                                                 |   |
|    | FIX_ASSET_COL3                       | VARCHAR2(50 char)  | 固定資產_其他3                                                                                                                                 |   |
|    | FIX_ASSET_AMT                        | NUMBER(18, 3)       | 固定資產_其他(金額)                                                                                                                              |   |
|    | FIX_ASSET_AMT2                       | NUMBER(18, 3)       | 固定資產_其他2(金額)                                                                                                                             |   |
|    | FIX_ASSET_AMT3                       | NUMBER(18, 3)       | 固定資產_其他3(金額)                                                                                                                             |   |
|    | ASSET_COL                            | VARCHAR2(50 char)  | 其他資產_其他                                                                                                                                  |   |
|    | ASSET_COL2                           | VARCHAR2(50 char)  | 其他資產_其他2                                                                                                                                 |   |
|    | ASSET_COL3                           | VARCHAR2(50 char)  | 其他資產_其他3                                                                                                                                 |   |
|    | ASSET_AMT                            | NUMBER(18, 3)       | 其他資產_其他(金額)                                                                                                                              |   |
|    | ASSET_AMT2                           | NUMBER(18, 3)       | 其他資產_其他2(金額)                                                                                                                             |   |
|    | ASSET_AMT3                           | NUMBER(18, 3)       | 其他資產_其他3(金額)                                                                                                                             |   |
|    | FOW_DEBT_COL                         | VARCHAR2(50 char)  | 流動負債_其他                                                                                                                                  |   |
|    | FOW_DEBT_COL2                        | VARCHAR2(50 char)  | 流動負債_其他2                                                                                                                                 |   |
|    | FOW_DEBT_COL3                        | VARCHAR2(50 char)  | 流動負債_其他3                                                                                                                                 |   |
|    | FLOW_DEBT_AMT                        | NUMBER(18, 3)       | 流動負債_其他(金額)                                                                                                                              |   |
|    | FLOW_DEBT_AMT2                       | NUMBER(18, 3)       | 流動負債_其他2(金額)                                                                                                                             |   |
|    | FLOW_DEBT_AMT3                       | NUMBER(18, 3)       | 流動負債_其他3(金額)                                                                                                                             |   |
|    | LONG_DEBT_COL                        | VARCHAR2(50 char)  | 長期負債_其他                                                                                                                                  |   |
|    | LONG_DEBT_COL2                       | VARCHAR2(50 char)  | 長期負債_其他2                                                                                                                                 |   |
|    | LONG_DEBT_COL3                       | VARCHAR2(50 char)  | 長期負債_其他3                                                                                                                                 |   |
|    | LONG_DEBT_AMT                        | NUMBER(18, 3)       | 長期負債_其他(金額)                                                                                                                              |   |
|    | LONG_DEBT_AMT2                       | NUMBER(18, 3)       | 長期負債_其他2(金額)                                                                                                                             |   |
|    | LONG_DEBT_AMT3                       | NUMBER(18, 3)       | 長期負債_其他3(金額)                                                                                                                             |   |
|    | DEBT_COL                             | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL2                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL3                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_AMT                             | NUMBER(18, 3)       | 其它負債_其他(金額)                                                                                                                              |   |
|    | DEBT_AMT2                            | NUMBER(18, 3)       | 其它負債_其他2(金額)                                                                                                                             |   |
|    | DEBT_AMT3                            | NUMBER(18, 3)       | 其它負債_其他3(金額)                                                                                                                             |   |
|    | NET_COL                              | VARCHAR2(50 char)  | 淨值_其他                                                                                                                                    |   |
|    | NET_COL2                             | VARCHAR2(50 char)  | 淨值_其他2                                                                                                                                   |   |
|    | NET_COL3                             | VARCHAR2(50 char)  | 淨值_其他3                                                                                                                                   |   |
|    | NET_AMT                              | NUMBER(18, 3)       | 淨值_其他(金額)                                                                                                                                |   |
|    | NET_AMT2                             | NUMBER(18, 3)       | 淨值_其他2(金額)                                                                                                                               |   |
|    | NET_AMT3                             | NUMBER(18, 3)       | 淨值_其他3(金額)                                                                                                                               |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_DEBT_RENT

#### 徵信報告－資產負債表（租賃）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
|    | REPORT_UID                           | VARCHAR2(36 char)  | 財報pk                                                                                                                                     |   |
| PK | DEBT_UID                             | VARCHAR2(36 char)  | 資產負債表主檔(租賃)                                                                                                                              |   |
|    | START_YY                             | INTEGER            | 年度_起                                                                                                                                     |   |
|    | START_MM                             | INTEGER            | 月份_起                                                                                                                                     |   |
|    | END_YY                               | INTEGER            | 年度_迄                                                                                                                                     |   |
|    | END_MM                               | INTEGER            | 月份_迄                                                                                                                                     |   |
|    | ASSET_TOTAL                          | NUMBER(18, 3)       | 資產總額                                                                                                                                     |   |
|    | NET_TOTAL                            | NUMBER(18, 3)       | 負債及淨值總額                                                                                                                                  |   |
|    | FLOW_ASSET                           | NUMBER(18, 3)       | 流動資產                                                                                                                                     |   |
|    | FLOW_DEBT                            | NUMBER(18, 3)       | 流動負債                                                                                                                                     |   |
|    | CASH                                 | NUMBER(18, 3)       | 現金及銀行存款                                                                                                                                  |   |
|    | SHORT_LOAN                           | NUMBER(18, 3)       | 短期借款                                                                                                                                     |   |
|    | SHORT_INVEST                         | NUMBER(18, 3)       | 短期投資                                                                                                                                     |   |
|    | AP_SHORT_CHECK                       | NUMBER(18, 3)       | 應付短期票券                                                                                                                                   |   |
|    | AR_CASH                              | NUMBER(18, 3)       | 應收帳款淨額                                                                                                                                   |   |
|    | AP_CHECK_CASH                        | NUMBER(18, 3)       | 應付票據及帳款                                                                                                                                  |   |
|    | AR_SALE                              | NUMBER(18, 3)       | 應收分期銷貨款                                                                                                                                  |   |
|    | AP_FEE                               | NUMBER(18, 3)       | 應付費用                                                                                                                                     |   |
|    | AR_RENT                              | NUMBER(18, 3)       | 應收租賃款                                                                                                                                    |   |
|    | AP_INCOME                            | NUMBER(18, 3)       | 應付所得                                                                                                                                     |   |
|    | DEBT                                 | NUMBER(18, 3)       | 減: 備抵呆帳                                                                                                                                   |   |
|    | PRE_RECEIVE                          | NUMBER(18, 3)       | 預收款項                                                                                                                                     |   |
|    | STOCK                                | NUMBER(18, 3)       | 存貨                                                                                                                                       |   |
|    | LONG_DEBT_YY                         | NUMBER(18, 3)       | 長期負債(一年內)                                                                                                                                |   |
|    | OTH_CREDIT                           | NUMBER(18, 3)       | 其它金融資產                                                                                                                                   |   |
|    | DEPOSIT                              | NUMBER(18, 3)       | 存入保證金                                                                                                                                    |   |
|    | PRE_PAY                              | NUMBER(18, 3)       | 預付款項                                                                                                                                     |   |
|    | OTH_FLOW_DEBT                        | NUMBER(18, 3)       | 其他流動負債                                                                                                                                   |   |
|    | OTH_FLOW_ASSET                       | NUMBER(18, 3)       | 其他流動資產                                                                                                                                   |   |
|    | LONG_INVEST                          | NUMBER(18, 3)       | 基金及長期投資                                                                                                                                  |   |
|    | LONG_DEBT                            | NUMBER(18, 3)       | 長期負債                                                                                                                                     |   |
|    | LONG_LOAN                            | NUMBER(18, 3)       | 長期借款                                                                                                                                     |   |
|    | OTH_CREDIT_UNFLOW                    | NUMBER(18, 3)       | 其它金融資產-非流動                                                                                                                               |   |
|    | AP_BOND                              | NUMBER(18, 3)       | 應付公司債                                                                                                                                    |   |
|    | AP_LONG_CHECK                        | NUMBER(18, 3)       | 應付長期票券                                                                                                                                   |   |
|    | OTH_LONG_DEBT                        | NUMBER(18, 3)       | 其他長期負債                                                                                                                                   |   |
|    | FIX_INVEST                           | NUMBER(18, 3)       | 固定資產                                                                                                                                     |   |
|    | OTH_DEBT                             | NUMBER(18, 3)       | 其他負債                                                                                                                                     |   |
|    | LAND                                 | NUMBER(18, 3)       | 土地及房屋                                                                                                                                    |   |
|    | BUILD                                | NUMBER(18, 3)       | 房屋及建築                                                                                                                                    |   |
|    | MACHINE                              | NUMBER(18, 3)       | 機器設備                                                                                                                                     |   |
|    | SHIPPING                             | NUMBER(18, 3)       | 運輸設備                                                                                                                                     |   |
|    | OFFICE                               | NUMBER(18, 3)       | 辦公設備                                                                                                                                     |   |
|    | RENT_EQUIP                           | NUMBER(18, 3)       | 租賃設備                                                                                                                                     |   |
|    | RENT_IMPROVE                         | NUMBER(18, 3)       | 租賃改良                                                                                                                                     |   |
|    | INCREASE                             | NUMBER(18, 3)       | 固定資產重估增值                                                                                                                                 |   |
|    | PRE_PAY_BUILD                        | NUMBER(18, 3)       | 預付房地款                                                                                                                                    |   |
|    | DEPREC                               | NUMBER(18, 3)       | 減: 各項累積折舊                                                                                                                                 |   |
|    | DEBT_TOTAL                           | NUMBER(18, 3)       | 負債總額                                                                                                                                     |   |
|    | NET_VALUE                            | NUMBER(18, 3)       | 淨值                                                                                                                                       |   |
|    | CAPITAL_STOCK                        | NUMBER(18, 3)       | 股本                                                                                                                                       |   |
|    | REC_STOCK                            | NUMBER(18, 3)       | 預收股款                                                                                                                                     |   |
|    | TS_STOCK                             | NUMBER(18, 3)       | 庫藏股                                                                                                                                      |   |
|    | SURPLUS                              | NUMBER(18, 3)       | 資本公積                                                                                                                                     |   |
|    | ACM_PROFIT                           | NUMBER(18, 3)       | 累積盈虧                                                                                                                                     |   |
|    | ADJUST_ITEM                          | NUMBER(18, 3)       | 淨值及其他調整項目                                                                                                                                |   |
|    | HOME_NET                             | NUMBER(18, 3)       | 本期損益                                                                                                                                     |   |
|    | OTH_ASSET                            | NUMBER(18, 3)       | 其他資產                                                                                                                                     |   |
|    | LIMIT_NET                            | NUMBER(18, 3)       | 受限資產                                                                                                                                     |   |
|    | FOW_ASSET_COL                        | VARCHAR2(50 char)  | 流動資產_其他                                                                                                                                  |   |
|    | FOW_ASSET_COL2                       | VARCHAR2(50 char)  | 流動資產_其他2                                                                                                                                 |   |
|    | FOW_ASSET_COL3                       | VARCHAR2(50 char)  | 流動資產_其他3                                                                                                                                 |   |
|    | FLOW_ASSET_AMT                       | NUMBER(18, 3)       | 流動資產_其他(金額)                                                                                                                              |   |
|    | FLOW_ASSET_AMT2                      | NUMBER(18, 3)       | 流動資產_其他2(金額)                                                                                                                             |   |
|    | FLOW_ASSET_AMT3                      | NUMBER(18, 3)       | 流動資產_其他3(金額)                                                                                                                             |   |
|    | LONG_INVEST_COL                      | VARCHAR2(50 char)  | 長期投資_其他                                                                                                                                  |   |
|    | LONG_INVEST_COL2                     | VARCHAR2(50 char)  | 長期投資_其他2                                                                                                                                 |   |
|    | LONG_INVEST_COL3                     | VARCHAR2(50 char)  | 長期投資_其他3                                                                                                                                 |   |
|    | LONG_INVEST_AMT                      | NUMBER(18, 3)       | 長期投資_其他(金額)                                                                                                                              |   |
|    | LONG_INVEST_AMT2                     | NUMBER(18, 3)       | 長期投資_其他2(金額)                                                                                                                             |   |
|    | LONG_INVEST_AMT3                     | NUMBER(18, 3)       | 長期投資_其他3(金額)                                                                                                                             |   |
|    | FIX_ASSET_COL                        | VARCHAR2(50 char)  | 固定資產_其他                                                                                                                                  |   |
|    | FIX_ASSET_COL2                       | VARCHAR2(50 char)  | 固定資產_其他2                                                                                                                                 |   |
|    | FIX_ASSET_COL3                       | VARCHAR2(50 char)  | 固定資產_其他3                                                                                                                                 |   |
|    | FIX_ASSET_AMT                        | NUMBER(18, 3)       | 固定資產_其他(金額)                                                                                                                              |   |
|    | FIX_ASSET_AMT2                       | NUMBER(18, 3)       | 固定資產_其他2(金額)                                                                                                                             |   |
|    | FIX_ASSET_AMT3                       | NUMBER(18, 3)       | 固定資產_其他3(金額)                                                                                                                             |   |
|    | ASSET_COL                            | VARCHAR2(50 char)  | 其他資產_其他                                                                                                                                  |   |
|    | ASSET_COL2                           | VARCHAR2(50 char)  | 其他資產_其他2                                                                                                                                 |   |
|    | ASSET_COL3                           | VARCHAR2(50 char)  | 其他資產_其他3                                                                                                                                 |   |
|    | ASSET_AMT                            | NUMBER(18, 3)       | 其他資產_其他(金額)                                                                                                                              |   |
|    | ASSET_AMT2                           | NUMBER(18, 3)       | 其他資產_其他2(金額)                                                                                                                             |   |
|    | ASSET_AMT3                           | NUMBER(18, 3)       | 其他資產_其他3(金額)                                                                                                                             |   |
|    | FOW_DEBT_COL                         | VARCHAR2(50 char)  | 流動負債_其他                                                                                                                                  |   |
|    | FOW_DEBT_COL2                        | VARCHAR2(50 char)  | 流動負債_其他2                                                                                                                                 |   |
|    | FOW_DEBT_COL3                        | VARCHAR2(50 char)  | 流動負債_其他3                                                                                                                                 |   |
|    | FLOW_DEBT_AMT                        | NUMBER(18, 3)       | 流動負債_其他(金額)                                                                                                                              |   |
|    | FLOW_DEBT_AMT2                       | NUMBER(18, 3)       | 流動負債_其他2(金額)                                                                                                                             |   |
|    | FLOW_DEBT_AMT3                       | NUMBER(18, 3)       | 流動負債_其他3(金額)                                                                                                                             |   |
|    | LONG_DEBT_COL                        | VARCHAR2(50 char)  | 長期負債_其他                                                                                                                                  |   |
|    | LONG_DEBT_COL2                       | VARCHAR2(50 char)  | 長期負債_其他2                                                                                                                                 |   |
|    | LONG_DEBT_COL3                       | VARCHAR2(50 char)  | 長期負債_其他3                                                                                                                                 |   |
|    | LONG_DEBT_AMT                        | NUMBER(18, 3)       | 長期負債_其他(金額)                                                                                                                              |   |
|    | LONG_DEBT_AMT2                       | NUMBER(18, 3)       | 長期負債_其他2(金額)                                                                                                                             |   |
|    | LONG_DEBT_AMT3                       | NUMBER(18, 3)       | 長期負債_其他3(金額)                                                                                                                             |   |
|    | DEBT_COL                             | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL2                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL3                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_AMT                             | NUMBER(18, 3)       | 其它負債_其他(金額)                                                                                                                              |   |
|    | DEBT_AMT2                            | NUMBER(18, 3)       | 其它負債_其他2(金額)                                                                                                                             |   |
|    | DEBT_AMT3                            | NUMBER(18, 3)       | 其它負債_其他3(金額)                                                                                                                             |   |
|    | NET_COL                              | VARCHAR2(50 char)  | 淨值_其他                                                                                                                                    |   |
|    | NET_COL2                             | VARCHAR2(50 char)  | 淨值_其他2                                                                                                                                   |   |
|    | NET_COL3                             | VARCHAR2(50 char)  | 淨值_其他3                                                                                                                                   |   |
|    | NET_AMT                              | NUMBER(18, 3)       | 淨值_其他(金額)                                                                                                                                |   |
|    | NET_AMT2                             | NUMBER(18, 3)       | 淨值_其他2(金額)                                                                                                                               |   |
|    | NET_AMT3                             | NUMBER(18, 3)       | 淨值_其他3(金額)                                                                                                                               |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_DEBT_STOCK

#### 徵信報告－資產負債表（證券）

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
|    | REPORT_UID                           | VARCHAR2(36 char)  | 財報pk                                                                                                                                     |   |
| PK | DEBT_UID                             | VARCHAR2(36 char)  | 資產負債表pk(證卷)                                                                                                                              |   |
|    | START_YY                             | INTEGER            | 年度_起                                                                                                                                     |   |
|    | START_MM                             | INTEGER            | 月份_迄                                                                                                                                     |   |
|    | END_YY                               | INTEGER            | 年度_迄                                                                                                                                     |   |
|    | END_MM                               | INTEGER            | 月份_迄                                                                                                                                     |   |
|    | ASSET_TOTAL                          | NUMBER(18, 3)       | 資產總額                                                                                                                                     |   |
|    | NET_TOTAL                            | NUMBER(18, 3)       | 負債及淨值總額                                                                                                                                  |   |
|    | FLOW_ASSET                           | NUMBER(18, 3)       | 流動資產                                                                                                                                     |   |
|    | FLOW_DEBT                            | NUMBER(18, 3)       | 流動負債                                                                                                                                     |   |
|    | CASH                                 | NUMBER(18, 3)       | 現金及銀行存款                                                                                                                                  |   |
|    | SHORT_LOAN                           | NUMBER(18, 3)       | 短期借款                                                                                                                                     |   |
|    | BANK_ASSET                           | NUMBER(18, 3)       | 公平價值變動列入損益之金融資產                                                                                                                          |   |
|    | AP_SHORT_CHECK                       | NUMBER(18, 3)       | 應付短期票券                                                                                                                                   |   |
|    | BOND_INVEST                          | NUMBER(18, 3)       | 附買回債券投資                                                                                                                                  |   |
|    | BOND_DEBT                            | NUMBER(18, 3)       | 附買回債券負債                                                                                                                                  |   |
|    | AR_BR                                | NUMBER(18, 3)       | 應收證券融資款                                                                                                                                  |   |
|    | BANK_DEBT                            | NUMBER(18, 3)       | 公平價值變動列入損益之金融負債                                                                                                                          |   |
|    | AR_STOCK_GUAR                        | NUMBER(18, 3)       | 應收轉融通擔保價款                                                                                                                                |   |
|    | STOCK_GUAR_AMT                       | NUMBER(18, 3)       | 融券存入保證金                                                                                                                                  |   |
|    | DEPOSIT                              | NUMBER(18, 3)       | 客戶保證金導戶                                                                                                                                  |   |
|    | AP_STOCK_GUAR                        | NUMBER(18, 3)       | 應付融券擔保價款                                                                                                                                 |   |
|    | AR                                   | NUMBER(18, 3)       | 應收帳款                                                                                                                                     |   |
|    | FUTURE_RIGHT                         | NUMBER(18, 3)       | 期貨交易人權益                                                                                                                                  |   |
|    | PRE_PAY_OTH                          | NUMBER(18, 3)       | 預付款項及其他                                                                                                                                  |   |
|    | AP                                   | NUMBER(18, 3)       | 應付帳款                                                                                                                                     |   |
|    | OTH_FLOW_ASSET                       | NUMBER(18, 3)       | 其他流動資產                                                                                                                                   |   |
|    | LONG_DEBT_YY                         | NUMBER(18, 3)       | 長期負債(ㄧ年內)                                                                                                                                |   |
|    | OTH_FLOW_DEBT                        | NUMBER(18, 3)       | 其他流動負債                                                                                                                                   |   |
|    | LONG_INVEST                          | NUMBER(18, 3)       | 基金及長期投資                                                                                                                                  |   |
|    | LONG_DEBT                            | NUMBER(18, 3)       | 長期負債                                                                                                                                     |   |
|    | FIX_INVEST                           | NUMBER(18, 3)       | 固定資產                                                                                                                                     |   |
|    | OTH_DEBT                             | NUMBER(18, 3)       | 其他負債                                                                                                                                     |   |
|    | LAND                                 | NUMBER(18, 3)       | 土地及房屋                                                                                                                                    |   |
|    | BUILDING                             | NUMBER(18, 3)       | 建物                                                                                                                                       |   |
|    | PC                                   | NUMBER(18, 3)       | 電腦及器具設備                                                                                                                                  |   |
|    | RENT                                 | NUMBER(18, 3)       | 租賃改良                                                                                                                                     |   |
|    | PRE_PAY_EQUIP                        | NUMBER(18, 3)       | 預付設備款                                                                                                                                    |   |
|    | DEPREC                               | NUMBER(18, 3)       | 減: 折舊準備                                                                                                                                   |   |
|    | DEBT_TOTAL                           | NUMBER(18, 3)       | 負債總額                                                                                                                                     |   |
|    | NET_VALUE                            | NUMBER(18, 3)       | 淨值                                                                                                                                       |   |
|    | CAPITAL                              | NUMBER(18, 3)       | 資本                                                                                                                                       |   |
|    | TS_STOCK                             | NUMBER(18, 3)       | 庫藏股                                                                                                                                      |   |
|    | SURPLUS                              | NUMBER(18, 3)       | 公積                                                                                                                                       |   |
|    | OTH_ASSET                            | NUMBER(18, 3)       | 其他資產                                                                                                                                     |   |
|    | LIMIT_ASSET                          | NUMBER(18, 3)       | 受限制資產                                                                                                                                    |   |
|    | ACM_PROFIT                           | NUMBER(18, 3)       | 累積盈虧                                                                                                                                     |   |
|    | HOME_NET                             | NUMBER(18, 3)       | 本期損益                                                                                                                                     |   |
|    | FOW_ASSET_COL                        | VARCHAR2(50 char)  | 流動資產_其他                                                                                                                                  |   |
|    | FOW_ASSET_COL2                       | VARCHAR2(50 char)  | 流動資產_其他2                                                                                                                                 |   |
|    | FOW_ASSET_COL3                       | VARCHAR2(50 char)  | 流動資產_其他3                                                                                                                                 |   |
|    | FLOW_ASSET_AMT                       | NUMBER(18, 3)       | 流動資產_其他(金額)                                                                                                                              |   |
|    | FLOW_ASSET_AMT2                      | NUMBER(18, 3)       | 流動資產_其他2(金額)                                                                                                                             |   |
|    | FLOW_ASSET_AMT3                      | NUMBER(18, 3)       | 流動資產_其他3(金額)                                                                                                                             |   |
|    | LONG_INVEST_COL                      | VARCHAR2(50 char)  | 長期投資_其他                                                                                                                                  |   |
|    | LONG_INVEST_COL2                     | VARCHAR2(50 char)  | 長期投資_其他2                                                                                                                                 |   |
|    | LONG_INVEST_COL3                     | VARCHAR2(50 char)  | 長期投資_其他3                                                                                                                                 |   |
|    | LONG_INVEST_AMT                      | NUMBER(18, 3)       | 長期投資_其他(金額)                                                                                                                              |   |
|    | LONG_INVEST_AMT2                     | NUMBER(18, 3)       | 長期投資_其他2(金額)                                                                                                                             |   |
|    | LONG_INVEST_AMT3                     | NUMBER(18, 3)       | 長期投資_其他3(金額)                                                                                                                             |   |
|    | FIX_ASSET_COL                        | VARCHAR2(50 char)  | 固定資產_其他                                                                                                                                  |   |
|    | FIX_ASSET_COL2                       | VARCHAR2(50 char)  | 固定資產_其他2                                                                                                                                 |   |
|    | FIX_ASSET_COL3                       | VARCHAR2(50 char)  | 固定資產_其他3                                                                                                                                 |   |
|    | FIX_ASSET_AMT                        | NUMBER(18, 3)       | 固定資產_其他(金額)                                                                                                                              |   |
|    | FIX_ASSET_AMT2                       | NUMBER(18, 3)       | 固定資產_其他2(金額)                                                                                                                             |   |
|    | FIX_ASSET_AMT3                       | NUMBER(18, 3)       | 固定資產_其他3(金額)                                                                                                                             |   |
|    | ASSET_COL                            | VARCHAR2(50 char)  | 其他資產_其他                                                                                                                                  |   |
|    | ASSET_COL2                           | VARCHAR2(50 char)  | 其他資產_其他2                                                                                                                                 |   |
|    | ASSET_COL3                           | VARCHAR2(50 char)  | 其他資產_其他3                                                                                                                                 |   |
|    | ASSET_AMT                            | NUMBER(18, 3)       | 其他資產_其他(金額)                                                                                                                              |   |
|    | ASSET_AMT2                           | NUMBER(18, 3)       | 其他資產_其他2(金額)                                                                                                                             |   |
|    | ASSET_AMT3                           | NUMBER(18, 3)       | 其他資產_其他3(金額)                                                                                                                             |   |
|    | FOW_DEBT_COL                         | VARCHAR2(50 char)  | 流動負債_其他                                                                                                                                  |   |
|    | FOW_DEBT_COL2                        | VARCHAR2(50 char)  | 流動負債_其他2                                                                                                                                 |   |
|    | FOW_DEBT_COL3                        | VARCHAR2(50 char)  | 流動負債_其他3                                                                                                                                 |   |
|    | FLOW_DEBT_AMT                        | NUMBER(18, 3)       | 流動負債_其他(金額)                                                                                                                              |   |
|    | FLOW_DEBT_AMT2                       | NUMBER(18, 3)       | 流動負債_其他2(金額)                                                                                                                             |   |
|    | FLOW_DEBT_AMT3                       | NUMBER(18, 3)       | 流動負債_其他3(金額)                                                                                                                             |   |
|    | LONG_DEBT_COL                        | VARCHAR2(50 char)  | 長期負債_其他                                                                                                                                  |   |
|    | LONG_DEBT_COL2                       | VARCHAR2(50 char)  | 長期負債_其他2                                                                                                                                 |   |
|    | LONG_DEBT_COL3                       | VARCHAR2(50 char)  | 長期負債_其他3                                                                                                                                 |   |
|    | LONG_DEBT_AMT                        | NUMBER(18, 3)       | 長期負債_其他(金額)                                                                                                                              |   |
|    | LONG_DEBT_AMT2                       | NUMBER(18, 3)       | 長期負債_其他2(金額)                                                                                                                             |   |
|    | LONG_DEBT_AMT3                       | NUMBER(18, 3)       | 長期負債_其他3(金額)                                                                                                                             |   |
|    | DEBT_COL                             | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL2                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_COL3                            | VARCHAR2(50 char)  | 其它負債_其他                                                                                                                                  |   |
|    | DEBT_AMT                             | NUMBER(18, 3)       | 其它負債_其他(金額)                                                                                                                              |   |
|    | DEBT_AMT2                            | NUMBER(18, 3)       | 其它負債_其他2(金額)                                                                                                                             |   |
|    | DEBT_AMT3                            | NUMBER(18, 3)       | 其它負債_其他3(金額)                                                                                                                             |   |
|    | NET_COL                              | VARCHAR2(50 char)  | 淨值_其他                                                                                                                                    |   |
|    | NET_COL2                             | VARCHAR2(50 char)  | 淨值_其他2                                                                                                                                   |   |
|    | NET_COL3                             | VARCHAR2(50 char)  | 淨值_其他3                                                                                                                                   |   |
|    | NET_AMT                              | NUMBER(18, 3)       | 淨值_其他(金額)                                                                                                                                |   |
|    | NET_AMT2                             | NUMBER(18, 3)       | 淨值_其他2(金額)                                                                                                                               |   |
|    | NET_AMT3                             | NUMBER(18, 3)       | 淨值_其他3(金額)                                                                                                                               |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_INOUT

#### 徵信報告進銷貨狀況檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件主鍵                                                                                                                                   |   |
|    | CREDIT_DOC_NO_C                      | VARCHAR2(36 char)  | 徵信報告pk                                                                                                                                   |   |
|    | INOUT_UID                            | VARCHAR2(36 char)  | 進銷貨主鍵                                                                                                                                    |   |
|    | INOUT_TYPE                           | VARCHAR2(1 char)   | 進銷貨類別                                                                                                                                    |   |
|    | MATERIAL                             | VARCHAR2(200 char) | 原料名稱                                                                                                                                     |   |
|    | BUYER                                | VARCHAR2(200 char) | 買方或賣方名稱                                                                                                                                  |   |
|    | INOUT_CURRENCY                       | VARCHAR2(3 char)   | 年往來金額幣別                                                                                                                                  |   |
|    | INOUT_AMOUNT                         | NUMBER(18, 3)       | 年往來金額                                                                                                                                    |   |
|    | IS_RELATION                          | VARCHAR2(1 char)   | 是否為關係人                                                                                                                                   |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | DATE               | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | DATE               | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_MAIN

#### 徵信報告－基本資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
| PK | CREDIT_DOC_NO_C                      | VARCHAR2(36 char)  | 徵信報告pk                                                                                                                                   |   |
|    | LOAN_BASE_DATE                       | TIMESTAMP          | 借款人於本行授信基準日                                                                                                                              |   |
|    | LOAN_START_DATE                      | TIMESTAMP          | 借款人於本行授信初次往來日                                                                                                                            |   |
|    | LOAN_CURRENCY                        | VARCHAR2(3 char)   | 借款人於本行授信初次往來金額_幣別                                                                                                                        |   |
|    | LOAN_START_AMT                       | NUMBER(18, 3)       | 借款人於本行授信初次往來金額                                                                                                                           |   |
|    | SAVE_BASE_DATE                       | TIMESTAMP          | 借款人、關係戶於本行存款往來基準日                                                                                                                        |   |
|    | SAVE_START_DATE                      | TIMESTAMP          | 借款人、關係戶於本行存款往來初次往來日                                                                                                                      |   |
|    | INOUT_YEAR                           | INTEGER            | 營業概況年度                                                                                                                                   |   |
|    | MASTER_MATERIAL                      | VARCHAR2(200 char) | 主要原料                                                                                                                                     |   |
|    | MATERIAL_RATE                        | NUMBER(18, 4)       | 原料佔銷貨成本之比率                                                                                                                               |   |
|    | MASTER_PRDT                          | VARCHAR2(200 char) | 主要產品                                                                                                                                     |   |
|    | PRDT_RATE                            | NUMBER(18, 4)       | 產品佔銷貨成本之比率                                                                                                                               |   |
|    | FINANCE_DESC                         | VARCHAR2(10 char)  | 財務比率說明                                                                                                                                   |   |
|    | CIRCLE_DESC                          | VARCHAR2(10 char)  | A/R週轉率、存貨週轉率說明                                                                                                                           |   |
|    | TRANS_DESC                           | VARCHAR2(10 char)  | 關係人交易分析說明                                                                                                                                |   |
|    | INVEST_DESC                          | VARCHAR2(10 char)  | 長、短期投資分析說明                                                                                                                               |   |
|    | CASH_DESC                            | VARCHAR2(10 char)  | 現金流量分析說明                                                                                                                                 |   |
|    | LOAN_DESC                            | VARCHAR2(10 char)  | 集團戶、關係戶於本行授信往來情形                                                                                                                         |   |
|    | CREDIT_DESC                          | VARCHAR2(10 char)  | 內部或外部信用評等                                                                                                                                |   |
|    | EPS_DESC                             | VARCHAR2(10 char)  | 近三年營收／稅前純益／EPS                                                                                                                           |   |
|    | CAPITAL_DESC                         | VARCHAR2(10 char)  | 資本額、淨值、負債比率及金融負債情形                                                                                                                       |   |
|    | INDUSTRY_DESC                        | VARCHAR2(10 char)  | 行業別營運展望                                                                                                                                  |   |
|    | EVALUATE_DESC                        | VARCHAR2(10 char)  | 綜合評估                                                                                                                                     |   |
|    | IS_NEGATIVE                          | VARCHAR2(1 char)   | 重大負面消息有無(0: 無1: 有)                                                                                                                         |   |
|    | NEGATIVE_DESC                        | VARCHAR2(10 char)  | 重大負面消息_說明                                                                                                                                |   |
|    | IS_PERSONAL                          | VARCHAR2(1 char)   | 重要人事異動有無(0: 無1: 有)                                                                                                                         |   |
|    | PERSONAL_DESC                        | VARCHAR2(10 char)  | 重要人事異動                                                                                                                                   |   |
|    | BORROWER_DESC                        | VARCHAR2(10 char)  | 借款人分析                                                                                                                                    |   |
|    | USEWAY_DESC                          | VARCHAR2(10 char)  | 借款用途分析                                                                                                                                   |   |
|    | PAYSOURCE_DESC                       | VARCHAR2(10 char)  | 還款來源分析                                                                                                                                   |   |
|    | DEBT_DESC                            | VARCHAR2(10 char)  | 債權保障分析                                                                                                                                   |   |
|    | FEATURE_DESC                         | VARCHAR2(10 char)  | 授信展望分析                                                                                                                                   |   |
|    | REPORT_VERSION                       | VARCHAR2(1 char)   | 財報版本(1: 一般2: 證卷3: 營造4: 租賃)                                                                                                                   |   |
|    | JCIC_YY                              | INTEGER            | 借款人、負責人聯徵中心查詢授信情形(年)                                                                                                                     |   |
|    | JCIC_MM                              | INTEGER            | 借款人、負責人聯徵中心查詢授信情形(月)                                                                                                                     |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | SUBTOTAL                             | NUMBER(18, 3)       | 本行授信往來額度合計                                                                                                                               |   |
|    | CFRSK_MARK                           | VARCHAR2(1 char)   |                                                                                                                                          |   |
|    | REPORT_VERSION_SAME_PERIOD           | VARCHAR2(1 char)   |                                                                                                                                          |   |
|    | LF                                   | VARCHAR2(1 char)   |                                                                                                                                          |   |
|    | IS_EQUATORPRINCIPLES                 | VARCHAR2(1 char)   | 是否符合赤道原則                                                                                                                                 |   |
|    | EQUATORPRINCIPLES_DESC               | VARCHAR2(10 char)  | 違反內容及評估承作理由                                                                                                                              |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_PROFIT

#### 徵信報告－損益表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件pk                                                                                                                                   |   |
|    | DEBT_UID                             | VARCHAR2(36 char)  | 資產負債表主檔                                                                                                                                  |   |
| PK | PROFIT_UID                           | VARCHAR2(36 char)  | 損益表pk                                                                                                                                    |   |
|    | OPRT_INCOME                          | NUMBER(18, 3)       | 營業收入                                                                                                                                     |   |
|    | OPRT_COST                            | NUMBER(18, 3)       | 營業成本                                                                                                                                     |   |
|    | OPRT_MARGIN                          | NUMBER(18, 3)       | 營業毛利                                                                                                                                     |   |
|    | MANAGE_FEE                           | NUMBER(18, 3)       | 管銷費用或營業費用                                                                                                                                |   |
|    | OPRT_PROFIT                          | NUMBER(18, 3)       | 營業利益                                                                                                                                     |   |
|    | OUT_INCOME                           | NUMBER(18, 3)       | 營業外收入                                                                                                                                    |   |
|    | INTEREST                             | NUMBER(18, 3)       | 利息支出                                                                                                                                     |   |
|    | OTH_FEE                              | NUMBER(18, 3)       | 其他費用及損失                                                                                                                                  |   |
|    | BEFORE_TAX_NET                       | NUMBER(18, 3)       | 稅前淨利                                                                                                                                     |   |
|    | TAX_FEE                              | NUMBER(18, 3)       | 營利事業所得稅                                                                                                                                  |   |
|    | AFTER_TAX_NET                        | NUMBER(18, 3)       | 稅後淨利                                                                                                                                     |   |
|    | EPS                                  | NUMBER(18, 3)       | EPS                                                                                                                                      |   |
|    | PER_STOCK_AMT                        | NUMBER(18, 3)       | 每股面額                                                                                                                                     |   |
|    | REL_SALE_AMT                         | NUMBER(18, 3)       | 關係人銷貨金額                                                                                                                                  |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | RATE_OF_REVENUE_GROWTH_OVER_LASTYEAR | NUMBER(7, 2)        |                                                                                                                                          |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_COMP_REPORT

#### 徵信報告－財報檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  |                                                                                                                                          |   |
|    | CREDIT_DOC_NO_C                      | VARCHAR2(36 char)  | 徵信報告pk                                                                                                                                   |   |
| PK | REPORT_UID                           | VARCHAR2(36 char)  | 財報pk                                                                                                                                     |   |
|    | TYPE                                 | VARCHAR2(1 char)   | 判斷財報是否為同期比較                                                                                                                              |   |
|    | CASE_TYPE                            | VARCHAR2(1 char)   | 財報類型(1: 單一2: 合併)                                                                                                                           |   |
|    | PROMISE_DESC                         | VARCHAR2(10 char)  | 或有負債或承諾事項說明                                                                                                                              |   |
|    | ADJUST_DESC                          | VARCHAR2(10 char)  | 調整說明                                                                                                                                     |   |
|    | COMPARE                              | VARCHAR2(1 char)   | 依最近一年xxx營收與前一年度同期比較(1:401表2: 公開資訊)                                                                                                        |   |
|    | COMPARE_YY                           | INTEGER            | 年                                                                                                                                        |   |
|    | COMPARE_MM                           | INTEGER            | 起月                                                                                                                                       |   |
|    | COMPARE_MM2                          | INTEGER            | 迄月                                                                                                                                       |   |
|    | CURRENCY                             | VARCHAR2(3 char)   | 幣別                                                                                                                                       |   |
|    | INCOME                               | NUMBER(18, 3)       | 營收                                                                                                                                       |   |
|    | PREV_INCOME                          | NUMBER(18, 3)       | 前一年度同期營收                                                                                                                                 |   |
|    | YY_RATE                              | NUMBER(18, 4)       | 年增減率                                                                                                                                     |   |
|    | BUSINESS_RANGE                       | VARCHAR2(200 char) | 營業範圍                                                                                                                                     |   |
|    | FLOW                                 | NUMBER(18, 3)       | 流動比率                                                                                                                                     |   |
|    | SPEED                                | NUMBER(18, 3)       | 速動比率                                                                                                                                     |   |
|    | RATE_GUAR                            | NUMBER(18, 3)       | 利息保障倍數                                                                                                                                   |   |
|    | DEBT                                 | NUMBER(18, 3)       | 負債比率                                                                                                                                     |   |
|    | NET                                  | NUMBER(18, 3)       | 淨值比率                                                                                                                                     |   |
|    | FIX_LONG                             | NUMBER(18, 3)       | 固定長期適合率                                                                                                                                  |   |
|    | OPRT_EXP                             | NUMBER(18, 3)       | 財務支出率                                                                                                                                    |   |
|    | PROFIT                               | NUMBER(18, 3)       | 毛利率                                                                                                                                      |   |
|    | AF_TAX_NET                           | NUMBER(18, 3)       | 稅後淨利率                                                                                                                                    |   |
|    | NET_PROFIT                           | NUMBER(18, 3)       | 淨值報酬率                                                                                                                                    |   |
|    | ASSET_PROFIT                         | NUMBER(18, 3)       | 總資產報酬率                                                                                                                                   |   |
|    | STOCK                                | NUMBER(18, 3)       | 存貨週轉率                                                                                                                                    |   |
|    | AR                                   | NUMBER(18, 3)       | 應收款週轉率                                                                                                                                   |   |
|    | TOTAL_ASSET                          | NUMBER(18, 3)       | 總資產週轉率                                                                                                                                   |   |
|    | CAREER_TYPE                          | VARCHAR2(100 char) | 行業類別                                                                                                                                     |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | BUSINESS_YY                          | INTEGER            | 年業界比較之年度                                                                                                                                 |   |
|    | BUSINESS_RANGE_B                     | NUMBER(18, 3)       | 營收範圍_起                                                                                                                                   |   |
|    | BUSINESS_RANGE_E                     | NUMBER(18, 3)       | 營收範圍_迄                                                                                                                                   |   |
|    | CASH_FLOW_RATIO                      | NUMBER(8, 2)        |                                                                                                                                          |   |
|    | PAYABLES_TURNOVER_RATE               | NUMBER(18, 3)       |                                                                                                                                          |   |
|    | TOTAL_ASSETS_TURNOVER_RATE           | NUMBER(18, 3)       |                                                                                                                                          |   |
|    | PROMISE_DESC2                        | VARCHAR2(10 char)  | 或有負債或承諾事項說明                                                                                                                              |   |
|    | ADJUST_DESC2                         | VARCHAR2(10 char)  | 調整說明                                                                                                                                     |   |
|    | UNIT                                 | VARCHAR2(1 char)   | 金額單位(1: 仟元2: 元)                                                                                                                            |   |
|    | PARENT_COMP                          | VARCHAR2(200 char) | 合併財報之母公司                                                                                                                                 |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_MAIN

#### 徵信報告主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                             | VARCHAR2(36 char)  | 系統案件PK                                                                                                                                   |   |
| PK | CUST_UID                             | VARCHAR2(36 char)  | 客戶pk                                                                                                                                     |   |
|    | CREDIT_DOC_NO_C                      | VARCHAR2(36 char)  | 徵信報告PK                                                                                                                                   |   |
|    | CREDIT_DOC_TYPE                      | VARCHAR2(1 char)   | 徵信報告的種類(1: 企業徵信報告2: 個人徵信報告)                                                                                                                |   |
|    | IDENTITY_TYPE                        | VARCHAR2(1 char)   | 身份別(1: 主要借款人2: 共同借款人3: 財報分享4: 關係戶5: 非共同借款人)                                                                                                   |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | VARCHAR2(40 char)  | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | VARCHAR2(40 char)  | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |   |

### VW_ODS_D_ENT_REPORT_SB_SALESANALYSIS

#### 中小企業徵信報告-進銷分析

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | UIDX                                 | VARCHAR2(36 char)  |                                                                                                                                          |   |
|    | LOAN_UID                             | VARCHAR2(36 char)  |                                                                                                                                          |   |
|    | VENDORTYPE                           | VARCHAR2(2 char)   | 進銷分析-1. 進貨前五大2. 銷貨前五大                                                                                                                      |   |
|    | COMPANYNAME                          | VARCHAR2(200 char) | 公司名稱                                                                                                                                     |   |
|    | COUNTRY                              | VARCHAR2(30 char)  | 所在地(國家)                                                                                                                                  |   |
|    | TRANSACTIONITEM                      | VARCHAR2(50 char)  | 交易項目                                                                                                                                     |   |
|    | CURRENCY                             | VARCHAR2(5 char)   | 幣別                                                                                                                                       |   |
|    | TRANSACTIONAMOUNT                    | VARCHAR2(10 char)  | 交易金額(仟元)                                                                                                                                 |   |
|    | TRANSACTIONCONDITIONS                | VARCHAR2(100 char) | 交易條件                                                                                                                                     |   |
|    | PURCHASE                             | VARCHAR2(100 char) | 佔進貨源                                                                                                                                     |   |
|    | PERIOD                               | VARCHAR2(5 char)   | 往來期間(年)                                                                                                                                  |   |
|    | LANGUAGETYPE                         | VARCHAR2(5 char)   | 語系                                                                                                                                       |   |
|    | CREATE_EMPROLE                       | VARCHAR2(3 char)   | 建立角色                                                                                                                                     |   |
|    | CREATE_EMPID                         | VARCHAR2(5 char)   | 建立人員                                                                                                                                     |   |
|    | CREATE_BRANCHID                      | VARCHAR2(4 char)   | 建立分行                                                                                                                                     |   |
|    | CREATE_DATE                          | TIMESTAMP          | 建立日期                                                                                                                                     |   |
|    | LASTUPDATE_EMPROLE                   | VARCHAR2(3 char)   | 更新角色                                                                                                                                     |   |
|    | LASTUPDATE_EMPID                     | VARCHAR2(5 char)   | 更新人員                                                                                                                                     |   |
|    | LASTUPDATE_BRANCHID                  | VARCHAR2(4 char)   | 更新分行                                                                                                                                     |   |
|    | LASTUPDATE_DATE                      | TIMESTAMP          | 更新日期                                                                                                                                     |   |
|    | TBL_UPD_TIM                          | TIMESTAMP          | 表格更新時間                                                                                                                                   |

### VW_ODS_D_FLOW_CASE_LOAN_CAR

#### 車貸案件流程主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態_如: 核准, 緩議...                                                                            |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級(分行代號)                                                                               |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSPROPOSE      | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | BRANCHID_FINALLYCHECKLEVEL_SYSPROPOSE    | VARCHAR2(4 char)     | 系統建議值_最終審核層級(分行代號)                                                                         |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本_即案件流程的啟用日(Flow_Configure. Date_TurnOn)                                               |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係?                                                                            |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停?                                                                                |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號_或是公司統編                                                                             |   |
|    | IS_BEFORE_GRANTLOAN                      | VARCHAR2(1 char)     | 新貸案是否為撥貸前                                                                                  |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成?                                                                                 |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 若發生補件清單時, 儲存AO人員所選擇的提交方式如-_1: 照原流程一層一層提交2: AO直接提交審核員，後續關卡依照原流程一層一層提交3: AO直接提交給原發出補件清單之主管       |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記_(1)null: 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                     |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記_(1)null: 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                     |   |
|    | IS_SENDTOCORE                            | VARCHAR2(1 char)     | 此案件的資料是否已上傳至核心(0：未上傳，1：已上傳)                                                                |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性(一般性, 急件, 快速審理案件)                                                                        |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ISFINISH_OPJOB                           | VARCHAR2(1 char)     | OP工作是否已完成？                                                                                 |   |
|    | STATUS_SUGGEST                           | VARCHAR2(1 char)     | 總行以上之待辦事項，需有顯示審核說明的欄位(建議核准、建議婉拒、建議退回補件)                                                    |   |
|    | FLOW_SEQNO_LIMITSET                      | INTEGER              | 額度, 利率費用分開設定                                                                                |   |
|    | FLOW_SEQNO_RATESET                       | INTEGER              | 利、費率設定                                                                                     |   |
|    | DATE_FINALLYCHECKLEVEL                   | TIMESTAMP            | 最終準駁日期                                                                                     |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | ORIGIN_CHECKER                           | VARCHAR2(5 char)     | 原始派件的審查員(for取消提交後再送至審查員時使用)                                                                |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASE_LOAN_CONSUME

#### 消金徵授信作業流程檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案/是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態                                                                                       |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級_角色代號                                                                                |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級_分行                                                                                  |   |
|    | ROLEID_FINALCHECKLEVEL_SYSPROPOSE        | VARCHAR2(3 char)     | 系統建議值_最終審核層級_角色                                                                            |   |
|    | BRANCHID_FINALCHECKLEVEL_SYSPROPOSE      | VARCHAR2(4 char)     | 系統建議值_最終審核層級_分行                                                                            |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本                                                                                     |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係                                                                             |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停                                                                                 |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號或公司統編                                                                               |   |
|    | IS_BEFORE_GRANTLOAN                      | VARCHAR2(1 char)     | 新貸案是否為撥貸前                                                                                  |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成                                                                                  |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 儲存AO人員所選擇的提交方式                                                                             |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記                                                                            |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記                                                                            |   |
|    | IS_SENDTOCORE                            | VARCHAR2(1 char)     | 此案件的資料是否已上傳至核心                                                                             |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性                                                                                       |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ISFINISH_OPJOB                           | VARCHAR2(1 char)     | OP工作是否已完成                                                                                  |   |
|    | STATUS_SUGGEST                           | VARCHAR2(1 char)     | 總行以上之待辦事項                                                                                  |   |
|    | FLOW_SEQNO_LIMITSET                      | INTEGER              | 額度/利率費用分開設定                                                                                |   |
|    | FLOW_SEQNO_RATESET                       | INTEGER              | 利率費率設定                                                                                     |   |
|    | DATE_FINALLYCHECKLEVEL                   | DATE                 | 最終準駁日期                                                                                     |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASE_LOAN_ENTERPRISE

#### 企金徵授信作業流程檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案/是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | INTEGER              | 結案狀態                                                                                       |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級_角色代號                                                                                |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級_分行                                                                                  |   |
|    | ROLEID_FINALCHECKLEVEL_SYSPROPOSE        | VARCHAR2(3 char)     | 系統建議值_最終審核層級_角色                                                                            |   |
|    | BRANCHID_FINALCHECKLEVEL_SYSPROPOSE      | VARCHAR2(4 char)     | 系統建議值_最終審核層級_分行                                                                            |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本                                                                                     |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係                                                                             |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停                                                                                 |   |
|    | IS_OVERTAKE_RAISESELF                    | VARCHAR2(1 char)     | 自撤案件是否已追上原案件                                                                               |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號或公司統編                                                                               |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成                                                                                  |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 儲存AO人員所選擇的提交方式                                                                             |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記                                                                            |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記                                                                            |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性                                                                                       |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | ISFORWARD                                | VARCHAR2(1 char)     | 是否提授審會                                                                                     |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASE_LOAN_HOUSE

#### 房貸徵授信作業流程檔

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案/是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態                                                                                       |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級_角色代號                                                                                |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級_分行                                                                                  |   |
|    | ROLEID_FINALCHECKLEVEL_SYSPROPOSE        | VARCHAR2(3 char)     | 系統建議值_最終審核層級_角色                                                                            |   |
|    | BRANCHID_FINALCHECKLEVEL_SYSPROPOSE      | VARCHAR2(4 char)     | 系統建議值_最終審核層級_分行                                                                            |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本                                                                                     |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係                                                                             |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停                                                                                 |   |
|    | IS_OVERTAKE_RAISESELF                    | VARCHAR2(1 char)     | 自撤案件是否已追上原案件                                                                               |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號或公司統編                                                                               |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成                                                                                  |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 儲存AO人員所選擇的提交方式                                                                             |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記                                                                            |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記                                                                            |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性                                                                                       |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | ISFORWARD                                | VARCHAR2(1 char)     | 是否提授審會                                                                                     |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASE_RCK_LOANTRACECASE

#### 授信覆審追蹤作業

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | INTEGER              | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | INTEGER              | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | INTEGER              | 結案狀態_如: 核准, 緩議...                                                                            |   |
|    | ATTENTION                                | VARCHAR2(3000 char)  | 注意事項(提交審核)(目前此欄位不再使用_欄位仍在)                                                                 |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級(分行代號)                                                                               |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSTEMPROPOSE   | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本_即案件流程的啟用日(Flow_Configure. Date_TurnOn)                                               |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係?                                                                            |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停?                                                                                |   |
|    | IS_OVERTAKE_RAISESELF                    | VARCHAR2(1 char)     | 當發生自撤案件時, 自撤案件是否已追上原案件_1: 代表追上_0代表沒有追上!                                                      |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號_或是公司統編                                                                             |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成?                                                                                 |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 若發生補件清單時, 儲存AO人員所選擇的提交方式如-_1: 照原流程一層一層提交3: AO直接提交給原發出補件清單之主管                                  |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記_(1)null: 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                     |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記_(1)null: 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                     |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性(一般性, 急件, 快速審理案件)                                                                        |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | ISFORWARD                                | VARCHAR2(1 char)     | 是否提授審會?                                                                                    |   |
|    | ISHANDLEFREE                             | VARCHAR2(1 char)     | 是否免辦理                                                                                      |   |
|    | HANDLEFREEREASON                         | VARCHAR2(2 char)     | 免辦理原因                                                                                      |   |
|    | ISTRANSFER                               | VARCHAR2(1 char)     | 是否轉籍                                                                                       |   |
|    | TRANSFERBRANCHID                         | VARCHAR2(4 char)     | 轉籍至那家分行                                                                                    |   |
|    | HANDLEFREEREASON_OTHER                   | VARCHAR2(4000 char)  | 免辦理其他原因                                                                                    |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASEDETAIL_LOAN_CAR

#### 車貸案件流程明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | FLOW_UID                                 | VARCHAR2(36 char)    | 流程記錄主鍵                                                                                     |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_DATE                              | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | FIRST_DATE                               | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | MODIFY_DATE                              | TIMESTAMP            | 流程資料的暫存時間(案件流程還未送出)                                                                        |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 流程的核定時間                                                                                    |   |
|    | FLOW_SEQNO                               | NUMBER(5, 0)          | 案件流程步驟累計(流程流水號)                                                                            |   |
|    | FLOW_STATUS                              | NUMBER(5, 0)          | 流程狀態代碼                                                                                     |   |
|    | EMPROLE                                  | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | EMPID                                    | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | BRANCHID                                 | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | TEAMID                                   | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | STATUS_RIGHTNOW                          | VARCHAR2(1 char)     | 0：此流程檔未結束；1：此流程檔已結束                                                                        |   |
|    | ISREAD_GROUP                             | VARCHAR2(1 char)     | 當為_1_時, 代表同群組(角色代號+分行代號)下, 皆可看到案件_反之, 則否!                                                     |   |
|    | FLOW_DECISION                            | NUMBER(4, 0)          | 審核意見(核准, 緩議, 自撤, 撤案, 退件, 婉拒, 退回補件, 退回清單)                                                          |   |
|    | NEXT_EMPROLE                             | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | NEXT_EMPID                               | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | NEXT_BRANCHID                            | VARCHAR2(4 char)     | 下一審核人員所屬的分行別                                                                               |   |
|    | NEXT_TEAMID                              | VARCHAR2(6 char)     | 下一審核人員(部門, 或是分行下的小組ID)                                                                      |   |
|    | AGENT_EMPROLE                            | VARCHAR2(3 char)     | 代理人的角色                                                                                     |   |
|    | AGENT_EMPID                              | VARCHAR2(5 char)     | 代理人的員編                                                                                     |   |
|    | AGENT_BRANCHID                           | VARCHAR2(4 char)     | 代理人所屬分行別                                                                                   |   |
|    | AGENT_TEAMID                             | VARCHAR2(6 char)     | 代理人所屬(部門, 或是分行下的小組ID)                                                                       |   |
|    | REJECT_TYPE                              | VARCHAR2(2 char)     | 婉拒原因(大類)                                                                                   |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原「新增此筆流程的時間」                                                                               |   |
|    | ORIGIN_FIRST_DATE                        | TIMESTAMP            | 原「第一次進入案件的時間」                                                                              |   |
|    | ORIGIN_MODIFY_DATE                       | TIMESTAMP            | 原「流程資料的暫存時間(案件流程還未送出)」                                                                     |   |
|    | ORIGIN_EMPROLE                           | VARCHAR2(3 char)     | 原「本流程步驟審核人員的角色」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                               |   |
|    | ORIGIN_EMPID                             | VARCHAR2(5 char)     | 原「本流程步驟審核人員的員編」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                               |   |
|    | ORIGIN_BRANCHID                          | VARCHAR2(4 char)     | 原「本流程步驟審核人員所屬分行別」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                             |   |
|    | ORIGIN_TEAMID                            | VARCHAR2(6 char)     | 原「本流程步驟審核人員所屬(部門, 或是分行下的小組ID)」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                 |   |
|    | ORIGIN_NEXT_EMPROLE                      | VARCHAR2(3 char)     | 原「下一審核人員的角色」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                  |   |
|    | ORIGIN_NEXT_EMPID                        | VARCHAR2(5 char)     | 原「下一審核人員的員編」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                  |   |
|    | ORIGIN_NEXT_BRANCHID                     | VARCHAR2(4 char)     | 原「下一審核人員所屬分行別」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                |   |
|    | ORIGIN_NEXT_TEAMID                       | VARCHAR2(6 char)     | 原「下一審核人員所屬(部門, 或是分行下的小組ID)」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                    |   |
|    | REASONTYPE                               | INTEGER              | 1=同一關係人填表日期錯誤, 2=同一關係企業與聯徵A11有異, 3=1+2                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASEDETAIL_LOAN_CONSUME

#### 消金徵授信作業流程記錄檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | FLOW_UID                                 | VARCHAR2(36 char)    | 流程記錄主鍵                                                                                     |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_DATE                              | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | FIRST_DATE                               | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | MODIFY_DATE                              | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 流程的核定時間                                                                                    |   |
|    | FLOW_SEQNO                               | NUMBER(5, 0)          | 案件流程步驟累計                                                                                   |   |
|    | FLOW_STATUS                              | NUMBER(5, 0)          | 流程狀態代碼                                                                                     |   |
|    | EMPROLE                                  | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | EMPID                                    | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | BRANCHID                                 | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | TEAMID                                   | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | STATUS_RIGHTNOW                          | VARCHAR2(1 char)     | 目前狀態                                                                                       |   |
|    | ISREAD_GROUP                             | VARCHAR2(1 char)     | 是否為群組檢視關卡                                                                                  |   |
|    | FLOW_DECISION                            | NUMBER(4, 0)          | 審核意見                                                                                       |   |
|    | NEXT_EMPROLE                             | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | NEXT_EMPID                               | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | NEXT_BRANCHID                            | VARCHAR2(4 char)     | 下一審核人員所屬的分行別                                                                               |   |
|    | NEXT_TEAMID                              | VARCHAR2(6 char)     | 下一審核人員                                                                                     |   |
|    | AGENT_EMPROLE                            | VARCHAR2(3 char)     | 代理人的角色                                                                                     |   |
|    | AGENT_EMPID                              | VARCHAR2(5 char)     | 代理人的員編                                                                                     |   |
|    | AGENT_BRANCHID                           | VARCHAR2(4 char)     | 代理人所屬分行別                                                                                   |   |
|    | AGENT_TEAMID                             | VARCHAR2(6 char)     | 代理人所屬                                                                                      |   |
|    | REJECT_TYPE                              | VARCHAR2(2 char)     | 婉拒原因                                                                                       |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | ORIGIN_FIRST_DATE                        | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | ORIGIN_MODIFY_DATE                       | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | ORIGIN_EMPROLE                           | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | ORIGIN_EMPID                             | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | ORIGIN_BRANCHID                          | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | ORIGIN_TEAMID                            | VARCHAR2(6 char)     | 本流程步驟審核人員所屬部門或分行下的小組ID                                                                     |   |
|    | ORIGIN_NEXT_EMPROLE                      | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | ORIGIN_NEXT_EMPID                        | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | ORIGIN_NEXT_BRANCHID                     | VARCHAR2(4 char)     | 下一審核人員所屬分行別                                                                                |   |
|    | ORIGIN_NEXT_TEAMID                       | VARCHAR2(6 char)     | 下一審核人員所屬部門或分行下的小組ID                                                                        |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASEDETAIL_LOAN_ENTERPRISE

#### 企金徵授信作業流程記錄檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | FLOW_UID                                 | VARCHAR2(36 char)    | 流程記錄主鍵                                                                                     |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_DATE                              | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | FIRST_DATE                               | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | MODIFY_DATE                              | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 流程的核定時間                                                                                    |   |
|    | FLOW_SEQNO                               | NUMBER(5, 0)          | 案件流程步驟累計                                                                                   |   |
|    | FLOW_STATUS                              | NUMBER(5, 0)          | 流程狀態代碼                                                                                     |   |
|    | EMPROLE                                  | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | EMPID                                    | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | BRANCHID                                 | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | TEAMID                                   | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | STATUS_RIGHTNOW                          | VARCHAR2(1 char)     | 目前狀態                                                                                       |   |
|    | ISREAD_GROUP                             | VARCHAR2(1 char)     | 是否為群組檢視關卡                                                                                  |   |
|    | FLOW_DECISION                            | NUMBER(4, 0)          | 審核意見                                                                                       |   |
|    | NEXT_EMPROLE                             | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | NEXT_EMPID                               | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | NEXT_BRANCHID                            | VARCHAR2(4 char)     | 下一審核人員所屬的分行別                                                                               |   |
|    | NEXT_TEAMID                              | VARCHAR2(6 char)     | 下一審核人員                                                                                     |   |
|    | AGENT_EMPROLE                            | VARCHAR2(3 char)     | 代理人的角色                                                                                     |   |
|    | AGENT_EMPID                              | VARCHAR2(5 char)     | 代理人的員編                                                                                     |   |
|    | AGENT_BRANCHID                           | VARCHAR2(4 char)     | 代理人所屬分行別                                                                                   |   |
|    | AGENT_TEAMID                             | VARCHAR2(6 char)     | 代理人所屬                                                                                      |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | ORIGIN_FIRST_DATE                        | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | ORIGIN_MODIFY_DATE                       | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | ORIGIN_EMPROLE                           | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | ORIGIN_EMPID                             | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | ORIGIN_BRANCHID                          | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | ORIGIN_TEAMID                            | VARCHAR2(6 char)     | 本流程步驟審核人員所屬部門或分行下的小組ID                                                                     |   |
|    | ORIGIN_NEXT_EMPROLE                      | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | ORIGIN_NEXT_EMPID                        | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | ORIGIN_NEXT_BRANCHID                     | VARCHAR2(4 char)     | 下一審核人員所屬分行別                                                                                |   |
|    | ORIGIN_NEXT_TEAMID                       | VARCHAR2(6 char)     | 下一審核人員所屬部門或分行下的小組ID                                                                        |   |
|    | ISAGREE                                  | VARCHAR2(1 char)     | 審查說明欄位                                                                                     |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CASEDETAIL_LOAN_HOUSE

#### 房貸徵授信作業流程記錄檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | FLOW_UID                                 | VARCHAR2(36 char)    | 流程記錄主鍵                                                                                     |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_DATE                              | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | FIRST_DATE                               | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | MODIFY_DATE                              | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 流程的核定時間                                                                                    |   |
|    | FLOW_SEQNO                               | NUMBER(5, 0)          | 案件流程步驟累計                                                                                   |   |
|    | FLOW_STATUS                              | NUMBER(5, 0)          | 流程狀態代碼                                                                                     |   |
|    | EMPROLE                                  | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | EMPID                                    | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | BRANCHID                                 | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | TEAMID                                   | VARCHAR2(6 char)     | 部門或是分行下的小組ID                                                                               |   |
|    | STATUS_RIGHTNOW                          | VARCHAR2(1 char)     | 目前狀態                                                                                       |   |
|    | ISREAD_GROUP                             | VARCHAR2(1 char)     | 是否為群組檢視關卡                                                                                  |   |
|    | FLOW_DECISION                            | NUMBER(4, 0)          | 審核意見                                                                                       |   |
|    | NEXT_EMPROLE                             | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | NEXT_EMPID                               | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | NEXT_BRANCHID                            | VARCHAR2(4 char)     | 下一審核人員所屬的分行別                                                                               |   |
|    | NEXT_TEAMID                              | VARCHAR2(6 char)     | 下一審核人員                                                                                     |   |
|    | AGENT_EMPROLE                            | VARCHAR2(3 char)     | 代理人的角色                                                                                     |   |
|    | AGENT_EMPID                              | VARCHAR2(5 char)     | 代理人的員編                                                                                     |   |
|    | AGENT_BRANCHID                           | VARCHAR2(4 char)     | 代理人所屬分行別                                                                                   |   |
|    | AGENT_TEAMID                             | VARCHAR2(6 char)     | 代理人所屬                                                                                      |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | ORIGIN_FIRST_DATE                        | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | ORIGIN_MODIFY_DATE                       | TIMESTAMP            | 流程資料的暫存時間                                                                                  |   |
|    | ORIGIN_EMPROLE                           | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | ORIGIN_EMPID                             | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | ORIGIN_BRANCHID                          | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | ORIGIN_TEAMID                            | VARCHAR2(6 char)     | 本流程步驟審核人員所屬部門或分行下的小組ID                                                                     |   |
|    | ORIGIN_NEXT_EMPROLE                      | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | ORIGIN_NEXT_EMPID                        | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | ORIGIN_NEXT_BRANCHID                     | VARCHAR2(4 char)     | 下一審核人員所屬分行別                                                                                |   |
|    | ORIGIN_NEXT_TEAMID                       | VARCHAR2(6 char)     | 下一審核人員所屬部門或分行下的小組ID                                                                        |   |
|    | ISAGREE                                  | VARCHAR2(1 char)     | 審查說明欄位                                                                                     |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CONFIGURE_PROPERTY_DESC

#### 案件流程設定檔之屬性(中文說明)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LANGUAGETYPE                             | VARCHAR2(10 char)    | 多國語系的代碼                                                                                    |   |
| PK | XMLTAG_NAME                              | VARCHAR2(50 char)    | 流程控制檔的Tag名稱                                                                                |   |
| PK | PROPERTY_ID                              | VARCHAR2(50 char)    | 該Tag下所支援的屬性名稱                                                                              |   |
|    | PROPERTY_DESC                            | VARCHAR2(50 char)    | 該Tag下所支援的屬性名稱說明                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOW_CONFIGURE_STATUSID_DESC

#### 案件流程關卡說明(各審核層級之說明)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LANGUAGETYPE                             | VARCHAR2(10 char)    | 多國語系的代碼                                                                                    |   |
| PK | FLOWTYPE                                 | VARCHAR2(80 char)    | 案件流程的種類                                                                                    |   |
| PK | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程設定檔的版本                                                                                 |   |
| PK | STATUSID_XMLCONFIG                       | NUMBER(5, 0)          | flow_xml_file_status_id                                                                    |   |
|    | STATUSID_DESC                            | VARCHAR2(50 char)    | flow_xml_file_status_id的描述說明                                                               |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOWCASE_FIXEDAST_ESTM_BRANCH

#### 不動產鑑價案件流程主檔-分行送件

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門/分行下的小組ID                                                                                |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態                                                                                       |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級(分行別)                                                                                |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSPROPOSE      | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | BRANCHID_FINALLYCHECKLEVEL_SYSPROPOSE    | VARCHAR2(4 char)     | 系統建議值_最終審核層級(分行別)                                                                          |   |
|    | VERSION_FLOWTYPE                         | DATE                 | 案件流程版本(即案件流程啟用日)                                                                           |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係                                                                             |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停                                                                                 |   |
|    | IS_OVERTAKE_RAISESELF                    | VARCHAR2(1 char)     | 自撤案件是否已追上原案件                                                                               |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號/公司統編                                                                               |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記                                                                            |   |
|    | CASE_VERSION                             | INTEGER              | 鑑價案件的改版次數                                                                                  |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 原部門/分行下的小組ID                                                                               |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOWCASE_FIXEDAST_ESTM_HO

#### 不動產鑑價案件流程主檔-總行送件

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | INTEGER              | 結案狀態_如: 核准, 緩議...                                                                            |   |
|    | ATTENTION                                | VARCHAR2(1000 char)  | 注意事項(提交審核)                                                                                 |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     |                                                                                            |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSTEMPROPOSE   | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | BRANCHID_FINALLYCHECKLEVEL_SYSTEMPROPOSE | VARCHAR2(4 char)     |                                                                                            |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本_即案件流程的啟用日(Flow_Configure. Date_TurnOn)                                               |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係?                                                                            |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停?                                                                                |   |
|    | IS_OVERTAKE_RAISESELF                    | VARCHAR2(1 char)     | 當發生自撤案件時, 自撤案件是否已追上原案件_1: 代表追上_0代表沒有追上!                                                      |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號_或是公司統編                                                                             |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記_(1)null: 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                     |   |
|    | CASE_VERSION                             | NUMBER(10, 0)         | 鑑價案件的改版次數                                                                                  |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOWCASE_LOANHOUSE_MCD_BRANCH

#### 房貸案件分行批覆書階段流程主檔

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態_如: 核准, 緩議...                                                                            |   |
|    | ATTENTION                                | VARCHAR2(1000 char)  | 注意事項(提交審核)                                                                                 |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級(分行代號)                                                                               |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSTEMPROPOSE   | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | BRANCHID_FINALLYCHECKLEVEL_SYSTEMPROPOS  | VARCHAR2(4 char)     | 系統建議值_最終審核層級(分行代號)                                                                         |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本_即案件流程的啟用日(Flow_Configure. Date_TurnOn)                                               |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係?                                                                            |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停?                                                                                |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號_或是公司統編                                                                             |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成?                                                                                 |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 若發生補件清單時, 儲存AO人員所選擇的提交方式如-_1: 照原流程一層一層提交3: AO直接提交給原發出補件清單之主管                                  |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記_(1): 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                         |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記_(1): 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                         |   |
|    | IS_SENDTOCORE                            | VARCHAR2(1 char)     | 此案件的資料是否已上傳至核心                                                                             |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性(一般性, 急件, 快速審理案件)                                                                        |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOWCASE_LOANHOUSE_MCD_HO

#### 房貸案件總行批覆書階段流程主檔

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_TEAMID                            | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立案件的時間                                                                                    |   |
|    | LAST_FLOW_SEQNO                          | NUMBER(5, 0)          | 最近的流程流水號                                                                                   |   |
|    | LAST_FLOW_STATUS                         | NUMBER(5, 0)          | 最近的流程狀態代碼                                                                                  |   |
|    | LAST_FLOW_UPDATE_DATE                    | TIMESTAMP            | 最近的流程狀態更新時間                                                                                |   |
|    | LOAN_CLOSESTATUS                         | VARCHAR2(1 char)     | 是否結案_是否同意                                                                                  |   |
|    | LOAN_CLOSEDECISION                       | NUMBER(4, 0)          | 結案狀態_如: 核准, 緩議...                                                                            |   |
|    | ATTENTION                                | VARCHAR2(1000 char)  | 注意事項(提交審核)                                                                                 |   |
|    | ROLEID_FINALLYCHECKLEVEL                 | VARCHAR2(3 char)     | 最終審核層級(角色代號)                                                                               |   |
|    | BRANCHID_FINALLYCHECKLEVEL               | VARCHAR2(4 char)     | 最終審核層級(分行代號)                                                                               |   |
|    | ROLEID_FINALLYCHECKLEVEL_SYSTEMPROPOSE   | VARCHAR2(3 char)     | 系統建議值_最終審核層級(角色代號)                                                                         |   |
|    | BRANCHID_FINALLYCHECKLEVEL_SYSTEMPROPOS  | VARCHAR2(4 char)     | 系統建議值_最終審核層級(分行代號)                                                                         |   |
|    | VERSION_FLOWTYPE                         | VARCHAR2(8 char)     | 案件流程版本_即案件流程的啟用日(Flow_Configure. Date_TurnOn)                                               |   |
|    | IS_RELATION_OTHERLOANUID                 | VARCHAR2(1 char)     | 該筆案件是否與其他案件有關係?                                                                            |   |
|    | ISPAUSE_FLOW                             | VARCHAR2(1 char)     | 本案件流程是否被暫停?                                                                                |   |
|    | CASENO                                   | VARCHAR2(20 char)    | 案件編號                                                                                       |   |
|    | CUSTOMERID_OR_COMPANYID                  | VARCHAR2(11 char)    | 客戶身份證字號_或是公司統編                                                                             |   |
|    | IS_FINISHED_LIST_ROLLBACK                | VARCHAR2(1 char)     | 退回清單是否已完成?                                                                                 |   |
|    | CHOICE_SENDTYPE_LIST_ROLLBACK            | VARCHAR2(1 char)     | 若發生補件清單時, 儲存AO人員所選擇的提交方式如-_1: 照原流程一層一層提交3: AO直接提交給原發出補件清單之主管                                  |   |
|    | IS_APPROVED_FINISHED_RENEW_ROLLBACK      | VARCHAR2(1 char)     | 記錄當時主管發出退回補件的註記_(1): 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                         |   |
|    | IS_APPROVED_FINISHED_LIST_ROLLBACK       | VARCHAR2(1 char)     | 記錄當時主管發出補件清單的註記_(1): 尚未發生_(2)0: 已發出, 尚未審核!(3)1: 已審核通過!                                         |   |
|    | IS_SENDTOCORE                            | VARCHAR2(1 char)     | 此案件的資料是否已上傳至核心                                                                             |   |
|    | CASE_PROPERTY                            | VARCHAR2(1 char)     | 案件屬性(一般性, 急件, 快速審理案件)                                                                        |   |
|    | CASE_VERSION                             | INTEGER              | 案件的改版次數                                                                                    |   |
|    | ORIGIN_CREATE_EMPROLE                    | VARCHAR2(3 char)     | 原建立人員角色                                                                                    |   |
|    | ORIGIN_CREATE_EMPID                      | VARCHAR2(5 char)     | 原建立人員員編                                                                                    |   |
|    | ORIGIN_CREATE_BRANCHID                   | VARCHAR2(4 char)     | 原建立人員分行別                                                                                   |   |
|    | ORIGIN_CREATE_TEAMID                     | VARCHAR2(6 char)     | 部門, 或是分行下的小組ID                                                                              |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原建立案件的時間                                                                                   |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_FLOWCASEDTL_FIXEDAST_ESTM_BRANCH

#### 不動產鑑價案件流程明細檔-分行送件

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | FLOW_UID                                 | VARCHAR2(36 char)    | 流程記錄主鍵                                                                                     |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_DATE                              | TIMESTAMP            | 新增此筆流程的時間                                                                                  |   |
|    | FIRST_DATE                               | TIMESTAMP            | 第一次進入案件的時間                                                                                 |   |
|    | MODIFY_DATE                              | TIMESTAMP            | 流程資料的暫存時間(案件流程還未送出)                                                                        |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 流程的核定時間                                                                                    |   |
|    | FLOW_SEQNO                               | NUMBER(5, 0)          | 案件流程步驟累計(流程流水號)                                                                            |   |
|    | FLOW_STATUS                              | NUMBER(5, 0)          | 流程狀態代碼                                                                                     |   |
|    | EMPROLE                                  | VARCHAR2(3 char)     | 本流程步驟審核人員的角色                                                                               |   |
|    | EMPID                                    | VARCHAR2(5 char)     | 本流程步驟審核人員的員編                                                                               |   |
|    | BRANCHID                                 | VARCHAR2(4 char)     | 本流程步驟審核人員所屬分行別                                                                             |   |
|    | TEAMID                                   | VARCHAR2(6 char)     | 部門/分行下的小組ID                                                                                |   |
|    | STATUS_RIGHTNOW                          | VARCHAR2(1 char)     | 檔案目前狀態                                                                                     |   |
|    | ISREAD_GROUP                             | VARCHAR2(1 char)     | 群組角色讀取權限                                                                                   |   |
|    | FLOW_DECISION                            | NUMBER(4, 0)          | 審核意見                                                                                       |   |
|    | NEXT_EMPROLE                             | VARCHAR2(3 char)     | 下一審核人員的角色                                                                                  |   |
|    | NEXT_EMPID                               | VARCHAR2(5 char)     | 下一審核人員的員編                                                                                  |   |
|    | NEXT_BRANCHID                            | VARCHAR2(4 char)     | 下一審核人員所屬的分行別                                                                               |   |
|    | NEXT_TEAMID                              | VARCHAR2(6 char)     | 下一審核人員(部門, 或是分行下的小組ID)                                                                      |   |
|    | AGENT_EMPROLE                            | VARCHAR2(3 char)     | 代理人的角色                                                                                     |   |
|    | AGENT_EMPID                              | VARCHAR2(5 char)     | 代理人的員編                                                                                     |   |
|    | AGENT_BRANCHID                           | VARCHAR2(4 char)     | 代理人所屬分行別                                                                                   |   |
|    | AGENT_TEAMID                             | VARCHAR2(6 char)     | 代理人所屬(部門/分行下的小組ID)                                                                         |   |
|    | ORIGIN_CREATE_DATE                       | TIMESTAMP            | 原「新增此筆流程的時間」                                                                               |   |
|    | ORIGIN_FIRST_DATE                        | TIMESTAMP            | 原「第一次進入案件的時間」                                                                              |   |
|    | ORIGIN_MODIFY_DATE                       | TIMESTAMP            | 原「流程資料的暫存時間(案件流程還未送出)」                                                                     |   |
|    | ORIGIN_EMPROLE                           | VARCHAR2(3 char)     | 原「本流程步驟審核人員的角色」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                               |   |
|    | ORIGIN_EMPID                             | VARCHAR2(5 char)     | 原「本流程步驟審核人員的員編」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                               |   |
|    | ORIGIN_BRANCHID                          | VARCHAR2(4 char)     | 原「本流程步驟審核人員所屬分行別」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                             |   |
|    | ORIGIN_TEAMID                            | VARCHAR2(6 char)     | 原「本流程步驟審核人員所屬(部門, 或是分行下的小組ID)」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                 |   |
|    | ORIGIN_NEXT_EMPROLE                      | VARCHAR2(3 char)     | 原「下一審核人員的角色」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                  |   |
|    | ORIGIN_NEXT_EMPID                        | VARCHAR2(5 char)     | 原「下一審核人員的員編」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                  |   |
|    | ORIGIN_NEXT_BRANCHID                     | VARCHAR2(4 char)     | 原「下一審核人員所屬分行別」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                                |   |
|    | ORIGIN_NEXT_TEAMID                       | VARCHAR2(6 char)     | 原「下一審核人員所屬(部門, 或是分行下的小組ID)」(註: 本欄位於案件移交時_或是分行合併, 消滅時, 才使用!)                                    |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_ACCOUNT

#### 房貸申請額度資料

| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | ACCOUNT_NO                               | VARCHAR2(50 char)    | 申請號碼                                                                                       |   |
|    | MARGIN_CENTER                            | VARCHAR2(4 char)     | 利潤中心                                                                                       |   |
|    | COLLATERAL_MARK                          | VARCHAR2(1 char)     | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                     |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | TYPE                                     | VARCHAR2(1 char)     | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                               |   |
|    | SUBJECT                                  | VARCHAR2(3 char)     | 授信科目細項                                                                                     |   |
|    | AMOUNT                                   | NUMBER(18, 3)         | 額度                                                                                         |   |
|    | PROJECT_NO                               | VARCHAR2(5 char)     | 專案代號                                                                                       |   |
|    | PERIOD                                   | VARCHAR2(9 char)     | 授信期間                                                                                       |   |
|    | PERIOD_UNIT                              | VARCHAR2(1 char)     | 授信期間單位(1: 年, 2: 月, 3: 日, 4: 特定日)                                                                  |   |
|    | USEWAY                                   | VARCHAR2(1 char)     | 動用方式(1: 循環, 2:ㄧ次撥貸, 3: 多次撥貸)                                                                   |   |
|    | AVAILABLE_PERIOD                         | VARCHAR2(9 char)     | 批覆書有效期限                                                                                    |   |
|    | AVAILABLE_PERIOD_UNIT                    | VARCHAR2(1 char)     | 批覆書有效期限單位(1: 月, 2: 年，3: 特定日)                                                                   |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | COMPARE_DESC                             | VARCHAR2(1000 char)  | 利害關係人檢核表_其他說明                                                                              |   |
|    | PURPOSE                                  | VARCHAR2(3 char)     | 授信用途                                                                                       |   |
|    | PURPOSE_OTHER                            | VARCHAR2(200 char)   | 授信用途_其他說明                                                                                  |   |
|    | PAYMENT                                  | VARCHAR2(2 char)     | 還款方式                                                                                       |   |
|    | PAYMENT_OTHER                            | VARCHAR2(200 char)   | 還款方式_其他說明                                                                                  |   |
|    | PAY_SOURCE                               | VARCHAR2(100 char)   | 還款財源                                                                                       |   |
|    | PAY_SOURCE_OTHER                         | VARCHAR2(200 char)   | 還款財源_其他說明                                                                                  |   |
|    | SUBJECT_DETAIL                           | VARCHAR2(3 char)     | 科目子目                                                                                       |   |
|    | LIMIT_PERIOD                             | VARCHAR2(9 char)     | 寬限期間                                                                                       |   |
|    | LIMIT_PERIOD_UNIT                        | VARCHAR2(1 char)     | 寬限期間(1: 月, 2: 年，3: 特定日)                                                                        |   |
|    | EXT_APRV_NO                              | VARCHAR2(12 char)    | 若是展期案件，要輸入舊核號                                                                              |   |
|    | EXPENSES_DATE                            | TIMESTAMP            | 預定用款日期                                                                                     |   |
|    | DEADLINE                                 | VARCHAR2(5 char)     | 借款期限                                                                                       |   |
|    | DEADLINE_UNIT                            | VARCHAR2(1 char)     | 借款期限_單位(1: 個月, 2: 年)                                                                          |   |
|    | DEBT_USE                                 | VARCHAR2(3 char)     | 借款用途                                                                                       |   |
|    | DEBT_USE_OTHER                           | VARCHAR2(200 char)   | 借款用途_其他說明                                                                                  |   |
|    | RESTRICT_REFUND                          | VARCHAR2(3 char)     | 限制提前清償                                                                                     |   |
|    | RESTRICT_ALTER                           | VARCHAR2(3 char)     | 限制塗銷                                                                                       |   |
|    | REMARK                                   | VARCHAR2(1000 char)  | 擬承作條件                                                                                      |   |
|    | ACCOUNT_STATUS                           | VARCHAR2(1 char)     | 狀態(1: 核准2: 緩議)                                                                               |   |
|    | QUERY_UID_6E027                          | VARCHAR2(36 char)    | 發動6E027的query_uid                                                                          |   |
|    | STATUS_6E027                             | VARCHAR2(1 char)     | 6E027狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6E030                          | VARCHAR2(36 char)    | 發動6E030的query_uid                                                                          |   |
|    | STATUS_6E030                             | VARCHAR2(1 char)     | 6E030狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6C001                          | VARCHAR2(36 char)    | 發動6C001的query_uid                                                                          |   |
|    | STATUS_6C001                             | VARCHAR2(1 char)     | 6C001狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | IS_PAY                                   | VARCHAR2(1 char)     | 本案是否代償                                                                                     |   |
|    | IS_CANCEL                                | VARCHAR2(1 char)     | 是否註銷(0: 否, 1: 是)                                                                              |   |
|    | ACCOUNT_NO_NEW                           | VARCHAR2(12 char)    | 新申請號碼                                                                                      |   |
|    | LIMIT_REFUND                             | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | REFUND_UNIT                              | VARCHAR2(1 char)     | 限制清償_單位(1－個月；2－年；3－特定日_4：不限制)                                                              |   |
|    | LIMIT_ALTER                              | VARCHAR2(9 char)     | 限制塗銷                                                                                       |   |
|    | ALTER_UNIT                               | VARCHAR2(1 char)     | 限制塗銷_單位(1－個月；2－年；3－特定日_4：不限制)                                                              |   |
|    | PAY_SOURCE_MAIN                          | VARCHAR2(3 char)     | 主要還款財源                                                                                     |   |
|    | ISDBR22                                  | VARCHAR2(1 char)     | 本筆核准額度是否應計入DBR22倍規範之金額                                                                     |   |
|    | DBR22_AMOUNT                             | NUMBER(18, 3)         | 應計入DBR22倍規範之金額                                                                             |   |
|    | DBR22_REASON                             | VARCHAR2(2 char)     | 不計入DBR22倍規範之原因                                                                             |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_ACCOUNT_EXAMINE

#### 房貸總行審核額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | ACCOUNT_NO                               | VARCHAR2(50 char)    | 申請號碼                                                                                       |   |
|    | MARGIN_CENTER                            | VARCHAR2(4 char)     | 利潤中心                                                                                       |   |
|    | COLLATERAL_MARK                          | VARCHAR2(1 char)     | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                     |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | TYPE                                     | VARCHAR2(1 char)     | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                               |   |
|    | SUBJECT                                  | VARCHAR2(3 char)     | 授信科目細項                                                                                     |   |
|    | AMOUNT                                   | NUMBER(18, 3)         | 額度                                                                                         |   |
|    | PROJECT_NO                               | VARCHAR2(5 char)     | 專案代號                                                                                       |   |
|    | PERIOD                                   | VARCHAR2(9 char)     | 授信期間                                                                                       |   |
|    | PERIOD_UNIT                              | VARCHAR2(1 char)     | 授信期間單位(1: 年, 2: 月, 3: 日, 4: 特定日)                                                                  |   |
|    | USEWAY                                   | VARCHAR2(1 char)     | 動用方式(1: 循環, 2:ㄧ次撥貸, 3: 多次撥貸)                                                                   |   |
|    | AVAILABLE_PERIOD                         | VARCHAR2(9 char)     | 批覆書有效期限                                                                                    |   |
|    | AVAILABLE_PERIOD_UNIT                    | VARCHAR2(1 char)     | 批覆書有效期限單位(1: 月, 2: 年，3: 特定日)                                                                   |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | COMPARE_DESC                             | VARCHAR2(1000 char)  | 利害關係人檢核表_其他說明                                                                              |   |
|    | PURPOSE                                  | VARCHAR2(3 char)     | 授信用途                                                                                       |   |
|    | PURPOSE_OTHER                            | VARCHAR2(200 char)   | 授信用途_其他說明                                                                                  |   |
|    | PAYMENT                                  | VARCHAR2(2 char)     | 還款方式                                                                                       |   |
|    | PAYMENT_OTHER                            | VARCHAR2(200 char)   | 還款方式_其他說明                                                                                  |   |
|    | PAY_SOURCE                               | VARCHAR2(100 char)   | 還款財源                                                                                       |   |
|    | PAY_SOURCE_OTHER                         | VARCHAR2(200 char)   | 還款財源_其他說明                                                                                  |   |
|    | SUBJECT_DETAIL                           | VARCHAR2(3 char)     | 科目子目                                                                                       |   |
|    | LIMIT_PERIOD                             | VARCHAR2(9 char)     | 寬限期間                                                                                       |   |
|    | LIMIT_PERIOD_UNIT                        | VARCHAR2(1 char)     | 寬限期間(1: 月, 2: 年，3: 特定日)                                                                        |   |
|    | EXT_APRV_NO                              | VARCHAR2(12 char)    | 若是展期案件，要輸入舊核號                                                                              |   |
|    | EXPENSES_DATE                            | TIMESTAMP            | 預定用款日期                                                                                     |   |
|    | DEADLINE                                 | VARCHAR2(5 char)     | 借款期限                                                                                       |   |
|    | DEADLINE_UNIT                            | VARCHAR2(1 char)     | 借款期限_單位(1: 個月, 2: 年)                                                                          |   |
|    | DEBT_USE                                 | VARCHAR2(3 char)     | 借款用途                                                                                       |   |
|    | DEBT_USE_OTHER                           | VARCHAR2(200 char)   | 借款用途_其他說明                                                                                  |   |
|    | RESTRICT_REFUND                          | VARCHAR2(3 char)     | 限制提前清償                                                                                     |   |
|    | RESTRICT_ALTER                           | VARCHAR2(3 char)     | 限制塗銷                                                                                       |   |
|    | REMARK                                   | VARCHAR2(1000 char)  | 擬承作條件                                                                                      |   |
|    | ACCOUNT_STATUS                           | VARCHAR2(1 char)     | 狀態(1: 核准2: 緩議)                                                                               |   |
|    | QUERY_UID_6E027                          | VARCHAR2(36 char)    | 發動6E027的query_uid                                                                          |   |
|    | STATUS_6E027                             | VARCHAR2(1 char)     | 6E027狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6E030                          | VARCHAR2(36 char)    | 發動6E030的query_uid                                                                          |   |
|    | STATUS_6E030                             | VARCHAR2(1 char)     | 6E030狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6C001                          | VARCHAR2(36 char)    | 發動6C001的query_uid                                                                          |   |
|    | STATUS_6C001                             | VARCHAR2(1 char)     | 6C001狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | IS_PAY                                   | VARCHAR2(1 char)     | 本案是否代償                                                                                     |   |
|    | IS_CANCEL                                | VARCHAR2(1 char)     | 是否註銷(0: 否, 1: 是)                                                                              |   |
|    | ACCOUNT_NO_NEW                           | VARCHAR2(12 char)    | 新申請號碼                                                                                      |   |
|    | LIMIT_REFUND                             | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | REFUND_UNIT                              | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | LIMIT_ALTER                              | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | ALTER_UNIT                               | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | PAY_SOURCE_MAIN                          | VARCHAR2(3 char)     | 主要還款財源                                                                                     |   |
|    | ISDBR22                                  | VARCHAR2(1 char)     | 本筆核准額度是否應計入DBR22倍規範之金額                                                                     |   |
|    | DBR22_AMOUNT                             | NUMBER(18, 3)         | 應計入DBR22倍規範之金額                                                                             |   |
|    | DBR22_REASON                             | VARCHAR2(2 char)     | 不計入DBR22倍規範之原因                                                                             |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_ACCOUNT_NEW

#### 房貸核准額度資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | ACCOUNT_NO                               | VARCHAR2(50 char)    | 申請號碼                                                                                       |   |
|    | MARGIN_CENTER                            | VARCHAR2(4 char)     | 利潤中心                                                                                       |   |
|    | COLLATERAL_MARK                          | VARCHAR2(1 char)     | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                     |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | TYPE                                     | VARCHAR2(1 char)     | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                               |   |
|    | SUBJECT                                  | VARCHAR2(3 char)     | 授信科目細項                                                                                     |   |
|    | AMOUNT                                   | NUMBER(18, 3)         | 額度                                                                                         |   |
|    | PROJECT_NO                               | VARCHAR2(5 char)     | 專案代號                                                                                       |   |
|    | PERIOD                                   | VARCHAR2(9 char)     | 授信期間                                                                                       |   |
|    | PERIOD_UNIT                              | VARCHAR2(1 char)     | 授信期間單位(1: 年, 2: 月, 3: 日, 4: 特定日)                                                                  |   |
|    | USEWAY                                   | VARCHAR2(1 char)     | 動用方式(1: 循環, 2:ㄧ次撥貸, 3: 多次撥貸)                                                                   |   |
|    | AVAILABLE_PERIOD                         | VARCHAR2(9 char)     | 批覆書有效期限                                                                                    |   |
|    | AVAILABLE_PERIOD_UNIT                    | VARCHAR2(1 char)     | 批覆書有效期限單位(1: 月, 2: 年，3: 特定日)                                                                   |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | COMPARE_DESC                             | VARCHAR2(1000 char)  | 利害關係人檢核表_其他說明                                                                              |   |
|    | PURPOSE                                  | VARCHAR2(3 char)     | 授信用途                                                                                       |   |
|    | PURPOSE_OTHER                            | VARCHAR2(200 char)   | 授信用途_其他說明                                                                                  |   |
|    | PAYMENT                                  | VARCHAR2(2 char)     | 還款方式                                                                                       |   |
|    | PAYMENT_OTHER                            | VARCHAR2(200 char)   | 還款方式_其他說明                                                                                  |   |
|    | PAY_SOURCE                               | VARCHAR2(100 char)   | 還款財源                                                                                       |   |
|    | PAY_SOURCE_OTHER                         | VARCHAR2(200 char)   | 還款財源_其他說明                                                                                  |   |
|    | SUBJECT_DETAIL                           | VARCHAR2(3 char)     | 科目子目                                                                                       |   |
|    | LIMIT_PERIOD                             | VARCHAR2(9 char)     | 寬限期間                                                                                       |   |
|    | LIMIT_PERIOD_UNIT                        | VARCHAR2(1 char)     | 寬限期間(1: 月, 2: 年，3: 特定日)                                                                        |   |
|    | EXT_APRV_NO                              | VARCHAR2(12 char)    | 若是展期案件，要輸入舊核號                                                                              |   |
|    | EXPENSES_DATE                            | TIMESTAMP            | 預定用款日期                                                                                     |   |
|    | DEADLINE                                 | VARCHAR2(5 char)     | 借款期限                                                                                       |   |
|    | DEADLINE_UNIT                            | VARCHAR2(1 char)     | 借款期限_單位(1: 個月, 2: 年)                                                                          |   |
|    | DEBT_USE                                 | VARCHAR2(3 char)     | 借款用途                                                                                       |   |
|    | DEBT_USE_OTHER                           | VARCHAR2(200 char)   | 借款用途_其他說明                                                                                  |   |
|    | RESTRICT_REFUND                          | VARCHAR2(3 char)     | 限制提前清償                                                                                     |   |
|    | RESTRICT_ALTER                           | VARCHAR2(3 char)     | 限制塗銷                                                                                       |   |
|    | REMARK                                   | VARCHAR2(1000 char)  | 擬承作條件                                                                                      |   |
|    | ACCOUNT_STATUS                           | VARCHAR2(1 char)     | 狀態(1: 核准2: 緩議)                                                                               |   |
|    | QUERY_UID_6E027                          | VARCHAR2(36 char)    | 發動6E027的query_uid                                                                          |   |
|    | STATUS_6E027                             | VARCHAR2(1 char)     | 6E027狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6E030                          | VARCHAR2(36 char)    | 發動6E030的query_uid                                                                          |   |
|    | STATUS_6E030                             | VARCHAR2(1 char)     | 6E030狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | QUERY_UID_6C001                          | VARCHAR2(36 char)    | 發動6C001的query_uid                                                                          |   |
|    | STATUS_6C001                             | VARCHAR2(1 char)     | 6C001狀態(1：上傳成功，2：上傳失敗，3：上傳中)                                                               |   |
|    | IS_PAY                                   | VARCHAR2(1 char)     | 本案是否代償                                                                                     |   |
|    | IS_CANCEL                                | VARCHAR2(1 char)     | 是否註銷(0: 否, 1: 是)                                                                              |   |
|    | ACCOUNT_NO_NEW                           | VARCHAR2(12 char)    | 新申請號碼                                                                                      |   |
|    | LIMIT_REFUND                             | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | REFUND_UNIT                              | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | LIMIT_ALTER                              | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | ALTER_UNIT                               | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | PAY_SOURCE_MAIN                          | VARCHAR2(3 char)     | 主要還款財源                                                                                     |   |
|    | ISDBR22                                  | VARCHAR2(1 char)     | 本筆核准額度是否應計入DBR22倍規範之金額                                                                     |   |
|    | DBR22_AMOUNT                             | NUMBER(18, 3)         | 應計入DBR22倍規範之金額                                                                             |   |
|    | DBR22_REASON                             | VARCHAR2(2 char)     | 不計入DBR22倍規範之原因                                                                             |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_CHECK_REPORT

#### 房貸授信審核表(批覆表)檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | ACCOUNT_NO                               | VARCHAR2(50 char)    | 申請號碼                                                                                       |   |
|    | MARGIN_CENTER                            | VARCHAR2(4 char)     | 利潤中心                                                                                       |   |
|    | COLLATERAL_MARK                          | VARCHAR2(1 char)     | 擔保註記(0：純信用，1：擔保，2：副擔保)                                                                     |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | TYPE                                     | VARCHAR2(1 char)     | 授信科目大項(1：直接授信，2：間接受信，3：外匯授信)                                                               |   |
|    | SUBJECT                                  | VARCHAR2(3 char)     | 授信科目細項                                                                                     |   |
|    | AMOUNT                                   | NUMBER(18, 3)         | 額度                                                                                         |   |
|    | PROJECT_NO                               | VARCHAR2(5 char)     | 專案代號                                                                                       |   |
|    | PERIOD                                   | VARCHAR2(9 char)     | 授信期間                                                                                       |   |
|    | PERIOD_UNIT                              | VARCHAR2(1 char)     | 授信期間單位(1: 年, 2: 月, 3: 日, 4: 特定日)                                                                  |   |
|    | USEWAY                                   | VARCHAR2(1 char)     | 動用方式(1: 循環, 2:ㄧ次撥貸, 3: 多次撥貸)                                                                   |   |
|    | AVAILABLE_PERIOD                         | VARCHAR2(9 char)     | 批覆書有效期限                                                                                    |   |
|    | AVAILABLE_PERIOD_UNIT                    | VARCHAR2(1 char)     | 批覆書有效期限單位(1: 月, 2: 年，3: 特定日)                                                                   |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | COMPARE_DESC                             | VARCHAR2(1000 char)  | 利害關係人檢核表_其他說明                                                                              |   |
|    | PURPOSE                                  | VARCHAR2(3 char)     | 授信用途                                                                                       |   |
|    | PURPOSE_OTHER                            | VARCHAR2(200 char)   | 授信用途_其他說明                                                                                  |   |
|    | PAYMENT                                  | VARCHAR2(2 char)     | 還款方式                                                                                       |   |
|    | PAYMENT_OTHER                            | VARCHAR2(200 char)   | 還款方式_其他說明                                                                                  |   |
|    | PAY_SOURCE                               | VARCHAR2(100 char)   | 還款財源                                                                                       |   |
|    | PAY_SOURCE_OTHER                         | VARCHAR2(200 char)   | 還款財源_其他說明                                                                                  |   |
|    | SUBJECT_DETAIL                           | VARCHAR2(3 char)     | 科目子目                                                                                       |   |
|    | LIMIT_PERIOD                             | VARCHAR2(9 char)     | 寬限期間                                                                                       |   |
|    | LIMIT_PERIOD_UNIT                        | VARCHAR2(1 char)     | 寬限期間(1: 月, 2: 年，3: 特定日)                                                                        |   |
|    | EXT_APRV_NO                              | VARCHAR2(12 char)    | 若是展期案件，要輸入舊核號                                                                              |   |
|    | EXPENSES_DATE                            | TIMESTAMP            | 預定用款日期                                                                                     |   |
|    | DEADLINE                                 | VARCHAR2(5 char)     | 借款期限                                                                                       |   |
|    | DEADLINE_UNIT                            | VARCHAR2(1 char)     | 借款期限_單位(1: 個月, 2: 年)                                                                          |   |
|    | DEBT_USE                                 | VARCHAR2(3 char)     | 借款用途                                                                                       |   |
|    | DEBT_USE_OTHER                           | VARCHAR2(200 char)   | 借款用途_其他說明                                                                                  |   |
|    | RESTRICT_REFUND                          | VARCHAR2(3 char)     | 限制提前清償                                                                                     |   |
|    | RESTRICT_ALTER                           | VARCHAR2(3 char)     | 限制塗銷                                                                                       |   |
|    | REMARK                                   | VARCHAR2(1000 char)  | 擬承作條件                                                                                      |   |
|    | ACCOUNT_STATUS                           | VARCHAR2(1 char)     | 狀態(1: 核准2: 緩議)                                                                               |   |
|    | IS_PAY                                   | VARCHAR2(1 char)     | 本案是否代償                                                                                     |   |
|    | IS_CANCEL                                | VARCHAR2(1 char)     | 是否註銷(0: 否, 1: 是)                                                                              |   |
|    | ACCOUNT_NO_NEW                           | VARCHAR2(12 char)    | 新申請號碼                                                                                      |   |
|    | LIMIT_REFUND                             | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | REFUND_UNIT                              | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | LIMIT_ALTER                              | VARCHAR2(9 char)     | 限制清償                                                                                       |   |
|    | ALTER_UNIT                               | VARCHAR2(1 char)     | 限制清償_單位                                                                                    |   |
|    | PAY_SOURCE_MAIN                          | VARCHAR2(3 char)     | 主要還款財源                                                                                     |   |
|    | ISDBR22                                  | VARCHAR2(1 char)     | 本筆核准額度是否應計入DBR22倍規範之金額                                                                     |   |
|    | DBR22_AMOUNT                             | NUMBER(18, 3)         | 應計入DBR22倍規範之金額                                                                             |   |
|    | DBR22_REASON                             | VARCHAR2(2 char)     | 不計入DBR22倍規範之原因                                                                             |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_CHECK_REPORT_GUARANTEE

#### 房貸借保人還款能力資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
| PK | BUS_TYPE                                 | VARCHAR2(50 char)    | 業務別(1: 分行審核表, 2: 總行審核表, 3: 批覆書)                                                                 |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | RCV_AO                                   | VARCHAR2(5 char)     | 承作AO編號                                                                                     |   |
|    | RCV_AO_NAME                              | VARCHAR2(50 char)    | 承作AO姓名                                                                                     |   |
|    | LOAN_WAY                                 | VARCHAR2(2 char)     | 案件性質(參考Maintain_Loan_Way)                                                                  |   |
|    | FINALLYCHECKLEVEL                        | VARCHAR2(10 char)    | 核定層級                                                                                       |   |
|    | KNOW_CODE                                | VARCHAR2(3 char)     | 案件來源                                                                                       |   |
|    | ACC_BR_CODE                              | VARCHAR2(4 char)     | 記帳單位                                                                                       |   |
|    | SALES_BR_CODE                            | VARCHAR2(11 char)    | 推廣單位                                                                                       |   |
|    | SALESMAN_ID                              | VARCHAR2(5 char)     | 推廣人員編號                                                                                     |   |
|    | SALESMAN_NAME                            | VARCHAR2(50 char)    | 推廣人員姓名                                                                                     |   |
|    | ISRELATED                                | VARCHAR2(5 char)     | 是否為本行利害關係人(0: 否1: 是)                                                                         |   |
|    | MEETING_YEAR                             | INTEGER              | 授審會_年                                                                                      |   |
|    | MEETING_MONTH                            | INTEGER              | 授審會_月                                                                                      |   |
|    | MEETING_DAY                              | INTEGER              | 授審會_日                                                                                      |   |
|    | MEETING_SEQNO                            | INTEGER              | 授審會_次                                                                                      |   |
|    | SUBTOTAL_CURRENCY                        | VARCHAR2(3 char)     | 額度合計幣別                                                                                     |   |
|    | SUBTOTAL                                 | NUMBER(18, 3)         | 額度合計                                                                                       |   |
|    | APPROVE_DATE                             | TIMESTAMP            | 核准日期                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | IMM_DEBTTYPE                             | VARCHAR2(1 char)     | 設定抵押權種類_大項(0：普通抵押權1：最高限額抵押權)                                                               |   |
|    | ISORIGIN_SET                             | VARCHAR2(1 char)     | 援用貴行原設定之債務範圍(0: 否1: 是)                                                                       |   |
|    | ISLNREL_NEAR                             | VARCHAR2(1 char)     | 是否為準利害關係人(0: 否1: 是)                                                                          |   |
|    | ORIGIN_LOAN_WAY                          | VARCHAR2(2 char)     | 授信方式ID(參考Maintain_Loan_Way)                                                                |   |
|    | RESOURCEX                                | VARCHAR2(4 char)     | 案件來源                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_CSCA

#### 房貸A卡評分資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
| PK | CUST_UID                                 | VARCHAR2(36 char)    | 客戶pk                                                                                       |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | 還款能力pk                                                                                     |   |
|    | CUST_TYPE                                | VARCHAR2(1 char)     | 客戶別(1: 主要借款人3: 保證人)                                                                          |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | YEAR_SAL                                 | NUMBER(18, 3)         | 年收入                                                                                        |   |
|    | DEBT_UNNORMAL                            | VARCHAR2(1 char)     | 聯徵中心、票據查詢及本行記錄(0：異常1：正常)                                                                   |   |
|    | JCIC_CREDIT                              | NUMBER(18, 3)         | 聯徵借款額度                                                                                     |   |
|    | JCIC_BALANCE                             | NUMBER(18, 3)         | 聯徵借款餘額                                                                                     |   |
|    | YEAR_PAYS                                | NUMBER(18, 3)         | 本次貸款年付金                                                                                    |   |
|    | OTHER_YEAR_PAYS                          | NUMBER(18, 3)         | 其他貸款年付金                                                                                    |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | YEAR_WORK                                | NUMBER(18, 3)         |                                                                                            |   |
|    | YEAR_OTHER                               | NUMBER(18, 3)         |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_CUSTOMER_MAIN

#### 房貸客戶主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                                     | VARCHAR2(36 char)    | 發查Uid                                                                                      |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 案件Uid                                                                                      |   |
|    | ACCOUNT_UID                              | VARCHAR2(36 char)    | 申請號碼Uid                                                                                    |   |
|    | ACCOUNT_NO                               | VARCHAR2(50 char)    | 申請號碼                                                                                       |   |
|    | SCID                                     | VARCHAR2(10 char)    | 評分卡卡號                                                                                      |   |
|    | NO                                       | VARCHAR2(4 char)     | 評分卡版本                                                                                      |   |
|    | REQUESTXML                               | VARCHAR2(1000 char)  | 查詢內容                                                                                       |   |
|    | REQUESTSTATUS                            | VARCHAR2(1 char)     | 查詢狀態                                                                                       |   |
|    | RESPONSEXML                              | VARCHAR2(1000 char)  | 回傳結果                                                                                       |   |
|    | RESPONSECODE                             | VARCHAR2(6 char)     | 回傳狀態代碼                                                                                     |   |
|    | RESPONSEMSG                              | VARCHAR2(200 char)   | 回傳訊息                                                                                       |   |
|    | PARSESTATUS                              | VARCHAR2(1 char)     | 解析狀態                                                                                       |   |
|    | SCORING_R                                | VARCHAR2(1 char)     | 評分結果                                                                                       |   |
|    | SCORING_S                                | NUMBER(19, 6)         | 評分分數                                                                                       |   |
|    | SCORING_K                                | INTEGER              | 評分等級                                                                                       |   |
|    | SCORING_P                                | NUMBER(19, 6)         | 違約率                                                                                        |   |
|    | CUTOFFSTATUS                             | VARCHAR2(1 char)     | 0: 達評分標準1: 未達評分標準                                                                            |   |
|    | DELETE_STATUS                            | VARCHAR2(1 char)     | 狀態(0: 有效1: 無效)                                                                               |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     |                                                                                            |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立者所屬分行代碼                                                                                  |   |
|    | CREATE_EMPID                             | VARCHAR2(10 char)    | 建立者員編                                                                                      |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立者角色                                                                                      |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 修改者所屬分行代碼                                                                                  |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(10 char)    | 修改者員編                                                                                      |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 修改者角色                                                                                      |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 修改日期                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_FEE

#### 房貸額度費用明細檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | 客戶主鍵                                                                                       |   |
| PK | CUSTOMER_ID                              | VARCHAR2(11 char)    | 統一編號                                                                                       |   |
|    | CNAME                                    | VARCHAR2(50 char)    | 個人姓名                                                                                       |   |
|    | ID_TYPE                                  | VARCHAR2(1 char)     | 身份別                                                                                        |   |
|    | LOAN_TYPE                                | VARCHAR2(2 char)     | 授信類型ID                                                                                     |   |
|    | LOAN_WAY                                 | VARCHAR2(2 char)     | 授信方式ID                                                                                     |   |
|    | DATA_SOURCE                              | VARCHAR2(1 char)     | 資料來源                                                                                       |   |
|    | APRV_NO                                  | VARCHAR2(12 char)    | 核准號碼                                                                                       |   |
|    | IS_COPY                                  | VARCHAR2(1 char)     | 案件引用                                                                                       |   |
|    | COPY_CASENO                              | VARCHAR2(20 char)    | 舊案之案件編號                                                                                    |   |
|    | COPY_LOAN_UID                            | VARCHAR2(36 char)    | 舊案之loan_uid                                                                                |   |
|    | COPY_DBNAME                              | VARCHAR2(50 char)    | 舊案loan_uid所存DB                                                                             |   |
|    | COPY_ACCOUNT_TYPE                        | VARCHAR2(1 char)     | 額度/保證人/擔保品複製來源                                                                             |   |
|    | COPY_CLOSE_BRANCH                        | VARCHAR2(1 char)     | 舊案結案分行                                                                                     |   |
|    | COPY_CUSTTYPE                            | VARCHAR2(1 char)     | 引用案件之身份別                                                                                   |   |
|    | COPY_SUCCESS                             | VARCHAR2(500 char)   | 存放成功複製的radio                                                                               |   |
|    | QUERY_UID_6E010                          | VARCHAR2(36 char)    | 發動6E010的query_uid                                                                          |   |
|    | STATUS_6E010                             | VARCHAR2(1 char)     | 6E010狀態                                                                                    |   |
|    | IS_RELATED                               | VARCHAR2(1 char)     | 利害關係人                                                                                      |   |
|    | CHANGE_LOAN_UID                          | VARCHAR2(36 char)    | 授變loan_uid                                                                                 |   |
|    | CHANGE_CREATE_DATE                       | TIMESTAMP            | 授變批覆書核准日期                                                                                  |   |
|    | QUERY_UID_6E023                          | VARCHAR2(36 char)    | 發動6E023的query_uid                                                                          |   |
|    | STATUS_6E023                             | VARCHAR2(1 char)     | 核心交易6E023上傳狀態                                                                              |   |
|    | FILL_DATE                                | VARCHAR2(8 char)     | 同一關係人填表日期                                                                                  |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_INTEREST_DETAIL_NEW

#### 房貸額度利率細明檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | 額度主鍵                                                                                       |   |
| PK | BUS_TYPE                                 | VARCHAR2(1 char)     | 業務別(1: AO, 2: 審查員, 3: 批覆書, 4: 利害關係人檢核表)                                                           |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | FEE_ID                                   | VARCHAR2(50 char)    | 手續費ID                                                                                      |   |
|    | FEE_OTHER                                | VARCHAR2(200 char)   | 手續費其他_說明                                                                                   |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | AMOUNT                                   | NUMBER(18, 3)         | 金額                                                                                         |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | FLAG                                     | VARCHAR2(1 char)     | 註記是否在批覆書階段新增                                                                               |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_INTEREST_NEW

#### 房貸額度利率主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | INTEREST_UID                             | VARCHAR2(36 char)    | House_Interest. Uid(利率主檔UID)                                                                |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | SECTION                                  | INTEGER              | 第N段利率(1: 第一段2: 第2段3: 第3段4: 第4段)                                                                |   |
|    | MS                                       | VARCHAR2(3 char)     | 起始月份                                                                                       |   |
|    | ME                                       | VARCHAR2(3 char)     | 結束月份                                                                                       |   |
|    | IS_FIXRATE                               | VARCHAR2(1 char)     | 是否為固定利率(0: 固定利率1: 加碼利率)                                                                      |   |
|    | ADDRATE                                  | NUMBER(18, 3)         | 加碼利率                                                                                       |   |
|    | POLICE                                   | NUMBER(18, 3)         | 政策性補貼息                                                                                     |   |
|    | APPLY                                    | NUMBER(18, 3)         | 適用利率                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_HOUSE_PERSON_PHONENUM

#### 房貸案件電話資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | ACCOUNT_UID                              | VARCHAR2(36 char)    | 額度主鍵                                                                                       |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | INTEREST_ID                              | VARCHAR2(4 char)     | 牌告利率ID                                                                                     |   |
|    | RATE                                     | NUMBER(18, 3)         | 指標利率                                                                                       |   |
|    | TOTAL_SECTION                            | INTEGER              | 分段別(1: 一段式2: 二段式3: 三段式4: 四段式)                                                                  |   |
|    | RATE_PHRASE                              | VARCHAR2(1000 char)  | 利率條件                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新人員分行別                                                                                  |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_APPL_BASE

#### 不動產鑑價主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    |                                                                                            |   |
|    | TYPE                                     | VARCHAR2(1 char)     | 電話類別(1: 戶籍電話2: 現居電話3: 手機4: 公司電話)                                                               |   |
|    | TEL_AREA                                 | VARCHAR2(3 char)     | 電話區碼                                                                                       |   |
|    | TEL_NO                                   | VARCHAR2(10 char)    | 電號號碼                                                                                       |   |
|    | TEL_EXTN                                 | VARCHAR2(10 char)    | 電話分機碼                                                                                      |   |
|    | MOBILE                                   | VARCHAR2(10 char)    | 行動電話                                                                                       |   |
| PK | HOUSE_PERSON_BASEDATA_UID                | VARCHAR2(36 char)    | Consume_Person_BaseData. UID                                                                |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_APPL_BUILD

#### 不動產鑑價建物資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵()                                                                                   |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系(zh-TW_zh-CN_en-US)                                                                      |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | APPRAISETYPE                             | VARCHAR2(2 char)     | 案件型態                                                                                       |   |
|    | BUSSINESSTYPE                            | VARCHAR2(2 char)     | 業務型態                                                                                       |   |
|    | BUSSINESSTYPE_OLD                        | VARCHAR2(2 char)     | 業務型態(舊)                                                                                    |   |
|    | BUSSINESSTYPE_R                          | VARCHAR2(500 char)   | 業務型態(R)                                                                                    |   |
|    | ISENTER                                  | VARCHAR2(2 char)     | 是否需要入內實勘                                                                                   |   |
|    | ISENTER_OLD                              | VARCHAR2(2 char)     | 是否需要入內實勘(舊)                                                                                |   |
|    | ISENTER_R                                | VARCHAR2(500 char)   | 是否需要入內實勘(R)                                                                                |   |
|    | TOUTPERSONNAME                           | VARCHAR2(50 char)    | 招攬人姓名                                                                                      |   |
|    | TOUTTEL_AREA_1                           | VARCHAR2(3 char)     | 招攬人電話區碼1                                                                                   |   |
|    | TOUTTEL_NO_1                             | VARCHAR2(10 char)    | 招攬人電話1                                                                                     |   |
|    | TOUTTEL_EXTN_1                           | VARCHAR2(5 char)     | 招攬人電話分機1                                                                                   |   |
|    | TOUTTEL_AREA_2                           | VARCHAR2(3 char)     | 招攬人電話區碼2                                                                                   |   |
|    | TOUTTEL_NO_2                             | VARCHAR2(10 char)    | 招攬人電話2                                                                                     |   |
|    | TOUTTEL_EXTN_2                           | VARCHAR2(5 char)     | 招攬人電話分機2                                                                                   |   |
|    | TOUTTEL_AREA_3                           | VARCHAR2(3 char)     | 招攬人電話區碼3                                                                                   |   |
|    | TOUTTEL_NO_3                             | VARCHAR2(10 char)    | 招攬人電話3                                                                                     |   |
|    | TOUTTEL_EXTN_3                           | VARCHAR2(5 char)     | 招攬人電話分機3                                                                                   |   |
|    | BORROWERNAME                             | VARCHAR2(50 char)    | 借款人姓名                                                                                      |   |
|    | BORROWERNAME_OLD                         | VARCHAR2(50 char)    | 借款人姓名(舊)                                                                                   |   |
|    | BORROWERNAME_R                           | VARCHAR2(500 char)   | 借款人姓名(R)                                                                                   |   |
|    | ID_TYPE                                  | VARCHAR2(1 char)     | 身份別                                                                                        |   |
|    | BORROWERID                               | VARCHAR2(10 char)    | 借款人身分證字號                                                                                   |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | LOANAMOUNT                               | NUMBER(18, 3)         | 申貸金額                                                                                       |   |
|    | LOANAMOUNT_OLD                           | NUMBER(18, 3)         | 申貸金額(舊)                                                                                    |   |
|    | LOANAMOUNT_R                             | VARCHAR2(500 char)   | 申貸金額(R)                                                                                    |   |
|    | BORROWERTEL_AREA_1                       | VARCHAR2(3 char)     | 借款人電話區碼1                                                                                   |   |
|    | BORROWERTEL_NO_1                         | VARCHAR2(10 char)    | 借款人電話1                                                                                     |   |
|    | BORROWERTEL_EXTN_1                       | VARCHAR2(5 char)     | 借款人電話分機1                                                                                   |   |
|    | BORROWERTEL_AREA_2                       | VARCHAR2(3 char)     | 借款人電話區碼2                                                                                   |   |
|    | BORROWERTEL_NO_2                         | VARCHAR2(10 char)    | 借款人電話2                                                                                     |   |
|    | BORROWERTEL_EXTN_2                       | VARCHAR2(5 char)     | 借款人電話分機2                                                                                   |   |
|    | BORROWERTEL_AREA_3                       | VARCHAR2(3 char)     | 借款人電話區碼3                                                                                   |   |
|    | BORROWERTEL_NO_3                         | VARCHAR2(10 char)    | 借款人電話3                                                                                     |   |
|    | BORROWERTEL_EXTN_3                       | VARCHAR2(5 char)     | 借款人電話分機3                                                                                   |   |
|    | OWNERNAME                                | VARCHAR2(50 char)    | 所有權人姓名                                                                                     |   |
|    | OWNERTEL_AREA_1                          | VARCHAR2(10 char)    | 所有權人電話區碼1                                                                                  |   |
|    | OWNERTEL_NO_1                            | VARCHAR2(20 char)    | 所有權人電話1                                                                                    |   |
|    | OWNERTEL_EXTN_1                          | VARCHAR2(10 char)    | 所有權人電話分機1                                                                                  |   |
|    | OWNERTEL_AREA_2                          | VARCHAR2(10 char)    | 所有權人電話區碼2                                                                                  |   |
|    | OWNERTEL_NO_2                            | VARCHAR2(20 char)    | 所有權人電話2                                                                                    |   |
|    | OWNERTEL_EXTN_2                          | VARCHAR2(10 char)    | 所有權人電話分機2                                                                                  |   |
|    | OWNERTEL_AREA_3                          | VARCHAR2(10 char)    | 所有權人電話區碼3                                                                                  |   |
|    | OWNERTEL_NO_3                            | VARCHAR2(20 char)    | 所有權人電話3                                                                                    |   |
|    | OWNERTEL_EXTN_3                          | VARCHAR2(10 char)    | 所有權人電話分機3                                                                                  |   |
|    | CONTACTNAME                              | VARCHAR2(50 char)    | 聯絡人姓名                                                                                      |   |
|    | CONTACTTEL_AREA_1                        | VARCHAR2(10 char)    | 聯絡人電話區碼1                                                                                   |   |
|    | CONTACTTEL_NO_1                          | VARCHAR2(20 char)    | 聯絡人電話1                                                                                     |   |
|    | CONTACTTEL_EXTN_1                        | VARCHAR2(10 char)    | 聯絡人電話分機1                                                                                   |   |
|    | CONTACTTEL_AREA_2                        | VARCHAR2(10 char)    | 聯絡人電話區碼2                                                                                   |   |
|    | CONTACTTEL_NO_2                          | VARCHAR2(20 char)    | 聯絡人電話2                                                                                     |   |
|    | CONTACTTEL_EXTN_2                        | VARCHAR2(10 char)    | 聯絡人電話分機2                                                                                   |   |
|    | CONTACTTEL_AREA_3                        | VARCHAR2(10 char)    | 聯絡人電話區碼3                                                                                   |   |
|    | CONTACTTEL_NO_3                          | VARCHAR2(20 char)    | 聯絡人電話3                                                                                     |   |
|    | CONTACTTEL_EXTN_3                        | VARCHAR2(10 char)    | 聯絡人電話分機3                                                                                   |   |
|    | ATTACH_1                                 | VARCHAR2(1 char)     | 土地謄本正本(1: 已備0: 免附)                                                                           |   |
|    | ATTACH_2                                 | VARCHAR2(1 char)     | 建物謄本正本(1: 已備0: 免附)                                                                           |   |
|    | ATTACH_3                                 | VARCHAR2(1 char)     | 地籍圖正本(1: 已備0: 免附)                                                                            |   |
|    | ATTACH_4                                 | VARCHAR2(1 char)     | 平面圖正本（含公設平面圖）(1: 已備0: 免附)                                                                    |   |
|    | ATTACH_5                                 | VARCHAR2(1 char)     | 前次鑑價報告(1: 已備0: 免附)                                                                           |   |
|    | ATTACH_6                                 | VARCHAR2(1 char)     | 分區使用證明書正本(1: 已備0: 免附)                                                                        |   |
|    | ATTACH_7                                 | VARCHAR2(1 char)     | 不動產買賣契約影本(1: 已備0: 免附)                                                                        |   |
|    | ATTACH_8                                 | VARCHAR2(1 char)     | 車位證明書影本或分管協議書(1: 已備0: 免附)                                                                    |   |
|    | ATTACH_9                                 | VARCHAR2(1 char)     | 租賃契約影本(1: 已備0: 免附)                                                                           |   |
|    | ATTACH_10                                | VARCHAR2(1 char)     | 興建計畫書或建照(1: 已備0: 免附)                                                                         |   |
|    | ATTACH_11                                | VARCHAR2(1 char)     | 其它(1: 已備0: 免附)                                                                               |   |
|    | APPRAISENO                               | VARCHAR2(10 char)    | 鑑價編號                                                                                       |   |
|    | ISCHARGE                                 | VARCHAR2(1 char)     | 是否收費(0: 否1: 是)                                                                               |   |
|    | IMMOVABLE_MAIN_UID                       | VARCHAR2(36 char)    | Immovable_Main. UID                                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_APPL_LAND

#### 不動產鑑價土地資料

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | ZIP_3                                    | VARCHAR2(3 char)     | 郵遞區號3碼                                                                                     |   |
|    | ZIP_2                                    | VARCHAR2(2 char)     | 郵遞區號2碼                                                                                     |   |
|    | CITYID                                   | VARCHAR2(10 char)    | 縣市代號                                                                                       |   |
|    | AREAID                                   | VARCHAR2(2 char)     | 縣市區域代號                                                                                     |   |
|    | NB                                       | VARCHAR2(12 char)    | 村里                                                                                         |   |
|    | NB_CODE                                  | VARCHAR2(1 char)     | 村里代碼                                                                                       |   |
|    | ND                                       | VARCHAR2(3 char)     | 鄰                                                                                          |   |
|    | NO                                       | VARCHAR2(100 char)   | 詳細地址                                                                                       |   |
|    | BUILDNO                                  | VARCHAR2(256 char)   | 建號                                                                                         |   |
|    | IMMOVABLE_APPL_BASE_UID                  | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_AUTH_REPORT_BASE

#### 鑑價報告主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CITYID                                   | VARCHAR2(10 char)    | 縣市代號                                                                                       |   |
|    | AREAID                                   | VARCHAR2(2 char)     | 縣市區域代號                                                                                     |   |
|    | IRID                                     | VARCHAR2(50 char)    | 縣市區域段小段代號                                                                                  |   |
|    | LANDNO                                   | VARCHAR2(256 char)   | 地號                                                                                         |   |
|    | IMMOVABLE_APPL_BASE_UID                  | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_AUTH_REPORT_BUILD_MAIN

#### 鑑價報告建物主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | AUTHENTICATEDATE                         | TIMESTAMP            | 估價日期                                                                                       |   |
|    | GETDATE                                  | TIMESTAMP            | 取得日期                                                                                       |   |
|    | MIX_DIV                                  | VARCHAR2(1 char)     | 0: 分別鑑估法1: 合併鑑估法                                                                             |   |
|    | NETUSUFRUCTUARYVALUE                     | NUMBER(18, 0)         | 『鑑價淨值(出租關係減值)』                                                                             |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_AUTH_REPORT_BUILD_SUB

#### 鑑價報告建物子檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | ZIP_3                                    | VARCHAR2(3 char)     | 郵遞區號3碼                                                                                     |   |
|    | ZIP_2                                    | VARCHAR2(2 char)     | 郵遞區號2碼                                                                                     |   |
|    | CITYID                                   | VARCHAR2(10 char)    | 縣市代號                                                                                       |   |
|    | AREAID                                   | VARCHAR2(2 char)     | 縣市區域代號                                                                                     |   |
|    | IRID                                     | VARCHAR2(50 char)    |                                                                                            |   |
|    | NB                                       | VARCHAR2(12 char)    | 村里                                                                                         |   |
|    | NB_CODE                                  | VARCHAR2(1 char)     | 村里代碼                                                                                       |   |
|    | ND                                       | VARCHAR2(3 char)     | 鄰                                                                                          |   |
|    | NO                                       | VARCHAR2(500 char)   | 詳細地址                                                                                       |   |
|    | FINISHDATE                               | TIMESTAMP            | 完工日期                                                                                       |   |
|    | ROADWIDE                                 | VARCHAR2(20 char)    | 臨路寬度                                                                                       |   |
|    | REGISTERREASON                           | VARCHAR2(2 char)     | 登記原因                                                                                       |   |
|    | MAINTAIN_BUILDMATERIAL_ID                | VARCHAR2(50 char)    | 結構材質                                                                                       |   |
|    | BUILDTOTALLEVEL                          | INTEGER              | 總樓層                                                                                        |   |
|    | BUILDLEVEL                               | VARCHAR2(500 char)   | 擔保品所在樓層                                                                                    |   |
|    | MAINTAIN_BUILDPURPOSE_ID                 | VARCHAR2(2 char)     | 使用類別(主要用途)                                                                                 |   |
|    | SCRAPVALUERATE                           | NUMBER(18, 0)         | 調整後殘值率(%)                                                                                  |   |
|    | USERSERVICERATE                          | NUMBER(18, 2)         | 公設比(使用者自己輸入的)                                                                              |   |
|    | USEDSTATE                                | VARCHAR2(2 char)     | 使用現況(01. 自住02. 閒置03. 投資04. 出租05. 無償供人使用09. 其他)                                                   |   |
|    | COMMERCEPRICE                            | NUMBER(18, 3)         | 買賣契約價格                                                                                     |   |
|    | COMMERCEDATE                             | TIMESTAMP            | 買賣契約日期                                                                                     |   |
|    | JCICBUILDMATERIALID                      | VARCHAR2(2 char)     | 建物主要建材ID                                                                                   |   |
|    | JCICBUILDPURPOSEID                       | VARCHAR2(2 char)     | 主建物主要用途ID                                                                                  |   |
|    | JCICBUILDPURPOSEMARK                     | VARCHAR2(100 char)   | 主建物主要用途空白格                                                                                 |   |
|    | OTHERBUILDPURPOSE                        | VARCHAR2(500 char)   | 附屬建物主要用途                                                                                   |   |
|    | DIVIDEADJUSTRATE                         | NUMBER(18, 2)         | 土地、建物分別估價法調整率, 四捨五入至整位數(最高不得逾50%)                                                           |   |
|    | UNITPRICE                                | NUMBER(18, 3)         | 建坪單價(土地、建物合併鑑估法用)                                                                          |   |
|    | STALLPRICE                               | NUMBER(18, 3)         | 車位價格(土地、建物合併鑑估法用)                                                                          |   |
|    | STALLNUM                                 | INTEGER              | 車位數(土地、建物合併鑑估法用)                                                                           |   |
|    | STALLAREASIZE                            | NUMBER(18, 2)         | 車位坪數(土地、建物合併鑑估法用)                                                                          |   |
|    | DEPOSIT                                  | NUMBER(18, 0)         | 出租押金                                                                                       |   |
|    | RENT                                     | NUMBER(18, 0)         | 出租月租金                                                                                      |   |
|    | TENANCY_S                                | TIMESTAMP            | 租期_起                                                                                       |   |
|    | TENANCY_E                                | TIMESTAMP            | 租期_迄                                                                                       |   |
| PK | IMMOVABLE_AUTH_REPORT_BASE_UID           | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TOTALAREASIZE                            | NUMBER(18, 2)         | 建物總坪數=fn_Immovable_BuildAreaSize(結案更新)                                                     |   |
|    | NETVALUE                                 | NUMBER(18, 3)         | 建物淨值=dbo.fn_Immovable_DivideBuildValue(結案更新)                                               |   |
|    | COMBINEVALUE                             | NUMBER(18, 3)         | 合併鑑估法_鑑價總值                                                                                 |   |
|    | MAINTAIN_BUILDINGVALUE                   | NUMBER(18, 0)         | 估價標準                                                                                       |   |
|    | INCREASE                                 | NUMBER(18, 0)         | 調整加成                                                                                       |   |
|    | USEYEAR                                  | INTEGER              | 使用年數                                                                                       |   |
|    | DEPRECIATIONAMOUNT                       | NUMBER(18, 2)         | 折舊金額                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_AUTH_REPORT_LAND_MAIN

#### 鑑價報告土地主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | REGISTERPURPOSE                          | VARCHAR2(2 char)     | 登記用途                                                                                       |   |
|    | REGISTERPURPOSEMARK                      | VARCHAR2(50 char)    | 其它登記用途填寫用                                                                                  |   |
|    | ISSERVICE                                | VARCHAR2(1 char)     | 列入公設比計算(1: 列入0: 不列入)                                                                         |   |
|    | SYMBOL                                   | VARCHAR2(1 char)     |                                                                                            |   |
|    | BUILDNO                                  | VARCHAR2(8 char)     | 建號                                                                                         |   |
|    | AREASIZE                                 | NUMBER(18, 2)         | 標示面積(平方公尺)                                                                                 |   |
|    | RIGHTSRANG_ALL                           | VARCHAR2(1 char)     | 權利範圍_全部(1: 是_0: 否)                                                                           |   |
|    | RIGHTSRANG_DENOMINATOR                   | NUMBER(18, 0)         | 權利範圍分母                                                                                     |   |
|    | RIGHTSRANG_NUMERATOR                     | NUMBER(18, 0)         | 權利範圍分子                                                                                     |   |
|    | OWNERID                                  | VARCHAR2(11 char)    | 所有權人ID                                                                                     |   |
|    | OWNERNAME                                | VARCHAR2(50 char)    | 所有權人姓名                                                                                     |   |
|    | STALLNUM                                 | INTEGER              | 車位數                                                                                        |   |
|    | STALLTYPE                                | VARCHAR2(2 char)     | 車位型式                                                                                       |   |
|    | MARK                                     | VARCHAR2(16000 char) | 備註                                                                                         |   |
| PK | IMMOVABLE_AUTH_REPORT_BUILD_MAIN_UID     | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_AUTH_REPORT_LAND_SUB

#### 鑑價報告土地子檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | CITYID                                   | VARCHAR2(10 char)    | 縣市代號                                                                                       |   |
|    | AREAID                                   | VARCHAR2(2 char)     | 縣市區域代號                                                                                     |   |
|    | IRID                                     | VARCHAR2(50 char)    | 縣市區域段小段代號                                                                                  |   |
|    | NO                                       | VARCHAR2(100 char)   | 土地座落空白填寫區                                                                                  |   |
|    | USEAREAID                                | VARCHAR2(2 char)     | 土地使用分區代碼                                                                                   |   |
|    | USETYPEID                                | VARCHAR2(2 char)     | 土地編定使用地類別                                                                                  |   |
|    | PUBLICVALUEDATE                          | TIMESTAMP            | 公告現值年份                                                                                     |   |
|    | OTHER                                    | VARCHAR2(16000 char) | 其他                                                                                         |   |
|    | UNITPRICE                                | NUMBER(18, 3)         | 土地單價(土地、建物分別鑑估法計算用)                                                                        |   |
| PK | IMMOVABLE_AUTH_REPORT_BASE_UID           | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TOTALAREASIZE                            | NUMBER(18, 2)         | 總坪數=fn_Immovable_LandAreaSize(結案更新)                                                        |   |
|    | LANDINCREMENTTAX                         | NUMBER(18, 3)         | 土地增值稅=fn_Immovable_LandIncrementTax(結案更新)                                                  |   |
|    | DIVIDELANDVALUE                          | NUMBER(18, 2)         | 取得「土地、建物分別鑑估法」的案件土地鑑價總值或單一筆土地鑑價總值。                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_LAND_DEVELOP

#### 土地開發表單

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | LANDNO                                   | VARCHAR2(8 char)     | 地號                                                                                         |   |
|    | OUTLINEID                                | VARCHAR2(2 char)     | 地目代碼                                                                                       |   |
|    | AREASIZE                                 | NUMBER(18, 2)         | 標示面積(平方公尺)                                                                                 |   |
|    | RIGHTSRANG_DENOMINATOR                   | NUMBER(18, 0)         | 權利範圍分母                                                                                     |   |
|    | RIGHTSRANG_NUMERATOR                     | NUMBER(18, 0)         | 權利範圍分子                                                                                     |   |
|    | OWNERID                                  | VARCHAR2(11 char)    | 所有權人ID                                                                                     |   |
|    | OWNERNAME                                | VARCHAR2(50 char)    | 所有權人姓名                                                                                     |   |
|    | PUBLICVALUE                              | NUMBER(18, 3)         | 公告現值(仟元/平方公尺)                                                                              |   |
|    | LASTVALUE                                | NUMBER(18, 3)         | 前次移轉現值(仟元/平方公尺)                                                                            |   |
|    | REGISTERDATE                             | TIMESTAMP            | 登記日期                                                                                       |   |
|    | PRICEINDEX                               | NUMBER(18, 1)         | 物價指數                                                                                       |   |
|    | MARK                                     | VARCHAR2(2 char)     | 備註(1: 道路用地2: 計劃道路3: 既成道路4: 不予估價)                                                               |   |
| PK | IMMOVABLE_AUTH_REPORT_LAND_MAIN_UID      | VARCHAR2(36 char)    | FK                                                                                         |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_LANDLOANREPORT

#### 土融專用勘查報告表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | TARGETNAME                               | VARCHAR2(200 char)   | 標的                                                                                         |   |
|    | REWARD_PARKING                           | NUMBER(18, 2)         | 獎勵停車                                                                                       |   |
|    | REWARD_SPACE                             | NUMBER(18, 2)         | 開放空間獎勵                                                                                     |   |
|    | REWARD_VOLUME                            | NUMBER(18, 2)         | 容積移轉獎勵                                                                                     |   |
|    | REWARD_CITYRENEW                         | NUMBER(18, 2)         | 都市更新獎勵                                                                                     |   |
|    | BASEMENTDIGRATIO                         | NUMBER(18, 0)         | 地下室開挖率                                                                                     |   |
|    | ASSIZE_PARKINGPARAM                      | NUMBER(18, 0)         | 法定停車位係數                                                                                    |   |
|    | ESTIMATERATE_1                           | NUMBER(18, 1)         | 本次評估比例參數1                                                                                  |   |
|    | ESTIMATERATE_2                           | NUMBER(18, 1)         | 本次評估比例參數2                                                                                  |   |
|    | ESTIMATERATE_3                           | NUMBER(18, 1)         | 本次評估比例參數3                                                                                  |   |
|    | ESTIMATERATE_4                           | NUMBER(18, 1)         | 本次評估比例參數4                                                                                  |   |
|    | BASEAREASIZE                             | NUMBER(18, 4)         | 基地面積(坪)                                                                                    |   |
|    | USEPURPOSE                               | VARCHAR2(50 char)    | 使用分區                                                                                       |   |
|    | COVERAGERATIO                            | NUMBER(18, 2)         | 建蔽率(%)                                                                                     |   |
|    | VOLUMERATIO                              | NUMBER(18, 2)         | 容積率(%)                                                                                     |   |
|    | REWARD_VOLUMERATIO                       | NUMBER(18, 2)         | 獎勵容積(%)                                                                                    |   |
|    | BUILDTOTALLEVEL                          | NUMBER(18, 0)         | 興建樓層                                                                                       |   |
|    | BASEMENTTOTALLEVEL                       | NUMBER(18, 0)         | 地下室層數                                                                                      |   |
|    | BUILDPERIODYEAR                          | NUMBER(18, 1)         | 興建期限(年)                                                                                    |   |
|    | GROUNDUNITAREASIZE                       | NUMBER(18, 2)         | 地面層樓地板面積(坪)                                                                                |   |
|    | GROUNDUNITPRICE                          | NUMBER(18, 0)         | 地面層樓單價                                                                                     |   |
|    | SECONDSTROYAVGPRICE                      | NUMBER(18, 0)         | 二樓以上平均單價                                                                                   |   |
|    | PARKINGUNITPRICE                         | NUMBER(18, 0)         | 停車場單價                                                                                      |   |
|    | BUILDUNITPRICE                           | NUMBER(18, 0)         | 營造單價                                                                                       |   |
|    | GAINRATE                                 | NUMBER(18, 0)         | 利潤率(Ｒ)                                                                                     |   |
|    | B_OWNCAPITAL_P                           | NUMBER(18, 0)         | 建築投資_自有資金比例                                                                                |   |
|    | B_OWNCAPITAL_R                           | NUMBER(18, 2)         | 建築投資_自有資金利率                                                                                |   |
|    | B_LOANCAPITAL_P                          | NUMBER(18, 0)         | 建築投資_借貸資金比例                                                                                |   |
|    | B_LOANCAPITAL_R                          | NUMBER(18, 2)         | 建築投資_借貸資金利率                                                                                |   |
|    | B_UNEARNEDRREVENUES_P                    | NUMBER(18, 0)         | 建築投資_預售收入比例                                                                                |   |
|    | B_UNEARNEDRREVENUES_R                    | NUMBER(18, 2)         | 建築投資_預售收入利率                                                                                |   |
|    | L_OWNCAPITAL_P                           | NUMBER(18, 0)         | 土地投資-自有資金-比例                                                                               |   |
|    | L_OWNCAPITAL_R                           | NUMBER(18, 2)         | 土地投資-自有資金-利率                                                                               |   |
|    | L_LOANCAPITAL_P                          | NUMBER(18, 0)         | 土地投資-借貸資金-比例                                                                               |   |
|    | L_LOANCAPITAL_R                          | NUMBER(18, 2)         | 土地投資-借貸資金-利率                                                                               |   |
|    | L_UNEARNEDRREVENUES_P                    | NUMBER(18, 0)         | 土地投資-預售收入-比例                                                                               |   |
|    | L_UNEARNEDRREVENUES_R                    | NUMBER(18, 2)         | 土地投資-預售收入-比例                                                                               |   |
|    | C_B_I_CAPITAL_P                          | NUMBER(18, 2)         | 資本利息綜合利率_建物投資本利息_比例                                                                        |   |
|    | C_L_I_CAPITAL_P                          | NUMBER(18, 2)         | 資本利息綜合利率_土地投資本利息_比例                                                                        |   |
|    | VERSION                                  | NUMBER(4, 0)          |                                                                                            |   |
|    | PRICETYPE                                | VARCHAR2(1 char)     |                                                                                            |   |
|    | MARK                                     | VARCHAR2(500 char)   |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_TARGETEXPLOREREPORT

#### 標的物勘查報告表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 案件編號                                                                                       |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | USEAREA                                  | VARCHAR2(50 char)    | 使用分區                                                                                       |   |
|    | DATEX                                    | TIMESTAMP            | 日期                                                                                         |   |
|    | COVERAGERATIO                            | NUMBER(18, 2)         | 建蔽率(%)                                                                                     |   |
|    | VOLUMERATIO                              | NUMBER(18, 2)         | 容積率(%)                                                                                     |   |
|    | WHICHSIDE                                | VARCHAR2(50 char)    | 臨路狀況: XX面臨路                                                                                 |   |
|    | ROADWIDE                                 | VARCHAR2(50 char)    | 臨路狀況: 臨X米現有道路                                                                               |   |
|    | RADIO_1                                  | VARCHAR2(1 char)     | 出入動線(1: 優2: 可3: 差)                                                                            |   |
|    | RADIO_2                                  | VARCHAR2(1 char)     | 交通狀況(1: 優2: 可3: 差)                                                                            |   |
|    | RADIO_3                                  | VARCHAR2(1 char)     | 學校、市場、公園等設施狀況(1: 有0: 無)                                                                      |   |
|    | RADIO_4                                  | VARCHAR2(1 char)     | 有無造成臨地為畸零地(1: 有0: 無)                                                                         |   |
|    | RADIO_5                                  | VARCHAR2(1 char)     | 出租(1: 有0: 無)                                                                                 |   |
|    | DEPOSIT                                  | NUMBER(18, 3)         | 出租押金                                                                                       |   |
|    | RENT                                     | NUMBER(18, 3)         | 出租月租金                                                                                      |   |
|    | TENANCY_S                                | TIMESTAMP            | 租期_起                                                                                       |   |
|    | TENANCY_E                                | TIMESTAMP            | 租期_迄                                                                                       |   |
|    | NOWUSERPURPOSE                           | VARCHAR2(2000 char)  | 標的物目前用途                                                                                    |   |
|    | POSITION_                                | VARCHAR2(2 char)     | 座(01: 座東朝西02: 座西朝東03: 座南朝北04: 座北朝南05: 座東南朝西北06: 座西北朝東南07: 座東北朝西南08: 座西南朝東北)                        |   |
|    | RADIO_6                                  | VARCHAR2(1 char)     | 地上物、現住戶、承租戶之有無(1: 有0: 無)                                                                     |   |
|    | RADIO_7                                  | VARCHAR2(1 char)     | 他人占用(1: 有0: 無)                                                                               |   |
|    | RADIO_8                                  | VARCHAR2(1 char)     | 開發基地內是否有國有地、水利地等問題(1: 有0: 無)                                                                 |   |
|    | RADIO_9                                  | VARCHAR2(1 char)     | 有無路權通行問題(1: 有0: 無)                                                                           |   |
|    | RADIO_10                                 | VARCHAR2(1 char)     | 產權完整性(1: 有0: 否)                                                                              |   |
|    | RADIO_11                                 | VARCHAR2(1 char)     | 是否為持分(1: 有0: 否)                                                                              |   |
|    | RADIO_12                                 | VARCHAR2(1 char)     | 是否有限制登記(1: 有0: 否)                                                                            |   |
|    | COMMENTX                                 | VARCHAR2(2000 char)  | 綜合評述                                                                                       |   |
|    | SIDETYPE                                 | VARCHAR2(1 char)     | 臨路狀況下拉選單(1: 現有道路2: 計畫道路)                                                                     |   |
|    | RADIO_4_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_5_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_6_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_7_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_8_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_9_MARK                             | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_10_MARK                            | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_11_MARK                            | VARCHAR2(500 char)   |                                                                                            |   |
|    | RADIO_12_MARK                            | VARCHAR2(500 char)   |                                                                                            |   |
|    | HAVEEXCELLENT                            | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_01                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_02                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_04                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_05                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_07                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_09                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_99                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | EXCELLENTCONDITION_MARK                  | VARCHAR2(500 char)   |                                                                                            |   |
|    | HAVEDISGUST                              | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_01                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_02                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_03                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_05                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_06                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_07                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_08                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_09                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_10                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_11                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_12                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_14                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_15                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_16                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_17                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_18                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_19                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_20                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_21                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_99                      | VARCHAR2(1 char)     |                                                                                            |   |
|    | DISGUSTCONDITION_MARK                    | VARCHAR2(500 char)   |                                                                                            |   |
|    | FLOOD                                    | VARCHAR2(1 char)     |                                                                                            |   |
|    | TRAFFICPOSITION                          | VARCHAR2(500 char)   |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_IMMOVABLE_VISITCASE

#### 訪價案例

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    |                                                                                            |   |
|    | TARGETNAME                               | VARCHAR2(50 char)    | 標的社區或大樓名稱                                                                                  |   |
|    | TARGETUSERATE                            | VARCHAR2(50 char)    | 標的社區或大樓使用率(四捨五入至整位數)                                                                       |   |
|    | HAVEMANAGER                              | VARCHAR2(1 char)     | 有無管理員(1: 有0: 無)                                                                              |   |
|    | TARGETUSEPURPOSE                         | VARCHAR2(2 char)     | 標的目前用途                                                                                     |   |
|    | TARGETUSEPURPOSEOTHER                    | VARCHAR2(60 char)    | 其他說明輸入框                                                                                    |   |
|    | TARGETUSEPURPOSENOTE                     | VARCHAR2(500 char)   | 標的目前用途說明                                                                                   |   |
|    | BUILDKIND                                | VARCHAR2(2 char)     | R1: 公寓_R2: 電梯大廈_R3：套房_R4：別墅_R5：透天厝_R6：樓中樓_B1：辦公_B2：店面_B3：廠房_C1：車位_99：其他                      |   |
|    | ROOM                                     | VARCHAR2(50 char)    | 標的隔間-房                                                                                     |   |
|    | LIVINGROOM                               | VARCHAR2(50 char)    | 標的隔間-廳                                                                                     |   |
|    | BATHROOM                                 | VARCHAR2(50 char)    | 標的隔間-衛                                                                                     |   |
|    | ROOM_MARK                                | VARCHAR2(500 char)   | 標的隔間-備註                                                                                    |   |
|    | POSITION_                                | VARCHAR2(2 char)     | 標的座向                                                                                       |   |
|    | HAVEIMPROVE                              | VARCHAR2(1 char)     | 建築改良物個別條件(1: 有0: 無)                                                                          |   |
|    | IMPROVECONDITION_01                      | VARCHAR2(1 char)     | 建築改良物個別條件_01_閒置(1: 選_0: 沒選)                                                                  |   |
|    | IMPROVECONDITION_02                      | VARCHAR2(1 char)     | 建築改良物個別條件_02_邊間(1: 選_0: 沒選)                                                                  |   |
|    | IMPROVECONDITION_03                      | VARCHAR2(1 char)     | 建築改良物個別條件_03_壁癌(1: 選_0: 沒選)                                                                  |   |
|    | IMPROVECONDITION_04                      | VARCHAR2(1 char)     | 建築改良物個別條件_04_畚斗屋(1: 選_0: 沒選)                                                                 |   |
|    | IMPROVECONDITION_05                      | VARCHAR2(1 char)     | 建築改良物個別條件_05_無水電(1: 選_0: 沒選)                                                                 |   |
|    | IMPROVECONDITION_06                      | VARCHAR2(1 char)     | 建築改良物個別條件_06_地磚龜裂凸起(1: 選_0: 沒選)                                                              |   |
|    | IMPROVECONDITION_07                      | VARCHAR2(1 char)     | 建築改良物個別條件_07_樓層高度低(1: 選_0: 沒選)                                                               |   |
|    | IMPROVECONDITION_08                      | VARCHAR2(1 char)     | 建築改良物個別條件_08_平面格局歪斜(1: 選_0: 沒選)                                                              |   |
|    | IMPROVECONDITION_09                      | VARCHAR2(1 char)     | 建築改良物個別條件_09_兩戶以上打通使用(1: 選_0: 沒選)                                                            |   |
|    | IMPROVECONDITION_10                      | VARCHAR2(1 char)     | 建築改良物個別條件_10_隔間配置不當，使用率低(1: 選_0: 沒選)                                                         |   |
|    | IMPROVECONDITION_11                      | VARCHAR2(1 char)     | 建築改良物個別條件_11_牆面樑柱龜裂(1: 選_0: 沒選)                                                              |   |
|    | IMPROVECONDITION_12                      | VARCHAR2(1 char)     | 建築改良物個別條件_12_裝潢佳(1: 選_0: 沒選)                                                                 |   |
|    | IMPROVECONDITION_13                      | VARCHAR2(1 char)     | 建築改良物個別條件_13_中央空調(1: 選_0: 沒選)                                                                |   |
|    | IMPROVECONDITION_14                      | VARCHAR2(1 char)     | 建築改良物個別條件_14_挑高屋(1: 選_0: 沒選)                                                                 |   |
|    | IMPROVECONDITION_14_HIGH                 | NUMBER(18, 2)         | 建築改良物個別條件_挑高屋_米                                                                            |   |
|    | IMPROVECONDITION_15                      | VARCHAR2(1 char)     | 建築改良物個別條件_15_私設夾層(1: 選_0: 沒選)                                                                |   |
|    | IMPROVECONDITION_15_SIZE                 | VARCHAR2(20 char)    | 私設夾層(約坪)                                                                                   |   |
|    | IMPROVECONDITION_16                      | VARCHAR2(1 char)     | 建築改良物個別條件_16_高級建材(1: 選_0: 沒選)                                                                |   |
|    | IMPROVECONDITION_17                      | VARCHAR2(1 char)     | 建築改良物個別條件_17_陽台未登記(1: 選_0: 沒選)                                                               |   |
|    | IMPROVECONDITION_17_SIZE                 | VARCHAR2(20 char)    | 陽台未登記(約坪)                                                                                  |   |
|    | IMPROVECONDITION_18                      | VARCHAR2(1 char)     | 建築改良物個別條件_18_使用空間大於登記面積（即增建情況）(1: 選_0: 沒選)                                                   |   |
|    | IMPROVECONDITION_18_TEXT                 | VARCHAR2(20 char)    | 使用空間大於登記面積（即增建約坪）                                                                          |   |
|    | IMPROVECONDITION_18_SIZE                 | VARCHAR2(20 char)    | 使用空間大於登記面積（即增建約坪）                                                                          |   |
|    | IMPROVECONDITION_99                      | VARCHAR2(1 char)     | 建築改良物個別條件_99_其他(1: 選_0: 沒選)                                                                  |   |
|    | IMPROVECONDITION_MARK                    | VARCHAR2(2000 char)  | 建築改良物個別條件_說明                                                                               |   |
|    | HAVEEXCELLENT                            | VARCHAR2(1 char)     | 優質設施(1: 有0: 無)                                                                               |   |
|    | EXCELLENTCONDITION_01                    | VARCHAR2(1 char)     | 優質設施_01_學區內                                                                                |   |
|    | EXCELLENTCONDITION_02                    | VARCHAR2(1 char)     | 優質設施_02_公園旁                                                                                |   |
|    | EXCELLENTCONDITION_03                    | VARCHAR2(1 char)     | 優質設施_03_景觀戶                                                                                |   |
|    | EXCELLENTCONDITION_04                    | VARCHAR2(1 char)     | 優質設施_04_捷運站                                                                                |   |
|    | EXCELLENTCONDITION_05                    | VARCHAR2(1 char)     | 優質設施_05_醫院旁                                                                                |   |
|    | EXCELLENTCONDITION_06                    | VARCHAR2(1 char)     | 優質設施_06_門前可停車                                                                              |   |
|    | EXCELLENTCONDITION_07                    | VARCHAR2(1 char)     | 優質設施_07_臨近市場                                                                               |   |
|    | EXCELLENTCONDITION_08                    | VARCHAR2(1 char)     | 優質設施_08_名宅                                                                                 |   |
|    | EXCELLENTCONDITION_09                    | VARCHAR2(1 char)     | 優質設施_09_運動場附近                                                                              |   |
|    | EXCELLENTCONDITION_99                    | VARCHAR2(1 char)     | 優質設施_99_其他                                                                                 |   |
|    | EXCELLENTCONDITION_MARK                  | VARCHAR2(2000 char)  | 優質設施說明                                                                                     |   |
|    | GARAGEFLOOR                              | VARCHAR2(100 char)   | 車庫所在樓層                                                                                     |   |
|    | GARAGENUMBER                             | VARCHAR2(100 char)   | 車庫編號                                                                                       |   |
|    | HAVEGARAGE                               | VARCHAR2(1 char)     | 車庫(1: 有0: 無)                                                                                 |   |
|    | GARAGENOTE                               | VARCHAR2(500 char)   | 車庫說明                                                                                       |   |
|    | HAVERENTOUT                              | VARCHAR2(1 char)     | 出租(1: 有0: 無)                                                                                 |   |
|    | RENTNOTE                                 | VARCHAR2(500 char)   | 出租說明                                                                                       |   |
|    | BREAKLEAKING                             | VARCHAR2(1 char)     | 裂縫及漏水(1: 有0: 無)                                                                              |   |
|    | FLOOD                                    | VARCHAR2(1 char)     | 淹水之慮(1: 有0: 無)                                                                               |   |
|    | HAVEDISGUST                              | VARCHAR2(1 char)     | 嫌惡設施(1: 有0: 無)                                                                               |   |
|    | DISGUSTCONDITION_01                      | VARCHAR2(1 char)     | 嫌惡設施_01_特種行業                                                                               |   |
|    | DISGUSTCONDITION_02                      | VARCHAR2(1 char)     | 嫌惡設施_02_特定行業                                                                               |   |
|    | DISGUSTCONDITION_03                      | VARCHAR2(1 char)     | 嫌惡設施_03_宗教建物                                                                               |   |
|    | DISGUSTCONDITION_04                      | VARCHAR2(1 char)     | 嫌惡設施_04_瑕疵建物                                                                               |   |
|    | DISGUSTCONDITION_05                      | VARCHAR2(1 char)     | 嫌惡設施_05_空氣污染                                                                               |   |
|    | DISGUSTCONDITION_06                      | VARCHAR2(1 char)     | 嫌惡設施_06_天橋、地下道                                                                             |   |
|    | DISGUSTCONDITION_07                      | VARCHAR2(1 char)     | 嫌惡設施_07_噪音                                                                                 |   |
|    | DISGUSTCONDITION_08                      | VARCHAR2(1 char)     | 嫌惡設施_08_捷運                                                                                 |   |
|    | DISGUSTCONDITION_09                      | VARCHAR2(1 char)     | 嫌惡設施_09_鐵路                                                                                 |   |
|    | DISGUSTCONDITION_10                      | VARCHAR2(1 char)     | 嫌惡設施_10_電線桿                                                                                |   |
|    | DISGUSTCONDITION_11                      | VARCHAR2(1 char)     | 嫌惡設施_11_死巷、路沖                                                                              |   |
|    | DISGUSTCONDITION_12                      | VARCHAR2(1 char)     | 嫌惡設施_12_高架道路、陸橋                                                                            |   |
|    | DISGUSTCONDITION_13                      | VARCHAR2(1 char)     | 嫌惡設施_13_對角屋                                                                                |   |
|    | DISGUSTCONDITION_14                      | VARCHAR2(1 char)     | 嫌惡設施_14_殯儀館                                                                                |   |
|    | DISGUSTCONDITION_15                      | VARCHAR2(1 char)     | 嫌惡設施_15_墳場                                                                                 |   |
|    | DISGUSTCONDITION_16                      | VARCHAR2(1 char)     | 嫌惡設施_16_變電所                                                                                |   |
|    | DISGUSTCONDITION_17                      | VARCHAR2(1 char)     | 嫌惡設施_17_基地台                                                                                |   |
|    | DISGUSTCONDITION_18                      | VARCHAR2(1 char)     | 嫌惡設施_18_垃圾場、刑場                                                                             |   |
|    | DISGUSTCONDITION_19                      | VARCHAR2(1 char)     | 嫌惡設施_19_葬儀社、棺材店                                                                            |   |
|    | DISGUSTCONDITION_20                      | VARCHAR2(1 char)     | 嫌惡設施_20_高壓電線高塔                                                                             |   |
|    | DISGUSTCONDITION_21                      | VARCHAR2(1 char)     | 嫌惡設施_21_製造存放危險性產品之場所                                                                       |   |
|    | DISGUSTCONDITION_99                      | VARCHAR2(1 char)     | 嫌惡設施_99_其他                                                                                 |   |
|    | DISGUSTCONDITION_MARK                    | VARCHAR2(2000 char)  | 嫌惡設施說明                                                                                     |   |
|    | TRAFFICPOSITION                          | VARCHAR2(2000 char)  | 交通位置及附近狀況                                                                                  |   |
|    | ADJUSTMARK                               | VARCHAR2(2000 char)  | 土地、建物分別估價法調整_說明                                                                            |   |
|    | LIQUEFACTIONINFO                         | VARCHAR2(1 char)     | 土壤液化潛勢區查詢                                                                                  |   |
|    | HASBASEMENT                              | VARCHAR2(1 char)     | 是否有地下層                                                                                     |   |
|    | BASEMENT                                 | NUMBER(4, 0)          | 地下層數                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_JCIC_BAM095

#### 授信額度/擔保品/金額/還款紀錄資訊(聯徵資料)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 案件編號                                                                                       |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立人員角色                                                                                     |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員員編                                                                                     |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立人員分行別                                                                                    |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立時間                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 最後更新人員角色                                                                                   |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 最後更新人員員編                                                                                   |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 最後更新人員分行別                                                                                  |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 最後更新時間                                                                                     |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | zh-TW_zh-CN_en-US                                                                          |   |
| PK | UIDX                                     | VARCHAR2(36 char)    | PK                                                                                         |   |
|    | CURRENCY                                 | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | VISITCASETYPE                            | VARCHAR2(1 char)     | 訪價案例類型(1: 本案0: 其它案例)                                                                         |   |
|    | LAND                                     | VARCHAR2(300 char)   | 座落                                                                                         |   |
|    | BUILD                                    | VARCHAR2(300 char)   | 門牌                                                                                         |   |
|    | VISIT_DATE                               | TIMESTAMP            | 市調日期                                                                                       |   |
|    | ROADWIDE                                 | VARCHAR2(20 char)    | 臨路情形                                                                                       |   |
|    | LANDFORMS                                | VARCHAR2(2 char)     | 地形01: 長方形02: 正方形03: 矩形04: 梯形05: 不規則                                                             |   |
|    | GEOGRAPHY                                | VARCHAR2(2 char)     | 地勢01: 平坦02: 起伏不平03: 斜削                                                                        |   |
|    | USEAREAID                                | VARCHAR2(2 char)     | 使用分區-土地使用分區代碼                                                                              |   |
|    | USETYPEID                                | VARCHAR2(2 char)     | 使用分區-土地編定使用地類別                                                                             |   |
|    | MAINTAIN_BUILDMATERIAL_ID                | VARCHAR2(50 char)    | 結構材質ID                                                                                     |   |
|    | BUILDTOTALLEVEL                          | VARCHAR2(50 char)    | 總樓層                                                                                        |   |
|    | BUILDLEVEL                               | VARCHAR2(10 char)    | 擔保品所在樓層                                                                                    |   |
|    | HOUSEYEAR                                | VARCHAR2(50 char)    | 屋齡                                                                                         |   |
|    | LANDAREASIZE                             | VARCHAR2(50 char)    | 土地面積                                                                                       |   |
|    | BUILDAREASIZE                            | VARCHAR2(50 char)    | 建物面積                                                                                       |   |
|    | LANDUNITPRICE                            | VARCHAR2(30 char)    | 土地核算單價                                                                                     |   |
|    | BUILDUNITPRICE                           | VARCHAR2(30 char)    | 建物核算單價                                                                                     |   |
|    | PRICETYPE                                | VARCHAR2(1 char)     | 價格種類(1: 評估價2: 待售價3: 成交價4: 預售價5: 拍定價9: 其他)                                                        |   |
|    | TOTALVALUE                               | VARCHAR2(30 char)    | 總價                                                                                         |   |
|    | STALLNUM                                 | VARCHAR2(50 char)    | 車位數                                                                                        |   |
|    | STALLPRICE                               | VARCHAR2(30 char)    | 車位價格                                                                                       |   |
|    | COMPARE                                  | VARCHAR2(1 char)     | 標地物比較(1: 相當2: 較標的物佳3: 較標的物差)                                                                  |   |
|    | MARKETLANDUNITPRICE                      | VARCHAR2(30 char)    | 查詢行情土地單價                                                                                   |   |
|    | MARKETBUILDUNITPRICE                     | VARCHAR2(30 char)    | 查詢行情建物單價                                                                                   |   |
|    | MARKETSTALLPRICE                         | VARCHAR2(30 char)    |                                                                                            |   |
|    | COMNAME                                  | VARCHAR2(50 char)    | 公司                                                                                         |   |
|    | MENNAME                                  | VARCHAR2(50 char)    | 姓名                                                                                         |   |
|    | TEL_NO                                   | VARCHAR2(50 char)    | 電話                                                                                         |   |
|    | AREAMARKET                               | VARCHAR2(2000 char)  | 區域行情(VisitCaseType=0才會有值)                                                                  |   |
|    | SPECIAL                                  | VARCHAR2(2000 char)  | 標的物特性(VisitCaseType=0才會有值)                                                                 |   |
|    | OTHER                                    | VARCHAR2(2000 char)  | 其他事項(VisitCaseType=0才會有值)                                                                  |   |
|    | EXTERNALFIRSTAPPRAISAL                   | VARCHAR2(1 char)     | 是否有參考外部初估單                                                                                 |   |
|    | EXTERNALAPPRAISALCOMP                    | VARCHAR2(3 char)     | 估價公司                                                                                       |   |
|    | MAXAPPRAISALAMOUNT                       | NUMBER(18, 3)         | 本部最高鑑估總價(元)                                                                                |   |
|    | HOUSEPLUS_UNITPRICE                      | NUMBER(15, 3)         |                                                                                            |   |
|    | HOUSEPLUS_TOTALPRICE                     | NUMBER(15, 3)         |                                                                                            |   |
|    | REGIONALMARKETPRICESLOWER                | NUMBER(15, 0)         | 區域行情(下界)                                                                                   |   |
|    | REGIONALMARKETPRICESUPPER                | NUMBER(15, 0)         | 區域行情(上界)                                                                                   |   |
|    | HIGHUNITPRICEREASON                      | VARCHAR2(1000 char)  |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_JCIC_KRM040

#### 聯徵資料C

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                                     | VARCHAR2(36 char)    | 資料主鍵                                                                                       |   |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CUST_UID                                 | VARCHAR2(36 char)    | 客戶主鍵                                                                                       |   |
|    | CUSTTYPE                                 | VARCHAR2(10 char)    | 客戶別                                                                                        |   |
| PK | QUERY_UID                                | VARCHAR2(36 char)    | 查詢主鍵                                                                                       |   |
|    | REQUESTID                                | VARCHAR2(3 char)     | 查詢代號                                                                                       |   |
|    | REQUESTDATA                              | VARCHAR2(100 char)   | 查詢條件                                                                                       |   |
|    | DATA_YYY                                 | VARCHAR2(3 char)     | 資料年度                                                                                       |   |
|    | DATA_MM                                  | VARCHAR2(2 char)     | 資料月份                                                                                       |   |
|    | BANK_CODE                                | VARCHAR2(7 char)     | 行庫代號                                                                                       |   |
|    | BANK_NAME                                | VARCHAR2(40 char)    | 行庫名稱                                                                                       |   |
|    | ACCOUNT_CODE                             | VARCHAR2(1 char)     | 科目別                                                                                        |   |
|    | ACCOUNT_CODE2                            | VARCHAR2(1 char)     | 科目別註記                                                                                      |   |
|    | PURPOSE_CODE                             | VARCHAR2(1 char)     | 用途別                                                                                        |   |
|    | CONTRACT_AMT1                            | VARCHAR2(10 char)    | 綜合額度金額                                                                                     |   |
|    | CONTRACT_AMT                             | VARCHAR2(10 char)    | 分項額度金額                                                                                     |   |
|    | LOAN_AMT                                 | VARCHAR2(10 char)    | 未逾期金額                                                                                      |   |
|    | PASS_DUE_AMT                             | VARCHAR2(10 char)    | 逾期未還金額                                                                                     |   |
|    | PAY_CODE_12                              | VARCHAR2(12 char)    | 12期還款記錄                                                                                    |   |
|    | IS_KIND                                  | VARCHAR2(2 char)     | 擔保品類別                                                                                      |   |
|    | PROJECT_CODE                             | VARCHAR2(2 char)     | 政府專案貸款分類代碼                                                                                 |   |
|    | CO_LOAN                                  | VARCHAR2(1 char)     | 共同借款註記                                                                                     |   |
|    | UN_MARK                                  | VARCHAR2(1 char)     | 聯貸註記                                                                                       |   |
|    | U_YYYMMDD                                | VARCHAR2(8 char)     | 聯貸日期西元YYYYMMDD                                                                             |   |
|    | U_RATE                                   | VARCHAR2(6 char)     | 參貸比例百分比                                                                                    |   |
|    | IB_MARK                                  | VARCHAR2(1 char)     | 資金流向註記                                                                                     |   |
|    | IAB_BAN                                  | VARCHAR2(8 char)     | 資金流向非法人組織統編                                                                                |   |
|    | IAB_NAME                                 | VARCHAR2(60 char)    | 資金流向非法人組織名稱                                                                                |   |
|    | CONTRACT_MARK                            | VARCHAR2(1 char)     | 額度特別註記                                                                                     |   |
|    | CONTRACT_CODE                            | VARCHAR2(50 char)    | 本階額度代碼                                                                                     |   |
|    | CONTRACT_CODE1                           | VARCHAR2(50 char)    | 最高階額度代碼                                                                                    |   |
|    | CON_BAN                                  | VARCHAR2(10 char)    | 最高階額度所屬公司統編                                                                                |   |
|    | CON_NAME                                 | VARCHAR2(60 char)    | 最高階額度所屬公司名稱                                                                                |   |
|    | ACT_Y_MARK                               | VARCHAR2(1 char)     | Ｙ科目之額度註記                                                                                   |   |
|    | CONTRACT_AMT_Y                           | VARCHAR2(10 char)    | 現金卡日報Ｙ科目之可動用額度                                                                             |   |
|    | AC_AMT                                   | VARCHAR2(10 char)    | 授信1千元之原始金額                                                                                 |   |
|    | ASST_DATA_YYY                            | VARCHAR2(3 char)     | 債權證券化資料年                                                                                   |   |
|    | ASST_DATA_MM                             | VARCHAR2(2 char)     | 債權證券化資料月                                                                                   |   |
|    | ASST_IDN_BAN                             | VARCHAR2(10 char)    | 債權證券化受託機構統一編號                                                                              |   |
|    | ASST_NAME                                | VARCHAR2(60 char)    | 債權證券化受託機構名稱                                                                                |   |
|    | CURRENCY_CODE_3                          | VARCHAR2(3 char)     | 幣別代號                                                                                       |   |
|    | CYCLE_FLAG                               | VARCHAR2(1 char)     | 循環信用註記                                                                                     |   |
|    | OFF_FLAG                                 | VARCHAR2(1 char)     | 額度可否撤銷                                                                                     |   |
|    | FILLER                                   | VARCHAR2(30 char)    | 保留欄位                                                                                       |   |
|    | CURRENCYS                                | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | SORT                                     | INTEGER              | 資料排序                                                                                       |   |
|    | DATASORT                                 | NUMBER(19, 0)         | 交易排序                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(10 char)    | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(10 char)    | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_JCIC_KRM048

#### 信用卡戶帳款資訊(聯徵資料)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | UIDX                                     | VARCHAR2(36 char)    | 資料主鍵                                                                                       |   |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CUST_UID                                 | VARCHAR2(36 char)    | 客戶主鍵                                                                                       |   |
|    | CUSTTYPE                                 | VARCHAR2(10 char)    | 客戶別                                                                                        |   |
|    | QUERY_UID                                | VARCHAR2(36 char)    | 查詢主鍵                                                                                       |   |
|    | REQUESTID                                | VARCHAR2(3 char)     | 查詢代號                                                                                       |   |
|    | REQUESTDATA                              | VARCHAR2(100 char)   | 查詢條件                                                                                       |   |
|    | IDN_BAN                                  | VARCHAR2(10 char)    | 繳款人ID                                                                                      |   |
|    | BILL_DATE                                | VARCHAR2(7 char)     | 結帳日                                                                                        |   |
|    | ISSUE                                    | VARCHAR2(3 char)     | 發卡機構代號                                                                                     |   |
|    | ISSUE_NAME                               | VARCHAR2(24 char)    | 發卡機構名稱                                                                                     |   |
|    | BILL_MARK                                | VARCHAR2(2 char)     | 帳單別                                                                                        |   |
|    | CARD_TYPE                                | VARCHAR2(7 char)     | 信用卡別                                                                                       |   |
|    | PERM_LIMIT                               | VARCHAR2(7 char)     | 永久額度                                                                                       |   |
|    | TEMP_LIMIT                               | VARCHAR2(7 char)     | 臨時額度                                                                                       |   |
|    | CASH_LIMIT                               | VARCHAR2(7 char)     | 預借現金額度                                                                                     |   |
|    | PAYABLE                                  | VARCHAR2(9 char)     | 本期應付帳款_金額                                                                                  |   |
|    | CASH_LENT                                | VARCHAR2(8 char)     | 本期預借現金                                                                                     |   |
|    | LAST_PAYA                                | VARCHAR2(9 char)     | 上期應付帳款_金額                                                                                  |   |
|    | REVOL_BAL                                | VARCHAR2(9 char)     | 上期循環信用                                                                                     |   |
|    | PAY_STAT                                 | VARCHAR2(1 char)     | 上期繳款狀況代號_金額                                                                                |   |
|    | PAY_CODE                                 | VARCHAR2(1 char)     | 上期繳款狀況代號_時間                                                                                |   |
|    | REVOL_RATE                               | VARCHAR2(4 char)     | 上期循環比率                                                                                     |   |
|    | PRE_OWED                                 | VARCHAR2(8 char)     | 未到期分期償還待付金額                                                                                |   |
|    | DEBT_CODE                                | VARCHAR2(1 char)     | 債權狀態註記                                                                                     |   |
|    | CLOSE_CODE                               | VARCHAR2(1 char)     | 債權結案註記                                                                                     |   |
|    | CLEAR_DATE                               | VARCHAR2(7 char)     | 不良債權結案日期                                                                                   |   |
|    | CURRENCYS                                | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | SORT                                     | INTEGER              | 資料排序                                                                                       |   |
|    | DATASORT                                 | NUMBER(19, 0)         | 交易排序                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(10 char)    | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(10 char)    | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_MIXAPPLICATIONFORM

#### 雲端三合一申請資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | UIDX                                     | VARCHAR2(36 char)    | 資料主鍵                                                                                       |   |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
|    | CUST_UID                                 | VARCHAR2(36 char)    | 客戶主鍵                                                                                       |   |
|    | CUSTTYPE                                 | VARCHAR2(10 char)    | 客戶別                                                                                        |   |
| PK | QUERY_UID                                | VARCHAR2(36 char)    | 查詢主鍵                                                                                       |   |
|    | REQUESTID                                | VARCHAR2(3 char)     | 查詢代號                                                                                       |   |
|    | REQUESTDATA                              | VARCHAR2(100 char)   | 查詢條件                                                                                       |   |
|    | IDN_BAN                                  | VARCHAR2(10 char)    | 繳款人ID                                                                                      |   |
|    | BILL_DATE                                | VARCHAR2(7 char)     | 結帳日或資料基準日                                                                                  |   |
|    | ISSUE                                    | VARCHAR2(3 char)     | 發卡機構代號                                                                                     |   |
|    | ISSUE_NAME                               | VARCHAR2(24 char)    | 發卡機構名稱                                                                                     |   |
|    | BILL_MARK                                | VARCHAR2(2 char)     | 帳單別                                                                                        |   |
|    | CARD_TYPE                                | VARCHAR2(7 char)     | 信用卡別                                                                                       |   |
|    | PERM_LIMIT                               | VARCHAR2(7 char)     | 永久額度                                                                                       |   |
|    | TEMP_LIMIT                               | VARCHAR2(7 char)     | 臨時額度                                                                                       |   |
|    | CASH_LIMIT                               | VARCHAR2(7 char)     | 預借現金額度                                                                                     |   |
|    | PAYABLE                                  | VARCHAR2(9 char)     | 本期應付帳款/金額                                                                                  |   |
|    | CASH_LENT                                | VARCHAR2(8 char)     | 本期預借現金                                                                                     |   |
|    | LAST_PAYA                                | VARCHAR2(9 char)     | 上期應付帳款/金額                                                                                  |   |
|    | REVOL_BAL                                | VARCHAR2(9 char)     | 上期循環信用                                                                                     |   |
|    | PAY_STAT                                 | VARCHAR2(1 char)     | 上期繳款狀況代號_金額                                                                                |   |
|    | PAY_CODE                                 | VARCHAR2(1 char)     | 上期繳款狀況代號_時間                                                                                |   |
|    | REVOL_RATE                               | VARCHAR2(4 char)     | 上期循環比率                                                                                     |   |
|    | PRE_OWED                                 | VARCHAR2(8 char)     | 未到期分期償還待付金額                                                                                |   |
|    | DEBT_CODE                                | VARCHAR2(1 char)     | 債權狀態註記                                                                                     |   |
|    | CLOSE_CODE                               | VARCHAR2(1 char)     | 債權結案註記                                                                                     |   |
|    | CLEAR_DATE                               | VARCHAR2(7 char)     | 不良債權結案日期                                                                                   |   |
|    | M_W                                      | VARCHAR2(1 char)     | 週/月報別                                                                                      |   |
|    | PRE_SPENT                                | VARCHAR2(8 char)     | 消費分期                                                                                       |   |
|    | PRE_CASHED                               | VARCHAR2(8 char)     | 預借現金分期                                                                                     |   |
|    | PRE_BILLED                               | VARCHAR2(8 char)     | 帳單分期                                                                                       |   |
|    | RENEWED                                  | VARCHAR2(1 char)     | 週報已更新註記                                                                                    |   |
|    | FILLER                                   | VARCHAR2(30 char)    | 保留欄位                                                                                       |   |
|    | CURRENCYS                                | VARCHAR2(3 char)     | 幣別                                                                                         |   |
|    | SORT                                     | INTEGER              | 資料排序                                                                                       |   |
|    | DATASORT                                 | NUMBER(19, 0)         | 交易排序                                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(10 char)    | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(10 char)    | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_PARAS_ADM_AREA

#### 縣市區域代號代碼表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | AF_NO                                    | NUMBER(19, 0)         |                                                                                            |   |
|    | LOAN_UID_HOUSE                           | VARCHAR2(36 char)    |                                                                                            |   |
|    | LOAN_UID_CONSUME                         | VARCHAR2(36 char)    |                                                                                            |   |
|    | LOAN_UID_CAR                             | VARCHAR2(36 char)    |                                                                                            |   |
|    | CNAME                                    | VARCHAR2(50 char)    |                                                                                            |   |
|    | CUSTOMER_ID                              | VARCHAR2(11 char)    |                                                                                            |   |
|    | BIRTHDAY                                 | VARCHAR2(8 char)     |                                                                                            |   |
|    | MOBILE                                   | VARCHAR2(10 char)    |                                                                                            |   |
|    | HOME_TEL_NONTEL_REASON                   | VARCHAR2(1 char)     |                                                                                            |   |
|    | HOME_TEL                                 | VARCHAR2(26 char)    |                                                                                            |   |
|    | HOME_ADDR_ZIP                            | VARCHAR2(5 char)     |                                                                                            |   |
|    | HOME_ADDR_CITY                           | VARCHAR2(10 char)    |                                                                                            |   |
|    | HOME_ADDR_AREA                           | VARCHAR2(10 char)    |                                                                                            |   |
|    | HOME_ADDR_ADR                            | VARCHAR2(100 char)   |                                                                                            |   |
|    | CR_STATUS                                | VARCHAR2(1 char)     |                                                                                            |   |
|    | CR_ADDR_ZIP                              | VARCHAR2(5 char)     |                                                                                            |   |
|    | CR_ADDR_CITY                             | VARCHAR2(10 char)    |                                                                                            |   |
|    | CR_ADDR_AREA                             | VARCHAR2(10 char)    |                                                                                            |   |
|    | CR_ADDR_ADR                              | VARCHAR2(100 char)   |                                                                                            |   |
|    | EMAIL                                    | VARCHAR2(50 char)    |                                                                                            |   |
|    | MARRIAGE                                 | VARCHAR2(1 char)     |                                                                                            |   |
|    | CHILD                                    | NUMBER(10, 0)         |                                                                                            |   |
|    | EDUCATION                                | VARCHAR2(1 char)     |                                                                                            |   |
|    | SERVICE_NAME                             | VARCHAR2(50 char)    |                                                                                            |   |
|    | SERVICE_ID                               | VARCHAR2(11 char)    |                                                                                            |   |
|    | SERVICE_ADDR_ZIP                         | VARCHAR2(5 char)     |                                                                                            |   |
|    | SERVICE_ADDR_CITY                        | VARCHAR2(10 char)    |                                                                                            |   |
|    | SERVICE_ADDR_AREA                        | VARCHAR2(10 char)    |                                                                                            |   |
|    | SERVICE_ADDR_ADR                         | VARCHAR2(100 char)   |                                                                                            |   |
|    | SERVICE_TEL_NONTEL_REASON                | VARCHAR2(1 char)     |                                                                                            |   |
|    | SERVICE_TEL                              | VARCHAR2(26 char)    |                                                                                            |   |
|    | PROFESSION                               | VARCHAR2(20 char)    |                                                                                            |   |
|    | SENIORITY                                | NUMBER(10, 0)         |                                                                                            |   |
|    | INCOME                                   | NUMBER(5, 0)          |                                                                                            |   |
|    | INCOME_SOURCE                            | VARCHAR2(20 char)    |                                                                                            |   |
|    | INCOME_OTHER                             | VARCHAR2(50 char)    |                                                                                            |   |
|    | PROMOTIONS_EMPID                         | VARCHAR2(6 char)     |                                                                                            |   |
|    | HOUSE_CHECKED                            | VARCHAR2(1 char)     |                                                                                            |   |
|    | HOUSE_AMOUNT                             | NUMBER(5, 0)          |                                                                                            |   |
|    | HOUSE_PERIOD                             | NUMBER(10, 0)         |                                                                                            |   |
|    | CONSUME_CHECKED                          | VARCHAR2(1 char)     |                                                                                            |   |
|    | CONSUME_AMOUNT                           | NUMBER(5, 0)          |                                                                                            |   |
|    | CONSUME_PERIOD                           | NUMBER(10, 0)         |                                                                                            |   |
|    | CAR_CHECKED                              | VARCHAR2(1 char)     |                                                                                            |   |
|    | CAR_AMOUNT                               | NUMBER(5, 0)          |                                                                                            |   |
|    | CAR_PERIOD                               | NUMBER(10, 0)         |                                                                                            |   |
|    | GUAR_CNAME                               | VARCHAR2(50 char)    |                                                                                            |   |
|    | GUAR_MOBILE                              | VARCHAR2(10 char)    |                                                                                            |   |
|    | GUAR_TEL_NONTEL_REASON                   | VARCHAR2(1 char)     |                                                                                            |   |
|    | GUAR_TEL                                 | VARCHAR2(26 char)    |                                                                                            |   |
|    | HOUSE_DEBT_REASON                        | VARCHAR2(20 char)    |                                                                                            |   |
|    | CONSUME_DEBT_REASON                      | VARCHAR2(20 char)    |                                                                                            |   |
|    | CAR_DEBT_REASON                          | VARCHAR2(20 char)    |                                                                                            |   |
|    | GET_WAY                                  | VARCHAR2(2 char)     |                                                                                            |   |
|    | AUTHENTICATE                             | VARCHAR2(50 char)    |                                                                                            |   |
|    | SIGN_DATE                                | VARCHAR2(8 char)     |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_PARAS_ADM_CITY

#### 縣市代號代碼表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | CITYID                                   | VARCHAR2(50 char)    | 縣市代碼                                                                                       |   |
| PK | AREAID                                   | VARCHAR2(50 char)    | 區域代碼                                                                                       |   |
|    | AREANAME                                 | VARCHAR2(100 char)   | 區域名稱                                                                                       |   |
|    | ZIP                                      | VARCHAR2(5 char)     | 郵遞區號                                                                                       |   |
| PK | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | DISABLE                                  | VARCHAR2(1 char)     | 是否停用                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_PARAS_ADM_IR

#### 縣市區域段小段代號代碼表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | CITYID                                   | VARCHAR2(50 char)    | 縣市代碼                                                                                       |   |
|    | CITYNAME                                 | VARCHAR2(100 char)   | 縣市名稱                                                                                       |   |
|    | TEL_AREA                                 | VARCHAR2(4 char)     | 市話區碼                                                                                       |   |
| PK | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新員工                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | DATASORT                                 | INTEGER              |                                                                                            |   |
|    | DISABLE                                  | VARCHAR2(1 char)     | 是否停用                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_CUSTOMER_MAIN

#### 覆審客戶主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | CITYID                                   | VARCHAR2(50 char)    | 縣市代碼                                                                                       |   |
|    | AREAID                                   | VARCHAR2(50 char)    | 區域代碼                                                                                       |   |
|    | LNID                                     | VARCHAR2(50 char)    | 地所代碼                                                                                       |   |
|    | LNNAME                                   | VARCHAR2(100 char)   | 地所名稱                                                                                       |   |
|    | IRID                                     | VARCHAR2(50 char)    | 段小段代碼                                                                                      |   |
|    | IRNAME                                   | VARCHAR2(100 char)   | 段小段名稱                                                                                      |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | DISABLE                                  | VARCHAR2(1 char)     | 是否停用                                                                                       |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_DEBT

#### 資產負債表(一般)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件主鍵                                                                                     |   |
| PK | CUST_UID                                 | VARCHAR2(36 char)    | 借款人主鍵                                                                                      |   |
|    | CUSTOMER_ID                              | VARCHAR2(11 char)    | 統一編號                                                                                       |   |
|    | CNAME                                    | VARCHAR2(210 char)   | 個人姓名                                                                                       |   |
|    | ID_TYPE                                  | VARCHAR2(1 char)     | 身份別(1: 個人戶2: 公司戶3: OBU)                                                                       |   |
|    | RECHECK_TYPE                             | VARCHAR2(1 char)     | 覆審類型((1初貸覆審, 2企業追蹤覆審, 3重要個案實地調查, 4土地、農地案件覆查, 5消金信貸追蹤, 6總行實地抽樣覆審))參照：Maintain_ReCheck_Parameters |   |
|    | RPT_TYPE                                 | VARCHAR2(1 char)     | 業務分類(A分行, B法金, C小企中心, D房貸區域中心, E車貸中心, F行銷案件)參照：Maintain_ReCheck_Parameters                      |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | FINAL_GRADE                              | VARCHAR2(2 char)     |                                                                                            |   |
|    | ISUNITESLOAN                             | VARCHAR2(1 char)     |                                                                                            |   |
|    | ISNONCIRCULARLONGLOAN                    | VARCHAR2(1 char)     | 全案屬非循環之中長期授信，且未能提供最新財報                                                                     |   |
|    | ISLANDLOAN                               | VARCHAR2(1 char)     |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_DEBT_B

#### 資產負債表(營造)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
| PK | REPORT_UID                               | VARCHAR2(36 char)    | 財報pk                                                                                       |   |
| PK | DEBT_UID                                 | VARCHAR2(36 char)    | 資產負債表主檔(一般財報和同期比較)                                                                         |   |
|    | START_YY                                 | INTEGER              | 年度_起                                                                                       |   |
|    | START_MM                                 | INTEGER              | 月份_起                                                                                       |   |
|    | END_YY                                   | INTEGER              | 年度_迄                                                                                       |   |
|    | END_MM                                   | INTEGER              | 月份_迄                                                                                       |   |
|    | ASSET_TOTAL                              | NUMBER(18, 3)         | 資產總額                                                                                       |   |
|    | NET_TOTAL                                | NUMBER(18, 3)         | 負債及淨值總額                                                                                    |   |
|    | FLOW_ASSET                               | NUMBER(18, 3)         | 流動資產                                                                                       |   |
|    | FLOW_DEBT                                | NUMBER(18, 3)         | 流動負債                                                                                       |   |
|    | CASH                                     | NUMBER(18, 3)         | 現金及銀行存款                                                                                    |   |
|    | SHORT_LOAN                               | NUMBER(18, 3)         | 短期借款                                                                                       |   |
|    | SHORT_INVEST                             | NUMBER(18, 3)         | 短期投資                                                                                       |   |
|    | AP_SHORT_CHECK                           | NUMBER(18, 3)         | 應付短期票券                                                                                     |   |
|    | AR_CHECK                                 | NUMBER(18, 3)         | 應收票據淨額                                                                                     |   |
|    | OWNER_DEBT                               | NUMBER(18, 3)         | 股東墊款                                                                                       |   |
|    | AR_CASH                                  | NUMBER(18, 3)         | 應收帳款淨額                                                                                     |   |
|    | AP_CHECK_CASH                            | NUMBER(18, 3)         | 應付票據及帳款                                                                                    |   |
|    | OTH_AR_CASH                              | NUMBER(18, 3)         | 其他應收款                                                                                      |   |
|    | OTH_AP_CASH                              | NUMBER(18, 3)         | 其他應付款                                                                                      |   |
|    | STOCK                                    | NUMBER(18, 3)         | 存貨                                                                                         |   |
|    | LONG_DEBT_YY                             | NUMBER(18, 3)         | 長期負債(一年內)                                                                                  |   |
|    | OTH_FLOW_ASSET                           | NUMBER(18, 3)         | 其他流動資產                                                                                     |   |
|    | OTH_FLOW_DEBT                            | NUMBER(18, 3)         | 其他流動負債                                                                                     |   |
|    | LONG_INVEST                              | NUMBER(18, 3)         | 基金及長期投資                                                                                    |   |
|    | LONG_DEBT                                | NUMBER(18, 3)         | 長期負債                                                                                       |   |
|    | FIX_INVEST                               | NUMBER(18, 3)         | 固定資產                                                                                       |   |
|    | OTH_DEBT                                 | NUMBER(18, 3)         | 其他負債                                                                                       |   |
|    | LAND                                     | NUMBER(18, 3)         | 土地及房屋                                                                                      |   |
|    | EQUIP                                    | NUMBER(18, 3)         | 機器及設備                                                                                      |   |
|    | RENT_EQUIP                               | NUMBER(18, 3)         | 租賃設備                                                                                       |   |
|    | OTH_EQUIP                                | NUMBER(18, 3)         | 其他設備                                                                                       |   |
|    | PRE_PAY_EQUIP                            | NUMBER(18, 3)         | 預付工程及設備                                                                                    |   |
|    | DEPREC                                   | NUMBER(18, 3)         | 減: 折舊準備                                                                                     |   |
|    | DEBT_TOTAL                               | NUMBER(18, 3)         | 負債總額                                                                                       |   |
|    | NET_VALUE                                | NUMBER(18, 3)         | 淨值                                                                                         |   |
|    | CAPITAL                                  | NUMBER(18, 3)         | 資本                                                                                         |   |
|    | REC_STOCK                                | NUMBER(18, 3)         | 預收股款                                                                                       |   |
|    | SURPLUS                                  | NUMBER(18, 3)         | 公積                                                                                         |   |
|    | ACM_PROFIT                               | NUMBER(18, 3)         | 累積盈虧                                                                                       |   |
|    | OTH_ASSET                                | NUMBER(18, 3)         | 其他資產                                                                                       |   |
|    | HOME_NET                                 | NUMBER(18, 3)         | 本期損益                                                                                       |   |
|    | FOW_ASSET_COL                            | VARCHAR2(150 char)   | 流動資產_其他                                                                                    |   |
|    | FOW_ASSET_COL2                           | VARCHAR2(150 char)   | 流動資產_其他2                                                                                   |   |
|    | FOW_ASSET_COL3                           | VARCHAR2(150 char)   | 流動資產_其他3                                                                                   |   |
|    | FLOW_ASSET_AMT                           | NUMBER(18, 3)         | 流動資產_其他(金額)                                                                                |   |
|    | FLOW_ASSET_AMT2                          | NUMBER(18, 3)         | 流動資產_其他2(金額)                                                                               |   |
|    | FLOW_ASSET_AMT3                          | NUMBER(18, 3)         | 流動資產_其他3(金額)                                                                               |   |
|    | LONG_INVEST_COL                          | VARCHAR2(150 char)   | 長期投資_其他                                                                                    |   |
|    | LONG_INVEST_COL2                         | VARCHAR2(150 char)   | 長期投資_其他2                                                                                   |   |
|    | LONG_INVEST_COL3                         | VARCHAR2(150 char)   | 長期投資_其他3                                                                                   |   |
|    | LONG_INVEST_AMT                          | NUMBER(18, 3)         | 長期投資_其他(金額)                                                                                |   |
|    | LONG_INVEST_AMT2                         | NUMBER(18, 3)         | 長期投資_其他2(金額)                                                                               |   |
|    | LONG_INVEST_AMT3                         | NUMBER(18, 3)         | 長期投資_其他3(金額)                                                                               |   |
|    | FIX_ASSET_COL                            | VARCHAR2(150 char)   | 固定資產_其他                                                                                    |   |
|    | FIX_ASSET_COL2                           | VARCHAR2(150 char)   | 固定資產_其他2                                                                                   |   |
|    | FIX_ASSET_COL3                           | VARCHAR2(150 char)   | 固定資產_其他3                                                                                   |   |
|    | FIX_ASSET_AMT                            | NUMBER(18, 3)         | 固定資產_其他(金額)                                                                                |   |
|    | FIX_ASSET_AMT2                           | NUMBER(18, 3)         | 固定資產_其他2(金額)                                                                               |   |
|    | FIX_ASSET_AMT3                           | NUMBER(18, 3)         | 固定資產_其他3(金額)                                                                               |   |
|    | ASSET_COL                                | VARCHAR2(150 char)   | 其他資產_其他                                                                                    |   |
|    | ASSET_COL2                               | VARCHAR2(150 char)   | 其他資產_其他2                                                                                   |   |
|    | ASSET_COL3                               | VARCHAR2(150 char)   | 其他資產_其他3                                                                                   |   |
|    | ASSET_AMT                                | NUMBER(18, 3)         | 其他資產_其他(金額)                                                                                |   |
|    | ASSET_AMT2                               | NUMBER(18, 3)         | 其他資產_其他2(金額)                                                                               |   |
|    | ASSET_AMT3                               | NUMBER(18, 3)         | 其他資產_其他3(金額)                                                                               |   |
|    | FOW_DEBT_COL                             | VARCHAR2(150 char)   | 流動負債_其他                                                                                    |   |
|    | FOW_DEBT_COL2                            | VARCHAR2(150 char)   | 流動負債_其他2                                                                                   |   |
|    | FOW_DEBT_COL3                            | VARCHAR2(150 char)   | 流動負債_其他3                                                                                   |   |
|    | FLOW_DEBT_AMT                            | NUMBER(18, 3)         | 流動負債_其他(金額)                                                                                |   |
|    | FLOW_DEBT_AMT2                           | NUMBER(18, 3)         | 流動負債_其他2(金額)                                                                               |   |
|    | FLOW_DEBT_AMT3                           | NUMBER(18, 3)         | 流動負債_其他3(金額)                                                                               |   |
|    | LONG_DEBT_COL                            | VARCHAR2(150 char)   | 長期負債_其他                                                                                    |   |
|    | LONG_DEBT_COL2                           | VARCHAR2(150 char)   | 長期負債_其他2                                                                                   |   |
|    | LONG_DEBT_COL3                           | VARCHAR2(150 char)   | 長期負債_其他3                                                                                   |   |
|    | LONG_DEBT_AMT                            | NUMBER(18, 3)         | 長期負債_其他(金額)                                                                                |   |
|    | LONG_DEBT_AMT2                           | NUMBER(18, 3)         | 長期負債_其他2(金額)                                                                               |   |
|    | LONG_DEBT_AMT3                           | NUMBER(18, 3)         | 長期負債_其他3(金額)                                                                               |   |
|    | DEBT_COL                                 | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL2                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL3                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_AMT                                 | NUMBER(18, 3)         | 其它負債_其他(金額)                                                                                |   |
|    | DEBT_AMT2                                | NUMBER(18, 3)         | 其它負債_其他2(金額)                                                                               |   |
|    | DEBT_AMT3                                | NUMBER(18, 3)         | 其它負債_其他3(金額)                                                                               |   |
|    | NET_COL                                  | VARCHAR2(150 char)   | 淨值_其他                                                                                      |   |
|    | NET_COL2                                 | VARCHAR2(150 char)   | 淨值_其他2                                                                                     |   |
|    | NET_COL3                                 | VARCHAR2(150 char)   | 淨值_其他3                                                                                     |   |
|    | NET_AMT                                  | NUMBER(18, 3)         | 淨值_其他(金額)                                                                                  |   |
|    | NET_AMT2                                 | NUMBER(18, 3)         | 淨值_其他2(金額)                                                                                 |   |
|    | NET_AMT3                                 | NUMBER(18, 3)         | 淨值_其他3(金額)                                                                                 |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | CFAFV                                    | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產－流動淨額                                                                      |   |
|    | AFIAC                                    | NUMBER(18, 3)         | 備供出售金融資產－流動淨額                                                                              |   |
|    | DERI                                     | NUMBER(18, 3)         | 避險之衍生金融資產－流動                                                                               |   |
|    | IDEBTC                                   | NUMBER(18, 3)         | 無活絡市場之債務工具投資－流動淨額                                                                          |   |
|    | AFIA                                     | NUMBER(18, 3)         | 備供出售金融資產－非流動淨額                                                                             |   |
|    | FIAC                                     | NUMBER(18, 3)         | 以成本衡量之金融資產－非流動淨額                                                                           |   |
|    | IDEBT                                    | NUMBER(18, 3)         | 無活絡市場之債務工具投資－非流動淨額                                                                         |   |
|    | IEQU                                     | NUMBER(18, 3)         | 採用權益法之投資淨額                                                                                 |   |
|    | IPRO                                     | NUMBER(18, 3)         | 投資性不動產淨額                                                                                   |   |
|    | FIFV                                     | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融負債－流動                                                                        |   |
|    | HDLC                                     | NUMBER(18, 3)         | 避險之衍生金融負債－流動                                                                               |   |
|    | UNFI                                     | NUMBER(18, 3)         | 備供出售金融資產未實現損益                                                                              |   |
|    | FIASCFHS                                 | NUMBER(18, 3)         | 現金流量避險中屬有效避險部分之避險工具利益（損失）                                                                  |   |
|    | FVTOCIF                                  | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFAF                                    | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-流動                                                                           |   |
|    | CFAFVNF                                  | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產                                                                           |   |
|    | FVTOCINF                                 | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFANF                                   | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-非流動                                                                          |   |
|    | OTHER_PROFIT_LOSS                        | NUMBER(18, 3)         | 其他損益                                                                                       |   |
|    | TS_STOCK                                 | NUMBER(18, 3)         | 庫藏股票                                                                                       |   |
|    | NONCONTROLLING_INTERESTS                 | NUMBER(18, 3)         | 非控制權益                                                                                      |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_DEBT_R

#### 資產負債表(租賃)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
|    | REPORT_UID                               | VARCHAR2(36 char)    | 財報pk                                                                                       |   |
| PK | DEBT_UID                                 | VARCHAR2(36 char)    | 資產負債表pk(營造)                                                                                |   |
|    | START_YY                                 | INTEGER              | 年度_起                                                                                       |   |
|    | START_MM                                 | INTEGER              | 月份_起                                                                                       |   |
|    | END_YY                                   | INTEGER              | 年度_迄                                                                                       |   |
|    | END_MM                                   | INTEGER              | 月份_迄                                                                                       |   |
|    | ASSET_TOTAL                              | NUMBER(18, 3)         | 資產總額                                                                                       |   |
|    | NET_TOTAL                                | NUMBER(18, 3)         | 負債及淨值總額                                                                                    |   |
|    | FLOW_ASSET                               | NUMBER(18, 3)         | 流動資產                                                                                       |   |
|    | FLOW_DEBT                                | NUMBER(18, 3)         | 流動負債                                                                                       |   |
|    | CASH                                     | NUMBER(18, 3)         | 現金及銀行存款                                                                                    |   |
|    | SHORT_LOAN                               | NUMBER(18, 3)         | 短期借款                                                                                       |   |
|    | SHORT_INVEST                             | NUMBER(18, 3)         | 短期投資                                                                                       |   |
|    | AP_SHORT_CHECK                           | NUMBER(18, 3)         | 應付短期票券                                                                                     |   |
|    | AR_CHECK                                 | NUMBER(18, 3)         | 應收票據淨額                                                                                     |   |
|    | OWNER_DEBT                               | NUMBER(18, 3)         | 股東墊款                                                                                       |   |
|    | AR_CASH                                  | NUMBER(18, 3)         | 應收帳款淨額                                                                                     |   |
|    | AP_CHECK_CASH                            | NUMBER(18, 3)         | 應付票據及帳款                                                                                    |   |
|    | OTH_AR_CASH                              | NUMBER(18, 3)         | 其他應收款                                                                                      |   |
|    | OTH_AP_CASH                              | NUMBER(18, 3)         | 其他應付款                                                                                      |   |
|    | UNFINISH                                 | NUMBER(18, 3)         | 在建工程                                                                                       |   |
|    | LONG_DEBT_YY                             | NUMBER(18, 3)         | 長期負債(一年內)                                                                                  |   |
|    | OTH_FLOW_ASSET                           | NUMBER(18, 3)         | 其他流動資產                                                                                     |   |
|    | OTH_FLOW_DEBT                            | NUMBER(18, 3)         | 其他流動負債                                                                                     |   |
|    | LONG_INVEST                              | NUMBER(18, 3)         | 基金及長期投資                                                                                    |   |
|    | LONG_DEBT                                | NUMBER(18, 3)         | 長期負債                                                                                       |   |
|    | FIX_INVEST                               | NUMBER(18, 3)         | 固定資產                                                                                       |   |
|    | OTH_DEBT                                 | NUMBER(18, 3)         | 其他負債                                                                                       |   |
|    | LAND                                     | NUMBER(18, 3)         | 土地及房屋                                                                                      |   |
|    | EQUIP                                    | NUMBER(18, 3)         | 機器及設備                                                                                      |   |
|    | GROW_EQUIP                               | NUMBER(18, 3)         | 生財器具                                                                                       |   |
|    | OTH_EQUIP                                | NUMBER(18, 3)         | 其他設備                                                                                       |   |
|    | PRE_PAY_BUILD                            | NUMBER(18, 3)         | 預付及未完成工程                                                                                   |   |
|    | DEPREC                                   | NUMBER(18, 3)         | 減: 折舊準備                                                                                     |   |
|    | DEBT_TOTAL                               | NUMBER(18, 3)         | 負債總額                                                                                       |   |
|    | NET_VALUE                                | NUMBER(18, 3)         | 淨值                                                                                         |   |
|    | CAPITAL                                  | NUMBER(18, 3)         | 資本                                                                                         |   |
|    | REC_STOCK                                | NUMBER(18, 3)         | 預收股款                                                                                       |   |
|    | SURPLUS                                  | NUMBER(18, 3)         | 公積                                                                                         |   |
|    | ACM_PROFIT                               | NUMBER(18, 3)         | 累積盈虧                                                                                       |   |
|    | OTH_ASSET                                | NUMBER(18, 3)         | 其他資產                                                                                       |   |
|    | HOME_NET                                 | NUMBER(18, 3)         | 本期損益                                                                                       |   |
|    | FOW_ASSET_COL                            | VARCHAR2(150 char)   | 流動資產_其他                                                                                    |   |
|    | FOW_ASSET_COL2                           | VARCHAR2(150 char)   | 流動資產_其他2                                                                                   |   |
|    | FOW_ASSET_COL3                           | VARCHAR2(150 char)   | 流動資產_其他3                                                                                   |   |
|    | FLOW_ASSET_AMT                           | NUMBER(18, 3)         | 流動資產_其他(金額)                                                                                |   |
|    | FLOW_ASSET_AMT2                          | NUMBER(18, 3)         | 流動資產_其他2(金額)                                                                               |   |
|    | FLOW_ASSET_AMT3                          | NUMBER(18, 3)         | 流動資產_其他3(金額)                                                                               |   |
|    | LONG_INVEST_COL                          | VARCHAR2(150 char)   | 長期投資_其他                                                                                    |   |
|    | LONG_INVEST_COL2                         | VARCHAR2(150 char)   | 長期投資_其他2                                                                                   |   |
|    | LONG_INVEST_COL3                         | VARCHAR2(150 char)   | 長期投資_其他3                                                                                   |   |
|    | LONG_INVEST_AMT                          | NUMBER(18, 3)         | 長期投資_其他(金額)                                                                                |   |
|    | LONG_INVEST_AMT2                         | NUMBER(18, 3)         | 長期投資_其他2(金額)                                                                               |   |
|    | LONG_INVEST_AMT3                         | NUMBER(18, 3)         | 長期投資_其他3(金額)                                                                               |   |
|    | FIX_ASSET_COL                            | VARCHAR2(150 char)   | 固定資產_其他                                                                                    |   |
|    | FIX_ASSET_COL2                           | VARCHAR2(150 char)   | 固定資產_其他2                                                                                   |   |
|    | FIX_ASSET_COL3                           | VARCHAR2(150 char)   | 固定資產_其他3                                                                                   |   |
|    | FIX_ASSET_AMT                            | NUMBER(18, 3)         | 固定資產_其他(金額)                                                                                |   |
|    | FIX_ASSET_AMT2                           | NUMBER(18, 3)         | 固定資產_其他2(金額)                                                                               |   |
|    | FIX_ASSET_AMT3                           | NUMBER(18, 3)         | 固定資產_其他3(金額)                                                                               |   |
|    | ASSET_COL                                | VARCHAR2(150 char)   | 其他資產_其他                                                                                    |   |
|    | ASSET_COL2                               | VARCHAR2(150 char)   | 其他資產_其他2                                                                                   |   |
|    | ASSET_COL3                               | VARCHAR2(150 char)   | 其他資產_其他3                                                                                   |   |
|    | ASSET_AMT                                | NUMBER(18, 3)         | 其他資產_其他(金額)                                                                                |   |
|    | ASSET_AMT2                               | NUMBER(18, 3)         | 其他資產_其他2(金額)                                                                               |   |
|    | ASSET_AMT3                               | NUMBER(18, 3)         | 其他資產_其他3(金額)                                                                               |   |
|    | FOW_DEBT_COL                             | VARCHAR2(150 char)   | 流動負債_其他                                                                                    |   |
|    | FOW_DEBT_COL2                            | VARCHAR2(150 char)   | 流動負債_其他2                                                                                   |   |
|    | FOW_DEBT_COL3                            | VARCHAR2(150 char)   | 流動負債_其他3                                                                                   |   |
|    | FLOW_DEBT_AMT                            | NUMBER(18, 3)         | 流動負債_其他(金額)                                                                                |   |
|    | FLOW_DEBT_AMT2                           | NUMBER(18, 3)         | 流動負債_其他2(金額)                                                                               |   |
|    | FLOW_DEBT_AMT3                           | NUMBER(18, 3)         | 流動負債_其他3(金額)                                                                               |   |
|    | LONG_DEBT_COL                            | VARCHAR2(150 char)   | 長期負債_其他                                                                                    |   |
|    | LONG_DEBT_COL2                           | VARCHAR2(150 char)   | 長期負債_其他2                                                                                   |   |
|    | LONG_DEBT_COL3                           | VARCHAR2(150 char)   | 長期負債_其他3                                                                                   |   |
|    | LONG_DEBT_AMT                            | NUMBER(18, 3)         | 長期負債_其他(金額)                                                                                |   |
|    | LONG_DEBT_AMT2                           | NUMBER(18, 3)         | 長期負債_其他2(金額)                                                                               |   |
|    | LONG_DEBT_AMT3                           | NUMBER(18, 3)         | 長期負債_其他3(金額)                                                                               |   |
|    | DEBT_COL                                 | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL2                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL3                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_AMT                                 | NUMBER(18, 3)         | 其它負債_其他(金額)                                                                                |   |
|    | DEBT_AMT2                                | NUMBER(18, 3)         | 其它負債_其他2(金額)                                                                               |   |
|    | DEBT_AMT3                                | NUMBER(18, 3)         | 其它負債_其他3(金額)                                                                               |   |
|    | NET_COL                                  | VARCHAR2(150 char)   | 淨值_其他                                                                                      |   |
|    | NET_COL2                                 | VARCHAR2(150 char)   | 淨值_其他2                                                                                     |   |
|    | NET_COL3                                 | VARCHAR2(150 char)   | 淨值_其他3                                                                                     |   |
|    | NET_AMT                                  | NUMBER(18, 3)         | 淨值_其他(金額)                                                                                  |   |
|    | NET_AMT2                                 | NUMBER(18, 3)         | 淨值_其他2(金額)                                                                                 |   |
|    | NET_AMT3                                 | NUMBER(18, 3)         | 淨值_其他3(金額)                                                                                 |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | CFAFV                                    | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產－流動淨額                                                                      |   |
|    | AFIAC                                    | NUMBER(18, 3)         | 備供出售金融資產－流動淨額                                                                              |   |
|    | DERI                                     | NUMBER(18, 3)         | 避險之衍生金融資產－流動                                                                               |   |
|    | IDEBTC                                   | NUMBER(18, 3)         | 無活絡市場之債務工具投資－流動淨額                                                                          |   |
|    | AFIA                                     | NUMBER(18, 3)         | 備供出售金融資產－非流動淨額                                                                             |   |
|    | FIAC                                     | NUMBER(18, 3)         | 以成本衡量之金融資產－非流動淨額                                                                           |   |
|    | IDEBT                                    | NUMBER(18, 3)         | 無活絡市場之債務工具投資－非流動淨額                                                                         |   |
|    | IEQU                                     | NUMBER(18, 3)         | 採用權益法之投資淨額                                                                                 |   |
|    | IPRO                                     | NUMBER(18, 3)         | 投資性不動產淨額                                                                                   |   |
|    | FIFV                                     | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融負債－流動                                                                        |   |
|    | HDLC                                     | NUMBER(18, 3)         | 避險之衍生金融負債－流動                                                                               |   |
|    | UNFI                                     | NUMBER(18, 3)         | 備供出售金融資產未實現損益                                                                              |   |
|    | FIASCFHS                                 | NUMBER(18, 3)         | 現金流量避險中屬有效避險部分之避險工具利益（損失）                                                                  |   |
|    | FVTOCIF                                  | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFAF                                    | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-流動                                                                           |   |
|    | CFAFVNF                                  | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產                                                                           |   |
|    | FVTOCINF                                 | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFANF                                   | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-非流動                                                                          |   |
|    | OTHER_PROFIT_LOSS                        | NUMBER(18, 3)         | 其他損益                                                                                       |   |
|    | TS_STOCK                                 | NUMBER(18, 3)         | 庫藏股票                                                                                       |   |
|    | NONCONTROLLING_INTERESTS                 | NUMBER(18, 3)         | 非控制權益                                                                                      |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_DEBT_S

#### 資產負債表(證券)

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
|    | REPORT_UID                               | VARCHAR2(36 char)    | 財報pk                                                                                       |   |
| PK | DEBT_UID                                 | VARCHAR2(36 char)    | 資產負債表主檔(租賃)                                                                                |   |
|    | START_YY                                 | INTEGER              | 年度_起                                                                                       |   |
|    | START_MM                                 | INTEGER              | 月份_起                                                                                       |   |
|    | END_YY                                   | INTEGER              | 年度_迄                                                                                       |   |
|    | END_MM                                   | INTEGER              | 月份_迄                                                                                       |   |
|    | ASSET_TOTAL                              | NUMBER(18, 3)         | 資產總額                                                                                       |   |
|    | NET_TOTAL                                | NUMBER(18, 3)         | 負債及淨值總額                                                                                    |   |
|    | FLOW_ASSET                               | NUMBER(18, 3)         | 流動資產                                                                                       |   |
|    | FLOW_DEBT                                | NUMBER(18, 3)         | 流動負債                                                                                       |   |
|    | CASH                                     | NUMBER(18, 3)         | 現金及銀行存款                                                                                    |   |
|    | SHORT_LOAN                               | NUMBER(18, 3)         | 短期借款                                                                                       |   |
|    | SHORT_INVEST                             | NUMBER(18, 3)         | 短期投資                                                                                       |   |
|    | AP_SHORT_CHECK                           | NUMBER(18, 3)         | 應付短期票券                                                                                     |   |
|    | AR_CASH                                  | NUMBER(18, 3)         | 應收帳款淨額                                                                                     |   |
|    | AP_CHECK_CASH                            | NUMBER(18, 3)         | 應付票據及帳款                                                                                    |   |
|    | AR_SALE                                  | NUMBER(18, 3)         | 應收分期銷貨款                                                                                    |   |
|    | AP_FEE                                   | NUMBER(18, 3)         | 應付費用                                                                                       |   |
|    | AR_RENT                                  | NUMBER(18, 3)         | 應收租賃款                                                                                      |   |
|    | AP_INCOME                                | NUMBER(18, 3)         | 應付所得                                                                                       |   |
|    | DEBT                                     | NUMBER(18, 3)         | 減: 備抵呆帳                                                                                     |   |
|    | PRE_RECEIVE                              | NUMBER(18, 3)         | 預收款項                                                                                       |   |
|    | STOCK                                    | NUMBER(18, 3)         | 存貨                                                                                         |   |
|    | LONG_DEBT_YY                             | NUMBER(18, 3)         | 長期負債(一年內)                                                                                  |   |
|    | OTH_CREDIT                               | NUMBER(18, 3)         | 其它金融資產                                                                                     |   |
|    | DEPOSIT                                  | NUMBER(18, 3)         | 存入保證金                                                                                      |   |
|    | PRE_PAY                                  | NUMBER(18, 3)         | 預付款項                                                                                       |   |
|    | OTH_FLOW_DEBT                            | NUMBER(18, 3)         | 其他流動負債                                                                                     |   |
|    | OTH_FLOW_ASSET                           | NUMBER(18, 3)         | 其他流動資產                                                                                     |   |
|    | LONG_INVEST                              | NUMBER(18, 3)         | 基金及長期投資                                                                                    |   |
|    | LONG_DEBT                                | NUMBER(18, 3)         | 長期負債                                                                                       |   |
|    | LONG_LOAN                                | NUMBER(18, 3)         | 長期借款                                                                                       |   |
|    | OTH_CREDIT_UNFLOW                        | NUMBER(18, 3)         | 其它金融資產-非流動                                                                                 |   |
|    | AP_BOND                                  | NUMBER(18, 3)         | 應付公司債                                                                                      |   |
|    | AP_LONG_CHECK                            | NUMBER(18, 3)         | 應付長期票券                                                                                     |   |
|    | OTH_LONG_DEBT                            | NUMBER(18, 3)         | 其他長期負債                                                                                     |   |
|    | FIX_INVEST                               | NUMBER(18, 3)         | 固定資產                                                                                       |   |
|    | OTH_DEBT                                 | NUMBER(18, 3)         | 其他負債                                                                                       |   |
|    | LAND                                     | NUMBER(18, 3)         | 土地及房屋                                                                                      |   |
|    | BUILD                                    | NUMBER(18, 3)         | 房屋及建築                                                                                      |   |
|    | MACHINE                                  | NUMBER(18, 3)         | 機器設備                                                                                       |   |
|    | SHIPPING                                 | NUMBER(18, 3)         | 運輸設備                                                                                       |   |
|    | OFFICE                                   | NUMBER(18, 3)         | 辦公設備                                                                                       |   |
|    | RENT_EQUIP                               | NUMBER(18, 3)         | 租賃設備                                                                                       |   |
|    | RENT_IMPROVE                             | NUMBER(18, 3)         | 租賃改良                                                                                       |   |
|    | INCREASE                                 | NUMBER(18, 3)         | 固定資產重估增值                                                                                   |   |
|    | PRE_PAY_BUILD                            | NUMBER(18, 3)         | 預付房地款                                                                                      |   |
|    | DEPREC                                   | NUMBER(18, 3)         | 減: 各項累積折舊                                                                                   |   |
|    | DEBT_TOTAL                               | NUMBER(18, 3)         | 負債總額                                                                                       |   |
|    | NET_VALUE                                | NUMBER(18, 3)         | 淨值                                                                                         |   |
|    | CAPITAL_STOCK                            | NUMBER(18, 3)         | 股本                                                                                         |   |
|    | REC_STOCK                                | NUMBER(18, 3)         | 預收股款                                                                                       |   |
|    | TS_STOCK                                 | NUMBER(18, 3)         | 庫藏股                                                                                        |   |
|    | SURPLUS                                  | NUMBER(18, 3)         | 資本公積                                                                                       |   |
|    | ACM_PROFIT                               | NUMBER(18, 3)         | 累積盈虧                                                                                       |   |
|    | ADJUST_ITEM                              | NUMBER(18, 3)         | 淨值及其他調整項目                                                                                  |   |
|    | HOME_NET                                 | NUMBER(18, 3)         | 本期損益                                                                                       |   |
|    | OTH_ASSET                                | NUMBER(18, 3)         | 其他資產                                                                                       |   |
|    | LIMIT_NET                                | NUMBER(18, 3)         | 受限資產                                                                                       |   |
|    | FOW_ASSET_COL                            | VARCHAR2(150 char)   | 流動資產_其他                                                                                    |   |
|    | FOW_ASSET_COL2                           | VARCHAR2(150 char)   | 流動資產_其他2                                                                                   |   |
|    | FOW_ASSET_COL3                           | VARCHAR2(150 char)   | 流動資產_其他3                                                                                   |   |
|    | FLOW_ASSET_AMT                           | NUMBER(18, 3)         | 流動資產_其他(金額)                                                                                |   |
|    | FLOW_ASSET_AMT2                          | NUMBER(18, 3)         | 流動資產_其他2(金額)                                                                               |   |
|    | FLOW_ASSET_AMT3                          | NUMBER(18, 3)         | 流動資產_其他3(金額)                                                                               |   |
|    | LONG_INVEST_COL                          | VARCHAR2(150 char)   | 長期投資_其他                                                                                    |   |
|    | LONG_INVEST_COL2                         | VARCHAR2(150 char)   | 長期投資_其他2                                                                                   |   |
|    | LONG_INVEST_COL3                         | VARCHAR2(150 char)   | 長期投資_其他3                                                                                   |   |
|    | LONG_INVEST_AMT                          | NUMBER(18, 3)         | 長期投資_其他(金額)                                                                                |   |
|    | LONG_INVEST_AMT2                         | NUMBER(18, 3)         | 長期投資_其他2(金額)                                                                               |   |
|    | LONG_INVEST_AMT3                         | NUMBER(18, 3)         | 長期投資_其他3(金額)                                                                               |   |
|    | FIX_ASSET_COL                            | VARCHAR2(150 char)   | 固定資產_其他                                                                                    |   |
|    | FIX_ASSET_COL2                           | VARCHAR2(150 char)   | 固定資產_其他2                                                                                   |   |
|    | FIX_ASSET_COL3                           | VARCHAR2(150 char)   | 固定資產_其他3                                                                                   |   |
|    | FIX_ASSET_AMT                            | NUMBER(18, 3)         | 固定資產_其他(金額)                                                                                |   |
|    | FIX_ASSET_AMT2                           | NUMBER(18, 3)         | 固定資產_其他2(金額)                                                                               |   |
|    | FIX_ASSET_AMT3                           | NUMBER(18, 3)         | 固定資產_其他3(金額)                                                                               |   |
|    | ASSET_COL                                | VARCHAR2(150 char)   | 其他資產_其他                                                                                    |   |
|    | ASSET_COL2                               | VARCHAR2(150 char)   | 其他資產_其他2                                                                                   |   |
|    | ASSET_COL3                               | VARCHAR2(150 char)   | 其他資產_其他3                                                                                   |   |
|    | ASSET_AMT                                | NUMBER(18, 3)         | 其他資產_其他(金額)                                                                                |   |
|    | ASSET_AMT2                               | NUMBER(18, 3)         | 其他資產_其他2(金額)                                                                               |   |
|    | ASSET_AMT3                               | NUMBER(18, 3)         | 其他資產_其他3(金額)                                                                               |   |
|    | FOW_DEBT_COL                             | VARCHAR2(150 char)   | 流動負債_其他                                                                                    |   |
|    | FOW_DEBT_COL2                            | VARCHAR2(150 char)   | 流動負債_其他2                                                                                   |   |
|    | FOW_DEBT_COL3                            | VARCHAR2(150 char)   | 流動負債_其他3                                                                                   |   |
|    | FLOW_DEBT_AMT                            | NUMBER(18, 3)         | 流動負債_其他(金額)                                                                                |   |
|    | FLOW_DEBT_AMT2                           | NUMBER(18, 3)         | 流動負債_其他2(金額)                                                                               |   |
|    | FLOW_DEBT_AMT3                           | NUMBER(18, 3)         | 流動負債_其他3(金額)                                                                               |   |
|    | LONG_DEBT_COL                            | VARCHAR2(150 char)   | 長期負債_其他                                                                                    |   |
|    | LONG_DEBT_COL2                           | VARCHAR2(150 char)   | 長期負債_其他2                                                                                   |   |
|    | LONG_DEBT_COL3                           | VARCHAR2(150 char)   | 長期負債_其他3                                                                                   |   |
|    | LONG_DEBT_AMT                            | NUMBER(18, 3)         | 長期負債_其他(金額)                                                                                |   |
|    | LONG_DEBT_AMT2                           | NUMBER(18, 3)         | 長期負債_其他2(金額)                                                                               |   |
|    | LONG_DEBT_AMT3                           | NUMBER(18, 3)         | 長期負債_其他3(金額)                                                                               |   |
|    | DEBT_COL                                 | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL2                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL3                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_AMT                                 | NUMBER(18, 3)         | 其它負債_其他(金額)                                                                                |   |
|    | DEBT_AMT2                                | NUMBER(18, 3)         | 其它負債_其他2(金額)                                                                               |   |
|    | DEBT_AMT3                                | NUMBER(18, 3)         | 其它負債_其他3(金額)                                                                               |   |
|    | NET_COL                                  | VARCHAR2(150 char)   | 淨值_其他                                                                                      |   |
|    | NET_COL2                                 | VARCHAR2(150 char)   | 淨值_其他2                                                                                     |   |
|    | NET_COL3                                 | VARCHAR2(150 char)   | 淨值_其他3                                                                                     |   |
|    | NET_AMT                                  | NUMBER(18, 3)         | 淨值_其他(金額)                                                                                  |   |
|    | NET_AMT2                                 | NUMBER(18, 3)         | 淨值_其他2(金額)                                                                                 |   |
|    | NET_AMT3                                 | NUMBER(18, 3)         | 淨值_其他3(金額)                                                                                 |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | CFAFV                                    | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產－流動淨額                                                                      |   |
|    | AFIAC                                    | NUMBER(18, 3)         | 備供出售金融資產－流動淨額                                                                              |   |
|    | DERI                                     | NUMBER(18, 3)         | 避險之衍生金融資產－流動                                                                               |   |
|    | IDEBTC                                   | NUMBER(18, 3)         | 無活絡市場之債務工具投資－流動淨額                                                                          |   |
|    | AFIA                                     | NUMBER(18, 3)         | 備供出售金融資產－非流動淨額                                                                             |   |
|    | FIAC                                     | NUMBER(18, 3)         | 以成本衡量之金融資產－非流動淨額                                                                           |   |
|    | IDEBT                                    | NUMBER(18, 3)         | 無活絡市場之債務工具投資－非流動淨額                                                                         |   |
|    | IEQU                                     | NUMBER(18, 3)         | 採用權益法之投資淨額                                                                                 |   |
|    | IPRO                                     | NUMBER(18, 3)         | 投資性不動產淨額                                                                                   |   |
|    | FIFV                                     | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融負債－流動                                                                        |   |
|    | HDLC                                     | NUMBER(18, 3)         | 避險之衍生金融負債－流動                                                                               |   |
|    | UNFI                                     | NUMBER(18, 3)         | 備供出售金融資產未實現損益                                                                              |   |
|    | FIASCFHS                                 | NUMBER(18, 3)         | 現金流量避險中屬有效避險部分之避險工具利益（損失）                                                                  |   |
|    | FVTOCIF                                  | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFAF                                    | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-流動                                                                           |   |
|    | CFAFVNF                                  | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產                                                                           |   |
|    | FVTOCINF                                 | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFANF                                   | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-非流動                                                                          |   |
|    | OTHER_PROFIT_LOSS                        | NUMBER(18, 3)         | 其他損益                                                                                       |   |
|    | NONCONTROLLING_INTERESTS                 | NUMBER(18, 3)         | 非控制權益                                                                                      |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_MAIN

#### 資產負債表、損益表主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|    | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
|    | REPORT_UID                               | VARCHAR2(36 char)    | 財報pk                                                                                       |   |
| PK | DEBT_UID                                 | VARCHAR2(36 char)    | 資產負債表pk(證卷)                                                                                |   |
|    | START_YY                                 | INTEGER              | 年度_起                                                                                       |   |
|    | START_MM                                 | INTEGER              | 月份_迄                                                                                       |   |
|    | END_YY                                   | INTEGER              | 年度_迄                                                                                       |   |
|    | END_MM                                   | INTEGER              | 月份_迄                                                                                       |   |
|    | ASSET_TOTAL                              | NUMBER(18, 3)         | 資產總額                                                                                       |   |
|    | NET_TOTAL                                | NUMBER(18, 3)         | 負債及淨值總額                                                                                    |   |
|    | FLOW_ASSET                               | NUMBER(18, 3)         | 流動資產                                                                                       |   |
|    | FLOW_DEBT                                | NUMBER(18, 3)         | 流動負債                                                                                       |   |
|    | CASH                                     | NUMBER(18, 3)         | 現金及銀行存款                                                                                    |   |
|    | SHORT_LOAN                               | NUMBER(18, 3)         | 短期借款                                                                                       |   |
|    | BANK_ASSET                               | NUMBER(18, 3)         | 公平價值變動列入損益之金融資產                                                                            |   |
|    | AP_SHORT_CHECK                           | NUMBER(18, 3)         | 應付短期票券                                                                                     |   |
|    | BOND_INVEST                              | NUMBER(18, 3)         | 附買回債券投資                                                                                    |   |
|    | BOND_DEBT                                | NUMBER(18, 3)         | 附買回債券負債                                                                                    |   |
|    | AR_BR                                    | NUMBER(18, 3)         | 應收證券融資款                                                                                    |   |
|    | BANK_DEBT                                | NUMBER(18, 3)         | 公平價值變動列入損益之金融負債                                                                            |   |
|    | AR_STOCK_GUAR                            | NUMBER(18, 3)         | 應收轉融通擔保價款                                                                                  |   |
|    | STOCK_GUAR_AMT                           | NUMBER(18, 3)         | 融券存入保證金                                                                                    |   |
|    | DEPOSIT                                  | NUMBER(18, 3)         | 客戶保證金導戶                                                                                    |   |
|    | AP_STOCK_GUAR                            | NUMBER(18, 3)         | 應付融券擔保價款                                                                                   |   |
|    | AR                                       | NUMBER(18, 3)         | 應收帳款                                                                                       |   |
|    | FUTURE_RIGHT                             | NUMBER(18, 3)         | 期貨交易人權益                                                                                    |   |
|    | PRE_PAY_OTH                              | NUMBER(18, 3)         | 預付款項及其他                                                                                    |   |
|    | AP                                       | NUMBER(18, 3)         | 應付帳款                                                                                       |   |
|    | OTH_FLOW_ASSET                           | NUMBER(18, 3)         | 其他流動資產                                                                                     |   |
|    | LONG_DEBT_YY                             | NUMBER(18, 3)         | 長期負債(ㄧ年內)                                                                                  |   |
|    | OTH_FLOW_DEBT                            | NUMBER(18, 3)         | 其他流動負債                                                                                     |   |
|    | LONG_INVEST                              | NUMBER(18, 3)         | 基金及長期投資                                                                                    |   |
|    | LONG_DEBT                                | NUMBER(18, 3)         | 長期負債                                                                                       |   |
|    | FIX_INVEST                               | NUMBER(18, 3)         | 固定資產                                                                                       |   |
|    | OTH_DEBT                                 | NUMBER(18, 3)         | 其他負債                                                                                       |   |
|    | LAND                                     | NUMBER(18, 3)         | 土地及房屋                                                                                      |   |
|    | BUILDING                                 | NUMBER(18, 3)         | 建物                                                                                         |   |
|    | PC                                       | NUMBER(18, 3)         | 電腦及器具設備                                                                                    |   |
|    | RENT                                     | NUMBER(18, 3)         | 租賃改良                                                                                       |   |
|    | PRE_PAY_EQUIP                            | NUMBER(18, 3)         | 預付設備款                                                                                      |   |
|    | DEPREC                                   | NUMBER(18, 3)         | 減: 折舊準備                                                                                     |   |
|    | DEBT_TOTAL                               | NUMBER(18, 3)         | 負債總額                                                                                       |   |
|    | NET_VALUE                                | NUMBER(18, 3)         | 淨值                                                                                         |   |
|    | CAPITAL                                  | NUMBER(18, 3)         | 資本                                                                                         |   |
|    | TS_STOCK                                 | NUMBER(18, 3)         | 庫藏股                                                                                        |   |
|    | SURPLUS                                  | NUMBER(18, 3)         | 公積                                                                                         |   |
|    | OTH_ASSET                                | NUMBER(18, 3)         | 其他資產                                                                                       |   |
|    | LIMIT_ASSET                              | NUMBER(18, 3)         | 受限制資產                                                                                      |   |
|    | ACM_PROFIT                               | NUMBER(18, 3)         | 累積盈虧                                                                                       |   |
|    | HOME_NET                                 | NUMBER(18, 3)         | 本期損益                                                                                       |   |
|    | FOW_ASSET_COL                            | VARCHAR2(150 char)   | 流動資產_其他                                                                                    |   |
|    | FOW_ASSET_COL2                           | VARCHAR2(150 char)   | 流動資產_其他2                                                                                   |   |
|    | FOW_ASSET_COL3                           | VARCHAR2(150 char)   | 流動資產_其他3                                                                                   |   |
|    | FLOW_ASSET_AMT                           | NUMBER(18, 3)         | 流動資產_其他(金額)                                                                                |   |
|    | FLOW_ASSET_AMT2                          | NUMBER(18, 3)         | 流動資產_其他2(金額)                                                                               |   |
|    | FLOW_ASSET_AMT3                          | NUMBER(18, 3)         | 流動資產_其他3(金額)                                                                               |   |
|    | LONG_INVEST_COL                          | VARCHAR2(150 char)   | 長期投資_其他                                                                                    |   |
|    | LONG_INVEST_COL2                         | VARCHAR2(150 char)   | 長期投資_其他2                                                                                   |   |
|    | LONG_INVEST_COL3                         | VARCHAR2(150 char)   | 長期投資_其他3                                                                                   |   |
|    | LONG_INVEST_AMT                          | NUMBER(18, 3)         | 長期投資_其他(金額)                                                                                |   |
|    | LONG_INVEST_AMT2                         | NUMBER(18, 3)         | 長期投資_其他2(金額)                                                                               |   |
|    | LONG_INVEST_AMT3                         | NUMBER(18, 3)         | 長期投資_其他3(金額)                                                                               |   |
|    | FIX_ASSET_COL                            | VARCHAR2(150 char)   | 固定資產_其他                                                                                    |   |
|    | FIX_ASSET_COL2                           | VARCHAR2(150 char)   | 固定資產_其他2                                                                                   |   |
|    | FIX_ASSET_COL3                           | VARCHAR2(150 char)   | 固定資產_其他3                                                                                   |   |
|    | FIX_ASSET_AMT                            | NUMBER(18, 3)         | 固定資產_其他(金額)                                                                                |   |
|    | FIX_ASSET_AMT2                           | NUMBER(18, 3)         | 固定資產_其他2(金額)                                                                               |   |
|    | FIX_ASSET_AMT3                           | NUMBER(18, 3)         | 固定資產_其他3(金額)                                                                               |   |
|    | ASSET_COL                                | VARCHAR2(150 char)   | 其他資產_其他                                                                                    |   |
|    | ASSET_COL2                               | VARCHAR2(150 char)   | 其他資產_其他2                                                                                   |   |
|    | ASSET_COL3                               | VARCHAR2(150 char)   | 其他資產_其他3                                                                                   |   |
|    | ASSET_AMT                                | NUMBER(18, 3)         | 其他資產_其他(金額)                                                                                |   |
|    | ASSET_AMT2                               | NUMBER(18, 3)         | 其他資產_其他2(金額)                                                                               |   |
|    | ASSET_AMT3                               | NUMBER(18, 3)         | 其他資產_其他3(金額)                                                                               |   |
|    | FOW_DEBT_COL                             | VARCHAR2(150 char)   | 流動負債_其他                                                                                    |   |
|    | FOW_DEBT_COL2                            | VARCHAR2(150 char)   | 流動負債_其他2                                                                                   |   |
|    | FOW_DEBT_COL3                            | VARCHAR2(150 char)   | 流動負債_其他3                                                                                   |   |
|    | FLOW_DEBT_AMT                            | NUMBER(18, 3)         | 流動負債_其他(金額)                                                                                |   |
|    | FLOW_DEBT_AMT2                           | NUMBER(18, 3)         | 流動負債_其他2(金額)                                                                               |   |
|    | FLOW_DEBT_AMT3                           | NUMBER(18, 3)         | 流動負債_其他3(金額)                                                                               |   |
|    | LONG_DEBT_COL                            | VARCHAR2(150 char)   | 長期負債_其他                                                                                    |   |
|    | LONG_DEBT_COL2                           | VARCHAR2(150 char)   | 長期負債_其他2                                                                                   |   |
|    | LONG_DEBT_COL3                           | VARCHAR2(150 char)   | 長期負債_其他3                                                                                   |   |
|    | LONG_DEBT_AMT                            | NUMBER(18, 3)         | 長期負債_其他(金額)                                                                                |   |
|    | LONG_DEBT_AMT2                           | NUMBER(18, 3)         | 長期負債_其他2(金額)                                                                               |   |
|    | LONG_DEBT_AMT3                           | NUMBER(18, 3)         | 長期負債_其他3(金額)                                                                               |   |
|    | DEBT_COL                                 | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL2                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_COL3                                | VARCHAR2(150 char)   | 其它負債_其他                                                                                    |   |
|    | DEBT_AMT                                 | NUMBER(18, 3)         | 其它負債_其他(金額)                                                                                |   |
|    | DEBT_AMT2                                | NUMBER(18, 3)         | 其它負債_其他2(金額)                                                                               |   |
|    | DEBT_AMT3                                | NUMBER(18, 3)         | 其它負債_其他3(金額)                                                                               |   |
|    | NET_COL                                  | VARCHAR2(150 char)   | 淨值_其他                                                                                      |   |
|    | NET_COL2                                 | VARCHAR2(150 char)   | 淨值_其他2                                                                                     |   |
|    | NET_COL3                                 | VARCHAR2(150 char)   | 淨值_其他3                                                                                     |   |
|    | NET_AMT                                  | NUMBER(18, 3)         | 淨值_其他(金額)                                                                                  |   |
|    | NET_AMT2                                 | NUMBER(18, 3)         | 淨值_其他2(金額)                                                                                 |   |
|    | NET_AMT3                                 | NUMBER(18, 3)         | 淨值_其他3(金額)                                                                                 |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | CFAFV                                    | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產－流動淨額                                                                      |   |
|    | AFIAC                                    | NUMBER(18, 3)         | 備供出售金融資產－流動淨額                                                                              |   |
|    | DERI                                     | NUMBER(18, 3)         | 避險之衍生金融資產－流動                                                                               |   |
|    | IDEBTC                                   | NUMBER(18, 3)         | 無活絡市場之債務工具投資－流動淨額                                                                          |   |
|    | AFIA                                     | NUMBER(18, 3)         | 備供出售金融資產－非流動淨額                                                                             |   |
|    | FIAC                                     | NUMBER(18, 3)         | 以成本衡量之金融資產－非流動淨額                                                                           |   |
|    | IDEBT                                    | NUMBER(18, 3)         | 無活絡市場之債務工具投資－非流動淨額                                                                         |   |
|    | IEQU                                     | NUMBER(18, 3)         | 採用權益法之投資淨額                                                                                 |   |
|    | IPRO                                     | NUMBER(18, 3)         | 投資性不動產淨額                                                                                   |   |
|    | FIFV                                     | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融負債－流動                                                                        |   |
|    | HDLC                                     | NUMBER(18, 3)         | 避險之衍生金融負債－流動                                                                               |   |
|    | UNFI                                     | NUMBER(18, 3)         | 備供出售金融資產未實現損益                                                                              |   |
|    | FIASCFHS                                 | NUMBER(18, 3)         | 現金流量避險中屬有效避險部分之避險工具利益（損失）                                                                  |   |
|    | FVTOCIF                                  | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFAF                                    | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-流動                                                                           |   |
|    | CFAFVNF                                  | NUMBER(18, 3)         | 透過損益按公允價值衡量之金融資產                                                                           |   |
|    | FVTOCINF                                 | NUMBER(18, 3)         | 透過其他綜合損益按公允價值衡量之金融資產                                                                       |   |
|    | ACFANF                                   | NUMBER(18, 3)         | 按攤銷後成本衡量之金融資產-非流動                                                                          |   |
|    | OTHER_PROFIT_LOSS                        | NUMBER(18, 3)         | 其他損益                                                                                       |   |
|    | NONCONTROLLING_INTERESTS                 | NUMBER(18, 3)         | 非控制權益                                                                                      |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_CO_REPORT

#### 財報主檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK | LOAN_UID                                 | VARCHAR2(36 char)    | 系統案件pk                                                                                     |   |
| PK | CREDIT_DOC_NO_C                          | VARCHAR2(36 char)    | 徵信報告pk                                                                                     |   |
|    | LOAN_BASE_DATE                           | TIMESTAMP            | 借款人於本行授信基準日                                                                                |   |
|    | LOAN_START_DATE                          | TIMESTAMP            | 借款人於本行授信初次往來日                                                                              |   |
|    | LOAN_CURRENCY                            | VARCHAR2(3 char)     | 借款人於本行授信初次往來金額_幣別                                                                          |   |
|    | LOAN_START_AMT                           | NUMBER(18, 3)         | 借款人於本行授信初次往來金額                                                                             |   |
|    | SAVE_BASE_DATE                           | TIMESTAMP            | 借款人、關係戶於本行存款往來基準日                                                                          |   |
|    | SAVE_START_DATE                          | TIMESTAMP            | 借款人、關係戶於本行存款往來初次往來日                                                                        |   |
|    | INOUT_YEAR                               | INTEGER              | 營業概況年度                                                                                     |   |
|    | MASTER_MATERIAL                          | VARCHAR2(600 char)   | 主要原料                                                                                       |   |
|    | MATERIAL_RATE                            | NUMBER(18, 4)         | 原料佔銷貨成本之比率                                                                                 |   |
|    | MASTER_PRDT                              | VARCHAR2(600 char)   | 主要產品                                                                                       |   |
|    | PRDT_RATE                                | NUMBER(18, 4)         | 產品佔銷貨成本之比率                                                                                 |   |
|    | FINANCE_DESC                             | VARCHAR2(10 char)    | 財務比率說明                                                                                     |   |
|    | CIRCLE_DESC                              | VARCHAR2(10 char)    | A/R週轉率、存貨週轉率說明                                                                             |   |
|    | TRANS_DESC                               | VARCHAR2(10 char)    | 關係人交易分析說明                                                                                  |   |
|    | INVEST_DESC                              | VARCHAR2(10 char)    | 長、短期投資分析說明                                                                                 |   |
|    | CASH_DESC                                | VARCHAR2(10 char)    | 現金流量分析說明                                                                                   |   |
|    | LOAN_DESC                                | VARCHAR2(10 char)    | 集團戶、關係戶於本行授信往來情形                                                                           |   |
|    | CREDIT_DESC                              | VARCHAR2(10 char)    | 內部或外部信用評等                                                                                  |   |
|    | EPS_DESC                                 | VARCHAR2(10 char)    | 近三年營收／稅前純益／EPS                                                                             |   |
|    | CAPITAL_DESC                             | VARCHAR2(10 char)    | 資本額、淨值、負債比率及金融負債情形                                                                         |   |
|    | INDUSTRY_DESC                            | VARCHAR2(10 char)    | 行業別營運展望                                                                                    |   |
|    | EVALUATE_DESC                            | VARCHAR2(10 char)    | 綜合評估                                                                                       |   |
|    | IS_NEGATIVE                              | VARCHAR2(1 char)     | 重大負面消息有無(0: 無1: 有)                                                                           |   |
|    | NEGATIVE_DESC                            | VARCHAR2(10 char)    | 重大負面消息_說明                                                                                  |   |
|    | IS_PERSONAL                              | VARCHAR2(1 char)     | 重要人事異動有無(0: 無1: 有)                                                                           |   |
|    | PERSONAL_DESC                            | VARCHAR2(10 char)    | 重要人事異動                                                                                     |   |
|    | BORROWER_DESC                            | VARCHAR2(10 char)    | 借款人分析                                                                                      |   |
|    | USEWAY_DESC                              | VARCHAR2(10 char)    | 借款用途分析                                                                                     |   |
|    | PAYSOURCE_DESC                           | VARCHAR2(10 char)    | 還款來源分析                                                                                     |   |
|    | DEBT_DESC                                | VARCHAR2(10 char)    | 債權保障分析                                                                                     |   |
|    | FEATURE_DESC                             | VARCHAR2(10 char)    | 授信展望分析                                                                                     |   |
|    | REPORT_VERSION                           | VARCHAR2(1 char)     | 財報版本(1: 一般2: 證卷3: 營造4: 租賃)                                                                     |   |
|    | JCIC_YY                                  | INTEGER              | 借款人、負責人聯徵中心查詢授信情形(年)                                                                       |   |
|    | JCIC_MM                                  | INTEGER              | 借款人、負責人聯徵中心查詢授信情形(月)                                                                       |   |
|    | LANGUAGETYPE                             | VARCHAR2(5 char)     | 語系                                                                                         |   |
|    | CREATE_EMPROLE                           | VARCHAR2(3 char)     | 建立角色                                                                                       |   |
|    | CREATE_EMPID                             | VARCHAR2(5 char)     | 建立人員                                                                                       |   |
|    | CREATE_BRANCHID                          | VARCHAR2(4 char)     | 建立分行                                                                                       |   |
|    | CREATE_DATE                              | TIMESTAMP            | 建立日期                                                                                       |   |
|    | LASTUPDATE_EMPROLE                       | VARCHAR2(3 char)     | 更新角色                                                                                       |   |
|    | LASTUPDATE_EMPID                         | VARCHAR2(5 char)     | 更新人員                                                                                       |   |
|    | LASTUPDATE_BRANCHID                      | VARCHAR2(4 char)     | 更新分行                                                                                       |   |
|    | LASTUPDATE_DATE                          | TIMESTAMP            | 更新日期                                                                                       |   |
|    | SUBTOTAL                                 | NUMBER(18, 3)         | 本行授信往來額度合計                                                                                 |   |
|    | CFRSK_MARK                               | VARCHAR2(1 char)     |                                                                                            |   |
|    | REPORT_VERSION_SAME_PERIOD               | VARCHAR2(1 char)     |                                                                                            |   |
|    | LF                                       | VARCHAR2(1 char)     |                                                                                            |   |
|    | IS_EQUATORPRINCIPLES                     | VARCHAR2(1 char)     | 是否符合赤道原則                                                                                   |   |
|    | EQUATORPRINCIPLES_DESC                   | VARCHAR2(10 char)    | 違反內容及評估承作理由                                                                                |   |
|    | R08AFTERVIEW_DESC                        | VARCHAR2(10 char)    | R08檢視後說明                                                                                   |   |
|    | IS_LEVYIMMOVABLE                         | VARCHAR2(1 char)     | 是否徵提不動產擔保品                                                                                 |   |
|    | IS_INSOILLIQUEFACTIONAREA                | VARCHAR2(1 char)     | 擔保品是否位於土壤液化區                                                                               |   |
|    | SOILLIQUEFACTIONLEVEL                    | VARCHAR2(1 char)     | 土壤液化潛勢區域(等級)                                                                               |   |
|    | RISKASSESSMENT_DESC                      | VARCHAR2(10 char)    | 風險評估                                                                                       |   |
|    | PURPOSE_YEAR                             | INTEGER              | 增加揭露幾年的401表                                                                                |   |
|    | PURPOSE_SMONTH                           | INTEGER              | 增加揭露起始月的401表                                                                               |   |
|    | PURPOSE_EMONTH                           | INTEGER              | 增加揭露終止月的401表                                                                               |   |
|    | PURPOSE_GROWTHRECESSION                  | VARCHAR2(1 char)     | 增加揭露401表較前年度同期衰退或成長                                                                        |   |
|    | PURPOSE_PERCENTAGE                       | NUMBER(7, 2)          | 增加揭露401表較前年度同期衰退或成長之百分比                                                                    |   |
|    | PERSPECTIVE_SRATE                        | NUMBER(7, 2)          |                                                                                            |   |
|    | PERSPECTIVE_ERATE                        | NUMBER(7, 2)          |                                                                                            |   |
|    | CASHFLOW_CURRENCY                        | VARCHAR2(3 char)     |                                                                                            |   |
|    | CASHFLOW_UNIT                            | VARCHAR2(1 char)     |                                                                                            |   |
|    | SOLVENCY_CURRENCY                        | VARCHAR2(3 char)     |                                                                                            |   |
|    | SOLVENCY_UNIT                            | VARCHAR2(1 char)     |                                                                                            |   |
|    | HIGHRISKCUSTOMER_DESC                    | VARCHAR2(10 char)    | 洗錢及資恐風險等級為高風險客戶                                                                            |   |
|    | IS_LOSS                                  | VARCHAR2(1 char)     |                                                                                            |   |
|    | REASON                                   | VARCHAR2(10 char)    |                                                                                            |   |
|    | OPERATION_PLAN                           | VARCHAR2(10 char)    |                                                                                            |   |
|    | FINANCE_CURRENCY                         | VARCHAR2(3 char)     |                                                                                            |   |
|    | FINANCE_UNIT                             | VARCHAR2(1 char)     |                                                                                            |   |
|    | MLT_SOLVENCY_CURRENCY                    | VARCHAR2(3 char)     |                                                                                            |   |
|    | MLT_SOLVENCY_UNIT                        | VARCHAR2(1 char)     |                                                                                            |   |
|    | SENSITIVITY_CURRENCY                     | VARCHAR2(3 char)     |                                                                                            |   |
|    | SENSITIVITY_UNIT                         | VARCHAR2(1 char)     |                                                                                            |   |
|    | IS_COLACHANGE                            | VARCHAR2(1 char)     |                                                                                            |   |
|    | RISK_ASSESSMENT                          | VARCHAR2(10 char)    |                                                                                            |   |
|    | TBL_UPD_TIM                              | TIMESTAMP            | 表格更新時間                                                                                     |   |

### VW_ODS_D_RCK_LOANTR_REPORT_MAIN

#### 授信覆審追蹤明細表

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
| PK  | LOAN_UID            | VARCHAR2(36 char) | 系統案件PK                                 |    |
| PK  | CUST_UID            | VARCHAR2(36 char) | 客戶pk                                   |    |
|     | CREDIT_DOC_NO_C     | VARCHAR2(36 char) | 徵信報告PK                                 |    |
|     | CREDIT_DOC_TYPE     | VARCHAR2(1 char)  | 徵信報告的種類(1: 企業徵信報告2: 個人徵信報告)              |    |
|     | IDENTITY_TYPE       | VARCHAR2(1 char)  | 身份別(1: 主要借款人2: 共同借款人3: 財報分享4: 關係戶5: 非共同借款人) |    |
|     | LANGUAGETYPE        | VARCHAR2(5 char)  | 語系                                     |    |
|     | CREATE_EMPROLE      | VARCHAR2(3 char)  | 建立角色                                   |    |
|     | CREATE_EMPID        | VARCHAR2(5 char)  | 建立人員                                   |    |
|     | CREATE_BRANCHID     | VARCHAR2(4 char)  | 建立分行                                   |    |
|     | CREATE_DATE         | TIMESTAMP         | 建立日期                                   |    |
|     | LASTUPDATE_EMPROLE  | VARCHAR2(3 char)  | 更新角色                                   |    |
|     | LASTUPDATE_EMPID    | VARCHAR2(5 char)  | 更新人員                                   |    |
|     | LASTUPDATE_BRANCHID | VARCHAR2(4 char)  | 更新分行                                   |    |
|     | LASTUPDATE_DATE     | TIMESTAMP         | 更新日期                                   |    |
|     | TBL_UPD_TIM         | TIMESTAMP         | 表格更新時間                                 |

### VW_ODS_D_SEGMENT_ENTERPRISE_REVENUE

#### 企金營收資料檔

| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | RECORDYM            | VARCHAR2(6 char)  | 資料年月                            |    |
|     | REVENUEYEAR         | NUMBER(5, 0)       | 營收年份                            |    |
|     | BRANCHID            | VARCHAR2(4 char)  | 分行別                             |    |
|     | CUSTOMERID          | VARCHAR2(11 char) | 客戶ID                            |    |
|     | CNAME               | VARCHAR2(70 char) | 客戶姓名                            |    |
|     | GETREVENUETYPE      | VARCHAR2(1 char)  | 營收來源1. ELOAN-代入案件編號2. 企金部上傳3. AO填寫 |    |
|     | CASENO              | VARCHAR2(20 char) | eLoan案件編號                       |    |
|     | LOAN_UID            | VARCHAR2(36 char) | eLoan案件UID                      |    |
|     | REVENUE             | NUMBER(18, 3)      | 營收(NTD/元)                       |    |
|     | UNABLETOGET         | VARCHAR2(2 char)  | 無法取得原因01. 已與本行無額度02. 已逾期          |    |
|     | CREATE_EMPROLE      | VARCHAR2(3 char)  | 建立人員角色                          |    |
|     | CREATE_EMPID        | VARCHAR2(5 char)  | 建立人員員編                          |    |
|     | CREATE_BRANCHID     | VARCHAR2(4 char)  | 建立人員分行別                         |    |
|     | CREATE_DATE         | TIMESTAMP         | 建立時間                            |    |
|     | LASTUPDATE_EMPROLE  | VARCHAR2(3 char)  | 最後更新人員角色                        |    |
|     | LASTUPDATE_EMPID    | VARCHAR2(5 char)  | 最後更新人員員編                        |    |
|     | LASTUPDATE_BRANCHID | VARCHAR2(4 char)  | 最後更新人員分行別                       |    |
|     | LASTUPDATE_DATE     | TIMESTAMP         | 最後更新日期                          |    |
|     | TBL_UPD_TIM         | TIMESTAMP         | 表格更新時間                          |
