import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCasAZgIj7pDI8bgbJYqSpfi1GaZ2YCeHQ",
    authDomain: "bettermart-c922e.firebaseapp.com",
    projectId: "bettermart-c922e",
    storageBucket: "bettermart-c922e.appspot.com",
    messagingSenderId: "410957980654",
    appId: "1:410957980654:web:ac871168155e6e5eba64ff",
    measurementId: "G-J6VL2143XS"
  };

  const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}