# token-generator
Token Generator

Milkcocoaのシークレットキーを利用し、authWithTokenで利用できるトークンを生成できます。


```

var TokenGenerator = require('milkcocoa-token-generator');

var tokenGenerator = new TokenGenerator();

tokenGenerator.setSecret('{milkcocoa-secret}');

var token = tokenGenerator.generateToken({sub : 'userid1'}, {expire : 30});

```

認証コードを記述

```

milkcocoa.authWithToken(token, function() {
	milkcocoa.user(function(err, user) {
		//user.sub is 'userid1'
		console.log(user);
	});
});

```

セキュリティルールを設定

```
path {
  permit: all;
  rule: account.sub == "userid1";
}
```
```

milkcocoa.authWithToken(token, function() {
	var ds = milkcocoa.dataStore('path');
	//You can call some API.
	ds.push({});
});

```

