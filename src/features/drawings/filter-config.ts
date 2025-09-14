import { FilterType } from "@/src/constants/static.list"
import { FilterConfig } from "@/src/constants/types"

export const drawingFilterConfig : FilterConfig[] = [
  {
    label: "Drawing Name",
    filterType: FilterType.Search,
    name: "name",
    placeholder: "Search Drawing Name",
  },
  {
    label: "Drawing Number",
    filterType: FilterType.Search,
    name: "number",
    placeholder: "Search Drawing Number",
  }
]