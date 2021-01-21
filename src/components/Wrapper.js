import React from 'react';
import styled from 'styled-components'

const WrapperStyled = styled.div`
  max-width: 704px;
  margin: auto;
  padding: 0 2em;
  @media (min-width:770px){
    padding: 0;
  }
`;

function Wrapper({children}){

  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper;