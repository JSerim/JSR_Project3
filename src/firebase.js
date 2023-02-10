// 필요한 기능 가져오기
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD2Kj6PfpS-FbaNkaL7Cr5BqlY5wEzdXE0",
    authDomain: "react-todo-9e4de.firebaseapp.com",
    projectId: "react-todo-9e4de",
    storageBucket: "react-todo-9e4de.appspot.com",
    messagingSenderId: "1076584120360",
    appId: "1:1076584120360:web:f378e52aea69cd8a4b751d"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);