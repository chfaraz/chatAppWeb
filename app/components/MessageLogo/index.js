import React from 'react';
import logo from '../../images/logo.png';
import '../Message/style.css';

const MessageLogo = ({ image }) => {
  return (
    <>
      <img src={image} className="message-img" />
    </>
  );
};

export default MessageLogo;
