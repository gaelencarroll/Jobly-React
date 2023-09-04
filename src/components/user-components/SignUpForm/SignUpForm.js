import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Alert from '../../extra-components/Alert'
import './SignUpForm.css'

function SignUpForm({signup}){
    const history = useHistory();
    const [formData, setFormData] = useState({
        username : '',
        password : '',
        firstName : '',
        lastName : '',
        email : '',
    })
    const [formErrors, setFormErrors] = useState([])
    console.debug('SignUpForm', 'signup=', typeof signup, 'formData', formData, 'formErrors',formErrors);

    async function handleSubmit(e){
        e.preventDefault();
        let res = await signup(formData);
        if (res.success){
            history.push('/companies')
        }
        else{
            setFormErrors(res.errors)
        }
    }
    function handleChange(e){
        const {name, val} = e.target;
        setFormData(data => ({...data, [name]:val}))
    }

    return(
        <section>
            <h2>Sign Up</h2>
            <section>
                <form onSubmit={handleSubmit}>
                    <section className='username-section'>
                        <label for='username'>Username</label>
                        <input name='username' value={formData.username}className='username-input' onChange={handleChange}></input>
                    </section>
                    <section className='password-section'>
                        <label for='password'>Password</label>
                        <input name='password' value={formData.password}className='password-input' onChange={handleChange}></input>
                    </section>
                    <section className='first-name-section'>
                        <label for='first-name'>First Name</label>
                        <input name='first-name' value={formData.firstName}className='first-name-input' onChange={handleChange}></input>
                    </section>
                    <section className='last-name-section'>
                        <label for='last-name'>Last Name</label>
                        <input name='last-name' value={formData.lastName}className='last-name-input' onChange={handleChange}></input>
                    </section>
                    <section className='email-section'>
                        <label for='email'>Email</label>
                        <input name='email' value={formData.email} className='email-input' onChange={handleChange}></input>
                    </section>
                    {formErrors.length 
                        ? <Alert type='danger' msgs={formErrors} ></Alert> 
                        : null}
                    <button onSubmit={handleSubmit} className='button'>Submit</button>
                </form>
            </section>
        </section>
    )
}

export default SignUpForm;