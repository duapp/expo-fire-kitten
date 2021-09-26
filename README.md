# Expo + Firebase Auth + UI-kitten Starter Kit

This is a boilerplate for starting an Expo project with Login/Register

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
`firebase` | Auth, DB and Tracking
`Yup` and `Formik` | Form and data validator
