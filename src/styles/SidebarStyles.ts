import styled from "styled-components";

export const SidebarStyles = styled.aside`
z-index: 2;
  display: flex;
  flex-direction: row;
  width: 2.875rem;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  flex-grow: 0;

  background: var(--barBackground);
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

  .buttons {
    height: 100%;
  }

  .sidebarArrow {
    position: absolute;
    right: -1.25rem;
    top: 30rem;
  }
`;
