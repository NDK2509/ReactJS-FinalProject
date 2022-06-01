import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import FireBaseConnection from "../core/FireBaseConnection";
import "./../assets/css/tourcard.css";

const VerticalTourCard = ({ tour }) => {
	return (
		<div className="vertical-tour-card">
			<img src={tour.img} alt="" style={{ width: "18rem", height: "15rem" }} />
			<div className="content">
				<h5>{tour.name}</h5>
			</div>
		</div>
	);
};
const GroupBySource = ({ title, list }) => {
	return (
		<>
			<h1 className="text-center">{title}</h1>
			<div className="row">
				{list.map((tour) => (
					<div className="col-4 g-5">
						<VerticalTourCard tour={tour} />
					</div>
				))}
			</div>
		</>
	);
};
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
	}, [data]);

	return data.isLoaded ? (
		<section className="container py-3">
			{data.sourceList.map((source) => 
				<GroupBySource 
          title={source.url} 
          list={data.tourList.filter(tour => tour.url.includes(source.url))} 
        />
		  )}
		</section>
	) : (
		<div className="text-center">Loading...</div>
	);
};
export { VerticalTourCard, GroupBySource, TourContainer };
