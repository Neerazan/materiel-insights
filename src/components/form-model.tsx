import { Ionicons } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { ItemType } from "../constants/static.list";
import { FormConfig } from "../constants/types";
import MixedForm from "./mixed-form";

type Props = {
  visible: boolean;
  onClose: () => void;
  formConfig: FormConfig[];
  onSubmit: (values: Record<string, any>) => void;
  initialValues?: Record<string, any> | null;
  itemType: keyof typeof ItemType;
  formSchema?: any;
};

const FormModel = ({ visible, onClose, formConfig, onSubmit, initialValues, itemType, formSchema }: Props) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="bg-white w-[90%] max-h-[80%] rounded-lg overflow-hidden px-6 py-4 flex-1">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">{initialValues ? `Edit ${itemType}` : `Add New ${itemType}`}</Text>
            <TouchableOpacity
              onPress={onClose}
              activeOpacity={0.6}
              className="p-2"
            >
              <Ionicons
                name="close"
                size={24}
              />
            </TouchableOpacity>
          </View>
          <MixedForm
            formConfig={formConfig}
            formSchema={formSchema}
            onSubmit={onSubmit}
            itemType={itemType}
            initialValues={initialValues}
          />
        </View>
      </View>
    </Modal>
  );
};

export default FormModel;