import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView>
 <Text>Fill in the missing word</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
