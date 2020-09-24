import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  width: 60px;
  background: white;
  height: 60px;
  border-radius: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 1px #a5a2a2;
  border: 1px solid #efeaea;
  position: fixed;
  top: 40%;
  bottom: 50%;
  right: ${props => props.rightAligned ? '20px' : '0px'};
  left: ${props => props.rightAligned ? 'unset' : '20px'};
  cursor: pointer;
  :hover {
    background: #2c9bd099;
    color: white;
    box-shadow: none;
    animation: shake 0.7s;
  }
`;

const BtnIcon = styled.img`
  width: 30px;
`;

function IconBtn({icon, position='right', onClick, flip=false}) {
  const rightAligned = position === 'right'
  return(
    <Button rightAligned={rightAligned} onClick={() => onClick()} flip={flip}>
      <BtnIcon src={icon}/>
    </Button>
  )
}

export default IconBtn;