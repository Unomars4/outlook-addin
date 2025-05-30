# Outlook Add-in

## Overview

This is a secure, containerized Outlook add-in built using TypeScript and the Office-JS API.


## Tech Choices
 - Client: Vite, React, Shadcn, Typescript, Tailwindcss, OfficeJS
 - Server: Typescript, TypeOrm, NodeJS, Express, JWT, BcryptJS
      - The server stack was chosen for I'm familiar with it and it's simplicity.
 - DB: PostgresSQL

## Resources
- [Express Documentation](https://expressjs.com/)
- [TypeORM Documentation](https://typeorm.io/)
- OfficeJS Documentation:
     - [Understanding the JS Api](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/understanding-the-javascript-api-for-office)
     - [Manifest reference](https://learn.microsoft.com/en-us/office/dev/add-ins/develop/xml-manifest-overview?tabs=tabid-1)
     - [Microsoft add-in docs](https://learn.microsoft.com/en-us/office/dev/add-ins/overview/learning-path-beginner)

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [Docker](https://www.docker.com/get-started)

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
   docker-compose up -d --build
   ```
3. The Client, DB and Server should then be available at the following ports:
   - Client: 5173
   - DB: 5432
   - Server: 3000
  
## Notes

- Contact list users are indicated with a ☎️ emoji next to their name
- Use these credentials to login in to dashboard. email: timber@gmail.com, pw: password

