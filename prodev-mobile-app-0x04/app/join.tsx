import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HEROLOGO, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";
import Feather from "@expo/vector-icons/Feather";

export default function Join() {
  return (
    <SafeAreaView className="flex-1 bg-white p-6 justify-center">
      <View className="items-center mb-8">
        <Image source={HEROLOGO} className="w-32 h-32" resizeMode="contain" />
        <Text className="text-3xl font-bold mt-4">Create Account</Text>
        <Text className="text-gray-500 mt-2 text-center">
          Sign up to get started
        </Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-2 font-semibold">Full Name</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Enter your full name"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-2 font-semibold">Email</Text>
          <TextInput
            className="border border-gray-300 rounded-lg px-4 py-3"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View>
          <Text className="text-gray-700 mb-2 font-semibold">Password</Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg px-4 py-3">
            <TextInput
              className="flex-1"
              placeholder="Enter your password"
              secureTextEntry
            />
            <Feather name="eye" size={20} color="#7E7B7B" />
          </View>
        </View>

        <TouchableOpacity className="bg-green-600 py-3 rounded-lg items-center mt-4">
          <Text className="text-white text-lg font-medium">Join Now</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center space-x-4 mt-2">
          <TouchableOpacity className="border border-gray-300 rounded-lg p-3">
            <Image source={GOOGLELOGO} className="w-6 h-6" />
          </TouchableOpacity>
          <TouchableOpacity className="border border-gray-300 rounded-lg p-3">
            <Image source={FACEBOOKLOGO} className="w-6 h-6" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-center mt-8">
        <Text className="text-gray-500">Already have an account? </Text>
        <Text className="text-green-600 font-semibold">Sign In</Text>
      </View>
    </SafeAreaView>
  );
}
