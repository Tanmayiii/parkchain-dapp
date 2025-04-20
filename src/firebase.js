
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDL05SrQL_hZL6RNLHSQh9l2VEHmzkMse4",
    authDomain: "parkchain-99b98.firebaseapp.com",
    databaseURL: "https://parkchain-99b98-default-rtdb.firebaseio.com",
    projectId: "parkchain-99b98",
    storageBucket: "parkchain-99b98.firebasestorage.app",
    messagingSenderId: "925099923590",
    appId: "1:925099923590:web:beab20a4cc0b201e1ad907",
    measurementId: "G-15JSKN3WMY"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue, remove };
