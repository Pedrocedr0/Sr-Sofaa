// Aguarda o carregamento completo do conteúdo do documento
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o elemento com a classe 'products' e o armazena na variável 'productsSection'
    const productsSection = document.querySelector('.products');

    // Cria uma instância de IntersectionObserver, que observa mudanças na visibilidade de elementos
    const observer = new IntersectionObserver(function(entries) {
        // Itera sobre cada entrada (entry) fornecida pelo IntersectionObserver
        entries.forEach(entry => {
            // Verifica se o elemento está visível na viewport
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' ao elemento visível
                entry.target.classList.add('visible');
                // Para de observar este elemento, pois já está visível
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); 

    // Observa o elemento com a classe 'products' definido anteriormente
    observer.observe(productsSection);
});
