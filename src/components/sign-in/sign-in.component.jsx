import { useState } from "react";
import { createEditDb, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

function SignIn() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    await createEditDb(user);
  }

  const signInWithEmail = () => {
    console.log('sigin in with email to be set');
  }

  function handleOnChange(e) {
    const {name, value} = e.target;

    setFormFields({...formFields, [name]:value});
  }
   return (
       <form className="sign-in-container" onSubmit={signInWithEmail}>
      <h2> Already have an account ?</h2>
      <span>Sign in</span>
      <FormInput
      label={'Email'}
        type="email"
        className="form-input"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <FormInput
      label='Password'
        type="password"
        className="form-input"
        name="password"
        value={password}
        onChange={handleOnChange}
      />
      <Button type="submit" children={'Sign in'}/>
      <Button buttonType={'google'} onClick={logGoogleUser} children={'Google Sign In'}/>
    </form>
   )
}

export default SignIn;

