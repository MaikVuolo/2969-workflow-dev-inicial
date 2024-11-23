/* eslint-disable linebreak-style */
import {
  describe, expect, it,
} from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando o modelo Evento', () => {
  const objetoEvento = {
    nome: 'Lançamento',
    data: '2024-01-01',
    autor_id: 1,
    created_at: '2024-01-01 07:00:00',
    updated_at: '2024-01-01 07:00:00',
  };

  it('Deve instanciar um novo evento', () => {
    const evento = new Evento(objetoEvento);

    expect(evento).toEqual(expect.objectContaining(objetoEvento));
  });
});
