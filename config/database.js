const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.DB_CONNECTION
    )
    console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}


// Connect to Mongo
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  () => {console.log('Connected to DB!')}
);

module.exports = connectDB
