import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "oasis-c7315.firebaseapp.com",
  projectId: "oasis-c7315",
  storageBucket: "oasis-c7315.appspot.com",
  messagingSenderId: "250178334400",
  appId: "1:250178334400:web:8ecb1f125626c63dbc4725",
  measurementId: "G-2CV07FM38X",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

auth.languageCode = "en-GB"
const db = getFirestore(app)

export { auth, db }
