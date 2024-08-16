import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: never;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 rounded-lg bg-cyan-500 text-white"
      {...props}
    ></button>
  );
};

export default Button;
