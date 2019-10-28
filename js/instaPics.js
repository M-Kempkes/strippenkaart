//Code by: Marco Kempkes
//puts latest instagram posts in div called instagramFeed
let instaAuthToken = '467645643.5e76c80.b4a671cba4594d489d51d2a0fe48747c';//insert access token from instagram developer panel (rm 1)
let instaURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+instaAuthToken;
let instaFeed = ''; 
let instaPostAmount = 9;//Amount of posts displayed if 0 all posts will be displayed
$( document ).ready(function($) {
   	$.ajax({
        url: instaURL,
        dataType: "json",
        cache: false,
        success: function (response) {
			var posts = [];
			if(instaPostAmount === 0){
				instaPostAmount = response.data.length;
			}
			console.log(response.data);
			
			for (var i = 0; i <= instaPostAmount-1; i++) {	
				//create embed with caption
				posts[i] = response.data[i].images.standard_resolution.url;

				//create an iframe with the post link and sets width and height based off of the image height and width
				instaFeed += '<img class="col-sm-4" src="'+posts[i]+'"></img>';

			}

			//$('#instagramFeed').css('width', response.data[0].images.standard_resolution.width/divisionAmount+20);
			$('#instagramFeed').html(instaFeed);

        },
        error: function () {
            $("#instagramFeed").html("<p>No response from ajax call</p>");
        }

	});
});
//width="'+(response.data[i].images.standard_resolution.width/divisionAmount)+'" 