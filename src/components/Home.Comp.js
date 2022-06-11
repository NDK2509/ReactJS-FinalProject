import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { GroupBySource } from "./Tour.comp";
import FireBaseConnection from "../core/FireBaseConnection";

const TourContainer = () => {
  const [data, setData] = useState({
    tourList: [],
    sourceList: [],
    isLoaded: false,
  });
  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      // var q = query(collection(db, "Tours"));
      var tourSnap = await getDocs(collection(db, "Tours"));
      var sourceSnap = await getDocs(collection(db, "Sources"));
      setData({
        tourList: tourSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
        sourceList: sourceSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
        isLoaded: true,
      });
    };
    if (!data.isLoaded) callFB(); // eslint-disable-next-line
  }, [data.isLoaded]);
  
  return data.isLoaded ? (
    <section className="tour-list py-3">
      {data.sourceList.map((source, index) => (
        <GroupBySource
          key={index}
          source={source}
          list={data.tourList.filter((tour) => tour.url.includes(source.url)).slice(0, 7)}
        />
      ))}
    </section>
  ) : (
    <div className="row text-center justify-content-center align-items-center">
      Loading...
      <div className="spinner-border" role="status"></div>
    </div>
  );
};
export default TourContainer;
