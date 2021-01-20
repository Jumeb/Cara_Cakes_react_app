import React from 'react'

import styles from './Links.module.css';

const Links = (props) => {
    const {data} = props
    return <li className={data.listStyles}><a href={data.link} className={data.styles}>{data.title}</a></li>
}

export default Links;
