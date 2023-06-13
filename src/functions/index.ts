import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

import { db } from "../constants";

export const addUsersPoints = async (user: string, obj: { [key: number]: number }, func: () => void | undefined) => {
    try {
        await setDoc(doc(db, "users", user), obj);
        func()
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export const getDataDB = async (func: (doc: QueryDocumentSnapshot<DocumentData>) => void) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        func(doc)
    });
}


export const getData = async (childFunc: (arr: { name: string; point: { [key: number]: number } }[]) => void) => {
    const arr: { name: string; point: { [key: number]: number } }[] = [];
    const func = (doc: QueryDocumentSnapshot<DocumentData>) => {
        if (doc.id !== "admin") {
            arr.push({ name: doc.id, point: doc.data() });
        }
    };

    await getDataDB(func);
    // console.log()
    childFunc(arr)
}