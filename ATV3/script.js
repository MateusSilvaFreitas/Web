$(function(){
    $(".coordenadas").mouseenter(function(){
        console.log("O mouse entrou");
        $(".valores").fadeIn();
    }).mouseout(function(){
        console.log("o mouse saiu")
        $(".valores").fadeOut();
    }).mousemove(function(e){

        var background = ["#f36", "#C3C", "#fc0", "#FC6", "#9C0"];
        cor = Math.floor(Math.random() * (background.length - 1));
        console.log(cor)
       // $(".coordenadas").css("backgroundColor", `${background[cor]}`)  ;
        $(".coordenadas").css("cursor", "crosshair");      
        var posicoes = $(this).offset();
        var valorX = e.clientX - posicoes.left;
        var valorY = e.clientY - posicoes.top;
        
        $(".valores").text(`X = ${Math.trunc(valorX)} | Y = ${Math.trunc(valorY)}`);
    });
});