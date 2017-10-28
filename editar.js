$(document).ready(
    function () {
        $('#button-adicionar').click(
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
                
                $('#table').append(html);
            });

    }
);