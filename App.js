// App.js
import React, { useState, createContext, useContext } from "react";
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
// import { LinearGradient } from 'expo-linear-gradient';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Theme Context
const ThemeContext = createContext();

const lightTheme = {
  background: '#FFFFFF',
  surface: '#F8F9FA',
  card: '#FFFFFF',
  text: '#000000',
  textSecondary: '#6C757D',
  accent: '#4A7C59', // Sage green instead of blue
  accentGreen: '#9CAF88', // Sage green
  danger: '#9CAF88', // Sage green instead of red
  border: '#E9ECEF',
  shadow: 'rgba(0,0,0,0.1)',
  statusBar: 'dark-content'
};

const darkTheme = {
  background: '#000000',
  surface: '#1a1a1a',
  card: '#1a1a1a',
  text: '#FFFFFF',
  textSecondary: '#CCCCCC',
  accent: '#4A7C59', // Sage green instead of blue
  accentGreen: '#9CAF88', // Sage green
  danger: '#9CAF88', // Sage green instead of red
  border: 'rgba(255,255,255,0.1)',
  shadow: 'rgba(0,0,0,0.3)',
  statusBar: 'light-content'
};

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const theme = isDarkMode ? darkTheme : lightTheme;
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Icon Components
function RefreshIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size }}>
      <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: color,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        transform: [{ rotate: '45deg' }]
      }} />
    </View>
  );
}

function ShieldIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: size * 0.6,
        height: size * 0.7,
        borderWidth: 2,
        borderColor: color,
        borderRadius: size * 0.1,
        borderBottomLeftRadius: size * 0.3,
        borderBottomRightRadius: size * 0.3,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          bottom: -size * 0.08,
          left: '50%',
          marginLeft: -size * 0.04,
          width: size * 0.08,
          height: size * 0.08,
          backgroundColor: color,
          borderRadius: size * 0.04
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.2,
          left: '50%',
          marginLeft: -size * 0.1,
          width: size * 0.2,
          height: size * 0.2,
          borderWidth: 2,
          borderColor: color,
          borderRadius: size * 0.1
        }} />
      </View>
    </View>
  );
}

function ClockIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size }}>
      <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: color,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: size * 0.2,
          left: size * 0.5 - 1,
          width: 2,
          height: size * 0.3,
          backgroundColor: color,
          transformOrigin: 'bottom center'
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.5 - 1,
          left: size * 0.5 - 1,
          width: 2,
          height: size * 0.2,
          backgroundColor: color,
          transformOrigin: 'bottom center'
        }} />
      </View>
    </View>
  );
}

function PlayIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size }}>
      <View style={{
        width: 0,
        height: 0,
        borderLeftWidth: size * 0.6,
        borderTopWidth: size * 0.3,
        borderBottomWidth: size * 0.3,
        borderLeftColor: color,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
      }} />
    </View>
  );
}

function PauseIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ width: size * 0.3, height: size * 0.7, backgroundColor: color }} />
      <View style={{ width: size * 0.3, height: size * 0.7, backgroundColor: color }} />
    </View>
  );
}

function WarningIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size }}>
      <View style={{
        width: 0,
        height: 0,
        borderLeftWidth: size * 0.5,
        borderRightWidth: size * 0.5,
        borderBottomWidth: size * 0.7,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: color,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          bottom: -size * 0.8,
          left: size * 0.5 - size * 0.05,
          width: size * 0.1,
          height: size * 0.1,
          backgroundColor: color
        }} />
      </View>
    </View>
  );
}

function BackArrowIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size }}>
      <View style={{
        width: size * 0.6,
        height: size * 0.6,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: color,
        transform: [{ rotate: '45deg' }]
      }} />
    </View>
  );
}

function WorkIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: size * 0.7,
        height: size * 0.5,
        borderWidth: 2,
        borderColor: color,
        borderRadius: size * 0.05,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: -size * 0.15,
          left: size * 0.15,
          width: size * 0.4,
          height: size * 0.15,
          borderWidth: 2,
          borderColor: color,
          borderBottomWidth: 0,
          borderTopLeftRadius: size * 0.05,
          borderTopRightRadius: size * 0.05
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.1,
          left: size * 0.2,
          width: size * 0.3,
          height: 2,
          backgroundColor: color
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.2,
          left: size * 0.2,
          width: size * 0.3,
          height: 2,
          backgroundColor: color
        }} />
      </View>
    </View>
  );
}

function ExerciseIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: size * 0.4,
        height: size * 0.6,
        borderWidth: 2,
        borderColor: color,
        borderRadius: size * 0.2,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: size * 0.1,
          left: -size * 0.1,
          width: size * 0.2,
          height: size * 0.4,
          borderWidth: 2,
          borderColor: color,
          borderRadius: size * 0.1
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.1,
          right: -size * 0.1,
          width: size * 0.2,
          height: size * 0.4,
          borderWidth: 2,
          borderColor: color,
          borderRadius: size * 0.1
        }} />
        <View style={{
          position: 'absolute',
          top: -size * 0.1,
          left: size * 0.1,
          width: size * 0.2,
          height: size * 0.2,
          borderWidth: 2,
          borderColor: color,
          borderRadius: size * 0.1
        }} />
      </View>
    </View>
  );
}

function StudyIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: size * 0.7,
        height: size * 0.5,
        borderWidth: 2,
        borderColor: color,
        borderRadius: size * 0.05,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: size * 0.1,
          left: size * 0.15,
          right: size * 0.15,
          height: 1.5,
          backgroundColor: color
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.2,
          left: size * 0.15,
          right: size * 0.15,
          height: 1.5,
          backgroundColor: color
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.3,
          left: size * 0.15,
          right: size * 0.15,
          height: 1.5,
          backgroundColor: color
        }} />
        <View style={{
          position: 'absolute',
          top: -size * 0.05,
          left: size * 0.2,
          width: size * 0.3,
          height: size * 0.1,
          borderWidth: 2,
          borderColor: color,
          borderBottomWidth: 0,
          borderTopLeftRadius: size * 0.05,
          borderTopRightRadius: size * 0.05
        }} />
      </View>
    </View>
  );
}

function CustomIcon({ size = 20, color = '#000' }) {
  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{
        width: size * 0.6,
        height: size * 0.6,
        borderWidth: 2,
        borderColor: color,
        borderRadius: size * 0.1,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          top: size * 0.15,
          left: size * 0.15,
          width: size * 0.3,
          height: size * 0.3,
          borderWidth: 2,
          borderColor: color,
          borderRadius: size * 0.05
        }} />
        <View style={{
          position: 'absolute',
          top: size * 0.2,
          left: size * 0.2,
          width: size * 0.2,
          height: size * 0.2,
          backgroundColor: color,
          borderRadius: size * 0.1
        }} />
      </View>
    </View>
  );
}

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
    backgroundColor: '#4A7C59',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    shadowColor: '#4A7C59',
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
  const { theme, toggleTheme } = useTheme();
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        {/* Theme Toggle Button */}
        <View style={{ position: 'absolute', top: 50, right: 20, zIndex: 1 }}>
          <TouchableOpacity 
            style={{
              backgroundColor: theme.surface,
              padding: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.border
            }}
            onPress={toggleTheme}
          >
            <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
              {theme === darkTheme ? (
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: theme.accentGreen }} />
              ) : (
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: theme.text }} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.centerContent}>
          <Text style={[styles.title, { color: theme.accentGreen }]}>SENTINAL</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Focus Mode for iOS{'\n'}
            Block distractions, boost productivity
          </Text>
          <TouchableOpacity 
            style={[styles.primaryButton, { backgroundColor: theme.accent }]}
            onPress={() => navigation.navigate("PermissionsScreen")}
          >
            <Text style={styles.primaryButtonText}>Enter</Text>
          </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  );
}

