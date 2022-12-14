# ORM com NodeJS: API com Sequelize e MySQL

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><img src="/logos/JavaScript.png" alt="Logo JavaScript" width="80" height="80"></a> <img src="/logos/node-js.png" alt="Logo NodeJS" width="80" height="80"> <a href="https://sequelize.org/docs/v6/" target="_blank"><img src="/logos/Sequelize.png" alt="Logo Sequelize" width="120" height="80"></a> <img src="/logos/Express-circulo.png" alt="Logo do Express" width="80" height="80"> <a href="https://www.mysql.com/" target="_blank"><img src="/logos/mysql.png" alt="Logo MySQL" width="80" height="80"></a> <img src="/logos/VS Code.png" alt="Logo VS Code" width="80" height="80"> <a href="https://www.npmjs.com/"><img src="/logos/npm.png" alt="Logo NPM" width="100" height="60"></a> <img src="/logos/Postman.png" alt="Logo Postman" width="80" height="80">

*****

**ORM** *(Object-relational mapping)* **Mapeamento objeto-relacional**, é uma técnica de desenvolvimento utilizada para reduzir a impedância da **[programação orientada a objeto](https://pt.wikipedia.org/wiki/Orienta%C3%A7%C3%A3o_a_objetos)** utilizando bancos de dados relacionais. 

## Links úteis:
+ [Como utilizar o NVM para gerenciar as versões do Node.js instaladas no computador](https://www.alura.com.br/artigos/descomplicando-o-trabalho-com-node)
+ [Importação e exportação de módulos com JavaScript](https://www.alura.com.br/artigos/guia-importacao-exportacao-modulos-javascript)
+ [NodeJS](https://nodejs.org/en/docs/)
+ [NPM](https://www.npmjs.com/)
+ [Documentação do Sequelize](https://sequelize.org/docs/v6/)
+ [Database MySQL](https://dev.mysql.com/doc/)
+ [Postman](https://www.postman.com/)

*****

Este treinamento faz parte da **Formação em Node.js com Express - Criando APIs REST em Node com Express**. Os tópicos abordados são:
1. Estruturando o projeto
2. Models, migrations e seeders
3. Controllers e routes
4. CRUD com Sequelize
5. Relações e associações
6. Controladores
7. Soft delete (exclusão suave)
8. Escopo de models e validations
9. Escopo de associações e operadores
10. Transações
11. Refatoração com serviços

*****

## Introduction
The Node.js Training with Express, enabled me to build with JavaScript, backends for scalable websites. Developing APIs using the REST standard, using Express, one of the most popular web frameworks on the Node.js platform, using databases efficiently and all with the security of REST APIs.
The training brought me understanding of the main points related to the development of REST APIs and provided me with knowledge to build backend systems using Node.js and Express.

## 1. Estruturando o projeto
**Neste tópico, aprendi:**
* Criar um novo projeto do zero com Sequelize;
* Fazer configurações necessárias no projeto;
* A subir um servidor local básico com Express e Nodemon;
* Fazer a instalação do MySQL e como acessar via terminal; e
* Criar um novo banco de dados e conectá-lo à aplicação.

~~~Java Script
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res) => res
   .status(200)
   .send({ mensagem: 'boas-vindas à API'
}))
app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app
~~~

## 2. Models, migrations e seeders
**Neste tópico aprendi:**
* Criar modelos e arquivos de migração via terminal;
* O que são e para que servem migrações com ORMs;
* Executar migrações para criação de tabelas no banco; e
* Popular tabelas automaticamente através de arquivos seed.

## 3. Controllers e routes
**Neste tópico aprendi:**
* Como funciona o modelo MVC;
* O que é e para que serve a camada de controle;
* A criar um controlador;
* Como usar métodos do Sequelize para consultar o banco;
* A separar a responsabilidade das rotas para termos uma aplicação organizada;
* Como criar uma rota para o modelo Pessoas; e
* A chamar um método do controlador Pessoas através da rota com o verbo HTTP GET.

~~~Java Script
const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
   .get('/pessoas', PessoaController.buscaTodasAsPessoas)
   .get('/pessoas/:id', PessoaController.buscaPessoaPorId)
   .post('/pessoas', PessoaController.criaPessoa)

module.exports = router
~~~

## 4. CRUD com Sequelize
**Neste tópico aprendi a:**
* Utilizar outros métodos do Sequelize para as operações de CRUD;
* Enviar dados através de parâmetros de requisição HTTP;
* Enviar dados através do corpo da requisição HTTP;
* Criar rotas para cada operação; e
* Associar as rotas a cada método do controlador Pessoas.

## 5. Relações e associações
**Neste tópico aprendi a:**
* Interpretar o diagrama de banco;
* Identificar os tipos de relação pedidos no projeto;
* Associar tabelas através de métodos do Sequelize;
* Referenciar tabelas associadas;
* Migrar tabelas associadas; e
* Popular tabelas associadas.

## 6. Controllers
**Neste tópico aprendi a:**
* Adicionar novos controladores;
* Trabalhar com mais de um modelo no mesmo controlador;
* Enviar dados via parâmetros e corpo das requisições;
* Utilizar estes dados para encontrar informações no banco; e
* Gerar estruturas de dados do tipo JSON com informações úteis ao usuário.

## 7. Soft delete (exclusão suave)
**Habilidades desenvolvidas neste tópico:**
* Atualizar a versão do Sequelize-cli;
* Adicionar a opção "Paranoid" para fazer a exclusão suave;
* Criar migrações para adicionar colunas às tabelas;
* Criar coluna deletedAt para utilizar o recurso de exclusão suave; e
* Restaurar registros deletados via exclusão suave, utilizando o .restore().

## 8. Escopo de models e validations
**Habilidades desenvolvidas neste tópico:**
* Definir um escopo de modelo padrão (defaultScope);
* Definir outros escopos adicionais, conforme necessidade do projeto;
* Utilizar um escopo adicional com o método .findAll();
* Validar dados de entrada utilizando validadores próprios do Sequelize; e
* Refinar e customizar validações de campos utilizando funções e JS puro.

~~~Java Script
Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        validaNome: function(nome) {
          if(nome.length <= 3) throw new Error('o nome deve ter mais de três caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { where: {} },
    }
  });
  ~~~

## 9. Escopo de associações e operadores
**Habilidades desenvolvidas neste tópico:**
+ Compreensão do que são escopos de associação;
+ Definir um novo escopo de associação;
+ Utilizar métodos próprios/mixins em tabelas associadas;
+ Adicionar um filtro de busca via parâmetros de query;
+ Utilizar operadores para fazer operações com dados;
+ Retornar resultados filtrados através de operadores;
+ Filtrar e enumerar registros com métodos "finders";
+ Ordenar os resultados com a opção "order";
+ Agrupar registros com "group"; e
+ Passar comandos do SQL dentro do Sequelize com Sequelize.literal().

~~~Java Script
static async buscaTurmasLotadas(req, res) {
      const alunosMaximoPorTurma = 2
      try {
         const turmasLotadas = await database.Matriculas
            .findAndCountAll({
               where: {
                  status: 'confirmado'
               },
               attributes: ['turma_id'],
               group: ['turma_id'],
               having: Sequelize.literal(`count(turma_id) >= ${alunosMaximoPorTurma}`)
            })
         return res.status(200).json(turmasLotadas.count)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
~~~

## 10. Transações
**Habilidades desenvolvidas neste tópico:**
- Criar métodos para atualizar mais de uma tabela;
- Adicionar transações (sequelize.transaction()) às operações de banco via Sequelize; e
- Interpretar avisos de versionamento e fazer correções.

## 11. Refatoração com serviços
**Habilidades desenvolvidas neste tópico**
+ Criar uma camada de serviços;
+ Transferir a interface com a database do controlador para o serviço;
+ Atualizar o código no controlador para acessar os serviços;
+ Criar serviços específicos que herdem métodos da classe principal;
+ Organizar os serviços criando um ponto de entrada (index.js);
+ Criar métodos específicos para um serviço/modelo;
+ Passar parâmetros de controladores para serviços;
+ Conectar serviços entre si; e
+ Refatorar a aplicação para separar controladores e serviços.