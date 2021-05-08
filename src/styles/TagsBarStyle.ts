import styled from "styled-components";

export const TagsBarStyle = styled.div`
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
  }

  .tagsButtons {
    display: flex;
    button {
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
    button + button {
      margin-left: 1.25rem;
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
