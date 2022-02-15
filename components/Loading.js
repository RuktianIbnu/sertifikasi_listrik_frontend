import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="text-center fixed bg-gray-800 opacity-80 w-screen h-screen mx-auto z-10">
      <ReactLoading
        className="absolute left-40 top-2/4 md:left-2/4"
        type="spin"
        color="#DBEAFE"
        height={75}
        width={75}
      />
    </div>
  );
}
