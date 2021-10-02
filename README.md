# Expo + Firebase Auth + UI Kitten Starter Kit

This is a boilerplate for starting an Expo project with Login/Register flows ready

## Features

- [Expo](https://expo.dev) with JavaScript
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) as UI library
- [Firebase](https://firebase.google.com) integration (No Analytics yet)
- [React Navigation](https://reactnavigation.org) stack and bottom tab examples
- Localization (i18n) ready
- `.env` Environment override
- Easy form development by [Formik](https://formik.org) and [Yup](https://github.com/jquense/yup)
- Linter and formatter by [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) and [Prettier](https://prettier.io)
- Testing support with `jest-expo` and [React Native Testing Library](https://github.com/callstack/react-native-testing-library)
- GitHub CI workflow

## Screenshots

![Screenshots](https://user-images.githubusercontent.com/1279387/134822851-3aeeb7a0-4e34-4775-b285-605209333df2.png)

## Usage

Run the following command to generate a new Expo repo using this template:

```bash
expo init -t expo-fire-kitten
```

Feel free to update or remove top entires in your `package.json` as well :)

## Requirement

### Firebase Setup

Set up a Firebase project in [Firebase Console](http://console.firebase.google.com/) and put the configurations in the root `.env` file like this:

```
FIREBASE_APP_ID="app-id"
FIREBASE_API_KEY="api-key"
FIREBASE_AUTH_DOMAIN="project-id.firebaseapp.com"
FIREBASE_DATABASE_URL="https://project-id.firebaseio.com"
FIREBASE_PROJECT_ID="project-id"
FIREBASE_STORAGE_BUCKET="project-id.appspot.com"
FIREBASE_MESSAGING_SENDER_ID="sender-id"
```

Add Email/Password Sign-in provider in Firebase Authentication.

## Development

### Getting Started

We are using [Yarn](https://yarnpkg.com) as our package manager.

Starting development in web:

```bash
yarn web
```

Starting development in iOS Simulator (xcode is required)

```bash
yarn ios
```

### Useful Helpers

Easily use an Eva icon in your component:

```jsx
import { EvaIcon } from '../utils';
<Button accessoryLeft={EvaIcon('person-outline')}>...
```

Use translations (i18n):

```jsx
import { t } from '../utils';
<Text>{t('login.title')}</Text>
```

Read object under `path` of Firebase Realtime Database:

```jsx
import { read } from '../utils';
read(path).then(obj => console.log(obj));
```

### Testing

Full tests with coverage (threshold 50%):

```bash
yarn test
```

Active development of tests, watch files for changes

```bash
yarn test:dev
```

When a screen/component is updated, the test snapshots will throw an error, this updates them:

```bash
yarn updateSnapshots
```

### Dependencies

Package | Description
-|-
`@ui-kitten` and `@eva-design` | UI Library
`i18n-js` and `expo-localization` | Localization support
`react-native-dotenv` | For environment variables override
`firebase` | Authentication
`Yup` and `Formik` | Form and data validator
`eslint`, `prettier`, `jest` | EP
