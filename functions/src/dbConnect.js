import { initializeApp, cert } from "firebase-admin/app"; //cert take te creds in only one object
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "./creds.js"

initializeApp({
    credential: cert(creds),
});

export const db = getFirestore();

