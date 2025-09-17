import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { FormComponent, ItemType } from '../constants/static.list';
import { FormConfig } from '../constants/types';
import CustomInput from './custom-input';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


type Props = {
  formConfig: FormConfig[];
  onSubmit: (values: Record<string, any>) => void;
  itemType: keyof typeof ItemType;
  initialValues?: Record<string, any> | null;
  formSchema: any;
};

const MixedForm = ({ formConfig, onSubmit, initialValues, formSchema }: Props) => {

  type FormType = z.infer<typeof formSchema>;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });

  const onDataSubmit: SubmitHandler<FormType> = (data) => {
    onSubmit(data);
  }

  const renderFormField = (field: FormConfig) => {
    switch (field.component) {
      case FormComponent.TextInput:
        return (
          <View key={field.name} className="mb-4">
            <Controller
              control={control}
              name={field.name}
              render={({field: { onChange, onBlur, value }}) => (
                <CustomInput
                  label={field.label}
                  placeholder={field.placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  required={field.required}
                  styles="py-2 rounded-[5px]"
                  showError={!!errors[field.name]}
                />
              )}
            />
            {errors[field.name] && (
              <Text className="text-red-500 text-sm mt-1 mb-2">
                {errors[field.name]?.message?.toString() || ''}
              </Text>
            )}
          </View>
        );
      case FormComponent.NumberInput:
        return (
          <View key={field.name} className="mb-4">
            <Controller
              control={control}
              name={field.name}
              render={({field: { onChange, onBlur, value }}) => (
                <CustomInput
                  label={field.label}
                  placeholder={field.placeholder}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  required={field.required}
                  styles="py-2 rounded-[5px]"
                  showError={!!errors[field.name]}
                />
              )}
            />
            {errors[field.name] && (
              <Text className="text-red-500 text-sm mt-1 mb-2">
                {errors[field.name]?.message?.toString()}
              </Text>
            )}
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
          onPress={() => { reset() }}
        >
          <Text className="text-center font-semibold">Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="px-4 py-3 rounded-lg bg-[#0D6EFD] flex-1 ml-2"
          onPress={handleSubmit(onDataSubmit)}
        >
          <Text className="text-center text-white font-semibold">{initialValues ? `Update` : `Create`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default MixedForm