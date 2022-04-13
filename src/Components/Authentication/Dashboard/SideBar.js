/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../../Icons/logo1.jpg';
import Dashboard from '../../../Icons/Path 558.svg';
import Pay from '../../../Icons/Path 413.svg';
import Reimbursement from '../../../Icons/Path 415.svg';
import Assets from '../../../Icons/Path 417.svg';
import Leaves from '../../../Icons/Path 418.svg';
import TaxDeclaration from '../../../Icons/Path 420.svg';
import ImportantDocuments from '../../../Icons/Path 423.svg';
import PendingDocuments from '../../../Icons/Path 422.svg';

function SideBar() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-align">
          <img src={logo} alt="oops" className="logo-11" />
        </div>
        <div className="list1">
          <Link to="#">
            {' '}
            <div className="text2">
              {' '}
              <img src={Dashboard} alt="oops" className="icons-sidebar" />{' '}
              Dashboard{' '}
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img src={Pay} alt="oops" className="icons-sidebar" />
              Pay
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img src={Reimbursement} alt="oops" className="icons-sidebar" />
              Reimbursement
            </div>
          </Link>
          <Link to="#" className="active">
            <div className="text">
              <img src={Assets} alt="oops" className="icons-sidebar" />
              Assets
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img src={Leaves} alt="oops" className="icons-sidebar" />
              Leaves
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img src={TaxDeclaration} alt="oops" className="icons-sidebar" />
              Tax Declaration
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img
                src={ImportantDocuments}
                alt="oops"
                className="icons-sidebar"
              />
              Important Documents
            </div>
          </Link>
          <Link to="#">
            {' '}
            <div className="text2">
              <img
                src={PendingDocuments}
                alt="oops"
                className="icons-sidebar"
              />
              Pending Documents
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
