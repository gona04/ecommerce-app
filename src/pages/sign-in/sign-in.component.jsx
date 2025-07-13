import { googleLogin } from "../../utils/firebase/firebase.utils";

function SignIn() {

    async function googleSignIn() {
       const {user} = await googleLogin();
       console.log(user);

    }
    return (
        <button onClick={googleSignIn}> Google Signin </button>
    )
}

export default SignIn;