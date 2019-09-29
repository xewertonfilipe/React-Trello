import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px, solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 30px;
  }

  span {
    margin-top: 1px;
    font-size: 10px;
    padding: 5px;
    background: #f5f5f5;
  }

  img {
    float: right;
    width: 24px;
    height: 24px;
    border-radius: 100px;
  }

  ${props =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 11px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      span,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  display: inline-block;
  background: ${props => props.color};
`;
