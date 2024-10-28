import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Counter = ({ title, toValue, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const incrementTime = duration / toValue;
    const interval = setInterval(() => {
      setCount((preCount) => {
        const nextCount = preCount + 1;
        if (nextCount >= toValue) {
          clearInterval(interval);
          return toValue;
        }
        return nextCount;
      });
    }, incrementTime);
    return () => clearInterval(interval);
  }, [toValue]);

  return (
    <div className="gap-0 py-10 align-baseline ">
      <span className="font-sans font-medium text-xl md:text-4xl text-customRed gap-0">
        {count}
      </span>
      <span className="font-sans font-medium text-xl md:text-4xl text-customRed">
        {suffix}
      </span>
      <span className="font-sans font-medium text-base md:text-lg text-Gray">
        {title}
      </span>
    </div>
  );
};

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  toValue: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};

const Counters = () => {
  return (
    <div className="px-2 md:px-20 py-2 md:py-5 grid grid-cols-2 md:grid-cols-4 justify-items-start md:justify-items-center gap-0 md:w-full h-20 md:h-40">
      <Counter title="Users" suffix="+" toValue={1265} />
      <Counter title="Downloads" suffix="+" toValue={1000} />
      <Counter title="Likes" suffix="+" toValue={508} />
      <Counter title="5 Star Rating" suffix="+" toValue={809} />
    </div>
  );
};

export default Counters;
