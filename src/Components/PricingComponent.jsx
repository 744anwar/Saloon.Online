import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import  AOS  from "aos";
import 'aos/dist/aos.css'

const PricingComponent = () => {
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() =>{
    AOS.init({
      duration: 1000,
      easing:'ease-in-out',
      once:true,
      offset:50,
    })
  },[]);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Toggle Switch */}
      <div className="flex items-center mb-5">
        <span
          className={
            isYearly ? "text-Gray font-medium" : "text-customRed font-bold"
          }
        >
          Monthly
        </span>
        <div
          className="relative inline-block w-12 h-6 mx-4"
          onClick={() => setIsYearly(!isYearly)}
        >
          {/* Toggle Background */}
          <div
            className={`absolute w-full h-full rounded-full cursor-pointer transition ${
              isYearly ? "bg-customRed" : "bg-Gray"
            }`}
          ></div>

          {/* Toggle Circle */}
          <div
            className={`absolute h-4 w-4 bg-white rounded-full top-1 left-1 transition-transform ${
              isYearly ? "translate-x-6" : ""
            }`}
          ></div>
        </div>
        <span
          className={
            isYearly ? "text-customRed font-bold" : "text-Gray font-medium"
          }
        >
          Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Plan */}
        <div data-aos="fade-right" className="scroll-smooth trasnition-all duration-700 ease-in-out cursor-pointer min-h-[350px] w-full max-w-[320px] mx-auto">
          <h3 className="text-xl font-bold text-white bg-customRed text-center p-2">
            Basic
          </h3>
          <p className="text-4xl font-bold my-4 text-center">
            ${isYearly ? "100" : "10"}
            <span className="text-lg">/ {isYearly ? "Yearly" : "Monthly"}</span>
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Top Recommendations : Yes
              </p>
            </li>
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Per Day Limit: Limited
              </p>
            </li>
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Service & Staff Registration: Limited
              </p>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button className="bg-white text-customRed border-2 border-customRed py-2 px-4 w-1/2 rounded-full hover:bg-customRed hover:text-white hover:scale-110 transform transition-transform duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Premiere Plan */}
        <div data-aos="fade-left" className="scroll-smooth trasnition-all duration-700 ease-in-out cursor-pointer min-h-[350px] w-full max-w-[320px] mx-auto">
          <h3 className="text-xl font-bold text-white bg-customRed text-center p-2">
            Premiere
          </h3>
          <p className="text-4xl font-bold my-4 text-center">
            ${isYearly ? "150" : "100"}
            <span className="text-lg">/ {isYearly ? "Yearly" : "Monthly"}</span>
          </p>
          <ul className="mb-6">
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Top Recommendations : Yes
              </p>
            </li>
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Per Day Limit : {isYearly ? "Unlimited" : "Limited"}
              </p>
            </li>
            <li className="flex items-center mb-2 gap-2 justify-start">
              <FontAwesomeIcon
                icon={faCheck}
                className="relative text-customRed bg-none border-2 border-customRed rounded-full p-1 w-5 h-5"
              />
              <p className="font-sans text-lg font-normal normal-case text-Gray">
                Service & Staff Registration :
                {isYearly ? "Unlimited" : "Limited"}
              </p>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button className="bg-white text-customRed border-2 border-customRed py-2 px-4 w-1/2 rounded-full hover:bg-customRed hover:text-white hover:scale-110 transform transition-transform duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
