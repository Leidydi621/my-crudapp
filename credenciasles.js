// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSq6Wv5deuaXnu2JItvV1ky1SjWt3IV18",
  authDomain: "crud-react-native-8a21e.firebaseapp.com",
  projectId: "crud-react-native-8a21e",
  storageBucket: "crud-react-native-8a21e.appspot.com",
  messagingSenderId: "194506377536",
  appId: "1:194506377536:web:ece5d48c50168fbafa52a5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase