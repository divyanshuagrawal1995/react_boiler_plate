import {useState} from 'react';
import {validateInput} from '../../utilities/Validator'

const InputField = ({value, label, placeholder, validators,onChange, type,inputRef})=>{
    const [error,setError] = useState(false)
    const handleChange = ()=>{
        setError(validateInput(validators,inputRef.current.value))
        if(onChange) onChange(inputRef.current.value)
      
    }
    return(
        <div className="form-group">
        {label && <label htmlFor="app-input-field">{label}</label>}

        {type === 'textarea' ? (
            <textarea
                className='form-control'
                placeholder={placeholder}
                value={value}
                ref={inputRef}
            />
        ) : (
            <input
                type={type}
                value={value}
                className='form-control'
                placeholder={placeholder}
                onBlur={handleChange}
                
                onFocus={()=>{setError(false)}}
                ref={inputRef}
            />
        )}
        {error && <span className='text-danger'>{error.message}</span>}
    </div>
    )
}
export default InputField