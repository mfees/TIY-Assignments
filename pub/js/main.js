$(function() {
    $.get( "https://api.github.com/users/mfees", function( data ) {
        console.log(data);
    });
});