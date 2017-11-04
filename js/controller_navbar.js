$(document).ready(
    function () {
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