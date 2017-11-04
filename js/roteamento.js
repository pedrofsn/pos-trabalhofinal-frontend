$(document).ready(
    function () {
        exibirLista()

        function exibirLista() {
            $('#lista').show()
            $('#conteudo').hide()
            atualizarListaIndividuos()
            isListaAberta = true
            idIndividuoEmEdicao = -1
        }
        window.exibirLista = exibirLista

        function exibirConteudo() {
            $('#lista').hide()
            $('#conteudo').show()
            limparCampos()
            isListaAberta = false
        }
        window.exibirConteudo = exibirConteudo

        function atualizarListaIndividuos() {
            $('#lista-individuos').empty()

            var size = listaIndividuos.length
            if (size > 0) {
                for (i = 0; i < size; i++) {
                    var obj = listaIndividuos[i]
                    var id = obj.id
                    var nome = ""

                    if (obj.listaNomes[0] != null) {
                        nome = obj.listaNomes[0].nome
                    }

                    var idComNome = id + ') ' + nome

                    var html = '<a id="individuo_' + id + '" class="list-group-item">'
                        + idComNome +
                        '</a>';

                    $('#lista-individuos').append(html);
                }
            } else {
                $('#lista-individuos').html('Sem indivíduos cadastrados')
            }
        }

        $("#lista-individuos").on("click", "a", function () {
            var idRow = $(this).attr('id')
            idRow = idRow.replace('individuo_', '')

            idIndividuoEmEdicao = idRow
            exibirConteudo()
        });
    }
);