import React from 'react'
import Header from '../Components/header'
import Home from '../Pages/Home'
g
// import ContactMe from '../Pages/ContactMe'
// import MyWork from '../Pages/MyWork'

function Home() {
    let component
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
        <p>Hello World</p>
        <Header />
        {component}
    </div>
  )
}

export default Home