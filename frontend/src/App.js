import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { IoAttach, IoSend } from 'react-icons/io5';
import { FaFile, FaFileAlt, FaPaperclip, FaUser } from 'react-icons/fa';
import { IoIosAttach, IoMdAttach } from 'react-icons/io';
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go';
import { TbMessageChatbot } from 'react-icons/tb';
import { RiChatNewLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';

const recentChats = ['chat1chat1chat1chat1chat1chat1', 'chat1 chat1 chat1 chat1 chat1 chat1 chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1', 'chat1'];
const messages = [
  { user: 'hi', bot: 'hello there!' },
  { user: 'how are you?', bot: 'I am fine, thank you!' },
  { user: 'What can you do?', bot: 'I can chat with you.' },
  { user: 'hi', bot: 'hello there!' },
  { user: 'JSX Changes:Wrapped the user and bot messages in their own containers (user-message-container and bot-message-container).Added img elements before the message divs to display the icons.', bot: 'CSS Changes: Defined .message-container to hold each pair of user and bot messages. Defined .user-message-container and .bot-message-container to handle the layout of icons and messages. Styled the .icon class to set the size and margin of the icons. Adjusted the .message class to ensure proper padding and border-radius.' },
  { user: 'What can you do?', bot: 'I can chat with you.' },
  { user: 'hi', bot: 'hello there!' },
  { user: 'how are you?', bot: 'I am fine, thank you!' },
  { user: 'What can you do?', bot: 'I can chat with you.' },
  { user: 'hi', bot: 'hello there!' },
  { user: 'how are you?', bot: 'I am fine, thank you!' },
  { user: 'What can you do?', bot: 'I can chat with you.' },
  { user: 'hi', bot: 'hello there!' },
  { user: 'how are you?', bot: 'I am fine, thank you!' },
  { user: 'What can you do?', bot: 'I can chat with you.' }
];

function App() {
  const [isResizing, setIsResizing] = useState(false);
  const [isClose, setIsClose] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [storeSidebarWidth, setstoreSidebarWidth] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.body.style.cursor = 'col-resize';
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    setSidebarWidth(newWidth);
  };

  const handleMouseUp = () => {
    if (isResizing) {
      setIsResizing(false);
      document.body.style.cursor = 'default';
    }
  };

  const handleSidebarState = () => {
    const tempisClose = !isClose;
    setIsClose(!isClose);
    if (tempisClose) {
      setstoreSidebarWidth(sidebarWidth);
      setSidebarWidth(0);
    }
    else {
      setSidebarWidth(storeSidebarWidth);
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className="app">
      <div className='sidebarButton' onClick={handleSidebarState}>
        {screenWidth > 750 ?
          isClose ? <GoSidebarCollapse className='sidebutton' /> : <GoSidebarExpand className='sidebutton' />
          :
          isClose ? <GoSidebarExpand className='sidebutton' /> : <GoSidebarCollapse className='sidebutton' />
        }
      </div>
      <div className={screenWidth > 750 ?
        isClose ? "sidebar-hidden" : "sidebar-main" :
        isClose ? "sidebar-main" : "sidebar-hidden"} /*style={{ width: `${sidebarWidth}px` }}*/>
        <div className='sidebarHeader'>
          <div className='new-chat'>
            <div className='new-chat-text'>New Chat</div>
            <RiChatNewLine className='sidebutton' />
          </div>
        </div>

        <div className='sidebar'>
          {recentChats.map((chatName, index) => (
            <div className="recent-chat" key={index}>
              <div className="recent-text-container" key={index}>
                <p className='recent-text'>{chatName}</p>
              </div>
                <BsThreeDots className='recent-chat-icon'/>
            </div>
          ))}
          {/* <div class="sidebar-resizer" onMouseDown={handleMouseDown}></div> */}
        </div>

        <div className='sidebarFooter'>
          <h2>Sidebar Footer</h2>
        </div>
      </div>

      <div className="main-content">

        <div className='header'>
          <img src="https://via.placeholder.com/50" alt="Profile Icon" className="profile-icon" />
        </div>

        <div className="chat-window">
          <div className={`messages-window ${isClose ? 'closed' : ''}`}>
            {messages.map((message, index) => (
              <div key={index} className='message-container'>
                <div className='user-message-box'>
                  <FaUser className='user-message-icon' />
                  <div className="message user-message">{message.user}</div>
                </div>
                <div className='bot-message-box'>
                  <TbMessageChatbot className='bot-message-icon' />
                  <div className="message bot-message">{message.bot}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat-div">
          <div className={`chat-input ${isClose ? 'closed' : ''}`}>
            <button className="button attach" ><IoMdAttach className='icons' /></button>
            <button className="button file"><FaFileAlt className='icons' /></button>
            <input type="text" className="text-input" placeholder="Ask Your Query..." />
            <button className="button send"><IoSend className='icons' /></button>
          </div>
        </div>

      </div>
    </div>
  )
};

export default App;