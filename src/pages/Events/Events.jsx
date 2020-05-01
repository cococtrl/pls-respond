import React, { useState } from 'react';
import styles from './Events.module.css';
import EventForm from '../../components/EventForm/EventForm';

const Events = (props) => {
    const [ formVisible, setVisibility ] = useState(false);
    return (
        <main>
            <h1>Events</h1>
            <button onClick={() => setVisibility(!formVisible)}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </button>
            {
                formVisible
                && <EventForm {...props} />
            }
            {
                props.events.map(({title, _id, description}) => (
                    <section key={_id}>
                        <h1>{title}</h1>
                        <p>Description: {description}</p>
                    </section>
                ))
            }
        </main>
    );
};

export default Events;