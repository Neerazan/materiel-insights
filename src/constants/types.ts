import { FilterType } from "./static.list"

export interface FilterConfig {
  label: string
  filterType: FilterType
  name: string
  placeholder: string
  options?: string[]
}

export interface Part {
  id: string
  r_num: number
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