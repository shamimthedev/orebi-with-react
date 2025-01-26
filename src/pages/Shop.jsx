import { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Product from "../components/Product";
import productData from "../utils/data";


const Shop = () => {
    const [listOfProduct, setListOfProduct] = useState(productData);

    return (
        <div className="mb-32">
            <Container>
                <Heading
                    as={"h2"}
                    text={"Shop"}
                    className={
                        "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
                    }
                />
                <button onClick={() => {
                    const filteredProduct = listOfProduct.filter(product => product.price > 40);
                    setListOfProduct(filteredProduct)
                }}>Top product</button>

                {listOfProduct.map((item) => (
                    <div key={item.id} className=" px-5">
                        <Product imgSrc={item.images} badgeText={"New"} className={"w-[25%]"} />
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Shop