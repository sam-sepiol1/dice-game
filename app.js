import express from 'express';
import game from './game.js';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/game', (req, res) => {
    const data = game.playRound();

    res.render('game.ejs', { data });
});
app.get('/reset', (req, res) => {
    game.reset();
    res.redirect("/")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
