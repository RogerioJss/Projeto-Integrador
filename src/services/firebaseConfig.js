import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDOxKjfr2yZGQOxFIU7wS2r_41zGE9j4YM",
    authDomain: "robocoffe-6df23.firebaseapp.com",
    projectId: "robocoffe-6df23",
    storageBucket: "robocoffe-6df23.appspot.com",
    messagingSenderId: "286973181169",
    appId: "1:286973181169:web:f87750543a565aa5bbfd50",
    measurementId: "G-NSWB6VSHDL",
  };

  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)
  export const firebaseStorage = getStorage(app)