/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import userLogo from '../../Icons/Group 1678.svg';

function Header({ fromLogin }) {
  return (
    <div className="header">
      {fromLogin === true ? (
        ''
      ) : (
        <div className="container1">
          <div className="name1">Assets</div>
          <div className="userbox1">
            <div className="userlogo">
              <img src={userLogo} alt="oops" className="logo-6" />
            </div>
            <div className="welcome-text">Welcome </div>
            <div className="username-text">
              {localStorage.getItem('userName')}
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
export default Header;
