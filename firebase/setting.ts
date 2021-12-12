// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

  };


// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase)
export const getArticles = async() =>{
    const articleCol = collection(db,'articles')
    const articleDocs =await getDocs(articleCol)
    const articleList = articleDocs.docs.map(doc=>doc.data())
    console.log(articleList);
    return articleList
}

// export const firebaseAnalytics = getAnalytics(firebase);

