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


$(function() {
    
    $.getJSON( "https://api.github.com/users/mfees/repos", function (repoArray) {
        $.each(repoArray, function (index, item) {
        var repolist = $('.repos-' + index);

        repolist.find('h4').append(item.name);
        repolist.find('p').append(item.description);

        console.log(repoArray);    
        });
    });
});

//$ (function() {
//    
//    $.getJSON("https://api.github.com/users/mfees/repos", function (repoArray) {
//        $.each(repoArray, function (index, item) {
//        var repolist = $('.repos-' + index);
//        repolist.find('h4').append(item.name);
//        repolist.find('p').append(item.description);
//        repolist.find('span').append(item.updated_at);
//
//        });
//    });
//});