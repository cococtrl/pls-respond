import React, { Component } from 'react';
import styles from './SignupForm.module.css';
import userService from '../../utils/userService';

class SignupForm extends Component {

    state = this.getInitialState();

    getInitialState() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            error: ''
        }
    }

    isFormValid = () => {
        console.log(this.state.password);
        console.log(this.state.passwordConfirm);
        console.log(this.state.email);
        return(
            this.state.name &&
            this.state.email &&
            this.state.password &&
            this.state.password === this.state.passwordConfirm
        );
    }

    handleChange = e => {
        this.setState({
            error: '',
            ...{[e.target.name]: e.target.value}
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(!this.isFormValid()) return;

        try {
            const { name, email, password} = this.state;
             userService.signup({ name, email, password });
            this.setState(this.getInitialState(), () => {
                this.props.handleSignupOrLogin();
                this.props.history.push('/')
            });
        } catch (error) {
            this.setState({
                name: '',
                email: '',
                password: '',
                passwordConfirm: '',
                error: error.message
            })
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
                    <h2>Signup</h2>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input 
                        id="passwordConfirm" 
                        name="passwordConfirm" 
                        type="password" 
                        value={this.state.passwordConfirm}
                        onChange={this.handleChange}
                    />
                    <button disabled={!this.isFormValid()} type="submit">Submit</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default SignupForm;