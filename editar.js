$(document).ready(
    function () {
        $('#button-adicionar-nome').click(
            function () {
                var tipoNome = $('#tipoNome').val();
                var nome = $('#nome').val();

                var html = '<tr>' +
                '<td>' + tipoNome + '</td>' +
                '<td>' + nome + '</td>';
                
                $('#tableNome').append(html);
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
                '<td>' + areaGeografica + '</td>';
                
                $('#tableIdentificador').append(html);
            });

    }
);