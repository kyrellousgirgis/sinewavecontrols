import Carousel from "react-bootstrap/Carousel";

function CarouselSlider({ items }) {
  return (
    <Carousel variant="dark">
      {items.map((item) => {
        return (
          <Carousel.Item className="h-50">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: 300, maxHeight: 300 }}
            >
              <img
                className="d-block col-5 m-auto img-fluid "
                src={item.image}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselSlider;
