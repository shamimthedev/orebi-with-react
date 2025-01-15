import { useState } from "react";
import Slider from "react-slick";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1); // Default active slide is 1

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
    afterChange: (current) => {
      setActiveSlide(current + 1); // Slider index is 0-based, so we add 1
    },
    // customPaging: (i) => ( ),
    // appendDots: (dots) => ( ),
    dotsClass: "slick-dots line-indicator",
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       position: "absolute",
    //       width: "100%",
    //       // top: "-10px",
    //       // opacity: 0,
    //       bottom: '-30px'
    //     }}
    //   >
    //     {i}
    //   </div>
    // ),
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="py-[300px] bg-bannerBackground bg-cover bg-center bg-no-repeat">
            {/* Content for the first slide */}
          </div>
          <div className="py-[300px] bg-bannerBackground bg-cover bg-center bg-no-repeat">
            {/* Content for the second slide */}
          </div>
          <div className="py-[300px] bg-bannerBackground bg-cover bg-center bg-no-repeat">
            {/* Content for the third slide */}
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Banner;
