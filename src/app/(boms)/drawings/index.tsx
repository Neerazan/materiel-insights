import FilterView from "@/src/components/filter-view";
import { drawingData } from "@/src/constants";
import { ItemType } from "@/src/constants/static.list";
import { Drawing } from "@/src/constants/types";
import DrawingCard from "@/src/features/drawings/drawing-card";
import DrawingList from "@/src/features/drawings/drawing-list";
import { drawingFilterConfig } from "@/src/features/drawings/filter-config";
import { Alert } from "react-native";

export default function Drawings() {
  return (
    <FilterView<Drawing>
      data={drawingData}
      itemType={ItemType.Drawings}
      filterable={true}
      onAddItem={() => { Alert.alert("Add Part", "Add drawing button pressed") }}
      cardView={DrawingCard}
      listView={DrawingList}
      filterConfig={drawingFilterConfig}
    />
  );
}
