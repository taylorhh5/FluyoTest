interface Sentence {
  englishSentence: string;
  germanSentence: string;
  wordOptions: string[];
  correctAnswer: string;
  translations: Record<string, string>;
}

export const sentences: Sentence[] = [
  {
    englishSentence: "The house is small",
    germanSentence: "Das Haus ist klein",
    wordOptions: ["groß", "klein", "schön", "Haus"],
    correctAnswer: "Haus",
    translations: {
      groß: 'big',
      klein: 'small',
      schön: 'beautiful',
      Haus: 'house',
      Das: 'The',
      ist: 'is',
    },
  },
  {
    englishSentence: "The sky is blue",
    germanSentence: "Der Himmel ist blau",
    wordOptions: ["rot", "blau", "grün", "gelb"],
    correctAnswer: "blau",
    translations: {
      rot: 'red',
      blau: 'blue',
      grün: 'green',
      gelb: 'yellow',
      Der: 'The',
      Himmel: 'sky',
      ist: 'is',
    },
  },
  {
    englishSentence: "She is beautiful",
    germanSentence: "Sie ist schön",
    wordOptions: ["alt", "jung", "klug", "schön"],
    correctAnswer: "schön",
    translations: {
      alt: 'old',
      jung: 'young',
      klug: 'smart',
      schön: 'beautiful',
      Sie: 'She',
      ist: 'is',
    },
  },
  {
    englishSentence: "The car is fast",
    germanSentence: "Das Auto ist schnell",
    wordOptions: ["langsam", "schnell", "groß", "klein"],
    correctAnswer: "schnell",
    translations: {
      langsam: 'slow',
      schnell: 'fast',
      groß: 'big',
      klein: 'small',
      Das: 'The',
      Auto: 'car',
      ist: 'is',
    },
  },
  {
    englishSentence: "I am happy",
    germanSentence: "Ich bin glücklich",
    wordOptions: ["traurig", "glücklich", "müde", "aufgeregt"],
    correctAnswer: "glücklich",
    translations: {
      traurig: 'sad',
      glücklich: 'happy',
      müde: 'tired',
      aufgeregt: 'excited',
      Ich: 'I',
      bin: 'am',
    },
  }
];
