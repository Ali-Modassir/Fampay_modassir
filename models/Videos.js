const { Schema, model } = require("mongoose");

const VideoSchema = new Schema({
  videoId: {
    type: String,
    unique: true,
    required: true,
  },
  title: String,
  description: String,
  channelTitle: String,
  thumbnail: String,
  publishTime: {
    type: Date,
    required: true,
  },
});

VideoSchema.index({ title: "text", description: "text" });

const Videos = model("videos", VideoSchema);

module.exports = Videos;
