import { createContext, ReactNode, useContext, useReducer } from "react";

const TimerContext = createContext<TimerContextValue | null>(null);

type TimerContextProps = {
  children: ReactNode;
};

export type Timer = {
  name: string;
  duration: number;
};
type TimerContextValue = TimerState & {
  addTimer: (timer: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimerState = {
  isRunning: false,
  timers: [],
};

type ADD_TIMER = {
  type: "ADD_TIMER";
  payload: Timer;
};
type START_TIMER = {
  type: "START_TIMER";
};
type STOP_TIMER = {
  type: "STOP_TIMER";
};
type ActionProps = ADD_TIMER | START_TIMER | STOP_TIMER;
const timerReducer = (state: TimerState, action: ActionProps) => {
  switch (action.type) {
    case "START_TIMER": {
      return {
        ...state,
        isRunning: true,
      };
    }
    case "STOP_TIMER": {
      return {
        ...state,
        isRunning: false,
      };
    }
    case "ADD_TIMER": {
      return { ...state, timers: [...state.timers, action.payload] };
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};
const TimerContextProvider = ({ children }: TimerContextProps) => {
  const [timerState, dispatch] = useReducer(timerReducer, initialState);

  const ctx: TimerContextValue = {
    isRunning: timerState.isRunning,
    timers: timerState.timers,
    addTimer: (timerData: Timer) => {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer: () => {
      dispatch({ type: "START_TIMER" });
    },
    stopTimer: () => {
      dispatch({ type: "STOP_TIMER" });
    },
  };

  return <TimerContext.Provider value={ctx}>{children}</TimerContext.Provider>;
};

export default TimerContextProvider;

export const useTimerContext = () => {
  const ctx = useContext(TimerContext);

  if (ctx === null) {
    throw new Error(
      "useTimerContext must be used within a TimerContextProvider"
    );
  }

  return ctx;
};
