const express = require("express");
const router = express.Router();
const album_controller = require("../controllers/albumController");
const albuminstance_controller = require("../controllers/albuminstanceController");
const artist_controller = require("../controllers/artistController");
const genre_controller = require("../controllers/genreController");

router.get("/albums", album_controller.album_list);

router.get("/album/:id", album_controller.album_detail);

router.get("/album/create", album_controller.album_create_get);

router.post("/album/create", album_controller.album_create_post);

router.get("/album/:id/update", album_controller.album_update_get);

router.post("/album/:id/update", album_controller.album_update_post);

router.get("/album/:id/delete", album_controller.album_delete_get);

router.post("/album/:id/delete", album_controller.album_delete_post);



router.get("/albuminstances", albuminstance_controller.albuminstance_list);

router.get("/albuminstance/:id", albuminstance_controller.albuminstance_detail);

router.get("/albuminstance/create", albuminstance_controller.albuminstance_create_get);

router.post("/albuminstance/create", albuminstance_controller.albuminstance_create_post);

router.get("/albuminstance/:id/update", albuminstance_controller.albuminstance_update_get);

router.post("/albuminstance/:id/update", albuminstance_controller.albuminstance_update_post);

router.get("/albuminstance/:id/delete", albuminstance_controller.albuminstance_delete_get);

router.post("/albuminstance/:id/delete", albuminstance_controller.albuminstance_delete_post);


router.get("/artists", artist_controller.artist_list);

router.get("/artist/:id", artist_controller.artist_detail);

router.get("/artist/create", artist_controller.artist_create_get);

router.post("/artist/create", artist_controller.artist_create_post);

router.get("/artist/:id/update", artist_controller.artist_update_get);

router.post("/artist/:id/update", artist_controller.artist_update_post);

router.get("/artist/:id/delete", artist_controller.artist_delete_get);

router.post("/artist/:id/delete", artist_controller.artist_delete_post);


router.get("/genres", genre_controller.genre_list);

router.get("/genre/:id", genre_controller.genre_detail);

router.get("/genre/create", genre_controller.genre_create_get);

router.post("/genre/create", genre_controller.genre_create_post);

router.get("/genre/:id/update", genre_controller.genre_update_get);

router.post("/genre/:id/update", genre_controller.genre_update_post);

router.get("/genre/:id/delete", genre_controller.genre_delete_get);

router.post("/genre/:id/delete", genre_controller.genre_delete_post);


module.exports = router;
