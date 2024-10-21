import React from "react";
import { Link } from "react-router-dom";
import InputForm from "./formComponents/InputForm";

export default function SignupForm() {
  return (
    <div className=" h-full md:h-[500px] flex flex-col justify-between">
      <h2 className=" font-bold text-3xl">Create your account</h2>
      <div className="flex flex-col items-end gap-4 mt-4 ">
        <InputForm
          type="email"
          placeholder="exemple@domain.com"
          label="Email address"
          error={"Please fill a valid email"}
        />
        <InputForm
          type="text"
          placeholder="Username"
          label="Username"
          error={"Username must be unique"}
        />
        <InputForm
          type="password"
          placeholder="Password"
          label="Password"
          error={"At least 8 characters"}
        />
        <InputForm
          type="password"
          placeholder="Password again"
          label="Password again"
          error={"Passwords must match"}
        />
      </div>
      <Link
        to="/update"
        className="bg-white  w-full px-4 py-4 mt-3 flex gap-4 justify-center items-center rounded-full font-bold text-[#1d9bf0]"
      >
        Continue
      </Link>
    </div>
  );
}
