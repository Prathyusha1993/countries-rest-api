### REST Countries API with color theme switcher

This application is built inspired by a coding challenge of FrontEnd Mentor. Check [here](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) for more details


### Steps followed to build this application

To build any production ready web applications, we have to follow some steps listed below

#### Requirements clarification

Before we start building, we need to get as much clarity as possible from designers and product managers on the requirements.

1. Design clarification
    1. Navigate through all the designs to get overall picture
    2. Questions to be asked
        1. Only web or mobile responsive?
        2. Dark mode / light mode
        3. Error case scenarios
            1. User action error
            2. Business logic error
            3. Network error
    3. User experience improvements

2. API related questions
    1. API documentation complete and ready?
    2. REST or GraphQL?
    3. All HTTP methods clearly documented?
    4. Error case scenarios clearly documented?
    5. etc

#### Implementation steps

Once there is clarity in requirements then follow the below steps to implement

1. Technology choices - get a clarity on what technology should be used and why
    1. React JS
        1. Fast development with reusable UI components
    2. Redux
        1. Better state management
    3. Sass
        1. Clean, easy and less CSS

2. Implementation
    1. Create react app
        1. Use some template builders to bootstrap the app with necessary artifacts
    2. Components design
        1. Identify components
            1. Go through designs and identify all the components to write code
        2. Identify state vs stateless components
        3. Identify props to be passed to the components
    3. Write code
        1. Iteratively write code and improve it with code reviews
        2. Write reusable components and functions
    4. Add styling
        1. Style the components as per the designs
    5. Run the code and verify
    6. Logging
        1. Call logging api to store in server
    7. Tests
        1. Unit tests
        2. Integration tests
    8. Deploy to production
        1. Verify if everything is fine
    9. Bugs
        1. If any bugs, fix them

### Work Breakdown

We have to breakdown the work into smaller stories to be worked to collaborate with the team. In this phase, we go through low level details to make sure we have all the necessary info to build the application, and find out proactively if there are any challenges.

#### React Components

According to the designs, the following React components have been identified

1. React Components
    1. Home Page
        1. Header bar
            1. Where in the world
            2. Theme switcher
        2. Menu bar
            1. Search box
            2. Filter by region
        3. Body
            1. Country cards
                1. Flag
                2. Details
                    1. Name
                    2. Population
                    3. Region
                    4. Capital
    2. Country specific page
        1. Header bar
            1. Where in the world
            2. Theme switcher
        2. Navigation bar
            1. Back button
        3. Body Section
            1. Left Section
                1. Flag
            2. Right Section
                1. Header
                    1. Country Name
                2. Details
                    1. Column 1
                        1. Details 1
                    1. Column 2
                        1. Details 2
                1. More Details
                    1. Border Countries
                        1. List of country name icons

2. Interactions
    1. Home Page
        1. Theme Switcher
            1. Toggle between light and dark modes
        2. Search
            1. Search for a specific country based on search text
            2. Display only those matching countries
        3. Filter by region
            1. On Select, display countries related to the region
        4. Country card click
            1. Navigate to the country specific page
    4. Country specific page
        1. Back button
            1. Navigate to home page
        2. Border countries
            1. Icon
                1. On click, navigate to particular country details page

3. Service Layer
    1. Get all countries
    2. Get country details


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Check [here](https://github.com/Prathyusha1993/countries-rest-api/blob/master/TechnicalDetails.md) for details on how to run and contribute to the app.
