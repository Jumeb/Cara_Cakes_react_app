import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { DatePick } from '../../Components';
import './AddEvent.section.css';

const AddEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} closeTimeoutMS={400} className="sec-addEvent" overlayClassName="sec-addEvent">

                <div className="addEvent">
                    <div className="addEvent__form-1">
                            <div className="addEvent__group">
                                <input type="text" className="addEvent__input addEvent__length-1" name="email" id="Email" placeholder="Party" required />
                                <label for="email" className="addEvent__label">Purpose</label>
                            </div>
                            <div className="addEvent__group">
                                <input type="text" className="addEvent__input addEvent__length-2" name="password" id="passWord" placeholder="Me and Friends" required />
                                <label for="passWord" className="addEvent__label">For</label>
                            </div>
                            <div className="addEvent__group">
                                <DatePick startDate={startDate} setStartDate={(date) => setStartDate(date)} />
                            </div>
                            <div className="addEvent__group">
                                <textarea type="text" className="addEvent__input addEvent__length-4" name="password" id="passWord" placeholder="I just needed to show some appreciation to all my friends"></textarea>
                                <label for="passWord" className="addEvent__label">Reason</label>
                            </div>
                            <div className="addEvent__group">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button className="addBtn">Add Event</button>
                                <button className="addBtn" onClick={() => setIsOpen()}>Cancel</button>
                            </div>
                    </div>
                    <div className="addEvent__form-2 txt-cnt">
                        <h2 className="addEvent-title txt-white">
                            Add Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default AddEvent;
