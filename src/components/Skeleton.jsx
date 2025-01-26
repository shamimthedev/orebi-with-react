import Container from "./Container"
import Heading from "./Heading"


const Skeleton = () => {
    return (
        <section>
            <Container>
            <Heading
                    as={"h2"}
                    text={"Shop"}
                    className={
                        "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
                    }
                />
                <div className="mb-5 flex justify-between items-center font-primary text-xl">
                    <button className="cursor-pointer">Top product</button>
                    <div>
                        <input type="text" placeholder="Search products" className="outline-none border border-gray-300 rounded-md px-3 py-2 mr-2" />
                        <button className="border border-gray-300 rounded-md px-3 py-2">Search</button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-5">
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                    <div className="w-[24%] h-[420px] bg-gray-200"></div>
                </div>
            </Container>
        </section>
    )
}

export default Skeleton