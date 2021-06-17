const express = require("express");

const cors = require("cors");
const app = express();
const booksRoute = require("./route/booksRoute");
const userRoute = require("./route/usersroute");
const authRoute = require("./route/authroute");

app.use(express.json());
app.use(cors());

app.use(booksRoute);
app.use(userRoute);
app.use(authRoute);
app.listen(3333);
