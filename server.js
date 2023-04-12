const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const app = require("./app");

const {DB_HOST, PORT = 3000} = process.env;

mongoose.connect(DB_HOST, console.log("Database connection successful"))
.then(()=> app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 3000");
}))
.catch(error => {
  console.log(error.message);
  process.exit(1)
})