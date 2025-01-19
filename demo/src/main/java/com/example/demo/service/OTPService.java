package com.example.demo.service;

import com.example.demo.config.TwilioConfig;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OTPService {

    @Autowired
    private TwilioConfig twilioConfig;

    // A map to store OTPs for phone numbers temporarily (this can be replaced by a DB in production)
    private Map<String, String> otpStorage = new HashMap<>();

    // Generate a random 6-digit OTP
    public String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    // Send OTP to the phone number
    public void sendOtp(String phoneNumber) {
        String otp = generateOtp();
        otpStorage.put(phoneNumber, otp);

        Message.creator(
                        new PhoneNumber(phoneNumber), // recipient's phone number
                        new PhoneNumber(twilioConfig.getTwilioPhoneNumber()), // Twilio phone number
                        "Your OTP is: " + otp) // OTP message
                .create();
    }

    // Verify OTP entered by the user
    public boolean verifyOtp(String phoneNumber, String otp) {
        String storedOtp = otpStorage.get(phoneNumber);
        return storedOtp != null && storedOtp.equals(otp);
    }
}
