import React from "react";

export default function Input({
  name,
  type = "text",
  onChange,
  labelText,
  placeholderText,
  valueData = "",
}) {
  return (
    <div>
      <label className="font-bold text-black text-sm">{labelText}</label>
      <input
        type={type}
        placeholder={placeholderText}
        name={name}
        className="w-full bg-gray-200 rounded-xl py-2 px-4 font-nunito focus:outline-none"
        onChange={onChange}
        value={valueData}
      />
    </div>
  );
}

module.propTypes = {
  type: "text",
};
