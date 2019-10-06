import styled from 'styled-components';

export const Container = styled.div`
  & + div {
    margin: 0 5px;
  }

  .content-list {
    padding: 18px;
    overflow-y: auto;
    max-height: 90%;
  }

  margin-right: 5px;
  flex: 0 0 320px;
  background: #f4f5f7;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    background: #e5e7ec;

    h2 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      padding: 10px 10px;
    }

    button {
      padding: 10px;
      border: 0px;
      cursor: pointer;
      background: #e5e7ec;
    }
  }
`;
