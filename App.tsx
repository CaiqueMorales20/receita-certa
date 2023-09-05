import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextS, ViewS } from './App.style';

export default function App() {
  return (
    <ViewS>
      <StatusBar style="auto" />
      <TextS>App</TextS>
    </ViewS>
  );
}
