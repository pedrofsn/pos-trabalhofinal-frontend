$(document).ready(
    function () {

        var listaNomes = [];
        var idNomeEmEdicao = -1;

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
                var titulo = $('#titulo').val();
                var nome = $('#nome').val();
                var sobrenome = $('#sobrenome').val();
                var sufixo = $('#sufixo').val();
                var rotulo = titulo + " " + nome + " " + sobrenome + " " + sufixo;

                var usoNome = $("#usoNome option:selected").text();
                var nomePreferido = $("#nomePreferido option:selected").text();
                var indicadorUsoCondicional = $("#indicadorUsoCondicional option:selected").text();

                var idUsoNome = $("#usoNome").val();
                var idNomePreferido = $("#nomePreferido").val();
                var idIndicadorUsoCondicional = $("#indicadorUsoCondicional").val();

                var index = listaNomes.length;
                var isModoEdicao = idNomeEmEdicao != -1;

                // Válido se os campos estão preenchidos corretamente na view
                if (nome != '' && !nome.includes('Preencha os campos abaixo')) {

                    // Se não estiver em modo de edição, ou seja, cadastro.
                    // Eu incremento o ID
                    if (!isModoEdicao) {
                        idNomeEmEdicao = index + 1
                    }

                    var json = {
                        'id': idNomeEmEdicao,
                        'rotulo': rotulo,
                        'titulo': titulo,
                        'nome': nome,
                        'sobrenome': sobrenome,
                        'sufixo': sufixo,
                        'idUsoNome': idUsoNome,
                        'idNomePreferido': idNomePreferido,
                        'idIndicadorUsoCondicional': idIndicadorUsoCondicional
                    }

                    // Adiciono o novo objeto no array
                    listaNomes.push(json);

                    // Se eu estiver editando, eu removo a view com dados antigos
                    if (isModoEdicao) {
                        $('#row_nome_' + idNomeEmEdicao).closest('tr').remove();
                    }

                    // Adiciono a view criada/editada no final da lista (view)
                    var html = '<tr id="row_nome_' + idNomeEmEdicao + '">' +
                        '<td>' + nome + '</td>' +
                        '<td>' + usoNome + '</td>' +
                        '<td>' + nomePreferido + '</td>' +
                        '<td>' + indicadorUsoCondicional + '</td>' +
                        '<td><button type="button" id="editar' + idNomeEmEdicao + '">Editar</button></td>' +
                        '<td><button type="button" id="remover' + idNomeEmEdicao + '">Remover</button></td>' +
                        + '</tr>';

                    $('#tableNome').append(html);
                    $('#form-nome').trigger("reset");

                    idNomeEmEdicao = -1
                } else {
                    alert('O campo "nome" está vazio')
                }
            });

        $("#tableNome").on("click", "td button", function () {
            // Obtendo o ID que está anotado na view e o modo de trabalho (edição/remoção)
            var customId = $(this).attr('id');
            var isRemocao = customId.includes('remover')
            var id = customId.replace("editar", "");
            id = id.replace("remover", "");

            console.log('ID da row clicada: ' + id);

            var index = -1
            var objeto = null

            // Procurando o objeto dentro do array
            for (i = 0; i < listaNomes.length; i++) {
                var objetoParaEdicao = listaNomes[i]

                if (objetoParaEdicao.id == id) {
                    index = listaNomes.indexOf(objetoParaEdicao);
                    objeto = objetoParaEdicao
                }
            }

            var isExistente = objeto != null && index > -1

            if (isExistente) {
                if (isRemocao) {
                    // REMOVER
                    // Removendo o objeto da memória
                    console.log('Index encontrado para remoção: ' + index);
                    listaNomes.splice(index, 1);

                    // Removendo o objeto da view
                    console.log("Itens na lista (após remoção): " + listaNomes.length);
                    $(this).closest('tr').remove();

                    idNomeEmEdicao = -1

                } else {
                    // EDITAR na view
                    $('#rotulo').val(objeto.rotulo)
                    $('#titulo').val(objeto.titulo)
                    $('#nome').val(objeto.nome)
                    $('#sobrenome').val(objeto.sobrenome)
                    $('#sufixo').val(objeto.sufixo)
                    $('#usoNome').val(objeto.idUsoNome)
                    $('#nomePreferido').val(objeto.idNomePreferido)
                    $('#indicadorUsoCondicional').val(objeto.idIndicadorUsoCondicional)

                    // Registrando qual será o id a ser editado ao pressionar o botão salvar
                    idNomeEmEdicao = objeto.id;
                }
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