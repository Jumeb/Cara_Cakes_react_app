import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

import { DatePick } from '../../Components';
import './AddEvent.section.css';

const AddEvent = (props) => {
    const {error} = props;
    const [startDate, setStartDate] = useState(null);

    return (
        <section className="sec-addEvent" id="addEvent">
            {error && (
            <div className="flash">
                <div className="flash__message flash__message-danger">Erro</div>
            </div>)}
    <div className="row-addEvent">
        <div className="addEvent">
            <div className="addEvent__form-1">
                <form action="/addEvent" className="form" method="POST">
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
                        <button type="submit" className="addBtn">Add Event</button>
                        <a href="/signup100% !important" className="addBtn">Cancel</a>
                    </div>
                </form>
            </div>
            <div className="addEvent__form-2 txt-cnt">
                <h2 className="addEvent-title txt-white">
                    Add Event
                </h2>
            </div>
        </div>
    </div>
</section>
    )
}

export default AddEvent;
