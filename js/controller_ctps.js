$(document).ready(
    function () {
        $('#button-adicionar-ctps').click(
            function () {
                var estadoCTPS = $("#estadoCTPS option:selected").text();
                var serieCTPS = $('#serieCTPS').val();

                var html = '<tr>' +
                    '<td>' + serieCTPS + '</td>' +
                    '<td>' + estadoCTPS + '</td>' +
                    + '</tr>';

                $('#tableCTPS').append(html);
            });
    }
);