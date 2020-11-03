import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC0AvH5WdJi4j0YraqMLpZ0rHYMWH3kcZE",
    authDomain: "react-practice-267ec.firebaseapp.com",
    databaseURL: "https://react-practice-267ec.firebaseio.com",
    projectId: "react-practice-267ec",
    storageBucket: "react-practice-267ec.appspot.com",
    messagingSenderId: "790267218062",
    appId: "1:790267218062:web:fe048804ea4c4a651d21df"
};
  // Initialize Firebase
  const Fire=firebase.initializeApp(firebaseConfig);
export default Fire