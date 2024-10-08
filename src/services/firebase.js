// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDe3baKfuk-ou3L7i50DVZt6VrQ8fD1lg",
  authDomain: "auth-7f056.firebaseapp.com",
  projectId: "auth-7f056",
  storageBucket: "auth-7f056.appspot.com",
  messagingSenderId: "349025739013",
  appId: "1:349025739013:web:2bc4b8d09d6b083a77176c",
  measurementId: "G-QGVCBNC8D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//IOS: 349025739013-up9u83rajuuo4dp134h0q67hsholo390.apps.googleusercontent.com
//ANDROID: 349025739013-73dpcn69vmr44vj364hk4kiqjrp1l467.apps.googleusercontent.com