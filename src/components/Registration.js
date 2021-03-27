import { useState, useRef } from 'react'
import Button from '../forms/components/Button';
import InputField from "../forms/components/InputField";
import Dropdown from "../forms/components/Dropdown";
import Checkbox from "../forms/components/Checkbox";
import { Validators } from "../forms/utilities/Validator";
const Registration = () => {
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [password, setPassword] = useState('')
    const confirmPasswordRef = useRef('')
    const [country, setCountry] = useState('')
    const [acceptance, setAcceptance] = useState(false)

    const handleClick = (event) => {
        event.preventDefault();
        alert('Button Clicked');
    };

    const handleDropdown = (country) => {
        setCountry(country)
    };
    const handleCheckbox = (acceptance) => {
        setAcceptance(acceptance)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }
    return (
        <div className="container">
            <h2>React</h2>
            <hr />
            <InputField
                inputRef={firstNameRef}
                type='text'
                label="First Name"
                placeholder='Enter First Name here...'
                validators={[
                    { check: Validators.required, message: 'FirstName field is required' },
                ]}
            />

            <InputField
                inputRef={lastNameRef}
                type='text'
                label="Last Name"
                placeholder='Enter Last Name here'
                validators={[
                    { check: Validators.required, message: 'LastName is required' },
                ]}
            />

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
                    { check: Validators.required, message: 'This field is required' },
                    { check: Validators.password, message: 'Enter valid password' }
                ]}
                onChange={handlePassword}
            />

            <InputField
                inputRef={confirmPasswordRef}
                type='password'
                label='Confirm Password'
                placeholder='Enter Confirm password'
                validators={[
                    { check: Validators.required, message: 'This field is required' },
                    { check: Validators.password, message: 'Enter valid password' },
                    { checkPassword: Validators.confirmPassword, password, message: "Password doesn't match" }
                ]}
            />

            <Dropdown
                data={[
                    { value: 1, label: 'India' },
                    { value: 2, label: 'USA' },
                    { value: 3, label: 'UK' },
                    { value: 4, label: 'Germany' },
                    { value: 5, label: 'Russia' },
                    { value: 5, label: 'Italy' },
                ]}
                styleClass='mt-3'
                value={country}
                label='Country'
                placeholder='Select Country'
                onChange={handleDropdown}
            />


            <Checkbox
                label='I Accept'
                selected={acceptance}
                onChange={handleCheckbox}
            />

            <Button
                onClick={handleClick}
                value='Click me!' />

        </div>
    )
}
export default Registration