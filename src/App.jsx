import React, { useState } from 'react';
import './App.css';
import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom, batch, Fade, MoveOut } from 'react-scroll-motion';
import Todolist from './components/Todolist';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrollContainer className='page1'>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h1 className='header'>To do list</h1>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch()}>
          <Todolist/>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;
