import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
  }


  return (
    <>
      <div className="slider-container relative">
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
