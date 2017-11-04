$(document).ready(
    function () {
        var idIdentificadorEmEdicao = -1;
        inicializarCadastroEdicaoIdentificadores()

        function inicializarCadastroEdicaoIdentificadores() {
            idIdentificadorEmEdicao = -1;
            atualizarLista()
        }
        window.inicializarCadastroEdicaoIdentificadores = inicializarCadastroEdicaoIdentificadores

        // Atualizo a view
        function atualizarLista() {
            $('#tableIdentificador tbody').empty();
            $('#form-cadastro-identificador').trigger("reset");

            var individuo = getIndividuoParaEdicao()
            if (individuo != null) {
                var listaIdentificadores = individuo.listaIdentificadores

                for (i = 0; i < listaIdentificadores.length; i++) {
                    var objeto = listaIdentificadores[i]

                    var id = objeto.id
                    var tipoIdentificador = objeto.tipoIdentificador
                    var designacao = objeto.designacao
                    var emissor = objeto.emissor
                    var data = objeto.data
                    var areaGeografica = objeto.areaGeografica

                    var html = '<tr id="row_identificador_' + id + '">' +
                        '<td>' + tipoIdentificador + '</td>' +
                        '<td>' + designacao + '</td>' +
                        '<td>' + emissor + '</td>' +
                        '<td>' + data + '</td>' +
                        '<td>' + areaGeografica + '</td>' +
                        '<td><button type="button" id="editar' + id + '">Editar</button></td>' +
                        '<td><button type="button" id="remover' + id + '">Remover</button></td>'+
                        '</tr>';

                        console.log(html)

                    $('#tableidentificador').append(html);
                }

                $('#form-cadastro-identificador').trigger("reset");
            }
        }

        $('#button-adicionar-identificador').click(
            function () {
                var tipoIdentificador = $("#tipoIdentificador option:selected").text();
                var designacao = $("#designacao").val();
                var emissor = $("#emissor").val();
                var data = $("#data").val();
                var areaGeografica = $("#areaGeografica option:selected").text();

                var individuo = getIndividuoParaEdicao()
                var listaIdentificadores = individuo.listaIdentificadores

                var index = listaIdentificadores.length;
                var isModoEdicao = idIdentificadorEmEdicao != -1;
                               
                if (!isModoEdicao) {
                    idIdentificadorEmEdicao = index + 1
                }
                    var json = {
                        'id': idIdentificadorEmEdicao,
                        'tipoIdentificador': tipoIdentificador,
                        'designacao': designacao,
                        'emissor': emissor,
                        'data': data,
                        'areaGeografica': areaGeografica    
                    }
                    
                    if (isModoEdicao) {
                        var indexParaRemocao = -1
                        for (i = 0; i < listaIdentificadores.length; i++) {
                            var objeto = listaIdentificadores[i]

                            if (objeto.id == idIdentificadorEmEdicao) {
                                indexParaRemocao = i
                                break
                            }
                        }

                        if (indexParaRemocao != -1) {
                            listaIdentificadores.splice(indexParaRemocao, 1);
                        }

                    }

                    // Adiciono o novo objeto no array
                    listaIdentificadores.push(json);

                    atualizarLista()

                    idIdentificadorEmEdicao = -1
                
            });

        $("#tableIdentificador").on("click", "td button", function () {
            // Obtendo o ID que está anotado na view e o modo de trabalho (edição/remoção)
            var customId = $(this).attr('id');
            var isRemocao = customId.includes('remover')
            var id = customId.replace("editar", "");

            id = id.replace("remover", "");

            var index = -1
            var objeto = null

            var individuo = getIndividuoParaEdicao()
            var listaIdentificadores = individuo.listaIdentificadores

            // Procurando o objeto dentro do array
            for (i = 0; i < listaIdentificadores.length; i++) {
                var objetoParaEdicao = listaIdentificadores[i]

                if (objetoParaEdicao.id == id) {
                    index = listaIdentificadores.indexOf(objetoParaEdicao);
                    objeto = objetoParaEdicao
                }
            }

            var isExistente = objeto != null && index > -1

            if (isExistente) {
                if (isRemocao) {                   
                    // Removendo o objeto da memória
                    listaIdentificadores.splice(index, 1);

                    // Removendo o objeto da view
                    $(this).closest('tr').remove();

                    idIdentificadorEmEdicao = -1

                } else {
                    // EDITAR na view
                    $('#tipoIdentificador').val(objeto.tipoIdentificador)
                    $('#designacao').val(objeto.designacao)
                    $('#emissor').val(objeto.emissor)
                    $('#data').val(objeto.data)
                    $('#areaGeografica').val(objeto.areaGeografica)

                    // Registrando qual será o id a ser editado ao pressionar o botão salvar
                    idIdentificadorEmEdicao = objeto.id;
                }
            }
        });

    }
);