import SignUp from "../../components/signup-form/signup-form.component";
import {
  addingUserToDb,
  googleLogin,
} from "../../utils/firebase/firebase.utils";
import './sign-in.styles.scss';

function SignIn() {
  async function googleSignIn() {
    const { user } = await googleLogin();
    console.log(user);
    const userRef = await addingUserToDb(user);
    console.log(userRef);
  }
  return (
    <div id="user-forms">
        <div className="sign-in-form">
            <h2> Sign In </h2>
            <button onClick={googleSignIn}> Google Signin </button>
        </div>
        <SignUp/>
    </div>
  )
}

export default SignIn;
