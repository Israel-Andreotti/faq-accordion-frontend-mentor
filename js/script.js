const headers = document.querySelectorAll('.accordion-header');

        headers.forEach(header => {
            header.addEventListener('click', function() {
                // Alterna a classe 'active' no botão
                this.classList.toggle('active');

                // Seleciona a imagem dentro do botão
                const img = this.querySelector('.img');

                // Altera o src da imagem baseado na presença da classe 'active'
                if (this.classList.contains('active')) {
                    img.src = './assets/images/icon-minus.svg'; // Imagem quando ativo
                } else {
                    img.src = './assets/images/icon-plus.svg'; // Imagem quando inativo
                }
            });
        }); 