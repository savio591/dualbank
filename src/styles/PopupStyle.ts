import styled from "styled-components";

export const PopupStyle = styled.div`
  position: relative;

  .popupText {
    transition: 0.2s;
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: center;
    justify-items: center;

    visibility: hidden;
    opacity: 0;
    background-color: #fff;
    border-radius: 6px;
    padding: 4px 8px;
    position: absolute;
    z-index: 1;
    bottom: 109%;
    left: 50%;
    margin-left: -2rem;
    gap: 0.25rem;

    span {
      font-style: normal;
      font-weight: normal;
      font-size: 0.75rem;
      line-height: 14px;

      color: #172765;
    }

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
  }

  & .popupText::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 1rem;
    border-width: 5px;
    border-style: solid;
    border-color: var(--shape) transparent transparent transparent;
  }

  &:hover .popupText {
    visibility: visible;
    opacity: 1;
  }
`;
