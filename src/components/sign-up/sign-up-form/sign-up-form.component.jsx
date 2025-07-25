import { useState } from "react";
import "./sign-up-form.styles.scss";
import { createUser, emailPasswordSignup } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import Button from "../../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  function setFormData(e) {
    const { name, value } = e.target;
    setFormFields({...formFields , [name]: value });
    console.log(formFields);
  }
  async function onSubmit(e) {
    e.preventDefault();
   const {user} = await emailPasswordSignup(formFields.email, formFields.password);
   user.displayName = displayName;
   console.log(user);
   createUser(user);
   setFormFields(defaultFormFields);
  }
  return (
    <form className="sign-up-container" onSubmit={onSubmit}>
      <h2> Don't have an account ?</h2>
      <span>Sign up with your email and password</span>
      <FormInput 
      label={'DisplayName'}
        type="text"
        className="form-input"
        name="displayName"
        value={displayName}
        onChange={setFormData}
      />
      <FormInput
      label={'Email'}
        type="email"
        className="form-input"
        name="email"
        value={email}
        onChange={setFormData}
      />
      <FormInput
      label='Password'
        type="password"
        className="form-input"
        name="password"
        value={password}
        onChange={setFormData}
      />
      <FormInput
      label='Confirm Password'
        type="password"
        className="form-input"
        name="confirmPassword"
        value={confirmPassword}
        onChange={setFormData}
      />
      <Button type="submit" children={'Sign up'}/>
    </form>
  );
}

export default SignUpForm;
