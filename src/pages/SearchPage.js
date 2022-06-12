import { query, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VerticalTourCard } from "../components/Tour.comp";
import FireBaseConnection from "../core/FireBaseConnection";
import getNumber from "../utils/Number.util";

const SearchPage = () => {
  const [params] = useSearchParams();
  const searchKey = params.get("searchKey");
  const [data, setData] = useState({
    tourList: [],
    isLoaded: false,
  });
  useEffect(() => {
    const callFB = async () => {
      const db = new FireBaseConnection().getDB();
      const q = query(collection(db, "Tours"));
      const tourSnap = await getDocs(q);
      const tourList = tourSnap.docs
        .filter((doc) =>
          doc.data().name.toLowerCase().includes(searchKey.toLowerCase())
        )
        .map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
        .sort((a, b) => getNumber(b.price) - getNumber(a.price));
      setData({
        tourList,
        isLoaded: true,
      });
    };
    callFB(); // eslint-disable-next-line
  }, [params]);
  // console.log(data.tourList);
  return (
    <>
      <div className="text-center">
        Kết quả cho: <b>{searchKey}</b>
      </div>
      <div className="container">
        <div className="row mt-5">
          {data.isLoaded ? (
            data.tourList.length !== 0 ? (
              data.tourList.map((tour, index) => (
                <div className="col-3 m-auto mb-3" key={index}>
                  <VerticalTourCard tour={tour} />
                </div>
              ))
            ) : (
              <h4 className="text-center">
                  Tour đi <b>{searchKey}</b> hiện không khả dụng!
              </h4>
            )
          ) : (
            <div className="row text-center justify-content-center align-items-center">
              Loading...
              <div className="spinner-border" role="status"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SearchPage;
