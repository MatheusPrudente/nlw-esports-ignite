import { InputHTMLAttributes } from "react";

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
  placeholder : string;
}

export function Input(props: InputPros) {
  return (
    <input
      {...props}
      className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
      placeholder={props.placeholder}
    />
  );
}
