import React from "react";
import { Header } from "../components/Header";
import { TagsBar } from "../components/TagsBar"
import { GlobalStyle } from "../styles/Global";


export function Dashboard() {
  return (
    <>
      <Header />
      <TagsBar />
      <GlobalStyle />
    </>
  );
}
