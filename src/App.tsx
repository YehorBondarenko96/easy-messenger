import { useEffect, useRef } from 'react';
import css from './App.module.css';
import { NickNameForm } from './components/NickNameForm/NickNameForm';

function App() {
  const allDivAppRef = useRef<HTMLDivElement>(null);

  const onSubmit = (name:string):void => {
    if (name !== '') {
      console.log(name);
    }
  };

  useEffect(() => {
    if (allDivAppRef.current) { 
      const realScreenW = window.innerWidth;
      const allDivApp = allDivAppRef.current;

      allDivApp.style.margin = `${realScreenW / 50}px`;
    }
  });

  return (
    <div
      ref={allDivAppRef}
      className={css.allDivApp}>
      <NickNameForm onSubmit={onSubmit}/>
    </div>
  )
}

export default App