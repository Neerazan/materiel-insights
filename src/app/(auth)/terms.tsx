import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useAuthStore } from "@/src/store/auth.store";
import { AuthContentLayout } from "@/src/components/auth-content-layout";

export default function ConsentScreen() {
  const { setTermsAccepted } = useAuthStore();

  const handleDisagree = () => {
    // Handle disagree action - maybe exit app or show warning
    console.log("User disagreed to terms");
  };

  const handleAgree = () => {
    setTermsAccepted();
  };

  return (
    <AuthContentLayout>
      <View className="flex-1">
        {/* Scrollable content */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* Main title */}
          <Text className="text-lg font-bold text-gray-900 mb-6 leading-6">
            You are accessing a U.S. Government (USG) Information System (IS) that is
            provided for USG-authorized use only. By using this IS (which includes any
            device attached to this IS), you consent to the following conditions:
          </Text>

          {/* Terms list */}
          <View className="space-y-4 mb-6">
            <Text className="text-gray-700 leading-5 text-base">
              • The USG routinely intercepts and monitors communications on this IS for
              purposes including, but not limited to, penetration testing, COMSEC
              monitoring, network operations and defense, personnel misconduct (PM), law
              enforcement (LE), and counterintelligence (CI) investigations.
            </Text>

            <Text className="text-gray-700 leading-5 text-base">
              • At any time, the USG may inspect and seize data stored on this IS.
            </Text>

            <Text className="text-gray-700 leading-5 text-base">
              • Communications using, or data stored on, this IS are not private, are
              subject to routine monitoring, interception, and search, and may be
              disclosed or used for any USG-authorized purpose.
            </Text>

            <Text className="text-gray-700 leading-5 text-base">
              • This IS includes security measures (e.g., authentication and access
              controls) to protect USG interests -- not for your personal benefit or
              privacy.
            </Text>

            <Text className="text-gray-700 leading-5 text-base">
              • Notwithstanding the above, using this IS does not constitute consent to
              PM, LE or CI investigative searching or monitoring of the content of
              privileged communications, or work product, related to personal
              representation or services by attorneys, psychotherapists, or clergy, and
              their assistants. Such communications and work product are private and
              confidential.
            </Text>

            <TouchableOpacity className="self-start">
              <Text className="text-blue-600 underline text-base">
                See User Agreement for details.
              </Text>
            </TouchableOpacity>
          </View>

          {/* Agreement footer */}
          <View className="bg-gray-50">
            <Text className="text-gray-800 text-center font-medium text-base">
              By clicking {"Agree"} below you agree to these terms and conditions.
            </Text>
          </View>
        </ScrollView>

        <View className="border-t border-gray-200 pt-4 pb-8">
          <View className="flex-row justify-between gap-4">
            <TouchableOpacity
              className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 bg-white"
              onPress={handleDisagree}
              activeOpacity={0.7}
            >
              <Text className="text-gray-700 font-semibold text-center text-base">
                Disagree
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-1 px-6 py-3 rounded-lg bg-blue-600 shadow-sm"
              onPress={handleAgree}
              activeOpacity={0.8}
            >
              <Text className="text-white font-semibold text-center text-base">
                Agree
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </AuthContentLayout>
  );
}