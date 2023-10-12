const AlbumInstance = require("../models/albuminstance");
const asyncHandler = require("express-async-handler");

exports.albuminstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance list");
});

exports.albuminstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Albuminstance detail: ${req.params.id}`);
});

exports.albuminstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance create GET");
});

exports.albuminstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance create POST");
});

exports.albuminstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance update GET");
});

exports.albuminstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance update POST");
});

exports.albuminstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance delete GET");
});

exports.albuminstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Albuminstance delete POST");
});
