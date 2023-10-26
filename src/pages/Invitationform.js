import React, { useState } from 'react'
import axios from "axios"
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../media/Mocal Logo 2@4x-8.png'

function Invitationform() {
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
      
      <div className='container-fluid containerfluid registerbgimg'>
<div className='row'>
    <div className='col-md-4'></div>
    <div className='col-md-4 text-center'>
    <div className="card" >
              <div className="card-header " style={{ background: 'transparent', border: 'none' }}>
                <img src={logo} alt="..." />
              </div>
              <p className='heading18px'style={{color:'#6E0D88'}}><b>YOU’RE JUST A STEP AWAY!</b></p>

              <div className="card-body">
                <form onSubmit={handleSubmit} >


                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={name} id="exampleInputPassword1" placeholder='Aman' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={name} id="exampleInputPassword1" placeholder='Verma' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Phone Number' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={phone} id="exampleInputPassword1" placeholder='WhatsApp Number' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={address} id="exampleInputPassword1" placeholder='amanverma@gmail.com' onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Company Name' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Company Website' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Role / Position' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="password" className="form-control" value={password} id="exampleInputPassword1" placeholder='Company Size' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                   
                  </div>

               
                  <div className='mt-3'>
                    <NavLink type="submit" className="btn btn-primary getstartedbtn" to = '/stage3'>Create Password</NavLink>
                  </div>
                </form>
              </div>
            </div>
    </div>
    <div className='col-md-4'></div>
</div>
</div>
    </div>
  )
}

export default Invitationform
