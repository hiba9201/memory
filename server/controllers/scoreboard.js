const Scoreboard = require('../model/scoreboard');

async function getScoreBoard(req, res) {
    const score = await Scoreboard.getScore();

    res.send(score);
}

async function updateScoreBoard(req, res) {
    const data = req.body;

    try {
        await Scoreboard.updateScore(data);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = {
    getScoreBoard,
    updateScoreBoard,
};
