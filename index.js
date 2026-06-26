const perfil = {
  nome: "Giovanna",
  idade: 22,
  experiencia: 4,
  sobre: "Desenvolvedora Full Stack"
};

function renderizarPerfil() {

  document.getElementById("nome").textContent =
    perfil.nome;

  document.getElementById("idade").textContent =
    `Idade: ${perfil.idade} anos`;

  document.getElementById("sobre").textContent =
    perfil.sobre;

  document.getElementById("experiencia").textContent =
    `${perfil.experiencia} anos de experiência`;
}

renderizarPerfil();