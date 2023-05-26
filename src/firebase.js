// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCOXSd4cc0NTqDGYoOl6q3um70AKopbaZs',
	authDomain: 'introducing-vue.firebaseapp.com',
	projectId: 'introducing-vue',
	storageBucket: 'introducing-vue.appspot.com',
	messagingSenderId: '221051145427',
	appId: '1:221051145427:web:0e2074d7e37270cace9826',
	measurementId: 'G-LD973RFJ7W'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
