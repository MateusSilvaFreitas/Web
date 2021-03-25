$(function(){
    $("#temporada").focusout(function(e){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://api-football-beta.p.rapidapi.com/teams?league=71&season=${this.value}`,
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
            "url": `https://api-football-beta.p.rapidapi.com/players/topscorers?season=${this.value}&league=71`,
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
            criaTela(response.response);
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
                `<section id="${el.team.id}">
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

})