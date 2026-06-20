export interface StatCard {
  id: string;
  label: string;
  count: number;
  icon: string;
  color: string;
  bgColor: string;
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  count: number;
}

export interface Subject {
  id: string;
  name: string;
  semester: string;
  progress: number;
  icon: string;
  color: string;
}

export interface Upload {
  id: string;
  title: string;
  subject: string;
  type: "Notes" | "Important Qs" | "PYQ";
  uploadedBy: string;
  date: string;
}

export interface NavItem {
  label: string;
  icon: string;
  href: string;
  badge?: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}
