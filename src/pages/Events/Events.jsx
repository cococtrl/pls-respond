import React from 'react';
// import styles from './Events.module.css';
import EventForm from '../../components/EventForm/EventForm';

const Events = (props) => {
    return (
        <main>
            <h1>Events</h1>
            <EventForm {...props}/>
        </main>
    )
}

export default Events;