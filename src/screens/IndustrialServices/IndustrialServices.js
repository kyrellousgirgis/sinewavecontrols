import { Image } from "react-bootstrap";
import Industrial from "../../assets/photos/AB PLC .png";
import Industrial2 from "../../assets/photos/industrial2.png";
import Industrial3 from "../../assets/photos/industrial3.png";

const IndustrialServices = () => {
  return (
    <div>
      <div className="mx-5 d-flex justify-content-around row mt-4 flex-column-reverse flex-lg-row align-items-center">
        <p
          className=" col-lg-5 col-10  "
          style={{ fontWeight: 28, fontSize: 22, textAlign: "left" }}
        >
          Allen Bradley is one of the top manufacturers of programmable logic
          controllers (PLC) in the world. Allen Bradley is the umbrella company
          that owns Rockwell Automation; the manufacturing automation arm of
          Allen Bradley. Allen Bradley designs, develops, installs and supports
          their own line of PLCs. The most commonly known platforms (families)
          of Allen Bradley PLCs are the MicroLogix, CompactLogix and
          ControlLogix. Allen Bradley PLCs are most commonly used in factories
          in North America yet we can help you maintain and upgrade your PLC
          fleet
        </p>
        <Image src={Industrial} className=" col-lg-5 col-10" />
      </div>
      <div className="my-5 col-5 m-auto" style={{ border: "1px solid " }} />

      <div className="mx-5 d-flex justify-content-around row mt-4 flex-column flex-lg-row align-items-center">
        <Image src={Industrial2} className=" col-lg-5 col-10" />
        <p
          className=" col-lg-5 col-10   "
          style={{ fontWeight: 28, fontSize: 22, textAlign: "left" }}
        >
          Conveyors are an essential part of any successful warehousing
          operation and can greatly reduce labor costs and increase efficiency.
          Warehousing and distribution center applications for conveyor systems
          range from simple package handling to complex sorting and order
          fulfillment operations. Sine Wave Controls can help you build, design,
          troubleshoot your warehouse controls either it’s PC or PLC controlled
        </p>
      </div>
      <div className="my-5 col-5 m-auto" style={{ border: "1px solid " }} />

      <div className="mx-5 d-flex justify-content-around row mt-4 flex-column-reverse flex-lg-row align-items-center">
        <p
          className=" col-lg-5 col-10   "
          style={{ fontWeight: 28, fontSize: 22, textAlign: "left" }}
        >
          we can rebuild old electrical components like circuit breakers and
          contactors,We can also assemble various semiconductor products with
          highest precision
        </p>
        <Image src={Industrial3} className=" col-lg-5 col-10" />
      </div>
    </div>
  );
};

export default IndustrialServices;
