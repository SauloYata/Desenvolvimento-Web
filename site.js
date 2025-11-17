let modalCadastro = document.getElementById("modalCadastro");
let modalLocal = document.getElementById("modalLocal");
let btnCadastrarPet = document.getElementById("btnCadastrarPet");
let btnLocalEncontro = document.getElementById("btnLocalEncontro");
let btnProcurar = document.getElementById("btnProcurar");
let btnEditarPerfil = document.getElementById("btnEditarPerfil");
let btnContateNos = document.getElementById("btnContateNos");
let fecharModal = document.getElementById("fecharModal");
let fecharLocal = document.getElementById("fecharLocal");
let listaPets = document.getElementById("listaPets");
let formPet = document.getElementById("formPet");
let formLocal = document.getElementById("formLocal");
let editIndex = null;

let petNome = document.getElementById("petNome");
let petTipo = document.getElementById("petTipo");
let petIdade = document.getElementById("petIdade");
let petRaca = document.getElementById("petRaca");
let localEncontro = document.getElementById("localEncontro");

let tabs = document.querySelectorAll(".tab");
let pages = document.querySelectorAll(".tab-page");

function mostrarPagina(id) {
    pages.forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";
}

tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(t => t.classList.remove("ativo"));
        tab.classList.add("ativo");
        mostrarPagina(tab.dataset.tab);
    };
});

mostrarPagina("tab1");

btnCadastrarPet.onclick = () => {
    editIndex = null;
    formPet.reset();
    mostrarPagina("tab1");
    tabs.forEach(t => t.classList.remove("ativo"));
    tabs[0].classList.add("ativo");
    modalCadastro.style.display = "flex";
};

btnLocalEncontro.onclick = () => {
    formLocal.reset();
    modalLocal.style.display = "flex";
};

btnProcurar.onclick = () => {
    window.location.href = 'procurar.html';
};

btnEditarPerfil.onclick = () => {
    window.location.href = 'editar_perfil.html';
};

btnContateNos.onclick = () => {
    window.location.href = 'contate_nos.html';
};

fecharModal.onclick = () => modalCadastro.style.display = "none";
fecharLocal.onclick = () => modalLocal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modalCadastro) modalCadastro.style.display = "none";
    if (e.target === modalLocal) modalLocal.style.display = "none";
};

formPet.onsubmit = (e) => {
    e.preventDefault();
    let nome = petNome.value.trim();
    let tipo = petTipo.value;
    let idade = Number(petIdade.value);
    let raca = petRaca.value.trim();
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    let pet = { nome, tipo, idade, raca };
    if (editIndex === null) {
        pets.push(pet);
    } else {
        pets[editIndex] = pet;
        editIndex = null;
    }
    localStorage.setItem("pets", JSON.stringify(pets));
    modalCadastro.style.display = "none";
    carregarPets();
};

formLocal.onsubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("localEncontro", localEncontro.value.trim());
    modalLocal.style.display = "none";
    carregarPets();
};

function carregarPets() {
    listaPets.innerHTML = "";
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    let local = localStorage.getItem("localEncontro") || "Nenhum definido";
    pets.forEach((p, i) => {
        let el = document.createElement("div");
        el.className = "pet-card";
        el.innerHTML = `
            <h3>${p.nome}</h3>
            <p><strong>Tipo:</strong> ${p.tipo}</p>
            <p><strong>Raça:</strong> ${p.raca}</p>
            <p><strong>Idade:</strong> ${p.idade}</p>
            <p><strong>Local:</strong> ${local}</p>
            <button class="btn-editar" data-i="${i}">Editar</button>
            <button class="btn-excluir" data-i="${i}">Excluir</button>
        `;
        listaPets.appendChild(el);
    });
}

listaPets.addEventListener("click", (e) => {
    let btn = e.target;
    if (btn.classList.contains("btn-excluir")) {
        let i = parseInt(btn.dataset.i, 10);
        let pets = JSON.parse(localStorage.getItem("pets")) || [];
        pets.splice(i, 1);
        localStorage.setItem("pets", JSON.stringify(pets));
        carregarPets();
    }
    if (btn.classList.contains("btn-editar")) {
        let i = parseInt(btn.dataset.i, 10);
        let pets = JSON.parse(localStorage.getItem("pets")) || [];
        let p = pets[i];
        petNome.value = p.nome;
        petTipo.value = p.tipo;
        petIdade.value = p.idade;
        petRaca.value = p.raca;
        editIndex = i;
        tabs.forEach(t => t.classList.remove("ativo"));
        tabs[2].classList.add("ativo");
        mostrarPagina("tab3");
        modalCadastro.style.display = "flex";
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const nomeUsuario = localStorage.getItem('nome') || '';
    const bemVindo = document.getElementById('bemVindo');
    bemVindo.textContent = nomeUsuario ? `Bem-vindo, ${nomeUsuario}` : '';
    carregarPets();
});
