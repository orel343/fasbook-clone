import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1tKcYeTs-vVoyVBU_RJ5O-KMIvsijdhM",
  authDomain: "project-apppppppp.firebaseapp.com",
  projectId: "project-apppppppp",
  storageBucket: "project-apppppppp.appspot.com",
  messagingSenderId: "163403266650",
  appId: "1:163403266650:web:ee78dc5a2890b25bd37663",
  measurementId: "G-B952C63LZ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);
