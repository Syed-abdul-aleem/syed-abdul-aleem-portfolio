import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import ScrollToTop from './ScrollToTop';
import './styles.css';

function Root(){
 const [theme,setTheme]=useState(()=>localStorage.getItem('theme')||'dark');
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme)},[theme]);
 return <BrowserRouter><ScrollToTop /><App theme={theme} setTheme={setTheme}/></BrowserRouter>
}
createRoot(document.getElementById('root')).render(<Root/>);
