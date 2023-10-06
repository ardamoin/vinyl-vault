const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumInstanceSchema = new Schema({
  album: { type: Schema.Types.ObjectId, required: true },
  studio: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
});

AlbumInstanceSchema.virtual("url").get(function () {
  return `/catalog/albuminstance/${this._id}`;
});

module.exports = mongoose.model("AlbumInstance", AlbumInstanceSchema);
