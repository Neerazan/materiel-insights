import FilterView from "@/src/components/filter-view";
import { partsData } from "@/src/constants";
import { Alert } from "react-native";
import PartCard from "../../../features/parts/part-card";
import PartList from "../../../features/parts/part-list";
import { PartFilterConfig } from "@/src/features/parts/filter-config";
import { Part } from "@/src/constants/types";
import { ItemType } from "@/src/constants/static.list";

export default function Parts() {
  return (
    <FilterView<Part>
      data={partsData}
      itemType={ItemType.Parts}
      filterable={true}
      onAddItem={() => { Alert.alert("Add Part", "Add part button pressed") }}
      cardView={PartCard}
      listView={PartList}
      filterConfig={PartFilterConfig}
    />
  );
}
