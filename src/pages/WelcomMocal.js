import React from 'react'
import mocal from '../media/mocal-1.png'


function WelcomMocal() {
    const MoCal = {
        color: '#FDEC07'
      }
      const welcome = {
        color: '#BA8AC7',
        fontWeight: '900'
      }
  return (
    <div>
      
      <div className='mt-3'>
              <h1 className='headinglarge' style={welcome}>Welcome to <span style={MoCal}>MoCal!</span></h1>
              <p className='headingmedium fontweight900 whitecolor'>Get Your First Month Free. Sign Up Now!</p>
            </div>
            <div >
              <img className='mocal' src={mocal} alt="..." />
            </div>

    </div>
  )
}

export default WelcomMocal
