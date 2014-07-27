var express = require('express'),
    app = express();

app.use('/', express.static(__dirname + '/static'));
app.listen(process.env.PORT || 8080);
