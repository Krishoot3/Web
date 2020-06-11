class ScrollMenu {

    fixedNavScroll() {

        $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('nav').addClass('black');
            }
            else {
                $('nav').removeClass('black');
            }
        })

    }

    smoothScroll() {

        $('.menu a, #aboutBtn').on('click', function(e) {
        
            if (this.hash !== '') {
                e.preventDefault();
    
                const hash = this.hash;
    
                $('html, body').animate(
                    {
                    scrollTop: $(hash).offset().top
                    },
                    1000
                );
            }
        });
    }
}