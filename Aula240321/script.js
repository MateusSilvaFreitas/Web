$(function(){
    $("#botaoSubmit").on('click', function(e){
        e.preventDefault();
        var liga = $("#ligas").val();
        var temporada = $("#temporada").val();
        
        $(".dadosMarcadores").text("");
        $(".dadosTime").text(""); 
        $(".dados").text("");
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api-football-beta.p.rapidapi.com/teams?league=${liga}&season=${temporada}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "dd1ab06470msh12c63d89fba8c10p12a625jsnf0ab35c95d4d",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        }; 
        fazRequisicao(settings);
        settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api-football-beta.p.rapidapi.com/players/topscorers?season=${temporada}&league=${liga}`,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "dd1ab06470msh12c63d89fba8c10p12a625jsnf0ab35c95d4d",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        };
        fazRequisicaoMarcadores(settings);
    })

    function fazRequisicao(settings){
        $.ajax(settings).done(function (response){
            if(response.response[0] === undefined){
                alert('Não foi possível encontrar resultados para esta temporada')
            } else {
                criaTela(response.response);
            }
        })
    }
    function fazRequisicaoMarcadores(settings){
        $.ajax(settings).done(function (response){
            criaTelaMarcadores(response.response);
        })
    }
    
    function criaTela(dados){
        $.each(dados, function(i, el){
            $(".dados").append(
                `<section id="${el.team.id}" class="timeDet">
                <figure> 
                    <img src="${el.team.logo}" alt="Logo ${el.team.name}">
                </figure>
                <p>Nome: ${el.team.name}</p>
                <p>Fundação: ${el.team.founded}</p>
            </section>`);
        })
    }
    function criaTelaMarcadores(dadosMarcadores){
        count = 0;
        $.each(dadosMarcadores, function(i, el){
            if(count < 10){
                $(".dadosMarcadores").append(
                    `<section class="marcadores">
                    <figure> 
                        <img src="${el.player.photo}" alt="${el.player.name}">
                    </figure>
                    <p>
                            <span class="negrito">Nome:</span> ${el.player.firstname} ${el.player.lastname}<br> 
                            <span class="negrito">Idade:</span> ${el.player.age} <br> 
                            <span class="negrito">Nacionalidade:</span> ${el.player.nationality} <br>
                            <span class="negrito">Jogos:</span> ${el.statistics[0].games.lineups} <br> 
                            <span class="negrito">Gols:</span> ${el.statistics[0].goals.total} <br> 
                            <span class="negrito">Assitencias:</span> ${el.statistics[0].goals.assists ? el.statistics[0].goals.assists : 0} <br> 
                            <span class="negrito">Time:</span> ${el.statistics[0].team.name}
                            <br>
                            <br>
                            <br>
                        </p> 
                </section>`                
                );
            }
            count++;
        })
    }
    function criaTelaInfoTime(dadosTime){
        $(".dadosTime").text("");
        logoPais = "";
        if(dadosTime.league.country != "World"){
            logoPais = `<img src="${dadosTime.league.flag}" alt="Logo ${dadosTime.league.country}">`
        }
    
        informacaoTime =            
            `
    <section>
        <header>
            <figure> 
                <img src="${dadosTime.league.logo}" alt="Logo ${dadosTime.league.name}">
            </figure>
            <h5>${dadosTime.league.country != "World" ? dadosTime.league.country + " - " : ""}  ${dadosTime.league.name} ${logoPais}</h5>
            <br>
            <h5>${dadosTime.team.name}  <img src="${dadosTime.team.logo}" alt="Logo ${dadosTime.team.name}>"</h5>
        </header>
        <article>
            <h5>Maiores Resultados</h5>
            <h6>Gols feitos</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.biggest.goals.for.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.biggest.goals.for.away} </p>
            <h6>Gols tomados</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.biggest.goals.against.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.biggest.goals.against.away} </p>
            <h6>Vitória</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.biggest.wins.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.biggest.wins.away} </p>
            <h6>Derrota</h6>
              <p><span class="negrito">Em casa:</span> ${dadosTime.biggest.loses.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.biggest.loses.away} </p>
            <h6>Sequencias Máximas</h6>
            <p><span class="negrito">Vitórias</span> ${dadosTime.biggest.streak.wins} </p>
            <p><span class="negrito">Empates</span> ${dadosTime.biggest.streak.draw} </p>
            <p><span class="negrito">Derrotas</span> ${dadosTime.biggest.streak.loses} </p>

            <h5>Jogos</h5>
            <h6>Vitórias</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.fixtures.wins.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.fixtures.wins.away} </p>
            <p><span class="negrito">Total:</span> ${dadosTime.fixtures.wins.total} </p>
            <h6>Empate</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.fixtures.draws.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.fixtures.draws.away} </p>
            <p><span class="negrito">Total:</span> ${dadosTime.fixtures.draws.total} </p>
            <h6>Derrotas</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.fixtures.loses.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.fixtures.loses.away} </p>
            <p><span class="negrito">Total:</span> ${dadosTime.fixtures.loses.total} </p>
            <h6>Jogos jogados</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.fixtures.played.home} </p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.fixtures.played.away} </p>
            <p><span class="negrito">Total:</span> ${dadosTime.fixtures.played.total} </p>
            
            <h5>Gols</h5>
            <h6>Gols feitos</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.goals.for.total.home} (MÉDIA PORA JOGO: ${dadosTime.goals.for.average.home})</p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.goals.for.total.away} (MÉDIA PORA JOGO: ${dadosTime.goals.for.average.away})</p>
            <p><span class="negrito">Total:</span> ${dadosTime.goals.for.total.total} (MÉDIA PORA JOGO: ${dadosTime.goals.for.average.total})</p>
            <h6>Gols tomados</h6>
            <p><span class="negrito">Em casa:</span> ${dadosTime.goals.against.total.home} (MÉDIA PORA JOGO: ${dadosTime.goals.against.average.home})</p>
            <p><span class="negrito">Fora de casa:</span> ${dadosTime.goals.against.total.away} (MÉDIA PORA JOGO: ${dadosTime.goals.against.average.away})</p>
            <p><span class="negrito">Total:</span> ${dadosTime.goals.against.total.total} (MÉDIA PORA JOGO: ${dadosTime.goals.against.average.total})</p>
        </article>
    </section>
        `
        $(".dadosTime").append(informacaoTime)
    }
    
$(".dados").click(function(e){
    var idTime = $(e.target).closest("section").attr('id');
    var temporada = $("#temporada").val();
    var liga = $("#ligas").val();
    
    if(idTime === undefined){
        return;
    }
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api-football-beta.p.rapidapi.com/teams/statistics?team=${idTime}&season=${temporada}&league=${liga}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "dd1ab06470msh12c63d89fba8c10p12a625jsnf0ab35c95d4d",
            "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
        }
    }
    $.ajax(settings).done(function (response){
        criaTelaInfoTime(response.response);
    })
})
})
