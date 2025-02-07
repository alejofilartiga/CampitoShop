import { useContext, useEffect, useRef } from 'react';
import { MenuContext } from './MenuContext';

import {
        StyledWrapper,
        LinksContainer,
        Menu,
} from './menuStyle'

import {Link} from 'react-router-dom';


const DropdownMenu = () => {
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, );

  return (
    <StyledWrapper ref={menuRef}>
      <Menu onClick={toggleMenu}>{isOpen ? 'X' : 'MENU'}</Menu>
      {isOpen && (
       <LinksContainer  isOpen={isOpen}>
            <Link onClick={toggleMenu} className='linkStyle' to='/'>INICIO</Link>
            <Link onClick={toggleMenu} className='linkStyle' to='/products'>PRODUCTOS</Link>
            <Link onClick={toggleMenu} className='linkStyle' to='/contact'>CONTACTO</Link>
            <Link onClick={toggleMenu} className='linkStyle' to='/about'>NOSOTROS</Link>
       </LinksContainer>
      )}
    </StyledWrapper>
  );
};

export default DropdownMenu;