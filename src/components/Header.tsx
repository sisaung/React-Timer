import { useTimerContext } from "../store/timer-context";

import Button from "./ui/Button";

const Header = () => {
  const { isRunning, startTimer, stopTimer } = useTimerContext();

  const handleTimer = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-3xl font-serif">Timers</h1>
      <Button onClick={handleTimer}>
        {isRunning ? "Stop" : "Start"} Timer
      </Button>
    </div>
  );
};

export default Header;
