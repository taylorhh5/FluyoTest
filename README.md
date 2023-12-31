# Fluyo Test

https://github.com/taylorhh5/FluyoTest/assets/52665999/6db2c56c-f9f3-464f-9039-d5a8f5dd14ce

## Overview

This is a mobile language learning app that helps users learn new languages by filling in missing words in sentences.

## Tech Stack

- Frontend: React Native
- Styling: React Native StyleSheet
- State Management: React Hooks (useState, useEffect)
- Data Management: Props and Local State

## Backend (Not Implemented)

Due to time constraints (2 hours), a backend using Firebase was not set up. If more time were available, a Firebase backend could have been used to store and retrieve data for the app. In this hypothetical setup, GET queries would have been used to fetch data from similar data structures as those used in the `LanguageData` folder.

The `LanguageData` folder contains data structures like:

```typescript
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
  },];
```

In a Firebase-based backend, similar data structures could have been stored in Firestore collections or Realtime Database nodes, and GET queries would have been used to retrieve this data for the app's language learning exercises.

## Getting Started

To run this app locally, follow these steps:

1. Clone the repository:

   ```bash
  git clone https://github.com/taylorhh5/FluyoTest.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FluyoTest
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open the app on your Android or iOS device using the respective development tools:

   For Android:

   ```bash
   # using npm
   npm run android

   # OR using Yarn
   yarn android
   ```

   For iOS:

   ```bash
   # using npm
   npm run ios

   # OR using Yarn
   yarn ios
   ```

