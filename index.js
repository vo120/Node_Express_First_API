//this file is the entry point of the application
//this file is responsible for setting up & starting the server
import express from "express";
import bodyParser from "body-parser";
//importing routers
import usersRoutes from "./routes/users.js";

//initialize express
const app = express();
const PORT = 5000;

//configure body-parser middleware
app.use(bodyParser.json()); //we're using json in the whole app

//configure usersRoutes
app.use("/users", usersRoutes); //all routes in usersRoutes will be prefixed with /users

//configure routes
app.get("/", (req, res) => {
  console.log("testing");
  res.send("Hello from homepage!");
});

//listen for incoming requests on the port
app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
