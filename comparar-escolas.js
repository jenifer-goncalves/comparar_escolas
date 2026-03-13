

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
const inputCidadeA = document.querySelector('.unidade__input unidadeA__cidade');
const inputCodA = document.querySelector('.unidade__input unidadeA__codigo');
const inputAnoA = document.querySelector('.unidade__input unidadeA__ano');
const inputQtdeA = document.querySelector('.unidade__input unidadeA__cursos');

const inputCidadeB = document.querySelector('.unidade__input unidadeB__cidade');
const inputCodB = document.querySelector('.unidade__input unidadeB__codigo');
const inputAnoB = document.querySelector('.unidade__input unidadeB__ano');
const inputQtdeB = document.querySelector('.unidade__input unidadeB__cursos');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

// Estudar isso no almoço urgente!
// Lógica: Aqui eu quero verificar todos os inputs, independente se é A ou B, pq aqui eu não vou adicionar
function obterInfos(){
  const inputs = document.querySelectorAll('.unidade__input');

  if (isNaN(cid) || isNaN(cod) || isNaN(anoCons) || isNaN(qtCursos)) {
    mostrarResultado('Por favor, preencha os campos.');
    return
  } else {
    mostrarResultado(`Escola registrada. Status atual: FECHADA`)
  }
}


/* ===== INSTANCIAR ESCOLA A ===== */
const escolaA = new Senai(codigo, cidade, anoConstrucao, qtdeCursos);



/* ===== INSTANCIAR ESCOLA B ===== */
const escolaB = new Senai(codigo, cidade, anoConstrucao, qtdeCursos);

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


