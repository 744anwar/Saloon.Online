import SaloonLogo from "./assets/saloon-logo.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:'ease-in-out',
      once:true,
    })
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 transition duration-300 ease-in-out ${
        isScrolled ? "bg-white" : "bg-transparent"
      } flex w-full md:h-[80px] p-2.5 m-0`}
    >
      {/* Mobile view: logo and menu button */}
      <div className="w-full h-20 px-2 py-2 sm:hidden flex justify-between">
        <Link to="hero" smooth={true} duration={500}>
          <img src={SaloonLogo} alt="Saloon Logo" className="w-3/4 h-16 float-start" />
        </Link>
        
        <button
          onClick={toggleMenu}
          className="text-black p-2 w-1/4 border border-customRed rounded bg-customRed hover:text-white focus:outline-none float-right h-16"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-customRed text-white h-64 sm:hidden">
          <nav>
            <ul className="flex flex-col justify-start items-start gap-5 p-5">
              {["about-us", "features", "services", "faq", "latest-news"].map(
                (section) => (
                  <li
                    key={section}
                    className="font-sans text-lg font-medium hover:scale-110 transform transition-transform duration-300"
                  >
                    <Link
                      to={section}
                      smooth={true}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section.replace("-", " ").toUpperCase()}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop view */}
      <div data-aos="fade-right"  className="hidden transition-all duration-700 ease-in-out  sm:flex justify-center items-center w-1/4 p-2.5 m-0">
        <Link to="hero" smooth={true} duration={500}>
          <img
            src={SaloonLogo}
            alt="Saloon Logo"
            className="h-[50px] w-full object-contain object-center m-0 p-0 hover:scale-110 transform transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </div>
      <div className="hidden sm:flex justify-center items-center w-1/2 p-0 m-0">
        <nav data-aos="zoom-in" className="w-full transition-all duration-700 ease-in-out">
          <ul className="flex justify-around items-center gap-5 p-0 m-0">
            <li className="font-sans cursor-pointer text-lg font-medium hover:scale-110 transform transition-transform duration-300 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full bg-white text-customRed hover:bg-customRed hover:text-white">
              <Link to="about-us" smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li className="font-sans cursor-pointer text-lg font-medium hover:scale-110 transform transition-transform duration-300 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full bg-white text-customRed hover:bg-customRed hover:text-white">
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </li>
            <li className="font-sans cursor-pointer text-lg font-medium hover:scale-110 transform transition-transform duration-300 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full bg-white text-customRed hover:bg-customRed hover:text-white">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="font-sans cursor-pointer text-lg font-medium hover:scale-110 transform transition-transform duration-300 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full bg-white text-customRed hover:bg-customRed hover:text-white">
              <Link to="faq" smooth={true} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="font-sans cursor-pointer text-lg font-medium hover:scale-110 transform transition-transform duration-300 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full bg-white text-customRed  hover:bg-customRed hover:text-white">
              <Link to="latest-news" smooth={true} duration={500}>
                Latest News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div data-aos="fade-left" className="hidden sm:flex justify-center items-center w-1/4 pr-2.5 m-0 transition-all duration-700 ease-in-out">
        <button className="font-sans text-lg font-normal px-2 py-2 bg-white text-customRed rounded hover:bg-customRed hover:text-white hover:scale-110 transform transition-transform duration-300 ">
          <a href="#">Book an Appointment</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
