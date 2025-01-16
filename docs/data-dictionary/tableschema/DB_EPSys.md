---
sidebar_position: 2
title: DB_EPSys
---

#### 修改日期：2025/01/16 10:02

### PS_UserProxy - 代理人資料檔 
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | UserID | 請假人員編 | varchar | 10 |  |  |  |
| 2 | AppID | 代理系統別 | varchar | 40 |  |  |  |
| 3 | ProxyType | 代理類別 | varchar | 10 |  |  | Full：代理<br/>Semi：助理 |
| 4 | ProxyReason | 代理資料來源 | varchar | 30 |  |  |  |
| 5 | ProxyStartDate | 代理開始日期 | char | 8 |  |  |  |
| 6 | ProxyEndDate | 代理結束日期 | char | 8 |  |  |  |
| 7 | ProxyUser | 代理人 | varchar | 10 |  |  |  |
| 8 | UpdUser | 異動人員 | varchar | 10 |  | V |  |
| 9 | UpdTime | 異動時間 | datetime | 8 |  | V |  |
| 10 | Remark | 備註 | nchar | 100 |  | V |  |
| 11 | ProxyCompID | 代理公司別 | varchar | 20 |  | V |  |
| 12 | ProxyDeptID | 代理部門別 | varchar | 20 |  | V |  |

### PU_CodeMap - 參數維護資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | TabName | 參數代號 | varchar | 30 |  |  |  |
| 2 | FldName | 參數類別 | varchar | 30 |  |  |  |
| 3 | Value | 參數值 | varchar | 20 |  |  |  |
| 4 | Description | 參數名稱 | nvarchar | 200 |  |  |  |
| 5 | Remark | 備註 | nvarchar | 200 |  |  |  |
| 6 | UpdUser | 異動人 | varchar | 10 |  | V |  |
| 7 | UpdTime | 異動時間 | datetime | 8 |  | V |  |

### SE_Company - 公司資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | CompID | 公司別代號 | varchar | 10 |  |  |  |
| 2 | CompName | 公司簡稱 | nvarchar | 100 |  |  |  |
| 3 | CompChnName | 公司詳細名稱 | nvarchar | 40 |  | V |  |
| 4 | CompEngName | 公司英文名 | varchar | 50 |  | V |  |
| 5 | IsValid | 狀態 | char | 1 |  |  | Y：有效<br/>N：無效 |
| 6 | Remark | 備註 | nvarchar | 200 |  | V |  |
| 7 | SysUpdTime | 系統異動時間 | datetime | 8 |  |  |  |

### SE_Dept - 部門資料檔 
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | CompID | 公司別代號 | varchar | 10 |  |  |  |
| 2 | DeptID | 部門別代號 | varchar | 20 |  |  |  |
| 3 | DeptName | 部門名稱 | nvarchar | 100 |  |  |  |
| 4 | DeptStatus | 部門狀態 | char | 1 |  |  | Y：有效<br/>N：無效 |
| 5 | IsBranch | 營業單位 | char | 1 |  |  | Y：是<br/>N：否 |
| 6 | DeptEngName | 部門英文名稱 | varchar | 60 |  | V |  |
| 7 | SysUpdTime | 系統異動時間 | datetime | 8 |  |  |  |

### SE_EmpAddition - 員工調兼現況檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | ValidDate | 生效日 | datetime | 8 | V |  |  |
| 2 | CompID | 公司代碼 | char | 6 | V |  |  |
| 3 | EmpID | 員工代碼 | char | 6 | V |  |  |
| 4 | AddCompID | 調兼公司代碼 | char | 6 | V |  |  |
| 5 | AddDeptID | 調兼部門代碼 | varchar | 12 | V |  |  |
| 6 | AddOrganID | 調兼科組課代碼 | varchar | 12 | V |  |  |
| 7 | Reason | 狀態 | char | 1 |  |  |  |
| 8 | FileNo | 人令 | varchar | 50 |  |  |  |
| 9 | Remark | 備註 | varchar | 500 |  |  |  |
| 10 | CreateDate | 建檔日 | datetime | 8 |  |  |  |
| 11 | CreateComp | 建檔人員公司 | char | 6 |  |  |  |
| 12 | CreateID | 建檔人員 | char | 6 |  |  |  |
| 13 | LastChgDate | 修改日 | datetime | 8 |  |  |  |
| 14 | LastChgComp | 修改人員公司 | char | 6 |  |  |  |
| 15 | LastChgID | 修改人員 | char | 6 |  |  |  |
| 16 | SysUpdTime | 系統更新時間 | smalldatetime | 4 |  |  |  |
| 17 | AdditionFlag | 調兼註記 | char | 2 |  |  | A專任<br/>B專職兼任<br/>C調兼專任<br/>D1調兼兼任-數據資料<br/>D2調兼兼任-作業處理<br/>Z其他 |
| 18 | AdditionFlagName | 調兼註記名稱 | nvarchar | 40 |  |  |  |

