import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUpForm from '../../components/sign-up/sign-up-form/sign-up-form.component.jsx';
import './authentication.style.scss';

function Authentication() {
  return (
    <div id='sign-in'>
     
      <SignIn/>
      <SignUpForm/>
    </div>
  );
}

export default Authentication;
