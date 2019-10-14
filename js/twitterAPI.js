//Code by: Marco Kempkes
//puts latest Twitter posts in div called twitterFeed
var Stream = require(['js/node_modules/user-stream']);
var stream = new Stream({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

//create stream
stream.stream();

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});
