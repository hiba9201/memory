const Scoreboard = require('../model/scoreboard');

function getScoreBoard(req, res) {
    const score = Scoreboard.getScore();

    res.send(score);
}

function updateScoreBoard(req, res) {
    const data = req.body;
    console.log(data);
    try {
        Scoreboard.updateScore(data);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
}

module.exports = {
    getScoreBoard,
    updateScoreBoard,
};
