import readline from 'readline';

class UserInput {
    get(questionText) {
        return new Promise((resolve, reject) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(questionText, (answerText) => {
                resolve(answerText)
                rl.close();
            });
        });
    }
}

module.exports = new UserInput();
