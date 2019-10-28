<?php
	$consumerKey= 'mo5Y8EpIHrHU1rmrTAyfFM74d';
	$consumerSecret= 'LasgBwdYhvrxb629iPNj7T8BPou26C92W6kX2bkeUTj4ZUObHg';
	$accessToken= '1027576564173688839-acppum0ofvs0TV8bMYDMCmKo2d9uLP';
	$accessTokenSecret= 'gD7ehizXrqGNT3G1anPI1uAgvJjIDsmxK2uk0SbMi8EsV';

	use DG\Twitter\Twitter;

	include_once 'vendor/dg/twitterphp/src/twitter.class.php';

	$embeddedStatuses = [];

	$twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

	$statuses = $twitter->load(Twitter::ME);
	
	foreach($statuses as $status){		
		array_push($embeddedStatuses ,$status->id);
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="UTF-8">
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="author" content="Marco Kempkes">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href=".\css\main.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<script defer src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script defer src=".\js\main.js"></script>
	<script defer src=".\js\instaPics.js"></script>
	<script>
	  window.fbAsyncInit = function() {
    	FB.init({
    	  appId            : '389044648440635',
    	  autoLogAppEvents : true,
    	  xfbml            : true,
    	  version          : 'v4.0'
    	});
	  };
	</script>
	<script defer src="https://connect.facebook.net/en_US/sdk.js"></script>
	<script defer src=".\js\facebookAPI.js"></script>
</head>
<body>
	<div class="container">
		<header>
		</header>

		<div class="row">
			<div id="instagramFeed" class="col-6 h-100"></div>
			<div class=""></div>
			<div id="twitterFeed" class="col-6 h-100"></div>
		</div>
		<div id="twitter">
			<?php
				foreach($embeddedStatuses as $status){
				print_r($twitter->request('statuses/oembed', 'GET', ['url' => 'https://twitter.com/Grum_Lupus/status/'.$status])->html);
				}
			?>
		</div>

		<footer>
		</footer>
	</div>

</body>
</html>