import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";
const app = () => {
    initializeApp(firebaseConfig);
}

export default app;