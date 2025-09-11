import FilterView from "@/src/components/filter-view";
import { partsData } from "@/src/constants";
import { Alert } from "react-native";
import PartCard from "../features/parts/part-card";
import PartList from "../features/parts/part-list";

export default function Parts() {
  return (
    <FilterView
      data={partsData}
      title="Parts"
      filterable={true}
      onAddItem={() => { Alert.alert("Add Part", "Add part button pressed") }}
      cardView={PartCard}
      listView={PartList}
    />
  );
}
