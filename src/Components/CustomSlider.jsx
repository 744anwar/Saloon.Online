
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; 

const images = [
  { src: "src/assets/started.png", alt: "slider image 1" },
  { src: "src/assets/customer.png", alt: "slider image 2" },
  { src: "src/assets/signup.png", alt: "slider image 3" },
  { src: "src/assets/signup2.png", alt: "slider image 4" },
  { src: "src/assets/signup3.png", alt: "slider image 5" },
  { src: "src/assets/signup4.png", alt: "slider image 6" },
  { src: "src/assets/signup5.jpg", alt: "slider image 7" },
];

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [ autoplay, setAutoplay ] = useState(true);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3); 
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) =>
      prev + 1 >= images.length - slidesPerView ? 0 : prev + 1 
      //prev + 1 < images.length - slidesPerView ? prev + 1 : prev
    );
  }, [slidesPerView]);
  
  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - slidesPerView : prev - 1
      //prev === 0 ? 0 : prev - 1
    );
  }, [slidesPerView]);

  // Autoplay effect
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); 
      return () => clearInterval(interval); 
    }
  }, [autoplay, handleNext]);

  return (
    <>
    <div className="w-full flex flex-col items-center">
      <div className="flex overflow-hidden w-full max-w-6xl" 
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
            width: `${100 * images.length / slidesPerView}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full p-2"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[500px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="relative flex justify-between w-full max-w-6xl mt-4">
        <button
          onClick={handlePrev}
          className="hidden lg:block p-3 absolute left-5 -top-[300px] border-2 bg-white border-customRed rounded cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-customRed" />
        </button>
        <button
          onClick={handleNext}
          className="hidden lg:block p-3 absolute right-5 -top-[300px] border-2 bg-white border-customRed rounded cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-customRed" />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-2 md:mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-customRed" : "bg-Gray"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
};

export default CustomSlider;


//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}