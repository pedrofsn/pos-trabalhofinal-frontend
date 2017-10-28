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

        $('#button-adicionar-dados-demograficos').click(
            function () {
                var foo = $('#form-dados-demograficos').serialize();
                console.log(foo)
            });

        $('input:radio[name=nacionalidade]').change(function () {
            if (this.value == '1') {
                $('#db').show()
                $('#de').hide()
            }
            else if (this.value == '2') {
                $('#db').hide()
                $('#de').show()
            }
        });

    }
);