### SE_NonHRSysUser - 非組織人員資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | UserID | 員工編號 | varchar | 10 |  |  |  |
| 2 | UserName | 員工姓名 | nchar | 60 |  | V |  |
| 3 | UserStatus | 在職狀態 | char | 1 |  |  | 1 ─ 在職<br/>2 ─ 留停<br/>3 ─ 離退<br/>7 ─ 跨公司任職 |
| 4 | UserKind | 使用者類別 | varchar | 20 |  | V |  |
| 5 | Sex | 性別 | char | 1 |  | V |  |
| 6 | UserEngName | 英文名字 | varchar | 50 |  | V |  |
| 7 | CompID | 公司別代號 | varchar | 10 |  |  |  |
| 8 | DeptID | 部門別代號 | varchar | 20 |  |  |  |
| 9 | OrganID | 科組課代號 | varchar | 20 |  | V |  |
| 10 | UserMail | 同仁信箱 | varchar | 50 |  | V |  |
| 11 | DefPwd | 預設密碼 | varchar | 32 |  | V |  |
| 12 | UpdTime | 異動時間 | datetime | 8 |  |  |  |
| 13 | UpdUser | 異動人員編 | varchar | 10 |  | V |  |
| 14 | UpdUserName | 異動人姓名 | nchar | 20 |  | V |  |
| 15 | RequestNo | 需求單號 | varchar | 20 |  | V |  |
| 16 | Remark | 備註 | nvarchar | 200 |  | V |  |

### SE_Organ - 科組課資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | CompID | 公司代碼 | varchar | 10 |  |  |  |
| 2 | OrganID | 單位代碼 | varchar | 20 |  |  |  |
| 3 | OrganName | 單位名稱 | nvarchar | 60 |  |  |  |
| 4 | OrganEngName | 使用者類別 | varchar | 60 |  | V |  |
| 5 | GroupType | 事業單位類別 | varchar | 3 |  | V |  |
| 6 | GroupID | 事業單位代碼 | varchar | 20 |  |  |  |
| 7 | GroupName | 事業單位名稱 | nvarchar | 100 |  | V |  |
| 8 | UpOrganID | 上階部門代號 | varchar | 20 |  |  |  |
| 9 | DeptID | 所屬一級部門代號 | varchar | 20 |  |  |  |
| 10 | Boss | 部門主管 | varchar | 10 |  | V |  |
| 11 | BossCompID | 部門主管公司代碼 | varchar | 10 |  | V |  |
| 12 | BossType | 主管任用方式 | char | 1 |  |  | 1 – 主要<br/>2 – 兼任 |
| 13 | SecBoss | 部門副主管 | varchar | 10 |  | V |  |
| 14 | SecBossCompID | 部門副主管公司代碼 | varchar | 10 |  | V |  |
| 15 | WorkSite | 工作地點 | nvarchar | 40 |  | V |  |
| 16 | IsVirtual | 虛擬部門註記 | char | 1 |  |  | N – 非虛擬部門<br/>Y – 虛擬部門 |
| 17 | IsValid | 無效註記 | char | 1 |  |  | Y – 有效<br/>N – 無效 |
| 18 | LastChgDate | 組織架構檔最近異動日期 | datetime | 8 |  | V |  |
| 19 | Depth | 單位層級 | varchar | 2 |  | V |  |
| 20 | IsBranch | 分行註記 | char | 1 |  | V |  |
| 21 | Remark | 備註 | nvarchar | 200 |  | V |  |
| 22 | SysUpdTime | 系統更新日 | datetime | 8 |  |  |  |

