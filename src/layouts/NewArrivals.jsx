import { useState, useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Product from "../components/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../components/NextArrow";
import PrevArrow from "../components/PrevArrow";
import axios from "axios";

const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [allData, setAllData] = useState([]);

  // useEffect(() => {
  //   async function allDatas() {
  //     const data = await axios.get("https://dummyjson.com/products");
  //     setAllData(data.data.products);
  //   }
  //   allDatas();
  // }, []);

  // fetch method 
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products")
    const resData = await data.json()
    setAllData(resData)
  }

  return (
    <div id="newArrivalSection" className="mb-32">
      <Container>
        <Heading
          as={"h2"}
          text={"New Arrivals"}
          className={
            "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
          }
        />
        {/* Single Slider for All Products */}
        <Slider {...settings}>
          {allData.map((item) => (
            <div key={item.id} className="w-[24%] px-5">
              <Product imgSrc={item.image} badgeText={"New"} className={""} />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrivals;
