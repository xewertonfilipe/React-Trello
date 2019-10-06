import React from 'react';
import PropType from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import * as S from './style';

function Button({ title, onClick, btnBig, ...rest }) {
  return (
    <S.Button onClick={onClick} type="button" {...rest} btnBig={btnBig}>
      <FaPlus size={10} color="#696a6c" />
      <S.Title>{title}</S.Title>
    </S.Button>
  );
}

Button.propTypes = {
  title: PropType.string.isRequired,
  onClick: PropType.func.isRequired,
  btnBig: PropType.bool
};

Button.defaultProps = {
  btnBig: false
};

export default Button;
