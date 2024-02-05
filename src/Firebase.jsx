import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAAiZkyp0FryopIxv39Bo_zryXcNz6Kddk",
    authDomain: "alpaago-assignment-890cf.firebaseapp.com",
    projectId: "alpaago-assignment-890cf",
    storageBucket: "alpaago-assignment-890cf.appspot.com",
    messagingSenderId: "148147243105",
    appId: "1:148147243105:web:c2f4b31835170f8b960220"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const firestore = firebase.firestore()

export {auth, firestore}