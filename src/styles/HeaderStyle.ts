import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem; /* 72px */
  width: 100%;
  background: var(--white);
  padding: 1.5rem 1.25rem 1.5rem 1rem;

  .logo {
    height: 1.5rem; /* 24px */

    img {
      padding-right: 0.375rem;
      border-right: 1px var(--divider) solid;
      display: block;
    }
  }

  .leftContent {
    display: flex;
    flex-direction: row;
    align-items: center;

    div + div {
      margin-left: 1.25rem;
    }

    .account {
      display: flex;
      flex-direction: column;

      button {
        display: flex;
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
        img {
          margin-left: 0.625rem;
        }
      }

      div {
        display: flex;
        flex-direction: row;

        h2 {
          font-style: normal;
          font-weight: normal;
          font-size: 0.75rem;
          line-height: 0.875rem;
          display: flex;
          align-items: center;
          color: var(--purple);
        }

        h2 + h2 {
          margin-left: 1rem;
        }
      }
    }

    .cash {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
      }

      button {
        margin-left: 0.625rem; /* 10px */
        background: transparent;
        border: none;
      }

      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 0.75rem;
        line-height: 0.875rem;
        display: flex;
        align-items: center;
        color: var(--blue-dark);
      }

      span {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        color: var(--cashAvailable);
      }
    }
  }

  .rightContent {
    display: flex;
    align-items: center;
    justify-content: center;

    .searchField {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;

      input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 6px 12px 8px 16px;
        border: 0.5px solid #778899;
        box-sizing: border-box;
        border-radius: 5px;

        &::placeholder {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: flex-end;
          color: #778899;
        }

        &:focus-visible {
          outline: transparent;
        }
      }
      button {
        position: absolute;
        right: 0;
        padding-right: 0.625rem;
        height: 100%;
      }
    }

    button {
      border: none;
      background: transparent;
      margin-left: 1rem;
    }

    button.profile {
      margin-left: 1rem;
      width: 3.125rem;
      height: 3.125rem;
      background: transparent;
      border: 1px black solid;
      border-radius: 50%;
    }
  }
`;
