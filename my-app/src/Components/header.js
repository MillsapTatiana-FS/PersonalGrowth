import React from 'react'
//import { BrowserRouter as Route, Routes} from 'react-router-dom'
//import NavBar from './NavBar'
// import Home from '../Pages/Home'
// import AboutMe from '../Pages/AboutMe'
// import ContactMe from '../Pages/ContactMe'
// import MyWork from '../Pages/MyWork'


function Header() {
  return (
    <div>
       {/* <NavBar /> */}
        {/* <Routes>
            <Route  path="/" element={<Home /> } />
            <Route exact path="/about"element={<AboutMe />} />
            <Route exact path="/myWork" element={<MyWork />} />
            <Route exact path="/contact"element={<ContactMe />} />
        </Routes> */}
        
        <a href="/">Home</a>
            <ul>
                <li><a href="/about">About Me</a></li>
                <li><a href="/myWork">My Work</a></li>
                <li><a href="/contact">Contact Me</a></li>
            </ul>
        
    </div>
    )
}

export default Header