import SVG1 from "/7.svg";
import SVG2 from "/10.svg";
import SVG3 from "/12.svg";
import IconClickable from "./IconClickable";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Features() {

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:"ease-in-out",
      once:true,
    })
  })
  return (
    <>
      <section
        id="features"
        className="w-full h-auto p-2.5 m-0 pt-16 md:pt-10"
      >
        <h1 className="text-center text-customRed text-2xl md:text-4xl font-bold font-sans normal-case md:pb-1">
          Features of App
        </h1>
        <div className="flex justify-center md:justify-center items-start md:items-center w-full md:w-full gap-0 md:gap-0 h-20 md:h-20 py-0 md:py-20">
          <img
          data-aos="fade-right"
            src={SVG1}
            alt="icon"
            className="scroll-smooth transition-all duration-700 ease-in-out md:h-40 h-24 w-20 md:w-40 p-0 md:p-0"
          />
          <img
          data-aos="zoom-in"
            src={SVG2}
            alt="icon"
            className="scroll-smooth transition-all duration-700 ease-in-out md:h-40 h-24 w-20 md:w-40 p-0 md:p-0"
          />
          <img
          data-aos="fade-left"
            src={SVG3}
            alt="icon"
            className="scroll-smooth transition-all duration-700 ease-in-out md:h-40 h-24 w-20 md:w-40 p-0 md:p-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-start md:justify-items-center w-full px-5 md:px-20 gap-2.5">
          <div className="grid grid-cols-1">
            <h2 className="font-sans font-medium text-2xl normal-case text-center text-black">
              Online Booking
            </h2>
            <p className="font-sans font-normal text-base normal-case text-Gray text-center">
              Schedule your saloon visits with ease using our convenient online
              booking system.
            </p>
          </div>
          <div className="grid grid-cols-1">
            <h2 className="font-sans font-medium text-2xl normal-case text-center text-black">
              Home Services
            </h2>
            <p className="font-sans font-normal text-base normal-case text-Gray text-center">
              Enjoy saloon-quality services in the comfort of your own home with
              our home service options.
            </p>
          </div>
          <div className="grid grid-cols-1">
            <h2 className="font-sans font-medium text-2xl normal-case text-center text-black">
              Shop Management
            </h2>
            <p className="font-sans font-normal text-base normal-case text-Gray text-center">
              Empower barbers to efficiently manage their shops, services, and
              staff with our comprehensive management tools.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center w-full p-5 m-0">
          <h2 className="font-sans font-medium md:font-semibold normal-case text-2xl md:text-4xl text-customRed md:pt-2.5">
            How it Works
          </h2>
          <p className="font-sans font-normal normal-case text-base text-Gray pt-1 text-justify md:text-center w-full md:w-1/2">
            Experience the ease of the Saloon.Online App, your trusted companion
            for seamless saloon reservations. Here is how it works:
          </p>
        </div>
        <IconClickable />
      </section> 
    </>
  );
}

export default Features;
