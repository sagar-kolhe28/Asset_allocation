/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../../Icons/logo1.jpg';

function SideBar() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-align">
          <img src={logo} alt="oops" className="logo-1" />
        </div>
        <div className="list1">
          <Link to="#">
            {' '}
            <div className="text2"> Dashboard </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Pay</div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Reimbursement</div>
          </Link>
          <Link to="#" className="active">
            <div className="text">Assets</div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Leaves</div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Tax Declaration</div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Important Documents</div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">Pending Documents</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
