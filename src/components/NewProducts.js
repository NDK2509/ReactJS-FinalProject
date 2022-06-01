import { useEffect, useState } from "react";
import FireBaseConnection from "./../core/FireBaseConnection";
import { collection, getDocs} from "firebase/firestore/lite";
import { Link } from "react-router-dom";
const NewProducts = () => {
  const [dataLoading, setDataLoading] = useState({
    data: [],
    isLoaded: false,
  });

  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      // var q = query(collection(db, "Tours"));
      var querySnapShot = await getDocs(collection(db, "Tours"));
      setDataLoading({
        data: querySnapShot.docs.map((snap) => {return {...snap.data(), id: snap.id}}),
        isLoaded: true,
      });
    };
    if (!dataLoading.isLoaded) callFB(); // eslint-disable-next-line
  }, [dataLoading]);

  if (dataLoading.isLoaded) {
    return (
      <div>
        <h2>New Products</h2>
        <div className="row" style={{ columnGap: "1rem" }}>
          {dataLoading.data.map((product, index) => (
            <Product item={product} key={index} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="text-center">Loading...</div>;
  }
};
const Product = ({ item }) => {
  return (
    <div className="card col-3" style={{ width: "18rem" }}>
      <img
        src={item.img}
        className="card-img-top"
        style={{
          width: "15rem",
          height: "15rem",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-danger">{item.price}</p>
      </div>
      <Link
        className="btn btn-primary my-2"
        to={`Detail/${item.id}`}
        type="button"
      >
        Detail
      </Link>
    </div>
  );
};
export default NewProducts;
