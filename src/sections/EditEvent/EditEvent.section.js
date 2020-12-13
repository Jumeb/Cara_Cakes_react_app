import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal';

import { DatePick } from '../../Components';
import './EditEvent.section.css';

const EditEvent = (props) => {
    const {isOpen, setIsOpen} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <Modal isOpen={isOpen} className="sec-editEvent" overlayClassName="sec-editEvent">
                <div className="editEvent">
                    <div className="editEvent__form-1">
                            <div className="editEvent__group">
                                <input type="text" className="editEvent__input editEvent__length-1" name="email" id="Email" placeholder="Party" required />
                                <label for="email" className="editEvent__label">Purpose</label>
                            </div>
                            <div className="editEvent__group">
                                <input type="text" className="editEvent__input editEvent__length-2" name="password" id="passWord" placeholder="Me and Friends" required />
                                <label for="passWord" className="editEvent__label">For</label>
                            </div>
                            <div className="editEvent__group">
                                <DatePick startDate={startDate} setStartDate={(date) => setStartDate(date)} />
                            </div>
                            <div className="editEvent__group">
                                <textarea type="text" className="editEvent__input editEvent__length-4" name="password" id="passWord" placeholder="I just needed to show some appreciation to all my friends"></textarea>
                                <label for="passWord" className="editEvent__label">Reason</label>
                            </div>
                            <div className="editEvent__group">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <button className="addBtn">Edit Event</button>
                                <button className="addBtn" onClick={() => setIsOpen()}>Cancel</button>
                            </div>
                    </div>
                    <div className="editEvent__form-2 txt-cnt">
                        <h2 className="editEvent-title txt-white">
                            Edit Event
                        </h2>
                    </div>
                </div>
        </Modal>
    )
}

export default EditEvent;
