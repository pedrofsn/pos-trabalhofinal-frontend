$(document).ready(
    function () {
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