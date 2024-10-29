import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  // faXTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AppStore from "./assets/appstore.png";
import PlayStore from "./assets/playstore.png";
import SaloonLogo from "./assets/saloon-logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <footer className="w-full h-full m-0 py-1 md:py-5 px-1 md:px-10 bg-[#F2F5F7] md:rounded-tl-[150px] md:rounded-tr-[150px] ">
      <div className="flex flex-col justify-center items-center w-full">
        <h2
          data-aos="zoom-in"
          className="scroll-smooth trasnition-all duration-700 ease-in-out w-full font-sans text-xl md:text-3xl font-medium md:font-bold capitalize text-customRed text-center pt-5"
        >
          Subscribe Our News Letter
        </h2>
        <p
          data-aos="zoom-in"
          className="scroll-smooth trasnition-all duration-700 ease-in-out w-full md:w-1/2 font-sans text-base font-normal normal-case text-center md:px-8 md:pt-5"
        >
          A Private Limited is the most popular type of partnership Malta. The
          limited liability is, in fact, the only type of company allowed by
          Companies
        </p>
      </div>
      <div className="flex justify-between bg-customRed rounded-full md:rounded-full px-2 md:px-10 p-2 md:p-5 mx-2 md:mx-40 mt-2 md:mt-5">
        <input
          data-aos="zoom-in-right"
          className="scroll-smooth trasnition-all duration-700 ease-in-out rounded-full p-1 md:p-2.5 focus:outline-none font-sans font-normal normal-case text-base text-Gray bg-white"
          type="email"
          placeholder="example123@gmail.com"
          required
        />
        <button
          data-aos="zoom-in-left"
          className="scroll-smooth trasnition-all duration-700 ease-in-out bg-white text-customRed p-2 md:p-2.5 rounded-full font-sans font-medium md:font-semibold capitalize text-base md:text-2xl"
        >
          Subscribe
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-5 px-2 md:px-5 mt-2 md:mt-10">
        <div className="flex flex-col justify-start items-center gap-2.5">
          <Link to="hero" smooth={true} duration={500}>
            <img
              data-aos="zoom-in-right"
              src={SaloonLogo}
              alt="saloon logo"
              className="scroll-smooth trasnition-all duration-700 ease-in-out h-20 w-full md:w-2/3 hover:cursor-pointer object-contain object-center"
            />
          </Link>
          <p className="font-sans font-normal normal-case text-base text-justify">
            Be the first to find out about exclusive deals, the latest Look
            books trends. We’re on a mission to build a better future where
            technology.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start px-1 md:px-2 gap-1 md:gap-2">
          <h2
            data-aos="zoom-in"
            className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans font-semibold capitalize text-xl text-black"
          >
            Contact Information
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-start items-baseline">
              <h2
                data-aos="zoom-in-down"
                className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans font-medium text-lg capitalize text-Gray"
              >
                phone:
              </h2>
              <p className="font-sans font-normal normal-case text-Gray text-base pl-2.5">
                +923334455666
              </p>
            </div>
            <div className="flex justify-start items-baseline">
              <h2
                data-aos="zoom-in-left"
                className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans font-medium text-lg capitalize text-Gray"
              >
                email:
              </h2>
              <p className="font-sans font-normal normal-case text-Gray text-base pl-2.5">
                example@gmail.com
              </p>
            </div>
            <div className="flex justify-start items-baseline">
              <h2
                data-aos="zoom-in-up"
                className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans font-medium text-lg capitalize text-Gray"
              >
                address:
                <small className="font-sans font-normal normal-case text-Gray text-base pl-2.5">
                  Solochoicez Pvt Ltd, Street No.39, G-10/4, Islamabad.
                </small>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start px-2 gap-2 md:gap-5">
          <h2
            data-aos="zoom-in"
            className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans font-semibold capitalize text-xl text-black"
          >
            social media
          </h2>
          <a
            data-aos="fade-down"
            href="https://www.facebook.com/solochoicezpvt"
            target="_blank"
            className="scroll-smooth trasnition-all duration-700 ease-in-out flex justify-center items-center gap-5"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              // size="2x"
              className=" text-[#9c3435] h-5 w-5"
            />
            <h2 className="font-sans font-medium text-lg text-Gray capitalize ">
              facebook
            </h2>
          </a>
          <a
            data-aos="zoom-in"
            href="https://www.instagram.com/solochoicezpvtltd?igsh=MXVwMTVjeWZlaWp2bA=="
            target="_blank"
            className="scroll-smooth trasnition-all duration-700 ease-in-out flex justify-center items-center gap-5"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              // size="2x"
              className=" text-[#9c3435] h-5 w-5"
            />
            <h2 className="font-sans font-medium text-lg text-Gray capitalize ">
              instagram
            </h2>
          </a>
          <a
            data-aos="zoom-in"
            href="https://www.tiktok.com/en/"
            target="_blank"
            className="scroll-smooth trasnition-all duration-700 ease-in-out flex justify-center items-center gap-5"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              //size="2x"
              className=" text-[#9c3435] h-5 w-5"
            />
            <h2 className="font-sans font-medium text-lg text-Gray capitalize ">
              tiktok
            </h2>
          </a>
          {/* <a
            data-aos="fade-up"
            href="https://twitter.com/?lang=en"
            target="_blank"
            className=" scroll-smooth trasnition-all duration-700 ease-in-out flex justify-center items-center gap-5"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              //size="2x"
              className=" text-[#9c3435] h-5 w-5"
            />
            <h2 className="font-sans font-medium text-lg text-Gray capitalize ">
              twitter
            </h2>
          </a> */}
        </div>
        <div className="grid grid-cols-1  px-2 gap-2">
          <h2
            data-aos="fade-left"
            className="scroll-smooth transition-all duration-700 ease-in-out font-sans font-semibold capitalize text-xl text-black"
          >
            download now
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-1 h-20 md:h-40 w-full gap-2.5 md:gap-0">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-aos="fade-left"
                src={AppStore}
                alt="app store logo"
                className="scroll-smooth transition-all duration-700 ease-in-out h-20 md:h-20 w-full md:w-1/2 object-contain float-left "
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                data-aos="fade-left"
                src={PlayStore}
                alt="play store logo"
                className="scroll-smooth transition-all duration-700 ease-in-out h-20 md:h-20 w-full md:w-1/2 object-contain float-left"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="mx-5 my-2.5 border-1 border-Gray"></hr>
      <div className="flex justify-center items-center w-full">
        <p className="font-sans font-normal text-base normal-case text-Gray text-center">
          Solochoicez 2024 All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
