const express = require('express');
const path = require('path');

const { getScoreBoard, updateScoreBoard } = require('../controllers/scoreboard');

const router = express.Router();

if (process.env.NODE_ENV === 'production') {
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './index.html'));
    });
}

router.get('/scoreboard', getScoreBoard);
router.patch('/scoreboard', updateScoreBoard);

module.exports = router;
