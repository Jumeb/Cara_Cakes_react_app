import React, { useState } from 'react';

import EventList from './EventList/Event.list';
import EventDetail from './EventDetail/Event.detail';
import styles from './Event.module.css'
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
        <div className={styles.event}>
            <EventList setIsOpen={toggleAdd} isDetail={isDetail} setIsDetail={setIsDetail} />
            <EventDetail isDetail={isDetail} setIsDetail={setIsDetail} setIsOpenEdit={toggleEdit}/>
            <AddEvent isOpen={isOpenAdd} setIsOpen={toggleAdd} />
            <EditEvent isOpen={isOpenEdit} setIsOpen={toggleEdit} />
        </div>
    )
}

export default EventSection;
