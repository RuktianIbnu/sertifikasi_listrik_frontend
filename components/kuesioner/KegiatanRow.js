import React from "react";
import styled from "styled-components";
import {
  Toc,
  Add,
  Edit,
  Delete,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";

const Row = styled.div``;

export default function KegiatanRow({ number, show, setShow }) {
  return (
    <Row className="relative">
      <div className="flex flex-row items-center h-16">
        <div className="w-14 mr-2 ml-2 text-sm font-nunito font-semibold text-black">
          {number}
        </div>
        <div className="w-96 mr-2 text-sm font-nunito font-semibold text-black">
          Intelijen Keimigrasian
        </div>
        <div className="mr-32 text-sm font-nunito font-semibold text-black">
          20%
        </div>

        <div className="font-nunito text-black text-sm align-bottom">
          <Toc size="24px" className="inline-flex" htmlColor="#A8AEB8" /> 1
          Output
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
          <div
            onClick={() => setShow(!show)}
            className="hover:bg-gray-300 rounded-full cursor-pointer p-2 mr-3"
          >
            {show ? (
              <KeyboardArrowUp size="24px" htmlColor="#565656" />
            ) : (
              <KeyboardArrowDown size="24px" htmlColor="#565656" />
            )}
          </div>
        </div>
      </div>
    </Row>
  );
}
