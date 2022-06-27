import './Header.css';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className='header'>
      <Home />
      <About />
      <Scheiding />
      <Collection />
      <Scheiding />
      <Experiments />

    </div>
  )
}


function Home() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/">home</Link>
    </div>
  )
}

function Scheiding() {
  return (
    <div>
      <div className='header-item'>| </div>
    </div>

  )
}



function About() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/about">about</Link>
    </div>
  )
}


function Collection() {
  return (
    <div className='header-item'>
      <Link id='linkstyle' to="/collection">collection</Link>
    </div>
  )
}


function Experiments() {
  return (
    <div className='header-item'>
      <a id='linkstyle' href="https://experiments.oliys.com/" target="_blank">experiments</a>
    </div>
  )
}





export default Header;
