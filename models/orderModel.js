const db = require('../db/index');

const createOrder = async (userId, total) => {
    return await db.query(`INSERT INTO orders (userid, total, created, modified)
                           values ($1, $2, now(), now())
                           returning *`, [userId, total]);
};

const addOrderItem = async (orderId, productId, quantity, price) => {
    const order = await db.query(`INSERT INTO orderitems (orderId, productid, quantity, price, modified, created)
                                  values ($1, $2, $3, $4, now(), now())
                                  returning *`, [orderId, productId, quantity, price]);
    return order.rows[0];
};


module.exports = {
    createOrder,
    addOrderItem,
}