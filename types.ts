export enum UserRole {
  EMPLOYEE = '店员',
  STORE_MANAGER = '店长',
  REGIONAL_MANAGER = '小区经理',
  AREA_MANAGER = '区经理'
}

export interface InspectionTask {
  id: string;
  title: string;
  score: number;
  totalIssues: number;
  fixedIssues: number;
  status: 'pending' | 'completed';
  date: string;
  type: '常规' | '专项' | '视频';
}

export interface RectificationItem {
  id: string;
  title: string;
  storeName: string;
  date: string;
  status: '待整改' | '待审核' | '整改完成';
  source: string;
  imageUrl?: string;
}

export interface Metric {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface HealthCert {
  id: string;
  name: string;
  expiryDate: string;
  status: 'valid' | 'expiring' | 'expired';
}