window.fbAsyncInit = function() {
  FB.init({
    appId      : '592122241709772',
    cookie     : true,
    xfbml      : true,
    version    : 'v7.0'
  });
    
  FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


$(document).ready(function () {

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log('XXX: ' + response);
  });

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log(response);
    });
  }

});
