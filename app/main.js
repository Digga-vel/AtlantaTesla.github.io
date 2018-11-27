$(function () {

    // -----> slider

    $('.slider__screen').slick({
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        adaptiveHeight: true
    });


    // -----> modal

    $('.plan__btn, .work__btn').click(function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '35%'}, 200);
            });
    });
    $('#modal_close, #overlay').click(closeModal);

    function closeModal() {
        $('#modal_form')
            .animate({opacity: 0, top: '35%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    }


    // -----> scroll to top

    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 900);
    });


    // -----> validate form

    $('.js-form').each(function () {
        $(this).validate({
            rules: {
                email: {
                    required: true,
                    email: true
                },
                name: {
                    required: true,
                    minlength: 2
                },
                tel: {
                    required: true,
                    digits: true,
                    rangelength: [5, 11]
                }
            },
            submitHandler: function () {
                this.currentForm.reset();
                closeModal();


            }
        })
    });
});
