//Code by: Marco Kempkes
//puts latest Twitter posts in div called twitterFeed
let twitterAuthToken = '467645643.5e76c80.b4a671cba4594d489d51d2a0fe48747c';//insert access token from instagram developer panel
let twitterURL = "https://api.twitter.com/1.1/search/tweets.json?q=from%40Grum_Lupus&result_type=mixed&count=2";
let twitterFeed = ''; 
let tweetAmount = 0;//Amount of posts displayed if 0 all posts will be displayed
$( document ).ready(function($) {
   	$.ajax({
        url: twitterURL,
        dataType: "json",
        headers: {
			'authorization': 'OAuth oauth_consumer_key=mo5Y8EpIHrHU1rmrTAyfFM74d',
			'oauth_nonce':"generated-nonce",
			'oauth_signature':"generated-signature", 
			'oauth_signature_method':"HMAC-SHA1",
			'oauth_timestamp':"generated-timestamp", 
			'oauth_token':"1027576564173688839-acppum0ofvs0TV8bMYDMCmKo2d9uLP",
			'oauth_version':"1.0"
		},
        cache: false,
        success: function (response) {

			console.log(response);

			
        },
        error: function () {
            $("#twitterFeed").html("<p>No response from ajax call</p>");
        }

	});
});