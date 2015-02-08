$(function() {
    var user;

    $.get( "https://api.github.com/users/mfees", function( data ) {
        user = data;

        $('.name').text(user.name);
        
        console.log(data);
    });
});