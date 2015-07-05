var jwt = require('jsonwebtoken');


module.exports = TokenGenerator;

function TokenGenerator() {
	this.secret = null;
}

TokenGenerator.prototype.setSecret = function(secret) {
	this.secret = secret;
}

TokenGenerator.prototype.generateToken = function(data, _option) {
	var option = _option || {};
	if(this.secret == null) throw new Error('A secret token was not configured.');
	return jwt.sign(data, this.secret, {expiresInMinutes: option.expire || 20});
}

