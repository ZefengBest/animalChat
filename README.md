# IT5007 Team Project - Team 23 - Animal Chat

## Team Member: Jin Zihang & Niu Zefeng

# Implemented Features

- Register & login with MongoDB Atlas as the database service
- Bootstrap with flex for styling
- The animal selection page (each animal has its own history stored in local storage)
- The chat page which handles message overflow
- Animal response using the OpenAI API
- Animated response (typing effect & sound effect)

## Setting up your development environment

- Visual Studio Code
- Visual Studio Code extension `Eslint` and `Prettier`
- Node.js (this project is developed with Node.js `v20.8.0`)

## Start the application

1. Open a terminal in the project's root directory
2. Run `npm install` to install all dependencies
3. Run `npm start` to start the application server
4. The Animal Chat application should be automatically opened, if not, visit [this link](http://localhost:3000)

## Start the server

1. Open a terminal in the project's root directory
2. Run `npm install mongodb express cors dotenv axios` to install all backend dependencies
3. Run `node server/server.js` to start the backend server
4. `Server is running on port: xxxx` should be displayed in the terminal
5. MongoDB Atlas connection string is stored in `server/config.env` file

## Contribution guidelines

- Create branches for developing features and follow this pattern while naming your branch: `<developer>/<feature-to-develop>` (e.g. `jinz/message-animation`)
- For commit messages and pull request titles, capitalize the first character and do not leave a `.` at the end
- Use `npm run lint:fix` and `npm run format` before pushing local changes to the remote
- While merging changes back, squash all commits before creating a GitHub pull request, then invite all other members to review your changes
