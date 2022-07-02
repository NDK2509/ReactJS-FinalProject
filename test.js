const {initializeApp} = require("firebase/app");
const {getFirestore, setDoc, doc, getDocs, collection, updateDoc, addDoc} = require("firebase/firestore/lite");
const { watch } = require("fs");
const config = require("./src/core/dbService.json");
const db = getFirestore(initializeApp(config));
const data1 = require("./src/data/data1.json");
const data2 = require("./src/data/data2.json");
const data3 = require("./src/data/data3.json");
const data4 = require("./src/data/data4.json");
// const sources = require("./src/data/sources.json");
// const { getRandomIntInclusive } = require("./src/utils/Number.util");
// sources.forEach((ele) => {
//   setDoc(doc(db, "Sources", ele.id), {url: ele.url})
// 	// await lite.addDoc(lite.collection(db, "Tours"), ele);
// });
// const update = async () => {
//   const snapShots = await getDocs(collection(db, "Tours"));
//   snapShots.docs.forEach((doc) => updateDoc(doc.ref, { traffic: 0 }));
// }

// update()
const addDataToFB = (data) => {
  // data.forEach(async (tour) => {
  //   await addDoc(collection(db, "Tours"), { ...tour, traffic: 0 });
  // });
  console.log("data: ", data);
}
console.log("Tracking is running...");
watch("./src/data/data1.json", (e, fileName) => {
  if (e === "change") {
    const data = require("./src/data/data1.json");
    console.log(`The file ${fileName} has changed!`);
    addDataToFB(data);
  }
})
watch("./src/data/data2.json", (e, fileName) => {
  if (e === "change") {
    const data = require("./src/data/data2.json");
    console.log(`The file ${fileName} has changed!`);
    addDataToFB(data)
  }
})
watch("./src/data/data3.json", (e, fileName) => {
  if (e === "change") {
    const data = require("./src/data/data3.json");
    console.log(`The file ${fileName} has changed!`);
    addDataToFB(data)
  }
})
watch("./src/data/data4.json", (e, fileName) => {
  if (e === "change") {
    const data = require("./src/data/data4.json");
    console.log(`The file ${fileName} has changed!`);
    addDataToFB(data)
  }
})


