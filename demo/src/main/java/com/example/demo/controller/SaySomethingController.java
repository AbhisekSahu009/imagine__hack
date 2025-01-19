package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class SaySomethingController {

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBmcSbmn13fTBaGryP61xGZC1MoPHugPes";

    @PostMapping("/say-something")
    public ResponseEntity<Map<String, Object>> handleSaySomething(@RequestBody Map<String, String> request) {
        String message = request.get("message");

        if (message == null || message.trim().isEmpty()) {
            Map<String, Object> response = new HashMap<>();
            response.put("error", "Message is required");
            return ResponseEntity.badRequest().body(response);
        }

        System.out.println("Received message: " + message);

        // Call the Gemini API (example: BTC/USD ticker)
        RestTemplate restTemplate = new RestTemplate();
        String symbol = "btcusd"; // Use the appropriate symbol based on the message or logic
        Map<String, String> uriVariables = new HashMap<>();
        uriVariables.put("symbol", symbol);

        try {
            ResponseEntity<Map> geminiResponse = restTemplate.getForEntity(GEMINI_API_URL, Map.class, uriVariables);

            // Combine responses
            Map<String, Object> response = new HashMap<>();
            response.put("userMessage", message);
            response.put("geminiData", geminiResponse.getBody());

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to fetch Gemini data");
            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}
