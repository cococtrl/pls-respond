import React from 'react';
// import styles from './Events.module.css';
import EventForm from '../../components/EventForm/EventForm';

const Events = (props) => {
    return (
        <main>
            <h1>Events</h1>
            {
                props.events.map(({title, description, _id}) => (
                <section key={_id}>{title}
                <h1>{title}</h1>
                <p>Description: {description}</p>
                </section>
                ))
            }
            <EventForm {...props}/>
        </main>
    )
}

export default Events;