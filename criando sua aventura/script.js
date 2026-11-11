
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {

    button.addEventListener('click', function() {

        // Identifica a etapa atual
        const atual = document.querySelector('.passo.ativo');

        // Identifica a próxima etapa
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // Procura a próxima etapa no HTML
        const proximo = document.getElementById(proximoPasso);

        // Verifica se a etapa existe
        if (atual && proximo) {

            // Esconde a etapa atual
            atual.classList.remove('ativo');

            // Mostra a próxima etapa
            proximo.classList.add('ativo');

        } else {

            console.error('Próxima etapa não encontrada:', proximoPasso);

        }

    });

});