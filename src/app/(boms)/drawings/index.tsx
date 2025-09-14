import FilterView from "@/src/components/filter-view";
import { drawingData } from "@/src/constants";
import { Alert } from "react-native";
import DrawingCard from "@/src/features/drawings/drawing-card";
import DrawingList from "@/src/features/drawings/drawing-list";
import { Drawing } from "@/src/constants/types";
import { drawingFilterConfig } from "@/src/features/drawings/filter-config";

export default function Drawings() {
  return (
    <FilterView<Drawing>
      data={drawingData}
      title="Parts"
      filterable={true}
      onAddItem={() => { Alert.alert("Add Part", "Add part button pressed") }}
      cardView={DrawingCard}
      listView={DrawingList}
      filterConfig={drawingFilterConfig}
    />
  );
}
