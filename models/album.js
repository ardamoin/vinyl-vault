const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: { type: String, required: true },
  artist: [{ type: Schema.Types.ObjectId, ref: "Artist", required: true }],
  lyrics: { type: String },
  release_year: { type: Number, required: true },
  price: { type: Number, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
});

AlbumSchema.virtual("url").get(function () {
  return `/catalog/album/${this._id}`;
});

module.exports = mongoose.model("Album", AlbumSchema);
