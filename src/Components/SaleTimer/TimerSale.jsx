import { useState, useEffect } from "react";
import CounterStyle from "./CountdownTimer.module.scss";
const TimerSale = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  // console.log(timeLeft);

  return (
    <>
      <div className={CounterStyle.countdowncontainer}>
        {Object.entries(timeLeft)?.map(([unit, value]) => (
          <div key={unit} className={CounterStyle.countdownbox}>
            <div className={CounterStyle.countdownvalue}>
              {String(value).padStart(2, "0")}
            </div>
            <div className={CounterStyle.countdownvalue}>
              {unit === "days"
                ? "روزها"
                : unit === "hours"
                ? "ساعت"
                : unit === "minutes"
                ? "دقیقه"
                : "ثانیه"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimerSale;
