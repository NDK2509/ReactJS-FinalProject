import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HorizontalTourCard } from "../components/Tour.comp";
import FireBaseConnection from "../core/FireBaseConnection";
const ToursPage = () => {
  const params = useParams();
  const [data, setData] = useState({
    source: {},
    list: [],
    isLoaded: false,
  });
  useEffect(() => {
    const callFB = async () => {
      const db = new FireBaseConnection().getDB();
      const source = await getDoc(doc(db, "Sources", params.id));
      const toursSnap = await getDocs(
        query(
          collection(db, "Tours"),
          where("url", ">=", source.data().url),
          where("url", "<=", source.data().url + "\uf8ff")
        )
      );

      setData({
        source: source.data(),
        list: toursSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
        isLoaded: true,
      });
    };
    if (!data.isLoaded) callFB(); // eslint-disable-next-line
  }, [data.isLoaded]);
  return data.isLoaded ? (
    <>
      <h1 className="text-center">{data.source.url}</h1>
      <div className="d-flex flex-column">
        {data.list.map((tour, index) => (
          <HorizontalTourCard key={index} tour={tour} />
        ))}
      </div>
    </>
  ) : (
    <div className="text-center">Loading...</div>
  );
};
export default ToursPage;
