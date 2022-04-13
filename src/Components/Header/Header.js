/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import userLogo from '../../Icons/Group 1678.svg';
import bell from '../../Icons/notifications_black_24dp.svg';

function Header({ fromLogin, heading }) {
  return (
    <div className="header">
      {fromLogin === true ? (
        ''
      ) : (
        <div className="container1">
          <div className="name1">{heading}</div>
          <div className="bellbox">
            <img src={bell} alt="oops" className="bell" />
          </div>
          <div className="userbox1">
            <div className="userlogo">
              <img src={userLogo} alt="oops" className="logo-6" />
            </div>
            <div className="welcome-text">Welcome </div>
            {/* <div className="username-text">
                            {localStorage.getItem('userName')}
                        </div> */}
            <div className="dropdown">
              <button type="submit" className="dropbtn">
                <h2>{localStorage.getItem('userName')}</h2>
              </button>
              <div className="dropdown-content">
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
Header.propTypes = {
  fromLogin: PropTypes.string.isRequired,
};
Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
export default Header;
