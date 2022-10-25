const express = require('express');
const router = express.Router();

router.post('/basic', (req, res) => {

    console.log(req.body);
    res.json(req.body)
})


module.exports = router;