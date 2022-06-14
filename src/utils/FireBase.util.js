import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import FireBaseConnection from "../core/FireBaseConnection";

const db = new FireBaseConnection().getDB();

const incrementTraffic = async (id) => {
  try {
    const snap = await getDoc(doc(db, "Tours", id));
    const traffic = snap.data().traffic;
    updateDoc(snap.ref, {traffic: traffic+1})
  } catch (e) {
    console.log(e)
  }
};

export {incrementTraffic};
