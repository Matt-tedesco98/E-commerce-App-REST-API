const db = require('../db');

const createUser = async ({ email, hashedPassword, firstname, lastname }) => {
    const result = await db.query('INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *', [email, hashedPassword, firstname, lastname]);
    return result.rows[0];

};

const findUserByEmail = async (email) => {
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
}

module.exports = {
    createUser,
    findUserByEmail,
};