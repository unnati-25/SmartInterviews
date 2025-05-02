const fs = require('fs');
const path = require('path');
const { login } = require('./server').auth;  // Export `auth` object from server.js

describe("Login Authentication", () => {
  let testUsers = [];

  beforeAll((done) => {
    const filePath = path.join(__dirname, 'users.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      testUsers = data.trim().split('\n').map(line => {
        const [username, password] = line.split(':');
        return { username, password };
      });
      done();
    });
  });

  it("should authenticate all valid users from users.txt", () => {
    testUsers.forEach(user => {
      expect(login(user.username, user.password)).toBe("Login successful!");
    });
  });

  it("should fail for wrong password", () => {
    expect(login("alice", "wrongpass")).toBe("Login failed: invalid credentials.");
  });

  it("should fail for non-existent user", () => {
    expect(login("nonuser", "any")).toBe("Login failed: invalid credentials.");
  });

  it("should fail with empty credentials", () => {
    expect(login("", "")).toBe("Login failed: invalid credentials.");
  });
});
