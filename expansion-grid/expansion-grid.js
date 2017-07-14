/*! jQuery Scroll Snap 1.0.0 | MIT *
 * https://github.com/jpcurrier/jquery-scroll-snap !*/
(function ($) {
    $.fn.expansionGrid = function (options) {

        // default options
        var settings = $.extend({
            position: false,
            positionOffset: 0
        }, options);

        return this.each(function () {
            var $grid = $(this),
                    initMarginBottom = parseInt($(this).children('li').css('margin-bottom'));

            $grid.find('.expansion-grid-reveal').append('<button class="close"></button>');

            function spaceGrid() {
                var revealSpace = $grid.children('.active').find('.expansion-grid-reveal').outerHeight(true) + initMarginBottom;

                $grid.children('li').each(function () {
                    if ($(this).offset().top == $grid.children('.active').offset().top)
                        $(this).animate({'margin-bottom': revealSpace}, 400);
                    else
                        $(this).animate({'margin-bottom': initMarginBottom}, 400);
                });
            }
            function close() {
                $grid.removeClass('open-item');
                $grid.children('li').removeClass('active')
                        .animate({'margin-bottom': initMarginBottom}, 200);
            }

            $grid.find('.expansion-grid-switch a').on('click', function (e) {
                e.preventDefault();
                var url = $(this).attr('data-ajax'); 
                var contentNo = $(this).parents('button').siblings('.expansion-grid-reveal').attr('id');
                var $clicked = $(this).parents('li'),
                        revealSpace = $(this).parents('button').siblings('.expansion-grid-reveal').outerHeight(true) + initMarginBottom;

                // open
                if (!$clicked.hasClass('active')) {
                    $grid.addClass('open-item');
                    $grid.children('.active').removeClass('active');

                    $.ajax
                            ({
                                type: "Post",
                                url: url,
                                data: {contentNo: contentNo},
                                success: function (result)
                                { 
                                    /********start*************/
                                    $('.div' + contentNo).html('');
                                    $('.div' + contentNo).html('<img id="btn_loader" src="./images/ajax-loader.gif" border="0" style="display: block">');
                                     $('.div' + contentNo).append('<button class="close" onclick="rsClose(' + contentNo + ',' + initMarginBottom + ')"></button>');
                                    var revealspace1 = $('.div' + contentNo).outerHeight(true) + initMarginBottom;
                                    $clicked.addClass('active');
                                    $grid.children('li').each(function () {
                                        if ($(this).offset().top == $clicked.offset().top) {
                                            $(this).animate({'margin-bottom': revealspace1}, 200);
                                        }
                                        else {
                                            $(this).animate({'margin-bottom': initMarginBottom}, 200);
                                        }
                                    });

                                    if (settings.position) {
                                        $grid.children('li').promise().done(function () {
                                            $('html, body').animate({scrollTop: $clicked.offset().top + settings.positionOffset}, 400);
                                        });
                                    }

                                    /********end***************/
                                    setTimeout(function () {
                                        
                                        //$("#btn_loader").hide();
                                        $('.div' + contentNo).html('');
                                        $('.div' + contentNo).append('<button class="close" onclick="rsClose(' + contentNo + ',' + initMarginBottom + ')"></button>');
                                        if (result != '') {
                                            $('.div' + contentNo).append(result);
                                        } else {
                                            $('.div' + contentNo).append('<p>No data found!</p>');
                                        } 
                                        var revealspace1 = $('.div' + contentNo).outerHeight(true) + initMarginBottom;
                                    $clicked.addClass('active');
                                    $grid.children('li').each(function () {
                                        if ($(this).offset().top == $clicked.offset().top) {
                                            $(this).animate({'margin-bottom': revealspace1}, 200);
                                        }
                                        else {
                                            $(this).animate({'margin-bottom': initMarginBottom}, 200);
                                        }
                                    });

                                     if (settings.position) {
                                        $grid.children('li').promise().done(function () {
                                            $('html, body').animate({scrollTop: $clicked.offset().top + settings.positionOffset}, 400);
                                        });
                                    }   

                                    }, 3000);

                                    // position


                                }
                            });


                }

                // close
                else
                    close();

            });

            // close button
            $grid.find('button.close').on('click', function () {
                close();
            });

            // resize
            var delay;
            $(window).on('resize', function () {
                clearTimeout(delay);
                delay = setTimeout(function () {
                    if ($grid.children('.active').length)
                        spaceGrid();
                }, 200);
            });
        });
    };
})(jQuery);

function rsClose(contentNo, initMarginBottom) {

    //alert(initMarginBottom);
    var rsParent = jQuery(".div" + contentNo).parents('ul');
    jQuery(".div" + contentNo).parents('ul').removeClass('open-item');
    jQuery(".div" + contentNo).parents('li').removeClass('active');
    rsParent.children('li').animate({'margin-bottom': initMarginBottom}, 200);
}
