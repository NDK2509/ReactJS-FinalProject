import TourContainer from "../components/Home.comp";
import WhyChoose from "../components/WhyChoose.comp";

const HomePage = () => {
  return (
    <section className="home" style={{width: "90%", margin: "auto"}}>
      <TourContainer />
      <WhyChoose />
    </section>
  );
};
export default HomePage;
