# INST_377_Group_Final_Repo
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
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Description 

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
    ```
### Running the Application
To start the project, use the following command:

```sh
  npm init
    Is this Ok? (yes) yes
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
- **PATCH /api/items/:id**: Update an existing item.
  - Request Body: `{ "name": "Updated Name", "description": "Updated Description" }`
- **DELETE /api/items/:id**: Delete an item by ID.

### Known Bugs

