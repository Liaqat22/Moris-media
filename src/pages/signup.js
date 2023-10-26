import React, { useState } from 'react'
import axios from "axios"
import logo from '../media/Mocal Logo 2@4x-8.png'
import { NavLink, useNavigate } from 'react-router-dom'
import WelcomMocal from './WelcomMocal'
import WewillHelpyouFind from './WewillHelpyouFind'


function Signup() {

 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", { name, email, password, phone, address })
      if (res.data.success) {
        console.log(res.data.message)
        //     toast.success(res.data.message)
        navigate('/stage3')
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

          <div className='col-md-4 flexdirection' >
           
<WelcomMocal/>
          </div>

          <div className='col-md-4 text-center'>
            <div className="card" >
              <div className="card-header " style={{ background: 'transparent', border: 'none' }}>
                <img src={logo} alt="..." />
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit} >


                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={name} id="exampleInputPassword1" placeholder='First Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={name} id="exampleInputPassword1" placeholder='Last Name' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email (phone no.)' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={phone} id="exampleInputPassword1" placeholder='Phone (city)' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={address} id="exampleInputPassword1" placeholder='Address (State)' onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Password (County)' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Confirm Password (Password)' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" placeholder="Confirm Password (confirm Password)" aria-label="Last name" />
                    </div>
                  </div>

                  <div style={{ textAlign: 'left' }} className='mt-3 mb-3'>
                    <p className='heading11px'>Create a Password that can :</p>
                    <ul>
                      <li className='heading11px'> Contains at least 8 characters Contains both lower </li>
                      <li className='heading11px'>  both lower (a-z) and upper case letters (A-Z) </li>
                      <li className='heading11px'> Contains at least one number (0-9) or a symbol</li>
                      <li className='heading11px'>  Does not contain your email address is not commonly used</li>
                    </ul>
                  </div>
                  <div className='mt-3'>
                    <NavLink type="submit" className="btn btn-primary getstartedbtn" to = '/stage3'>Next</NavLink>
                  </div>
                </form>
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

export default Signup
