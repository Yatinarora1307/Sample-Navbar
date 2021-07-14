import React from 'react'
import Icons from './Icons';
import Links from './Links';
import './App.css'
let logo = "https://cdn.originpc.com/img/origin-o-logo.svg";
const App = () => {
  return (
    <>
      <div class="nav-group">
        <img className="logo-img" src={logo} />
        <Links/>
        <Icons/>
      </div>
    </>
  );
}

export default App
