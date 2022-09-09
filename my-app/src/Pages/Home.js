import React from 'react'
import Header from '../Components/header'
import AboutMe from '../Pages/AboutMe'
import ContactMe from '../Pages/ContactMe'
import MyWork from '../Pages/MyWork'

function Home() {
    let component = null
    switch(window.location.pathname){
        case '/':
            break
        case '/about':
            component = <AboutMe />
            break
        case '/myWork':
            component = <MyWork />
            break
        case '/contact':
            component = <ContactMe />
            break
    }
  return (
    <div>
        <Header />
        {component}
        
    </div>
  )
}

export default Home