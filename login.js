document.getElementById('form-login').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const msg = document.getElementById('mensagem');

  const emailCadastrado = localStorage.getItem('email');
  const senhaCadastrada = localStorage.getItem('senha');

  if (email === emailCadastrado && senha === senhaCadastrada) {
    msg.style.color = 'green';
    msg.textContent = '✅ Login bem-sucedido! Redirecionando...';

    setTimeout(() => {
      window.location.href = "Site_Tinder_Animais_Domestico.html";
    }, 1000);

  } else {
    msg.style.color = 'red';
    msg.textContent = '❌ E-mail ou senha incorretos. Tente novamente.';
  }
});