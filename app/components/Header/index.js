/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.css';
import logo from '../../images/logo.png';
import dots from '../../images/dots.jpg';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <img src={logo} className="header-logo" />
        <h1>Chatee!</h1>
      </div>
      <div>
        <img src={dots} className="header-dots curser" />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
