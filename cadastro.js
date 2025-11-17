document.getElementById('form-cadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('e-mail').value.trim();
    const data = document.getElementById('data').value;
    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar').value;
    const msg = document.getElementById('mensagem');

    const partesData = data.split('-'); 
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    if (senha === confirmar) {
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('data', dataFormatada);
        localStorage.setItem('senha', senha);

        msg.style.color = 'green';
        msg.textContent = '✅ Senhas conferem! Redirecionando para login...';

        setTimeout(() => {
            window.location.href = 'Login_Tinder_Animais_Domestico.html';
        }, 1000);
    } else {
        msg.style.color = 'red';
        msg.textContent = '❌ As senhas não coincidem. Tente novamente.';
    }
});