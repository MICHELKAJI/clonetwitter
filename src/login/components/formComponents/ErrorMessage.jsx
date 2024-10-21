import React from "react";

export default function ErrorMessage({ message }) {
  return <span className="text-xs text-red-600">{message}</span>;
}
