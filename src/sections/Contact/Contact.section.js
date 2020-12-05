import React from 'react';

import './Contact.section.css';

const Contact = () => {
    return (
        <section className="sec-contact" id="info">
    <div className="txt-cnt margin-top-medium margin-bottom-medium">
        <h2 className="title-lil-1 txt-white">
            Our ever ready contacts
        </h2>
    </div>
    <div className="row">
        <div className="col-1-2 txt-white">
            <h3 className="title-lil-2">
                Not sure!!! All you need do is call
            </h3>
            <p className="para">
                We always have an ever ready staff to careter to your needs. We are always available 24 hours a day, 365 days a year. So, don't be worried for long just call us.
            </p>
            <h3 className="title-lil-2">
                Are facing difficulties? Hola us at
            </h3>
            <p className="para">
                If you can't get to navigate through our platform efficiently and smoothly, we have a team, which is ready to help you through you difficulties. We are on your side today and forever.
            </p>
        </div>
        <div className="col-1-2 margin-top-small txt-cnt">
            <div className="contact contact-1">
                <div className="contact__list contact__list-1">
                    <span className="contact__icon fas fa-phone-alt"></span>
                    <span className="contact__number contact__number-1">681-726-633</span>
                    <span className="contact__number">681-726-633</span>
                </div>
            </div>
            <div className="contact contact-2">
                <div className="contact__list contact__list-2">
                    <span className="contact__icon fas fa-phone-alt"></span>
                    <span className="contact__number contact__number-2">681-726-633</span>
                    <span className="contact__number">681-726-633</span>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Contact;
