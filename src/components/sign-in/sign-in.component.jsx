import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import {
  createUser,
  emailPasswordSignin,
  signInGoogle,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const errorMessage = new Map().set(
  "auth/invalid-credential",
  "Please enter correct email or password"
);

function SignIn() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { currentUser } = useContext(UserContext);
  const { email, password } = formFields;
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate("/shop");
  }, [currentUser]);

  const logGoogleUser = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInGoogle();
      await createUser(user);
    } catch (e) {
      console.error(e.code);
    }
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailPasswordSignin(email, password);
      console.log(result);
    } catch (e) {
      console.log(e);
      alert(errorMessage.get(e.code));
    }
  };

  function handleOnChange(e) {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  }
  return (
    <form className="sign-in-container" onSubmit={signInWithEmail}>
      <h2> Already have an account ?</h2>
      <span>Sign in with email and password</span>
      <FormInput
        label={"Email"}
        type="email"
        className="form-input"
        name="email"
        value={email}
        onChange={handleOnChange}
      />
      <FormInput
        label="Password"
        type="password"
        className="form-input"
        name="password"
        value={password}
        onChange={handleOnChange}
      />
      <div className="sign-in-button-container">
        <Button type="submit" children={"Sign in"} />
        <Button
          type="button"
          buttonType={"google"}
          onClick={logGoogleUser}
          children={"Google Sign In"}
        />
      </div>
    </form>
  );
}

export default SignIn;
