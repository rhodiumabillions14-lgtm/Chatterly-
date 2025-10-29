import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5K-v20Q_d4t1aetdZJZ0VJZ0Z0Z0Z0Z0",
  authDomain: "chatterly-1d5d5.firebaseapp.com",
  projectId: "chatterly-1d5d5",
  storageBucket: "chatterly-1d5d5.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
