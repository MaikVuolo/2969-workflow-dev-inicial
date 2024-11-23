/* eslint-disable linebreak-style */
import Evento from '../models/evento.js';

class EventosController {
  static liberaAcessoEventos = () => process.env.EVENTO_FLAG === 'true';

  static listarEventos = async (req, res) => {
    if (this.liberaAcessoEventos()) {
      try {
        const eventos = await Evento.pegarEventos();
        res.status(200).json(eventos);
      } catch (err) {
        res.status(500).json(err.message);
      }
    } else {
      res.status(404).send();
    }
  };
}

export default EventosController;
