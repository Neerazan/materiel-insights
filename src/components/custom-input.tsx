import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or your preferred icon library
import cn from 'clsx';

const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label = 'label',
    secureTextEntry = false,
    keyboardType = "default",
    required = false,
    showError = false,
} : any) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    
    const shouldShowPassword = secureTextEntry && !isPasswordVisible;

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
                    className={cn(
                        'w-full px-4 py-3 text-base bg-white rounded-lg border-2',
                        'focus:outline-none transition-colors duration-200',
                        isFocused 
                            ? 'border-blue-500 bg-blue-50' 
                            : showError 
                                ? 'border-red-500' 
                                : 'border-gray-200',
                        secureTextEntry && 'pr-12'
                    )}
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