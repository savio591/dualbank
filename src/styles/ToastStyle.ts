import styled from "styled-components";

export const ToastStyle = styled.div`
  padding: 1rem;

  background: #e5e4e2;

  border: 1px solid #778899;
  box-sizing: border-box;
  border-radius: 5px;

  span {
    min-width: 344px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #778899;

  }
`;

export const ToastContainerStyle = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 8rem;
  right: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
