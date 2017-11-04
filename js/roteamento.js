$(document).ready(
    function () {
        var isListaAberta
        exibirLista()

        function exibirLista() {
            $('#lista').show()
            $('#conteudo').hide()
            atualizarListaIndividuos()
            isListaAberta = true
        }

        function exibirConteudo() {
            $('#lista').hide()
            $('#conteudo').show()
            isListaAberta = false
        }

        function atualizarListaIndividuos() {
            $('#lista-individuos').empty()

            console.log(listaIndividuos)
            for (i = 0; i < listaIndividuos.length; i++) {
                var obj = listaIndividuos[i]
                var id = obj.id
                var nome = ""

                if(obj.listaNomes[0] != null) {
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

        $('#atalho-lista').click(
            function () {
                if (!isListaAberta) {
                    if (confirm("Tem certeza que deseja sair/cancelar do cadastro atual?")) {
                        exibirLista()
                    }
                } else {
                    exibirLista()
                }
            }
        )
    }
);