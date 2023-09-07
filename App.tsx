import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import { AppS } from './global/globalStyle';
import theme from './global/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppS>
        <StatusBar style="auto" />
        <Home />
      </AppS>  
    </ThemeProvider>
  );
}
