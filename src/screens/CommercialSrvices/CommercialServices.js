import { Image } from "react-bootstrap";
import Commercial from "../../assets/photos/BMS.jpg";
import Commercial2 from "../../assets/photos/commercial2.png";

const CommercialServices = () => {
  return (
    <div>
      <div className="mx-5 d-flex justify-content-around row mt-4 flex-column-reverse flex-lg-row align-items-center">
        <p
          className=" col-lg-5 col-10  "
          style={{ fontWeight: 28, fontSize: 22, textAlign: "left" }}
        >
          A Building Management System (BMS) is a computer-based system
          installed in buildings to control and monitor mechanical and
          electrical plants, including; HVAC (heating, ventilation, air
          conditioning), lighting, power systems, fire systems, and security
          systems. We can help you integrate and maintain your system
        </p>
        <Image src={Commercial} className="my-3 col-lg-4 col-9" />
      </div>
      <div className="my-5 col-5 m-auto" style={{ border: "1px solid " }} />

      <div className="mx-5 d-flex justify-content-around row mt-4 flex-column flex-lg-row align-items-center">
        <Image src={Commercial2} className="my-3 col-lg-4 col-9" />

        <p
          className=" col-lg-5 col-10  "
          style={{ fontWeight: 28, fontSize: 22, textAlign: "left" }}
        >
          we stock some components which can be critical for your facility like
          breakers, semiconductors, contactors, relays, power supplies, sensors,
          specialty cables, PLC cards and more so please give us a call to help
          you locate your part
        </p>
      </div>
    </div>
  );
};

export default CommercialServices;
