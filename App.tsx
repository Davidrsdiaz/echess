import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toaster } from 'sonner-native';
import { Suspense } from 'react';
import { AppNavigator } from './navigation/AppNavigator';
import { AppProvider } from './context/AppContext';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import LoadingScreen from './components/common/LoadingScreen';
import { NetworkStatus } from './components/common/NetworkStatus';
import { theme } from './theme/theme';

const App: React.FC = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ErrorBoundary>
        <NavigationContainer>
          <AppProvider>
            <View style={styles.appContainer}>
              <NetworkStatus isOnline={true} />
              <Suspense fallback={<LoadingScreen fullScreen />}>
                <AppNavigator />
              </Suspense>
              <Toaster />
            </View>
          </AppProvider>
        </NavigationContainer>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  appContainer: {
    flex: 1,
  },
});
