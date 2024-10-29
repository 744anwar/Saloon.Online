
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Appointt from '/AppBook.svg'
import Chat from '/chat.svg'
import Offer from '/notifications.svg'
import ServicesImg from '../assets/servicesimg.png'
import Register from '/registersaloon.svg'
import Staff from '/Management.svg'
import Control from '/appcontrol.svg'


function Services() {

useEffect(() => {
  AOS.init({
    duration:1000,
    easing:'ease-in-out',
    once:true,
  })
})

  return (
    <>
      <section
        id="services"
        className="w-full h-[1200px] border-customRed md:h-screen pt-[100px] md:pt-[100px] "
      >
        <div className="grid grid-cols-1 justify-items-center">
          <h1 className="font-sans text-2xl md:text-4xl capitalize font-semibold md:font-bold md:tracking-wide text-customRed pb-2 md:pb-5">
            Services We Provide
          </h1>
          <hr className="border-x-[40px] md:border-x-[70px] border-customRed pt-1 md:pt-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 h-[500px] gap-3 pt-2.5 md:pt-5">
          <div className="grid grid-cols-1 px-5 md:pl-10">
            <h2 className="font-sans text-2xl font-bold capitalize text-black md:text-left text-center">
              Customer Services
            </h2>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Appointt}
                  alt="appointment booking"
                  className="scroll-smooth transition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Appointment Booking
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Easily book appointments with your favorite barbers.
              </p>
            </div>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Chat}
                  alt="appointment booking"
                  className="scroll-smooth transition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Chat with Saloon
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Get instant support and answers to your questions.
              </p>
            </div>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Offer}
                  alt="appointment booking"
                  className="scroll-smooth trasnition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Offer Notifications
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Receive updates on special promotions and discounts.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
            data-aos="zoom-in"
              src={ServicesImg}
              alt="services image"
              className="scroll-smooth trasnition-all duration-700 ease-in-out h-full w-full"
            />
          </div>
          <div className="grid grid-cols-1 px-5 md:pr-10">
            <h2 className="font-sans text-2xl font-bold capitalize text-black md:text-left text-center">
              Barber Services
            </h2>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Register}
                  alt="appointment booking"
                  className="scroll-smooth trasnition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Register Your Saloon
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Create a profile and showcase your salon to potential customers.
              </p>
            </div>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Staff}
                  alt="appointment booking"
                  className="scroll-smooth trasnition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Manage Staff & Services
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Keep your team and service offerings up to date.
              </p>
            </div>
            <div className="gap-1 md:gap-3">
              <div className="flex gap-5 md:gap-10 items-center py-2.5">
                <img
                data-aos="zoom-in"
                  src={Control}
                  alt="appointment booking"
                  className="scroll-smooth trasnition-all duration-700 ease-in-out h-10 w-10"
                />
                <h2 className="font-sans font-medium text-lg md:text-2xl capitalize tracking-wide text-customRed">
                  Appointment Control
                </h2>
              </div>
              <p className="font-sans font-normal text-sm md:text-base normal-case text-Gray">
                Accept & declined appointments with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
