function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function() {}

Blockchain.prototype.createNewTransaction = function(
    sender, recipient, amount
) {
    const newTransaction = {
        timestamp = Date.now(),
        sender: sender,
        recipient: recipient,
        amount: amount
    }

    this.pendingTransactions.push(newTransaction);
}

Blockchain.prototype.hashBlock = function() {}

Blockchain.prototype.proofOfWork = function() {}