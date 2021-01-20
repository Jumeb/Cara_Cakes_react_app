import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { DatePick } from '../../Components';
import styles from './EditEvent.module.css';

const EditEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} className="sec-editEvent" overlayClassName="sec-editEvent">
                <div className="editEvent">
                    <div className="editEventForm-1">
                            <div className="editEventGroup">
                                <input type="text" className="editEventInput editEventLength-1" name="email" id="Email" placeholder="Party" required />
                                <label for="email" className="editEventLabel">Purpose</label>
                            </div>
                            <div className="editEventGroup">
                                <input type="text" className="editEventInput editEventLength-2" name="password" id="passWord" placeholder="Me and Friends" required />
                                <label for="passWord" className="editEventLabel">For</label>
                            </div>
                            <div className="editEventGroup">
                                <DatePick startDate={startDate} setStartDate={(date) => setStartDate(date)} />
                            </div>
                            <div className="editEventGroup">
                                <textarea type="text" className="editEventInput editEventLength-4" name="password" id="passWord" placeholder="I just needed to show some appreciation to all my friends"></textarea>
                                <label for="passWord" className="editEventLabel">Reason</label>
                            </div>
                            <div className="editEventGroup">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button className="addBtn">Edit Event</button>
                                <button className="addBtn" onClick={() => setIsOpen()}>Cancel</button>
                            </div>
                    </div>
                    <div className="editEventForm-2 txt-cnt">
                        <h2 className="editEvent-title txt-white">
                            Edit Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default EditEvent;
