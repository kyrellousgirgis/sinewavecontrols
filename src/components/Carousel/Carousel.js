import Carousel from "react-bootstrap/Carousel";

function CarouselSlider({ items }) {
  return (
    <Carousel variant="dark">
      {items.map((item, index) => {
        return (
          <Carousel.Item className="h-50">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: 600, maxHeight: 600 }}
            >
              <img
                className="d-block col-9 m-auto img-fluid "
                src={item.image}
                alt="First slide"
              />
              {/* <Carousel.Caption> */}
              {/* </Carousel.Caption> */}
            </div>
            <h3 className="mb-5">{item.text}</h3>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselSlider;
