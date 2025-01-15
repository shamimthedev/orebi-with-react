import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Product from "../components/Product";
import axios from "axios";

const Shop = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function allDatas() {
      const data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    allDatas();
  }, []);

  return (
    <div id="newArrivalSection" className="mb-32">
      <Container>
        <Heading
          as={"h2"}
          text={"Shop Now"}
          className={
            "my-12 font-primary font-bold text-menuTxtColor text-[40px]"
          }
        />
          {allData.map((item) => (
            <div key={item.id} className="w-[24%] mb-5 inline-flex px-5">
              <Product imgSrc={item.images} badgeText={"New"} />
            </div>
          ))}
      </Container>
    </div>
  );
}

export default Shop
