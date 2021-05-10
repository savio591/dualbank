import React from "react";
import { BalanceContainer } from "../components/BalanceContainer";
import { DownloadContainer } from "../components/DownloadContainer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TagsBar } from "../components/TagsBar";
import { Toast } from "../components/Toast";
import { ToastProvider } from "../services/toastService";
import {
  BalancePageStyle,
  BalancePageStyleContainer,
} from "../styles/BalancePageStyle";
import { GlobalStyle } from "../styles/Global";

export function Balance() {
  return (
    <ToastProvider>
      <BalancePageStyle>
        <Header />
        <BalancePageStyleContainer>
          <Sidebar />
          <div className="columnContainer">
            <TagsBar />
            <BalanceContainer />
            <DownloadContainer />
          </div>
        </BalancePageStyleContainer>
      </BalancePageStyle>
      <GlobalStyle />
    </ToastProvider>
  );
}
