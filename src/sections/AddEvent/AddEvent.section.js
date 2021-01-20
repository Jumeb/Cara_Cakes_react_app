import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { DatePick } from '../../Components';
import styles from './AddEvent.module.css';

const AddEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} closeTimeoutMS={400} className="sec-addEvent" overlayClassName="sec-addEvent">

                <div className="addEvent">
                    <div className="addEventForm-1">
                            <div className="addEventGroup">
                                <input type="text" className="addEventInput addEventLength-1" name="email" id="Email" placeholder="Party" required />
                                <label for="email" className="addEventLabel">Purpose</label>
                            </div>
                            <div className="addEventGroup">
                                <input type="text" className="addEventInput addEventLength-2" name="password" id="passWord" placeholder="Me and Friends" required />
                                <label for="passWord" className="addEventLabel">For</label>
                            </div>
                            <div className="addEventGroup">
                                <DatePick startDate={startDate} setStartDate={(date) => setStartDate(date)} />
                            </div>
                            <div className="addEventGroup">
                                <textarea type="text" className="addEventInput addEventLength-4" name="password" id="passWord" placeholder="I just needed to show some appreciation to all my friends"></textarea>
                                <label for="passWord" className="addEventLabel">Reason</label>
                            </div>
                            <div className="addEventGroup">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button className="addBtn">Add Event</button>
                                <button className="addBtn" onClick={() => setIsOpen()}>Cancel</button>
                            </div>
                    </div>
                    <div className="addEventForm-2 txt-cnt">
                        <h2 className="addEvent-title txt-white">
                            Add Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default AddEvent;
