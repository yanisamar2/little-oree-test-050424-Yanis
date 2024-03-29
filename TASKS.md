# Tasks

## Task 1: Login a user

### Objective:

Develop both frontend and backend logic to allow the following user to login:

- john.doe@tucoenergie.fr
- Azerty01!

### Requirements:

1. Analyse the codebase to understand the application architecture.
2. Implement a JWT authentication allowing the user to access to its products page.
3. Ensure proper error handling and validation.

### Notes:

- The application uses a Postgres Database. It is not necessary to install a postgres client for this excercie. Analyzing the database models in the models folder should be sufficient to write the SQL queries.
- The ENV variables needed to connect to the Database should have been sent by email. If it is not the case, please notify the hiring team.
- We currently use Redux at Tucoenergie for the state management. Feel free to use any other state management solution if you are not familiar with it.
- If you are blocked feel free to bypass the login and jump directly to the task 2.

## Task 2: Display all user's renovation products

### Objective:

After the user logins, fetch all user's renovation products from the database and display them following Figma's design.

### Requirements:

1. Implement a responsive products page following this [Figma design](https://www.figma.com/file/rrg46xh2OSbqI8AU2Leso2/Page-Test?type=design&node-id=0%3A1&mode=design&t=EyLCLBOqutboS0tc-1)
2. Use appropriate styling and components to enhance the user experience.

### Notes:

- The project uses both scss files and styled components for styling. Feel free to use any options (or others) according to your preference.

## Task 3: Open question

The data team's backend has provided an endpoint returning an array of all possible solar panel layouts for a given roof. The array contains 4x pixel coordinates per solar panel (precision on the order of a pixel). The image of the associated house roof is also sent in the backend's reponse.

```
{
    coordinatesInPixel : [[coord1, coord2, coord3, coord4], [coord1, coord2, coord3, coord4], ...],
    image : "base64..."
}
```

### Objective:

In a few lines of pseudocode, could you propose the beginning of a frontend solution enabling the user to choose the power and layout of their installation?

### Notes:

Each solar panel has a power of 500Wc. The default layout for an installation is 2x3 solar panels = 3000Wc of total power. By adding or removing a solar panel a user can raise or lower the power.
