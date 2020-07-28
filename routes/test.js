const express = require('express');
const router = new express.Router();




/**
 * GET
 */
router.route("/").get(async (req, res) => {

    res.send(req.app.get('secret_key'))

})

/**
 * POST
 */
router.route("/").post(async (req, res) => {

    res.send(req.app.get('secret_key'))

})

/**
 * PUT
 */
router.route("/").put(async (req, res) => {

    res.send(req.app.get('secret_key'))

})

/**
 * DELETE
 */
router.route("/").delete(async (req, res) => {

    res.send(req.app.get('secret_key'))

})

module.exports = router;