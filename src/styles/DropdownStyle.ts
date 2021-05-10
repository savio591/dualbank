import styled from "styled-components";

export const DropdownOptionsStyle = styled.ul`
  z-index: 10;
  position: absolute;
  width: 163px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: -1px;
  left: -1px;

  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
  border-radius: 5px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;

  & li {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #172765;
    list-style: none;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    transition: background 0.2s;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

export const DropdownAccountsStyle = styled.ul`
  position: absolute;
  z-index: 10;
  width: 276px;
  height: 239px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: 1.225rem;
  left: -1rem;

  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
  border-radius: 5px;

  transition: opacity 0.2s;
  overflow: hidden scroll;

  li {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem;

    &:hover {
      background: #f0f0f0;
    }

    h2 {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      color: #172765;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      span {
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Purple - Primary color */

        color: #622ee5;
      }
    }
  }
`;
