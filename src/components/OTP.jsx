import React, { useState } from 'react';
import '../App.css';

const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); // Only take the last entered digit
        setOtp(newOtp);

        // Move to the next input automatically if the current one is filled
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    return (
        <div className="otp-container">
            <div className="otp-box">
                <h1 className="otp-title">Enter OTP</h1>
                <p className="otp-instruction">
                    Please wait, a one-time password (OTP) will be sent to your registered number/email shortly.
                    Use it to verify your account securely.
                </p>
                <div className="otp-input-container">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            className="otp-input"
                        />
                    ))}
                </div>
                <button className="otp-button">Verify email</button>
                <div className="otp-footer">
                    <span className="otp-back">← Back to Sign Up</span>
                    <span className="otp-resend">↻ Resend it</span>
                </div>
            </div>
        </div>
    );
};

export default OTP;
