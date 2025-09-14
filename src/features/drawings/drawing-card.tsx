import DefaultCard from "@/src/components/default-card";
import { icons } from "@/src/constants";
import { Drawing } from "@/src/constants/types";
import { ReactElement } from "react";

export default function DrawingCard(dataItem: Drawing): ReactElement {
  return (
    <DefaultCard
      title={dataItem?.name}
      cardImage={icons.drawings}
      cardBody={{
        "Number": dataItem?.number,
        "Name": dataItem?.name,
        "Description": dataItem?.description,
      }}
    />
  );
}