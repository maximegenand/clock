import { useEffect, useState } from "react";
import "./Clock.css";

export default function Clock({ size }) {
  const transformTime = (time) => {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const hour1 = Math.floor(hour / 10);
    const hour2 = hour % 10;
    const minute1 = Math.floor(minute / 10);
    const minute2 = minute % 10;
    const second1 = Math.floor(second / 10);
    const second2 = second % 10;
    return [hour1, hour2, minute1, minute2, second1, second2];
  };

  const [now, setNow] = useState(transformTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(transformTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const digit = (
    <div className="clock" style={{ "--size": size + "px" }}>
      {Number({ value: now[0] })}
      {Number({ value: now[1] })}
      {Colon()}
      {Number({ value: now[2] })}
      {Number({ value: now[3] })}
      {Colon()}
      {Number({ value: now[4] })}
      {Number({ value: now[5] })}
    </div>
  );
  return <>{digit}</>;
}

function Number({ value }) {
  const digits = [
    [1, 0, 1, 1, 1, 1, 1], // 0
    [0, 0, 0, 0, 0, 1, 1], // 1
    [1, 1, 1, 0, 1, 1, 0], // 2
    [1, 1, 1, 0, 0, 1, 1], // 3
    [0, 1, 0, 1, 0, 1, 1], // 4
    [1, 1, 1, 1, 0, 0, 1], // 5
    [1, 1, 1, 1, 1, 0, 1], // 6
    [1, 0, 0, 0, 0, 1, 1], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1], // 9
  ];
  return (
    <div className="digit">
      <div className="digit-0" hidden={digits[value][0] === 0}></div>
      <div className="digit-1" hidden={digits[value][1] === 0}></div>
      <div className="digit-2" hidden={digits[value][2] === 0}></div>
      <div className="digit-3" hidden={digits[value][3] === 0}></div>
      <div className="digit-4" hidden={digits[value][4] === 0}></div>
      <div className="digit-5" hidden={digits[value][5] === 0}></div>
      <div className="digit-6" hidden={digits[value][6] === 0}></div>
    </div>
  );
}

function Colon() {
  return (
    <div className="colon">
      <div></div>
      <div></div>
    </div>
  );
}
