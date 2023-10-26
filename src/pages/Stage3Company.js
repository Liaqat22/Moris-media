import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from '../media/Mocal Logo 2@4x-8.png'
import { NavLink } from 'react-router-dom'
import WelcomMocal from './WelcomMocal'
import WewillHelpyouFind from './WewillHelpyouFind'


function Stage3Company() {
   
      
        const [companyName, setCompanyName] = useState('')
        const [CompanyWebsite, setCompanyWebsite] = useState('')
        const [designation, setDesignation] = useState('')
        const [companySize, setCompanySize] = useState('')
        const navigate = useNavigate()
       
    
        const handleSubmit = async(e)=>{
            e.preventDefault()
            try {
              const res = await axios.post("http://localhost:8080/api/v1/auth/login",{companyName,CompanyWebsite,designation,companySize})
              if (res.data.success) {
                console.log(res.data.message)
            //     toast.success(res.data.message)
            navigate('/login')
              }else{
                console.log(res.data.message)
              }
            
            } catch (error) {
              console.log('something went wrong')
            }
            }
            const handleIndividual =()=>{
                navigate('/stage3')
              }
              const handleCompany =()=>{
                navigate('/stage3company')
              }
  return (
    <div>
      
      <div className='container-fluid registerbgimg containerfluid'>
        <div className='row rows'>

            <div className='col-md-4 flexdirection'>
              <WelcomMocal/>
                
            </div>

            <div className='col-md-4 text-center'>
             
  <div className="card" >
  <div className="card-header " style={{background :'transparent',border:'none'}}> 
  <img src={logo}  alt="..." />
</div>

  <div className="card-body">
    <form onSubmit={handleSubmit}>

    <div style={{textAlign:'left'}} className='heading16px'>
  <div className="form-check form-check-inline" onClick={handleIndividual}>
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
    <label className="form-check-label" htmlFor="inlineRadio1">Individual</label>
  </div>
  <div className="form-check form-check-inline"onClick={handleCompany}>
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" checked/>
    <label className="form-check-label" htmlFor="inlineRadio2">Company</label>
  </div>

</div>


<div className="row">
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={companyName} id="exampleInputPassword1" placeholder='Company Nmae' onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={CompanyWebsite} id="exampleInputPassword1" placeholder='Company Website' onChange={(e) => setCompanyWebsite(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={designation} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Designation' onChange={(e) => setDesignation(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" value={companySize} id="exampleInputPassword1" placeholder="Company Size" onChange={(e) => setCompanySize(e.target.value)} />
                    </div>
                 
                  </div>
                  <div style={{ textAlign: 'left' }} className='mt-3 mb-3'>
                   <div className="form-check heading11px">
  <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
  <label className="form-check-label" htmlFor="defaultCheck1">
  I Agree, Terms and Conditions Privacy Policy
  </label>
</div>
<p className='heading11px'>By clicking Create account, I agree that:</p>

                    <ul style={{listStyle:'disc'}}>
                      <li className='heading11px'>I have read and accepted the <NavLink  to = '/'>Terms of Use.</NavLink> </li>
                      <li className='heading11px'>The <NavLink  to = '/'>Moris family of companies</NavLink> may keep me informed with personalized emails about products and services.</li>
                 
                    </ul>
                  </div>
                  <p className='heading11px' style={{textAlign:'left'}}>See our <NavLink   to = '/'>Privacy Policy</NavLink> for more details or to opt-out at any time.</p>

                  <div className='freetrailmargin'>
                  <p className='heading11px'><b>30 Days Free Trial</b></p>
                    <NavLink type="submit" className="btn btn-primary getstartedbtn btnstge3margin" style={{backgroundColor:'#6E0D88'}}>Sign Up</NavLink>
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

export default Stage3Company
