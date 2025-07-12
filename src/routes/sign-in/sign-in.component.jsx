import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils.js';
import "./sign-in.style.scss";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }
  return (
    <div>
      <form className="signin-form">
        <h1> Sign In</h1>
        <input type="text" className="form-input" />
        <input type="password" className="form-input" />
        <button type="submit"> Sign In </button>
        <button type="button" onClick={logGoogleUser} className="google-button"> Sign In With Google </button>
      </form>
    </div>
  );
}

export default SignIn;
