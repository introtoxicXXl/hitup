import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logIn from '../../img/login.svg';
import './SignIn.css';

const SignIn = () => {
  return (
    <section className="container">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 sign-in">
        <div className="col d-flex justify-content-center align-items-center">
          <img className='w-75' src={logIn} alt="" />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <Form className='w-75'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
              <p>New in HitUp? <Link to='/signup'>Sign Up</Link> </p>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;