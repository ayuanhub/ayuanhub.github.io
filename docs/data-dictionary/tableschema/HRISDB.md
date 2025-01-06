---
sidebar_position: 2
title: HRISDB
---

### CEmpFlowShare - 永豐中國-員工公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| DeptID | 部門代碼 | varchar | 12 |  |  |
| DeptName | 部門名稱 | nvarchar | 120 |  |  |
| OrganID | 最小簽核單位 | varchar | 12 |  |  |
| OrganName | 最小簽核單位名稱 | nvarchar | 120 |  |  |
| GroupType | 事業群類別 | char | 3 |  |  |
| GroupID | 事業群代碼 | varchar | 12 |  |  |
| GroupName | 事業群名稱 | nvarchar | 120 |  |  |
| LastChgComp | 最後異動公司 | varchar | 6 |  |  |
| LastChgID | 最後異動者 | varchar | 6 |  |  |
| LastChgDate | 最後異動日期 | datetime | 8 |  |  |

### CEmpShare - 永豐中國-員工公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| NameN | 中文姓名 | nvarchar | 84 |  |  |
| EngName | 英文姓名 | nvarchar | 84 |  |  |
| Sex | 性別 | char | 1 |  |  |
| WorkStatus | 任職狀況 | char | 1 |  |  |
| WorkTypeID | 工作性質代碼 | varchar | 50 |  |  |
| WorkType | 工作性質 | nvarchar | 400 |  |  |
| CompName | 公司名稱 | nvarchar | 40 |  |  |
| GroupID | 事業單位代碼 | varchar | 12 |  |  |
| GroupName | 事業單位名稱 | nvarchar | 60 |  |  |
| OrganID | 單位代碼 | varchar | 12 |  |  |
| OrganName | 單位名稱 | nvarchar | 60 |  |  |
| DeptID | 部門代碼 | varchar | 12 |  |  |
| DeptName | 部門名稱 | nvarchar | 60 |  |  |
| WorkSite | 工作地點 | nvarchar | 40 |  |  |
| RankID | 職等代碼 | char | 2 |  |  |
| TitleName | 職稱 | nvarchar | 40 |  |  |
| HoldingRankID | 金控職等 | varchar | 2 |  |  |
| HoldingTitleName | 金控職稱 | nvarchar | 100 |  |  |
| EmpDate | 到職日期 | datetime | 8 |  |  |
| SinopacEmpDate | 企業團到職日 | datetime | 8 |  |  |
| QuitDate | 離職/留停/外派日期 | datetime | 8 |  |  |
| NotEmpDay | 不計算年資天數 | int | 4 |  |  |
| EMail | 電子郵件地址 | varchar | 60 |  |  |
| CompTel | 公司電話 | varchar | 22 |  |  |
| LastChgComp | 最後異動公司 | varchar | 6 |  |  |
| LastChgID | 最後異動者 | varchar | 6 |  |  |
| LastChgDate | 最後異動日期 | datetime | 8 |  |  |

### Company - 公司基本資料檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| CompName | 公司名稱 | nvarchar | 80 |  |  |
| CompEngName | 公司英文名稱 | varchar | 50 |  |  |
| CompChnName | 公司中文名稱 | varchar | 50 |  |  |
| FeeShareFlag | 費用分攤註記 | char | 1 |  |  |
| NotesCompName | NotesID之公司名稱 | varchar | 50 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| NotShowFlag | 不顯示註記 | char | 1 |  |  |
| ReturnDB |  | varchar | 20 |  |  |
| StopFromAS400 |  | char | 1 |  |  |

