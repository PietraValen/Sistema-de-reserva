// Importar a classe resLogin
const resLogin = require('./index');

// Definir o teste unitário para a classe resLogin
describe('Teste da classe resLogin', () => {
    test('Validação de login com email e senha corretos', () => {
        // Criar uma instância da classe Login com email e senha corretos
        const userLogin = new resLogin("admin@admin.com.br", "admin1234");
        // Verificar se a validação retorna true
        expect(userLogin.validate()).toBe(true);
    });

    test('Validação de login com email ou senha incorretos', () => {
        // Criar uma instância da classe Login com email ou senha incorretos
        const userLogin = new resLogin("admin@admin.com.br", "senhaerrada");
        // Verificar se a validação retorna false
        expect(userLogin.validate()).toBe(false);
    });
});

module.exports = { resLogin }
