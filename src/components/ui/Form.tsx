import {
  ComponentPropsWithRef,
  FormEvent,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";

type FormProps = {
  children: ReactNode;
  onSave: (value: unknown) => void;
} & ComponentPropsWithRef<"form">;

export type CustomFormHandle = {
  clear: () => void;
};

const Form = forwardRef<CustomFormHandle, FormProps>(
  ({ children, onSave, ...props }, ref) => {
    const formRef = useRef<HTMLFormElement | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          clear() {
            formRef.current?.reset();
          },
        };
      },
      []
    );

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData);
      onSave(data);
    };

    return (
      <form onSubmit={handleSubmit} {...props} ref={formRef}>
        {children}
      </form>
    );
  }
);

export default Form;
