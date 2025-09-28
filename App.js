// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

// Screens
function SplashScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>SENTINAL</Text>
      <Button title="Get Started" onPress={() => navigation.navigate("PermissionsScreen")} />
    </View>
  );
}

function PermissionsScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ marginBottom:20, textAlign:'center' }}>
        We need access to manage apps during Focus Mode.
      </Text>
      <Button title="Grant Access" onPress={() => navigation.navigate("PresetSelectionScreen")} />
    </View>
  );
}

function PresetSelectionScreen({ navigation }) {
  const presets = {
    Work: ["Email", "Calendar", "Notes", "Slack"],
    Study: ["PDF Reader", "Notes", "Flashcards", "Browser"],
    Exercise: ["Music", "Fitness Tracker", "Timer"]
  };

  const selectPreset = (name) => {
    navigation.navigate("FocusModeScreen", { preset: presets[name], presetName: name });
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:20, marginBottom:20 }}>Choose a Focus Preset</Text>
      <Button title="Work" onPress={() => selectPreset("Work")} />
      <Button title="Study" onPress={() => selectPreset("Study")} style={{ marginTop:10 }} />
      <Button title="Exercise" onPress={() => selectPreset("Exercise")} style={{ marginTop:10 }} />
    </View>
  );
}

function FocusModeScreen({ route, navigation }) {
  const { preset, presetName } = route.params;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:20, marginBottom:20 }}>Focus Mode Active</Text>
      <Text style={{ marginBottom:20 }}>Preset: {presetName}</Text>
      <Text style={{ marginBottom:20 }}>Allowed Apps:</Text>
      {preset.map((app, i) => (
        <Text key={i}>{app}</Text>
      ))}
      <Button title="End Focus Mode" onPress={() => navigation.navigate("FocusEndedScreen")} />
    </View>
  );
}

function FocusEndedScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ marginBottom:20 }}>Focus session ended. All apps unlocked.</Text>
      <Button title="Back to Presets" onPress={() => navigation.navigate("PresetSelectionScreen")} />
    </View>
  );
}

// Stack Navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name="PresetSelectionScreen" component={PresetSelectionScreen} />
        <Stack.Screen name="FocusModeScreen" component={FocusModeScreen} />
        <Stack.Screen name="FocusEndedScreen" component={FocusEndedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}