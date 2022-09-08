import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles.js';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavItemBtn, NavBtnLink } from './Navbarstyled.js';


const Navbr = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
  };

  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#022601'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>
              Читальня
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              { click ? <FaTimes /> : <FaBars /> }
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLink to='/'>
                  О нас
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/features'>
                  Особенности
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/rules'>
                  Правила
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/subscription'>
                  Абонементы
                </NavLink>
              </NavItem>
              {/* <NavItemBtn>
                  { button ? (
                    <NavBtnLink to='/meow'>
                      <Button primary>Meow</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to='/meow'>
                      <Button fontBig primary>Meow</Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbr;