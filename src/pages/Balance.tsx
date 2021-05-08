import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TagsBar } from "../components/TagsBar";
import {
  BalancePageStyle,
  BalancePageStyleContainer,
} from "../styles/BalancePageStyle";
import { GlobalStyle } from "../styles/Global";

export function Balance() {
  return (
    <>
      <BalancePageStyle>
        <Header />
        <BalancePageStyleContainer>
          <Sidebar />
          <TagsBar />
        </BalancePageStyleContainer>
      </BalancePageStyle>
      <GlobalStyle />
    </>
  );
}
