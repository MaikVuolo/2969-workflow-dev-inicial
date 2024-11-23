/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
// import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = id || null;
    this.nome = nome;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async pegarEventos() {
    return {
      id: 1,
      nome: 'Lançamento',
      data: '2024-01-01',
      autor_id: 1,
      created_at: '2024-01-01 07:00:00',
      updated_at: '2024-01-01 07:00:00',
    };
  }
}

export default Evento;
