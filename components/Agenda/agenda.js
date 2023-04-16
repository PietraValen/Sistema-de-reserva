// Classe para representar a reserva
class Reserva {
    constructor(horario, nome, telefone) {
        this.horario = horario;
        this.nome = nome;
        this.telefone = telefone;
    }
}

// Classe para representar a agenda de reservas
class Agenda {
    constructor() {
        this.reservas = [];
    }

    // Método para adicionar uma reserva à agenda
    adicionarReserva(reserva) {
        this.reservas.push(reserva);
    }

    // Método para remover uma reserva da agenda
    removerReserva(reserva) {
        const index = this.reservas.indexOf(reserva);
        if (index !== -1) {
            this.reservas.splice(index, 1);
        }
    }

    // Método para verificar se um horário está disponível
    horarioDisponivel(horario) {
        for (const reserva of this.reservas) {
            if (reserva.horario === horario) {
                return false;
            }
        }
        return true;
    }

    // Método para obter todas as reservas
    obterReservas() {
        return this.reservas;
    }
}

// Exemplo de uso da agenda
const agenda = new Agenda();

// Adicionar algumas reservas
const reserva1 = new Reserva('2023-04-17 10:00', 'João', '123456789');
agenda.adicionarReserva(reserva1);

const reserva2 = new Reserva('2023-04-17 11:00', 'Maria', '987654321');
agenda.adicionarReserva(reserva2);

// Verificar se um horário está disponível
const horarioDisponivel = agenda.horarioDisponivel('2023-04-17 10:00');
console.log(`Horário disponível: ${horarioDisponivel}`);

// Obter todas as reservas
const reservas = agenda.obterReservas();
console.log(`Reservas: ${JSON.stringify(reservas)}`);

// Remover uma reserva
agenda.removerReserva(reserva2);
console.log(`Reservas após remover a reserva 2: ${JSON.stringify(agenda.obterReservas())}`);


const dias = document.querySelector("#dia");
const meses = document.querySelector("#mes");
const horarios = document.querySelector("#horario");

function carregarDias() {
    dias.innerHTML = "";
    const mes = meses.value;
    const diasNoMes = new Date(2023, mes, 0).getDate();
    for (let i = 1; i <= diasNoMes; i++) {
        const option = document.createElement("option");
        option.value = `${mes}/${i}`;
        option.text = `${i}`;
        dias.appendChild(option);
    }
}

function reservar() {
    const horario = horarios.value;
    const dia = dias.value;
    alert(`Reservado: ${dia} às ${horario}`);
}

meses.addEventListener("change", carregarDias);

carregarDias();