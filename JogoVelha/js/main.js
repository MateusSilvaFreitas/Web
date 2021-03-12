$(function () {
    var jogador = 1;
    var jogadorVencedor = "";   
    var qtdJogadas = 0;

    function colunasIguais(a, b, c) {
        var colunaA = $("#coluna" + a);
        var colunaB = $("#coluna" + b);
        var colunaC = $("#coluna" + c);

        var backgroundA = $("#coluna" + a).css("background-image");
        var backgroundB = $("#coluna" + b).css("background-image");
        var backgroundC = $("#coluna" + c).css("background-image");

        if ((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none")) {
            if (backgroundA.indexOf("images/1.png") >= 0) {
                jogadorVencedor = 1
            } else {
                jogadorVencedor = "2"
            }
            return true;
        } else {
            return false;
        }
    }

    function verificarFimDeJogo() {
        qtdJogadas++;

        if(qtdJogadas >=9){
            $("#resultado").html("<h2> Empate </h2>");
            $(".coluna").off("click");
        }

        if (colunasIguais(1, 2, 3) || colunasIguais(4, 5, 6) || colunasIguais(7, 8, 9) ||
            colunasIguais(1, 4, 7) || colunasIguais(2, 5, 8) || colunasIguais(3, 6, 9) ||
            colunasIguais(1, 5, 9) || colunasIguais(3, 5, 7)
        ) {
            $("#resultado").html("<h2> O Player " + jogadorVencedor + " ganhou!!!</h2>");
            $(".coluna").off("click");
        }
    }

    $(".coluna").click(function () {
        var bg = $(this).css("background-image");
        if (bg == "none" || bg == "") {
            var img = "url(images/" + jogador.toString() + ".png)";
            $(this).css("background", img);
            jogador = (jogador == 1 ? 2 : 1);
            verificarFimDeJogo();
        }
    });

});






function loadTexto(){
    $.ajax({
        url: "./textoJogoDaVelha.txt"
      }).done(function(response) {
        $("#texto").html(response);
      });
}