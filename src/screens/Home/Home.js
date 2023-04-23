import { Image } from "react-bootstrap";
import cover from "../../assets/photos/sinewavescontrolsChimny.jpeg";
import CarouselSlider from "../../components/Carousel/Carousel";
import BR from "../../assets/photos/brands with scroll bar/BR.png";
import Danfoss from "../../assets/photos/brands with scroll bar/Danfoss.png";
import Eaton from "../../assets/photos/brands with scroll bar/Eaton.png";
import Rockwell from "../../assets/photos/brands with scroll bar/Rockwell.png";
import Wago from "../../assets/photos/brands with scroll bar/Wago.png";
import ClearWaterPaper from "../../assets/photos/customers with scroll bar/ClearWaterPaper.png";
import MGMResorts from "../../assets/photos/customers with scroll bar/MGM Resorts.png";
import PLI from "../../assets/photos/customers with scroll bar/PLI .png";
import Amazon from "../../assets/photos/customers with scroll bar/Amazon_logo.svg.png";

const Home = () => {
  return (
    <>
      <Image src={cover} className="col-12" />
      <div className="mt-5">
        <div className="my-5">
          <h2 className="mb-2">brands we can fully Handle </h2>
          <CarouselSlider
            items={[
              { text: "BR", image: BR },
              { text: "Danfoss", image: Danfoss },
              { text: "Rockwell", image: Rockwell },
              { text: "Wago", image: Wago },
              { text: "Eaton", image: Eaton },
            ]}
          />
        </div>
        <div className="my-5 col-5 m-auto" style={{ border: "1px solid " }} />
        <div className="my-5" style={{ paddingTop: 100 }}>
          <h2 className=" mt-5">Customers </h2>
          <CarouselSlider
            items={[
              { text: "MGMResorts", image: MGMResorts },
              { text: "PLI", image: PLI },
              { text: "CLEAR WATER PAPER", image: ClearWaterPaper },
              { text: "Amazon", image: Amazon },
            ]}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
