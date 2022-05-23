import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore/lite";
class FireBaseConnection {
  constructor() {
    var config = require("./dbService.json");
    this.app = initializeApp(config);
    this.db = getFirestore(this.app);
  }
  getDB = () => this.db;
}
export default FireBaseConnection
