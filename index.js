import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cadastros from "./mock.js";

const criarDB = async () => {
  try {
    const db = await open({
      filename: "./db/database.db",
      driver: sqlite3.Database,
    });

    await db.exec(`
      CREATE TABLE municipes (
          id_municipe INTEGER PRIMARY KEY AUTOINCREMENT,
          nome TEXT,
          numero_inscricao TEXT,
          nascimento TEXT,
          cpf TEXT,
          rg TEXT,
          endereco TEXT,
          telefone TEXT,
          estado_civil TEXT,
          tem_filho TEXT,
          pcds TEXT,
          quantidade_filhos INTEGER,
          reside_mais_um_ano TEXT,
          is_pcd TEXT,
          sistema_carcerario TEXT,
          etnia TEXT,
          dependentes TEXT,
          desempregado TEXT,
          tempo_desempregado INTEGER,
          bicos TEXT,
          cadUnico TEXT,
          mais_alguem_da_familia_trabalha TEXT,
          recebe_beneficio_social TEXT,
          beneficio_social TEXT,
          valor_beneficio_social INTEGER,
          recebe_beneficio_eventual TEXT,
          beneficio_eventual TEXT,
          recebe_auxilio_terceiros TEXT,
          valor_auxilio_terceiros INTEGER,
          quanto_ganha INTEGER,
          valor_total_familia INTEGER,
          renda_per_capta INTEGER,
          experiencias_profissionais TEXT,
          conhece_programa TEXT,
          como_conhece_programa TEXT,
          questao_assiduidade TEXT,
          questao_pontualidade TEXT,
          questao_responsabilidade TEXT,
          questao_interacao TEXT,
          score_final INTEGER
      );
  
      CREATE TABLE evolucoes (
          id_evolucoes INTEGER PRIMARY KEY AUTOINCREMENT,
          id_municipe,
          titulo TEXT,
          funcionario TEXT,
          data TEXT,
          evolucao TEXT,
          FOREIGN KEY (id_municipe) REFERENCES municipes(id_municipe)
      );
          `);
    console.log(db);
  } catch (err) {
    console.error(`Ocorreu um erro: ${err}`);
  }
};

// ------------------

// INSERIR DADOS

// ------------------

const inserirDados = async () => {
  try {
    const db = await open({
      filename: "./db/database.db",
      driver: sqlite3.Database,
    });

    await db.exec(`
  INSERT INTO municipes (
      nome, 
      numero_inscricao, 
      nascimento, 
      cpf, 
      rg, 
      endereco, 
      telefone, 
      estado_civil, 
      tem_filho, 
      pcds, 
      quantidade_filhos, 
      reside_mais_um_ano, 
      is_pcd, 
      sistema_carcerario, 
      etnia, 
      dependentes, 
      desempregado, 
      tempo_desempregado, 
      bicos, 
      cadUnico, 
      mais_alguem_da_familia_trabalha, 
      recebe_beneficio_social, 
      beneficio_social, 
      valor_beneficio_social, 
      recebe_beneficio_eventual, 
      beneficio_eventual, 
      recebe_auxilio_terceiros, 
      valor_auxilio_terceiros, 
      quanto_ganha, 
      valor_total_familia, 
      renda_per_capta, 
      experiencias_profissionais, 
      conhece_programa, 
      como_conhece_programa, 
      questao_assiduidade, 
      questao_pontualidade, 
      questao_responsabilidade, 
      questao_interacao, 
      score_final
  )
  VALUES (
    'João', 
    '123456789', 
    '1990-01-01', 
    '123.456.789-00', 
    '1234567', 
    'Rua A, 123', 
    '(12) 3456-7890', 
    'Solteiro', 
    'Sim', 
    'Não', 
    2, 
    'Sim', 
    'Não', 
    'Não', 
    'Branca', 
    'Nenhum', 
    'Sim', 
    6, 
    'Vendedor', 
    'Sim', 
    'Sim', 
    'Sim', 
    'Auxílio Alimentação', 
    300, 
    'Não', 
    '', 
    'Sim', 
    2000, 
    3000, 
    1500, 
    50, 
    'Experiência em vendas', 
    'Sim', 
    'Internet', 
    'Bom', 
    'Bom', 
    'Bom', 
    'Bom', 
    85
  ),
  (
      'Maria', 
      '987654321', 
      '1995-05-15', 
      '987.654.321-00', 
      '7654321', 
      'Rua B, 456', 
      '(34) 5678-9012', 
      'Casada', 
      'Não', 
      'Sim', 
      1, 
      'Não', 
      'Sim', 
      'Não', 
      'Parda', 
      '1 dependente', 
      'Não', 
      0, 
      '', 
      'Não', 
      'Não', 
      'Não', 
      '', 
      0, 
      'Sim', 
      'Bolsa Família', 
      'Não', 
      0, 
      1000, 
      1000, 
      100, 
      'Experiência em atendimento ao cliente', 
      'Sim', 
      'Amigo', 
      'Bom', 
      'Bom', 
      'Bom', 
      'Bom', 
      90
  );
`);

    // Inserindo dados de exemplo na tabela evolucoes
    await db.exec(`
  INSERT INTO evolucoes (
      titulo, 
      funcionario, 
      data, 
      evolucao,
      id_municipe
  )
  VALUES (
      'Evolução 1', 
      'Funcionário 1', 
      '2024-02-22', 
      'Texto da evolução 1',
      1
  ),
  (
      'Evolução 2', 
      'Funcionário 2', 
      '2024-02-23', 
      'Texto da evolução 2',
      1
  ),
  (
    'Evolução Segundo Municipe', 
    'Funcionário 2', 
    '2024-02-23', 
    'Texto da evolução 2',
    2
);

`);
  } catch (err) {
    console.error(`Ocorreu um erro: ${err}`);
  }
};

// CONSULTAS -----------------------------

const consultarDBMunicipes = async () => {
  try {
    const db = await open({
      filename: "./db/database.db",
      driver: sqlite3.Database,
    });

    const result = await db.all("Select * from municipes");
    //console.log(`Tabela dos municipes: `, result);
    return result;
  } catch (err) {
    console.error(`Ocorreu um erro: ${err}`);
  }
};

const consultarDBEvolucoes = async () => {
  try {
    const db = await open({
      filename: "./db/database.db",
      driver: sqlite3.Database,
    });

    const result = await db.all("Select * from evolucoes");
   // console.log(`Tabela das evolucoes: `, result);
    return result;
  } catch (err) {
    console.error(`Ocorreu um erro: ${err}`);
  }
};


async function main() {
    try {
      const cadastros_DB = await consultarDBMunicipes();
      const evolucoes = await consultarDBEvolucoes();
      if (cadastros_DB) {
        const cadastros_finais = cadastros.concat(cadastros_DB);
        console.log("CADASTROS FINAIS \n", cadastros_finais);
      } else {
        console.log("Falha ao obter os dados.");
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
    }
  }
  
  main();
