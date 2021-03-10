$(function(){
    $("#txt").val("Texto alterado");
    $(".email").val("Testo alterado 2");

    //$("p:not(.destaque), li").css("opacity", ".75");
    //$(".container > ul > li").css("color", "#fff");
    //$(".destaque + p").addClass("destaque");
    $(".destaque ~ p").addClass("destaque");
    $("li:first").css("color", "green");
    $("li:first-child").css("color", "blue");
    $("li:last-child").css("color", "green");

    $("p:gt(2)").css({
        "font-size":"22px",
        "color":"red"
    })

    $("a[title]").css("color", "yellow");
    $("a:not([title])").hide();
    $("li:odd").css("backgroundColor", "gray");
    $("li:even").css("backgroundColor", "purple");
    $("p:contains(afo 6)").css("color", "orange");

    $("p:has(i)").css("color", "blue")

    $("p:empty").text("Este P estava vazio")

    $(".hidden").show();
});