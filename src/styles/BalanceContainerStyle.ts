import styled from "styled-components";

export const BalanceContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px 20px;
  width: 100%;
  gap: 1rem;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    h2 {
      font-family: Raleway;
      font-style: normal;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: #172765;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      gap: 1rem;
    }
  }

  .card {
    display: flex;
    flex-direction: column;

    .updatedAtRow {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.625rem;
      padding: 0.5rem 1rem 1rem;

      h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        color: #172765;
      }
    }

  }
`;
