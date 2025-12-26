import { InspectionTask, RectificationItem, UserRole, HealthCert } from './types';

export const MOCK_INSPECTIONS: InspectionTask[] = [
  { id: '1', title: '8月尾部餐厅专项巡检', score: 80, totalIssues: 30, fixedIssues: 20, status: 'completed', date: '2023-08-25', type: '专项' },
  { id: '2', title: '张继8月QSC检查', score: 95, totalIssues: 10, fixedIssues: 10, status: 'completed', date: '2023-08-20', type: '常规' },
  { id: '3', title: '7月视频巡检任务', score: 0, totalIssues: 0, fixedIssues: 0, status: 'pending', date: '2023-07-30', type: '视频' },
  { id: '4', title: '仪容仪表专项视频巡检', score: 70, totalIssues: 5, fixedIssues: 2, status: 'completed', date: '2023-08-15', type: '视频' },
];

export const MOCK_RECTIFICATIONS: RectificationItem[] = [
  { id: 'r1', title: '后厨地面积水未清理', storeName: '天河一店', date: '2023-09-01', status: '待整改', source: '慧运营' },
  { id: 'r2', title: '员工未佩戴帽子', storeName: '海珠二店', date: '2023-08-30', status: '待审核', source: '海康威视' },
  { id: 'r3', title: '灭火器过期', storeName: '白云三店', date: '2023-08-28', status: '整改完成', source: '自检' },
];

export const MOCK_HEALTH_CERTS: HealthCert[] = [
  { id: 'h1', name: '李明', expiryDate: '2023-12-01', status: 'valid' },
  { id: 'h2', name: '王芳', expiryDate: '2023-09-15', status: 'expiring' },
  { id: 'h3', name: '张伟', expiryDate: '2023-08-01', status: 'expired' },
];

export const ROLE_OPTIONS = [
  UserRole.EMPLOYEE,
  UserRole.STORE_MANAGER,
  UserRole.REGIONAL_MANAGER,
  UserRole.AREA_MANAGER
];