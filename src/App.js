import './App.css';
import AppRoutes from './components/screen-show-content';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('white')
  const [textColor, setTextColor] = useState('black')

  return (
    <>
      <GlobalStyle color={color}/>

      <AppRoutes color={color} setColor={setColor} textColor={textColor} setTextColor={setTextColor}/>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      color: inherit;
    }

    body{
      background-color: ${props => props.color === 'white' ? '#f1f1f1' : 'rgba(33,46,55,255)'}
    }
  `

export default App;
