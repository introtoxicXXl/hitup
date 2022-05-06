import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import logIn from '../../img/login.svg';
import Loading from '../Loading/Loading';
import './SignIn.css';

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorMsg;
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorMsg = <p className='text-danger'>Error: {error.message}</p>
  }
  if (loading) {
    <Loading></Loading>
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Email has been sent');
    }
    else {
      toast('Please Enter Your Email Address');
    }
  }


  return (
    <section className="container">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 sign-in">
        <div className="col d-flex justify-content-center align-items-center">
          <img className='w-75' src={logIn} alt="" />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className='w-75'>
            <Form onSubmit={handleSignIn} validated={validated} noValidate>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Sign In
              </Button>
            </Form>
            {errorMsg}
            <p className='mt-3'>New in HitUp? <Link className='signin-link' to='/signup'>Sign Up</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-warning pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;