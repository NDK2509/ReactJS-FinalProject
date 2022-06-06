import { where, query, collection, getDocs} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VerticalTourCard } from "../components/Tour.comp";
import FireBaseConnection from "../core/FireBaseConnection";

const SearchPage = () => {
  const [params] = useSearchParams();
  const [data, setData] = useState({
    tourList: [],
    isLoaded: false,
  });
  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      const searchKey = params.get("searchKey")
      var q = query(collection(db, "Tours"), where("name", ">=", searchKey), where("name", "<=", searchKey + "\uf8ff"));
      var tourSnap = await getDocs(q);
      setData({
        tourList: tourSnap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
        isLoaded: true,
      });
    };
    if (!data.isLoaded) callFB(); // eslint-disable-next-line
  }, [data.isLoaded]);
  console.log(data.tourList);
  return (
    <>
      <div className="text-center">Kết quả cho: {params.get("searchKey")}</div>
      <div className="container">
        <div className="row mt-5">
          {data.isLoaded ? (
            data.tourList.map((tour, index) => (
              <div className="col-3 m-auto mb-3">
                <VerticalTourCard key={index} tour={tour} />
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchPage;
