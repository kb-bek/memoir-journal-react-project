import './Button.css';

function Button(props) {
    return (
        <button className="button save-btn" >{props.label}</button>
    )
}

export default Button;


