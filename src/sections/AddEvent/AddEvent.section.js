import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { Button, DatePick, Input, Link, TextArea } from '../../Components';
import styles from './AddEvent.module.css';

const AddEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} closeTimeoutMS={400} className={styles.secAddEvent} overlayClassName={styles.secAddEvent}>
                <div className={styles.addEvent}>
                    <div className={styles.addEventForm}>
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
                        <div className={styles.addButtons}>
                            <Link link="#" title="Edit" />
                            <Button onClick={() => setIsOpen(false)} title="Cancel" />
                        </div>
                    </div>
                    <div className={styles.addEventContainer}>
                        <h2 className={styles.title}>
                            Add Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default AddEvent;
