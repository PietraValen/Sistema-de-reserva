// Definindo a classe Cadastro
class Cadastro {
    constructor() {
        // Selecionando os elementos HTML
        this.nome = document.getElementById('name-register');
        this.sobrenome = document.getElementById('name-second');
        this.email = document.getElementById('email');
        this.funcao = document.getElementById('funcao');
        this.senha = document.getElementById('password-first');
        this.confirmarSenha = document.getElementById('password-second');
        this.botaoEntrar = document.querySelector('button[href="./index.html"]');
        this.botaoCriarConta = document.querySelector('button:not([href])');

        // Adicionando eventos aos botões
        this.botaoEntrar.addEventListener('click', this.entrar.bind(this));
        this.botaoCriarConta.addEventListener('click', this.criarConta.bind(this));
    }

    // Método para validar os campos do formulário
    validarCampos() {
        // Implemente a validação dos campos aqui

        return true; // Retorna verdadeiro caso a validação seja bem sucedida
    }

    // Método para criar uma nova conta
    criarConta() {
        if (this.validarCampos()) {
            // Implemente aqui a lógica para criar uma nova conta
        }
    }

    // Método para entrar na conta
    entrar() {
        if (this.validarCampos()) {
            // Implemente aqui a lógica para entrar na conta
        }
    }
}

// Instanciando a classe Cadastro
const cadastro = new Cadastro();
