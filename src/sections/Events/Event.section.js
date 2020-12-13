import React, { useState } from 'react';

import EventList from './EventList/Event.list';
import EventDetail from './EventDetail/Event.detail';
import './Event.section.css'
import AddEvent from '../AddEvent/AddEvent.section';
import EditEvent from '../EditEvent/EditEvent.section';



const EventSection = (props) => {
    const {isDetail, setIsDetail} = props;
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const toggleAdd = () => {
        setIsOpenAdd(!isOpenAdd);
    }

    const toggleEdit = () => {
        setIsOpenEdit(!isOpenEdit);
    }

    return (
        <div className="event">
            <EventList setIsOpen={toggleAdd} setIsOpenEdit={toggleEdit} isDetail={isDetail} setIsDetail={setIsDetail} />
            <EventDetail isDetail={isDetail} setIsDetail={setIsDetail}/>
            <AddEvent isOpen={isOpenAdd} setIsOpen={toggleAdd} />
            <EditEvent isOpen={isOpenEdit} setIsOpen={toggleEdit} />
        </div>
    )
}

export default EventSection;
