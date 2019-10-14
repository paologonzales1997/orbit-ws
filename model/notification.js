const mongoose = require("mongoose");

// Define schema for notification model
const notificationSchema = mongoose.Schema({
  timestamp: { type: Date, default: Date.now() },
  user_id: mongoose.Schema.Types.ObjectId,
  lat: Number,
  lng: Number,
  location: String,
  speed: Number
});

module.exports = mongoose.model("notification", notificationSchema);
