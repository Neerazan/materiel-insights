import { FormComponent } from "../../constants/static.list";
import { FormConfig } from "@/src/constants/types";
import { z } from "zod";

export const DrawingFormConfig : FormConfig[] = [
  {
    name: "name",
    label: "Name",
    component: FormComponent.TextInput,
    placeholder: "Enter name",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    component: FormComponent.TextInput,
    placeholder: "Enter description",
    required: false,
  },
  {
    name: "number",
    label: "Number",
    component: FormComponent.TextInput,
    placeholder: "Enter number",
    required: true,
  },
];

export const DrawingFormScehema = z.object({
  name: z.string().min(1, { message: "Name must be at least 1 character." }).max(100, { message: "Name must be at most 100 characters." }),
  description: z.string().min(1, { message: "Description must be at least 1 character." }).max(100, { message: "Description must be at most 100 characters." }).optional(),
  number: z.string().min(1, { message: "Number must be at least 1 character." }).max(10, { message: "Number must be at most 10 characters." }),
});