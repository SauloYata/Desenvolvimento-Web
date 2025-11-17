const btnVoltar = document.getElementById('btnVoltar');
const btnEnviar = document.getElementById('btnEnviar');
const nomeContato = document.getElementById('nomeContato');
const emailContato = document.getElementById('emailContato');
const mensagemContato = document.getElementById('mensagemContato');
const mensagemEnvio = document.getElementById('mensagemEnvio');

btnVoltar.onclick = () => {
    window.location.href = 'Site_Tinder_Animais_Domestico.html';
};

btnEnviar.onclick = () => {
    if (!nomeContato.value || !emailContato.value || !mensagemContato.value) {
        mensagemEnvio.style.color = 'red';
        mensagemEnvio.textContent = 'Por favor, preencha todos os campos.';
        return;
    }
    mensagemEnvio.style.color = 'green';
    mensagemEnvio.textContent = 'Mensagem enviada com sucesso!';
    nomeContato.value = '';
    emailContato.value = '';
    mensagemContato.value = '';
};