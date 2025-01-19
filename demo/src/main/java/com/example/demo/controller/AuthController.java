package com.example.demo.controller;

import com.example.demo.service.OTPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private OTPService otpService;

    // Endpoint to send OTP to a phone number
    @PostMapping("/send-otp")
    public String sendOtp(@RequestParam String phoneNumber) {
        otpService.sendOtp(phoneNumber);
        return "OTP sent successfully!";
    }

    // Endpoint to verify OTP entered by the user
    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestParam String phoneNumber, @RequestParam String otp) {
        boolean isVerified = otpService.verifyOtp(phoneNumber, otp);
        if (isVerified) {
            return "OTP verified successfully!";
        } else {
            return "Invalid OTP!";
        }
    }
}
