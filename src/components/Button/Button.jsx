import './Button.css';
import { useState } from 'react';

function Button() {

    const [text, setText] = useState('Открыть')

    const clicked = () => {
        setText('Закрыть')
    }

    return (
        <button onClick={clicked} className="button save-btn" >{text}</button>
    )
}

export default Button;


