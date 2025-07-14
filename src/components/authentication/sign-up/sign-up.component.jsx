import { useContext, useState } from 'react';
import './sign-up.styles.scss';
import { emailPasswordSignUp, saveUserDetails } from '../../../utils/firebase/firebase.utils';
import FormInput from '../../form-input/form-input.component';
import {UserContext} from '../../../context/userContext/user.context'

const defaultFromFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUp() {
    const [formFields, setFormFields] = useState(defaultFromFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const { setCurrentUser} = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const {user} =  await emailPasswordSignUp(formFields); 
        user.displayName = formFields.displayName; 
        const userDetails = await saveUserDetails(user);
        console.log(userDetails);
        setFormFields(defaultFromFields);
        setCurrentUser(userDetails)
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value})
    }

    return (
         <div className='Sign-in-form'>
            <div className='form-header'>
            <h2> Don't have an account ?</h2>
            <span>sign up using email and password</span>
            </div>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' value={displayName} type='text' name='displayName' onChange={handleChange}/>
                <FormInput label='Email' value={email} type='email' name='email' onChange={handleChange}/>
                <FormInput label='Password' value={password} type='password' name='password' onChange={handleChange}/>
                <FormInput label='Confirm Password' value={confirmPassword} type='password' name='confirmPassword' onChange={handleChange}/>
                <div className='sign-in-button'>
                <button type='submit'> Sign Up </button>
                </div>
            </form>
        </div>  
    )
}

export default SignUp;