function autoajuste (textarea) {
   textarea.style.height = 'auto';
   textarea.style.height = (textarea.scrollHeight) + 'px';
}

function criptografar(text) {
    let substituicoes = {
        'e': 'entrer', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u' : 'ufat'
    
    };

    return text.split('').map(letra => substituicoes[letra] || letra).join('');
}


function descriptografar(text) {
    let palavra = text;
    let saida = '';
    let substituicoes = {
        'entrer':'e', 'imes': 'i', 'ai': 'a', 'ober':'o', 'ufat':'u'
    };

    for (let chave in substituicoes) {
        palavra = palavra.split(chave).join(substituicoes[chave]);
    }

    return palavra;
}

function exibirSaida(text){
   let campo = document.querySelector('.topic__side__exit');
   campo.value = text;

   let divElement = document.querySelector('.disappear');
   divElement.style.visibility = 'hidden';

   divElement = document.querySelector('.topic__side__botaocopi');
   divElement.style.visibility = 'visible';

}

function limparCampo() {
    text = document.querySelector('textarea');
    text.value = '';

}

function receberCriptografar(){
    let text = document.querySelector('textarea').value;
    exibirSaida(criptografar(text));
    limparCampo();
}

function receberDescriptografar() {
    let text = document.querySelector('textarea').value;
    exibirSaida(descriptografar(text));
    limparCampo();

}

function copiarText(){
    let copyText = document.getElementById("Copy");
    copyText.select();
    copyText.setSelectionRange(0,99999);
    navigator.clipboard.writeText(copyText.value);

}
