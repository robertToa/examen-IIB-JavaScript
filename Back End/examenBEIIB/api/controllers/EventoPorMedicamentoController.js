/**
 * EventoPorMedicamentoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  medicamentos: async (req, res) => {
    const parametros = req.allParams();
    var evenMedicamentos = await EventoPorMedicamento.find(
      { idEvento: parametros.id }
    ).populate('idMedicamento');
    if(evenMedicamentos){
      return res.ok(evenMedicamentos);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  }

};