### COrgFlowShare - 永豐中國-簽核流程組織公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | varchar | 6 |  |  |
| OrganID | 單位代碼 | varchar | 12 | V |  |
| OrganName | 單位名稱 | nvarchar | 120 |  |  |
| UpOrganID | 上階部門代號 | varchar | 12 |  |  |
| DeptID | 所屬一級部門代號 | varchar | 12 |  |  |
| GroupType | 事業單位類別 | varchar | 3 |  |  |
| GroupID | 事業單位代碼 | varchar | 12 |  |  |
| GroupName | 事業單位名稱 | nvarchar | 60 |  |  |
| Boss | 部門主管 | varchar | 6 |  |  |
| BossCompID | 部門主管公司代碼 | varchar | 6 |  |  |
| BossType | 主管任用方式 | char | 1 |  |  |
| SecBoss | 部門副主管 | varchar | 6 |  |  |
| SecBossCompID | 部門副主管公司代碼 | varchar | 6 |  |  |
| VirtualFlag | 虛擬部門註記 | char | 1 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| Depth | 單位層級 | varchar | 2 |  |  |
| BranchFlag | 分行註記 | varchar | 1 |  |  |
| DelegateFlag | 授權註記 | char | 1 |  |  |
| RoleCode | 單位角色 | varchar | 2 |  |  |
| LastChgComp | 組織架構檔最後異動公司 | varchar | 6 |  |  |
| LastChgID | 組織架構檔最後異動者 | varchar | 6 |  |  |
| LastChgDate | 組織架構檔最後異動日期 | datetime | 8 |  |  |

### COrgShare - 永豐中國-組織公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | varchar | 6 | V |  |
| OrganID | 單位代碼 | varchar | 12 | V |  |
| OrganName | 單位名稱 | nvarchar | 60 |  |  |
| OrganEngName | 單位英文名稱 | nvarchar | 120 |  |  |
| UpOrganID | 上階部門代號 | varchar | 12 |  |  |
| DeptID | 所屬一級部門代號 | varchar | 12 |  |  |
| GroupType | 事業單位類別 | varchar | 3 |  |  |
| GroupID | 事業單位代碼 | varchar | 12 |  |  |
| GroupName | 事業單位名稱 | nvarchar | 60 |  |  |
| Boss | 部門主管 | varchar | 6 |  |  |
| BossCompID | 部門主管公司代碼 | varchar | 6 |  |  |
| BossType | 主管任用方式 | char | 1 |  |  |
| SecBoss | 部門副主管 | varchar | 6 |  |  |
| SecBossCompID | 部門副主管公司代碼 | varchar | 6 |  |  |
| PersonPart | 部門角色─人事管理員 | varchar | 6 |  |  |
| WorkSite | 工作地點 | nvarchar | 40 |  |  |
| WorkType | 工作性質 | nvarchar | 400 |  |  |
| VirtualFlag | 虛擬部門註記 | char | 1 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| Depth | 單位層級 | varchar | 2 |  |  |
| BranchFlag | 分行註記 | varchar | 1 |  |  |
| RoleCode | 單位角色 | varchar | 2 |  |  |
| SortOrder | 單位排序 | varchar | 1 |  |  |
| LastChgComp | 組織架構檔最後異動公司 | varchar | 6 |  |  |
| LastChgID | 組織架構檔最後異動者 | varchar | 6 |  |  |
| LastChgDate | 組織架構檔最後異動日期 | datetime | 8 |  |  |

### Daily_EmpShareLog - 每日員工比對異動記錄檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| LogDate | 記錄日期 | char | 10 | V |  |
| LogSeq | 記錄序號 | smallint | 2 | V |  |
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| ChgID | 異動代碼 | char | 2 | V |  |
| ChgRemark | 異動說明 | varchar | 100 |  |  |
| NameN | 中文姓名 | nvarchar | 24 |  |  |
| BeforeID | 異動前代碼 | varchar | 200 |  |  |
| BeforeRemark | 異動前名稱 | varchar | 500 |  |  |
| AfterID | 異動後代碼 | varchar | 200 |  |  |
| AfterRemark | 異動後名稱 | varchar | 500 |  |  |
| CreateDate | 建檔日期時間 | datetime | 8 |  |  |

### EmpAddition - 員工調兼現況檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| ValidDate | 生效日 | datetime | 8 | V |  |
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工代碼 | char | 6 | V |  |
| AddCompID | 調兼公司代碼 | char | 6 | V |  |
| AddDeptID | 調兼部門代碼 | varchar | 12 | V |  |
| AddOrganID | 調兼科組課代碼 | varchar | 12 | V |  |
| Reason | 狀態 | char | 1 |  | V |
| FileNo | 人令 | varchar | 50 |  | V |
| Remark | 備註 | varchar | 500 |  | V |
| CreateDate | 建檔日 | datetime | 8 |  | V |
| CreateComp | 建檔人員公司 | char | 6 |  | V |
| CreateID | 建檔人員 | char | 6 |  | V |
| LastChgDate | 修改日 | datetime | 8 |  | V |
| LastChgComp | 修改人員公司 | char | 6 |  | V |
| LastChgID | 修改人員 | char | 6 |  | V |
| AdditionFlag | 調兼註記 | char | 2 |  |  |
| AdditionFlagName | 調兼註記名稱 | nvarchar | 40 |  |  |

