// Import the class and Jest framework
const { HomePage } = require('./home');
const { describe, test, expect } = require('@jest/globals');

// Define the test suite
describe('HomePage', () => {
    // Define the test case for the showPage method
    test('showPage should create the expected HTML structure', () => {
        // Arrange
        const expectedHtml = `
      <header>
        <img src="./images/logo-removebg-preview.png">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>
      <section class="hero">
        <h2>Bem-vindo ao nosso sistema de reserva de equipamentos de audiovisual</h2>
        <p>Oferecemos as melhores soluções de reserva os equipamentos que precisa para suas aulas</p>
        <button>Conheça nossos produtos</button>
      </section>
      <section class="features">
        <h2>Recursos do sistema</h2>
        <div class="feature">
          <img src="icon1.png" alt="Recurso 1">
          <h3>Recurso 1</h3>
          <p>Descrição do recurso 1</p>
        </div>
        <div class="feature">
          <img src="icon2.png" alt="Recurso 2">
          <h3>Recurso 2</h3>
          <p>Descrição do recurso 2</p>
        </div>
        <div class="feature">
          <img src="icon3.png" alt="Recurso 3">
          <h3>Recurso 3</h3>
          <p>Descrição do recurso 3</p>
        </div>
      </section>
      <section class="cta">
        <h2>Entre  contato conosco</h2>
        <p>Para obter mais informações sobre como funciona a reserva dos equipamentos, entre em contato conosco agora!</p>
        <button></button>
      </section>
      <footer>Todos os direitos reservados @Sistema de Reserva - Colegio Vencer</footer>
    `;
        const homePage = new HomePage();

        // Act
        const pageContainer = document.createElement('div');
        pageContainer.innerHTML = homePage.showPage();
        const actualHtml = pageContainer.innerHTML;

        // Assert
        expect(actualHtml).toBe(expectedHtml);
    });
});

module.exports = { HomePage }