// Firebase App (the core Firebase SDK) is always required and must be listed first
import { firebaseConfig } from 'assets/firebase.config.js'
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/firestore'

// Initialize Firebase
export default firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
