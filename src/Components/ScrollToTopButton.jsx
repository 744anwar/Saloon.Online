import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibililty = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibililty);
    return () => window.removeEventListener("scroll", toggleVisibililty);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-Gray hover:bg-customRed text-customRed hover:text-Gray p-2.5 w-16 h-16 rounded-full cursor-pointer flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faArrowUp} size="2xl" />
          </button>
        )}
      </div>
    </>
  );
};

export default ScrollToTopButton;
