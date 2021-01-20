import './App.css';
import {io} from 'socket.io-client';
import {useEffect, useState} from 'react';
import Container from './Container';
import { ChatProvider } from './contexts/ChatContext';
function App() {
  return (
    <ChatProvider>
      <div className='App'>
        <Container/>

      </div>

    </ChatProvider>
  )
}
export default App;
