
const open_modal_links = document.querySelectorAll('#open-modal, #open-modal-2');
const close_modal = document.querySelector('#close-modal-verify');
const modal = document.querySelector('#modal-verify');
const fade = document.querySelector('#fade');
// Funcao que anda pelo array, fazendo um ciclo 
const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

open_modal_links.forEach(function (link) {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        toggleModal();
    });
});
close_modal.addEventListener("click", () => toggleModal());

// Fecha o modal com clicks na parte cinza quando ativo
document.addEventListener("click", (event) => {
    if (event.target === fade) {
        toggleModal();
    }
});
// Fecha o modal quando aperta Esc
document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hide")) {
        return;
    } else if (event.key === 'Escape') {
        toggleModal();
    }
})
// Funcao para direcionar para os sites de contraceptivo
function Contraceptivo() {
    
    let EnterButton = document.getElementById('acessar');

    EnterButton.addEventListener("click", () => {
        let age = parseInt(document.getElementById('num-idade').value);
        if (age <= 12) {
            window.alert('Este conteudo não adequado para sua idade')
        } else if (age >= 13) {
            window.location.href = 'contraceptivo.html'
        } else {
            alert('Digite um número válido por favor!')
        }
    })
    // Evento de submit quando for clicado enter
    document.getElementById('num-idade').addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            let age = parseInt(event.target.value);

            if (age <= 12) {
                window.alert('Este conteudo não é adequado para sua idade')
            } else if (age >= 13) {
                window.location.href = 'contraceptivo.html';
            } else {
                alert('Digite um número válido por favor!')
            }
        }
    });
}

// Funcao para direcionar para sites de informativos
function Informativo() {

    
    let EnterButton = document.getElementById('acessar');

    EnterButton.addEventListener("click", () => {
        let age = parseInt(document.getElementById('num-idade').value);
        if (age <= 12) {
            window.location.href = 'inf-crianca.html'
        } else if (age >= 13 && age <= 16) {
            window.location.href = 'inf-jovem.html'
        } else if (age >= 17) {
            window.location.href = 'inf-adulto.html'
        } else {
            alert('Digite um número válido por favor!')
        }
    })
    // Evento de submit quando for clicado Enter
    document.getElementById('num-idade').addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            let age = parseInt(event.target.value);

            if (age <= 12) {
                window.location.href = 'inf-crianca.html';
            } else if (age >= 13 && age <= 16) {
                window.location.href = 'inf-jovem.html';
            } else if (age >= 17) {
                window.location.href = 'inf-adulto.html';
            } else {
                alert('Digite um número válido por favor!')
            }
        }
    });
}