### EmpFlowShare - 員工公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| EmpID | 員工編號 | char | 6 | V |  |
| CompID | 公司代碼 | char | 6 | V |  |
| ActionID | 簽核類別 | char | 2 | V |  |
| OrganID | 最小簽核單位 | varchar | 12 |  |  |
| OrganName | 最小簽核單位名稱 | varchar | 60 |  |  |
| GroupType | 事業群類別 | char | 3 |  |  |
| GroupID | 事業群代碼 | varchar | 12 |  |  |
| GroupName | 事業群名稱 | varchar | 30 |  |  |
| LastChgID | 最後異動人員 | char | 6 |  |  |
| LastChgDate | 最後異動日期 | datetime | 8 |  |  |
| BusinessType | 業務類別 | char | 2 |  | V |
| BusinessTypeName | 業務類別名稱 | nvarchar | 200 |  | V |
| EmpFlowRemarkID | 功能備註 | varchar | 2 |  | V |
| EmpFlowRemarkName | 功能備註名稱 | nvarchar | 200 |  | V |

### EmpPosition - 員工職位檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| PositionID | 職位代碼 | char | 6 | V |  |
| PrincipalFlag | 主要工作性質註記 | char | 1 |  |  |
| LastChgComp | 最後異動公司 | char | 6 |  |  |
| LastChgID | 最後異動者 | char | 6 |  |  |
| LastChgDate | 最後異動日期 | datetime | 8 |  |  |

### EmpShare - 員工公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| Name | 中文姓名 | varchar | 12 |  |  |
| EngName | 英文姓名 | varchar | 20 |  |  |
| Sex | 性別 | char | 1 |  |  |
| WorkStatus | 任職狀況 | char | 1 |  |  |
| WorkTypeID | 工作性質代碼 | varchar | 50 |  |  |
| WorkType | 工作性質 | varchar | 200 |  |  |
| CompName | 公司名稱 | varchar | 20 |  |  |
| GroupID | 事業單位代碼 | varchar | 8 |  |  |
| GroupName | 事業單位名稱 | varchar | 30 |  |  |
| OrganID | 單位代碼 | varchar | 8 |  |  |
| OrganName | 單位名稱 | varchar | 30 |  |  |
| DeptID | 部門代碼 | varchar | 8 |  |  |
| DeptName | 部門名稱 | varchar | 30 |  |  |
| WorkSite | 工作地點 | varchar | 20 |  |  |
| RankID | 職等代碼 | char | 2 |  |  |
| TitleName | 職稱 | varchar | 20 |  |  |
| HoldingRankID | 金控職等 | char | 2 |  |  |
| HoldingTitleName | 金控職稱 | varchar | 50 |  |  |
| EmpDate | 到職日期 | datetime | 8 |  |  |
| SinopacEmpDate | 企業團到職日 | datetime | 8 |  |  |
| QuitDate | 離職/留停/外派日期 | datetime | 8 |  |  |
| NotEmpDay | 不計算年資天數 | int | 4 |  |  |
| AdjustHour | 調休時數(Only 證券Data) | decimal | 5 |  |  |
| LastChgDate | 員工主檔最近異動日期 | datetime | 8 |  |  |
| EMail | 電子郵件地址 | varchar | 60 |  |  |
| CompTel | 公司電話 | varchar | 22 |  |  |
| WTID | 班別代碼 | char | 2 |  |  |
| LicenseData | 證照資料(Only 證券Data) | varchar | 500 |  |  |
| ProbFlag | 試用考核註記(Only 證券Data) | char | 1 |  |  |
| RegStatus | SSO註冊狀態 | char | 1 |  |  |
| RegIP | SSO註冊 Client IP | varchar | 50 |  |  |
| LoginTime | 登入時間 | datetime | 8 |  |  |
| AOCode | AOCode | varchar | 6 |  |  |
| WorkSiteCode | 工作地點郵遞區號 | varchar | 5 |  |  |
| NameN | 中文姓名(Unicode,難字) | nvarchar | 24 |  |  |
| EmpIDOld |  | varchar | 6 |  |  |
| PositionID |  | varchar | 50 |  |  |
| Position |  | nvarchar | 400 |  |  |

