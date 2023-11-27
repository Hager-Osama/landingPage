import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Countdown = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedTime = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const total_hours = parseInt(Math.floor(total_minutes / 60));
    const days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <header className="text-center">
      <Container>
        <h1>New Version Coming Soon</h1>
        <div className="counter-down d-flex justify-content-center">
          <div >
            <div className="count"> <p>{days}</p></div>
            <h5>days</h5>
          </div>

          <div >
           <div className="count"> <p>{hours}</p></div>
            <h5>hours</h5>
          </div>

          <div >
            <div className="count"> <p>{minutes}</p></div>
            <h5>minutes</h5>
          </div>


          <div >
            <div className="count"><p>{seconds}</p></div>
            <h5>seconds</h5>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Countdown;