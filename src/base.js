import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAH5Bn7m3ioArb-_E5YTzT6PrhjBNA1zxY",
    authDomain: "clone-7bda1.firebaseapp.com",
    databaseURL: "https://clone-7bda1.firebaseio.com",
    projectId: "clone-7bda1",
    storageBucket: "clone-7bda1.appspot.com",
    messagingSenderId: "327510312471",
    appId: "1:327510312471:web:767cf1c639637a4ccb3e52",
    measurementId: "G-KT5RSV0DYY"
  };

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())

  export { base }