### EmpWorkType - 員工工作性質檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| EmpID | 員工編號 | char | 6 | V |  |
| WorkTypeID | 工作性質編號 | char | 6 | V |  |
| PrincipalFlag | 主要工作性質註記 | char | 1 |  |  |
| LastChgComp | 最後異動公司 | varchar | 6 |  |  |
| LastChgID | 最後異動者 | varchar | 6 |  |  |
| LastChgDate | 最後異動日期 | datetime | 8 |  |  |

### OrgFlowShare - 簽核流程組織公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 |  |  |
| OrganID | 單位代碼 | varchar | 12 | V |  |
| OrganName | 單位名稱 | varchar | 60 |  |  |
| GroupType | 事業單位類別 | char | 3 |  |  |
| GroupID | 事業單位代碼 | varchar | 12 |  |  |
| GroupName | 事業單位名稱 | varchar | 30 |  |  |
| UpOrganID | 上階部門代號 | varchar | 12 |  |  |
| DeptID | 所屬一級部門代號 | varchar | 12 |  |  |
| Boss | 部門主管 | char | 6 |  |  |
| BossCompID | 部門主管公司代碼 | char | 6 |  |  |
| BossType | 主管任用方式 | char | 1 |  |  |
| SecBoss | 部門副主管 | char | 6 |  |  |
| SecBossCompID | 部門副主管公司代碼 | char | 6 |  |  |
| VirtualFlag | 虛擬部門註記 | char | 1 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| LastChgDate | 組織架構檔最近異動日期 | datetime | 8 |  |  |
| Depth | 單位層級 | varchar | 2 |  |  |
| BranchFlag | 分行註記 | char | 1 |  |  |
| DelegateFlag | 授權註記 | char | 1 |  |  |
| RoleCode | 單位角色 | varchar | 2 |  |  |
| BusinessType | 業務類別 | char | 2 |  |  |

### OrgShare - 組織公用檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| OrganID | 單位代碼 | varchar | 8 | V |  |
| GroupType | 事業單位類別 | char | 3 |  |  |
| GroupID | 事業單位代碼 | varchar | 8 |  |  |
| GroupName | 事業單位名稱 | varchar | 30 |  |  |
| OrganName | 單位名稱 | varchar | 30 |  |  |
| OrganEngName | 單位英文名稱 | varchar | 60 |  |  |
| UpOrganID | 上階部門代號 | varchar | 8 |  |  |
| DeptID | 所屬一級部門代號 | varchar | 8 |  |  |
| Boss | 部門主管 | char | 6 |  |  |
| BossCompID | 部門主管公司代碼 | char | 6 |  |  |
| BossType | 主管任用方式 | char | 1 |  |  |
| SecBoss | 部門副主管 | char | 6 |  |  |
| SecBossCompID | 部門副主管公司代碼 | char | 6 |  |  |
| WorkSite | 工作地點 | varchar | 20 |  |  |
| Position | 職位 | nvarchar | 400 |  | V |
| WorkType | 工作性質 | varchar | 200 |  |  |
| VirtualFlag | 虛擬部門註記 | char | 1 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| LastChgDate | 組織架構檔最近異動日期 | datetime | 8 |  |  |
| Depth | 單位層級 | varchar | 2 |  |  |
| BranchFlag | 分行註記 | char | 1 |  |  |
| RoleCode | 單位角色 | varchar | 2 |  |  |
| SortOrder | 單位排序 | varchar | 6 |  |  |
| PersonPart | 部門角色─人事管理員 | char | 6 |  |  |

### Position - 職位代碼檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| PositionID | 職位代碼 | char | 6 | V |  |
| Remark | 說明 | nvarchar | 80 |  | V |
| InValidFlag | 無效註記 | char | 1 |  | V |
| SortOrder | 排序 | varchar | 1 |  | V |
| LastChgComp | 最後異動公司 | char | 6 |  | V |
| LastChgID | 最後異動人員 | char | 6 |  | V |
| LastChgDate | 最後異動時間 | datetime | 8 |  | V |

