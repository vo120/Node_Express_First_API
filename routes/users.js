/** NOTE:
 * .get() - GET request
    * When you visit a website, your computer sends a request to the server that the website is stored on. 
    * The server then sends back a response, which is usually a webpage or some data. This is a GET request.
    * In the case of a router, it's a piece of software that helps handle requests and responses between the server and the client (which is your computer).
    * When it receives a request for the "/" page, it will do two things: log the list of stories to the console and send a response back to the client with the message "Hello from users router!".
 * 
 * .post() - POST request - create data on the server
 * .put() - PUT request - completely overwrite something (changing everything there is in the user)
 * .patch() - PATCH request -  partially overwrite something (changing only the name of the user for example)
 * .delete() - DELETE request
 * res- response object
 * req - request object
 *  res.send() sends a response back to the client,
 *   -For example, let's say you have a form on a webpage that a user can fill out.
 *   When the user submits the form, the information they entered is sent to the server in the request body.
 *   The server can then access this information using req.body.
 *   router.post("/submit", (req, res) => {
        const userName = req.body.name;
        const userEmail = req.body.email;
        // do something with the name and email
        res.send("Thank you for submitting your information!");
    });
 *  req.body is the data sent from the client to the server to be updated (in the body of the request)
 * req.params is the data sent from the client to the server to be updated (in the url of the request)
 */
//REST API - REpresentational State Transfer
//CRUD - CREATE, READ, UPDATE, DELETE

import express from "express";
import {
  createUser,
  getUsers,
  getSpecificUser,
  deleteSpecificUser,
  updateSpecificUser,
  updateAllSpecificUser,
} from "../controllers/users.js";

// import { v4 as uuidv4 } from "uuid";

//initialize express router
const router = express.Router();

//mock users data
//   {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 23,
//   },
// const users = []; -> you have to change this to let because you're reassigning the value of users
// let users = [];

//GET /users - get all users (client requests data from the server and responds with that data on the client page) - READ
//all the routes in here are starting with /users in index.js so no need to add "/users" in the route here
//this is the route handler for the GET request
//browers can only make GET requests (no POST, PUT, DELETE) meaning when you type in the url in the browser, it's a GET request
router.get("/", getUsers);

//POST /users - create a new user & save it in the database - CREATE
//(sends user data from frontend(client) to the server)
//to view the result of the post req, we need to use postman

router.post("/", createUser);

//GET /users/:id - get a specific user - READ
// /user/2 - this is the route parameter  => it's (id: 2) stored in req.params object
router.get("/:id", getSpecificUser);

//DELETE /users/:id - delete a specific user - DELETE
router.delete("/:id", deleteSpecificUser);

//PATCH /users/:id - update a user with a specific id - UPDATE
router.patch("/:id", updateSpecificUser);

//UPDATE - PUT /users/:id - update a user with a specific id - UPDATE
//put req will completely overwrite the user with the id
router.put("/:id", updateAllSpecificUser);

export default router;
