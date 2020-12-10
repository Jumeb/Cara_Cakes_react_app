import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

import { DatePick } from '../../Components';
import './EditEvent.section.css';

const EditEvent = (props) => {
    const {error} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <section className="sec-editEvent" id="editEvent">
            {error && (
            <div className="flash">
                <div className="flash__message flash__message-danger">Erro</div>
            </div>)}
    <div className="row-editEvent">
        <div className="editEvent">
            <div className="editEvent__form-1">
                <form action="/editEvent" className="form" method="POST">
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
                        <button type="submit" className="addBtn">Edit Event</button>
                        <a href="/signup100% !important" className="addBtn">Cancel</a>
                    </div>
                </form>
            </div>
            <div className="editEvent__form-2 txt-cnt">
                <h2 className="editEvent-title txt-white">
                    Edit Event
                </h2>
            </div>
        </div>
    </div>
</section>
    )
}

export default EditEvent;
