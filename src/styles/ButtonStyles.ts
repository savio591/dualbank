import styled from "styled-components";

export const ButtonStyles = styled.button`
  border: transparent;
  background: transparent;

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

    &.selected {
      background: var(--purple);
      img {
        filter: brightness(100);
      }
    }
    &:hover {
      background: linear-gradient(89.96deg, #622ee5 0.06%, #172765 99.94%);

      img {
        filter: brightness(100);
      }
    }

    &:active {
      filter: contrast(1.25);
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
`;
