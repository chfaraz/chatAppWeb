import React from 'react';
import './style.css';
import MessageLogo from '../MessageLogo';

const Message = ({ message, image, sender }) => {
  return (
    <>
      {sender ? (
        <div className="message-wrapper sender-wrapper">
          <div>
            <p className="sender-message">{message}</p>
            <span>mon 02:20 pm</span>
          </div>
          <MessageLogo image={image} />
        </div>
      ) : (
        <div className="message-wrapper recever-wrapper">
          <MessageLogo image={image} />
          <div>
            <p className="recever-message">{message}</p>
            <span>mon 02:20 pm</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
