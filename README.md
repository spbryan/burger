# burger
## Application Description
_This site allows you to push a burger through its lifecycle in its entirety.  Users are first prompted to "dream-da-burger" and submit a new burger name.  Then users are prompted to "eat-da-burger" which moves the bureger entry to the digest stage.  Finally users are able to "digest-da-burger" removing the entry from the view (as well as deleting from the corresponding table_

## Application Organization
The application is organized with separate js files defined for each perspective:
* __config/connection.js__ - Create the connection to the corresponding MySQL table
* __config/orm.js__ - Provides the methods to drive the SQL statements to manipulate the table entries.
* __controllers/burgers_controller.js__ - Provides the router functionality to drive the CRUD actions based on the specific router path.
* __models/burger.js__ - Model entity with the methods to the corresponding orm CRUD methods.
* __public/assets/js/burgers.js__ - Javascript to handle events from the index
* __server.js__ - Handles express configurations and server settings.
* __main.handlebars__ - Handles display for home page.
* __index.handlebars__ - Handles dispaly for main view including an entry form for the burger details and buttons to transition the burger through the phases.

## Running the Application
https://stormy-thicket-59801.herokuapp.com/

* Dream-Da-Burger: User enter any burger description and clicks "Cook-Da-Burger".  This adds the entry to the data base and makes it appear in the Eat-Da-Burger section.
* Eat-Da-Burger: User selects the burger entry they want to eat and clicks the corresponding "Um-Num" button.  This modifies the entry on the data base and, on the page, transitions it to Digest-Da-Burger.
* Digest-Da-Burger: User selects the burger entry that they want to remove and clicks the corresponding "Burp!" button.  This removes the entry from both the data base and the view.

## Technology
This application was written in JavaScript on NodeJs using Express, Handlebars, and MySQL. 

__NPM Installs__
* express: ^4.17.1
* express-handlebars": ^3.1.0
* mysql: ^2.17.1

## Development Role
Application designed and developed by Sean Bryan as part of a homework assignment for the UNH Full Stack Boot Camp.
