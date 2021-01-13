import React from 'react';
import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-width: 704px;
  margin: auto;
  padding: 0 23px;
`;

function Wrapper({children}){

  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper;