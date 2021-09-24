import {initializeApp} from "firebase/app";
import {getStorage ,ref , uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPcL3DmxrQxGsVvTeABfdD8ExghVuKXi4",
  authDomain: "intern-b5c3a.firebaseapp.com",
  projectId: "intern-b5c3a",
  storageBucket: "intern-b5c3a.appspot.com",
  messagingSenderId: "100729861313",
  appId: "1:100729861313:web:f561620ba50e6c60895040"
};


const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);

export {projectStorage , ref ,uploadBytesResumable, getDownloadURL};