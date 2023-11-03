import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5UteTYMTgwl2G2RfHlGucvIZenh8x9t4",
  authDomain: "login-tecnologiaweb.firebaseapp.com",
  projectId: "login-tecnologiaweb",
  storageBucket: "login-tecnologiaweb.appspot.com",
  messagingSenderId: "951984323779",
  appId: "1:951984323779:web:eaa7e586ca7b693faa3676"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
