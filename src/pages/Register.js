import React, { useState } from 'react'
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../media/Mocal Logo 2@4x-8.png'
import WelcomMocal from './WelcomMocal'
import WewillHelpyouFind from './WewillHelpyouFind'
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
  
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/email", { email })
      if (res.data.success) {
        console.log(res.data.message)
        //     toast.success(res.data.message)
        navigate('/signupform')
      } else {
        console.log(res.data.message)
      }

    } catch (error) {
      console.log('something went wrong')
    }
  }

  // ========================= for capcha ================================================================

  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (response) => {
    if (response) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  return (
    <div>

      <div className='container-fluid registerbgimg containerfluid'>
        <div className='row rows'>

          <div className='col-md-4 flexdirection'>
           <WelcomMocal/>
          </div>

          <div className='col-md-4 text-center'>

            <div className="card" >
              <div className="card-header " style={{ background: 'transparent', border: 'none' }}>
                <img src={logo} alt="..." />
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email address' onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div style={{textAlign:'-webkit-center'}}>
   
      <ReCAPTCHA
        sitekey="reCAPTCHA_site_key"
        onChange={handleVerify}
      />
      {isVerified && <p>Verified! You are not a robot.</p>}
    </div>

                  <button type='submit' className='btn btn-primary getstartedbtn'  >Get Started</button>
                </form>
                <h4 className='m-2'>OR</h4>

                <div className='row p-3'>
                  <div className='col-md-12 m-2'>
                    <NavLink className='btn btn-primary signupWith ' to='/googlesignup' >Sign Up with Google</NavLink>
                  </div>
                  <div className='col-md-12 m-2'>
                    <NavLink className='btn btn-primary signupWith mt-2' to='/signupform' >Sign Up with microsoft</NavLink>
                  </div>
                </div>

                <h5 className='mt-3'>Already have an account? <NavLink to='/login'>Log in</NavLink></h5>

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

export default Register
