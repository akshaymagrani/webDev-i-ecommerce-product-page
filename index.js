$(document).ready(function() {
    var i = 0;

    $('.minus').click(function () {
        i--;
        if (i < '0') {
            $('.qty').text('0');
            i = 0;
        } else{
            $('.qty').text(i);
        }
        console.log(i);
    });

    $('.plus').click(function () {
        $('.qty').text(++i);
        console.log(i);
    });

    $('.toCart').click(function (){
        $('#lblCartCount').text($('.qty').text());
        $('.user-qty').text($('.qty').text());
        $('.total').text(125 * $('.qty').text());
        $('.user-item').removeClass('d-none');
        $('.cart-body').next('hr').removeClass('d-none');
        $('.cart-footer').removeClass('d-none');
        if ($('.badge').text() != 0) {
            $('.cart-body p:first()').addClass('d-none');
        }
    });

    $('.btn-cart').click(function(){
        $('.cart-content').toggleClass('d-none');
        if ($('.badge').text() != 0) {
            $('.cart-body p:first()').addClass('d-none');
        }
    });

    $('.delete-item').click(function(){
        $('.cart-body p:first()').removeClass('d-none');
        $('.user-item').addClass('d-none');
        $('.cart-footer').addClass('d-none'); 
        $('.cart-body').next('hr').addClass('d-none');
        $('#lblCartCount').text('');
        $('.user-qty').text('0');
        $('.total').text('0');
    });
})