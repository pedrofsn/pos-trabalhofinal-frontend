$(document).ready(
    function () {
        exibirLista()

        function exibirLista() {
            $('#lista').show()
            $('#conteudo').hide()
            atualizarListaIndividuos()
        }

        function exibirConteudo() {
            $('#lista').hide()
            $('#conteudo').show()
        }

        function atualizarListaIndividuos() {
            $('#lista-individuos').empty()

            console.log(listaIndividuos)
            for (i = 0; i < listaIndividuos.length; i++) {
                var id = listaIndividuos[i].id
                var nome = listaIndividuos[i].listaNomes[0]
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