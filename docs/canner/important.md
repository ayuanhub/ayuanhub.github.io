---
sidebar_position: 1
title: 主管會報計績數字
---

## 信貸快篩機器人
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
SELECT SUM(IF("首筆撥貸日" IS NOT NULL, "實際核撥金額")) FROM roboteloan_sasva
``` 

## 中小信保不代位清償



