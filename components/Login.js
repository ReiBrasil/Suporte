document.getElementById('showLogin').onclick = function() {
    document.getElementById('loginForm').style.display = 'flex';
    document.getElementById('cadastroForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('showCadastro').classList.remove('active');
};

// Mostrar a tela de cadastro
document.getElementById('showCadastro').onclick = function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('cadastroForm').style.display = 'flex';
    this.classList.add('active');
    document.getElementById('showLogin').classList.remove('active');
};

// Validação e redirecionamento após login
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    console.log("Login Tentado com:", user, password); // Depuração

    // Simulação de validação (normalmente seria uma requisição ao backend)
    if (user === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Simulação de login bem-sucedido
        console.log("Login bem-sucedido! Redirecionando..."); // Depuração
        window.location.href = "http://127.0.0.1:5501/Inicial/Biosphera%20Inicial.html"; // Use uma URL relativa ou absoluta
    }
};

// Validação do formulário de cadastro
document.getElementById('cadastroForm').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const newUser = document.getElementById('newUser').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simulação de validação do cadastro
    if (newUser === "" || newPassword === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem.");
    } else {
        alert("Cadastro realizado com sucesso!");
        // Após o cadastro, reseta o formulário e mostra a tela de login novamente
        document.getElementById('cadastroForm').reset();
        document.getElementById('cadastroForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'flex';
    }
};