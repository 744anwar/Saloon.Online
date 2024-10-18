import { useRef, useState, useEffect } from "react";
import VideoPlay from "../assets/SaloonVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Technology from '../assets/logtech.png'


const SaloonVideo = () => {
  const VideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePause = () => {
    if (VideoRef.current) {
      if (isPlaying) {
        VideoRef.current.pause();
      } else {
        VideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:'ease-in-out',
      once:true,
    })
  })

  return (
    <>
      <div className="relative m-0 p-0 w-full h-[300px] pt-2.5">
        <video
          ref={VideoRef}
          src={VideoPlay}
          autoPlay
          muted
          loop
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-2.5 left-0 w-full h-[300px] bg-customRed opacity-30 p-2.5 flex items-center justify-center">
          <button
            onClick={handlePause}
            className="bg-customRed text-white px-4 py-2 rounded "
            title={isPlaying ? "Pause" : "Play"}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
          >
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faPlay}
              className="h-16 w-16 text-white"
            />
          </button>
        </div>
      </div>
      <div className="m-0 p-2.5 grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full h-[400px] md:h-[400px] ">
        <div data-aos="fade-right" className="scroll-smooth trasnition-all duration-700 ease-in-out w-full h-[200px] md:h-[300px] flex flex-col justify-center items-start p-5 md:p-20">
          <h2 className="font-sans text-customRed font-semibold text-xl pb-2.5">Designed & Developed on Latest Tech</h2>
          <p className="font-sans text-Gray font-normal text-base text-justify">
            Our Website & App is skillfully crafted using WordPress for
            versatile content management, .Net for robust backend functionality,
            .Net MAUI Hybrid for cross-platform app development, and enhanced
            with HTML, CSS, and JS for seamless user experience and
            interactivity.
          </p>
        </div>
        <div className=" w-full h-[300px] md:h-[300px] flex justify-center items-center">
          <img
          data-aos="fade-left"
            src={Technology}
            alt="Technology uses logo"
            className="scroll-smooth trasnition-all duration-700 ease-in-out w-full h-[200px] md:h-[250px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default SaloonVideo;
