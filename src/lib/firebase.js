import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, collection, getFirestore, addDoc } from "firebase/firestore";
import { ref, getStorage, uploadBytes, getDownloadURL, getBlob, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDnj47Anyqzctl1Xok9X-a1pvawUDLs8UM",
  authDomain: "tableconfig-ad0d6.firebaseapp.com",
  projectId: "tableconfig-ad0d6",
  storageBucket: "tableconfig-ad0d6.appspot.com",
  messagingSenderId: "729276285742",
  appId: "1:729276285742:web:5e45f5356487af2819b0bf",
  measurementId: "G-TFGTKZQ982",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage(app);

export const addData = async (blob) => {
  try {
    let id = uuidv4();
    id += ".glb";
    const storageRef = ref(storage, id);
    await uploadBytes(storageRef, blob);
    return id;
  } catch (err) {
    console.log(err);
  }
};

export const getModel = async (id) => {
  try {
    const model = await getDownloadURL(ref(storage, id));
    return model;
  } catch (err) {
    console.log(err);
  }
};

export const deleteModel = async (id) => {
  try {
    await deleteObject(ref(storage, id));
  } catch (err) {
    console.log(err.message);
  }
};
