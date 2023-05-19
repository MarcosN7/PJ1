window.addEventListener('DOMContentLoaded', (event) => {
    const xingamentoBtn = document.getElementById('xingamentoBtn');
    const audioXingamento = document.getElementById('audioXingamento');
  
    let xingamentos = [
      'sons/o-viado-apertou-o-play.mp3',
      'sons/cala-boca-put4.mp3',
      'sons/tu-e-um-beta.mp3',
      'sons/vai-tomar-sua-cu.mp3',
      'sons/ea-sports-tu-e-gay.mp3',
      'sons/predador01.mp3',
      'sons/site-gay-meme.mp3',
      'sons/tmp2fttqcw1.mp3',
      'sons/vai-toma-no-cu-discord.mp3',
      'sons/voce-ta-fudido-quando-eu-lhe-pegar.mp3',
      'sons/vtmnc-piranha.mp3',
      

      // Adicione mais caminhos de arquivo aqui
    ];
  
    xingamentoBtn.addEventListener('click', () => {
      if (xingamentos.length === 0) {
        // Se todos os áudios foram reproduzidos, não faça nada
        return;
      }
  
      const randomIndex = Math.floor(Math.random() * xingamentos.length);
      const xingamentoSelecionado = xingamentos[randomIndex];
      audioXingamento.src = xingamentoSelecionado;
      audioXingamento.play();
  
      // Remova o áudio selecionado do array xingamentos
      xingamentos.splice(randomIndex, 1);
    });
  });
  