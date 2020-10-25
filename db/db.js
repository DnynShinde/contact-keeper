const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Mongodb Connected...");
  } catch (err) {
    console.log(err.msg);
    process.exit(1);
  }
};

module.exports = connectDB;
