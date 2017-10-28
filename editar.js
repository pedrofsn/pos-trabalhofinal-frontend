$(document).ready(
    function () {

        $('#nome, #sobrenome, #titulo, #sufixo').on('input',
            function (e) {
                var rotulo = $('#nome-completo').val();
                var titulo = $('#titulo').val();
                var nome = $('#nome').val();
                var sobrenome = $('#sobrenome').val();
                var sufixo = $('#sufixo').val();

                var nomeGerado = titulo + " " + nome + " " + sobrenome + " " + sufixo;
                $('#rotulo').text(nomeGerado);
            });

        $('#button-adicionar-nome').click(
            function () {
                var nome = $('#rotulo').text();
                var usoNome = $("#usoNome option:selected").text();
                var nomePreferido = $("#nomePreferido option:selected").text();
                var indicadorUsoCondicional = $("#indicadorUsoCondicional option:selected").text();

                if (nome != '' && !nome.includes('Preencha os campos abaixo')) {

                    var html = '<tr>' +
                        '<td>' + nome + '</td>' +
                        '<td>' + usoNome + '</td>' +
                        '<td>' + nomePreferido + '</td>' +
                        '<td>' + indicadorUsoCondicional + '</td>' +
                        + '</tr>';

                    $('#tableNome').append(html);

                }
            });


        $('#button-adicionar-identificador').click(
            function () {
                var designacao = $('#designacao').val();
                var emissor = $('#emissor').val();
                var data = $('#data').val();
                var areaGeografica = $("#areaGeografica option:selected").text();

                var html = '<tr>' +
                    '<td>' + designacao + '</td>' +
                    '<td>' + emissor + '</td>' +
                    '<td>' + data + '</td>' +
                    '<td>' + areaGeografica + '</td>'
                    + '</tr>';

                $('#tableIdentificador').append(html);
            });

    }
);