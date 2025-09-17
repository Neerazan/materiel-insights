import { FormConfig } from "@/src/constants/types";
import { z } from "zod";
import { FormComponent } from "../../constants/static.list";

export const PartFormConfig: FormConfig[] = [
  {
    name: "r_num",
    label: "R Number",
    component: FormComponent.TextInput,
    placeholder: "Enter R Number",
    required: true,
  },
  {
    name: "partNumber",
    label: "Part Number",
    component: FormComponent.TextInput,
    placeholder: "Enter Part Number",
    required: true,
  },
  {
    name: "cageCode",
    label: "Cage Code",
    component: FormComponent.TextInput,
    placeholder: "Enter Cage Code",
    required: true,
  },
  {
    name: "name",
    label: "Name",
    component: FormComponent.TextInput,
    placeholder: "Enter Name",
    required: true,
  },
  {
    name: "distributionStatement",
    label: "Distribution Statement",
    component: FormComponent.TextInput,
    placeholder: "Enter Distribution Statement",
    required: false,
  },
  {
    name: "nsn",
    label: "NSN",
    component: FormComponent.TextInput,
    placeholder: "Enter NSN",
    required: false,
  },
  {
    name: "uoc",
    label: "UOC",
    component: FormComponent.TextInput,
    placeholder: "Enter UOC",
    required: false,
  },
  {
    name: "quantity",
    label: "Quantity",
    component: FormComponent.TextInput,
    placeholder: "Enter Quantity",
    required: true,
  },
  {
    name: "status",
    label: "Status",
    component: FormComponent.TextInput,
    placeholder: "Enter Status",
    required: true,
  },
  {
    name: "supplierName",
    label: "Supplier Name",
    component: FormComponent.TextInput,
    placeholder: "Enter Supplier Name",
    required: false,
  },
  {
    name: "leadTime",
    label: "Lead Time",
    component: FormComponent.TextInput,
    placeholder: "Enter Lead Time",
    required: false,
  },
  {
    name: "cost",
    label: "Cost",
    component: FormComponent.TextInput,
    placeholder: "Enter Cost",
    required: false,
  },
  {
    name: "source",
    label: "Source",
    component: FormComponent.TextInput,
    placeholder: "Enter Source",
    required: true,
  }
];

export const PartFormScehema = z.object({
  r_num: z.string().min(5, { message: "R Number must be at least 5 character." }).max(10, { message: "R Number must be at most 10 characters." }),
  partNumber: z.string().min(1, { message: "Part Number must be at least 1 character." }).max(10, { message: "Part Number must be at most 10 characters." }),
  cageCode: z.string().min(1, { message: "Cage Code must be at least 1 character." }).max(10, { message: "Cage Code must be at most 10 characters." }),
  name: z.string().min(1, { message: "Name must be at least 1 character." }).max(100, { message: "Name must be at most 100 characters." }),
  distributionStatement: z.string().min(1, { message: "Distribution Statement must be at least 1 character." }).max(100, { message: "Distribution Statement must be at most 100 characters." }).optional(),
  nsn: z.string().min(1, { message: "NSN must be at least 1 character." }).max(10, { message: "NSN must be at most 10 characters." }).optional(),
  uoc: z.string().min(1, { message: "UOC must be at least 1 character." }).max(10, { message: "UOC must be at most 10 characters." }).optional(),
  quantity: z.string().min(1, { message: "Quantity must be at least 1 character." }).max(10, { message: "Quantity must be at most 10 characters." }),
  status: z.string().min(1, { message: "Status must be at least 1 character." }).max(10, { message: "Status must be at most 10 characters." }),
  supplierName: z.string().min(1, { message: "Supplier Name must be at least 1 character." }).max(100, { message: "Supplier Name must be at most 100 characters." }).optional(),
  leadTime: z.string().min(1, { message: "Lead Time must be at least 1 character." }).max(10, { message: "Lead Time must be at most 10 characters." }).optional(),
  cost: z.string().min(1, { message: "Cost must be at least 1 character." }).max(10, { message: "Cost must be at most 10 characters." }).optional(),
  source: z.string().min(1, { message: "Source must be at least 1 character." }).max(10, { message: "Source must be at most 10 characters." }),
});