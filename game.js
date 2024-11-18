let player1Score = 0;
let player2Score = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playRound() {
    const player1 = rollDice();
    const player2 = rollDice();
    let winner;

    if (player1 > player2) {
        winner = "Player 1 wins!";
        player1Score++;
    } else if (player2 > player1) {
        winner = "Player 2 wins!";
        player2Score++;
    } else {
        winner = "It's a tie!";
    }

    return { player1, player2, winner, player1Score, player2Score };
}

function reset() {
    player1Score = 0;
    player2Score = 0;
}

export default {
    playRound,
    reset,
    player1Score,
    player2Score
};
