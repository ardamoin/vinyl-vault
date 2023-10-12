const Artist = require("../models/artist");
const asyncHandler = require("express-async-handler");

exports.artist_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist list");
  });
  
  exports.artist_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Artist detail: ${req.params.id}`);
  });
  
  exports.artist_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist create GET");
  });
  
  exports.artist_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist create POST");
  });
  
  exports.artist_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist update GET");
  });
  
  exports.artist_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist update POST");
  });
  
  exports.artist_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist delete GET");
  });
  
  exports.artist_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Artist delete POST");
  });
  
