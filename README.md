# Sensedia Web App

## Overview

This is the frontend application for Sensedia, built with [Next.js](https://nextjs.org/). It serves as the user interface for interacting with the Sensedia backend.

## Backend Setup

1. Clone the Sensedia backend repository:

Follow the instructions in the backend README to set up and run the server.
Frontend Setup
Clone this repository:


```bash
git clone https://github.com/DiegoFelipe1986/sensedia.git
```
Navigate to the project folder:

```bash
    cd sensedia
```

Create a local environment file:

```bash

    cp .env.example .env.local
```

Edit the .env.local file and set the appropriate values, including the backend API URL.

Install dependencies:

```bash

    npm install
```
Run the development server:

```bash

    npm run dev
```
The Sensedia web app will be accessible at http://localhost:3000/.

Configuration
.env.local
Ensure that the .env.local file is correctly configured. This file includes environment-specific variables, such as the backend API URL.


Contributing

If you'd like to contribute to Sensedia, feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License.
