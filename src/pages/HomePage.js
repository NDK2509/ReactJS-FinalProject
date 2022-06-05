import TourContainer from "../components/Home.Comp";
import WhyChoose from "../components/WhyChoose.Comp";

const HomePage = () => {
  return (
    <section className="home" style={{width: "90%", margin: "auto"}}>
      <TourContainer />
      <WhyChoose />
    </section>
  );
};
export default HomePage;
