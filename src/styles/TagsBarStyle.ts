import styled from "styled-components";

export const TagsBarStyle = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: row;
  background: var(--barBackground);
  box-shadow: var(--boxShadow-bottonOnly);
  height: 2.75rem;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.25rem;
  width: 100%;

  button {
    border: transparent;
    background: transparent;
    position: relative;
    z-index: 100;
  }

  .tagsButtons {
    display: flex;
    z-index: 0;
    gap: 1.25rem;
    position: relative;
    button {
      z-index: 0;
      display: flex;
      background: linear-gradient(135deg, #ffffff 0%, #e5e4e2 100%);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;

      transition: 0.2s;

      :hover {
        background: linear-gradient(135deg, #ffffff 0%, #c6c6c6 100%);
        transition: 0.2s;
      }
    }
  }

  .newTagContainer {
    visibility: visible;
    opacity: 1;
    z-index: 100;
    padding: 1rem 2rem;
    position: absolute;
    width: 280px;
    left: 4rem;
    top: 7.25rem;
    gap: 20px;

    background: linear-gradient(89.96deg, #f9f9f9 0.06%, #e5e4e2 99.94%);
    /* Dropdown Drop shadow */

    box-shadow: 0px 2px 20px rgba(44, 74, 125, 0.217548);
    border-radius: 0px 0px 5px 5px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    transition: opacity .2s ease-in-out;

    &.hidden {
      visibility: collapse;
      opacity: 0;
      transition: opacity .2s;

    }

    section {
      display: flex;
      flex-direction: column;
      gap: 0.475rem;
      h1 {
        font-family: Raleway;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;

        /* Dark blue - Primary Variant color */

        color: #172765;
      }

      p {
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        display: flex;
        align-items: center;

        /* Icon & Text color */

        color: #172765;

        span {
          font-family: Lato;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          /* identical to box height */

          display: flex;
          align-items: center;

          /* Positive */

          color: #69d531;
        }
      }
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;

    li {
      display: flex;
      flex-direction: row;

      .iconGradient {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        p {
          font-family: Raleway;
          font-style: normal;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1rem;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
        }
      }

      div + div {
        display: flex;
        flex-direction: column;
        margin: 0px 0.625rem;

        div {
          display: flex;
          flex-direction: row;

          h2 {
            font-style: normal;
            font-weight: normal;
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: var(--blue);
            flex: none;
            order: 0;
            flex-grow: 0;
          }

          button {
            margin-left: 0.625rem;
          }
        }

        span {
          font-style: normal;
          font-weight: 600;
          font-size: 0.875rem;
          line-height: 1.0625rem;
          display: flex;
          align-items: flex-end;
          color: var(--cashAvailable);
        }
      }
    }
  }
`;
