import React, { Component } from 'react';
import styles from './EventForm.module.css';

import userService from '../../utils/userService';
import eventService from '../../utils/eventService';

class EventForm extends Component {

    state = this.getInitialState();

    getInitialState() {
        return {
            title: '',
            desctiption: '',
            error: ''
        };
    }

    isFormValid = () => {
        return (
            this.state.title && 
            this.state.desctiption
        )
    }

    handleChange = e => {
        this.setState({
            error: '',
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
        try {
            const { title, description } = this.state;
            const addedBy = userService.getUser()._id
            await userService.create({ title, description, addedBy });
            this.setState(this.getInitialState(), () => {
                this.props.handleGetEvents();
                this.props.history.push('/events')
            });
        } catch (error) {
            this.setState({
                title: '',
                desctiption: '',
                error: error.message 
            });
        }
    }

    render () {
        return (
        <section className={styles.section}>
                 {
                    this.state.error && <p>{this.state.error}</p>
                }
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>New Event Form</legend>

                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        name="title" 
                        type="title" 
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">Description</label>
                    <input 
                        id="description" 
                        name="description" 
                        type="description" 
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <button disabled={!this.isFormValid()} type="submit">Create Event</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default EventForm;