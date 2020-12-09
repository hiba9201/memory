const fs = require('fs');

class Scoreboard {
    static get scoreBoardPath() {
        return './static/scoreboard.json';
    }

    static readScoreBoardFromFile() {
        let score;
        try {
            const file = fs.readFileSync(Scoreboard.scoreBoardPath);
            score = JSON.parse(file.toString());
        } catch (e) {
            score = {};
            fs.writeFileSync(Scoreboard.scoreBoardPath, '{}');
        }

        return score;
    }

    static writeScoreBoardToFile(data) {
        fs.writeFileSync(Scoreboard.scoreBoardPath, JSON.stringify(data));
    }

    static getScore() {
        return Scoreboard.readScoreBoardFromFile();
    }

    static updateScore(updateData) {
        const score = Scoreboard.readScoreBoardFromFile();

        Object.entries(updateData).forEach((entry) => {
            const [key, value] = entry;
            if (typeof key === 'string') {
                score[key] = value;
            }
        });

        this.writeScoreBoardToFile(score);
    }
}

module.exports = Scoreboard;
