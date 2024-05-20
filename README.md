# INST_377_Group_Final_Repo

## Vercel Link
https://inst-377-group-final-repo-lyart.vercel.app/

## Table of Contents
- [Project Description](#project-description)
- [Target Browsers](#target-browsers)
- [Developer Manual](#developer-manual)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Running Tests](#running-tests)
  - [API Documentation](#api-documentation)
  - [Known Bugs](#known-bugs)
  - [Roadmap for Future Development](#roadmap-for-future-development)

## Project Description
Disclaimer: Due to technical difficulties with the API for our initial project proposal, we recieved permission to change our project to a lyric finder.

Our project gets the lyrics to your favorite songs! Enter a song name and an artist name to get started. Based on what you entered we will make an API to return you the lyrics to that song. Hit the Show lyrics button on the project Functionality page to see the whole lyrics printed out. The lyrics will also be played at the top of screen in a sing-a-long style slider. Our site also stores your recent searches. Just hit the table button to see the last 5 songs you listened to. For clarification see the about page.

## Target Browsers
- iOS
- Android
- Chrome
- Firefox
- 
## Link to Developer Manual
[Developer Manual](README.md)

---

---

# Developer Manual

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/benwesson/INST_377_Group_Final_Repo.git
    ```
2. Navigate to the project directory:
    ```bash
    cd INST_377_Group_Final_Repo
    ```
3. Install dependencies:
    ```bash
    npm install
    npm install express
    npm install nodemon
    npm install @supabase/supabase-js
    npm install body-parser
    ```
### Running the Application
To start the project, use the following command:

```sh
  npm init
```sh
  npm init
    Is this Ok? (yes) yes
  npm start
```
  npm start
```

### Running Tests
To run tests, use:

```sh
npm test
```
### API Documentation
Here are the available API endpoints for the server application:

- **GET /api/items**: Fetch all items.
- **POST /api/items**: Add a new item.
  - Request Body: `{ "name": "Item Name", "description": "Item Description" }`

### Known Bugs
- Slider will occasionally display duplicate lyrics
- Slider will occasionally display extra divs

### Roadmap for Future Development
- Correct slider bugs
- Add feature to link user to song music video
- Develop manually controlable slider

