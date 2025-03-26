import { db } from "../lib/firebaseConfig";
import { collection } from "firebase/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function getAllMessages() {
    const [snapshot, loading, error] = useCollectionData(collection(db, 'messages'));
    return {snapshot, loading, error};
}