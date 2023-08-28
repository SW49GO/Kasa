import { useState } from "react"

function useDropdown(initialState) {
    const [isOpen, setIsOpen] = useState(initialState);
  
    const toggleDropdown = () => {
      setIsOpen((prevState) => !prevState);
    };
  
    return [isOpen, toggleDropdown];
  }
  export default useDropdown