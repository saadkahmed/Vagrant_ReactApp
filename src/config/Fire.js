  import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBpsoM_8Jj_jQcnYu1NtbwQMO5hRFBEHCk",
    authDomain: "transientapp-6156b.firebaseapp.com",
    databaseURL: "https://transientapp-6156b.firebaseio.com",
    projectId: "transientapp-6156b",
    storageBucket: "transientapp-6156b.appspot.com",
    messagingSenderId: "930154575965"
  };
  const fire = firebase.initializeApp(config);

export default fire;