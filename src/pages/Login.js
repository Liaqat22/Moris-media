import React, { useState } from 'react'
import axios from "axios"
import logo from '../media/Mocal Logo 2@4x-8.png'
import { NavLink, useNavigate } from 'react-router-dom'
import WelcomMocal from './WelcomMocal'
import WewillHelpyouFind from './WewillHelpyouFind'


function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password })
      if (res.data.success) {
        console.log(res.data.message)
        //     toast.success(res.data.message)
        navigate('/approvalinvitation')
      } else {
        console.log(res.data.message)
      }

    } catch (error) {
      console.log('something went wrong')
    }
  }
  return (
    <div>
      <div className='container-fluid registerbgimg containerfluid'>
        <div className='row rows'>

          <div className='col-md-4 flexdirection'>
            <WelcomMocal />

          </div>

          <div className='col-md-4 text-center'>

            <div className="card" >
              <div className="card-header " style={{ background: 'transparent', border: 'none' }}>
                <img src={logo} alt="..." />
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className='btn btn-primary getstartedbtn' >Log In</button>
                </form>
                <h4 className='m-2'>OR</h4>

                <div className='row p-3'>
                  <div className='col-md-12 m-2'>
                    <NavLink className='btn btn-primary signupWith ' to='/signupform' >Sign In with Google</NavLink>
                  </div>
                  <div className='col-md-12 m-2'>
                    <NavLink className='btn btn-primary signupWith mt-2' to='/signupform' >Sign In with microsoft</NavLink>
                  </div>
                </div>

                <h5 className='mt-3'>Create new account? <NavLink to='/'>Register</NavLink></h5>

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

export default Login
