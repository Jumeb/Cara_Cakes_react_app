import React from 'react'

import './ButtonOne.component.css'

const ButtonOne = (props) => {
    const {styles, link, title} = props;
    return <a href={link} className={styles}>{title}</a>
}

export default ButtonOne;
