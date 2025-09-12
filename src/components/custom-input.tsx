import { Ionicons } from '@expo/vector-icons';
import { clsx } from 'clsx';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type Props = {
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    label?: string;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "numeric" | "email-address" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "visible-password";
    required?: boolean;
    showError?: boolean;
    styles?: string;
}

const cn = (...inputs: any[]) => {
    return twMerge(clsx(inputs));
}

const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label = 'label',
    secureTextEntry = false,
    keyboardType = "default",
    required = false,
    showError = false,
    styles = '',
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const shouldShowPassword = secureTextEntry && !isPasswordVisible;

    const getInputClasses = () => {
        const baseClasses = 'w-full px-4 py-1 text-base bg-white rounded-lg border-2 focus:outline-none';

        const conditionalClasses = cn(
            isFocused
                ? 'border-blue-500 bg-blue-50'
                : showError
                    ? 'border-red-500'
                    : 'border-gray-300',
            secureTextEntry && 'pr-12'
        );

        return cn(baseClasses, conditionalClasses, styles);
    };

    return (
        <View className="w-full mb-4">
            {/* Label */}
            <Text className="text-gray-700 text-base font-medium mb-2">
                {label}
                {required && <Text className="text-red-500 ml-1">*</Text>}
                {required && <Text className="text-gray-400 text-sm font-normal">(Required)</Text>}
            </Text>

            {/* Input Container */}
            <View className="relative">
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={shouldShowPassword}
                    keyboardType={keyboardType}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    className={getInputClasses()}
                    style={{
                        fontFamily: 'System',
                    }}
                />

                {/* Password Toggle Icon */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                        style={{ transform: [{ translateY: -12 }] }}
                    >
                        <Ionicons
                            name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                            size={20}
                            color="#6B7280"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default CustomInput;