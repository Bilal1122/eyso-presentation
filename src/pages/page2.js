import React from 'react';
import styled from 'styled-components'
// images
import ProfileIcon from '../assets/props/profiles.png';
import ShopIcon from '../assets/props/shops.png';
import EyosLogo from '../assets/eyos-logo.png';
import BadgeIcon from '../assets/badge.png';
// flag
import VietnamFlag from '../assets/flags/vietnam.png';
import UKFlag from '../assets/flags/united-kingdom.png';
import ThailandFlag from '../assets/flags/thailand.png';
import SingaporeFlag from '../assets/flags/singapore.png';
import IndonesiaFlag from '../assets/flags/indonesia.png';
import AustraliaFlag from '../assets/flags/australia.png';

// components
import IconBtn from '../components/IconBtn'
// data
import { EyosVision } from '../data';

const FlexDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
`;
const Content = styled.div`
  text-align: left;
  font-size: 20px;
  width: 50%;
  border-radius: 10px;
  padding: 10px 15px;
  box-shadow: 0 1px 7px 0 #d4d4d5, 0 0 0;
  margin-right: 20px;
  animation: shake 0.8s;
`;

function page2({changePage, backPage}) {
  return(
    <div>
      <IconBtn position={'left'} icon={ProfileIcon} onClick={backPage}/>
      <IconBtn icon={ShopIcon} onClick={changePage}/>
      <header className="App-header">
        <img src={EyosLogo} className="App-logo" alt="logo" />
        <br/>
        <FlexDiv>
          <Content>
            <b> EYOS Culture Vission </b>
            <br/>
            <br/>
            {
              EyosVision.vision.map((point) => (
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                  <div style={{marginRight: '10px', position: 'relative',top: '2px'}}> 
                    <img src={BadgeIcon} alt="val1" style={{width: '20px'}} />
                  </div>
                  <div style={{fontStyle: 'oblique'}}> {point} </div>
                </div>
              ))
            }
          </Content>
          <Content>
            <b> Bring Everyone Together </b>
            <br />
            {
              [SingaporeFlag, IndonesiaFlag, UKFlag, ThailandFlag, VietnamFlag, AustraliaFlag].map((flag) => (
                <img src={flag} alt="val1" style={{width: '30px', marginRight: '5px', marginTop: '10px', marginBottom: '-10px'}} />
              ))
            }
            
            <br/>
            <br/>
            {
              EyosVision.bringTogether.map((point) => (
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                  <div style={{marginRight: '10px', position: 'relative',top: '2px'}}> 
                    <img src={BadgeIcon} alt="val1" style={{width: '20px'}} />
                  </div>
                  <div style={{fontStyle: 'oblique'}}> {point} </div>
                </div>
              ))
            }
          </Content>
        </FlexDiv>
      </header>
    </div>
  )
}

export default page2;