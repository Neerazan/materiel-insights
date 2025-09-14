import DefaultCard from "@/src/components/default-card";
import { icons } from "@/src/constants";
import { Part } from "@/src/constants/types";
import { ReactElement } from "react";

export default function PartCard(dataItem: Part): ReactElement {
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
    />
  );
}