import './button.styles.scss';

/* 
    default 
    inverted
    google sign in 
*/

const BUTTON_TYPES_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

function Button({children, className, buttonType, ...otherProps}) {
    return (
        <button className={`button-container ${className} ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps} >
            {children}
        </button>
    )
}

export default Button;