import FilterView from "@/src/components/filter-view";
import { drawingData } from "@/src/constants";
import { Alert } from "react-native";
import DrawingCard from "@/src/features/drawings/drawing-card";
import DrawingList from "@/src/features/drawings/drawing-list";
import { Drawing } from "@/src/constants/types";
import { drawingFilterConfig } from "@/src/features/drawings/filter-config";
import { ItemType } from "@/src/constants/static.list";

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
