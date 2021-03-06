import React from 'react';
import {IoPhonePortrait} from 'react-icons/io5';

import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.secContact} id="info">
        <h2 className={styles.title}>
            Our ever ready contacts
        </h2>
    <div className={styles.secContainer}>
        <div className={styles.secSide}>
            <h3 className={styles.subTitle}>
                Not sure!!! All you need do is call
            </h3>
            <p  style={{color: '#eee'}}>
                We always have an ever ready staff to careter to your needs. We are always available 24 hours a day, 365 days a year. So, don't be worried for long just call us.
            </p>
            <h3 className={styles.subTitle}>
                Are facing difficulties? Hola us at
            </h3>
            <p  style={{color: '#eeeeee'}}>
                If you can't get to navigate through our platform efficiently and smoothly, we have a team, which is ready to help you through you difficulties. We are on your side today and forever.
            </p>
        </div>
        <div className={[styles.secSide, styles.marginTopSmalltxtCnt].join(' ')}>
            <div className={[styles.contact, styles.contact1].join(' ')}>
                <div className={[styles.contactList, styles.contactList1].join(' ')}>
                    <span className={styles.contactIcon}><IoPhonePortrait /></span>
                    <span className={[styles.contactNumber, styles.contactNumber1].join(' ')}>681-726-633</span>
                    <span className={styles.contactNumber}>681-726-633</span>
                </div>
            </div>
            <div className={[styles.contact, styles.contact2].join(' ')}>
                <div className={[styles.contactList, styles.contactList2].join(' ')}>
                    <span className={styles.contactIcon}><IoPhonePortrait /></span>
                    <span className={[styles.contactNumber, styles.contactNumber2].join(' ')}>681-726-633</span>
                    <span className={styles.contactNumber}>681-726-633</span>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default Contact;
