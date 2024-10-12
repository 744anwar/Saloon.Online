import bgImage from "../assets/saloonelipse.png";
import SaloonPlaystore from "../assets/playstore.png";
import SaloonAppstore from "../assets/appstore.png";
import saloon1 from "../assets/Group18051.png";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Hero = () => {


  useEffect(() =>{
    AOS.init({
      duration: 1000,
      easing:'ease-in-out',
      once:true,
    })
  },[]);

  const StyleImage = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <section id="hero" className="w-full h-[750px] md:h-[calc(100%-100px)] grid grid-cols-1 md:grid-cols-1 p-0 -mt-[100px] ">
      <div
        className="md:h-[560px] md:w-[43%] bg-cover bg-right-top bg-no-repeat -z-10 absolute md:left-[60%] md:top-0"
        style={StyleImage}
      >
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-auto h-[400px] md:h-[550px]">
      <div className="pt-24 md:pt-40 p-0 m-0 block gap-2 md:gap-5 w-auto h-[330px] md:h-[400px] ">
        <h2 className="font-sans text-xl md:text-3xl tracking-wide md:tracking-wide font-bold md:font-bold capitalize text-customRed pl-5 md:pl-20 py-1 md:py-3">
          your hassle free 
        </h2>
        <h2 className="font-sans text-xl md:text-3xl tracking-wide md:tracking-wide font-bold md:font-bold capitalize text-Gray pl-5 md:pl-20 py-1 md:py-3">
          saloon.online booking
        </h2>
        <h2 className="font-sans text-xl md:text-3xl tracking-wide md:tracking-wide font-bold md:font-bold capitalize text-Gray pl-5 md:pl-20 py-1 md:py-3">
          solution
        </h2>
        <p className="font-sans text-sm md:text-lg font-normal md:font-normal normal-case text-Gray px-5 text-justify md:pl-20 w-full md:w-2/3 py-1 md:py-2">
          We’ve designed the perfect solution to make your hair dressing
          appointments a breeze.
        </p>
        <div className="flex justify-between md:justify-start gap-4 md:gap-12 px-5 md:pl-20 py-1 md:py-2">
          <img data-aos="fade-right" src={SaloonAppstore} alt="saloon app store logo" className="transition-all duration-700 ease-in-out w-20 md:w-40 h-8 md:h-16" />
          <img data-aos="fade-left" src={SaloonPlaystore} alt="saloon play store logo" className="transition-all duration-700 ease-in-out w-20 md:w-40 h-8 md:h-16" />
        </div>
        <p className="font-sans text-sm md:text-lg font-normal normal-case text-Gray pl-5 md:pl-20 md:py-2">
          * Available on all iPhone, iPad and all android devices.
        </p>
      </div>
      <div className="pt-5 md:pt-40 p-0 m-0 grid grid-cols-1 md:grid-cols-1 justify-items-center gap-3 h-[400px] md:h-[400px] ">
        <img data-aos="zoom-in" src={saloon1} alt="image is loading" className="smooth-scroll transition-all duration-700 ease-in-out h-[400px] w-auto"/>
      </div>
      </div>
    </section>
  );
};

export default Hero;

