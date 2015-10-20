window.onload = function() {
    $('.fa-user, .container-user span ,.container-user i').hover(function(){
            $('.user-icon').addClass('active-hover');
    });
    $('.container-user ,span , i').mouseout(function(){
            $('.user-icon').removeClass('active-hover');
    });

}
