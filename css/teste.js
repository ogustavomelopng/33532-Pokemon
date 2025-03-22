// Seleciona todas as imagens dos Pokémon
const pokemonImages = document.querySelectorAll(".pokemon-img");

// Adiciona evento de hover para trocar entre a imagem normal e shiny
pokemonImages.forEach(img => {
    const originalSrc = img.src; // Guarda a imagem normal
    const shinySrc = img.getAttribute("data-shiny"); // Pega a imagem shiny

    img.addEventListener("mouseenter", () => {
        img.src = shinySrc; // Troca para a shiny ao passar o mouse
    });

    img.addEventListener("mouseleave", () => {
        img.src = originalSrc; // Volta para a normal ao tirar o mouse
    });
});
