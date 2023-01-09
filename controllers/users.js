//this file will contain all the functions that will be used in the routes
import { v4 as uuidv4 } from "uuid";

let users = []; //users array for the mock data

export const createUser = (req, res) => {
  //getting the data from the request body
  const user = req.body;

  //generating a unique id for the user
  //   const userId = uuidv4();

  //adding the id to the user object
  const userWithId = { ...user, id: uuidv4() }; //...user - spread operator - copies the current user object and adds the id to it

  //adding post data to the users array so it saves the data
  //   users.push(user);

  //   adding post data to the users array so it saves the data
  users.push(userWithId);

  //sending a response back to the client
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUsers = (req, res) => {
  console.log(users);
  //   res.send("Hello from users router!");
  res.send(users);
};

export const getSpecificUser = (req, res) => {
  //   console.log(req.params);
  //   res.send("The GET id route!");

  //getting the id from the url
  const { id } = req.params;

  //finding the user with the id
  const foundUser = users.find((user) => user.id === id); //user.id - id of the user in the users array, id - id from the url

  //sending the user as a response
  res.send(foundUser);
};

export const deleteSpecificUser = (req, res) => {
  //getting the id from the url
  const { id } = req.params;

  //id to delete - 123
  //John - 123
  //Jane - 321

  //filtering the user with the id
  //filter works by: true keeps all the users in the array, false removes all the users from the array
  // users = users.filter((user) => true);

  //filtering the user with the id
  //user.id - id of the user in the users array, id - id from the url - this will remove the user with the id from the users array and keep the rest of the users
  //the user.id for john is 123 and the id from the url is 123 so it's equal & it'll return false so it will remove john from the users array
  users = users.filter((user) => user.id !== id);

  //sending a response back to the client
  res.send(`User with the id ${id} deleted from the database!`);
};

export const updateSpecificUser = (req, res) => {
  //getting the id from the url
  const { id } = req.params;

  //getting the data from the request body - this is data sent from the client to the server to be updated
  const { firstName, lastName, age } = req.body;

  //user.id - id of the user in the users array, id - id from the url
  //This will find the user which goes through all the users in the array and returns the first one that matches the user with the same id from the url
  const userToBeUpdated = users.find((user) => user.id === id);

  //if there is a firstName in the request body, then update the firstName of the user
  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;

  //sending a response back to the client
  res.send(`User with the id ${id} has been updated!`);
};

export const updateAllSpecificUser = (req, res) => {
  const { id } = req.params;

  const { firstName, lastName, age } = req.body;

  const userAllToBeUpdated = users.find((user) => user.id === id);

  //add put logic here
  //if there is a firstName in the request body, then update the firstName of the user
  if (firstName) userAllToBeUpdated.firstName = firstName;
  if (lastName) userAllToBeUpdated.lastName = lastName;
  if (age) userAllToBeUpdated.age = age;

  //sending a response back to the client
  res.send(`User with the id ${id} has been updated for all params!`);
};
