import React, { useState } from "react";
import styled from "styled-components";
import { Sort, Clear } from "@material-ui/icons";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
`;

const Input = styled.input`
  background: #f0f0f0;
  border-radius: 10px;
  padding: 6px 15px;
  flex-grow: 1;
  &:focus {
    outline: none;
  }
`;

const SortButton = styled.div`
  width: auto;
  background: #f0f0f0;
  padding: 6px 25px;
  border-radius: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
const SortDropdownMenu = styled.div`
  width: auto;
  max-width: 220px;
  border-radius: 10px;
`;
const DropdownItem = styled.a`
  display: block;
  padding: 8px 15px;
  color: #000;
  &:hover {
    cursor: pointer;
    background: #f0f0f0;
    text-decoration: none;
    color: #000;
  }
`;
export default function Search({
  placeholder = "Cari disini...",
  onChange,
  sortingArray = [],
  onClickSort,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  return (
    <div className="relative">
      <Wrapper>
        <Input onChange={onChange} placeholder={placeholder} />
        {/* <SortButton onClick={() => setIsExpanded(!isExpanded)}>
          <Sort className="mr-2" /> {selectedSort || "Sort"}
        </SortButton> */}
      </Wrapper>
      <SortDropdownMenu
        hidden={!isExpanded}
        className="absolute right-0 shadow z-0 top-16 bg-white py-2 text-sm font-normal"
      >
        {sortingArray.map((item, index) => (
          <DropdownItem
            onClick={() => {
              onClickSort(item.value);
              setSelectedSort(item.label);
              setIsExpanded(!isExpanded);
            }}
            key={index}
          >
            {item.label}
          </DropdownItem>
        ))}
      </SortDropdownMenu>
    </div>
  );
}
