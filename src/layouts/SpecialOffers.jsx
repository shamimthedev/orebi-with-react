
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import Product from "../components/Product";
import Billi from "../assets/billi.png";
import Jhuri from "../assets/jhuri.png";
import SWatch from "../assets/watch.png";
import Ghori from "../assets/ghori.png";

const SpecialOffers = () => {
  return (
    <>
      <div id="specialOffersSection" className="mb-32">
        <Container>
          <Heading
            as={"h2"}
            text={"Special Offers"}
            className={
              "mb-12 font-primary font-bold text-menuTxtColor text-[40px]"
            }
          />
          <Flex className={"justify-between flex-wrap"}>
            <Product imgSrc={Ghori} badgeText={"New"} />
            <Product imgSrc={SWatch} badgeText={"New"} />
            <Product imgSrc={Jhuri} badgeText={"New"} />
            <Product imgSrc={Billi} badgeText={"New"} />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default SpecialOffers;
