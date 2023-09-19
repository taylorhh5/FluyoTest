import React, { useState, } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import LanguageLearningScreen from './screens/LanguageLearningScreen';
import { sentences } from './LanguageData/German';
import { BACKGROUND_COLOR } from './constants/colors';

type CurrentSentenceIndexState = number;


function App(): JSX.Element {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<CurrentSentenceIndexState>(0);


  return (
    <SafeAreaView style={styles.container}>
      <LanguageLearningScreen
        englishSentence={sentences[currentSentenceIndex]?.englishSentence}
        germanSentence={sentences[currentSentenceIndex]?.germanSentence}
        wordOptions={sentences[currentSentenceIndex]?.wordOptions}
        translations={sentences[currentSentenceIndex]?.translations}
        correctAnswer={sentences[currentSentenceIndex].correctAnswer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    paddingTop: 20,
  },
});

export default App;
