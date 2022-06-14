const {initializeApp} = require("firebase/app");
const {getFirestore, setDoc, doc, getDocs, collection, updateDoc} = require("firebase/firestore/lite");
const config = require("./src/core/dbService.json");
const db = getFirestore(initializeApp(config));
const data1 = require("./src/data/data1.json");
const data2 = require("./src/data/data2.json");
const data3 = require("./src/data/data3.json");
const data4 = require("./src/data/data4.json");
const sources = require("./src/data/sources.json");
// const { getRandomIntInclusive } = require("./src/utils/Number.util");
// sources.forEach((ele) => {
//   setDoc(doc(db, "Sources", ele.id), {url: ele.url})
// 	// await lite.addDoc(lite.collection(db, "Tours"), ele);
// });
const update = async () => {
  const snapShots = await getDocs(collection(db, "Tours"));
  snapShots.docs.forEach((doc) => updateDoc(doc.ref, { traffic: 0 }));
}

update()