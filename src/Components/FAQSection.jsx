import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import  AOS  from "aos";
import 'aos/dist/aos.css'


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex == index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing:'ease-in-out',
      once:true,
    })
  }, []);

  const FAQS = [
    {
      Question: "What services can I book on App?",
      Answer:
        "You can book salon appointments for various services using the Saloon.online app. Choose from a range of grooming services tailored to your needs and preferences.",
    },
    {
      Question: "Can I check each barber's availability?",
      Answer:
        "Yes, you can view the availability of each barber on the Saloon.online app, allowing you to select the barber of your choice based on their schedule and availability.",
    },
    {
      Question: "How do I manage my appointments?",
      Answer:
        "With the Saloon.online app, you can easily manage your appointments by scheduling them at your preferred timings and accessing the admin portal to make any necessary changes or approvals.",
    },
    {
      Question: "Can I advertise my salon on Saloon.online?",
      Answer:
        "Yes, the Saloon.online app provides the feature to advertise your salon, allowing you to promote your services and reach a wider audience for increased visibility and business growth.",
    },
    {
      Question: "Can I book a specific barber?",
      Answer:
        "Absolutely! The Saloon.online app enables you to book appointments with specific barbers of your choice, ensuring personalized grooming experiences tailored to your preferences.",
    },
    {
      Question: "What are the benefits of using Saloon.online?",
      Answer:
        "The Saloon.online app offers a seamless and efficient platform for booking salon appointments, providing users with a hassle-free experience, timely services, and the convenience of managing appointments effortlessly.",
    },
  ];

  return (
    <>
      <div id="faq" className="grid grid-cols-1 justify-items-center pt-16">
        <h2 className="font-sans text-4xl font-bold normal-case text-customRed w-full text-center pb-5">
          FAQ
        </h2>
        <hr className="border-x-[40px] md:border-x-[30px] border-customRed pt-1" />
      </div>
      <div className="bg-white px-2 md:px-40 w-full h-full pt-10">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="w-full gap-2 md:gap-5 h-full grid grid-cols-1 px-0 md:px-2 py-1 md:py-2 mb-4 font-sans bg-customBlue"
          >
            <div
              className={`font-sans text-xl md:text-xl font-medium normal-case cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? "text-customRed" : "text-black"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.Question}
              <FontAwesomeIcon
                icon={activeIndex === index ? faChevronUp : faChevronDown}
                className="float-end flex justify-start items-center"
              />
            </div>
            {activeIndex === index && (
              <div className="font-sans text-base font-normal normal-case text-Gray text-justify">
                {faq.Answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 justify-items-center pt-2.5 md:pt-10"> 
        <h2 data-aos="zoom-in" className="scroll-smooth trasnition-all duration-700 ease-in-out font-sans text-xl md:text-4xl font-bold normal-case text-customRed text-center">Get in Saloon Reasonable Price</h2>
        <p className="font-sans text-lg font-normal normal-case text-Gray text-center px-1 md:px-96">
          Experience quality services at budget-friendly rates with our
          transparent and reasonable pricing structure.
        </p>
      </div>
    </>
  );
};

export default FAQSection;
