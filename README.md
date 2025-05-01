# Outlook Add-in Project

## Overview

This is a secure, containerized Outlook add-in built using TypeScript and the Office JavaScript API. The add-in leverages JWT-based authentication to ensure secure communication between the add-in and external services.

## Features

- **JWT-based Authentication**: Ensures secure authentication between users and external services.
- **Containerized**: The add-in is containerized using Docker for consistent development and deployment.
- **Compatible with Outlook**: Designed to work within the Outlook client, providing a seamless user experience.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/get-started)
- [pnpm](https://pnpm.io/) (for managing dependencies)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Unomars4/outlook-addin.git
   cd outlook-addin
   ```
## Docker Compose Setup

If you prefer to run the add-in using Docker Compose for a more streamlined setup, follow these steps:

1. Ensure you have Docker Compose installed. If not, you can follow the installation instructions [here](https://docs.docker.com/compose/install/).

2. Build and start the add-in using Docker Compose:

   ```bash
   docker-compose up --build
   ```


