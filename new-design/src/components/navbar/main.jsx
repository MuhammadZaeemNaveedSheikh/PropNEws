import { Link } from "react-router-dom";
import nav_links from "./config.jsx";
import Logo from "/logo.png";

const Menu = () => {
  return (
    <>
      <Link to={"/"} className="font-bold text-xl relative z-50">
        <img src={Logo} />
      </Link>
      <div className="flex gap-4 text-[#B9BAC2] items-center text-sm font-semibold">
        {nav_links.map((link, index) => {
          return (
            <a key={index} href={link.path} className="group">
              <img src={link.icon} alt={link.title} title={link.title} className="group-hover:shadow-white" />
            </a>
          );
        })}
      </div>
    </>
  );
};

const Navbar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <nav className="bg-secondary border-b border-gray-darker py-3 px-5 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-[1300px] mx-auto">
        <Menu />  
        {/* <MobileMenu open={open} setOpen={setOpen} /> */}
      </div>
    </nav>
  );
};

export default Navbar;
