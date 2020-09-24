import React, { useState } from 'react';
import styled from 'styled-components'
// images
import VisionIcon from '../assets/props/vision.png';
import RecieptIcon from '../assets/props/printer.png';
import EyosLogo from '../assets/eyos-logo.png';
import CartIcon from '../assets/add-to-cart.png';
import BadgeIcon from '../assets/badge.png';
// components
import IconBtn from '../components/IconBtn'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// data
import { ValuesData } from '../data'

const Card = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 0 1px 7px 0 #d4d4d5, 0 0 0;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  animation: ${props => `fadeIn ${props.index}s` };
  img {
    width: 130px;
    margin-right: 5px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #108CC9;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: normal;
  text-align: left;
  margin-top: 5px;
  width: 95%;
  overflow-x: scroll;
  height: 168px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
`;

const CartDiv = styled.div`
  right: -90px;
  position: relative;
  top: -11px;
  width: 50px;
  border-radius: 27px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${props => props.active && '#2c9bd099'};
  :hover {
    background: #2c9bd099;
  }
'`;

const AddToCart = styled.img`
  width: 35px !important;
  cursor: pointer;
`;

const AddBtn = styled.div`
  width: fit-content;
  float: right;
  background: #108CC9;
  color: white;
  border-radius: 4px;
  padding: 4px 20px;
  cursor: pointer;
  :hover {
    background: #2c9bd099;
  }
`;

function Page3({changePage, backPage}) {
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(false)
  const [selectionValue, setSelectedValue] = useState()

  const onSelection = (title) => {
    setOpen(false)
    setSelected(
      selected.concat(title)
    )
  }

  const onCartClick = (obj) => {
    setOpen(true)
    setSelectedValue(obj)
  }

  const createCard = (obj, index) => {
    const {title, icon, description} = obj;
    return(
      <Card index={index + 1}>
        <div>
          <Title> {title} </Title>
          <Description>
            {description}
          </Description>
        </div>
        <div>
          <CartDiv active={selected.includes(title)} onClick={() => onCartClick(obj)} data-target="#myModal"> <AddToCart src={CartIcon}/> </CartDiv>
          <img src={icon} alt="val1" style={{transform: title === 'Taking Perspectives' && 'scaleX(-1)'}} />
        </div>
      </Card>
    )
  }

  return(
    <div>
      <IconBtn position={'left'} icon={VisionIcon} onClick={backPage} flip={true}/>
      <IconBtn icon={RecieptIcon} onClick={changePage}/>
      <header className="App-header">
        <br />
        <img src={EyosLogo} className="App-logo" alt="logo" style={{width: '100px'}} />
        <h4 style={{fontStyle: 'oblique',display:'flex', alignItems: 'center'}}>
          Buy The Best Values Available
        </h4>
        <FlexDiv>
          {createCard(ValuesData[0], 0)}
          {createCard(ValuesData[1], 1)}
        </FlexDiv>
        <br />
        <FlexDiv>
          {createCard(ValuesData[2], 2)}
          {createCard(ValuesData[3], 3)}
        </FlexDiv>
        <br />
        {createCard(ValuesData[4], 4)}
        <br />
        <br />
      </header>
      
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={'sm'}
        fullWidth={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"><b>{selectionValue?.title}</b> Includes:</DialogTitle>
        <DialogContent>
          <img
            src={selectionValue?.icon}
            alt="val1"
            style={{transform: selectionValue?.title === 'Taking Perspectives' && 'scaleX(-1)', width: '100px', margin: 'auto',display: 'flex'}}
          />
          <br />
          <br />
          {
            selectionValue?.features.map((feature) => (
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                <div style={{marginRight: '10px'}}> 
                  <img src={BadgeIcon} alt="val1" style={{width: '20px'}} />
                </div>
                <div style={{fontStyle: 'oblique'}}> {feature} </div>
              </div>
            ))
          }
          <AddBtn onClick={() => onSelection(selectionValue?.title)}> Add </AddBtn>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Page3;


           

