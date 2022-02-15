import React from "react";
import { LayersClear } from "@material-ui/icons";
import styled from "styled-components";

const CardEmptyState = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 30px 46px 30px 46px;
`;

export default function EmptyState({ message }) {
  return (
    <CardEmptyState className="items-center justify-items-center justify-center text-center">
      <div className="py-20">
        <LayersClear htmlColor="#A8AEB8" style={{ fontSize: 100 }} />
        <h1
          className="font-bold text-black mt-2"
          style={{ color: "#A8AEB8", fontSize: 36 }}
        >
          {message}
        </h1>
      </div>
    </CardEmptyState>
  );
}
