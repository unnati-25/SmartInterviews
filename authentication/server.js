const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

function AuthManager() {
    let users = {};

    const loadUsers = () => {
        if (fs.existsSync('users.txt')) {
            const data = fs.readFileSync('users.txt', 'utf8');
            const lines = data.trim().split('\n');
            lines.forEach(line => {
                const [username, password] = line.trim().split(':');
                users[username] = password;
            });
        }
    };

    const signup = (username, password) => {
        if (users[username]) return 'Signup failed: username already exists.';
        users[username] = password;
        fs.appendFileSync('users.txt', `\n${username}:${password}`);
        return 'Signup successful!';
    };

    const login = (username, password) => {
        if (users[username] && users[username] === password) {
            return 'Login successful!';
        }
        return 'Login failed: invalid credentials.';
    };

    loadUsers();
    return { signup, login };
}

const auth = AuthManager();

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    const result = auth.signup(username, password);
    res.send(result);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const result = auth.login(username, password);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
module.exports = { auth };
