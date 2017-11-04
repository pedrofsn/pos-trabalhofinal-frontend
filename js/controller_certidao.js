$(document).ready(
    function () {
        $('#button-adicionar-certidao').click(
            function () {
                var tipoCertidao = $("#tipoCertidao option:selected").text();
                var nomeCartorio = $('#nomeCartorio').val();
                var livro = $('#livro').val();
                var folha = $('#folha').val();
                var termo = $('#termo').val();

                var html = '<tr>' +
                    '<td>' + tipoCertidao + '</td>' +
                    '<td>' + nomeCartorio + '</td>' +
                    '<td>' + livro + '</td>' +
                    '<td>' + folha + '</td>' +
                    '<td>' + termo + '</td>'
                    + '</tr>';

                $('#tableCertidao').append(html);
            });
    }
);