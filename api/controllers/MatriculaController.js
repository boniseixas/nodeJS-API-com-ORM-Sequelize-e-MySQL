const Sequelize = require('sequelize')
const { MatriculasServices } = require('../services')
const matriculasServices = new MatriculasServices()

class MatriculaController {
   static async buscaUmaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      try {
         const umaMatricula = await matriculasServices
            .buscaUmRegistro({id: matriculaId, estudante_id: estudanteId})
         return res.status(200).json(umaMatricula)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async criaMatricula(req, res) {
      const { estudanteId } = req.params
      const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
      try {
         const novaMatriculaCriada = await matriculasServices
            .criaRegistro(novaMatricula)
         return res.status(200).json(novaMatriculaCriada)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async atualizaMatricula(req, res) {
      const { estudanteId, matriculaId } = req.params
      const novasInfos = req.body
      try {
         await matriculasServices
            .atualizaRegistros(novasInfos, 
            { id: Number(matriculaId), estudante_id: Number(estudanteId) })
         return res.status(200).json({ mensagem: `id ${matriculaId} ataulizada` })
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async excluiMatricula(req, res) {
      const { matriculaId } = req.params
      try {
         await matriculasServices.excluiRegistro(Number(matriculaId))
         return res.status(200).json({ mensagem: `matricula ${matriculaId} deletada` })
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async restauraMatricula(req, res) {
      const { matriculaId } = req.params
      try {
         await matriculasServices
            .restauraRegistro(Number(matriculaId))
         return res.status(200).json({ mensagem: `matrícula ${id} restaurado` })
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   // static async buscaMatriculas(req, res) {
   //    const { estudanteId } = req.params
   //    try {
   //       const pessoa = await database.Pessoas.findOne({ where: { id: Number(estudanteId)} })
   //       const matriculas = await pessoa.getAulasMatriculadas()
   //       return res.status(200).json(matriculas)
   //    } catch (error) {
   //       return res.status(500).json(error.message)
   //    }
   // }

   static async buscaMatriculasPorTurma(req, res) {
      const { turmaId } = req.params
      try {
         const todasAsMatriculas = await matriculasServices
            .encontraEContaRegistros(
               { turma_id: Number(turmaId), status: 'confirmado'},
               { limit: 20, order: [['estudante_id', 'ASC']] })
         return res.status(200).json(todasAsMatriculas)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async buscaTurmasLotadas(req, res) {
      const alunosMaximoPorTurma = 2
      try {
         const turmasLotadas = await matriculasServices
            .encontraEContaRegistros({ status: 'confirmado' },
               {
                  attributes: ['turma_id'],
                  group: ['turma_id'],
                  having: Sequelize.literal(`count(turma_id) >= ${alunosMaximoPorTurma}`)
               })
         return res.status(200).json(turmasLotadas.count)
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async cancelaTodasAsMatriculasDeUmEstudante(req, res) {
      const {estudanteId} = req.params
      try {
         await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId))
         return res.status(200).json({message: `Mariculas do estudante ${estudanteId} canceladas`})
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
}

module.exports = MatriculaController
