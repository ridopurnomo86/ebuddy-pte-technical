import {
    addDoc,
    collection,
    getDocs,
    limit,
    query,
    where,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const checkUserEmail = async ({
    email,
}: {
    email: string;
}): Promise<boolean> => {
    const queryEmailSnapshot = await getDocs(
        query(collection(db, "users"), where("email", "==", email), limit(1)),
    );

    return queryEmailSnapshot.empty;
};

export const getUsers = async (): Promise<any> => {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const users = usersSnapshot.docs.map(doc => doc.data());

    return users;
};

export const setUsers = async ({
    body,
}: {
    body: {
        [key: string]: string;
    };
}): Promise<any> => {
    const usersCol = collection(db, "users");
    const userDocRef = await addDoc(usersCol, body);

    return userDocRef;
};
