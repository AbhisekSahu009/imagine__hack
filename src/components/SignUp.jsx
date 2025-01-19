import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/send-otp', null, {
                params: { phoneNumber },
            });
            console.log(response.data); // You can log or handle success message
            setOtpSent(true); // Set OTP sent flag to true to show OTP screen
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

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
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    <button type="button" className="signup-button" onClick={handleSendOtp}>
                        Send OTP
                    </button>
                </form>
                {otpSent && (
                    <button className="social-button whatsapp">
                        <i className="fab fa-whatsapp"></i> Sign In with WhatsApp
                    </button>
                )}
                <button className="social-button instagram">
                    <i className="fab fa-instagram"></i> Sign In with Instagram
                </button>
            </div>
        </div>
    );
};

export default SignUp;
