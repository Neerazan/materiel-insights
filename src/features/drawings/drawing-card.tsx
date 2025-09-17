import DefaultCard from "@/src/components/default-card";
import { icons } from "@/src/constants";
import { Drawing } from "@/src/constants/types";
import { router } from "expo-router";
import { ReactElement } from "react";

type Props = {
  dataItem: Drawing;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function DrawingCard({ dataItem, onEdit, onDelete} : Props): ReactElement {
  return (
    <DefaultCard
      title={dataItem?.name}
      cardImage={icons.drawings}
      cardBody={{
        "Number": dataItem?.number,
        "Name": dataItem?.name,
        "Description": dataItem?.description,
      }}
      onPress={() => {
        router.push(`/(boms)/drawings/${dataItem.id}`);
      }}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}