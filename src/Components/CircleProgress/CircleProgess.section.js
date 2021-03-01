import React from 'react';

import styles from './CircleProgess.module.css';

const CircleProgess = () => {
    return (
         <div class="pie-wrapper progress-45 style-2">
            <span class="label">45<span class="smaller">%</span></span>
            <div class="pie">
            <div class="left-side half-circle"></div>
            <div class="right-side half-circle"></div>
            </div>
            <div class="shadow"></div>
        </div>
    )
}

export default CircleProgess;