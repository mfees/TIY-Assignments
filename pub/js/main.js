$(function() {
    var user;

    $.get( "https://api.github.com/users/mfees", function( data ) {
        user = data;

        $('.name').text(user.name);
        $('.user-name').text(user.login);
        $('.company').text(user.company);
        $('.location').text(user.location);
        $('.email').text(user.email);
        $('.joined').text(user.created_at);
        $('.sidebar-count').text(user.followers);
        $('sidebar-count').text(user.following);
        
        console.log(data);
    });
});