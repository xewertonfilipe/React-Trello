import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  height: 100%;
  flex: 0 0 320px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      border: 0px;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 20px;
  }
`;
