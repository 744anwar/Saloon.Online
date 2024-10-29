import SignUp from "../assets/signup.png";
import ChooseSaloon from "../assets/signup1.png";
import Services from "../assets/signup2.png";
import DateTime from "../assets/signup3.png";
import Specialist from "../assets/signup4.png";
import Appointment from "../assets/signup5.jpg";
import SignUpIcon from "/signupicon.svg";
import ServicesIcon from "/servicesicon.svg";
import SaloonIcon from "/saloonicon.svg";
import BookingIcon from "/saloonbookingicon.svg";
import SpecialistSaloon from "/specialisticon.svg";
import Datetime from "/datetimeicon.svg";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";
import AppStore from '../assets/appstore.png';
import PlayStore from '../assets/playstore.png';

const IconClickable = () => {
  const [visibleImage, setVisibleImage] = useState("image-1");
  const showImage = (imageId) => {
    setVisibleImage(imageId);
  };

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:'ease-in-out',
      once:true,
    })
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div data-aos="fade-right" className="scroll-smooth transition-all duration-700 ease-in-out w-full flex justify-center md:justify-end items-center">
        <div
          className="all-images"
          style={{ display: visibleImage === "image-1" ? "block" : "none" }}
          id="image-1"
        >
          <img src={SignUp} alt="Image 1" className="h-[500px] " />
        </div>
        <div
          className="all-images"
          style={{ display: visibleImage === "image-2" ? "block" : "none" }}
          id="image-2"
        >
          <img src={ChooseSaloon} alt="Image 2" className="h-[500px] " />
        </div>
        <div
          className="all-images"
          style={{ display: visibleImage === "image-3" ? "block" : "none" }}
          id="image-3"
        >
          <img src={Services} alt="Image 3" className="h-[500px] " />
        </div>
        <div
          className="all-images"
          style={{ display: visibleImage === "image-4" ? "block" : "none" }}
          id="image-4"
        >
          <img src={DateTime} alt="Image 4" className="h-[500px] " />
        </div>
        <div
          className="all-images"
          style={{ display: visibleImage === "image-5" ? "block" : "none" }}
          id="image-5"
        >
          <img src={Specialist} alt="Image 5" className="h-[500px] " />
        </div>
        <div
          className="all-images"
          style={{ display: visibleImage === "image-6" ? "block" : "none" }}
          id="image-6"
        >
          <img src={Appointment} alt="Image 6" className="h-[500px] " />
        </div>
      </div>
      <div className="image-buttons grid grid-cols-1 md:grid-cols-1 md:justify-items-start pl-8 md:pl-10 pt-2 md:pt-0">
        <div className="flex h-12">
          <button onClick={() => showImage("image-1")} data-showme="image-1">
            <img
              src={SignUpIcon}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            sign up
          </h2>
        </div>
        <div className="flex h-12">
          <button onClick={() => showImage("image-2")} data-showme="image-2">
            <img
              src={SaloonIcon}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            Choose Saloon
          </h2>
        </div>
        <div className="flex h-12">
          <button onClick={() => showImage("image-3")} data-showme="image-3">
            <img
              src={ServicesIcon}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            Select Variety of Services
          </h2>
        </div>
        <div className="flex h-12">
          <button onClick={() => showImage("image-4")} data-showme="image-4">
            <img
              src={Datetime}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            Select date & time
          </h2>
        </div>
        <div className="flex h-12">
          <button onClick={() => showImage("image-5")} data-showme="image-5">
            <img
              src={SpecialistSaloon}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            Choose your Specialist
          </h2>
        </div>
        <div className="flex h-12">
          <button onClick={() => showImage("image-6")} data-showme="image-6">
            <img
              src={BookingIcon}
              alt=""
              className="md:h-12 h-10 w-10 md:w-20 hover:scale-110 transform transition-transform duration-500"
            />
          </button>
          <h2 className="h-12 flex justify-center items-center md:items-start w-auto font-sans font-medium capitalize text-base md:text-2xl text-[#3d3d3d] px-2">
            Confirm your appointment
          </h2>
        </div>
        <div className="flex justify-between md:justify-between md:w-2/3 md:px-0 px-5 pt-2">
          <img data-aos="fade-right" src={AppStore} alt="App Store logo" className="scroll-smooth transition-all duration-700 ease-in-out md:h-20 h-12 w-28 md:w-40 object-contain" />
          <img data-aos="fade-left" src={PlayStore} alt="Play store logo" className="scroll-smooth transition-all duration-700 ease-in-out md:h-20 h-12 w-28 md:w-40 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default IconClickable;
