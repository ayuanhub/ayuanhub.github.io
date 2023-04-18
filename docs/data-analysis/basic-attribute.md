---
sidebar_position: 1
title: 基本屬性
---

# 基本屬性

### 性別

```jsx title="男性/女性(※ 此處可以多撰寫一些業務邏輯定義)" showLineNumbers
SELECT customers.Name, orders.Order_No
FROM customers
INNER JOIN orders
ON customers.C_Id=orders.C_Id;
```

```mermaid
erDiagram
    CUSTOMERS ||--|{ ORDERS : Id
```

### 年齡

```sql
WITH
  customers AS (
    SELECT
      customer_id,
      customer_name,
      customer_email
    FROM
      customers_table
  ),
  orders AS (
    SELECT
      order_id,
      order_date,
      customer_id
    FROM
      orders_table
  ),
  order_items AS (
    SELECT
      order_item_id,
      order_id,
      product_id,
      quantity
    FROM
      order_items_table
  )
SELECT
  customers.customer_name,
  orders.order_date,
  SUM(order_items.quantity) AS total_quantity
FROM
  customers
  JOIN orders ON customers.customer_id = orders.customer_id
  JOIN order_items ON orders.order_id = order_items.order_id
GROUP BY
  customers.customer_name,
  orders.order_date
ORDER BY
  total_quantity DESC;
```

### 行業類別

### 顧客開戶、異動留存行業類別

### 公司職稱

### 學歷

### 婚姻狀況

### 子女數

### 國別

### 主往來分行代碼

### 理專註記

### 理財會員

### AUM 月底餘額

### AUM_台幣活存月平均餘額

### AUM_台幣定存月平均餘額

### AUM_外幣活存月平均餘額
### AUM_外幣定存月平均餘額
### AUM_理財(月底餘額)
### AUM_理財(月底現值)

### 風險承受等級評估 KYC

### 風險承受等級評估 KYC(到期日)

### 個網銀狀態

### 個網銀實動戶註記(近 90 天有登入)

### 行銀實動戶註記(近 90 天有登入)

### 純卡友

### 純存戶

### 薪轉戶

### 頂級卡

### 醫師

### 律師

### 會計師

### 建築師

### 工程師

### 月收入推估

### (薪轉->繳稅推估)

### wallet share(%)
