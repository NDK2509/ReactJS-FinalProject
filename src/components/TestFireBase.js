import { useEffect, useState } from "react";
import FireBaseConnection from "./../core/FireBaseConnection";
import { collection, getDocs, query } from "firebase/firestore/lite";
const TestFireBase = () => {
  const [dataLoading, setDataLoading] = useState({
    data: [],
    isLoaded: false
  });

  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      var q = query(collection(db, "Accounts"));
      var querySnapShot = await getDocs(q);
      setDataLoading({
        data: querySnapShot.docs.map((snap) => snap.data()),
        isLoaded: true
      });
    };
    if (!dataLoading.isLoaded) callFB(); // eslint-disable-next-line
  }, [dataLoading]);

  if (dataLoading.isLoaded) {
    return (
      <div>
        {dataLoading.data.map((admin) => (
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
