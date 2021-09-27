import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
	apiKey: 'AIzaSyA_sF3oYHah7csmN_qwprzLrrUmZMPrLLs',
	authDomain: 'ji-drive.firebaseapp.com',
	projectId: 'ji-drive',
	storageBucket: 'ji-drive.appspot.com',
	messagingSenderId: '479597109808',
	appId: '1:479597109808:web:bac454407213277d0143f5',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const proider = new firebase.auth.GoogleAuthProvider()

export { db, storage, auth, proider }
