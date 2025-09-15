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
};

const FormModel = ({ visible, onClose, formConfig, onSubmit, initialValues, itemType }: Props) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/40">
        <View className="bg-white w-[90%] rounded-lg overflow-hidden px-6 py-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">{initialValues ? `Edit ${itemType}` : `Add New ${itemType}`}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-red-500 font-semibold">Close</Text>
            </TouchableOpacity>
          </View>
          <View className="max-h-[60vh]">
            <MixedForm
              formConfig={formConfig}
              onSbumit={onSubmit}
              itemType={itemType}
              initialValues={initialValues}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FormModel;