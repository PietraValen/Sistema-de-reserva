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


// Navegação entre telas

class Tela {
  constructor(nome) {
    this.nome = nome;
  }
  
  exibir() {
    // Implemente a lógica para exibir a tela
    console.log(`Exibindo ${this.nome}`);
  }
}

// Defina a classe de navegação
class Navegador {
  constructor(telas) {
    this.telas = telas;
    this.telaAtual = telas[0];
  }
  
  exibirTelaAtual() {
    this.telaAtual.exibir();
  }
  
  navegarPara(nomeTela) {
    const novaTela = this.telas.find(tela => tela.nome === nomeTela);
    if (novaTela) {
      this.telaAtual = novaTela;
      this.exibirTelaAtual();
    } else {
      console.error(`Tela ${nomeTela} não encontrada`);
    }
  }
}

// Crie as telas disponíveis
const telaInicial = new Tela("Tela Inicial");
const tela1 = new Tela("Tela 1");
const tela2 = new Tela("Tela 2");
const telaFinal = new Tela("Tela Final");

// Crie a lista de telas
const telas = [telaInicial, tela1, tela2, telaFinal];

// Crie o navegador
const navegador = new Navegador(telas);

// Exiba a tela atual
navegador.exibirTelaAtual();

// Espere pela entrada do usuário
document.addEventListener("click", () => {
  // Determine qual ação deve ser executada
  const acao = event.target.dataset.acao;
  if (acao === "proximo") {
    navegador.navegarPara(telas[telas.indexOf(navegador.telaAtual) + 1].nome);
  } else if (acao === "voltar") {
    navegador.navegarPara(telas[telas.indexOf(navegador.telaAtual) - 1].nome);
  } else if (acao === "sair") {
    // Encerre o aplicativo
    console.log("Saindo...");
  }
});