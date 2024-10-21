import React from "react";
import ErrorMessage from "./ErrorMessage";

export default function SelectInput({ label, dataArray, error }) {
  return (
    <div className="relative w-full mb-4">
      <select className="bg-black py-4 border-2 border-solid border-white text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected disabled>
          {label}
        </option>
        {dataArray.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
      <ErrorMessage message={error} />
    </div>
  );
}
