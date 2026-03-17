# Student Records Web Page

## Project Description

This project is a simple web page created using HTML, CSS and JavaScript.
It displays student records in the form of cards.

Each student card shows:

* Name
* Marks
* Class
* Address

There is also a search box which allows the user to filter students by their name in real-time.

##  How to Run the Project

1. Download or extract the project folder
2. Open the folder
3. Double click on `index.html`
4. The page will open in your browser

## How It Works

* A JavaScript array stores all student data as objects
* Each object contains name, marks, class and address
* The `displayStudents()` function shows all students on the screen
* The `map()` function is used to create cards dynamically
* The `filter()` function is used to search students by name

When the user types in the search box:

* The input value is taken
* It is compared with student names
* Only matching students are displayed

## Example

If you type:
Riya

Output:
Only "Riya Sharma" card will be shown

##  What I Learned

* How to use arrays of objects in JavaScript
* How to use `map()` to display data
* How to use `filter()` for searching
* How to update the DOM dynamically
* Basic styling using CSS

## Files

* index.html
* style.css
* script.js
* README.md