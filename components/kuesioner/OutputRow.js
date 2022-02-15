import React from "react";
import {
  Assignment,
  Add,
  Edit,
  Delete,
  KeyboardArrowDown,
} from "@material-ui/icons";
export default function OutputRow() {
  return (
    <div className="relative">
      <div className="border-t border-gray-800 bg-gray-100 flex items-center font-nunito h-16">
        <div className="w-14 mr-2 ml-2" />
        <div className="w-96 mr-2 text-sm font-nunito font-semibold text-black">
          Operasi intelijen
        </div>
        <div className="mr-32 text-sm font-nunito font-semibold text-black">
          10%
        </div>
        <div className="font-nunito text-black text-sm align-bottom">
          <Assignment size="24px" className="inline-flex" htmlColor="#A8AEB8" />{" "}
          3 Implementasi
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
