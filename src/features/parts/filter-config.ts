import { FilterType } from "@/src/constants/static.list"
import { FilterConfig } from "@/src/constants/types"

export const PartFilterConfig : FilterConfig[] = [
  {
    label: "Part Name",
    filterType: FilterType.Search,
    name: "name",
    placeholder: "Search Part Name",
  },
  {
    label: "Part Number",
    filterType: FilterType.Search,
    name: "partNumber",
    placeholder: "Search Part Number",
  },
  {
    label: "Cage Code",
    filterType: FilterType.Search,
    name: "cageCode",
    placeholder: "Search Cage Code",
  },
  {
    label: "Distribution Statement",
    filterType: FilterType.Search,
    name: "distributionStatement",
    placeholder: "Search Distribution Statement",
  },
  {
    label: "NSN",
    filterType: FilterType.Search,
    name: "nsn",
    placeholder: "Search NSN",
  },
  {
    label: "UOC",
    filterType: FilterType.Search,
    name: "uoc",
    placeholder: "Search UOC",
  },
  {
    label: "Quantity",
    filterType: FilterType.NumberRange,
    name: "quantity",
    placeholder: "Search Quantity",
  },
  {
    label: "Status",
    filterType: FilterType.Dropdown,
    name: "status",
    placeholder: "Search Status",
    options: ["Available", "On Order", "Critical Shortage"],
  },
  {
    label: "Supplier Name",
    filterType: FilterType.Search,
    name: "supplierName",
    placeholder: "Search Supplier Name",
  },
  {
    label: "Lead Time",
    filterType: FilterType.Search,
    name: "leadTime",
    placeholder: "Search Lead Time",
  },
  {
    label: "Cost",
    filterType: FilterType.NumberRange,
    name: "cost",
    placeholder: "Search Cost",
  },
  {
    label: "Source",
    filterType: FilterType.Dropdown,
    name: "source",
    placeholder: "Search Source",
    options: ["UserCreated", "ExcelOrCSVImport"],
  }
]