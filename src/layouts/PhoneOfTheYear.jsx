
import Image from "../components/Image";
import PhoneOfTheYearImage from "../assets/phone-of-the-year.png";
import Container from "../components/Container";

const PhoneOfTheYear = () => {
  return (
    <>
      <div id="phoneOfTheYearSection" className="mb-32">
        <Container>
          <Image imgSrc={PhoneOfTheYearImage} className={"w-full"} />
        </Container>
      </div>
    </>
  );
};

export default PhoneOfTheYear;
