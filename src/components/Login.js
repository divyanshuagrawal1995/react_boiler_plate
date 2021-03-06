import { useRef } from 'react';
import InputField from '../forms/components/InputField';
import Button from '../forms/components/Button';

import { Validators } from '../forms/utilities/Validator'
import { useAuth } from '../context/AuthProvider';
const Login = () => {
    const passwordRef = useRef()
    const emailRef = useRef()
    const {addLogindata} = useAuth()
    const handleClick = (event) => {
        event.preventDefault();
        addLogindata({email:emailRef.current.value,password:passwordRef.current.value})
    };
    return (
        <div className="container">
            <h1>Log In</h1>
            <InputField
                inputRef={emailRef}
                type='email'
                label="Email"
                placeholder='Enter Email'
                validators={[
                    { check: Validators.required, message: 'Email  is required' },
                    { check: Validators.email, message: 'Enter valid Email' },

                ]}
            />

            <InputField
                inputRef={passwordRef}
                type='password'
                label='Password'
                placeholder='Enter password '
                validators={[
                    { check: Validators.required, message: 'password is required' },
                    { check: Validators.password, message: 'Enter valid password' }
                ]}
            />
              <Button
               onClick={handleClick}
               value='Click me!' 
            />
        </div>
    )

}
export default Login