const express = require("express");
const connectDB = require("./db/db");
const path = require("path");
const app = express();

// connect Databse
connectDB();

const port = process.env.PORT;

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(port, () => {
  console.log(`serer is up on running ${port}`);
});
