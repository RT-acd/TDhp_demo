export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Stethoscope' | 'Package' | 'Building2' | 'Wrench' | 'Handshake';
  details: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface CompanyInfo {
  label: string;
  value: string;
}

export interface NavItem {
  label: string;
  path: string;
}
