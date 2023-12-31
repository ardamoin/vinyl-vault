const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

ArtistSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.first_name} ${this.family_name}`;
  }

  return fullname;
});

ArtistSchema.virtual("url").get(function () {
  return `/catalog/artist/${this._id}`;
});

ArtistSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
});

ArtistSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
});

ArtistSchema.virtual("lifespan").get(function () {
  return `${this.date_of_birth_formatted} - ${this.date_of_death_formatted}`;
});

ArtistSchema.virtual("date_of_birth_yyyy_mm_dd").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toISODate()
    : "";
});

ArtistSchema.virtual("date_of_death_yyyy_mm_dd").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toISODate()
    : "";
});

module.exports = mongoose.model("Artist", ArtistSchema)
