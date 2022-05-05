import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import welcome from '../../img/welcome.svg'

const SignUp = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };








  return (
    <section className="container">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 sign-in">
        <div className="col d-flex justify-content-center align-items-center">
          <img className='w-75' src={welcome} alt="" />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Form className='w-75' onSubmit={handleSubmit} validated={validated} noValidate>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
              <p>Already have an account in <span style={{color:'#4b31bf'}} className='fw-bold'>HitUp</span> ? <Link className='signin-link' to='/signin'>Sign In</Link> </p>
            <Button variant="outline-primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;