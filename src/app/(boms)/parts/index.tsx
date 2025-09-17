import FilterView from "@/src/components/filter-view";
import { partsData } from "@/src/constants";
import { ItemType } from "@/src/constants/static.list";
import { Part } from "@/src/constants/types";
import { PartFilterConfig } from "@/src/features/parts/filter-config";
import PartCard from "../../../features/parts/part-card";
import PartList from "../../../features/parts/part-list";
import { PartFormConfig, PartFormScehema } from "@/src/features/parts/form-config";

export default function Parts() {
  return (
    <FilterView<Part>
      data={partsData}
      itemType={ItemType.Parts}
      filterable={true}
      cardView={PartCard}
      listView={PartList}
      filterConfig={PartFilterConfig}
      formSchema={PartFormScehema}
      formConfig={PartFormConfig}
    />
  );
}
