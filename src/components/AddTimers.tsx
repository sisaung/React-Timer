import { useRef } from "react";
import Form, { CustomFormHandle } from "./ui/Form";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useTimerContext } from "../store/timer-context";

const AddTimers = () => {
  const customForm = useRef<CustomFormHandle>(null);
  const { addTimer } = useTimerContext();

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; duration: string };
    customForm.current?.clear();
    if (extractedData.name !== "" && extractedData.duration !== "") {
      addTimer({ name: extractedData.name, duration: +extractedData.duration });
    }
  };
  return (
    <>
      <Form onSave={handleSave} ref={customForm} className="space-y-5">
        <Input label="Name" id="name" type="text" placeholder="Timer Name" />
        <Input
          label="Duration"
          id="duration"
          type="number"
          placeholder="Timer Duration : 10"
        />
        <Button> Add Timers </Button>
      </Form>
    </>
  );
};

export default AddTimers;
