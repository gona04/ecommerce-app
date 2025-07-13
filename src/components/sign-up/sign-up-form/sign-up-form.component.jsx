import './sign-up-form.styles.scss';
function SignUpForm() {
    return (
        <form className="sign-up-form" onSubmit={() => {}}>
        <h1> Sign Up</h1>
        <label for='displayName'> Name </label>
        <input type='text' className='form-input' name='displayName'/>
        <label for='email'>Email Id</label>
        <input type="email" className="form-input" name='email'/>
        <label for='password'>Password</label>
        <input type="password" className="form-input" name='password'/>
        <label for='confirmPassword'>Confirm Password</label>
        <input type="password" className="form-input" name='confirmPassword'/>
        <button type="submit"> Sign Up </button>
      </form>
    )
}

export default SignUpForm;