import React, { useState } from 'react'
import logo from '../media/Mocal Logo 2@4x-8.png'
import '../pages/Emailverification.scss'
import { NavLink } from 'react-router-dom'
import WewillHelpyouFind from './WewillHelpyouFind'
import WelcomMocal from './WelcomMocal'

function Emailverification() {
   
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleInputChange = (e, index) => {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
  
      // Ensure that the input value is a digit and limit to 6 digits
      if (/^\d*$/.test(newOtp[index]) && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
  
      setOtp(newOtp.join(''));
    };
  return (
    <div>
      
      <div className='container-fluid registerbgimg containerfluid'>
        <div className='row rows'>

            <div className='col-md-4 flexdirection'>
             <WelcomMocal/>

            </div>

            <div className='col-md-4 text-center '>
             
  <div className="card" >
  <div className="card-header " style={{background :'transparent',border:'none'}}> 
  <img src={logo}  alt="..." />
</div>

  <div className="card-body">
 
<p className='heading18px'><b>Verify your email address to create your New Account</b></p>
<p className='heading14px'>An email with the verification code has been sent to your email address <b>info@yourdomain.com</b></p>
<div className='m-3'>

<NavLink style={{backgroundColor:'transparent',color:'#6E0D88'}}className="heading14px">Change Email</NavLink>
<hr/>
</div>
<p className="heading14px">Please enter the code here</p>
<div className="verification-code-box">
      {otp.map((digit, index) => (
        <input
          type="text"
          id={`otp-input-${index}`}
          key={index}
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          maxLength="1"
          className='inputboxfield'
        />
      ))}
    </div>

    <h5 className='mt-3'>Did not get an email?  <NavLink >Resend!</NavLink></h5>
    <div className='mt-3'>
                    <NavLink type="submit" className="btn btn-primary getstartedbtn" to = '/stage3'>Confirm</NavLink>
                  </div>
  </div>
</div>

            </div>
            <div className='col-md-4'>
            <WewillHelpyouFind/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Emailverification
