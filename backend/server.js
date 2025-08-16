const express = require('express');
const cors = require('cors');
const generatePassword = require('generate-password-browser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/generate', (req, res) => {
    const { length } = req.body;

    if (!length || length < 8) {
        return res.status(400).json({ error: 'Password length must be at least 8 characters.' });
    }

    const password = generatePassword.generate({
        length: length,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true,
        excludeSimilarCharacters: true,
    });

    res.json({ password: password });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});