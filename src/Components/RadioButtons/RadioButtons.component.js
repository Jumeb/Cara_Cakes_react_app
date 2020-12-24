import React from 'react';

import './RadioButton.component.css';

const RadioButton = (props) => {
    const {type, setType} = props;
    return (
        <div className="form__radio-group" onClick={() => setType(type)} >
            <input type="radio" class="form__radio-input" id={type} name="size" />
            <label for={type} class="form__radio-label">
                <span  class="form__radio-button" />
                {type}
            </label>
        </div>
    )
}

export default RadioButton;
