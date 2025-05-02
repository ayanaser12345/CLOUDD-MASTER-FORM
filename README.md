# Contact Form Project

A simple contact form built with Node.js, Express, and Nodemailer for sending emails through Gmail SMTP.

## Description

This project implements a web-based contact form that allows users to send emails directly through a Gmail account. It features a clean user interface and server-side email processing.

## Features

- Clean and responsive contact form
- Email functionality using Nodemailer
- Gmail SMTP integration
- Form validation
- Success/error notifications

## Technologies Used

- Node.js
- Express.js
- Nodemailer
- HTML5
- CSS3
- JavaScript (ES6+)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/contact-form.git
cd contact-form
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file in the root directory and add your credentials
```env
PORT=5000
USER_EMAIL=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail Setup

To use Gmail SMTP:
1. Enable 2-Step Verification in your Google Account
2. Generate an App Password:
   - Go to Google Account Settings
   - Navigate to Security
   - Under "Signing in to Google," select App Passwords
   - Generate a new App Password for "Mail"
   - Use this password in your `.env` file

## Usage

1. Start the server
```bash
npm start
```

2. For development with auto-reload
```bash
npm run dev
```

3. Access the form at
```
http://localhost:5000
```
## Environment Variables

Create a `.env` file with the following variables:
```env
PORT=5000
USER_EMAIL=your-email@gmail.com
EMAIL_PASS=your-app-password
```
