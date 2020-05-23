import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCr_GAElc35N4DnkCXqEyjzOMXrhQuNMVQ",
  authDomain: "double-subject-268316.firebaseapp.com",
  databaseURL: "https://double-subject-268316.firebaseio.com",
  projectId: "double-subject-268316",
  storageBucket: "double-subject-268316.appspot.com",
  messagingSenderId: "936298680302",
  appId: "1:936298680302:web:1312d1e0927e28ab5148ff",
  measurementId: "G-HJLDYEXTYP"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;