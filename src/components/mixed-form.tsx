import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FormComponent, ItemType } from '../constants/static.list';
import { FormConfig } from '../constants/types';
import CustomInput from './custom-input';


type Props = {
  formConfig: FormConfig[];
  onSbumit: (values: Record<string, any>) => void;
  itemType: keyof typeof ItemType;
  initialValues?: Record<string, any> | null;
};

const MixedForm = ({ formConfig, onSbumit, itemType, initialValues }: Props) => {

  const [values, setValues] = React.useState<Record<string, any>>(initialValues || {});


  const renderFormField = (field: FormConfig) => {
    switch (field.component) {
      case FormComponent.TextInput:
        return (
          <View key={field.name} className="mb-4">
            <CustomInput
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChangeText={(text: string) => setValues((prev) => ({ ...prev, [field.name]: text }))}
              styles="py-2 rounded-[5px]"
            />
          </View>
        );
      case FormComponent.NumberInput:
        return (
          <View key={field.name} className="mb-4">
            <CustomInput
              label={field.label}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChangeText={(text: string) => setValues((prev) => ({ ...prev, [field.name]: text }))}
              keyboardType="numeric"
              styles="py-2 rounded-[5px]"
            />
          </View>
        );
      default:
        return null;
    }
  }

  return (
    <View className="bg-white">
      <FlatList
        data={formConfig}
        renderItem={({ item }) => renderFormField(item)}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />

      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          className="px-4 py-3 rounded-lg bg-gray-200 flex-1 mr-2"
          onPress={() => {
            setValues({});
          }}
        >
          <Text className="text-center font-semibold">Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 py-3 rounded-lg bg-[#0D6EFD] flex-1 ml-2"
          onPress={() => {
            onSbumit(values);
          }}
        >
          <Text className="text-center text-white font-semibold">{initialValues ? `Update` : `Create`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MixedForm