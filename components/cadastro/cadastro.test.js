// Importando a classe Cadastro
const Cadastro = require('./cadastro');

describe('Testes da classe Cadastro', () => {
    test('Teste de instanciamento', () => {
        const cadastro = new Cadastro();
        expect(cadastro).toBeInstanceOf(Cadastro);
    });

    test('Teste de validação de campos vazios', () => {
        const cadastro = new Cadastro();

        // Deixando os campos vazios
        cadastro.nome.value = '';
        cadastro.sobrenome.value = '';
        cadastro.email.value = '';
        cadastro.funcao.value = '';
        cadastro.senha.value = '';
        cadastro.confirmarSenha.value = '';

        expect(cadastro.validarCampos()).toBe(false);
    });

    test('Teste de validação de campos preenchidos', () => {
        const cadastro = new Cadastro();

        // Preenchendo os campos
        cadastro.nome.value = 'Fulano';
        cadastro.sobrenome.value = 'de Tal';
        cadastro.email.value = 'fulano@example.com';
        cadastro.funcao.value = 'Desenvolvedor';
        cadastro.senha.value = '123456';
        cadastro.confirmarSenha.value = '123456';

        expect(cadastro.validarCampos()).toBe(true);
    });
});
