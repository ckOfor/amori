# Amori

## Overview
Amori is a React Native application built using Expo. It leverages a variety of libraries for state management, navigation, internationalization, and data fetching. This document provides insights into the libraries used, why they were chosen, and how to set up and run the project.

## Libraries Used and Their Purpose

### Core Libraries
- **react** (18.3.1) & **react-native** (0.76.6):
    - Provides the fundamental building blocks for the application.

- **expo** (~52.0.28):
    - Used to simplify the development process by handling native dependencies, bundling assets, and offering an easy development workflow.

- **expo-status-bar** (~2.0.1):
    - Allows for easy customization of the status bar appearance in the app.

### State Management
- **zustand** (^5.0.3):
    - A lightweight state management library, chosen for its simple API and efficient reactivity.

### Navigation
- **@react-navigation/native** (^7.0.14) & **@react-navigation/native-stack** (^7.2.0):
    - Provides navigation functionality, allowing users to move between different screens in the application.

- **react-native-screens** (^4.6.0):
    - Optimizes navigation performance by rendering screens efficiently.

- **react-native-safe-area-context** (^5.1.0):
    - Ensures that UI components are correctly positioned within safe areas on different devices.

### Data Management & API Integration
- **@tanstack/react-query** (^5.66.0):
    - A powerful data-fetching library that enables efficient caching, background updates, and optimistic UI updates.

- **@react-native-async-storage/async-storage** (^2.1.0):
    - Used for persistent storage of data on the device, such as user preferences and authentication tokens.

### Internationalization
- **i18next** (^24.2.2) & **react-i18next** (^15.4.0):
    - Enables multi-language support, allowing the app to be translated into different languages dynamically.

### Environment Variables
- **react-native-dotenv** (^3.4.11):
    - Enables the use of environment variables, making it easier to manage API keys and other sensitive information.

## Setup & Installation

### Prerequisites
Ensure that you have the following installed:
- Node.js (latest LTS version recommended)
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development) or Xcode (for iOS development)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/amori.git
   cd amori
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   expo start --dev-client
   ```
4. Run on a specific platform:
    - Android: `npm run android`
    - iOS: `npm run ios`
    - Web: `npm run web`

## Challenges Faced & Solutions

### 1. Missing API Data
**Problem:**
During development, the API responses did not contain all the necessary data required for rendering certain components on the screen.

**Solution:**
- Implemented fallback values and conditional rendering to handle missing data gracefully.
- Used `@tanstack/react-query` to cache data and retry failed requests, ensuring a better user experience.
- Collaborated with the backend team to enhance API responses with the required data.

## Screenshots

Here are some screenshots demonstrating the app's functionality:

1. **Home Screen:**
   ![Home Screen](./path-to-screenshot1.jpeg)

2. **Profile Screen:**
   ![Profile Screen](./path-to-screenshot2.jpeg)

3. **Settings Screen:**
   ![Settings Screen](./path-to-screenshot3.jpeg)

(Screenshots are placeholders; replace `./path-to-screenshotX.jpeg` with the actual paths.)

## License
This project is licensed under the **0BSD** license.

