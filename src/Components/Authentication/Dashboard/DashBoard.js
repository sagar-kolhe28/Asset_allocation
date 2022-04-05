/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../../Icons/logo1.jpg';

function DashBoard() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-align">
          <img src={logo} alt="oops" className="logo-1" />
        </div>
        <Link to="#" className="active">
          Dashboard
        </Link>
        <Link to="#">Pay</Link>
        <Link to="#">Reimbursement</Link>
        <Link to="#">Assets</Link>
        <Link to="#">Leaves</Link>
        <Link to="#">Tax Declaration</Link>
        <Link to="#">Important Documents</Link>
        <Link to="#">Pending Documents</Link>
      </div>

      <div className="content">
        <h1>Sagar</h1>
      </div>
    </div>
  );
}

export default DashBoard;
