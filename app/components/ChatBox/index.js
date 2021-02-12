import React, { useState, useEffect } from 'react';
import './style.css';

import Message from '../Message';

const ChatBox = () => {
  const [dataa, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => setData(data.data));
    };
    fetchdata();
  }, []);

  return (
    <div className="chat-box">
      {dataa.map(data => (
        <Message
          key={data.id}
          message={data.email}
          image={data.avatar}
          sender={data.id % 2 === 0 ? true : false}
        />
      ))}
    </div>
  );
};
export default ChatBox;
