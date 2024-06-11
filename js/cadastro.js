document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o elemento <form> no documento e armazena na variável 'form'
    const form = document.querySelector("form");
    
    // Adiciona um event listener para o evento 'submit' no formulário
    form.addEventListener("submit", function(event) {
        // Previne o comportamento padrão do formulário de ser enviado
        event.preventDefault();
        
        // Obtém os valores dos campos de entrada (nome, email, telefone, endereco) e remove os espaços em branco no início e no fim
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const endereco = document.getElementById("endereco").value.trim();
        
        // Verifica se algum campo está vazio
        if (!nome || !email || !telefone || !endereco) {
            // Se algum campo estiver vazio, exibe um alerta e encerra a execução da função
            alert("Todos os campos são obrigatórios.");
            return;
        }
        
        // Verifica se o formato do email é válido usando a função validateEmail
        if (!validateEmail(email)) {
            // Se o email não for válido, exibe um alerta e encerra a execução da função
            alert("Por favor, insira um e-mail válido.");
            return;
        }
        
        // Verifica se o formato do telefone é válido usando a função validateTelefone
        if (!validateTelefone(telefone)) {
            // Se o telefone não for válido, exibe um alerta e encerra a execução da função
            alert("Por favor, insira um telefone válido.");
            return;
        }
        
        // Se todos os campos estiverem preenchidos corretamente, envia o formulário
        form.submit();
    });

    // Função para validar o formato do email
    function validateEmail(email) {
        // Expressão regular que valida o formato do email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Retorna true se o email corresponder à expressão regular, caso contrário retorna false
        return re.test(email);
    }
    
    // Função para validar o formato do telefone
    function validateTelefone(telefone) {
        // Expressão regular que valida o formato do telefone
        const re = /^\d{10,11}$/; 
        // Retorna true se o telefone corresponder à expressão regular, caso contrário retorna false
        return re.test(telefone);
    }
});
