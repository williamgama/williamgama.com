$(".hamburger").click(function () {    
    $('#conteudo').addClass('show-nav');
    $('#menu').addClass('show-nav');
});

$(".hamburger-close, .inicio, .biografia, .habilidades, .portfolio, .contato, main").click(function () {
    $('#conteudo').removeClass('show-nav');
    $('#menu').removeClass('show-nav');
});

$(".mais").click(function (e) {
    $(this).hide();
    $(this.parentElement.children[1]).css("display", "flex");
    $(this.parentElement.parentElement.parentElement.children[1]).css("opacity", "1");
    $(this.parentElement.parentElement.parentElement.children[1]).css("padding-top", "2.5rem");
    $(this.parentElement.parentElement.parentElement.children[1]).css("max-height", "60rem");
});

$(".menos").click(function () {
    $(this).hide();
    $(this.parentElement.children[0]).css("display", "flex");
    $(this.parentElement.parentElement.parentElement.children[1]).css("max-height", "0");
    $(this.parentElement.parentElement.parentElement.children[1]).css("padding-top", "0");
    $(this.parentElement.parentElement.parentElement.children[1]).css("opacity", "0");
});

$('.scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2500);
            return false;
        }
    }
});
