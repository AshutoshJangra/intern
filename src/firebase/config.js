import {initializeApp} from "firebase/app";
import {getStorage ,ref , uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
};


const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);

export {projectStorage , ref ,uploadBytesResumable, getDownloadURL};