import React from 'react';

import Send from '../../images/send.png';
import './style.css';

const TextBox = () => {
  return (
    <div className="text-box-wrapper">
      <input type="text" className="text-box" />
      <img src={Send} className="curser" />
    </div>
  );
};

export default TextBox;
