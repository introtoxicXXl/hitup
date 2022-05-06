import React from 'react';
import googleIcon from '../../img/google-icon.png';
import gitIcon from '../../img/giticon.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorMsg;
    if (user || user2) {
        navigate('/home');
    }
    if (error || error2) {
        errorMsg = <p className='text-danger'>Error: {error?.message} {error2?.message}</p>
    }

    if (loading || loading2) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorMsg}
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-light rounded-pill shadow-sm w-100 d-block mx-auto my-2'>
                    <img style={{ width: '40px' }} src={googleIcon} alt="" />
                    <span className='px-2 fw-bold text-secondary'>Continue with Google</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className='btn btn-light rounded-pill shadow-sm w-100 d-block mx-auto my-2'>
                    <img style={{ width: '35px' }} src={gitIcon} alt="" />
                    <span className='px-2 fw-bold text-secondary'>Continue with GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;