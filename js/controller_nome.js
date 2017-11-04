$(document).ready(
    function () {
        var idNomeEmEdicao = -1;

        // Atualizo a view
        function atualizarLista() {
            $('#tableNome').empty()

            var individuo = getIndividuoParaEdicao()
            var listaNomes = individuo.listaNomes

            for (i = 0; i < listaNomes.length; i++) {
                var objeto = listaNomes[i]

                var id = objeto.id
                var nome = objeto.nome
                var usoNome = objeto.usoNome
                var nomePreferido = objeto.nomePreferido
                var indicadorUsoCondicional = objeto.indicadorUsoCondicional

                var html = '<tr id="row_nome_' + id + '">' +
                    '<td>' + nome + '</td>' +
                    '<td>' + usoNome + '</td>' +
                    '<td>' + nomePreferido + '</td>' +
                    '<td>' + indicadorUsoCondicional + '</td>' +
                    '<td><button type="button" id="editar' + id + '">Editar</button></td>' +
                    '<td><button type="button" id="remover' + id + '">Remover</button></td>' +
                    + '</tr>';

                $('#tableNome').append(html);
            }

            $('#form-nome').trigger("reset");
        }

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

                var individuo = getIndividuoParaEdicao()
                var listaNomes = individuo.listaNomes

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
                        'usoNome': usoNome,
                        'nomePreferido': nomePreferido,
                        'indicadorUsoCondicional': indicadorUsoCondicional,
                        'idUsoNome': idUsoNome,
                        'idNomePreferido': idNomePreferido,
                        'idIndicadorUsoCondicional': idIndicadorUsoCondicional
                    }

                    if (isModoEdicao) {
                        var indexParaRemocao = -1
                        for (i = 0; i < listaNomes.length; i++) {
                            var objeto = listaNomes[i]

                            if (objeto.id == idNomeEmEdicao) {
                                indexParaRemocao = i
                                break
                            }
                        }

                        if (indexParaRemocao != -1) {
                            listaNomes.splice(indexParaRemocao, 1);
                        }

                    }

                    // Adiciono o novo objeto no array
                    listaNomes.push(json);

                    atualizarLista()

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

            var index = -1
            var objeto = null

            var individuo = getIndividuoParaEdicao()
            var listaNomes = individuo.listaNomes

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

    }
);