$(document).ready(
    function () {
        $('#button-adicionar-titulo').click(
            function () {
                var secao = $('#secao').val();
                var zona = $('#zona').val();

                var html = '<tr>' +
                    '<td>' + secao + '</td>' +
                    '<td>' + zona + '</td>' +
                    + '</tr>';

                $('#tableTitulo').append(html);
            });
    }
);