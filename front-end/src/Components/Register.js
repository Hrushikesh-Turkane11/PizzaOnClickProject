import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
 
}
from 'mdb-react-ui-kit';


function Register() {
  
  const element=
 
  
  
  <MDBContainer className="my-0">
{/* npm i mdb-react-ui-kit   to install*/}
<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='3'>
     {/* <MDBCardImage src={pngegg} alt="login form" className='rounded-start w-100'/>*/}
     

    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody  className='d-flex flex-column'  >{/*  it arranges the children of the flex container vertically instead of horizontally. d for display flex  */}

        

        <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>{/* fw=normal=font weight is set to normal
        my=margine on y-axis (top and bottom)
        pb=3 padding on bottom is 3 */}</h5>

          <MDBInput wrapperClass='mb-4' label='Name' id='name' type='text' name='nm' size="lg"/>

          <MDBInput wrapperClass='mb-4' label='Email ' id='email' type='email' name='email' size="lg"/>

          <MDBInput wrapperClass='mb-4' label='Mob No' id='mno' type='text' name='pass' size="lg" required/>


        {/* mb=4 means margine bottom 4
        between to input text 2 margine will be there
        wrapperclass means custom class class  to add wrapper element */}

          <MDBInput wrapperClass='mb-4' label='Password' id='pass' type='password' name='pass' size="lg" required/>

        <MDBBtn className="mb-4 px-5" color='primary' size='lg' type='button'>Register</MDBBtn>

        

      </MDBCardBody>
    </MDBCol>

    <MDBCol md='3'>
      {/*<MDBCardImage src={pngegg} alt="login form" className='rounded-start w-100'/>*/}
     

    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer> 


 
  return element;
  }

  export default Register