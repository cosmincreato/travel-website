const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/show', (req, res) => {
    const { email, textarea } = req.query;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
    const htmlResponse = `
            <body style="color: white;">
                <h2>Formular inregistrat :)</h2>
                <p>Email: ${email}</p>
                <p>Recenzie: ${textarea}</p>
            </body>
        `;
        res.send(htmlResponse);
    }
});

app.get('/:page', (req, res) => {
    const pageName = req.params.page;
    res.sendFile(path.join(__dirname, 'public', 'pages', `${pageName}`));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'pages', '404.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));