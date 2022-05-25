import { useEffect, useState } from "react";
import FireBaseConnection from "./../core/FireBaseConnection";
import { collection, getDocs, query } from "firebase/firestore/lite";
import { Link } from "react-router-dom";
const NewProducts = () => {
  const [dataLoading, setDataLoading] = useState({
    data: [],
    isLoaded: false,
  });

  useEffect(() => {
    const callFB = async () => {
      var db = new FireBaseConnection().getDB();
      var q = query(collection(db, "Products"));
      var querySnapShot = await getDocs(q);
      setDataLoading({
        data: querySnapShot.docs.map((snap) => snap.data()),
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
          {dataLoading.data.map((product) => (
            <Product item={product} key={product.id} />
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
    <div className="card col-3" style={{ width: "18rem" }} key={item.id}>
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
