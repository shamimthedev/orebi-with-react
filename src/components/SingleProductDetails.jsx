import { useParams } from "react-router"
import useGetSingleProduct from "../hook/useGetSingleProduct"


const SingleProductDetails = () => {
    const { productId } = useParams()
    const singleProduct = useGetSingleProduct(productId)

    if (singleProduct === null) {
        return <p>Loading .... </p>
    }
    return (
        <div className="w-[450px]">
            <img src={singleProduct.image} className="w-full" />
            <h2>{singleProduct.title}</h2>
            <p>{singleProduct.description}</p>
        </div>
    )
}

export default SingleProductDetails