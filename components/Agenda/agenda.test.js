const { Agenda, Reserva } = require('./agenda');

describe('Agenda', () => {
  let agenda;

  beforeEach(() => {
    agenda = new Agenda();
  });

  test('adicionarReserva adiciona uma reserva à lista de reservas', () => {
    const reserva = new Reserva('2023-04-17 10:00', 'João', '123456789');
    agenda.adicionarReserva(reserva);
    expect(agenda.obterReservas()).toContain(reserva);
  });

  test('removerReserva remove uma reserva da lista de reservas', () => {
    const reserva = new Reserva('2023-04-17 10:00', 'João', '123456789');
    agenda.adicionarReserva(reserva);
    agenda.removerReserva(reserva);
    expect(agenda.obterReservas()).not.toContain(reserva);
  });

  test('horarioDisponivel retorna true se o horário estiver disponível', () => {
    const reserva = new Reserva('2023-04-17 10:00', 'João', '123456789');
    agenda.adicionarReserva(reserva);
    const horarioDisponivel = agenda.horarioDisponivel('2023-04-17 11:00');
    expect(horarioDisponivel).toBe(true);
  });

  test('horarioDisponivel retorna false se o horário já estiver reservado', () => {
    const reserva = new Reserva('2023-04-17 10:00', 'João', '123456789');
    agenda.adicionarReserva(reserva);
    const horarioDisponivel = agenda.horarioDisponivel('2023-04-17 10:00');
    expect(horarioDisponivel).toBe(false);
  });
});
