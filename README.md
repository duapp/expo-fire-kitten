# Expo + Firebase Auth + UI-kitten Starter Kit

This is a boilerplate for starting an Expo project with Login/Register

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

### Testing

Full tests with coverage:

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
