# Software Engineer Course

Welcome to the Software Engineer Course repository. This repository contains a series of exercises designed to develop core web development and software engineering skills. Throughout the exercises, you will work on static and dynamic web pages, using HTML, CSS, JavaScript, and Python with Flask to build functional web applications.

## Directory Structure

### Exercises

The `Exercises` directory contains three main exercises that progressively build upon each other to demonstrate different software engineering concepts.

#### Exercise 1: Personal Website Template

- **css/**: This directory contains various CSS files used to style the personal website template.
  - **bootstrap.css**: Bootstrap framework for responsive design.
  - **green.css**: Custom styles for a green-themed website.
  - **reset.css**: CSS reset file to ensure consistent styling across browsers.
  - **style.css**: Main stylesheet for overall site design.
  - **style2.css**: Additional styles used in the template.
  
- **icon-fonts/**: Contains icon fonts for the website.
  - **font-awesome-4.7.0/**: Includes the Font Awesome icon library and related font files for displaying icons.
    - **css/font-awesome.min.css**: CSS file for Font Awesome icons.
    - **fonts/**: Font files required for the icons to render correctly.

- **images/**: Directory containing image files used in the personal website.
  - **glasses-w.png**: Image of glasses in white.
  - **profile.jpg**: Profile picture used on the website.
  - **talin.JPG**: Additional image for the website.

- **index.html**: The main HTML file for the personal website, integrating the CSS styles, images, and icon fonts.

#### Exercise 2: Flask Web Application for Personal Website

This exercise involves converting the personal website template into a Flask-powered web application.

- **templates/**: Directory containing HTML templates for the Flask application.
  - **directory/sample.html**: Sample HTML file to demonstrate Flask's templating functionality.
  - **MySite/index.html**: The main HTML file representing the personal website template.
  - **index.html**: Additional HTML template for the Flask app.

- **app.py**: Python script that runs the Flask web application. It sets up the routes and renders the HTML templates.

#### Exercise 3: Flask Web Application - User Sign-up Page with Validation

This exercise focuses on building a user sign-up page with password validation checks using Flask.

- **static/**: Directory containing static assets like CSS and JavaScript files.
  - **jquery.js**: jQuery library for client-side scripting.
  - **script.js**: Custom JavaScript file that handles password validation and other dynamic interactions.
  - **style.css**: CSS stylesheet for styling the sign-up page.

- **templates/**: Contains HTML templates for the sign-up page.
  - **index.html**: Main sign-up page template.
  - **index2.html**: Additional template demonstrating validation or alternative design.

- **app.py**: Python script that sets up the Flask web application for the sign-up page. It handles user inputs and performs password validation.

## How to Use

### Exercise 1: Personal Website Template
1. Navigate to `Exercises/1/` to explore the personal website template.
2. Open `index.html` in a browser to view the site design.
3. Customize the styles in the `css/` directory to experiment with different themes and layouts.

### Exercise 2: Flask Web Application for Personal Website
1. Navigate to `Exercises/2/` to explore the Flask version of the personal website.
2. Run `app.py` using Python to start the Flask development server.
3. Access the application in your browser to see the personal website served dynamically.

### Exercise 3: Flask User Sign-up Page with Validation
1. Navigate to `Exercises/3/` to explore the user sign-up page with validation.
2. Run `app.py` using Python to start the Flask development server.
3. Open the sign-up page in your browser, test the form, and see how the password validation is handled.

These exercises are designed to help you gain hands-on experience in both front-end and back-end web development, with a focus on creating dynamic, functional web applications.
