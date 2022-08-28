const owl = $('.slide-two');
owl.owlCarousel({
        loop: true,
        margin:50,
        dots:true,
        dotsEach:true,
        // nav:true,
        startPosition: 1,
        item: 3,
        responsive : {
            
            0 : {  
                center: true,
                items: 1,
            },
            360 : {    
                center: true,
                items: 1,
            },
            992 : {
                center: true,
                items: 2,
            },
            1200 : {
                center: false,
                items: 2,
            },
            1400 : {
                center: false,
                items: 3,
            },
        }
        
});

const owlPrice = $('.slide-one');
owlPrice.owlCarousel({
        loop: true,
        center: true,
        margin:50,
        startPosition: 1,
        item: 3,
        responsive : {
            
            0 : {  
                items: 1.1,
            },
            360 : {    
                items: 1.3,
            },
            600 : {
                items: 1.5,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 2,
            },
            1200 : {
                items: 3,
            },
            1400 : {
                items: 3,
            },
        }
});


$('.back').click(function() {
  
    owl.trigger('prev.owl.carousel');
})

$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})