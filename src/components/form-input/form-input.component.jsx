import './form-input.styles.scss';

function FormInput({label, ...otherProps}) {
return (
    <div>
        <label>{label}</label>
        <input {...otherProps}/>
    </div>
)
}

export default FormInput;