
import Logo from '../assets/Logo.png'
import Header from './Header'
import Category from './Category'

const Navbar = () => {
  return (
    <>
      {/* Header Part Start */}
      <Header
        imgSrc={Logo}
        imgAlt={Logo}
        menuone={'Home'}
        menutwo={'Shop'}
        menuthree={'About'}
        menufour={'Contacts'}
      />
      {/* Header Part End */}


      {/* Category Part Start */}
      <Category
        paraOne={'Shop by Category'}
        paraTwo={'Category 1'}
        paraThree={'Category 2'}
        paraFour={'Category 3'}
        paraFive={'Category 4'}
        paraSix={'Category 5'}
      />
      {/* Category Part End */}
    </>


  )
}

export default Navbar