import { useContext, useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../form-input/form-input.component';
import { emailAndPasswordSignin, logInGoogle, saveUserDetails } from '../../../utils/firebase/firebase.utils';
import { UserContext } from '../../../context/userContext/user.context';

const defaultFormFields = {
    email: '',
    password: ''
}

function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const {setCurrentUser} = useContext(UserContext);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let data;
       try {
            data =  await emailAndPasswordSignin(formFields);
            setCurrentUser(data);
       } catch (e) {
            console.log(e.message);
       }
    }

    async function googleLogIn() {
       const {user} = await logInGoogle();
       console.log(user)
       //save user if not saved
        const userRef = await saveUserDetails(user)
        console.log(userRef);
    }
    return (
        <div className='Sign-in-form'>
            <div className='form-header'>
            <h2> Already have an account? </h2>
            <span>sign in using email and password</span>
            </div>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} value={email} type='email' name='email' onChange={handleChange}/>
                <FormInput label='Password' value={password} type='password' name='password' onChange={handleChange}/>
                <div className='sign-in-button'>
                <button type='submit'> Sign in </button>
                <button type='button' onClick={googleLogIn}> Sign In With Google </button>
                </div>
            </form>
        </div>  
    )
}

export default SignIn;