const { DateTime } = require("luxon");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumInstanceSchema = new Schema({
  album: { type: Schema.Types.ObjectId, ref: "Album", required: true },
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

AlbumInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model("AlbumInstance", AlbumInstanceSchema);
