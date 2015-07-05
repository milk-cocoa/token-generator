# token-generator
Token Generator


```

var TokenGenerator = require('milkcocoa-token-generator');

var tokenGenerator = new TokenGenerator();

tokenGenerator.setSecret('{milkcocoa-secret}');

var token = tokenGenerator.generateToken({sub : 'userid1'}, {expire : 30});

```


```

milkcocoa.authWithToken(token, function() {
	milkcocoa.user(function(err, user) {
		//user.sub is 'userid1'
		console.log(user);
	});
});

```