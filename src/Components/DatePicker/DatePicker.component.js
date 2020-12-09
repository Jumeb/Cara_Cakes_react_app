import React from 'react';
import DatePicker from 'react-datepicker';

import './DatePicker.component.css';

const DatePick = (props) => {'transparent'
    const {startDate, setStartDate} = props;
    return (
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp"  className="datePicker__input datePicker__length-3" withPortal fixedHeight placeholderText="Add a date" />
    )
}

export default DatePick;