### SE_Property - NetAP個人常用字彙資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | PKID | 同仁員編 | varchar | 30 | V |  |  |
| 2 | PKKind | 類別屬性 | varchar | 20 | V |  |  |
| 3 | PropID | 類別項目 | varchar | 50 | V |  |  |
| 4 | Prop1 | 參數分類1 | nvarchar | 100 |  | V |  |
| 5 | Prop2 | 參數分類2 | nvarchar | 100 |  | V |  |
| 6 | Prop3 | 參數分類3 | nvarchar | 100 |  | V |  |
| 7 | PropJSON | 清單設定檔 | nvarchar | -1 |  | V |  |
| 8 | UpdUser | 異動員編 | varchar | 30 |  | V |  |
| 9 | UpdDateTime | 異動時間 | smalldatetime | 4 |  | V |  |
| 10 | Remark | 備註 | nvarchar | 200 |  | V |  |

### SE_User - 組織人員資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | UserID | 員工編號 | varchar | 10 |  |  |  |
| 2 | UserName | 中文姓名 | nvarchar | 60 |  | V |  |
| 3 | UserStatus | 任職狀況 | char | 1 |  |  | 1 ─ 在職<br/>2 ─ 留停<br/>3 ─ 離退<br/>7 ─ 跨公司任職 |
| 4 | UserKind | 使用者類別 | varchar | 20 |  |  |  |
| 5 | Sex | 性別 | char | 1 |  |  | 1 : 男<br/>2 : 女 |
| 6 | UserEngName | 英文姓名 | varchar | 50 |  | V |  |
| 7 | WorkTypeID | 工作性質代碼 | varchar | 100 |  | V |  |
| 8 | WorkType | 工作性質 | nvarchar | 400 |  | V |  |
| 9 | CompID | 公司代碼 | varchar | 10 |  |  |  |
| 10 | DeptID | 部門代碼 | varchar | 20 |  |  |  |
| 11 | OrganID | 單位代碼 | varchar | 20 |  |  |  |
| 12 | WorkSite | 工作地點 | nvarchar | 40 |  | V |  |
| 13 | RankID | 職等代碼 | char | 2 |  | V | 職等不外顯，僅提供系統邏輯使用 |
| 14 | TitleName | 職稱 | nvarchar | 40 |  | V |  |
| 15 | UserTel | 公司電話 | varchar | 30 |  | V |  |
| 16 | UserMail | 電子郵件地址 | varchar | 50 |  | V |  |
| 17 | DefPwd | 預設密碼 | varchar | 32 |  |  |  |
| 18 | UserPwd | 密碼 | varchar | 32 |  |  |  |
| 19 | UserPwdExpDate | 密碼到期日 | varchar | 8 |  |  |  |
| 20 | PwdErrTimes | 密碼錯誤次數 | int | 4 |  |  |  |
| 21 | DayPwdErrTimes | 當日密碼錯誤次數 | int | 4 |  |  |  |
| 22 | unLockPwd | 暫時密碼 | varchar | 32 |  | V |  |
| 23 | LastLoginIP | 最後登入IP | varchar | 15 |  | V |  |
| 24 | LastLoginTime | 最後登入時間 | datetime | 8 |  | V |  |
| 25 | LastLogoutTime | 最後登出時間 | datetime | 8 |  | V |  |
| 26 | HRLastChgDate | HR最後修改日期 | datetime | 8 |  | V |  |
| 27 | IsValid | 有效 | char | 1 |  |  |  |
| 28 | UpdTime | 更新日期 | datetime | 8 |  | V |  |
| 29 | SysUpdTime | 系統更新日期 | datetime | 8 |  |  |  |

### SE_WorkType - 工作性質資料檔
序號 | 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null| 備註 | 
|-----------|-----------|------------|------------|------------|------------|------------|-----------|
| 1 | CompID | 公司代碼 | varchar | 10 |  |  |  |
| 2 | WorkTypeID | 工作性質代碼 | varchar | 10 |  |  |  |
| 3 | WorkType | 工作性質名稱 | nvarchar | 60 |  |  |  |
| 4 | IsValid | 無效註記 | char | 1 |  |  | 1無效<br/>0有效 |
| 5 | SysUpdTime | 系統更新時間 | datetime | 8 |  |  |  |

