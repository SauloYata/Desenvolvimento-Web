const formEditarPerfil = document.getElementById('formEditarPerfil');
const inputNome = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputData = document.getElementById('data');
const inputSenha = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');
const btnVoltar = document.getElementById('btnVoltar');

const toggleSenha = document.getElementById('toggleSenha');

toggleSenha.addEventListener('click', () => {
    if (inputSenha.type === 'password') {
        inputSenha.type = 'text';
    } else {
        inputSenha.type = 'password';
    }
});

window.addEventListener('DOMContentLoaded', () => {
    inputNome.value = localStorage.getItem('nome') || '';
    inputEmail.value = localStorage.getItem('email') || '';
    
    const dataSalva = localStorage.getItem('data');
    if (dataSalva) {
        const partes = dataSalva.split('/');
        inputData.value = `${partes[2]}-${partes[1]}-${partes[0]}`;
    }

    inputSenha.value = localStorage.getItem('senha') || '';
});

formEditarPerfil.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const data = inputData.value;
    const senha = inputSenha.value;

    if (!nome || !email || !data || !senha) {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Preencha todos os campos.';
        return;
    }

    const partesData = data.split('-');
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('data', dataFormatada);
    localStorage.setItem('senha', senha);

    mensagem.style.color = 'green';
    mensagem.textContent = '✅ Alterações salvas com sucesso!';
});

btnVoltar.addEventListener('click', () => {
    window.location.href = 'Site_Tinder_Animais_Domestico.html';
});