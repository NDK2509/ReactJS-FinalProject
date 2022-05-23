import { useEffect, useState } from "react";
import FireBaseConnection from "./../core/FireBaseConnection";
import { collection, getDocs, query } from "firebase/firestore/lite";
const TestFireBase = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      var q = query(collection(db, "Accounts"));
      var querySnapShot = await getDocs(q);
      setData(querySnapShot.docs.map((snap) => snap.data()));
      setIsLoaded(true);
    };
    if (!isLoaded) callFB(); // eslint-disable-next-line
  }, [isLoaded]);

  if (isLoaded) {
    return (
      <div>
        {data.map((admin) => (
          <div>
            {admin.name} {admin.password}
          </div>
        ))}
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }
  
};
export default TestFireBase;
