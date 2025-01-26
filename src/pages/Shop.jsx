import { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Product from "../components/Product";
// import productData from "../utils/data";
import Skeleton from "../components/Skeleton";


const Shop = () => {
    const [listOfProduct, setListOfProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData()
      }, [])
    
      const fetchData = async () => {
        const data = await fetch("https://fakestoreapi.com/products")
        const resData = await data.json()
        setListOfProduct(resData)
        setFilterProduct(resData)
      }

    return listOfProduct.length === 0 ? <Skeleton /> : (
        <div className="mb-32">
            <Container>
                <Heading
                    as={"h2"}
                    text={"Shop"}
                    className={
                        "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
                    }
                />
                <div className="mb-5 flex justify-between items-center font-primary text-xl">
                    <button className="cursor-pointer" onClick={() => {
                        const filteredProduct = listOfProduct.filter(product => product.price > 35);
                        setListOfProduct(filteredProduct)
                    }}>Top product</button>
                    <div>
                        <input onChange={(e)=> setSearchText(e.target.value)} value={searchText} type="text" placeholder="Search products" className="outline-none border border-gray-300 rounded-md px-3 py-2 mr-2" />
                        <button onClick={()=>{
                            const filteredData = listOfProduct.filter((product)=>{
                                return product.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                            })
                            setFilterProduct(filteredData); 
                        }} className="border border-gray-300 rounded-md px-3 py-2">Search</button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-5">
                    {listOfProduct.map((product) => (
                        <div key={product.id} className="w-[24%]">
                            <Product title={product.title} price={product.price} imgSrc={product.image} badgeText={"New"} className={""} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Shop