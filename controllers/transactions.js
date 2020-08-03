//DESC : Get all transactions
// ROUTE : GET /api/v1/transactions
// ACCESS : Public

exports.getTransactions = (req, res, next) =>  {
res.send('GET transactions');
};