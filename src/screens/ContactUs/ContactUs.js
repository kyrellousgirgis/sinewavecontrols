import { Card, Container, Row } from "react-bootstrap";
import backgroundImage from "../../assets/photos/commerical.png";
const ContactUs = () => {
  return (
    <div
      className="align-items-center d-flex justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="overlay-card d-flex mb-5 rounded-5 col-lg-3 col-8">
        <Card>
          <Card.Body>
            <Container>
              <Row>
                {/* <Col md={6}> */}
                <h2>Contact Us</h2>
                <p>2831 St Rose Pkwy #200</p>
                <p>Henderson, NV 89052</p>
                <p>Phone: +1 (702) 589-4833</p>
                <p>Email: Office@sinewavecontrols.com</p>
                <p>Hours: Monday-Friday 8 AM - 4:30 PM</p>
                {/* <div></div> */}
                {/* </Col> */}
                {/* <Col md={6}>
                  <img className="col-7" src={electic} alt="placeholder" />
                </Col> */}
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default ContactUs;
