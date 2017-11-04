$(document).ready(
    function () {
        $('#button-adicionar-identificador').click(
            function () {
                var tipoIdentificador = $("#tipoIdentificador option:selected").text();
                var designacao = $('#designacao').val();
                var emissor = $('#emissor').val();
                var data = $('#data').val();
                var areaGeografica = $("#areaGeografica option:selected").text();

                var html = '<tr>' +
                    '<td>' + tipoIdentificador + '</td>' +
                    '<td>' + designacao + '</td>' +
                    '<td>' + emissor + '</td>' +
                    '<td>' + data + '</td>' +
                    '<td>' + areaGeografica + '</td>'
                    + '</tr>';

                $('#tableIdentificador').append(html);
            });
    }
);