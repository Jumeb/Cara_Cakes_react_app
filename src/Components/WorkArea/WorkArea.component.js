import React from 'react';

import './WorkArea.component.css';

const WorkArea = (props) => {
    const {children} = props;
    return (
        <div className="panel__event">{children}</div>
    )
}

export default WorkArea;
