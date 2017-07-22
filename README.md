# FriendFinder

## Overview

Friend Finder is a friend matching application that is meant to simulate a simple dating application. The user answers ten personality questions with responses from 1 (Strongly Disagree) to 5 (Strong Agree). When the user clicks the submit button, the user is provided with the friend whose answers most closely match the user's own responses. The friend whose answers have the lowest absolute difference for all ten questions combined is defined as the friend match.

The application uses [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) on the back end and the [Bootstrap](http://getbootstrap.com) CSS framework on the front end.

## Demo
	
Friend Finder is deployed to Heroku. Please check it out [here](https://friend-fndr.herokuapp.com).

## Installation

To install the application follow the instructions below:

	git clone https://github.com/jnnfrsofia/FriendFinder.git
	cd FriendFinder
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	export PORT=3000
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:30o0`.