function PermissionsScreen({ navigation }) {
  const { theme } = useTheme();
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        <View style={styles.centerContent}>
          <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>
              <ShieldIcon size={24} color={theme.accentGreen} />
              <Text style={[styles.cardTitle, { color: theme.text, marginLeft: 10 }]}>App Permissions</Text>
            </View>
            <Text style={[styles.cardText, { color: theme.textSecondary }]}>
              SENTINAL needs access to manage your apps during Focus Mode to help you stay focused and productive.
      </Text>
            <TouchableOpacity 
              style={[styles.primaryButton, { backgroundColor: theme.accent }]}
              onPress={() => navigation.navigate("PresetSelectionScreen")}
            >
              <Text style={styles.primaryButtonText}>Grant Access</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.secondaryButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.secondaryButtonText, { color: theme.text }]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
    </SafeAreaView>
  );
}

function PresetSelectionScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  
  const presets = {
    Work: {
      icon: "work",
      title: "Work Mode",
      description: "Block social media, games, and entertainment apps",
      duration: "25 minutes",
      blockedApps: ["Social Media", "Games", "Entertainment", "Shopping"]
    },
    Exercise: {
      icon: "exercise",
      title: "Exercise Mode", 
      description: "Block all apps except fitness and health trackers",
      duration: "45 minutes",
      blockedApps: ["Social Media", "Games", "Entertainment", "Shopping"]
    },
    Study: {
      icon: "study",
      title: "Study Mode",
      description: "Block everything except educational and note-taking apps",
      duration: "50 minutes", 
      blockedApps: ["Social Media", "Games", "Entertainment", "Shopping"]
    }
  };

  const selectPreset = (name) => {
    navigation.navigate("FocusModeScreen", { 
      preset: presets[name],
      presetName: name
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        {/* Theme Toggle Button */}
        <View style={{ position: 'absolute', top: 50, right: 20, zIndex: 1 }}>
          <TouchableOpacity 
            style={{
              backgroundColor: theme.surface,
              padding: 10,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme.border
            }}
            onPress={toggleTheme}
          >
            <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
              {theme === darkTheme ? (
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: theme.accentGreen }} />
              ) : (
                <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: theme.text }} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          contentContainerStyle={{ 
            paddingTop: 60, 
            paddingHorizontal: 20, 
            paddingBottom: 40,
            alignItems: 'center',
            flexGrow: 1
          }}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          <Text style={[styles.title, { color: theme.accentGreen, fontSize: 32, marginBottom: 10 }]}>
            SENTINAL
          </Text>
          <Text style={[styles.subtitle, { color: theme.text, fontSize: 16, marginBottom: 40 }]}>
            Choose your focus mode
          </Text>
          
          {Object.keys(presets).map((presetName) => (
            <TouchableOpacity
              key={presetName}
              style={[styles.presetCard, { 
                backgroundColor: theme.card, 
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 20,
                borderColor: theme.border,
                alignSelf: 'center'
              }]}
              onPress={() => selectPreset(presetName)}
            >
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: theme.accentGreen,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15
              }}>
                {presets[presetName].icon === 'work' && <WorkIcon size={24} color="#fff" />}
                {presets[presetName].icon === 'exercise' && <ExerciseIcon size={24} color="#fff" />}
                {presets[presetName].icon === 'study' && <StudyIcon size={24} color="#fff" />}
              </View>
              
              <View style={{ flex: 1 }}>
                <Text style={[styles.presetTitle, { color: theme.text, fontSize: 18, marginBottom: 5 }]}>
                  {presets[presetName].title}
                </Text>
                <Text style={[styles.presetSubtitle, { color: theme.textSecondary, fontSize: 14, marginBottom: 8 }]}>
                  {presets[presetName].description}
                </Text>
                <Text style={{ color: theme.accentGreen, fontSize: 14, fontWeight: '600' }}>
                  {presets[presetName].duration}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}

function CustomTimeScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const [customMinutes, setCustomMinutes] = useState(30);
  const [customSeconds, setCustomSeconds] = useState(0);

  const startCustomSession = () => {
    const totalSeconds = customMinutes * 60 + customSeconds;
    const customPreset = {
      icon: "custom",
      title: "Custom Mode",
      description: `Custom focus session for ${customMinutes}:${customSeconds.toString().padStart(2, '0')}`,
      duration: `${customMinutes}:${customSeconds.toString().padStart(2, '0')}`,
      blockedApps: ["Social Media", "Games", "Entertainment", "Shopping"],
      totalSeconds: totalSeconds
    };
    
    navigation.navigate("FocusModeScreen", { 
      preset: customPreset,
      presetName: "Custom"
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingHorizontal: 20, marginBottom: 30 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowIcon size={24} color={theme.accentGreen} />
          </TouchableOpacity>
          <Text style={{ color: theme.accentGreen, fontSize: 18, fontWeight: '600', marginLeft: 10 }}>
            Custom Focus Time
          </Text>
          {/* Theme Toggle Button */}
          <View style={{ position: 'absolute', right: 20 }}>
            <TouchableOpacity 
              style={{
                backgroundColor: theme.surface,
                padding: 8,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: theme.border
              }}
              onPress={toggleTheme}
            >
              <View style={{ width: 16, height: 16, justifyContent: 'center', alignItems: 'center' }}>
                {theme === darkTheme ? (
                  <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: theme.accentGreen }} />
                ) : (
                  <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: theme.text }} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView 
          contentContainerStyle={{ 
            paddingHorizontal: 20, 
            paddingBottom: 40,
            alignItems: 'center' 
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border, marginBottom: 30 }]}>
            <Text style={[styles.cardTitle, { color: theme.text, marginBottom: 20 }]}>
              Set Your Focus Duration
            </Text>
            
            {/* Minutes Selector */}
            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: theme.text, fontSize: 16, marginBottom: 10, textAlign: 'center' }}>
                Minutes
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity 
                  style={{
                    backgroundColor: theme.surface,
                    padding: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.border
                  }}
                  onPress={() => setCustomMinutes(Math.max(1, customMinutes - 1))}
                >
                  <Text style={{ color: theme.text, fontSize: 20, fontWeight: 'bold' }}>-</Text>
                </TouchableOpacity>
                
                <Text style={{ 
                  color: theme.accentGreen, 
                  fontSize: 32, 
                  fontWeight: 'bold', 
                  marginHorizontal: 20,
                  minWidth: 60,
                  textAlign: 'center'
                }}>
                  {customMinutes}
                </Text>
                
                <TouchableOpacity 
                  style={{
                    backgroundColor: theme.surface,
                    padding: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.border
                  }}
                  onPress={() => setCustomMinutes(Math.min(120, customMinutes + 1))}
                >
                  <Text style={{ color: theme.text, fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Seconds Selector */}
            <View style={{ marginBottom: 30 }}>
              <Text style={{ color: theme.text, fontSize: 16, marginBottom: 10, textAlign: 'center' }}>
                Seconds
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity 
                  style={{
                    backgroundColor: theme.surface,
                    padding: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.border
                  }}
                  onPress={() => setCustomSeconds(Math.max(0, customSeconds - 15))}
                >
                  <Text style={{ color: theme.text, fontSize: 20, fontWeight: 'bold' }}>-</Text>
                </TouchableOpacity>
                
                <Text style={{ 
                  color: theme.accentGreen, 
                  fontSize: 32, 
                  fontWeight: 'bold', 
                  marginHorizontal: 20,
                  minWidth: 60,
                  textAlign: 'center'
                }}>
                  {customSeconds.toString().padStart(2, '0')}
                </Text>
                
                <TouchableOpacity 
                  style={{
                    backgroundColor: theme.surface,
                    padding: 10,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.border
                  }}
                  onPress={() => setCustomSeconds(Math.min(45, customSeconds + 15))}
                >
                  <Text style={{ color: theme.text, fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Total Time Display */}
            <View style={{
              backgroundColor: theme.surface,
              padding: 15,
              borderRadius: 15,
              marginBottom: 20,
              borderColor: theme.border,
              borderWidth: 1
            }}>
              <Text style={{ color: theme.textSecondary, fontSize: 14, textAlign: 'center', marginBottom: 5 }}>
                Total Duration
              </Text>
              <Text style={{ color: theme.accentGreen, fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                {customMinutes}:{customSeconds.toString().padStart(2, '0')}
              </Text>
            </View>

            {/* Start Button */}
            <TouchableOpacity 
              style={[styles.primaryButton, { backgroundColor: theme.accent }]}
              onPress={startCustomSession}
            >
              <Text style={styles.primaryButtonText}>Start Custom Session</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function FocusModeScreen({ route, navigation }) {
  const { preset, presetName } = route.params;
  const { theme, toggleTheme } = useTheme();
  const [customMinutes, setCustomMinutes] = useState(parseInt(preset.duration));
  const [timeLeft, setTimeLeft] = useState(customMinutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [appsBlocked, setAppsBlocked] = useState(0);

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

  const resetTimer = () => {
    setTimeLeft(customMinutes * 60);
    setIsActive(false);
  };

  const updateTimer = (newMinutes) => {
    setCustomMinutes(newMinutes);
    setTimeLeft(newMinutes * 60);
    setIsActive(false);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        <ScrollView 
          contentContainerStyle={{ 
            paddingTop: 20, 
            paddingHorizontal: 20, 
            paddingBottom: 40,
            flexGrow: 1
          }}
          showsVerticalScrollIndicator={false}
          bounces={true}
        >
          {/* Header */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrowIcon size={24} color={theme.accentGreen} />
            </TouchableOpacity>
            <Text style={{ color: theme.accentGreen, fontSize: 18, fontWeight: '600', marginLeft: 10 }}>
              {preset.title} Active
            </Text>
            {/* Theme Toggle Button */}
            <View style={{ position: 'absolute', right: 0 }}>
              <TouchableOpacity 
                style={{
                  backgroundColor: theme.surface,
                  padding: 8,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: theme.border
                }}
                onPress={toggleTheme}
              >
                <View style={{ width: 16, height: 16, justifyContent: 'center', alignItems: 'center' }}>
                  {theme === darkTheme ? (
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: theme.accentGreen }} />
                  ) : (
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: theme.text }} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Protection Status */}
          <View style={{
            backgroundColor: theme.accentGreen,
            borderRadius: 20,
            padding: 30,
            alignItems: 'center',
            marginBottom: 20
          }}>
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 3,
              borderColor: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15
            }}>
              <ShieldIcon size={30} color="#fff" />
            </View>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
              PROTECTED
            </Text>
            <Text style={{ color: '#fff', fontSize: 16 }}>
              Apps are being blocked
            </Text>
          </View>

          {/* Stats Cards */}
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={{
              flex: 1,
              backgroundColor: theme.card,
              borderRadius: 15,
              padding: 20,
              marginRight: 10,
              alignItems: 'center',
              borderColor: theme.border,
              borderWidth: 1
            }}>
              <ClockIcon size={20} color={theme.accentGreen} />
              <Text style={{ color: theme.text, fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
                {appsBlocked}
              </Text>
              <Text style={{ color: theme.textSecondary, fontSize: 12 }}>Apps Blocked</Text>
            </View>
            
            <View style={{
              flex: 1,
              backgroundColor: theme.card,
              borderRadius: 15,
              padding: 20,
              marginLeft: 10,
              alignItems: 'center',
              borderColor: theme.border,
              borderWidth: 1
            }}>
              <ShieldIcon size={20} color={theme.accentGreen} />
              <Text style={{ color: theme.text, fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>
                Active
              </Text>
              <Text style={{ color: theme.textSecondary, fontSize: 12 }}>Protection Status</Text>
            </View>
          </View>

          {/* Timer */}
          <View style={{
            backgroundColor: theme.card,
            borderRadius: 20,
            padding: 30,
            alignItems: 'center',
            marginBottom: 20,
            borderColor: theme.border,
            borderWidth: 1
          }}>
            <View style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              borderWidth: 4,
              borderColor: theme.accentGreen,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20
            }}>
              <Text style={{ color: theme.accentGreen, fontSize: 32, fontWeight: 'bold' }}>
                {formatTime(timeLeft)}
              </Text>
            </View>
            
            {/* Time Adjustment */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <TouchableOpacity 
                style={{
                  backgroundColor: theme.surface,
                  padding: 8,
                  borderRadius: 15,
                  borderColor: theme.border,
                  borderWidth: 1
                }}
                onPress={() => updateTimer(Math.max(1, customMinutes - 5))}
              >
                <Text style={{ color: theme.text, fontSize: 16, fontWeight: 'bold' }}>-5</Text>
              </TouchableOpacity>
              
              <Text style={{ color: theme.text, fontSize: 16, marginHorizontal: 15 }}>
                {customMinutes} min
              </Text>
              
              <TouchableOpacity 
                style={{
                  backgroundColor: theme.surface,
                  padding: 8,
                  borderRadius: 15,
                  borderColor: theme.border,
                  borderWidth: 1
                }}
                onPress={() => updateTimer(Math.min(120, customMinutes + 5))}
              >
                <Text style={{ color: theme.text, fontSize: 16, fontWeight: 'bold' }}>+5</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', gap: 15 }}>
              <TouchableOpacity 
                style={{
                  backgroundColor: theme.accentGreen,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
                onPress={toggleTimer}
              >
                <View style={{ marginRight: 5 }}>
                  {isActive ? <PauseIcon size={16} color="#000" /> : <PlayIcon size={16} color="#000" />}
                </View>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>
                  {isActive ? 'Pause' : 'Start'}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={{
                  backgroundColor: theme.surface,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor: theme.border,
                  borderWidth: 1
                }}
                onPress={resetTimer}
              >
                <RefreshIcon size={16} color={theme.text} />
                <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600', marginLeft: 5 }}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Currently Blocking */}
          <View style={{
            backgroundColor: theme.card,
            borderRadius: 20,
            padding: 20,
            marginBottom: 20,
            borderColor: theme.border,
            borderWidth: 1
          }}>
            <Text style={{ color: theme.text, fontSize: 16, fontWeight: '600', marginBottom: 15 }}>
              Currently Blocking:
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {preset.blockedApps.map((app, index) => (
                <View key={index} style={{
                  backgroundColor: theme.danger,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 15
                }}>
                  <Text style={{ color: '#fff', fontSize: 12, fontWeight: '500' }}>
                    {app}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Emergency Exit */}
          <TouchableOpacity 
            style={{
              backgroundColor: theme.danger,
              paddingVertical: 15,
              borderRadius: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20
            }}
            onPress={() => navigation.navigate("FocusEndedScreen")}
          >
            <WarningIcon size={16} color="#fff" />
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginLeft: 8 }}>
              EMERGENCY EXIT
            </Text>
          </TouchableOpacity>
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}

function FocusEndedScreen({ navigation }) {
  const { theme } = useTheme();
  
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.statusBar} backgroundColor={theme.background} />
      <View style={[styles.gradientContainer, { backgroundColor: theme.background }]}>
        <ScrollView 
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 30,
            paddingVertical: 40
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <Text style={[styles.cardTitle, { color: theme.text }]}>Focus Session Complete!</Text>
            <Text style={[styles.cardText, { color: theme.textSecondary }]}>
              Great job! You've completed your focus session. All apps have been unlocked and you can now access your full device.
            </Text>
            
            <View style={[styles.card, { backgroundColor: theme.surface, marginVertical: 20, borderColor: theme.border }]}>
              <Text style={[styles.cardTitle, { fontSize: 18, color: theme.accent }]}>
                Session Statistics
              </Text>
              <Text style={[styles.cardText, { color: theme.accent }]}>
                • Duration: 25 minutes{'\n'}
                • Apps blocked: 15+{'\n'}
                • Focus level: Excellent
              </Text>
            </View>
            
            <TouchableOpacity 
              style={[styles.primaryButton, { backgroundColor: theme.accent }]}
              onPress={() => navigation.navigate("PresetSelectionScreen")}
            >
              <Text style={styles.primaryButtonText}>Start New Session</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.secondaryButton, { backgroundColor: theme.surface, borderColor: theme.border }]}
              onPress={() => navigation.navigate("SplashScreen")}
            >
              <Text style={[styles.secondaryButtonText, { color: theme.text }]}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}

// Stack Navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name="PresetSelectionScreen" component={PresetSelectionScreen} />
        <Stack.Screen name="FocusModeScreen" component={FocusModeScreen} />
        <Stack.Screen name="FocusEndedScreen" component={FocusEndedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
}