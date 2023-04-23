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
                <a href="https://www.google.com/maps/place/St+Rose+Executive+Suites+and+Virtual+Offices/@36.0409761,-115.1670156,12z/data=!3m1!5s0x80c8cf37ca0d4c8f:0x6318b9b6c5d522!4m6!3m5!1s0x80c8cf80b6477859:0x6e3b7a9eaa2d881b!8m2!3d36.0084286!4d-115.1111868!16s%2Fg%2F11fj2dbsf1">
                  2831 St Rose Pkwy #200
                </a>
                <p>Henderson, NV 89052</p>
                <p>Phone: (702) 955- 6624</p>
                <p>Email: Office@sinewavecontrols.com</p>
                <p>Hours: Monday-Friday 8am-5pm</p>
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
