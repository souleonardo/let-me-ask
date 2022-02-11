import firebase from 'firebase/app'
import { initializeApp } from "firebase/app"

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD5wtXgUJeF91paYj0pMBXWecNuD0F3i9A",
  authDomain: "let-me-ask-b8622.firebaseapp.com",
  databaseURL: "https://let-me-ask-b8622-default-rtdb.firebaseio.com",
  projectId: "let-me-ask-b8622",
  storageBucket: "let-me-ask-b8622.appspot.com",
  messagingSenderId: "996929989125",
  appId: "1:996929989125:web:383824f64fde7bb5dbca6c"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