### vw_EmpShare - 員工公用VIEW檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 |  |  |
| EmpID | 員工編號 | char | 6 |  |  |
| NameN | 中文姓名(Unicode,難字) | nvarchar | 24 |  |  |
| EngName | 英文姓名 | varchar | 20 |  |  |
| Sex | 性別 | char | 1 |  |  |
| WorkStatus | 任職狀況 | char | 1 |  |  |
| WorkTypeID | 工作性質代碼 | varchar | 50 |  |  |
| WorkType | 工作性質 | varchar | 200 |  |  |
| CompName | 公司名稱 | varchar | 20 |  |  |
| GroupID | 事業單位代碼 | varchar | 8 |  |  |
| GroupName | 事業單位名稱 | varchar | 30 |  |  |
| OrganID | 單位代碼 | varchar | 8 |  |  |
| OrganName | 單位名稱 | varchar | 30 |  |  |
| DeptID | 部門代碼 | varchar | 8 |  |  |
| DeptName | 部門名稱 | varchar | 30 |  |  |
| WorkSite | 工作地點 | varchar | 20 |  |  |
| TitleName | 職稱 | varchar | 20 |  |  |
| EmpDate | 到職日期 | datetime | 8 |  |  |
| SinopacEmpDate | 企業團到職日 | datetime | 8 |  |  |
| QuitDate | 離職/留停/外派日期 | datetime | 8 |  |  |
| LastChgDate | 員工主檔最近異動日期 | datetime | 8 |  |  |
| EMail | 電子郵件地址 | varchar | 60 |  |  |
| CompTel | 公司電話 | varchar | 22 |  |  |
| WTID | 班別(Only 證券Data) | char | 2 |  |  |
| LicenseData | 證照資料(Only 證券Data) | varchar | 500 |  |  |
| ProbFlag | 試用考核註記(Only 證券Data) | char | 1 |  |  |
| AOCode | AOCode | varchar | 6 |  |  |
| WorkSiteCode | 工作地點郵遞區號 | varchar | 5 |  |  |
| PositionID | 職位代碼 | varchar | 50 |  |  |
| Position | 職位 | nvarchar | 400 |  |  |

### WorkSite - 工作地點代碼檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| WorkSiteID | 工作地點代碼 | char | 3 | V |  |
| Remark | 工作地點說明 | nvarchar | 40 |  |  |
| EmpCount | 人數 | int | 4 |  |  |
| BranchFlag | 分行註記 | varchar | 1 |  |  |
| BuildingFlag | 大樓註記 | varchar | 1 |  |  |
| InvoiceNo | 統一編號 | varchar | 8 |  |  |
| WorkSiteCode | 地址郵遞區號 | varchar | 5 |  |  |
| CountryCode | 國碼 | varchar | 6 |  |  |
| AreaCode | 區碼 | varchar | 3 |  |  |
| Telephone | 電話 | varchar | 20 |  |  |
| ExtNo | 分機 | varchar | 5 |  |  |
| Address | 地址 | varchar | 60 |  |  |
| DialIn | 撥入單位類別 | varchar | 20 |  |  |
| DialOut | 撥出單位類別 | varchar | 20 |  |  |
| LastChgComp | 最後異動公司 | varchar | 6 |  |  |
| LastChgID | 最後異動人員 | varchar | 6 |  |  |
| LastChgDate | 最後異動時間 | datetime | 8 |  |  |
| ExtYards | 分機號碼長度 | smallint | 2 |  |  |
| CityCode | 縣市代碼 | varchar | 2 |  |  |

### WorkType - 工作性質代碼檔
| 欄位名稱 | 欄位中文 | 資料型態 | 長度 | 是否為主鍵 | 是否允許null|
|-----------|------------|------------|------------|------------|------------|
| CompID | 公司代碼 | char | 6 | V |  |
| WorkTypeID | 工作性質代碼 | char | 6 | V |  |
| Remark | 說明 | varchar | 22 |  |  |
| InValidFlag | 無效註記 | char | 1 |  |  |
| SortOrder | 排序 | varchar | 1 |  |  |