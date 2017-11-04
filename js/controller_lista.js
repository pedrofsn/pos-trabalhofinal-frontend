$(document).ready(
    function () {
        $('#button-cadastrar-individuo').click(
            function () {
                var tamanhoLista = listaIndividuos.length

                idIndividuoEmEdicao = tamanhoLista + 1
                listaIndividuos.push({
                    "id": idIndividuoEmEdicao, 'listaNomes': [], "listaIdentificadores":[]
                })
                exibirConteudo()
            }
        )
    }
);