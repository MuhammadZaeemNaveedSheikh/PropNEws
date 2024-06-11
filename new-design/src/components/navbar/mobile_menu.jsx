import PropTypes from 'prop-types';
import nav_links from "./config.jsx";
import { Link } from "react-router-dom";
import Subscribe from './subscribe';

const MobileMenu = ({ open, setOpen }) => {

 const handleClick = () => {
    setOpen(!open);
 };

 return (
    <div className="block md:hidden" id="mob_menu">
      <button
        type="button"
        title="menu"
        className="relative z-50 flex items-center"
        onClick={handleClick}
      >
        <span className="material-symbols-rounded">
          {!open ? "menu" : "close"}
        </span>
      </button>
        <div
          className={`fixed px-5 pt-16 inset-0 bg-black flex flex-col justify-start items-start gap-4 ${ open ? "translate-x-0 ": "translate-x-full" } transition-transform`}
          id="mob_menu_open"
        >
          {nav_links.map((link, index) => (
            <Link key={index} to={link.path} onClick={()=>setOpen(false)} >{link.title}</Link>
          ))}
          <Subscribe />
        </div>
    </div>
 );
};

MobileMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
   };

export default MobileMenu;
