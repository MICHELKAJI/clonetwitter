import React from "react";
import ErrorMessage from "./ErrorMessage";

export default function InputForm({ type, placeholder, label, error }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className="peer m-0 block h-[58px] w-full rounded border border-solid border-white bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-white transition duration-200 ease-linear placeholder:text-transparent focus:border-[#1d9bf0] focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-primary dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
        placeholder={placeholder}
      />
      <label className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
        {label}
      </label>
      <ErrorMessage message={error} />
    </div>
  );
}
