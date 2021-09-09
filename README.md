# Porto (Server)

**Creators**: Andy Zhong, Kimberly Kruedelbach, Lawrence Hau, Roxie Schnoor, Zachary Rehbein.

Porto is a web app that was created using React to browse portfolios of all users in our own database created with Express. User can upload their own user information, project details, and images.

![profiles](https://i.imgur.com/sshZyKL.png)

### Technology Used

- **Express**
- **Handlebars**
- **Mongoose**
- **NodeJS**

### Install Instructions

- Fork and Clone this repository, along with the porto-client to provide the frontend data.

In your terminal after cloning, run:

**`npm install`** or **`npm i`**
**`node index.js`**

### Features

- Add, edit, and delete user information in database with interactive display using Handlebars.
- View data in JSON format.

### Approach

Started by identifying the type information that would need to be provided by each user. From there, we set up the schema to perform CRUD actions using input data.

### Challenges

- Formatting Handlebars so that the client could interact with the database while at the same time having a displayable backend with JSON.
