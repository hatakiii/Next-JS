import React from "react";

export const InputField = ({ label, value, onChange, error }) => {
  return (
    <div className="mb-4">
      {label} <br />
      <input
        className={`border bg-amber-400 rounded ${error ? "text-red-500" : ""}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};
