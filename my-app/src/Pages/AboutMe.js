import React from 'react'

function AboutMe() {
  return (
    
    <div style={styles.aboutMeContainer}>
      <h1>Tatiana Millsap</h1>
      <img src="https://i.imgur.com/1Z1Z1Z1.jpg" alt="Tatiana Millsap" />
        <p>Full Stack Web Developer</p>
        <p>My name is Tatiana Millsap and I am a Full Stack Web Developer. I am a graduate of Full Sail University with a Bachelor degree in Computer Science. I have a passion for coding and I am always looking for new ways to improve my skills. I am currently looking for a position as a Full Stack Web Developer.</p>
    </div>
  )
}

export default AboutMe

const styles = {
  aboutMeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f5f4',
    color: '8f8369',
    padding: '60px',
    fontSize: '18px',
    fontWeight: 'normal',

  },

}