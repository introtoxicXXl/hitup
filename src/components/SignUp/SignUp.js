import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link,  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import welcome from '../../img/welcome.svg'
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const [validated, setValidated] = useState(false);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || updating) {
    return <Loading></Loading>
  }

  // handel sign up
  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    updateProfile({ displayName: name });
    navigate('/home');
  };


  return (
    <section className="container">
      <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 sign-in">
        <div className="col d-flex justify-content-center align-items-center">
          <img className='w-75' src={welcome} alt="" />
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <div className='w-75'>
            <Form onSubmit={handleSignUp} validated={validated} noValidate>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                <Form.Check className='me-2' onClick={() => setAgree(!agree)} type="checkbox" required />
                <Form.Label className={`ps-2 ${!agree ? 'text-danger' : 'text-success'}`}>Accept HitUp Terms and Conditions</Form.Label>
              </Form.Group>
              <p>Already have an account in <span style={{ color: '#4b31bf' }} className='fw-bold'>HitUp</span> ? <Link className='signin-link' to='/signin'>Sign In</Link> </p>
              <Button variant="outline-primary" type="submit" disabled={!agree}>
                Sign Up
              </Button>
            </Form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;