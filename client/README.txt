To build android or iphone apps follow this guide to install all the dependencies required
We will not be using expo
https://facebook.github.io/react-native/docs/getting-started

npx react-native run-android

npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

npm start -- --reset-cachenpm start -- --reset-cache