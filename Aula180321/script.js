$(function(){
    const tbody = $(".table tbody");
    
    function obterDados(){
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            type: 'GET',
            beforeSend: function(){
                $('.table').after('<p class="loading"> Aguarde! Carregando...</p>');
            },
            error: function(){
                $('.table').after('<p class="loading"> Deu ruim </p>');
            },
            success: function(dados){
                mostrarDados(dados);
            },
            complete: function(){
                $('.loading').remove();
            }
        })
    }
    obterDados();
    
    function mostrarDados(dados){
        $.each(dados, function(i, el){
            tbody.append(`<tr class="linha">
                            <th scope="row" class="id">${el.id}</th>
                            <td class="nome">${el.name}</td>
                            <td class="username">${el.username}</td>
                            <td class="email">${el.email}</td>
                            <td class="street">Rua: ${el.street}</td>
                          </tr>                              
         `)
        })
    }
    // , Apartamento: ${el.address.suite}, Código Postal: ${el.address.zipcode}, Latitude: ${el.address.geo.lat} | Longitude: ${el.address.geo.lng}
    tbody.on('click', (e) => {    
        $linha = $(e.target).closest(".linha");
        $("#name").val($linha.children(".nome").text());
        $("#username").val($linha.children(".username").text());
        $("#email").val($linha.children(".email").text());
        $("#street").val($linha.children(".street").text());
    })

    $('form').on('submit', function (e){
        e.preventDefault();
        const dados = {};
        $('form').find('input').each(function(i, el){
            dados[el.id] = el.value;
        })
       
        $.ajax('https://jsonplaceholder.typicode.com/users', {
            type: 'POST',
            data: dados,
            success: function(_dados){
                console.log(_dados);
                mostrarDados([_dados]);
                alert("SUCESSO!");
            },
            error: function(){
                alert("ERRO!")
            }
        })
    })
})