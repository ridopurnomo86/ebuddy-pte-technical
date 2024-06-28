import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const getUsers = async () => {
    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const users = usersSnapshot.docs.map(doc => doc.data());

    return users;
};

export default getUsers;
