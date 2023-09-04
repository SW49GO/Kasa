import { useState } from "react"

/**
 * Function to manage the opening and closing state of drop-down menus
 * @param {*} initialState 
 * @returns function useDropdown
 */
function useDropdown(initialState) {
  
    const [isOpen, setIsOpen] = useState(initialState);
  
    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    return [isOpen, toggleDropdown];
  }
  export default useDropdown