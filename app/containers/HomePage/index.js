/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TextBox from '../../components/TextBox';

import './style.css';

import Header from '../../components/Header';
import ChatBox from '../../components/ChatBox';

export default function HomePage() {
  return (
    <div className="hame-page">
      <Header />
      <div className="chat-side">
        <ChatBox />
        <TextBox />
      </div>
    </div>
  );
}
