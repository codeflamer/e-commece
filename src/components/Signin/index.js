import React,{useState} from 'react';
import { signInWithGoogle } from '../../firebase/utils';
import Button from '../Forms/Button';
import './styles.scss';

const Signin = () => {

    const submitForm = (e)=>{
        e.preventDefault();
    }

    return (
        <div className='signin'>
            <div className='wrap'>
                <h2>Login</h2>
            </div>
            <div className='formWrap'>
                <form onSubmit={submitForm}>
                    <div className='socialSignin'>
                        <div className='row'>
                            <Button onClick={signInWithGoogle}>
                                Sign in with Google
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signin
