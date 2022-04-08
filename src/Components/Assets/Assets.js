import React from 'react';
import './style.css';
import SideBar from '../Authentication/Dashboard/SideBar';
import Header from '../Header/Header';
import AssetForm from './AssetForm';
import logo from '../../Icons/Group 1604.svg';

function Assets() {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="temp">
        <h1>
          <Header />
        </h1>
      </div>
      <div className="container-2">
        <div className="grid-container">
          <div className="grid-item">
            <div className="icons">
              <img src={logo} alt="oops" className="logo-1" />
            </div>
          </div>
          <div className="grid-item">
            <div className="icons">
              <img src={logo} alt="oops" className="logo-1" />
            </div>
          </div>
          <div className="grid-item">
            <div className="icons">
              <img src={logo} alt="oops" className="logo-1" />
            </div>
          </div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>
        <div>
          <div className="form-info">
            <AssetForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
