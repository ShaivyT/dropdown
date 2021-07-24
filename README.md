# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To start the project

### `npm install`

Run this command in the command prompt to install all the packages from npm.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Implementation

### Multiselect and singleselect

Multiselect functionality can be viewed in the route [http://localhost:3000/].
Singleselect functionality can be viewed in the route [http://localhost:3000/singleselect].

Once you click on the open button the dropdown appears with the given countries(options).
If you close the button then the dropdown disappears.

On clicking a certain option you can see it gets selected (the word selected is appended to the option).
If you click on the option again it gets deselected.

### Efficiency

My implementation for efficiently loading large lists is performed via a filter function.
The users have an option of searching the required option in the given search box.
This makes the process faster in case the user knows what they want to select and thus,
making the process efficient.

### Search

If an alphabet that is included in the options is typed in the search box then results are 
displayed accordingly. The search functionality is case sensitive.

To get back to the list of options, clear the search box using the space key.

### Debouncing

I am using the concept of debouncing in my search functionality. 500ms post a user stops typing,
the search results are returned. This improves browser performance as I am limiting the rate at 
which the search function is invoked.

The search input box is attached to an event listener that calls the debounce function which searches
after 500ms.

### Select/ Deselect

I have implemented this functionality by using a button Select/ Deselect.
Upon clicking on it, all the options are selected or deselected depending on the
previous state of the button. 


