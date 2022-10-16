const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

// DB CONNECTION
connectDB();

const app = express();

// PARSER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APP ROUTES
app.use("/api/goals", require("./routes/goalRoutes"));

// ERROR HANDLER
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
