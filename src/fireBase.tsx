import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "@firebase/firestore";
type FireBaseConfig = {
  apiKey: string|undefined;
  authDomain: string|undefined;
  projectId: string|undefined;
  storageBucket: string|undefined;
  messagingSenderId: string|undefined;
  appId: string|undefined;
  measurementId: string|undefined;
};
const firebaseConfig: FireBaseConfig = {
  apiKey: "AIzaSyCtTP0ETXHJOo15_kAIAOjShm_cxo7_FoE",
  authDomain: "piston-quiz.firebaseapp.com",
  projectId: "piston-quiz",
  storageBucket: "piston-quiz.appspot.com",
  messagingSenderId: "58190409157",
  appId: "1:58190409157:web:4144751306c1297a98afac",
  measurementId: "G-NEFKXBHXXC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const createUserDocument = async (user: any, details: any) => {
  if (!user) return;

  if (doc(db, "users", user.uid)) {
    try {
      await setDoc(doc(db, "users", user.uid), details);
    } catch (error) {
      console.log({ error });
    }
  }
};

export const auth = getAuth(app);
export default app;
