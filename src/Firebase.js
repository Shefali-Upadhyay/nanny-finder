import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBeRzHnhyjdoLmeJ9IxOKqhRYP1KcZnIqQ",
  authDomain: "nanny-finder-reactjs.firebaseapp.com",
  databaseURL: "https://nanny-finder-reactjs.firebaseio.com",
  projectId: "nanny-finder-reactjs",
  storageBucket: "",
  messagingSenderId: "308289551850",
  appId: "1:308289551850:web:d1499b6f33a7f56f548693",
  measurementId: "G-SQ9Y5N6YSS"
};
  

Firebase.initializeApp(config);

export default Firebase;