//Code by: Marco Kempkes
//puts latest instagram posts in div called instagramFeed4
let authToken = '467645643.5e76c80.b4a671cba4594d489d51d2a0fe48747c1';//insert access token from instagram developer panel (rm 1)
let instaURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+authToken;
let feed = ''; 
let postAmount = 0;//Amount of posts displayed if 0 all posts will be displayed
$( document ).ready(function($) {
   	$.ajax({
        url: instaURL,
        dataType: "json",
        cache: false,
        success: function (response) {
			var posts = [];
			if(postAmount === 0){
				postAmount = response.data.length;
			}
			console.log(response.data);
			
			for (var i = 0; i <= postAmount-1; i++) {	
				//create embed with caption
				posts[i] = 'http'+response.data[i].link.slice(4)+'embed/captioned';

				//create an iframe with the post link and sets width and height based off of the image height and width
				feed += '<iframe class="instaPost w-100" src="'+posts[i]+'" height="'+(response.data[i].images.standard_resolution.height+100)+'"frameborder="0" scrolling="no" allowtransparency="true"></iframe>';

			}

			//$('#instagramFeed').css('width', response.data[0].images.standard_resolution.width/divisionAmount+20);
			$('#instagramFeed').html(feed);

        },
        error: function () {
            $("#instagramFeed").html("<p>No response from ajax call</p>");
        }

	});
});
//width="'+(response.data[i].images.standard_resolution.width/divisionAmount)+'" 