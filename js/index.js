//Definir a classe login 

class resLogin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // Método para validar o email do professor-direitor e a senha

    validate() {
        if (this.email === "admin@admin.com.br" && this.password === "admin1234") {
            return true;
        } else {
            return false
        }
    }
}

// Criar uma instância da classe Login

const userLogin = new resLogin("admin@admin.com.br", "admin1234");

userLogin.validate() ? console.log("Login bem-sucedido!") : console.log("Email ou senha incorretos.Por favor tente novamente!");