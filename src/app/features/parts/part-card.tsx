import DefaultCard from "@/src/components/default-card";
import { icons } from "@/src/constants";

export default function PartCard(dataItem: any) {
  return (
    dataItem ? (
      <DefaultCard
        title={dataItem?.name}
        imageUrl={icons.parts}
        cardBody={{
          "Part Number": dataItem?.partNumber,
          "CAGE Code": dataItem?.cageCode,
          "Quantity": dataItem?.quantity,
          "Status": dataItem?.status,
          "Lead Time": dataItem?.leadTime,
          "Cost": dataItem?.cost,
        }}
      />
    ) : null
  );
}