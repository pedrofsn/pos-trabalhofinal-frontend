$(document).ready(
    function () {
        exibirLista()

        function exibirLista() {
            $('#lista').show()
            $('#conteudo').hide()
            atualizarListaIndividuos()
            isListaAberta = true
        }
        window.exibirLista = exibirLista

        function exibirConteudo() {
            $('#lista').hide()
            $('#conteudo').show()
            isListaAberta = false
        }

        function atualizarListaIndividuos() {
            $('#lista-individuos').empty()

            for (i = 0; i < listaIndividuos.length; i++) {
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
                $("#individuo_" + id).click(function () {
                    idIndividuoEmEdicao = id
                    exibirConteudo()
                });
            }
        }
    }
);