import { useState } from "react";
import { FilterType } from "../constants/static.list";
import { FilterConfig } from "../constants/types";


// const filters = { "name": "test", "partNumber": "der345324", "sortBy": "Price: High to Low", "source": "ExcelOrCSVImport", "status": "On Order" };

// const partItem = {
//   "id": "1e7f3a2e-8c4b-5d6f-9a1b-2c3d4e5f6a7b",
//   "r_num": 1,
//   "partNumber": "PN-10001",
//   "cageCode": "1A23B",
//   "name": "Hydraulic Pump Assembly",
//   "distributionStatement": "Approved for public release",
//   "nsn": "1234-01-567-8901",
//   "uoc": "UOC-01",
//   "quantity": "50",
//   "status": "Available",
//   "supplierName": "AeroTech Inc.",
//   "leadTime": "14 days",
//   "cost": "$1500",
//   "source": "UserCreated"
// };

// const configg = [{
//   label: "Part Number",
//   filterType: FilterType.Search,
//   name: "partNumber",
//   placeholder: "Search Part Number",
// },
//   {
//     label: "Status",
//     filterType: FilterType.Dropdown,
//     name: "status",
//     placeholder: "Search Status",
//     options: ["Available", "On Order", "Critical Shortage"],
//   },
// ]

export default function useFilter<T>(items: T[], filterConfig: FilterConfig[], filters: any) {

  const [filteredItems, setFilteredItems] = useState<T[]>(items);

  filterConfig.forEach((config) => {
    switch (config.filterType) {
      case FilterType.Search:
        if (filters[config.name]) {
          setFilteredItems((prevItems) =>
            prevItems.filter((item) =>
              (item as any)[config.name]
                .toString()
                .toLowerCase()
                .includes(filters[config.name].toString().toLowerCase())
            )
          );
        }
      
      case FilterType.Dropdown:
        if (filters[config.name]) {
          setFilteredItems((prevItems) => 
            prevItems.filter((item) =>
              (item as any)[config.name] === filters[config.name]
            )
          )
        }
    }
  })

  return { filteredItems };
}