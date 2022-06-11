import {initializeApp} from "firebase/app";
import {doc, DocumentData, DocumentSnapshot, getDoc, getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA9_fpY2mp3Ig4hx_gxN9bbNUHKLUT5xaA",
    authDomain: "dlink-55cc7.firebaseapp.com",
    projectId: "dlink-55cc7",
    storageBucket: "dlink-55cc7.appspot.com",
    messagingSenderId: "843231138831",
    appId: "1:843231138831:web:8be0bd17d71a60d3693f7a",
    measurementId: "G-R33WF8F8B9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface Info {
    name: string;
}

export const getWallet = async ({wallet}): Promise<Info> => {
    const info: DocumentSnapshot<DocumentData> = await getDoc(doc(db, 'wallets', wallet));
    return {name: info.data().name}
}
