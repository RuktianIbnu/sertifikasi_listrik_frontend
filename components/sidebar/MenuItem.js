import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.li`
  padding: 10px 0px 10px 22px;
  margin-bottom: 18px;
  cursor: pointer;
  font-weight: bold;
  background: ${(props) => (props.isActive ? "#FFCD05" : "")};
  border-radius: 10px;
  color: ${(props) => (props.isActive ? "#000" : "#FFF")};
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const MenuItem = ({ onClick, name, icon, text }) => {
  const router = useRouter();
  const [, path] = router.pathname.split("/");
  const isActive = path === name;
  return (
    <Wrapper onClick={onClick} isActive={isActive}>
      <IconWrapper>{icon}</IconWrapper>
      {text}
    </Wrapper>
  );
};

export default MenuItem;
