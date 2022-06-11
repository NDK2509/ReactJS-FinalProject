import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "./../assets/css/tour.css";
import "swiper/css/bundle";
import { getMoney } from "../utils/Currency.util";
import { formatDate } from "../utils/Date.util";

const VerticalTourCard = ({ tour }) => {
  return (
    <div style={{ margin: "auto" }}>
      <a
        href={tour.url}
        className="tour-link text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        <div className="vertical-tour-card">
          <img src={tour.img} alt="" />
          <div className="content mt-3">
            <h6>{tour.name}</h6>
            <p className="text-muted">*{tour.duration}
              <br/>
              Ngày khởi hành: {formatDate(tour.date) || "Liên hệ"}</p>
            <p className="text-end price">{getMoney(tour.price) || "Liên hệ để biết thêm"}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
const HorizontalTourCard = ({ tour }) => {
  return (
    <div style={{ margin: "auto", marginTop: "2rem" }}>
      <a
        href={tour.url}
        className="tour-link text-decoration-none"
        target="_blank"
        rel="noreferrer"
      >
        <div className="horizontal-tour-card">
          <img src={tour.img} alt="" />
          <div className="content mt-3">
            <h6>{tour.name}</h6>
            <p className="text-muted">
              *{tour.duration}
              <br />
              Ngày khởi hành: {formatDate(tour.date) || "Liên hệ"}
            </p>
            <p className="text-end price">
              {getMoney(tour.price) || "Liên hệ để biết thêm"}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
const GroupBySource = ({ source, list }) => {
  return (
    <>
      <div className="group-header d-flex justify-content-between align-items-center w-100">
        <h5 className="">Tham khảo từ {source.url}</h5>
        <div>
          <Link to={`/Tours/${source.id}`} className="see-more-link">
            Xem thêm <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>

      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={30}
        className="tour-group-by-source mt-3 mb-5"
      >
        {list.map((tour, index) => (
          <SwiperSlide key={index}>
            <VerticalTourCard tour={tour} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export { VerticalTourCard, HorizontalTourCard, GroupBySource };
