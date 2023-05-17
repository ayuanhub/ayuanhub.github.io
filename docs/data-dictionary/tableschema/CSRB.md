---
sidebar_position: 17
title: 台幣核心系統-託收(CSRB)
---

### VW_ODS_D_RBCHKHIS
#### 託收歷史主檔
| Key | 欄位名稱  | 欄位資料型態        | 欄位說明     | 備註 |
| --- | --------- | ------------------- | ------------ | ---- |
|     | RBHIS_CHK_NO         | VARCHAR2(7 char)  | 票號          |    |
|     | RBHIS_PAY_BANK       | VARCHAR2(9 char)  | 付款行         |    |
|     | RBHIS_PAY_ACCT       | VARCHAR2(9 char)  | 付款人帳號       |    |
|     | RBHIS_RECV_DATE      | DATE              | 託收日         |    |
|     | RBHIS_BACK_TIME      | VARCHAR2(4 char)  | 撤票時間        |    |
|     | RBHIS_DUE_DATE       | DATE              | 到期日         |    |
|     | RBHIS_RECV_BRCH      | VARCHAR2(4 char)  | 託收行         |    |
|     | RBHIS_CHK_TYPE       | VARCHAR2(2 char)  | 票據種類        |    |
|     | RBHIS_CHK_AMT        | NUMBER(10,0)      | 票據金額        |    |
|     | RBHIS_ACC_ID_NO      | VARCHAR2(20 char) | 提示人帳號       |    |
|     | RBHIS_PORT_NO        | VARCHAR2(1 char)  | 埠別          |    |
|     | RBHIS_RECV_SEQ       | VARCHAR2(8 char)  | 託收序號        |    |
|     | RBHIS_OUT_DATE       | DATE              | 出庫日         |    |
|     | RBHIS_BATCH_NO       | VARCHAR2(10 char) | 出庫批號        |    |
|     | RBHIS_E_CHECK        | VARCHAR2(1 char)  | 電子票據否       |    |
|     | RBHIS_EXG_BRCH       | VARCHAR2(7 char)  | 提交分行        |    |
|     | RBHIS_EXG_DATE       | DATE              | 提交日         |    |
|     | RBHIS_STS_DATE       | DATE              | 狀態確定日       |    |
|     | RBHIS_BUSI_DATE      | DATE              | 帳務日         |    |
|     | RBHIS_STATUS         | VARCHAR2(1 char)  | 票據狀態        |    |
|     | RBHIS_STS_REC        | VARCHAR2(8 char)  | 狀態紀錄        |    |
|     | RBHIS_MEMO           | VARCHAR2(20 char) | 備註          |    |
|     | RBHIS_PNO            | VARCHAR2(4 char)  | 批號單編號       |    |
|     | RBHIS_TLR_CODE       | VARCHAR2(6 char)  | 櫃員代號        |    |
|     | RBHIS_MANAGER_ID     | VARCHAR2(6 char)  | 主管代號        |    |
|     | RBHIS_FTT_ACC_ID_NO  | VARCHAR2(16 char) | 全方位帳號       |    |
|     | RBHIS_NEXT_FLAG      | VARCHAR2(1 char)  | 本次交狀態       |    |
|     | RBHIS_SIGN_FLAG      | VARCHAR2(1 char)  | 簽收狀態        |    |
|     | RBHIS_FTP_TLR        | VARCHAR2(6 char)  | 上傳櫃員代號      |    |
|     | RBHIS_BACK_RES       | VARCHAR2(2 char)  | 退票理由        |    |
|     | RBHIS_SKL_SEQ        | VARCHAR2(10 char) | 新壽託收編號      |    |
|     | RBHIS_SKL_UNIT       | VARCHAR2(6 char)  | 新壽託收單位      |    |
|     | RBHIS_SKL_PORT       | VARCHAR2(1 char)  | 新壽埠別        |    |
|     | RBHIS_SKL_RECV       | VARCHAR2(1 char)  | 新壽託收別       |    |
|     | RBHIS_SKL_RECVD      | DATE              | 新壽存入日       |    |
|     | RBHIS_SKL_PAY_ACCT   | VARCHAR2(9 char)  | 新壽付款人帳號     |    |
|     | RBHIS_SKL_PAY_BANK   | VARCHAR2(7 char)  | 新壽付款行       |    |
|     | RBHIS_SKL_CHK_NO     | VARCHAR2(7 char)  | 新壽票號        |    |
|     | RBHIS_CHK_KIND       | VARCHAR2(1 char)  | 票據來源        |    |
|     | RBHIS_TXN_FLAG       | VARCHAR2(1 char)  | 本交入帳狀態      |    |
|     | RBHIS_TXN_TLR        | VARCHAR2(6 char)  | 交易櫃員        |    |
|     | RBHIS_TXN_SEQ        | VARCHAR2(7 char)  | 交易序號        |    |
|     | RBHIS_OUT_TYPE       | VARCHAR2(1 char)  | 出庫類型        |    |
|     | RBHIS_ACT_BRCH       | VARCHAR2(4 char)  | 清算行         |    |
|     | RBHIS_SKL_MEND       | VARCHAR2(1 char)  | 新壽補入記號      |    |
|     | RBHIS_SKL_FLAG       | VARCHAR2(1 char)  | 新壽兌現檔       |    |
|     | RBHIS_IN_SEQ         | VARCHAR2(20 char) | 集中入庫序號(和訊給) |    |
|     | RBHIS_REAL_RECV_CODE | VARCHAR2(4 char)  | 原託收行        |    |
|     | TBL_UPD_TIM          | TIMESTAMP         | 表格更新時間      |
