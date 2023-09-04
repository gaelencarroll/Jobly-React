import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Alert from '../../extra-components/Alert'
import './LoginForm.css'

function LoginForm({login}){
    const history = useHistory();
    const [formData, setFormData] = useState({username:'', password:''})
    const [formErrors, setFormErrors] = useState([])
    console.debug('LoginForm', 'login=', typeof login, 'formData', formData, 'formErrors',formErrors);
    async function handleSubmit(e){
        e.preventDefault();
        let res = await login(formData);
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
            <h2>Login</h2>
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
                    {formErrors.length 
                        ? <Alert type='danger' msgs={formErrors} ></Alert> 
                        : null}
                    <button onSubmit={handleSubmit} className='button'>Submit</button>
                </form>
            </section>
        </section>
    )
}

export default LoginForm