import SignIn from '../../components/authentication/sign-in/sign-in.component';
import SignUp from '../../components/authentication/sign-up/sign-up.component';
import './authentication.styles.scss';

function Authentication() {
    return (
        <div className='forms-container'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication;