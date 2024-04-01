import { useCallback, useEffect, useRef, useState } from 'react';
import css from './App.module.css';
import { NickNameForm } from './components/NickNameForm/NickNameForm';
import { NewMessageForm } from './components/NewMessageForm/NewMessageForm';
import { Messages } from './components/Messages/Messages';
import { io, Socket } from 'socket.io-client';
import { nanoid } from 'nanoid';

type Mess = {
  id: string;
  type: 'you' | 'user',
  name: string,
  message: string
};

function App() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState<Mess[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  const allDivAppRef = useRef<HTMLDivElement>(null);
  const divForChatRef = useRef<HTMLDivElement>(null);

  const onSubName = useCallback((newName: string): void => {
    if (newName !== '') {
      setName(newName);
    }
  }, []);

  const onSubNewM = useCallback((newMes: string): void => {
    if (newMes !== '' && socket) {
      setMessages((prevMessages) => {
        const newMessage:Mess = {
          id: nanoid(),
          type: 'you',
          name,
          message: newMes
        };

        return [...prevMessages, newMessage]
      });

      socket.emit("chat-message", JSON.stringify({ name, message: newMes }));
      
    }
  }, [name, socket]);

  useEffect(() => {
    if (name) {
      const ws: Socket = io("http://localhost:5001");
      setSocket(ws);
      ws.on("chat-message", data => {
        const {message, name} = JSON.parse(data);
        setMessages((prevMessages) => {
        const newMessage:Mess = {
          id: nanoid(),
          type: 'user',
          name,
          message
        };

        return [...prevMessages, newMessage]
      });
      })
    }
  }, [name]);

  useEffect(() => {
      const root = document.getElementById('root');
    if (root) {
      root.style.flex = '1';
      root.style.display = 'flex';
      root.style.flexDirection = 'column';

    };
    if (divForChatRef.current) {
      const divForChat = divForChatRef.current;
      divForChat.style.flex = '1';
      divForChat.style.display = 'flex';
      divForChat.style.flexDirection = 'column';
    };
    if (allDivAppRef.current) { 
      const realScreenW = window.innerWidth;
      const allDivApp = allDivAppRef.current;

      allDivApp.style.margin = `${realScreenW / 50}px`;
      allDivApp.style.flex = '1';

    }
  });

  useEffect(() => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  }, [messages]);

  return (
    <div ref={allDivAppRef} className={css.allDivApp}>
    {!name && <NickNameForm onSubName={onSubName} />}
      {name && <div ref={divForChatRef} className={css.divForChat}>
        <NewMessageForm onSubNewM={onSubNewM} />
        <div className={css.allMesDiv}>
          <Messages messages={messages} />
        </div>
      </div>}
  </div>
  )
}

export default App