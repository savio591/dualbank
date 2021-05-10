import styled from "styled-components";

export const DownloadContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  gap: 0.625rem;
  padding: 1.5rem 2.25rem;
  position: relative;

  span,
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    color: #172765;
  }

  div.status {
    display: flex;
    flex-direction: row;
    gap: 0.625rem;
    align-items: center;
    padding-right: 0.625rem;
    border-right: 1px solid var(--divider);
  }

  p.filename {
    line-height: 16px;
    font-weight: 600;
  }

  .cancel {
    position: absolute;
    right: 1.5rem;
  }
`;
