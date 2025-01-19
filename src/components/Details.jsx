import React from 'react';
import '../App.css';


const Details = () => {
    return (
        <div className="details-container">
            <div className="details-box">
                <h1 className="details-title">Tell us about yourself!</h1>
                <form className="details-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name *</label>
                            <input
                                type="text"
                                id="first-name"
                                placeholder="Enter first name"
                                className="details-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name *</label>
                            <input
                                type="text"
                                id="last-name"
                                placeholder="Enter last name"
                                className="details-input"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email address"
                            className="details-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <div className="phone-input-container">
                            <select className="country-code">
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                                {/* Add more country codes as needed */}
                            </select>
                            <input
                                type="text"
                                id="phone"
                                placeholder="12345 67890"
                                className="phone-input"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location *</label>
                        <input
                            type="text"
                            id="location"
                            placeholder="Enter Location"
                            className="details-input"
                        />
                    </div>
                    <button type="submit" className="details-button">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Details;
