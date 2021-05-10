import styled from "styled-components";

export const BalancePageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
`;

export const BalancePageStyleContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;

  .columnContainer {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;
