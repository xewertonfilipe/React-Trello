import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border: 1px dashed #707070;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: ${props => (!props.btnBig ? '44px' : '66px')};
  padding: 10px;
  cursor: pointer;
`;

export const Title = styled.span`
  margin-left: 5px;
  color: #707070;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 13px;
`;
