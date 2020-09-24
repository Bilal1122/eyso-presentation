import React from 'react';
import EyosLogo from '../assets/eyos-logo.png';

import LeahIcon from '../assets/leah.png';
import JuliaIcon from '../assets/julia.png';
import AndreasIcon from '../assets/andreas.png';
import BilalIcon from '../assets/bilal.png';
import RajIcon from '../assets/raj.png';
import SurasakIcon from '../assets/surasak.png';
import ThangIcon from '../assets/thang.png';
import VisionIcon from '../assets/props/vision.png';

import IconBtn from '../components/IconBtn'

function Page1({changePage}) {
  return (
    <div>
      <IconBtn icon={VisionIcon} onClick={changePage}/>
      <header className="App-header">
        <img src={EyosLogo} className="App-logo" alt="logo" />
        <br/>
        <h4 style={{fontStyle: 'oblique',display:'flex', alignItems: 'center'}}>
          The Presenters
          <div style={{fontSize: '15px', marginTop: '2px', marginLeft: '5px', color: '#108CC9'}}> (just like avengers) </div>
        </h4>

        <div class='profiles-div'>
          <div>
            <img src={LeahIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Leah Mayes
              <br />
              <b> Position </b>
            </div>
          </div>
          <div>
            <img src={JuliaIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Julia Nagler
              <br />
              <b> Administration <br/>and Office MOM </b>
            </div>
          </div>
          <div>
            <img src={AndreasIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Andreas Sanusi
              <br/>
              <b> The Good-looking <br/>Program Manager</b>
            </div>
          </div>
          <div>
            <img src={BilalIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Bilal Tariq
              <br/>
              <b> Software Engineer <br />(The cool one) </b>
            </div>
          </div>
          <div>
            <img src={RajIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Dhanaraj Jayapalan
              <br/>
              <b> The Manager <br/> (For Product) </b>
            </div>
          </div>
          <div>
            <img src={SurasakIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Surasak Wattanayakorn
              <br/>
              <b> Country Manager <br/>of the party Land </b>
            </div>
          </div>
          <div>
            <img src={ThangIcon} style={{width: '100px'}} alt="logo" />
            <div class='presenter'>
              Thang Nguyen
              <br/>
              <b> Vietnam Ops Team <br/> (One Man Army) </b>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Page1;