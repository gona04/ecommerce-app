import { useState } from "react";
import "./signup-form.style.scss";
import { addingUserToDb, authenticationUsingEmailPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "./form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassWord: "",
};

function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassWord} = formFields;

  function handleChanges(e) {
    const {name, value} = e.target;
    setFormFields({...formFields, [name]:value});
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const {user} = await authenticationUsingEmailPassword(formFields);
    user.displayName = displayName;
    console.log(user)
    addingUserToDb(user);
  }

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      <h2> Sign up </h2>
      <FormInput label={'DisplayName'}  type="text" value={displayName} onChange={handleChanges} name="displayName"/>

      <FormInput label={'Email'} type="email" value={email} onChange={handleChanges} name="email" />

      <FormInput label={'Password'} type="password" value={password} onChange={handleChanges} name="password"/>

      <FormInput label={'Confirm Password'} type="password" value={confirmPassWord} onChange={handleChanges} name="confirmPassWord"/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
