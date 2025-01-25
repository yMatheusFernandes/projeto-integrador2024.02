
// Seleciona os elementos de nome e imagem das plantas
const plantNames = document.querySelectorAll('.plant-name');
const plantImages = document.querySelectorAll('.plant-image');

// Seleciona os elementos do popup
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const closeBtn = document.querySelector('.close-btn');

// Função para abrir o popup
function openPopup(element) {
    const plantName = element.textContent || element.alt; // Usa o texto do nome ou o alt da imagem
    const plantDescription = element.getAttribute('data-description'); // Pega a descrição

    // Atualiza o conteúdo do popup
    popupTitle.textContent = plantName;
    popupDescription.textContent = plantDescription;

    // Mostra o popup
    popup.style.display = 'block';
}

// Adiciona o evento de clique no nome da planta
plantNames.forEach((name) => {
    name.addEventListener('click', () => openPopup(name));
});

// Adiciona o evento de clique na imagem da planta
plantImages.forEach((image) => {
    image.addEventListener('click', () => openPopup(image));
});

// Fecha o popup ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Fecha o popup ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

