# KinSpace - Simplifying Social Connections for Everyone

KinSpace is a web application designed to create meaningful and secure connections, especially for older adults and underrepresented communities. Built with React.js and Spring Boot, KinSpace leverages the power of Gemini API, Instagram API, and WhatsApp API to deliver an intuitive, inclusive, and AI-powered social media experience.

---

## Features

1. **Simple and Familiar Interface**:
   - Inspired by popular platforms like WhatsApp and Instagram for effortless navigation.

2. **AI-Powered Accessibility**:
   - Voice-to-text functionality for easy content creation.
   - Image generation from text prompts using Gemini API.

3. **Personalized Feed**:
   - Curated content based on user interests and location.

4. **Secure and Trusted Login Options**:
   - Login via WhatsApp or Instagram for added security and familiarity.

5. **Seamless Media Sharing**:
   - Share text, images, and videos with public or private audiences.

6. **Community-Centric Connectivity**:
   - Public forums for open discussions.
   - Location-based peer connections for local engagement.

---

## Tech Stack

### Frontend
- **React.js**: For building a responsive and user-friendly interface.
- **Axios**: For efficient API communication.

### Backend
- **Spring Boot**: For a robust and scalable backend infrastructure.
- **Hibernate**: For database management and ORM.

### APIs
- **Gemini API**: Powers voice-to-text and AI-based image generation features.
- **Instagram API**: Facilitates secure login and media integration.
- **WhatsApp API**: Provides secure login and messaging capabilities.

---

## Installation and Setup

### Prerequisites
- Node.js (v20 or above)
- Java (JDK 11 or higher)
- Maven
- MySQL or any relational database
- API keys for Gemini API, Instagram API, and WhatsApp API

### Steps to Run

1. **Clone the Repository**:
   bash
   git clone https://github.com/your-username/kinspace.git
   cd kinspace
   

2. **Frontend Setup**:
   bash
   cd frontend
   npm install
   npm start
   

3. **Backend Setup**:
   - Navigate to the backend directory:
     bash
     cd backend
     
   - Configure the database in `application.properties`.
   - Build and run the Spring Boot application:
     bash
     mvn clean install
     mvn spring-boot:run
     

4. **Environment Variables**:
   - Add your API keys for Gemini, Instagram, and WhatsApp in the `.env` file for the frontend and `application.properties` for the backend.

---

## Usage

1. **Login**:
   - Log in using WhatsApp or Instagram for a secure and familiar experience.

2. **Create and Share Content**:
   - Share thoughts, images, and videos seamlessly.
   - Use AI tools for voice-to-text and image generation.

3. **Engage with the Community**:
   - Participate in public forums or connect privately with friends and family.
   - Discover local peers and communities.

---





