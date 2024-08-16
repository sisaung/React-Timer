import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3">
        <label
          className="text-lg font-mono text-gray-600 uppercase"
          htmlFor={id}
        >
          {label}
        </label>
        <input
          className="px-6 py-3 rounded-lg ps-5 outline-cyan-500 border border-gray-300 "
          id={id}
          name={id}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
