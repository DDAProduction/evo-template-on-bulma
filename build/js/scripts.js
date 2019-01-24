

$(document).ready(function() {

    //responsive navbar
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });



    //dropdown
    $('#drop-btn').click(function () {
                $('#sort-dropdown').toggleClass('is-active');
                $('#sort-dropdown2').removeClass('is-active');

                $('.dropdown-item').click(function () {
                    $('#sort-dropdown').removeClass('is-active');
                        })
    });
    $('#drop-btn2').click(function () {
                $('#sort-dropdown').removeClass('is-active');
                $('#sort-dropdown2').toggleClass('is-active');

                $('.dropdown-item').click(function () {
                    $('#sort-dropdown2').removeClass('is-active');
                        })
    });


    //comment button
    $('.write-comment-block').hide();

    $('#commentBtn').click(function () {
        $('.write-comment-block').show();
    });


});