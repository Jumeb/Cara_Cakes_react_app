import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { Button, ButtonOne, DatePick, Input, Link, LinkOne, TextArea } from '../../Components';
import styles from './EditEvent.module.css';

const EditEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} className={styles.secEditEvent} overlayClassName={styles.secEditEvent}>
                <div className={styles.editEvent}>
                    <div className={styles.editEventForm}>
                            <Input
                                placeholder="Party"
                                type="text"
                                label="Purpose"
                                len={2}
                            />
                            <Input
                                placeholder="Me and Friends"
                                type="text"
                                label="For"
                                len={3}
                            />
                            <DatePick startDate={startDate} setStartDate={(date) => setStartDate(date)} />
                            <TextArea
                                placeholder="Showing appreciation to friends"
                                type="text"
                                label="Reason"
                                len={5}
                            />
                            <div className={styles.editButtons}>
                                <Link link="#" title="Edit" />
                                <Button onClick={() => setIsOpen(false)} title="Cancel" />
                            </div>
                    </div>
                    <div className={styles.editEventContainer}>
                        <h2 className={styles.title}>
                            Edit Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default EditEvent;
