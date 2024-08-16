import AddTimers from "./components/AddTimers";
import Header from "./components/Header";
import Timers from "./components/Timers";
import TimerContextProvider from "./store/timer-context";

const App = () => {
  return (
    <TimerContextProvider>
      <div className="max-w-lg mx-auto flex flex-col mt-10  justify-center">
        <div className="bg-gray-100 shadow-lg p-10 rounded-lg space-y-10">
          <Header />
          <AddTimers />
          <Timers />
        </div>
      </div>
    </TimerContextProvider>
  );
};

export default App;
