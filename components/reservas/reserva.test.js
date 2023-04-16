const { resEquipamento } = require('./reserva')
describe('Equipamento', () => {
    test('deve criar um equipamento com nome, tipo e disponibilidade', () => {
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        expect(equipamento.nome).toBe('Projetor');
        expect(equipamento.tipo).toBe('eletrônico');
        expect(equipamento.disponibilidade).toBe(true);
    });

    test('deve reservar o equipamento', () => {
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        equipamento.reservar();
        expect(equipamento.disponibilidade).toBe(false);
    });

    test('deve liberar o equipamento', () => {
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        equipamento.reservar();
        equipamento.liberar();
        expect(equipamento.disponibilidade).toBe(true);
    });
});

const { resEquipamento } = require('./reserva');
const { Sala } = require('./reserva');

describe('Sala', () => {
    test('deve criar uma sala com nome, capacidade e lista de equipamentos vazia', () => {
        const sala = new Sala('Sala A', 20);
        expect(sala.nome).toBe('Sala A');
        expect(sala.capacidade).toBe(20);
        expect(sala.equipamentos).toHaveLength(0);
    });

    test('deve adicionar um equipamento na sala', () => {
        const sala = new Sala('Sala A', 20);
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        sala.adicionarEquipamento(equipamento);
        expect(sala.equipamentos).toContain(equipamento);
    });

    test('deve remover um equipamento da sala', () => {
        const sala = new Sala('Sala A', 20);
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        sala.adicionarEquipamento(equipamento);
        sala.removerEquipamento(equipamento);
        expect(sala.equipamentos).not.toContain(equipamento);
    });

    test('não deve remover um equipamento inexistente da sala', () => {
        const sala = new Sala('Sala A', 20);
        const equipamento = new Equipamento('Projetor', 'eletrônico');
        sala.adicionarEquipamento(equipamento);
        sala.removerEquipamento(new Equipamento('TV', 'eletrônico'));
        expect(sala.equipamentos).toContain(equipamento);
    });
});

const { resEquipamento } = require('./reserva');
const { Sala } = require('./reserva');
const { Reserva } = require('./reserva');

describe('Reserva', () => {
    let sala;
    let equipamentos;
    let reserva;

    beforeEach(() => {
        const equipamento1 = new Equipamento('Projetor', 'Eletrônico');
        const equipamento2 = new Equipamento('Cadeiras', 'Móvel');

        sala = new Sala('Sala 01', 10);
        sala.adicionarEquipamento(equipamento1);
        sala.adicionarEquipamento(equipamento2);

        equipamentos = [equipamento1, equipamento2];

        reserva = new Reserva(sala, equipamentos, new Date('2023-05-01'), new Date('2023-05-02'));
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('verificarDisponibilidade', () => {
        it('deve retornar true se a sala e equipamentos estiverem disponíveis', () => {
            expect(reserva.verificarDisponibilidade()).toBe(true);
        });

        it('deve retornar false se a sala não estiver disponível', () => {
            sala.equipamentos.forEach((equipamento) => equipamento.reservar());

            expect(reserva.verificarDisponibilidade()).toBe(false);
        });

        it('deve retornar false se um equipamento não estiver disponível', () => {
            equipamentos[0].reservar();

            expect(reserva.verificarDisponibilidade()).toBe(false);
        });
    });

    describe('realizarReserva', () => {
        it('deve reservar a sala e equipamentos', () => {
            const reservarSalaSpy = jest.spyOn(sala.equipamentos, 'reservar');
            const reservarEquipamentosSpy = jest.spyOn(equipamentos[0], 'reservar');
            reserva.realizarReserva();

            expect(reservarSalaSpy).toHaveBeenCalledTimes(1);
            expect(reservarEquipamentosSpy).toHaveBeenCalledTimes(2);
        });
    });
});

module.exports = { resEquipamento, Sala, Reserva };