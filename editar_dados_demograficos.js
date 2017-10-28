window.onload = function () {
    atualizaMunicipios();
    paises('paises');
    paises('paises-endereco');
};

function atualizaMunicipios() {
    var elemento = document.getElementById('estados');
    var estado = elemento.options[elemento.selectedIndex].text;
    var municipioLabel = document.getElementById('municipio-label');
    municipioLabel.textContent = estado + " (municípios)";

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            var tamanho = json.length;
            var i;

            /* elimina opções existentes */
            var municipios = document.getElementById('municipios');
            municipios.options.length = 0;

            /* insere municípios do estado selecionado */
            for (i = 0; i < tamanho; i++) {
                var opcao = document.createElement('option');
                var componente = json[i];
                if (componente.estado == estado) {
                    opcao.text = componente.municipio;
                    opcao.value = componente.codigo;
                    municipios.add(opcao, municipios[i]);
                }
            }
        }
    };
    xhttp.open("GET", "js/municipios.json", true);
    xhttp.send();
}

function paises(chave) {
    var elemento = document.getElementById(chave);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            var tamanho = json.length;
            var i;

            /* insere países */
            if (elemento != null) {
                for (i = 0; i < tamanho; i++) {
                    var opcao = document.createElement('option');
                    var componente = json[i];
                    opcao.text = componente.pais;
                    opcao.value = componente.cod;
                    elemento.add(opcao, elemento[i]);
                }
            }
        }
    };
    xhttp.open("GET", "js/paises.json", true);
    xhttp.send();
}