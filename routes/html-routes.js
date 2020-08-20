const express = require('express');
const router = express.Router();

router.get('/exercise', (req, res) => {
    res.sendFile(`${process.cwd()}/public/exercise.html`);
});

router.get('/stats', (req, res) => {
    res.sendFile(`${process.cwd()}/public/stats.html`);
});

module.exports = router;