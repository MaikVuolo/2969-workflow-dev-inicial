/* eslint-disable linebreak-style */
import Evento from '../models/evento.js';

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const eventos = await Evento.pegarEventos();
      res.status(200).json(eventos);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
}

export default EventosController;
