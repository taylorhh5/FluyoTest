import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { WHITE_COLOR, SELECTED_WORD_COLOR, BACKGROUND_COLOR } from '../constants/colors';

interface LanguageLearningProps {
  englishSentence: string;
  germanSentence: string;
  wordOptions: string[];
  translations: { [key: string]: string };
  correctAnswer: string;
}

const LanguageLearningScreen: React.FC<LanguageLearningProps> = ({
  englishSentence,
  germanSentence,
  wordOptions,
  translations,
  correctAnswer
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [displayedTranslations, setDisplayedTranslations] = useState<{ [key: string]: boolean }>({});


  const handleWordSelect = (word: string) => {
    setSelectedWord(word);
  };

  const toggleTranslation = (word: string) => {
    setDisplayedTranslations((prevTranslations) => ({
      ...prevTranslations,
      [word]: !prevTranslations[word],
    }));
  };

  const renderWordOption = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        styles.wordButton,
        selectedWord === item && styles.selectedWordButton,
      ]}
      onPress={() => handleWordSelect(item)}
    >
      <Text style={[
        styles.selectedWordText,
        selectedWord === item && styles.selectedWordTextBlank,
      ]}>{item}</Text>
    </TouchableOpacity>
  );

  const renderGermanSentence = () => {
    const germanWords = germanSentence.split(' ');
    const renderedWords = germanWords.map((word, index) => {
      if (word === correctAnswer) {
        return (
          <Text key={index}>
            {selectedWord ? (
              <View style={[
                styles.selectedWordContainer,
              ]}>
                <Text style={styles.selectedWordText}>{selectedWord}</Text>
              </View>
            ) : (
              <View style={styles.selectedWordUnderlineContainer}>
                <Text style={styles.selectedWordUnderline}>_____</Text>
              </View>
            )}
          </Text>
        );
      }

      return (
        <TouchableOpacity key={index} onPress={() => toggleTranslation(word)}>
          {displayedTranslations[word] ? (
            <Text style={styles.translationText}>{translations[word]}</Text>
          ) : (
            null)}
          <Text style={styles.germanWord}>{word}</Text>
        </TouchableOpacity>
      );
    });

    return <Text style={styles.sentence}>{renderedWords}</Text>;
  };

  const renderEnglishSentence = () => {
    const englishWords = englishSentence.split(' ');
    const renderedWords = englishWords.map((word, index) => {
      if (word === translations[correctAnswer]) {
        return (
          <Text key={index} style={styles.underlinedEnglishWord}> {word} </Text>
        );
      } else {
        return (
          <Text key={index} style={styles.selectedWordUnderline}> {word} </Text>
        );
      }
    });

    return <Text style={styles.sentence}>{renderedWords}</Text>;
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill in the Word</Text>
      <View style={styles.sentenceContainer}>
        {renderEnglishSentence()}</View>
      <View style={styles.sentenceContainer}>{renderGermanSentence()}</View>
      <FlatList
        data={wordOptions}
        renderItem={renderWordOption}
        keyExtractor={(item) => item}
        numColumns={2}
        contentContainerStyle={styles.wordOptionsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    fontSize: 18,
    marginBottom: 18,
    color: WHITE_COLOR,
  },
  sentence: {
    fontSize: 22,
    marginBottom: 18,
    textAlign: 'center',
    color: WHITE_COLOR,
  },
  sentenceContainer: {
    marginVertical: 8,
  },
  wordOptionsContainer: {
    justifyContent: 'center',
  },
  wordButton: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: 6,
  },
  selectedWordButton: {
    backgroundColor: SELECTED_WORD_COLOR,
  },
  selectedWordTextBlank: {
    color: SELECTED_WORD_COLOR,
  },
  selectedWordContainer: {
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    padding: 8,
  },
  selectedWordUnderlineContainer: {
    padding: 8,
  },
  selectedWordText: {
    fontSize: 18,
    color: BACKGROUND_COLOR,
    textAlign: 'center',
    fontWeight: '600',
  },
  selectedWordUnderline: {
    fontSize: 18,
    color: WHITE_COLOR,
    textAlign: 'center',
  },
  underlinedEnglishWord: {
    textDecorationLine: 'underline',
    fontWeight: '600'
  },
  germanWord: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 16,
    color: WHITE_COLOR,
  },
  translationText: {
    fontSize: 14,
    textAlign: 'center',
    color: WHITE_COLOR,
  },
});


export default LanguageLearningScreen;
