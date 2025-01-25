
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 2000,
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
