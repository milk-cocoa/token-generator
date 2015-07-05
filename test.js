var TokenGenerator = require('./');

var tokenGenerator = new TokenGenerator();

tokenGenerator.setSecret('aaaaaaaaaa');

var token = tokenGenerator.generateToken({sub : 'userid1'}, {expire : 30});

console.log(token);