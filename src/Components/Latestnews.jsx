import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import News1 from '../assets/news1.png'
import News2 from '../assets/news2.png'
import News3 from '../assets/news1.png'

const NewsCard = ({ title, date, description, additionalContent, imgSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <img
      data-aos="zoom-in"
        src={imgSrc}
        alt="image is loading ..."
        className="scroll-smooth trasnition-all duration-700 ease-in-out w-full h-[300px] object-cover rounded-t-3xl"
      />
      <h2 className="font-sans font-semibold text-2xl normal-case text-customRed py-2.5">
        {title}
      </h2>
      <p className="font-sans font-normal text-sm text-Gray py-1">{date} </p>
      <p className="font-sans font-normal text-base text-Gray py-2 text-justify">
        {description}
      </p>

      {isExpanded && (
        <p className="font-sans font-normal text-base text-Gray py-2 text-justify"> {additionalContent} </p>
      )}
      <button className="font-sans font-normal text-lg text-customRed" onClick={toggleContent}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

function Latestnews() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    })
  }, []);
  const NewsItem = [
    {
      title: "Free for Barbers: First Month on Us!",
      date: "October 10, 2024 // No Comments",
      description: `Great news for barbers! We’re offering a special promotion: your first month on Saloon.online is completely free.`,
      additionalContent:'This is a fantastic opportunity to explore our platform, register your salon, and start managing your appointments without any initial costs. Sign up today and enjoy the benefits of Saloon.online from August 1, 2024.',
      imgSrc: News1,
    },
    {
      title: "New Feature Updates Coming Soon!",
      date: "October 10, 2024 // No Comments",
      description: `Stay tuned for exciting new features coming to Saloon.online! We’re continuously working to improve your experience.`,
      additionalContent:'Our upcoming update will include enhanced appointment management tools, new customization options for barber profiles, and improved user interface for seamless navigation. Keep an eye out for the update, launching on August 1, 2024.',
      imgSrc: News2,
    },
    {
      title: "Exciting Offer: Book 10 Appointments, Get 1 Free",
      date: "October 10, 2024 // No Comments",
      description: `We’re thrilled to announce a special offer for our loyal customers! If you book 10 appointments within 20 days, your next appointment will be absolutely free.`,
      additionalContent:'This is our way of saying thank you for choosing Saloon.online. Start booking now and take advantage of this limited-time offer!',
      imgSrc: News3,
    },
  ];
  return (
    <>
      <section
        id="latest-news"
        className="w-full h-full grid justify-start items-start py-5"
      >
        <h1 className="font-sans text-center text-3xl font-bold text-customRed normal-case m-0 py-10">
          Get Latest News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {NewsItem.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalContent: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default Latestnews;
