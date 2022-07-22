import React, {useEffect, useState} from 'react'
import "./Nav.css"
import SearchIcon from '@mui/icons-material/Search';
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if(window.scrollY > 100)  {
              handleShow(true);
          } else handleShow(false);
      });
      return ()  => {
          window.removeEventListener("scroll",() => {
              handleShow(true);
          });
      };

  }, [])  ;

  return (
     <div className= {` nav ${show && "nav__black"}`} >
         <SearchIcon className ="nav__search" />
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
          alt="MicroPlex Logo"
        />

        <img
          className="nav__bar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="MicroPlex Logo"
        />


     </div>
  )
}

export default Nav;