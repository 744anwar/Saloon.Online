import artboard1 from "../assets/artboard2.png";
import artboard2 from "../assets/artboard1.png";
import artboard3 from "../assets/artboard3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Aboutus() {

  useEffect(() =>{
    AOS.init({
      duration:1000,
      easing:'ease-in-out',
      once:true,
    })
  },[]);

  return (
    <>
      <section
        id="about-us"
        className="w-full h-full md:h-screen grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 pt-10 md:pt-10 p-2.5 md:p-5 md:justify-items-center"
      >
        <div className="m-0 px-2 md:pl-5 grid grid-cols-2 h-80 md:h-80 gap-2 md:gap-2.5">
          <div className="">
            <img
            data-aos="zoom-in"
              src={artboard1}
              alt="girl saloon services"
              className="scroll-smooth transition-all duration-700 ease-in-out h-full w-full p-0 md:p-0"
            />
          </div>
          <div className="gap-0">
            <img
            data-aos="fade-down"
              src={artboard2}
              alt="Saloon beard cutting services"
              className="scroll-smooth transition-all duration-700 ease-in-out pb-2 h-1/2 w-full"
            />
            <img
            data-aos="fade-up"
              src={artboard3}
              alt="Saloon vax services"
              className="scroll-smooth transition-all duration-700 ease-in-out pt-2 h-1/2 w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 p-2 md:p-5 gap-2 md:gap-2.5 justify-center items-center h-96 md:h-80">
          <h2 className="font-sans text-2xl md:text-4xl font-bold md:font-bold tracking-wide capitalize text-black text-center md:text-start">
            About us
          </h2>
          <p className="font-sans text-sm md:text-lg normal-case text-Gray md:tracking-wider text-justify md:pt-2">
            At Saloon.Online, we have developed a seamless and user-friendly
            platform that caters to both men and women, offering a convenient
            experience for booking salon appointments. Our innovative app allows
            users to effortlessly search for salons nearby or by name, providing
            them with a hassle-free booking process.
          </p>
          <p className="font-sans text-sm md:text-lg normal-case text-Gray md:tracking-wider text-justify md:pt-2">
            Customers can select their desired services, choose suitable
            timings, and make appointments with ease. Once the booking is
            confirmed, salon owners can efficiently manage and approve
            appointments through their admin portal. Our goal is to ensure that
            every customer can visit the salon at their scheduled time without
            any delays, enjoying a smooth and efficient salon experience.
            Experience the convenience of salon bookings with Saloon.Online.
          </p>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
