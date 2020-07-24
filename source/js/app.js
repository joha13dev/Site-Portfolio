$(function() {

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data("filter");

            if (cat == 'all') {
                $("[data-cat]").removeClass("hide")
            } else {
                $('[data-cat]').each(function() {

                    let = workCat = $(this).data("cat");
                    if (workCat != cat) {
                        $(this).addClass("hide")
                    } else {
                        $(this).removeClass("hide")
                    }
                });
            }
    })





    /* Modals
===================*/

    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");
    
    modalCall.on('click', function(event) {
        event.preventDefault();

        let modalId = $(this).data("modal");
        let modalFace = $("#modalFace");
        

            $(modalId).addClass("show");
            $(modalFace).addClass("show_face");
            $("html,body").addClass('no_scroll');
        
    })

    modalClose.on('click', function(event) {
        event.preventDefault();

        let modalParent = $(this).parent(".box-shadow");
        let modalFace = $("#modalFace");
        

            $(modalParent).removeClass("show");
            $(modalFace).removeClass("show_face");
            $("html,body").removeClass('no_scroll');
        
    });

    let burgerActiv = $("[data-burger]");
    let showMenu = $("[data-nav]");

    burgerActiv.on('click', function(event) {
        event.preventDefault();

       
        $(showMenu).toggleClass("menu-mobile");
    });
 
});

