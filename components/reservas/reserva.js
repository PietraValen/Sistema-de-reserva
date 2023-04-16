class resEquipamento {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
        this.disponibilidade = true;
    }

    reservar() {
        this.disponibilidade = false;
    }

    liberar() {
        this.disponibilidade = true;
    }
}

class Sala {
    constructor(nome, capacidade) {
        this.nome = nome;
        this.capacidade = capacidade;
        this.equipamentos = [];
    }

    adicionarEquipamento(equipamento) {
        this.equipamentos.push(equipamento);
    }

    removerEquipamento(equipamento) {
        const index = this.equipamentos.indexOf(equipamento);
        if (index !== -1) {
            this.equipamentos.splice(index, 1);
        }
    }
}

class Reserva {
    constructor(sala, equipamentos, dataInicio, dataFim) {
        this.sala = sala;
        this.equipamentos = equipamentos;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    verificarDisponibilidade() {
        // Verifica se a sala está disponível
        if (!this.sala.equipamentos.disponibilidade) {
            return false;
        }
        // Verifica se todos os equipamentos estão disponíveis
        for (const equipamento of this.equipamentos) {
            if (!equipamento.disponibilidade) {
                return false;
            }
        }
        return true;
    }

    realizarReserva() {
        // Realiza a reserva da sala
        this.sala.equipamentos.reservar();
        // Realiza a reserva dos equipamentos
        for (const equipamento of this.equipamentos) {
            equipamento.reservar();
        }
    }
}

const { realizarReserva } = (realizarReserva) => {
    return (realizarReserva)
};