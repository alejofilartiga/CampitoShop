import { createContext, useState } from 'react';
import DropdownMenu from './DropMenu';
const MenuContext = createContext();

const MenuProvider = () => {
  const [isOpen, setIsOpen] = useState(false);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      <DropdownMenu />
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };