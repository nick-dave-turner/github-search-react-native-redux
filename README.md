This project was bootstrapped with [Expo](https://expo.io/).

Expo is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see Caveats).

Assuming that you have Node 8+ installed, you can use npm to install the Expo CLI command line utility:

`npm install -g expo-cli`

## Running your React Native application

#### `npm start` (you can also use: `expo start`)

This will start a development server for you.

Install the Expo client app on your iOS or Android phone and connect to the same wireless network as your computer. 
On Android, use the Expo app to scan the QR code from your terminal to open your project. 
On iOS, follow on-screen instructions to get a link.

### Running your app on a simulator or virtual device
Expo CLI makes it really easy to run your React Native app on a physical device without setting up a development environment. If you want to run your app on the iOS Simulator or an Android Virtual Device, please refer to the instructions for building projects with native code to learn how to install Xcode or set up your Android development environment.

Once you've set these up, you can launch your app on an Android Virtual Device by running npm run android, or on the iOS Simulator by running npm run ios (macOS only).

### Caveats
Because you don't build any native code when using Expo to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.

If you know that you'll eventually need to include your own native code, Expo is still a good way to get started. In that case you'll just need to "eject" eventually to create your own native builds. If you do eject, the "Building Projects with Native Code" instructions will be required to continue working on your project.

Expo CLI configures your project to use the most recent React Native version that is supported by the Expo client app. The Expo client app usually gains support for a given React Native version about a week after the React Native version is released as stable. You can check this document to find out what versions are supported.

If you're integrating React Native into an existing project, you'll want to skip Expo CLI and go directly to setting up the native build environment. Select "Building Projects with Native Code" above for instructions on configuring a native build environment for React Native.

## Other Available Scripts

In the project directory, you can run:

### `npm run android`

Builds and runs the Andriod version of the app.

### `npm run ios`

Builds and runs the IOS version of the app.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run format`

Runs the prettier code style tool over the source code.

### `npm run flow`

Starts the Flow server and checks for Flow errors.

Builds and runs the IOS version of the app.
