NodeJS Hotel Booking Demo REST API

this is Modular Application that provides REST API for an Booking Hotel
Features

The Application supports adding,updating removing any of theses entities

    Users
    Hotels
    Rooms
    Security Services

Technologies Used

    ExpressJS
    NodeJS
    MongoDB
    JWT
    OAuth

Contributor Guidelines

Thank you for your interest in contributing to our project! To ensure the security of our application and your own privacy, we recommend that contributors create their own OAuth applications on the OAuth provider's platform and obtain their own client ID and client secret. This approach allows you to use your own credentials during development and testing without exposing sensitive information.

Steps to Get Started

    Create Your Own OAuth Application:
        Go to the OAuth provider's developer portal or platform (e.g., Google Developers Console, GitHub Developer Settings).
        Create a new OAuth application for your development environment.

    Obtain Your Client ID and Client Secret:
        Once your OAuth application is created, you will receive a client ID and client secret. These are unique to your application and should be kept private.

    Sample Environment Configuration:
        In the project repository, you will find a sample environment configuration file (e.g., .env.example). This file contains placeholders for the OAuth credentials.
        Create a copy of this sample file and name it .env. Fill in your own client ID and client secret in this file.

    Example .env:

    makefile

    CLIENT_ID=YOUR_CLIENT_ID_HERE
    CLIENT_SECRET=YOUR_CLIENT_SECRET_HERE

    Configure Your Development Environment:
        Configure your development environment to load the OAuth credentials from the .env file you created.

    In RESTful's APIs
         AUTHORIZATION URL
            https://accounts.google.com/o/oauth2/auth
        ACCESS TOKEN URL
            https://accounts.google.com/o/oauth2/token
    Start Contributing:
        Now that your environment is set up with your own OAuth credentials, you can safely contribute to the project, test features, and make improvements.

Why This Approach?

    Using your own OAuth credentials ensures the security of the application and protects your personal data.
    It allows contributors to work independently without sharing sensitive information.
    It aligns with best practices for OAuth development and security.

Get Started

    CLone the repo to your machine

    then run following command

    npm start

In the nearest future I will add some more features

                                                 Have Fun 😁😁
