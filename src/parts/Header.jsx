import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Menu from '../components/Menu'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = ({ imgSrc, imgAlt, menuone, menutwo, menuthree, menufour }) => {
  
  const navigate = useNavigate();

  return (
    
    <>
      {/* Header Logo with Menu Start */}
      <div className='py-[30px]'>
        <Container className={'max-w-headerContainer'}>
          <Flex>
          <div className='w-[30%]'>
            <NavLink to={'/'}>
            <Image imgSrc={imgSrc} imgAlt={imgAlt}/>
            </NavLink>
          </div>
            <Menu className='flex w-[70%] pl-8'>
              <li>
              <NavLink to={'/'} className={'hover:font-bold hover:text-TextHColor px-5'}>{menuone}</NavLink>
              </li>
              <li>
              <NavLink to={'/shop'} className={'hover:font-bold hover:text-TextHColor px-5'}>{menutwo}</NavLink>
              </li>
              <li>
              <NavLink to={'/about'} className={'hover:font-bold hover:text-TextHColor px-5'}>{menuthree}</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'} className={'hover:font-bold hover:text-TextHColor px-5'}
                  onClick={() => navigate('/', { replace: true })}>{menufour}</NavLink>
              </li>
            </Menu>
          </Flex>
        </Container>
      </div>
      {/* Header Logo with Menu End */}
    </>
  )
}

export default Header