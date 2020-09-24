import React from 'react';
// import styled from 'styled-components'
// images
import EndIcon from '../assets/props/the-end.png';
import ShopIcon from '../assets/props/shops.png';
import EyosLogo from '../assets/eyos-logo.png';
// components
import IconBtn from '../components/IconBtn'

function page4({changePage, backPage}) {
  return(
    <div>
      <IconBtn position={'left'} icon={ShopIcon} onClick={backPage}/>
      <IconBtn icon={EndIcon} onClick={changePage}/>
      <header className="App-header">
        <img src={EyosLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default page4;