import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEA_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASEA_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASEA_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASEA_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASEA_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASEA_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASEA_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export default app;
