# INST_377_Group_Final_Repo

## Description
Our project gets the lyrics to your favorite songs! Enter a song name and an artist name to get started. Based on what you entered we will make an API to return you the lyrics to that song. Hit the Show lyrics button on the project Functionality page to see the whole lyrics printed out. The lyrics will also be played at the top of screen in a sing-a-long style slider. Our site also stores your recent seraches. Just hit the table button to see the last 5 songs you listened to. For clarification see the about page.

## Target Browsers
- iOS
- Android
- Chrome
- Firefox

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

## Running the Application
1. Start the server:
    ```bash
    npm init
    Is this Ok? (yes) yes
    npm start
    ```

## API Documentation
### GET /api/data
- Retrieves data from the database.
- Response example:
    ```json
    {
        "data": "example"
    }
    ```

### POST /api/data
- Writes data to the database or fetches and manipulates external data.
- Request body example:
    ```json
    {
        "key": "example"
    }
    ```

## Known Bugs
- List of known bugs.

## Future Development Roadmap
- Roadmap for future development.
