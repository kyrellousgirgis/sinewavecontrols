import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/photos/sinewaveslogo.png";
import { Image } from "react-bootstrap";
import sinewave from "../../assets/photos/logo word.png";
import emergency from "../../assets/photos/emergency.png";

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Image
          src={logo}
          alt="logo"
          className="img-fluid col-lg-1 col-md-1 col-2"

          // style={{ width: 100, height: 70 }}
          // onClick={() => {}}
        />

        <Image
          className="col-3 m-lg-auto d-lg-none mx-lg-5 d-block img-fluid"
          src={sinewave}
          alt="sinewavecontrols"
        />

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/CommercialServices">Commercial services</Nav.Link>
            <Nav.Link href="/IndustrialServices">Industrial services</Nav.Link>

            <Nav.Link href="/ContactUs">Contact us</Nav.Link>
          </Nav>
          <div className="d-flex col-2 justify-content-center align-items-center">
            <Image
              className="col-10 col-lg-4 d-lg-block d-none"
              src={emergency}
              alt="emergency"
            />
          </div>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
