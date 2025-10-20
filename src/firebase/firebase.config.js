// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc1NsVPRio0h0cH6el454q_jj9gPQql2M",
  authDomain: "auth-integration-ffc00.firebaseapp.com",
  projectId: "auth-integration-ffc00",
  storageBucket: "auth-integration-ffc00.firebasestorage.app",
  messagingSenderId: "582906130707",
  appId: "1:582906130707:web:8d478fb9dffc58f7206ae6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
