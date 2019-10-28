FB.api(
    "/Test1234567890987654321-107265760709899/feed",
    function (response) {
      if (response && !response.error) {
        console.log(response);
        console.log("response");
        }
    }
);