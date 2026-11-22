//Botão de texto maior
const botaoFonte = document.querySelector('#fonte-maior');
const pagina = document.documentElement;
const chavePreferencia = 'texto-maior';

let fonteMaiorAtiva = false;

try {
  fonteMaiorAtiva = localStorage.getItem(chavePreferencia) === 'true';
} catch {
  // Usa o tamanho padrão se o navegador bloquear a leitura.
}

function aplicarTamanhoDoTexto() {
  pagina.classList.toggle('texto-maior', fonteMaiorAtiva);
  botaoFonte.setAttribute('aria-pressed', String(fonteMaiorAtiva));
}

aplicarTamanhoDoTexto();

botaoFonte.addEventListener('click', function () {
  fonteMaiorAtiva = !fonteMaiorAtiva;
  aplicarTamanhoDoTexto();

  try {
    localStorage.setItem(chavePreferencia, String(fonteMaiorAtiva));
  } catch {
    // O botão continua funcionando nesta página.
  }
});

botaoFonte.hidden = false;

//Botão de alto contraste
const botaoContraste = document.querySelector('#alto-contraste');
const chaveContraste = 'alto-contraste';

if (botaoContraste) {
  let contrasteAtivo = false;

  try {
    contrasteAtivo = localStorage.getItem(chaveContraste) === 'true';
  } catch {
    // Usa as cores padrão se o navegador bloquear a leitura.
  }

  function aplicarContraste() {
    pagina.classList.toggle('alto-contraste', contrasteAtivo);
    botaoContraste.setAttribute('aria-pressed', String(contrasteAtivo));
  }

  aplicarContraste();

  botaoContraste.addEventListener('click', function () {
    contrasteAtivo = !contrasteAtivo;
    aplicarContraste();

    try {
      localStorage.setItem(chaveContraste, String(contrasteAtivo));
    } catch {
      // O botão continua funcionando nesta página.
    }
  });

  botaoContraste.hidden = false;
}