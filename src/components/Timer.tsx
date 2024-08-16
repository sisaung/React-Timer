import { useEffect, useRef, useState } from "react";
import { Timer as TimerType, useTimerContext } from "../store/timer-context";

type TimerProps = {
  timer: TimerType;
};
const Timer = ({ timer: { name, duration } }: TimerProps) => {
  const { isRunning } = useTimerContext();
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        if (remainingTime <= 0 && interval.current) {
          clearInterval(interval.current);
          setRemainingTime(0);
        } else {
          setRemainingTime((prev) => prev - 50);
        }
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <div className="col-span-1 bg-gray-400 p-5 rounded-lg flex flex-col gap-3 justify-between items-center ">
      <h2 className="text-white text-lg"> {name} </h2>
      <progress max={duration * 1000} value={remainingTime} />
      <p> {formattedRemainingTime} </p>
    </div>
  );
};

export default Timer;
