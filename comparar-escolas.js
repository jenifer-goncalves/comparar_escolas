

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
  }

  fecharEscola() {
    this.statusFuncionamento = false;
  }
}

/* 🚨NÃO ALTERAR A CLASSE 🚨 */


/* ===== OBTER ELEMENTOS ===== */
// Uma das únicas coisas que eu entendi (nem sei se tá certo)
// Elementos A
const inputCidadeA = document.querySelector('.unidadeA__cidade');
const inputCodA = document.querySelector('.unidadeA__codigo');
const inputAnoA = document.querySelector('.unidadeA__ano');
const inputQtdeA = document.querySelector('.unidadeA__cursos');

// Elementos B
const inputCidadeB = document.querySelector('.unidadeB__cidade');
const inputCodB = document.querySelector('.unidadeB__codigo');
const inputAnoB = document.querySelector('.unidadeB__ano');
const inputQtdeB = document.querySelector('.unidadeB__cursos');

// Resultados (aba "Aguardando criação...")
const resultadoA = document.querySelector('.unidadeA__mensagem');
const resultadoB = document.querySelector('.unidadeB__mensagem');

// Os botões
const btnA = document.querySelector('.unidadeA__instanciar');
const btnB = document.querySelector('.unidadeB__instanciar');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
const cidade = inputCidadeA.value
const codigo = inputCodA.value
const ano = inputAnoA.value
const qtde = inputQtdeA.value

// Lógica: Aqui eu quero verificar todos os inputs, independente se é A ou B, pq aqui eu vou mostrar a msg
function obterInfos(cidade, codigo, ano, qtde){
    if (cidade === '' || codigo === '' || ano === '' || qtde === '') {
    return false
  } else {
    return true
  }
};


/* ===== INSTANCIAR ESCOLA A ===== */
const instanciarA = () => {
  const inputCidadeA = document.querySelector('.unidadeA__cidade').value;
  const inputCodA = document.querySelector('.unidadeA__codigo').value;
  const inputAnoA = document.querySelector('.unidadeA__ano').value;
  const inputQtdeA = document.querySelector('.unidadeA__cursos').value;
  if (obterInfos) {
    resultadoA.textContent = `Por favor, preencha os campos.`;
  } else {
    resultadoA.textContent = `Escola registrada. Status atual: FECHADA`
  }

  btnA.addEventListener('click', () => {
    const escolaA = new Senai(codigo, cidade, anoConstrucao, qtdeCursos);
  })
};


/* ===== INSTANCIAR ESCOLA B ===== */
const instanciarB = () => {
  const inputCidadeB = document.querySelector('.unidadeB__cidade').value;
  const inputCodB = document.querySelector('.unidadeB__codigo').value;
  const inputAnoB = document.querySelector('.unidadeB__ano').value;
  const inputQtdeB = document.querySelector('.unidadeB__cursos').value;
  if (obterInfos) {
    resultadoB.textContent = `Por favor, preencha os campos.`;
  } else {
    resultadoB.textContent = `Escola registrada. Status atual: FECHADA`
  }



  btnA.addEventListener('click', () => {
    const escolaB = new Senai(codigo, cidade, anoConstrucao, qtdeCursos);
  })
};
/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */
const compararEscolas = (esc1, esc2) => {
    console.log(`Comparação das unidades`)
    if (esc1.qtdeCursos > esc2.qtdeCursos){
        console.log(`Resultado: O SENAI ${esc1.cidade} possui ${esc1.qtdeCursos}, ou seja, possui mais cursos do que o SENAI ${esc2.cidade}`);
    } else if (esc2.qtdeCursos > esc1.qtdeCursos){
        console.log(`Resultado: O SENAI ${esc2.cidade} possui ${esc2.qtdeCursos}, ou seja, possui mais cursos do que o SENAI ${esc1.cidade}`);
    } else {
        console.log(`Resultado: As duas unidades possuem a mesma quantidade de cursos!`)
    }
}


/* ===== NOVA CONSULTA ===== */
function limparCampos(){

}

