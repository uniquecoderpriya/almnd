import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom";
import Header from './component/Header';
import Maincontent from './component/Maincontent';
import Downpost from './component/downpost';
import Footer from './component/Footer';
import Experience from './component/Experience';
import Hiring from './component/Hiring';
import Contactus from './component/Contactus';
import Sidebar from './component/Sidebar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Header/>
      <div className="app-container">
      <div className="main-content-container">
        <Maincontent />
      </div>
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
    </div>
    <div className="ap-container">
      <Downpost />
      <div className="experience-container">
        <Experience />
      </div>
      <Hiring />
      </div>
      <Contactus/>
      <Footer/>
    </div>
    </>
  )
}

export default App
