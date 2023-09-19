import React, { useState, } from 'react';
import { View, StyleSheet } from 'react-native';
import LanguageLearningScreen from './screens/LanguageLearningScreen';
import { sentences } from './LanguageData/German';
import { BACKGROUND_COLOR } from './constants/colors';
import AnswerModal from './modals/AnswerModal';

type CurrentSentenceIndexState = number;
type IsAnswerModalVisibleState = boolean;
type IsAnswerCorrectState = boolean;

function App() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<CurrentSentenceIndexState>(0);
  const [isAnswerModalVisible, setIsAnswerModalVisible] = useState<IsAnswerModalVisibleState>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<IsAnswerCorrectState>(false);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === sentences[currentSentenceIndex].correctAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setIsAnswerModalVisible(true);
  };

  const handleContinue = () => {
    setIsAnswerModalVisible(false);
    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  const handleSkip = () => {
    setIsAnswerModalVisible(false);
    setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  return (
    <View style={styles.container}>
      <LanguageLearningScreen
        englishSentence={sentences[currentSentenceIndex]?.englishSentence}
        germanSentence={sentences[currentSentenceIndex]?.germanSentence}
        wordOptions={sentences[currentSentenceIndex]?.wordOptions}
        translations={sentences[currentSentenceIndex]?.translations}
        onAnswer={handleAnswer}
        onSkip={handleSkip}
        correctAnswer={sentences[currentSentenceIndex].correctAnswer}
        isAnswerCorrect={isAnswerCorrect}
        isAnswerModalVisible={isAnswerModalVisible}
      />

      <AnswerModal
        visible={isAnswerModalVisible}
        isCorrect={isAnswerCorrect}
        onClose={() => setIsAnswerModalVisible(false)}
        onContinue={handleContinue}
        correctAnswer={sentences[currentSentenceIndex].correctAnswer}
      />
    </View>
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
