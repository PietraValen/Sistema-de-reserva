// Classe para representar a page Home

class HomePage {
    constructor() {
        this.logo = "./images/logo-removebg-preview.png";
        this.navItems = ["Home", "Produtos", "Contato"];
        this.heroTitle = "Bem-vindo ao nosso sistema de reserva de equipamentos de audiovisual";
        this.heroSubtitle = "Oferecemos as melhores soluções de reserva os equipamentos que precisa para suas aulas";
        this.features = [
            {
                icon: "icon1.png",
                title: "Recurso 1",
                description: "Descrição do recurso 1"
            },
            {
                icon: "icon2.png",
                title: "Recurso 2",
                description: "Descrição do recurso 2"
            },
            {
                icon: "icon3.png",
                title: "Recurso 3",
                description: "Descrição do recurso 3"
            }
        ];
        this.ctaTitle = "Entre  contato conosco";
        this.ctaSubtitle = "Para obter mais informações sobre como funciona a reserva dos equipamentos, entre em contato conosco agora!";
        this.footerText = "Todos os direitos reservados @Sistema de Reserva - Colegio Vencer"
    }
}

// Método  para exibir a page Home

showPage()
{
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.setAttribute("src", this.logo);
    header.appendChild(logo);
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    for (const item of this.navItems);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = item;
    li.appendChild(a);
    ul.appendChild(li);
}
nav.appendChild(ul);
header.appendChild(nav);

const hero = document.createElement("section");
hero.classList.add("hero");
const heroTitle = document.createElement("h2");
heroTitle.textContent = this.heroTitle;
hero.appendChild(heroTitle);
const heroSubtitle = document.createElement("p");
heroSubtitle.textContent = this.heroSubtitle;
hero.appendChild(heroSubtitle);
const heroButton = document.createElement("button");
heroButton.textContent = "Conheça nossos produtos";
hero.appendChild(heroButton);

const features = document.createElement("section");
features.classList.add("features");
const featuresTitle = document.createElement("h2");
featuresTitle.textContent = "Recursos do sistema";
features.appendChild(featuresTitle);
for (const feature of this.features) {
    const featureDiv = document.createElement("div");
    featureDiv.classList.add("feature");
    const featureIcon = document.createElement("img");
    featureIcon.setAttribute("src", feature.icon);
    featureIcon.setAttribute("alt", feature.title);
    featureDiv.appendChild(featureIcon);
    const featureTitle = document.createElement("h3");
    featureTitle.textContent = feature.title;
    featureDiv.appendChild(featureTitle);
    const featureDescription = document.createElement("p");
    featureDescription.textContent = feature.description;
    featureDiv.appendChild(featureDescription);
    features.appendChild(featureDiv);
}

const cta = document.createElement("section");
cta.classList.add("cta");
const ctaTitle = document.createElement("h2");
ctaTitle.textContent = this.ctaTitle;
cta.appendChild(ctaTitle);
const ctaSubtitle = document.createElement("p");
ctaSubtitle.textContent = this.ctaSubtitle;
cta.appendChild(ctaSubtitle);
const ctaButton = document.createElement("button");