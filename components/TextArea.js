import React from "react";

export default function TextArea({ nameFormik,
  type = "text",
  onChange,
  labelText,
  placeholderText,
  valueData = "",
  name,
}) {
  return (
    <div>
      <label className="font-bold text-black text-sm">{labelText}</label>
      <textarea
        onChange={onChange}
        type={type}
        placeholder={placeholderText}
        name={name}
        value={valueData}
        className="w-full bg-gray-200 rounded-xl p-3 font-nunito focus:outline-none"
      />
    </div>
  );
}
