import React from 'react';

import Profile from '../Profile/Profile.component';
import SearchBar from '../SearchBar/SearchBar.component';
import './WorkArea.component.css';

const WorkArea = (props) => {
    const {children, isDetail} = props;
    return (
        <div className={isDetail ? "panel__eventDetail" : "panel__event"}>
            {children}
            <div className="panel__event-header">
                <SearchBar />
                <Profile />
            </div>
        </div>
    )
}

export default WorkArea;
