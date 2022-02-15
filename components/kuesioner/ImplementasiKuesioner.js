import React from "react";
import {
  HelpOutline,
  Add,
  Edit,
  Delete,
  KeyboardArrowDown,
} from "@material-ui/icons";
export default function ImplementasiKuesioner() {
  return (
    <div className="relative">
      <div className="border-t border-dashed border-gray-800 bg-gray-200 flex items-center font-nunito h-16">
        <div className="w-14 ml-2 mr-2" />
        <div className="w-96 mr-2 text-sm font-nunito font-semibold text-black">
          Perencanaan
        </div>
        <div className="mr-32 text-sm font-nunito font-semibold text-black">
          30%
        </div>
        <div className="font-nunito text-black text-sm align-bottom">
          <HelpOutline
            size="24px"
            className="inline-flex"
            htmlColor="#A8AEB8"
          />{" "}
          4 Pertanyaan
        </div>
        <div className="flex absolute right-1 mr-3">
          <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2 mr-3">
            <Add size="24px" htmlColor="#565656" />
          </div>
          <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2 mr-3">
            <Edit size="24px" htmlColor="#565656" />
          </div>
          <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2 mr-3">
            <Delete size="24px" htmlColor="#565656" />
          </div>
          <div className="hover:bg-gray-300 rounded-full cursor-pointer p-2 mr-3">
            <KeyboardArrowDown size="24px" htmlColor="#565656" />
          </div>
        </div>
      </div>
    </div>
  );
}
