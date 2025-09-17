import { FilterType, FormComponent } from "./static.list"

export interface FilterConfig {
  label: string
  filterType: FilterType
  name: string
  placeholder: string
  options?: string[]
}

export interface Part {
  id: string
  r_num: string
  partNumber: string
  cageCode: string
  name: string
  distributionStatement: string
  nsn: string
  uoc: string
  quantity: string
  status: string
  supplierName: string
  leadTime: string
  cost: string
  source: string
}

export interface Drawing {
  id: string
  number: string
  name: string
  description: string
}

export type FormConfig = {
  name: string;
  label: string;
  component: keyof typeof FormComponent;
  required: boolean;
  placeholder?: string;
  options?: any[];
};

export interface Tab {
  id: string;
  title: string;
  selected?: boolean;
}

export interface BreadCrumbItem {
  label: string;
  href: any;
  disabled?: boolean;
}
