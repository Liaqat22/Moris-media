import React from 'react'
import mocal from '../media/mocal-1.png'
import girl from '../media/AI girl copy.png'
import logo from '../media/Mocal Logo 2@4x-8.png'
import signlogo from '../media/Group 18451.png'
import { NavLink } from 'react-router-dom'



function Approvalinvitation() {
    return (
        <div>

            <div className='container-fluid registerbgimg containerfluid'>
               <div className='row approvalinvitationrows'>
                <div className='col-md-10 approvalinvitationbgimg'>

                <div className='row approvalinvitationrows'>

<div className='col-md-4'>
    <div >
        <img className='mocal' src={mocal} alt="..." />
    </div>
</div>
<div className='col-md-4'>
    <div className="card text-center" style={{ background: 'transparent', border: 'none' }} >


        <div className="card-body">
            <div className='aprovalinvitationCardmargin'>
            <div className="card-header " style={{ background: 'transparent', border: 'none' }}>
                <img src={logo} alt="..." />
            </div>
            <div className='congractulationmain'>
                <p className='congractulation' >congratulations!</p>
            </div>
            <div>
                <p className='heading14px' style={{ color: '#E1003E' }}><b>Your Invitation has been Verified!</b></p>
                <p className='heading14px' ><b>You can now Sign in to your MoCal using the credentials shared on your email.</b></p>
            </div>

            <NavLink  className='btn btn-primary getstartedbtn signinNowbtn' to = '/login' >
                <img src={signlogo} alt='signin now'/>
                 <span className='m-2'>SIGN IN NOW</span>
                 </NavLink>
        </div>

        </div>
        
    </div>
</div>
<div className='col-md-4'>
    <div>
        <img src={girl} alt="..." style={{ width: '100%' }} />
    </div>
</div>
</div>

                </div>
               </div>
            </div>

        </div>
    )
}

export default Approvalinvitation
