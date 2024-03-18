// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnUvq9SnPk95LJTKTesmPq4m5LI0vgjzc",
  authDomain: "react-mobile-att3.firebaseapp.com",
  projectId: "react-mobile-att3",
  storageBucket: "react-mobile-att3.appspot.com",
  messagingSenderId: "856667225101",
  appId: "1:856667225101:web:facd409674ecf20f90e944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export default app;