import React from "react";

export default function Button({
  buttonText,
  buttonColor,
  buttonTextColor,
  fontSize = 14,
  ...props
}) {
  return (
    <div {...props}>
      <div
        style={{
          background: buttonColor,
          color: buttonTextColor,
          fontSize: fontSize,
        }}
        className="py-2 w-full bg-blue-200 rounded-xl text-center text-white font-bold"
      >
        {buttonText}
      </div>
    </div>
  );
}
