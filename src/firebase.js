import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqwso1s2QAjvuoeS-PCQZNPTYgGTP_JXg",
    authDomain: "twitter-clone-61aee.firebaseapp.com",
    databaseURL: "https://twitter-clone-61aee.firebaseio.com",
    projectId: "twitter-clone-61aee",
    storageBucket: "twitter-clone-61aee.appspot.com",
    messagingSenderId: "216659538773",
    appId: "1:216659538773:web:3b1961f02ebed90fdf35dc",
    measurementId: "G-31WDXNTXR6"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db