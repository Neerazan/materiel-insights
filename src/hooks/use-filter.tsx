import { useEffect, useState } from "react";
import { FilterType } from "../constants/static.list";
import { FilterConfig } from "../constants/types";

export default function useFilter<T>(items: T[], filterConfig: FilterConfig[], filters: any) {
  const [filteredItems, setFilteredItems] = useState<T[]>([]);

  useEffect(() => {
    if (!items?.length) return;
    let result = [...items];

    filterConfig.forEach((config) => {
      switch (config.filterType) {
        case FilterType.Search:
          if (filters[config.name]) {
            result = result.filter((item) =>
              (item as any)[config.name]
                ?.toString()
                .toLowerCase()
                .includes(filters[config.name].toString().toLowerCase())
            );
          }
          break;

        case FilterType.Dropdown:
          if (filters[config.name]) {
            result = result.filter(
              (item) => (item as any)[config.name] === filters[config.name]
            );
          }
          break;

        case FilterType.NumberRange:
          if (filters[`${config.name}_min`] || filters[`${config.name}_max`]) {
            result = result.filter((item) => {
              const value = Number((item as any)[config.name]);
              const min = Number(filters[`${config.name}_min`]) || Number.MIN_SAFE_INTEGER;
              const max = Number(filters[`${config.name}_max`]) || Number.MAX_SAFE_INTEGER;
              return value >= min && value <= max;
            });
          }
          break;

        case FilterType.DateRange:
          if (filters[`${config.name}_from`] || filters[`${config.name}_to`]) {
            result = result.filter((item) => {
              const date = new Date((item as any)[config.name]).getTime();
              const from = filters[`${config.name}_from`] ? new Date(filters[`${config.name}_from`]).getTime() : 0;
              const to = filters[`${config.name}_to`] ? new Date(filters[`${config.name}_to`]).getTime() : Number.MAX_SAFE_INTEGER;
              return date >= from && date <= to;
            });
          }
          break;
      }
    });

    setFilteredItems(result);
  }, [items, filterConfig, filters]);

  return { filteredItems };
}