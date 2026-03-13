

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
const inputCidade = document.querySelector('.unidade__input unidadeA__cidade');
const inputCod = document.querySelector('.unidade__input unidadeA__codigo');
const inputAno = document.querySelector('.unidade__input unidadeA__ano');
const inputQtde = document.querySelector('.unidade__input unidadeA__cursos');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */
function obterInfos(){
  const cid = 
  const cod = 
  const anoCons =
  const qtCursos = 

  if (isNaN(cid) || isNaN(cod) || isNaN(anoCons) || isNaN(qtCursos)) {
    mostrarResultado('Por favor, preencha os campos.');
    return
  } else {
    mostrarResultado(`Escola registrada. Status atual: FECHADA`)
  }
}


/* ===== INSTANCIAR ESCOLA A ===== */


/* ===== INSTANCIAR ESCOLA B ===== */


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


