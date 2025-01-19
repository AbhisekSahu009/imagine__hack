import React from 'react';
import '../App.css';

const SignUp = () => {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1 className="signup-title">Sign Up</h1>
                <form className="signup-form">
                    <label className="signup-label" htmlFor="phone-number">Phone Number *</label>
                    <input
                        type="text"
                        id="phone-number"
                        placeholder="Enter Phone Number"
                        className="signup-input"
                    />
                    <button type="button" className="signup-button">Send OTP</button>
                </form>
                <button className="social-button whatsapp">
                    <i className="fab fa-whatsapp"></i> Sign In with WhatsApp
                </button>
                <button className="social-button instagram">
                    <i className="fab fa-instagram"></i> Sign In with Instagram
                </button>
            </div>
        </div>
    );
};

export default SignUp;
