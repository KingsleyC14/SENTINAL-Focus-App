// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradientContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 25,
    marginVertical: 10,
    width: width * 0.85,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  presetCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    width: width * 0.8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  presetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  presetSubtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  appList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  appTag: {
    backgroundColor: 'rgba(0,122,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 6,
  },
  appTagText: {
    color: '#007AFF',
    fontSize: 12,
    fontWeight: '500',
  },
  focusContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  focusTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  timer: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 30,
    textAlign: 'center',
  },
  statusText: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 30,
    textAlign: 'center',
  },
  endButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#FF3B30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  endButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

// Screens
function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientContainer}
      >
        <View style={styles.centerContent}>
          <Text style={styles.title}>SENTINAL</Text>
          <Text style={styles.subtitle}>
            Focus Mode for iOS{'\n'}
            Block distractions, boost productivity
          </Text>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => navigation.navigate("PermissionsScreen")}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

function PermissionsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientContainer}
      >
        <View style={styles.centerContent}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🔒 App Permissions</Text>
            <Text style={styles.cardText}>
              SENTINAL needs access to manage your apps during Focus Mode to help you stay focused and productive.
            </Text>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate("PresetSelectionScreen")}
            >
              <Text style={styles.primaryButtonText}>Grant Access</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.secondaryButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

function PresetSelectionScreen({ navigation }) {
  const presets = {
    Work: {
      apps: ["Email", "Calendar", "Notes", "Slack"],
      icon: "💼",
      description: "Stay focused on work tasks"
    },
    Study: {
      apps: ["PDF Reader", "Notes", "Flashcards", "Browser"],
      icon: "📚",
      description: "Optimize your learning session"
    },
    Exercise: {
      apps: ["Music", "Fitness Tracker", "Timer"],
      icon: "🏃‍♂️",
      description: "Focus on your fitness goals"
    },
    Custom: {
      apps: ["Choose your own apps"],
      icon: "⚙️",
      description: "Create a custom focus mode"
    }
  };

  const selectPreset = (name) => {
    navigation.navigate("FocusModeScreen", { 
      preset: presets[name].apps, 
      presetName: name,
      icon: presets[name].icon,
      description: presets[name].description
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientContainer}
      >
        <ScrollView contentContainerStyle={{ paddingVertical: 40, paddingHorizontal: 20 }}>
          <Text style={[styles.cardTitle, { marginBottom: 30, fontSize: 28 }]}>
            Choose Your Focus Mode
          </Text>
          
          {Object.keys(presets).map((presetName) => (
            <TouchableOpacity
              key={presetName}
              style={styles.presetCard}
              onPress={() => selectPreset(presetName)}
            >
              <Text style={styles.presetTitle}>
                {presets[presetName].icon} {presetName}
              </Text>
              <Text style={styles.presetSubtitle}>
                {presets[presetName].description}
              </Text>
              <View style={styles.appList}>
                {presets[presetName].apps.map((app, index) => (
                  <View key={index} style={styles.appTag}>
                    <Text style={styles.appTagText}>{app}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

function FocusModeScreen({ route, navigation }) {
  const { preset, presetName, icon, description } = route.params;
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(true);

  React.useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientContainer}
      >
        <View style={styles.focusContainer}>
          <Text style={styles.focusTitle}>
            {icon} {presetName} Focus
          </Text>
          
          <Text style={styles.timer}>
            {formatTime(timeLeft)}
          </Text>
          
          <Text style={styles.statusText}>
            {isActive ? "Stay focused!" : "Timer paused"}
          </Text>
          
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Allowed Apps</Text>
            <View style={styles.appList}>
              {preset.map((app, index) => (
                <View key={index} style={styles.appTag}>
                  <Text style={styles.appTagText}>{app}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <TouchableOpacity 
            style={[styles.primaryButton, { marginBottom: 15 }]}
            onPress={toggleTimer}
          >
            <Text style={styles.primaryButtonText}>
              {isActive ? "Pause" : "Resume"}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.endButton}
            onPress={() => navigation.navigate("FocusEndedScreen")}
          >
            <Text style={styles.endButtonText}>End Focus Mode</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

function FocusEndedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradientContainer}
      >
        <View style={styles.centerContent}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>🎉 Focus Session Complete!</Text>
            <Text style={styles.cardText}>
              Great job! You've completed your focus session. All apps have been unlocked and you can now access your full device.
            </Text>
            
            <View style={[styles.card, { backgroundColor: 'rgba(0,122,255,0.1)', marginVertical: 20 }]}>
              <Text style={[styles.cardTitle, { fontSize: 18, color: '#007AFF' }]}>
                Session Statistics
              </Text>
              <Text style={[styles.cardText, { color: '#007AFF' }]}>
                • Duration: 25 minutes{'\n'}
                • Apps blocked: 15+{'\n'}
                • Focus level: Excellent
              </Text>
            </View>
            
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => navigation.navigate("PresetSelectionScreen")}
            >
              <Text style={styles.primaryButtonText}>Start New Session</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => navigation.navigate("SplashScreen")}
            >
              <Text style={styles.secondaryButtonText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
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