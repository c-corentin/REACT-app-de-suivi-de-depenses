// DESC : Get all transactions
// ROUTE : GET /api/v1/transactions
// ACCESS : Public

exports.getTransactions = (req, res, next) =>  {
res.send('GET transactions');
};

// DESC : Add  transaction
// ROUTE : POST /api/v1/transactions
// ACCESS : Public

exports.addTransactions = (req, res, next) =>  {
    res.send('POST transactions');
};

// DESC : Delete transaction
// ROUTE : DELETE /api/v1/transactions/:id
// ACCESS : Public

exports.deleteTransactions = (req, res, next) =>  {
    res.send('DELETE transactions');
};