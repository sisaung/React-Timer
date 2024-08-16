import { useTimerContext } from "../store/timer-context";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimerContext();
  console.log(timers);

  return (
    <div className="grid grid-cols-2 gap-3">
      {timers.map((t, index) => (
        <Timer key={index} timer={t} />
      ))}
    </div>
  );
};

export default Timers;
