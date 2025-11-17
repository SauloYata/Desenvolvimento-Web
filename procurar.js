const btnVoltar = document.getElementById('btnVoltar');
const btnFiltrar = document.getElementById('btnFiltrar');
const filtroTipo = document.getElementById('filtroTipo');
const filtroRaca = document.getElementById('filtroRaca');
const filtroLocal = document.getElementById('filtroLocal');
const resultado = document.getElementById('resultado');

btnVoltar.onclick = () => {
    window.location.href = 'Site_Tinder_Animais_Domestico.html';
};

function mostrarPets(pets) {
    resultado.innerHTML = '';
    if (pets.length === 0) {
        resultado.innerHTML = '<p>Nenhum pet encontrado.</p>';
        return;
    }
    pets.forEach(p => {
        const el = document.createElement('div');
        el.className = 'pet-card';
        const local = localStorage.getItem('localEncontro') || 'Nenhum definido';
        el.innerHTML = `
            <h3>${p.nome}</h3>
            <p><strong>Tipo:</strong> ${p.tipo}</p>
            <p><strong>Raça:</strong> ${p.raca}</p>
            <p><strong>Idade:</strong> ${p.idade}</p>
            <p><strong>Local:</strong> ${local}</p>
        `;
        resultado.appendChild(el);
    });
}

btnFiltrar.onclick = () => {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    const tipo = filtroTipo.value;
    const raca = filtroRaca.value.trim().toLowerCase();
    const localFiltro = filtroLocal.value.trim().toLowerCase();

    const filtrados = pets.filter(p => {
        const petLocal = (localStorage.getItem('localEncontro') || '').toLowerCase();
        return (tipo === '' || p.tipo === tipo) &&
               (raca === '' || p.raca.toLowerCase().includes(raca)) &&
               (localFiltro === '' || petLocal.includes(localFiltro));
    });

    mostrarPets(filtrados);
};

window.addEventListener('DOMContentLoaded', () => {
    const pets = JSON.parse(localStorage.getItem('pets')) || [];
    mostrarPets(pets);
});