import styled from "styled-components";

export const ButtonStyles = styled.button`
  border: transparent;
  background: transparent;
  position: relative;

  &.sidebar {
    width: 2.25rem;
    height: 2.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    position: static;
    width: 2.875rem;
    height: 3rem;
    left: 0;

    top: 0;

    background: var(--barBackground);

    span {
      height: 0.25rem;
      width: 100%;
      background: var(--barBackground);

      overflow: hidden;

      &:first-of-type {
        border-radius: 0 0 1rem;
      }

      &:last-of-type {
        border-radius: 0 1rem 0 0;
      }
    }

    &:active {
      filter: contrast(1.25);
    }

    &:hover {
      background: linear-gradient(95.85deg, #f9f9f9 0%, #e5e4e2 100%);

      &:active {
        background: linear-gradient(95.85deg, #f9f9f9 10%, #c5c4c2 100%);
      }
    }

    &.selected {
      background: var(--purple);

      img {
        filter: brightness(100);
      }

      &:hover {
        background: linear-gradient(89.96deg, #622ee5 0.06%, #172765 99.94%);

        img {
          filter: brightness(100);
        }

        &:active {
          background: linear-gradient(89.96deg, #622ee5 0.06%, #071755 100%);
        }
      }
    }

    &[disabled] {
      &:hover {
        background: transparent;

        img {
          filter: brightness(1);
        }

        &:active {
          filter: contrast(1);
        }
      }
    }
  }

  &.sidebarArrow {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--purple);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 1.25rem;
    transition: filter 0.1s;

    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      filter: brightness(0.75);
    }
  }

  &.balanceOpts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;

    border: 1px solid #622ee5;
    box-sizing: border-box;
    border-radius: 5px;

    &:hover {
      background: linear-gradient(270deg, #622ee5 0%, #a683ff 100%);
      border: transparent;
      img {
        filter: brightness(100);
      }
    }

    &:active {
      filter: brightness(0.9);
    }
  }

  &.balanceOptsWithDropdown {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;

    border: 1px solid #622ee5;
    box-sizing: border-box;
    border-radius: 5px;

    &:hover {
      background: linear-gradient(270deg, #5127bb 0%, #a683ff 100%);
      border: transparent;
      img {
        filter: brightness(100);
      }
    }

    &:active {
      &::only-of-type {
        background: linear-gradient(270deg, #622ee5 0%, #a683ff 100%);
        border: transparent;
      }
    }

    &::only-child {
      filter: brightness(0.9);
    }

    &:focus {
      ul {
        visibility: visible;
        opacity: 1;
      }
    }
  }

  &.balanceDate {
    width: 280px;
    padding: 0.25rem 1rem;
    background: var(--barBackground);
    border: 0.5px solid #e5e4e2;
    border-bottom: 1px solid #622ee5;
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #622ee5;
      }

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: flex-end;
        color: #172765;
      }
    }
  }

  &.balanceAvailable {
    width: 280px;
    padding: 0.25rem 1rem;
    background: var(--barBackground);
    border: 0.5px solid #e5e4e2;
    border-bottom: 1px solid #622ee5;
    box-sizing: border-box;
    border-radius: 5px 5px 0px 0px;
    cursor: default;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
      flex-grow: 1;

      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        color: #778899;
      }

      span {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: flex-end;
        color: var(--cashAvailable);
      }
    }
  }
  &.refresh {
    button {
      background: transparent;
      border: transparent;
    }
  }

  &.eye {
    border: transparent;
    background: transparent;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.eyeBig {
    padding: 0.25rem;
    border: transparent;
    background: transparent;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &.cancel {
  }

  &.boxWithText {
    padding: 0.75rem 1.75rem;
    background: #622ee5;
    border-radius: 5px;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;

    &:hover {
      filter: brightness(0.95);

      &:active {
        filter: brightness(0.9);
      }
    }
  }

  &.accountsButton {
    display: flex;
    width: 9rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.1875rem; /* 19px */
    display: flex;
    align-items: center;
    color: var(--blue-dark);
    background: transparent;
    border: none;
    flex-grow: 0;

    img {
      margin-left: 0.625rem;
      transform: rotate(0deg);
      transition: transform 0.2s;
    }

    &:hover {
      background: #fafafa;
    }

    &:focus {
      img {
        transform: rotate(180deg);
      }
    }
  }
`;
