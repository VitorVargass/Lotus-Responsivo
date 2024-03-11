    var nome;
    var cpf;
    var cep;
    var email;
    var estado;
    var cidade;

document.addEventListener('DOMContentLoaded', function() {

        nome = document.querySelector('#nome');
        cpf = document.querySelector('#cpf');
        cep = document.querySelector('#cep');
        email = document.querySelector('#email');
        estado = document.querySelector('#estado');
        cidade = document.querySelector('#cidade');
        mensagem = document.querySelector('#mensagem');
        

        var estadosValidos = ["acre", "alagoas", "amapá", "amazonas", "bahia", "ceará", "distrito federal", "espírito santo", "goiás", "maranhão", "mato grosso", "mato grosso do sul", "minas gerais", "pará", "paraíba", "paraná", "pernambuco", "piauí", "rio de janeiro", "rio grande do norte", "rio grande do sul", "rondônia", "roraima", "santa catarina", "são paulo", "sergipe", "tocantins", "amapa", "ceara", "espirito santo", "goias", "maranhao", "para", "paraiba", "parana", "piaui", "rondonia", "sao paulo"];
        
        // mask
        $(function(){
            $('#cpf').mask('000.000.000-00')
            $('#cep').mask('00.000-000')
        });
    
        nome.addEventListener('input', () => {
            if(nome.value.length < 8) {
                nome.style.borderColor = 'red';
            } else {
                nome.style.borderColor = '#00c800';
            }
        });
        cpf.addEventListener('input', () => {
            if (cpf.value.length < 14) {
                cpf.style.borderColor = 'red';
            } else {
                cpf.style.borderColor = '#00c800';
            }
        })
        cep.addEventListener('input', () => {
            if(cep.value.length < 10) {
                cep.style.borderColor = 'red';
            } else {
                cep.style.borderColor = '#00c800';
            }
        })
        email.addEventListener('input', () => {
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.length > 8 && regexEmail.test(email.value)) {
                email.style.borderColor = '#00c800';
            } else {
                email.style.borderColor = 'red';
            }
        })
        estado.addEventListener('input', () => {
            estadoDigitado = estado.value.trim().toLowerCase();

            if(estadosValidos.includes(estadoDigitado)) {
                estado.style.borderColor = '#00c800';
            } else {
                estado.style.borderColor = 'red';
            }
        })
        cidade.addEventListener('input', () => {

            if(cidade.value.length >= 4) {
                cidade.style.borderColor = '#00c800';
            } else {
                cidade.style.borderColor = 'red';
            }
        })
        mensagem.addEventListener('input', () => {
            if(mensagem.value.length >= 30) {
                mensagem.style.borderColor = '#00c800';
            } else {
                mensagem.style.borderColor = 'red';
            }
        })
    });

    

Cadastrar = () => {
    event.preventDefault();
    console.log('funcionando');
    var dadosFormulario = {
        nome: nome.value,
        cpf: cpf.value,
        cep: cep.value,
        email: email.value,
        estado: estado.value,
        cidade: cidade.value,
        mensagem: mensagem.value
      };

      var dadosJSON = JSON.stringify(dadosFormulario);

      localStorage.setItem('dadosFormulario', dadosJSON);
      
      console.log(localStorage.getItem('dadosFormulario'));
}

//console.log(localStorage.getItem('dadosFormulario'));
