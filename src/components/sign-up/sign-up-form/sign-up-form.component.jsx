import { useState } from "react";
import "./sign-up-form.styles.scss";
import { createAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";

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
   const result = await createAuthUserWithEmailAndPassword(formFields);
   console.log(result);
  }
  return (
    <form className="sign-up-form" onSubmit={onSubmit}>
      <h1> Sign Up</h1>
      <label> Name </label>
      <input
        type="text"
        className="form-input"
        name="displayName"
        value={displayName}
        onChange={setFormData}
      />
      <label>Email Id</label>
      <input
        type="email"
        className="form-input"
        name="email"
        value={email}
        onChange={setFormData}
      />
      <label>Password</label>
      <input
        type="password"
        className="form-input"
        name="password"
        value={password}
        onChange={setFormData}
      />
      <label>Confirm Password</label>
      <input
        type="password"
        className="form-input"
        name="confirmPassword"
        value={confirmPassword}
        onChange={setFormData}
      />
      <button type="submit"> Sign Up </button>
    </form>
  );
}

export default SignUpForm;
