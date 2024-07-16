function tratarTexto() {

  const texto = document.querySelector('.texto-padrao').value;
  const textoMinusculo = texto.toLowerCase();
  const textoMinSemAcento = textoMinusculo.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return textoMinSemAcento;

}

function criptografa() {
  
  const textoArray = Array.from(tratarTexto());

  const textoCriptografadoContainer = document.querySelector('.textos');
  const btnCopia = document.querySelector('.botao-copia');

  textoCriptografadoContainer.classList.add('ativo');
  btnCopia.classList.add('ativo');

  textoArray.map((letra, index) => {
    if(letra == 'e') {
      return textoArray[index] = 'enter';
    }  
    if(letra == 'i') {
      return textoArray[index] = 'imes';
    }
    if(letra == 'a') {
      return textoArray[index] = 'ai';
    }
    if(letra == 'o') {
      return textoArray[index] = 'ober';
    }
    if(letra == 'u') {
      return textoArray[index] = 'ufat';
    }
  })
  
  const textoCriptografado = textoArray.join('');
  textoCriptografadoContainer.innerText = textoCriptografado;

}


function descriptografa() {

  const padroes = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
  const substituicoes = ["e", "i", "a", "o", "u"];

  const textoDescriptografadoContainer = document.querySelector('.textos');
  const btnCopia = document.querySelector('.botao-copia');

  textoDescriptografadoContainer.classList.add('ativo');
  btnCopia.classList.add('ativo');

  let textoDescriptografado = tratarTexto();

  padroes.forEach((padrao, index) => {
    textoDescriptografado = textoDescriptografado.replace(padrao, substituicoes[index]); //Cada substituição é aplicada à string resultante da substituição anterior. textoModificado é atualizado a cada iteração do loop forEach, acumulando todas as substituições.
  });
  
  textoDescriptografadoContainer.innerText = textoDescriptografado;
 
}


function copia() {
  const textoCopiar = document.querySelector('.textos');
  const btnCopia = document.querySelector('.botao-copia');
  navigator.clipboard.writeText(textoCopiar.innerText)
  .then(() => {
    btnCopia.childNodes[2].nodeValue = 'Copiado';
    textoCopiar.innerText = 'Nenhuma mensagem';
    setTimeout(() => btnCopia.childNodes[2].nodeValue = 'Copiar', 1000);
  })
  .catch((error) => {
    console.error('Falha ao copiar texto para a área de transferência:', error);
  });

}
