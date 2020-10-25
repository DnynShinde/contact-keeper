const express = require("express");
const connectDB = require("./db/db");
const path = require("path");
const app = express();

// connect Databse
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Server static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Setup express port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`serer is up on running ${port}`);
});
