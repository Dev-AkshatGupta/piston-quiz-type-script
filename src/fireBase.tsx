import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
type FireBaseConfig={
    apiKey:string;
    authDomain:string;
    projectId:string;
    storageBucket:string;
    messagingSenderId:string;
    appId:string;
    measurementId:string;
}
const firebaseConfig:FireBaseConfig = {
  apiKey: "AIzaSyCtTP0ETXHJOo15_kAIAOjShm_cxo7_FoE",
  authDomain: "piston-quiz.firebaseapp.com",
  projectId: "piston-quiz",
  storageBucket: "piston-quiz.appspot.com",
  messagingSenderId: "58190409157",
  appId: "1:58190409157:web:4144751306c1297a98afac",
  measurementId: "G-NEFKXBHXXC"
}; 


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export default app;
