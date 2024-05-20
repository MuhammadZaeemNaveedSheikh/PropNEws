import { Link } from "react-router-dom";
import nav_links from "./config";
import MobileMenu from "./mobile_menu";
import { useState } from "react";
import Subscribe from "./subscribe";

const Menu = () => {
  return (
    <>
      <Link to={"/"} className="font-bold text-xl relative z-50">
        PFNews.com
      </Link>
      <div className="hidden md:flex gap-4 text-[#B9BAC2] items-center text-sm font-semibold">
        {nav_links.map((link, index) => {
          return (
            <Link key={index} to={link.path} className="hover:text-white">
              {link.title}
            </Link>
          );
        })}
        <Subscribe />
      </div>
    </>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-secondary border-b border-gray-darker py-3 px-5 sticky top-0">
      <div className="flex justify-between items-center  max-w-[1300px] mx-auto">
        <Menu />
        <MobileMenu open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
