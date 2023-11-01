---
sidebar_position: 1
title: 主管會報計績
---

## 信貸快篩機器人(`workspace：Data Engineering`)
### 完成體驗人數
```sql showLineNumbers
SELECT
    ud.custid,
    uc.lineuserid,
    dia.highrisk,
    dia.mbox,
    dia.createdtime
FROM
    dialoglogentity dia
    LEFT JOIN userclue uc ON uc.id = dia.userclueid
    LEFT JOIN (
        -- 因userdata有重複ID，取最新資料
        SELECT
            *
        FROM
            (
                SELECT
                    ROW_Number() OVER (
                        PARTITION BY custid
                        ORDER BY
                            updatetime DESC
                    ) AS sort_ID,
                    *
                FROM
                    userdata
            ) AS temp
        WHERE
            temp.sort_ID = 1
    ) AS ud ON ud.id = uc.userdataid
``` 
### eLoan進件數
```sql showLineNumbers
SELECT count(*) FROM roboteloan_sasva
``` 

### 實際核准金額
```sql showLineNumbers
SELECT SUM(IF("首筆撥貸日" IS NOT NULL, "實際核准額度")) FROM roboteloan_sasva
``` 

## 中小信保不代位清償(`workspace：CompanyDA`)

### 微企貸2.0利息本金滯延案件數量

```sql showLineNumbers
WITH lnctcfd AS (
    SELECT
        CFD_FST_LN_DATE,
        --初貸日期
        CFD_LN_BR_CODE,
        --授信帳號-分行別
        CFD_LN_BR_CODE || CFD_ACC_TITLE_CODE || CFD_CUST_NO || CFD_CHK_CODE || CFD_LN_SER_NO AS LN_ID_NO,
        --完整授信帳號
        CFD_DUE_DATE,
        --到期日
        CFD_FST_AMT,
        --初貸金額
        CFD_LN_BAL,
        --貸放餘額
        CFD_BOSS_ID_CODE,
        --公司統編
        CFD_MTN_AO,
        --經管AO
        CFD_INT_RATE_REAL,
        --貸放利率
        CFD_OVER_MONTHS,
        --逾期月數
        CFD_OVER_REMAINS,
        --逾期零星天數
        TRIM(CFD_APRV_NO) AS CFD_APRV_NO,
        --核准號碼(與lnapprov串接的Key，lnapprov的Key：LNLNP_APRV_NO)
        CFD_ORG_LN_ID_NO --原貸放帳號(與lnloan串接的Key，lnloan的Key：LNLOA_LN_ID_NO)
    FROM
        vw_mask_ods_d_lnctcfd
),
MONTH_DAY AS (
    SELECT
        t1.*,
        t2.CFD_OVER_MONTHS AS "逾期月數" --逾期月數
,
        t2.CFD_OVER_REMAINS AS "逾期零星天數" --逾期零星天數
    FROM
        company_share AS t1
        LEFT JOIN lnctcfd AS t2 ON t1."核准號碼" = CFD_APRV_NO
    WHERE
        "利潤中心" = '0160'
        AND "利息或本金延滯_7_2_7_4" = '1'
),
ADD_ALL AS (
    SELECT
        *,
CASE
            WHEN "逾期零星天數" >= 1
            AND "逾期零星天數" <= 10
            AND "逾期月數" = 0 THEN '1.滯延1-10天'
            WHEN "逾期零星天數" >= 11
            AND "逾期零星天數" <= 20
            AND "逾期月數" = 0 THEN '2.滯延11-20天'
            WHEN "逾期零星天數" >= 21
            AND "逾期零星天數" <= 30
            AND "逾期月數" = 0 THEN '3.滯延21-30天'
            WHEN "逾期月數" >= 1 THEN '4.滯延30天以上'
            WHEN "逾期零星天數" = 0
            AND "逾期月數" = 0 THEN '5.無滯延'
        END AS IND
    FROM
        MONTH_DAY
)
SELECT
    IND,
    COUNT("核准號碼") AS "核准號碼筆數",
    COUNT(DISTINCT "核准號碼") AS "核准號碼筆數_DISTINCT"
FROM
    ADD_ALL
GROUP BY
    IND
ORDER BY
    IND
``` 

### 微企貸2.0利息本金滯延案件數量_驗證
```sql showLineNumbers
SELECT
    *
FROM
    company_share
WHERE
    "利息或本金延滯_7_2_7_4" = '1'
    AND "利潤中心" = '0160'
``` 

### 肉眼辨識微企貸案件(初貸日期>=2023/1/1)
```sql showLineNumbers
SELECT
    *
FROM
    company_share
WHERE
    CAST("利息或本金延滯_7_2_7_4" AS INTEGER) + CAST("授信對象停止營業_7_1" AS INTEGER) > 0
    AND "利潤中心" = '0160'
``` 


