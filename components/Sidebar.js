import React from "react";
import styled from "styled-components";
import { MdHome, MdToday, MdPeople, MdPowerSettingsNew, MdImportContacts } from "react-icons/md";
import Router from "next/router";
import MenuItem from "./sidebar/MenuItem";
import { Description } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../store/actionCreator";

const Wrapper = styled.div`
  width: 15%;
  background: #007175;
  color: #fff;
`;
const MenuWrapper = styled.ul`
  padding: 0px 15px;
`;
const Spacer = styled.div`
  width: auto;
`;

export default function Sidebar() {
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(setAccessToken(null));
    dispatch(setUser(null));
    Router.replace("/");
  };
  return (
    <Wrapper className="flex-shrink-0 h-full overflow-y-auto">
      <img
        className="p-4"
      />
      <h4 className="text-5xl font-bold text-center mb-36 text-yellow-300">LISTRIK</h4>
      <MenuWrapper className="flex flex-col">
        <MenuItem
          text="Dashboard"
          icon={<MdHome size="24px" className="inline-flex mr-3" />}
          name="dashboard"
          onClick={() => Router.push("/dashboard")}
        />
        <MenuItem
          text="Master"
          icon={<Description size="24px" className="inline-flex mr-3" />}
          name="master"
          onClick={() => Router.push("/master")}
        />
        <MenuItem
          text="Transaksi"
          icon={<MdPeople size="24px" className="inline-flex mr-3" />}
          name="transaksi"
          onClick={() => Router.push("/transaksi")}
        />
        <MenuItem
          text="Keluar"
          icon={<MdPowerSettingsNew size="24px" className="inline-flex mr-3" />}
          name="report"
          onClick={doLogout}
        />
      </MenuWrapper>
    </Wrapper>
  );
}
