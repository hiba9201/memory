const express = require('express');

const { getScoreBoard, updateScoreBoard } = require('../controllers/scoreboard');

const router = express.Router();

router.get('/scoreboard', getScoreBoard);
router.patch('/scoreboard', updateScoreBoard);

module.exports = router;
