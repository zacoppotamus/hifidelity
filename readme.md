HiFidelity
==========

Simple movie journal.

Installation
---

On the root folder do:  
*  ```npm install```, to install the Node modules.  
*  ```bower install```, for frontend dependencies.
*  ```mongod```, for the MongoDB database.
*  ```node server.js```, to start the server.

Visit ```127.0.0.1:8080``` to see the application in action.

Database
---

The MongoDB default port is on ```127.0.0.1:27017```.

To modify the database from the terminal:
* ```mongo``` to run the Mongo shell, while ```mongod``` is running.
* In the Mongo shell:
    * ```use hifidelity```, to choose our database.
    * ```db.hifidelities.update({ "title" : "Small Time Crooks", "year" : 2000, "seen" : false })```, or whatever, to add a new movie.

For a web overview of our database visit ```http://127.0.0.1:28017/hifidelity/hifidelities/```, where
28017 is the default MongoDB port + 1000.
  

