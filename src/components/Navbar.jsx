import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoImage from '../assets/logo.png';

// Pass setOpenNav as a prop to NavList
function NavList({ setOpenNav }) {
  return (
    <ul className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-0 lg:flex-row lg:items-center lg:ml-auto">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-5 sm:pl-[25vh] md:pl-0 font-medium"
      >
        <Link
          to="/"
          className="flex items-center hover:text-blue-400 transition-colors"
          onClick={() => setOpenNav(false)} // Close navbar on click
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-5 sm:pl-[25vh] md:pl-0 font-medium"
      >
        <Link
          to="/about"
          className="flex items-center hover:text-blue-400 transition-colors"
          onClick={() => setOpenNav(false)} // Close navbar on click
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-5 sm:pl-[25vh] md:pl-0 font-medium"
      >
        <Link
          to="/mentor"
          className="flex items-center hover:text-blue-400 transition-colors"
          onClick={() => setOpenNav(false)} // Close navbar on click
        >
          Mentor
        </Link>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="fixed top-0 left-0 w-full bg-opacity-[50vh] border-none text-white px-6 py-3 z-50 border-b-0 shadow-none lg:bg-black lg:bg-opacity-60">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImage} alt="Logo" className="h-10 relative top-[5%] w-auto" /> {/* Adjust logo size */}
        </div>
        <div className="hidden lg:flex lg:ml-auto">
          {/* Pass setOpenNav as a prop */}
          <NavList setOpenNav={setOpenNav} />
        </div>
        <IconButton
          variant="text"
          className="lg:hidden h-8 w-8 transition-transform duration-300 ease-in-out text-white focus:bg-gray-700 active:bg-gray-700"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse
        open={openNav}
        className={`lg:hidden fixed top-0 right-0 h-screen border-none w-full bg-black shadow-none transition-transform duration-300 ease-in-out ${openNav ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="flex flex-col h-full p-4">
          <IconButton
            variant="text"
            className="self-end mr-[4vh] mb-[5vh] text-white focus:bg-gray-700 active:bg-gray-700"
            ripple={false}
            onClick={() => setOpenNav(false)}
          >
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          </IconButton>
          {/* Pass setOpenNav as a prop */}
          <NavList setOpenNav={setOpenNav} />
        </div>
      </Collapse>
    </Navbar>
  );
}
