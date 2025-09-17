import DefaultCard from "@/src/components/default-card";
import { icons } from "@/src/constants";
import { Part } from "@/src/constants/types";
import { router } from "expo-router";
import { ReactElement } from "react";

type Props = {
  dataItem: Part;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function PartCard({ dataItem, onEdit, onDelete }: Props): ReactElement {
  return (
    <DefaultCard
      title={dataItem?.name}
      cardImage={icons.parts}
      cardBody={{
        "Part Number": dataItem?.partNumber,
        "CAGE Code": dataItem?.cageCode,
        "Quantity": dataItem?.quantity,
        "Status": dataItem?.status,
        "Lead Time": dataItem?.leadTime,
        "Cost": dataItem?.cost,
      }}
      onPress={() => {
        router.push(`/(boms)/parts/${dataItem.id}`);
      }}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
}