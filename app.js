$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // Header scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').css({
                'box-shadow': '0 2px 20px rgba(0,0,0,0.08)',
                'background': 'rgba(255, 255, 255, 0.98)'
            });
        } else {
            $('header').css({
                'box-shadow': '0 2px 10px rgba(0,0,0,0.05)',
                'background': 'rgba(255, 255, 255, 0.95)'
            });
        }
    });

    // Testimonial carousel
    $('.testimonial-avatars img').on('click', function() {
        $('.testimonial-avatars img').removeClass('active');
        $(this).addClass('active');
        
        const testimonials = [
            {
                text: "Working with this team transformed our digital presence. Their attention to detail and creative approach exceeded all expectations.",
                author: "Sarah Johnson",
                role: "CEO of TechStart"
            },
            {
                text: "The level of professionalism and expertise demonstrated throughout the project was outstanding. Highly recommended!",
                author: "Michael Chen",
                role: "Product Manager"
            },
            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi malesuada orci felis at pellentesque quam et pellentesque tortor.",
                author: "Ricky Aprilia",
                role: "Founder of Varibo"
            },
            {
                text: "Incredible design work that perfectly captured our brand vision. The team went above and beyond at every stage.",
                author: "Emma Rodriguez",
                role: "Marketing Director"
            },
            {
                text: "From concept to delivery, the entire process was smooth and efficient. The results speak for themselves.",
                author: "David Park",
                role: "Startup Founder"
            }
        ];
        
        const index = $(this).index();
        $('.testimonial-text').fadeOut(200, function() {
            $(this).text(testimonials[index].text).fadeIn(200);
        });
        $('.testimonial-author').fadeOut(200, function() {
            $(this).text(testimonials[index].author).fadeIn(200);
        });
        $('.testimonial-role').fadeOut(200, function() {
            $(this).text(testimonials[index].role).fadeIn(200);
        });
    });

    // Newsletter form submission
    $('#newsletterForm').on('submit', function(e) {
        e.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        alert('Thank you for subscribing! We\'ll send updates to: ' + email);
        $(this).find('input[type="email"]').val('');
    });

    // Scroll animations for product and service cards
    function animateOnScroll() {
        $('.product-card, .service-card').each(function(i) {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom - 100) {
                setTimeout(() => {
                    $(this).css({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    });
                }, i * 50);
            }
        });
    }

    // Initial setup for scroll animations
    $('.product-card, .service-card').css({
        'opacity': '0',
        'transform': 'translateY(40px)',
        'transition': 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    });

    // Run animation on scroll and on page load
    $(window).on('scroll', animateOnScroll);
    animateOnScroll();
});